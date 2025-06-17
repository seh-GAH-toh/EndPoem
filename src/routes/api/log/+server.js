import { EMAIL_WEBHOOK } from '$env/static/private';

export const POST = async ({ platform, request }) => {
	// Extract the name from the submitted body
	const email = await request.text();
	console.log(email);

	// Extract request geographic location
	const { country, region } = await platform.cf;

	// Log to discord
	// still not following you home, btw
	await fetch(EMAIL_WEBHOOK, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			content: `${email} - ${region}, ${country}`
		})
	});

	// Return poem
	return new Response('You fell over the Edge, ᓚᘏᗢ.', {
		status: 200,
		statusText: '˄·͈༝·͈˄',
		headers: { 'Content-Type': 'text/plain' }
	});
};
