import { defineComponent, useSlots, computed, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
import { Link } from "@inertiajs/vue3";
import { VIcon } from "vuetify/components";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AdminLayout",
  __ssrInlineRender: true,
  props: {
    title: {},
    subtitle: {},
    breadcrumbs: {}
  },
  setup(__props) {
    const props = __props;
    useSlots();
    const route = (name, params) => window.route(name, params);
    const breadcrumbs = computed(() => [
      { title: "Dashboard", route: route("dashboard") },
      ...props.breadcrumbs || []
    ]);
    const isActive = (name) => {
      const current = window.route().current();
      return current === name || (current || "").startsWith(name.replace(/\.index$/, ""));
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "admin-layout bg-gray-100 min-h-screen" }, _attrs))}><nav class="bg-gray-50 border-b border-gray-200" aria-label="Breadcrumb"><ol class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center gap-x-1 text-sm"><!--[-->`);
      ssrRenderList(breadcrumbs.value, (crumb, index) => {
        _push(`<li class="flex items-center">`);
        if (crumb.route && index < breadcrumbs.value.length - 1) {
          _push(ssrRenderComponent(unref(Link), {
            href: crumb.route,
            class: "text-gray-500 hover:text-gray-700 transition-colors"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(crumb.title)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(crumb.title), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<span class="text-gray-900 font-medium">${ssrInterpolate(crumb.title)}</span>`);
        }
        if (index < breadcrumbs.value.length - 1) {
          _push(ssrRenderComponent(unref(VIcon), {
            class: "mx-1 text-gray-400",
            size: "small"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` mdi-chevron-right `);
              } else {
                return [
                  createTextVNode(" mdi-chevron-right ")
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ol></nav><div class="bg-white border-b border-gray-200"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex gap-6 -mb-px">`);
      _push(ssrRenderComponent(unref(Link), {
        href: route("admin.settings.integrations"),
        class: ["inline-flex items-center px-1 py-3 border-b-2 text-sm font-medium transition-colors", isActive("admin.settings.integrations") ? "border-indigo-500 text-indigo-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(VIcon), {
              start: "",
              size: "small"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`mdi-cog-outline`);
                } else {
                  return [
                    createTextVNode("mdi-cog-outline")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` Integraciones `);
          } else {
            return [
              createVNode(unref(VIcon), {
                start: "",
                size: "small"
              }, {
                default: withCtx(() => [
                  createTextVNode("mdi-cog-outline")
                ]),
                _: 1
              }),
              createTextVNode(" Integraciones ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: route("admin.profetit-users.index"),
        class: ["inline-flex items-center px-1 py-3 border-b-2 text-sm font-medium transition-colors", isActive("admin.profetit-users") ? "border-indigo-500 text-indigo-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(VIcon), {
              start: "",
              size: "small"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`mdi-account-cert`);
                } else {
                  return [
                    createTextVNode("mdi-account-cert")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` Usuarios Certificados Profetit `);
          } else {
            return [
              createVNode(unref(VIcon), {
                start: "",
                size: "small"
              }, {
                default: withCtx(() => [
                  createTextVNode("mdi-account-cert")
                ]),
                _: 1
              }),
              createTextVNode(" Usuarios Certificados Profetit ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><header class="bg-white shadow-sm"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6"><div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"><div class="min-w-0"><h1 class="text-2xl font-bold text-gray-900 truncate">${ssrInterpolate(__props.title)}</h1>`);
      if (__props.subtitle) {
        _push(`<p class="mt-1 text-sm text-gray-600 truncate">${ssrInterpolate(__props.subtitle)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex flex-wrap items-center gap-3">`);
      ssrRenderSlot(_ctx.$slots, "actions", {}, null, _push, _parent);
      _push(`<button type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors">`);
      _push(ssrRenderComponent(unref(VIcon), {
        start: "",
        size: "small"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`mdi-arrow-left`);
          } else {
            return [
              createTextVNode("mdi-arrow-left")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` Volver </button>`);
      _push(ssrRenderComponent(unref(Link), {
        href: route("dashboard"),
        class: "inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(VIcon), {
              start: "",
              size: "small"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`mdi-view-dashboard-outline`);
                } else {
                  return [
                    createTextVNode("mdi-view-dashboard-outline")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` Dashboard `);
          } else {
            return [
              createVNode(unref(VIcon), {
                start: "",
                size: "small"
              }, {
                default: withCtx(() => [
                  createTextVNode("mdi-view-dashboard-outline")
                ]),
                _: 1
              }),
              createTextVNode(" Dashboard ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></header><main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AdminLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
