import { Serve } from '../../lobot.js';

/**
 * @type {Head}
 * @param {Object} [options] - Options object can be used to pass in context data to affect the template based on where the call is occurring.
 * @returns {Promise<string>} - Returns a promise that resolves to the HTML string.
 * @constructor
 */

async function Head(options) {
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
