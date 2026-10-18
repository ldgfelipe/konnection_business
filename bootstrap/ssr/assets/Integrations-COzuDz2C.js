import { defineComponent, ref, mergeProps, withCtx, unref, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { useForm, router } from "@inertiajs/vue3";
import { VContainer, VCard, VCardTitle, VChip, VCardText, VTextField, VBtn, VIcon, VDivider, VAlert, VDialog, VCardActions } from "vuetify/components";
import { _ as _sfc_main$1 } from "./AdminLayout-BdI9c5Vo.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Integrations",
  __ssrInlineRender: true,
  props: {
    webhookSecret: {},
    apiKey: {},
    webhookUrl: {},
    events: {}
  },
  setup(__props) {
    const props = __props;
    const saving = ref(false);
    const testing = ref(false);
    const showApiKey = ref(false);
    const generatedApiKey = ref("");
    const showGeneratedKeyDialog = ref(false);
    const form = useForm({
      webhook_secret: "",
      api_key: ""
    });
    const testResult = ref(null);
    const handleSave = () => {
      saving.value = true;
      form.put(route("admin.settings.integrations.update"), {
        onSuccess: () => {
          saving.value = false;
          if (form.webhook_secret) props.webhookSecret = "••••••••";
          if (form.api_key) props.apiKey = "••••••••";
        },
        onError: () => {
          saving.value = false;
        }
      });
    };
    const handleGenerateApiKey = () => {
      saving.value = true;
      router.post(route("admin.settings.integrations.generate-api-key"), {
        onSuccess: (page) => {
          saving.value = false;
          generatedApiKey.value = page.props.api_key;
          props.apiKey = "••••••••";
          showGeneratedKeyDialog.value = true;
        },
        onError: () => {
          saving.value = false;
        }
      });
    };
    const handleTestWebhook = () => {
      testing.value = true;
      router.post(route("admin.settings.integrations.test-webhook"), {
        onSuccess: (page) => {
          testing.value = false;
          testResult.value = page.props;
        },
        onError: () => {
          testing.value = false;
        }
      });
    };
    const copyToClipboard = (text) => {
      navigator.clipboard.writeText(text);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        title: "Configuración de Integraciones",
        subtitle: "Gestiona la conexión con Profetit.org",
        breadcrumbs: [
          { title: "Configuración Integraciones", route: _ctx.route("admin.settings.integrations") }
        ]
      }, _attrs), {
        actions: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(VBtn), {
              color: "primary",
              onClick: handleGenerateApiKey,
              disabled: saving.value
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(VIcon), { start: "" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`mdi-key`);
                      } else {
                        return [
                          createTextVNode("mdi-key")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(` Generar API Key `);
                } else {
                  return [
                    createVNode(unref(VIcon), { start: "" }, {
                      default: withCtx(() => [
                        createTextVNode("mdi-key")
                      ]),
                      _: 1
                    }),
                    createTextVNode(" Generar API Key ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(VBtn), {
                color: "primary",
                onClick: handleGenerateApiKey,
                disabled: saving.value
              }, {
                default: withCtx(() => [
                  createVNode(unref(VIcon), { start: "" }, {
                    default: withCtx(() => [
                      createTextVNode("mdi-key")
                    ]),
                    _: 1
                  }),
                  createTextVNode(" Generar API Key ")
                ]),
                _: 1
              }, 8, ["disabled"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(VContainer), {
              fluid: "",
              class: "pa-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(VCard), {
                    class: "mb-6",
                    variant: "tonal"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(VCardTitle), { class: "d-flex align-center justify-space-between" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<span${_scopeId4}>Webhook de Profetit.org</span>`);
                              _push5(ssrRenderComponent(unref(VChip), {
                                size: "x-small",
                                color: "success",
                                variant: "tonal"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Activo`);
                                  } else {
                                    return [
                                      createTextVNode("Activo")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("span", null, "Webhook de Profetit.org"),
                                createVNode(unref(VChip), {
                                  size: "x-small",
                                  color: "success",
                                  variant: "tonal"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Activo")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(VCardText), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="mb-4"${_scopeId4}><label class="text-caption text-secondary mb-1 d-block"${_scopeId4}>URL del Endpoint</label><div class="d-flex gap-2"${_scopeId4}>`);
                              _push5(ssrRenderComponent(unref(VTextField), {
                                value: __props.webhookUrl,
                                readonly: "",
                                variant: "outlined",
                                density: "comfortable",
                                class: "flex-grow-1"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(VBtn), {
                                variant: "text",
                                onClick: ($event) => copyToClipboard(__props.webhookUrl),
                                disabled: testing.value
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(VIcon), { start: "" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`mdi-content-copy`);
                                        } else {
                                          return [
                                            createTextVNode("mdi-content-copy")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(` Copiar `);
                                  } else {
                                    return [
                                      createVNode(unref(VIcon), { start: "" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-content-copy")
                                        ]),
                                        _: 1
                                      }),
                                      createTextVNode(" Copiar ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div></div><div class="mb-4"${_scopeId4}><label class="text-caption text-secondary mb-1 d-block"${_scopeId4}>Secret Key del Webhook</label>`);
                              _push5(ssrRenderComponent(unref(VTextField), {
                                modelValue: unref(form).webhook_secret,
                                "onUpdate:modelValue": ($event) => unref(form).webhook_secret = $event,
                                label: "Secret Key (HMAC-SHA256)",
                                type: showApiKey.value ? "text" : "password",
                                variant: "outlined",
                                density: "comfortable",
                                class: "mb-2",
                                "append-inner-icon": showApiKey.value ? "mdi-eye-off" : "mdi-eye",
                                "onClick:appendInner": ($event) => showApiKey.value = !showApiKey.value,
                                disabled: saving.value,
                                counter: 255
                              }, null, _parent5, _scopeId4));
                              _push5(`<div class="text-caption text-secondary"${_scopeId4}> Esta clave se usa para validar la firma HMAC-SHA256 en los webhooks entrantes (header <code${_scopeId4}>X-Profetit-Signature</code>). </div></div>`);
                              _push5(ssrRenderComponent(unref(VBtn), {
                                color: "primary",
                                onClick: handleSave,
                                disabled: saving.value,
                                loading: saving.value
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(VIcon), { start: "" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`mdi-content-save`);
                                        } else {
                                          return [
                                            createTextVNode("mdi-content-save")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(` Guardar Configuración `);
                                  } else {
                                    return [
                                      createVNode(unref(VIcon), { start: "" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-content-save")
                                        ]),
                                        _: 1
                                      }),
                                      createTextVNode(" Guardar Configuración ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("div", { class: "mb-4" }, [
                                  createVNode("label", { class: "text-caption text-secondary mb-1 d-block" }, "URL del Endpoint"),
                                  createVNode("div", { class: "d-flex gap-2" }, [
                                    createVNode(unref(VTextField), {
                                      value: __props.webhookUrl,
                                      readonly: "",
                                      variant: "outlined",
                                      density: "comfortable",
                                      class: "flex-grow-1"
                                    }, null, 8, ["value"]),
                                    createVNode(unref(VBtn), {
                                      variant: "text",
                                      onClick: ($event) => copyToClipboard(__props.webhookUrl),
                                      disabled: testing.value
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(VIcon), { start: "" }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-content-copy")
                                          ]),
                                          _: 1
                                        }),
                                        createTextVNode(" Copiar ")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick", "disabled"])
                                  ])
                                ]),
                                createVNode("div", { class: "mb-4" }, [
                                  createVNode("label", { class: "text-caption text-secondary mb-1 d-block" }, "Secret Key del Webhook"),
                                  createVNode(unref(VTextField), {
                                    modelValue: unref(form).webhook_secret,
                                    "onUpdate:modelValue": ($event) => unref(form).webhook_secret = $event,
                                    label: "Secret Key (HMAC-SHA256)",
                                    type: showApiKey.value ? "text" : "password",
                                    variant: "outlined",
                                    density: "comfortable",
                                    class: "mb-2",
                                    "append-inner-icon": showApiKey.value ? "mdi-eye-off" : "mdi-eye",
                                    "onClick:appendInner": ($event) => showApiKey.value = !showApiKey.value,
                                    disabled: saving.value,
                                    counter: 255
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner", "disabled"]),
                                  createVNode("div", { class: "text-caption text-secondary" }, [
                                    createTextVNode(" Esta clave se usa para validar la firma HMAC-SHA256 en los webhooks entrantes (header "),
                                    createVNode("code", null, "X-Profetit-Signature"),
                                    createTextVNode("). ")
                                  ])
                                ]),
                                createVNode(unref(VBtn), {
                                  color: "primary",
                                  onClick: handleSave,
                                  disabled: saving.value,
                                  loading: saving.value
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(VIcon), { start: "" }, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-content-save")
                                      ]),
                                      _: 1
                                    }),
                                    createTextVNode(" Guardar Configuración ")
                                  ]),
                                  _: 1
                                }, 8, ["disabled", "loading"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(VCardTitle), { class: "d-flex align-center justify-space-between" }, {
                            default: withCtx(() => [
                              createVNode("span", null, "Webhook de Profetit.org"),
                              createVNode(unref(VChip), {
                                size: "x-small",
                                color: "success",
                                variant: "tonal"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Activo")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(VCardText), null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "mb-4" }, [
                                createVNode("label", { class: "text-caption text-secondary mb-1 d-block" }, "URL del Endpoint"),
                                createVNode("div", { class: "d-flex gap-2" }, [
                                  createVNode(unref(VTextField), {
                                    value: __props.webhookUrl,
                                    readonly: "",
                                    variant: "outlined",
                                    density: "comfortable",
                                    class: "flex-grow-1"
                                  }, null, 8, ["value"]),
                                  createVNode(unref(VBtn), {
                                    variant: "text",
                                    onClick: ($event) => copyToClipboard(__props.webhookUrl),
                                    disabled: testing.value
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(VIcon), { start: "" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-content-copy")
                                        ]),
                                        _: 1
                                      }),
                                      createTextVNode(" Copiar ")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick", "disabled"])
                                ])
                              ]),
                              createVNode("div", { class: "mb-4" }, [
                                createVNode("label", { class: "text-caption text-secondary mb-1 d-block" }, "Secret Key del Webhook"),
                                createVNode(unref(VTextField), {
                                  modelValue: unref(form).webhook_secret,
                                  "onUpdate:modelValue": ($event) => unref(form).webhook_secret = $event,
                                  label: "Secret Key (HMAC-SHA256)",
                                  type: showApiKey.value ? "text" : "password",
                                  variant: "outlined",
                                  density: "comfortable",
                                  class: "mb-2",
                                  "append-inner-icon": showApiKey.value ? "mdi-eye-off" : "mdi-eye",
                                  "onClick:appendInner": ($event) => showApiKey.value = !showApiKey.value,
                                  disabled: saving.value,
                                  counter: 255
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner", "disabled"]),
                                createVNode("div", { class: "text-caption text-secondary" }, [
                                  createTextVNode(" Esta clave se usa para validar la firma HMAC-SHA256 en los webhooks entrantes (header "),
                                  createVNode("code", null, "X-Profetit-Signature"),
                                  createTextVNode("). ")
                                ])
                              ]),
                              createVNode(unref(VBtn), {
                                color: "primary",
                                onClick: handleSave,
                                disabled: saving.value,
                                loading: saving.value
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(VIcon), { start: "" }, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-content-save")
                                    ]),
                                    _: 1
                                  }),
                                  createTextVNode(" Guardar Configuración ")
                                ]),
                                _: 1
                              }, 8, ["disabled", "loading"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(VCard), {
                    class: "mb-6",
                    variant: "tonal"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(VCardTitle), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`API Key de KonnectionBusiness`);
                            } else {
                              return [
                                createTextVNode("API Key de KonnectionBusiness")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(VCardText), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="mb-4"${_scopeId4}><label class="text-caption text-secondary mb-1 d-block"${_scopeId4}>API Key Actual</label><div class="d-flex gap-2"${_scopeId4}>`);
                              _push5(ssrRenderComponent(unref(VTextField), {
                                value: __props.apiKey,
                                readonly: "",
                                variant: "outlined",
                                density: "comfortable",
                                class: "flex-grow-1"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(VBtn), {
                                variant: "text",
                                onClick: ($event) => copyToClipboard(props.apiKey),
                                disabled: saving.value
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(VIcon), { start: "" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`mdi-content-copy`);
                                        } else {
                                          return [
                                            createTextVNode("mdi-content-copy")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(` Copiar `);
                                  } else {
                                    return [
                                      createVNode(unref(VIcon), { start: "" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-content-copy")
                                        ]),
                                        _: 1
                                      }),
                                      createTextVNode(" Copiar ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(VBtn), {
                                variant: "text",
                                onClick: ($event) => showApiKey.value = !showApiKey.value
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(VIcon), { start: "" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`${ssrInterpolate(showApiKey.value ? "mdi-eye-off" : "mdi-eye")}`);
                                        } else {
                                          return [
                                            createTextVNode(toDisplayString(showApiKey.value ? "mdi-eye-off" : "mdi-eye"), 1)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(VIcon), { start: "" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(showApiKey.value ? "mdi-eye-off" : "mdi-eye"), 1)
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div></div>`);
                              _push5(ssrRenderComponent(unref(VBtn), {
                                color: "secondary",
                                onClick: handleGenerateApiKey,
                                disabled: saving.value,
                                loading: saving.value
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(VIcon), { start: "" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`mdi-key-plus`);
                                        } else {
                                          return [
                                            createTextVNode("mdi-key-plus")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(` Generar Nueva API Key `);
                                  } else {
                                    return [
                                      createVNode(unref(VIcon), { start: "" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-key-plus")
                                        ]),
                                        _: 1
                                      }),
                                      createTextVNode(" Generar Nueva API Key ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("div", { class: "mb-4" }, [
                                  createVNode("label", { class: "text-caption text-secondary mb-1 d-block" }, "API Key Actual"),
                                  createVNode("div", { class: "d-flex gap-2" }, [
                                    createVNode(unref(VTextField), {
                                      value: __props.apiKey,
                                      readonly: "",
                                      variant: "outlined",
                                      density: "comfortable",
                                      class: "flex-grow-1"
                                    }, null, 8, ["value"]),
                                    createVNode(unref(VBtn), {
                                      variant: "text",
                                      onClick: ($event) => copyToClipboard(props.apiKey),
                                      disabled: saving.value
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(VIcon), { start: "" }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-content-copy")
                                          ]),
                                          _: 1
                                        }),
                                        createTextVNode(" Copiar ")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick", "disabled"]),
                                    createVNode(unref(VBtn), {
                                      variant: "text",
                                      onClick: ($event) => showApiKey.value = !showApiKey.value
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(VIcon), { start: "" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(showApiKey.value ? "mdi-eye-off" : "mdi-eye"), 1)
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"])
                                  ])
                                ]),
                                createVNode(unref(VBtn), {
                                  color: "secondary",
                                  onClick: handleGenerateApiKey,
                                  disabled: saving.value,
                                  loading: saving.value
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(VIcon), { start: "" }, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-key-plus")
                                      ]),
                                      _: 1
                                    }),
                                    createTextVNode(" Generar Nueva API Key ")
                                  ]),
                                  _: 1
                                }, 8, ["disabled", "loading"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(VCardTitle), null, {
                            default: withCtx(() => [
                              createTextVNode("API Key de KonnectionBusiness")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(VCardText), null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "mb-4" }, [
                                createVNode("label", { class: "text-caption text-secondary mb-1 d-block" }, "API Key Actual"),
                                createVNode("div", { class: "d-flex gap-2" }, [
                                  createVNode(unref(VTextField), {
                                    value: __props.apiKey,
                                    readonly: "",
                                    variant: "outlined",
                                    density: "comfortable",
                                    class: "flex-grow-1"
                                  }, null, 8, ["value"]),
                                  createVNode(unref(VBtn), {
                                    variant: "text",
                                    onClick: ($event) => copyToClipboard(props.apiKey),
                                    disabled: saving.value
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(VIcon), { start: "" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-content-copy")
                                        ]),
                                        _: 1
                                      }),
                                      createTextVNode(" Copiar ")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick", "disabled"]),
                                  createVNode(unref(VBtn), {
                                    variant: "text",
                                    onClick: ($event) => showApiKey.value = !showApiKey.value
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(VIcon), { start: "" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(showApiKey.value ? "mdi-eye-off" : "mdi-eye"), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])
                                ])
                              ]),
                              createVNode(unref(VBtn), {
                                color: "secondary",
                                onClick: handleGenerateApiKey,
                                disabled: saving.value,
                                loading: saving.value
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(VIcon), { start: "" }, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-key-plus")
                                    ]),
                                    _: 1
                                  }),
                                  createTextVNode(" Generar Nueva API Key ")
                                ]),
                                _: 1
                              }, 8, ["disabled", "loading"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(VCard), {
                    class: "mb-6",
                    variant: "tonal"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(VCardTitle), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Probar Conexión`);
                            } else {
                              return [
                                createTextVNode("Probar Conexión")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(VCardText), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(VBtn), {
                                color: "info",
                                onClick: handleTestWebhook,
                                disabled: testing.value,
                                loading: testing.value
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(VIcon), { start: "" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`mdi-webhook`);
                                        } else {
                                          return [
                                            createTextVNode("mdi-webhook")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(` Test Webhook `);
                                  } else {
                                    return [
                                      createVNode(unref(VIcon), { start: "" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-webhook")
                                        ]),
                                        _: 1
                                      }),
                                      createTextVNode(" Test Webhook ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(VDivider), { class: "my-4" }, null, _parent5, _scopeId4));
                              if (testResult.value) {
                                _push5(ssrRenderComponent(unref(VAlert), {
                                  type: testResult.value.success ? "success" : "error",
                                  variant: "tonal",
                                  class: "mt-4"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      if (testResult.value.success) {
                                        _push6(`<div${_scopeId5}><h4 class="mb-2"${_scopeId5}>✅ Conexión Exitosa</h4><div class="d-flex gap-2 mb-2"${_scopeId5}>`);
                                        _push6(ssrRenderComponent(unref(VChip), {
                                          size: "small",
                                          variant: "outlined"
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(testResult.value.webhook_url)}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(testResult.value.webhook_url), 1)
                                              ];
                                            }
                                          }),
                                          _: 1
                                        }, _parent6, _scopeId5));
                                        _push6(`</div><details class="text-caption"${_scopeId5}><summary${_scopeId5}>Ver firma de prueba</summary><pre class="mt-2 p-2 bg-surface-variant rounded"${_scopeId5}>${ssrInterpolate(testResult.value.test_signature)}</pre></details><details class="text-caption mt-2"${_scopeId5}><summary${_scopeId5}>Ver payload de prueba</summary><pre class="mt-2 p-2 bg-surface-variant rounded"${_scopeId5}>${ssrInterpolate(JSON.stringify(testResult.value.test_payload, null, 2))}</pre></details></div>`);
                                      } else {
                                        _push6(`<div${_scopeId5}><h4 class="mb-2"${_scopeId5}>❌ Error</h4><p${_scopeId5}>${ssrInterpolate(testResult.value.message)}</p></div>`);
                                      }
                                    } else {
                                      return [
                                        testResult.value.success ? (openBlock(), createBlock("div", { key: 0 }, [
                                          createVNode("h4", { class: "mb-2" }, "✅ Conexión Exitosa"),
                                          createVNode("div", { class: "d-flex gap-2 mb-2" }, [
                                            createVNode(unref(VChip), {
                                              size: "small",
                                              variant: "outlined"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(testResult.value.webhook_url), 1)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          createVNode("details", { class: "text-caption" }, [
                                            createVNode("summary", null, "Ver firma de prueba"),
                                            createVNode("pre", { class: "mt-2 p-2 bg-surface-variant rounded" }, toDisplayString(testResult.value.test_signature), 1)
                                          ]),
                                          createVNode("details", { class: "text-caption mt-2" }, [
                                            createVNode("summary", null, "Ver payload de prueba"),
                                            createVNode("pre", { class: "mt-2 p-2 bg-surface-variant rounded" }, toDisplayString(JSON.stringify(testResult.value.test_payload, null, 2)), 1)
                                          ])
                                        ])) : (openBlock(), createBlock("div", { key: 1 }, [
                                          createVNode("h4", { class: "mb-2" }, "❌ Error"),
                                          createVNode("p", null, toDisplayString(testResult.value.message), 1)
                                        ]))
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
                                createVNode(unref(VBtn), {
                                  color: "info",
                                  onClick: handleTestWebhook,
                                  disabled: testing.value,
                                  loading: testing.value
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(VIcon), { start: "" }, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-webhook")
                                      ]),
                                      _: 1
                                    }),
                                    createTextVNode(" Test Webhook ")
                                  ]),
                                  _: 1
                                }, 8, ["disabled", "loading"]),
                                createVNode(unref(VDivider), { class: "my-4" }),
                                testResult.value ? (openBlock(), createBlock(unref(VAlert), {
                                  key: 0,
                                  type: testResult.value.success ? "success" : "error",
                                  variant: "tonal",
                                  class: "mt-4"
                                }, {
                                  default: withCtx(() => [
                                    testResult.value.success ? (openBlock(), createBlock("div", { key: 0 }, [
                                      createVNode("h4", { class: "mb-2" }, "✅ Conexión Exitosa"),
                                      createVNode("div", { class: "d-flex gap-2 mb-2" }, [
                                        createVNode(unref(VChip), {
                                          size: "small",
                                          variant: "outlined"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(testResult.value.webhook_url), 1)
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      createVNode("details", { class: "text-caption" }, [
                                        createVNode("summary", null, "Ver firma de prueba"),
                                        createVNode("pre", { class: "mt-2 p-2 bg-surface-variant rounded" }, toDisplayString(testResult.value.test_signature), 1)
                                      ]),
                                      createVNode("details", { class: "text-caption mt-2" }, [
                                        createVNode("summary", null, "Ver payload de prueba"),
                                        createVNode("pre", { class: "mt-2 p-2 bg-surface-variant rounded" }, toDisplayString(JSON.stringify(testResult.value.test_payload, null, 2)), 1)
                                      ])
                                    ])) : (openBlock(), createBlock("div", { key: 1 }, [
                                      createVNode("h4", { class: "mb-2" }, "❌ Error"),
                                      createVNode("p", null, toDisplayString(testResult.value.message), 1)
                                    ]))
                                  ]),
                                  _: 1
                                }, 8, ["type"])) : createCommentVNode("", true)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(VCardTitle), null, {
                            default: withCtx(() => [
                              createTextVNode("Probar Conexión")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(VCardText), null, {
                            default: withCtx(() => [
                              createVNode(unref(VBtn), {
                                color: "info",
                                onClick: handleTestWebhook,
                                disabled: testing.value,
                                loading: testing.value
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(VIcon), { start: "" }, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-webhook")
                                    ]),
                                    _: 1
                                  }),
                                  createTextVNode(" Test Webhook ")
                                ]),
                                _: 1
                              }, 8, ["disabled", "loading"]),
                              createVNode(unref(VDivider), { class: "my-4" }),
                              testResult.value ? (openBlock(), createBlock(unref(VAlert), {
                                key: 0,
                                type: testResult.value.success ? "success" : "error",
                                variant: "tonal",
                                class: "mt-4"
                              }, {
                                default: withCtx(() => [
                                  testResult.value.success ? (openBlock(), createBlock("div", { key: 0 }, [
                                    createVNode("h4", { class: "mb-2" }, "✅ Conexión Exitosa"),
                                    createVNode("div", { class: "d-flex gap-2 mb-2" }, [
                                      createVNode(unref(VChip), {
                                        size: "small",
                                        variant: "outlined"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(testResult.value.webhook_url), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    createVNode("details", { class: "text-caption" }, [
                                      createVNode("summary", null, "Ver firma de prueba"),
                                      createVNode("pre", { class: "mt-2 p-2 bg-surface-variant rounded" }, toDisplayString(testResult.value.test_signature), 1)
                                    ]),
                                    createVNode("details", { class: "text-caption mt-2" }, [
                                      createVNode("summary", null, "Ver payload de prueba"),
                                      createVNode("pre", { class: "mt-2 p-2 bg-surface-variant rounded" }, toDisplayString(JSON.stringify(testResult.value.test_payload, null, 2)), 1)
                                    ])
                                  ])) : (openBlock(), createBlock("div", { key: 1 }, [
                                    createVNode("h4", { class: "mb-2" }, "❌ Error"),
                                    createVNode("p", null, toDisplayString(testResult.value.message), 1)
                                  ]))
                                ]),
                                _: 1
                              }, 8, ["type"])) : createCommentVNode("", true)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(VCard), { variant: "tonal" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(VCardTitle), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Eventos Soportados`);
                            } else {
                              return [
                                createTextVNode("Eventos Soportados")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(VCardText), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="d-flex flex-wrap gap-2"${_scopeId4}><!--[-->`);
                              ssrRenderList(__props.events, (event, key) => {
                                _push5(ssrRenderComponent(unref(VChip), {
                                  key,
                                  size: "small",
                                  variant: "outlined"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<strong${_scopeId5}>${ssrInterpolate(key)}</strong> → ${ssrInterpolate(event)}`);
                                    } else {
                                      return [
                                        createVNode("strong", null, toDisplayString(key), 1),
                                        createTextVNode(" → " + toDisplayString(event), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]--></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "d-flex flex-wrap gap-2" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(__props.events, (event, key) => {
                                    return openBlock(), createBlock(unref(VChip), {
                                      key,
                                      size: "small",
                                      variant: "outlined"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("strong", null, toDisplayString(key), 1),
                                        createTextVNode(" → " + toDisplayString(event), 1)
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128))
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(VCardTitle), null, {
                            default: withCtx(() => [
                              createTextVNode("Eventos Soportados")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(VCardText), null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex flex-wrap gap-2" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(__props.events, (event, key) => {
                                  return openBlock(), createBlock(unref(VChip), {
                                    key,
                                    size: "small",
                                    variant: "outlined"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("strong", null, toDisplayString(key), 1),
                                      createTextVNode(" → " + toDisplayString(event), 1)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(VDialog), {
                    modelValue: showGeneratedKeyDialog.value,
                    "onUpdate:modelValue": ($event) => showGeneratedKeyDialog.value = $event,
                    "max-width": "600"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(VCard), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(VCardTitle), { class: "text-warning" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(VIcon), { start: "" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`mdi-key`);
                                        } else {
                                          return [
                                            createTextVNode("mdi-key")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(` Nueva API Key Generada `);
                                  } else {
                                    return [
                                      createVNode(unref(VIcon), { start: "" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-key")
                                        ]),
                                        _: 1
                                      }),
                                      createTextVNode(" Nueva API Key Generada ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(VCardText), null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(VAlert), {
                                      type: "warning",
                                      variant: "tonal"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<strong${_scopeId6}>¡Importante!</strong> Guarda esta clave en un lugar seguro. No se mostrará nuevamente. `);
                                        } else {
                                          return [
                                            createVNode("strong", null, "¡Importante!"),
                                            createTextVNode(" Guarda esta clave en un lugar seguro. No se mostrará nuevamente. ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`<div class="d-flex gap-2"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(unref(VTextField), {
                                      value: generatedApiKey.value,
                                      readonly: "",
                                      variant: "outlined",
                                      density: "comfortable",
                                      class: "flex-grow-1"
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(unref(VBtn), {
                                      variant: "text",
                                      onClick: ($event) => copyToClipboard(generatedApiKey.value)
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(unref(VIcon), { start: "" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`mdi-content-copy`);
                                              } else {
                                                return [
                                                  createTextVNode("mdi-content-copy")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(` Copiar `);
                                        } else {
                                          return [
                                            createVNode(unref(VIcon), { start: "" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-content-copy")
                                              ]),
                                              _: 1
                                            }),
                                            createTextVNode(" Copiar ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`</div>`);
                                  } else {
                                    return [
                                      createVNode(unref(VAlert), {
                                        type: "warning",
                                        variant: "tonal"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("strong", null, "¡Importante!"),
                                          createTextVNode(" Guarda esta clave en un lugar seguro. No se mostrará nuevamente. ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("div", { class: "d-flex gap-2" }, [
                                        createVNode(unref(VTextField), {
                                          value: generatedApiKey.value,
                                          readonly: "",
                                          variant: "outlined",
                                          density: "comfortable",
                                          class: "flex-grow-1"
                                        }, null, 8, ["value"]),
                                        createVNode(unref(VBtn), {
                                          variant: "text",
                                          onClick: ($event) => copyToClipboard(generatedApiKey.value)
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(unref(VIcon), { start: "" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-content-copy")
                                              ]),
                                              _: 1
                                            }),
                                            createTextVNode(" Copiar ")
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"])
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(VCardActions), { class: "justify-end" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(VBtn), {
                                      onClick: ($event) => showGeneratedKeyDialog.value = false
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Entendido`);
                                        } else {
                                          return [
                                            createTextVNode("Entendido")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(VBtn), {
                                        onClick: ($event) => showGeneratedKeyDialog.value = false
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Entendido")
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(VCardTitle), { class: "text-warning" }, {
                                  default: withCtx(() => [
                                    createVNode(unref(VIcon), { start: "" }, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-key")
                                      ]),
                                      _: 1
                                    }),
                                    createTextVNode(" Nueva API Key Generada ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(VCardText), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(VAlert), {
                                      type: "warning",
                                      variant: "tonal"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("strong", null, "¡Importante!"),
                                        createTextVNode(" Guarda esta clave en un lugar seguro. No se mostrará nuevamente. ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("div", { class: "d-flex gap-2" }, [
                                      createVNode(unref(VTextField), {
                                        value: generatedApiKey.value,
                                        readonly: "",
                                        variant: "outlined",
                                        density: "comfortable",
                                        class: "flex-grow-1"
                                      }, null, 8, ["value"]),
                                      createVNode(unref(VBtn), {
                                        variant: "text",
                                        onClick: ($event) => copyToClipboard(generatedApiKey.value)
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(VIcon), { start: "" }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-content-copy")
                                            ]),
                                            _: 1
                                          }),
                                          createTextVNode(" Copiar ")
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"])
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(VCardActions), { class: "justify-end" }, {
                                  default: withCtx(() => [
                                    createVNode(unref(VBtn), {
                                      onClick: ($event) => showGeneratedKeyDialog.value = false
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Entendido")
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(VCard), null, {
                            default: withCtx(() => [
                              createVNode(unref(VCardTitle), { class: "text-warning" }, {
                                default: withCtx(() => [
                                  createVNode(unref(VIcon), { start: "" }, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-key")
                                    ]),
                                    _: 1
                                  }),
                                  createTextVNode(" Nueva API Key Generada ")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(VCardText), null, {
                                default: withCtx(() => [
                                  createVNode(unref(VAlert), {
                                    type: "warning",
                                    variant: "tonal"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("strong", null, "¡Importante!"),
                                      createTextVNode(" Guarda esta clave en un lugar seguro. No se mostrará nuevamente. ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("div", { class: "d-flex gap-2" }, [
                                    createVNode(unref(VTextField), {
                                      value: generatedApiKey.value,
                                      readonly: "",
                                      variant: "outlined",
                                      density: "comfortable",
                                      class: "flex-grow-1"
                                    }, null, 8, ["value"]),
                                    createVNode(unref(VBtn), {
                                      variant: "text",
                                      onClick: ($event) => copyToClipboard(generatedApiKey.value)
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(VIcon), { start: "" }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-content-copy")
                                          ]),
                                          _: 1
                                        }),
                                        createTextVNode(" Copiar ")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"])
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(unref(VCardActions), { class: "justify-end" }, {
                                default: withCtx(() => [
                                  createVNode(unref(VBtn), {
                                    onClick: ($event) => showGeneratedKeyDialog.value = false
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Entendido")
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(VCard), {
                      class: "mb-6",
                      variant: "tonal"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(VCardTitle), { class: "d-flex align-center justify-space-between" }, {
                          default: withCtx(() => [
                            createVNode("span", null, "Webhook de Profetit.org"),
                            createVNode(unref(VChip), {
                              size: "x-small",
                              color: "success",
                              variant: "tonal"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Activo")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(unref(VCardText), null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "mb-4" }, [
                              createVNode("label", { class: "text-caption text-secondary mb-1 d-block" }, "URL del Endpoint"),
                              createVNode("div", { class: "d-flex gap-2" }, [
                                createVNode(unref(VTextField), {
                                  value: __props.webhookUrl,
                                  readonly: "",
                                  variant: "outlined",
                                  density: "comfortable",
                                  class: "flex-grow-1"
                                }, null, 8, ["value"]),
                                createVNode(unref(VBtn), {
                                  variant: "text",
                                  onClick: ($event) => copyToClipboard(__props.webhookUrl),
                                  disabled: testing.value
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(VIcon), { start: "" }, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-content-copy")
                                      ]),
                                      _: 1
                                    }),
                                    createTextVNode(" Copiar ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick", "disabled"])
                              ])
                            ]),
                            createVNode("div", { class: "mb-4" }, [
                              createVNode("label", { class: "text-caption text-secondary mb-1 d-block" }, "Secret Key del Webhook"),
                              createVNode(unref(VTextField), {
                                modelValue: unref(form).webhook_secret,
                                "onUpdate:modelValue": ($event) => unref(form).webhook_secret = $event,
                                label: "Secret Key (HMAC-SHA256)",
                                type: showApiKey.value ? "text" : "password",
                                variant: "outlined",
                                density: "comfortable",
                                class: "mb-2",
                                "append-inner-icon": showApiKey.value ? "mdi-eye-off" : "mdi-eye",
                                "onClick:appendInner": ($event) => showApiKey.value = !showApiKey.value,
                                disabled: saving.value,
                                counter: 255
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner", "disabled"]),
                              createVNode("div", { class: "text-caption text-secondary" }, [
                                createTextVNode(" Esta clave se usa para validar la firma HMAC-SHA256 en los webhooks entrantes (header "),
                                createVNode("code", null, "X-Profetit-Signature"),
                                createTextVNode("). ")
                              ])
                            ]),
                            createVNode(unref(VBtn), {
                              color: "primary",
                              onClick: handleSave,
                              disabled: saving.value,
                              loading: saving.value
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(VIcon), { start: "" }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-content-save")
                                  ]),
                                  _: 1
                                }),
                                createTextVNode(" Guardar Configuración ")
                              ]),
                              _: 1
                            }, 8, ["disabled", "loading"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(VCard), {
                      class: "mb-6",
                      variant: "tonal"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(VCardTitle), null, {
                          default: withCtx(() => [
                            createTextVNode("API Key de KonnectionBusiness")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(VCardText), null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "mb-4" }, [
                              createVNode("label", { class: "text-caption text-secondary mb-1 d-block" }, "API Key Actual"),
                              createVNode("div", { class: "d-flex gap-2" }, [
                                createVNode(unref(VTextField), {
                                  value: __props.apiKey,
                                  readonly: "",
                                  variant: "outlined",
                                  density: "comfortable",
                                  class: "flex-grow-1"
                                }, null, 8, ["value"]),
                                createVNode(unref(VBtn), {
                                  variant: "text",
                                  onClick: ($event) => copyToClipboard(props.apiKey),
                                  disabled: saving.value
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(VIcon), { start: "" }, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-content-copy")
                                      ]),
                                      _: 1
                                    }),
                                    createTextVNode(" Copiar ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick", "disabled"]),
                                createVNode(unref(VBtn), {
                                  variant: "text",
                                  onClick: ($event) => showApiKey.value = !showApiKey.value
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(VIcon), { start: "" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(showApiKey.value ? "mdi-eye-off" : "mdi-eye"), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ])
                            ]),
                            createVNode(unref(VBtn), {
                              color: "secondary",
                              onClick: handleGenerateApiKey,
                              disabled: saving.value,
                              loading: saving.value
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(VIcon), { start: "" }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-key-plus")
                                  ]),
                                  _: 1
                                }),
                                createTextVNode(" Generar Nueva API Key ")
                              ]),
                              _: 1
                            }, 8, ["disabled", "loading"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(VCard), {
                      class: "mb-6",
                      variant: "tonal"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(VCardTitle), null, {
                          default: withCtx(() => [
                            createTextVNode("Probar Conexión")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(VCardText), null, {
                          default: withCtx(() => [
                            createVNode(unref(VBtn), {
                              color: "info",
                              onClick: handleTestWebhook,
                              disabled: testing.value,
                              loading: testing.value
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(VIcon), { start: "" }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-webhook")
                                  ]),
                                  _: 1
                                }),
                                createTextVNode(" Test Webhook ")
                              ]),
                              _: 1
                            }, 8, ["disabled", "loading"]),
                            createVNode(unref(VDivider), { class: "my-4" }),
                            testResult.value ? (openBlock(), createBlock(unref(VAlert), {
                              key: 0,
                              type: testResult.value.success ? "success" : "error",
                              variant: "tonal",
                              class: "mt-4"
                            }, {
                              default: withCtx(() => [
                                testResult.value.success ? (openBlock(), createBlock("div", { key: 0 }, [
                                  createVNode("h4", { class: "mb-2" }, "✅ Conexión Exitosa"),
                                  createVNode("div", { class: "d-flex gap-2 mb-2" }, [
                                    createVNode(unref(VChip), {
                                      size: "small",
                                      variant: "outlined"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(testResult.value.webhook_url), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  createVNode("details", { class: "text-caption" }, [
                                    createVNode("summary", null, "Ver firma de prueba"),
                                    createVNode("pre", { class: "mt-2 p-2 bg-surface-variant rounded" }, toDisplayString(testResult.value.test_signature), 1)
                                  ]),
                                  createVNode("details", { class: "text-caption mt-2" }, [
                                    createVNode("summary", null, "Ver payload de prueba"),
                                    createVNode("pre", { class: "mt-2 p-2 bg-surface-variant rounded" }, toDisplayString(JSON.stringify(testResult.value.test_payload, null, 2)), 1)
                                  ])
                                ])) : (openBlock(), createBlock("div", { key: 1 }, [
                                  createVNode("h4", { class: "mb-2" }, "❌ Error"),
                                  createVNode("p", null, toDisplayString(testResult.value.message), 1)
                                ]))
                              ]),
                              _: 1
                            }, 8, ["type"])) : createCommentVNode("", true)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(VCard), { variant: "tonal" }, {
                      default: withCtx(() => [
                        createVNode(unref(VCardTitle), null, {
                          default: withCtx(() => [
                            createTextVNode("Eventos Soportados")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(VCardText), null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "d-flex flex-wrap gap-2" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.events, (event, key) => {
                                return openBlock(), createBlock(unref(VChip), {
                                  key,
                                  size: "small",
                                  variant: "outlined"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("strong", null, toDisplayString(key), 1),
                                    createTextVNode(" → " + toDisplayString(event), 1)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(VDialog), {
                      modelValue: showGeneratedKeyDialog.value,
                      "onUpdate:modelValue": ($event) => showGeneratedKeyDialog.value = $event,
                      "max-width": "600"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(VCard), null, {
                          default: withCtx(() => [
                            createVNode(unref(VCardTitle), { class: "text-warning" }, {
                              default: withCtx(() => [
                                createVNode(unref(VIcon), { start: "" }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-key")
                                  ]),
                                  _: 1
                                }),
                                createTextVNode(" Nueva API Key Generada ")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(VCardText), null, {
                              default: withCtx(() => [
                                createVNode(unref(VAlert), {
                                  type: "warning",
                                  variant: "tonal"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("strong", null, "¡Importante!"),
                                    createTextVNode(" Guarda esta clave en un lugar seguro. No se mostrará nuevamente. ")
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "d-flex gap-2" }, [
                                  createVNode(unref(VTextField), {
                                    value: generatedApiKey.value,
                                    readonly: "",
                                    variant: "outlined",
                                    density: "comfortable",
                                    class: "flex-grow-1"
                                  }, null, 8, ["value"]),
                                  createVNode(unref(VBtn), {
                                    variant: "text",
                                    onClick: ($event) => copyToClipboard(generatedApiKey.value)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(VIcon), { start: "" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-content-copy")
                                        ]),
                                        _: 1
                                      }),
                                      createTextVNode(" Copiar ")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(unref(VCardActions), { class: "justify-end" }, {
                              default: withCtx(() => [
                                createVNode(unref(VBtn), {
                                  onClick: ($event) => showGeneratedKeyDialog.value = false
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Entendido")
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
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(VContainer), {
                fluid: "",
                class: "pa-4"
              }, {
                default: withCtx(() => [
                  createVNode(unref(VCard), {
                    class: "mb-6",
                    variant: "tonal"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(VCardTitle), { class: "d-flex align-center justify-space-between" }, {
                        default: withCtx(() => [
                          createVNode("span", null, "Webhook de Profetit.org"),
                          createVNode(unref(VChip), {
                            size: "x-small",
                            color: "success",
                            variant: "tonal"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Activo")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(VCardText), null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "mb-4" }, [
                            createVNode("label", { class: "text-caption text-secondary mb-1 d-block" }, "URL del Endpoint"),
                            createVNode("div", { class: "d-flex gap-2" }, [
                              createVNode(unref(VTextField), {
                                value: __props.webhookUrl,
                                readonly: "",
                                variant: "outlined",
                                density: "comfortable",
                                class: "flex-grow-1"
                              }, null, 8, ["value"]),
                              createVNode(unref(VBtn), {
                                variant: "text",
                                onClick: ($event) => copyToClipboard(__props.webhookUrl),
                                disabled: testing.value
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(VIcon), { start: "" }, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-content-copy")
                                    ]),
                                    _: 1
                                  }),
                                  createTextVNode(" Copiar ")
                                ]),
                                _: 1
                              }, 8, ["onClick", "disabled"])
                            ])
                          ]),
                          createVNode("div", { class: "mb-4" }, [
                            createVNode("label", { class: "text-caption text-secondary mb-1 d-block" }, "Secret Key del Webhook"),
                            createVNode(unref(VTextField), {
                              modelValue: unref(form).webhook_secret,
                              "onUpdate:modelValue": ($event) => unref(form).webhook_secret = $event,
                              label: "Secret Key (HMAC-SHA256)",
                              type: showApiKey.value ? "text" : "password",
                              variant: "outlined",
                              density: "comfortable",
                              class: "mb-2",
                              "append-inner-icon": showApiKey.value ? "mdi-eye-off" : "mdi-eye",
                              "onClick:appendInner": ($event) => showApiKey.value = !showApiKey.value,
                              disabled: saving.value,
                              counter: 255
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner", "disabled"]),
                            createVNode("div", { class: "text-caption text-secondary" }, [
                              createTextVNode(" Esta clave se usa para validar la firma HMAC-SHA256 en los webhooks entrantes (header "),
                              createVNode("code", null, "X-Profetit-Signature"),
                              createTextVNode("). ")
                            ])
                          ]),
                          createVNode(unref(VBtn), {
                            color: "primary",
                            onClick: handleSave,
                            disabled: saving.value,
                            loading: saving.value
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(VIcon), { start: "" }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-content-save")
                                ]),
                                _: 1
                              }),
                              createTextVNode(" Guardar Configuración ")
                            ]),
                            _: 1
                          }, 8, ["disabled", "loading"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(VCard), {
                    class: "mb-6",
                    variant: "tonal"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(VCardTitle), null, {
                        default: withCtx(() => [
                          createTextVNode("API Key de KonnectionBusiness")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(VCardText), null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "mb-4" }, [
                            createVNode("label", { class: "text-caption text-secondary mb-1 d-block" }, "API Key Actual"),
                            createVNode("div", { class: "d-flex gap-2" }, [
                              createVNode(unref(VTextField), {
                                value: __props.apiKey,
                                readonly: "",
                                variant: "outlined",
                                density: "comfortable",
                                class: "flex-grow-1"
                              }, null, 8, ["value"]),
                              createVNode(unref(VBtn), {
                                variant: "text",
                                onClick: ($event) => copyToClipboard(props.apiKey),
                                disabled: saving.value
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(VIcon), { start: "" }, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-content-copy")
                                    ]),
                                    _: 1
                                  }),
                                  createTextVNode(" Copiar ")
                                ]),
                                _: 1
                              }, 8, ["onClick", "disabled"]),
                              createVNode(unref(VBtn), {
                                variant: "text",
                                onClick: ($event) => showApiKey.value = !showApiKey.value
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(VIcon), { start: "" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(showApiKey.value ? "mdi-eye-off" : "mdi-eye"), 1)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ])
                          ]),
                          createVNode(unref(VBtn), {
                            color: "secondary",
                            onClick: handleGenerateApiKey,
                            disabled: saving.value,
                            loading: saving.value
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(VIcon), { start: "" }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-key-plus")
                                ]),
                                _: 1
                              }),
                              createTextVNode(" Generar Nueva API Key ")
                            ]),
                            _: 1
                          }, 8, ["disabled", "loading"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(VCard), {
                    class: "mb-6",
                    variant: "tonal"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(VCardTitle), null, {
                        default: withCtx(() => [
                          createTextVNode("Probar Conexión")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(VCardText), null, {
                        default: withCtx(() => [
                          createVNode(unref(VBtn), {
                            color: "info",
                            onClick: handleTestWebhook,
                            disabled: testing.value,
                            loading: testing.value
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(VIcon), { start: "" }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-webhook")
                                ]),
                                _: 1
                              }),
                              createTextVNode(" Test Webhook ")
                            ]),
                            _: 1
                          }, 8, ["disabled", "loading"]),
                          createVNode(unref(VDivider), { class: "my-4" }),
                          testResult.value ? (openBlock(), createBlock(unref(VAlert), {
                            key: 0,
                            type: testResult.value.success ? "success" : "error",
                            variant: "tonal",
                            class: "mt-4"
                          }, {
                            default: withCtx(() => [
                              testResult.value.success ? (openBlock(), createBlock("div", { key: 0 }, [
                                createVNode("h4", { class: "mb-2" }, "✅ Conexión Exitosa"),
                                createVNode("div", { class: "d-flex gap-2 mb-2" }, [
                                  createVNode(unref(VChip), {
                                    size: "small",
                                    variant: "outlined"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(testResult.value.webhook_url), 1)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode("details", { class: "text-caption" }, [
                                  createVNode("summary", null, "Ver firma de prueba"),
                                  createVNode("pre", { class: "mt-2 p-2 bg-surface-variant rounded" }, toDisplayString(testResult.value.test_signature), 1)
                                ]),
                                createVNode("details", { class: "text-caption mt-2" }, [
                                  createVNode("summary", null, "Ver payload de prueba"),
                                  createVNode("pre", { class: "mt-2 p-2 bg-surface-variant rounded" }, toDisplayString(JSON.stringify(testResult.value.test_payload, null, 2)), 1)
                                ])
                              ])) : (openBlock(), createBlock("div", { key: 1 }, [
                                createVNode("h4", { class: "mb-2" }, "❌ Error"),
                                createVNode("p", null, toDisplayString(testResult.value.message), 1)
                              ]))
                            ]),
                            _: 1
                          }, 8, ["type"])) : createCommentVNode("", true)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(VCard), { variant: "tonal" }, {
                    default: withCtx(() => [
                      createVNode(unref(VCardTitle), null, {
                        default: withCtx(() => [
                          createTextVNode("Eventos Soportados")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(VCardText), null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "d-flex flex-wrap gap-2" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.events, (event, key) => {
                              return openBlock(), createBlock(unref(VChip), {
                                key,
                                size: "small",
                                variant: "outlined"
                              }, {
                                default: withCtx(() => [
                                  createVNode("strong", null, toDisplayString(key), 1),
                                  createTextVNode(" → " + toDisplayString(event), 1)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(VDialog), {
                    modelValue: showGeneratedKeyDialog.value,
                    "onUpdate:modelValue": ($event) => showGeneratedKeyDialog.value = $event,
                    "max-width": "600"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(VCard), null, {
                        default: withCtx(() => [
                          createVNode(unref(VCardTitle), { class: "text-warning" }, {
                            default: withCtx(() => [
                              createVNode(unref(VIcon), { start: "" }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-key")
                                ]),
                                _: 1
                              }),
                              createTextVNode(" Nueva API Key Generada ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(VCardText), null, {
                            default: withCtx(() => [
                              createVNode(unref(VAlert), {
                                type: "warning",
                                variant: "tonal"
                              }, {
                                default: withCtx(() => [
                                  createVNode("strong", null, "¡Importante!"),
                                  createTextVNode(" Guarda esta clave en un lugar seguro. No se mostrará nuevamente. ")
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "d-flex gap-2" }, [
                                createVNode(unref(VTextField), {
                                  value: generatedApiKey.value,
                                  readonly: "",
                                  variant: "outlined",
                                  density: "comfortable",
                                  class: "flex-grow-1"
                                }, null, 8, ["value"]),
                                createVNode(unref(VBtn), {
                                  variant: "text",
                                  onClick: ($event) => copyToClipboard(generatedApiKey.value)
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(VIcon), { start: "" }, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-content-copy")
                                      ]),
                                      _: 1
                                    }),
                                    createTextVNode(" Copiar ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(unref(VCardActions), { class: "justify-end" }, {
                            default: withCtx(() => [
                              createVNode(unref(VBtn), {
                                onClick: ($event) => showGeneratedKeyDialog.value = false
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Entendido")
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
                  }, 8, ["modelValue", "onUpdate:modelValue"])
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
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Settings/Integrations.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
