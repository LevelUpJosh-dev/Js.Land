import { opine } from "https://deno.land/x/opine@2.2.0/mod.ts";
import { Content, Home } from "./routing/routerBundle.js";

const server = opine();

Deno.bench("content-router", async () => {
  server.use("/content", Content);
});

Deno.bench("home-router", async () => {
  server.use("/", Home);
});
