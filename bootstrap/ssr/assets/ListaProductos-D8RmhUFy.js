import { ref, resolveComponent, unref, withCtx, createTextVNode, createVNode, withKeys, openBlock, createBlock, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-CjO21aP_.js";
import { Head, router } from "@inertiajs/vue3";
import { G as GridProductos, P as Pagination } from "./Pagination-BWYpc0A7.js";
import "./ApplicationLogo-DB5hZ_I6.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "ListaProductos",
  __ssrInlineRender: true,
  props: {
    productos: [Object, Array],
    categorias: Array,
    filtros: Object
  },
  setup(__props) {
    var _a, _b;
    const props = __props;
    const busqueda = ref(((_a = props.filtros) == null ? void 0 : _a.busqueda) || "");
    const categoria = ref(((_b = props.filtros) == null ? void 0 : _b.categoria) || "");
    function buscar() {
      router.get("/productos", {
        busqueda: busqueda.value || "",
        categoria: categoria.value || ""
      }, { preserveState: true, replace: true });
    }
    function limpiar() {
      busqueda.value = "";
      categoria.value = "";
      router.get("/productos", {}, { preserveState: true, replace: true });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_select = resolveComponent("v-select");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_alert = resolveComponent("v-alert");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Lista de Productos" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_container, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_card, { class: "mb-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_card_title, { style: { "background-color": "#000066", "color": "white" } }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Búsqueda de Productos y Servicios `);
                            } else {
                              return [
                                createTextVNode(" Búsqueda de Productos y Servicios ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_card_text, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_row, { align: "center" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_text_field, {
                                            modelValue: busqueda.value,
                                            "onUpdate:modelValue": ($event) => busqueda.value = $event,
                                            label: "Nombre, descripción o palabras clave",
                                            variant: "outlined",
                                            clearable: "",
                                            "hide-details": "",
                                            onKeyup: buscar
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_text_field, {
                                              modelValue: busqueda.value,
                                              "onUpdate:modelValue": ($event) => busqueda.value = $event,
                                              label: "Nombre, descripción o palabras clave",
                                              variant: "outlined",
                                              clearable: "",
                                              "hide-details": "",
                                              onKeyup: withKeys(buscar, ["enter"])
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      md: "3"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_select, {
                                            modelValue: categoria.value,
                                            "onUpdate:modelValue": ($event) => categoria.value = $event,
                                            items: __props.categorias,
                                            label: "Categoría",
                                            variant: "outlined",
                                            clearable: "",
                                            "hide-details": ""
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_select, {
                                              modelValue: categoria.value,
                                              "onUpdate:modelValue": ($event) => categoria.value = $event,
                                              items: __props.categorias,
                                              label: "Categoría",
                                              variant: "outlined",
                                              clearable: "",
                                              "hide-details": ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      md: "3"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_btn, {
                                            style: { "background-color": "#000066", "color": "white" },
                                            class: "mr-2",
                                            onClick: buscar
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_icon, { left: "" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`mdi-magnify`);
                                                    } else {
                                                      return [
                                                        createTextVNode("mdi-magnify")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(` Buscar `);
                                              } else {
                                                return [
                                                  createVNode(_component_v_icon, { left: "" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("mdi-magnify")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createTextVNode(" Buscar ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_btn, {
                                            variant: "outlined",
                                            class: "mt-2 mt-md-0",
                                            onClick: limpiar
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Limpiar`);
                                              } else {
                                                return [
                                                  createTextVNode("Limpiar")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_btn, {
                                              style: { "background-color": "#000066", "color": "white" },
                                              class: "mr-2",
                                              onClick: buscar
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_icon, { left: "" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-magnify")
                                                  ]),
                                                  _: 1
                                                }),
                                                createTextVNode(" Buscar ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_btn, {
                                              variant: "outlined",
                                              class: "mt-2 mt-md-0",
                                              onClick: limpiar
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("Limpiar")
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
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_text_field, {
                                            modelValue: busqueda.value,
                                            "onUpdate:modelValue": ($event) => busqueda.value = $event,
                                            label: "Nombre, descripción o palabras clave",
                                            variant: "outlined",
                                            clearable: "",
                                            "hide-details": "",
                                            onKeyup: withKeys(buscar, ["enter"])
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        md: "3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_select, {
                                            modelValue: categoria.value,
                                            "onUpdate:modelValue": ($event) => categoria.value = $event,
                                            items: __props.categorias,
                                            label: "Categoría",
                                            variant: "outlined",
                                            clearable: "",
                                            "hide-details": ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        md: "3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_btn, {
                                            style: { "background-color": "#000066", "color": "white" },
                                            class: "mr-2",
                                            onClick: buscar
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_icon, { left: "" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-magnify")
                                                ]),
                                                _: 1
                                              }),
                                              createTextVNode(" Buscar ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_btn, {
                                            variant: "outlined",
                                            class: "mt-2 mt-md-0",
                                            onClick: limpiar
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("Limpiar")
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
                                createVNode(_component_v_row, { align: "center" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_text_field, {
                                          modelValue: busqueda.value,
                                          "onUpdate:modelValue": ($event) => busqueda.value = $event,
                                          label: "Nombre, descripción o palabras clave",
                                          variant: "outlined",
                                          clearable: "",
                                          "hide-details": "",
                                          onKeyup: withKeys(buscar, ["enter"])
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      md: "3"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_select, {
                                          modelValue: categoria.value,
                                          "onUpdate:modelValue": ($event) => categoria.value = $event,
                                          items: __props.categorias,
                                          label: "Categoría",
                                          variant: "outlined",
                                          clearable: "",
                                          "hide-details": ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      md: "3"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_btn, {
                                          style: { "background-color": "#000066", "color": "white" },
                                          class: "mr-2",
                                          onClick: buscar
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_icon, { left: "" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-magnify")
                                              ]),
                                              _: 1
                                            }),
                                            createTextVNode(" Buscar ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_btn, {
                                          variant: "outlined",
                                          class: "mt-2 mt-md-0",
                                          onClick: limpiar
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Limpiar")
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
                          createVNode(_component_v_card_title, { style: { "background-color": "#000066", "color": "white" } }, {
                            default: withCtx(() => [
                              createTextVNode(" Búsqueda de Productos y Servicios ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_card_text, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_row, { align: "center" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_text_field, {
                                        modelValue: busqueda.value,
                                        "onUpdate:modelValue": ($event) => busqueda.value = $event,
                                        label: "Nombre, descripción o palabras clave",
                                        variant: "outlined",
                                        clearable: "",
                                        "hide-details": "",
                                        onKeyup: withKeys(buscar, ["enter"])
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    md: "3"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_select, {
                                        modelValue: categoria.value,
                                        "onUpdate:modelValue": ($event) => categoria.value = $event,
                                        items: __props.categorias,
                                        label: "Categoría",
                                        variant: "outlined",
                                        clearable: "",
                                        "hide-details": ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    md: "3"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_btn, {
                                        style: { "background-color": "#000066", "color": "white" },
                                        class: "mr-2",
                                        onClick: buscar
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_icon, { left: "" }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-magnify")
                                            ]),
                                            _: 1
                                          }),
                                          createTextVNode(" Buscar ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_btn, {
                                        variant: "outlined",
                                        class: "mt-2 mt-md-0",
                                        onClick: limpiar
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Limpiar")
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
                  if (__props.productos && __props.productos.data && __props.productos.data.length > 0) {
                    _push3(ssrRenderComponent(_component_v_row, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(GridProductos, {
                                  productos: __props.productos.data
                                }, null, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(Pagination, {
                                  links: __props.productos.links
                                }, null, _parent5, _scopeId4));
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
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_v_col, { cols: "12" }, {
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
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(ssrRenderComponent(_component_v_row, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_v_alert, {
                                  type: "info",
                                  text: "No se encontraron productos con los filtros seleccionados."
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_v_alert, {
                                    type: "info",
                                    text: "No se encontraron productos con los filtros seleccionados."
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
                                createVNode(_component_v_alert, {
                                  type: "info",
                                  text: "No se encontraron productos con los filtros seleccionados."
                                })
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  }
                } else {
                  return [
                    createVNode(_component_v_card, { class: "mb-4" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card_title, { style: { "background-color": "#000066", "color": "white" } }, {
                          default: withCtx(() => [
                            createTextVNode(" Búsqueda de Productos y Servicios ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_card_text, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_row, { align: "center" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_text_field, {
                                      modelValue: busqueda.value,
                                      "onUpdate:modelValue": ($event) => busqueda.value = $event,
                                      label: "Nombre, descripción o palabras clave",
                                      variant: "outlined",
                                      clearable: "",
                                      "hide-details": "",
                                      onKeyup: withKeys(buscar, ["enter"])
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_select, {
                                      modelValue: categoria.value,
                                      "onUpdate:modelValue": ($event) => categoria.value = $event,
                                      items: __props.categorias,
                                      label: "Categoría",
                                      variant: "outlined",
                                      clearable: "",
                                      "hide-details": ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_btn, {
                                      style: { "background-color": "#000066", "color": "white" },
                                      class: "mr-2",
                                      onClick: buscar
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_icon, { left: "" }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-magnify")
                                          ]),
                                          _: 1
                                        }),
                                        createTextVNode(" Buscar ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_btn, {
                                      variant: "outlined",
                                      class: "mt-2 mt-md-0",
                                      onClick: limpiar
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Limpiar")
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
                    }),
                    __props.productos && __props.productos.data && __props.productos.data.length > 0 ? (openBlock(), createBlock(_component_v_row, { key: 0 }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, { cols: "12" }, {
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
                    })) : (openBlock(), createBlock(_component_v_row, { key: 1 }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, { cols: "12" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_alert, {
                              type: "info",
                              text: "No se encontraron productos con los filtros seleccionados."
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_container, null, {
                default: withCtx(() => [
                  createVNode(_component_v_card, { class: "mb-4" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_card_title, { style: { "background-color": "#000066", "color": "white" } }, {
                        default: withCtx(() => [
                          createTextVNode(" Búsqueda de Productos y Servicios ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_card_text, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_row, { align: "center" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_text_field, {
                                    modelValue: busqueda.value,
                                    "onUpdate:modelValue": ($event) => busqueda.value = $event,
                                    label: "Nombre, descripción o palabras clave",
                                    variant: "outlined",
                                    clearable: "",
                                    "hide-details": "",
                                    onKeyup: withKeys(buscar, ["enter"])
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "3"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_select, {
                                    modelValue: categoria.value,
                                    "onUpdate:modelValue": ($event) => categoria.value = $event,
                                    items: __props.categorias,
                                    label: "Categoría",
                                    variant: "outlined",
                                    clearable: "",
                                    "hide-details": ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "3"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_btn, {
                                    style: { "background-color": "#000066", "color": "white" },
                                    class: "mr-2",
                                    onClick: buscar
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_icon, { left: "" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-magnify")
                                        ]),
                                        _: 1
                                      }),
                                      createTextVNode(" Buscar ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_btn, {
                                    variant: "outlined",
                                    class: "mt-2 mt-md-0",
                                    onClick: limpiar
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Limpiar")
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
                  }),
                  __props.productos && __props.productos.data && __props.productos.data.length > 0 ? (openBlock(), createBlock(_component_v_row, { key: 0 }, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, { cols: "12" }, {
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
                  })) : (openBlock(), createBlock(_component_v_row, { key: 1 }, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, { cols: "12" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_alert, {
                            type: "info",
                            text: "No se encontraron productos con los filtros seleccionados."
                          })
                        ]),
                        _: 1
                      })
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
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Productos/ListaProductos.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
