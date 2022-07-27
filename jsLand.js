import { opine } from 'https://deno.land/x/opine@2.2.0/mod.ts';
import { LoadGlobals } from './lobot/lobot.js';

const server = opine();
await LoadGlobals();

import { Content, Home, Tools } from './routing/routerBundle.js';
import { ServerPipe, ClientPipe } from './lobot/greenPipe.ts';

const WebSocketServer = ServerPipe();
const WebSocketClient = ClientPipe(WebSocketServer);

server.use('/', Home);
server.use('/content', Content);
server.use('/tools', Tools);

server.listen(3000);
console.log(`JsLand is running on port 3000`);
