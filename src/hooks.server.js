import helmet from "sveltekit-helmet";

export const handle = helmet({
    strictTransportSecurity: {
        maxAge: 63072000,
        preload: true,
    },
    contentSecurityPolicy: {
        directives: {
            "script-src": ["'self'", "'https://theendpoem.com'"]
        }
    }
});