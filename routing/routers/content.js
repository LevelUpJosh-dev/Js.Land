import { Serve } from "../../lobot/lobot.js";
import {
  json,
  Router,
  serveStatic,
} from "https://deno.land/x/opine@2.2.0/mod.ts";

/**
 * @name Content
 * @type {Router}
 */
const ContentRouter = Router();

ContentRouter.use(json());
ContentRouter.use(serveStatic(`public`));

/**
 * @route GET /content
 */
ContentRouter.get(`/`, async (request, response) => {
  const body = await Serve(`ContentGrid:html`);
  response.body = await body();
  response.send();
});

/**
 * @route GET /content/:id
 * @param {string} id - The id of the content to get
 */
ContentRouter.get(`/:id`, async (request, response) => {
  const body = await Serve(`${request.params.id}:html`);
  response.body = await body();
  response.send();
});

/**
 * @route GET /content/:id/:section
 * @param {string} id - The id of the content to get
 * @param {string} section - The section of the content to get
 */
ContentRouter.get(`/:id/:section`, async (request, response) => {
  const body = await Serve(`${request.params.id}:html`);
  const responseBody = await body();
  response.json(JSON.stringify({ "body": responseBody }));
});

export default ContentRouter;
