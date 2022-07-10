import { Serve } from "../lobot.js";

async function TheEventLoop() {
  const Head = await Serve(`Head:html`);
  const Navigation = await Serve(`Navigation:html`);
  const Footer = await Serve(`Footer:html`);
  return `
    ${await Head()}
    ${await Navigation()}
    ${await Footer(`content`)}
  `;
}

export { TheEventLoop };
