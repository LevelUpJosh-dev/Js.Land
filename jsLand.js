import { opine } from 'https://deno.land/x/opine@2.2.0/mod.ts';
import { LoadGlobals } from './lobot/lobot.js';

const server = opine();
await LoadGlobals();

import { Content, Home } from './routing/routerBundle.js';
server.use('/content', Content);
server.use('/', Home);

server.listen(3000);
console.log(`JsLand is running on port 3000`);
