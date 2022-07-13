import {
    opine,
    Router,
} from 'https://deno.land/x/opine@2.2.0/mod.ts';


const server = opine();

import { Content, Home } from './controllers/controllers.js';

/** Register Controller Routes **/
Home(Router);
Content(Router);

server.listen(3000);
console.log(`JsLand is running on port 3000`);
