export default defineEventHandler(async (event) => {
  try {
    const runtimeConfig = useRuntimeConfig();
    const body = await readBody(event);

    if (body.name.length === 0) throw new Error("Name cannot be empty");

    fetch(runtimeConfig.discordWebhook, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: `${body.name}`,
      }),
    });

    return {
      message: "ok",
    };
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    });
  }
});
