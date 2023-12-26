
export default ({ env }) => ({
    connection: {
      client: "postgres",
      connection: {
        host: env("DATABASE_HOST", "127.0.0.1"),
        port: env("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "mydatabase"),
        user: env("DATABASE_USERNAME", "myuser"),
        password: env("DATABASE_PASSWORD", ""),
        ssl: env.bool("DATABASE_SSL", false),
      },
      useNullAsDefault: true,
    },
  });