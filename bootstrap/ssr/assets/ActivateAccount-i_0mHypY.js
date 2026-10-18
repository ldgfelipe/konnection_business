import { defineComponent, ref, computed, onMounted, mergeProps, unref, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import { useForm, router } from "@inertiajs/vue3";
import { VCard, VCardTitle, VIcon, VCardText, VAlert, VTextField, VFileInput, VDivider, VProgressLinear, VBtn } from "vuetify/components";
import { _ as _sfc_main$1 } from "./TrustBadge-DjhbGdlY.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ActivateAccount",
  __ssrInlineRender: true,
  setup(__props) {
    const token = route.query.token;
    const valid = ref(false);
    const error = ref(null);
    const expired = ref(false);
    const alreadyActive = ref(false);
    const loading = ref(false);
    const userInfo = ref(null);
    const form = useForm({
      token,
      password: "",
      password_confirmation: "",
      profile_photo: null,
      company_name: "",
      company_rfc: "",
      company_phone: "",
      company_address: "",
      company_website: "",
      company_category: "",
      company_description: ""
    });
    const errors = computed(() => form.errors);
    computed(() => {
      return form.company_name || form.company_rfc || form.company_phone || form.company_address;
    });
    onMounted(async () => {
      if (!token) {
        error.value = "Token de activación requerido";
        return;
      }
      try {
        const response = await router.get("/activate-account", { params: { token } });
      } catch (e) {
        error.value = "Error al cargar la página de activación";
      }
    });
    const handleSubmit = () => {
      loading.value = true;
      form.post("/activate-account", {
        onSuccess: () => {
          loading.value = false;
        },
        onError: () => {
          loading.value = false;
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "d-flex justify-center align-center min-vh-100 pa-4",
        style: { "background": "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)" }
      }, _attrs))}>`);
      _push(ssrRenderComponent(unref(VCard), {
        class: "w-100",
        "max-width": "520",
        elevation: "4",
        variant: "tonal"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(VCardTitle), { class: "text-center pb-2" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex justify-center mb-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(VIcon), {
                    size: "x-large",
                    color: "primary"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`mdi-shield-check`);
                      } else {
                        return [
                          createTextVNode("mdi-shield-check")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><h2 class="mb-1"${_scopeId2}>Activar Cuenta B2B</h2><span class="text-caption text-secondary"${_scopeId2}>KonnectionBusiness - Perfil Profesional Verificado</span>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex justify-center mb-3" }, [
                      createVNode(unref(VIcon), {
                        size: "x-large",
                        color: "primary"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("mdi-shield-check")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("h2", { class: "mb-1" }, "Activar Cuenta B2B"),
                    createVNode("span", { class: "text-caption text-secondary" }, "KonnectionBusiness - Perfil Profesional Verificado")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VCardText), { class: "pt-0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b, _c, _d, _e, _f;
                if (_push3) {
                  if (error.value) {
                    _push3(ssrRenderComponent(unref(VAlert), {
                      type: "error",
                      closable: false,
                      class: "mb-4",
                      variant: "tonal"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(VIcon), { start: "" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`mdi-alert-circle-outline`);
                              } else {
                                return [
                                  createTextVNode("mdi-alert-circle-outline")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(` ${ssrInterpolate(error.value)}`);
                        } else {
                          return [
                            createVNode(unref(VIcon), { start: "" }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-alert-circle-outline")
                              ]),
                              _: 1
                            }),
                            createTextVNode(" " + toDisplayString(error.value), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (expired.value) {
                    _push3(ssrRenderComponent(unref(VAlert), {
                      type: "warning",
                      closable: false,
                      class: "mb-4",
                      variant: "tonal"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(VIcon), { start: "" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`mdi-clock-alert-outline`);
                              } else {
                                return [
                                  createTextVNode("mdi-clock-alert-outline")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(` El token de activación ha expirado. Contacta a soporte para recibir uno nuevo. `);
                        } else {
                          return [
                            createVNode(unref(VIcon), { start: "" }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-clock-alert-outline")
                              ]),
                              _: 1
                            }),
                            createTextVNode(" El token de activación ha expirado. Contacta a soporte para recibir uno nuevo. ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (alreadyActive.value) {
                    _push3(ssrRenderComponent(unref(VAlert), {
                      type: "success",
                      closable: false,
                      class: "mb-4",
                      variant: "tonal"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(VIcon), { start: "" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`mdi-check-circle-outline`);
                              } else {
                                return [
                                  createTextVNode("mdi-check-circle-outline")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(` ${ssrInterpolate(_ctx.message)}`);
                        } else {
                          return [
                            createVNode(unref(VIcon), { start: "" }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-check-circle-outline")
                              ]),
                              _: 1
                            }),
                            createTextVNode(" " + toDisplayString(_ctx.message), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (valid.value && !alreadyActive.value) {
                    _push3(`<div${_scopeId2}><div class="mb-4 p-3 rounded-lg" style="${ssrRenderStyle({ "background": "var(--v-theme-primary-lighten-5)" })}"${_scopeId2}><div class="d-flex align-center gap-2 mb-2"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(VIcon), { color: "primary" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`mdi-account-check`);
                        } else {
                          return [
                            createTextVNode("mdi-account-check")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`<span class="font-weight-medium"${_scopeId2}>Bienvenido, ${ssrInterpolate((_a = userInfo.value) == null ? void 0 : _a.name)}</span></div><div class="text-caption text-secondary ms-6"${_scopeId2}><div${_scopeId2}>${ssrInterpolate((_b = userInfo.value) == null ? void 0 : _b.email)}</div>`);
                    if ((_c = userInfo.value) == null ? void 0 : _c.profetit_verified) {
                      _push3(ssrRenderComponent(_sfc_main$1, {
                        badge: {
                          type: userInfo.value.profetit_certificate_type,
                          label: userInfo.value.profetit_certificate_type === "titulo_oficial" ? "Título Oficial" : "Testimonio de Estudios",
                          icon: userInfo.value.profetit_certificate_type === "titulo_oficial" ? "mdi-certificate" : "mdi-file-document-check",
                          color: userInfo.value.profetit_certificate_type === "titulo_oficial" ? "primary" : "info"
                        },
                        size: "small"
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div></div><p class="text-body-2 mb-4"${_scopeId2}>Define tu contraseña y completa tu perfil profesional para acceder a la red B2B.</p>`);
                    _push3(ssrRenderComponent(unref(VTextField), {
                      modelValue: unref(form).password,
                      "onUpdate:modelValue": ($event) => unref(form).password = $event,
                      label: "Nueva Contraseña",
                      type: "password",
                      "error-messages": errors.value.password,
                      rules: [(v) => !!v || "La contraseña es requerida", (v) => v && v.length >= 8 || "Mínimo 8 caracteres"],
                      counter: "64",
                      variant: "outlined",
                      density: "comfortable",
                      class: "mb-3",
                      disabled: loading.value
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(VTextField), {
                      modelValue: unref(form).password_confirmation,
                      "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                      label: "Confirmar Contraseña",
                      type: "password",
                      "error-messages": errors.value.password_confirmation,
                      rules: [(v) => v === unref(form).password || "Las contraseñas no coinciden"],
                      variant: "outlined",
                      density: "comfortable",
                      class: "mb-4",
                      disabled: loading.value
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(VFileInput), {
                      modelValue: unref(form).profile_photo,
                      "onUpdate:modelValue": ($event) => unref(form).profile_photo = $event,
                      "on-change": "handlePhotoChange",
                      label: "Foto de Perfil (opcional)",
                      accept: "image/*",
                      "show-size": "",
                      "max-size": "2048",
                      variant: "outlined",
                      density: "comfortable",
                      class: "mb-4",
                      disabled: loading.value
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(VDivider), { class: "my-4" }, null, _parent3, _scopeId2));
                    _push3(`<h4 class="mb-3"${_scopeId2}>Información de tu Empresa <span class="text-caption text-secondary font-weight-normal"${_scopeId2}>(opcional)</span></h4>`);
                    _push3(ssrRenderComponent(unref(VTextField), {
                      modelValue: unref(form).company_name,
                      "onUpdate:modelValue": ($event) => unref(form).company_name = $event,
                      label: "Nombre de la Empresa",
                      variant: "outlined",
                      density: "comfortable",
                      class: "mb-3",
                      disabled: loading.value
                    }, null, _parent3, _scopeId2));
                    _push3(`<div class="d-flex gap-3 mb-3"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(VTextField), {
                      modelValue: unref(form).company_rfc,
                      "onUpdate:modelValue": ($event) => unref(form).company_rfc = $event,
                      label: "RFC",
                      variant: "outlined",
                      density: "comfortable",
                      class: "flex-grow-1",
                      disabled: loading.value
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(VTextField), {
                      modelValue: unref(form).company_phone,
                      "onUpdate:modelValue": ($event) => unref(form).company_phone = $event,
                      label: "Teléfono",
                      variant: "outlined",
                      density: "comfortable",
                      class: "flex-grow-1",
                      disabled: loading.value
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                    _push3(ssrRenderComponent(unref(VTextField), {
                      modelValue: unref(form).company_address,
                      "onUpdate:modelValue": ($event) => unref(form).company_address = $event,
                      label: "Dirección",
                      variant: "outlined",
                      density: "comfortable",
                      class: "mb-3",
                      disabled: loading.value
                    }, null, _parent3, _scopeId2));
                    _push3(`<div class="d-flex gap-3 mb-3"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(VTextField), {
                      modelValue: unref(form).company_website,
                      "onUpdate:modelValue": ($event) => unref(form).company_website = $event,
                      label: "Sitio Web",
                      type: "url",
                      variant: "outlined",
                      density: "comfortable",
                      class: "flex-grow-1",
                      disabled: loading.value
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(VTextField), {
                      modelValue: unref(form).company_category,
                      "onUpdate:modelValue": ($event) => unref(form).company_category = $event,
                      label: "Categoría/Giro",
                      variant: "outlined",
                      density: "comfortable",
                      class: "flex-grow-1",
                      disabled: loading.value
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                    _push3(ssrRenderComponent(unref(VTextField), {
                      modelValue: unref(form).company_description,
                      "onUpdate:modelValue": ($event) => unref(form).company_description = $event,
                      label: "Descripción de la Empresa",
                      variant: "outlined",
                      density: "comfortable",
                      "multi-line": "",
                      rows: "3",
                      class: "mb-4",
                      disabled: loading.value
                    }, null, _parent3, _scopeId2));
                    if (loading.value) {
                      _push3(ssrRenderComponent(unref(VProgressLinear), {
                        indeterminate: true,
                        color: "primary",
                        class: "mb-4"
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(ssrRenderComponent(unref(VBtn), {
                        loading: loading.value,
                        color: "primary",
                        size: "large",
                        class: "w-100",
                        onClick: handleSubmit
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(unref(VIcon), { start: "" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`mdi-check-circle`);
                                } else {
                                  return [
                                    createTextVNode("mdi-check-circle")
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                            _push4(` Activar mi Cuenta `);
                          } else {
                            return [
                              createVNode(unref(VIcon), { start: "" }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-check-circle")
                                ]),
                                _: 1
                              }),
                              createTextVNode(" Activar mi Cuenta ")
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    }
                    _push3(`<p class="text-caption text-center text-secondary mt-4"${_scopeId2}> Al activar tu cuenta, aceptas los <a href="#" class="text-primary"${_scopeId2}>Términos y Condiciones</a> y la <a href="#" class="text-primary"${_scopeId2}>Política de Privacidad</a>. </p></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    error.value ? (openBlock(), createBlock(unref(VAlert), {
                      key: 0,
                      type: "error",
                      closable: false,
                      class: "mb-4",
                      variant: "tonal"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(VIcon), { start: "" }, {
                          default: withCtx(() => [
                            createTextVNode("mdi-alert-circle-outline")
                          ]),
                          _: 1
                        }),
                        createTextVNode(" " + toDisplayString(error.value), 1)
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    expired.value ? (openBlock(), createBlock(unref(VAlert), {
                      key: 1,
                      type: "warning",
                      closable: false,
                      class: "mb-4",
                      variant: "tonal"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(VIcon), { start: "" }, {
                          default: withCtx(() => [
                            createTextVNode("mdi-clock-alert-outline")
                          ]),
                          _: 1
                        }),
                        createTextVNode(" El token de activación ha expirado. Contacta a soporte para recibir uno nuevo. ")
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    alreadyActive.value ? (openBlock(), createBlock(unref(VAlert), {
                      key: 2,
                      type: "success",
                      closable: false,
                      class: "mb-4",
                      variant: "tonal"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(VIcon), { start: "" }, {
                          default: withCtx(() => [
                            createTextVNode("mdi-check-circle-outline")
                          ]),
                          _: 1
                        }),
                        createTextVNode(" " + toDisplayString(_ctx.message), 1)
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    valid.value && !alreadyActive.value ? (openBlock(), createBlock("div", { key: 3 }, [
                      createVNode("div", {
                        class: "mb-4 p-3 rounded-lg",
                        style: { "background": "var(--v-theme-primary-lighten-5)" }
                      }, [
                        createVNode("div", { class: "d-flex align-center gap-2 mb-2" }, [
                          createVNode(unref(VIcon), { color: "primary" }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-account-check")
                            ]),
                            _: 1
                          }),
                          createVNode("span", { class: "font-weight-medium" }, "Bienvenido, " + toDisplayString((_d = userInfo.value) == null ? void 0 : _d.name), 1)
                        ]),
                        createVNode("div", { class: "text-caption text-secondary ms-6" }, [
                          createVNode("div", null, toDisplayString((_e = userInfo.value) == null ? void 0 : _e.email), 1),
                          ((_f = userInfo.value) == null ? void 0 : _f.profetit_verified) ? (openBlock(), createBlock(_sfc_main$1, {
                            key: 0,
                            badge: {
                              type: userInfo.value.profetit_certificate_type,
                              label: userInfo.value.profetit_certificate_type === "titulo_oficial" ? "Título Oficial" : "Testimonio de Estudios",
                              icon: userInfo.value.profetit_certificate_type === "titulo_oficial" ? "mdi-certificate" : "mdi-file-document-check",
                              color: userInfo.value.profetit_certificate_type === "titulo_oficial" ? "primary" : "info"
                            },
                            size: "small"
                          }, null, 8, ["badge"])) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("p", { class: "text-body-2 mb-4" }, "Define tu contraseña y completa tu perfil profesional para acceder a la red B2B."),
                      createVNode(unref(VTextField), {
                        modelValue: unref(form).password,
                        "onUpdate:modelValue": ($event) => unref(form).password = $event,
                        label: "Nueva Contraseña",
                        type: "password",
                        "error-messages": errors.value.password,
                        rules: [(v) => !!v || "La contraseña es requerida", (v) => v && v.length >= 8 || "Mínimo 8 caracteres"],
                        counter: "64",
                        variant: "outlined",
                        density: "comfortable",
                        class: "mb-3",
                        disabled: loading.value
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages", "rules", "disabled"]),
                      createVNode(unref(VTextField), {
                        modelValue: unref(form).password_confirmation,
                        "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                        label: "Confirmar Contraseña",
                        type: "password",
                        "error-messages": errors.value.password_confirmation,
                        rules: [(v) => v === unref(form).password || "Las contraseñas no coinciden"],
                        variant: "outlined",
                        density: "comfortable",
                        class: "mb-4",
                        disabled: loading.value
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages", "rules", "disabled"]),
                      createVNode(unref(VFileInput), {
                        modelValue: unref(form).profile_photo,
                        "onUpdate:modelValue": ($event) => unref(form).profile_photo = $event,
                        "on-change": "handlePhotoChange",
                        label: "Foto de Perfil (opcional)",
                        accept: "image/*",
                        "show-size": "",
                        "max-size": "2048",
                        variant: "outlined",
                        density: "comfortable",
                        class: "mb-4",
                        disabled: loading.value
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                      createVNode(unref(VDivider), { class: "my-4" }),
                      createVNode("h4", { class: "mb-3" }, [
                        createTextVNode("Información de tu Empresa "),
                        createVNode("span", { class: "text-caption text-secondary font-weight-normal" }, "(opcional)")
                      ]),
                      createVNode(unref(VTextField), {
                        modelValue: unref(form).company_name,
                        "onUpdate:modelValue": ($event) => unref(form).company_name = $event,
                        label: "Nombre de la Empresa",
                        variant: "outlined",
                        density: "comfortable",
                        class: "mb-3",
                        disabled: loading.value
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                      createVNode("div", { class: "d-flex gap-3 mb-3" }, [
                        createVNode(unref(VTextField), {
                          modelValue: unref(form).company_rfc,
                          "onUpdate:modelValue": ($event) => unref(form).company_rfc = $event,
                          label: "RFC",
                          variant: "outlined",
                          density: "comfortable",
                          class: "flex-grow-1",
                          disabled: loading.value
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                        createVNode(unref(VTextField), {
                          modelValue: unref(form).company_phone,
                          "onUpdate:modelValue": ($event) => unref(form).company_phone = $event,
                          label: "Teléfono",
                          variant: "outlined",
                          density: "comfortable",
                          class: "flex-grow-1",
                          disabled: loading.value
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                      ]),
                      createVNode(unref(VTextField), {
                        modelValue: unref(form).company_address,
                        "onUpdate:modelValue": ($event) => unref(form).company_address = $event,
                        label: "Dirección",
                        variant: "outlined",
                        density: "comfortable",
                        class: "mb-3",
                        disabled: loading.value
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                      createVNode("div", { class: "d-flex gap-3 mb-3" }, [
                        createVNode(unref(VTextField), {
                          modelValue: unref(form).company_website,
                          "onUpdate:modelValue": ($event) => unref(form).company_website = $event,
                          label: "Sitio Web",
                          type: "url",
                          variant: "outlined",
                          density: "comfortable",
                          class: "flex-grow-1",
                          disabled: loading.value
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                        createVNode(unref(VTextField), {
                          modelValue: unref(form).company_category,
                          "onUpdate:modelValue": ($event) => unref(form).company_category = $event,
                          label: "Categoría/Giro",
                          variant: "outlined",
                          density: "comfortable",
                          class: "flex-grow-1",
                          disabled: loading.value
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                      ]),
                      createVNode(unref(VTextField), {
                        modelValue: unref(form).company_description,
                        "onUpdate:modelValue": ($event) => unref(form).company_description = $event,
                        label: "Descripción de la Empresa",
                        variant: "outlined",
                        density: "comfortable",
                        "multi-line": "",
                        rows: "3",
                        class: "mb-4",
                        disabled: loading.value
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                      loading.value ? (openBlock(), createBlock(unref(VProgressLinear), {
                        key: 0,
                        indeterminate: true,
                        color: "primary",
                        class: "mb-4"
                      })) : (openBlock(), createBlock(unref(VBtn), {
                        key: 1,
                        loading: loading.value,
                        color: "primary",
                        size: "large",
                        class: "w-100",
                        onClick: handleSubmit
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(VIcon), { start: "" }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-check-circle")
                            ]),
                            _: 1
                          }),
                          createTextVNode(" Activar mi Cuenta ")
                        ]),
                        _: 1
                      }, 8, ["loading"])),
                      createVNode("p", { class: "text-caption text-center text-secondary mt-4" }, [
                        createTextVNode(" Al activar tu cuenta, aceptas los "),
                        createVNode("a", {
                          href: "#",
                          class: "text-primary"
                        }, "Términos y Condiciones"),
                        createTextVNode(" y la "),
                        createVNode("a", {
                          href: "#",
                          class: "text-primary"
                        }, "Política de Privacidad"),
                        createTextVNode(". ")
                      ])
                    ])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(VCardTitle), { class: "text-center pb-2" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex justify-center mb-3" }, [
                    createVNode(unref(VIcon), {
                      size: "x-large",
                      color: "primary"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("mdi-shield-check")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("h2", { class: "mb-1" }, "Activar Cuenta B2B"),
                  createVNode("span", { class: "text-caption text-secondary" }, "KonnectionBusiness - Perfil Profesional Verificado")
                ]),
                _: 1
              }),
              createVNode(unref(VCardText), { class: "pt-0" }, {
                default: withCtx(() => {
                  var _a, _b, _c;
                  return [
                    error.value ? (openBlock(), createBlock(unref(VAlert), {
                      key: 0,
                      type: "error",
                      closable: false,
                      class: "mb-4",
                      variant: "tonal"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(VIcon), { start: "" }, {
                          default: withCtx(() => [
                            createTextVNode("mdi-alert-circle-outline")
                          ]),
                          _: 1
                        }),
                        createTextVNode(" " + toDisplayString(error.value), 1)
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    expired.value ? (openBlock(), createBlock(unref(VAlert), {
                      key: 1,
                      type: "warning",
                      closable: false,
                      class: "mb-4",
                      variant: "tonal"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(VIcon), { start: "" }, {
                          default: withCtx(() => [
                            createTextVNode("mdi-clock-alert-outline")
                          ]),
                          _: 1
                        }),
                        createTextVNode(" El token de activación ha expirado. Contacta a soporte para recibir uno nuevo. ")
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    alreadyActive.value ? (openBlock(), createBlock(unref(VAlert), {
                      key: 2,
                      type: "success",
                      closable: false,
                      class: "mb-4",
                      variant: "tonal"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(VIcon), { start: "" }, {
                          default: withCtx(() => [
                            createTextVNode("mdi-check-circle-outline")
                          ]),
                          _: 1
                        }),
                        createTextVNode(" " + toDisplayString(_ctx.message), 1)
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    valid.value && !alreadyActive.value ? (openBlock(), createBlock("div", { key: 3 }, [
                      createVNode("div", {
                        class: "mb-4 p-3 rounded-lg",
                        style: { "background": "var(--v-theme-primary-lighten-5)" }
                      }, [
                        createVNode("div", { class: "d-flex align-center gap-2 mb-2" }, [
                          createVNode(unref(VIcon), { color: "primary" }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-account-check")
                            ]),
                            _: 1
                          }),
                          createVNode("span", { class: "font-weight-medium" }, "Bienvenido, " + toDisplayString((_a = userInfo.value) == null ? void 0 : _a.name), 1)
                        ]),
                        createVNode("div", { class: "text-caption text-secondary ms-6" }, [
                          createVNode("div", null, toDisplayString((_b = userInfo.value) == null ? void 0 : _b.email), 1),
                          ((_c = userInfo.value) == null ? void 0 : _c.profetit_verified) ? (openBlock(), createBlock(_sfc_main$1, {
                            key: 0,
                            badge: {
                              type: userInfo.value.profetit_certificate_type,
                              label: userInfo.value.profetit_certificate_type === "titulo_oficial" ? "Título Oficial" : "Testimonio de Estudios",
                              icon: userInfo.value.profetit_certificate_type === "titulo_oficial" ? "mdi-certificate" : "mdi-file-document-check",
                              color: userInfo.value.profetit_certificate_type === "titulo_oficial" ? "primary" : "info"
                            },
                            size: "small"
                          }, null, 8, ["badge"])) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("p", { class: "text-body-2 mb-4" }, "Define tu contraseña y completa tu perfil profesional para acceder a la red B2B."),
                      createVNode(unref(VTextField), {
                        modelValue: unref(form).password,
                        "onUpdate:modelValue": ($event) => unref(form).password = $event,
                        label: "Nueva Contraseña",
                        type: "password",
                        "error-messages": errors.value.password,
                        rules: [(v) => !!v || "La contraseña es requerida", (v) => v && v.length >= 8 || "Mínimo 8 caracteres"],
                        counter: "64",
                        variant: "outlined",
                        density: "comfortable",
                        class: "mb-3",
                        disabled: loading.value
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages", "rules", "disabled"]),
                      createVNode(unref(VTextField), {
                        modelValue: unref(form).password_confirmation,
                        "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                        label: "Confirmar Contraseña",
                        type: "password",
                        "error-messages": errors.value.password_confirmation,
                        rules: [(v) => v === unref(form).password || "Las contraseñas no coinciden"],
                        variant: "outlined",
                        density: "comfortable",
                        class: "mb-4",
                        disabled: loading.value
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages", "rules", "disabled"]),
                      createVNode(unref(VFileInput), {
                        modelValue: unref(form).profile_photo,
                        "onUpdate:modelValue": ($event) => unref(form).profile_photo = $event,
                        "on-change": "handlePhotoChange",
                        label: "Foto de Perfil (opcional)",
                        accept: "image/*",
                        "show-size": "",
                        "max-size": "2048",
                        variant: "outlined",
                        density: "comfortable",
                        class: "mb-4",
                        disabled: loading.value
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                      createVNode(unref(VDivider), { class: "my-4" }),
                      createVNode("h4", { class: "mb-3" }, [
                        createTextVNode("Información de tu Empresa "),
                        createVNode("span", { class: "text-caption text-secondary font-weight-normal" }, "(opcional)")
                      ]),
                      createVNode(unref(VTextField), {
                        modelValue: unref(form).company_name,
                        "onUpdate:modelValue": ($event) => unref(form).company_name = $event,
                        label: "Nombre de la Empresa",
                        variant: "outlined",
                        density: "comfortable",
                        class: "mb-3",
                        disabled: loading.value
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                      createVNode("div", { class: "d-flex gap-3 mb-3" }, [
                        createVNode(unref(VTextField), {
                          modelValue: unref(form).company_rfc,
                          "onUpdate:modelValue": ($event) => unref(form).company_rfc = $event,
                          label: "RFC",
                          variant: "outlined",
                          density: "comfortable",
                          class: "flex-grow-1",
                          disabled: loading.value
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                        createVNode(unref(VTextField), {
                          modelValue: unref(form).company_phone,
                          "onUpdate:modelValue": ($event) => unref(form).company_phone = $event,
                          label: "Teléfono",
                          variant: "outlined",
                          density: "comfortable",
                          class: "flex-grow-1",
                          disabled: loading.value
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                      ]),
                      createVNode(unref(VTextField), {
                        modelValue: unref(form).company_address,
                        "onUpdate:modelValue": ($event) => unref(form).company_address = $event,
                        label: "Dirección",
                        variant: "outlined",
                        density: "comfortable",
                        class: "mb-3",
                        disabled: loading.value
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                      createVNode("div", { class: "d-flex gap-3 mb-3" }, [
                        createVNode(unref(VTextField), {
                          modelValue: unref(form).company_website,
                          "onUpdate:modelValue": ($event) => unref(form).company_website = $event,
                          label: "Sitio Web",
                          type: "url",
                          variant: "outlined",
                          density: "comfortable",
                          class: "flex-grow-1",
                          disabled: loading.value
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                        createVNode(unref(VTextField), {
                          modelValue: unref(form).company_category,
                          "onUpdate:modelValue": ($event) => unref(form).company_category = $event,
                          label: "Categoría/Giro",
                          variant: "outlined",
                          density: "comfortable",
                          class: "flex-grow-1",
                          disabled: loading.value
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                      ]),
                      createVNode(unref(VTextField), {
                        modelValue: unref(form).company_description,
                        "onUpdate:modelValue": ($event) => unref(form).company_description = $event,
                        label: "Descripción de la Empresa",
                        variant: "outlined",
                        density: "comfortable",
                        "multi-line": "",
                        rows: "3",
                        class: "mb-4",
                        disabled: loading.value
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                      loading.value ? (openBlock(), createBlock(unref(VProgressLinear), {
                        key: 0,
                        indeterminate: true,
                        color: "primary",
                        class: "mb-4"
                      })) : (openBlock(), createBlock(unref(VBtn), {
                        key: 1,
                        loading: loading.value,
                        color: "primary",
                        size: "large",
                        class: "w-100",
                        onClick: handleSubmit
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(VIcon), { start: "" }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-check-circle")
                            ]),
                            _: 1
                          }),
                          createTextVNode(" Activar mi Cuenta ")
                        ]),
                        _: 1
                      }, 8, ["loading"])),
                      createVNode("p", { class: "text-caption text-center text-secondary mt-4" }, [
                        createTextVNode(" Al activar tu cuenta, aceptas los "),
                        createVNode("a", {
                          href: "#",
                          class: "text-primary"
                        }, "Términos y Condiciones"),
                        createTextVNode(" y la "),
                        createVNode("a", {
                          href: "#",
                          class: "text-primary"
                        }, "Política de Privacidad"),
                        createTextVNode(". ")
                      ])
                    ])) : createCommentVNode("", true)
                  ];
                }),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ActivateAccount.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
