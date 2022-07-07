
async function Sherlock () {
    return await Deno.readTextFile("./helpers/Sherlock.js");
}

async function BootstrapCustomJs () {
    return await Deno.readTextFile("./helpers/BootstrapCustom.js");
}

async function Bootstrap () {
    return await Deno.readTextFile("./helpers/Bootstrap.css");
}

async function TeamGridCss() {
  return await Deno.readTextFile("./helpers/TeamGrid.css");
}

async function JavaScriptCss() {
  return await Deno.readTextFile("./helpers/JavaScript.css");
}


async function Serve(resource) {
  try {
    resource = resource.toLowerCase();
    if (resource === "sherlock:js") {
      return `<script>${await Sherlock()}</script>`;
    }
    if (resource === "bootstrap:css") {
      return `<style>${await BootstrapCss()}</style>`;
    }
    if (resource === "bootstrap:js") {
      return `<script>${await BootstrapJs()}</script>`;
    }
    if (resource === "bootstrapcustom:js") {
      return `<script>${await BootstrapCustomJs()}</script>`;
    }
    if (resource === "teamgrid:css") {
      return `<style>${await TeamGridCss()}</style>`;
    }
    if (resource === "javascript:css") {
      return `<style>${await JavaScriptCss()}</style>`;
    }
  } catch (error) {
    console.error(error);
  }
}

export { Serve };