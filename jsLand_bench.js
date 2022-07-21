import { opine } from 'https://deno.land/x/opine@2.2.0/mod.ts';
import { Content, Home, Tools } from './routing/routerBundle.js';
import { LoadGlobals } from './lobot/lobot.js';
import { Serve } from './lobot/lobot.js';

const server = opine();

Deno.bench('load_globals', async () => {
    return await LoadGlobals();
});

Deno.bench('content_router', async () => {
    server.use('/content', Content);
});

Deno.bench('home_router', async () => {
    server.use('/', Home);
});

Deno.bench('tools_router', async () => {
    server.use('/tools', Tools);
});

Deno.bench('home_template', async () => {
    const body = await Serve('Home:html');
    return body();
});

Deno.bench('tools_template', async () => {
    const body = await Serve('Tools:html');
    return body();
});

Deno.bench('head_template', async () => {
    const body = await Serve('Head:html');
    return body();
});

Deno.bench('footer_template', async () => {
    const body = await Serve('Footer:html');
    return body();
});

Deno.bench('navigation_template', async () => {
    const body = await Serve('Navigation:html');
    return body();
});
