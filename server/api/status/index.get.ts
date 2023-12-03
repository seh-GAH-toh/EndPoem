export default defineEventHandler(async (event) => {
  try {
    return {
      message: "online",
    };
  } catch (error) {
    return error;
  }
});
