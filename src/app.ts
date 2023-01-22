import express, { Response, Request, Express, urlencoded, json } from "express";
import cors from "cors";
import compression from "compression";
import helmet from "helmet";
import swagger from "./utils/swagger";
import { protocol, port, hostname } from "./utils/env";
import { serve, setup } from "swagger-ui-express";

const app: Express = express();

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(urlencoded({ extended: false }));
app.use(json());
app.use("/api-docs", serve, setup(swagger));

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ ping: "pong" });
});

export const server = app.listen(port, hostname, () => {
  console.log(`Server started at ${protocol}://${hostname}:${port}`);
});
