import { Serve } from '../../lobot/lobot.js';
import {
    json,
    Router,
    serveStatic,
} from 'https://deno.land/x/opine@2.2.0/mod.ts';

/**
 * @name Home
 * @type {Router}
 */
const HomeRouter = Router();

HomeRouter.use(json());
HomeRouter.use(serveStatic(`public`));

/**
 * @route GET /
 */
HomeRouter.get(`/`, async (request, response) => {
    const body = await Serve(`Home:html`);
    response.body = await body();
    response.send();
});

export default HomeRouter;
