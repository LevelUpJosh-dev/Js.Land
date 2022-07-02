
async function Sherlock () {
    return await Deno.readTextFile("./helpers/Sherlock.js");
}

async function BootstrapCustomJs () {
    return await Deno.readTextFile("./helpers/BootstrapCustom.js");
}

async function Bootstrap () {
    return await Deno.readTextFile("./helpers/Bootstrap.css");
}

async function Serve (resource) {
    if (resource === "Sherlock") {
        return await Sherlock();
    }
    if (resource === "Bootstrap") {
        return await Bootstrap();
    }
    if (resource === "BootstrapCustomJs") {
        return await BootstrapCustomJs();
    }
}

export { Serve };