export default ({ env }) => ({
  proxy: true,
  url: env("APP_URL"), // Sets the public URL of the application.
  host: "0.0.0.0",
  port: env.int("PORT", process.env.PORT || 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
