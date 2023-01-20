import express, { Response, Request, Express, urlencoded, json } from "express";
import dotenv from "dotenv";
import cors from "cors";
import compression from "compression";
import helmet from "helmet";

dotenv.config();

const app: Express = express();

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(urlencoded({ extended: false }));
app.use(json());

app.disable("X-Powered-By");

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ ping: "pong" });
});

const port = Number(process.env.PORT) || 8000;
const hostname = String(process.env.HOSTNAME);

export const server = app.listen(port, hostname, () => {
  console.log(`Server started at http://${hostname}:${port}`);
});
