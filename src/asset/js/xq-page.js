/*!
 * XqAdminPage v1.0.0 (https://xqkeji.cn)
 * Copyright 2022-2022 xqkeji.cn
 */
(() => {
  var __defProp = Object.defineProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };

  // src/ts/xq-util.ts
  var domReady = (callBack) => {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", callBack);
    } else {
      callBack();
    }
  };
  var parents = (element, selector) => {
    const parents2 = [];
    let ancestor = element.parentNode;
    while (ancestor && ancestor.nodeType === Node.ELEMENT_NODE && ancestor.nodeType !== 3) {
      if (ancestor.matches(selector)) {
        parents2.push(ancestor);
      }
      ancestor = ancestor.parentNode;
    }
    return parents2;
  };
  var next = (element, selector) => {
    let next2 = element.nextElementSibling;
    while (next2) {
      if (next2.matches(selector)) {
        return [next2];
      }
      next2 = next2.nextElementSibling;
    }
    return [];
  };
  var append = (element, dom) => {
    const node = document.createRange().createContextualFragment(dom);
    element.append(node);
  };
  var prepend = (element, dom) => {
    const node = document.createRange().createContextualFragment(dom);
    element.prepend(node);
  };
  var after = (element, dom) => {
    const node = document.createRange().createContextualFragment(dom);
    element.after(node);
  };
  var jsonFormData = (form) => {
    const object = {};
    const formData = new FormData(form);
    for (const item of formData) {
      const top_key = item[0];
      if (top_key.includes("[")) {
        const key1 = top_key.slice(0, Math.max(0, top_key.indexOf("[")));
        const key2 = top_key.slice(top_key.indexOf("[") + 1, top_key.indexOf("]"));
        const data = {};
        data[key2] = item[1];
        if (object[key1]) {
          const tmp = object[key1];
          tmp[key2] = item[1];
          object[key1] = tmp;
        } else {
          object[key1] = data;
        }
      } else {
        object[item[0]] = item[1];
      }
    }
    return object;
  };

  // src/ts/xq-confirm.ts
  var DEFAULT_OPTIONS = {
    type: "alert",
    size: "modal-sm",
    position: "modal-dialog-centered",
    template: '<div id="xq-bs-modal" class="modal" tabindex="-1" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title"><i></i><span>title</span></h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body"><p>Modal content.</p></div><div class="modal-footer"></div></div></div></div>',
    title: "\u63D0\u793A\u4FE1\u606F",
    content: "\u60A8\u786E\u8BA4\u8981\u8FDB\u884C\u64CD\u4F5C\u5417?",
    icon: "fas fa-info-circle",
    confirmButton: "\u786E\u8BA4",
    cancelButton: "\u53D6\u6D88",
    confirmButtonClass: "btn-primary",
    cancelButtonClass: "btn-secondary",
    confirm() {
    },
    cancel() {
    },
    backgroundDismiss: true,
    autoClose: false
  };
  var XQ_BS_MODAL_ID = "#xq-bs-modal";
  var xqConfirm = (options = {}) => {
    const _options = DEFAULT_OPTIONS;
    if (options) {
      for (const option in options) {
        if (_options[option]) {
          _options[option] = options[option];
        }
      }
    }
    buildHtml(_options);
  };
  var buildHtml = (options = DEFAULT_OPTIONS) => {
    append(document.body, options.template);
    const xq_bs_modal = document.querySelector(XQ_BS_MODAL_ID);
    if (xq_bs_modal) {
      const xq_modal_dialog = xq_bs_modal.querySelector(".modal-dialog");
      xq_modal_dialog.classList.add(options.size);
      xq_modal_dialog.classList.add(options.position);
      const title_icon = xq_bs_modal.querySelector(".modal-title>i");
      const title_content = xq_bs_modal.querySelector(".modal-title>span");
      const content = xq_bs_modal.querySelector(".modal-body>p");
      if (title_icon) {
        title_icon.className = options.icon;
      }
      if (title_content) {
        title_content.innerHTML = options.title;
      }
      if (content) {
        content.innerHTML = options.content;
      }
      const xqModal = new bootstrap.Modal(xq_bs_modal);
      const footer = document.querySelector(".modal-footer");
      if (footer) {
        if (options.type !== "alert") {
          append(footer, '<button id="xq-bs-modal-cancel" type="button" class="btn ' + options.cancelButtonClass + '" data-bs-dismiss="modal">' + options.cancelButton + "</button>");
          const cancel = footer.querySelector("#xq-bs-modal-cancel");
          cancel == null ? void 0 : cancel.addEventListener("click", (event) => {
            event.preventDefault();
            xqModal.hide();
            if (options.cancel !== null) {
              options.cancel();
            }
          });
        }
        append(footer, '<button id="xq-bs-modal-confirm" type="button" class="btn ' + options.confirmButtonClass + '">' + options.confirmButton + "</button>");
        const confirm = footer.querySelector("#xq-bs-modal-confirm");
        confirm == null ? void 0 : confirm.addEventListener("click", (event) => {
          event.preventDefault();
          xqModal.hide();
          if (options.confirm !== null) {
            options.confirm();
          }
        });
      }
      xqModal.show();
      xq_bs_modal.addEventListener("hidden.bs.modal", () => {
        xqModal.dispose();
        xq_bs_modal.remove();
      });
    }
  };

  // src/ts/xq-admin-list.ts
  var XQ_DATA_TABLE = ".xq-data-table";
  var XQ_CHECK_ALL = ".xq-data-table .xq-check-all";
  var XQ_COPY_BTN = ".xq-copy";
  var XQ_EDIT_BTN = ".xq-edit";
  var XQ_DETELE_BTN = ".xq-delete";
  var XQ_ADD_BTN = ".xq-data-table .xq-add";
  var XQ_BATCH_BTN = ".xq-data-table .xq-batch";
  var XQ_DRAGGER_TABLE = ".xq-data-table.xq-dragger-table";
  var XqAdminList = class {
    constructor() {
      __publicField(this, "_table");
      const table = document.querySelector(XQ_DATA_TABLE);
      if (table) {
        this._table = table;
        this.init();
      }
    }
    init() {
      const table = this._table;
      if (table) {
        const tres = table.querySelectorAll("tr");
        for (const tr of tres) {
          this.bindEdit(tr);
          this.bindDelete(tr);
          this.bindChange(tr);
          this.bindCopy(tr);
        }
        this.bindCheckAll();
        this.bindAdd();
        this.bindBatch();
        this.bindDraggerTable();
      }
    }
    bindCheckAll() {
      const check_all = document.querySelector(XQ_CHECK_ALL);
      if (check_all) {
        check_all.addEventListener("click", (event) => {
          const target = event.currentTarget;
          const { checked } = target;
          const table = this._table;
          const checks = table == null ? void 0 : table.querySelectorAll("tr > td:first-child > input[type=checkbox]");
          for (const check of checks) {
            if (check === target) {
              continue;
            }
            if (checked) {
              check.checked = true;
            } else {
              check.checked = false;
            }
          }
        });
      }
    }
    bindEdit(element) {
      const edit_btn = element.querySelector(XQ_EDIT_BTN);
      if (edit_btn) {
        edit_btn.addEventListener("click", (event) => {
          const target = event.currentTarget;
          const table = this._table;
          const pid = table == null ? void 0 : table.getAttribute("pid");
          let id = element.getAttribute("id");
          id = id.replace("xq_", "");
          if (id) {
            let url = target.getAttribute("xq-url");
            if (!url) {
              url = window.location.href;
              if (url.includes(".html")) {
                url = url.slice(0, Math.max(0, url.lastIndexOf("/")));
                url = url + "/edit.html?id=" + id;
              } else {
                if (pid) {
                  url = url.replace("/" + pid, "");
                }
                url = url.slice(0, Math.max(0, url.lastIndexOf("/")));
                url = url + "/edit/" + id;
              }
            }
            window.location.href = url;
          } else {
            xqConfirm({
              content: "\u627E\u4E0D\u5230tr\u7684id\u5C5E\u6027\uFF01"
            });
          }
        });
      }
    }
    bindCopy(element) {
      const copy_btn = element.querySelector(XQ_COPY_BTN);
      if (copy_btn) {
        copy_btn.addEventListener("click", () => {
          let id = element.getAttribute("id");
          id = id.replace("xq_", "");
          if (id) {
            this.copy(id);
            xqConfirm({
              content: "\u5DF2\u7ECF\u5C06id\u590D\u5236\u5230\u7C98\u8D34\u677F"
            });
          }
        });
      }
    }
    copy(text) {
      const el = document.createElement("input");
      el.setAttribute("value", text);
      document.body.append(el);
      el.select();
      document.execCommand("copy");
      el.remove();
    }
    bindDelete(element) {
      const delete_btn = element.querySelector(XQ_DETELE_BTN);
      if (delete_btn) {
        delete_btn.addEventListener("click", (event) => {
          const target = event.currentTarget;
          const table = this._table;
          const pid = table == null ? void 0 : table.getAttribute("pid");
          let id = element.getAttribute("id");
          id = id.replace("xq_", "");
          if (id) {
            let url = target.getAttribute("xq-url");
            if (!url) {
              url = window.location.href;
              if (pid) {
                url = url.replace("/" + pid, "");
              }
              url = url.slice(0, Math.max(0, url.lastIndexOf("/")));
              url += "/delete";
              if (url.includes(":3000")) {
                url = url.replace(":3000", ":9000");
              }
            }
            xqConfirm({
              content: "\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F",
              confirm() {
                fetch(url, {
                  body: JSON.stringify({ id }),
                  headers: {
                    "content-type": "application/json"
                  },
                  method: "POST"
                }).then(async (response) => {
                  return response.json();
                }).then((data) => {
                  xqConfirm({
                    content: data.message,
                    confirm() {
                      if (data.code === 200) {
                        window.location.reload();
                      }
                    }
                  });
                });
              }
            });
          } else {
            xqConfirm({
              content: "\u627E\u4E0D\u5230tr\u7684id\u5C5E\u6027\uFF01"
            });
          }
        });
      }
    }
    bindChange(element) {
      const table = this._table;
      let id = element.getAttribute("id");
      id = id == null ? void 0 : id.replace("xq_", "");
      const textes = element.querySelectorAll("input,select");
      for (const text of textes) {
        text.addEventListener("change", (event) => {
          const targetElement = event.currentTarget;
          let value = null;
          value = targetElement.type === "checkbox" ? targetElement.checked : targetElement.value;
          const target_id = targetElement.getAttribute("id");
          const field = target_id == null ? void 0 : target_id.slice(0, Math.max(0, target_id.indexOf("_")));
          const pid = table == null ? void 0 : table.getAttribute("pid");
          let xq_url = table == null ? void 0 : table.getAttribute("xq-url");
          const data = { id, field, value };
          if (!xq_url) {
            let url = window.location.href;
            if (pid) {
              url = url.replace("/" + pid, "");
            }
            url = url.slice(0, Math.max(0, url.lastIndexOf("/")));
            url += "/change";
            xq_url = url;
          } else {
            xq_url += "/change";
          }
          if (xq_url.includes(":3000")) {
            xq_url = xq_url.replace(":3000", ":9000");
          }
          fetch(xq_url, {
            body: JSON.stringify(data),
            headers: {
              "content-type": "application/json"
            },
            method: "POST"
          }).then(async (response) => {
            return response.json();
          }).then((data2) => {
            console.log(data2);
          });
        });
      }
    }
    bindAdd() {
      const add_btn = document.querySelector(XQ_ADD_BTN);
      if (add_btn) {
        add_btn.addEventListener("click", (event) => {
          const target = event.currentTarget;
          const table = parents(target, "table")[0];
          const pid = table.getAttribute("pid");
          let url = target.getAttribute("xq-url");
          if (!url) {
            url = window.location.href;
            if (url.includes(".html")) {
              url = url.slice(0, Math.max(0, url.lastIndexOf("/")));
              url += "/add.html";
            } else {
              if (pid) {
                url = url.replace("/" + pid, "");
              }
              url = url.slice(0, Math.max(0, url.lastIndexOf("/")));
              url += pid ? "/add/" + pid : "/add";
            }
          }
          window.location.href = url;
        });
      }
    }
    bindBatch() {
      const batch_btns = document.querySelectorAll(XQ_BATCH_BTN);
      if (batch_btns) {
        for (const batch_btn of batch_btns) {
          batch_btn.addEventListener("click", (event) => {
            const target = event.currentTarget;
            const table = parents(target, "table")[0];
            const pid = table.getAttribute("pid");
            const formObject = parents(target, "form")[0];
            const action = target.getAttribute("name");
            if (action) {
              let url = target.getAttribute("xq-url");
              if (!url) {
                url = window.location.href;
                if (pid) {
                  url = url.replace("/" + pid, "");
                }
                url = url.slice(0, Math.max(0, url.lastIndexOf("/")));
                url = url + "/" + action;
                if (url.includes(":3000")) {
                  url = url.replace(":3000", ":9000");
                }
              }
              const formData = jsonFormData(formObject);
              const jsonData = JSON.stringify(formData);
              if (jsonData !== "{}") {
                xqConfirm({
                  content: "\u786E\u5B9A\u8981\u8FDB\u884C\u6279\u91CF\u64CD\u4F5C\u5417\uFF1F",
                  confirm() {
                    fetch(url, {
                      body: jsonData,
                      headers: {
                        "content-type": "application/json"
                      },
                      method: "POST"
                    }).then(async (response) => {
                      return response.json();
                    }).then((data) => {
                      xqConfirm({
                        content: data.message,
                        confirm() {
                          if (data.code === 200) {
                            window.location.reload();
                          }
                        }
                      });
                    });
                  }
                });
              } else {
                xqConfirm({
                  content: "\u6CA1\u6709\u9009\u62E9\u64CD\u4F5C\u6570\u636E."
                });
              }
            }
          });
        }
      }
    }
    bindDraggerTable() {
      const dragger_table = document.querySelector(XQ_DRAGGER_TABLE);
      if (dragger_table && typeof sortable !== void 0) {
        const tbody = dragger_table.querySelector("tbody");
        if (tbody) {
          const firstTr = tbody.querySelector("tbody>tr:first-child");
          const firstId = firstTr.getAttribute("id");
          const firstTd = firstTr.querySelector("td:first-child");
          firstTd == null ? void 0 : firstTd.classList.add("xq-move");
          tbody.setAttribute("id", "tbody_" + firstId);
          const trs = tbody.querySelectorAll("tbody>tr:not(:first-child)");
          for (const tr of trs) {
            const td = tr.querySelector("td:first-child");
            td == null ? void 0 : td.classList.add("xq-move");
            const innerbody = document.createElement("tbody");
            innerbody.append(tr);
            const trId = tr.getAttribute("id");
            innerbody.setAttribute("id", "tbody_" + trId);
            tbody.after(innerbody);
          }
        }
        sortable(XQ_DRAGGER_TABLE, {
          items: "tbody",
          handle: ".xq-move",
          placeholder: '<tbody><tr><td colspan="99">&nbsp;</td></tr><tbody>'
        });
        dragger_table.addEventListener("sortstop", () => {
          const rows = [];
          let rowIndex = 0;
          const tbodies = dragger_table.querySelectorAll("tbody");
          for (const tbody2 of tbodies) {
            rowIndex++;
            const tr = tbody2.querySelector("tr:first-child");
            const trId = tr == null ? void 0 : tr.getAttribute("id");
            const row = { id: trId, ordernum: rowIndex };
            rows.push(row);
          }
          const pid = dragger_table.getAttribute("pid");
          let url = dragger_table.getAttribute("xq-url");
          if (!url) {
            url = window.location.href;
            if (pid) {
              url = url.replace("/" + pid, "");
            }
            url = url.slice(0, Math.max(0, url.lastIndexOf("/")));
            url += "/b-order";
            if (url.includes(":3000")) {
              url = url.replace(":3000", ":9000");
            }
          }
          fetch(url, {
            body: JSON.stringify(rows),
            headers: {
              "content-type": "application/json"
            },
            method: "POST"
          }).then(async (response) => {
            return response.json();
          }).then((data) => {
            if (data.code === 200) {
            }
          });
        });
      }
    }
  };
  domReady(() => {
    const admin_list = new XqAdminList();
  });
  var xq_admin_list_default = XqAdminList;

  // src/ts/xq-admin-edit.ts
  var XQ_BACKPAGE = ".xq-backpage";
  var XQ_AUTH_TABLE = ".xq-auth-table";
  var XQ_AUTH_CHECK_TABLE = ".xq-auth-check-table";
  var XQ_AUTH_CHECK_ROW = ".xq-auth-check-row";
  var XqAdminEdit = class {
    bindBackPage() {
      var _a;
      let referrer;
      let backpage;
      const els = document.querySelectorAll(XQ_BACKPAGE);
      if (els) {
        referrer = document.referrer;
        if (referrer && referrer !== document.location.href && referrer !== ((_a = window.top) == null ? void 0 : _a.location.href)) {
          sessionStorage.setItem(document.location.href, referrer);
          backpage = referrer;
        } else {
          const item = sessionStorage.getItem(document.location.href);
          if (item) {
            backpage = item.toString();
          }
        }
        for (const el of els) {
          el.addEventListener("click", (event) => {
            event.preventDefault();
            if (backpage) {
              document.location.href = backpage;
            } else {
              xqConfirm({
                content: "\u7CFB\u7EDF\u65E0\u6CD5\u81EA\u52A8\u8FD4\u56DE\u4E0A\u4E00\u4E2A\u9875\u9762."
              });
            }
          });
        }
      }
    }
    bindCheckTableAll() {
      const auth_tables = document.querySelectorAll(XQ_AUTH_TABLE);
      if (auth_tables) {
        for (const auth_table of auth_tables) {
          const check_table = auth_table.querySelector(XQ_AUTH_CHECK_TABLE);
          if (check_table) {
            const table_check_all = check_table.querySelector("input[type=checkbox]");
            if (table_check_all) {
              table_check_all.addEventListener("click", (event) => {
                const target = event.currentTarget;
                const { checked } = target;
                const other_checks = auth_table.querySelectorAll("input[type=checkbox]:not(" + XQ_AUTH_CHECK_TABLE + ">input[type=checkbox])");
                for (const other_check of other_checks) {
                  if (checked) {
                    other_check.checked = true;
                  } else {
                    other_check.checked = false;
                  }
                }
              });
            }
          }
          const check_rows = auth_table.querySelectorAll(XQ_AUTH_CHECK_ROW);
          for (const check_row of check_rows) {
            const row_check_all = check_row.querySelector("input[type=checkbox]");
            if (row_check_all) {
              row_check_all.addEventListener("click", (event) => {
                const target = event.currentTarget;
                const { checked } = target;
                const next_td = next(check_row, "td")[0];
                const next_td_checks = next_td.querySelectorAll("input[type=checkbox]");
                for (const next_td_check of next_td_checks) {
                  if (checked) {
                    next_td_check.checked = true;
                  } else {
                    next_td_check.checked = false;
                  }
                }
              });
            }
          }
        }
      }
    }
  };
  domReady(() => {
    const admin_edit = new XqAdminEdit();
    admin_edit.bindBackPage();
    admin_edit.bindCheckTableAll();
  });
  var xq_admin_edit_default = XqAdminEdit;

  // src/ts/xq-tab-form.ts
  var XQ_TAB_FORM_CLASS = ".xq-tab-form";
  var XqTabForm = class {
    bindElementInValid() {
      let is_first = true;
      const tab_form = document.querySelector(XQ_TAB_FORM_CLASS);
      if (tab_form) {
        const submit = tab_form.querySelector("input[type=submit]");
        submit.addEventListener("click", () => {
          if (window.tinymce) {
            tinymce.triggerSave();
          }
          is_first = true;
        });
        for (const element of tab_form.elements) {
          element.addEventListener("invalid", (event) => {
            if (is_first) {
              const target = event.currentTarget;
              const tab_pane = parents(target, ".tab-pane")[0];
              if (window.getComputedStyle(tab_pane).display === "none") {
                const tab_id = tab_pane.getAttribute("aria-labelledby");
                const el = document.querySelector("#" + tab_id);
                const tab = new bootstrap.Tab(el);
                tab.show();
                el.addEventListener("shown.bs.tab", () => {
                  target.reportValidity();
                });
              }
              is_first = false;
            }
          });
        }
      }
    }
  };
  domReady(() => {
    const xq_tab_form = new XqTabForm();
    xq_tab_form.bindElementInValid();
  });
  var xq_tab_form_default = XqTabForm;

  // src/ts/xq-common.ts
  var XQ_CAPTCHA_CLASS = ".xq-captcha";
  var XqCommon = class {
    bindCaptcha() {
      const captcha = document.querySelector(XQ_CAPTCHA_CLASS);
      if (captcha) {
        captcha.addEventListener("click", (event) => {
          const target = event.currentTarget;
          let src = target.getAttribute("src");
          if (src.includes("?")) {
            src = src.slice(0, Math.max(0, src.lastIndexOf("?")));
            src = src + "?xq-r=" + Math.random().toString();
          } else {
            src = src + "?xq-r=" + Math.random().toString();
          }
          target.setAttribute("src", src);
        });
      }
    }
  };
  domReady(() => {
    const xq_common = new XqCommon();
    xq_common.bindCaptcha();
  });
  var xq_common_default = XqCommon;

  // src/ts/xq-fileinput.ts
  var XQ_FILEINPUT_CLASS = ".xq-fileinput";
  var XqFileInput = class {
    init() {
      const fileinputs = document.querySelectorAll(XQ_FILEINPUT_CLASS);
      if (fileinputs && typeof jQuery !== void 0) {
        let config;
        for (const fileinput of fileinputs) {
          config = fileinput.hasAttribute("xq-config") ? fileinput.getAttribute("xq-config") : "{}";
          $(fileinput).fileinput(JSON.parse(config)).on("filedeleted", (event) => {
            const target = event.currentTarget;
            this.updateFileInputValue(target);
          }).on("fileuploaded", (event) => {
            const target = event.currentTarget;
            this.updateFileInputValue(target);
          }).on("filesorted", (event) => {
            const target = event.currentTarget;
            this.updateFileInputValue(target);
          });
          this.updateFileInputValue(fileinput);
        }
      }
    }
    updateFileInputValue(fileinput) {
      const fileinput_id = fileinput.getAttribute("id");
      const fileinput_value_id = fileinput_id.replace("-xq-fileinput", "");
      const fileinput_value = document.querySelector("#" + fileinput_value_id);
      const fileinput_preview = $(fileinput).fileinput("getPreview");
      fileinput_value == null ? void 0 : fileinput_value.setAttribute("value", JSON.stringify(fileinput_preview));
      const fileCount = $(fileinput).fileinput("getFilesCount", true);
      const configStr = fileinput.getAttribute("xq-config");
      const config = JSON.parse(configStr);
      if ("required" in config) {
        if (fileCount > 0) {
          fileinput.removeAttribute("required");
        } else {
          fileinput.setAttribute("required", "true");
        }
        if ("content" in fileinput_preview) {
          const { content } = fileinput_preview;
          if (content.length === 0) {
            fileinput.setCustomValidity("\u9700\u8981\u81F3\u5C11\u4E0A\u4F20\u4E00\u4E2A\u6587\u4EF6");
          } else {
            fileinput.setCustomValidity("");
          }
        }
      }
    }
  };
  var xq_fileinput = new XqFileInput();
  domReady(() => {
    xq_fileinput.init();
  });
  var xq_fileinput_default = XqFileInput;

  // src/ts/xq-tabs-toolbar.ts
  var FULLSCREEN_BTN_SELECTOR = "#xqkeji-tab-fullscreen";
  var LEFT_BTN_SELECTOR = "#xqkeji-tab-left";
  var RIGHT_BTN_SELECTOR = "#xqkeji-tab-right";
  var TAB_NAV_ID = "#xqkeji-tab-nav";
  var TAB_NAV_UL_ID = "#xqkeji-tab-nav-ul";
  var TAB_ACTIVE = "#xqkeji-tab-nav-ul>li>a.active";
  var TAB_RIGT_MENU = "#xqkeji-tab-contentmenu";
  var XqTabsToolbar = class {
    constructor() {
      __publicField(this, "_tab");
      __publicField(this, "_tab_ul");
      __publicField(this, "_current_tab");
      __publicField(this, "_right_menu");
      this._tab = document.querySelector(TAB_NAV_ID);
      this._tab_ul = document.querySelector(TAB_NAV_UL_ID);
      this._current_tab = document.querySelector(TAB_ACTIVE);
      this._right_menu = document.querySelector(TAB_RIGT_MENU);
    }
    fullScreen() {
      var _a, _b, _c, _d;
      const isFullScreen = (_d = (_c = (_b = (_a = document.fullscreenElement) != null ? _a : document.msFullscreenElement) != null ? _b : document.mozFullScreenElement) != null ? _c : document.webkitFullscreenElement) != null ? _d : false;
      if (!isFullScreen) {
        const de = document.documentElement;
        const requestMethod = de.requestFullScreen || de.webkitRequestFullScreen || de.mozRequestFullScreen || de.msRequestFullScreen;
        if (requestMethod) {
          requestMethod.call(de);
        }
      } else {
        const exitMethod = document.exitFullscreen || document.webkitExitFullscreen || document.msExitFullscreen;
        if (exitMethod) {
          exitMethod.call(document);
        }
      }
    }
    activeTab() {
      const tab_ul = this._tab_ul;
      const active = tab_ul.querySelector(".active");
      return active;
    }
    scrollLeft() {
      const tab = this._tab;
      const tab_ul = this._tab_ul;
      const first_el = tab_ul.querySelector("li:first-child");
      const abs_left_val = Math.abs(Number.parseInt(first_el.style.marginLeft, 10));
      const margin_left = Number.isNaN(abs_left_val) ? 0 : abs_left_val;
      const tab_all_width = tab_ul.clientWidth + margin_left;
      const visibleWidth = tab.clientWidth;
      let scrollVal = 0;
      if (tab_all_width > visibleWidth) {
        const active = this.activeTab();
        const lis = tab_ul.querySelectorAll("li>a");
        let preve_width = 0;
        for (const li of lis) {
          if (li === active) {
            break;
          }
          preve_width += li.clientWidth;
        }
        const max_scroll_width = tab_all_width - visibleWidth;
        scrollVal = preve_width > max_scroll_width ? max_scroll_width : preve_width;
        first_el.style.marginLeft = (-scrollVal).toString() + "px";
      } else {
        first_el.style.marginLeft = "0px";
      }
    }
    scrollRight() {
      const tab = this._tab;
      const tab_ul = this._tab_ul;
      const first_el = tab_ul.querySelector("li:first-child");
      const margin_left = Number.isNaN(Number.parseInt(first_el.style.marginLeft, 10)) ? 0 : Number.parseInt(first_el.style.marginLeft, 10);
      const abs_left_val = Math.abs(margin_left);
      const tab_all_width = tab_ul.clientWidth + abs_left_val;
      const visibleWidth = tab.clientWidth;
      let scrollVal = 0;
      if (tab_all_width > visibleWidth) {
        const active = this.activeTab();
        const lis = tab_ul.querySelectorAll("li>a");
        let preve_width = 0;
        for (const li of lis) {
          preve_width += li.clientWidth;
          if (li === active) {
            break;
          }
        }
        if (margin_left < 0) {
          scrollVal = visibleWidth - preve_width;
          first_el.style.marginLeft = scrollVal < 0 ? scrollVal.toString() + "px" : "0px";
        }
      } else {
        first_el.style.marginLeft = "0px";
      }
    }
    bindRightMenu(li) {
      li.addEventListener("contextmenu", (event) => {
        event.preventDefault();
        const target = event.currentTarget;
        this._current_tab = target;
        const pageY = event.pageY;
        const pageX = event.pageX;
        const right_menu = this._right_menu;
        right_menu.style.top = pageY + "px";
        right_menu.style.left = pageX + "px";
        right_menu.style.display = "block";
      });
    }
    rightMenu() {
      const tab_ul = this._tab_ul;
      if (tab_ul !== null) {
        const lis = tab_ul.querySelectorAll("li>a");
        for (const li of lis) {
          this.bindRightMenu(li);
        }
      }
    }
    closeRightMenu(e) {
      const target = e.currentTarget;
      let right_menu = this._right_menu;
      if (right_menu === null) {
        right_menu = window.parent.document.querySelector(TAB_RIGT_MENU);
      }
      if (right_menu && !right_menu.contains(target)) {
        right_menu.style.display = "none";
      }
    }
    closeTabs(isAll) {
      if (isAll) {
        const tabs = this._tab_ul;
        const closes = tabs.querySelectorAll("li a button.close");
        for (const close of closes) {
          close.click();
        }
        const first_li = tabs.querySelector("li:first-child");
        const first_tab = first_li.querySelector("a");
        first_tab == null ? void 0 : first_tab.classList.add("acitve");
        const first_content_id = first_tab == null ? void 0 : first_tab.getAttribute("data-bs-target");
        const first_content = document.querySelector(first_content_id);
        if (first_content) {
          first_content == null ? void 0 : first_content.classList.add("acitve");
        }
        if (first_li) {
          first_li.style.marginLeft = "0px";
        }
      } else {
        const tabs = this._tab_ul;
        const closes = tabs.querySelectorAll("li a:not(.active)");
        for (const close of closes) {
          const c = close.querySelector("button.close");
          c.click();
        }
        const tab = this._current_tab;
        tab.classList.add("acitve");
        const content_id = tab == null ? void 0 : tab.getAttribute("data-bs-target");
        const first_content = document.querySelector(content_id);
        const first_li = tabs.querySelector("li:first-child");
        if (first_content) {
          first_content == null ? void 0 : first_content.classList.add("acitve");
        }
        if (first_li) {
          first_li.style.marginLeft = "0px";
        }
      }
    }
    bindRightMenuOper() {
      const refresh_tab_id = "#xq-tab-refresh";
      const tab_close_all_id = "#xq-tab-close-all";
      const tab_close_other_id = "#xq-tab-close-other";
      const refresh_tab = document.querySelector(refresh_tab_id);
      const tab_close_all = document.querySelector(tab_close_all_id);
      const tab_close_other = document.querySelector(tab_close_other_id);
      if (refresh_tab !== null) {
        refresh_tab.addEventListener("click", (event) => {
          var _a;
          event.preventDefault();
          const tab = this._current_tab;
          const target_id = tab.getAttribute("data-bs-target");
          if (target_id !== null) {
            const target_el = document.querySelector(target_id);
            if (target_el !== null) {
              const iframe = target_el.querySelector("iframe");
              if (iframe !== null) {
                (_a = iframe.contentWindow) == null ? void 0 : _a.location.reload();
              }
            }
          }
        });
      }
      if (tab_close_all !== null) {
        tab_close_all.addEventListener("click", (event) => {
          event.preventDefault();
          this.closeTabs(true);
        });
      }
      if (tab_close_other) {
        tab_close_other.addEventListener("click", (event) => {
          event.preventDefault();
          this.closeTabs(false);
        });
      }
    }
    init() {
      const fullscreen = document.querySelector(FULLSCREEN_BTN_SELECTOR);
      if (fullscreen !== null) {
        fullscreen.addEventListener("click", (event) => {
          event.preventDefault();
          this.fullScreen();
        });
      }
      const leftBtn = document.querySelector(LEFT_BTN_SELECTOR);
      if (leftBtn !== null) {
        leftBtn.addEventListener("click", (event) => {
          event.preventDefault();
          this.scrollLeft();
        });
      }
      const { body } = document;
      body.addEventListener("click", (event) => {
        this.closeRightMenu(event);
      });
      this.rightMenu();
      this.bindRightMenuOper();
      const rightBtn = document.querySelector(RIGHT_BTN_SELECTOR);
      if (rightBtn !== null) {
        rightBtn.addEventListener("click", (event) => {
          event.preventDefault();
          this.scrollRight();
        });
      }
    }
  };
  var tabs_toolbar = new XqTabsToolbar();
  domReady(() => {
    tabs_toolbar.init();
  });

  // src/ts/xq-dynamic-tabs.ts
  var TAB_NAV_UL_ID2 = "#xqkeji-tab-nav-ul";
  var TAB_CONTENT = "#xqkeji-tab-content";
  var TAB_NAV_ID2 = "#xqkeji-tab-nav";
  var TAB_CLOSE_SELECTOR = "#xqkeji-tab-nav-ul .nav-item .nav-link button.close";
  var TAB_ALL_SWITCH = "#xqkeji-tab-nav-ul .nav-item .nav-link";
  var TAB_MENU_CLASS = "xq-menu";
  var SIDEBAR_ID = "#xqkeji-sidebar";
  var SIDERBAR_A_CLASS_ACTIVE = "bg-primary";
  var SIDERBAR_A_CLASS = "bg-dark";
  var XQ_LOGOUT_CLASS = ".xq-logout";
  var XqDynamicTabs = class {
    constructor() {
      __publicField(this, "_tab");
      __publicField(this, "_tab_nav");
      __publicField(this, "_tab_content");
      this._tab = document.querySelector(TAB_NAV_ID2);
      this._tab_nav = document.querySelector(TAB_NAV_UL_ID2);
      this._tab_content = document.querySelector(TAB_CONTENT);
    }
    bindLogout() {
      const xq_logouts = document.querySelectorAll(XQ_LOGOUT_CLASS);
      if (xq_logouts) {
        for (const xq_logout of xq_logouts) {
          xq_logout.addEventListener("click", (event) => {
            event.preventDefault();
            const target = event.currentTarget;
            const action = target.getAttribute("href");
            const id = "xq-logout-form-" + Math.floor(Math.random() * 1e3).toString();
            const logout_form_str = '<form action="' + action + '" method="post" style="display: none;" id="' + id + '"></form>';
            append(document.body, logout_form_str);
            const logout_form = document.querySelector("#" + id);
            logout_form.submit();
          });
        }
      }
    }
    getPrevTab(current) {
      let prev = null;
      const tab_ul = this._tab_nav;
      const lis = tab_ul.querySelectorAll("li");
      for (const li of lis) {
        if (li === current) {
          break;
        }
        prev = li;
      }
      return prev;
    }
    addTab(id, title, url) {
      var _a;
      let refresh = false;
      const tab_nav = this._tab_nav;
      const tab_content = this._tab_content;
      const tab = tab_nav.querySelector("li > a#" + id + "-tab");
      if (tab === null) {
        let dom_str = '<li class="nav-item" role="presentation"><a class="nav-link" id="' + id + '-tab" data-bs-toggle="tab" data-bs-target="#' + id + '-tab-content" type="button" role="tab" aria-controls="' + id + '-tab-content" aria-selected="false">' + title + '<button type="button" class="close" aria-label="\u5173\u95ED"><span aria-hidden="true">&times;</span></button></a></li>';
        append(tab_nav, dom_str);
        dom_str = '<div class="tab-pane" id="' + id + '-tab-content" role="tabpanel" aria-labelledby="' + id + '-tab" ><iframe src="' + url + '" width="100%" frameborder="no" border="0" marginwidth="0" marginheight="0" ></iframe></div>';
        append(tab_content, dom_str);
        this.bindSwitch(id);
        this.activeTabById(id);
        const tab_a = document.querySelector("#" + id + "-tab");
        tabs_toolbar.bindRightMenu(tab_a);
        const close = tab_a.querySelector("button.close");
        this.bindClose(close);
      } else {
        refresh = true;
      }
      if (refresh) {
        const target_id = tab.getAttribute("aria-controls");
        const target_content = document.querySelector(target_id);
        if (target_content !== null) {
          const iframe = target_content.querySelector("iframe");
          if (iframe !== null) {
            (_a = iframe.contentWindow) == null ? void 0 : _a.location.reload();
          }
        }
        this.activeTabById(target_id.replace("-tab-content", ""));
      }
    }
    activeTabById(id) {
      const tab_nav = this._tab_nav;
      const tab_content = this._tab_content;
      const tab = tab_nav.querySelector("li > a#" + id + "-tab");
      if (tab === null) {
        return;
      }
      const current_tab = tab_nav.querySelector("li > a.active");
      if (current_tab) {
        current_tab.classList.remove("active");
      }
      if (tab) {
        tab.classList.add("active");
      }
      const current_content = tab_content.querySelector("div.active");
      if (current_content) {
        current_content.classList.remove("active");
      }
      const content = tab_content.querySelector("#" + id + "-tab-content");
      if (content) {
        content.classList.add("active");
      }
      this.scrollTyId(id);
    }
    scrollTyId(id) {
      const tab = this._tab;
      const tab_ul = this._tab_nav;
      const first_el = tab_ul.querySelector("li:first-child");
      const margin_left = Number.isNaN(Number.parseInt(first_el.style.marginLeft, 10)) ? 0 : Number.parseInt(first_el.style.marginLeft, 10);
      const abs_left_val = Math.abs(margin_left);
      const tab_all_width = tab_ul.clientWidth + abs_left_val;
      const visibleWidth = tab.clientWidth;
      let scrollVal = 0;
      if (tab_all_width > visibleWidth) {
        const active = tab_ul.querySelector("#" + id + "-tab");
        const lis = tab_ul.querySelectorAll("li>a");
        let preve_width = 0;
        for (const li of lis) {
          preve_width += li.clientWidth;
          if (li === active) {
            break;
          }
        }
        if (margin_left + preve_width > visibleWidth) {
          scrollVal = visibleWidth - preve_width;
          first_el.style.marginLeft = scrollVal < 0 ? scrollVal.toString() + "px" : "0px";
        }
      } else {
        first_el.style.marginLeft = "0px";
      }
    }
    bindCloses() {
      const closes = document.querySelectorAll(TAB_CLOSE_SELECTOR);
      for (const close of closes) {
        this.bindClose(close);
      }
    }
    bindClose(close) {
      close.addEventListener("click", (event) => {
        var _a, _b;
        event.preventDefault();
        const tab_content = this._tab_content;
        const target_el = event.currentTarget;
        const a = target_el.parentNode;
        const aria_id = a.getAttribute("id");
        const id = aria_id.replace("-tab", "");
        const li = a == null ? void 0 : a.parentNode;
        if (a.classList.contains("active")) {
          const prev = this.getPrevTab(li);
          const prevA = prev.querySelector("a");
          const prevId = prevA.getAttribute("id");
          const prev_id = prevId.replace("-tab", "");
          li.remove();
          (_a = tab_content.querySelector("#" + id + "-tab-content")) == null ? void 0 : _a.remove();
          this.activeTabById(prev_id);
        } else {
          li.remove();
          (_b = tab_content.querySelector("#" + id + "-tab-content")) == null ? void 0 : _b.remove();
          this.activeTabById(id);
        }
      });
    }
    bindAllSwitch() {
      const all_switch = document.querySelectorAll(TAB_ALL_SWITCH);
      for (const el of all_switch) {
        const id = el.getAttribute("id");
        if (id !== null) {
          this.bindSwitch(id.replace("-tab", ""));
        }
      }
    }
    bindSwitch(id) {
      const tab_nav = this._tab_nav;
      const tab = tab_nav.querySelector("li > a#" + id + "-tab");
      if (tab) {
        tab.addEventListener("click", (event) => {
          const target_el = event.currentTarget;
          const id2 = target_el.getAttribute("id");
          this.activeTabById(id2.replace("-tab", ""));
        });
      }
    }
    parent(element, selector) {
      let ancestor = element.parentNode;
      while (ancestor && ancestor.nodeType === Node.ELEMENT_NODE && ancestor.nodeType !== 3) {
        if (ancestor.matches(selector)) {
          return ancestor;
        }
        ancestor = ancestor.parentNode;
      }
      return null;
    }
    bindClick(menus) {
      for (const menu of menus) {
        if (!menu.classList.contains(TAB_MENU_CLASS)) {
          menu.addEventListener("click", (event) => {
            var _a;
            event.preventDefault();
            const target_el = event.currentTarget;
            const navs = document.querySelectorAll(SIDEBAR_ID + " nav");
            for (const nav of navs) {
              const a_el_es = nav.querySelectorAll("a." + SIDERBAR_A_CLASS_ACTIVE);
              if (a_el_es !== null) {
                for (const a_el of a_el_es) {
                  const classes = a_el.classList;
                  classes.remove(SIDERBAR_A_CLASS_ACTIVE);
                  classes.add(SIDERBAR_A_CLASS);
                }
              }
            }
            const url = target_el.getAttribute("href");
            const id = target_el.getAttribute("id");
            const title = (_a = target_el.querySelector("p")) == null ? void 0 : _a.textContent;
            this.addTab(id, title, url);
            const t_classlist = target_el.classList;
            t_classlist.remove(SIDERBAR_A_CLASS);
            t_classlist.add(SIDERBAR_A_CLASS_ACTIVE);
            const top_parent = parents(target_el, "#xqkeji-sidebar nav>ul>li")[0];
            const parent = target_el.parentElement;
            if (top_parent !== parent) {
              const top_el = top_parent.querySelector("a");
              if (top_el) {
                const top_classlist = top_el.classList;
                top_classlist.remove(SIDERBAR_A_CLASS);
                top_classlist.add(SIDERBAR_A_CLASS_ACTIVE);
              }
            }
          });
        } else {
          menu.addEventListener("click", (event) => {
            event.preventDefault();
            const target_el = event.currentTarget;
            const i_el = target_el.querySelector("i.xq-menu-expand");
            if (i_el !== null) {
              const li = target_el.parentNode;
              if (i_el.classList.contains("fa-angle-left")) {
                const ul = li.querySelector("ul");
                if (ul !== null) {
                  i_el.classList.remove("fa-angle-left");
                  i_el.classList.add("fa-angle-down");
                  if (ul.classList.contains("d-none")) {
                    ul.classList.remove("d-none");
                  }
                  ul.classList.add("d-block");
                } else {
                  let url;
                  url = target_el.getAttribute("href");
                  if (window.location.port === "3000") {
                    url = "http://localhost:9000" + url;
                  }
                  if (url !== null) {
                    fetch(url).then(async (response) => {
                      return response.json();
                    }).then((data) => {
                      let html;
                      html = "<ul>";
                      for (const menu2 of data) {
                        const url2 = menu2.url;
                        const id = menu2.id;
                        const name = menu2.name;
                        const has_submenu = menu2.has_submenu;
                        if (has_submenu) {
                          html += '<li class="nav-item"><a href="' + url2 + '" class="nav-link xq-menu" id="t_' + id + '">';
                          html += '<i class="nav-icon far fa-circle"></i><p>' + name + '</p><span class="float-end"><i class="fas xq-menu-expand fa-angle-left"></i></span>';
                          html += "</a></li>";
                        } else {
                          html += '<li class="nav-item"><a href="' + url2 + '" class="nav-link" id="t_' + id + '">';
                          html += '<i class="nav-icon far fa-dot-circle"></i><p>' + name + "</p>";
                          html += "</a></li>";
                        }
                      }
                      html += "</ul>";
                      after(target_el, html);
                      const li2 = target_el.parentNode;
                      const ul2 = li2.querySelector("ul");
                      i_el.classList.remove("fa-angle-left");
                      i_el.classList.add("fa-angle-down");
                      if (ul2 !== null) {
                        if (ul2.classList.contains("d-none")) {
                          ul2.classList.remove("d-none");
                        }
                        ul2.classList.add("d-block");
                        const links = ul2.querySelectorAll("a");
                        this.bindClick(links);
                      }
                    }).catch(() => {
                      console.log("url:" + url + ",fetch error");
                    });
                  }
                }
              } else if (li !== null) {
                const ul = li.querySelector("ul");
                if (ul !== null) {
                  if (ul.classList.contains("d-block")) {
                    ul.classList.remove("d-block");
                  }
                  ul.classList.add("d-none");
                  if (i_el.classList.contains("fa-angle-down")) {
                    i_el.classList.remove("fa-angle-down");
                  }
                  i_el.classList.add("fa-angle-left");
                }
              }
            }
          });
        }
      }
    }
  };
  domReady(() => {
    const xqTabs = new XqDynamicTabs();
    xqTabs.bindCloses();
    xqTabs.bindAllSwitch();
    const menus = document.querySelectorAll(SIDEBAR_ID + " a:not(" + XQ_LOGOUT_CLASS + ")");
    xqTabs.bindClick(menus);
    xqTabs.bindLogout();
    window.xqTabs = xqTabs;
  });
  var xq_dynamic_tabs_default = XqDynamicTabs;

  // src/ts/xq-treegrid.ts
  var DEFAULT_OPTIONS2 = {
    expanderTemplate: '<span class="xq-treegrid-expander"></span>',
    indentTemplate: '<span class="xq-treegrid-indent"></span>',
    indentClass: ".xq-treegrid-indent",
    expanderClass: ".xq-treegrid-expander",
    expanderExpandedClass: "xq-treegrid-expander-expanded",
    expanderCollapsedClass: "xq-treegrid-expander-collapsed",
    treeColumn: 2,
    xqTreegridClass: ".xq-treegrid",
    xqTreegridTopClass: ".xq-treegrid-top"
  };
  var XQ_TREE_GRID = ".xq-treegrid";
  var XQ_CHECK_ALL2 = ".xq-treegrid .xq-check-all";
  var XQ_COPY_BTN2 = ".xq-copy";
  var XQ_EDIT_BTN2 = ".xq-edit";
  var XQ_DETELE_BTN2 = ".xq-delete";
  var XQ_ADD_BTN2 = ".xq-treegrid .xq-add";
  var XQ_DRAGGER_TABLE2 = ".xq-treegrid.xq-dragger-table";
  var XQ_DRAGGER_CLASS = "xq-dragger-table";
  var XqTreegrid = class {
    constructor(options = {}) {
      __publicField(this, "_isInit", false);
      __publicField(this, "_isDrag", false);
      __publicField(this, "_container", document.body);
      __publicField(this, "_options", DEFAULT_OPTIONS2);
      if (options) {
        for (const option in options) {
          if (this._options[option]) {
            this._options[option] = options[option];
          }
        }
      }
      this.buildTreeGrid();
    }
    buildTreeGrid() {
      const container = document.querySelector(XQ_TREE_GRID);
      if (container) {
        this._container = container;
        let tbody = container.querySelector("tbody");
        if (tbody && tbody.querySelectorAll("tr").length > 1) {
          const firstTr = tbody.querySelector("tbody>tr:first-child");
          const firstId = firstTr.getAttribute("id");
          const firstTd = firstTr.querySelector("td:first-child");
          if (container.classList.contains(XQ_DRAGGER_CLASS)) {
            firstTd == null ? void 0 : firstTd.classList.add("xq-move");
          }
          tbody.setAttribute("id", "tbody_" + firstId);
          const trs = tbody.querySelectorAll("tbody>tr:not(:first-child)");
          for (const tr of trs) {
            const td = tr.querySelector("td:first-child");
            if (container.classList.contains(XQ_DRAGGER_CLASS)) {
              td == null ? void 0 : td.classList.add("xq-move");
            }
            const innerbody = document.createElement("tbody");
            innerbody.append(tr);
            const trId = tr.getAttribute("id");
            innerbody.setAttribute("id", "tbody_" + trId);
            tbody.after(innerbody);
            tbody = innerbody;
          }
        }
      }
    }
    init() {
      const top_nodes = this.getRootNodes();
      if (top_nodes) {
        for (const node of top_nodes) {
          this.initExpander(node);
          this.initIndent(node);
          this.bindChange(node);
          this.bindCopy(node);
          this.initDelete(node);
          this.initEdit(node);
        }
      }
      this.initAdd();
      this.bindCheckAll();
      this.bindDraggerTable();
    }
    bindCheckAll() {
      const check_all = document.querySelector(XQ_CHECK_ALL2);
      if (check_all) {
        check_all.addEventListener("click", (event) => {
          const target = event.currentTarget;
          const { checked } = target;
          const table = this._container;
          const checks = table == null ? void 0 : table.querySelectorAll("tr > td:first-child > input[type=checkbox]");
          for (const check of checks) {
            if (check === target) {
              continue;
            }
            if (checked) {
              check.checked = true;
            } else {
              check.checked = false;
            }
          }
        });
      }
    }
    initDelete(element) {
      const delBtn = element.querySelector(XQ_DETELE_BTN2);
      const that = this;
      if (delBtn) {
        delBtn.addEventListener("click", (event) => {
          const targetElement = event.currentTarget;
          const node = parents(targetElement, "tr")[0];
          let deleteUrl = "";
          if (this.isLeaf(node)) {
            const xq_url = this.getOption("xq-url");
            const id = this.getNodeId(node);
            const req_id = id.replace("xq_", "");
            const data = { id: req_id };
            if (!xq_url) {
              let url = window.location.href;
              url = url.slice(0, Math.max(0, url.lastIndexOf("/")));
              url += "/delete";
              deleteUrl = url;
            } else {
              deleteUrl = xq_url + "/delete";
            }
            if (deleteUrl.includes(":3000")) {
              deleteUrl = deleteUrl.replace(":3000", ":9000");
            }
            xqConfirm({
              content: "\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F",
              confirm() {
                fetch(deleteUrl, {
                  body: JSON.stringify(data),
                  headers: {
                    "content-type": "application/json"
                  },
                  method: "POST"
                }).then(async (response) => {
                  return response.json();
                }).then((data2) => {
                  xqConfirm({
                    content: data2.message,
                    confirm() {
                      if (data2.code === 200) {
                        that.deleteNode(node);
                      }
                    }
                  });
                });
              }
            });
          } else {
            xqConfirm({
              content: "\u5B58\u5728\u5B50\u680F\u76EE\u65E0\u6CD5\u8FDB\u884C\u5220\u9664\u64CD\u4F5C\uFF01"
            });
          }
        });
      }
    }
    deleteNode(element) {
      var _a;
      const options = this._options;
      const { treeColumn } = options;
      const pid = this.getParentNodeId(element);
      (_a = element.parentElement) == null ? void 0 : _a.remove();
      if (pid) {
        const parentNode = this.getNodeById(pid);
        if (parentNode && !this.isChildNodesExits(pid)) {
          parentNode.setAttribute("is_leaf", "1");
          const cell = parentNode.querySelector("td:nth-child(" + treeColumn.toString() + ")");
          const spanes = cell.querySelectorAll("span");
          for (const span of spanes) {
            span.remove();
          }
          this.initExpander(parentNode);
          this.initIndent(parentNode);
        }
      }
    }
    initEdit(element) {
      const editBtn = element.querySelector(XQ_EDIT_BTN2);
      if (editBtn) {
        editBtn.addEventListener("click", (event) => {
          const targetElement = event.currentTarget;
          const node = parents(targetElement, "tr")[0];
          const nodeId = this.getNodeId(node);
          let id = "";
          let name = "";
          id = nodeId.replace("xq_", "");
          if (id) {
            let url = targetElement.getAttribute("xq-url");
            if (!url) {
              url = window.location.href;
              if (url.includes(".html")) {
                url = url.slice(0, Math.max(0, url.lastIndexOf("/")));
                url = url + "/edit.html?id=" + id;
              } else {
                url = url.slice(0, Math.max(0, url.lastIndexOf("/")));
                url = url + "/edit/" + id;
              }
            }
            const text = node.querySelector("#name_" + id);
            name = text.getAttribute("value") + "\u8BBE\u7F6E";
            window.parent.window.xqTabs.addTab("treegrid-edit-" + id, name, url);
          }
        });
      }
    }
    expanderNode(element, callBack = () => {
    }) {
      const options = this._options;
      const { treeColumn } = options;
      const { expanderClass } = options;
      const { expanderCollapsedClass } = options;
      const { expanderExpandedClass } = options;
      const cell = element.querySelector("td:nth-child(" + treeColumn.toString() + ")");
      if (cell && !this.isLeaf(element)) {
        const expander = cell.querySelector(expanderClass);
        const id = element.getAttribute("id");
        if (expander.classList.contains(expanderCollapsedClass)) {
          expander.classList.remove(expanderCollapsedClass);
          expander.classList.add(expanderExpandedClass);
          if (!this.isChildNodesExits(id)) {
            let xq_url = this.getOption("xq-url");
            if (!xq_url) {
              let url = window.location.href;
              url = url.slice(0, Math.max(0, url.lastIndexOf("/")));
              const req_id = id.replace("xq_", "");
              url = url + "/subnode/" + req_id;
              xq_url = url;
            } else {
              const req_id = id.replace("xq_", "");
              xq_url = xq_url + "/subnode/" + req_id;
            }
            if (xq_url.includes(":3000")) {
              xq_url = xq_url.replace(":3000", ":9000");
            }
            this.dynamicNodes(element, xq_url, callBack);
          } else {
            const chileNodes = this.getChildNodes(id);
            for (const node of chileNodes) {
              this.expandRecursive(node);
            }
          }
        } else if (expander.classList.contains(expanderExpandedClass)) {
          expander.classList.remove(expanderExpandedClass);
          expander.classList.add(expanderCollapsedClass);
          const chileNodes = this.getChildNodes(id);
          for (const node of chileNodes) {
            this.collapseRecursive(node);
          }
        }
      }
    }
    initExpander(element) {
      const options = this._options;
      const { treeColumn } = options;
      const { expanderTemplate } = options;
      const { expanderClass } = options;
      const { expanderCollapsedClass } = options;
      const cell = element.querySelector("td:nth-child(" + treeColumn.toString() + ")");
      if (cell) {
        const spanes = cell.querySelectorAll("span");
        for (const span of spanes) {
          span.remove();
        }
        prepend(cell, expanderTemplate);
        if (!this.isLeaf(element)) {
          const expander = cell.querySelector(expanderClass);
          if (expander) {
            expander.classList.add(expanderCollapsedClass);
            expander.addEventListener("click", () => {
              this.expanderNode(element);
            });
          }
        }
      }
    }
    initIndent(element) {
      const options = this._options;
      const { treeColumn } = options;
      const { indentTemplate } = options;
      const { expanderClass } = options;
      const expander = element.querySelector(expanderClass);
      if (expander) {
        const cell = element.querySelector("td:nth-child(" + treeColumn.toString() + ")");
        if (cell) {
          const depth = this.getDepth(element);
          for (let i = 1; i < depth; i++) {
            prepend(cell, indentTemplate);
          }
        }
      }
    }
    expandRecursive(element) {
      if (element.classList.contains("d-none")) {
        element.classList.remove("d-none");
      }
    }
    collapseRecursive(element) {
      const options = this._options;
      const { treeColumn } = options;
      const { expanderClass } = options;
      const { expanderCollapsedClass } = options;
      const { expanderExpandedClass } = options;
      element.classList.add("d-none");
      const check = element.querySelector("td:first-child .form-check-input");
      if (check) {
        check.checked = false;
      }
      if (!this.isLeaf(element)) {
        const childNodes = this.getChildNodes(this.getNodeId(element));
        const cell = element.querySelector("td:nth-child(" + treeColumn.toString() + ")");
        if (cell) {
          const expander = cell.querySelector(expanderClass);
          expander.classList.remove(expanderExpandedClass);
          expander.classList.add(expanderCollapsedClass);
        }
        for (const node of childNodes) {
          this.collapseRecursive(node);
        }
      }
    }
    bindCopy(element) {
      const copy_btn = element.querySelector(XQ_COPY_BTN2);
      if (copy_btn) {
        copy_btn.addEventListener("click", () => {
          let id = element.getAttribute("id");
          id = id.replace("xq_", "");
          if (id) {
            this.copy(id);
            xqConfirm({
              content: "\u5DF2\u7ECF\u5C06id\u590D\u5236\u5230\u7C98\u8D34\u677F"
            });
          }
        });
      }
    }
    copy(text) {
      const el = document.createElement("input");
      el.setAttribute("value", text);
      document.body.append(el);
      el.select();
      document.execCommand("copy");
      el.remove();
    }
    bindChange(element) {
      const table = this._container;
      let id = element.getAttribute("id");
      id = id == null ? void 0 : id.replace("xq_", "");
      const textes = element.querySelectorAll("input,select");
      for (const text of textes) {
        text.addEventListener("change", (event) => {
          const targetElement = event.currentTarget;
          let value = null;
          value = targetElement.type === "checkbox" ? targetElement.checked : targetElement.value;
          const target_id = targetElement.getAttribute("id");
          const field = target_id == null ? void 0 : target_id.slice(0, Math.max(0, target_id.indexOf("_")));
          const pid = table == null ? void 0 : table.getAttribute("pid");
          let xq_url = table == null ? void 0 : table.getAttribute("xq-url");
          const data = { id, field, value };
          if (!xq_url) {
            let url = window.location.href;
            if (pid) {
              url = url.replace("/" + pid, "");
            }
            url = url.slice(0, Math.max(0, url.lastIndexOf("/")));
            url += "/change";
            xq_url = url;
          } else {
            xq_url += "/change";
          }
          if (xq_url.includes(":3000")) {
            xq_url = xq_url.replace(":3000", ":9000");
          }
          fetch(xq_url, {
            body: JSON.stringify(data),
            headers: {
              "content-type": "application/json"
            },
            method: "POST"
          }).then(async (response) => {
            return response.json();
          }).then((data2) => {
            console.log(data2);
          });
        });
      }
    }
    initAdd() {
      const options = this._options;
      const { treeColumn } = options;
      const { expanderClass } = options;
      const { expanderCollapsedClass } = options;
      const { expanderExpandedClass } = options;
      const xqTreegripAdd = document.querySelector(XQ_ADD_BTN2);
      if (xqTreegripAdd) {
        xqTreegripAdd.addEventListener("click", () => {
          const table = this.getTreeContainer();
          const checks = table.querySelectorAll("tbody > tr > td:first-child > input[type=checkbox]");
          const ids = [];
          for (const check of checks) {
            if (check.checked) {
              const tr = parents(check, "tr")[0];
              const nodeId = this.getNodeId(tr);
              ids.push(nodeId);
            }
          }
          let xq_url = this.getOption("xq-url");
          if (!xq_url) {
            let url = window.location.href;
            url = url.slice(0, Math.max(0, url.lastIndexOf("/")));
            url += "/add";
            xq_url = url;
          } else {
            xq_url += "/add";
          }
          if (ids.length > 0) {
            for (const id of ids) {
              const node = this.getNodeById(id);
              const depth = this.getDepth(node);
              const req_id = id.replace("xq_", "");
              const data = { pid: req_id, depth };
              fetch(xq_url, {
                body: JSON.stringify(data),
                headers: {
                  "content-type": "application/json"
                },
                method: "POST"
              }).then(async (response) => {
                return response.json();
              }).then((data2) => {
                const node2 = this.getNodeById(id);
                if (node2) {
                  if (this.isLeaf(node2)) {
                    const cell = node2.querySelector("td:nth-child(" + treeColumn.toString() + ")");
                    const spanes = cell.querySelectorAll("span");
                    for (const span of spanes) {
                      span.remove();
                    }
                    node2.setAttribute("is_leaf", "0");
                    this.initExpander(node2);
                    this.initIndent(node2);
                    const expander = cell.querySelector(expanderClass);
                    if (expander) {
                      expander.classList.remove(expanderCollapsedClass);
                      expander.classList.add(expanderExpandedClass);
                    }
                    this.addNode(node2, data2);
                  } else {
                    const self = this;
                    const cell = node2.querySelector("td:nth-child(" + treeColumn.toString() + ")");
                    const expander = cell.querySelector(expanderClass);
                    if (expander.classList.contains(expanderCollapsedClass)) {
                      this.expanderNode(node2, () => {
                        const childNodes = self.getChildNodes(id);
                        const lastNode = childNodes[childNodes.length - 1];
                        self.addNode(lastNode, data2);
                      });
                    } else {
                      const childNodes = self.getChildNodes(id);
                      const lastNode = childNodes[childNodes.length - 1];
                      self.addNode(lastNode, data2);
                    }
                  }
                }
              });
            }
          } else {
            const data = { pid: "" };
            fetch(xq_url, {
              body: JSON.stringify(data),
              headers: {
                "content-type": "application/json"
              },
              method: "POST"
            }).then(async (response) => {
              return response.json();
            }).then((data2) => {
              const node = table.querySelector("tbody:last-of-type>tr");
              if (node === null) {
                this.addNode(table, data2);
              } else {
                this.addNode(node, data2);
              }
            });
          }
        });
      }
    }
    getTreeContainer() {
      return this._container;
    }
    getOption(key) {
      const options = this._options;
      if (key in options) {
        return options[key];
      }
      const container = this._container;
      if (container.hasAttribute(key)) {
        return String(container.getAttribute(key));
      }
      return "";
    }
    addNode(element, category) {
      var _a;
      const table = this.getTreeContainer();
      const id = category.id;
      const pid = category.pid;
      const is_leaf = category.is_leaf;
      const depth = category.depth;
      const content = category.content;
      const tr = document.createElement("tr");
      const trId = "xq_" + id;
      tr.setAttribute("id", "xq_" + id);
      tr.setAttribute("pid", pid);
      tr.setAttribute("is_leaf", is_leaf);
      tr.setAttribute("depth", depth);
      tr.innerHTML = content;
      this.initExpander(tr);
      this.initIndent(tr);
      this.bindCopy(tr);
      this.bindChange(tr);
      this.initDelete(tr);
      this.initEdit(tr);
      const td = tr.querySelector("td:first-child");
      if (table.classList.contains(XQ_DRAGGER_CLASS)) {
        td == null ? void 0 : td.classList.add("xq-move");
      }
      const tbody = document.createElement("tbody");
      tbody.setAttribute("id", "tbody_" + trId);
      tbody.append(tr);
      if (element.tagName === "TABLE") {
        const thead = table.querySelector("thead");
        thead == null ? void 0 : thead.after(tbody);
      } else {
        (_a = element.parentElement) == null ? void 0 : _a.after(tbody);
      }
      if (this.isDrag() && typeof sortable !== "undefined") {
        sortable(XQ_DRAGGER_TABLE2);
      }
      return tr;
    }
    dynamicNodes(element, url, callBack = () => {
    }) {
      let newElement = element;
      const depth = this.getDepth(element);
      fetch(url).then(async (response) => {
        return response.json();
      }).then((data) => {
        for (const category of data) {
          category.depth = depth + 1;
          newElement = this.addNode(newElement, category);
        }
        callBack();
      });
    }
    getRootNodes() {
      const container = this._container;
      const topClass = this.getOption("xqTreegridTopClass");
      const tops = container.querySelectorAll("tbody>" + topClass);
      if (tops) {
        return tops;
      }
      return null;
    }
    getRootId() {
      const container = this._container;
      const topClass = this.getOption("xqTreegridTopClass");
      const top = container.querySelector("tbody>" + topClass);
      if (top) {
        return top.getAttribute("pid");
      }
      return null;
    }
    getNodeId(element) {
      const nodeId = element.getAttribute("id");
      if (nodeId) {
        return nodeId;
      }
      return "";
    }
    getNodeById(id) {
      const container = this.getTreeContainer();
      if (!id.startsWith("xq_")) {
        id = "xq_" + id;
      }
      return container.querySelector("#" + id);
    }
    getChildNodes(id) {
      if (id.startsWith("xq_")) {
        id = id.replace("xq_", "");
      }
      const container = this.getTreeContainer();
      const nodes = container.querySelectorAll('tr[pid="' + id + '"]');
      return nodes;
    }
    isChildNodesExits(id) {
      const nodes = this.getChildNodes(id);
      return nodes.length > 0;
    }
    getAllNodes() {
      const container = this.getTreeContainer();
      return container.querySelectorAll("tr");
    }
    getParent(element) {
      const parentNodeId = element.getAttribute("pid");
      if (parentNodeId) {
        return this.getNodeById(parentNodeId);
      }
      return null;
    }
    getParentNodeId(element) {
      const parentNodeId = element.getAttribute("pid");
      if (parentNodeId) {
        return parentNodeId;
      }
      return null;
    }
    getDepth(element) {
      const depth = element.getAttribute("depth");
      if (depth) {
        return Number.parseInt(depth, 10);
      }
      return 0;
    }
    isLeaf(element) {
      const is_leaf = element.getAttribute("is_leaf");
      return Number.parseInt(is_leaf, 10) !== 0;
    }
    isRoot(element) {
      return this.getDepth(element) === 0;
    }
    isNode(element) {
      return this.getNodeId(element) !== null;
    }
    isDrag() {
      return this._isDrag;
    }
    dragElement(e) {
      const { item } = e.detail;
      const tr = item.querySelector("tr");
      if (tr && !this.isLeaf(tr)) {
        const node = item.querySelector("tr");
        const childNodes = this.getChildNodes(this.getNodeId(node));
        for (const child of childNodes) {
          item.append(child);
        }
      }
    }
    dropElement(e) {
      const { item } = e.detail;
      const trs = item.querySelectorAll("tbody>tr:not(:first-child)");
      if (trs) {
        const table = this.getTreeContainer();
        for (const tr of trs) {
          const trId = tr.getAttribute("id");
          const tbodyId = "#tbody_" + trId;
          const tbody = table.querySelector(tbodyId);
          if (tbody) {
            item.after(tbody);
            tbody.append(tr);
          }
        }
      }
    }
    dragUpdate(e) {
      const dragger_table = document.querySelector(XQ_DRAGGER_TABLE2);
      const { offsetLeft } = dragger_table;
      const element = e.detail.item;
      const td = element.querySelector("td:first-child");
      const tr = element.querySelector("tr");
      const { offsetWidth } = td;
      const offset = e.detail.dragEvent.pageX - offsetLeft - offsetWidth;
      const previousElement = e.detail.item.previousElementSibling;
      if (previousElement.tagName === "THEAD") {
        const rootId = this.getRootId().replace("xq_", "");
        tr.setAttribute("pid", rootId);
        tr.setAttribute("depth", "1");
        const xqTopClass = this.getOption("xqTreegridTopClass").slice(1);
        if (!tr.classList.contains(xqTopClass)) {
          tr.classList.add(xqTopClass);
        }
        this.initExpander(tr);
        this.initIndent(tr);
      } else if (offset > 0) {
        const pTr = previousElement.querySelector("tr");
        this.expanderNode(pTr, () => {
          const pid = this.getNodeId(pTr).replace("xq_", "");
          const depth = this.getDepth(pTr) + 1;
          tr.setAttribute("pid", pid);
          tr.setAttribute("depth", depth.toString());
          const xqTopClass = this.getOption("xqTreegridTopClass").slice(1);
          if (tr.classList.contains(xqTopClass)) {
            tr.classList.remove(xqTopClass);
          }
          this.initExpander(tr);
          this.initIndent(tr);
        });
      } else {
        const previousTr = previousElement.querySelector("tr");
        const parentTr = this.getParent(previousTr);
        const parentDepth = this.getDepth(parentTr);
        const previousDepth = this.getDepth(previousTr);
        let depth = this.getDepth(tr);
        if (depth === previousDepth) {
          const pid = this.getParentNodeId(parentTr).replace("xq_", "");
          tr.setAttribute("pid", pid);
          tr.setAttribute("depth", parentDepth.toString());
        } else {
          const pid = this.getParentNodeId(previousTr).replace("xq_", "");
          tr.setAttribute("pid", pid);
          tr.setAttribute("depth", previousDepth.toString());
        }
        depth = this.getDepth(tr);
        if (depth === 1) {
          const xqTopClass = this.getOption("xqTreegridTopClass").slice(1);
          if (!tr.classList.contains(xqTopClass)) {
            tr.classList.add(xqTopClass);
          }
        }
        this.initExpander(tr);
        this.initIndent(tr);
      }
      if (!this.isLeaf(tr)) {
        const id = this.getNodeId(tr);
        const children = this.getChildNodes(id);
        if (children) {
          this.reloadNodes(children);
        }
      }
    }
    reloadNode(element) {
      const tr = element.querySelector("tr");
      const parent = this.getParent(tr);
      const parentId = this.getParentNodeId(tr).replace("xq_", "");
      const depth = this.getDepth(parent) + 1;
      tr.setAttribute("pid", parentId);
      tr.setAttribute("depth", depth.toString());
      this.initExpander(tr);
      this.initIndent(tr);
      if (!this.isLeaf(tr)) {
        const id = this.getNodeId(tr);
        const children = this.getChildNodes(id);
        if (children) {
          this.reloadNodes(children);
        }
      }
    }
    reloadNodes(elements) {
      for (const element of elements) {
        this.reloadNode(element);
      }
    }
    getPreviousVisableNode(element) {
      const previousElement = element.previousElementSibling;
      const tr = previousElement.querySelector("tr");
      if (tr) {
        if (tr.classList.contains("d-none")) {
          return this.getPreviousVisableNode(previousElement);
        }
        return previousElement;
      }
      return null;
    }
    bindDraggerTable() {
      const dragger_table = document.querySelector(XQ_DRAGGER_TABLE2);
      if (dragger_table && typeof sortable !== "undefined") {
        sortable(XQ_DRAGGER_TABLE2, {
          items: "tbody",
          handle: ".xq-move",
          placeholder: '<tbody><tr><td colspan="99">&nbsp;</td></tr><tbody>'
        });
        this._isDrag = true;
        dragger_table.addEventListener("sortstart", (e) => {
          this.dragElement(e);
        });
        dragger_table.addEventListener("sortstop", (e) => {
          this.dropElement(e);
          this.dragUpdate(e);
        });
      }
    }
  };
  domReady(() => {
    const treegrid = new XqTreegrid();
    treegrid.init();
    const tooltipEl = document.querySelector(XQ_ADD_BTN2);
    if (tooltipEl) {
      const tooltip = new bootstrap.Tooltip(tooltipEl);
    }
  });
  var xq_treegrid_default = XqTreegrid;
})();
//# sourceMappingURL=xq-page.js.map
