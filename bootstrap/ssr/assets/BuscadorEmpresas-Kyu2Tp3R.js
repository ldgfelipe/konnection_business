import { ref, onMounted, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext, openBlock, createBlock, createCommentVNode, toDisplayString, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import { Head } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { _ as _sfc_main$4 } from "./AuthenticatedLayout-CjO21aP_.js";
import { c as categorias } from "./categorias-BLbQNXcu.js";
import "./ApplicationLogo-DB5hZ_I6.js";
const _sfc_main$3 = {
  __name: "BuscadorEmpresas",
  __ssrInlineRender: true,
  setup(__props) {
    const busqueda = ref("");
    onMounted(() => {
      var params = new URLSearchParams(window.location.search);
      busqueda.value = params.get("busqueda") || "";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_btn = resolveComponent("v-btn");
      _push(`<form${ssrRenderAttrs(mergeProps({ id: "formbusqueda" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_row, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, { cols: "10" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_text_field, {
                    modelValue: busqueda.value,
                    "onUpdate:modelValue": ($event) => busqueda.value = $event,
                    name: "busqueda",
                    label: "Ingrese el nombre de la Empresa",
                    "hide-details": ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_text_field, {
                      modelValue: busqueda.value,
                      "onUpdate:modelValue": ($event) => busqueda.value = $event,
                      name: "busqueda",
                      label: "Ingrese el nombre de la Empresa",
                      "hide-details": ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, { cols: "2" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_btn, {
                    type: "submit",
                    style: { "background-color": "#000066", "color": "white" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Buscar`);
                      } else {
                        return [
                          createTextVNode("Buscar")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_btn, {
                      type: "submit",
                      style: { "background-color": "#000066", "color": "white" }
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Buscar")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_col, { cols: "10" }, {
                default: withCtx(() => [
                  createVNode(_component_v_text_field, {
                    modelValue: busqueda.value,
                    "onUpdate:modelValue": ($event) => busqueda.value = $event,
                    name: "busqueda",
                    label: "Ingrese el nombre de la Empresa",
                    "hide-details": ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_v_col, { cols: "2" }, {
                default: withCtx(() => [
                  createVNode(_component_v_btn, {
                    type: "submit",
                    style: { "background-color": "#000066", "color": "white" }
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Buscar")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/empresas/BuscadorEmpresas.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  data() {
    return {};
  },
  props: {
    empresas: Array
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_row = resolveComponent("v-row");
  const _component_v_col = resolveComponent("v-col");
  const _component_v_card = resolveComponent("v-card");
  const _component_v_card_title = resolveComponent("v-card-title");
  const _component_v_card_text = resolveComponent("v-card-text");
  const _component_v_chip = resolveComponent("v-chip");
  const _component_v_btn = resolveComponent("v-btn");
  _push(ssrRenderComponent(_component_v_row, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($props.empresas, (key, index) => {
          _push2(ssrRenderComponent(_component_v_col, { cols: "3" }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(_component_v_card, null, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(ssrRenderComponent(_component_v_card_title, null, {
                        default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            if (key.logo) {
                              _push5(`<img${ssrRenderAttr("src", _ctx.$assetUrl(key.logo))} style="${ssrRenderStyle({ "width": "100%" })}"${_scopeId4}>`);
                            } else {
                              _push5(`<!---->`);
                            }
                          } else {
                            return [
                              key.logo ? (openBlock(), createBlock("img", {
                                key: 0,
                                src: _ctx.$assetUrl(key.logo),
                                style: { "width": "100%" }
                              }, null, 8, ["src"])) : createCommentVNode("", true)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent4, _scopeId3));
                      _push4(ssrRenderComponent(_component_v_card_title, null, {
                        default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(`${ssrInterpolate(key.nombre)}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(key.nombre), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent4, _scopeId3));
                      _push4(ssrRenderComponent(_component_v_card_text, null, {
                        default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(`${ssrInterpolate(key.descripcion)}<br${_scopeId4}>`);
                            if (key.categorias) {
                              _push5(ssrRenderComponent(_component_v_chip, {
                                color: "primary",
                                size: "small",
                                class: "mt-2 mb-2"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`${ssrInterpolate(key.categorias)}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(key.categorias), 1)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              _push5(`<!---->`);
                            }
                            _push5(`<br${_scopeId4}>`);
                            _push5(ssrRenderComponent(_component_v_btn, {
                              href: "/empresa/" + key.id,
                              style: { "background-color": "#000066", "color": "#fff" }
                            }, {
                              default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(`Ver Empresa`);
                                } else {
                                  return [
                                    createTextVNode("Ver Empresa")
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent5, _scopeId4));
                          } else {
                            return [
                              createTextVNode(toDisplayString(key.descripcion), 1),
                              createVNode("br"),
                              key.categorias ? (openBlock(), createBlock(_component_v_chip, {
                                key: 0,
                                color: "primary",
                                size: "small",
                                class: "mt-2 mb-2"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(key.categorias), 1)
                                ]),
                                _: 2
                              }, 1024)) : createCommentVNode("", true),
                              createVNode("br"),
                              createVNode(_component_v_btn, {
                                href: "/empresa/" + key.id,
                                style: { "background-color": "#000066", "color": "#fff" }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Ver Empresa")
                                ]),
                                _: 1
                              }, 8, ["href"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent4, _scopeId3));
                    } else {
                      return [
                        createVNode(_component_v_card_title, null, {
                          default: withCtx(() => [
                            key.logo ? (openBlock(), createBlock("img", {
                              key: 0,
                              src: _ctx.$assetUrl(key.logo),
                              style: { "width": "100%" }
                            }, null, 8, ["src"])) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_v_card_title, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(key.nombre), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_v_card_text, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(key.descripcion), 1),
                            createVNode("br"),
                            key.categorias ? (openBlock(), createBlock(_component_v_chip, {
                              key: 0,
                              color: "primary",
                              size: "small",
                              class: "mt-2 mb-2"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(key.categorias), 1)
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true),
                            createVNode("br"),
                            createVNode(_component_v_btn, {
                              href: "/empresa/" + key.id,
                              style: { "background-color": "#000066", "color": "#fff" }
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Ver Empresa")
                              ]),
                              _: 1
                            }, 8, ["href"])
                          ]),
                          _: 2
                        }, 1024)
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              } else {
                return [
                  createVNode(_component_v_card, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_card_title, null, {
                        default: withCtx(() => [
                          key.logo ? (openBlock(), createBlock("img", {
                            key: 0,
                            src: _ctx.$assetUrl(key.logo),
                            style: { "width": "100%" }
                          }, null, 8, ["src"])) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_v_card_title, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(key.nombre), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_v_card_text, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(key.descripcion), 1),
                          createVNode("br"),
                          key.categorias ? (openBlock(), createBlock(_component_v_chip, {
                            key: 0,
                            color: "primary",
                            size: "small",
                            class: "mt-2 mb-2"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(key.categorias), 1)
                            ]),
                            _: 2
                          }, 1024)) : createCommentVNode("", true),
                          createVNode("br"),
                          createVNode(_component_v_btn, {
                            href: "/empresa/" + key.id,
                            style: { "background-color": "#000066", "color": "#fff" }
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Ver Empresa")
                            ]),
                            _: 1
                          }, 8, ["href"])
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024)
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($props.empresas, (key, index) => {
            return openBlock(), createBlock(_component_v_col, { cols: "3" }, {
              default: withCtx(() => [
                createVNode(_component_v_card, null, {
                  default: withCtx(() => [
                    createVNode(_component_v_card_title, null, {
                      default: withCtx(() => [
                        key.logo ? (openBlock(), createBlock("img", {
                          key: 0,
                          src: _ctx.$assetUrl(key.logo),
                          style: { "width": "100%" }
                        }, null, 8, ["src"])) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_v_card_title, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(key.nombre), 1)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_v_card_text, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(key.descripcion), 1),
                        createVNode("br"),
                        key.categorias ? (openBlock(), createBlock(_component_v_chip, {
                          key: 0,
                          color: "primary",
                          size: "small",
                          class: "mt-2 mb-2"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(key.categorias), 1)
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true),
                        createVNode("br"),
                        createVNode(_component_v_btn, {
                          href: "/empresa/" + key.id,
                          style: { "background-color": "#000066", "color": "#fff" }
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Ver Empresa")
                          ]),
                          _: 1
                        }, 8, ["href"])
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1024);
          }), 256))
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/empresas/ListadoEmpresas.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ListaEmpresas = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  data() {
    return {
      categorias,
      catselect: ""
    };
  },
  methods: {},
  props: {
    label: {
      default: "Seleccione la categoría"
    }
  },
  watch: {
    catselect() {
      this.$emit("catselect", this.catselect);
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_card = resolveComponent("v-card");
  const _component_v_card_text = resolveComponent("v-card-text");
  const _component_v_select = resolveComponent("v-select");
  _push(ssrRenderComponent(_component_v_card, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_card_text, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_select, {
                label: $props.label,
                modelValue: $data.catselect,
                "onUpdate:modelValue": ($event) => $data.catselect = $event,
                items: $data.categorias
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_select, {
                  label: $props.label,
                  modelValue: $data.catselect,
                  "onUpdate:modelValue": ($event) => $data.catselect = $event,
                  items: $data.categorias
                }, null, 8, ["label", "modelValue", "onUpdate:modelValue", "items"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_card_text, null, {
            default: withCtx(() => [
              createVNode(_component_v_select, {
                label: $props.label,
                modelValue: $data.catselect,
                "onUpdate:modelValue": ($event) => $data.catselect = $event,
                items: $data.categorias
              }, null, 8, ["label", "modelValue", "onUpdate:modelValue", "items"])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/elementos/categorizacion.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Categorizacion = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  data() {
    return {
      catselect: ""
    };
  },
  props: {
    empresas: Array
  },
  components: {
    BuscadorEmpresas: _sfc_main$3,
    ListaEmpresas,
    AuthenticatedLayout: _sfc_main$4,
    Categorizacion,
    Head
  },
  methods: {
    cargaCategoria(evt) {
      window.location.href = window.location.origin + "/empresas/" + evt;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_AuthenticatedLayout = resolveComponent("AuthenticatedLayout");
  const _component_BuscadorEmpresas = resolveComponent("BuscadorEmpresas", true);
  const _component_Categorizacion = resolveComponent("Categorizacion");
  const _component_ListaEmpresas = resolveComponent("ListaEmpresas");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, { title: "Edita Empresa" }, null, _parent));
  _push(ssrRenderComponent(_component_AuthenticatedLayout, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BuscadorEmpresas, null, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Categorizacion, {
          label: "Seleccione la categoría de la empresa",
          onCatselect: $options.cargaCategoria
        }, null, _parent2, _scopeId));
        _push2(`<br${_scopeId}> Categoria: ${ssrInterpolate($data.catselect)} `);
        _push2(ssrRenderComponent(_component_ListaEmpresas, {
          empresas: $props.empresas,
          catselect: $data.catselect
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BuscadorEmpresas),
          createVNode(_component_Categorizacion, {
            label: "Seleccione la categoría de la empresa",
            onCatselect: $options.cargaCategoria
          }, null, 8, ["onCatselect"]),
          createVNode("br"),
          createTextVNode(" Categoria: " + toDisplayString($data.catselect) + " ", 1),
          createVNode(_component_ListaEmpresas, {
            empresas: $props.empresas,
            catselect: $data.catselect
          }, null, 8, ["empresas", "catselect"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Empresas/BuscadorEmpresas.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BuscadorEmpresas = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  BuscadorEmpresas as default
};
