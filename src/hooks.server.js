const securityHeaders = {
    "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload"
}


export async function handle({ event, resolve }) {
    const response = await resolve(event);

    Object.entries(securityHeaders).forEach(
        ([header, value]) => response.headers.set(header, value)
    );

    return response;
}