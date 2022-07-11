import {
  json,
  opine,
  serveStatic,
} from "https://deno.land/x/opine@2.2.0/mod.ts";

const server = opine();

import { Serve } from "./lobot/lobot.js";

server.use(serveStatic(`public`));
server.use(json());

server.get(`/`, async (request, response) => {
  const body = await Serve(`Home:html`);
  response.body = await body();
  response.send();
});

server.get(`/content`, async (request, response) => {
  const body = await Serve(`ContentGrid:html`);
  response.body = await body();
  response.send();
});

server.get(`/content/:id`, async (request, response) => {
  const body = request.body;
  const content = await Serve(`${request.params.id}:html`);
  const responseBody = await content();
  response.json(JSON.stringify({ "body": responseBody }));
});

server.listen(3000);
console.log(`Website running on port 3000`);
