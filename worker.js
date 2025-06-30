export default {
    async fetch(request) {
        return fetch('https://theendpoem.com/api/poem', {
            method: request.method,
            headers: request.headers,
            body: request.body
        });
    }
}