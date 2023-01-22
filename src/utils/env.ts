import { config } from "dotenv";

config();

export const protocol = String(process.env.PROTOCOL) || "http";
export const hostname = String(process.env.HOSTNAME) || "127.0.0.1";
export const port = Number(process.env.PORT) || 8080;
