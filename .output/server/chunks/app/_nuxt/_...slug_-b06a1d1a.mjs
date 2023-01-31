import _sfc_main$1 from './ContentDoc-23b23712.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import './app.config-0c6b6aab.mjs';
import 'ufo';
import 'hookable';
import 'unctx';
import 'h3';
import './composables-6e882099.mjs';
import './ContentRenderer-5ddf01d3.mjs';
import './ContentRendererMarkdown-9c907d42.mjs';
import 'destr';
import 'scule';
import 'property-information';
import 'html-tags';
import './ContentQuery-d7072a28.mjs';
import 'ohash';
import './query-fe2ce245.mjs';
import 'cookie-es';
import './utils-99f4f628.mjs';
import 'ofetch';
import '@unhead/vue';
import '@unhead/dom';
import '@unhead/ssr';
import 'vue-router';
import 'defu';
import '../../nitro/config.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ContentDoc = _sfc_main$1;
  _push(`<main${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_ContentDoc, null, null, _parent));
  _push(`</main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { ____slug_ as default };
//# sourceMappingURL=_...slug_-b06a1d1a.mjs.map
