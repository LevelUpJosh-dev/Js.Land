import { Serve } from '../../lobot/lobot.js';
import {
    json,
    Router,
    serveStatic,
} from 'https://deno.land/x/opine@2.2.0/mod.ts';
import * as diff from 'https://deno.land/x/microdiff@v1.3.0/index.ts';

/**
 * @name ToolsRouter
 * @type {Router}
 */
const ToolsRouter = Router();

ToolsRouter.use(json());
ToolsRouter.use(serveStatic(`public`));

/**
 * @route GET /tools
 */
ToolsRouter.get(`/`, async (request, response) => {
    const body = await Serve(`Tools:html`);
    response.body = await body();
    response.send();
});

/**
 * @route GET /tools/compare
 */
ToolsRouter.get(`/compare`, async (request, response) => {
    const body = await Serve(`Compare:html`);
    response.body = await body();
    response.send();
});

/**
 * @route POST /tools/compare
 */
ToolsRouter.post(`/compare`, (request, response) => {
    const compare = diff.default;
    const cleanAlpha = request.body.alpha.replace(/ /g,'');
    const cleanBeta = request.body.beta.replace(/ /g,'');
    const alphaArray = cleanAlpha.split(`\n`);
    const betaArray = cleanBeta.split(`\n`);
    const result = compare(alphaArray, betaArray);
    response.json(result);
});

export default ToolsRouter;
