import "reflect-metadata";
import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "mysql",
  url: process.env.DATABASE_URL, // Use environment variables for production
  synchronize: false, // NEVER use true in production
  logging: true,
  entities: ["src/entity/**/*.ts"], // Path to your entities
  migrations: ["src/migration/**/*.ts"], // Path to migrations
  subscribers: ["src/subscriber/**/*.ts"], // Path to subscribers (optional)
});

export default AppDataSource;
