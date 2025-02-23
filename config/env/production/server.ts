export default ({ env }) => ({
  proxy: true,
  url: env("APP_URL"), // Railway javni URL
  host: "0.0.0.0",
  port: env.int("PORT", process.env.PORT), // Railway PORT, ne 1337!
  app: {
    keys: env.array("APP_KEYS"),
  },
});
