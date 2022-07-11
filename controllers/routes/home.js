import { Serve } from "../../lobot/lobot.js";

function Home(server, route) {
  server.get(`/`, async (request, response) => {
    const body = await Serve(`Home:html`);
    response.body = await body();
    response.send();
  });
}

export { Home };
