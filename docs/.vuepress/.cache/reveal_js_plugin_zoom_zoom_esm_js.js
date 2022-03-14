import {
  init_define_ARTICLE_INFO_LOCALES,
  init_define_BACK_TO_TOP_LOCALES,
  init_define_CODE_COPY_LOCALES,
  init_define_CODE_COPY_OPIONS,
  init_define_CODE_DEMO_OPTIONS,
  init_define_COMMENT_OPTIONS,
  init_define_EXTERNAL_LINK_ICON_LOCALES,
  init_define_MERMAID_OPTIONS,
  init_define_PAGINATION_LOCALES,
  init_define_PHOTO_SWIPE_LOCALES,
  init_define_PHOTO_SWIPE_OPTIONS,
  init_define_PWA_LOCALES,
  init_define_READING_TIME_LOCALES,
  init_define_REVEAL_CONFIG,
  init_define_WALINE_LOCALES
} from "./chunk-TLB7GS64.js";

// dep:reveal_js_plugin_zoom_zoom_esm_js
init_define_ARTICLE_INFO_LOCALES();
init_define_BACK_TO_TOP_LOCALES();
init_define_CODE_COPY_LOCALES();
init_define_CODE_COPY_OPIONS();
init_define_CODE_DEMO_OPTIONS();
init_define_COMMENT_OPTIONS();
init_define_MERMAID_OPTIONS();
init_define_PAGINATION_LOCALES();
init_define_PHOTO_SWIPE_LOCALES();
init_define_PHOTO_SWIPE_OPTIONS();
init_define_PWA_LOCALES();
init_define_READING_TIME_LOCALES();
init_define_REVEAL_CONFIG();
init_define_WALINE_LOCALES();
init_define_EXTERNAL_LINK_ICON_LOCALES();

// node_modules/reveal.js/plugin/zoom/zoom.esm.js
init_define_ARTICLE_INFO_LOCALES();
init_define_BACK_TO_TOP_LOCALES();
init_define_CODE_COPY_LOCALES();
init_define_CODE_COPY_OPIONS();
init_define_CODE_DEMO_OPTIONS();
init_define_COMMENT_OPTIONS();
init_define_MERMAID_OPTIONS();
init_define_PAGINATION_LOCALES();
init_define_PHOTO_SWIPE_LOCALES();
init_define_PHOTO_SWIPE_OPTIONS();
init_define_PWA_LOCALES();
init_define_READING_TIME_LOCALES();
init_define_REVEAL_CONFIG();
init_define_WALINE_LOCALES();
init_define_EXTERNAL_LINK_ICON_LOCALES();
var e = { id: "zoom", init: function(e2) {
  e2.getRevealElement().addEventListener("mousedown", function(n) {
    var o = /Linux/.test(window.navigator.platform) ? "ctrl" : "alt", i = (e2.getConfig().zoomKey ? e2.getConfig().zoomKey : o) + "Key", d = e2.getConfig().zoomLevel ? e2.getConfig().zoomLevel : 2;
    n[i] && !e2.isOverview() && (n.preventDefault(), t.to({ x: n.clientX, y: n.clientY, scale: d, pan: false }));
  });
}, destroy: function() {
  t.reset();
} };
var t = function() {
  var e2 = 1, n = 0, o = 0, i = -1, d = -1, l = "transform" in document.body.style;
  function s(t2, n2) {
    var o2 = r();
    if (t2.width = t2.width || 1, t2.height = t2.height || 1, t2.x -= (window.innerWidth - t2.width * n2) / 2, t2.y -= (window.innerHeight - t2.height * n2) / 2, l)
      if (n2 === 1)
        document.body.style.transform = "";
      else {
        var i2 = o2.x + "px " + o2.y + "px", d2 = "translate(" + -t2.x + "px," + -t2.y + "px) scale(" + n2 + ")";
        document.body.style.transformOrigin = i2, document.body.style.transform = d2;
      }
    else
      n2 === 1 ? (document.body.style.position = "", document.body.style.left = "", document.body.style.top = "", document.body.style.width = "", document.body.style.height = "", document.body.style.zoom = "") : (document.body.style.position = "relative", document.body.style.left = -(o2.x + t2.x) / n2 + "px", document.body.style.top = -(o2.y + t2.y) / n2 + "px", document.body.style.width = 100 * n2 + "%", document.body.style.height = 100 * n2 + "%", document.body.style.zoom = n2);
    e2 = n2, document.documentElement.classList && (e2 !== 1 ? document.documentElement.classList.add("zoomed") : document.documentElement.classList.remove("zoomed"));
  }
  function c() {
    var t2 = 0.12 * window.innerWidth, i2 = 0.12 * window.innerHeight, d2 = r();
    o < i2 ? window.scroll(d2.x, d2.y - 14 / e2 * (1 - o / i2)) : o > window.innerHeight - i2 && window.scroll(d2.x, d2.y + (1 - (window.innerHeight - o) / i2) * (14 / e2)), n < t2 ? window.scroll(d2.x - 14 / e2 * (1 - n / t2), d2.y) : n > window.innerWidth - t2 && window.scroll(d2.x + (1 - (window.innerWidth - n) / t2) * (14 / e2), d2.y);
  }
  function r() {
    return { x: window.scrollX !== void 0 ? window.scrollX : window.pageXOffset, y: window.scrollY !== void 0 ? window.scrollY : window.pageYOffset };
  }
  return l && (document.body.style.transition = "transform 0.8s ease"), document.addEventListener("keyup", function(n2) {
    e2 !== 1 && n2.keyCode === 27 && t.out();
  }), document.addEventListener("mousemove", function(t2) {
    e2 !== 1 && (n = t2.clientX, o = t2.clientY);
  }), { to: function(n2) {
    if (e2 !== 1)
      t.out();
    else {
      if (n2.x = n2.x || 0, n2.y = n2.y || 0, n2.element) {
        var o2 = n2.element.getBoundingClientRect();
        n2.x = o2.left - 20, n2.y = o2.top - 20, n2.width = o2.width + 40, n2.height = o2.height + 40;
      }
      n2.width !== void 0 && n2.height !== void 0 && (n2.scale = Math.max(Math.min(window.innerWidth / n2.width, window.innerHeight / n2.height), 1)), n2.scale > 1 && (n2.x *= n2.scale, n2.y *= n2.scale, s(n2, n2.scale), n2.pan !== false && (i = setTimeout(function() {
        d = setInterval(c, 1e3 / 60);
      }, 800)));
    }
  }, out: function() {
    clearTimeout(i), clearInterval(d), s({ x: 0, y: 0 }, 1), e2 = 1;
  }, magnify: function(e3) {
    this.to(e3);
  }, reset: function() {
    this.out();
  }, zoomLevel: function() {
    return e2;
  } };
}();
function zoom_esm_default() {
  return e;
}

// dep:reveal_js_plugin_zoom_zoom_esm_js
var reveal_js_plugin_zoom_zoom_esm_js_default = zoom_esm_default;
export {
  reveal_js_plugin_zoom_zoom_esm_js_default as default
};
/*!
 * reveal.js Zoom plugin
 */
//# sourceMappingURL=reveal_js_plugin_zoom_zoom_esm_js.js.map
