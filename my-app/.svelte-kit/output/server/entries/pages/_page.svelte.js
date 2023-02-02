import { c as create_ssr_component, e as escape } from "../../chunks/index.js";
import { b as base } from "../../chunks/shared.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1>sveltekit-gh-pages</h1>
<p>Deployed to GitHub Pages</p>
<p>Visit <a href="${"https://kit.svelte.dev"}">kit.svelte.dev</a> to read the documentation
</p>
<a href="${escape(base, true) + "/about"}">About</a>`;
});
export {
  Page as default
};
