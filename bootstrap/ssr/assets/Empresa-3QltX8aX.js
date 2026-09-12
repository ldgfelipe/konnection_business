import { resolveComponent, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-CjO21aP_.js";
import { Head } from "@inertiajs/vue3";
import { G as GridProductos, P as Pagination } from "./Pagination-BWYpc0A7.js";
import "./ApplicationLogo-DB5hZ_I6.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Empresa",
  __ssrInlineRender: true,
  props: {
    empresa: {
      type: Array
    },
    productos: {
      type: Array
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_img = resolveComponent("v-img");
      const _component_v_icon = resolveComponent("v-icon");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), {
        title: __props.empresa.nombre
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_container, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_card, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_card_title, { style: { "background-color": "blue", "color": "white" } }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(__props.empresa.nombre)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(__props.empresa.nombre), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_card_text, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_row, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      md: "5"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          if (__props.empresa.logo) {
                                            _push7(ssrRenderComponent(_component_v_img, {
                                              src: _ctx.$assetUrl(__props.empresa.logo),
                                              style: { "width": "100%", "max-width": "100%" },
                                              cover: ""
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            _push7(ssrRenderComponent(_component_v_img, {
                                              height: "250",
                                              color: "grey-lighten-2",
                                              cover: ""
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<div class="d-flex align-center justify-center fill-height"${_scopeId7}>`);
                                                  _push8(ssrRenderComponent(_component_v_icon, {
                                                    size: "large",
                                                    color: "grey"
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(`mdi-domain`);
                                                      } else {
                                                        return [
                                                          createTextVNode("mdi-domain")
                                                        ];
                                                      }
                                                    }),
                                                    _: 1
                                                  }, _parent8, _scopeId7));
                                                  _push8(`</div>`);
                                                } else {
                                                  return [
                                                    createVNode("div", { class: "d-flex align-center justify-center fill-height" }, [
                                                      createVNode(_component_v_icon, {
                                                        size: "large",
                                                        color: "grey"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("mdi-domain")
                                                        ]),
                                                        _: 1
                                                      })
                                                    ])
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          }
                                        } else {
                                          return [
                                            __props.empresa.logo ? (openBlock(), createBlock(_component_v_img, {
                                              key: 0,
                                              src: _ctx.$assetUrl(__props.empresa.logo),
                                              style: { "width": "100%", "max-width": "100%" },
                                              cover: ""
                                            }, null, 8, ["src"])) : (openBlock(), createBlock(_component_v_img, {
                                              key: 1,
                                              height: "250",
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
                                                      createTextVNode("mdi-domain")
                                                    ]),
                                                    _: 1
                                                  })
                                                ])
                                              ]),
                                              _: 1
                                            }))
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      md: "7",
                                      style: { "padding": "2%" }
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_card, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_card_title, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`Descripción`);
                                                    } else {
                                                      return [
                                                        createTextVNode("Descripción")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_card_text, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`${ssrInterpolate(__props.empresa.descripcion)}`);
                                                    } else {
                                                      return [
                                                        createTextVNode(toDisplayString(__props.empresa.descripcion), 1)
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_card_title, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`Dirección`);
                                                    } else {
                                                      return [
                                                        createTextVNode("Dirección")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_card_text, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`${ssrInterpolate(__props.empresa.direccion)}`);
                                                    } else {
                                                      return [
                                                        createTextVNode(toDisplayString(__props.empresa.direccion), 1)
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_card_title, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`Teléfono`);
                                                    } else {
                                                      return [
                                                        createTextVNode("Teléfono")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_card_text, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`${ssrInterpolate(__props.empresa.telefono)}`);
                                                    } else {
                                                      return [
                                                        createTextVNode(toDisplayString(__props.empresa.telefono), 1)
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_card_title, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`Sitio Web`);
                                                    } else {
                                                      return [
                                                        createTextVNode("Sitio Web")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_card_text, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`${ssrInterpolate(__props.empresa.sitio_web)}`);
                                                    } else {
                                                      return [
                                                        createTextVNode(toDisplayString(__props.empresa.sitio_web), 1)
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_card_title, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Descripción")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_card_text, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(__props.empresa.descripcion), 1)
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_card_title, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Dirección")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_card_text, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(__props.empresa.direccion), 1)
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_card_title, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Teléfono")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_card_text, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(__props.empresa.telefono), 1)
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_card_title, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Sitio Web")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_card_text, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(__props.empresa.sitio_web), 1)
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_card, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_card_title, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Descripción")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_card_text, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(__props.empresa.descripcion), 1)
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_card_title, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Dirección")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_card_text, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(__props.empresa.direccion), 1)
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_card_title, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Teléfono")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_card_text, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(__props.empresa.telefono), 1)
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_card_title, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Sitio Web")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_card_text, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(__props.empresa.sitio_web), 1)
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
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_card, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_card_title, { style: { "background-color": "blue", "color": "white" } }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`<h3${_scopeId8}> Productos</h3>`);
                                                    } else {
                                                      return [
                                                        createVNode("h3", null, " Productos")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_card_text, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(GridProductos, {
                                                        productos: __props.productos.data
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(Pagination, {
                                                        links: __props.productos.links
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(GridProductos, {
                                                          productos: __props.productos.data
                                                        }, null, 8, ["productos"]),
                                                        createVNode(Pagination, {
                                                          links: __props.productos.links
                                                        }, null, 8, ["links"])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_card_title, { style: { "background-color": "blue", "color": "white" } }, {
                                                    default: withCtx(() => [
                                                      createVNode("h3", null, " Productos")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_card_text, null, {
                                                    default: withCtx(() => [
                                                      createVNode(GridProductos, {
                                                        productos: __props.productos.data
                                                      }, null, 8, ["productos"]),
                                                      createVNode(Pagination, {
                                                        links: __props.productos.links
                                                      }, null, 8, ["links"])
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_card, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_card_title, { style: { "background-color": "blue", "color": "white" } }, {
                                                  default: withCtx(() => [
                                                    createVNode("h3", null, " Productos")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_card_text, null, {
                                                  default: withCtx(() => [
                                                    createVNode(GridProductos, {
                                                      productos: __props.productos.data
                                                    }, null, 8, ["productos"]),
                                                    createVNode(Pagination, {
                                                      links: __props.productos.links
                                                    }, null, 8, ["links"])
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        md: "5"
                                      }, {
                                        default: withCtx(() => [
                                          __props.empresa.logo ? (openBlock(), createBlock(_component_v_img, {
                                            key: 0,
                                            src: _ctx.$assetUrl(__props.empresa.logo),
                                            style: { "width": "100%", "max-width": "100%" },
                                            cover: ""
                                          }, null, 8, ["src"])) : (openBlock(), createBlock(_component_v_img, {
                                            key: 1,
                                            height: "250",
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
                                                    createTextVNode("mdi-domain")
                                                  ]),
                                                  _: 1
                                                })
                                              ])
                                            ]),
                                            _: 1
                                          }))
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        md: "7",
                                        style: { "padding": "2%" }
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_card, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_card_title, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("Descripción")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_card_text, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(__props.empresa.descripcion), 1)
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_card_title, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("Dirección")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_card_text, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(__props.empresa.direccion), 1)
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_card_title, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("Teléfono")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_card_text, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(__props.empresa.telefono), 1)
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_card_title, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("Sitio Web")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_card_text, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(__props.empresa.sitio_web), 1)
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_card, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_card_title, { style: { "background-color": "blue", "color": "white" } }, {
                                                default: withCtx(() => [
                                                  createVNode("h3", null, " Productos")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_card_text, null, {
                                                default: withCtx(() => [
                                                  createVNode(GridProductos, {
                                                    productos: __props.productos.data
                                                  }, null, 8, ["productos"]),
                                                  createVNode(Pagination, {
                                                    links: __props.productos.links
                                                  }, null, 8, ["links"])
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_row, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      md: "5"
                                    }, {
                                      default: withCtx(() => [
                                        __props.empresa.logo ? (openBlock(), createBlock(_component_v_img, {
                                          key: 0,
                                          src: _ctx.$assetUrl(__props.empresa.logo),
                                          style: { "width": "100%", "max-width": "100%" },
                                          cover: ""
                                        }, null, 8, ["src"])) : (openBlock(), createBlock(_component_v_img, {
                                          key: 1,
                                          height: "250",
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
                                                  createTextVNode("mdi-domain")
                                                ]),
                                                _: 1
                                              })
                                            ])
                                          ]),
                                          _: 1
                                        }))
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      md: "7",
                                      style: { "padding": "2%" }
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_card, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_card_title, null, {
                                              default: withCtx(() => [
                                                createTextVNode("Descripción")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_card_text, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(__props.empresa.descripcion), 1)
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_card_title, null, {
                                              default: withCtx(() => [
                                                createTextVNode("Dirección")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_card_text, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(__props.empresa.direccion), 1)
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_card_title, null, {
                                              default: withCtx(() => [
                                                createTextVNode("Teléfono")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_card_text, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(__props.empresa.telefono), 1)
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_card_title, null, {
                                              default: withCtx(() => [
                                                createTextVNode("Sitio Web")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_card_text, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(__props.empresa.sitio_web), 1)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_card, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_card_title, { style: { "background-color": "blue", "color": "white" } }, {
                                              default: withCtx(() => [
                                                createVNode("h3", null, " Productos")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_card_text, null, {
                                              default: withCtx(() => [
                                                createVNode(GridProductos, {
                                                  productos: __props.productos.data
                                                }, null, 8, ["productos"]),
                                                createVNode(Pagination, {
                                                  links: __props.productos.links
                                                }, null, 8, ["links"])
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_card_title, { style: { "background-color": "blue", "color": "white" } }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(__props.empresa.nombre), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_card_text, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_row, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    md: "5"
                                  }, {
                                    default: withCtx(() => [
                                      __props.empresa.logo ? (openBlock(), createBlock(_component_v_img, {
                                        key: 0,
                                        src: _ctx.$assetUrl(__props.empresa.logo),
                                        style: { "width": "100%", "max-width": "100%" },
                                        cover: ""
                                      }, null, 8, ["src"])) : (openBlock(), createBlock(_component_v_img, {
                                        key: 1,
                                        height: "250",
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
                                                createTextVNode("mdi-domain")
                                              ]),
                                              _: 1
                                            })
                                          ])
                                        ]),
                                        _: 1
                                      }))
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    md: "7",
                                    style: { "padding": "2%" }
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_card, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_card_title, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Descripción")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_card_text, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(__props.empresa.descripcion), 1)
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_card_title, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Dirección")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_card_text, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(__props.empresa.direccion), 1)
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_card_title, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Teléfono")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_card_text, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(__props.empresa.telefono), 1)
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_card_title, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Sitio Web")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_card_text, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(__props.empresa.sitio_web), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_card, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_card_title, { style: { "background-color": "blue", "color": "white" } }, {
                                            default: withCtx(() => [
                                              createVNode("h3", null, " Productos")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_card_text, null, {
                                            default: withCtx(() => [
                                              createVNode(GridProductos, {
                                                productos: __props.productos.data
                                              }, null, 8, ["productos"]),
                                              createVNode(Pagination, {
                                                links: __props.productos.links
                                              }, null, 8, ["links"])
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
                    createVNode(_component_v_card, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_card_title, { style: { "background-color": "blue", "color": "white" } }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(__props.empresa.nombre), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_card_text, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_row, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "5"
                                }, {
                                  default: withCtx(() => [
                                    __props.empresa.logo ? (openBlock(), createBlock(_component_v_img, {
                                      key: 0,
                                      src: _ctx.$assetUrl(__props.empresa.logo),
                                      style: { "width": "100%", "max-width": "100%" },
                                      cover: ""
                                    }, null, 8, ["src"])) : (openBlock(), createBlock(_component_v_img, {
                                      key: 1,
                                      height: "250",
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
                                              createTextVNode("mdi-domain")
                                            ]),
                                            _: 1
                                          })
                                        ])
                                      ]),
                                      _: 1
                                    }))
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "7",
                                  style: { "padding": "2%" }
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_card, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_card_title, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Descripción")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_card_text, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(__props.empresa.descripcion), 1)
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_card_title, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Dirección")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_card_text, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(__props.empresa.direccion), 1)
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_card_title, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Teléfono")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_card_text, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(__props.empresa.telefono), 1)
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_card_title, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Sitio Web")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_card_text, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(__props.empresa.sitio_web), 1)
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_card, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_card_title, { style: { "background-color": "blue", "color": "white" } }, {
                                          default: withCtx(() => [
                                            createVNode("h3", null, " Productos")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_card_text, null, {
                                          default: withCtx(() => [
                                            createVNode(GridProductos, {
                                              productos: __props.productos.data
                                            }, null, 8, ["productos"]),
                                            createVNode(Pagination, {
                                              links: __props.productos.links
                                            }, null, 8, ["links"])
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
              createVNode(_component_v_container, null, {
                default: withCtx(() => [
                  createVNode(_component_v_card, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_card_title, { style: { "background-color": "blue", "color": "white" } }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(__props.empresa.nombre), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_card_text, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_row, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "5"
                              }, {
                                default: withCtx(() => [
                                  __props.empresa.logo ? (openBlock(), createBlock(_component_v_img, {
                                    key: 0,
                                    src: _ctx.$assetUrl(__props.empresa.logo),
                                    style: { "width": "100%", "max-width": "100%" },
                                    cover: ""
                                  }, null, 8, ["src"])) : (openBlock(), createBlock(_component_v_img, {
                                    key: 1,
                                    height: "250",
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
                                            createTextVNode("mdi-domain")
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ]),
                                    _: 1
                                  }))
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "7",
                                style: { "padding": "2%" }
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_card, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_card_title, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Descripción")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_card_text, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(__props.empresa.descripcion), 1)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_card_title, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Dirección")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_card_text, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(__props.empresa.direccion), 1)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_card_title, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Teléfono")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_card_text, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(__props.empresa.telefono), 1)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_card_title, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Sitio Web")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_card_text, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(__props.empresa.sitio_web), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_card, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_card_title, { style: { "background-color": "blue", "color": "white" } }, {
                                        default: withCtx(() => [
                                          createVNode("h3", null, " Productos")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_card_text, null, {
                                        default: withCtx(() => [
                                          createVNode(GridProductos, {
                                            productos: __props.productos.data
                                          }, null, 8, ["productos"]),
                                          createVNode(Pagination, {
                                            links: __props.productos.links
                                          }, null, 8, ["links"])
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
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Empresas/Empresa.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
