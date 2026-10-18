import { defineComponent, ref, mergeProps, withCtx, unref, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { router } from "@inertiajs/vue3";
import { VCard, VCardTitle, VCardText, VAvatar, VIcon, VDivider, VList, VListItem, VListItemTitle, VListItemSubtitle, VChip, VTooltip, VBtn } from "vuetify/components";
import { _ as _sfc_main$2 } from "./TrustBadge-DjhbGdlY.js";
import { _ as _sfc_main$1 } from "./AdminLayout-BdI9c5Vo.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Show",
  __ssrInlineRender: true,
  props: {
    user: {},
    certificates: {}
  },
  setup(__props) {
    const route = (name, params) => window.route(name, params);
    const props = __props;
    const loading = ref(false);
    const statusColors = {
      pending_activation: "warning",
      active: "success",
      suspended: "error"
    };
    const statusLabels = {
      pending_activation: "Pendiente de Activación",
      active: "Activo",
      suspended: "Suspendido"
    };
    const certificateStatusColors = {
      active: "success",
      revoked: "error",
      expired: "warning"
    };
    const certificateStatusLabels = {
      active: "Activo",
      revoked: "Revocado",
      expired: "Expirado"
    };
    const handleResendActivation = () => {
      if (!confirm(`¿Reenviar correo de activación a ${props.user.email}?`)) return;
      loading.value = true;
      router.post(route("admin.profetit-users.resend-activation", props.user.id), {
        onSuccess: () => {
          loading.value = false;
        },
        onError: () => {
          loading.value = false;
        }
      });
    };
    const handleRevoke = () => {
      if (!confirm("¿Revocar certificado activo? Esta acción no se puede deshacer.")) return;
      loading.value = true;
      router.post(route("admin.profetit-users.sync", props.user.id), {
        data: { action: "revoke" },
        onSuccess: () => {
          loading.value = false;
          router.back();
        },
        onError: () => {
          loading.value = false;
        }
      });
    };
    const formatDate = (dateString) => {
      if (!dateString) return "-";
      return new Date(dateString).toLocaleDateString("es-MX", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    };
    const formatDateTime = (dateString) => {
      if (!dateString) return "-";
      return new Date(dateString).toLocaleString("es-MX", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        title: __props.user.name,
        subtitle: __props.user.email,
        breadcrumbs: [
          { title: "Usuarios Certificados", route: route("admin.profetit-users.index") },
          { title: __props.user.name }
        ]
      }, _attrs), {
        actions: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.user.profile_status === "active") {
              _push2(ssrRenderComponent(unref(VBtn), {
                variant: "outlined",
                color: "error",
                onClick: handleRevoke,
                disabled: loading.value
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(VIcon), { start: "" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`mdi-shield-off`);
                        } else {
                          return [
                            createTextVNode("mdi-shield-off")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(` Revocar Certificado `);
                  } else {
                    return [
                      createVNode(unref(VIcon), { start: "" }, {
                        default: withCtx(() => [
                          createTextVNode("mdi-shield-off")
                        ]),
                        _: 1
                      }),
                      createTextVNode(" Revocar Certificado ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(unref(VBtn), {
              variant: "outlined",
              color: "primary",
              onClick: handleResendActivation,
              disabled: __props.user.profile_status !== "pending_activation" || loading.value,
              loading: loading.value
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(VIcon), { start: "" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`mdi-email-outline`);
                      } else {
                        return [
                          createTextVNode("mdi-email-outline")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(` Reenviar Activación `);
                } else {
                  return [
                    createVNode(unref(VIcon), { start: "" }, {
                      default: withCtx(() => [
                        createTextVNode("mdi-email-outline")
                      ]),
                      _: 1
                    }),
                    createTextVNode(" Reenviar Activación ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              __props.user.profile_status === "active" ? (openBlock(), createBlock(unref(VBtn), {
                key: 0,
                variant: "outlined",
                color: "error",
                onClick: handleRevoke,
                disabled: loading.value
              }, {
                default: withCtx(() => [
                  createVNode(unref(VIcon), { start: "" }, {
                    default: withCtx(() => [
                      createTextVNode("mdi-shield-off")
                    ]),
                    _: 1
                  }),
                  createTextVNode(" Revocar Certificado ")
                ]),
                _: 1
              }, 8, ["disabled"])) : createCommentVNode("", true),
              createVNode(unref(VBtn), {
                variant: "outlined",
                color: "primary",
                onClick: handleResendActivation,
                disabled: __props.user.profile_status !== "pending_activation" || loading.value,
                loading: loading.value
              }, {
                default: withCtx(() => [
                  createVNode(unref(VIcon), { start: "" }, {
                    default: withCtx(() => [
                      createTextVNode("mdi-email-outline")
                    ]),
                    _: 1
                  }),
                  createTextVNode(" Reenviar Activación ")
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex gap-6"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(VCard), {
              variant: "tonal",
              class: "flex-grow-1",
              "min-width": "350"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(VCardTitle), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Información del Usuario`);
                      } else {
                        return [
                          createTextVNode("Información del Usuario")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(VCardText), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="d-flex align-center gap-4 mb-4"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(VAvatar), {
                          size: "80",
                          color: "primary",
                          variant: "tonal"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(VIcon), { size: "x-large" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`mdi-account`);
                                  } else {
                                    return [
                                      createTextVNode("mdi-account")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(VIcon), { size: "x-large" }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-account")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div${_scopeId3}><div class="text-h6 mb-1"${_scopeId3}>${ssrInterpolate(__props.user.name)}</div><div class="text-secondary"${_scopeId3}>${ssrInterpolate(__props.user.email)}</div>`);
                        if (__props.user.profitit_verified) {
                          _push4(ssrRenderComponent(_sfc_main$2, {
                            badge: {
                              type: __props.user.profetit_certificate_type,
                              label: __props.user.profetit_certificate_type === "titulo_oficial" ? "Título Oficial" : "Testimonio de Estudios",
                              icon: __props.user.profetit_certificate_type === "titulo_oficial" ? "mdi-certificate" : "mdi-file-document-check",
                              color: __props.user.profetit_certificate_type === "titulo_oficial" ? "primary" : "info",
                              code: __props.user.profetit_code
                            }
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</div></div>`);
                        _push4(ssrRenderComponent(unref(VDivider), { class: "my-4" }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(VList), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(VListItem), null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(VListItemTitle), null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Estado del Perfil`);
                                        } else {
                                          return [
                                            createTextVNode("Estado del Perfil")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(unref(VListItemSubtitle), null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(unref(VChip), {
                                            color: statusColors[__props.user.profile_status] || "default",
                                            size: "small",
                                            variant: "tonal"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`${ssrInterpolate(statusLabels[__props.user.profile_status] || __props.user.profile_status)}`);
                                              } else {
                                                return [
                                                  createTextVNode(toDisplayString(statusLabels[__props.user.profile_status] || __props.user.profile_status), 1)
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(unref(VChip), {
                                              color: statusColors[__props.user.profile_status] || "default",
                                              size: "small",
                                              variant: "tonal"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(statusLabels[__props.user.profile_status] || __props.user.profile_status), 1)
                                              ]),
                                              _: 1
                                            }, 8, ["color"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(VListItemTitle), null, {
                                        default: withCtx(() => [
                                          createTextVNode("Estado del Perfil")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(VListItemSubtitle), null, {
                                        default: withCtx(() => [
                                          createVNode(unref(VChip), {
                                            color: statusColors[__props.user.profile_status] || "default",
                                            size: "small",
                                            variant: "tonal"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(statusLabels[__props.user.profile_status] || __props.user.profile_status), 1)
                                            ]),
                                            _: 1
                                          }, 8, ["color"])
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(VListItem), null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(VListItemTitle), null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Verificación Profetit`);
                                        } else {
                                          return [
                                            createTextVNode("Verificación Profetit")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(unref(VListItemSubtitle), null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(unref(VChip), {
                                            color: __props.user.profetit_verified ? "success" : "error",
                                            size: "small",
                                            variant: "tonal"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`${ssrInterpolate(__props.user.profetit_verified ? "Verificado" : "No verificado")}`);
                                              } else {
                                                return [
                                                  createTextVNode(toDisplayString(__props.user.profetit_verified ? "Verificado" : "No verificado"), 1)
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(unref(VChip), {
                                              color: __props.user.profetit_verified ? "success" : "error",
                                              size: "small",
                                              variant: "tonal"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(__props.user.profetit_verified ? "Verificado" : "No verificado"), 1)
                                              ]),
                                              _: 1
                                            }, 8, ["color"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(VListItemTitle), null, {
                                        default: withCtx(() => [
                                          createTextVNode("Verificación Profetit")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(VListItemSubtitle), null, {
                                        default: withCtx(() => [
                                          createVNode(unref(VChip), {
                                            color: __props.user.profetit_verified ? "success" : "error",
                                            size: "small",
                                            variant: "tonal"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(__props.user.profetit_verified ? "Verificado" : "No verificado"), 1)
                                            ]),
                                            _: 1
                                          }, 8, ["color"])
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              if (__props.user.profetit_certificate_type) {
                                _push5(ssrRenderComponent(unref(VListItem), null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(unref(VListItemTitle), null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`Tipo de Certificado`);
                                          } else {
                                            return [
                                              createTextVNode("Tipo de Certificado")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(unref(VListItemSubtitle), null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_sfc_main$2, {
                                              badge: {
                                                type: __props.user.profetit_certificate_type,
                                                label: __props.user.profetit_certificate_type === "titulo_oficial" ? "Título Oficial" : "Testimonio de Estudios",
                                                icon: __props.user.profetit_certificate_type === "titulo_oficial" ? "mdi-certificate" : "mdi-file-document-check",
                                                color: __props.user.profetit_certificate_type === "titulo_oficial" ? "primary" : "info",
                                                code: __props.user.profetit_code
                                              },
                                              size: "small"
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_sfc_main$2, {
                                                badge: {
                                                  type: __props.user.profetit_certificate_type,
                                                  label: __props.user.profetit_certificate_type === "titulo_oficial" ? "Título Oficial" : "Testimonio de Estudios",
                                                  icon: __props.user.profetit_certificate_type === "titulo_oficial" ? "mdi-certificate" : "mdi-file-document-check",
                                                  color: __props.user.profetit_certificate_type === "titulo_oficial" ? "primary" : "info",
                                                  code: __props.user.profetit_code
                                                },
                                                size: "small"
                                              }, null, 8, ["badge"])
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(unref(VListItemTitle), null, {
                                          default: withCtx(() => [
                                            createTextVNode("Tipo de Certificado")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(VListItemSubtitle), null, {
                                          default: withCtx(() => [
                                            createVNode(_sfc_main$2, {
                                              badge: {
                                                type: __props.user.profetit_certificate_type,
                                                label: __props.user.profetit_certificate_type === "titulo_oficial" ? "Título Oficial" : "Testimonio de Estudios",
                                                icon: __props.user.profetit_certificate_type === "titulo_oficial" ? "mdi-certificate" : "mdi-file-document-check",
                                                color: __props.user.profetit_certificate_type === "titulo_oficial" ? "primary" : "info",
                                                code: __props.user.profetit_code
                                              },
                                              size: "small"
                                            }, null, 8, ["badge"])
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                              if (__props.user.profetit_code) {
                                _push5(ssrRenderComponent(unref(VListItem), null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(unref(VListItemTitle), null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`Código Profetit`);
                                          } else {
                                            return [
                                              createTextVNode("Código Profetit")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(unref(VListItemSubtitle), { class: "font-monospace" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(__props.user.profetit_code)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(__props.user.profetit_code), 1)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(unref(VListItemTitle), null, {
                                          default: withCtx(() => [
                                            createTextVNode("Código Profetit")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(VListItemSubtitle), { class: "font-monospace" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(__props.user.profetit_code), 1)
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                              _push5(ssrRenderComponent(unref(VListItem), null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(VListItemTitle), null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Fecha de Registro`);
                                        } else {
                                          return [
                                            createTextVNode("Fecha de Registro")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(unref(VListItemSubtitle), null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`${ssrInterpolate(formatDateTime(__props.user.created_at))}`);
                                        } else {
                                          return [
                                            createTextVNode(toDisplayString(formatDateTime(__props.user.created_at)), 1)
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(VListItemTitle), null, {
                                        default: withCtx(() => [
                                          createTextVNode("Fecha de Registro")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(VListItemSubtitle), null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(formatDateTime(__props.user.created_at)), 1)
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              if (__props.user.email_verified_at) {
                                _push5(ssrRenderComponent(unref(VListItem), null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(unref(VListItemTitle), null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`Email Verificado`);
                                          } else {
                                            return [
                                              createTextVNode("Email Verificado")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(unref(VListItemSubtitle), null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(formatDateTime(__props.user.email_verified_at))}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(formatDateTime(__props.user.email_verified_at)), 1)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(unref(VListItemTitle), null, {
                                          default: withCtx(() => [
                                            createTextVNode("Email Verificado")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(VListItemSubtitle), null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(formatDateTime(__props.user.email_verified_at)), 1)
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                              if (__props.user.activation_token_expires_at) {
                                _push5(ssrRenderComponent(unref(VListItem), null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(unref(VListItemTitle), null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`Token Expira`);
                                          } else {
                                            return [
                                              createTextVNode("Token Expira")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(unref(VListItemSubtitle), null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(formatDateTime(__props.user.activation_token_expires_at))}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(formatDateTime(__props.user.activation_token_expires_at)), 1)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(unref(VListItemTitle), null, {
                                          default: withCtx(() => [
                                            createTextVNode("Token Expira")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(VListItemSubtitle), null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(formatDateTime(__props.user.activation_token_expires_at)), 1)
                                          ]),
                                          _: 1
                                        })
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
                                createVNode(unref(VListItem), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(VListItemTitle), null, {
                                      default: withCtx(() => [
                                        createTextVNode("Estado del Perfil")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(VListItemSubtitle), null, {
                                      default: withCtx(() => [
                                        createVNode(unref(VChip), {
                                          color: statusColors[__props.user.profile_status] || "default",
                                          size: "small",
                                          variant: "tonal"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(statusLabels[__props.user.profile_status] || __props.user.profile_status), 1)
                                          ]),
                                          _: 1
                                        }, 8, ["color"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(VListItem), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(VListItemTitle), null, {
                                      default: withCtx(() => [
                                        createTextVNode("Verificación Profetit")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(VListItemSubtitle), null, {
                                      default: withCtx(() => [
                                        createVNode(unref(VChip), {
                                          color: __props.user.profetit_verified ? "success" : "error",
                                          size: "small",
                                          variant: "tonal"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(__props.user.profetit_verified ? "Verificado" : "No verificado"), 1)
                                          ]),
                                          _: 1
                                        }, 8, ["color"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                __props.user.profetit_certificate_type ? (openBlock(), createBlock(unref(VListItem), { key: 0 }, {
                                  default: withCtx(() => [
                                    createVNode(unref(VListItemTitle), null, {
                                      default: withCtx(() => [
                                        createTextVNode("Tipo de Certificado")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(VListItemSubtitle), null, {
                                      default: withCtx(() => [
                                        createVNode(_sfc_main$2, {
                                          badge: {
                                            type: __props.user.profetit_certificate_type,
                                            label: __props.user.profetit_certificate_type === "titulo_oficial" ? "Título Oficial" : "Testimonio de Estudios",
                                            icon: __props.user.profetit_certificate_type === "titulo_oficial" ? "mdi-certificate" : "mdi-file-document-check",
                                            color: __props.user.profetit_certificate_type === "titulo_oficial" ? "primary" : "info",
                                            code: __props.user.profetit_code
                                          },
                                          size: "small"
                                        }, null, 8, ["badge"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true),
                                __props.user.profetit_code ? (openBlock(), createBlock(unref(VListItem), { key: 1 }, {
                                  default: withCtx(() => [
                                    createVNode(unref(VListItemTitle), null, {
                                      default: withCtx(() => [
                                        createTextVNode("Código Profetit")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(VListItemSubtitle), { class: "font-monospace" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(__props.user.profetit_code), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true),
                                createVNode(unref(VListItem), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(VListItemTitle), null, {
                                      default: withCtx(() => [
                                        createTextVNode("Fecha de Registro")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(VListItemSubtitle), null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(formatDateTime(__props.user.created_at)), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                __props.user.email_verified_at ? (openBlock(), createBlock(unref(VListItem), { key: 2 }, {
                                  default: withCtx(() => [
                                    createVNode(unref(VListItemTitle), null, {
                                      default: withCtx(() => [
                                        createTextVNode("Email Verificado")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(VListItemSubtitle), null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(formatDateTime(__props.user.email_verified_at)), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true),
                                __props.user.activation_token_expires_at ? (openBlock(), createBlock(unref(VListItem), { key: 3 }, {
                                  default: withCtx(() => [
                                    createVNode(unref(VListItemTitle), null, {
                                      default: withCtx(() => [
                                        createTextVNode("Token Expira")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(VListItemSubtitle), null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(formatDateTime(__props.user.activation_token_expires_at)), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("div", { class: "d-flex align-center gap-4 mb-4" }, [
                            createVNode(unref(VAvatar), {
                              size: "80",
                              color: "primary",
                              variant: "tonal"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(VIcon), { size: "x-large" }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-account")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode("div", null, [
                              createVNode("div", { class: "text-h6 mb-1" }, toDisplayString(__props.user.name), 1),
                              createVNode("div", { class: "text-secondary" }, toDisplayString(__props.user.email), 1),
                              __props.user.profitit_verified ? (openBlock(), createBlock(_sfc_main$2, {
                                key: 0,
                                badge: {
                                  type: __props.user.profetit_certificate_type,
                                  label: __props.user.profetit_certificate_type === "titulo_oficial" ? "Título Oficial" : "Testimonio de Estudios",
                                  icon: __props.user.profetit_certificate_type === "titulo_oficial" ? "mdi-certificate" : "mdi-file-document-check",
                                  color: __props.user.profetit_certificate_type === "titulo_oficial" ? "primary" : "info",
                                  code: __props.user.profetit_code
                                }
                              }, null, 8, ["badge"])) : createCommentVNode("", true)
                            ])
                          ]),
                          createVNode(unref(VDivider), { class: "my-4" }),
                          createVNode(unref(VList), null, {
                            default: withCtx(() => [
                              createVNode(unref(VListItem), null, {
                                default: withCtx(() => [
                                  createVNode(unref(VListItemTitle), null, {
                                    default: withCtx(() => [
                                      createTextVNode("Estado del Perfil")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(VListItemSubtitle), null, {
                                    default: withCtx(() => [
                                      createVNode(unref(VChip), {
                                        color: statusColors[__props.user.profile_status] || "default",
                                        size: "small",
                                        variant: "tonal"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(statusLabels[__props.user.profile_status] || __props.user.profile_status), 1)
                                        ]),
                                        _: 1
                                      }, 8, ["color"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(unref(VListItem), null, {
                                default: withCtx(() => [
                                  createVNode(unref(VListItemTitle), null, {
                                    default: withCtx(() => [
                                      createTextVNode("Verificación Profetit")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(VListItemSubtitle), null, {
                                    default: withCtx(() => [
                                      createVNode(unref(VChip), {
                                        color: __props.user.profetit_verified ? "success" : "error",
                                        size: "small",
                                        variant: "tonal"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(__props.user.profetit_verified ? "Verificado" : "No verificado"), 1)
                                        ]),
                                        _: 1
                                      }, 8, ["color"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              __props.user.profetit_certificate_type ? (openBlock(), createBlock(unref(VListItem), { key: 0 }, {
                                default: withCtx(() => [
                                  createVNode(unref(VListItemTitle), null, {
                                    default: withCtx(() => [
                                      createTextVNode("Tipo de Certificado")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(VListItemSubtitle), null, {
                                    default: withCtx(() => [
                                      createVNode(_sfc_main$2, {
                                        badge: {
                                          type: __props.user.profetit_certificate_type,
                                          label: __props.user.profetit_certificate_type === "titulo_oficial" ? "Título Oficial" : "Testimonio de Estudios",
                                          icon: __props.user.profetit_certificate_type === "titulo_oficial" ? "mdi-certificate" : "mdi-file-document-check",
                                          color: __props.user.profetit_certificate_type === "titulo_oficial" ? "primary" : "info",
                                          code: __props.user.profetit_code
                                        },
                                        size: "small"
                                      }, null, 8, ["badge"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })) : createCommentVNode("", true),
                              __props.user.profetit_code ? (openBlock(), createBlock(unref(VListItem), { key: 1 }, {
                                default: withCtx(() => [
                                  createVNode(unref(VListItemTitle), null, {
                                    default: withCtx(() => [
                                      createTextVNode("Código Profetit")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(VListItemSubtitle), { class: "font-monospace" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(__props.user.profetit_code), 1)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })) : createCommentVNode("", true),
                              createVNode(unref(VListItem), null, {
                                default: withCtx(() => [
                                  createVNode(unref(VListItemTitle), null, {
                                    default: withCtx(() => [
                                      createTextVNode("Fecha de Registro")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(VListItemSubtitle), null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(formatDateTime(__props.user.created_at)), 1)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              __props.user.email_verified_at ? (openBlock(), createBlock(unref(VListItem), { key: 2 }, {
                                default: withCtx(() => [
                                  createVNode(unref(VListItemTitle), null, {
                                    default: withCtx(() => [
                                      createTextVNode("Email Verificado")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(VListItemSubtitle), null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(formatDateTime(__props.user.email_verified_at)), 1)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })) : createCommentVNode("", true),
                              __props.user.activation_token_expires_at ? (openBlock(), createBlock(unref(VListItem), { key: 3 }, {
                                default: withCtx(() => [
                                  createVNode(unref(VListItemTitle), null, {
                                    default: withCtx(() => [
                                      createTextVNode("Token Expira")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(VListItemSubtitle), null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(formatDateTime(__props.user.activation_token_expires_at)), 1)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })) : createCommentVNode("", true)
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
                    createVNode(unref(VCardTitle), null, {
                      default: withCtx(() => [
                        createTextVNode("Información del Usuario")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(VCardText), null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "d-flex align-center gap-4 mb-4" }, [
                          createVNode(unref(VAvatar), {
                            size: "80",
                            color: "primary",
                            variant: "tonal"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(VIcon), { size: "x-large" }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-account")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode("div", null, [
                            createVNode("div", { class: "text-h6 mb-1" }, toDisplayString(__props.user.name), 1),
                            createVNode("div", { class: "text-secondary" }, toDisplayString(__props.user.email), 1),
                            __props.user.profitit_verified ? (openBlock(), createBlock(_sfc_main$2, {
                              key: 0,
                              badge: {
                                type: __props.user.profetit_certificate_type,
                                label: __props.user.profetit_certificate_type === "titulo_oficial" ? "Título Oficial" : "Testimonio de Estudios",
                                icon: __props.user.profetit_certificate_type === "titulo_oficial" ? "mdi-certificate" : "mdi-file-document-check",
                                color: __props.user.profetit_certificate_type === "titulo_oficial" ? "primary" : "info",
                                code: __props.user.profetit_code
                              }
                            }, null, 8, ["badge"])) : createCommentVNode("", true)
                          ])
                        ]),
                        createVNode(unref(VDivider), { class: "my-4" }),
                        createVNode(unref(VList), null, {
                          default: withCtx(() => [
                            createVNode(unref(VListItem), null, {
                              default: withCtx(() => [
                                createVNode(unref(VListItemTitle), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Estado del Perfil")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(VListItemSubtitle), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(VChip), {
                                      color: statusColors[__props.user.profile_status] || "default",
                                      size: "small",
                                      variant: "tonal"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(statusLabels[__props.user.profile_status] || __props.user.profile_status), 1)
                                      ]),
                                      _: 1
                                    }, 8, ["color"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(unref(VListItem), null, {
                              default: withCtx(() => [
                                createVNode(unref(VListItemTitle), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Verificación Profetit")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(VListItemSubtitle), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(VChip), {
                                      color: __props.user.profetit_verified ? "success" : "error",
                                      size: "small",
                                      variant: "tonal"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(__props.user.profetit_verified ? "Verificado" : "No verificado"), 1)
                                      ]),
                                      _: 1
                                    }, 8, ["color"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            __props.user.profetit_certificate_type ? (openBlock(), createBlock(unref(VListItem), { key: 0 }, {
                              default: withCtx(() => [
                                createVNode(unref(VListItemTitle), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Tipo de Certificado")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(VListItemSubtitle), null, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$2, {
                                      badge: {
                                        type: __props.user.profetit_certificate_type,
                                        label: __props.user.profetit_certificate_type === "titulo_oficial" ? "Título Oficial" : "Testimonio de Estudios",
                                        icon: __props.user.profetit_certificate_type === "titulo_oficial" ? "mdi-certificate" : "mdi-file-document-check",
                                        color: __props.user.profetit_certificate_type === "titulo_oficial" ? "primary" : "info",
                                        code: __props.user.profetit_code
                                      },
                                      size: "small"
                                    }, null, 8, ["badge"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })) : createCommentVNode("", true),
                            __props.user.profetit_code ? (openBlock(), createBlock(unref(VListItem), { key: 1 }, {
                              default: withCtx(() => [
                                createVNode(unref(VListItemTitle), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Código Profetit")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(VListItemSubtitle), { class: "font-monospace" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(__props.user.profetit_code), 1)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })) : createCommentVNode("", true),
                            createVNode(unref(VListItem), null, {
                              default: withCtx(() => [
                                createVNode(unref(VListItemTitle), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Fecha de Registro")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(VListItemSubtitle), null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(formatDateTime(__props.user.created_at)), 1)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            __props.user.email_verified_at ? (openBlock(), createBlock(unref(VListItem), { key: 2 }, {
                              default: withCtx(() => [
                                createVNode(unref(VListItemTitle), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Email Verificado")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(VListItemSubtitle), null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(formatDateTime(__props.user.email_verified_at)), 1)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })) : createCommentVNode("", true),
                            __props.user.activation_token_expires_at ? (openBlock(), createBlock(unref(VListItem), { key: 3 }, {
                              default: withCtx(() => [
                                createVNode(unref(VListItemTitle), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Token Expira")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(VListItemSubtitle), null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(formatDateTime(__props.user.activation_token_expires_at)), 1)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
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
            _push2(ssrRenderComponent(unref(VCard), {
              variant: "tonal",
              class: "flex-grow-1",
              "min-width": "400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(VCardTitle), { class: "d-flex justify-space-between align-center" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span${_scopeId3}>Certificados Profetit</span>`);
                        _push4(ssrRenderComponent(unref(VChip), {
                          size: "x-small",
                          color: __props.certificates.length > 0 ? "primary" : "surface-variant"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(__props.certificates.length)} certificado(s) `);
                            } else {
                              return [
                                createTextVNode(toDisplayString(__props.certificates.length) + " certificado(s) ", 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("span", null, "Certificados Profetit"),
                          createVNode(unref(VChip), {
                            size: "x-small",
                            color: __props.certificates.length > 0 ? "primary" : "surface-variant"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(__props.certificates.length) + " certificado(s) ", 1)
                            ]),
                            _: 1
                          }, 8, ["color"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(VCardText), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (__props.certificates.length === 0) {
                          _push4(`<div class="text-center py-12"${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(VIcon), {
                            size: "x-large",
                            color: "secondary"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`mdi-certificate-outline`);
                              } else {
                                return [
                                  createTextVNode("mdi-certificate-outline")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`<p class="mt-4 text-secondary"${_scopeId3}>No hay certificados registrados</p></div>`);
                        } else {
                          _push4(`<div class="d-flex flex-column gap-4"${_scopeId3}><!--[-->`);
                          ssrRenderList(__props.certificates, (cert) => {
                            _push4(ssrRenderComponent(unref(VCard), {
                              key: cert.id,
                              variant: "outlined"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(unref(VCardText), null, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`<div class="d-flex justify-space-between align-start"${_scopeId5}><div${_scopeId5}>`);
                                        _push6(ssrRenderComponent(_sfc_main$2, {
                                          badge: {
                                            type: cert.certificate_type,
                                            label: cert.certificate_type === "titulo_oficial" ? "Título Oficial" : "Testimonio de Estudios",
                                            icon: cert.certificate_type === "titulo_oficial" ? "mdi-certificate" : "mdi-file-document-check",
                                            color: cert.certificate_type === "titulo_oficial" ? "primary" : "info",
                                            code: cert.certificate_code
                                          }
                                        }, null, _parent6, _scopeId5));
                                        _push6(`</div>`);
                                        _push6(ssrRenderComponent(unref(VChip), {
                                          color: certificateStatusColors[cert.status] || "default",
                                          size: "small",
                                          variant: "tonal"
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(certificateStatusLabels[cert.status] || cert.status)}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(certificateStatusLabels[cert.status] || cert.status), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(`</div>`);
                                        _push6(ssrRenderComponent(unref(VDivider), { class: "my-3" }, null, _parent6, _scopeId5));
                                        _push6(`<div class="d-flex flex-wrap gap-6 text-caption"${_scopeId5}><div${_scopeId5}><span class="text-secondary"${_scopeId5}>Código:</span><div class="font-monospace"${_scopeId5}>${ssrInterpolate(cert.certificate_code)}</div></div><div${_scopeId5}><span class="text-secondary"${_scopeId5}>Fecha de Emisión:</span><div${_scopeId5}>${ssrInterpolate(formatDate(cert.issue_date))}</div></div>`);
                                        if (cert.revoked_at) {
                                          _push6(`<div${_scopeId5}><span class="text-secondary"${_scopeId5}>Revocado:</span><div${_scopeId5}>${ssrInterpolate(formatDateTime(cert.revoked_at))}</div></div>`);
                                        } else {
                                          _push6(`<!---->`);
                                        }
                                        if (cert.expires_at) {
                                          _push6(`<div${_scopeId5}><span class="text-secondary"${_scopeId5}>Expira:</span><div${_scopeId5}>${ssrInterpolate(formatDateTime(cert.expires_at))}</div></div>`);
                                        } else {
                                          _push6(`<!---->`);
                                        }
                                        _push6(`</div>`);
                                        if (cert.raw_payload) {
                                          _push6(ssrRenderComponent(unref(VTooltip), {
                                            location: "top",
                                            content: "Ver payload completo"
                                          }, {
                                            activator: withCtx(({ props: tooltipProps }, _push7, _parent7, _scopeId6) => {
                                              if (_push7) {
                                                _push7(ssrRenderComponent(unref(VBtn), mergeProps({ ref_for: true }, tooltipProps, {
                                                  variant: "text",
                                                  size: "small",
                                                  color: "secondary"
                                                }), {
                                                  default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                                    if (_push8) {
                                                      _push8(ssrRenderComponent(unref(VIcon), { start: "" }, {
                                                        default: withCtx((_7, _push9, _parent9, _scopeId8) => {
                                                          if (_push9) {
                                                            _push9(`mdi-code-json`);
                                                          } else {
                                                            return [
                                                              createTextVNode("mdi-code-json")
                                                            ];
                                                          }
                                                        }),
                                                        _: 2
                                                      }, _parent8, _scopeId7));
                                                      _push8(` Ver Auditoría `);
                                                    } else {
                                                      return [
                                                        createVNode(unref(VIcon), { start: "" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("mdi-code-json")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createTextVNode(" Ver Auditoría ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 2
                                                }, _parent7, _scopeId6));
                                              } else {
                                                return [
                                                  createVNode(unref(VBtn), mergeProps({ ref_for: true }, tooltipProps, {
                                                    variant: "text",
                                                    size: "small",
                                                    color: "secondary"
                                                  }), {
                                                    default: withCtx(() => [
                                                      createVNode(unref(VIcon), { start: "" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("mdi-code-json")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createTextVNode(" Ver Auditoría ")
                                                    ]),
                                                    _: 1
                                                  }, 16)
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent6, _scopeId5));
                                        } else {
                                          _push6(`<!---->`);
                                        }
                                      } else {
                                        return [
                                          createVNode("div", { class: "d-flex justify-space-between align-start" }, [
                                            createVNode("div", null, [
                                              createVNode(_sfc_main$2, {
                                                badge: {
                                                  type: cert.certificate_type,
                                                  label: cert.certificate_type === "titulo_oficial" ? "Título Oficial" : "Testimonio de Estudios",
                                                  icon: cert.certificate_type === "titulo_oficial" ? "mdi-certificate" : "mdi-file-document-check",
                                                  color: cert.certificate_type === "titulo_oficial" ? "primary" : "info",
                                                  code: cert.certificate_code
                                                }
                                              }, null, 8, ["badge"])
                                            ]),
                                            createVNode(unref(VChip), {
                                              color: certificateStatusColors[cert.status] || "default",
                                              size: "small",
                                              variant: "tonal"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(certificateStatusLabels[cert.status] || cert.status), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["color"])
                                          ]),
                                          createVNode(unref(VDivider), { class: "my-3" }),
                                          createVNode("div", { class: "d-flex flex-wrap gap-6 text-caption" }, [
                                            createVNode("div", null, [
                                              createVNode("span", { class: "text-secondary" }, "Código:"),
                                              createVNode("div", { class: "font-monospace" }, toDisplayString(cert.certificate_code), 1)
                                            ]),
                                            createVNode("div", null, [
                                              createVNode("span", { class: "text-secondary" }, "Fecha de Emisión:"),
                                              createVNode("div", null, toDisplayString(formatDate(cert.issue_date)), 1)
                                            ]),
                                            cert.revoked_at ? (openBlock(), createBlock("div", { key: 0 }, [
                                              createVNode("span", { class: "text-secondary" }, "Revocado:"),
                                              createVNode("div", null, toDisplayString(formatDateTime(cert.revoked_at)), 1)
                                            ])) : createCommentVNode("", true),
                                            cert.expires_at ? (openBlock(), createBlock("div", { key: 1 }, [
                                              createVNode("span", { class: "text-secondary" }, "Expira:"),
                                              createVNode("div", null, toDisplayString(formatDateTime(cert.expires_at)), 1)
                                            ])) : createCommentVNode("", true)
                                          ]),
                                          cert.raw_payload ? (openBlock(), createBlock(unref(VTooltip), {
                                            key: 0,
                                            location: "top",
                                            content: "Ver payload completo"
                                          }, {
                                            activator: withCtx(({ props: tooltipProps }) => [
                                              createVNode(unref(VBtn), mergeProps({ ref_for: true }, tooltipProps, {
                                                variant: "text",
                                                size: "small",
                                                color: "secondary"
                                              }), {
                                                default: withCtx(() => [
                                                  createVNode(unref(VIcon), { start: "" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("mdi-code-json")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createTextVNode(" Ver Auditoría ")
                                                ]),
                                                _: 1
                                              }, 16)
                                            ]),
                                            _: 1
                                          })) : createCommentVNode("", true)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(unref(VCardText), null, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "d-flex justify-space-between align-start" }, [
                                          createVNode("div", null, [
                                            createVNode(_sfc_main$2, {
                                              badge: {
                                                type: cert.certificate_type,
                                                label: cert.certificate_type === "titulo_oficial" ? "Título Oficial" : "Testimonio de Estudios",
                                                icon: cert.certificate_type === "titulo_oficial" ? "mdi-certificate" : "mdi-file-document-check",
                                                color: cert.certificate_type === "titulo_oficial" ? "primary" : "info",
                                                code: cert.certificate_code
                                              }
                                            }, null, 8, ["badge"])
                                          ]),
                                          createVNode(unref(VChip), {
                                            color: certificateStatusColors[cert.status] || "default",
                                            size: "small",
                                            variant: "tonal"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(certificateStatusLabels[cert.status] || cert.status), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["color"])
                                        ]),
                                        createVNode(unref(VDivider), { class: "my-3" }),
                                        createVNode("div", { class: "d-flex flex-wrap gap-6 text-caption" }, [
                                          createVNode("div", null, [
                                            createVNode("span", { class: "text-secondary" }, "Código:"),
                                            createVNode("div", { class: "font-monospace" }, toDisplayString(cert.certificate_code), 1)
                                          ]),
                                          createVNode("div", null, [
                                            createVNode("span", { class: "text-secondary" }, "Fecha de Emisión:"),
                                            createVNode("div", null, toDisplayString(formatDate(cert.issue_date)), 1)
                                          ]),
                                          cert.revoked_at ? (openBlock(), createBlock("div", { key: 0 }, [
                                            createVNode("span", { class: "text-secondary" }, "Revocado:"),
                                            createVNode("div", null, toDisplayString(formatDateTime(cert.revoked_at)), 1)
                                          ])) : createCommentVNode("", true),
                                          cert.expires_at ? (openBlock(), createBlock("div", { key: 1 }, [
                                            createVNode("span", { class: "text-secondary" }, "Expira:"),
                                            createVNode("div", null, toDisplayString(formatDateTime(cert.expires_at)), 1)
                                          ])) : createCommentVNode("", true)
                                        ]),
                                        cert.raw_payload ? (openBlock(), createBlock(unref(VTooltip), {
                                          key: 0,
                                          location: "top",
                                          content: "Ver payload completo"
                                        }, {
                                          activator: withCtx(({ props: tooltipProps }) => [
                                            createVNode(unref(VBtn), mergeProps({ ref_for: true }, tooltipProps, {
                                              variant: "text",
                                              size: "small",
                                              color: "secondary"
                                            }), {
                                              default: withCtx(() => [
                                                createVNode(unref(VIcon), { start: "" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-code-json")
                                                  ]),
                                                  _: 1
                                                }),
                                                createTextVNode(" Ver Auditoría ")
                                              ]),
                                              _: 1
                                            }, 16)
                                          ]),
                                          _: 1
                                        })) : createCommentVNode("", true)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]--></div>`);
                        }
                      } else {
                        return [
                          __props.certificates.length === 0 ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "text-center py-12"
                          }, [
                            createVNode(unref(VIcon), {
                              size: "x-large",
                              color: "secondary"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-certificate-outline")
                              ]),
                              _: 1
                            }),
                            createVNode("p", { class: "mt-4 text-secondary" }, "No hay certificados registrados")
                          ])) : (openBlock(), createBlock("div", {
                            key: 1,
                            class: "d-flex flex-column gap-4"
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.certificates, (cert) => {
                              return openBlock(), createBlock(unref(VCard), {
                                key: cert.id,
                                variant: "outlined"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(VCardText), null, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "d-flex justify-space-between align-start" }, [
                                        createVNode("div", null, [
                                          createVNode(_sfc_main$2, {
                                            badge: {
                                              type: cert.certificate_type,
                                              label: cert.certificate_type === "titulo_oficial" ? "Título Oficial" : "Testimonio de Estudios",
                                              icon: cert.certificate_type === "titulo_oficial" ? "mdi-certificate" : "mdi-file-document-check",
                                              color: cert.certificate_type === "titulo_oficial" ? "primary" : "info",
                                              code: cert.certificate_code
                                            }
                                          }, null, 8, ["badge"])
                                        ]),
                                        createVNode(unref(VChip), {
                                          color: certificateStatusColors[cert.status] || "default",
                                          size: "small",
                                          variant: "tonal"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(certificateStatusLabels[cert.status] || cert.status), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["color"])
                                      ]),
                                      createVNode(unref(VDivider), { class: "my-3" }),
                                      createVNode("div", { class: "d-flex flex-wrap gap-6 text-caption" }, [
                                        createVNode("div", null, [
                                          createVNode("span", { class: "text-secondary" }, "Código:"),
                                          createVNode("div", { class: "font-monospace" }, toDisplayString(cert.certificate_code), 1)
                                        ]),
                                        createVNode("div", null, [
                                          createVNode("span", { class: "text-secondary" }, "Fecha de Emisión:"),
                                          createVNode("div", null, toDisplayString(formatDate(cert.issue_date)), 1)
                                        ]),
                                        cert.revoked_at ? (openBlock(), createBlock("div", { key: 0 }, [
                                          createVNode("span", { class: "text-secondary" }, "Revocado:"),
                                          createVNode("div", null, toDisplayString(formatDateTime(cert.revoked_at)), 1)
                                        ])) : createCommentVNode("", true),
                                        cert.expires_at ? (openBlock(), createBlock("div", { key: 1 }, [
                                          createVNode("span", { class: "text-secondary" }, "Expira:"),
                                          createVNode("div", null, toDisplayString(formatDateTime(cert.expires_at)), 1)
                                        ])) : createCommentVNode("", true)
                                      ]),
                                      cert.raw_payload ? (openBlock(), createBlock(unref(VTooltip), {
                                        key: 0,
                                        location: "top",
                                        content: "Ver payload completo"
                                      }, {
                                        activator: withCtx(({ props: tooltipProps }) => [
                                          createVNode(unref(VBtn), mergeProps({ ref_for: true }, tooltipProps, {
                                            variant: "text",
                                            size: "small",
                                            color: "secondary"
                                          }), {
                                            default: withCtx(() => [
                                              createVNode(unref(VIcon), { start: "" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-code-json")
                                                ]),
                                                _: 1
                                              }),
                                              createTextVNode(" Ver Auditoría ")
                                            ]),
                                            _: 1
                                          }, 16)
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ]))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(VCardTitle), { class: "d-flex justify-space-between align-center" }, {
                      default: withCtx(() => [
                        createVNode("span", null, "Certificados Profetit"),
                        createVNode(unref(VChip), {
                          size: "x-small",
                          color: __props.certificates.length > 0 ? "primary" : "surface-variant"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(__props.certificates.length) + " certificado(s) ", 1)
                          ]),
                          _: 1
                        }, 8, ["color"])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(VCardText), null, {
                      default: withCtx(() => [
                        __props.certificates.length === 0 ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "text-center py-12"
                        }, [
                          createVNode(unref(VIcon), {
                            size: "x-large",
                            color: "secondary"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-certificate-outline")
                            ]),
                            _: 1
                          }),
                          createVNode("p", { class: "mt-4 text-secondary" }, "No hay certificados registrados")
                        ])) : (openBlock(), createBlock("div", {
                          key: 1,
                          class: "d-flex flex-column gap-4"
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.certificates, (cert) => {
                            return openBlock(), createBlock(unref(VCard), {
                              key: cert.id,
                              variant: "outlined"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(VCardText), null, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "d-flex justify-space-between align-start" }, [
                                      createVNode("div", null, [
                                        createVNode(_sfc_main$2, {
                                          badge: {
                                            type: cert.certificate_type,
                                            label: cert.certificate_type === "titulo_oficial" ? "Título Oficial" : "Testimonio de Estudios",
                                            icon: cert.certificate_type === "titulo_oficial" ? "mdi-certificate" : "mdi-file-document-check",
                                            color: cert.certificate_type === "titulo_oficial" ? "primary" : "info",
                                            code: cert.certificate_code
                                          }
                                        }, null, 8, ["badge"])
                                      ]),
                                      createVNode(unref(VChip), {
                                        color: certificateStatusColors[cert.status] || "default",
                                        size: "small",
                                        variant: "tonal"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(certificateStatusLabels[cert.status] || cert.status), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["color"])
                                    ]),
                                    createVNode(unref(VDivider), { class: "my-3" }),
                                    createVNode("div", { class: "d-flex flex-wrap gap-6 text-caption" }, [
                                      createVNode("div", null, [
                                        createVNode("span", { class: "text-secondary" }, "Código:"),
                                        createVNode("div", { class: "font-monospace" }, toDisplayString(cert.certificate_code), 1)
                                      ]),
                                      createVNode("div", null, [
                                        createVNode("span", { class: "text-secondary" }, "Fecha de Emisión:"),
                                        createVNode("div", null, toDisplayString(formatDate(cert.issue_date)), 1)
                                      ]),
                                      cert.revoked_at ? (openBlock(), createBlock("div", { key: 0 }, [
                                        createVNode("span", { class: "text-secondary" }, "Revocado:"),
                                        createVNode("div", null, toDisplayString(formatDateTime(cert.revoked_at)), 1)
                                      ])) : createCommentVNode("", true),
                                      cert.expires_at ? (openBlock(), createBlock("div", { key: 1 }, [
                                        createVNode("span", { class: "text-secondary" }, "Expira:"),
                                        createVNode("div", null, toDisplayString(formatDateTime(cert.expires_at)), 1)
                                      ])) : createCommentVNode("", true)
                                    ]),
                                    cert.raw_payload ? (openBlock(), createBlock(unref(VTooltip), {
                                      key: 0,
                                      location: "top",
                                      content: "Ver payload completo"
                                    }, {
                                      activator: withCtx(({ props: tooltipProps }) => [
                                        createVNode(unref(VBtn), mergeProps({ ref_for: true }, tooltipProps, {
                                          variant: "text",
                                          size: "small",
                                          color: "secondary"
                                        }), {
                                          default: withCtx(() => [
                                            createVNode(unref(VIcon), { start: "" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-code-json")
                                              ]),
                                              _: 1
                                            }),
                                            createTextVNode(" Ver Auditoría ")
                                          ]),
                                          _: 1
                                        }, 16)
                                      ]),
                                      _: 1
                                    })) : createCommentVNode("", true)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]))
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex gap-6" }, [
                createVNode(unref(VCard), {
                  variant: "tonal",
                  class: "flex-grow-1",
                  "min-width": "350"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(VCardTitle), null, {
                      default: withCtx(() => [
                        createTextVNode("Información del Usuario")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(VCardText), null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "d-flex align-center gap-4 mb-4" }, [
                          createVNode(unref(VAvatar), {
                            size: "80",
                            color: "primary",
                            variant: "tonal"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(VIcon), { size: "x-large" }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-account")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode("div", null, [
                            createVNode("div", { class: "text-h6 mb-1" }, toDisplayString(__props.user.name), 1),
                            createVNode("div", { class: "text-secondary" }, toDisplayString(__props.user.email), 1),
                            __props.user.profitit_verified ? (openBlock(), createBlock(_sfc_main$2, {
                              key: 0,
                              badge: {
                                type: __props.user.profetit_certificate_type,
                                label: __props.user.profetit_certificate_type === "titulo_oficial" ? "Título Oficial" : "Testimonio de Estudios",
                                icon: __props.user.profetit_certificate_type === "titulo_oficial" ? "mdi-certificate" : "mdi-file-document-check",
                                color: __props.user.profetit_certificate_type === "titulo_oficial" ? "primary" : "info",
                                code: __props.user.profetit_code
                              }
                            }, null, 8, ["badge"])) : createCommentVNode("", true)
                          ])
                        ]),
                        createVNode(unref(VDivider), { class: "my-4" }),
                        createVNode(unref(VList), null, {
                          default: withCtx(() => [
                            createVNode(unref(VListItem), null, {
                              default: withCtx(() => [
                                createVNode(unref(VListItemTitle), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Estado del Perfil")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(VListItemSubtitle), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(VChip), {
                                      color: statusColors[__props.user.profile_status] || "default",
                                      size: "small",
                                      variant: "tonal"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(statusLabels[__props.user.profile_status] || __props.user.profile_status), 1)
                                      ]),
                                      _: 1
                                    }, 8, ["color"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(unref(VListItem), null, {
                              default: withCtx(() => [
                                createVNode(unref(VListItemTitle), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Verificación Profetit")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(VListItemSubtitle), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(VChip), {
                                      color: __props.user.profetit_verified ? "success" : "error",
                                      size: "small",
                                      variant: "tonal"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(__props.user.profetit_verified ? "Verificado" : "No verificado"), 1)
                                      ]),
                                      _: 1
                                    }, 8, ["color"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            __props.user.profetit_certificate_type ? (openBlock(), createBlock(unref(VListItem), { key: 0 }, {
                              default: withCtx(() => [
                                createVNode(unref(VListItemTitle), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Tipo de Certificado")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(VListItemSubtitle), null, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$2, {
                                      badge: {
                                        type: __props.user.profetit_certificate_type,
                                        label: __props.user.profetit_certificate_type === "titulo_oficial" ? "Título Oficial" : "Testimonio de Estudios",
                                        icon: __props.user.profetit_certificate_type === "titulo_oficial" ? "mdi-certificate" : "mdi-file-document-check",
                                        color: __props.user.profetit_certificate_type === "titulo_oficial" ? "primary" : "info",
                                        code: __props.user.profetit_code
                                      },
                                      size: "small"
                                    }, null, 8, ["badge"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })) : createCommentVNode("", true),
                            __props.user.profetit_code ? (openBlock(), createBlock(unref(VListItem), { key: 1 }, {
                              default: withCtx(() => [
                                createVNode(unref(VListItemTitle), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Código Profetit")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(VListItemSubtitle), { class: "font-monospace" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(__props.user.profetit_code), 1)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })) : createCommentVNode("", true),
                            createVNode(unref(VListItem), null, {
                              default: withCtx(() => [
                                createVNode(unref(VListItemTitle), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Fecha de Registro")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(VListItemSubtitle), null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(formatDateTime(__props.user.created_at)), 1)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            __props.user.email_verified_at ? (openBlock(), createBlock(unref(VListItem), { key: 2 }, {
                              default: withCtx(() => [
                                createVNode(unref(VListItemTitle), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Email Verificado")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(VListItemSubtitle), null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(formatDateTime(__props.user.email_verified_at)), 1)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })) : createCommentVNode("", true),
                            __props.user.activation_token_expires_at ? (openBlock(), createBlock(unref(VListItem), { key: 3 }, {
                              default: withCtx(() => [
                                createVNode(unref(VListItemTitle), null, {
                                  default: withCtx(() => [
                                    createTextVNode("Token Expira")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(VListItemSubtitle), null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(formatDateTime(__props.user.activation_token_expires_at)), 1)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(unref(VCard), {
                  variant: "tonal",
                  class: "flex-grow-1",
                  "min-width": "400"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(VCardTitle), { class: "d-flex justify-space-between align-center" }, {
                      default: withCtx(() => [
                        createVNode("span", null, "Certificados Profetit"),
                        createVNode(unref(VChip), {
                          size: "x-small",
                          color: __props.certificates.length > 0 ? "primary" : "surface-variant"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(__props.certificates.length) + " certificado(s) ", 1)
                          ]),
                          _: 1
                        }, 8, ["color"])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(VCardText), null, {
                      default: withCtx(() => [
                        __props.certificates.length === 0 ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "text-center py-12"
                        }, [
                          createVNode(unref(VIcon), {
                            size: "x-large",
                            color: "secondary"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-certificate-outline")
                            ]),
                            _: 1
                          }),
                          createVNode("p", { class: "mt-4 text-secondary" }, "No hay certificados registrados")
                        ])) : (openBlock(), createBlock("div", {
                          key: 1,
                          class: "d-flex flex-column gap-4"
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.certificates, (cert) => {
                            return openBlock(), createBlock(unref(VCard), {
                              key: cert.id,
                              variant: "outlined"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(VCardText), null, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "d-flex justify-space-between align-start" }, [
                                      createVNode("div", null, [
                                        createVNode(_sfc_main$2, {
                                          badge: {
                                            type: cert.certificate_type,
                                            label: cert.certificate_type === "titulo_oficial" ? "Título Oficial" : "Testimonio de Estudios",
                                            icon: cert.certificate_type === "titulo_oficial" ? "mdi-certificate" : "mdi-file-document-check",
                                            color: cert.certificate_type === "titulo_oficial" ? "primary" : "info",
                                            code: cert.certificate_code
                                          }
                                        }, null, 8, ["badge"])
                                      ]),
                                      createVNode(unref(VChip), {
                                        color: certificateStatusColors[cert.status] || "default",
                                        size: "small",
                                        variant: "tonal"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(certificateStatusLabels[cert.status] || cert.status), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["color"])
                                    ]),
                                    createVNode(unref(VDivider), { class: "my-3" }),
                                    createVNode("div", { class: "d-flex flex-wrap gap-6 text-caption" }, [
                                      createVNode("div", null, [
                                        createVNode("span", { class: "text-secondary" }, "Código:"),
                                        createVNode("div", { class: "font-monospace" }, toDisplayString(cert.certificate_code), 1)
                                      ]),
                                      createVNode("div", null, [
                                        createVNode("span", { class: "text-secondary" }, "Fecha de Emisión:"),
                                        createVNode("div", null, toDisplayString(formatDate(cert.issue_date)), 1)
                                      ]),
                                      cert.revoked_at ? (openBlock(), createBlock("div", { key: 0 }, [
                                        createVNode("span", { class: "text-secondary" }, "Revocado:"),
                                        createVNode("div", null, toDisplayString(formatDateTime(cert.revoked_at)), 1)
                                      ])) : createCommentVNode("", true),
                                      cert.expires_at ? (openBlock(), createBlock("div", { key: 1 }, [
                                        createVNode("span", { class: "text-secondary" }, "Expira:"),
                                        createVNode("div", null, toDisplayString(formatDateTime(cert.expires_at)), 1)
                                      ])) : createCommentVNode("", true)
                                    ]),
                                    cert.raw_payload ? (openBlock(), createBlock(unref(VTooltip), {
                                      key: 0,
                                      location: "top",
                                      content: "Ver payload completo"
                                    }, {
                                      activator: withCtx(({ props: tooltipProps }) => [
                                        createVNode(unref(VBtn), mergeProps({ ref_for: true }, tooltipProps, {
                                          variant: "text",
                                          size: "small",
                                          color: "secondary"
                                        }), {
                                          default: withCtx(() => [
                                            createVNode(unref(VIcon), { start: "" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-code-json")
                                              ]),
                                              _: 1
                                            }),
                                            createTextVNode(" Ver Auditoría ")
                                          ]),
                                          _: 1
                                        }, 16)
                                      ]),
                                      _: 1
                                    })) : createCommentVNode("", true)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/ProfetitUsers/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
