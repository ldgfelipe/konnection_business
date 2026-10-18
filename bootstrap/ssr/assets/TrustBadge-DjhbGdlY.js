import { defineComponent, computed, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { VTooltip, VChip, VIcon } from "vuetify/components";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TrustBadge",
  __ssrInlineRender: true,
  props: {
    badge: {},
    size: { default: "medium" },
    showTooltip: { type: Boolean, default: true },
    clickable: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const sizeClasses = computed(() => ({
      icon: props.size === "small" ? "x-small" : props.size === "medium" ? "medium" : "large",
      chip: props.size === "small" ? "x-small" : props.size === "medium" ? "small" : "medium"
    }));
    const tooltipText = computed(() => {
      if (!props.badge) return "";
      return `${props.badge.label}${props.badge.code ? ` (${props.badge.code})` : ""}`;
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.badge) {
        _push(`<span${ssrRenderAttrs(mergeProps({ class: "d-inline-flex align-center" }, _attrs))}>`);
        if (__props.showTooltip) {
          _push(ssrRenderComponent(unref(VTooltip), {
            location: "top",
            content: tooltipText.value
          }, {
            activator: withCtx(({ props: tooltipProps }, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(unref(VChip), mergeProps(tooltipProps, {
                  size: sizeClasses.value.chip,
                  color: __props.badge.color,
                  variant: "tonal",
                  class: "d-flex align-center gap-2",
                  clickable: __props.clickable
                }), {
                  default: withCtx((_, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(unref(VIcon), {
                        size: sizeClasses.value.icon,
                        class: "text-white"
                      }, {
                        default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(__props.badge.icon)}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(__props.badge.icon), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`<span class="text-capitalize font-weight-medium"${_scopeId2}>${ssrInterpolate(__props.badge.label)}</span>`);
                    } else {
                      return [
                        createVNode(unref(VIcon), {
                          size: sizeClasses.value.icon,
                          class: "text-white"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(__props.badge.icon), 1)
                          ]),
                          _: 1
                        }, 8, ["size"]),
                        createVNode("span", { class: "text-capitalize font-weight-medium" }, toDisplayString(__props.badge.label), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(unref(VChip), mergeProps(tooltipProps, {
                    size: sizeClasses.value.chip,
                    color: __props.badge.color,
                    variant: "tonal",
                    class: "d-flex align-center gap-2",
                    clickable: __props.clickable
                  }), {
                    default: withCtx(() => [
                      createVNode(unref(VIcon), {
                        size: sizeClasses.value.icon,
                        class: "text-white"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(__props.badge.icon), 1)
                        ]),
                        _: 1
                      }, 8, ["size"]),
                      createVNode("span", { class: "text-capitalize font-weight-medium" }, toDisplayString(__props.badge.label), 1)
                    ]),
                    _: 1
                  }, 16, ["size", "color", "clickable"])
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(ssrRenderComponent(unref(VChip), {
            size: sizeClasses.value.chip,
            color: __props.badge.color,
            variant: "tonal",
            class: "d-flex align-center gap-2",
            clickable: __props.clickable
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(unref(VIcon), {
                  size: sizeClasses.value.icon,
                  class: "text-white"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(__props.badge.icon)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(__props.badge.icon), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`<span class="text-capitalize font-weight-medium"${_scopeId}>${ssrInterpolate(__props.badge.label)}</span>`);
              } else {
                return [
                  createVNode(unref(VIcon), {
                    size: sizeClasses.value.icon,
                    class: "text-white"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(__props.badge.icon), 1)
                    ]),
                    _: 1
                  }, 8, ["size"]),
                  createVNode("span", { class: "text-capitalize font-weight-medium" }, toDisplayString(__props.badge.label), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        }
        _push(`</span>`);
      } else {
        _push(`<span${ssrRenderAttrs(mergeProps({ class: "d-inline-flex align-center" }, _attrs))}>`);
        _push(ssrRenderComponent(unref(VChip), {
          size: sizeClasses.value.chip,
          color: "surface-variant",
          variant: "tonal",
          class: "d-flex align-center gap-2"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(VIcon), {
                size: sizeClasses.value.icon
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`mdi-shield-off-outline`);
                  } else {
                    return [
                      createTextVNode("mdi-shield-off-outline")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<span class="text-capitalize"${_scopeId}>No verificado</span>`);
            } else {
              return [
                createVNode(unref(VIcon), {
                  size: sizeClasses.value.icon
                }, {
                  default: withCtx(() => [
                    createTextVNode("mdi-shield-off-outline")
                  ]),
                  _: 1
                }, 8, ["size"]),
                createVNode("span", { class: "text-capitalize" }, "No verificado")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</span>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/TrustBadge.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
