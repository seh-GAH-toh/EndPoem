import type { Actions } from './$types';
import { NAME_WEBHOOK, EMAIL_WEBHOOK } from '$env/static/private';
import { is, email, pipe, string } from 'valibot';
import poem from "$lib/poem.json";

const EmailSchema = pipe(string(), email());

export const actions = {
  default: async (event) => {
    // Get request origin
    const { country, region } = await event.platform.cf;

    const playerName = (await event.request.formData()).get("name");

    // Check if is a email and update webhook path
    const requestPath = is(EmailSchema, playerName) ? EMAIL_WEBHOOK : NAME_WEBHOOK;

    // Log on discord
    await fetch(requestPath, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: `${playerName} - ${region}, ${country}`,
      }),
    });

    return poem.map(e => ({
      ...e,
      phrase: e.phrase.replace(/<name>/g, playerName)
    }));
  }
} satisfies Actions;