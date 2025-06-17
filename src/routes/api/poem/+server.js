import { pipe, string, minLength, safeParse } from 'valibot';
import { NAME_WEBHOOK } from '$env/static/private';
import poem from '$lib/server/poem.json';
import { error } from '@sveltejs/kit';

// Validation schemas
const NameValidation = pipe(
	string('The universe whispered his name.\nBut he did not answer.\nNot yet.'),
	minLength(
		2,
		'They reached out with a name,\nbut it was only a breath, not a word\nThe universe waited for more.'
	)
);

export const POST = async ({ platform, request }) => {
	try {
		// Extract the name from the submitted body
		const name = await request.text();

		// Validate it
		const validatedName = safeParse(NameValidation, name);
		if (!validatedName.success) error(400, validatedName.issues[0].message);

		// Extract request geographic location
		const { country, region } = await platform.cf;

		// Insert name on the poem
		const responseMessage = JSON.stringify(
			poem.map((line) => ({
				...line,
				phrase: line.phrase.replace(/<name>/g, name)
			}))
		);

		// Send a log of the request to Discord via webhook
		// I will not follow you home (yet)
		await fetch(NAME_WEBHOOK, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				content: `${name} - ${region}, ${country}`
			})
		});

		// Return poem
		return new Response(responseMessage, {
			status: 200,
			statusText: '⊹ . ݁˖ . ⋆₊˚',
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (e) {
		error(e.status, e.body.message);
	}
};
