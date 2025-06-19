import adapter from '@sveltejs/adapter-cloudflare';

const config = {
    kit: {
        adapter: adapter(), csp: {
            mode: "nounce",
            directives: { "script-src": ["self"] }
        }
    }
};

export default config;
