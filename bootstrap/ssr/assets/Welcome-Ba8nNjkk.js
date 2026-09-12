import { resolveComponent, unref, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { Head, Link } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Welcome",
  __ssrInlineRender: true,
  props: {
    canLogin: {
      type: Boolean
    },
    canRegister: {
      type: Boolean
    },
    laravelVersion: {
      type: String,
      required: true
    },
    phpVersion: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Bienvenido" }, null, _parent));
      _push(ssrRenderComponent(_component_v_container, { class: "espacioAA" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<video autoplay muted loop id="myVideo" data-v-7154135e${_scopeId}><source${ssrRenderAttr("src", _ctx.$assetUrl("/video/negocio1.mp4"))} type="video/mp4" data-v-7154135e${_scopeId}> Your browser does not support HTML5 video. </video><div style="${ssrRenderStyle({ "width": "100%", "text-align": "center" })}" data-v-7154135e${_scopeId}><img${ssrRenderAttr("src", _ctx.$assetUrl("/logo/kb-logo.png"))} width="250" style="${ssrRenderStyle({ "opacity": "1" })}" data-v-7154135e${_scopeId}></div><div style="${ssrRenderStyle({ "width": "100%", "text-align": "center" })}" data-v-7154135e${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("login"),
              style: { "background-color": "#000066", "color": "white" },
              class: "v-btn v-btn--size-small v-btn--variant-flat"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="v-btn__overlay" data-v-7154135e${_scopeId2}></span><span class="v-btn__underlay" data-v-7154135e${_scopeId2}></span><span class="v-btn__content" data-v-7154135e${_scopeId2}>Iniciar Sesión</span>`);
                } else {
                  return [
                    createVNode("span", { class: "v-btn__overlay" }),
                    createVNode("span", { class: "v-btn__underlay" }),
                    createVNode("span", { class: "v-btn__content" }, "Iniciar Sesión")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("register"),
              style: { "background-color": "#6699FF", "color": "white" },
              class: "v-btn v-btn--size-small v-btn--variant-flat"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="v-btn__overlay" data-v-7154135e${_scopeId2}></span><span class="v-btn__underlay" data-v-7154135e${_scopeId2}></span><span class="v-btn__content" data-v-7154135e${_scopeId2}>Registrate</span>`);
                } else {
                  return [
                    createVNode("span", { class: "v-btn__overlay" }),
                    createVNode("span", { class: "v-btn__underlay" }),
                    createVNode("span", { class: "v-btn__content" }, "Registrate")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("video", {
                autoplay: "",
                muted: "",
                loop: "",
                id: "myVideo"
              }, [
                createVNode("source", {
                  src: _ctx.$assetUrl("/video/negocio1.mp4"),
                  type: "video/mp4"
                }, null, 8, ["src"]),
                createTextVNode(" Your browser does not support HTML5 video. ")
              ]),
              createVNode("div", { style: { "width": "100%", "text-align": "center" } }, [
                createVNode("img", {
                  src: _ctx.$assetUrl("/logo/kb-logo.png"),
                  width: "250",
                  style: { "opacity": "1" }
                }, null, 8, ["src"])
              ]),
              createVNode("div", { style: { "width": "100%", "text-align": "center" } }, [
                createVNode(unref(Link), {
                  href: _ctx.route("login"),
                  style: { "background-color": "#000066", "color": "white" },
                  class: "v-btn v-btn--size-small v-btn--variant-flat"
                }, {
                  default: withCtx(() => [
                    createVNode("span", { class: "v-btn__overlay" }),
                    createVNode("span", { class: "v-btn__underlay" }),
                    createVNode("span", { class: "v-btn__content" }, "Iniciar Sesión")
                  ]),
                  _: 1
                }, 8, ["href"]),
                createVNode(unref(Link), {
                  href: _ctx.route("register"),
                  style: { "background-color": "#6699FF", "color": "white" },
                  class: "v-btn v-btn--size-small v-btn--variant-flat"
                }, {
                  default: withCtx(() => [
                    createVNode("span", { class: "v-btn__overlay" }),
                    createVNode("span", { class: "v-btn__underlay" }),
                    createVNode("span", { class: "v-btn__content" }, "Registrate")
                  ]),
                  _: 1
                }, 8, ["href"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Welcome.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Welcome = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7154135e"]]);
export {
  Welcome as default
};
