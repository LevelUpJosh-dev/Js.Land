import { Serve } from '../../lobot/lobot.js';
import { serveStatic } from 'https://deno.land/x/opine@2.2.0/src/middleware/serveStatic.ts';

function Content(Router) {
    const ContentRouter = Router();

    ContentRouter.use(`/content`, serveStatic(`public`));

    ContentRouter.get(`/content`, async (request, response) => {
        const body = await Serve(`ContentGrid:html`);
        response.body = await body();
        response.send();
    });

    ContentRouter.get(`/content/:id`, async (request, response) => {
        const body = request.body;
        const content = await Serve(`${request.params.id}:html`);
        const responseBody = await content();
        response.json(JSON.stringify({ 'body': responseBody }));
    });
}

export { Content };
