import adapter from '@sveltejs/adapter-cloudflare';

const config = {
    kit: {
        adapter: adapter(), csp: {
            mode: "nonce",
            directives: { "script-src": ["self"] }
        }
    }
};

export default config;
