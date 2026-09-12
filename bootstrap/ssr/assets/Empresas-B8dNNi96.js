import { resolveComponent, mergeProps, withCtx, createTextVNode, openBlock, createBlock, createCommentVNode, createVNode, toDisplayString, useSSRContext, unref } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { c as categorias } from "./categorias-BLbQNXcu.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { _ as _sfc_main$2 } from "./AuthenticatedLayout-CjO21aP_.js";
import { Head } from "@inertiajs/vue3";
import "./ApplicationLogo-DB5hZ_I6.js";
const _sfc_main$1 = {
  data() {
    return {
      empr: {
        nombre: "",
        rfc: "",
        descripcion: "",
        telefono: "",
        direccion: "",
        sitio_web: "",
        logo: "",
        categorias: ""
      },
      categorias,
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        emailMatch: () => `The email and password you entered don't match`
      }
    };
  },
  props: {
    empresa: {
      type: Object
    }
  },
  mounted() {
    if (this.empresa) {
      this.empr.nombre = this.empresa.nombre;
      this.empr.rfc = this.empresa.rfc;
      this.empr.descripcion = this.empresa.descripcion;
      this.empr.telefono = this.empresa.telefono;
      this.empr.direccion = this.empresa.direccion;
      this.empr.sitio_web = this.empresa.sitio_web;
      this.empr.logo = this.empresa.logo;
      this.empr.categorias = this.empresa.categorias;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_card = resolveComponent("v-card");
  const _component_v_card_title = resolveComponent("v-card-title");
  const _component_v_card_text = resolveComponent("v-card-text");
  const _component_v_text_field = resolveComponent("v-text-field");
  const _component_v_btn = resolveComponent("v-btn");
  const _component_v_file_input = resolveComponent("v-file-input");
  const _component_v_select = resolveComponent("v-select");
  _push(ssrRenderComponent(_component_v_card, mergeProps({
    "max-width": "500",
    class: "ma-auto"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_card_title, { class: "text-center" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Datos de Empresa `);
            } else {
              return [
                createTextVNode(" Datos de Empresa ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_card_text, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              if ($data.empr.logo) {
                _push3(`<img${ssrRenderAttr("src", _ctx.$assetUrl($data.empr.logo))}${_scopeId2}>`);
              } else {
                _push3(`<!---->`);
              }
              _push3(`<form method="POST"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_v_text_field, {
                type: "hidden",
                name: "logo_del",
                value: $data.empr.logo
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_text_field, {
                type: "hidden",
                name: "_token",
                value: this.$page.props.csrf_token
              }, null, _parent3, _scopeId2));
              if ($data.empr.logo) {
                _push3(ssrRenderComponent(_component_v_btn, {
                  type: "submit",
                  style: { "color": "#fff", "background-color": "red" }
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`Eliminar Imagen`);
                    } else {
                      return [
                        createTextVNode("Eliminar Imagen")
                      ];
                    }
                  }),
                  _: 1
                }, _parent3, _scopeId2));
              } else {
                _push3(`<!---->`);
              }
              _push3(`</form><form method="POST" id="guardaEmpresa" enctype="multipart/form-data"${_scopeId2}>`);
              if (!$data.empr.logo) {
                _push3(ssrRenderComponent(_component_v_file_input, {
                  outlined: "",
                  name: "logo",
                  label: "Sube tu logo"
                }, null, _parent3, _scopeId2));
              } else {
                _push3(`<!---->`);
              }
              _push3(ssrRenderComponent(_component_v_text_field, {
                outlined: "",
                required: "",
                name: "nombre",
                label: "Nombre de Empresa",
                modelValue: $data.empr.nombre,
                "onUpdate:modelValue": ($event) => $data.empr.nombre = $event
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_text_field, {
                outlined: "",
                rules: [$data.rules.required, $data.rules.min],
                hint: "Maximo de caracteres 13",
                required: "",
                name: "rfc",
                counter: "",
                label: "RFC",
                modelValue: $data.empr.rfc,
                "onUpdate:modelValue": ($event) => $data.empr.rfc = $event
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_text_field, {
                outlined: "",
                required: "",
                name: "descripcion",
                label: "Descripción de la Empresa",
                modelValue: $data.empr.descripcion,
                "onUpdate:modelValue": ($event) => $data.empr.descripcion = $event
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_text_field, {
                outlined: "",
                required: "",
                name: "telefono",
                label: "Teléfono",
                modelValue: $data.empr.telefono,
                "onUpdate:modelValue": ($event) => $data.empr.telefono = $event
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_text_field, {
                outlined: "",
                required: "",
                name: "direccion",
                label: "Dirección",
                modelValue: $data.empr.direccion,
                "onUpdate:modelValue": ($event) => $data.empr.direccion = $event
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_text_field, {
                outlined: "",
                name: "sitio_web",
                label: "Sitio Web",
                modelValue: $data.empr.sitio_web,
                "onUpdate:modelValue": ($event) => $data.empr.sitio_web = $event
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_text_field, {
                type: "hidden",
                name: "_token",
                value: this.$page.props.csrf_token
              }, null, _parent3, _scopeId2));
              _push3(` Categoria de la empresa: <b${_scopeId2}>${ssrInterpolate($data.empr.categorias)}</b>`);
              _push3(ssrRenderComponent(_component_v_select, {
                items: $data.categorias,
                name: "categorias",
                modelValue: $data.empr.categorias,
                "onUpdate:modelValue": ($event) => $data.empr.categorias = $event
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_btn, {
                type: "submit",
                style: { "background-color": "#000066", "color": "white" }
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Guardar`);
                  } else {
                    return [
                      createTextVNode("Guardar")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</form>`);
            } else {
              return [
                $data.empr.logo ? (openBlock(), createBlock("img", {
                  key: 0,
                  src: _ctx.$assetUrl($data.empr.logo)
                }, null, 8, ["src"])) : createCommentVNode("", true),
                createVNode("form", { method: "POST" }, [
                  createVNode(_component_v_text_field, {
                    type: "hidden",
                    name: "logo_del",
                    value: $data.empr.logo
                  }, null, 8, ["value"]),
                  createVNode(_component_v_text_field, {
                    type: "hidden",
                    name: "_token",
                    value: this.$page.props.csrf_token
                  }, null, 8, ["value"]),
                  $data.empr.logo ? (openBlock(), createBlock(_component_v_btn, {
                    key: 0,
                    type: "submit",
                    style: { "color": "#fff", "background-color": "red" }
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Eliminar Imagen")
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                createVNode("form", {
                  method: "POST",
                  id: "guardaEmpresa",
                  enctype: "multipart/form-data"
                }, [
                  !$data.empr.logo ? (openBlock(), createBlock(_component_v_file_input, {
                    key: 0,
                    outlined: "",
                    name: "logo",
                    label: "Sube tu logo"
                  })) : createCommentVNode("", true),
                  createVNode(_component_v_text_field, {
                    outlined: "",
                    required: "",
                    name: "nombre",
                    label: "Nombre de Empresa",
                    modelValue: $data.empr.nombre,
                    "onUpdate:modelValue": ($event) => $data.empr.nombre = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_v_text_field, {
                    outlined: "",
                    rules: [$data.rules.required, $data.rules.min],
                    hint: "Maximo de caracteres 13",
                    required: "",
                    name: "rfc",
                    counter: "",
                    label: "RFC",
                    modelValue: $data.empr.rfc,
                    "onUpdate:modelValue": ($event) => $data.empr.rfc = $event
                  }, null, 8, ["rules", "modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_v_text_field, {
                    outlined: "",
                    required: "",
                    name: "descripcion",
                    label: "Descripción de la Empresa",
                    modelValue: $data.empr.descripcion,
                    "onUpdate:modelValue": ($event) => $data.empr.descripcion = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_v_text_field, {
                    outlined: "",
                    required: "",
                    name: "telefono",
                    label: "Teléfono",
                    modelValue: $data.empr.telefono,
                    "onUpdate:modelValue": ($event) => $data.empr.telefono = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_v_text_field, {
                    outlined: "",
                    required: "",
                    name: "direccion",
                    label: "Dirección",
                    modelValue: $data.empr.direccion,
                    "onUpdate:modelValue": ($event) => $data.empr.direccion = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_v_text_field, {
                    outlined: "",
                    name: "sitio_web",
                    label: "Sitio Web",
                    modelValue: $data.empr.sitio_web,
                    "onUpdate:modelValue": ($event) => $data.empr.sitio_web = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_v_text_field, {
                    type: "hidden",
                    name: "_token",
                    value: this.$page.props.csrf_token
                  }, null, 8, ["value"]),
                  createTextVNode(" Categoria de la empresa: "),
                  createVNode("b", null, toDisplayString($data.empr.categorias), 1),
                  createVNode(_component_v_select, {
                    items: $data.categorias,
                    name: "categorias",
                    modelValue: $data.empr.categorias,
                    "onUpdate:modelValue": ($event) => $data.empr.categorias = $event
                  }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_v_btn, {
                    type: "submit",
                    style: { "background-color": "#000066", "color": "white" }
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Guardar")
                    ]),
                    _: 1
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_card_title, { class: "text-center" }, {
            default: withCtx(() => [
              createTextVNode(" Datos de Empresa ")
            ]),
            _: 1
          }),
          createVNode(_component_v_card_text, null, {
            default: withCtx(() => [
              $data.empr.logo ? (openBlock(), createBlock("img", {
                key: 0,
                src: _ctx.$assetUrl($data.empr.logo)
              }, null, 8, ["src"])) : createCommentVNode("", true),
              createVNode("form", { method: "POST" }, [
                createVNode(_component_v_text_field, {
                  type: "hidden",
                  name: "logo_del",
                  value: $data.empr.logo
                }, null, 8, ["value"]),
                createVNode(_component_v_text_field, {
                  type: "hidden",
                  name: "_token",
                  value: this.$page.props.csrf_token
                }, null, 8, ["value"]),
                $data.empr.logo ? (openBlock(), createBlock(_component_v_btn, {
                  key: 0,
                  type: "submit",
                  style: { "color": "#fff", "background-color": "red" }
                }, {
                  default: withCtx(() => [
                    createTextVNode("Eliminar Imagen")
                  ]),
                  _: 1
                })) : createCommentVNode("", true)
              ]),
              createVNode("form", {
                method: "POST",
                id: "guardaEmpresa",
                enctype: "multipart/form-data"
              }, [
                !$data.empr.logo ? (openBlock(), createBlock(_component_v_file_input, {
                  key: 0,
                  outlined: "",
                  name: "logo",
                  label: "Sube tu logo"
                })) : createCommentVNode("", true),
                createVNode(_component_v_text_field, {
                  outlined: "",
                  required: "",
                  name: "nombre",
                  label: "Nombre de Empresa",
                  modelValue: $data.empr.nombre,
                  "onUpdate:modelValue": ($event) => $data.empr.nombre = $event
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_component_v_text_field, {
                  outlined: "",
                  rules: [$data.rules.required, $data.rules.min],
                  hint: "Maximo de caracteres 13",
                  required: "",
                  name: "rfc",
                  counter: "",
                  label: "RFC",
                  modelValue: $data.empr.rfc,
                  "onUpdate:modelValue": ($event) => $data.empr.rfc = $event
                }, null, 8, ["rules", "modelValue", "onUpdate:modelValue"]),
                createVNode(_component_v_text_field, {
                  outlined: "",
                  required: "",
                  name: "descripcion",
                  label: "Descripción de la Empresa",
                  modelValue: $data.empr.descripcion,
                  "onUpdate:modelValue": ($event) => $data.empr.descripcion = $event
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_component_v_text_field, {
                  outlined: "",
                  required: "",
                  name: "telefono",
                  label: "Teléfono",
                  modelValue: $data.empr.telefono,
                  "onUpdate:modelValue": ($event) => $data.empr.telefono = $event
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_component_v_text_field, {
                  outlined: "",
                  required: "",
                  name: "direccion",
                  label: "Dirección",
                  modelValue: $data.empr.direccion,
                  "onUpdate:modelValue": ($event) => $data.empr.direccion = $event
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_component_v_text_field, {
                  outlined: "",
                  name: "sitio_web",
                  label: "Sitio Web",
                  modelValue: $data.empr.sitio_web,
                  "onUpdate:modelValue": ($event) => $data.empr.sitio_web = $event
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_component_v_text_field, {
                  type: "hidden",
                  name: "_token",
                  value: this.$page.props.csrf_token
                }, null, 8, ["value"]),
                createTextVNode(" Categoria de la empresa: "),
                createVNode("b", null, toDisplayString($data.empr.categorias), 1),
                createVNode(_component_v_select, {
                  items: $data.categorias,
                  name: "categorias",
                  modelValue: $data.empr.categorias,
                  "onUpdate:modelValue": ($event) => $data.empr.categorias = $event
                }, null, 8, ["items", "modelValue", "onUpdate:modelValue"]),
                createVNode(_component_v_btn, {
                  type: "submit",
                  style: { "background-color": "#000066", "color": "white" }
                }, {
                  default: withCtx(() => [
                    createTextVNode("Guardar")
                  ]),
                  _: 1
                })
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/empresas/EditEmpresas.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const EditEmpresa = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "Empresas",
  __ssrInlineRender: true,
  props: {
    empresa: {
      type: Array
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Edita Empresa" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(EditEmpresa, { empresa: __props.empresa }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(EditEmpresa, { empresa: __props.empresa }, null, 8, ["empresa"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Empresas/Empresas.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
