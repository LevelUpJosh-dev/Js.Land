import {
  ContentGrid,
  Footer,
  Head,
  Home,
  LearnHtml,
  Navigation,
  TheEventLoop,
} from "./fragments.js";

const fragmentBundle = {
  ContentGrid: ContentGrid,
  Home: Home,
  Head: Head,
  Footer: Footer,
  Navigation: Navigation,
  TheEventLoop: TheEventLoop,
  LearnHtml: LearnHtml,
};

/** Reads and returns the text content of the given resource **/
async function LoadResource(name, type) {
  const lobotResourcePath = `lobot/resources/${type}/${name}.${type}`;

  return (type === `css`)
    ? `<style>${await Deno.readTextFile(lobotResourcePath)}</style>`
    : (type === `js`)
    ? `<script>${await Deno.readTextFile(lobotResourcePath)}</script>`
    : (type === `txt`)
    ? `<p>${await Deno.readTextFile(lobotResourcePath)}</p>`
    : (type === `json`)
    ? await Deno.readTextFile(lobotResourcePath)
    : null;
}

async function Serve(resource, config) {
  const name = resource.split(`:`)[0];
  const type = resource.split(`:`)[1];
  if (type === `css` || type === `js` || type === `txt`) {
    return await LoadResource(name, type);
  }
  if (type === `html`) {
    return fragmentBundle[name];
  }
}

async function LoadGlobals() {
  window.Head = await Serve(`Head:html`);
  window.Footer = await Serve(`Footer:html`);
  window.Navigation = await Serve(`Navigation:html`);
}

export { LoadGlobals, Serve };
