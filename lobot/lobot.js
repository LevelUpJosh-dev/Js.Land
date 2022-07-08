import { exists} from "https://deno.land/std/fs/mod.ts";
import { HtmlHead } from "../components/head.js";

const componentBundle = {
    HtmlHead: HtmlHead,
}

async function LoadResource (name, type) {
  const lobotResourcePath = `lobot/resources/${name}.${type}`;
  const islobotResource = await exists(lobotResourcePath);
  if (islobotResource) {
    return "css" ? `<style>${await Deno.readTextFile(lobotResourcePath)}</style>` : `<script>${await Deno.readTextFile(lobotResourcePath)}</script>`;
  }
}

async function LoadComponent () {
  return componentBundle
}

async function Serve(resource) {
  const name = resource.split(":")[0];
  const type = resource.split(":")[1];
  if (type === "css" || type === "js") {
    return await LoadResource(name, type);
  } else {
    return await LoadComponent(name);
  }
}

export { Serve };
