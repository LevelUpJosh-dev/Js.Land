import { Serve } from "../lobot.js";

async function Head() {
  return `
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="Js.Lands mission is to educate and inspire developers everywhere." />
        <meta name="author" content="JsLandJosh aka RedVanJosh" />
        <link rel="preload" href="fonts/MonoLisa-Regular.woff2" as="font" type="font/woff2" crossorigin>
        <title>Js.Land</title>
        <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
        ${await Serve(`bootstrap:css`)}
        ${await Serve(`theme:css`)}
        ${await Serve(`theme:js`)}
    </head>
  `;
}

export { Head };
