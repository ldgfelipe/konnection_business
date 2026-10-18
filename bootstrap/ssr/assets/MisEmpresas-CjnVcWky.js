import { ref, resolveComponent, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-BTyN4XEz.js";
import { Head, router } from "@inertiajs/vue3";
import axios from "axios";
import "./ApplicationLogo-DB5hZ_I6.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "MisEmpresas",
  __ssrInlineRender: true,
  props: {
    empresas: { type: Array, default: () => [] },
    freeAccess: { type: Boolean, default: false },
    limit: { type: Number, default: 0 },
    canCreate: { type: Boolean, default: false }
  },
  setup(__props) {
    const deleting = ref(false);
    const eliminar = (empresa) => {
      if (!confirm(`¿Eliminar "${empresa.nombre}" y todas sus publicaciones?`)) {
        return;
      }
      deleting.value = true;
      axios.post(route("empresas.eliminar"), { id: empresa.id }).then(() => {
        router.reload({ only: ["empresas"] });
      }).catch(() => {
        alert("No se pudo eliminar la empresa.");
      }).finally(() => {
        deleting.value = false;
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_v_alert = resolveComponent("v-alert");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_img = resolveComponent("v-img");
      const _component_v_chip = resolveComponent("v-chip");
      const _component_v_card_actions = resolveComponent("v-card-actions");
      const _component_v_spacer = resolveComponent("v-spacer");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Mis Empresas" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_container, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b, _c, _d;
                if (_push3) {
                  if ((_a = _ctx.$page.props.flash) == null ? void 0 : _a.status) {
                    _push3(ssrRenderComponent(_component_v_alert, {
                      type: "success",
                      variant: "tonal",
                      class: "mb-4"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(_ctx.$page.props.flash.status)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(_ctx.$page.props.flash.status), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if ((_b = _ctx.$page.props.flash) == null ? void 0 : _b.error) {
                    _push3(ssrRenderComponent(_component_v_alert, {
                      type: "warning",
                      variant: "tonal",
                      class: "mb-4"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(_ctx.$page.props.flash.error)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(_ctx.$page.props.flash.error), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_component_v_card, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_card_title, { class: "d-flex align-center justify-space-between flex-wrap ga-2" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<span${_scopeId4}>Mis Empresas y Servicios</span>`);
                              if (__props.canCreate) {
                                _push5(ssrRenderComponent(_component_v_btn, {
                                  href: _ctx.route("perfilEmpresas"),
                                  style: { "background-color": "#000066", "color": "#fff" }
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_v_icon, { start: "" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`mdi-plus`);
                                          } else {
                                            return [
                                              createTextVNode("mdi-plus")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(` Nueva Empresa / Servicio `);
                                    } else {
                                      return [
                                        createVNode(_component_v_icon, { start: "" }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-plus")
                                          ]),
                                          _: 1
                                        }),
                                        createTextVNode(" Nueva Empresa / Servicio ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                            } else {
                              return [
                                createVNode("span", null, "Mis Empresas y Servicios"),
                                __props.canCreate ? (openBlock(), createBlock(_component_v_btn, {
                                  key: 0,
                                  href: _ctx.route("perfilEmpresas"),
                                  style: { "background-color": "#000066", "color": "#fff" }
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_icon, { start: "" }, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-plus")
                                      ]),
                                      _: 1
                                    }),
                                    createTextVNode(" Nueva Empresa / Servicio ")
                                  ]),
                                  _: 1
                                }, 8, ["href"])) : createCommentVNode("", true)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_card_text, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              if (__props.freeAccess) {
                                _push5(ssrRenderComponent(_component_v_alert, {
                                  type: "success",
                                  variant: "tonal",
                                  density: "compact",
                                  class: "mb-4"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Profesional certificado por Profetit: puedes registrar empresas y servicios <strong${_scopeId5}>ilimitados, gratis y sin restricciones</strong>. `);
                                    } else {
                                      return [
                                        createTextVNode(" Profesional certificado por Profetit: puedes registrar empresas y servicios "),
                                        createVNode("strong", null, "ilimitados, gratis y sin restricciones"),
                                        createTextVNode(". ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                _push5(ssrRenderComponent(_component_v_alert, {
                                  type: "info",
                                  variant: "tonal",
                                  density: "compact",
                                  class: "mb-4"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Plan gratuito: hasta ${ssrInterpolate(__props.limit)} empresa. Certifícate con Profetit para registrar empresas y servicios ilimitados sin coste. `);
                                    } else {
                                      return [
                                        createTextVNode(" Plan gratuito: hasta " + toDisplayString(__props.limit) + " empresa. Certifícate con Profetit para registrar empresas y servicios ilimitados sin coste. ", 1)
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              }
                              if (__props.empresas.length) {
                                _push5(ssrRenderComponent(_component_v_row, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<!--[-->`);
                                      ssrRenderList(__props.empresas, (e) => {
                                        _push6(ssrRenderComponent(_component_v_col, {
                                          cols: "12",
                                          sm: "6",
                                          md: "4",
                                          key: e.id
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(_component_v_card, {
                                                variant: "outlined",
                                                class: "h-100"
                                              }, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    if (e.logo) {
                                                      _push8(ssrRenderComponent(_component_v_img, {
                                                        src: _ctx.$assetUrl(e.logo),
                                                        height: "150",
                                                        cover: ""
                                                      }, null, _parent8, _scopeId7));
                                                    } else {
                                                      _push8(`<!---->`);
                                                    }
                                                    _push8(ssrRenderComponent(_component_v_card_title, { class: "text-wrap" }, {
                                                      default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(`${ssrInterpolate(e.nombre)}`);
                                                        } else {
                                                          return [
                                                            createTextVNode(toDisplayString(e.nombre), 1)
                                                          ];
                                                        }
                                                      }),
                                                      _: 2
                                                    }, _parent8, _scopeId7));
                                                    _push8(ssrRenderComponent(_component_v_card_text, null, {
                                                      default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          if (e.categorias) {
                                                            _push9(ssrRenderComponent(_component_v_chip, {
                                                              color: "primary",
                                                              size: "small",
                                                              class: "mb-2"
                                                            }, {
                                                              default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                                if (_push10) {
                                                                  _push10(`${ssrInterpolate(e.categorias)}`);
                                                                } else {
                                                                  return [
                                                                    createTextVNode(toDisplayString(e.categorias), 1)
                                                                  ];
                                                                }
                                                              }),
                                                              _: 2
                                                            }, _parent9, _scopeId8));
                                                          } else {
                                                            _push9(`<!---->`);
                                                          }
                                                          _push9(`<p class="text-body-2"${_scopeId8}>${ssrInterpolate(e.descripcion)}</p><small class="text-medium-emphasis"${_scopeId8}>${ssrInterpolate(e.productos_count || 0)} publicación(es) </small>`);
                                                        } else {
                                                          return [
                                                            e.categorias ? (openBlock(), createBlock(_component_v_chip, {
                                                              key: 0,
                                                              color: "primary",
                                                              size: "small",
                                                              class: "mb-2"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(toDisplayString(e.categorias), 1)
                                                              ]),
                                                              _: 2
                                                            }, 1024)) : createCommentVNode("", true),
                                                            createVNode("p", { class: "text-body-2" }, toDisplayString(e.descripcion), 1),
                                                            createVNode("small", { class: "text-medium-emphasis" }, toDisplayString(e.productos_count || 0) + " publicación(es) ", 1)
                                                          ];
                                                        }
                                                      }),
                                                      _: 2
                                                    }, _parent8, _scopeId7));
                                                    _push8(ssrRenderComponent(_component_v_card_actions, null, {
                                                      default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(ssrRenderComponent(_component_v_btn, {
                                                            size: "small",
                                                            href: "/empresa/" + e.id
                                                          }, {
                                                            default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                              if (_push10) {
                                                                _push10(`Ver`);
                                                              } else {
                                                                return [
                                                                  createTextVNode("Ver")
                                                                ];
                                                              }
                                                            }),
                                                            _: 2
                                                          }, _parent9, _scopeId8));
                                                          _push9(ssrRenderComponent(_component_v_btn, {
                                                            size: "small",
                                                            style: { "background-color": "#000066", "color": "#fff" },
                                                            href: _ctx.route("perfilEmpresas") + "?id=" + e.id
                                                          }, {
                                                            default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                              if (_push10) {
                                                                _push10(`Editar`);
                                                              } else {
                                                                return [
                                                                  createTextVNode("Editar")
                                                                ];
                                                              }
                                                            }),
                                                            _: 2
                                                          }, _parent9, _scopeId8));
                                                          _push9(ssrRenderComponent(_component_v_spacer, null, null, _parent9, _scopeId8));
                                                          _push9(ssrRenderComponent(_component_v_btn, {
                                                            size: "small",
                                                            color: "error",
                                                            variant: "text",
                                                            disabled: deleting.value,
                                                            onClick: ($event) => eliminar(e)
                                                          }, {
                                                            default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                              if (_push10) {
                                                                _push10(`Eliminar`);
                                                              } else {
                                                                return [
                                                                  createTextVNode("Eliminar")
                                                                ];
                                                              }
                                                            }),
                                                            _: 2
                                                          }, _parent9, _scopeId8));
                                                        } else {
                                                          return [
                                                            createVNode(_component_v_btn, {
                                                              size: "small",
                                                              href: "/empresa/" + e.id
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode("Ver")
                                                              ]),
                                                              _: 1
                                                            }, 8, ["href"]),
                                                            createVNode(_component_v_btn, {
                                                              size: "small",
                                                              style: { "background-color": "#000066", "color": "#fff" },
                                                              href: _ctx.route("perfilEmpresas") + "?id=" + e.id
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode("Editar")
                                                              ]),
                                                              _: 1
                                                            }, 8, ["href"]),
                                                            createVNode(_component_v_spacer),
                                                            createVNode(_component_v_btn, {
                                                              size: "small",
                                                              color: "error",
                                                              variant: "text",
                                                              disabled: deleting.value,
                                                              onClick: ($event) => eliminar(e)
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode("Eliminar")
                                                              ]),
                                                              _: 1
                                                            }, 8, ["disabled", "onClick"])
                                                          ];
                                                        }
                                                      }),
                                                      _: 2
                                                    }, _parent8, _scopeId7));
                                                  } else {
                                                    return [
                                                      e.logo ? (openBlock(), createBlock(_component_v_img, {
                                                        key: 0,
                                                        src: _ctx.$assetUrl(e.logo),
                                                        height: "150",
                                                        cover: ""
                                                      }, null, 8, ["src"])) : createCommentVNode("", true),
                                                      createVNode(_component_v_card_title, { class: "text-wrap" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(e.nombre), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024),
                                                      createVNode(_component_v_card_text, null, {
                                                        default: withCtx(() => [
                                                          e.categorias ? (openBlock(), createBlock(_component_v_chip, {
                                                            key: 0,
                                                            color: "primary",
                                                            size: "small",
                                                            class: "mb-2"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(e.categorias), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1024)) : createCommentVNode("", true),
                                                          createVNode("p", { class: "text-body-2" }, toDisplayString(e.descripcion), 1),
                                                          createVNode("small", { class: "text-medium-emphasis" }, toDisplayString(e.productos_count || 0) + " publicación(es) ", 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024),
                                                      createVNode(_component_v_card_actions, null, {
                                                        default: withCtx(() => [
                                                          createVNode(_component_v_btn, {
                                                            size: "small",
                                                            href: "/empresa/" + e.id
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("Ver")
                                                            ]),
                                                            _: 1
                                                          }, 8, ["href"]),
                                                          createVNode(_component_v_btn, {
                                                            size: "small",
                                                            style: { "background-color": "#000066", "color": "#fff" },
                                                            href: _ctx.route("perfilEmpresas") + "?id=" + e.id
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("Editar")
                                                            ]),
                                                            _: 1
                                                          }, 8, ["href"]),
                                                          createVNode(_component_v_spacer),
                                                          createVNode(_component_v_btn, {
                                                            size: "small",
                                                            color: "error",
                                                            variant: "text",
                                                            disabled: deleting.value,
                                                            onClick: ($event) => eliminar(e)
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("Eliminar")
                                                            ]),
                                                            _: 1
                                                          }, 8, ["disabled", "onClick"])
                                                        ]),
                                                        _: 2
                                                      }, 1024)
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                            } else {
                                              return [
                                                createVNode(_component_v_card, {
                                                  variant: "outlined",
                                                  class: "h-100"
                                                }, {
                                                  default: withCtx(() => [
                                                    e.logo ? (openBlock(), createBlock(_component_v_img, {
                                                      key: 0,
                                                      src: _ctx.$assetUrl(e.logo),
                                                      height: "150",
                                                      cover: ""
                                                    }, null, 8, ["src"])) : createCommentVNode("", true),
                                                    createVNode(_component_v_card_title, { class: "text-wrap" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(e.nombre), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode(_component_v_card_text, null, {
                                                      default: withCtx(() => [
                                                        e.categorias ? (openBlock(), createBlock(_component_v_chip, {
                                                          key: 0,
                                                          color: "primary",
                                                          size: "small",
                                                          class: "mb-2"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(e.categorias), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1024)) : createCommentVNode("", true),
                                                        createVNode("p", { class: "text-body-2" }, toDisplayString(e.descripcion), 1),
                                                        createVNode("small", { class: "text-medium-emphasis" }, toDisplayString(e.productos_count || 0) + " publicación(es) ", 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode(_component_v_card_actions, null, {
                                                      default: withCtx(() => [
                                                        createVNode(_component_v_btn, {
                                                          size: "small",
                                                          href: "/empresa/" + e.id
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("Ver")
                                                          ]),
                                                          _: 1
                                                        }, 8, ["href"]),
                                                        createVNode(_component_v_btn, {
                                                          size: "small",
                                                          style: { "background-color": "#000066", "color": "#fff" },
                                                          href: _ctx.route("perfilEmpresas") + "?id=" + e.id
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("Editar")
                                                          ]),
                                                          _: 1
                                                        }, 8, ["href"]),
                                                        createVNode(_component_v_spacer),
                                                        createVNode(_component_v_btn, {
                                                          size: "small",
                                                          color: "error",
                                                          variant: "text",
                                                          disabled: deleting.value,
                                                          onClick: ($event) => eliminar(e)
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("Eliminar")
                                                          ]),
                                                          _: 1
                                                        }, 8, ["disabled", "onClick"])
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
                                        }, _parent6, _scopeId5));
                                      });
                                      _push6(`<!--]-->`);
                                    } else {
                                      return [
                                        (openBlock(true), createBlock(Fragment, null, renderList(__props.empresas, (e) => {
                                          return openBlock(), createBlock(_component_v_col, {
                                            cols: "12",
                                            sm: "6",
                                            md: "4",
                                            key: e.id
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_card, {
                                                variant: "outlined",
                                                class: "h-100"
                                              }, {
                                                default: withCtx(() => [
                                                  e.logo ? (openBlock(), createBlock(_component_v_img, {
                                                    key: 0,
                                                    src: _ctx.$assetUrl(e.logo),
                                                    height: "150",
                                                    cover: ""
                                                  }, null, 8, ["src"])) : createCommentVNode("", true),
                                                  createVNode(_component_v_card_title, { class: "text-wrap" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(e.nombre), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode(_component_v_card_text, null, {
                                                    default: withCtx(() => [
                                                      e.categorias ? (openBlock(), createBlock(_component_v_chip, {
                                                        key: 0,
                                                        color: "primary",
                                                        size: "small",
                                                        class: "mb-2"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(e.categorias), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024)) : createCommentVNode("", true),
                                                      createVNode("p", { class: "text-body-2" }, toDisplayString(e.descripcion), 1),
                                                      createVNode("small", { class: "text-medium-emphasis" }, toDisplayString(e.productos_count || 0) + " publicación(es) ", 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode(_component_v_card_actions, null, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_btn, {
                                                        size: "small",
                                                        href: "/empresa/" + e.id
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("Ver")
                                                        ]),
                                                        _: 1
                                                      }, 8, ["href"]),
                                                      createVNode(_component_v_btn, {
                                                        size: "small",
                                                        style: { "background-color": "#000066", "color": "#fff" },
                                                        href: _ctx.route("perfilEmpresas") + "?id=" + e.id
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("Editar")
                                                        ]),
                                                        _: 1
                                                      }, 8, ["href"]),
                                                      createVNode(_component_v_spacer),
                                                      createVNode(_component_v_btn, {
                                                        size: "small",
                                                        color: "error",
                                                        variant: "text",
                                                        disabled: deleting.value,
                                                        onClick: ($event) => eliminar(e)
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("Eliminar")
                                                        ]),
                                                        _: 1
                                                      }, 8, ["disabled", "onClick"])
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
                                }, _parent5, _scopeId4));
                              } else {
                                _push5(ssrRenderComponent(_component_v_alert, {
                                  type: "info",
                                  variant: "tonal"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Aún no has registrado ninguna empresa o servicio. <a${ssrRenderAttr("href", _ctx.route("perfilEmpresas"))} class="font-weight-bold"${_scopeId5}>Registrar ahora</a>`);
                                    } else {
                                      return [
                                        createTextVNode(" Aún no has registrado ninguna empresa o servicio. "),
                                        createVNode("a", {
                                          href: _ctx.route("perfilEmpresas"),
                                          class: "font-weight-bold"
                                        }, "Registrar ahora", 8, ["href"])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              }
                            } else {
                              return [
                                __props.freeAccess ? (openBlock(), createBlock(_component_v_alert, {
                                  key: 0,
                                  type: "success",
                                  variant: "tonal",
                                  density: "compact",
                                  class: "mb-4"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Profesional certificado por Profetit: puedes registrar empresas y servicios "),
                                    createVNode("strong", null, "ilimitados, gratis y sin restricciones"),
                                    createTextVNode(". ")
                                  ]),
                                  _: 1
                                })) : (openBlock(), createBlock(_component_v_alert, {
                                  key: 1,
                                  type: "info",
                                  variant: "tonal",
                                  density: "compact",
                                  class: "mb-4"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Plan gratuito: hasta " + toDisplayString(__props.limit) + " empresa. Certifícate con Profetit para registrar empresas y servicios ilimitados sin coste. ", 1)
                                  ]),
                                  _: 1
                                })),
                                __props.empresas.length ? (openBlock(), createBlock(_component_v_row, { key: 2 }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(__props.empresas, (e) => {
                                      return openBlock(), createBlock(_component_v_col, {
                                        cols: "12",
                                        sm: "6",
                                        md: "4",
                                        key: e.id
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_card, {
                                            variant: "outlined",
                                            class: "h-100"
                                          }, {
                                            default: withCtx(() => [
                                              e.logo ? (openBlock(), createBlock(_component_v_img, {
                                                key: 0,
                                                src: _ctx.$assetUrl(e.logo),
                                                height: "150",
                                                cover: ""
                                              }, null, 8, ["src"])) : createCommentVNode("", true),
                                              createVNode(_component_v_card_title, { class: "text-wrap" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(e.nombre), 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(_component_v_card_text, null, {
                                                default: withCtx(() => [
                                                  e.categorias ? (openBlock(), createBlock(_component_v_chip, {
                                                    key: 0,
                                                    color: "primary",
                                                    size: "small",
                                                    class: "mb-2"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(e.categorias), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024)) : createCommentVNode("", true),
                                                  createVNode("p", { class: "text-body-2" }, toDisplayString(e.descripcion), 1),
                                                  createVNode("small", { class: "text-medium-emphasis" }, toDisplayString(e.productos_count || 0) + " publicación(es) ", 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(_component_v_card_actions, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_btn, {
                                                    size: "small",
                                                    href: "/empresa/" + e.id
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Ver")
                                                    ]),
                                                    _: 1
                                                  }, 8, ["href"]),
                                                  createVNode(_component_v_btn, {
                                                    size: "small",
                                                    style: { "background-color": "#000066", "color": "#fff" },
                                                    href: _ctx.route("perfilEmpresas") + "?id=" + e.id
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Editar")
                                                    ]),
                                                    _: 1
                                                  }, 8, ["href"]),
                                                  createVNode(_component_v_spacer),
                                                  createVNode(_component_v_btn, {
                                                    size: "small",
                                                    color: "error",
                                                    variant: "text",
                                                    disabled: deleting.value,
                                                    onClick: ($event) => eliminar(e)
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Eliminar")
                                                    ]),
                                                    _: 1
                                                  }, 8, ["disabled", "onClick"])
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
                                })) : (openBlock(), createBlock(_component_v_alert, {
                                  key: 3,
                                  type: "info",
                                  variant: "tonal"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Aún no has registrado ninguna empresa o servicio. "),
                                    createVNode("a", {
                                      href: _ctx.route("perfilEmpresas"),
                                      class: "font-weight-bold"
                                    }, "Registrar ahora", 8, ["href"])
                                  ]),
                                  _: 1
                                }))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_card_title, { class: "d-flex align-center justify-space-between flex-wrap ga-2" }, {
                            default: withCtx(() => [
                              createVNode("span", null, "Mis Empresas y Servicios"),
                              __props.canCreate ? (openBlock(), createBlock(_component_v_btn, {
                                key: 0,
                                href: _ctx.route("perfilEmpresas"),
                                style: { "background-color": "#000066", "color": "#fff" }
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_icon, { start: "" }, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-plus")
                                    ]),
                                    _: 1
                                  }),
                                  createTextVNode(" Nueva Empresa / Servicio ")
                                ]),
                                _: 1
                              }, 8, ["href"])) : createCommentVNode("", true)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_card_text, null, {
                            default: withCtx(() => [
                              __props.freeAccess ? (openBlock(), createBlock(_component_v_alert, {
                                key: 0,
                                type: "success",
                                variant: "tonal",
                                density: "compact",
                                class: "mb-4"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Profesional certificado por Profetit: puedes registrar empresas y servicios "),
                                  createVNode("strong", null, "ilimitados, gratis y sin restricciones"),
                                  createTextVNode(". ")
                                ]),
                                _: 1
                              })) : (openBlock(), createBlock(_component_v_alert, {
                                key: 1,
                                type: "info",
                                variant: "tonal",
                                density: "compact",
                                class: "mb-4"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Plan gratuito: hasta " + toDisplayString(__props.limit) + " empresa. Certifícate con Profetit para registrar empresas y servicios ilimitados sin coste. ", 1)
                                ]),
                                _: 1
                              })),
                              __props.empresas.length ? (openBlock(), createBlock(_component_v_row, { key: 2 }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(__props.empresas, (e) => {
                                    return openBlock(), createBlock(_component_v_col, {
                                      cols: "12",
                                      sm: "6",
                                      md: "4",
                                      key: e.id
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_card, {
                                          variant: "outlined",
                                          class: "h-100"
                                        }, {
                                          default: withCtx(() => [
                                            e.logo ? (openBlock(), createBlock(_component_v_img, {
                                              key: 0,
                                              src: _ctx.$assetUrl(e.logo),
                                              height: "150",
                                              cover: ""
                                            }, null, 8, ["src"])) : createCommentVNode("", true),
                                            createVNode(_component_v_card_title, { class: "text-wrap" }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(e.nombre), 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(_component_v_card_text, null, {
                                              default: withCtx(() => [
                                                e.categorias ? (openBlock(), createBlock(_component_v_chip, {
                                                  key: 0,
                                                  color: "primary",
                                                  size: "small",
                                                  class: "mb-2"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(e.categorias), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024)) : createCommentVNode("", true),
                                                createVNode("p", { class: "text-body-2" }, toDisplayString(e.descripcion), 1),
                                                createVNode("small", { class: "text-medium-emphasis" }, toDisplayString(e.productos_count || 0) + " publicación(es) ", 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(_component_v_card_actions, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_btn, {
                                                  size: "small",
                                                  href: "/empresa/" + e.id
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Ver")
                                                  ]),
                                                  _: 1
                                                }, 8, ["href"]),
                                                createVNode(_component_v_btn, {
                                                  size: "small",
                                                  style: { "background-color": "#000066", "color": "#fff" },
                                                  href: _ctx.route("perfilEmpresas") + "?id=" + e.id
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Editar")
                                                  ]),
                                                  _: 1
                                                }, 8, ["href"]),
                                                createVNode(_component_v_spacer),
                                                createVNode(_component_v_btn, {
                                                  size: "small",
                                                  color: "error",
                                                  variant: "text",
                                                  disabled: deleting.value,
                                                  onClick: ($event) => eliminar(e)
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Eliminar")
                                                  ]),
                                                  _: 1
                                                }, 8, ["disabled", "onClick"])
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
                              })) : (openBlock(), createBlock(_component_v_alert, {
                                key: 3,
                                type: "info",
                                variant: "tonal"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Aún no has registrado ninguna empresa o servicio. "),
                                  createVNode("a", {
                                    href: _ctx.route("perfilEmpresas"),
                                    class: "font-weight-bold"
                                  }, "Registrar ahora", 8, ["href"])
                                ]),
                                _: 1
                              }))
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
                    ((_c = _ctx.$page.props.flash) == null ? void 0 : _c.status) ? (openBlock(), createBlock(_component_v_alert, {
                      key: 0,
                      type: "success",
                      variant: "tonal",
                      class: "mb-4"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$page.props.flash.status), 1)
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    ((_d = _ctx.$page.props.flash) == null ? void 0 : _d.error) ? (openBlock(), createBlock(_component_v_alert, {
                      key: 1,
                      type: "warning",
                      variant: "tonal",
                      class: "mb-4"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$page.props.flash.error), 1)
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    createVNode(_component_v_card, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_card_title, { class: "d-flex align-center justify-space-between flex-wrap ga-2" }, {
                          default: withCtx(() => [
                            createVNode("span", null, "Mis Empresas y Servicios"),
                            __props.canCreate ? (openBlock(), createBlock(_component_v_btn, {
                              key: 0,
                              href: _ctx.route("perfilEmpresas"),
                              style: { "background-color": "#000066", "color": "#fff" }
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_icon, { start: "" }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-plus")
                                  ]),
                                  _: 1
                                }),
                                createTextVNode(" Nueva Empresa / Servicio ")
                              ]),
                              _: 1
                            }, 8, ["href"])) : createCommentVNode("", true)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_card_text, null, {
                          default: withCtx(() => [
                            __props.freeAccess ? (openBlock(), createBlock(_component_v_alert, {
                              key: 0,
                              type: "success",
                              variant: "tonal",
                              density: "compact",
                              class: "mb-4"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Profesional certificado por Profetit: puedes registrar empresas y servicios "),
                                createVNode("strong", null, "ilimitados, gratis y sin restricciones"),
                                createTextVNode(". ")
                              ]),
                              _: 1
                            })) : (openBlock(), createBlock(_component_v_alert, {
                              key: 1,
                              type: "info",
                              variant: "tonal",
                              density: "compact",
                              class: "mb-4"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Plan gratuito: hasta " + toDisplayString(__props.limit) + " empresa. Certifícate con Profetit para registrar empresas y servicios ilimitados sin coste. ", 1)
                              ]),
                              _: 1
                            })),
                            __props.empresas.length ? (openBlock(), createBlock(_component_v_row, { key: 2 }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(__props.empresas, (e) => {
                                  return openBlock(), createBlock(_component_v_col, {
                                    cols: "12",
                                    sm: "6",
                                    md: "4",
                                    key: e.id
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_card, {
                                        variant: "outlined",
                                        class: "h-100"
                                      }, {
                                        default: withCtx(() => [
                                          e.logo ? (openBlock(), createBlock(_component_v_img, {
                                            key: 0,
                                            src: _ctx.$assetUrl(e.logo),
                                            height: "150",
                                            cover: ""
                                          }, null, 8, ["src"])) : createCommentVNode("", true),
                                          createVNode(_component_v_card_title, { class: "text-wrap" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(e.nombre), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_v_card_text, null, {
                                            default: withCtx(() => [
                                              e.categorias ? (openBlock(), createBlock(_component_v_chip, {
                                                key: 0,
                                                color: "primary",
                                                size: "small",
                                                class: "mb-2"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(e.categorias), 1)
                                                ]),
                                                _: 2
                                              }, 1024)) : createCommentVNode("", true),
                                              createVNode("p", { class: "text-body-2" }, toDisplayString(e.descripcion), 1),
                                              createVNode("small", { class: "text-medium-emphasis" }, toDisplayString(e.productos_count || 0) + " publicación(es) ", 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_v_card_actions, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_btn, {
                                                size: "small",
                                                href: "/empresa/" + e.id
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Ver")
                                                ]),
                                                _: 1
                                              }, 8, ["href"]),
                                              createVNode(_component_v_btn, {
                                                size: "small",
                                                style: { "background-color": "#000066", "color": "#fff" },
                                                href: _ctx.route("perfilEmpresas") + "?id=" + e.id
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Editar")
                                                ]),
                                                _: 1
                                              }, 8, ["href"]),
                                              createVNode(_component_v_spacer),
                                              createVNode(_component_v_btn, {
                                                size: "small",
                                                color: "error",
                                                variant: "text",
                                                disabled: deleting.value,
                                                onClick: ($event) => eliminar(e)
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Eliminar")
                                                ]),
                                                _: 1
                                              }, 8, ["disabled", "onClick"])
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
                            })) : (openBlock(), createBlock(_component_v_alert, {
                              key: 3,
                              type: "info",
                              variant: "tonal"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Aún no has registrado ninguna empresa o servicio. "),
                                createVNode("a", {
                                  href: _ctx.route("perfilEmpresas"),
                                  class: "font-weight-bold"
                                }, "Registrar ahora", 8, ["href"])
                              ]),
                              _: 1
                            }))
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
                default: withCtx(() => {
                  var _a, _b;
                  return [
                    ((_a = _ctx.$page.props.flash) == null ? void 0 : _a.status) ? (openBlock(), createBlock(_component_v_alert, {
                      key: 0,
                      type: "success",
                      variant: "tonal",
                      class: "mb-4"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$page.props.flash.status), 1)
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    ((_b = _ctx.$page.props.flash) == null ? void 0 : _b.error) ? (openBlock(), createBlock(_component_v_alert, {
                      key: 1,
                      type: "warning",
                      variant: "tonal",
                      class: "mb-4"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$page.props.flash.error), 1)
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    createVNode(_component_v_card, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_card_title, { class: "d-flex align-center justify-space-between flex-wrap ga-2" }, {
                          default: withCtx(() => [
                            createVNode("span", null, "Mis Empresas y Servicios"),
                            __props.canCreate ? (openBlock(), createBlock(_component_v_btn, {
                              key: 0,
                              href: _ctx.route("perfilEmpresas"),
                              style: { "background-color": "#000066", "color": "#fff" }
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_icon, { start: "" }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-plus")
                                  ]),
                                  _: 1
                                }),
                                createTextVNode(" Nueva Empresa / Servicio ")
                              ]),
                              _: 1
                            }, 8, ["href"])) : createCommentVNode("", true)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_card_text, null, {
                          default: withCtx(() => [
                            __props.freeAccess ? (openBlock(), createBlock(_component_v_alert, {
                              key: 0,
                              type: "success",
                              variant: "tonal",
                              density: "compact",
                              class: "mb-4"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Profesional certificado por Profetit: puedes registrar empresas y servicios "),
                                createVNode("strong", null, "ilimitados, gratis y sin restricciones"),
                                createTextVNode(". ")
                              ]),
                              _: 1
                            })) : (openBlock(), createBlock(_component_v_alert, {
                              key: 1,
                              type: "info",
                              variant: "tonal",
                              density: "compact",
                              class: "mb-4"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Plan gratuito: hasta " + toDisplayString(__props.limit) + " empresa. Certifícate con Profetit para registrar empresas y servicios ilimitados sin coste. ", 1)
                              ]),
                              _: 1
                            })),
                            __props.empresas.length ? (openBlock(), createBlock(_component_v_row, { key: 2 }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(__props.empresas, (e) => {
                                  return openBlock(), createBlock(_component_v_col, {
                                    cols: "12",
                                    sm: "6",
                                    md: "4",
                                    key: e.id
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_card, {
                                        variant: "outlined",
                                        class: "h-100"
                                      }, {
                                        default: withCtx(() => [
                                          e.logo ? (openBlock(), createBlock(_component_v_img, {
                                            key: 0,
                                            src: _ctx.$assetUrl(e.logo),
                                            height: "150",
                                            cover: ""
                                          }, null, 8, ["src"])) : createCommentVNode("", true),
                                          createVNode(_component_v_card_title, { class: "text-wrap" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(e.nombre), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_v_card_text, null, {
                                            default: withCtx(() => [
                                              e.categorias ? (openBlock(), createBlock(_component_v_chip, {
                                                key: 0,
                                                color: "primary",
                                                size: "small",
                                                class: "mb-2"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(e.categorias), 1)
                                                ]),
                                                _: 2
                                              }, 1024)) : createCommentVNode("", true),
                                              createVNode("p", { class: "text-body-2" }, toDisplayString(e.descripcion), 1),
                                              createVNode("small", { class: "text-medium-emphasis" }, toDisplayString(e.productos_count || 0) + " publicación(es) ", 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_v_card_actions, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_btn, {
                                                size: "small",
                                                href: "/empresa/" + e.id
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Ver")
                                                ]),
                                                _: 1
                                              }, 8, ["href"]),
                                              createVNode(_component_v_btn, {
                                                size: "small",
                                                style: { "background-color": "#000066", "color": "#fff" },
                                                href: _ctx.route("perfilEmpresas") + "?id=" + e.id
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Editar")
                                                ]),
                                                _: 1
                                              }, 8, ["href"]),
                                              createVNode(_component_v_spacer),
                                              createVNode(_component_v_btn, {
                                                size: "small",
                                                color: "error",
                                                variant: "text",
                                                disabled: deleting.value,
                                                onClick: ($event) => eliminar(e)
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Eliminar")
                                                ]),
                                                _: 1
                                              }, 8, ["disabled", "onClick"])
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
                            })) : (openBlock(), createBlock(_component_v_alert, {
                              key: 3,
                              type: "info",
                              variant: "tonal"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Aún no has registrado ninguna empresa o servicio. "),
                                createVNode("a", {
                                  href: _ctx.route("perfilEmpresas"),
                                  class: "font-weight-bold"
                                }, "Registrar ahora", 8, ["href"])
                              ]),
                              _: 1
                            }))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Empresas/MisEmpresas.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
