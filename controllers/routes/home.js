import { Serve } from '../../lobot/lobot.js';
import { serveStatic, json } from 'https://deno.land/x/opine@2.2.0/mod.ts';

function Home(Router) {
    const HomeRouter = Router();

    HomeRouter.use(json)
    HomeRouter.use(serveStatic(`public`));

    HomeRouter.get(`/`, async (request, response) => {
        const body = await Serve(`Home:html`);
        response.body = await body();
        response.send();
    });
}

export { Home };
