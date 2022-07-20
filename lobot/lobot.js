import {
    ContentGrid,
    Footer,
    Head,
    Home,
    LearnHtml,
    Navigation,
    TheEventLoop,
    Tools,
} from './fragments.js';

const fragmentBundle = {
    ContentGrid: ContentGrid,
    Tools: Tools,
    Home: Home,
    Head: Head,
    Footer: Footer,
    Navigation: Navigation,
    TheEventLoop: TheEventLoop,
    LearnHtml: LearnHtml,
};

/**
 * @type {LoadResource}
 * @param name {string} - The name of the resource to load.
 * @param type {string} - The type of resource to load supports (CSS, JS, HTML, TXT, JSON).
 * @returns {Promise<string|null>} - Either the string content of the resource or null if a file type match is not found.
 * @constructor
 */
async function LoadResource(name, type) {
    const lobotResourcePath = `lobot/resources/${type}/${name}.${type}`;

    try {
        return (type === `css`)
            ? `<style>${await Deno.readTextFile(lobotResourcePath)}</style>`
            : (type === `js`)
            ? `<script>${await Deno.readTextFile(lobotResourcePath)}</script>`
            : (type === `txt`)
            ? `<p>${await Deno.readTextFile(lobotResourcePath)}</p>`
            : (type === `json`)
            ? await Deno.readTextFile(lobotResourcePath)
            : null;
    } catch (error) {
        console.error(error);
        return null;
    }
}

/**
 * @type {Serve}
 * @param {string} resource - The resource name and file extension to serve.
 * @param {Object} [config] - A configuration object to define additional resource parameters.
 * @returns {Promise<string|function|null>}
 * @constructor
 */

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

/**
 * @type {LoadGlobals}
 * @returns {Promise<void>} - Returns nothing but a promise that resolves when the fragment functions are loaded.
 * @constructor
 */
async function LoadGlobals() {
    window.Head = await Serve(`Head:html`);
    window.Footer = await Serve(`Footer:html`);
    window.Navigation = await Serve(`Navigation:html`);
}

export { LoadGlobals, Serve };
