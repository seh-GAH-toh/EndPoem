export default eventHandler(async (event) => {
  try {
    // Retrieve the Discord webhook URL from runtime configuration
    const { discord } = useRuntimeConfig().webhooks;

    // Extract the 'name' property from request body
    const { name } = await readBody(event);

    // Abort if 'name' is empty or not provided
    if (!name || name.length === 0)
      throw createError({
        message: "Please enter a valid name.",
        statusCode: 400,
      });

    // Send 'name' to the Discord webhook
    const response = await fetch(discord, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: `${name}`,
      }),
    });

    // Check if the response indicates an error
    if (!response.ok) {
      throw new Error("Failed to submit name to Discord webhook");
    }

    // Return a success message
    return {
      message: "Name successfully submitted",
    };
  } catch (error) {
    // If an error occurs during execution, return it
    return {
      error: {
        message: error.message || "Internal Server Error",
        statusCode: error.statusCode || 500,
      },
    };
  }
});
