// Return a success message indicating the service is online
export default eventHandler(() => {
  return { message: "up" };
});
