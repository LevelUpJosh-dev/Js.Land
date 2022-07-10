import { opine, serveStatic } from "https://deno.land/x/opine@2.2.0/mod.ts";

const server = opine();

import { Serve } from "./lobot/lobot.js";

server.use(serveStatic(`public`));

server.get(`/`, async (request, response) => {
  const body = await Serve(`Home:html`);
  response.body = await body();
  response.send();
});

server.get(`/content`, async (request, response) => {
  const body =  await Serve(`ContentGrid:html`);
  response.body = await body();
  response.send();
});

server.get(`/content/:id`, async (request, response) => {
  const contentId = request.params.id;
  const content = await Serve(`${contentId}:html`);
  const body = await content();
  response.send(body)
});

server.listen(3000);
console.log(`Website running on port 3000`);
