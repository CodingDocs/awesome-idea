import {
  __commonJS,
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

// node_modules/dayjs/plugin/objectSupport.js
var require_objectSupport = __commonJS({
  "node_modules/dayjs/plugin/objectSupport.js"(exports, module) {
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
    !function(t, n) {
      typeof exports == "object" && typeof module != "undefined" ? module.exports = n() : typeof define == "function" && define.amd ? define(n) : (t = typeof globalThis != "undefined" ? globalThis : t || self).dayjs_plugin_objectSupport = n();
    }(exports, function() {
      "use strict";
      return function(t, n, e) {
        var i = n.prototype, r = function(t2) {
          var n2, r2 = t2.date, o2 = t2.utc, a2 = {};
          if (!((n2 = r2) instanceof Date) && !(n2 instanceof Array) && n2 instanceof Object) {
            if (!Object.keys(r2).length)
              return new Date();
            var u2 = o2 ? e.utc() : e();
            Object.keys(r2).forEach(function(t3) {
              var n3, e2;
              a2[n3 = t3, e2 = i.$utils().p(n3), e2 === "date" ? "day" : e2] = r2[t3];
            });
            var d2 = a2.day || (a2.year || a2.month >= 0 ? 1 : u2.date()), c = a2.year || u2.year(), f = a2.month >= 0 ? a2.month : a2.year || a2.day ? 0 : u2.month(), s = a2.hour || 0, h = a2.minute || 0, b = a2.second || 0, y = a2.millisecond || 0;
            return o2 ? new Date(Date.UTC(c, f, d2, s, h, b, y)) : new Date(c, f, d2, s, h, b, y);
          }
          return r2;
        }, o = i.parse;
        i.parse = function(t2) {
          t2.date = r.bind(this)(t2), o.bind(this)(t2);
        };
        var a = i.set, u = i.add, d = function(t2, n2, e2, i2) {
          if (i2 === void 0 && (i2 = 1), n2 instanceof Object) {
            var r2 = Object.keys(n2), o2 = this;
            return r2.forEach(function(e3) {
              o2 = t2.bind(o2)(n2[e3] * i2, e3);
            }), o2;
          }
          return t2.bind(this)(n2 * i2, e2);
        };
        i.set = function(t2, n2) {
          return n2 = n2 === void 0 ? t2 : n2, d.bind(this)(function(t3, n3) {
            return a.bind(this)(n3, t3);
          }, n2, t2);
        }, i.add = function(t2, n2) {
          return d.bind(this)(u, t2, n2);
        }, i.subtract = function(t2, n2) {
          return d.bind(this)(u, t2, n2, -1);
        };
      };
    });
  }
});

// dep:dayjs_plugin_objectSupport
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
var dayjs_plugin_objectSupport_default = require_objectSupport();
export {
  dayjs_plugin_objectSupport_default as default
};
//# sourceMappingURL=dayjs_plugin_objectSupport.js.map
