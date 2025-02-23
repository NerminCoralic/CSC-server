export default ({ env }) => ({
  upload: {
    config: {
      provider: "strapi-provider-upload-supabase",
      providerOptions: {
        apiUrl: env("SUPABASE_URL"),
        apiKey: env("SUPABASE_API_KEY"),
        bucket: env("SUPABASE_STORAGE_BUCKET"),
        options: {
          useUploadStream: false,
          path: env("SUPABASE_STORAGE_FOLDER"), // Postavlja podfolder "files"
          publicUrl: `${env("SUPABASE_URL")}/storage/v1/object/public/${env("SUPABASE_STORAGE_BUCKET")}/${env("SUPABASE_STORAGE_FOLDER")}`,
        },
      },
    },
  },
});
