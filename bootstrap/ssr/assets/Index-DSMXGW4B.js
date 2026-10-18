import { defineComponent, ref, computed, mergeProps, withCtx, unref, createTextVNode, createVNode, withKeys, toDisplayString, openBlock, createBlock, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { router } from "@inertiajs/vue3";
import { VCard, VCardText, VTextField, VSelect, VBtn, VIcon, VDataTable, VMenu, VChip } from "vuetify/components";
import { _ as _sfc_main$2 } from "./TrustBadge-DjhbGdlY.js";
import { _ as _sfc_main$1 } from "./AdminLayout-BdI9c5Vo.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    users: {},
    filters: {},
    statusOptions: {}
  },
  setup(__props) {
    const route = (name, params) => window.route(name, params);
    const props = __props;
    const search = ref(props.filters.search || "");
    const statusFilter = ref(props.filters.status || "");
    const loading = ref(false);
    const items = computed(() => props.users.data.map((user) => {
      var _a;
      return {
        ...user,
        certificates: user.profitit_certificates || [],
        activeCertificate: (_a = user.profitit_certificates) == null ? void 0 : _a.find((c) => c.status === "active")
      };
    }));
    const headers = [
      { title: "Usuario", key: "name", sortable: false },
      { title: "Email", key: "email", sortable: false },
      { title: "Certificado", key: "certificate", sortable: false },
      { title: "Estado", key: "profile_status", sortable: false },
      { title: "Acciones", key: "actions", sortable: false, width: "180px" }
    ];
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
    const handleSearch = () => {
      router.get(route("admin.profetit-users.index"), {
        search: search.value,
        status: statusFilter.value
      }, {
        preserveScroll: true,
        replace: true
      });
    };
    const handleResendActivation = (user) => {
      if (!confirm(`¿Reenviar correo de activación a ${user.email}?`)) return;
      loading.value = true;
      router.post(route("admin.profetit-users.resend-activation", user.id), {
        onSuccess: () => {
          loading.value = false;
          router.get(route("admin.profetit-users.index"), {
            search: search.value,
            status: statusFilter.value
          }, { preserveScroll: true });
        },
        onError: () => {
          loading.value = false;
        }
      });
    };
    const handleSync = (user, action) => {
      const actionLabel = action === "sync" ? "sincronizar" : "revocar";
      if (!confirm(`¿${actionLabel.charAt(0).toUpperCase() + actionLabel.slice(1)} certificado de ${user.email}?`)) return;
      loading.value = true;
      router.post(route("admin.profetit-users.sync", user.id), {
        data: { action },
        onSuccess: () => {
          loading.value = false;
          router.get(route("admin.profetit-users.index"), {
            search: search.value,
            status: statusFilter.value
          }, { preserveScroll: true });
        },
        onError: () => {
          loading.value = false;
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        title: "Usuarios Certificados Profetit",
        subtitle: "Gestión de usuarios con certificación B2B verificada",
        breadcrumbs: [
          { title: "Usuarios Certificados", route: route("admin.profetit-users.index") }
        ]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="pa-4"${_scopeId}><div class="d-flex justify-space-between align-center mb-6"${_scopeId}><div${_scopeId}><h1 class="display-medium mb-1"${_scopeId}>Usuarios Certificados Profetit</h1><p class="text-secondary"${_scopeId}>Gestión de usuarios con certificación B2B verificada</p></div></div>`);
            _push2(ssrRenderComponent(unref(VCard), {
              variant: "tonal",
              class: "mb-6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(VCardText), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="d-flex flex-wrap gap-4 align-end"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(VTextField), {
                          modelValue: search.value,
                          "onUpdate:modelValue": ($event) => search.value = $event,
                          label: "Buscar usuario/email/código",
                          variant: "outlined",
                          density: "comfortable",
                          class: "flex-grow-1",
                          "min-width": "250",
                          onKeyup: handleSearch
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(VSelect), {
                          modelValue: statusFilter.value,
                          "onUpdate:modelValue": [($event) => statusFilter.value = $event, handleSearch],
                          items: Object.entries(__props.statusOptions).map(([value, label]) => ({ title: label, value })),
                          label: "Filtrar por Estado",
                          variant: "outlined",
                          density: "comfortable",
                          "min-width": "200"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(VBtn), {
                          color: "primary",
                          onClick: handleSearch,
                          disabled: loading.value,
                          loading: loading.value
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(VIcon), { start: "" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`mdi-magnify`);
                                  } else {
                                    return [
                                      createTextVNode("mdi-magnify")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(` Filtrar `);
                            } else {
                              return [
                                createVNode(unref(VIcon), { start: "" }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-magnify")
                                  ]),
                                  _: 1
                                }),
                                createTextVNode(" Filtrar ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "d-flex flex-wrap gap-4 align-end" }, [
                            createVNode(unref(VTextField), {
                              modelValue: search.value,
                              "onUpdate:modelValue": ($event) => search.value = $event,
                              label: "Buscar usuario/email/código",
                              variant: "outlined",
                              density: "comfortable",
                              class: "flex-grow-1",
                              "min-width": "250",
                              onKeyup: withKeys(handleSearch, ["enter"])
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(unref(VSelect), {
                              modelValue: statusFilter.value,
                              "onUpdate:modelValue": [($event) => statusFilter.value = $event, handleSearch],
                              items: Object.entries(__props.statusOptions).map(([value, label]) => ({ title: label, value })),
                              label: "Filtrar por Estado",
                              variant: "outlined",
                              density: "comfortable",
                              "min-width": "200"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                            createVNode(unref(VBtn), {
                              color: "primary",
                              onClick: handleSearch,
                              disabled: loading.value,
                              loading: loading.value
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(VIcon), { start: "" }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-magnify")
                                  ]),
                                  _: 1
                                }),
                                createTextVNode(" Filtrar ")
                              ]),
                              _: 1
                            }, 8, ["disabled", "loading"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(VCardText), null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "d-flex flex-wrap gap-4 align-end" }, [
                          createVNode(unref(VTextField), {
                            modelValue: search.value,
                            "onUpdate:modelValue": ($event) => search.value = $event,
                            label: "Buscar usuario/email/código",
                            variant: "outlined",
                            density: "comfortable",
                            class: "flex-grow-1",
                            "min-width": "250",
                            onKeyup: withKeys(handleSearch, ["enter"])
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(unref(VSelect), {
                            modelValue: statusFilter.value,
                            "onUpdate:modelValue": [($event) => statusFilter.value = $event, handleSearch],
                            items: Object.entries(__props.statusOptions).map(([value, label]) => ({ title: label, value })),
                            label: "Filtrar por Estado",
                            variant: "outlined",
                            density: "comfortable",
                            "min-width": "200"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                          createVNode(unref(VBtn), {
                            color: "primary",
                            onClick: handleSearch,
                            disabled: loading.value,
                            loading: loading.value
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(VIcon), { start: "" }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-magnify")
                                ]),
                                _: 1
                              }),
                              createTextVNode(" Filtrar ")
                            ]),
                            _: 1
                          }, 8, ["disabled", "loading"])
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VCard), { variant: "tonal" }, {
              "no-data": withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-center py-12"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(VIcon), {
                    size: "x-large",
                    color: "secondary"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`mdi-account-search-outline`);
                      } else {
                        return [
                          createTextVNode("mdi-account-search-outline")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<p class="mt-4 text-secondary"${_scopeId2}>No se encontraron usuarios</p></div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-center py-12" }, [
                      createVNode(unref(VIcon), {
                        size: "x-large",
                        color: "secondary"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("mdi-account-search-outline")
                        ]),
                        _: 1
                      }),
                      createVNode("p", { class: "mt-4 text-secondary" }, "No se encontraron usuarios")
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(VDataTable), {
                    headers,
                    items: items.value,
                    page: __props.users.current_page,
                    "items-per-page": __props.users.per_page,
                    "server-items-length": __props.users.total,
                    loading: loading.value,
                    "footer-props": {
                      "items-per-page-options": [10, 20, 50, 100],
                      "show-current-page": true,
                      "show-first-last-page": true
                    },
                    options: {
                      page: __props.users.current_page,
                      itemsPerPage: __props.users.per_page,
                      sortBy: [],
                      sortDesc: []
                    }
                  }, {
                    [`item.name`]: withCtx(({ item }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div${_scopeId3}><div class="font-weight-medium"${_scopeId3}>${ssrInterpolate(item.name)}</div><div class="text-caption text-secondary"${_scopeId3}>ID: ${ssrInterpolate(item.id)}</div></div>`);
                      } else {
                        return [
                          createVNode("div", null, [
                            createVNode("div", { class: "font-weight-medium" }, toDisplayString(item.name), 1),
                            createVNode("div", { class: "text-caption text-secondary" }, "ID: " + toDisplayString(item.id), 1)
                          ])
                        ];
                      }
                    }),
                    [`item.email`]: withCtx(({ item }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div${_scopeId3}>${ssrInterpolate(item.email)}</div>`);
                      } else {
                        return [
                          createVNode("div", null, toDisplayString(item.email), 1)
                        ];
                      }
                    }),
                    [`item.certificate`]: withCtx(({ item }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (item.activeCertificate) {
                          _push4(`<div${_scopeId3}>`);
                          _push4(ssrRenderComponent(_sfc_main$2, {
                            badge: {
                              type: item.activeCertificate.certificate_type,
                              label: item.activeCertificate.certificate_type === "titulo_oficial" ? "Título Oficial" : "Testimonio de Estudios",
                              icon: item.activeCertificate.certificate_type === "titulo_oficial" ? "mdi-certificate" : "mdi-file-document-check",
                              color: item.activeCertificate.certificate_type === "titulo_oficial" ? "primary" : "info",
                              code: item.activeCertificate.certificate_code
                            },
                            size: "small"
                          }, null, _parent4, _scopeId3));
                          _push4(`<div class="text-caption text-secondary mt-1"${_scopeId3}> Código: ${ssrInterpolate(item.activeCertificate.certificate_code)}</div><div class="text-caption text-secondary"${_scopeId3}> Emitido: ${ssrInterpolate(new Date(item.activeCertificate.issue_date).toLocaleDateString("es-MX"))}</div></div>`);
                        } else {
                          _push4(ssrRenderComponent(unref(VChip), {
                            size: "x-small",
                            variant: "outlined",
                            color: "surface-variant"
                          }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` Sin certificado activo `);
                              } else {
                                return [
                                  createTextVNode(" Sin certificado activo ")
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        }
                      } else {
                        return [
                          item.activeCertificate ? (openBlock(), createBlock("div", { key: 0 }, [
                            createVNode(_sfc_main$2, {
                              badge: {
                                type: item.activeCertificate.certificate_type,
                                label: item.activeCertificate.certificate_type === "titulo_oficial" ? "Título Oficial" : "Testimonio de Estudios",
                                icon: item.activeCertificate.certificate_type === "titulo_oficial" ? "mdi-certificate" : "mdi-file-document-check",
                                color: item.activeCertificate.certificate_type === "titulo_oficial" ? "primary" : "info",
                                code: item.activeCertificate.certificate_code
                              },
                              size: "small"
                            }, null, 8, ["badge"]),
                            createVNode("div", { class: "text-caption text-secondary mt-1" }, " Código: " + toDisplayString(item.activeCertificate.certificate_code), 1),
                            createVNode("div", { class: "text-caption text-secondary" }, " Emitido: " + toDisplayString(new Date(item.activeCertificate.issue_date).toLocaleDateString("es-MX")), 1)
                          ])) : (openBlock(), createBlock(unref(VChip), {
                            key: 1,
                            size: "x-small",
                            variant: "outlined",
                            color: "surface-variant"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Sin certificado activo ")
                            ]),
                            _: 1
                          }))
                        ];
                      }
                    }),
                    [`item.profile_status`]: withCtx(({ item }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(VChip), {
                          color: statusColors[item.profile_status] || "default",
                          size: "small",
                          variant: "tonal"
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(statusLabels[item.profile_status] || item.profile_status)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(statusLabels[item.profile_status] || item.profile_status), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(VChip), {
                            color: statusColors[item.profile_status] || "default",
                            size: "small",
                            variant: "tonal"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(statusLabels[item.profile_status] || item.profile_status), 1)
                            ]),
                            _: 2
                          }, 1032, ["color"])
                        ];
                      }
                    }),
                    [`item.actions`]: withCtx(({ item }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(VMenu), null, {
                          activator: withCtx(({ props: menuProps }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(VBtn), mergeProps(menuProps, {
                                variant: "tonal",
                                size: "small",
                                color: "primary"
                              }), {
                                default: withCtx((_3, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(VIcon), null, {
                                      default: withCtx((_4, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`mdi-dots-vertical`);
                                        } else {
                                          return [
                                            createTextVNode("mdi-dots-vertical")
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(VIcon), null, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-dots-vertical")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(VBtn), mergeProps(menuProps, {
                                  variant: "tonal",
                                  size: "small",
                                  color: "primary"
                                }), {
                                  default: withCtx(() => [
                                    createVNode(unref(VIcon), null, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-dots-vertical")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 16)
                              ];
                            }
                          }),
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(VCard), {
                                class: "pa-2",
                                "min-width": "200"
                              }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(VBtn), {
                                      block: "",
                                      variant: "text",
                                      color: "primary",
                                      onClick: ($event) => handleResendActivation(item),
                                      disabled: item.profile_status !== "pending_activation" || loading.value
                                    }, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(unref(VIcon), { start: "" }, {
                                            default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`mdi-email-outline`);
                                              } else {
                                                return [
                                                  createTextVNode("mdi-email-outline")
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent7, _scopeId6));
                                          _push7(` Reenviar Activación `);
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
                                      _: 2
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(unref(VBtn), {
                                      block: "",
                                      variant: "text",
                                      color: "info",
                                      onClick: ($event) => handleSync(item, "sync"),
                                      disabled: loading.value
                                    }, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(unref(VIcon), { start: "" }, {
                                            default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`mdi-sync`);
                                              } else {
                                                return [
                                                  createTextVNode("mdi-sync")
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent7, _scopeId6));
                                          _push7(` Sincronizar `);
                                        } else {
                                          return [
                                            createVNode(unref(VIcon), { start: "" }, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-sync")
                                              ]),
                                              _: 1
                                            }),
                                            createTextVNode(" Sincronizar ")
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(unref(VBtn), {
                                      block: "",
                                      variant: "text",
                                      color: "error",
                                      onClick: ($event) => handleSync(item, "revoke"),
                                      disabled: item.profile_status !== "active" || loading.value
                                    }, {
                                      default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(unref(VIcon), { start: "" }, {
                                            default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`mdi-shield-off`);
                                              } else {
                                                return [
                                                  createTextVNode("mdi-shield-off")
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent7, _scopeId6));
                                          _push7(` Revocar Certificado `);
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
                                      _: 2
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(VBtn), {
                                        block: "",
                                        variant: "text",
                                        color: "primary",
                                        onClick: ($event) => handleResendActivation(item),
                                        disabled: item.profile_status !== "pending_activation" || loading.value
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
                                      }, 8, ["onClick", "disabled"]),
                                      createVNode(unref(VBtn), {
                                        block: "",
                                        variant: "text",
                                        color: "info",
                                        onClick: ($event) => handleSync(item, "sync"),
                                        disabled: loading.value
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(VIcon), { start: "" }, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-sync")
                                            ]),
                                            _: 1
                                          }),
                                          createTextVNode(" Sincronizar ")
                                        ]),
                                        _: 1
                                      }, 8, ["onClick", "disabled"]),
                                      createVNode(unref(VBtn), {
                                        block: "",
                                        variant: "text",
                                        color: "error",
                                        onClick: ($event) => handleSync(item, "revoke"),
                                        disabled: item.profile_status !== "active" || loading.value
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
                                      }, 8, ["onClick", "disabled"])
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(VCard), {
                                  class: "pa-2",
                                  "min-width": "200"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(VBtn), {
                                      block: "",
                                      variant: "text",
                                      color: "primary",
                                      onClick: ($event) => handleResendActivation(item),
                                      disabled: item.profile_status !== "pending_activation" || loading.value
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
                                    }, 8, ["onClick", "disabled"]),
                                    createVNode(unref(VBtn), {
                                      block: "",
                                      variant: "text",
                                      color: "info",
                                      onClick: ($event) => handleSync(item, "sync"),
                                      disabled: loading.value
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(VIcon), { start: "" }, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-sync")
                                          ]),
                                          _: 1
                                        }),
                                        createTextVNode(" Sincronizar ")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick", "disabled"]),
                                    createVNode(unref(VBtn), {
                                      block: "",
                                      variant: "text",
                                      color: "error",
                                      onClick: ($event) => handleSync(item, "revoke"),
                                      disabled: item.profile_status !== "active" || loading.value
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
                                    }, 8, ["onClick", "disabled"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(VMenu), null, {
                            activator: withCtx(({ props: menuProps }) => [
                              createVNode(unref(VBtn), mergeProps(menuProps, {
                                variant: "tonal",
                                size: "small",
                                color: "primary"
                              }), {
                                default: withCtx(() => [
                                  createVNode(unref(VIcon), null, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-dots-vertical")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 16)
                            ]),
                            default: withCtx(() => [
                              createVNode(unref(VCard), {
                                class: "pa-2",
                                "min-width": "200"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(VBtn), {
                                    block: "",
                                    variant: "text",
                                    color: "primary",
                                    onClick: ($event) => handleResendActivation(item),
                                    disabled: item.profile_status !== "pending_activation" || loading.value
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
                                  }, 8, ["onClick", "disabled"]),
                                  createVNode(unref(VBtn), {
                                    block: "",
                                    variant: "text",
                                    color: "info",
                                    onClick: ($event) => handleSync(item, "sync"),
                                    disabled: loading.value
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(VIcon), { start: "" }, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-sync")
                                        ]),
                                        _: 1
                                      }),
                                      createTextVNode(" Sincronizar ")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick", "disabled"]),
                                  createVNode(unref(VBtn), {
                                    block: "",
                                    variant: "text",
                                    color: "error",
                                    onClick: ($event) => handleSync(item, "revoke"),
                                    disabled: item.profile_status !== "active" || loading.value
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
                                  }, 8, ["onClick", "disabled"])
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(VDataTable), {
                      headers,
                      items: items.value,
                      page: __props.users.current_page,
                      "items-per-page": __props.users.per_page,
                      "server-items-length": __props.users.total,
                      loading: loading.value,
                      "footer-props": {
                        "items-per-page-options": [10, 20, 50, 100],
                        "show-current-page": true,
                        "show-first-last-page": true
                      },
                      options: {
                        page: __props.users.current_page,
                        itemsPerPage: __props.users.per_page,
                        sortBy: [],
                        sortDesc: []
                      }
                    }, {
                      [`item.name`]: withCtx(({ item }) => [
                        createVNode("div", null, [
                          createVNode("div", { class: "font-weight-medium" }, toDisplayString(item.name), 1),
                          createVNode("div", { class: "text-caption text-secondary" }, "ID: " + toDisplayString(item.id), 1)
                        ])
                      ]),
                      [`item.email`]: withCtx(({ item }) => [
                        createVNode("div", null, toDisplayString(item.email), 1)
                      ]),
                      [`item.certificate`]: withCtx(({ item }) => [
                        item.activeCertificate ? (openBlock(), createBlock("div", { key: 0 }, [
                          createVNode(_sfc_main$2, {
                            badge: {
                              type: item.activeCertificate.certificate_type,
                              label: item.activeCertificate.certificate_type === "titulo_oficial" ? "Título Oficial" : "Testimonio de Estudios",
                              icon: item.activeCertificate.certificate_type === "titulo_oficial" ? "mdi-certificate" : "mdi-file-document-check",
                              color: item.activeCertificate.certificate_type === "titulo_oficial" ? "primary" : "info",
                              code: item.activeCertificate.certificate_code
                            },
                            size: "small"
                          }, null, 8, ["badge"]),
                          createVNode("div", { class: "text-caption text-secondary mt-1" }, " Código: " + toDisplayString(item.activeCertificate.certificate_code), 1),
                          createVNode("div", { class: "text-caption text-secondary" }, " Emitido: " + toDisplayString(new Date(item.activeCertificate.issue_date).toLocaleDateString("es-MX")), 1)
                        ])) : (openBlock(), createBlock(unref(VChip), {
                          key: 1,
                          size: "x-small",
                          variant: "outlined",
                          color: "surface-variant"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Sin certificado activo ")
                          ]),
                          _: 1
                        }))
                      ]),
                      [`item.profile_status`]: withCtx(({ item }) => [
                        createVNode(unref(VChip), {
                          color: statusColors[item.profile_status] || "default",
                          size: "small",
                          variant: "tonal"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(statusLabels[item.profile_status] || item.profile_status), 1)
                          ]),
                          _: 2
                        }, 1032, ["color"])
                      ]),
                      [`item.actions`]: withCtx(({ item }) => [
                        createVNode(unref(VMenu), null, {
                          activator: withCtx(({ props: menuProps }) => [
                            createVNode(unref(VBtn), mergeProps(menuProps, {
                              variant: "tonal",
                              size: "small",
                              color: "primary"
                            }), {
                              default: withCtx(() => [
                                createVNode(unref(VIcon), null, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-dots-vertical")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 16)
                          ]),
                          default: withCtx(() => [
                            createVNode(unref(VCard), {
                              class: "pa-2",
                              "min-width": "200"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(VBtn), {
                                  block: "",
                                  variant: "text",
                                  color: "primary",
                                  onClick: ($event) => handleResendActivation(item),
                                  disabled: item.profile_status !== "pending_activation" || loading.value
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
                                }, 8, ["onClick", "disabled"]),
                                createVNode(unref(VBtn), {
                                  block: "",
                                  variant: "text",
                                  color: "info",
                                  onClick: ($event) => handleSync(item, "sync"),
                                  disabled: loading.value
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(VIcon), { start: "" }, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-sync")
                                      ]),
                                      _: 1
                                    }),
                                    createTextVNode(" Sincronizar ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick", "disabled"]),
                                createVNode(unref(VBtn), {
                                  block: "",
                                  variant: "text",
                                  color: "error",
                                  onClick: ($event) => handleSync(item, "revoke"),
                                  disabled: item.profile_status !== "active" || loading.value
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
                                }, 8, ["onClick", "disabled"])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1032, ["items", "page", "items-per-page", "server-items-length", "loading", "options"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="d-flex justify-space-between align-center mt-4 text-caption text-secondary"${_scopeId}><span${_scopeId}>Mostrando ${ssrInterpolate(__props.users.from)} - ${ssrInterpolate(__props.users.to)} de ${ssrInterpolate(__props.users.total)} usuarios</span></div></div>`);
          } else {
            return [
              createVNode("div", { class: "pa-4" }, [
                createVNode("div", { class: "d-flex justify-space-between align-center mb-6" }, [
                  createVNode("div", null, [
                    createVNode("h1", { class: "display-medium mb-1" }, "Usuarios Certificados Profetit"),
                    createVNode("p", { class: "text-secondary" }, "Gestión de usuarios con certificación B2B verificada")
                  ])
                ]),
                createVNode(unref(VCard), {
                  variant: "tonal",
                  class: "mb-6"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(VCardText), null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "d-flex flex-wrap gap-4 align-end" }, [
                          createVNode(unref(VTextField), {
                            modelValue: search.value,
                            "onUpdate:modelValue": ($event) => search.value = $event,
                            label: "Buscar usuario/email/código",
                            variant: "outlined",
                            density: "comfortable",
                            class: "flex-grow-1",
                            "min-width": "250",
                            onKeyup: withKeys(handleSearch, ["enter"])
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(unref(VSelect), {
                            modelValue: statusFilter.value,
                            "onUpdate:modelValue": [($event) => statusFilter.value = $event, handleSearch],
                            items: Object.entries(__props.statusOptions).map(([value, label]) => ({ title: label, value })),
                            label: "Filtrar por Estado",
                            variant: "outlined",
                            density: "comfortable",
                            "min-width": "200"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                          createVNode(unref(VBtn), {
                            color: "primary",
                            onClick: handleSearch,
                            disabled: loading.value,
                            loading: loading.value
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(VIcon), { start: "" }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-magnify")
                                ]),
                                _: 1
                              }),
                              createTextVNode(" Filtrar ")
                            ]),
                            _: 1
                          }, 8, ["disabled", "loading"])
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(unref(VCard), { variant: "tonal" }, {
                  "no-data": withCtx(() => [
                    createVNode("div", { class: "text-center py-12" }, [
                      createVNode(unref(VIcon), {
                        size: "x-large",
                        color: "secondary"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("mdi-account-search-outline")
                        ]),
                        _: 1
                      }),
                      createVNode("p", { class: "mt-4 text-secondary" }, "No se encontraron usuarios")
                    ])
                  ]),
                  default: withCtx(() => [
                    createVNode(unref(VDataTable), {
                      headers,
                      items: items.value,
                      page: __props.users.current_page,
                      "items-per-page": __props.users.per_page,
                      "server-items-length": __props.users.total,
                      loading: loading.value,
                      "footer-props": {
                        "items-per-page-options": [10, 20, 50, 100],
                        "show-current-page": true,
                        "show-first-last-page": true
                      },
                      options: {
                        page: __props.users.current_page,
                        itemsPerPage: __props.users.per_page,
                        sortBy: [],
                        sortDesc: []
                      }
                    }, {
                      [`item.name`]: withCtx(({ item }) => [
                        createVNode("div", null, [
                          createVNode("div", { class: "font-weight-medium" }, toDisplayString(item.name), 1),
                          createVNode("div", { class: "text-caption text-secondary" }, "ID: " + toDisplayString(item.id), 1)
                        ])
                      ]),
                      [`item.email`]: withCtx(({ item }) => [
                        createVNode("div", null, toDisplayString(item.email), 1)
                      ]),
                      [`item.certificate`]: withCtx(({ item }) => [
                        item.activeCertificate ? (openBlock(), createBlock("div", { key: 0 }, [
                          createVNode(_sfc_main$2, {
                            badge: {
                              type: item.activeCertificate.certificate_type,
                              label: item.activeCertificate.certificate_type === "titulo_oficial" ? "Título Oficial" : "Testimonio de Estudios",
                              icon: item.activeCertificate.certificate_type === "titulo_oficial" ? "mdi-certificate" : "mdi-file-document-check",
                              color: item.activeCertificate.certificate_type === "titulo_oficial" ? "primary" : "info",
                              code: item.activeCertificate.certificate_code
                            },
                            size: "small"
                          }, null, 8, ["badge"]),
                          createVNode("div", { class: "text-caption text-secondary mt-1" }, " Código: " + toDisplayString(item.activeCertificate.certificate_code), 1),
                          createVNode("div", { class: "text-caption text-secondary" }, " Emitido: " + toDisplayString(new Date(item.activeCertificate.issue_date).toLocaleDateString("es-MX")), 1)
                        ])) : (openBlock(), createBlock(unref(VChip), {
                          key: 1,
                          size: "x-small",
                          variant: "outlined",
                          color: "surface-variant"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Sin certificado activo ")
                          ]),
                          _: 1
                        }))
                      ]),
                      [`item.profile_status`]: withCtx(({ item }) => [
                        createVNode(unref(VChip), {
                          color: statusColors[item.profile_status] || "default",
                          size: "small",
                          variant: "tonal"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(statusLabels[item.profile_status] || item.profile_status), 1)
                          ]),
                          _: 2
                        }, 1032, ["color"])
                      ]),
                      [`item.actions`]: withCtx(({ item }) => [
                        createVNode(unref(VMenu), null, {
                          activator: withCtx(({ props: menuProps }) => [
                            createVNode(unref(VBtn), mergeProps(menuProps, {
                              variant: "tonal",
                              size: "small",
                              color: "primary"
                            }), {
                              default: withCtx(() => [
                                createVNode(unref(VIcon), null, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-dots-vertical")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 16)
                          ]),
                          default: withCtx(() => [
                            createVNode(unref(VCard), {
                              class: "pa-2",
                              "min-width": "200"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(VBtn), {
                                  block: "",
                                  variant: "text",
                                  color: "primary",
                                  onClick: ($event) => handleResendActivation(item),
                                  disabled: item.profile_status !== "pending_activation" || loading.value
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
                                }, 8, ["onClick", "disabled"]),
                                createVNode(unref(VBtn), {
                                  block: "",
                                  variant: "text",
                                  color: "info",
                                  onClick: ($event) => handleSync(item, "sync"),
                                  disabled: loading.value
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(VIcon), { start: "" }, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-sync")
                                      ]),
                                      _: 1
                                    }),
                                    createTextVNode(" Sincronizar ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick", "disabled"]),
                                createVNode(unref(VBtn), {
                                  block: "",
                                  variant: "text",
                                  color: "error",
                                  onClick: ($event) => handleSync(item, "revoke"),
                                  disabled: item.profile_status !== "active" || loading.value
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
                                }, 8, ["onClick", "disabled"])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1032, ["items", "page", "items-per-page", "server-items-length", "loading", "options"])
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "d-flex justify-space-between align-center mt-4 text-caption text-secondary" }, [
                  createVNode("span", null, "Mostrando " + toDisplayString(__props.users.from) + " - " + toDisplayString(__props.users.to) + " de " + toDisplayString(__props.users.total) + " usuarios", 1)
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/ProfetitUsers/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
