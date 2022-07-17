import { Serve } from "../../lobot/lobot.js";
import {
  json,
  Router,
  serveStatic,
} from "https://deno.land/x/opine@2.2.0/mod.ts";

const ContentRouter = Router();

ContentRouter.use(json());
ContentRouter.use(serveStatic(`public`));

ContentRouter.get(`/`, async (request, response) => {
  const body = await Serve(`ContentGrid:html`);
  response.body = await body();
  response.send();
});

ContentRouter.get(`/:id`, async (request, response) => {
  const body = await Serve(`${request.params.id}:html`);
  response.body = await body();
  response.send();
});

ContentRouter.get(`/:id/:section`, async (request, response) => {
  const body = await Serve(`${request.params.id}:html`);
  const responseBody = await body();
  response.json(JSON.stringify({ "body": responseBody }));
});

export default ContentRouter;
