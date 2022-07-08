async function Sherlock() {
  return await Deno.readTextFile("./helpers/Sherlock.js");
}

async function BootstrapCss() {
  return await Deno.readTextFile("./helpers/Bootstrap.css");
}

async function BootstrapJs() {
  return await Deno.readTextFile("./helpers/Bootstrap.js");
}

async function BootstrapCustomJs() {
  return await Deno.readTextFile("./helpers/BootstrapCustom.js");
}

async function Serve(resource) {
  if (resource === "Sherlock") {
    return `<script>${await Sherlock()}</script>`;
  }
  if (resource === "BootstrapCss") {
    return `<style>${await BootstrapCss()}</style>`;
  }
  if (resource === "BootstrapJs") {
    return `<script>${await BootstrapJs()}</script>`;
  }
  if (resource === "BootstrapCustomJs") {
    return `<script>${await BootstrapCustomJs()}</script>`;
  }
}

export { Serve };
