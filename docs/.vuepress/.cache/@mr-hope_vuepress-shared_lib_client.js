import {
  computed,
  defineComponent,
  h
} from "./chunk-JUPGPTLN.js";
import "./chunk-5ZIXWFPQ.js";
import {
  __spreadProps,
  __spreadValues,
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

// dep:@mr-hope_vuepress-shared_lib_client
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

// node_modules/@mr-hope/vuepress-shared/lib/client/index.js
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
import { useRouteLocale as r, usePageData as i } from "@vuepress/client";
import "/Users/guide/Documents/GitHub/awesome-idea-tutorial/node_modules/@mr-hope/vuepress-shared/lib/client/styles/message.scss";
var s = (t) => `${t.charAt(0).toUpperCase()}${t.slice(1)}`;
var o = (t) => `${t.charAt(0).toUpperCase()}${t.slice(1).toLowerCase()}`;
var a;
var u = { exports: {} };
var c = u.exports = function() {
  var t = 1e3, e = 6e4, n = 36e5, r2 = "millisecond", i2 = "second", s2 = "minute", o2 = "hour", a2 = "day", u2 = "week", c2 = "month", f2 = "quarter", d2 = "year", h3 = "date", l2 = "Invalid Date", m2 = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, $2 = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, v2 = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_") }, p2 = function(t2, e2, n2) {
    var r3 = String(t2);
    return !r3 || r3.length >= e2 ? t2 : "" + Array(e2 + 1 - r3.length).join(n2) + t2;
  }, y2 = { s: p2, z: function(t2) {
    var e2 = -t2.utcOffset(), n2 = Math.abs(e2), r3 = Math.floor(n2 / 60), i3 = n2 % 60;
    return (e2 <= 0 ? "+" : "-") + p2(r3, 2, "0") + ":" + p2(i3, 2, "0");
  }, m: function t2(e2, n2) {
    if (e2.date() < n2.date())
      return -t2(n2, e2);
    var r3 = 12 * (n2.year() - e2.year()) + (n2.month() - e2.month()), i3 = e2.clone().add(r3, c2), s3 = n2 - i3 < 0, o3 = e2.clone().add(r3 + (s3 ? -1 : 1), c2);
    return +(-(r3 + (n2 - i3) / (s3 ? i3 - o3 : o3 - i3)) || 0);
  }, a: function(t2) {
    return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2);
  }, p: function(t2) {
    return { M: c2, y: d2, w: u2, d: a2, D: h3, h: o2, m: s2, s: i2, ms: r2, Q: f2 }[t2] || String(t2 || "").toLowerCase().replace(/s$/, "");
  }, u: function(t2) {
    return t2 === void 0;
  } }, g2 = "en", M2 = {};
  M2[g2] = v2;
  var D2 = function(t2) {
    return t2 instanceof w2;
  }, _2 = function(t2, e2, n2) {
    var r3;
    if (!t2)
      return g2;
    if (typeof t2 == "string")
      M2[t2] && (r3 = t2), e2 && (M2[t2] = e2, r3 = t2);
    else {
      var i3 = t2.name;
      M2[i3] = t2, r3 = i3;
    }
    return !n2 && r3 && (g2 = r3), r3 || !n2 && g2;
  }, Y2 = function(t2, e2) {
    if (D2(t2))
      return t2.clone();
    var n2 = typeof e2 == "object" ? e2 : {};
    return n2.date = t2, n2.args = arguments, new w2(n2);
  }, S2 = y2;
  S2.l = _2, S2.i = D2, S2.w = function(t2, e2) {
    return Y2(t2, { locale: e2.$L, utc: e2.$u, x: e2.$x, $offset: e2.$offset });
  };
  var w2 = function() {
    function v3(t2) {
      this.$L = _2(t2.locale, null, true), this.parse(t2);
    }
    var p3 = v3.prototype;
    return p3.parse = function(t2) {
      this.$d = function(t3) {
        var e2 = t3.date, n2 = t3.utc;
        if (e2 === null)
          return new Date(NaN);
        if (S2.u(e2))
          return new Date();
        if (e2 instanceof Date)
          return new Date(e2);
        if (typeof e2 == "string" && !/Z$/i.test(e2)) {
          var r3 = e2.match(m2);
          if (r3) {
            var i3 = r3[2] - 1 || 0, s3 = (r3[7] || "0").substring(0, 3);
            return n2 ? new Date(Date.UTC(r3[1], i3, r3[3] || 1, r3[4] || 0, r3[5] || 0, r3[6] || 0, s3)) : new Date(r3[1], i3, r3[3] || 1, r3[4] || 0, r3[5] || 0, r3[6] || 0, s3);
          }
        }
        return new Date(e2);
      }(t2), this.$x = t2.x || {}, this.init();
    }, p3.init = function() {
      var t2 = this.$d;
      this.$y = t2.getFullYear(), this.$M = t2.getMonth(), this.$D = t2.getDate(), this.$W = t2.getDay(), this.$H = t2.getHours(), this.$m = t2.getMinutes(), this.$s = t2.getSeconds(), this.$ms = t2.getMilliseconds();
    }, p3.$utils = function() {
      return S2;
    }, p3.isValid = function() {
      return !(this.$d.toString() === l2);
    }, p3.isSame = function(t2, e2) {
      var n2 = Y2(t2);
      return this.startOf(e2) <= n2 && n2 <= this.endOf(e2);
    }, p3.isAfter = function(t2, e2) {
      return Y2(t2) < this.startOf(e2);
    }, p3.isBefore = function(t2, e2) {
      return this.endOf(e2) < Y2(t2);
    }, p3.$g = function(t2, e2, n2) {
      return S2.u(t2) ? this[e2] : this.set(n2, t2);
    }, p3.unix = function() {
      return Math.floor(this.valueOf() / 1e3);
    }, p3.valueOf = function() {
      return this.$d.getTime();
    }, p3.startOf = function(t2, e2) {
      var n2 = this, r3 = !!S2.u(e2) || e2, f3 = S2.p(t2), l3 = function(t3, e3) {
        var i3 = S2.w(n2.$u ? Date.UTC(n2.$y, e3, t3) : new Date(n2.$y, e3, t3), n2);
        return r3 ? i3 : i3.endOf(a2);
      }, m3 = function(t3, e3) {
        return S2.w(n2.toDate()[t3].apply(n2.toDate("s"), (r3 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)), n2);
      }, $3 = this.$W, v4 = this.$M, p4 = this.$D, y3 = "set" + (this.$u ? "UTC" : "");
      switch (f3) {
        case d2:
          return r3 ? l3(1, 0) : l3(31, 11);
        case c2:
          return r3 ? l3(1, v4) : l3(0, v4 + 1);
        case u2:
          var g3 = this.$locale().weekStart || 0, M3 = ($3 < g3 ? $3 + 7 : $3) - g3;
          return l3(r3 ? p4 - M3 : p4 + (6 - M3), v4);
        case a2:
        case h3:
          return m3(y3 + "Hours", 0);
        case o2:
          return m3(y3 + "Minutes", 1);
        case s2:
          return m3(y3 + "Seconds", 2);
        case i2:
          return m3(y3 + "Milliseconds", 3);
        default:
          return this.clone();
      }
    }, p3.endOf = function(t2) {
      return this.startOf(t2, false);
    }, p3.$set = function(t2, e2) {
      var n2, u3 = S2.p(t2), f3 = "set" + (this.$u ? "UTC" : ""), l3 = (n2 = {}, n2[a2] = f3 + "Date", n2[h3] = f3 + "Date", n2[c2] = f3 + "Month", n2[d2] = f3 + "FullYear", n2[o2] = f3 + "Hours", n2[s2] = f3 + "Minutes", n2[i2] = f3 + "Seconds", n2[r2] = f3 + "Milliseconds", n2)[u3], m3 = u3 === a2 ? this.$D + (e2 - this.$W) : e2;
      if (u3 === c2 || u3 === d2) {
        var $3 = this.clone().set(h3, 1);
        $3.$d[l3](m3), $3.init(), this.$d = $3.set(h3, Math.min(this.$D, $3.daysInMonth())).$d;
      } else
        l3 && this.$d[l3](m3);
      return this.init(), this;
    }, p3.set = function(t2, e2) {
      return this.clone().$set(t2, e2);
    }, p3.get = function(t2) {
      return this[S2.p(t2)]();
    }, p3.add = function(r3, f3) {
      var h4, l3 = this;
      r3 = Number(r3);
      var m3 = S2.p(f3), $3 = function(t2) {
        var e2 = Y2(l3);
        return S2.w(e2.date(e2.date() + Math.round(t2 * r3)), l3);
      };
      if (m3 === c2)
        return this.set(c2, this.$M + r3);
      if (m3 === d2)
        return this.set(d2, this.$y + r3);
      if (m3 === a2)
        return $3(1);
      if (m3 === u2)
        return $3(7);
      var v4 = (h4 = {}, h4[s2] = e, h4[o2] = n, h4[i2] = t, h4)[m3] || 1, p4 = this.$d.getTime() + r3 * v4;
      return S2.w(p4, this);
    }, p3.subtract = function(t2, e2) {
      return this.add(-1 * t2, e2);
    }, p3.format = function(t2) {
      var e2 = this, n2 = this.$locale();
      if (!this.isValid())
        return n2.invalidDate || l2;
      var r3 = t2 || "YYYY-MM-DDTHH:mm:ssZ", i3 = S2.z(this), s3 = this.$H, o3 = this.$m, a3 = this.$M, u3 = n2.weekdays, c3 = n2.months, f3 = function(t3, n3, i4, s4) {
        return t3 && (t3[n3] || t3(e2, r3)) || i4[n3].substr(0, s4);
      }, d3 = function(t3) {
        return S2.s(s3 % 12 || 12, t3, "0");
      }, h4 = n2.meridiem || function(t3, e3, n3) {
        var r4 = t3 < 12 ? "AM" : "PM";
        return n3 ? r4.toLowerCase() : r4;
      }, m3 = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: a3 + 1, MM: S2.s(a3 + 1, 2, "0"), MMM: f3(n2.monthsShort, a3, c3, 3), MMMM: f3(c3, a3), D: this.$D, DD: S2.s(this.$D, 2, "0"), d: String(this.$W), dd: f3(n2.weekdaysMin, this.$W, u3, 2), ddd: f3(n2.weekdaysShort, this.$W, u3, 3), dddd: u3[this.$W], H: String(s3), HH: S2.s(s3, 2, "0"), h: d3(1), hh: d3(2), a: h4(s3, o3, true), A: h4(s3, o3, false), m: String(o3), mm: S2.s(o3, 2, "0"), s: String(this.$s), ss: S2.s(this.$s, 2, "0"), SSS: S2.s(this.$ms, 3, "0"), Z: i3 };
      return r3.replace($2, function(t3, e3) {
        return e3 || m3[t3] || i3.replace(":", "");
      });
    }, p3.utcOffset = function() {
      return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
    }, p3.diff = function(r3, h4, l3) {
      var m3, $3 = S2.p(h4), v4 = Y2(r3), p4 = (v4.utcOffset() - this.utcOffset()) * e, y3 = this - v4, g3 = S2.m(this, v4);
      return g3 = (m3 = {}, m3[d2] = g3 / 12, m3[c2] = g3, m3[f2] = g3 / 3, m3[u2] = (y3 - p4) / 6048e5, m3[a2] = (y3 - p4) / 864e5, m3[o2] = y3 / n, m3[s2] = y3 / e, m3[i2] = y3 / t, m3)[$3] || y3, l3 ? g3 : S2.a(g3);
    }, p3.daysInMonth = function() {
      return this.endOf(c2).$D;
    }, p3.$locale = function() {
      return M2[this.$L];
    }, p3.locale = function(t2, e2) {
      if (!t2)
        return this.$L;
      var n2 = this.clone(), r3 = _2(t2, e2, true);
      return r3 && (n2.$L = r3), n2;
    }, p3.clone = function() {
      return S2.w(this.$d, this);
    }, p3.toDate = function() {
      return new Date(this.valueOf());
    }, p3.toJSON = function() {
      return this.isValid() ? this.toISOString() : null;
    }, p3.toISOString = function() {
      return this.$d.toISOString();
    }, p3.toString = function() {
      return this.$d.toUTCString();
    }, v3;
  }(), O2 = w2.prototype;
  return Y2.prototype = O2, [["$ms", r2], ["$s", i2], ["$m", s2], ["$H", o2], ["$W", a2], ["$M", c2], ["$y", d2], ["$D", h3]].forEach(function(t2) {
    O2[t2[1]] = function(e2) {
      return this.$g(e2, t2[0], t2[1]);
    };
  }), Y2.extend = function(t2, e2) {
    return t2.$i || (t2(e2, w2, Y2), t2.$i = true), Y2;
  }, Y2.locale = _2, Y2.isDayjs = D2, Y2.unix = function(t2) {
    return Y2(1e3 * t2);
  }, Y2.en = M2[g2], Y2.Ls = M2, Y2.p = {}, Y2;
}();
var f = { exports: {} };
var d = f.exports = (a = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, function(t, e, n) {
  var r2 = e.prototype, i2 = r2.format;
  n.en.formats = a, r2.format = function(t2) {
    t2 === void 0 && (t2 = "YYYY-MM-DDTHH:mm:ssZ");
    var e2 = this.$locale().formats, n2 = function(t3, e3) {
      return t3.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(t4, n3, r3) {
        var i3 = r3 && r3.toUpperCase();
        return n3 || e3[r3] || a[r3] || e3[i3].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(t5, e4, n4) {
          return e4 || n4.slice(1);
        });
      });
    }(t2, e2 === void 0 ? {} : e2);
    return i2.call(this, n2);
  };
});
var h2 = { exports: {} };
var l = h2.exports = function(t, e, n) {
  var r2 = e.prototype, i2 = function(t2) {
    var e2, i3 = t2.date, s3 = t2.utc, o3 = {};
    if (!((e2 = i3) instanceof Date) && !(e2 instanceof Array) && e2 instanceof Object) {
      if (!Object.keys(i3).length)
        return new Date();
      var a3 = s3 ? n.utc() : n();
      Object.keys(i3).forEach(function(t3) {
        var e3, n2;
        o3[e3 = t3, n2 = r2.$utils().p(e3), n2 === "date" ? "day" : n2] = i3[t3];
      });
      var u3 = o3.day || (o3.year || o3.month >= 0 ? 1 : a3.date()), c2 = o3.year || a3.year(), f2 = o3.month >= 0 ? o3.month : o3.year || o3.day ? 0 : a3.month(), d2 = o3.hour || 0, h3 = o3.minute || 0, l2 = o3.second || 0, m2 = o3.millisecond || 0;
      return s3 ? new Date(Date.UTC(c2, f2, u3, d2, h3, l2, m2)) : new Date(c2, f2, u3, d2, h3, l2, m2);
    }
    return i3;
  }, s2 = r2.parse;
  r2.parse = function(t2) {
    t2.date = i2.bind(this)(t2), s2.bind(this)(t2);
  };
  var o2 = r2.set, a2 = r2.add, u2 = function(t2, e2, n2, r3) {
    if (r3 === void 0 && (r3 = 1), e2 instanceof Object) {
      var i3 = Object.keys(e2), s3 = this;
      return i3.forEach(function(n3) {
        s3 = t2.bind(s3)(e2[n3] * r3, n3);
      }), s3;
    }
    return t2.bind(this)(e2 * r3, n2);
  };
  r2.set = function(t2, e2) {
    return e2 = e2 === void 0 ? t2 : e2, u2.bind(this)(function(t3, e3) {
      return o2.bind(this)(e3, t3);
    }, e2, t2);
  }, r2.add = function(t2, e2) {
    return u2.bind(this)(a2, t2, e2);
  }, r2.subtract = function(t2, e2) {
    return u2.bind(this)(a2, t2, e2, -1);
  };
};
var m = { exports: {} };
var $ = m.exports = function() {
  var t = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 }, e = {};
  return function(n, r2, i2) {
    var s2, o2 = function(t2, n2, r3) {
      r3 === void 0 && (r3 = {});
      var i3 = new Date(t2), s3 = function(t3, n3) {
        n3 === void 0 && (n3 = {});
        var r4 = n3.timeZoneName || "short", i4 = t3 + "|" + r4, s4 = e[i4];
        return s4 || (s4 = new Intl.DateTimeFormat("en-US", { hour12: false, timeZone: t3, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", timeZoneName: r4 }), e[i4] = s4), s4;
      }(n2, r3);
      return s3.formatToParts(i3);
    }, a2 = function(e2, n2) {
      for (var r3 = o2(e2, n2), s3 = [], a3 = 0; a3 < r3.length; a3 += 1) {
        var u3 = r3[a3], c3 = u3.type, f2 = u3.value, d2 = t[c3];
        d2 >= 0 && (s3[d2] = parseInt(f2, 10));
      }
      var h3 = s3[3], l2 = h3 === 24 ? 0 : h3, m2 = s3[0] + "-" + s3[1] + "-" + s3[2] + " " + l2 + ":" + s3[4] + ":" + s3[5] + ":000", $2 = +e2;
      return (i2.utc(m2).valueOf() - ($2 -= $2 % 1e3)) / 6e4;
    }, u2 = r2.prototype;
    u2.tz = function(t2, e2) {
      t2 === void 0 && (t2 = s2);
      var n2 = this.utcOffset(), r3 = this.toDate(), o3 = r3.toLocaleString("en-US", { timeZone: t2 }), a3 = Math.round((r3 - new Date(o3)) / 1e3 / 60), u3 = i2(o3).$set("millisecond", this.$ms).utcOffset(15 * -Math.round(r3.getTimezoneOffset() / 15) - a3, true);
      if (e2) {
        var c3 = u3.utcOffset();
        u3 = u3.add(n2 - c3, "minute");
      }
      return u3.$x.$timezone = t2, u3;
    }, u2.offsetName = function(t2) {
      var e2 = this.$x.$timezone || i2.tz.guess(), n2 = o2(this.valueOf(), e2, { timeZoneName: t2 }).find(function(t3) {
        return t3.type.toLowerCase() === "timezonename";
      });
      return n2 && n2.value;
    };
    var c2 = u2.startOf;
    u2.startOf = function(t2, e2) {
      if (!this.$x || !this.$x.$timezone)
        return c2.call(this, t2, e2);
      var n2 = i2(this.format("YYYY-MM-DD HH:mm:ss:SSS"));
      return c2.call(n2, t2, e2).tz(this.$x.$timezone, true);
    }, i2.tz = function(t2, e2, n2) {
      var r3 = n2 && e2, o3 = n2 || e2 || s2, u3 = a2(+i2(), o3);
      if (typeof t2 != "string")
        return i2(t2).tz(o3);
      var c3 = function(t3, e3, n3) {
        var r4 = t3 - 60 * e3 * 1e3, i3 = a2(r4, n3);
        if (e3 === i3)
          return [r4, e3];
        var s3 = a2(r4 -= 60 * (i3 - e3) * 1e3, n3);
        return i3 === s3 ? [r4, i3] : [t3 - 60 * Math.min(i3, s3) * 1e3, Math.max(i3, s3)];
      }(i2.utc(t2, r3).valueOf(), u3, o3), f2 = c3[0], d2 = c3[1], h3 = i2(f2).utcOffset(d2);
      return h3.$x.$timezone = o3, h3;
    }, i2.tz.guess = function() {
      return Intl.DateTimeFormat().resolvedOptions().timeZone;
    }, i2.tz.setDefault = function(t2) {
      s2 = t2;
    };
  };
}();
var v = { exports: {} };
var p = v.exports = function() {
  var t = "minute", e = /[+-]\d\d(?::?\d\d)?/g, n = /([+-]|\d\d)/g;
  return function(r2, i2, s2) {
    var o2 = i2.prototype;
    s2.utc = function(t2) {
      return new i2({ date: t2, utc: true, args: arguments });
    }, o2.utc = function(e2) {
      var n2 = s2(this.toDate(), { locale: this.$L, utc: true });
      return e2 ? n2.add(this.utcOffset(), t) : n2;
    }, o2.local = function() {
      return s2(this.toDate(), { locale: this.$L, utc: false });
    };
    var a2 = o2.parse;
    o2.parse = function(t2) {
      t2.utc && (this.$u = true), this.$utils().u(t2.$offset) || (this.$offset = t2.$offset), a2.call(this, t2);
    };
    var u2 = o2.init;
    o2.init = function() {
      if (this.$u) {
        var t2 = this.$d;
        this.$y = t2.getUTCFullYear(), this.$M = t2.getUTCMonth(), this.$D = t2.getUTCDate(), this.$W = t2.getUTCDay(), this.$H = t2.getUTCHours(), this.$m = t2.getUTCMinutes(), this.$s = t2.getUTCSeconds(), this.$ms = t2.getUTCMilliseconds();
      } else
        u2.call(this);
    };
    var c2 = o2.utcOffset;
    o2.utcOffset = function(r3, i3) {
      var s3 = this.$utils().u;
      if (s3(r3))
        return this.$u ? 0 : s3(this.$offset) ? c2.call(this) : this.$offset;
      if (typeof r3 == "string" && (r3 = function(t2) {
        t2 === void 0 && (t2 = "");
        var r4 = t2.match(e);
        if (!r4)
          return null;
        var i4 = ("" + r4[0]).match(n) || ["-", 0, 0], s4 = i4[0], o4 = 60 * +i4[1] + +i4[2];
        return o4 === 0 ? 0 : s4 === "+" ? o4 : -o4;
      }(r3), r3 === null))
        return this;
      var o3 = Math.abs(r3) <= 16 ? 60 * r3 : r3, a3 = this;
      if (i3)
        return a3.$offset = o3, a3.$u = r3 === 0, a3;
      if (r3 !== 0) {
        var u3 = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
        (a3 = this.local().add(o3 + u3, t)).$offset = o3, a3.$x.$localOffset = u3;
      } else
        a3 = this.utc();
      return a3;
    };
    var f2 = o2.format;
    o2.format = function(t2) {
      var e2 = t2 || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
      return f2.call(this, e2);
    }, o2.valueOf = function() {
      var t2 = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || new Date().getTimezoneOffset());
      return this.$d.valueOf() - 6e4 * t2;
    }, o2.isUTC = function() {
      return !!this.$u;
    }, o2.toISOString = function() {
      return this.toDate().toISOString();
    }, o2.toString = function() {
      return this.toDate().toUTCString();
    };
    var d2 = o2.toDate;
    o2.toDate = function(t2) {
      return t2 === "s" && this.$offset ? s2(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : d2.call(this);
    };
    var h3 = o2.diff;
    o2.diff = function(t2, e2, n2) {
      if (t2 && this.$u === t2.$u)
        return h3.call(this, t2, e2, n2);
      var r3 = this.local(), i3 = s2(t2).local();
      return h3.call(r3, i3, e2, n2);
    };
  };
}();
c.extend(d), c.extend(l), c.extend(p), c.extend($);
var y = { name: "zh-cn", weekdays: "\u661F\u671F\u65E5_\u661F\u671F\u4E00_\u661F\u671F\u4E8C_\u661F\u671F\u4E09_\u661F\u671F\u56DB_\u661F\u671F\u4E94_\u661F\u671F\u516D".split("_"), weekdaysShort: "\u5468\u65E5_\u5468\u4E00_\u5468\u4E8C_\u5468\u4E09_\u5468\u56DB_\u5468\u4E94_\u5468\u516D".split("_"), weekdaysMin: "\u65E5_\u4E00_\u4E8C_\u4E09_\u56DB_\u4E94_\u516D".split("_"), months: "\u4E00\u6708_\u4E8C\u6708_\u4E09\u6708_\u56DB\u6708_\u4E94\u6708_\u516D\u6708_\u4E03\u6708_\u516B\u6708_\u4E5D\u6708_\u5341\u6708_\u5341\u4E00\u6708_\u5341\u4E8C\u6708".split("_"), monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"), ordinal: (t, e) => e === "W" ? `${t}\u5468` : `${t}\u65E5`, weekStart: 1, yearStart: 4, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY\u5E74M\u6708D\u65E5", LLL: "YYYY\u5E74M\u6708D\u65E5Ah\u70B9mm\u5206", LLLL: "YYYY\u5E74M\u6708D\u65E5ddddAh\u70B9mm\u5206", l: "YYYY/M/D", ll: "YYYY\u5E74M\u6708D\u65E5", lll: "YYYY\u5E74M\u6708D\u65E5 HH:mm", llll: "YYYY\u5E74M\u6708D\u65E5dddd HH:mm" }, relativeTime: { future: "%s\u5185", past: "%s\u524D", s: "\u51E0\u79D2", m: "1 \u5206\u949F", mm: "%d \u5206\u949F", h: "1 \u5C0F\u65F6", hh: "%d \u5C0F\u65F6", d: "1 \u5929", dd: "%d \u5929", M: "1 \u4E2A\u6708", MM: "%d \u4E2A\u6708", y: "1 \u5E74", yy: "%d \u5E74" }, meridiem: (t, e) => {
  const n = 100 * t + e;
  return n < 600 ? "\u51CC\u6668" : n < 900 ? "\u65E9\u4E0A" : n < 1100 ? "\u4E0A\u5348" : n < 1300 ? "\u4E2D\u5348" : n < 1800 ? "\u4E0B\u5348" : "\u665A\u4E0A";
} };
var g = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_") };
c.locale("zh", y), c.locale("en", g);
var M = c;
var D = (t, e = {}) => {
  const { lang: n, timezone: r2, type: i2 } = e;
  M.locale(((t2 = "en") => {
    const e2 = t2.toLowerCase();
    return e2 === "zh" || e2 === "zh-cn" ? "zh" : (e2 === "en-us" || e2 === "en-uk" || e2 === "en" || console.warn(`${t2} locale missing in config`), "en");
  })(n));
  const s2 = r2 ? M(t).tz(r2).format("LL") : M(t).format("LL"), o2 = r2 ? M(t).tz(r2).format("HH:mm") : M(t).format("HH:mm");
  return i2 === "date" ? s2 : i2 === "time" ? o2 : `${s2} ${o2}`;
};
var _ = (t, e = {}) => {
  const { timezone: n } = e;
  if (t) {
    if (M(t instanceof Date ? t : t.trim()).isValid()) {
      const r3 = n ? M(t).tz(n) : M(t), i2 = r3.year(), s2 = r3.month() + 1, o2 = r3.date(), a2 = r3.hour(), u2 = r3.minute(), c2 = r3.second(), f2 = r3.millisecond(), d2 = a2 === 0 && u2 === 0 && c2 === 0 && f2 === 0, h3 = r3.toDate();
      return { display: D(h3, __spreadValues({ type: d2 ? "date" : "full" }, e)), value: h3, detail: __spreadValues({ year: i2, month: s2, day: o2 }, d2 ? {} : { hour: a2, minute: u2, second: c2 }) };
    }
    const r2 = /(?:(\d{2,4})[/-](\d{1,2})[/-](\d{1,2}))?\s*(?:(\d{1,2}):(\d{1,2})(?::(\d{1,2}))?)?/u.exec(t.trim());
    if (r2) {
      const [, t2, n2, i2, s2, o2, a2] = r2, u2 = (t3) => t3 === void 0 ? void 0 : Number(t3), c2 = (t3) => s2 && o2 && !a2 ? 0 : t3, f2 = { year: ((t3) => t3 && t3 < 100 ? t3 + 2e3 : t3)(u2(t2)), month: u2(n2), day: u2(i2), hour: u2(s2), minute: u2(o2), second: c2(u2(a2)) }, d2 = t2 === void 0 && n2 === void 0 && i2 === void 0, h3 = s2 === void 0 && o2 === void 0 && a2 === void 0, l2 = M(__spreadProps(__spreadValues({}, f2), { month: f2.month - 1 })).toDate();
      return { display: D(l2, __spreadValues({ type: h3 ? "date" : d2 ? "time" : "full" }, e)), value: d2 ? void 0 : l2, detail: h3 ? { year: f2.year, month: f2.month, day: f2.day } : d2 ? { hour: f2.hour, minute: f2.minute, second: f2.second } : f2 };
    }
  }
  return null;
};
var Y = (t, e) => {
  const n = _(typeof t == "number" ? new Date(t) : t), r2 = _(typeof e == "number" ? new Date(e) : e);
  return n && n.value ? r2 && r2.value ? r2.value.getTime() - n.value.getTime() : -1 : 1;
};
var S = (t, e = false) => t ? Array.isArray(t) ? t.map((t2) => typeof t2 == "string" ? { name: t2 } : t2) : typeof t == "string" ? [{ name: t }] : typeof t == "object" && t.name ? [t] : (console.error(`Expect 'author' to be \`AuthorInfo[] | AuthorInfo | string[] | string ${e ? "" : "| false"} | undefined\`, but got`, t), []) : [];
var w = (t) => {
  if (t) {
    if (Array.isArray(t))
      return t.map(s);
    if (typeof t == "string")
      return [s(t)];
    console.error("Expect 'category' to be `string[] | string | undefined`, but got", t);
  }
  return [];
};
var O = (t) => {
  if (t) {
    if (Array.isArray(t))
      return t;
    if (typeof t == "string")
      return [t];
    console.error("Expect 'tag' to be `string[] | string | undefined`, but got", t);
  }
  return [];
};
var b = (t) => {
  if (typeof t != "string" || t === "")
    return false;
  const e = /^(?:\w+:)?\/\/(\S+)$/u.exec(t);
  if (!e)
    return false;
  const n = e[1];
  return !!n && (/^localhost[:?\d]*(?:[^:?\d]\S*)?$/u.test(n) || /^[^\s.]+\.\S{2,}$/u.test(n));
};
var L = (t) => t.startsWith("/");
var T = defineComponent({ name: "IconBase", props: { name: { type: String, default: "" }, color: { type: String, default: "currentColor" } }, setup: (t, { slots: n }) => () => {
  var _a;
  return h("svg", { xmlns: "http://www.w3.org/2000/svg", class: ["icon", `${t.name}-icon`], viewBox: "0 0 1024 1024", ariaLabelledby: t.name }, [h("title", { id: t.name, lang: "en" }, `${t.name} icon`), h("g", { fill: t.color }, (_a = n.default) == null ? void 0 : _a.call(n))]);
} });
var x = (t) => {
  const e = r();
  return computed(() => t[e.value]);
};
var H = () => computed(() => i().value.title);
var z = /* @__PURE__ */ new Map();
var A;
document.addEventListener("mousedown", (t) => {
  A = t;
}), document.addEventListener("mouseup", (t) => {
  for (const e of z.values())
    for (const { documentHandler: n } of e)
      n(t, A);
});
var C = (t, e) => {
  let n = [];
  return Array.isArray(e.arg) ? n = e.arg : e.arg instanceof HTMLElement && n.push(e.arg), (r2, i2) => {
    const s2 = e.instance.popperRef, o2 = r2.target, a2 = i2 == null ? void 0 : i2.target, u2 = !e || !e.instance, c2 = !o2 || !a2, f2 = t.contains(o2) || t.contains(a2), d2 = t === o2, h3 = n.length && n.some((t2) => t2 == null ? void 0 : t2.contains(o2)) || n.length && n.includes(a2), l2 = s2 && (s2.contains(o2) || s2.contains(a2));
    u2 || c2 || f2 || d2 || h3 || l2 || e.value(r2, i2);
  };
};
var E = { beforeMount(t, e) {
  z.has(t) || z.set(t, []), z.get(t).push({ documentHandler: C(t, e), bindingFn: e.value });
}, updated(t, e) {
  z.has(t) || z.set(t, []);
  const n = z.get(t), r2 = n.findIndex((t2) => t2.bindingFn === e.oldValue), i2 = { documentHandler: C(t, e), bindingFn: e.value };
  r2 >= 0 ? n.splice(r2, 1, i2) : n.push(i2);
}, unmounted(t) {
  z.delete(t);
} };
var U = /#.*$/u;
var N = (t) => {
  const e = U.exec(t);
  return e ? e[0] : "";
};
var I = (t) => decodeURI(t).replace(U, "").replace(/(index)?\.(md|html)$/, "");
var k = (t, e) => {
  if (e === void 0)
    return false;
  const n = I(t.path), r2 = I(e), i2 = N(e);
  return i2 ? i2 === t.hash && (!r2 || n === r2) : n === r2;
};
var W = class {
  constructor() {
    const t = "message-container", e = document.getElementById(t);
    e ? this.containerElement = e : (this.containerElement = document.createElement("div"), this.containerElement.id = t, document.body.appendChild(this.containerElement));
  }
  pop(t, e = 2e3) {
    const n = document.createElement("div");
    n.className = "message move-in", n.innerHTML = t, this.containerElement.appendChild(n), e > 0 && setTimeout(() => {
      this.close(n);
    }, e);
  }
  close(t) {
    t.className = t.className.replace("move-in", ""), t.className += "move-out", t.addEventListener("animationend", () => {
      t.remove();
    });
  }
};
var F = (t, e = 2) => {
  const { length: n } = t;
  for (; e-- > 0; )
    t.forEach((e2, r2) => {
      const i2 = Math.floor(Math.random() * n);
      t[r2] = t[i2], t[i2] = e2;
    });
  return t;
};
Object.freeze({}), Object.freeze([]);
var Z = (t, ...e) => {
  const n = t.resolve(...e), r2 = n.matched[n.matched.length - 1];
  if (!(r2 == null ? void 0 : r2.redirect))
    return n;
  const { redirect: i2 } = r2, s2 = typeof i2 == "function" ? i2(n) : i2;
  const o2 = ((t2) => typeof t2 == "string")(s2) ? { path: s2 } : s2;
  return Z(t, __spreadValues({ hash: n.hash, query: n.query, params: n.params }, o2));
};
export {
  T as IconBase,
  W as Message,
  s as capitalize,
  E as clickOutSideDirective,
  Y as compareDate,
  S as getAuthor,
  w as getCategory,
  _ as getDate,
  N as getHash,
  O as getTag,
  L as isAbsoluteUrl,
  k as isActiveLink,
  b as isUrl,
  I as normalizePath,
  F as randomSortArray,
  Z as resolveRouteWithRedirect,
  o as strictCapitalize,
  D as timeTransformer,
  x as useLocaleConfig,
  H as usePageTitle
};
//# sourceMappingURL=@mr-hope_vuepress-shared_lib_client.js.map
