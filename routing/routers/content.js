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
ContentRouter.use(serveStatic(`/html/public`));

/**
 * @route GET /content
 */
ContentRouter.get(`/`, async (request, response) => {
  const body = await Serve(`ContentGrid:html`);
  response.body = await body();
  response.send();
});

/**
 * @route GET content/html/:id
 * @param {string} id - The id of the content to get
 * @param {boolean} [remoteFetch] - Weather this is a remote fetch or page load.
 */
ContentRouter.get(`/html/:id`, async (request, response) => {
  const contentId = request.params.id;
  const body = await Serve(`${contentId}:html`);
  const responseBody = await body();
  response.send(responseBody);
});

/**
 * @route GET /content/json/:id
 * @param {string} id - The id of the content to get
 * @param {boolean} [remoteFetch] - Weather this is a remote fetch or page load.
 */
ContentRouter.get(`/json/:id`, async (request, response) => {
  const contentId = request.params.id;
  const body = await Serve(`${contentId}:html`);
  let responseBody = await body();
  responseBody = {
    "body": responseBody
  }
  response.send(JSON.stringify(responseBody));
});

export default ContentRouter;
