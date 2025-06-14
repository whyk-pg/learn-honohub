import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { createHub } from "honohub";
import hubConfig from "../hub.config";

const app = new Hono().route("/", createHub(hubConfig));

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  },
);
