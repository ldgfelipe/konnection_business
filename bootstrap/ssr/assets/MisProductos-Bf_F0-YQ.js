import { resolveComponent, withCtx, createVNode, useSSRContext, createTextVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList, toDisplayString, mergeProps, unref } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$3 } from "./AuthenticatedLayout-CjO21aP_.js";
import { c as categorias } from "./categorias-BLbQNXcu.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { Head } from "@inertiajs/vue3";
import "./ApplicationLogo-DB5hZ_I6.js";
const producto = {
  id: 0,
  id_user: 0,
  id_empresa: 0,
  nombre: "",
  descripcion: "",
  precio: "0.00",
  stock: 0,
  categoria: "",
  palabras_clave: [],
  imagen: "",
  action: ""
};
const _sfc_main$2 = {
  data() {
    return {};
  },
  methods: {
    emitedatos(evt) {
      var arrayImgs = Array.isArray(evt) ? evt : evt && evt.target ? evt.target.files : [];
      var arrayFiles = [];
      var arrayShow = [];
      for (var i = 0; i < arrayImgs.length; i++) {
        arrayFiles.push(arrayImgs[i]);
        arrayShow.push(URL.createObjectURL(arrayImgs[i]));
      }
      this.$emit("tosend", arrayFiles);
      this.$emit("toshow", arrayShow);
    }
  },
  props: {
    label: ""
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_card = resolveComponent("v-card");
  const _component_v_card_text = resolveComponent("v-card-text");
  const _component_v_file_input = resolveComponent("v-file-input");
  _push(ssrRenderComponent(_component_v_card, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_card_text, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_file_input, {
                label: $props.label,
                multiple: "",
                onChange: $options.emitedatos
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_file_input, {
                  label: $props.label,
                  multiple: "",
                  onChange: $options.emitedatos
                }, null, 8, ["label", "onChange"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_card_text, null, {
            default: withCtx(() => [
              createVNode(_component_v_file_input, {
                label: $props.label,
                multiple: "",
                onChange: $options.emitedatos
              }, null, 8, ["label", "onChange"])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/elementos/addimagenes.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const UploadImagenes = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {
  components: {
    UploadImagenes
  },
  data() {
    return {
      editor: false,
      categorias,
      productos: [],
      editprod: false,
      addproducto: false,
      productoAdd: producto,
      files: [],
      fileshow: [],
      prodselect: {},
      imagenprod: [],
      titulos: [
        {
          title: "Nombre",
          value: "nombre"
        },
        {
          title: "Descripción",
          value: "descripcion"
        },
        {
          title: "Precio",
          value: "precio"
        },
        {
          title: "Imagen",
          value: "imagen"
        },
        {
          title: "Acciones",
          value: "action"
        }
      ],
      imagendelete: [],
      imagenesCargadas: [],
      toshowimg: []
    };
  },
  mounted() {
    console.log(this.productoAdd);
    this.cargaLista();
  },
  computed: {},
  methods: {
    editarproducto(item) {
      this.prodselect = item;
      this.toshowimg = this.prodselect.item.imagen ? this.prodselect.item.imagen.split(",") : [];
      if (this.prodselect.item.palabras_clave) {
        this.prodselect.item.palabras_clave = String(this.prodselect.item.palabras_clave).split(",");
      } else {
        this.prodselect.item.palabras_clave = [];
      }
      this.editprod = true;
    },
    eliminarImagen(x) {
      this.imagendelete.push(this.toshowimg[x]);
      this.toshowimg.splice(x, 1);
    },
    cargaLista() {
      axios.post("/cargaProductos").then((res) => {
        this.productos = res.data;
      });
    },
    LoadImages(evt) {
      this.imagenprod = evt;
    },
    actualizarProducto() {
      var formData = new FormData();
      for (var l = 0; l < this.imagenprod.length; l++) {
        formData.append("archivo[" + l + "]", this.imagenprod[l]);
      }
      formData.append("id", this.prodselect.item.id);
      formData.append("id_empresa", this.dtEmpresa.id);
      formData.append("nombre", this.prodselect.item.nombre);
      formData.append("descripcion", this.prodselect.item.descripcion);
      formData.append("precio", this.prodselect.item.precio);
      formData.append("stock", this.prodselect.item.stock);
      formData.append("categoria", this.prodselect.item.categoria ? this.prodselect.item.categoria : "");
      formData.append("palabras_clave", Array.isArray(this.prodselect.item.palabras_clave) ? this.prodselect.item.palabras_clave.join(",") : this.prodselect.item.palabras_clave);
      formData.append("actualiImagen", this.prodselect.item.imagen);
      formData.append("eliminaImagenes", JSON.stringify(this.imagendelete));
      formData.append("action", "actualizar");
      setTimeout(() => {
        axios.post("/guardaProducto", formData, { headers: {
          "Content-Type": "multipart/form-data"
        } }).then((res) => {
          this.editprod = false;
          this.cargaLista();
        });
      }, 2e3);
    },
    eliminaproducto() {
      if (confirm("¿Seguro que desea eliminar el producto? ")) {
        var payload = {
          id: this.prodselect.item.id
        };
        axios.post("/eliminaproducto", payload).then((res) => {
          console.log(res);
          this.cargaLista();
          this.editprod = false;
        });
      }
    },
    guardarProducto() {
      var formData = new FormData();
      for (var l = 0; l < this.imagenprod.length; l++) {
        formData.append("archivo[" + l + "]", this.imagenprod[l]);
      }
      formData.append("id_empresa", this.dtEmpresa.id);
      formData.append("nombre", this.productoAdd.nombre);
      formData.append("descripcion", this.productoAdd.descripcion);
      formData.append("precio", this.productoAdd.precio);
      formData.append("stock", this.productoAdd.stock);
      formData.append("categoria", this.productoAdd.categoria ? this.productoAdd.categoria : "");
      formData.append("palabras_clave", Array.isArray(this.productoAdd.palabras_clave) ? this.productoAdd.palabras_clave.join(",") : this.productoAdd.palabras_clave);
      formData.append("action", "nuevo");
      setTimeout(() => {
        axios.post("/guardaProducto", formData, { headers: {
          "Content-Type": "multipart/form-data"
        } }).then((res) => {
          this.addproducto = false;
          this.productoAdd = { ...producto };
          this.imagenesCargadas = [];
          this.imagenprod = [];
          this.cargaLista();
        });
      }, 2e3);
    },
    cargaImagenes(evt) {
      this.imagenesCargadas = evt;
      console.log(this.imagenesCargadas);
    },
    LoadUpdateImagenes(evt) {
      evt.map((d) => {
        this.toshowimg.push(d);
      });
    }
  },
  props: ["dtEmpresa"]
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_card = resolveComponent("v-card");
  const _component_v_card_title = resolveComponent("v-card-title");
  const _component_v_btn = resolveComponent("v-btn");
  const _component_v_icon = resolveComponent("v-icon");
  const _component_v_card_text = resolveComponent("v-card-text");
  const _component_v_data_table = resolveComponent("v-data-table");
  const _component_v_img = resolveComponent("v-img");
  const _component_v_dialog = resolveComponent("v-dialog");
  const _component_v_row = resolveComponent("v-row");
  const _component_v_col = resolveComponent("v-col");
  const _component_UploadImagenes = resolveComponent("UploadImagenes");
  const _component_v_text_field = resolveComponent("v-text-field");
  const _component_v_textarea = resolveComponent("v-textarea");
  const _component_v_select = resolveComponent("v-select");
  const _component_v_combobox = resolveComponent("v-combobox");
  const _component_v_chip = resolveComponent("v-chip");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_v_card, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_card_title, { style: { "background-color": "blue", "color": "white" } }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Mis Productos `);
              _push3(ssrRenderComponent(_component_v_btn, {
                onClick: ($event) => $data.addproducto = true,
                style: { "color": "black" }
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_icon, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`mdi-plus`);
                        } else {
                          return [
                            createTextVNode("mdi-plus")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_icon, null, {
                        default: withCtx(() => [
                          createTextVNode("mdi-plus")
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
                createTextVNode(" Mis Productos "),
                createVNode(_component_v_btn, {
                  onClick: ($event) => $data.addproducto = true,
                  style: { "color": "black" }
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_icon, null, {
                      default: withCtx(() => [
                        createTextVNode("mdi-plus")
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
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_card_text, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_data_table, {
                items: $data.productos,
                headers: $data.titulos
              }, {
                "item.imagen": withCtx((item, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    if (item.item.imagen) {
                      _push4(ssrRenderComponent(_component_v_img, {
                        src: _ctx.$assetUrl(item.item.imagen.split(",")[0]),
                        style: { "width": "200px" }
                      }, null, _parent4, _scopeId3));
                    } else {
                      _push4(`<!---->`);
                    }
                  } else {
                    return [
                      item.item.imagen ? (openBlock(), createBlock(_component_v_img, {
                        key: 0,
                        src: _ctx.$assetUrl(item.item.imagen.split(",")[0]),
                        style: { "width": "200px" }
                      }, null, 8, ["src"])) : createCommentVNode("", true)
                    ];
                  }
                }),
                "item.action": withCtx((item, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_btn, {
                      style: { "background-color": "blue", "color": "white" },
                      onClick: ($event) => $options.editarproducto(item)
                    }, {
                      default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_icon, null, {
                            default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`mdi-pencil`);
                              } else {
                                return [
                                  createTextVNode("mdi-pencil")
                                ];
                              }
                            }),
                            _: 2
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_v_icon, null, {
                              default: withCtx(() => [
                                createTextVNode("mdi-pencil")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_btn, {
                        style: { "background-color": "blue", "color": "white" },
                        onClick: ($event) => $options.editarproducto(item)
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_icon, null, {
                            default: withCtx(() => [
                              createTextVNode("mdi-pencil")
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
            } else {
              return [
                createVNode(_component_v_data_table, {
                  items: $data.productos,
                  headers: $data.titulos
                }, {
                  "item.imagen": withCtx((item) => [
                    item.item.imagen ? (openBlock(), createBlock(_component_v_img, {
                      key: 0,
                      src: _ctx.$assetUrl(item.item.imagen.split(",")[0]),
                      style: { "width": "200px" }
                    }, null, 8, ["src"])) : createCommentVNode("", true)
                  ]),
                  "item.action": withCtx((item) => [
                    createVNode(_component_v_btn, {
                      style: { "background-color": "blue", "color": "white" },
                      onClick: ($event) => $options.editarproducto(item)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_icon, null, {
                          default: withCtx(() => [
                            createTextVNode("mdi-pencil")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 1
                }, 8, ["items", "headers"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_card_title, { style: { "background-color": "blue", "color": "white" } }, {
            default: withCtx(() => [
              createTextVNode(" Mis Productos "),
              createVNode(_component_v_btn, {
                onClick: ($event) => $data.addproducto = true,
                style: { "color": "black" }
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_icon, null, {
                    default: withCtx(() => [
                      createTextVNode("mdi-plus")
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
              createVNode(_component_v_data_table, {
                items: $data.productos,
                headers: $data.titulos
              }, {
                "item.imagen": withCtx((item) => [
                  item.item.imagen ? (openBlock(), createBlock(_component_v_img, {
                    key: 0,
                    src: _ctx.$assetUrl(item.item.imagen.split(",")[0]),
                    style: { "width": "200px" }
                  }, null, 8, ["src"])) : createCommentVNode("", true)
                ]),
                "item.action": withCtx((item) => [
                  createVNode(_component_v_btn, {
                    style: { "background-color": "blue", "color": "white" },
                    onClick: ($event) => $options.editarproducto(item)
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_icon, null, {
                        default: withCtx(() => [
                          createTextVNode("mdi-pencil")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                _: 1
              }, 8, ["items", "headers"])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_dialog, {
    modelValue: $data.editprod,
    "onUpdate:modelValue": ($event) => $data.editprod = $event
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_card, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_card_title, { style: { "background-color": "blue", "color": "white" } }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<span class="headline"${_scopeId3}>Edita Producto</span>`);
                    _push4(ssrRenderComponent(_component_v_btn, {
                      class: "elevation-0",
                      onClick: ($event) => $data.editor ? $data.editor = false : $data.editor = true
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_icon, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`mdi-pencil`);
                              } else {
                                return [
                                  createTextVNode("mdi-pencil")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_v_icon, null, {
                              default: withCtx(() => [
                                createTextVNode("mdi-pencil")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_btn, {
                      class: "elevation-0",
                      onClick: ($event) => $data.editprod = false
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
                      createVNode("span", { class: "headline" }, "Edita Producto"),
                      createVNode(_component_v_btn, {
                        class: "elevation-0",
                        onClick: ($event) => $data.editor ? $data.editor = false : $data.editor = true
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_icon, null, {
                            default: withCtx(() => [
                              createTextVNode("mdi-pencil")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_v_btn, {
                        class: "elevation-0",
                        onClick: ($event) => $data.editprod = false
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
                            sm: "6"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_v_row, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      if ($data.editor) {
                                        _push7(ssrRenderComponent(_component_v_col, {
                                          cols: "12",
                                          sm: "12"
                                        }, {
                                          default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                            if (_push8) {
                                              _push8(ssrRenderComponent(_component_UploadImagenes, {
                                                label: "Agrega imagenes",
                                                onTosend: $options.LoadImages,
                                                onToshow: $options.LoadUpdateImagenes
                                              }, null, _parent8, _scopeId7));
                                            } else {
                                              return [
                                                createVNode(_component_UploadImagenes, {
                                                  label: "Agrega imagenes",
                                                  onTosend: $options.LoadImages,
                                                  onToshow: $options.LoadUpdateImagenes
                                                }, null, 8, ["onTosend", "onToshow"])
                                              ];
                                            }
                                          }),
                                          _: 1
                                        }, _parent7, _scopeId6));
                                      } else {
                                        _push7(`<!---->`);
                                      }
                                      _push7(`<!--[-->`);
                                      ssrRenderList($data.toshowimg, (key, index) => {
                                        _push7(ssrRenderComponent(_component_v_col, {
                                          cols: "12",
                                          sm: "4"
                                        }, {
                                          default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                            if (_push8) {
                                              if (key) {
                                                _push8(ssrRenderComponent(_component_v_img, {
                                                  src: _ctx.$assetUrl(key)
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      if ($data.editor) {
                                                        _push9(ssrRenderComponent(_component_v_btn, {
                                                          class: "elevation-0",
                                                          onClick: ($event) => $options.eliminarImagen(index)
                                                        }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(ssrRenderComponent(_component_v_icon, null, {
                                                                default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                  if (_push11) {
                                                                    _push11(`mdi-close`);
                                                                  } else {
                                                                    return [
                                                                      createTextVNode("mdi-close")
                                                                    ];
                                                                  }
                                                                }),
                                                                _: 2
                                                              }, _parent10, _scopeId9));
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
                                                          _: 2
                                                        }, _parent9, _scopeId8));
                                                      } else {
                                                        _push9(`<!---->`);
                                                      }
                                                    } else {
                                                      return [
                                                        $data.editor ? (openBlock(), createBlock(_component_v_btn, {
                                                          key: 0,
                                                          class: "elevation-0",
                                                          onClick: ($event) => $options.eliminarImagen(index)
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
                                                        }, 8, ["onClick"])) : createCommentVNode("", true)
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
                                                key ? (openBlock(), createBlock(_component_v_img, {
                                                  key: 0,
                                                  src: _ctx.$assetUrl(key)
                                                }, {
                                                  default: withCtx(() => [
                                                    $data.editor ? (openBlock(), createBlock(_component_v_btn, {
                                                      key: 0,
                                                      class: "elevation-0",
                                                      onClick: ($event) => $options.eliminarImagen(index)
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
                                                    }, 8, ["onClick"])) : createCommentVNode("", true)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["src"])) : createCommentVNode("", true)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent7, _scopeId6));
                                      });
                                      _push7(`<!--]-->`);
                                    } else {
                                      return [
                                        $data.editor ? (openBlock(), createBlock(_component_v_col, {
                                          key: 0,
                                          cols: "12",
                                          sm: "12"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_UploadImagenes, {
                                              label: "Agrega imagenes",
                                              onTosend: $options.LoadImages,
                                              onToshow: $options.LoadUpdateImagenes
                                            }, null, 8, ["onTosend", "onToshow"])
                                          ]),
                                          _: 1
                                        })) : createCommentVNode("", true),
                                        (openBlock(true), createBlock(Fragment, null, renderList($data.toshowimg, (key, index) => {
                                          return openBlock(), createBlock(_component_v_col, {
                                            cols: "12",
                                            sm: "4"
                                          }, {
                                            default: withCtx(() => [
                                              key ? (openBlock(), createBlock(_component_v_img, {
                                                key: 0,
                                                src: _ctx.$assetUrl(key)
                                              }, {
                                                default: withCtx(() => [
                                                  $data.editor ? (openBlock(), createBlock(_component_v_btn, {
                                                    key: 0,
                                                    class: "elevation-0",
                                                    onClick: ($event) => $options.eliminarImagen(index)
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
                                                  }, 8, ["onClick"])) : createCommentVNode("", true)
                                                ]),
                                                _: 2
                                              }, 1032, ["src"])) : createCommentVNode("", true)
                                            ]),
                                            _: 2
                                          }, 1024);
                                        }), 256))
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_v_row, null, {
                                    default: withCtx(() => [
                                      $data.editor ? (openBlock(), createBlock(_component_v_col, {
                                        key: 0,
                                        cols: "12",
                                        sm: "12"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_UploadImagenes, {
                                            label: "Agrega imagenes",
                                            onTosend: $options.LoadImages,
                                            onToshow: $options.LoadUpdateImagenes
                                          }, null, 8, ["onTosend", "onToshow"])
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true),
                                      (openBlock(true), createBlock(Fragment, null, renderList($data.toshowimg, (key, index) => {
                                        return openBlock(), createBlock(_component_v_col, {
                                          cols: "12",
                                          sm: "4"
                                        }, {
                                          default: withCtx(() => [
                                            key ? (openBlock(), createBlock(_component_v_img, {
                                              key: 0,
                                              src: _ctx.$assetUrl(key)
                                            }, {
                                              default: withCtx(() => [
                                                $data.editor ? (openBlock(), createBlock(_component_v_btn, {
                                                  key: 0,
                                                  class: "elevation-0",
                                                  onClick: ($event) => $options.eliminarImagen(index)
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
                                                }, 8, ["onClick"])) : createCommentVNode("", true)
                                              ]),
                                              _: 2
                                            }, 1032, ["src"])) : createCommentVNode("", true)
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 256))
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
                            sm: "6"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_v_card, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(ssrRenderComponent(_component_v_card_title, null, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            if (!$data.editor) {
                                              _push8(`<span${_scopeId7}> Producto: ${ssrInterpolate($data.prodselect.item.nombre)}</span>`);
                                            } else {
                                              _push8(`<!---->`);
                                            }
                                            if ($data.editor) {
                                              _push8(ssrRenderComponent(_component_v_text_field, {
                                                label: "Nombre del producto",
                                                modelValue: $data.prodselect.item.nombre,
                                                "onUpdate:modelValue": ($event) => $data.prodselect.item.nombre = $event,
                                                variant: "outlined"
                                              }, null, _parent8, _scopeId7));
                                            } else {
                                              _push8(`<!---->`);
                                            }
                                          } else {
                                            return [
                                              !$data.editor ? (openBlock(), createBlock("span", { key: 0 }, " Producto: " + toDisplayString($data.prodselect.item.nombre), 1)) : createCommentVNode("", true),
                                              $data.editor ? (openBlock(), createBlock(_component_v_text_field, {
                                                key: 1,
                                                label: "Nombre del producto",
                                                modelValue: $data.prodselect.item.nombre,
                                                "onUpdate:modelValue": ($event) => $data.prodselect.item.nombre = $event,
                                                variant: "outlined"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent7, _scopeId6));
                                      _push7(ssrRenderComponent(_component_v_card_text, null, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            if (!$data.editor) {
                                              _push8(`<span${_scopeId7}> Descripción: ${ssrInterpolate($data.prodselect.item.descripcion)}</span>`);
                                            } else {
                                              _push8(`<!---->`);
                                            }
                                            if ($data.editor) {
                                              _push8(ssrRenderComponent(_component_v_textarea, {
                                                label: "Descripción",
                                                modelValue: $data.prodselect.item.descripcion,
                                                "onUpdate:modelValue": ($event) => $data.prodselect.item.descripcion = $event,
                                                variant: "outlined"
                                              }, null, _parent8, _scopeId7));
                                            } else {
                                              _push8(`<!---->`);
                                            }
                                            _push8(`<hr${_scopeId7}><br${_scopeId7}>`);
                                            if (!$data.editor) {
                                              _push8(`<span${_scopeId7}>Precio: ${ssrInterpolate($data.prodselect.item.precio)}</span>`);
                                            } else {
                                              _push8(`<!---->`);
                                            }
                                            if ($data.editor) {
                                              _push8(ssrRenderComponent(_component_v_text_field, {
                                                label: "Precio",
                                                modelValue: $data.prodselect.item.precio,
                                                "onUpdate:modelValue": ($event) => $data.prodselect.item.precio = $event,
                                                variant: "outlined"
                                              }, null, _parent8, _scopeId7));
                                            } else {
                                              _push8(`<!---->`);
                                            }
                                            _push8(`<hr${_scopeId7}><br${_scopeId7}>`);
                                            if (!$data.editor) {
                                              _push8(`<span${_scopeId7}> Cantidad: ${ssrInterpolate($data.prodselect.item.stock)}</span>`);
                                            } else {
                                              _push8(`<!---->`);
                                            }
                                            if ($data.editor) {
                                              _push8(ssrRenderComponent(_component_v_text_field, {
                                                label: "Cantidad",
                                                modelValue: $data.prodselect.item.stock,
                                                "onUpdate:modelValue": ($event) => $data.prodselect.item.stock = $event,
                                                variant: "outlined"
                                              }, null, _parent8, _scopeId7));
                                            } else {
                                              _push8(`<!---->`);
                                            }
                                            _push8(`<hr${_scopeId7}>`);
                                            if (!$data.editor) {
                                              _push8(`<span${_scopeId7}> Categoria de Producto: ${ssrInterpolate($data.prodselect.item.categoria)}</span>`);
                                            } else {
                                              _push8(`<!---->`);
                                            }
                                            if ($data.editor) {
                                              _push8(ssrRenderComponent(_component_v_select, {
                                                modelValue: $data.prodselect.item.categoria,
                                                "onUpdate:modelValue": ($event) => $data.prodselect.item.categoria = $event,
                                                label: "Categoría",
                                                items: $data.categorias
                                              }, null, _parent8, _scopeId7));
                                            } else {
                                              _push8(`<!---->`);
                                            }
                                            _push8(`<hr${_scopeId7}>`);
                                            if (!$data.editor) {
                                              _push8(`<span${_scopeId7}> Palabras Clave: ${ssrInterpolate($data.prodselect.item.palabras_clave)}</span>`);
                                            } else {
                                              _push8(`<!---->`);
                                            }
                                            if ($data.editor) {
                                              _push8(ssrRenderComponent(_component_v_combobox, {
                                                modelValue: $data.prodselect.item.palabras_clave,
                                                "onUpdate:modelValue": ($event) => $data.prodselect.item.palabras_clave = $event,
                                                chips: "",
                                                clearable: "",
                                                multiple: "",
                                                filled: "",
                                                rounded: "",
                                                "append-icon": ""
                                              }, {
                                                selection: withCtx(({ attrs, item, select, selected }, _push9, _parent9, _scopeId8) => {
                                                  if (_push9) {
                                                    _push9(ssrRenderComponent(_component_v_chip, mergeProps({ small: "" }, attrs, {
                                                      "input-value": selected,
                                                      close: "",
                                                      onClick: select,
                                                      "onClick:close": ($event) => _ctx.remove(item)
                                                    }), {
                                                      default: withCtx((_8, _push10, _parent10, _scopeId9) => {
                                                        if (_push10) {
                                                          _push10(`${ssrInterpolate(item)}`);
                                                        } else {
                                                          return [
                                                            createTextVNode(toDisplayString(item), 1)
                                                          ];
                                                        }
                                                      }),
                                                      _: 2
                                                    }, _parent9, _scopeId8));
                                                  } else {
                                                    return [
                                                      createVNode(_component_v_chip, mergeProps({ small: "" }, attrs, {
                                                        "input-value": selected,
                                                        close: "",
                                                        onClick: select,
                                                        "onClick:close": ($event) => _ctx.remove(item)
                                                      }), {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(item), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1040, ["input-value", "onClick", "onClick:close"])
                                                    ];
                                                  }
                                                }),
                                                _: 1
                                              }, _parent8, _scopeId7));
                                            } else {
                                              _push8(`<!---->`);
                                            }
                                            if ($data.editor) {
                                              _push8(ssrRenderComponent(_component_v_btn, {
                                                onClick: ($event) => $options.actualizarProducto(),
                                                style: { "background-color": "blue", "color": "white" }
                                              }, {
                                                default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                  if (_push9) {
                                                    _push9(ssrRenderComponent(_component_v_icon, null, {
                                                      default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                        if (_push10) {
                                                          _push10(`mdi-content-save`);
                                                        } else {
                                                          return [
                                                            createTextVNode("mdi-content-save")
                                                          ];
                                                        }
                                                      }),
                                                      _: 1
                                                    }, _parent9, _scopeId8));
                                                  } else {
                                                    return [
                                                      createVNode(_component_v_icon, null, {
                                                        default: withCtx(() => [
                                                          createTextVNode("mdi-content-save")
                                                        ]),
                                                        _: 1
                                                      })
                                                    ];
                                                  }
                                                }),
                                                _: 1
                                              }, _parent8, _scopeId7));
                                            } else {
                                              _push8(`<!---->`);
                                            }
                                            _push8(ssrRenderComponent(_component_v_btn, {
                                              style: { "background-color": "red", "color": "white" },
                                              onClick: ($event) => $options.eliminaproducto()
                                            }, {
                                              default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                if (_push9) {
                                                  _push9(`Elimar Producto`);
                                                } else {
                                                  return [
                                                    createTextVNode("Elimar Producto")
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent8, _scopeId7));
                                          } else {
                                            return [
                                              !$data.editor ? (openBlock(), createBlock("span", { key: 0 }, " Descripción: " + toDisplayString($data.prodselect.item.descripcion), 1)) : createCommentVNode("", true),
                                              $data.editor ? (openBlock(), createBlock(_component_v_textarea, {
                                                key: 1,
                                                label: "Descripción",
                                                modelValue: $data.prodselect.item.descripcion,
                                                "onUpdate:modelValue": ($event) => $data.prodselect.item.descripcion = $event,
                                                variant: "outlined"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                                              createVNode("hr"),
                                              createVNode("br"),
                                              !$data.editor ? (openBlock(), createBlock("span", { key: 2 }, "Precio: " + toDisplayString($data.prodselect.item.precio), 1)) : createCommentVNode("", true),
                                              $data.editor ? (openBlock(), createBlock(_component_v_text_field, {
                                                key: 3,
                                                label: "Precio",
                                                modelValue: $data.prodselect.item.precio,
                                                "onUpdate:modelValue": ($event) => $data.prodselect.item.precio = $event,
                                                variant: "outlined"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                                              createVNode("hr"),
                                              createVNode("br"),
                                              !$data.editor ? (openBlock(), createBlock("span", { key: 4 }, " Cantidad: " + toDisplayString($data.prodselect.item.stock), 1)) : createCommentVNode("", true),
                                              $data.editor ? (openBlock(), createBlock(_component_v_text_field, {
                                                key: 5,
                                                label: "Cantidad",
                                                modelValue: $data.prodselect.item.stock,
                                                "onUpdate:modelValue": ($event) => $data.prodselect.item.stock = $event,
                                                variant: "outlined"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                                              createVNode("hr"),
                                              !$data.editor ? (openBlock(), createBlock("span", { key: 6 }, " Categoria de Producto: " + toDisplayString($data.prodselect.item.categoria), 1)) : createCommentVNode("", true),
                                              $data.editor ? (openBlock(), createBlock(_component_v_select, {
                                                key: 7,
                                                modelValue: $data.prodselect.item.categoria,
                                                "onUpdate:modelValue": ($event) => $data.prodselect.item.categoria = $event,
                                                label: "Categoría",
                                                items: $data.categorias
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])) : createCommentVNode("", true),
                                              createVNode("hr"),
                                              !$data.editor ? (openBlock(), createBlock("span", { key: 8 }, " Palabras Clave: " + toDisplayString($data.prodselect.item.palabras_clave), 1)) : createCommentVNode("", true),
                                              $data.editor ? (openBlock(), createBlock(_component_v_combobox, {
                                                key: 9,
                                                modelValue: $data.prodselect.item.palabras_clave,
                                                "onUpdate:modelValue": ($event) => $data.prodselect.item.palabras_clave = $event,
                                                chips: "",
                                                clearable: "",
                                                multiple: "",
                                                filled: "",
                                                rounded: "",
                                                "append-icon": ""
                                              }, {
                                                selection: withCtx(({ attrs, item, select, selected }) => [
                                                  createVNode(_component_v_chip, mergeProps({ small: "" }, attrs, {
                                                    "input-value": selected,
                                                    close: "",
                                                    onClick: select,
                                                    "onClick:close": ($event) => _ctx.remove(item)
                                                  }), {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(item), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1040, ["input-value", "onClick", "onClick:close"])
                                                ]),
                                                _: 1
                                              }, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                                              $data.editor ? (openBlock(), createBlock(_component_v_btn, {
                                                key: 10,
                                                onClick: ($event) => $options.actualizarProducto(),
                                                style: { "background-color": "blue", "color": "white" }
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_icon, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("mdi-content-save")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }, 8, ["onClick"])) : createCommentVNode("", true),
                                              createVNode(_component_v_btn, {
                                                style: { "background-color": "red", "color": "white" },
                                                onClick: ($event) => $options.eliminaproducto()
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Elimar Producto")
                                                ]),
                                                _: 1
                                              }, 8, ["onClick"])
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent7, _scopeId6));
                                    } else {
                                      return [
                                        createVNode(_component_v_card_title, null, {
                                          default: withCtx(() => [
                                            !$data.editor ? (openBlock(), createBlock("span", { key: 0 }, " Producto: " + toDisplayString($data.prodselect.item.nombre), 1)) : createCommentVNode("", true),
                                            $data.editor ? (openBlock(), createBlock(_component_v_text_field, {
                                              key: 1,
                                              label: "Nombre del producto",
                                              modelValue: $data.prodselect.item.nombre,
                                              "onUpdate:modelValue": ($event) => $data.prodselect.item.nombre = $event,
                                              variant: "outlined"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true)
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_card_text, null, {
                                          default: withCtx(() => [
                                            !$data.editor ? (openBlock(), createBlock("span", { key: 0 }, " Descripción: " + toDisplayString($data.prodselect.item.descripcion), 1)) : createCommentVNode("", true),
                                            $data.editor ? (openBlock(), createBlock(_component_v_textarea, {
                                              key: 1,
                                              label: "Descripción",
                                              modelValue: $data.prodselect.item.descripcion,
                                              "onUpdate:modelValue": ($event) => $data.prodselect.item.descripcion = $event,
                                              variant: "outlined"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                                            createVNode("hr"),
                                            createVNode("br"),
                                            !$data.editor ? (openBlock(), createBlock("span", { key: 2 }, "Precio: " + toDisplayString($data.prodselect.item.precio), 1)) : createCommentVNode("", true),
                                            $data.editor ? (openBlock(), createBlock(_component_v_text_field, {
                                              key: 3,
                                              label: "Precio",
                                              modelValue: $data.prodselect.item.precio,
                                              "onUpdate:modelValue": ($event) => $data.prodselect.item.precio = $event,
                                              variant: "outlined"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                                            createVNode("hr"),
                                            createVNode("br"),
                                            !$data.editor ? (openBlock(), createBlock("span", { key: 4 }, " Cantidad: " + toDisplayString($data.prodselect.item.stock), 1)) : createCommentVNode("", true),
                                            $data.editor ? (openBlock(), createBlock(_component_v_text_field, {
                                              key: 5,
                                              label: "Cantidad",
                                              modelValue: $data.prodselect.item.stock,
                                              "onUpdate:modelValue": ($event) => $data.prodselect.item.stock = $event,
                                              variant: "outlined"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                                            createVNode("hr"),
                                            !$data.editor ? (openBlock(), createBlock("span", { key: 6 }, " Categoria de Producto: " + toDisplayString($data.prodselect.item.categoria), 1)) : createCommentVNode("", true),
                                            $data.editor ? (openBlock(), createBlock(_component_v_select, {
                                              key: 7,
                                              modelValue: $data.prodselect.item.categoria,
                                              "onUpdate:modelValue": ($event) => $data.prodselect.item.categoria = $event,
                                              label: "Categoría",
                                              items: $data.categorias
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])) : createCommentVNode("", true),
                                            createVNode("hr"),
                                            !$data.editor ? (openBlock(), createBlock("span", { key: 8 }, " Palabras Clave: " + toDisplayString($data.prodselect.item.palabras_clave), 1)) : createCommentVNode("", true),
                                            $data.editor ? (openBlock(), createBlock(_component_v_combobox, {
                                              key: 9,
                                              modelValue: $data.prodselect.item.palabras_clave,
                                              "onUpdate:modelValue": ($event) => $data.prodselect.item.palabras_clave = $event,
                                              chips: "",
                                              clearable: "",
                                              multiple: "",
                                              filled: "",
                                              rounded: "",
                                              "append-icon": ""
                                            }, {
                                              selection: withCtx(({ attrs, item, select, selected }) => [
                                                createVNode(_component_v_chip, mergeProps({ small: "" }, attrs, {
                                                  "input-value": selected,
                                                  close: "",
                                                  onClick: select,
                                                  "onClick:close": ($event) => _ctx.remove(item)
                                                }), {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(item), 1)
                                                  ]),
                                                  _: 2
                                                }, 1040, ["input-value", "onClick", "onClick:close"])
                                              ]),
                                              _: 1
                                            }, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                                            $data.editor ? (openBlock(), createBlock(_component_v_btn, {
                                              key: 10,
                                              onClick: ($event) => $options.actualizarProducto(),
                                              style: { "background-color": "blue", "color": "white" }
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_icon, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-content-save")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }, 8, ["onClick"])) : createCommentVNode("", true),
                                            createVNode(_component_v_btn, {
                                              style: { "background-color": "red", "color": "white" },
                                              onClick: ($event) => $options.eliminaproducto()
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("Elimar Producto")
                                              ]),
                                              _: 1
                                            }, 8, ["onClick"])
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
                                  createVNode(_component_v_card, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_card_title, null, {
                                        default: withCtx(() => [
                                          !$data.editor ? (openBlock(), createBlock("span", { key: 0 }, " Producto: " + toDisplayString($data.prodselect.item.nombre), 1)) : createCommentVNode("", true),
                                          $data.editor ? (openBlock(), createBlock(_component_v_text_field, {
                                            key: 1,
                                            label: "Nombre del producto",
                                            modelValue: $data.prodselect.item.nombre,
                                            "onUpdate:modelValue": ($event) => $data.prodselect.item.nombre = $event,
                                            variant: "outlined"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_card_text, null, {
                                        default: withCtx(() => [
                                          !$data.editor ? (openBlock(), createBlock("span", { key: 0 }, " Descripción: " + toDisplayString($data.prodselect.item.descripcion), 1)) : createCommentVNode("", true),
                                          $data.editor ? (openBlock(), createBlock(_component_v_textarea, {
                                            key: 1,
                                            label: "Descripción",
                                            modelValue: $data.prodselect.item.descripcion,
                                            "onUpdate:modelValue": ($event) => $data.prodselect.item.descripcion = $event,
                                            variant: "outlined"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                                          createVNode("hr"),
                                          createVNode("br"),
                                          !$data.editor ? (openBlock(), createBlock("span", { key: 2 }, "Precio: " + toDisplayString($data.prodselect.item.precio), 1)) : createCommentVNode("", true),
                                          $data.editor ? (openBlock(), createBlock(_component_v_text_field, {
                                            key: 3,
                                            label: "Precio",
                                            modelValue: $data.prodselect.item.precio,
                                            "onUpdate:modelValue": ($event) => $data.prodselect.item.precio = $event,
                                            variant: "outlined"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                                          createVNode("hr"),
                                          createVNode("br"),
                                          !$data.editor ? (openBlock(), createBlock("span", { key: 4 }, " Cantidad: " + toDisplayString($data.prodselect.item.stock), 1)) : createCommentVNode("", true),
                                          $data.editor ? (openBlock(), createBlock(_component_v_text_field, {
                                            key: 5,
                                            label: "Cantidad",
                                            modelValue: $data.prodselect.item.stock,
                                            "onUpdate:modelValue": ($event) => $data.prodselect.item.stock = $event,
                                            variant: "outlined"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                                          createVNode("hr"),
                                          !$data.editor ? (openBlock(), createBlock("span", { key: 6 }, " Categoria de Producto: " + toDisplayString($data.prodselect.item.categoria), 1)) : createCommentVNode("", true),
                                          $data.editor ? (openBlock(), createBlock(_component_v_select, {
                                            key: 7,
                                            modelValue: $data.prodselect.item.categoria,
                                            "onUpdate:modelValue": ($event) => $data.prodselect.item.categoria = $event,
                                            label: "Categoría",
                                            items: $data.categorias
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])) : createCommentVNode("", true),
                                          createVNode("hr"),
                                          !$data.editor ? (openBlock(), createBlock("span", { key: 8 }, " Palabras Clave: " + toDisplayString($data.prodselect.item.palabras_clave), 1)) : createCommentVNode("", true),
                                          $data.editor ? (openBlock(), createBlock(_component_v_combobox, {
                                            key: 9,
                                            modelValue: $data.prodselect.item.palabras_clave,
                                            "onUpdate:modelValue": ($event) => $data.prodselect.item.palabras_clave = $event,
                                            chips: "",
                                            clearable: "",
                                            multiple: "",
                                            filled: "",
                                            rounded: "",
                                            "append-icon": ""
                                          }, {
                                            selection: withCtx(({ attrs, item, select, selected }) => [
                                              createVNode(_component_v_chip, mergeProps({ small: "" }, attrs, {
                                                "input-value": selected,
                                                close: "",
                                                onClick: select,
                                                "onClick:close": ($event) => _ctx.remove(item)
                                              }), {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(item), 1)
                                                ]),
                                                _: 2
                                              }, 1040, ["input-value", "onClick", "onClick:close"])
                                            ]),
                                            _: 1
                                          }, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                                          $data.editor ? (openBlock(), createBlock(_component_v_btn, {
                                            key: 10,
                                            onClick: ($event) => $options.actualizarProducto(),
                                            style: { "background-color": "blue", "color": "white" }
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_icon, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-content-save")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }, 8, ["onClick"])) : createCommentVNode("", true),
                                          createVNode(_component_v_btn, {
                                            style: { "background-color": "red", "color": "white" },
                                            onClick: ($event) => $options.eliminaproducto()
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("Elimar Producto")
                                            ]),
                                            _: 1
                                          }, 8, ["onClick"])
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
                            createVNode(_component_v_col, {
                              cols: "12",
                              sm: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_row, null, {
                                  default: withCtx(() => [
                                    $data.editor ? (openBlock(), createBlock(_component_v_col, {
                                      key: 0,
                                      cols: "12",
                                      sm: "12"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_UploadImagenes, {
                                          label: "Agrega imagenes",
                                          onTosend: $options.LoadImages,
                                          onToshow: $options.LoadUpdateImagenes
                                        }, null, 8, ["onTosend", "onToshow"])
                                      ]),
                                      _: 1
                                    })) : createCommentVNode("", true),
                                    (openBlock(true), createBlock(Fragment, null, renderList($data.toshowimg, (key, index) => {
                                      return openBlock(), createBlock(_component_v_col, {
                                        cols: "12",
                                        sm: "4"
                                      }, {
                                        default: withCtx(() => [
                                          key ? (openBlock(), createBlock(_component_v_img, {
                                            key: 0,
                                            src: _ctx.$assetUrl(key)
                                          }, {
                                            default: withCtx(() => [
                                              $data.editor ? (openBlock(), createBlock(_component_v_btn, {
                                                key: 0,
                                                class: "elevation-0",
                                                onClick: ($event) => $options.eliminarImagen(index)
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
                                              }, 8, ["onClick"])) : createCommentVNode("", true)
                                            ]),
                                            _: 2
                                          }, 1032, ["src"])) : createCommentVNode("", true)
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 256))
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "12",
                              sm: "6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_card, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_card_title, null, {
                                      default: withCtx(() => [
                                        !$data.editor ? (openBlock(), createBlock("span", { key: 0 }, " Producto: " + toDisplayString($data.prodselect.item.nombre), 1)) : createCommentVNode("", true),
                                        $data.editor ? (openBlock(), createBlock(_component_v_text_field, {
                                          key: 1,
                                          label: "Nombre del producto",
                                          modelValue: $data.prodselect.item.nombre,
                                          "onUpdate:modelValue": ($event) => $data.prodselect.item.nombre = $event,
                                          variant: "outlined"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_card_text, null, {
                                      default: withCtx(() => [
                                        !$data.editor ? (openBlock(), createBlock("span", { key: 0 }, " Descripción: " + toDisplayString($data.prodselect.item.descripcion), 1)) : createCommentVNode("", true),
                                        $data.editor ? (openBlock(), createBlock(_component_v_textarea, {
                                          key: 1,
                                          label: "Descripción",
                                          modelValue: $data.prodselect.item.descripcion,
                                          "onUpdate:modelValue": ($event) => $data.prodselect.item.descripcion = $event,
                                          variant: "outlined"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                                        createVNode("hr"),
                                        createVNode("br"),
                                        !$data.editor ? (openBlock(), createBlock("span", { key: 2 }, "Precio: " + toDisplayString($data.prodselect.item.precio), 1)) : createCommentVNode("", true),
                                        $data.editor ? (openBlock(), createBlock(_component_v_text_field, {
                                          key: 3,
                                          label: "Precio",
                                          modelValue: $data.prodselect.item.precio,
                                          "onUpdate:modelValue": ($event) => $data.prodselect.item.precio = $event,
                                          variant: "outlined"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                                        createVNode("hr"),
                                        createVNode("br"),
                                        !$data.editor ? (openBlock(), createBlock("span", { key: 4 }, " Cantidad: " + toDisplayString($data.prodselect.item.stock), 1)) : createCommentVNode("", true),
                                        $data.editor ? (openBlock(), createBlock(_component_v_text_field, {
                                          key: 5,
                                          label: "Cantidad",
                                          modelValue: $data.prodselect.item.stock,
                                          "onUpdate:modelValue": ($event) => $data.prodselect.item.stock = $event,
                                          variant: "outlined"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                                        createVNode("hr"),
                                        !$data.editor ? (openBlock(), createBlock("span", { key: 6 }, " Categoria de Producto: " + toDisplayString($data.prodselect.item.categoria), 1)) : createCommentVNode("", true),
                                        $data.editor ? (openBlock(), createBlock(_component_v_select, {
                                          key: 7,
                                          modelValue: $data.prodselect.item.categoria,
                                          "onUpdate:modelValue": ($event) => $data.prodselect.item.categoria = $event,
                                          label: "Categoría",
                                          items: $data.categorias
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])) : createCommentVNode("", true),
                                        createVNode("hr"),
                                        !$data.editor ? (openBlock(), createBlock("span", { key: 8 }, " Palabras Clave: " + toDisplayString($data.prodselect.item.palabras_clave), 1)) : createCommentVNode("", true),
                                        $data.editor ? (openBlock(), createBlock(_component_v_combobox, {
                                          key: 9,
                                          modelValue: $data.prodselect.item.palabras_clave,
                                          "onUpdate:modelValue": ($event) => $data.prodselect.item.palabras_clave = $event,
                                          chips: "",
                                          clearable: "",
                                          multiple: "",
                                          filled: "",
                                          rounded: "",
                                          "append-icon": ""
                                        }, {
                                          selection: withCtx(({ attrs, item, select, selected }) => [
                                            createVNode(_component_v_chip, mergeProps({ small: "" }, attrs, {
                                              "input-value": selected,
                                              close: "",
                                              onClick: select,
                                              "onClick:close": ($event) => _ctx.remove(item)
                                            }), {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(item), 1)
                                              ]),
                                              _: 2
                                            }, 1040, ["input-value", "onClick", "onClick:close"])
                                          ]),
                                          _: 1
                                        }, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                                        $data.editor ? (openBlock(), createBlock(_component_v_btn, {
                                          key: 10,
                                          onClick: ($event) => $options.actualizarProducto(),
                                          style: { "background-color": "blue", "color": "white" }
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_icon, null, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-content-save")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"])) : createCommentVNode("", true),
                                        createVNode(_component_v_btn, {
                                          style: { "background-color": "red", "color": "white" },
                                          onClick: ($event) => $options.eliminaproducto()
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Elimar Producto")
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"])
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
                      createVNode(_component_v_row, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_row, null, {
                                default: withCtx(() => [
                                  $data.editor ? (openBlock(), createBlock(_component_v_col, {
                                    key: 0,
                                    cols: "12",
                                    sm: "12"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UploadImagenes, {
                                        label: "Agrega imagenes",
                                        onTosend: $options.LoadImages,
                                        onToshow: $options.LoadUpdateImagenes
                                      }, null, 8, ["onTosend", "onToshow"])
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  (openBlock(true), createBlock(Fragment, null, renderList($data.toshowimg, (key, index) => {
                                    return openBlock(), createBlock(_component_v_col, {
                                      cols: "12",
                                      sm: "4"
                                    }, {
                                      default: withCtx(() => [
                                        key ? (openBlock(), createBlock(_component_v_img, {
                                          key: 0,
                                          src: _ctx.$assetUrl(key)
                                        }, {
                                          default: withCtx(() => [
                                            $data.editor ? (openBlock(), createBlock(_component_v_btn, {
                                              key: 0,
                                              class: "elevation-0",
                                              onClick: ($event) => $options.eliminarImagen(index)
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
                                            }, 8, ["onClick"])) : createCommentVNode("", true)
                                          ]),
                                          _: 2
                                        }, 1032, ["src"])) : createCommentVNode("", true)
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 256))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_card_title, null, {
                                    default: withCtx(() => [
                                      !$data.editor ? (openBlock(), createBlock("span", { key: 0 }, " Producto: " + toDisplayString($data.prodselect.item.nombre), 1)) : createCommentVNode("", true),
                                      $data.editor ? (openBlock(), createBlock(_component_v_text_field, {
                                        key: 1,
                                        label: "Nombre del producto",
                                        modelValue: $data.prodselect.item.nombre,
                                        "onUpdate:modelValue": ($event) => $data.prodselect.item.nombre = $event,
                                        variant: "outlined"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_card_text, null, {
                                    default: withCtx(() => [
                                      !$data.editor ? (openBlock(), createBlock("span", { key: 0 }, " Descripción: " + toDisplayString($data.prodselect.item.descripcion), 1)) : createCommentVNode("", true),
                                      $data.editor ? (openBlock(), createBlock(_component_v_textarea, {
                                        key: 1,
                                        label: "Descripción",
                                        modelValue: $data.prodselect.item.descripcion,
                                        "onUpdate:modelValue": ($event) => $data.prodselect.item.descripcion = $event,
                                        variant: "outlined"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                                      createVNode("hr"),
                                      createVNode("br"),
                                      !$data.editor ? (openBlock(), createBlock("span", { key: 2 }, "Precio: " + toDisplayString($data.prodselect.item.precio), 1)) : createCommentVNode("", true),
                                      $data.editor ? (openBlock(), createBlock(_component_v_text_field, {
                                        key: 3,
                                        label: "Precio",
                                        modelValue: $data.prodselect.item.precio,
                                        "onUpdate:modelValue": ($event) => $data.prodselect.item.precio = $event,
                                        variant: "outlined"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                                      createVNode("hr"),
                                      createVNode("br"),
                                      !$data.editor ? (openBlock(), createBlock("span", { key: 4 }, " Cantidad: " + toDisplayString($data.prodselect.item.stock), 1)) : createCommentVNode("", true),
                                      $data.editor ? (openBlock(), createBlock(_component_v_text_field, {
                                        key: 5,
                                        label: "Cantidad",
                                        modelValue: $data.prodselect.item.stock,
                                        "onUpdate:modelValue": ($event) => $data.prodselect.item.stock = $event,
                                        variant: "outlined"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                                      createVNode("hr"),
                                      !$data.editor ? (openBlock(), createBlock("span", { key: 6 }, " Categoria de Producto: " + toDisplayString($data.prodselect.item.categoria), 1)) : createCommentVNode("", true),
                                      $data.editor ? (openBlock(), createBlock(_component_v_select, {
                                        key: 7,
                                        modelValue: $data.prodselect.item.categoria,
                                        "onUpdate:modelValue": ($event) => $data.prodselect.item.categoria = $event,
                                        label: "Categoría",
                                        items: $data.categorias
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])) : createCommentVNode("", true),
                                      createVNode("hr"),
                                      !$data.editor ? (openBlock(), createBlock("span", { key: 8 }, " Palabras Clave: " + toDisplayString($data.prodselect.item.palabras_clave), 1)) : createCommentVNode("", true),
                                      $data.editor ? (openBlock(), createBlock(_component_v_combobox, {
                                        key: 9,
                                        modelValue: $data.prodselect.item.palabras_clave,
                                        "onUpdate:modelValue": ($event) => $data.prodselect.item.palabras_clave = $event,
                                        chips: "",
                                        clearable: "",
                                        multiple: "",
                                        filled: "",
                                        rounded: "",
                                        "append-icon": ""
                                      }, {
                                        selection: withCtx(({ attrs, item, select, selected }) => [
                                          createVNode(_component_v_chip, mergeProps({ small: "" }, attrs, {
                                            "input-value": selected,
                                            close: "",
                                            onClick: select,
                                            "onClick:close": ($event) => _ctx.remove(item)
                                          }), {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(item), 1)
                                            ]),
                                            _: 2
                                          }, 1040, ["input-value", "onClick", "onClick:close"])
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                                      $data.editor ? (openBlock(), createBlock(_component_v_btn, {
                                        key: 10,
                                        onClick: ($event) => $options.actualizarProducto(),
                                        style: { "background-color": "blue", "color": "white" }
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_icon, null, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-content-save")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"])) : createCommentVNode("", true),
                                      createVNode(_component_v_btn, {
                                        style: { "background-color": "red", "color": "white" },
                                        onClick: ($event) => $options.eliminaproducto()
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Elimar Producto")
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"])
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
                createVNode(_component_v_card_title, { style: { "background-color": "blue", "color": "white" } }, {
                  default: withCtx(() => [
                    createVNode("span", { class: "headline" }, "Edita Producto"),
                    createVNode(_component_v_btn, {
                      class: "elevation-0",
                      onClick: ($event) => $data.editor ? $data.editor = false : $data.editor = true
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_icon, null, {
                          default: withCtx(() => [
                            createTextVNode("mdi-pencil")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_v_btn, {
                      class: "elevation-0",
                      onClick: ($event) => $data.editprod = false
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
                          sm: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_row, null, {
                              default: withCtx(() => [
                                $data.editor ? (openBlock(), createBlock(_component_v_col, {
                                  key: 0,
                                  cols: "12",
                                  sm: "12"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_UploadImagenes, {
                                      label: "Agrega imagenes",
                                      onTosend: $options.LoadImages,
                                      onToshow: $options.LoadUpdateImagenes
                                    }, null, 8, ["onTosend", "onToshow"])
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true),
                                (openBlock(true), createBlock(Fragment, null, renderList($data.toshowimg, (key, index) => {
                                  return openBlock(), createBlock(_component_v_col, {
                                    cols: "12",
                                    sm: "4"
                                  }, {
                                    default: withCtx(() => [
                                      key ? (openBlock(), createBlock(_component_v_img, {
                                        key: 0,
                                        src: _ctx.$assetUrl(key)
                                      }, {
                                        default: withCtx(() => [
                                          $data.editor ? (openBlock(), createBlock(_component_v_btn, {
                                            key: 0,
                                            class: "elevation-0",
                                            onClick: ($event) => $options.eliminarImagen(index)
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
                                          }, 8, ["onClick"])) : createCommentVNode("", true)
                                        ]),
                                        _: 2
                                      }, 1032, ["src"])) : createCommentVNode("", true)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 256))
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_card_title, null, {
                                  default: withCtx(() => [
                                    !$data.editor ? (openBlock(), createBlock("span", { key: 0 }, " Producto: " + toDisplayString($data.prodselect.item.nombre), 1)) : createCommentVNode("", true),
                                    $data.editor ? (openBlock(), createBlock(_component_v_text_field, {
                                      key: 1,
                                      label: "Nombre del producto",
                                      modelValue: $data.prodselect.item.nombre,
                                      "onUpdate:modelValue": ($event) => $data.prodselect.item.nombre = $event,
                                      variant: "outlined"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true)
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_card_text, null, {
                                  default: withCtx(() => [
                                    !$data.editor ? (openBlock(), createBlock("span", { key: 0 }, " Descripción: " + toDisplayString($data.prodselect.item.descripcion), 1)) : createCommentVNode("", true),
                                    $data.editor ? (openBlock(), createBlock(_component_v_textarea, {
                                      key: 1,
                                      label: "Descripción",
                                      modelValue: $data.prodselect.item.descripcion,
                                      "onUpdate:modelValue": ($event) => $data.prodselect.item.descripcion = $event,
                                      variant: "outlined"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                                    createVNode("hr"),
                                    createVNode("br"),
                                    !$data.editor ? (openBlock(), createBlock("span", { key: 2 }, "Precio: " + toDisplayString($data.prodselect.item.precio), 1)) : createCommentVNode("", true),
                                    $data.editor ? (openBlock(), createBlock(_component_v_text_field, {
                                      key: 3,
                                      label: "Precio",
                                      modelValue: $data.prodselect.item.precio,
                                      "onUpdate:modelValue": ($event) => $data.prodselect.item.precio = $event,
                                      variant: "outlined"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                                    createVNode("hr"),
                                    createVNode("br"),
                                    !$data.editor ? (openBlock(), createBlock("span", { key: 4 }, " Cantidad: " + toDisplayString($data.prodselect.item.stock), 1)) : createCommentVNode("", true),
                                    $data.editor ? (openBlock(), createBlock(_component_v_text_field, {
                                      key: 5,
                                      label: "Cantidad",
                                      modelValue: $data.prodselect.item.stock,
                                      "onUpdate:modelValue": ($event) => $data.prodselect.item.stock = $event,
                                      variant: "outlined"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                                    createVNode("hr"),
                                    !$data.editor ? (openBlock(), createBlock("span", { key: 6 }, " Categoria de Producto: " + toDisplayString($data.prodselect.item.categoria), 1)) : createCommentVNode("", true),
                                    $data.editor ? (openBlock(), createBlock(_component_v_select, {
                                      key: 7,
                                      modelValue: $data.prodselect.item.categoria,
                                      "onUpdate:modelValue": ($event) => $data.prodselect.item.categoria = $event,
                                      label: "Categoría",
                                      items: $data.categorias
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])) : createCommentVNode("", true),
                                    createVNode("hr"),
                                    !$data.editor ? (openBlock(), createBlock("span", { key: 8 }, " Palabras Clave: " + toDisplayString($data.prodselect.item.palabras_clave), 1)) : createCommentVNode("", true),
                                    $data.editor ? (openBlock(), createBlock(_component_v_combobox, {
                                      key: 9,
                                      modelValue: $data.prodselect.item.palabras_clave,
                                      "onUpdate:modelValue": ($event) => $data.prodselect.item.palabras_clave = $event,
                                      chips: "",
                                      clearable: "",
                                      multiple: "",
                                      filled: "",
                                      rounded: "",
                                      "append-icon": ""
                                    }, {
                                      selection: withCtx(({ attrs, item, select, selected }) => [
                                        createVNode(_component_v_chip, mergeProps({ small: "" }, attrs, {
                                          "input-value": selected,
                                          close: "",
                                          onClick: select,
                                          "onClick:close": ($event) => _ctx.remove(item)
                                        }), {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item), 1)
                                          ]),
                                          _: 2
                                        }, 1040, ["input-value", "onClick", "onClick:close"])
                                      ]),
                                      _: 1
                                    }, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                                    $data.editor ? (openBlock(), createBlock(_component_v_btn, {
                                      key: 10,
                                      onClick: ($event) => $options.actualizarProducto(),
                                      style: { "background-color": "blue", "color": "white" }
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_icon, null, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-content-save")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"])) : createCommentVNode("", true),
                                    createVNode(_component_v_btn, {
                                      style: { "background-color": "red", "color": "white" },
                                      onClick: ($event) => $options.eliminaproducto()
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Elimar Producto")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"])
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
          createVNode(_component_v_card, null, {
            default: withCtx(() => [
              createVNode(_component_v_card_title, { style: { "background-color": "blue", "color": "white" } }, {
                default: withCtx(() => [
                  createVNode("span", { class: "headline" }, "Edita Producto"),
                  createVNode(_component_v_btn, {
                    class: "elevation-0",
                    onClick: ($event) => $data.editor ? $data.editor = false : $data.editor = true
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_icon, null, {
                        default: withCtx(() => [
                          createTextVNode("mdi-pencil")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_component_v_btn, {
                    class: "elevation-0",
                    onClick: ($event) => $data.editprod = false
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
                        sm: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_row, null, {
                            default: withCtx(() => [
                              $data.editor ? (openBlock(), createBlock(_component_v_col, {
                                key: 0,
                                cols: "12",
                                sm: "12"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_UploadImagenes, {
                                    label: "Agrega imagenes",
                                    onTosend: $options.LoadImages,
                                    onToshow: $options.LoadUpdateImagenes
                                  }, null, 8, ["onTosend", "onToshow"])
                                ]),
                                _: 1
                              })) : createCommentVNode("", true),
                              (openBlock(true), createBlock(Fragment, null, renderList($data.toshowimg, (key, index) => {
                                return openBlock(), createBlock(_component_v_col, {
                                  cols: "12",
                                  sm: "4"
                                }, {
                                  default: withCtx(() => [
                                    key ? (openBlock(), createBlock(_component_v_img, {
                                      key: 0,
                                      src: _ctx.$assetUrl(key)
                                    }, {
                                      default: withCtx(() => [
                                        $data.editor ? (openBlock(), createBlock(_component_v_btn, {
                                          key: 0,
                                          class: "elevation-0",
                                          onClick: ($event) => $options.eliminarImagen(index)
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
                                        }, 8, ["onClick"])) : createCommentVNode("", true)
                                      ]),
                                      _: 2
                                    }, 1032, ["src"])) : createCommentVNode("", true)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 256))
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "12",
                        sm: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_card, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_card_title, null, {
                                default: withCtx(() => [
                                  !$data.editor ? (openBlock(), createBlock("span", { key: 0 }, " Producto: " + toDisplayString($data.prodselect.item.nombre), 1)) : createCommentVNode("", true),
                                  $data.editor ? (openBlock(), createBlock(_component_v_text_field, {
                                    key: 1,
                                    label: "Nombre del producto",
                                    modelValue: $data.prodselect.item.nombre,
                                    "onUpdate:modelValue": ($event) => $data.prodselect.item.nombre = $event,
                                    variant: "outlined"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true)
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_card_text, null, {
                                default: withCtx(() => [
                                  !$data.editor ? (openBlock(), createBlock("span", { key: 0 }, " Descripción: " + toDisplayString($data.prodselect.item.descripcion), 1)) : createCommentVNode("", true),
                                  $data.editor ? (openBlock(), createBlock(_component_v_textarea, {
                                    key: 1,
                                    label: "Descripción",
                                    modelValue: $data.prodselect.item.descripcion,
                                    "onUpdate:modelValue": ($event) => $data.prodselect.item.descripcion = $event,
                                    variant: "outlined"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                                  createVNode("hr"),
                                  createVNode("br"),
                                  !$data.editor ? (openBlock(), createBlock("span", { key: 2 }, "Precio: " + toDisplayString($data.prodselect.item.precio), 1)) : createCommentVNode("", true),
                                  $data.editor ? (openBlock(), createBlock(_component_v_text_field, {
                                    key: 3,
                                    label: "Precio",
                                    modelValue: $data.prodselect.item.precio,
                                    "onUpdate:modelValue": ($event) => $data.prodselect.item.precio = $event,
                                    variant: "outlined"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                                  createVNode("hr"),
                                  createVNode("br"),
                                  !$data.editor ? (openBlock(), createBlock("span", { key: 4 }, " Cantidad: " + toDisplayString($data.prodselect.item.stock), 1)) : createCommentVNode("", true),
                                  $data.editor ? (openBlock(), createBlock(_component_v_text_field, {
                                    key: 5,
                                    label: "Cantidad",
                                    modelValue: $data.prodselect.item.stock,
                                    "onUpdate:modelValue": ($event) => $data.prodselect.item.stock = $event,
                                    variant: "outlined"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                                  createVNode("hr"),
                                  !$data.editor ? (openBlock(), createBlock("span", { key: 6 }, " Categoria de Producto: " + toDisplayString($data.prodselect.item.categoria), 1)) : createCommentVNode("", true),
                                  $data.editor ? (openBlock(), createBlock(_component_v_select, {
                                    key: 7,
                                    modelValue: $data.prodselect.item.categoria,
                                    "onUpdate:modelValue": ($event) => $data.prodselect.item.categoria = $event,
                                    label: "Categoría",
                                    items: $data.categorias
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])) : createCommentVNode("", true),
                                  createVNode("hr"),
                                  !$data.editor ? (openBlock(), createBlock("span", { key: 8 }, " Palabras Clave: " + toDisplayString($data.prodselect.item.palabras_clave), 1)) : createCommentVNode("", true),
                                  $data.editor ? (openBlock(), createBlock(_component_v_combobox, {
                                    key: 9,
                                    modelValue: $data.prodselect.item.palabras_clave,
                                    "onUpdate:modelValue": ($event) => $data.prodselect.item.palabras_clave = $event,
                                    chips: "",
                                    clearable: "",
                                    multiple: "",
                                    filled: "",
                                    rounded: "",
                                    "append-icon": ""
                                  }, {
                                    selection: withCtx(({ attrs, item, select, selected }) => [
                                      createVNode(_component_v_chip, mergeProps({ small: "" }, attrs, {
                                        "input-value": selected,
                                        close: "",
                                        onClick: select,
                                        "onClick:close": ($event) => _ctx.remove(item)
                                      }), {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item), 1)
                                        ]),
                                        _: 2
                                      }, 1040, ["input-value", "onClick", "onClick:close"])
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                                  $data.editor ? (openBlock(), createBlock(_component_v_btn, {
                                    key: 10,
                                    onClick: ($event) => $options.actualizarProducto(),
                                    style: { "background-color": "blue", "color": "white" }
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_icon, null, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-content-save")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])) : createCommentVNode("", true),
                                  createVNode(_component_v_btn, {
                                    style: { "background-color": "red", "color": "white" },
                                    onClick: ($event) => $options.eliminaproducto()
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Elimar Producto")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])
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
  _push(ssrRenderComponent(_component_v_dialog, {
    modelValue: $data.addproducto,
    "onUpdate:modelValue": ($event) => $data.addproducto = $event,
    "max-width": "500px",
    class: "mx-auto"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_card, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_card_title, { style: { "background-color": "blue", "color": "white", "text-align": "center" } }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Registra Nuevo Producto `);
                  } else {
                    return [
                      createTextVNode(" Registra Nuevo Producto ")
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
                          _push5(`<!--[-->`);
                          ssrRenderList($data.imagenesCargadas, (file, f) => {
                            _push5(ssrRenderComponent(_component_v_col, {
                              sm: "4",
                              key: f
                            }, {
                              default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(`<img${ssrRenderAttr("src", _ctx.$assetUrl(file || "/images/sinimagen.jpg"))} class="img-fluid"${ssrRenderAttr("title", "file" + f)}${_scopeId5}>`);
                                } else {
                                  return [
                                    createVNode("img", {
                                      src: _ctx.$assetUrl(file || "/images/sinimagen.jpg"),
                                      class: "img-fluid",
                                      title: "file" + f
                                    }, null, 8, ["src", "title"])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent5, _scopeId4));
                          });
                          _push5(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList($data.imagenesCargadas, (file, f) => {
                              return openBlock(), createBlock(_component_v_col, {
                                sm: "4",
                                key: f
                              }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    src: _ctx.$assetUrl(file || "/images/sinimagen.jpg"),
                                    class: "img-fluid",
                                    title: "file" + f
                                  }, null, 8, ["src", "title"])
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_UploadImagenes, {
                      label: "Selecciona las imagenes de tu producto",
                      onTosend: $options.LoadImages,
                      onToshow: $options.cargaImagenes
                    }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_text_field, {
                      modelValue: $data.productoAdd.action,
                      "onUpdate:modelValue": ($event) => $data.productoAdd.action = $event,
                      type: "hidden",
                      value: "nuevo"
                    }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_text_field, {
                      modelValue: $data.productoAdd.nombre,
                      "onUpdate:modelValue": ($event) => $data.productoAdd.nombre = $event,
                      variant: "outlined",
                      label: "Nombre"
                    }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_text_field, {
                      modelValue: $data.productoAdd.descripcion,
                      "onUpdate:modelValue": ($event) => $data.productoAdd.descripcion = $event,
                      variant: "outlined",
                      label: "Descripción"
                    }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_text_field, {
                      modelValue: $data.productoAdd.precio,
                      "onUpdate:modelValue": ($event) => $data.productoAdd.precio = $event,
                      variant: "outlined",
                      label: "Precio"
                    }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_text_field, {
                      modelValue: $data.productoAdd.stock,
                      "onUpdate:modelValue": ($event) => $data.productoAdd.stock = $event,
                      variant: "outlined",
                      label: "Cantidad"
                    }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_select, {
                      modelValue: $data.productoAdd.categoria,
                      "onUpdate:modelValue": ($event) => $data.productoAdd.categoria = $event,
                      label: "Categoría",
                      items: $data.categorias
                    }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_combobox, {
                      modelValue: $data.productoAdd.palabras_clave,
                      "onUpdate:modelValue": ($event) => $data.productoAdd.palabras_clave = $event,
                      chips: "",
                      clearable: "",
                      multiple: "",
                      filled: "",
                      rounded: "",
                      "append-icon": ""
                    }, {
                      selection: withCtx(({ attrs, item, select, selected }, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_chip, mergeProps({ small: "" }, attrs, {
                            "input-value": selected,
                            close: "",
                            onClick: select,
                            "onClick:close": ($event) => _ctx.remove(item)
                          }), {
                            default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`${ssrInterpolate(item)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(item), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_v_chip, mergeProps({ small: "" }, attrs, {
                              "input-value": selected,
                              close: "",
                              onClick: select,
                              "onClick:close": ($event) => _ctx.remove(item)
                            }), {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item), 1)
                              ]),
                              _: 2
                            }, 1040, ["input-value", "onClick", "onClick:close"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_btn, {
                      onClick: ($event) => $options.guardarProducto(),
                      style: { "background-color": "blue", "color": "white" }
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Guardar`);
                        } else {
                          return [
                            createTextVNode("Guardar")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_row, null, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList($data.imagenesCargadas, (file, f) => {
                            return openBlock(), createBlock(_component_v_col, {
                              sm: "4",
                              key: f
                            }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  src: _ctx.$assetUrl(file || "/images/sinimagen.jpg"),
                                  class: "img-fluid",
                                  title: "file" + f
                                }, null, 8, ["src", "title"])
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UploadImagenes, {
                        label: "Selecciona las imagenes de tu producto",
                        onTosend: $options.LoadImages,
                        onToshow: $options.cargaImagenes
                      }, null, 8, ["onTosend", "onToshow"]),
                      createVNode(_component_v_text_field, {
                        modelValue: $data.productoAdd.action,
                        "onUpdate:modelValue": ($event) => $data.productoAdd.action = $event,
                        type: "hidden",
                        value: "nuevo"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_v_text_field, {
                        modelValue: $data.productoAdd.nombre,
                        "onUpdate:modelValue": ($event) => $data.productoAdd.nombre = $event,
                        variant: "outlined",
                        label: "Nombre"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_v_text_field, {
                        modelValue: $data.productoAdd.descripcion,
                        "onUpdate:modelValue": ($event) => $data.productoAdd.descripcion = $event,
                        variant: "outlined",
                        label: "Descripción"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_v_text_field, {
                        modelValue: $data.productoAdd.precio,
                        "onUpdate:modelValue": ($event) => $data.productoAdd.precio = $event,
                        variant: "outlined",
                        label: "Precio"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_v_text_field, {
                        modelValue: $data.productoAdd.stock,
                        "onUpdate:modelValue": ($event) => $data.productoAdd.stock = $event,
                        variant: "outlined",
                        label: "Cantidad"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_v_select, {
                        modelValue: $data.productoAdd.categoria,
                        "onUpdate:modelValue": ($event) => $data.productoAdd.categoria = $event,
                        label: "Categoría",
                        items: $data.categorias
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                      createVNode(_component_v_combobox, {
                        modelValue: $data.productoAdd.palabras_clave,
                        "onUpdate:modelValue": ($event) => $data.productoAdd.palabras_clave = $event,
                        chips: "",
                        clearable: "",
                        multiple: "",
                        filled: "",
                        rounded: "",
                        "append-icon": ""
                      }, {
                        selection: withCtx(({ attrs, item, select, selected }) => [
                          createVNode(_component_v_chip, mergeProps({ small: "" }, attrs, {
                            "input-value": selected,
                            close: "",
                            onClick: select,
                            "onClick:close": ($event) => _ctx.remove(item)
                          }), {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item), 1)
                            ]),
                            _: 2
                          }, 1040, ["input-value", "onClick", "onClick:close"])
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_v_btn, {
                        onClick: ($event) => $options.guardarProducto(),
                        style: { "background-color": "blue", "color": "white" }
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Guardar")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_card_title, { style: { "background-color": "blue", "color": "white", "text-align": "center" } }, {
                  default: withCtx(() => [
                    createTextVNode(" Registra Nuevo Producto ")
                  ]),
                  _: 1
                }),
                createVNode(_component_v_card_text, null, {
                  default: withCtx(() => [
                    createVNode(_component_v_row, null, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList($data.imagenesCargadas, (file, f) => {
                          return openBlock(), createBlock(_component_v_col, {
                            sm: "4",
                            key: f
                          }, {
                            default: withCtx(() => [
                              createVNode("img", {
                                src: _ctx.$assetUrl(file || "/images/sinimagen.jpg"),
                                class: "img-fluid",
                                title: "file" + f
                              }, null, 8, ["src", "title"])
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UploadImagenes, {
                      label: "Selecciona las imagenes de tu producto",
                      onTosend: $options.LoadImages,
                      onToshow: $options.cargaImagenes
                    }, null, 8, ["onTosend", "onToshow"]),
                    createVNode(_component_v_text_field, {
                      modelValue: $data.productoAdd.action,
                      "onUpdate:modelValue": ($event) => $data.productoAdd.action = $event,
                      type: "hidden",
                      value: "nuevo"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_v_text_field, {
                      modelValue: $data.productoAdd.nombre,
                      "onUpdate:modelValue": ($event) => $data.productoAdd.nombre = $event,
                      variant: "outlined",
                      label: "Nombre"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_v_text_field, {
                      modelValue: $data.productoAdd.descripcion,
                      "onUpdate:modelValue": ($event) => $data.productoAdd.descripcion = $event,
                      variant: "outlined",
                      label: "Descripción"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_v_text_field, {
                      modelValue: $data.productoAdd.precio,
                      "onUpdate:modelValue": ($event) => $data.productoAdd.precio = $event,
                      variant: "outlined",
                      label: "Precio"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_v_text_field, {
                      modelValue: $data.productoAdd.stock,
                      "onUpdate:modelValue": ($event) => $data.productoAdd.stock = $event,
                      variant: "outlined",
                      label: "Cantidad"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_v_select, {
                      modelValue: $data.productoAdd.categoria,
                      "onUpdate:modelValue": ($event) => $data.productoAdd.categoria = $event,
                      label: "Categoría",
                      items: $data.categorias
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                    createVNode(_component_v_combobox, {
                      modelValue: $data.productoAdd.palabras_clave,
                      "onUpdate:modelValue": ($event) => $data.productoAdd.palabras_clave = $event,
                      chips: "",
                      clearable: "",
                      multiple: "",
                      filled: "",
                      rounded: "",
                      "append-icon": ""
                    }, {
                      selection: withCtx(({ attrs, item, select, selected }) => [
                        createVNode(_component_v_chip, mergeProps({ small: "" }, attrs, {
                          "input-value": selected,
                          close: "",
                          onClick: select,
                          "onClick:close": ($event) => _ctx.remove(item)
                        }), {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item), 1)
                          ]),
                          _: 2
                        }, 1040, ["input-value", "onClick", "onClick:close"])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_v_btn, {
                      onClick: ($event) => $options.guardarProducto(),
                      style: { "background-color": "blue", "color": "white" }
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Guardar")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
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
              createVNode(_component_v_card_title, { style: { "background-color": "blue", "color": "white", "text-align": "center" } }, {
                default: withCtx(() => [
                  createTextVNode(" Registra Nuevo Producto ")
                ]),
                _: 1
              }),
              createVNode(_component_v_card_text, null, {
                default: withCtx(() => [
                  createVNode(_component_v_row, null, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList($data.imagenesCargadas, (file, f) => {
                        return openBlock(), createBlock(_component_v_col, {
                          sm: "4",
                          key: f
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              src: _ctx.$assetUrl(file || "/images/sinimagen.jpg"),
                              class: "img-fluid",
                              title: "file" + f
                            }, null, 8, ["src", "title"])
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UploadImagenes, {
                    label: "Selecciona las imagenes de tu producto",
                    onTosend: $options.LoadImages,
                    onToshow: $options.cargaImagenes
                  }, null, 8, ["onTosend", "onToshow"]),
                  createVNode(_component_v_text_field, {
                    modelValue: $data.productoAdd.action,
                    "onUpdate:modelValue": ($event) => $data.productoAdd.action = $event,
                    type: "hidden",
                    value: "nuevo"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_v_text_field, {
                    modelValue: $data.productoAdd.nombre,
                    "onUpdate:modelValue": ($event) => $data.productoAdd.nombre = $event,
                    variant: "outlined",
                    label: "Nombre"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_v_text_field, {
                    modelValue: $data.productoAdd.descripcion,
                    "onUpdate:modelValue": ($event) => $data.productoAdd.descripcion = $event,
                    variant: "outlined",
                    label: "Descripción"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_v_text_field, {
                    modelValue: $data.productoAdd.precio,
                    "onUpdate:modelValue": ($event) => $data.productoAdd.precio = $event,
                    variant: "outlined",
                    label: "Precio"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_v_text_field, {
                    modelValue: $data.productoAdd.stock,
                    "onUpdate:modelValue": ($event) => $data.productoAdd.stock = $event,
                    variant: "outlined",
                    label: "Cantidad"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_v_select, {
                    modelValue: $data.productoAdd.categoria,
                    "onUpdate:modelValue": ($event) => $data.productoAdd.categoria = $event,
                    label: "Categoría",
                    items: $data.categorias
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                  createVNode(_component_v_combobox, {
                    modelValue: $data.productoAdd.palabras_clave,
                    "onUpdate:modelValue": ($event) => $data.productoAdd.palabras_clave = $event,
                    chips: "",
                    clearable: "",
                    multiple: "",
                    filled: "",
                    rounded: "",
                    "append-icon": ""
                  }, {
                    selection: withCtx(({ attrs, item, select, selected }) => [
                      createVNode(_component_v_chip, mergeProps({ small: "" }, attrs, {
                        "input-value": selected,
                        close: "",
                        onClick: select,
                        "onClick:close": ($event) => _ctx.remove(item)
                      }), {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item), 1)
                        ]),
                        _: 2
                      }, 1040, ["input-value", "onClick", "onClick:close"])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_v_btn, {
                    onClick: ($event) => $options.guardarProducto(),
                    style: { "background-color": "blue", "color": "white" }
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Guardar")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
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
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/productos/ListaProductos.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ListaProductos = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "MisProductos",
  __ssrInlineRender: true,
  props: { empresas: Array, listaproductos: Array, dtUser: Array, dtEmpresa: Array },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Lista de Productos" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_container, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(ListaProductos, { dtEmpresa: __props.dtEmpresa }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(ListaProductos, { dtEmpresa: __props.dtEmpresa }, null, 8, ["dtEmpresa"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_container, null, {
                default: withCtx(() => [
                  createVNode(ListaProductos, { dtEmpresa: __props.dtEmpresa }, null, 8, ["dtEmpresa"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Productos/MisProductos.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
