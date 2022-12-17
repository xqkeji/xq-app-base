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
  var append = (element, dom) => {
    const node = document.createRange().createContextualFragment(dom);
    element.append(node);
  };
  var after = (element, dom) => {
    const node = document.createRange().createContextualFragment(dom);
    element.after(node);
  };

  // src/ts/xq-sidebar-overlay.ts
  var SIDEBAR_ID = "#xqkeji-sidebar";
  var Config = {
    scrollbarTheme: "os-theme-light",
    scrollbarAutoHide: "leave"
  };
  var XqSidebarOverlay = class {
    constructor() {
      __publicField(this, "_instance", null);
    }
    init() {
      if (typeof OverlayScrollbars !== "undefined") {
        const instance = this._instance;
        if (!instance) {
          this._instance = OverlayScrollbars(document.querySelector(SIDEBAR_ID), {
            className: Config.scrollbarTheme,
            sizeAutoCapable: true,
            scrollbars: {
              autoHide: Config.scrollbarAutoHide,
              clickScrolling: true
            }
          });
        }
      }
    }
    destroy() {
      const instance = this._instance;
      if (instance) {
        instance.destroy();
        this._instance = null;
      }
    }
  };
  var overlay_scroll = new XqSidebarOverlay();
  domReady(() => {
    overlay_scroll.init();
  });

  // src/ts/xq-mini-menu.ts
  var CLASS_NAME_SIDEBAR_MINI = "mini";
  var SELECTOR_MENU_BTN = '[xq-widget="xq-mini-menu"]';
  var SELECTOR_SIDEBAR = "#xqkeji-sidebar";
  var SELECTOR_SIDEBAR_HEADER = "#xqkeji-header";
  var SELECTOR_SIDEBAR_CONTENT = "#xqkeji-content";
  var SELECTOR_SIDEBAR_FOOTER = "#xqkeji-footer";
  var XqMiniMenu = class {
    constructor() {
      __publicField(this, "_sidebar");
      __publicField(this, "_header");
      __publicField(this, "_content");
      __publicField(this, "_footer");
      __publicField(this, "_btn");
      __publicField(this, "_bodyClass");
      const bodyElement = document.body;
      this._bodyClass = bodyElement.classList;
      this._sidebar = document.querySelector(SELECTOR_SIDEBAR);
      this._header = document.querySelector(SELECTOR_SIDEBAR_HEADER);
      this._content = document.querySelector(SELECTOR_SIDEBAR_CONTENT);
      this._footer = document.querySelector(SELECTOR_SIDEBAR_FOOTER);
      this._btn = document.querySelector(SELECTOR_MENU_BTN);
    }
    init() {
      const btn = this._btn;
      if (btn) {
        btn.addEventListener("click", (event) => {
          event.preventDefault();
          const header = this._header;
          if (header) {
            if (header.classList.contains(CLASS_NAME_SIDEBAR_MINI)) {
              header.classList.remove(CLASS_NAME_SIDEBAR_MINI);
            } else {
              header.classList.add(CLASS_NAME_SIDEBAR_MINI);
            }
          }
          const sidebar = this._sidebar;
          if (sidebar) {
            if (sidebar.classList.contains(CLASS_NAME_SIDEBAR_MINI)) {
              sidebar.classList.remove(CLASS_NAME_SIDEBAR_MINI);
              overlay_scroll.init();
            } else {
              sidebar.classList.add(CLASS_NAME_SIDEBAR_MINI);
              overlay_scroll.destroy();
            }
          }
          const content = this._content;
          if (content) {
            if (content.classList.contains(CLASS_NAME_SIDEBAR_MINI)) {
              content.classList.remove(CLASS_NAME_SIDEBAR_MINI);
            } else {
              content.classList.add(CLASS_NAME_SIDEBAR_MINI);
            }
          }
          const footer = this._footer;
          if (footer) {
            if (footer.classList.contains(CLASS_NAME_SIDEBAR_MINI)) {
              footer.classList.remove(CLASS_NAME_SIDEBAR_MINI);
            } else {
              footer.classList.add(CLASS_NAME_SIDEBAR_MINI);
            }
          }
        });
      }
    }
  };
  domReady(() => {
    const data = new XqMiniMenu();
    data.init();
  });
  var xq_mini_menu_default = XqMiniMenu;

  // src/ts/xq-module-menu.ts
  var TOP_MODULE_MENU_id = "#xqkeji-top-nav";
  var XqModuleMenu = class {
    menuSwitch() {
      const container = document.querySelector(TOP_MODULE_MENU_id);
      if (container !== null) {
        const menus = container.querySelectorAll("li a:not([xq-widget])");
        for (const menu of menus) {
          menu.addEventListener("click", (event) => {
            event.preventDefault();
            const el = event.currentTarget;
            const target_id = el.getAttribute("href");
            const target_el = document.querySelector(target_id);
            if (target_el == null ? void 0 : target_el.classList.contains("d-none")) {
              for (const menu2 of menus) {
                if (menu2 !== el) {
                  if (!menu2.classList.contains("bg-dark")) {
                    menu2.classList.add("bg-dark");
                  }
                  if (menu2.classList.contains("bg-primary")) {
                    menu2.classList.remove("bg-primary");
                  }
                  const menu_target_id = menu2.getAttribute("href");
                  const target = document.querySelector(menu_target_id);
                  if (!(target == null ? void 0 : target.classList.contains("d-none"))) {
                    target == null ? void 0 : target.classList.add("d-none");
                  }
                } else {
                  if (menu2.classList.contains("bg-dark")) {
                    menu2.classList.remove("bg-dark");
                  }
                  if (!menu2.classList.contains("bg-primary")) {
                    menu2.classList.add("bg-primary");
                  }
                  const menu_target_id = menu2.getAttribute("href");
                  const target = document.querySelector(menu_target_id);
                  if (target == null ? void 0 : target.classList.contains("d-none")) {
                    target == null ? void 0 : target.classList.remove("d-none");
                  }
                }
              }
            }
          });
        }
      }
    }
    init() {
      this.menuSwitch();
    }
  };
  domReady(() => {
    const module_menu = new XqModuleMenu();
    module_menu.init();
  });
  var xq_module_menu_default = XqModuleMenu;

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
  var SIDEBAR_ID2 = "#xqkeji-sidebar";
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
            const navs = document.querySelectorAll(SIDEBAR_ID2 + " nav");
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
    const menus = document.querySelectorAll(SIDEBAR_ID2 + " a:not(" + XQ_LOGOUT_CLASS + ")");
    xqTabs.bindClick(menus);
    xqTabs.bindLogout();
    window.xqTabs = xqTabs;
  });
  var xq_dynamic_tabs_default = XqDynamicTabs;
})();
//# sourceMappingURL=xq-admin-page.js.map
