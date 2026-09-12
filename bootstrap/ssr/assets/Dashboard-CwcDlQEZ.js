import { resolveComponent, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-CjO21aP_.js";
import { Head } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./ApplicationLogo-DB5hZ_I6.js";
const _sfc_main = {
  __name: "Dashboard",
  __ssrInlineRender: true,
  props: {
    empresas: Array,
    publicidades: Array,
    promociones: Array,
    productos: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_carousel = resolveComponent("v-carousel");
      const _component_v_carousel_item = resolveComponent("v-carousel-item");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_card_actions = resolveComponent("v-card-actions");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_chip = resolveComponent("v-chip");
      const _component_v_img = resolveComponent("v-img");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Dashboard" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-h5 font-weight-bold" data-v-c31f92c2${_scopeId}>Konnection Business</h2>`);
          } else {
            return [
              createVNode("h2", { class: "text-h5 font-weight-bold" }, "Konnection Business")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_container, {
              fluid: "",
              class: "pa-0"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (__props.publicidades && __props.publicidades.length > 0) {
                    _push3(ssrRenderComponent(_component_v_row, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_v_carousel, {
                                  "hide-delimiter-background": "",
                                  height: "300",
                                  cycle: ""
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<!--[-->`);
                                      ssrRenderList(__props.publicidades, (pub, index) => {
                                        _push6(ssrRenderComponent(_component_v_carousel_item, {
                                          key: index,
                                          src: _ctx.$assetUrl(pub.imagen),
                                          cover: ""
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`<div class="d-flex fill-height align-end justify-center bg-gradient-overlay pb-4" data-v-c31f92c2${_scopeId6}>`);
                                              _push7(ssrRenderComponent(_component_v_card, {
                                                class: "mb-4 bg-transparent",
                                                "max-width": "800",
                                                flat: ""
                                              }, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(ssrRenderComponent(_component_v_card_title, { class: "text-h5 text-white font-weight-bold text-center" }, {
                                                      default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(`${ssrInterpolate(pub.titulo)}`);
                                                        } else {
                                                          return [
                                                            createTextVNode(toDisplayString(pub.titulo), 1)
                                                          ];
                                                        }
                                                      }),
                                                      _: 2
                                                    }, _parent8, _scopeId7));
                                                    if (pub.contenido) {
                                                      _push8(ssrRenderComponent(_component_v_card_text, { class: "text-center text-white" }, {
                                                        default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                          if (_push9) {
                                                            _push9(`${ssrInterpolate(pub.contenido)}`);
                                                          } else {
                                                            return [
                                                              createTextVNode(toDisplayString(pub.contenido), 1)
                                                            ];
                                                          }
                                                        }),
                                                        _: 2
                                                      }, _parent8, _scopeId7));
                                                    } else {
                                                      _push8(`<!---->`);
                                                    }
                                                    if (pub.link) {
                                                      _push8(ssrRenderComponent(_component_v_card_actions, { class: "justify-center" }, {
                                                        default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                          if (_push9) {
                                                            _push9(ssrRenderComponent(_component_v_btn, {
                                                              color: "white",
                                                              variant: "flat",
                                                              href: pub.link,
                                                              target: "_blank"
                                                            }, {
                                                              default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                                if (_push10) {
                                                                  _push10(` Ver más `);
                                                                } else {
                                                                  return [
                                                                    createTextVNode(" Ver más ")
                                                                  ];
                                                                }
                                                              }),
                                                              _: 2
                                                            }, _parent9, _scopeId8));
                                                          } else {
                                                            return [
                                                              createVNode(_component_v_btn, {
                                                                color: "white",
                                                                variant: "flat",
                                                                href: pub.link,
                                                                target: "_blank"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(" Ver más ")
                                                                ]),
                                                                _: 1
                                                              }, 8, ["href"])
                                                            ];
                                                          }
                                                        }),
                                                        _: 2
                                                      }, _parent8, _scopeId7));
                                                    } else {
                                                      _push8(`<!---->`);
                                                    }
                                                  } else {
                                                    return [
                                                      createVNode(_component_v_card_title, { class: "text-h5 text-white font-weight-bold text-center" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(pub.titulo), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024),
                                                      pub.contenido ? (openBlock(), createBlock(_component_v_card_text, {
                                                        key: 0,
                                                        class: "text-center text-white"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(pub.contenido), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024)) : createCommentVNode("", true),
                                                      pub.link ? (openBlock(), createBlock(_component_v_card_actions, {
                                                        key: 1,
                                                        class: "justify-center"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_btn, {
                                                            color: "white",
                                                            variant: "flat",
                                                            href: pub.link,
                                                            target: "_blank"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(" Ver más ")
                                                            ]),
                                                            _: 1
                                                          }, 8, ["href"])
                                                        ]),
                                                        _: 2
                                                      }, 1024)) : createCommentVNode("", true)
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                              _push7(`</div>`);
                                            } else {
                                              return [
                                                createVNode("div", { class: "d-flex fill-height align-end justify-center bg-gradient-overlay pb-4" }, [
                                                  createVNode(_component_v_card, {
                                                    class: "mb-4 bg-transparent",
                                                    "max-width": "800",
                                                    flat: ""
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_card_title, { class: "text-h5 text-white font-weight-bold text-center" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(pub.titulo), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024),
                                                      pub.contenido ? (openBlock(), createBlock(_component_v_card_text, {
                                                        key: 0,
                                                        class: "text-center text-white"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(pub.contenido), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024)) : createCommentVNode("", true),
                                                      pub.link ? (openBlock(), createBlock(_component_v_card_actions, {
                                                        key: 1,
                                                        class: "justify-center"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_btn, {
                                                            color: "white",
                                                            variant: "flat",
                                                            href: pub.link,
                                                            target: "_blank"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(" Ver más ")
                                                            ]),
                                                            _: 1
                                                          }, 8, ["href"])
                                                        ]),
                                                        _: 2
                                                      }, 1024)) : createCommentVNode("", true)
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ])
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      });
                                      _push6(`<!--]-->`);
                                    } else {
                                      return [
                                        (openBlock(true), createBlock(Fragment, null, renderList(__props.publicidades, (pub, index) => {
                                          return openBlock(), createBlock(_component_v_carousel_item, {
                                            key: index,
                                            src: _ctx.$assetUrl(pub.imagen),
                                            cover: ""
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "d-flex fill-height align-end justify-center bg-gradient-overlay pb-4" }, [
                                                createVNode(_component_v_card, {
                                                  class: "mb-4 bg-transparent",
                                                  "max-width": "800",
                                                  flat: ""
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_card_title, { class: "text-h5 text-white font-weight-bold text-center" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(pub.titulo), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    pub.contenido ? (openBlock(), createBlock(_component_v_card_text, {
                                                      key: 0,
                                                      class: "text-center text-white"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(pub.contenido), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024)) : createCommentVNode("", true),
                                                    pub.link ? (openBlock(), createBlock(_component_v_card_actions, {
                                                      key: 1,
                                                      class: "justify-center"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_btn, {
                                                          color: "white",
                                                          variant: "flat",
                                                          href: pub.link,
                                                          target: "_blank"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(" Ver más ")
                                                          ]),
                                                          _: 1
                                                        }, 8, ["href"])
                                                      ]),
                                                      _: 2
                                                    }, 1024)) : createCommentVNode("", true)
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ])
                                            ]),
                                            _: 2
                                          }, 1032, ["src"]);
                                        }), 128))
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_v_carousel, {
                                    "hide-delimiter-background": "",
                                    height: "300",
                                    cycle: ""
                                  }, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(__props.publicidades, (pub, index) => {
                                        return openBlock(), createBlock(_component_v_carousel_item, {
                                          key: index,
                                          src: _ctx.$assetUrl(pub.imagen),
                                          cover: ""
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "d-flex fill-height align-end justify-center bg-gradient-overlay pb-4" }, [
                                              createVNode(_component_v_card, {
                                                class: "mb-4 bg-transparent",
                                                "max-width": "800",
                                                flat: ""
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_card_title, { class: "text-h5 text-white font-weight-bold text-center" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(pub.titulo), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  pub.contenido ? (openBlock(), createBlock(_component_v_card_text, {
                                                    key: 0,
                                                    class: "text-center text-white"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(pub.contenido), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024)) : createCommentVNode("", true),
                                                  pub.link ? (openBlock(), createBlock(_component_v_card_actions, {
                                                    key: 1,
                                                    class: "justify-center"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_btn, {
                                                        color: "white",
                                                        variant: "flat",
                                                        href: pub.link,
                                                        target: "_blank"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" Ver más ")
                                                        ]),
                                                        _: 1
                                                      }, 8, ["href"])
                                                    ]),
                                                    _: 2
                                                  }, 1024)) : createCommentVNode("", true)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ])
                                          ]),
                                          _: 2
                                        }, 1032, ["src"]);
                                      }), 128))
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
                            createVNode(_component_v_col, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_carousel, {
                                  "hide-delimiter-background": "",
                                  height: "300",
                                  cycle: ""
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(__props.publicidades, (pub, index) => {
                                      return openBlock(), createBlock(_component_v_carousel_item, {
                                        key: index,
                                        src: _ctx.$assetUrl(pub.imagen),
                                        cover: ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "d-flex fill-height align-end justify-center bg-gradient-overlay pb-4" }, [
                                            createVNode(_component_v_card, {
                                              class: "mb-4 bg-transparent",
                                              "max-width": "800",
                                              flat: ""
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_card_title, { class: "text-h5 text-white font-weight-bold text-center" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(pub.titulo), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                pub.contenido ? (openBlock(), createBlock(_component_v_card_text, {
                                                  key: 0,
                                                  class: "text-center text-white"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(pub.contenido), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024)) : createCommentVNode("", true),
                                                pub.link ? (openBlock(), createBlock(_component_v_card_actions, {
                                                  key: 1,
                                                  class: "justify-center"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_btn, {
                                                      color: "white",
                                                      variant: "flat",
                                                      href: pub.link,
                                                      target: "_blank"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" Ver más ")
                                                      ]),
                                                      _: 1
                                                    }, 8, ["href"])
                                                  ]),
                                                  _: 2
                                                }, 1024)) : createCommentVNode("", true)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ])
                                        ]),
                                        _: 2
                                      }, 1032, ["src"]);
                                    }), 128))
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
                    _push3(`<!---->`);
                  }
                  if (__props.promociones && __props.promociones.length > 0) {
                    _push3(ssrRenderComponent(_component_v_row, { class: "mt-4" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_v_card, {
                                  class: "mx-4",
                                  flat: ""
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_v_card_title, { class: "text-h5 font-weight-bold d-flex align-center" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_v_icon, {
                                              color: "warning",
                                              class: "mr-2"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`mdi-tag-off`);
                                                } else {
                                                  return [
                                                    createTextVNode("mdi-tag-off")
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                            _push7(` Promociones del Mes `);
                                          } else {
                                            return [
                                              createVNode(_component_v_icon, {
                                                color: "warning",
                                                class: "mr-2"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-tag-off")
                                                ]),
                                                _: 1
                                              }),
                                              createTextVNode(" Promociones del Mes ")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_v_card_text, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_v_row, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<!--[-->`);
                                                  ssrRenderList(__props.promociones, (promo, index) => {
                                                    _push8(ssrRenderComponent(_component_v_col, {
                                                      key: index,
                                                      cols: "12",
                                                      sm: "6",
                                                      md: "4"
                                                    }, {
                                                      default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(ssrRenderComponent(_component_v_card, {
                                                            class: "elevation-2",
                                                            variant: "outlined"
                                                          }, {
                                                            default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                              if (_push10) {
                                                                _push10(ssrRenderComponent(_component_v_card_title, null, {
                                                                  default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                    if (_push11) {
                                                                      _push11(`${ssrInterpolate(promo.titulo)}`);
                                                                    } else {
                                                                      return [
                                                                        createTextVNode(toDisplayString(promo.titulo), 1)
                                                                      ];
                                                                    }
                                                                  }),
                                                                  _: 2
                                                                }, _parent10, _scopeId9));
                                                                _push10(ssrRenderComponent(_component_v_card_text, null, {
                                                                  default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                    if (_push11) {
                                                                      _push11(`<p data-v-c31f92c2${_scopeId10}>${ssrInterpolate(promo.descripcion)}</p>`);
                                                                      _push11(ssrRenderComponent(_component_v_chip, {
                                                                        color: "success",
                                                                        class: "mt-2"
                                                                      }, {
                                                                        default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                          if (_push12) {
                                                                            _push12(`${ssrInterpolate(promo.descuento)}% DESC `);
                                                                          } else {
                                                                            return [
                                                                              createTextVNode(toDisplayString(promo.descuento) + "% DESC ", 1)
                                                                            ];
                                                                          }
                                                                        }),
                                                                        _: 2
                                                                      }, _parent11, _scopeId10));
                                                                      _push11(`<p class="text-caption mt-2" data-v-c31f92c2${_scopeId10}> Válido: ${ssrInterpolate(promo.fecha_inicio)} - ${ssrInterpolate(promo.fecha_fin)}</p>`);
                                                                    } else {
                                                                      return [
                                                                        createVNode("p", null, toDisplayString(promo.descripcion), 1),
                                                                        createVNode(_component_v_chip, {
                                                                          color: "success",
                                                                          class: "mt-2"
                                                                        }, {
                                                                          default: withCtx(() => [
                                                                            createTextVNode(toDisplayString(promo.descuento) + "% DESC ", 1)
                                                                          ]),
                                                                          _: 2
                                                                        }, 1024),
                                                                        createVNode("p", { class: "text-caption mt-2" }, " Válido: " + toDisplayString(promo.fecha_inicio) + " - " + toDisplayString(promo.fecha_fin), 1)
                                                                      ];
                                                                    }
                                                                  }),
                                                                  _: 2
                                                                }, _parent10, _scopeId9));
                                                              } else {
                                                                return [
                                                                  createVNode(_component_v_card_title, null, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode(toDisplayString(promo.titulo), 1)
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024),
                                                                  createVNode(_component_v_card_text, null, {
                                                                    default: withCtx(() => [
                                                                      createVNode("p", null, toDisplayString(promo.descripcion), 1),
                                                                      createVNode(_component_v_chip, {
                                                                        color: "success",
                                                                        class: "mt-2"
                                                                      }, {
                                                                        default: withCtx(() => [
                                                                          createTextVNode(toDisplayString(promo.descuento) + "% DESC ", 1)
                                                                        ]),
                                                                        _: 2
                                                                      }, 1024),
                                                                      createVNode("p", { class: "text-caption mt-2" }, " Válido: " + toDisplayString(promo.fecha_inicio) + " - " + toDisplayString(promo.fecha_fin), 1)
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024)
                                                                ];
                                                              }
                                                            }),
                                                            _: 2
                                                          }, _parent9, _scopeId8));
                                                        } else {
                                                          return [
                                                            createVNode(_component_v_card, {
                                                              class: "elevation-2",
                                                              variant: "outlined"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode(_component_v_card_title, null, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode(toDisplayString(promo.titulo), 1)
                                                                  ]),
                                                                  _: 2
                                                                }, 1024),
                                                                createVNode(_component_v_card_text, null, {
                                                                  default: withCtx(() => [
                                                                    createVNode("p", null, toDisplayString(promo.descripcion), 1),
                                                                    createVNode(_component_v_chip, {
                                                                      color: "success",
                                                                      class: "mt-2"
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode(toDisplayString(promo.descuento) + "% DESC ", 1)
                                                                      ]),
                                                                      _: 2
                                                                    }, 1024),
                                                                    createVNode("p", { class: "text-caption mt-2" }, " Válido: " + toDisplayString(promo.fecha_inicio) + " - " + toDisplayString(promo.fecha_fin), 1)
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
                                                    }, _parent8, _scopeId7));
                                                  });
                                                  _push8(`<!--]-->`);
                                                } else {
                                                  return [
                                                    (openBlock(true), createBlock(Fragment, null, renderList(__props.promociones, (promo, index) => {
                                                      return openBlock(), createBlock(_component_v_col, {
                                                        key: index,
                                                        cols: "12",
                                                        sm: "6",
                                                        md: "4"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_card, {
                                                            class: "elevation-2",
                                                            variant: "outlined"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(_component_v_card_title, null, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(toDisplayString(promo.titulo), 1)
                                                                ]),
                                                                _: 2
                                                              }, 1024),
                                                              createVNode(_component_v_card_text, null, {
                                                                default: withCtx(() => [
                                                                  createVNode("p", null, toDisplayString(promo.descripcion), 1),
                                                                  createVNode(_component_v_chip, {
                                                                    color: "success",
                                                                    class: "mt-2"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode(toDisplayString(promo.descuento) + "% DESC ", 1)
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024),
                                                                  createVNode("p", { class: "text-caption mt-2" }, " Válido: " + toDisplayString(promo.fecha_inicio) + " - " + toDisplayString(promo.fecha_fin), 1)
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
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_v_row, null, {
                                                default: withCtx(() => [
                                                  (openBlock(true), createBlock(Fragment, null, renderList(__props.promociones, (promo, index) => {
                                                    return openBlock(), createBlock(_component_v_col, {
                                                      key: index,
                                                      cols: "12",
                                                      sm: "6",
                                                      md: "4"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_card, {
                                                          class: "elevation-2",
                                                          variant: "outlined"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(_component_v_card_title, null, {
                                                              default: withCtx(() => [
                                                                createTextVNode(toDisplayString(promo.titulo), 1)
                                                              ]),
                                                              _: 2
                                                            }, 1024),
                                                            createVNode(_component_v_card_text, null, {
                                                              default: withCtx(() => [
                                                                createVNode("p", null, toDisplayString(promo.descripcion), 1),
                                                                createVNode(_component_v_chip, {
                                                                  color: "success",
                                                                  class: "mt-2"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode(toDisplayString(promo.descuento) + "% DESC ", 1)
                                                                  ]),
                                                                  _: 2
                                                                }, 1024),
                                                                createVNode("p", { class: "text-caption mt-2" }, " Válido: " + toDisplayString(promo.fecha_inicio) + " - " + toDisplayString(promo.fecha_fin), 1)
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
                                        createVNode(_component_v_card_title, { class: "text-h5 font-weight-bold d-flex align-center" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_icon, {
                                              color: "warning",
                                              class: "mr-2"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-tag-off")
                                              ]),
                                              _: 1
                                            }),
                                            createTextVNode(" Promociones del Mes ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_card_text, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_row, null, {
                                              default: withCtx(() => [
                                                (openBlock(true), createBlock(Fragment, null, renderList(__props.promociones, (promo, index) => {
                                                  return openBlock(), createBlock(_component_v_col, {
                                                    key: index,
                                                    cols: "12",
                                                    sm: "6",
                                                    md: "4"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_card, {
                                                        class: "elevation-2",
                                                        variant: "outlined"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_card_title, null, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(promo.titulo), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1024),
                                                          createVNode(_component_v_card_text, null, {
                                                            default: withCtx(() => [
                                                              createVNode("p", null, toDisplayString(promo.descripcion), 1),
                                                              createVNode(_component_v_chip, {
                                                                color: "success",
                                                                class: "mt-2"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(toDisplayString(promo.descuento) + "% DESC ", 1)
                                                                ]),
                                                                _: 2
                                                              }, 1024),
                                                              createVNode("p", { class: "text-caption mt-2" }, " Válido: " + toDisplayString(promo.fecha_inicio) + " - " + toDisplayString(promo.fecha_fin), 1)
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
                                  createVNode(_component_v_card, {
                                    class: "mx-4",
                                    flat: ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_card_title, { class: "text-h5 font-weight-bold d-flex align-center" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_icon, {
                                            color: "warning",
                                            class: "mr-2"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-tag-off")
                                            ]),
                                            _: 1
                                          }),
                                          createTextVNode(" Promociones del Mes ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_card_text, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_row, null, {
                                            default: withCtx(() => [
                                              (openBlock(true), createBlock(Fragment, null, renderList(__props.promociones, (promo, index) => {
                                                return openBlock(), createBlock(_component_v_col, {
                                                  key: index,
                                                  cols: "12",
                                                  sm: "6",
                                                  md: "4"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_card, {
                                                      class: "elevation-2",
                                                      variant: "outlined"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_card_title, null, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(promo.titulo), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createVNode(_component_v_card_text, null, {
                                                          default: withCtx(() => [
                                                            createVNode("p", null, toDisplayString(promo.descripcion), 1),
                                                            createVNode(_component_v_chip, {
                                                              color: "success",
                                                              class: "mt-2"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(toDisplayString(promo.descuento) + "% DESC ", 1)
                                                              ]),
                                                              _: 2
                                                            }, 1024),
                                                            createVNode("p", { class: "text-caption mt-2" }, " Válido: " + toDisplayString(promo.fecha_inicio) + " - " + toDisplayString(promo.fecha_fin), 1)
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
                            createVNode(_component_v_col, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_card, {
                                  class: "mx-4",
                                  flat: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_card_title, { class: "text-h5 font-weight-bold d-flex align-center" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_icon, {
                                          color: "warning",
                                          class: "mr-2"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-tag-off")
                                          ]),
                                          _: 1
                                        }),
                                        createTextVNode(" Promociones del Mes ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_card_text, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_row, null, {
                                          default: withCtx(() => [
                                            (openBlock(true), createBlock(Fragment, null, renderList(__props.promociones, (promo, index) => {
                                              return openBlock(), createBlock(_component_v_col, {
                                                key: index,
                                                cols: "12",
                                                sm: "6",
                                                md: "4"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_card, {
                                                    class: "elevation-2",
                                                    variant: "outlined"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_card_title, null, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(promo.titulo), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024),
                                                      createVNode(_component_v_card_text, null, {
                                                        default: withCtx(() => [
                                                          createVNode("p", null, toDisplayString(promo.descripcion), 1),
                                                          createVNode(_component_v_chip, {
                                                            color: "success",
                                                            class: "mt-2"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(promo.descuento) + "% DESC ", 1)
                                                            ]),
                                                            _: 2
                                                          }, 1024),
                                                          createVNode("p", { class: "text-caption mt-2" }, " Válido: " + toDisplayString(promo.fecha_inicio) + " - " + toDisplayString(promo.fecha_fin), 1)
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
                    _push3(`<!---->`);
                  }
                  if (__props.productos && __props.productos.length > 0) {
                    _push3(ssrRenderComponent(_component_v_row, { class: "mt-4" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_v_card, {
                                  class: "mx-4 mb-4",
                                  flat: ""
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_v_card_title, { class: "text-h5 font-weight-bold d-flex align-center" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_v_icon, {
                                              color: "primary",
                                              class: "mr-2"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`mdi-store`);
                                                } else {
                                                  return [
                                                    createTextVNode("mdi-store")
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                            _push7(` Productos Recientes `);
                                          } else {
                                            return [
                                              createVNode(_component_v_icon, {
                                                color: "primary",
                                                class: "mr-2"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-store")
                                                ]),
                                                _: 1
                                              }),
                                              createTextVNode(" Productos Recientes ")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_v_card_text, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_v_row, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<!--[-->`);
                                                  ssrRenderList(__props.productos, (producto, index) => {
                                                    _push8(ssrRenderComponent(_component_v_col, {
                                                      key: index,
                                                      cols: "12",
                                                      sm: "6",
                                                      md: "3"
                                                    }, {
                                                      default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(ssrRenderComponent(_component_v_card, {
                                                            class: "elevation-2",
                                                            variant: "outlined"
                                                          }, {
                                                            default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                              if (_push10) {
                                                                if (producto.imagen) {
                                                                  _push10(ssrRenderComponent(_component_v_img, {
                                                                    src: _ctx.$assetUrl(producto.imagen.split(",")[0]),
                                                                    height: "150",
                                                                    cover: ""
                                                                  }, {
                                                                    placeholder: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                      if (_push11) {
                                                                        _push11(`<div class="d-flex align-center justify-center fill-height" data-v-c31f92c2${_scopeId10}>`);
                                                                        _push11(ssrRenderComponent(_component_v_icon, {
                                                                          size: "large",
                                                                          color: "grey"
                                                                        }, {
                                                                          default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                            if (_push12) {
                                                                              _push12(`mdi-image`);
                                                                            } else {
                                                                              return [
                                                                                createTextVNode("mdi-image")
                                                                              ];
                                                                            }
                                                                          }),
                                                                          _: 2
                                                                        }, _parent11, _scopeId10));
                                                                        _push11(`</div>`);
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
                                                                  }, _parent10, _scopeId9));
                                                                } else {
                                                                  _push10(ssrRenderComponent(_component_v_img, {
                                                                    height: "150",
                                                                    color: "grey-lighten-2",
                                                                    cover: ""
                                                                  }, {
                                                                    default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                      if (_push11) {
                                                                        _push11(`<div class="d-flex align-center justify-center fill-height" data-v-c31f92c2${_scopeId10}>`);
                                                                        _push11(ssrRenderComponent(_component_v_icon, {
                                                                          size: "large",
                                                                          color: "grey"
                                                                        }, {
                                                                          default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                            if (_push12) {
                                                                              _push12(`mdi-image`);
                                                                            } else {
                                                                              return [
                                                                                createTextVNode("mdi-image")
                                                                              ];
                                                                            }
                                                                          }),
                                                                          _: 2
                                                                        }, _parent11, _scopeId10));
                                                                        _push11(`</div>`);
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
                                                                  }, _parent10, _scopeId9));
                                                                }
                                                                _push10(ssrRenderComponent(_component_v_card_title, { class: "text-body-1 font-weight-bold" }, {
                                                                  default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                    if (_push11) {
                                                                      _push11(`${ssrInterpolate(producto.nombre)}`);
                                                                    } else {
                                                                      return [
                                                                        createTextVNode(toDisplayString(producto.nombre), 1)
                                                                      ];
                                                                    }
                                                                  }),
                                                                  _: 2
                                                                }, _parent10, _scopeId9));
                                                                _push10(ssrRenderComponent(_component_v_card_text, null, {
                                                                  default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                    if (_push11) {
                                                                      _push11(`<div class="text-h6 text-primary font-weight-bold" data-v-c31f92c2${_scopeId10}> $${ssrInterpolate(producto.precio)}</div>`);
                                                                      if (producto.empresa) {
                                                                        _push11(`<div class="text-caption text-grey mt-1" data-v-c31f92c2${_scopeId10}>${ssrInterpolate(producto.empresa.nombre)}</div>`);
                                                                      } else {
                                                                        _push11(`<!---->`);
                                                                      }
                                                                      if (producto.categoria) {
                                                                        _push11(`<div class="mt-2" data-v-c31f92c2${_scopeId10}>`);
                                                                        _push11(ssrRenderComponent(_component_v_chip, {
                                                                          size: "small",
                                                                          color: "blue-grey",
                                                                          variant: "tonal"
                                                                        }, {
                                                                          default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                            if (_push12) {
                                                                              _push12(`${ssrInterpolate(producto.categoria)}`);
                                                                            } else {
                                                                              return [
                                                                                createTextVNode(toDisplayString(producto.categoria), 1)
                                                                              ];
                                                                            }
                                                                          }),
                                                                          _: 2
                                                                        }, _parent11, _scopeId10));
                                                                        _push11(`</div>`);
                                                                      } else {
                                                                        _push11(`<!---->`);
                                                                      }
                                                                    } else {
                                                                      return [
                                                                        createVNode("div", { class: "text-h6 text-primary font-weight-bold" }, " $" + toDisplayString(producto.precio), 1),
                                                                        producto.empresa ? (openBlock(), createBlock("div", {
                                                                          key: 0,
                                                                          class: "text-caption text-grey mt-1"
                                                                        }, toDisplayString(producto.empresa.nombre), 1)) : createCommentVNode("", true),
                                                                        producto.categoria ? (openBlock(), createBlock("div", {
                                                                          key: 1,
                                                                          class: "mt-2"
                                                                        }, [
                                                                          createVNode(_component_v_chip, {
                                                                            size: "small",
                                                                            color: "blue-grey",
                                                                            variant: "tonal"
                                                                          }, {
                                                                            default: withCtx(() => [
                                                                              createTextVNode(toDisplayString(producto.categoria), 1)
                                                                            ]),
                                                                            _: 2
                                                                          }, 1024)
                                                                        ])) : createCommentVNode("", true)
                                                                      ];
                                                                    }
                                                                  }),
                                                                  _: 2
                                                                }, _parent10, _scopeId9));
                                                              } else {
                                                                return [
                                                                  producto.imagen ? (openBlock(), createBlock(_component_v_img, {
                                                                    key: 0,
                                                                    src: _ctx.$assetUrl(producto.imagen.split(",")[0]),
                                                                    height: "150",
                                                                    cover: ""
                                                                  }, {
                                                                    placeholder: withCtx(() => [
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
                                                                  }, 8, ["src"])) : (openBlock(), createBlock(_component_v_img, {
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
                                                                  createVNode(_component_v_card_title, { class: "text-body-1 font-weight-bold" }, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode(toDisplayString(producto.nombre), 1)
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024),
                                                                  createVNode(_component_v_card_text, null, {
                                                                    default: withCtx(() => [
                                                                      createVNode("div", { class: "text-h6 text-primary font-weight-bold" }, " $" + toDisplayString(producto.precio), 1),
                                                                      producto.empresa ? (openBlock(), createBlock("div", {
                                                                        key: 0,
                                                                        class: "text-caption text-grey mt-1"
                                                                      }, toDisplayString(producto.empresa.nombre), 1)) : createCommentVNode("", true),
                                                                      producto.categoria ? (openBlock(), createBlock("div", {
                                                                        key: 1,
                                                                        class: "mt-2"
                                                                      }, [
                                                                        createVNode(_component_v_chip, {
                                                                          size: "small",
                                                                          color: "blue-grey",
                                                                          variant: "tonal"
                                                                        }, {
                                                                          default: withCtx(() => [
                                                                            createTextVNode(toDisplayString(producto.categoria), 1)
                                                                          ]),
                                                                          _: 2
                                                                        }, 1024)
                                                                      ])) : createCommentVNode("", true)
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024)
                                                                ];
                                                              }
                                                            }),
                                                            _: 2
                                                          }, _parent9, _scopeId8));
                                                        } else {
                                                          return [
                                                            createVNode(_component_v_card, {
                                                              class: "elevation-2",
                                                              variant: "outlined"
                                                            }, {
                                                              default: withCtx(() => [
                                                                producto.imagen ? (openBlock(), createBlock(_component_v_img, {
                                                                  key: 0,
                                                                  src: _ctx.$assetUrl(producto.imagen.split(",")[0]),
                                                                  height: "150",
                                                                  cover: ""
                                                                }, {
                                                                  placeholder: withCtx(() => [
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
                                                                }, 8, ["src"])) : (openBlock(), createBlock(_component_v_img, {
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
                                                                createVNode(_component_v_card_title, { class: "text-body-1 font-weight-bold" }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode(toDisplayString(producto.nombre), 1)
                                                                  ]),
                                                                  _: 2
                                                                }, 1024),
                                                                createVNode(_component_v_card_text, null, {
                                                                  default: withCtx(() => [
                                                                    createVNode("div", { class: "text-h6 text-primary font-weight-bold" }, " $" + toDisplayString(producto.precio), 1),
                                                                    producto.empresa ? (openBlock(), createBlock("div", {
                                                                      key: 0,
                                                                      class: "text-caption text-grey mt-1"
                                                                    }, toDisplayString(producto.empresa.nombre), 1)) : createCommentVNode("", true),
                                                                    producto.categoria ? (openBlock(), createBlock("div", {
                                                                      key: 1,
                                                                      class: "mt-2"
                                                                    }, [
                                                                      createVNode(_component_v_chip, {
                                                                        size: "small",
                                                                        color: "blue-grey",
                                                                        variant: "tonal"
                                                                      }, {
                                                                        default: withCtx(() => [
                                                                          createTextVNode(toDisplayString(producto.categoria), 1)
                                                                        ]),
                                                                        _: 2
                                                                      }, 1024)
                                                                    ])) : createCommentVNode("", true)
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
                                                    }, _parent8, _scopeId7));
                                                  });
                                                  _push8(`<!--]-->`);
                                                } else {
                                                  return [
                                                    (openBlock(true), createBlock(Fragment, null, renderList(__props.productos, (producto, index) => {
                                                      return openBlock(), createBlock(_component_v_col, {
                                                        key: index,
                                                        cols: "12",
                                                        sm: "6",
                                                        md: "3"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_card, {
                                                            class: "elevation-2",
                                                            variant: "outlined"
                                                          }, {
                                                            default: withCtx(() => [
                                                              producto.imagen ? (openBlock(), createBlock(_component_v_img, {
                                                                key: 0,
                                                                src: _ctx.$assetUrl(producto.imagen.split(",")[0]),
                                                                height: "150",
                                                                cover: ""
                                                              }, {
                                                                placeholder: withCtx(() => [
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
                                                              }, 8, ["src"])) : (openBlock(), createBlock(_component_v_img, {
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
                                                              createVNode(_component_v_card_title, { class: "text-body-1 font-weight-bold" }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(toDisplayString(producto.nombre), 1)
                                                                ]),
                                                                _: 2
                                                              }, 1024),
                                                              createVNode(_component_v_card_text, null, {
                                                                default: withCtx(() => [
                                                                  createVNode("div", { class: "text-h6 text-primary font-weight-bold" }, " $" + toDisplayString(producto.precio), 1),
                                                                  producto.empresa ? (openBlock(), createBlock("div", {
                                                                    key: 0,
                                                                    class: "text-caption text-grey mt-1"
                                                                  }, toDisplayString(producto.empresa.nombre), 1)) : createCommentVNode("", true),
                                                                  producto.categoria ? (openBlock(), createBlock("div", {
                                                                    key: 1,
                                                                    class: "mt-2"
                                                                  }, [
                                                                    createVNode(_component_v_chip, {
                                                                      size: "small",
                                                                      color: "blue-grey",
                                                                      variant: "tonal"
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode(toDisplayString(producto.categoria), 1)
                                                                      ]),
                                                                      _: 2
                                                                    }, 1024)
                                                                  ])) : createCommentVNode("", true)
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
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_v_row, null, {
                                                default: withCtx(() => [
                                                  (openBlock(true), createBlock(Fragment, null, renderList(__props.productos, (producto, index) => {
                                                    return openBlock(), createBlock(_component_v_col, {
                                                      key: index,
                                                      cols: "12",
                                                      sm: "6",
                                                      md: "3"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_card, {
                                                          class: "elevation-2",
                                                          variant: "outlined"
                                                        }, {
                                                          default: withCtx(() => [
                                                            producto.imagen ? (openBlock(), createBlock(_component_v_img, {
                                                              key: 0,
                                                              src: _ctx.$assetUrl(producto.imagen.split(",")[0]),
                                                              height: "150",
                                                              cover: ""
                                                            }, {
                                                              placeholder: withCtx(() => [
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
                                                            }, 8, ["src"])) : (openBlock(), createBlock(_component_v_img, {
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
                                                            createVNode(_component_v_card_title, { class: "text-body-1 font-weight-bold" }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(toDisplayString(producto.nombre), 1)
                                                              ]),
                                                              _: 2
                                                            }, 1024),
                                                            createVNode(_component_v_card_text, null, {
                                                              default: withCtx(() => [
                                                                createVNode("div", { class: "text-h6 text-primary font-weight-bold" }, " $" + toDisplayString(producto.precio), 1),
                                                                producto.empresa ? (openBlock(), createBlock("div", {
                                                                  key: 0,
                                                                  class: "text-caption text-grey mt-1"
                                                                }, toDisplayString(producto.empresa.nombre), 1)) : createCommentVNode("", true),
                                                                producto.categoria ? (openBlock(), createBlock("div", {
                                                                  key: 1,
                                                                  class: "mt-2"
                                                                }, [
                                                                  createVNode(_component_v_chip, {
                                                                    size: "small",
                                                                    color: "blue-grey",
                                                                    variant: "tonal"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode(toDisplayString(producto.categoria), 1)
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024)
                                                                ])) : createCommentVNode("", true)
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
                                        createVNode(_component_v_card_title, { class: "text-h5 font-weight-bold d-flex align-center" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_icon, {
                                              color: "primary",
                                              class: "mr-2"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-store")
                                              ]),
                                              _: 1
                                            }),
                                            createTextVNode(" Productos Recientes ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_card_text, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_row, null, {
                                              default: withCtx(() => [
                                                (openBlock(true), createBlock(Fragment, null, renderList(__props.productos, (producto, index) => {
                                                  return openBlock(), createBlock(_component_v_col, {
                                                    key: index,
                                                    cols: "12",
                                                    sm: "6",
                                                    md: "3"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_card, {
                                                        class: "elevation-2",
                                                        variant: "outlined"
                                                      }, {
                                                        default: withCtx(() => [
                                                          producto.imagen ? (openBlock(), createBlock(_component_v_img, {
                                                            key: 0,
                                                            src: _ctx.$assetUrl(producto.imagen.split(",")[0]),
                                                            height: "150",
                                                            cover: ""
                                                          }, {
                                                            placeholder: withCtx(() => [
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
                                                          }, 8, ["src"])) : (openBlock(), createBlock(_component_v_img, {
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
                                                          createVNode(_component_v_card_title, { class: "text-body-1 font-weight-bold" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(producto.nombre), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1024),
                                                          createVNode(_component_v_card_text, null, {
                                                            default: withCtx(() => [
                                                              createVNode("div", { class: "text-h6 text-primary font-weight-bold" }, " $" + toDisplayString(producto.precio), 1),
                                                              producto.empresa ? (openBlock(), createBlock("div", {
                                                                key: 0,
                                                                class: "text-caption text-grey mt-1"
                                                              }, toDisplayString(producto.empresa.nombre), 1)) : createCommentVNode("", true),
                                                              producto.categoria ? (openBlock(), createBlock("div", {
                                                                key: 1,
                                                                class: "mt-2"
                                                              }, [
                                                                createVNode(_component_v_chip, {
                                                                  size: "small",
                                                                  color: "blue-grey",
                                                                  variant: "tonal"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode(toDisplayString(producto.categoria), 1)
                                                                  ]),
                                                                  _: 2
                                                                }, 1024)
                                                              ])) : createCommentVNode("", true)
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
                                  createVNode(_component_v_card, {
                                    class: "mx-4 mb-4",
                                    flat: ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_card_title, { class: "text-h5 font-weight-bold d-flex align-center" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_icon, {
                                            color: "primary",
                                            class: "mr-2"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-store")
                                            ]),
                                            _: 1
                                          }),
                                          createTextVNode(" Productos Recientes ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_card_text, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_row, null, {
                                            default: withCtx(() => [
                                              (openBlock(true), createBlock(Fragment, null, renderList(__props.productos, (producto, index) => {
                                                return openBlock(), createBlock(_component_v_col, {
                                                  key: index,
                                                  cols: "12",
                                                  sm: "6",
                                                  md: "3"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_card, {
                                                      class: "elevation-2",
                                                      variant: "outlined"
                                                    }, {
                                                      default: withCtx(() => [
                                                        producto.imagen ? (openBlock(), createBlock(_component_v_img, {
                                                          key: 0,
                                                          src: _ctx.$assetUrl(producto.imagen.split(",")[0]),
                                                          height: "150",
                                                          cover: ""
                                                        }, {
                                                          placeholder: withCtx(() => [
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
                                                        }, 8, ["src"])) : (openBlock(), createBlock(_component_v_img, {
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
                                                        createVNode(_component_v_card_title, { class: "text-body-1 font-weight-bold" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(producto.nombre), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createVNode(_component_v_card_text, null, {
                                                          default: withCtx(() => [
                                                            createVNode("div", { class: "text-h6 text-primary font-weight-bold" }, " $" + toDisplayString(producto.precio), 1),
                                                            producto.empresa ? (openBlock(), createBlock("div", {
                                                              key: 0,
                                                              class: "text-caption text-grey mt-1"
                                                            }, toDisplayString(producto.empresa.nombre), 1)) : createCommentVNode("", true),
                                                            producto.categoria ? (openBlock(), createBlock("div", {
                                                              key: 1,
                                                              class: "mt-2"
                                                            }, [
                                                              createVNode(_component_v_chip, {
                                                                size: "small",
                                                                color: "blue-grey",
                                                                variant: "tonal"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(toDisplayString(producto.categoria), 1)
                                                                ]),
                                                                _: 2
                                                              }, 1024)
                                                            ])) : createCommentVNode("", true)
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
                            createVNode(_component_v_col, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_card, {
                                  class: "mx-4 mb-4",
                                  flat: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_card_title, { class: "text-h5 font-weight-bold d-flex align-center" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_icon, {
                                          color: "primary",
                                          class: "mr-2"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-store")
                                          ]),
                                          _: 1
                                        }),
                                        createTextVNode(" Productos Recientes ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_card_text, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_row, null, {
                                          default: withCtx(() => [
                                            (openBlock(true), createBlock(Fragment, null, renderList(__props.productos, (producto, index) => {
                                              return openBlock(), createBlock(_component_v_col, {
                                                key: index,
                                                cols: "12",
                                                sm: "6",
                                                md: "3"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_card, {
                                                    class: "elevation-2",
                                                    variant: "outlined"
                                                  }, {
                                                    default: withCtx(() => [
                                                      producto.imagen ? (openBlock(), createBlock(_component_v_img, {
                                                        key: 0,
                                                        src: _ctx.$assetUrl(producto.imagen.split(",")[0]),
                                                        height: "150",
                                                        cover: ""
                                                      }, {
                                                        placeholder: withCtx(() => [
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
                                                      }, 8, ["src"])) : (openBlock(), createBlock(_component_v_img, {
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
                                                      createVNode(_component_v_card_title, { class: "text-body-1 font-weight-bold" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(producto.nombre), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024),
                                                      createVNode(_component_v_card_text, null, {
                                                        default: withCtx(() => [
                                                          createVNode("div", { class: "text-h6 text-primary font-weight-bold" }, " $" + toDisplayString(producto.precio), 1),
                                                          producto.empresa ? (openBlock(), createBlock("div", {
                                                            key: 0,
                                                            class: "text-caption text-grey mt-1"
                                                          }, toDisplayString(producto.empresa.nombre), 1)) : createCommentVNode("", true),
                                                          producto.categoria ? (openBlock(), createBlock("div", {
                                                            key: 1,
                                                            class: "mt-2"
                                                          }, [
                                                            createVNode(_component_v_chip, {
                                                              size: "small",
                                                              color: "blue-grey",
                                                              variant: "tonal"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(toDisplayString(producto.categoria), 1)
                                                              ]),
                                                              _: 2
                                                            }, 1024)
                                                          ])) : createCommentVNode("", true)
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
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_component_v_row, { class: "mt-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_card, {
                                class: "mx-4 mb-4",
                                flat: ""
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_card_title, { class: "text-h5 font-weight-bold d-flex align-center" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_icon, {
                                            color: "secondary",
                                            class: "mr-2"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`mdi-domain`);
                                              } else {
                                                return [
                                                  createTextVNode("mdi-domain")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(` Empresas `);
                                        } else {
                                          return [
                                            createVNode(_component_v_icon, {
                                              color: "secondary",
                                              class: "mr-2"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-domain")
                                              ]),
                                              _: 1
                                            }),
                                            createTextVNode(" Empresas ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_card_text, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_row, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<!--[-->`);
                                                ssrRenderList(__props.empresas, (empresa, index) => {
                                                  _push8(ssrRenderComponent(_component_v_col, {
                                                    key: index,
                                                    cols: "12",
                                                    sm: "6",
                                                    md: "4"
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(ssrRenderComponent(_component_v_card, {
                                                          class: "elevation-2",
                                                          variant: "outlined",
                                                          to: `/empresa/${empresa.id}`
                                                        }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              if (empresa.logo) {
                                                                _push10(ssrRenderComponent(_component_v_img, {
                                                                  src: _ctx.$assetUrl(empresa.logo),
                                                                  height: "100",
                                                                  cover: "",
                                                                  class: "bg-grey-lighten-3"
                                                                }, {
                                                                  placeholder: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                    if (_push11) {
                                                                      _push11(`<div class="d-flex align-center justify-center fill-height" data-v-c31f92c2${_scopeId10}>`);
                                                                      _push11(ssrRenderComponent(_component_v_icon, {
                                                                        size: "large",
                                                                        color: "grey"
                                                                      }, {
                                                                        default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                          if (_push12) {
                                                                            _push12(`mdi-domain`);
                                                                          } else {
                                                                            return [
                                                                              createTextVNode("mdi-domain")
                                                                            ];
                                                                          }
                                                                        }),
                                                                        _: 2
                                                                      }, _parent11, _scopeId10));
                                                                      _push11(`</div>`);
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
                                                                  _: 2
                                                                }, _parent10, _scopeId9));
                                                              } else {
                                                                _push10(ssrRenderComponent(_component_v_img, {
                                                                  height: "100",
                                                                  color: "grey-lighten-2",
                                                                  cover: ""
                                                                }, {
                                                                  default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                    if (_push11) {
                                                                      _push11(`<div class="d-flex align-center justify-center fill-height" data-v-c31f92c2${_scopeId10}>`);
                                                                      _push11(ssrRenderComponent(_component_v_icon, {
                                                                        size: "large",
                                                                        color: "grey"
                                                                      }, {
                                                                        default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                          if (_push12) {
                                                                            _push12(`mdi-domain`);
                                                                          } else {
                                                                            return [
                                                                              createTextVNode("mdi-domain")
                                                                            ];
                                                                          }
                                                                        }),
                                                                        _: 2
                                                                      }, _parent11, _scopeId10));
                                                                      _push11(`</div>`);
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
                                                                  _: 2
                                                                }, _parent10, _scopeId9));
                                                              }
                                                              _push10(ssrRenderComponent(_component_v_card_title, { class: "text-body-1 font-weight-bold" }, {
                                                                default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                  if (_push11) {
                                                                    _push11(`${ssrInterpolate(empresa.nombre)}`);
                                                                  } else {
                                                                    return [
                                                                      createTextVNode(toDisplayString(empresa.nombre), 1)
                                                                    ];
                                                                  }
                                                                }),
                                                                _: 2
                                                              }, _parent10, _scopeId9));
                                                              _push10(ssrRenderComponent(_component_v_card_text, null, {
                                                                default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                  if (_push11) {
                                                                    _push11(`<p class="text-truncate" data-v-c31f92c2${_scopeId10}>${ssrInterpolate(empresa.descripcion)}</p>`);
                                                                    if (empresa.telefono) {
                                                                      _push11(`<div class="text-caption" data-v-c31f92c2${_scopeId10}>`);
                                                                      _push11(ssrRenderComponent(_component_v_icon, { size: "small" }, {
                                                                        default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                          if (_push12) {
                                                                            _push12(`mdi-phone`);
                                                                          } else {
                                                                            return [
                                                                              createTextVNode("mdi-phone")
                                                                            ];
                                                                          }
                                                                        }),
                                                                        _: 2
                                                                      }, _parent11, _scopeId10));
                                                                      _push11(` ${ssrInterpolate(empresa.telefono)}</div>`);
                                                                    } else {
                                                                      _push11(`<!---->`);
                                                                    }
                                                                    if (empresa.categorias) {
                                                                      _push11(`<div class="mt-2" data-v-c31f92c2${_scopeId10}>`);
                                                                      _push11(ssrRenderComponent(_component_v_chip, {
                                                                        size: "small",
                                                                        color: "primary",
                                                                        variant: "tonal"
                                                                      }, {
                                                                        default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                          if (_push12) {
                                                                            _push12(`${ssrInterpolate(empresa.categorias)}`);
                                                                          } else {
                                                                            return [
                                                                              createTextVNode(toDisplayString(empresa.categorias), 1)
                                                                            ];
                                                                          }
                                                                        }),
                                                                        _: 2
                                                                      }, _parent11, _scopeId10));
                                                                      _push11(`</div>`);
                                                                    } else {
                                                                      _push11(`<!---->`);
                                                                    }
                                                                  } else {
                                                                    return [
                                                                      createVNode("p", { class: "text-truncate" }, toDisplayString(empresa.descripcion), 1),
                                                                      empresa.telefono ? (openBlock(), createBlock("div", {
                                                                        key: 0,
                                                                        class: "text-caption"
                                                                      }, [
                                                                        createVNode(_component_v_icon, { size: "small" }, {
                                                                          default: withCtx(() => [
                                                                            createTextVNode("mdi-phone")
                                                                          ]),
                                                                          _: 1
                                                                        }),
                                                                        createTextVNode(" " + toDisplayString(empresa.telefono), 1)
                                                                      ])) : createCommentVNode("", true),
                                                                      empresa.categorias ? (openBlock(), createBlock("div", {
                                                                        key: 1,
                                                                        class: "mt-2"
                                                                      }, [
                                                                        createVNode(_component_v_chip, {
                                                                          size: "small",
                                                                          color: "primary",
                                                                          variant: "tonal"
                                                                        }, {
                                                                          default: withCtx(() => [
                                                                            createTextVNode(toDisplayString(empresa.categorias), 1)
                                                                          ]),
                                                                          _: 2
                                                                        }, 1024)
                                                                      ])) : createCommentVNode("", true)
                                                                    ];
                                                                  }
                                                                }),
                                                                _: 2
                                                              }, _parent10, _scopeId9));
                                                            } else {
                                                              return [
                                                                empresa.logo ? (openBlock(), createBlock(_component_v_img, {
                                                                  key: 0,
                                                                  src: _ctx.$assetUrl(empresa.logo),
                                                                  height: "100",
                                                                  cover: "",
                                                                  class: "bg-grey-lighten-3"
                                                                }, {
                                                                  placeholder: withCtx(() => [
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
                                                                }, 8, ["src"])) : (openBlock(), createBlock(_component_v_img, {
                                                                  key: 1,
                                                                  height: "100",
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
                                                                })),
                                                                createVNode(_component_v_card_title, { class: "text-body-1 font-weight-bold" }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode(toDisplayString(empresa.nombre), 1)
                                                                  ]),
                                                                  _: 2
                                                                }, 1024),
                                                                createVNode(_component_v_card_text, null, {
                                                                  default: withCtx(() => [
                                                                    createVNode("p", { class: "text-truncate" }, toDisplayString(empresa.descripcion), 1),
                                                                    empresa.telefono ? (openBlock(), createBlock("div", {
                                                                      key: 0,
                                                                      class: "text-caption"
                                                                    }, [
                                                                      createVNode(_component_v_icon, { size: "small" }, {
                                                                        default: withCtx(() => [
                                                                          createTextVNode("mdi-phone")
                                                                        ]),
                                                                        _: 1
                                                                      }),
                                                                      createTextVNode(" " + toDisplayString(empresa.telefono), 1)
                                                                    ])) : createCommentVNode("", true),
                                                                    empresa.categorias ? (openBlock(), createBlock("div", {
                                                                      key: 1,
                                                                      class: "mt-2"
                                                                    }, [
                                                                      createVNode(_component_v_chip, {
                                                                        size: "small",
                                                                        color: "primary",
                                                                        variant: "tonal"
                                                                      }, {
                                                                        default: withCtx(() => [
                                                                          createTextVNode(toDisplayString(empresa.categorias), 1)
                                                                        ]),
                                                                        _: 2
                                                                      }, 1024)
                                                                    ])) : createCommentVNode("", true)
                                                                  ]),
                                                                  _: 2
                                                                }, 1024)
                                                              ];
                                                            }
                                                          }),
                                                          _: 2
                                                        }, _parent9, _scopeId8));
                                                      } else {
                                                        return [
                                                          createVNode(_component_v_card, {
                                                            class: "elevation-2",
                                                            variant: "outlined",
                                                            to: `/empresa/${empresa.id}`
                                                          }, {
                                                            default: withCtx(() => [
                                                              empresa.logo ? (openBlock(), createBlock(_component_v_img, {
                                                                key: 0,
                                                                src: _ctx.$assetUrl(empresa.logo),
                                                                height: "100",
                                                                cover: "",
                                                                class: "bg-grey-lighten-3"
                                                              }, {
                                                                placeholder: withCtx(() => [
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
                                                              }, 8, ["src"])) : (openBlock(), createBlock(_component_v_img, {
                                                                key: 1,
                                                                height: "100",
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
                                                              })),
                                                              createVNode(_component_v_card_title, { class: "text-body-1 font-weight-bold" }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(toDisplayString(empresa.nombre), 1)
                                                                ]),
                                                                _: 2
                                                              }, 1024),
                                                              createVNode(_component_v_card_text, null, {
                                                                default: withCtx(() => [
                                                                  createVNode("p", { class: "text-truncate" }, toDisplayString(empresa.descripcion), 1),
                                                                  empresa.telefono ? (openBlock(), createBlock("div", {
                                                                    key: 0,
                                                                    class: "text-caption"
                                                                  }, [
                                                                    createVNode(_component_v_icon, { size: "small" }, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode("mdi-phone")
                                                                      ]),
                                                                      _: 1
                                                                    }),
                                                                    createTextVNode(" " + toDisplayString(empresa.telefono), 1)
                                                                  ])) : createCommentVNode("", true),
                                                                  empresa.categorias ? (openBlock(), createBlock("div", {
                                                                    key: 1,
                                                                    class: "mt-2"
                                                                  }, [
                                                                    createVNode(_component_v_chip, {
                                                                      size: "small",
                                                                      color: "primary",
                                                                      variant: "tonal"
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode(toDisplayString(empresa.categorias), 1)
                                                                      ]),
                                                                      _: 2
                                                                    }, 1024)
                                                                  ])) : createCommentVNode("", true)
                                                                ]),
                                                                _: 2
                                                              }, 1024)
                                                            ]),
                                                            _: 2
                                                          }, 1032, ["to"])
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                });
                                                _push8(`<!--]-->`);
                                              } else {
                                                return [
                                                  (openBlock(true), createBlock(Fragment, null, renderList(__props.empresas, (empresa, index) => {
                                                    return openBlock(), createBlock(_component_v_col, {
                                                      key: index,
                                                      cols: "12",
                                                      sm: "6",
                                                      md: "4"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_card, {
                                                          class: "elevation-2",
                                                          variant: "outlined",
                                                          to: `/empresa/${empresa.id}`
                                                        }, {
                                                          default: withCtx(() => [
                                                            empresa.logo ? (openBlock(), createBlock(_component_v_img, {
                                                              key: 0,
                                                              src: _ctx.$assetUrl(empresa.logo),
                                                              height: "100",
                                                              cover: "",
                                                              class: "bg-grey-lighten-3"
                                                            }, {
                                                              placeholder: withCtx(() => [
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
                                                            }, 8, ["src"])) : (openBlock(), createBlock(_component_v_img, {
                                                              key: 1,
                                                              height: "100",
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
                                                            })),
                                                            createVNode(_component_v_card_title, { class: "text-body-1 font-weight-bold" }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(toDisplayString(empresa.nombre), 1)
                                                              ]),
                                                              _: 2
                                                            }, 1024),
                                                            createVNode(_component_v_card_text, null, {
                                                              default: withCtx(() => [
                                                                createVNode("p", { class: "text-truncate" }, toDisplayString(empresa.descripcion), 1),
                                                                empresa.telefono ? (openBlock(), createBlock("div", {
                                                                  key: 0,
                                                                  class: "text-caption"
                                                                }, [
                                                                  createVNode(_component_v_icon, { size: "small" }, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode("mdi-phone")
                                                                    ]),
                                                                    _: 1
                                                                  }),
                                                                  createTextVNode(" " + toDisplayString(empresa.telefono), 1)
                                                                ])) : createCommentVNode("", true),
                                                                empresa.categorias ? (openBlock(), createBlock("div", {
                                                                  key: 1,
                                                                  class: "mt-2"
                                                                }, [
                                                                  createVNode(_component_v_chip, {
                                                                    size: "small",
                                                                    color: "primary",
                                                                    variant: "tonal"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode(toDisplayString(empresa.categorias), 1)
                                                                    ]),
                                                                    _: 2
                                                                  }, 1024)
                                                                ])) : createCommentVNode("", true)
                                                              ]),
                                                              _: 2
                                                            }, 1024)
                                                          ]),
                                                          _: 2
                                                        }, 1032, ["to"])
                                                      ]),
                                                      _: 2
                                                    }, 1024);
                                                  }), 128))
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_row, null, {
                                              default: withCtx(() => [
                                                (openBlock(true), createBlock(Fragment, null, renderList(__props.empresas, (empresa, index) => {
                                                  return openBlock(), createBlock(_component_v_col, {
                                                    key: index,
                                                    cols: "12",
                                                    sm: "6",
                                                    md: "4"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_card, {
                                                        class: "elevation-2",
                                                        variant: "outlined",
                                                        to: `/empresa/${empresa.id}`
                                                      }, {
                                                        default: withCtx(() => [
                                                          empresa.logo ? (openBlock(), createBlock(_component_v_img, {
                                                            key: 0,
                                                            src: _ctx.$assetUrl(empresa.logo),
                                                            height: "100",
                                                            cover: "",
                                                            class: "bg-grey-lighten-3"
                                                          }, {
                                                            placeholder: withCtx(() => [
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
                                                          }, 8, ["src"])) : (openBlock(), createBlock(_component_v_img, {
                                                            key: 1,
                                                            height: "100",
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
                                                          })),
                                                          createVNode(_component_v_card_title, { class: "text-body-1 font-weight-bold" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(empresa.nombre), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1024),
                                                          createVNode(_component_v_card_text, null, {
                                                            default: withCtx(() => [
                                                              createVNode("p", { class: "text-truncate" }, toDisplayString(empresa.descripcion), 1),
                                                              empresa.telefono ? (openBlock(), createBlock("div", {
                                                                key: 0,
                                                                class: "text-caption"
                                                              }, [
                                                                createVNode(_component_v_icon, { size: "small" }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode("mdi-phone")
                                                                  ]),
                                                                  _: 1
                                                                }),
                                                                createTextVNode(" " + toDisplayString(empresa.telefono), 1)
                                                              ])) : createCommentVNode("", true),
                                                              empresa.categorias ? (openBlock(), createBlock("div", {
                                                                key: 1,
                                                                class: "mt-2"
                                                              }, [
                                                                createVNode(_component_v_chip, {
                                                                  size: "small",
                                                                  color: "primary",
                                                                  variant: "tonal"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode(toDisplayString(empresa.categorias), 1)
                                                                  ]),
                                                                  _: 2
                                                                }, 1024)
                                                              ])) : createCommentVNode("", true)
                                                            ]),
                                                            _: 2
                                                          }, 1024)
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["to"])
                                                    ]),
                                                    _: 2
                                                  }, 1024);
                                                }), 128))
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
                                      createVNode(_component_v_card_title, { class: "text-h5 font-weight-bold d-flex align-center" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_icon, {
                                            color: "secondary",
                                            class: "mr-2"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-domain")
                                            ]),
                                            _: 1
                                          }),
                                          createTextVNode(" Empresas ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_card_text, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_row, null, {
                                            default: withCtx(() => [
                                              (openBlock(true), createBlock(Fragment, null, renderList(__props.empresas, (empresa, index) => {
                                                return openBlock(), createBlock(_component_v_col, {
                                                  key: index,
                                                  cols: "12",
                                                  sm: "6",
                                                  md: "4"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_card, {
                                                      class: "elevation-2",
                                                      variant: "outlined",
                                                      to: `/empresa/${empresa.id}`
                                                    }, {
                                                      default: withCtx(() => [
                                                        empresa.logo ? (openBlock(), createBlock(_component_v_img, {
                                                          key: 0,
                                                          src: _ctx.$assetUrl(empresa.logo),
                                                          height: "100",
                                                          cover: "",
                                                          class: "bg-grey-lighten-3"
                                                        }, {
                                                          placeholder: withCtx(() => [
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
                                                        }, 8, ["src"])) : (openBlock(), createBlock(_component_v_img, {
                                                          key: 1,
                                                          height: "100",
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
                                                        })),
                                                        createVNode(_component_v_card_title, { class: "text-body-1 font-weight-bold" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(empresa.nombre), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024),
                                                        createVNode(_component_v_card_text, null, {
                                                          default: withCtx(() => [
                                                            createVNode("p", { class: "text-truncate" }, toDisplayString(empresa.descripcion), 1),
                                                            empresa.telefono ? (openBlock(), createBlock("div", {
                                                              key: 0,
                                                              class: "text-caption"
                                                            }, [
                                                              createVNode(_component_v_icon, { size: "small" }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode("mdi-phone")
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createTextVNode(" " + toDisplayString(empresa.telefono), 1)
                                                            ])) : createCommentVNode("", true),
                                                            empresa.categorias ? (openBlock(), createBlock("div", {
                                                              key: 1,
                                                              class: "mt-2"
                                                            }, [
                                                              createVNode(_component_v_chip, {
                                                                size: "small",
                                                                color: "primary",
                                                                variant: "tonal"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(toDisplayString(empresa.categorias), 1)
                                                                ]),
                                                                _: 2
                                                              }, 1024)
                                                            ])) : createCommentVNode("", true)
                                                          ]),
                                                          _: 2
                                                        }, 1024)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["to"])
                                                  ]),
                                                  _: 2
                                                }, 1024);
                                              }), 128))
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
                                createVNode(_component_v_card, {
                                  class: "mx-4 mb-4",
                                  flat: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_card_title, { class: "text-h5 font-weight-bold d-flex align-center" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_icon, {
                                          color: "secondary",
                                          class: "mr-2"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-domain")
                                          ]),
                                          _: 1
                                        }),
                                        createTextVNode(" Empresas ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_card_text, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_row, null, {
                                          default: withCtx(() => [
                                            (openBlock(true), createBlock(Fragment, null, renderList(__props.empresas, (empresa, index) => {
                                              return openBlock(), createBlock(_component_v_col, {
                                                key: index,
                                                cols: "12",
                                                sm: "6",
                                                md: "4"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_card, {
                                                    class: "elevation-2",
                                                    variant: "outlined",
                                                    to: `/empresa/${empresa.id}`
                                                  }, {
                                                    default: withCtx(() => [
                                                      empresa.logo ? (openBlock(), createBlock(_component_v_img, {
                                                        key: 0,
                                                        src: _ctx.$assetUrl(empresa.logo),
                                                        height: "100",
                                                        cover: "",
                                                        class: "bg-grey-lighten-3"
                                                      }, {
                                                        placeholder: withCtx(() => [
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
                                                      }, 8, ["src"])) : (openBlock(), createBlock(_component_v_img, {
                                                        key: 1,
                                                        height: "100",
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
                                                      })),
                                                      createVNode(_component_v_card_title, { class: "text-body-1 font-weight-bold" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(empresa.nombre), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024),
                                                      createVNode(_component_v_card_text, null, {
                                                        default: withCtx(() => [
                                                          createVNode("p", { class: "text-truncate" }, toDisplayString(empresa.descripcion), 1),
                                                          empresa.telefono ? (openBlock(), createBlock("div", {
                                                            key: 0,
                                                            class: "text-caption"
                                                          }, [
                                                            createVNode(_component_v_icon, { size: "small" }, {
                                                              default: withCtx(() => [
                                                                createTextVNode("mdi-phone")
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createTextVNode(" " + toDisplayString(empresa.telefono), 1)
                                                          ])) : createCommentVNode("", true),
                                                          empresa.categorias ? (openBlock(), createBlock("div", {
                                                            key: 1,
                                                            class: "mt-2"
                                                          }, [
                                                            createVNode(_component_v_chip, {
                                                              size: "small",
                                                              color: "primary",
                                                              variant: "tonal"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(toDisplayString(empresa.categorias), 1)
                                                              ]),
                                                              _: 2
                                                            }, 1024)
                                                          ])) : createCommentVNode("", true)
                                                        ]),
                                                        _: 2
                                                      }, 1024)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["to"])
                                                ]),
                                                _: 2
                                              }, 1024);
                                            }), 128))
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
                          createVNode(_component_v_col, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card, {
                                class: "mx-4 mb-4",
                                flat: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_card_title, { class: "text-h5 font-weight-bold d-flex align-center" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_icon, {
                                        color: "secondary",
                                        class: "mr-2"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-domain")
                                        ]),
                                        _: 1
                                      }),
                                      createTextVNode(" Empresas ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_card_text, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_row, null, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(__props.empresas, (empresa, index) => {
                                            return openBlock(), createBlock(_component_v_col, {
                                              key: index,
                                              cols: "12",
                                              sm: "6",
                                              md: "4"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_card, {
                                                  class: "elevation-2",
                                                  variant: "outlined",
                                                  to: `/empresa/${empresa.id}`
                                                }, {
                                                  default: withCtx(() => [
                                                    empresa.logo ? (openBlock(), createBlock(_component_v_img, {
                                                      key: 0,
                                                      src: _ctx.$assetUrl(empresa.logo),
                                                      height: "100",
                                                      cover: "",
                                                      class: "bg-grey-lighten-3"
                                                    }, {
                                                      placeholder: withCtx(() => [
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
                                                    }, 8, ["src"])) : (openBlock(), createBlock(_component_v_img, {
                                                      key: 1,
                                                      height: "100",
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
                                                    })),
                                                    createVNode(_component_v_card_title, { class: "text-body-1 font-weight-bold" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(empresa.nombre), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode(_component_v_card_text, null, {
                                                      default: withCtx(() => [
                                                        createVNode("p", { class: "text-truncate" }, toDisplayString(empresa.descripcion), 1),
                                                        empresa.telefono ? (openBlock(), createBlock("div", {
                                                          key: 0,
                                                          class: "text-caption"
                                                        }, [
                                                          createVNode(_component_v_icon, { size: "small" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("mdi-phone")
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createTextVNode(" " + toDisplayString(empresa.telefono), 1)
                                                        ])) : createCommentVNode("", true),
                                                        empresa.categorias ? (openBlock(), createBlock("div", {
                                                          key: 1,
                                                          class: "mt-2"
                                                        }, [
                                                          createVNode(_component_v_chip, {
                                                            size: "small",
                                                            color: "primary",
                                                            variant: "tonal"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(empresa.categorias), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1024)
                                                        ])) : createCommentVNode("", true)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["to"])
                                              ]),
                                              _: 2
                                            }, 1024);
                                          }), 128))
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
                    __props.publicidades && __props.publicidades.length > 0 ? (openBlock(), createBlock(_component_v_row, { key: 0 }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, { cols: "12" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_carousel, {
                              "hide-delimiter-background": "",
                              height: "300",
                              cycle: ""
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(__props.publicidades, (pub, index) => {
                                  return openBlock(), createBlock(_component_v_carousel_item, {
                                    key: index,
                                    src: _ctx.$assetUrl(pub.imagen),
                                    cover: ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "d-flex fill-height align-end justify-center bg-gradient-overlay pb-4" }, [
                                        createVNode(_component_v_card, {
                                          class: "mb-4 bg-transparent",
                                          "max-width": "800",
                                          flat: ""
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_card_title, { class: "text-h5 text-white font-weight-bold text-center" }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(pub.titulo), 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            pub.contenido ? (openBlock(), createBlock(_component_v_card_text, {
                                              key: 0,
                                              class: "text-center text-white"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(pub.contenido), 1)
                                              ]),
                                              _: 2
                                            }, 1024)) : createCommentVNode("", true),
                                            pub.link ? (openBlock(), createBlock(_component_v_card_actions, {
                                              key: 1,
                                              class: "justify-center"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_btn, {
                                                  color: "white",
                                                  variant: "flat",
                                                  href: pub.link,
                                                  target: "_blank"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Ver más ")
                                                  ]),
                                                  _: 1
                                                }, 8, ["href"])
                                              ]),
                                              _: 2
                                            }, 1024)) : createCommentVNode("", true)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ])
                                    ]),
                                    _: 2
                                  }, 1032, ["src"]);
                                }), 128))
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    __props.promociones && __props.promociones.length > 0 ? (openBlock(), createBlock(_component_v_row, {
                      key: 1,
                      class: "mt-4"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, { cols: "12" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card, {
                              class: "mx-4",
                              flat: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_card_title, { class: "text-h5 font-weight-bold d-flex align-center" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_icon, {
                                      color: "warning",
                                      class: "mr-2"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-tag-off")
                                      ]),
                                      _: 1
                                    }),
                                    createTextVNode(" Promociones del Mes ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_card_text, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_row, null, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList(__props.promociones, (promo, index) => {
                                          return openBlock(), createBlock(_component_v_col, {
                                            key: index,
                                            cols: "12",
                                            sm: "6",
                                            md: "4"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_card, {
                                                class: "elevation-2",
                                                variant: "outlined"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_card_title, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(promo.titulo), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode(_component_v_card_text, null, {
                                                    default: withCtx(() => [
                                                      createVNode("p", null, toDisplayString(promo.descripcion), 1),
                                                      createVNode(_component_v_chip, {
                                                        color: "success",
                                                        class: "mt-2"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(promo.descuento) + "% DESC ", 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024),
                                                      createVNode("p", { class: "text-caption mt-2" }, " Válido: " + toDisplayString(promo.fecha_inicio) + " - " + toDisplayString(promo.fecha_fin), 1)
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
                    })) : createCommentVNode("", true),
                    __props.productos && __props.productos.length > 0 ? (openBlock(), createBlock(_component_v_row, {
                      key: 2,
                      class: "mt-4"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, { cols: "12" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card, {
                              class: "mx-4 mb-4",
                              flat: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_card_title, { class: "text-h5 font-weight-bold d-flex align-center" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_icon, {
                                      color: "primary",
                                      class: "mr-2"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-store")
                                      ]),
                                      _: 1
                                    }),
                                    createTextVNode(" Productos Recientes ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_card_text, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_row, null, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList(__props.productos, (producto, index) => {
                                          return openBlock(), createBlock(_component_v_col, {
                                            key: index,
                                            cols: "12",
                                            sm: "6",
                                            md: "3"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_card, {
                                                class: "elevation-2",
                                                variant: "outlined"
                                              }, {
                                                default: withCtx(() => [
                                                  producto.imagen ? (openBlock(), createBlock(_component_v_img, {
                                                    key: 0,
                                                    src: _ctx.$assetUrl(producto.imagen.split(",")[0]),
                                                    height: "150",
                                                    cover: ""
                                                  }, {
                                                    placeholder: withCtx(() => [
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
                                                  }, 8, ["src"])) : (openBlock(), createBlock(_component_v_img, {
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
                                                  createVNode(_component_v_card_title, { class: "text-body-1 font-weight-bold" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(producto.nombre), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode(_component_v_card_text, null, {
                                                    default: withCtx(() => [
                                                      createVNode("div", { class: "text-h6 text-primary font-weight-bold" }, " $" + toDisplayString(producto.precio), 1),
                                                      producto.empresa ? (openBlock(), createBlock("div", {
                                                        key: 0,
                                                        class: "text-caption text-grey mt-1"
                                                      }, toDisplayString(producto.empresa.nombre), 1)) : createCommentVNode("", true),
                                                      producto.categoria ? (openBlock(), createBlock("div", {
                                                        key: 1,
                                                        class: "mt-2"
                                                      }, [
                                                        createVNode(_component_v_chip, {
                                                          size: "small",
                                                          color: "blue-grey",
                                                          variant: "tonal"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(producto.categoria), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024)
                                                      ])) : createCommentVNode("", true)
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
                    })) : createCommentVNode("", true),
                    createVNode(_component_v_row, { class: "mt-4" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, { cols: "12" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card, {
                              class: "mx-4 mb-4",
                              flat: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_card_title, { class: "text-h5 font-weight-bold d-flex align-center" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_icon, {
                                      color: "secondary",
                                      class: "mr-2"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-domain")
                                      ]),
                                      _: 1
                                    }),
                                    createTextVNode(" Empresas ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_card_text, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_row, null, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList(__props.empresas, (empresa, index) => {
                                          return openBlock(), createBlock(_component_v_col, {
                                            key: index,
                                            cols: "12",
                                            sm: "6",
                                            md: "4"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_card, {
                                                class: "elevation-2",
                                                variant: "outlined",
                                                to: `/empresa/${empresa.id}`
                                              }, {
                                                default: withCtx(() => [
                                                  empresa.logo ? (openBlock(), createBlock(_component_v_img, {
                                                    key: 0,
                                                    src: _ctx.$assetUrl(empresa.logo),
                                                    height: "100",
                                                    cover: "",
                                                    class: "bg-grey-lighten-3"
                                                  }, {
                                                    placeholder: withCtx(() => [
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
                                                  }, 8, ["src"])) : (openBlock(), createBlock(_component_v_img, {
                                                    key: 1,
                                                    height: "100",
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
                                                  })),
                                                  createVNode(_component_v_card_title, { class: "text-body-1 font-weight-bold" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(empresa.nombre), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode(_component_v_card_text, null, {
                                                    default: withCtx(() => [
                                                      createVNode("p", { class: "text-truncate" }, toDisplayString(empresa.descripcion), 1),
                                                      empresa.telefono ? (openBlock(), createBlock("div", {
                                                        key: 0,
                                                        class: "text-caption"
                                                      }, [
                                                        createVNode(_component_v_icon, { size: "small" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("mdi-phone")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createTextVNode(" " + toDisplayString(empresa.telefono), 1)
                                                      ])) : createCommentVNode("", true),
                                                      empresa.categorias ? (openBlock(), createBlock("div", {
                                                        key: 1,
                                                        class: "mt-2"
                                                      }, [
                                                        createVNode(_component_v_chip, {
                                                          size: "small",
                                                          color: "primary",
                                                          variant: "tonal"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(empresa.categorias), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024)
                                                      ])) : createCommentVNode("", true)
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                _: 2
                                              }, 1032, ["to"])
                                            ]),
                                            _: 2
                                          }, 1024);
                                        }), 128))
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
              createVNode(_component_v_container, {
                fluid: "",
                class: "pa-0"
              }, {
                default: withCtx(() => [
                  __props.publicidades && __props.publicidades.length > 0 ? (openBlock(), createBlock(_component_v_row, { key: 0 }, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, { cols: "12" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_carousel, {
                            "hide-delimiter-background": "",
                            height: "300",
                            cycle: ""
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.publicidades, (pub, index) => {
                                return openBlock(), createBlock(_component_v_carousel_item, {
                                  key: index,
                                  src: _ctx.$assetUrl(pub.imagen),
                                  cover: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "d-flex fill-height align-end justify-center bg-gradient-overlay pb-4" }, [
                                      createVNode(_component_v_card, {
                                        class: "mb-4 bg-transparent",
                                        "max-width": "800",
                                        flat: ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_card_title, { class: "text-h5 text-white font-weight-bold text-center" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(pub.titulo), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          pub.contenido ? (openBlock(), createBlock(_component_v_card_text, {
                                            key: 0,
                                            class: "text-center text-white"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(pub.contenido), 1)
                                            ]),
                                            _: 2
                                          }, 1024)) : createCommentVNode("", true),
                                          pub.link ? (openBlock(), createBlock(_component_v_card_actions, {
                                            key: 1,
                                            class: "justify-center"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_btn, {
                                                color: "white",
                                                variant: "flat",
                                                href: pub.link,
                                                target: "_blank"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Ver más ")
                                                ]),
                                                _: 1
                                              }, 8, ["href"])
                                            ]),
                                            _: 2
                                          }, 1024)) : createCommentVNode("", true)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ])
                                  ]),
                                  _: 2
                                }, 1032, ["src"]);
                              }), 128))
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  __props.promociones && __props.promociones.length > 0 ? (openBlock(), createBlock(_component_v_row, {
                    key: 1,
                    class: "mt-4"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, { cols: "12" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_card, {
                            class: "mx-4",
                            flat: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card_title, { class: "text-h5 font-weight-bold d-flex align-center" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_icon, {
                                    color: "warning",
                                    class: "mr-2"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-tag-off")
                                    ]),
                                    _: 1
                                  }),
                                  createTextVNode(" Promociones del Mes ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_card_text, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_row, null, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(__props.promociones, (promo, index) => {
                                        return openBlock(), createBlock(_component_v_col, {
                                          key: index,
                                          cols: "12",
                                          sm: "6",
                                          md: "4"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_card, {
                                              class: "elevation-2",
                                              variant: "outlined"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_card_title, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(promo.titulo), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(_component_v_card_text, null, {
                                                  default: withCtx(() => [
                                                    createVNode("p", null, toDisplayString(promo.descripcion), 1),
                                                    createVNode(_component_v_chip, {
                                                      color: "success",
                                                      class: "mt-2"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(promo.descuento) + "% DESC ", 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode("p", { class: "text-caption mt-2" }, " Válido: " + toDisplayString(promo.fecha_inicio) + " - " + toDisplayString(promo.fecha_fin), 1)
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
                  })) : createCommentVNode("", true),
                  __props.productos && __props.productos.length > 0 ? (openBlock(), createBlock(_component_v_row, {
                    key: 2,
                    class: "mt-4"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, { cols: "12" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_card, {
                            class: "mx-4 mb-4",
                            flat: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card_title, { class: "text-h5 font-weight-bold d-flex align-center" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_icon, {
                                    color: "primary",
                                    class: "mr-2"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-store")
                                    ]),
                                    _: 1
                                  }),
                                  createTextVNode(" Productos Recientes ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_card_text, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_row, null, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(__props.productos, (producto, index) => {
                                        return openBlock(), createBlock(_component_v_col, {
                                          key: index,
                                          cols: "12",
                                          sm: "6",
                                          md: "3"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_card, {
                                              class: "elevation-2",
                                              variant: "outlined"
                                            }, {
                                              default: withCtx(() => [
                                                producto.imagen ? (openBlock(), createBlock(_component_v_img, {
                                                  key: 0,
                                                  src: _ctx.$assetUrl(producto.imagen.split(",")[0]),
                                                  height: "150",
                                                  cover: ""
                                                }, {
                                                  placeholder: withCtx(() => [
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
                                                }, 8, ["src"])) : (openBlock(), createBlock(_component_v_img, {
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
                                                createVNode(_component_v_card_title, { class: "text-body-1 font-weight-bold" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(producto.nombre), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(_component_v_card_text, null, {
                                                  default: withCtx(() => [
                                                    createVNode("div", { class: "text-h6 text-primary font-weight-bold" }, " $" + toDisplayString(producto.precio), 1),
                                                    producto.empresa ? (openBlock(), createBlock("div", {
                                                      key: 0,
                                                      class: "text-caption text-grey mt-1"
                                                    }, toDisplayString(producto.empresa.nombre), 1)) : createCommentVNode("", true),
                                                    producto.categoria ? (openBlock(), createBlock("div", {
                                                      key: 1,
                                                      class: "mt-2"
                                                    }, [
                                                      createVNode(_component_v_chip, {
                                                        size: "small",
                                                        color: "blue-grey",
                                                        variant: "tonal"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(producto.categoria), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024)
                                                    ])) : createCommentVNode("", true)
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
                  })) : createCommentVNode("", true),
                  createVNode(_component_v_row, { class: "mt-4" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, { cols: "12" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_card, {
                            class: "mx-4 mb-4",
                            flat: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card_title, { class: "text-h5 font-weight-bold d-flex align-center" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_icon, {
                                    color: "secondary",
                                    class: "mr-2"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-domain")
                                    ]),
                                    _: 1
                                  }),
                                  createTextVNode(" Empresas ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_card_text, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_row, null, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(__props.empresas, (empresa, index) => {
                                        return openBlock(), createBlock(_component_v_col, {
                                          key: index,
                                          cols: "12",
                                          sm: "6",
                                          md: "4"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_card, {
                                              class: "elevation-2",
                                              variant: "outlined",
                                              to: `/empresa/${empresa.id}`
                                            }, {
                                              default: withCtx(() => [
                                                empresa.logo ? (openBlock(), createBlock(_component_v_img, {
                                                  key: 0,
                                                  src: _ctx.$assetUrl(empresa.logo),
                                                  height: "100",
                                                  cover: "",
                                                  class: "bg-grey-lighten-3"
                                                }, {
                                                  placeholder: withCtx(() => [
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
                                                }, 8, ["src"])) : (openBlock(), createBlock(_component_v_img, {
                                                  key: 1,
                                                  height: "100",
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
                                                })),
                                                createVNode(_component_v_card_title, { class: "text-body-1 font-weight-bold" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(empresa.nombre), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(_component_v_card_text, null, {
                                                  default: withCtx(() => [
                                                    createVNode("p", { class: "text-truncate" }, toDisplayString(empresa.descripcion), 1),
                                                    empresa.telefono ? (openBlock(), createBlock("div", {
                                                      key: 0,
                                                      class: "text-caption"
                                                    }, [
                                                      createVNode(_component_v_icon, { size: "small" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("mdi-phone")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createTextVNode(" " + toDisplayString(empresa.telefono), 1)
                                                    ])) : createCommentVNode("", true),
                                                    empresa.categorias ? (openBlock(), createBlock("div", {
                                                      key: 1,
                                                      class: "mt-2"
                                                    }, [
                                                      createVNode(_component_v_chip, {
                                                        size: "small",
                                                        color: "primary",
                                                        variant: "tonal"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(empresa.categorias), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024)
                                                    ])) : createCommentVNode("", true)
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              _: 2
                                            }, 1032, ["to"])
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Dashboard = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c31f92c2"]]);
export {
  Dashboard as default
};
