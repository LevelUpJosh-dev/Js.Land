import { Serve } from '../../lobot/lobot.js';
import {
    json,
    Router,
    serveStatic,
} from 'https://deno.land/x/opine@2.2.0/mod.ts';

/**
 * @name ToolsRouter
 * @type {Router}
 */
const ToolsRouter = Router();

ToolsRouter.use(json());
ToolsRouter.use(serveStatic(`public`));

/**
 * @route GET /
 */
ToolsRouter.get(`/`, async (request, response) => {
    const body = await Serve(`Tools:html`);
    response.body = await body();
    response.send();
});

export default ToolsRouter;
