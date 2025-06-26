import adapter from '@sveltejs/adapter-cloudflare';

const config = {
    kit: {
        adapter: adapter(),
        csrf: {
            checkOrigin: false // fuck you svelte
        }
    }
};

export default config;
