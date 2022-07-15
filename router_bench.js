
import { opine } from 'https://deno.land/x/opine@2.2.0/mod.ts';
import { Content, Home } from './routing/routerBundle.js';
import { instantiate } from "./wasm/lib/rs_lib.generated.js";

const server = opine();

Deno.bench('content-router', async () => {
  server.use('/content', Content);
});

Deno.bench('home-router', async () => {
  server.use('/', Home);
});

Deno.bench('rust-functions', async () => {
  const { add } = await instantiate();
    return add(1, 2);
});

