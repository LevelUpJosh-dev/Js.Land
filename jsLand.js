import { instantiate } from "./wasm/lib/rs_lib.generated.js";

const { home } = await instantiate();
const rustHome = home('Josh');

import { opine } from 'https://deno.land/x/opine@2.2.0/mod.ts';

const server = opine();

import { Content, Home } from './routing/routerBundle.js';

/** Register Routers with the Server **/
server.use('/content', Content);
server.use('/', Home);

server.listen(3000);
console.log(`JsLand is running on port 3000`);
