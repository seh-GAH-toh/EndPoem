import type { Actions } from './$types';

export const actions = {
	default: async (event) => {
        
        const name = (await event.request.formData()).get("name");
        const {country, region } = await event.platform.cf;

        const response = await fetch(import.meta.env.DISCORD_WEBHOOK, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              content: `${name} - ${region}, ${country}`,
            }),
          });
	}
} satisfies Actions;