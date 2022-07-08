import { opine, serveStatic } from "https://deno.land/x/opine@2.2.0/mod.ts";

const server = opine();

import { Home } from "./lobot/pages/home.js";

server.use(serveStatic(`public`));

server.get(`/`, async (request, response) => {
  response.body = await Home();
  response.send();
});

server.listen(3000);
console.log(`Website running on port 3000`);
