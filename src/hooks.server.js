import helmet from "sveltekit-helmet";
import { randomBytes } from "crypto"

export const handle = helmet({
    strictTransportSecurity: {
        maxAge: 63072000,
        preload: true,
    },
    contentSecurityPolicy: {
        directives: {
            "script-src": ["'self'", `'nonce-${randomBytes(32).toString("hex")}'`]
        }
    }
});