export default {
    async fetch(request) {
        const url = new URL(request.url);
        const target = 'https://theendpoem.com/api/poem';

        return fetch(target, {
            method: request.method,
            headers: request.headers,
            body: request.body
        });
    }
}