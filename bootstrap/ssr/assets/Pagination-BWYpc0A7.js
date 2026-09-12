import { computed, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main$2 = {
  __name: "ViewProductos",
  __ssrInlineRender: true,
  props: ["state", "producto"],
  setup(__props) {
    const props = __props;
    const imagenes = computed(() => {
      if (!props.producto || !props.producto.imagen) return [];
      return props.producto.imagen.split(",");
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_dialog = resolveComponent("v-dialog");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_img = resolveComponent("v-img");
      _push(ssrRenderComponent(_component_v_dialog, mergeProps({
        modelValue: props.state,
        "onUpdate:modelValue": ($event) => props.state = $event,
        fullscreen: ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_card_title, { style: { "background-color": "blue", "color": "white" } }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<b${_scopeId3}>Titulo de Productos</b> `);
                        _push4(ssrRenderComponent(_component_v_btn, {
                          onClick: ($event) => _ctx.$emit("cerrarventana", false)
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_icon, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`mdi-close`);
                                  } else {
                                    return [
                                      createTextVNode("mdi-close")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_icon, null, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-close")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("b", null, "Titulo de Productos"),
                          createTextVNode(),
                          createVNode(_component_v_btn, {
                            onClick: ($event) => _ctx.$emit("cerrarventana", false)
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_icon, null, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-close")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_card_text, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_row, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_row, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          if (_ctx.key) {
                                            _push7(`<!--[-->`);
                                            ssrRenderList(imagenes.value, (key, index) => {
                                              _push7(ssrRenderComponent(_component_v_col, {
                                                cols: "12",
                                                md: "4",
                                                key: index
                                              }, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(ssrRenderComponent(_component_v_img, {
                                                      src: _ctx.$assetUrl(key)
                                                    }, null, _parent8, _scopeId7));
                                                  } else {
                                                    return [
                                                      createVNode(_component_v_img, {
                                                        src: _ctx.$assetUrl(key)
                                                      }, null, 8, ["src"])
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                            });
                                            _push7(`<!--]-->`);
                                          } else {
                                            _push7(`<!---->`);
                                          }
                                        } else {
                                          return [
                                            _ctx.key ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(imagenes.value, (key, index) => {
                                              return openBlock(), createBlock(_component_v_col, {
                                                cols: "12",
                                                md: "4",
                                                key: index
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_img, {
                                                    src: _ctx.$assetUrl(key)
                                                  }, null, 8, ["src"])
                                                ]),
                                                _: 2
                                              }, 1024);
                                            }), 128)) : createCommentVNode("", true)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_row, null, {
                                        default: withCtx(() => [
                                          _ctx.key ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(imagenes.value, (key, index) => {
                                            return openBlock(), createBlock(_component_v_col, {
                                              cols: "12",
                                              md: "4",
                                              key: index
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_img, {
                                                  src: _ctx.$assetUrl(key)
                                                }, null, 8, ["src"])
                                              ]),
                                              _: 2
                                            }, 1024);
                                          }), 128)) : createCommentVNode("", true)
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<h2 class="text-h2"${_scopeId5}>${ssrInterpolate(props.producto.nombre)}</h2><hr${_scopeId5}><p${_scopeId5}>${ssrInterpolate(props.producto.descripcion)}</p><hr${_scopeId5}><h4 class="text-h4"${_scopeId5}>Precio: $${ssrInterpolate(props.producto.precio)}</h4><hr${_scopeId5}><h5 class="text-h5"${_scopeId5}>Stock: ${ssrInterpolate(props.producto.stock)}</h5>`);
                                  } else {
                                    return [
                                      createVNode("h2", { class: "text-h2" }, toDisplayString(props.producto.nombre), 1),
                                      createVNode("hr"),
                                      createVNode("p", null, toDisplayString(props.producto.descripcion), 1),
                                      createVNode("hr"),
                                      createVNode("h4", { class: "text-h4" }, "Precio: $" + toDisplayString(props.producto.precio), 1),
                                      createVNode("hr"),
                                      createVNode("h5", { class: "text-h5" }, "Stock: " + toDisplayString(props.producto.stock), 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_row, null, {
                                      default: withCtx(() => [
                                        _ctx.key ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(imagenes.value, (key, index) => {
                                          return openBlock(), createBlock(_component_v_col, {
                                            cols: "12",
                                            md: "4",
                                            key: index
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_img, {
                                                src: _ctx.$assetUrl(key)
                                              }, null, 8, ["src"])
                                            ]),
                                            _: 2
                                          }, 1024);
                                        }), 128)) : createCommentVNode("", true)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("h2", { class: "text-h2" }, toDisplayString(props.producto.nombre), 1),
                                    createVNode("hr"),
                                    createVNode("p", null, toDisplayString(props.producto.descripcion), 1),
                                    createVNode("hr"),
                                    createVNode("h4", { class: "text-h4" }, "Precio: $" + toDisplayString(props.producto.precio), 1),
                                    createVNode("hr"),
                                    createVNode("h5", { class: "text-h5" }, "Stock: " + toDisplayString(props.producto.stock), 1)
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_row, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_row, null, {
                                    default: withCtx(() => [
                                      _ctx.key ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(imagenes.value, (key, index) => {
                                        return openBlock(), createBlock(_component_v_col, {
                                          cols: "12",
                                          md: "4",
                                          key: index
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_img, {
                                              src: _ctx.$assetUrl(key)
                                            }, null, 8, ["src"])
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 128)) : createCommentVNode("", true)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode("h2", { class: "text-h2" }, toDisplayString(props.producto.nombre), 1),
                                  createVNode("hr"),
                                  createVNode("p", null, toDisplayString(props.producto.descripcion), 1),
                                  createVNode("hr"),
                                  createVNode("h4", { class: "text-h4" }, "Precio: $" + toDisplayString(props.producto.precio), 1),
                                  createVNode("hr"),
                                  createVNode("h5", { class: "text-h5" }, "Stock: " + toDisplayString(props.producto.stock), 1)
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_card_title, { style: { "background-color": "blue", "color": "white" } }, {
                      default: withCtx(() => [
                        createVNode("b", null, "Titulo de Productos"),
                        createTextVNode(),
                        createVNode(_component_v_btn, {
                          onClick: ($event) => _ctx.$emit("cerrarventana", false)
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_icon, null, {
                              default: withCtx(() => [
                                createTextVNode("mdi-close")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_card_text, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_row, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_col, {
                              cols: "12",
                              md: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_row, null, {
                                  default: withCtx(() => [
                                    _ctx.key ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(imagenes.value, (key, index) => {
                                      return openBlock(), createBlock(_component_v_col, {
                                        cols: "12",
                                        md: "4",
                                        key: index
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_img, {
                                            src: _ctx.$assetUrl(key)
                                          }, null, 8, ["src"])
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 128)) : createCommentVNode("", true)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "12",
                              md: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode("h2", { class: "text-h2" }, toDisplayString(props.producto.nombre), 1),
                                createVNode("hr"),
                                createVNode("p", null, toDisplayString(props.producto.descripcion), 1),
                                createVNode("hr"),
                                createVNode("h4", { class: "text-h4" }, "Precio: $" + toDisplayString(props.producto.precio), 1),
                                createVNode("hr"),
                                createVNode("h5", { class: "text-h5" }, "Stock: " + toDisplayString(props.producto.stock), 1)
                              ]),
                              _: 1
                            })
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_card, null, {
                default: withCtx(() => [
                  createVNode(_component_v_card_title, { style: { "background-color": "blue", "color": "white" } }, {
                    default: withCtx(() => [
                      createVNode("b", null, "Titulo de Productos"),
                      createTextVNode(),
                      createVNode(_component_v_btn, {
                        onClick: ($event) => _ctx.$emit("cerrarventana", false)
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_icon, null, {
                            default: withCtx(() => [
                              createTextVNode("mdi-close")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_card_text, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_row, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_row, null, {
                                default: withCtx(() => [
                                  _ctx.key ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(imagenes.value, (key, index) => {
                                    return openBlock(), createBlock(_component_v_col, {
                                      cols: "12",
                                      md: "4",
                                      key: index
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_img, {
                                          src: _ctx.$assetUrl(key)
                                        }, null, 8, ["src"])
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128)) : createCommentVNode("", true)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            md: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode("h2", { class: "text-h2" }, toDisplayString(props.producto.nombre), 1),
                              createVNode("hr"),
                              createVNode("p", null, toDisplayString(props.producto.descripcion), 1),
                              createVNode("hr"),
                              createVNode("h4", { class: "text-h4" }, "Precio: $" + toDisplayString(props.producto.precio), 1),
                              createVNode("hr"),
                              createVNode("h5", { class: "text-h5" }, "Stock: " + toDisplayString(props.producto.stock), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
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
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/productos/ViewProductos.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  data() {
    return {
      estadoverprod: false,
      prodselect: {}
    };
  },
  components: {
    ViewProductos: _sfc_main$2
  },
  methods: {
    verprdocuto(key) {
      this.estadoverprod = this.estadoverprod ? false : true;
      this.prodselect = key;
    },
    cierraventa(evt) {
      this.estadoverprod = evt;
    }
  },
  props: {
    productos: [Object, Array]
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_row = resolveComponent("v-row");
  const _component_v_col = resolveComponent("v-col");
  const _component_v_card = resolveComponent("v-card");
  const _component_v_card_text = resolveComponent("v-card-text");
  const _component_v_img = resolveComponent("v-img");
  const _component_v_icon = resolveComponent("v-icon");
  const _component_v_btn = resolveComponent("v-btn");
  const _component_ViewProductos = resolveComponent("ViewProductos");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_v_row, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($props.productos, (key, index) => {
          _push2(ssrRenderComponent(_component_v_col, {
            cols: "12",
            md: "3",
            key: index
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(_component_v_card, { class: "elevation-1" }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(ssrRenderComponent(_component_v_card_text, { class: "text-center" }, {
                        default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            if (key.imagen) {
                              _push5(ssrRenderComponent(_component_v_img, {
                                src: _ctx.$assetUrl(key.imagen.split(",")[0]),
                                height: "150",
                                cover: ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              _push5(ssrRenderComponent(_component_v_img, {
                                height: "150",
                                color: "grey-lighten-2",
                                cover: ""
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="d-flex align-center justify-center fill-height"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_v_icon, {
                                      size: "large",
                                      color: "grey"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`mdi-image`);
                                        } else {
                                          return [
                                            createTextVNode("mdi-image")
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                    _push6(`</div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "d-flex align-center justify-center fill-height" }, [
                                        createVNode(_component_v_icon, {
                                          size: "large",
                                          color: "grey"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-image")
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            }
                            _push5(` ${ssrInterpolate(key.nombre)} <p style="${ssrRenderStyle({ "font-size": "18px" })}"${_scopeId4}><b${_scopeId4}> Precio: $${ssrInterpolate(key.precio)}</b></p>`);
                            _push5(ssrRenderComponent(_component_v_btn, {
                              onClick: ($event) => $options.verprdocuto(key),
                              style: { "background-color": "blue", "color": "white", "width": "100%" }
                            }, {
                              default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(`Ver Más`);
                                } else {
                                  return [
                                    createTextVNode("Ver Más")
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent5, _scopeId4));
                          } else {
                            return [
                              key.imagen ? (openBlock(), createBlock(_component_v_img, {
                                key: 0,
                                src: _ctx.$assetUrl(key.imagen.split(",")[0]),
                                height: "150",
                                cover: ""
                              }, null, 8, ["src"])) : (openBlock(), createBlock(_component_v_img, {
                                key: 1,
                                height: "150",
                                color: "grey-lighten-2",
                                cover: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "d-flex align-center justify-center fill-height" }, [
                                    createVNode(_component_v_icon, {
                                      size: "large",
                                      color: "grey"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-image")
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ]),
                                _: 1
                              })),
                              createTextVNode(" " + toDisplayString(key.nombre) + " ", 1),
                              createVNode("p", { style: { "font-size": "18px" } }, [
                                createVNode("b", null, " Precio: $" + toDisplayString(key.precio), 1)
                              ]),
                              createVNode(_component_v_btn, {
                                onClick: ($event) => $options.verprdocuto(key),
                                style: { "background-color": "blue", "color": "white", "width": "100%" }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Ver Más")
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent4, _scopeId3));
                    } else {
                      return [
                        createVNode(_component_v_card_text, { class: "text-center" }, {
                          default: withCtx(() => [
                            key.imagen ? (openBlock(), createBlock(_component_v_img, {
                              key: 0,
                              src: _ctx.$assetUrl(key.imagen.split(",")[0]),
                              height: "150",
                              cover: ""
                            }, null, 8, ["src"])) : (openBlock(), createBlock(_component_v_img, {
                              key: 1,
                              height: "150",
                              color: "grey-lighten-2",
                              cover: ""
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "d-flex align-center justify-center fill-height" }, [
                                  createVNode(_component_v_icon, {
                                    size: "large",
                                    color: "grey"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-image")
                                    ]),
                                    _: 1
                                  })
                                ])
                              ]),
                              _: 1
                            })),
                            createTextVNode(" " + toDisplayString(key.nombre) + " ", 1),
                            createVNode("p", { style: { "font-size": "18px" } }, [
                              createVNode("b", null, " Precio: $" + toDisplayString(key.precio), 1)
                            ]),
                            createVNode(_component_v_btn, {
                              onClick: ($event) => $options.verprdocuto(key),
                              style: { "background-color": "blue", "color": "white", "width": "100%" }
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Ver Más")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
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
                  createVNode(_component_v_card, { class: "elevation-1" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_card_text, { class: "text-center" }, {
                        default: withCtx(() => [
                          key.imagen ? (openBlock(), createBlock(_component_v_img, {
                            key: 0,
                            src: _ctx.$assetUrl(key.imagen.split(",")[0]),
                            height: "150",
                            cover: ""
                          }, null, 8, ["src"])) : (openBlock(), createBlock(_component_v_img, {
                            key: 1,
                            height: "150",
                            color: "grey-lighten-2",
                            cover: ""
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex align-center justify-center fill-height" }, [
                                createVNode(_component_v_icon, {
                                  size: "large",
                                  color: "grey"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-image")
                                  ]),
                                  _: 1
                                })
                              ])
                            ]),
                            _: 1
                          })),
                          createTextVNode(" " + toDisplayString(key.nombre) + " ", 1),
                          createVNode("p", { style: { "font-size": "18px" } }, [
                            createVNode("b", null, " Precio: $" + toDisplayString(key.precio), 1)
                          ]),
                          createVNode(_component_v_btn, {
                            onClick: ($event) => $options.verprdocuto(key),
                            style: { "background-color": "blue", "color": "white", "width": "100%" }
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Ver Más")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
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
          (openBlock(true), createBlock(Fragment, null, renderList($props.productos, (key, index) => {
            return openBlock(), createBlock(_component_v_col, {
              cols: "12",
              md: "3",
              key: index
            }, {
              default: withCtx(() => [
                createVNode(_component_v_card, { class: "elevation-1" }, {
                  default: withCtx(() => [
                    createVNode(_component_v_card_text, { class: "text-center" }, {
                      default: withCtx(() => [
                        key.imagen ? (openBlock(), createBlock(_component_v_img, {
                          key: 0,
                          src: _ctx.$assetUrl(key.imagen.split(",")[0]),
                          height: "150",
                          cover: ""
                        }, null, 8, ["src"])) : (openBlock(), createBlock(_component_v_img, {
                          key: 1,
                          height: "150",
                          color: "grey-lighten-2",
                          cover: ""
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "d-flex align-center justify-center fill-height" }, [
                              createVNode(_component_v_icon, {
                                size: "large",
                                color: "grey"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-image")
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          _: 1
                        })),
                        createTextVNode(" " + toDisplayString(key.nombre) + " ", 1),
                        createVNode("p", { style: { "font-size": "18px" } }, [
                          createVNode("b", null, " Precio: $" + toDisplayString(key.precio), 1)
                        ]),
                        createVNode(_component_v_btn, {
                          onClick: ($event) => $options.verprdocuto(key),
                          style: { "background-color": "blue", "color": "white", "width": "100%" }
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Ver Más")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_ViewProductos, {
    state: $data.estadoverprod,
    producto: $data.prodselect,
    onCerrarventana: $options.cierraventa
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/productos/GridProductos.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const GridProductos = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  data() {
    return {
      page: this.currentPage()
    };
  },
  methods: {
    currentPage() {
      var params = new URLSearchParams(window.location.search);
      var p = parseInt(params.get("page"));
      return p && p > 0 ? p : 1;
    }
  },
  props: {
    links: [Array]
  },
  watch: {
    page() {
      var params = new URLSearchParams(window.location.search);
      if (this.page > 1) {
        params.set("page", this.page);
      } else {
        params.delete("page");
      }
      var qs = params.toString();
      window.location.href = window.location.origin + window.location.pathname + (qs ? "?" + qs : "");
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_pagination = resolveComponent("v-pagination");
  if ($props.links.length > 0) {
    _push(`<div${ssrRenderAttrs(_attrs)}><div class="text-center">`);
    _push(ssrRenderComponent(_component_v_pagination, {
      modelValue: $data.page,
      "onUpdate:modelValue": ($event) => $data.page = $event,
      length: $props.links.length - 2,
      rounded: "circle"
    }, null, _parent));
    _push(`</div></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/productos/Pagination.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Pagination = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  GridProductos as G,
  Pagination as P
};
