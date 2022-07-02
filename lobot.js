
async function Sherlock () {
    const Sherlock = await Deno.readTextFile("./helpers/Sherlock.js");
    return Sherlock;
}

async function Serve (resource) {
    if (resource === "Sherlock") {
        return await Sherlock();
    }
}

export { Serve };