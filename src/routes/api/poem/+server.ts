import { is, email, pipe, string, minLength, safeParse } from 'valibot';
import { NAME_WEBHOOK, EMAIL_WEBHOOK } from '$env/static/private';
import type { RequestHandler } from '../$types';
import poem from "$lib/server/poem.json";
import { error } from '@sveltejs/kit';


// Validation schemas
const NameValidation = pipe(
  string("The universe whispered his name.\nBut he did not answer.\nNot yet."),
  minLength(2, "They reached out with a name,\nbut it was only a breath, not a word\nThe universe waited for more.")
);
const EmailValidation = pipe(string(), email());

export const POST: RequestHandler = async ({ platform, request }) => {
  try {
    // Extract the name from the submitted body
    const name = await request.text();

    // Validate it
    const validatedName = safeParse(NameValidation, name);
    if (!validatedName.success) error(400, validatedName.issues[0].message);

    // Extract request geographic location
    const { country, region } = await platform.cf;

    // Assume it's an email (less expensive to run)
    let webhookUrl = EMAIL_WEBHOOK;
    let responseMessage = "https://catpedia.wiki/images/b/be/Guhhh.jpeg";
    let headers = {
      'content-type': 'text/plain'
    }

    // If the input is not a email, treat it as a name
    if (!is(EmailValidation, name)) {
      webhookUrl = NAME_WEBHOOK;
      headers['content-type'] = "application/json";

      // Insert input on the poem
      responseMessage = JSON.stringify(
        poem.map((line) => ({
          ...line,
          phrase: line.phrase.replace(/<name>/g, name),
        }))
      );
    }

    // Send a log of the request to Discord via webhook
    // I will not follow you home (yet)
    await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: `${name} - ${region}, ${country}`,
      }),
    });

    // Return poem (or silly cat)
    return new Response(responseMessage, {
      status: 200,
      statusText: "⊹ . ݁˖ . ⋆₊˚",
      headers
    });
  } catch (e) {
    if (e.message) error(400, "Name doko?")
    else error(e.status, e.body.message)
  }


}
