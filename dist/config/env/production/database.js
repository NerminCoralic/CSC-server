"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// path: /config/env/production/database.ts
exports.default = ({ env }) => ({
    connection: {
        client: "postgres",
        connection: {
            host: env("PGHOST", "127.0.0.1"),
            port: env.int("PGPORT", 5432),
            database: env("PGDATABASE", "strapi"),
            user: env("PGUSER", "strapi"),
            password: env("PGPASSWORD", "password"),
            ssl: env.bool(true),
        },
        pool: { min: 0 },
    },
});
