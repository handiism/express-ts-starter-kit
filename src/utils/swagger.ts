import { readFileSync } from "fs";
import { render } from "mustache";
import { parse } from "yaml";
import { protocol, hostname, port } from "./env";

const path = "./api-spec.yml";
const file = readFileSync(path, "utf8");

const url =
  process.env.NODE_ENV === "production"
    ? `${protocol}://${hostname}`
    : `${protocol}://${hostname}:${port}`;

const rendered = render(file, { url });
const swagger = parse(rendered);

export default swagger;
