import {
  json,
  opine,
  serveStatic,
} from "https://deno.land/x/opine@2.2.0/mod.ts";

const server = opine();

server.use(serveStatic(`public`));
server.use(json());

import { Content, Home } from "./controllers/controllers.js";

/** Register Controller Routes **/
Home(server);
Content(server);

server.listen(3000);
console.log(`JsLand is running on port 3000`);
