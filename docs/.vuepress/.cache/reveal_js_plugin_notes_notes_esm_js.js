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

// dep:reveal_js_plugin_notes_notes_esm_js
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

// node_modules/reveal.js/plugin/notes/notes.esm.js
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
var t = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};
var e = function(t2) {
  return t2 && t2.Math == Math && t2;
};
var n = e(typeof globalThis == "object" && globalThis) || e(typeof window == "object" && window) || e(typeof self == "object" && self) || e(typeof t == "object" && t) || function() {
  return this;
}() || Function("return this")();
var r = {};
var i = function(t2) {
  try {
    return !!t2();
  } catch (t3) {
    return true;
  }
};
var u = !i(function() {
  return Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1] != 7;
});
var a = {};
var o = {}.propertyIsEnumerable;
var s = Object.getOwnPropertyDescriptor;
var l = s && !o.call({ 1: 2 }, 1);
a.f = l ? function(t2) {
  var e2 = s(this, t2);
  return !!e2 && e2.enumerable;
} : o;
var c = function(t2, e2) {
  return { enumerable: !(1 & t2), configurable: !(2 & t2), writable: !(4 & t2), value: e2 };
};
var p = {}.toString;
var d = function(t2) {
  return p.call(t2).slice(8, -1);
};
var f = d;
var h = "".split;
var g = i(function() {
  return !Object("z").propertyIsEnumerable(0);
}) ? function(t2) {
  return f(t2) == "String" ? h.call(t2, "") : Object(t2);
} : Object;
var D = function(t2) {
  if (t2 == null)
    throw TypeError("Can't call method on " + t2);
  return t2;
};
var m = g;
var v = D;
var y = function(t2) {
  return m(v(t2));
};
var k = function(t2) {
  return typeof t2 == "object" ? t2 !== null : typeof t2 == "function";
};
var E = k;
var x = function(t2, e2) {
  if (!E(t2))
    return t2;
  var n2, r2;
  if (e2 && typeof (n2 = t2.toString) == "function" && !E(r2 = n2.call(t2)))
    return r2;
  if (typeof (n2 = t2.valueOf) == "function" && !E(r2 = n2.call(t2)))
    return r2;
  if (!e2 && typeof (n2 = t2.toString) == "function" && !E(r2 = n2.call(t2)))
    return r2;
  throw TypeError("Can't convert object to primitive value");
};
var A = D;
var b = function(t2) {
  return Object(A(t2));
};
var w = b;
var C = {}.hasOwnProperty;
var F = function(t2, e2) {
  return C.call(w(t2), e2);
};
var S = k;
var B = n.document;
var T = S(B) && S(B.createElement);
var _ = function(t2) {
  return T ? B.createElement(t2) : {};
};
var z = _;
var R = !u && !i(function() {
  return Object.defineProperty(z("div"), "a", { get: function() {
    return 7;
  } }).a != 7;
});
var I = u;
var L = a;
var O = c;
var $ = y;
var P = x;
var M = F;
var j = R;
var N = Object.getOwnPropertyDescriptor;
r.f = I ? N : function(t2, e2) {
  if (t2 = $(t2), e2 = P(e2, true), j)
    try {
      return N(t2, e2);
    } catch (t3) {
    }
  if (M(t2, e2))
    return O(!L.f.call(t2, e2), t2[e2]);
};
var U = {};
var q = k;
var Z = function(t2) {
  if (!q(t2))
    throw TypeError(String(t2) + " is not an object");
  return t2;
};
var H = u;
var J = R;
var K = Z;
var V = x;
var Q = Object.defineProperty;
U.f = H ? Q : function(t2, e2, n2) {
  if (K(t2), e2 = V(e2, true), K(n2), J)
    try {
      return Q(t2, e2, n2);
    } catch (t3) {
    }
  if ("get" in n2 || "set" in n2)
    throw TypeError("Accessors not supported");
  return "value" in n2 && (t2[e2] = n2.value), t2;
};
var G = U;
var W = c;
var Y = u ? function(t2, e2, n2) {
  return G.f(t2, e2, W(1, n2));
} : function(t2, e2, n2) {
  return t2[e2] = n2, t2;
};
var X = { exports: {} };
var tt = n;
var et = Y;
var nt = function(t2, e2) {
  try {
    et(tt, t2, e2);
  } catch (n2) {
    tt[t2] = e2;
  }
  return e2;
};
var rt = nt;
var it = n["__core-js_shared__"] || rt("__core-js_shared__", {});
var ut = it;
var at = Function.toString;
typeof ut.inspectSource != "function" && (ut.inspectSource = function(t2) {
  return at.call(t2);
});
var ot = ut.inspectSource;
var st = ot;
var lt = n.WeakMap;
var ct = typeof lt == "function" && /native code/.test(st(lt));
var pt = { exports: {} };
var dt = it;
(pt.exports = function(t2, e2) {
  return dt[t2] || (dt[t2] = e2 !== void 0 ? e2 : {});
})("versions", []).push({ version: "3.12.1", mode: "global", copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)" });
var ft;
var ht;
var gt;
var Dt = 0;
var mt = Math.random();
var vt = function(t2) {
  return "Symbol(" + String(t2 === void 0 ? "" : t2) + ")_" + (++Dt + mt).toString(36);
};
var yt = pt.exports;
var kt = vt;
var Et = yt("keys");
var xt = function(t2) {
  return Et[t2] || (Et[t2] = kt(t2));
};
var At = {};
var bt = ct;
var wt = k;
var Ct = Y;
var Ft = F;
var St = it;
var Bt = xt;
var Tt = At;
var _t = n.WeakMap;
if (bt || St.state) {
  zt = St.state || (St.state = new _t()), Rt = zt.get, It = zt.has, Lt = zt.set;
  ft = function(t2, e2) {
    if (It.call(zt, t2))
      throw new TypeError("Object already initialized");
    return e2.facade = t2, Lt.call(zt, t2, e2), e2;
  }, ht = function(t2) {
    return Rt.call(zt, t2) || {};
  }, gt = function(t2) {
    return It.call(zt, t2);
  };
} else {
  Ot = Bt("state");
  Tt[Ot] = true, ft = function(t2, e2) {
    if (Ft(t2, Ot))
      throw new TypeError("Object already initialized");
    return e2.facade = t2, Ct(t2, Ot, e2), e2;
  }, ht = function(t2) {
    return Ft(t2, Ot) ? t2[Ot] : {};
  }, gt = function(t2) {
    return Ft(t2, Ot);
  };
}
var zt;
var Rt;
var It;
var Lt;
var Ot;
var $t = { set: ft, get: ht, has: gt, enforce: function(t2) {
  return gt(t2) ? ht(t2) : ft(t2, {});
}, getterFor: function(t2) {
  return function(e2) {
    var n2;
    if (!wt(e2) || (n2 = ht(e2)).type !== t2)
      throw TypeError("Incompatible receiver, " + t2 + " required");
    return n2;
  };
} };
var Pt = n;
var Mt = Y;
var jt = F;
var Nt = nt;
var Ut = ot;
var qt = $t.get;
var Zt = $t.enforce;
var Ht = String(String).split("String");
(X.exports = function(t2, e2, n2, r2) {
  var i2, u2 = !!r2 && !!r2.unsafe, a2 = !!r2 && !!r2.enumerable, o2 = !!r2 && !!r2.noTargetGet;
  typeof n2 == "function" && (typeof e2 != "string" || jt(n2, "name") || Mt(n2, "name", e2), (i2 = Zt(n2)).source || (i2.source = Ht.join(typeof e2 == "string" ? e2 : ""))), t2 !== Pt ? (u2 ? !o2 && t2[e2] && (a2 = true) : delete t2[e2], a2 ? t2[e2] = n2 : Mt(t2, e2, n2)) : a2 ? t2[e2] = n2 : Nt(e2, n2);
})(Function.prototype, "toString", function() {
  return typeof this == "function" && qt(this).source || Ut(this);
});
var Jt = n;
var Kt = n;
var Vt = function(t2) {
  return typeof t2 == "function" ? t2 : void 0;
};
var Qt = function(t2, e2) {
  return arguments.length < 2 ? Vt(Jt[t2]) || Vt(Kt[t2]) : Jt[t2] && Jt[t2][e2] || Kt[t2] && Kt[t2][e2];
};
var Gt = {};
var Wt = Math.ceil;
var Yt = Math.floor;
var Xt = function(t2) {
  return isNaN(t2 = +t2) ? 0 : (t2 > 0 ? Yt : Wt)(t2);
};
var te = Xt;
var ee = Math.min;
var ne = function(t2) {
  return t2 > 0 ? ee(te(t2), 9007199254740991) : 0;
};
var re = Xt;
var ie = Math.max;
var ue = Math.min;
var ae = function(t2, e2) {
  var n2 = re(t2);
  return n2 < 0 ? ie(n2 + e2, 0) : ue(n2, e2);
};
var oe = y;
var se = ne;
var le = ae;
var ce = function(t2) {
  return function(e2, n2, r2) {
    var i2, u2 = oe(e2), a2 = se(u2.length), o2 = le(r2, a2);
    if (t2 && n2 != n2) {
      for (; a2 > o2; )
        if ((i2 = u2[o2++]) != i2)
          return true;
    } else
      for (; a2 > o2; o2++)
        if ((t2 || o2 in u2) && u2[o2] === n2)
          return t2 || o2 || 0;
    return !t2 && -1;
  };
};
var pe = { includes: ce(true), indexOf: ce(false) };
var de = F;
var fe = y;
var he = pe.indexOf;
var ge = At;
var De = function(t2, e2) {
  var n2, r2 = fe(t2), i2 = 0, u2 = [];
  for (n2 in r2)
    !de(ge, n2) && de(r2, n2) && u2.push(n2);
  for (; e2.length > i2; )
    de(r2, n2 = e2[i2++]) && (~he(u2, n2) || u2.push(n2));
  return u2;
};
var me = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
var ve = De;
var ye = me.concat("length", "prototype");
Gt.f = Object.getOwnPropertyNames || function(t2) {
  return ve(t2, ye);
};
var ke = {};
ke.f = Object.getOwnPropertySymbols;
var Ee = Gt;
var xe = ke;
var Ae = Z;
var be = Qt("Reflect", "ownKeys") || function(t2) {
  var e2 = Ee.f(Ae(t2)), n2 = xe.f;
  return n2 ? e2.concat(n2(t2)) : e2;
};
var we = F;
var Ce = be;
var Fe = r;
var Se = U;
var Be = i;
var Te = /#|\.prototype\./;
var _e = function(t2, e2) {
  var n2 = Re[ze(t2)];
  return n2 == Le || n2 != Ie && (typeof e2 == "function" ? Be(e2) : !!e2);
};
var ze = _e.normalize = function(t2) {
  return String(t2).replace(Te, ".").toLowerCase();
};
var Re = _e.data = {};
var Ie = _e.NATIVE = "N";
var Le = _e.POLYFILL = "P";
var Oe = _e;
var $e = n;
var Pe = r.f;
var Me = Y;
var je = X.exports;
var Ne = nt;
var Ue = function(t2, e2) {
  for (var n2 = Ce(e2), r2 = Se.f, i2 = Fe.f, u2 = 0; u2 < n2.length; u2++) {
    var a2 = n2[u2];
    we(t2, a2) || r2(t2, a2, i2(e2, a2));
  }
};
var qe = Oe;
var Ze = function(t2, e2) {
  var n2, r2, i2, u2, a2, o2 = t2.target, s2 = t2.global, l2 = t2.stat;
  if (n2 = s2 ? $e : l2 ? $e[o2] || Ne(o2, {}) : ($e[o2] || {}).prototype)
    for (r2 in e2) {
      if (u2 = e2[r2], i2 = t2.noTargetGet ? (a2 = Pe(n2, r2)) && a2.value : n2[r2], !qe(s2 ? r2 : o2 + (l2 ? "." : "#") + r2, t2.forced) && i2 !== void 0) {
        if (typeof u2 == typeof i2)
          continue;
        Ue(u2, i2);
      }
      (t2.sham || i2 && i2.sham) && Me(u2, "sham", true), je(n2, r2, u2, t2);
    }
};
var He = Z;
var Je = function() {
  var t2 = He(this), e2 = "";
  return t2.global && (e2 += "g"), t2.ignoreCase && (e2 += "i"), t2.multiline && (e2 += "m"), t2.dotAll && (e2 += "s"), t2.unicode && (e2 += "u"), t2.sticky && (e2 += "y"), e2;
};
var Ke = {};
var Ve = i;
function Qe(t2, e2) {
  return RegExp(t2, e2);
}
Ke.UNSUPPORTED_Y = Ve(function() {
  var t2 = Qe("a", "y");
  return t2.lastIndex = 2, t2.exec("abcd") != null;
}), Ke.BROKEN_CARET = Ve(function() {
  var t2 = Qe("^r", "gy");
  return t2.lastIndex = 2, t2.exec("str") != null;
});
var Ge = Je;
var We = Ke;
var Ye = pt.exports;
var Xe = RegExp.prototype.exec;
var tn = Ye("native-string-replace", String.prototype.replace);
var en = Xe;
var nn = function() {
  var t2 = /a/, e2 = /b*/g;
  return Xe.call(t2, "a"), Xe.call(e2, "a"), t2.lastIndex !== 0 || e2.lastIndex !== 0;
}();
var rn = We.UNSUPPORTED_Y || We.BROKEN_CARET;
var un = /()??/.exec("")[1] !== void 0;
(nn || un || rn) && (en = function(t2) {
  var e2, n2, r2, i2, u2 = this, a2 = rn && u2.sticky, o2 = Ge.call(u2), s2 = u2.source, l2 = 0, c2 = t2;
  return a2 && ((o2 = o2.replace("y", "")).indexOf("g") === -1 && (o2 += "g"), c2 = String(t2).slice(u2.lastIndex), u2.lastIndex > 0 && (!u2.multiline || u2.multiline && t2[u2.lastIndex - 1] !== "\n") && (s2 = "(?: " + s2 + ")", c2 = " " + c2, l2++), n2 = new RegExp("^(?:" + s2 + ")", o2)), un && (n2 = new RegExp("^" + s2 + "$(?!\\s)", o2)), nn && (e2 = u2.lastIndex), r2 = Xe.call(a2 ? n2 : u2, c2), a2 ? r2 ? (r2.input = r2.input.slice(l2), r2[0] = r2[0].slice(l2), r2.index = u2.lastIndex, u2.lastIndex += r2[0].length) : u2.lastIndex = 0 : nn && r2 && (u2.lastIndex = u2.global ? r2.index + r2[0].length : e2), un && r2 && r2.length > 1 && tn.call(r2[0], n2, function() {
    for (i2 = 1; i2 < arguments.length - 2; i2++)
      arguments[i2] === void 0 && (r2[i2] = void 0);
  }), r2;
});
var an = en;
Ze({ target: "RegExp", proto: true, forced: /./.exec !== an }, { exec: an });
var on;
var sn;
var ln = Qt("navigator", "userAgent") || "";
var cn = n.process;
var pn = cn && cn.versions;
var dn = pn && pn.v8;
dn ? sn = (on = dn.split("."))[0] < 4 ? 1 : on[0] + on[1] : ln && (!(on = ln.match(/Edge\/(\d+)/)) || on[1] >= 74) && (on = ln.match(/Chrome\/(\d+)/)) && (sn = on[1]);
var fn = sn && +sn;
var hn = fn;
var gn = i;
var Dn = !!Object.getOwnPropertySymbols && !gn(function() {
  return !String(Symbol()) || !Symbol.sham && hn && hn < 41;
});
var mn = Dn && !Symbol.sham && typeof Symbol.iterator == "symbol";
var vn = n;
var yn = pt.exports;
var kn = F;
var En = vt;
var xn = Dn;
var An = mn;
var bn = yn("wks");
var wn = vn.Symbol;
var Cn = An ? wn : wn && wn.withoutSetter || En;
var Fn = function(t2) {
  return kn(bn, t2) && (xn || typeof bn[t2] == "string") || (xn && kn(wn, t2) ? bn[t2] = wn[t2] : bn[t2] = Cn("Symbol." + t2)), bn[t2];
};
var Sn = X.exports;
var Bn = an;
var Tn = i;
var _n = Fn;
var zn = Y;
var Rn = _n("species");
var In = RegExp.prototype;
var Ln = !Tn(function() {
  var t2 = /./;
  return t2.exec = function() {
    var t3 = [];
    return t3.groups = { a: "7" }, t3;
  }, "".replace(t2, "$<a>") !== "7";
});
var On = "a".replace(/./, "$0") === "$0";
var $n = _n("replace");
var Pn = !!/./[$n] && /./[$n]("a", "$0") === "";
var Mn = !Tn(function() {
  var t2 = /(?:)/, e2 = t2.exec;
  t2.exec = function() {
    return e2.apply(this, arguments);
  };
  var n2 = "ab".split(t2);
  return n2.length !== 2 || n2[0] !== "a" || n2[1] !== "b";
});
var jn = function(t2, e2, n2, r2) {
  var i2 = _n(t2), u2 = !Tn(function() {
    var e3 = {};
    return e3[i2] = function() {
      return 7;
    }, ""[t2](e3) != 7;
  }), a2 = u2 && !Tn(function() {
    var e3 = false, n3 = /a/;
    return t2 === "split" && ((n3 = {}).constructor = {}, n3.constructor[Rn] = function() {
      return n3;
    }, n3.flags = "", n3[i2] = /./[i2]), n3.exec = function() {
      return e3 = true, null;
    }, n3[i2](""), !e3;
  });
  if (!u2 || !a2 || t2 === "replace" && (!Ln || !On || Pn) || t2 === "split" && !Mn) {
    var o2 = /./[i2], s2 = n2(i2, ""[t2], function(t3, e3, n3, r3, i3) {
      var a3 = e3.exec;
      return a3 === Bn || a3 === In.exec ? u2 && !i3 ? { done: true, value: o2.call(e3, n3, r3) } : { done: true, value: t3.call(n3, e3, r3) } : { done: false };
    }, { REPLACE_KEEPS_$0: On, REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: Pn }), l2 = s2[0], c2 = s2[1];
    Sn(String.prototype, t2, l2), Sn(In, i2, e2 == 2 ? function(t3, e3) {
      return c2.call(t3, this, e3);
    } : function(t3) {
      return c2.call(t3, this);
    });
  }
  r2 && zn(In[i2], "sham", true);
};
var Nn = Object.is || function(t2, e2) {
  return t2 === e2 ? t2 !== 0 || 1 / t2 == 1 / e2 : t2 != t2 && e2 != e2;
};
var Un = d;
var qn = an;
var Zn = function(t2, e2) {
  var n2 = t2.exec;
  if (typeof n2 == "function") {
    var r2 = n2.call(t2, e2);
    if (typeof r2 != "object")
      throw TypeError("RegExp exec method returned something other than an Object or null");
    return r2;
  }
  if (Un(t2) !== "RegExp")
    throw TypeError("RegExp#exec called on incompatible receiver");
  return qn.call(t2, e2);
};
var Hn = Z;
var Jn = D;
var Kn = Nn;
var Vn = Zn;
jn("search", 1, function(t2, e2, n2) {
  return [function(e3) {
    var n3 = Jn(this), r2 = e3 == null ? void 0 : e3[t2];
    return r2 !== void 0 ? r2.call(e3, n3) : new RegExp(e3)[t2](String(n3));
  }, function(t3) {
    var r2 = n2(e2, t3, this);
    if (r2.done)
      return r2.value;
    var i2 = Hn(t3), u2 = String(this), a2 = i2.lastIndex;
    Kn(a2, 0) || (i2.lastIndex = 0);
    var o2 = Vn(i2, u2);
    return Kn(i2.lastIndex, a2) || (i2.lastIndex = a2), o2 === null ? -1 : o2.index;
  }];
});
var Qn = Xt;
var Gn = D;
var Wn = function(t2) {
  return function(e2, n2) {
    var r2, i2, u2 = String(Gn(e2)), a2 = Qn(n2), o2 = u2.length;
    return a2 < 0 || a2 >= o2 ? t2 ? "" : void 0 : (r2 = u2.charCodeAt(a2)) < 55296 || r2 > 56319 || a2 + 1 === o2 || (i2 = u2.charCodeAt(a2 + 1)) < 56320 || i2 > 57343 ? t2 ? u2.charAt(a2) : r2 : t2 ? u2.slice(a2, a2 + 2) : i2 - 56320 + (r2 - 55296 << 10) + 65536;
  };
};
var Yn = { codeAt: Wn(false), charAt: Wn(true) }.charAt;
var Xn = function(t2, e2, n2) {
  return e2 + (n2 ? Yn(t2, e2).length : 1);
};
var tr = Z;
var er = ne;
var nr = D;
var rr = Xn;
var ir = Zn;
function ur(t2, e2) {
  if (!(t2 instanceof e2))
    throw new TypeError("Cannot call a class as a function");
}
function ar(t2, e2) {
  for (var n2 = 0; n2 < e2.length; n2++) {
    var r2 = e2[n2];
    r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t2, r2.key, r2);
  }
}
function or(t2, e2, n2) {
  return e2 && ar(t2.prototype, e2), n2 && ar(t2, n2), t2;
}
function sr(t2, e2) {
  return function(t3) {
    if (Array.isArray(t3))
      return t3;
  }(t2) || function(t3, e3) {
    var n2 = t3 && (typeof Symbol != "undefined" && t3[Symbol.iterator] || t3["@@iterator"]);
    if (n2 == null)
      return;
    var r2, i2, u2 = [], a2 = true, o2 = false;
    try {
      for (n2 = n2.call(t3); !(a2 = (r2 = n2.next()).done) && (u2.push(r2.value), !e3 || u2.length !== e3); a2 = true)
        ;
    } catch (t4) {
      o2 = true, i2 = t4;
    } finally {
      try {
        a2 || n2.return == null || n2.return();
      } finally {
        if (o2)
          throw i2;
      }
    }
    return u2;
  }(t2, e2) || lr(t2, e2) || function() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function lr(t2, e2) {
  if (t2) {
    if (typeof t2 == "string")
      return cr(t2, e2);
    var n2 = Object.prototype.toString.call(t2).slice(8, -1);
    return n2 === "Object" && t2.constructor && (n2 = t2.constructor.name), n2 === "Map" || n2 === "Set" ? Array.from(t2) : n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? cr(t2, e2) : void 0;
  }
}
function cr(t2, e2) {
  (e2 == null || e2 > t2.length) && (e2 = t2.length);
  for (var n2 = 0, r2 = new Array(e2); n2 < e2; n2++)
    r2[n2] = t2[n2];
  return r2;
}
function pr(t2, e2) {
  var n2 = typeof Symbol != "undefined" && t2[Symbol.iterator] || t2["@@iterator"];
  if (!n2) {
    if (Array.isArray(t2) || (n2 = lr(t2)) || e2 && t2 && typeof t2.length == "number") {
      n2 && (t2 = n2);
      var r2 = 0, i2 = function() {
      };
      return { s: i2, n: function() {
        return r2 >= t2.length ? { done: true } : { done: false, value: t2[r2++] };
      }, e: function(t3) {
        throw t3;
      }, f: i2 };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var u2, a2 = true, o2 = false;
  return { s: function() {
    n2 = n2.call(t2);
  }, n: function() {
    var t3 = n2.next();
    return a2 = t3.done, t3;
  }, e: function(t3) {
    o2 = true, u2 = t3;
  }, f: function() {
    try {
      a2 || n2.return == null || n2.return();
    } finally {
      if (o2)
        throw u2;
    }
  } };
}
jn("match", 1, function(t2, e2, n2) {
  return [function(e3) {
    var n3 = nr(this), r2 = e3 == null ? void 0 : e3[t2];
    return r2 !== void 0 ? r2.call(e3, n3) : new RegExp(e3)[t2](String(n3));
  }, function(t3) {
    var r2 = n2(e2, t3, this);
    if (r2.done)
      return r2.value;
    var i2 = tr(t3), u2 = String(this);
    if (!i2.global)
      return ir(i2, u2);
    var a2 = i2.unicode;
    i2.lastIndex = 0;
    for (var o2, s2 = [], l2 = 0; (o2 = ir(i2, u2)) !== null; ) {
      var c2 = String(o2[0]);
      s2[l2] = c2, c2 === "" && (i2.lastIndex = rr(u2, er(i2.lastIndex), a2)), l2++;
    }
    return l2 === 0 ? null : s2;
  }];
});
var dr = b;
var fr = Math.floor;
var hr = "".replace;
var gr = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var Dr = /\$([$&'`]|\d{1,2})/g;
var mr = jn;
var vr = Z;
var yr = ne;
var kr = Xt;
var Er = D;
var xr = Xn;
var Ar = function(t2, e2, n2, r2, i2, u2) {
  var a2 = n2 + t2.length, o2 = r2.length, s2 = Dr;
  return i2 !== void 0 && (i2 = dr(i2), s2 = gr), hr.call(u2, s2, function(u3, s3) {
    var l2;
    switch (s3.charAt(0)) {
      case "$":
        return "$";
      case "&":
        return t2;
      case "`":
        return e2.slice(0, n2);
      case "'":
        return e2.slice(a2);
      case "<":
        l2 = i2[s3.slice(1, -1)];
        break;
      default:
        var c2 = +s3;
        if (c2 === 0)
          return u3;
        if (c2 > o2) {
          var p2 = fr(c2 / 10);
          return p2 === 0 ? u3 : p2 <= o2 ? r2[p2 - 1] === void 0 ? s3.charAt(1) : r2[p2 - 1] + s3.charAt(1) : u3;
        }
        l2 = r2[c2 - 1];
    }
    return l2 === void 0 ? "" : l2;
  });
};
var br = Zn;
var wr = Math.max;
var Cr = Math.min;
mr("replace", 2, function(t2, e2, n2, r2) {
  var i2 = r2.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE, u2 = r2.REPLACE_KEEPS_$0, a2 = i2 ? "$" : "$0";
  return [function(n3, r3) {
    var i3 = Er(this), u3 = n3 == null ? void 0 : n3[t2];
    return u3 !== void 0 ? u3.call(n3, i3, r3) : e2.call(String(i3), n3, r3);
  }, function(t3, r3) {
    if (!i2 && u2 || typeof r3 == "string" && r3.indexOf(a2) === -1) {
      var o2 = n2(e2, t3, this, r3);
      if (o2.done)
        return o2.value;
    }
    var s2 = vr(t3), l2 = String(this), c2 = typeof r3 == "function";
    c2 || (r3 = String(r3));
    var p2 = s2.global;
    if (p2) {
      var d2 = s2.unicode;
      s2.lastIndex = 0;
    }
    for (var f2 = []; ; ) {
      var h2 = br(s2, l2);
      if (h2 === null)
        break;
      if (f2.push(h2), !p2)
        break;
      String(h2[0]) === "" && (s2.lastIndex = xr(l2, yr(s2.lastIndex), d2));
    }
    for (var g2, D2 = "", m2 = 0, v2 = 0; v2 < f2.length; v2++) {
      h2 = f2[v2];
      for (var y2 = String(h2[0]), k2 = wr(Cr(kr(h2.index), l2.length), 0), E2 = [], x2 = 1; x2 < h2.length; x2++)
        E2.push((g2 = h2[x2]) === void 0 ? g2 : String(g2));
      var A2 = h2.groups;
      if (c2) {
        var b2 = [y2].concat(E2, k2, l2);
        A2 !== void 0 && b2.push(A2);
        var w2 = String(r3.apply(void 0, b2));
      } else
        w2 = Ar(y2, l2, k2, E2, A2, r3);
      k2 >= m2 && (D2 += l2.slice(m2, k2) + w2, m2 = k2 + y2.length);
    }
    return D2 + l2.slice(m2);
  }];
});
var Fr = k;
var Sr = Z;
var Br = function(t2) {
  if (!Fr(t2) && t2 !== null)
    throw TypeError("Can't set " + String(t2) + " as a prototype");
  return t2;
};
var Tr = Object.setPrototypeOf || ("__proto__" in {} ? function() {
  var t2, e2 = false, n2 = {};
  try {
    (t2 = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n2, []), e2 = n2 instanceof Array;
  } catch (t3) {
  }
  return function(n3, r2) {
    return Sr(n3), Br(r2), e2 ? t2.call(n3, r2) : n3.__proto__ = r2, n3;
  };
}() : void 0);
var _r = k;
var zr = Tr;
var Rr = k;
var Ir = d;
var Lr = Fn("match");
var Or = function(t2) {
  var e2;
  return Rr(t2) && ((e2 = t2[Lr]) !== void 0 ? !!e2 : Ir(t2) == "RegExp");
};
var $r = Qt;
var Pr = U;
var Mr = u;
var jr = Fn("species");
var Nr = u;
var Ur = n;
var qr = Oe;
var Zr = function(t2, e2, n2) {
  var r2, i2;
  return zr && typeof (r2 = e2.constructor) == "function" && r2 !== n2 && _r(i2 = r2.prototype) && i2 !== n2.prototype && zr(t2, i2), t2;
};
var Hr = U.f;
var Jr = Gt.f;
var Kr = Or;
var Vr = Je;
var Qr = Ke;
var Gr = X.exports;
var Wr = i;
var Yr = $t.enforce;
var Xr = function(t2) {
  var e2 = $r(t2), n2 = Pr.f;
  Mr && e2 && !e2[jr] && n2(e2, jr, { configurable: true, get: function() {
    return this;
  } });
};
var ti = Fn("match");
var ei = Ur.RegExp;
var ni = ei.prototype;
var ri = /a/g;
var ii = /a/g;
var ui = new ei(ri) !== ri;
var ai = Qr.UNSUPPORTED_Y;
if (Nr && qr("RegExp", !ui || ai || Wr(function() {
  return ii[ti] = false, ei(ri) != ri || ei(ii) == ii || ei(ri, "i") != "/a/i";
}))) {
  for (oi = function(t2, e2) {
    var n2, r2 = this instanceof oi, i2 = Kr(t2), u2 = e2 === void 0;
    if (!r2 && i2 && t2.constructor === oi && u2)
      return t2;
    ui ? i2 && !u2 && (t2 = t2.source) : t2 instanceof oi && (u2 && (e2 = Vr.call(t2)), t2 = t2.source), ai && (n2 = !!e2 && e2.indexOf("y") > -1) && (e2 = e2.replace(/y/g, ""));
    var a2 = Zr(ui ? new ei(t2, e2) : ei(t2, e2), r2 ? this : ni, oi);
    ai && n2 && (Yr(a2).sticky = true);
    return a2;
  }, si = function(t2) {
    t2 in oi || Hr(oi, t2, { configurable: true, get: function() {
      return ei[t2];
    }, set: function(e2) {
      ei[t2] = e2;
    } });
  }, li = Jr(ei), ci = 0; li.length > ci; )
    si(li[ci++]);
  ni.constructor = oi, oi.prototype = ni, Gr(Ur, "RegExp", oi);
}
var oi;
var si;
var li;
var ci;
Xr("RegExp");
var pi = X.exports;
var di = Z;
var fi = i;
var hi = Je;
var gi = RegExp.prototype;
var Di = gi.toString;
var mi = fi(function() {
  return Di.call({ source: "a", flags: "b" }) != "/a/b";
});
var vi = Di.name != "toString";
(mi || vi) && pi(RegExp.prototype, "toString", function() {
  var t2 = di(this), e2 = String(t2.source), n2 = t2.flags;
  return "/" + e2 + "/" + String(n2 === void 0 && t2 instanceof RegExp && !("flags" in gi) ? hi.call(t2) : n2);
}, { unsafe: true });
var yi = function(t2) {
  if (typeof t2 != "function")
    throw TypeError(String(t2) + " is not a function");
  return t2;
};
var ki = Z;
var Ei = yi;
var xi = Fn("species");
var Ai = jn;
var bi = Or;
var wi = Z;
var Ci = D;
var Fi = function(t2, e2) {
  var n2, r2 = ki(t2).constructor;
  return r2 === void 0 || (n2 = ki(r2)[xi]) == null ? e2 : Ei(n2);
};
var Si = Xn;
var Bi = ne;
var Ti = Zn;
var _i = an;
var zi = Ke.UNSUPPORTED_Y;
var Ri = [].push;
var Ii = Math.min;
Ai("split", 2, function(t2, e2, n2) {
  var r2;
  return r2 = "abbc".split(/(b)*/)[1] == "c" || "test".split(/(?:)/, -1).length != 4 || "ab".split(/(?:ab)*/).length != 2 || ".".split(/(.?)(.?)/).length != 4 || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function(t3, n3) {
    var r3 = String(Ci(this)), i2 = n3 === void 0 ? 4294967295 : n3 >>> 0;
    if (i2 === 0)
      return [];
    if (t3 === void 0)
      return [r3];
    if (!bi(t3))
      return e2.call(r3, t3, i2);
    for (var u2, a2, o2, s2 = [], l2 = (t3.ignoreCase ? "i" : "") + (t3.multiline ? "m" : "") + (t3.unicode ? "u" : "") + (t3.sticky ? "y" : ""), c2 = 0, p2 = new RegExp(t3.source, l2 + "g"); (u2 = _i.call(p2, r3)) && !((a2 = p2.lastIndex) > c2 && (s2.push(r3.slice(c2, u2.index)), u2.length > 1 && u2.index < r3.length && Ri.apply(s2, u2.slice(1)), o2 = u2[0].length, c2 = a2, s2.length >= i2)); )
      p2.lastIndex === u2.index && p2.lastIndex++;
    return c2 === r3.length ? !o2 && p2.test("") || s2.push("") : s2.push(r3.slice(c2)), s2.length > i2 ? s2.slice(0, i2) : s2;
  } : "0".split(void 0, 0).length ? function(t3, n3) {
    return t3 === void 0 && n3 === 0 ? [] : e2.call(this, t3, n3);
  } : e2, [function(e3, n3) {
    var i2 = Ci(this), u2 = e3 == null ? void 0 : e3[t2];
    return u2 !== void 0 ? u2.call(e3, i2, n3) : r2.call(String(i2), e3, n3);
  }, function(t3, i2) {
    var u2 = n2(r2, t3, this, i2, r2 !== e2);
    if (u2.done)
      return u2.value;
    var a2 = wi(t3), o2 = String(this), s2 = Fi(a2, RegExp), l2 = a2.unicode, c2 = (a2.ignoreCase ? "i" : "") + (a2.multiline ? "m" : "") + (a2.unicode ? "u" : "") + (zi ? "g" : "y"), p2 = new s2(zi ? "^(?:" + a2.source + ")" : a2, c2), d2 = i2 === void 0 ? 4294967295 : i2 >>> 0;
    if (d2 === 0)
      return [];
    if (o2.length === 0)
      return Ti(p2, o2) === null ? [o2] : [];
    for (var f2 = 0, h2 = 0, g2 = []; h2 < o2.length; ) {
      p2.lastIndex = zi ? 0 : h2;
      var D2, m2 = Ti(p2, zi ? o2.slice(h2) : o2);
      if (m2 === null || (D2 = Ii(Bi(p2.lastIndex + (zi ? h2 : 0)), o2.length)) === f2)
        h2 = Si(o2, h2, l2);
      else {
        if (g2.push(o2.slice(f2, h2)), g2.length === d2)
          return g2;
        for (var v2 = 1; v2 <= m2.length - 1; v2++)
          if (g2.push(m2[v2]), g2.length === d2)
            return g2;
        h2 = f2 = D2;
      }
    }
    return g2.push(o2.slice(f2)), g2;
  }];
}, zi);
var Li = D;
var Oi = "[	\n\v\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]";
var $i = RegExp("^" + Oi + Oi + "*");
var Pi = RegExp(Oi + Oi + "*$");
var Mi = function(t2) {
  return function(e2) {
    var n2 = String(Li(e2));
    return 1 & t2 && (n2 = n2.replace($i, "")), 2 & t2 && (n2 = n2.replace(Pi, "")), n2;
  };
};
var ji = { start: Mi(1), end: Mi(2), trim: Mi(3) };
var Ni = i;
var Ui = "	\n\v\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
var qi = function(t2) {
  return Ni(function() {
    return !!Ui[t2]() || "\u200B\x85\u180E"[t2]() != "\u200B\x85\u180E" || Ui[t2].name !== t2;
  });
};
var Zi = ji.trim;
Ze({ target: "String", proto: true, forced: qi("trim") }, { trim: function() {
  return Zi(this);
} });
var Hi = d;
var Ji = Array.isArray || function(t2) {
  return Hi(t2) == "Array";
};
var Ki = k;
var Vi = Ji;
var Qi = Fn("species");
var Gi = function(t2, e2) {
  var n2;
  return Vi(t2) && (typeof (n2 = t2.constructor) != "function" || n2 !== Array && !Vi(n2.prototype) ? Ki(n2) && (n2 = n2[Qi]) === null && (n2 = void 0) : n2 = void 0), new (n2 === void 0 ? Array : n2)(e2 === 0 ? 0 : e2);
};
var Wi = x;
var Yi = U;
var Xi = c;
var tu = function(t2, e2, n2) {
  var r2 = Wi(e2);
  r2 in t2 ? Yi.f(t2, r2, Xi(0, n2)) : t2[r2] = n2;
};
var eu = i;
var nu = fn;
var ru = Fn("species");
var iu = function(t2) {
  return nu >= 51 || !eu(function() {
    var e2 = [];
    return (e2.constructor = {})[ru] = function() {
      return { foo: 1 };
    }, e2[t2](Boolean).foo !== 1;
  });
};
var uu = Ze;
var au = ae;
var ou = Xt;
var su = ne;
var lu = b;
var cu = Gi;
var pu = tu;
var du = iu("splice");
var fu = Math.max;
var hu = Math.min;
uu({ target: "Array", proto: true, forced: !du }, { splice: function(t2, e2) {
  var n2, r2, i2, u2, a2, o2, s2 = lu(this), l2 = su(s2.length), c2 = au(t2, l2), p2 = arguments.length;
  if (p2 === 0 ? n2 = r2 = 0 : p2 === 1 ? (n2 = 0, r2 = l2 - c2) : (n2 = p2 - 2, r2 = hu(fu(ou(e2), 0), l2 - c2)), l2 + n2 - r2 > 9007199254740991)
    throw TypeError("Maximum allowed length exceeded");
  for (i2 = cu(s2, r2), u2 = 0; u2 < r2; u2++)
    (a2 = c2 + u2) in s2 && pu(i2, u2, s2[a2]);
  if (i2.length = r2, n2 < r2) {
    for (u2 = c2; u2 < l2 - r2; u2++)
      o2 = u2 + n2, (a2 = u2 + r2) in s2 ? s2[o2] = s2[a2] : delete s2[o2];
    for (u2 = l2; u2 > l2 - r2 + n2; u2--)
      delete s2[u2 - 1];
  } else if (n2 > r2)
    for (u2 = l2 - r2; u2 > c2; u2--)
      o2 = u2 + n2 - 1, (a2 = u2 + r2 - 1) in s2 ? s2[o2] = s2[a2] : delete s2[o2];
  for (u2 = 0; u2 < n2; u2++)
    s2[u2 + c2] = arguments[u2 + 2];
  return s2.length = l2 - r2 + n2, i2;
} });
var gu = i;
var Du = function(t2, e2) {
  var n2 = [][t2];
  return !!n2 && gu(function() {
    n2.call(null, e2 || function() {
      throw 1;
    }, 1);
  });
};
var mu = Ze;
var vu = y;
var yu = [].join;
var ku = g != Object;
var Eu = Du("join", ",");
mu({ target: "Array", proto: true, forced: ku || !Eu }, { join: function(t2) {
  return yu.call(vu(this), t2 === void 0 ? "," : t2);
} });
var xu = yi;
var Au = function(t2, e2, n2) {
  if (xu(t2), e2 === void 0)
    return t2;
  switch (n2) {
    case 0:
      return function() {
        return t2.call(e2);
      };
    case 1:
      return function(n3) {
        return t2.call(e2, n3);
      };
    case 2:
      return function(n3, r2) {
        return t2.call(e2, n3, r2);
      };
    case 3:
      return function(n3, r2, i2) {
        return t2.call(e2, n3, r2, i2);
      };
  }
  return function() {
    return t2.apply(e2, arguments);
  };
};
var bu = g;
var wu = b;
var Cu = ne;
var Fu = Gi;
var Su = [].push;
var Bu = function(t2) {
  var e2 = t2 == 1, n2 = t2 == 2, r2 = t2 == 3, i2 = t2 == 4, u2 = t2 == 6, a2 = t2 == 7, o2 = t2 == 5 || u2;
  return function(s2, l2, c2, p2) {
    for (var d2, f2, h2 = wu(s2), g2 = bu(h2), D2 = Au(l2, c2, 3), m2 = Cu(g2.length), v2 = 0, y2 = p2 || Fu, k2 = e2 ? y2(s2, m2) : n2 || a2 ? y2(s2, 0) : void 0; m2 > v2; v2++)
      if ((o2 || v2 in g2) && (f2 = D2(d2 = g2[v2], v2, h2), t2))
        if (e2)
          k2[v2] = f2;
        else if (f2)
          switch (t2) {
            case 3:
              return true;
            case 5:
              return d2;
            case 6:
              return v2;
            case 2:
              Su.call(k2, d2);
          }
        else
          switch (t2) {
            case 4:
              return false;
            case 7:
              Su.call(k2, d2);
          }
    return u2 ? -1 : r2 || i2 ? i2 : k2;
  };
};
var Tu = { forEach: Bu(0), map: Bu(1), filter: Bu(2), some: Bu(3), every: Bu(4), find: Bu(5), findIndex: Bu(6), filterOut: Bu(7) };
var _u = Tu.map;
Ze({ target: "Array", proto: true, forced: !iu("map") }, { map: function(t2) {
  return _u(this, t2, arguments.length > 1 ? arguments[1] : void 0);
} });
var zu = Ze;
var Ru = k;
var Iu = Ji;
var Lu = ae;
var Ou = ne;
var $u = y;
var Pu = tu;
var Mu = Fn;
var ju = iu("slice");
var Nu = Mu("species");
var Uu = [].slice;
var qu = Math.max;
zu({ target: "Array", proto: true, forced: !ju }, { slice: function(t2, e2) {
  var n2, r2, i2, u2 = $u(this), a2 = Ou(u2.length), o2 = Lu(t2, a2), s2 = Lu(e2 === void 0 ? a2 : e2, a2);
  if (Iu(u2) && (typeof (n2 = u2.constructor) != "function" || n2 !== Array && !Iu(n2.prototype) ? Ru(n2) && (n2 = n2[Nu]) === null && (n2 = void 0) : n2 = void 0, n2 === Array || n2 === void 0))
    return Uu.call(u2, o2, s2);
  for (r2 = new (n2 === void 0 ? Array : n2)(qu(s2 - o2, 0)), i2 = 0; o2 < s2; o2++, i2++)
    o2 in u2 && Pu(r2, i2, u2[o2]);
  return r2.length = i2, r2;
} });
var Zu = Ze;
var Hu = ji.start;
var Ju = qi("trimStart");
var Ku = Ju ? function() {
  return Hu(this);
} : "".trimStart;
Zu({ target: "String", proto: true, forced: Ju }, { trimStart: Ku, trimLeft: Ku });
var Vu = Ze;
var Qu = ji.end;
var Gu = qi("trimEnd");
var Wu = Gu ? function() {
  return Qu(this);
} : "".trimEnd;
Vu({ target: "String", proto: true, forced: Gu }, { trimEnd: Wu, trimRight: Wu });
var Yu = Tu.filter;
Ze({ target: "Array", proto: true, forced: !iu("filter") }, { filter: function(t2) {
  return Yu(this, t2, arguments.length > 1 ? arguments[1] : void 0);
} });
var Xu = D;
var ta = /"/g;
var ea = i;
var na = function(t2, e2, n2, r2) {
  var i2 = String(Xu(t2)), u2 = "<" + e2;
  return n2 !== "" && (u2 += " " + n2 + '="' + String(r2).replace(ta, "&quot;") + '"'), u2 + ">" + i2 + "</" + e2 + ">";
};
Ze({ target: "String", proto: true, forced: function(t2) {
  return ea(function() {
    var e2 = ""[t2]('"');
    return e2 !== e2.toLowerCase() || e2.split('"').length > 3;
  });
}("link") }, { link: function(t2) {
  return na(this, "a", "href", t2);
} });
var ra = {};
ra[Fn("toStringTag")] = "z";
var ia = String(ra) === "[object z]";
var ua = ia;
var aa = d;
var oa = Fn("toStringTag");
var sa = aa(function() {
  return arguments;
}()) == "Arguments";
var la = ua ? aa : function(t2) {
  var e2, n2, r2;
  return t2 === void 0 ? "Undefined" : t2 === null ? "Null" : typeof (n2 = function(t3, e3) {
    try {
      return t3[e3];
    } catch (t4) {
    }
  }(e2 = Object(t2), oa)) == "string" ? n2 : sa ? aa(e2) : (r2 = aa(e2)) == "Object" && typeof e2.callee == "function" ? "Arguments" : r2;
};
var ca = ia ? {}.toString : function() {
  return "[object " + la(this) + "]";
};
var pa = ia;
var da = X.exports;
var fa = ca;
pa || da(Object.prototype, "toString", fa, { unsafe: true });
var ha = Tu.forEach;
var ga = n;
var Da = { CSSRuleList: 0, CSSStyleDeclaration: 0, CSSValueList: 0, ClientRectList: 0, DOMRectList: 0, DOMStringList: 0, DOMTokenList: 1, DataTransferItemList: 0, FileList: 0, HTMLAllCollection: 0, HTMLCollection: 0, HTMLFormElement: 0, HTMLSelectElement: 0, MediaList: 0, MimeTypeArray: 0, NamedNodeMap: 0, NodeList: 1, PaintRequestList: 0, Plugin: 0, PluginArray: 0, SVGLengthList: 0, SVGNumberList: 0, SVGPathSegList: 0, SVGPointList: 0, SVGStringList: 0, SVGTransformList: 0, SourceBufferList: 0, StyleSheetList: 0, TextTrackCueList: 0, TextTrackList: 0, TouchList: 0 };
var ma = Du("forEach") ? [].forEach : function(t2) {
  return ha(this, t2, arguments.length > 1 ? arguments[1] : void 0);
};
var va = Y;
for (ya in Da) {
  ka = ga[ya], Ea = ka && ka.prototype;
  if (Ea && Ea.forEach !== ma)
    try {
      va(Ea, "forEach", ma);
    } catch (t2) {
      Ea.forEach = ma;
    }
}
var ka;
var Ea;
var ya;
var xa = De;
var Aa = me;
var ba = Object.keys || function(t2) {
  return xa(t2, Aa);
};
var wa = b;
var Ca = ba;
Ze({ target: "Object", stat: true, forced: i(function() {
  Ca(1);
}) }, { keys: function(t2) {
  return Ca(wa(t2));
} });
var Fa;
var Sa = U;
var Ba = Z;
var Ta = ba;
var _a = u ? Object.defineProperties : function(t2, e2) {
  Ba(t2);
  for (var n2, r2 = Ta(e2), i2 = r2.length, u2 = 0; i2 > u2; )
    Sa.f(t2, n2 = r2[u2++], e2[n2]);
  return t2;
};
var za = Qt("document", "documentElement");
var Ra = Z;
var Ia = _a;
var La = me;
var Oa = At;
var $a = za;
var Pa = _;
var Ma = xt("IE_PROTO");
var ja = function() {
};
var Na = function(t2) {
  return "<script>" + t2 + "<\/script>";
};
var Ua = function() {
  try {
    Fa = document.domain && new ActiveXObject("htmlfile");
  } catch (t3) {
  }
  var t2, e2;
  Ua = Fa ? function(t3) {
    t3.write(Na("")), t3.close();
    var e3 = t3.parentWindow.Object;
    return t3 = null, e3;
  }(Fa) : ((e2 = Pa("iframe")).style.display = "none", $a.appendChild(e2), e2.src = String("javascript:"), (t2 = e2.contentWindow.document).open(), t2.write(Na("document.F=Object")), t2.close(), t2.F);
  for (var n2 = La.length; n2--; )
    delete Ua.prototype[La[n2]];
  return Ua();
};
Oa[Ma] = true;
var qa = Object.create || function(t2, e2) {
  var n2;
  return t2 !== null ? (ja.prototype = Ra(t2), n2 = new ja(), ja.prototype = null, n2[Ma] = t2) : n2 = Ua(), e2 === void 0 ? n2 : Ia(n2, e2);
};
var Za = U;
var Ha = Fn("unscopables");
var Ja = Array.prototype;
Ja[Ha] == null && Za.f(Ja, Ha, { configurable: true, value: qa(null) });
var Ka = pe.includes;
var Va = function(t2) {
  Ja[Ha][t2] = true;
};
Ze({ target: "Array", proto: true }, { includes: function(t2) {
  return Ka(this, t2, arguments.length > 1 ? arguments[1] : void 0);
} }), Va("includes");
var Qa = Or;
var Ga = Fn("match");
var Wa = function(t2) {
  if (Qa(t2))
    throw TypeError("The method doesn't accept regular expressions");
  return t2;
};
var Ya = D;
Ze({ target: "String", proto: true, forced: !function(t2) {
  var e2 = /./;
  try {
    "/./"[t2](e2);
  } catch (n2) {
    try {
      return e2[Ga] = false, "/./"[t2](e2);
    } catch (t3) {
    }
  }
  return false;
}("includes") }, { includes: function(t2) {
  return !!~String(Ya(this)).indexOf(Wa(t2), arguments.length > 1 ? arguments[1] : void 0);
} });
var Xa = Ze;
var to = i;
var eo = Ji;
var no = k;
var ro = b;
var io = ne;
var uo = tu;
var ao = Gi;
var oo = iu;
var so = fn;
var lo = Fn("isConcatSpreadable");
var co = so >= 51 || !to(function() {
  var t2 = [];
  return t2[lo] = false, t2.concat()[0] !== t2;
});
var po = oo("concat");
var fo = function(t2) {
  if (!no(t2))
    return false;
  var e2 = t2[lo];
  return e2 !== void 0 ? !!e2 : eo(t2);
};
Xa({ target: "Array", proto: true, forced: !co || !po }, { concat: function(t2) {
  var e2, n2, r2, i2, u2, a2 = ro(this), o2 = ao(a2, 0), s2 = 0;
  for (e2 = -1, r2 = arguments.length; e2 < r2; e2++)
    if (fo(u2 = e2 === -1 ? a2 : arguments[e2])) {
      if (s2 + (i2 = io(u2.length)) > 9007199254740991)
        throw TypeError("Maximum allowed index exceeded");
      for (n2 = 0; n2 < i2; n2++, s2++)
        n2 in u2 && uo(o2, s2, u2[n2]);
    } else {
      if (s2 >= 9007199254740991)
        throw TypeError("Maximum allowed index exceeded");
      uo(o2, s2++, u2);
    }
  return o2.length = s2, o2;
} });
var ho = u;
var go = U.f;
var Do = Function.prototype;
var mo = Do.toString;
var vo = /^\s*function ([^ (]*)/;
function yo() {
  return { baseUrl: null, breaks: false, extensions: null, gfm: true, headerIds: true, headerPrefix: "", highlight: null, langPrefix: "language-", mangle: true, pedantic: false, renderer: null, sanitize: false, sanitizer: null, silent: false, smartLists: false, smartypants: false, tokenizer: null, walkTokens: null, xhtml: false };
}
ho && !("name" in Do) && go(Do, "name", { configurable: true, get: function() {
  try {
    return mo.call(this).match(vo)[1];
  } catch (t2) {
    return "";
  }
} });
var ko = { baseUrl: null, breaks: false, extensions: null, gfm: true, headerIds: true, headerPrefix: "", highlight: null, langPrefix: "language-", mangle: true, pedantic: false, renderer: null, sanitize: false, sanitizer: null, silent: false, smartLists: false, smartypants: false, tokenizer: null, walkTokens: null, xhtml: false };
var Eo = /[&<>"']/;
var xo = /[&<>"']/g;
var Ao = /[<>"']|&(?!#?\w+;)/;
var bo = /[<>"']|&(?!#?\w+;)/g;
var wo = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
var Co = function(t2) {
  return wo[t2];
};
function Fo(t2, e2) {
  if (e2) {
    if (Eo.test(t2))
      return t2.replace(xo, Co);
  } else if (Ao.test(t2))
    return t2.replace(bo, Co);
  return t2;
}
var So = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
function Bo(t2) {
  return t2.replace(So, function(t3, e2) {
    return (e2 = e2.toLowerCase()) === "colon" ? ":" : e2.charAt(0) === "#" ? e2.charAt(1) === "x" ? String.fromCharCode(parseInt(e2.substring(2), 16)) : String.fromCharCode(+e2.substring(1)) : "";
  });
}
var To = /(^|[^\[])\^/g;
function _o(t2, e2) {
  t2 = t2.source || t2, e2 = e2 || "";
  var n2 = { replace: function(e3, r2) {
    return r2 = (r2 = r2.source || r2).replace(To, "$1"), t2 = t2.replace(e3, r2), n2;
  }, getRegex: function() {
    return new RegExp(t2, e2);
  } };
  return n2;
}
var zo = /[^\w:]/g;
var Ro = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
function Io(t2, e2, n2) {
  if (t2) {
    var r2;
    try {
      r2 = decodeURIComponent(Bo(n2)).replace(zo, "").toLowerCase();
    } catch (t3) {
      return null;
    }
    if (r2.indexOf("javascript:") === 0 || r2.indexOf("vbscript:") === 0 || r2.indexOf("data:") === 0)
      return null;
  }
  e2 && !Ro.test(n2) && (n2 = function(t3, e3) {
    Lo[" " + t3] || (Oo.test(t3) ? Lo[" " + t3] = t3 + "/" : Lo[" " + t3] = Uo(t3, "/", true));
    var n3 = (t3 = Lo[" " + t3]).indexOf(":") === -1;
    return e3.substring(0, 2) === "//" ? n3 ? e3 : t3.replace($o, "$1") + e3 : e3.charAt(0) === "/" ? n3 ? e3 : t3.replace(Po, "$1") + e3 : t3 + e3;
  }(e2, n2));
  try {
    n2 = encodeURI(n2).replace(/%25/g, "%");
  } catch (t3) {
    return null;
  }
  return n2;
}
var Lo = {};
var Oo = /^[^:]+:\/*[^/]*$/;
var $o = /^([^:]+:)[\s\S]*$/;
var Po = /^([^:]+:\/*[^/]*)[\s\S]*$/;
var Mo = { exec: function() {
} };
function jo(t2) {
  for (var e2, n2, r2 = 1; r2 < arguments.length; r2++)
    for (n2 in e2 = arguments[r2])
      Object.prototype.hasOwnProperty.call(e2, n2) && (t2[n2] = e2[n2]);
  return t2;
}
function No(t2, e2) {
  var n2 = t2.replace(/\|/g, function(t3, e3, n3) {
    for (var r3 = false, i2 = e3; --i2 >= 0 && n3[i2] === "\\"; )
      r3 = !r3;
    return r3 ? "|" : " |";
  }).split(/ \|/), r2 = 0;
  if (n2[0].trim() || n2.shift(), n2.length > 0 && !n2[n2.length - 1].trim() && n2.pop(), n2.length > e2)
    n2.splice(e2);
  else
    for (; n2.length < e2; )
      n2.push("");
  for (; r2 < n2.length; r2++)
    n2[r2] = n2[r2].trim().replace(/\\\|/g, "|");
  return n2;
}
function Uo(t2, e2, n2) {
  var r2 = t2.length;
  if (r2 === 0)
    return "";
  for (var i2 = 0; i2 < r2; ) {
    var u2 = t2.charAt(r2 - i2 - 1);
    if (u2 !== e2 || n2) {
      if (u2 === e2 || !n2)
        break;
      i2++;
    } else
      i2++;
  }
  return t2.substr(0, r2 - i2);
}
function qo(t2) {
  t2 && t2.sanitize && !t2.silent && console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options");
}
function Zo(t2, e2) {
  if (e2 < 1)
    return "";
  for (var n2 = ""; e2 > 1; )
    1 & e2 && (n2 += t2), e2 >>= 1, t2 += t2;
  return n2 + t2;
}
function Ho(t2, e2, n2, r2) {
  var i2 = e2.href, u2 = e2.title ? Fo(e2.title) : null, a2 = t2[1].replace(/\\([\[\]])/g, "$1");
  if (t2[0].charAt(0) !== "!") {
    r2.state.inLink = true;
    var o2 = { type: "link", raw: n2, href: i2, title: u2, text: a2, tokens: r2.inlineTokens(a2, []) };
    return r2.state.inLink = false, o2;
  }
  return { type: "image", raw: n2, href: i2, title: u2, text: Fo(a2) };
}
var Jo = function() {
  function t2(e2) {
    ur(this, t2), this.options = e2 || ko;
  }
  return or(t2, [{ key: "space", value: function(t3) {
    var e2 = this.rules.block.newline.exec(t3);
    if (e2 && e2[0].length > 0)
      return { type: "space", raw: e2[0] };
  } }, { key: "code", value: function(t3) {
    var e2 = this.rules.block.code.exec(t3);
    if (e2) {
      var n2 = e2[0].replace(/^ {1,4}/gm, "");
      return { type: "code", raw: e2[0], codeBlockStyle: "indented", text: this.options.pedantic ? n2 : Uo(n2, "\n") };
    }
  } }, { key: "fences", value: function(t3) {
    var e2 = this.rules.block.fences.exec(t3);
    if (e2) {
      var n2 = e2[0], r2 = function(t4, e3) {
        var n3 = t4.match(/^(\s+)(?:```)/);
        if (n3 === null)
          return e3;
        var r3 = n3[1];
        return e3.split("\n").map(function(t5) {
          var e4 = t5.match(/^\s+/);
          return e4 === null ? t5 : sr(e4, 1)[0].length >= r3.length ? t5.slice(r3.length) : t5;
        }).join("\n");
      }(n2, e2[3] || "");
      return { type: "code", raw: n2, lang: e2[2] ? e2[2].trim() : e2[2], text: r2 };
    }
  } }, { key: "heading", value: function(t3) {
    var e2 = this.rules.block.heading.exec(t3);
    if (e2) {
      var n2 = e2[2].trim();
      if (/#$/.test(n2)) {
        var r2 = Uo(n2, "#");
        this.options.pedantic ? n2 = r2.trim() : r2 && !/ $/.test(r2) || (n2 = r2.trim());
      }
      var i2 = { type: "heading", raw: e2[0], depth: e2[1].length, text: n2, tokens: [] };
      return this.lexer.inline(i2.text, i2.tokens), i2;
    }
  } }, { key: "hr", value: function(t3) {
    var e2 = this.rules.block.hr.exec(t3);
    if (e2)
      return { type: "hr", raw: e2[0] };
  } }, { key: "blockquote", value: function(t3) {
    var e2 = this.rules.block.blockquote.exec(t3);
    if (e2) {
      var n2 = e2[0].replace(/^ *> ?/gm, "");
      return { type: "blockquote", raw: e2[0], tokens: this.lexer.blockTokens(n2, []), text: n2 };
    }
  } }, { key: "list", value: function(t3) {
    var e2 = this.rules.block.list.exec(t3);
    if (e2) {
      var n2, r2, i2, u2, a2, o2, s2, l2, c2, p2, d2, f2, h2 = e2[1].trim(), g2 = h2.length > 1, D2 = { type: "list", raw: "", ordered: g2, start: g2 ? +h2.slice(0, -1) : "", loose: false, items: [] };
      h2 = g2 ? "\\d{1,9}\\".concat(h2.slice(-1)) : "\\".concat(h2), this.options.pedantic && (h2 = g2 ? h2 : "[*+-]");
      for (var m2 = new RegExp("^( {0,3}".concat(h2, ")((?: [^\\n]*)?(?:\\n|$))")); t3 && (f2 = false, e2 = m2.exec(t3)) && !this.rules.block.hr.test(t3); ) {
        if (n2 = e2[0], t3 = t3.substring(n2.length), l2 = e2[2].split("\n", 1)[0], c2 = t3.split("\n", 1)[0], this.options.pedantic ? (u2 = 2, d2 = l2.trimLeft()) : (u2 = (u2 = e2[2].search(/[^ ]/)) > 4 ? 1 : u2, d2 = l2.slice(u2), u2 += e2[1].length), o2 = false, !l2 && /^ *$/.test(c2) && (n2 += c2 + "\n", t3 = t3.substring(c2.length + 1), f2 = true), !f2)
          for (var v2 = new RegExp("^ {0,".concat(Math.min(3, u2 - 1), "}(?:[*+-]|\\d{1,9}[.)])")); t3 && (l2 = p2 = t3.split("\n", 1)[0], this.options.pedantic && (l2 = l2.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), !v2.test(l2)); ) {
            if (l2.search(/[^ ]/) >= u2 || !l2.trim())
              d2 += "\n" + l2.slice(u2);
            else {
              if (o2)
                break;
              d2 += "\n" + l2;
            }
            o2 || l2.trim() || (o2 = true), n2 += p2 + "\n", t3 = t3.substring(p2.length + 1);
          }
        D2.loose || (s2 ? D2.loose = true : /\n *\n *$/.test(n2) && (s2 = true)), this.options.gfm && (r2 = /^\[[ xX]\] /.exec(d2)) && (i2 = r2[0] !== "[ ] ", d2 = d2.replace(/^\[[ xX]\] +/, "")), D2.items.push({ type: "list_item", raw: n2, task: !!r2, checked: i2, loose: false, text: d2 }), D2.raw += n2;
      }
      D2.items[D2.items.length - 1].raw = n2.trimRight(), D2.items[D2.items.length - 1].text = d2.trimRight(), D2.raw = D2.raw.trimRight();
      var y2 = D2.items.length;
      for (a2 = 0; a2 < y2; a2++) {
        this.lexer.state.top = false, D2.items[a2].tokens = this.lexer.blockTokens(D2.items[a2].text, []);
        var k2 = D2.items[a2].tokens.filter(function(t4) {
          return t4.type === "space";
        }), E2 = k2.every(function(t4) {
          var e3, n3 = 0, r3 = pr(t4.raw.split(""));
          try {
            for (r3.s(); !(e3 = r3.n()).done; ) {
              if (e3.value === "\n" && (n3 += 1), n3 > 1)
                return true;
            }
          } catch (t5) {
            r3.e(t5);
          } finally {
            r3.f();
          }
          return false;
        });
        !D2.loose && k2.length && E2 && (D2.loose = true, D2.items[a2].loose = true);
      }
      return D2;
    }
  } }, { key: "html", value: function(t3) {
    var e2 = this.rules.block.html.exec(t3);
    if (e2) {
      var n2 = { type: "html", raw: e2[0], pre: !this.options.sanitizer && (e2[1] === "pre" || e2[1] === "script" || e2[1] === "style"), text: e2[0] };
      return this.options.sanitize && (n2.type = "paragraph", n2.text = this.options.sanitizer ? this.options.sanitizer(e2[0]) : Fo(e2[0]), n2.tokens = [], this.lexer.inline(n2.text, n2.tokens)), n2;
    }
  } }, { key: "def", value: function(t3) {
    var e2 = this.rules.block.def.exec(t3);
    if (e2)
      return e2[3] && (e2[3] = e2[3].substring(1, e2[3].length - 1)), { type: "def", tag: e2[1].toLowerCase().replace(/\s+/g, " "), raw: e2[0], href: e2[2], title: e2[3] };
  } }, { key: "table", value: function(t3) {
    var e2 = this.rules.block.table.exec(t3);
    if (e2) {
      var n2 = { type: "table", header: No(e2[1]).map(function(t4) {
        return { text: t4 };
      }), align: e2[2].replace(/^ *|\| *$/g, "").split(/ *\| */), rows: e2[3] && e2[3].trim() ? e2[3].replace(/\n[ \t]*$/, "").split("\n") : [] };
      if (n2.header.length === n2.align.length) {
        n2.raw = e2[0];
        var r2, i2, u2, a2, o2 = n2.align.length;
        for (r2 = 0; r2 < o2; r2++)
          /^ *-+: *$/.test(n2.align[r2]) ? n2.align[r2] = "right" : /^ *:-+: *$/.test(n2.align[r2]) ? n2.align[r2] = "center" : /^ *:-+ *$/.test(n2.align[r2]) ? n2.align[r2] = "left" : n2.align[r2] = null;
        for (o2 = n2.rows.length, r2 = 0; r2 < o2; r2++)
          n2.rows[r2] = No(n2.rows[r2], n2.header.length).map(function(t4) {
            return { text: t4 };
          });
        for (o2 = n2.header.length, i2 = 0; i2 < o2; i2++)
          n2.header[i2].tokens = [], this.lexer.inlineTokens(n2.header[i2].text, n2.header[i2].tokens);
        for (o2 = n2.rows.length, i2 = 0; i2 < o2; i2++)
          for (a2 = n2.rows[i2], u2 = 0; u2 < a2.length; u2++)
            a2[u2].tokens = [], this.lexer.inlineTokens(a2[u2].text, a2[u2].tokens);
        return n2;
      }
    }
  } }, { key: "lheading", value: function(t3) {
    var e2 = this.rules.block.lheading.exec(t3);
    if (e2) {
      var n2 = { type: "heading", raw: e2[0], depth: e2[2].charAt(0) === "=" ? 1 : 2, text: e2[1], tokens: [] };
      return this.lexer.inline(n2.text, n2.tokens), n2;
    }
  } }, { key: "paragraph", value: function(t3) {
    var e2 = this.rules.block.paragraph.exec(t3);
    if (e2) {
      var n2 = { type: "paragraph", raw: e2[0], text: e2[1].charAt(e2[1].length - 1) === "\n" ? e2[1].slice(0, -1) : e2[1], tokens: [] };
      return this.lexer.inline(n2.text, n2.tokens), n2;
    }
  } }, { key: "text", value: function(t3) {
    var e2 = this.rules.block.text.exec(t3);
    if (e2) {
      var n2 = { type: "text", raw: e2[0], text: e2[0], tokens: [] };
      return this.lexer.inline(n2.text, n2.tokens), n2;
    }
  } }, { key: "escape", value: function(t3) {
    var e2 = this.rules.inline.escape.exec(t3);
    if (e2)
      return { type: "escape", raw: e2[0], text: Fo(e2[1]) };
  } }, { key: "tag", value: function(t3) {
    var e2 = this.rules.inline.tag.exec(t3);
    if (e2)
      return !this.lexer.state.inLink && /^<a /i.test(e2[0]) ? this.lexer.state.inLink = true : this.lexer.state.inLink && /^<\/a>/i.test(e2[0]) && (this.lexer.state.inLink = false), !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(e2[0]) ? this.lexer.state.inRawBlock = true : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(e2[0]) && (this.lexer.state.inRawBlock = false), { type: this.options.sanitize ? "text" : "html", raw: e2[0], inLink: this.lexer.state.inLink, inRawBlock: this.lexer.state.inRawBlock, text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(e2[0]) : Fo(e2[0]) : e2[0] };
  } }, { key: "link", value: function(t3) {
    var e2 = this.rules.inline.link.exec(t3);
    if (e2) {
      var n2 = e2[2].trim();
      if (!this.options.pedantic && /^</.test(n2)) {
        if (!/>$/.test(n2))
          return;
        var r2 = Uo(n2.slice(0, -1), "\\");
        if ((n2.length - r2.length) % 2 == 0)
          return;
      } else {
        var i2 = function(t4, e3) {
          if (t4.indexOf(e3[1]) === -1)
            return -1;
          for (var n3 = t4.length, r3 = 0, i3 = 0; i3 < n3; i3++)
            if (t4[i3] === "\\")
              i3++;
            else if (t4[i3] === e3[0])
              r3++;
            else if (t4[i3] === e3[1] && --r3 < 0)
              return i3;
          return -1;
        }(e2[2], "()");
        if (i2 > -1) {
          var u2 = (e2[0].indexOf("!") === 0 ? 5 : 4) + e2[1].length + i2;
          e2[2] = e2[2].substring(0, i2), e2[0] = e2[0].substring(0, u2).trim(), e2[3] = "";
        }
      }
      var a2 = e2[2], o2 = "";
      if (this.options.pedantic) {
        var s2 = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(a2);
        s2 && (a2 = s2[1], o2 = s2[3]);
      } else
        o2 = e2[3] ? e2[3].slice(1, -1) : "";
      return a2 = a2.trim(), /^</.test(a2) && (a2 = this.options.pedantic && !/>$/.test(n2) ? a2.slice(1) : a2.slice(1, -1)), Ho(e2, { href: a2 ? a2.replace(this.rules.inline._escapes, "$1") : a2, title: o2 ? o2.replace(this.rules.inline._escapes, "$1") : o2 }, e2[0], this.lexer);
    }
  } }, { key: "reflink", value: function(t3, e2) {
    var n2;
    if ((n2 = this.rules.inline.reflink.exec(t3)) || (n2 = this.rules.inline.nolink.exec(t3))) {
      var r2 = (n2[2] || n2[1]).replace(/\s+/g, " ");
      if (!(r2 = e2[r2.toLowerCase()]) || !r2.href) {
        var i2 = n2[0].charAt(0);
        return { type: "text", raw: i2, text: i2 };
      }
      return Ho(n2, r2, n2[0], this.lexer);
    }
  } }, { key: "emStrong", value: function(t3, e2) {
    var n2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "", r2 = this.rules.inline.emStrong.lDelim.exec(t3);
    if (r2 && (!r2[3] || !n2.match(/(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/))) {
      var i2 = r2[1] || r2[2] || "";
      if (!i2 || i2 && (n2 === "" || this.rules.inline.punctuation.exec(n2))) {
        var u2, a2, o2 = r2[0].length - 1, s2 = o2, l2 = 0, c2 = r2[0][0] === "*" ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
        for (c2.lastIndex = 0, e2 = e2.slice(-1 * t3.length + o2); (r2 = c2.exec(e2)) != null; )
          if (u2 = r2[1] || r2[2] || r2[3] || r2[4] || r2[5] || r2[6])
            if (a2 = u2.length, r2[3] || r2[4])
              s2 += a2;
            else if (!((r2[5] || r2[6]) && o2 % 3) || (o2 + a2) % 3) {
              if (!((s2 -= a2) > 0)) {
                if (a2 = Math.min(a2, a2 + s2 + l2), Math.min(o2, a2) % 2) {
                  var p2 = t3.slice(1, o2 + r2.index + a2);
                  return { type: "em", raw: t3.slice(0, o2 + r2.index + a2 + 1), text: p2, tokens: this.lexer.inlineTokens(p2, []) };
                }
                var d2 = t3.slice(2, o2 + r2.index + a2 - 1);
                return { type: "strong", raw: t3.slice(0, o2 + r2.index + a2 + 1), text: d2, tokens: this.lexer.inlineTokens(d2, []) };
              }
            } else
              l2 += a2;
      }
    }
  } }, { key: "codespan", value: function(t3) {
    var e2 = this.rules.inline.code.exec(t3);
    if (e2) {
      var n2 = e2[2].replace(/\n/g, " "), r2 = /[^ ]/.test(n2), i2 = /^ /.test(n2) && / $/.test(n2);
      return r2 && i2 && (n2 = n2.substring(1, n2.length - 1)), n2 = Fo(n2, true), { type: "codespan", raw: e2[0], text: n2 };
    }
  } }, { key: "br", value: function(t3) {
    var e2 = this.rules.inline.br.exec(t3);
    if (e2)
      return { type: "br", raw: e2[0] };
  } }, { key: "del", value: function(t3) {
    var e2 = this.rules.inline.del.exec(t3);
    if (e2)
      return { type: "del", raw: e2[0], text: e2[2], tokens: this.lexer.inlineTokens(e2[2], []) };
  } }, { key: "autolink", value: function(t3, e2) {
    var n2, r2, i2 = this.rules.inline.autolink.exec(t3);
    if (i2)
      return r2 = i2[2] === "@" ? "mailto:" + (n2 = Fo(this.options.mangle ? e2(i2[1]) : i2[1])) : n2 = Fo(i2[1]), { type: "link", raw: i2[0], text: n2, href: r2, tokens: [{ type: "text", raw: n2, text: n2 }] };
  } }, { key: "url", value: function(t3, e2) {
    var n2;
    if (n2 = this.rules.inline.url.exec(t3)) {
      var r2, i2;
      if (n2[2] === "@")
        i2 = "mailto:" + (r2 = Fo(this.options.mangle ? e2(n2[0]) : n2[0]));
      else {
        var u2;
        do {
          u2 = n2[0], n2[0] = this.rules.inline._backpedal.exec(n2[0])[0];
        } while (u2 !== n2[0]);
        r2 = Fo(n2[0]), i2 = n2[1] === "www." ? "http://" + r2 : r2;
      }
      return { type: "link", raw: n2[0], text: r2, href: i2, tokens: [{ type: "text", raw: r2, text: r2 }] };
    }
  } }, { key: "inlineText", value: function(t3, e2) {
    var n2, r2 = this.rules.inline.text.exec(t3);
    if (r2)
      return n2 = this.lexer.state.inRawBlock ? this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(r2[0]) : Fo(r2[0]) : r2[0] : Fo(this.options.smartypants ? e2(r2[0]) : r2[0]), { type: "text", raw: r2[0], text: n2 };
  } }]), t2;
}();
var Ko = { newline: /^(?: *(?:\n|$))+/, code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/, fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/, hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/, heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/, list: /^( {0,3}bull)( [^\n]+?)?(?:\n|$)/, html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", def: /^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/, table: Mo, lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/, _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, text: /^[^\n]+/, _label: /(?!\s*\])(?:\\.|[^\[\]\\])+/, _title: /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/ };
Ko.def = _o(Ko.def).replace("label", Ko._label).replace("title", Ko._title).getRegex(), Ko.bullet = /(?:[*+-]|\d{1,9}[.)])/, Ko.listItemStart = _o(/^( *)(bull) */).replace("bull", Ko.bullet).getRegex(), Ko.list = _o(Ko.list).replace(/bull/g, Ko.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + Ko.def.source + ")").getRegex(), Ko._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Ko._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/, Ko.html = _o(Ko.html, "i").replace("comment", Ko._comment).replace("tag", Ko._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), Ko.paragraph = _o(Ko._paragraph).replace("hr", Ko.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ko._tag).getRegex(), Ko.blockquote = _o(Ko.blockquote).replace("paragraph", Ko.paragraph).getRegex(), Ko.normal = jo({}, Ko), Ko.gfm = jo({}, Ko.normal, { table: "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)" }), Ko.gfm.table = _o(Ko.gfm.table).replace("hr", Ko.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ko._tag).getRegex(), Ko.gfm.paragraph = _o(Ko._paragraph).replace("hr", Ko.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("table", Ko.gfm.table).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ko._tag).getRegex(), Ko.pedantic = jo({}, Ko.normal, { html: _o(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", Ko._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: Mo, paragraph: _o(Ko.normal._paragraph).replace("hr", Ko.hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", Ko.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex() });
var Vo = { escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/, url: Mo, tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>", link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/, reflink: /^!?\[(label)\]\[(ref)\]/, nolink: /^!?\[(ref)\](?:\[\])?/, reflinkSearch: "reflink|nolink(?!\\()", emStrong: { lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/, rDelimAst: /^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/, rDelimUnd: /^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/ }, code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, br: /^( {2,}|\\)\n(?!\s*$)/, del: Mo, text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, punctuation: /^([\spunctuation])/ };
function Qo(t2) {
  return t2.replace(/---/g, "\u2014").replace(/--/g, "\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018").replace(/'/g, "\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201C").replace(/"/g, "\u201D").replace(/\.{3}/g, "\u2026");
}
function Go(t2) {
  var e2, n2, r2 = "", i2 = t2.length;
  for (e2 = 0; e2 < i2; e2++)
    n2 = t2.charCodeAt(e2), Math.random() > 0.5 && (n2 = "x" + n2.toString(16)), r2 += "&#" + n2 + ";";
  return r2;
}
Vo._punctuation = "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~", Vo.punctuation = _o(Vo.punctuation).replace(/punctuation/g, Vo._punctuation).getRegex(), Vo.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g, Vo.escapedEmSt = /\\\*|\\_/g, Vo._comment = _o(Ko._comment).replace("(?:-->|$)", "-->").getRegex(), Vo.emStrong.lDelim = _o(Vo.emStrong.lDelim).replace(/punct/g, Vo._punctuation).getRegex(), Vo.emStrong.rDelimAst = _o(Vo.emStrong.rDelimAst, "g").replace(/punct/g, Vo._punctuation).getRegex(), Vo.emStrong.rDelimUnd = _o(Vo.emStrong.rDelimUnd, "g").replace(/punct/g, Vo._punctuation).getRegex(), Vo._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g, Vo._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/, Vo._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/, Vo.autolink = _o(Vo.autolink).replace("scheme", Vo._scheme).replace("email", Vo._email).getRegex(), Vo._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/, Vo.tag = _o(Vo.tag).replace("comment", Vo._comment).replace("attribute", Vo._attribute).getRegex(), Vo._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, Vo._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/, Vo._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/, Vo.link = _o(Vo.link).replace("label", Vo._label).replace("href", Vo._href).replace("title", Vo._title).getRegex(), Vo.reflink = _o(Vo.reflink).replace("label", Vo._label).replace("ref", Ko._label).getRegex(), Vo.nolink = _o(Vo.nolink).replace("ref", Ko._label).getRegex(), Vo.reflinkSearch = _o(Vo.reflinkSearch, "g").replace("reflink", Vo.reflink).replace("nolink", Vo.nolink).getRegex(), Vo.normal = jo({}, Vo), Vo.pedantic = jo({}, Vo.normal, { strong: { start: /^__|\*\*/, middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/, endAst: /\*\*(?!\*)/g, endUnd: /__(?!_)/g }, em: { start: /^_|\*/, middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/, endAst: /\*(?!\*)/g, endUnd: /_(?!_)/g }, link: _o(/^!?\[(label)\]\((.*?)\)/).replace("label", Vo._label).getRegex(), reflink: _o(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", Vo._label).getRegex() }), Vo.gfm = jo({}, Vo.normal, { escape: _o(Vo.escape).replace("])", "~|])").getRegex(), _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/, url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/, text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/ }), Vo.gfm.url = _o(Vo.gfm.url, "i").replace("email", Vo.gfm._extended_email).getRegex(), Vo.breaks = jo({}, Vo.gfm, { br: _o(Vo.br).replace("{2,}", "*").getRegex(), text: _o(Vo.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() });
var Wo = function() {
  function t2(e2) {
    ur(this, t2), this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e2 || ko, this.options.tokenizer = this.options.tokenizer || new Jo(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: false, inRawBlock: false, top: true };
    var n2 = { block: Ko.normal, inline: Vo.normal };
    this.options.pedantic ? (n2.block = Ko.pedantic, n2.inline = Vo.pedantic) : this.options.gfm && (n2.block = Ko.gfm, this.options.breaks ? n2.inline = Vo.breaks : n2.inline = Vo.gfm), this.tokenizer.rules = n2;
  }
  return or(t2, [{ key: "lex", value: function(t3) {
    var e2;
    for (t3 = t3.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    "), this.blockTokens(t3, this.tokens); e2 = this.inlineQueue.shift(); )
      this.inlineTokens(e2.src, e2.tokens);
    return this.tokens;
  } }, { key: "blockTokens", value: function(t3) {
    var e2, n2, r2, i2, u2 = this, a2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    for (this.options.pedantic && (t3 = t3.replace(/^ +$/gm, "")); t3; )
      if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some(function(n3) {
        return !!(e2 = n3.call({ lexer: u2 }, t3, a2)) && (t3 = t3.substring(e2.raw.length), a2.push(e2), true);
      }))) {
        if (e2 = this.tokenizer.space(t3))
          t3 = t3.substring(e2.raw.length), e2.raw.length === 1 && a2.length > 0 ? a2[a2.length - 1].raw += "\n" : a2.push(e2);
        else if (e2 = this.tokenizer.code(t3))
          t3 = t3.substring(e2.raw.length), !(n2 = a2[a2.length - 1]) || n2.type !== "paragraph" && n2.type !== "text" ? a2.push(e2) : (n2.raw += "\n" + e2.raw, n2.text += "\n" + e2.text, this.inlineQueue[this.inlineQueue.length - 1].src = n2.text);
        else if (e2 = this.tokenizer.fences(t3))
          t3 = t3.substring(e2.raw.length), a2.push(e2);
        else if (e2 = this.tokenizer.heading(t3))
          t3 = t3.substring(e2.raw.length), a2.push(e2);
        else if (e2 = this.tokenizer.hr(t3))
          t3 = t3.substring(e2.raw.length), a2.push(e2);
        else if (e2 = this.tokenizer.blockquote(t3))
          t3 = t3.substring(e2.raw.length), a2.push(e2);
        else if (e2 = this.tokenizer.list(t3))
          t3 = t3.substring(e2.raw.length), a2.push(e2);
        else if (e2 = this.tokenizer.html(t3))
          t3 = t3.substring(e2.raw.length), a2.push(e2);
        else if (e2 = this.tokenizer.def(t3))
          t3 = t3.substring(e2.raw.length), !(n2 = a2[a2.length - 1]) || n2.type !== "paragraph" && n2.type !== "text" ? this.tokens.links[e2.tag] || (this.tokens.links[e2.tag] = { href: e2.href, title: e2.title }) : (n2.raw += "\n" + e2.raw, n2.text += "\n" + e2.raw, this.inlineQueue[this.inlineQueue.length - 1].src = n2.text);
        else if (e2 = this.tokenizer.table(t3))
          t3 = t3.substring(e2.raw.length), a2.push(e2);
        else if (e2 = this.tokenizer.lheading(t3))
          t3 = t3.substring(e2.raw.length), a2.push(e2);
        else if (r2 = t3, this.options.extensions && this.options.extensions.startBlock && function() {
          var e3 = 1 / 0, n3 = t3.slice(1), i3 = void 0;
          u2.options.extensions.startBlock.forEach(function(t4) {
            typeof (i3 = t4.call({ lexer: this }, n3)) == "number" && i3 >= 0 && (e3 = Math.min(e3, i3));
          }), e3 < 1 / 0 && e3 >= 0 && (r2 = t3.substring(0, e3 + 1));
        }(), this.state.top && (e2 = this.tokenizer.paragraph(r2)))
          n2 = a2[a2.length - 1], i2 && n2.type === "paragraph" ? (n2.raw += "\n" + e2.raw, n2.text += "\n" + e2.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = n2.text) : a2.push(e2), i2 = r2.length !== t3.length, t3 = t3.substring(e2.raw.length);
        else if (e2 = this.tokenizer.text(t3))
          t3 = t3.substring(e2.raw.length), (n2 = a2[a2.length - 1]) && n2.type === "text" ? (n2.raw += "\n" + e2.raw, n2.text += "\n" + e2.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = n2.text) : a2.push(e2);
        else if (t3) {
          var o2 = "Infinite loop on byte: " + t3.charCodeAt(0);
          if (this.options.silent) {
            console.error(o2);
            break;
          }
          throw new Error(o2);
        }
      }
    return this.state.top = true, a2;
  } }, { key: "inline", value: function(t3, e2) {
    this.inlineQueue.push({ src: t3, tokens: e2 });
  } }, { key: "inlineTokens", value: function(t3) {
    var e2, n2, r2, i2, u2, a2, o2 = this, s2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], l2 = t3;
    if (this.tokens.links) {
      var c2 = Object.keys(this.tokens.links);
      if (c2.length > 0)
        for (; (i2 = this.tokenizer.rules.inline.reflinkSearch.exec(l2)) != null; )
          c2.includes(i2[0].slice(i2[0].lastIndexOf("[") + 1, -1)) && (l2 = l2.slice(0, i2.index) + "[" + Zo("a", i2[0].length - 2) + "]" + l2.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (i2 = this.tokenizer.rules.inline.blockSkip.exec(l2)) != null; )
      l2 = l2.slice(0, i2.index) + "[" + Zo("a", i2[0].length - 2) + "]" + l2.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (i2 = this.tokenizer.rules.inline.escapedEmSt.exec(l2)) != null; )
      l2 = l2.slice(0, i2.index) + "++" + l2.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);
    for (; t3; )
      if (u2 || (a2 = ""), u2 = false, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some(function(n3) {
        return !!(e2 = n3.call({ lexer: o2 }, t3, s2)) && (t3 = t3.substring(e2.raw.length), s2.push(e2), true);
      })))
        if (e2 = this.tokenizer.escape(t3))
          t3 = t3.substring(e2.raw.length), s2.push(e2);
        else if (e2 = this.tokenizer.tag(t3))
          t3 = t3.substring(e2.raw.length), (n2 = s2[s2.length - 1]) && e2.type === "text" && n2.type === "text" ? (n2.raw += e2.raw, n2.text += e2.text) : s2.push(e2);
        else if (e2 = this.tokenizer.link(t3))
          t3 = t3.substring(e2.raw.length), s2.push(e2);
        else if (e2 = this.tokenizer.reflink(t3, this.tokens.links))
          t3 = t3.substring(e2.raw.length), (n2 = s2[s2.length - 1]) && e2.type === "text" && n2.type === "text" ? (n2.raw += e2.raw, n2.text += e2.text) : s2.push(e2);
        else if (e2 = this.tokenizer.emStrong(t3, l2, a2))
          t3 = t3.substring(e2.raw.length), s2.push(e2);
        else if (e2 = this.tokenizer.codespan(t3))
          t3 = t3.substring(e2.raw.length), s2.push(e2);
        else if (e2 = this.tokenizer.br(t3))
          t3 = t3.substring(e2.raw.length), s2.push(e2);
        else if (e2 = this.tokenizer.del(t3))
          t3 = t3.substring(e2.raw.length), s2.push(e2);
        else if (e2 = this.tokenizer.autolink(t3, Go))
          t3 = t3.substring(e2.raw.length), s2.push(e2);
        else if (this.state.inLink || !(e2 = this.tokenizer.url(t3, Go))) {
          if (r2 = t3, this.options.extensions && this.options.extensions.startInline && function() {
            var e3 = 1 / 0, n3 = t3.slice(1), i3 = void 0;
            o2.options.extensions.startInline.forEach(function(t4) {
              typeof (i3 = t4.call({ lexer: this }, n3)) == "number" && i3 >= 0 && (e3 = Math.min(e3, i3));
            }), e3 < 1 / 0 && e3 >= 0 && (r2 = t3.substring(0, e3 + 1));
          }(), e2 = this.tokenizer.inlineText(r2, Qo))
            t3 = t3.substring(e2.raw.length), e2.raw.slice(-1) !== "_" && (a2 = e2.raw.slice(-1)), u2 = true, (n2 = s2[s2.length - 1]) && n2.type === "text" ? (n2.raw += e2.raw, n2.text += e2.text) : s2.push(e2);
          else if (t3) {
            var p2 = "Infinite loop on byte: " + t3.charCodeAt(0);
            if (this.options.silent) {
              console.error(p2);
              break;
            }
            throw new Error(p2);
          }
        } else
          t3 = t3.substring(e2.raw.length), s2.push(e2);
    return s2;
  } }], [{ key: "rules", get: function() {
    return { block: Ko, inline: Vo };
  } }, { key: "lex", value: function(e2, n2) {
    return new t2(n2).lex(e2);
  } }, { key: "lexInline", value: function(e2, n2) {
    return new t2(n2).inlineTokens(e2);
  } }]), t2;
}();
var Yo = function() {
  function t2(e2) {
    ur(this, t2), this.options = e2 || ko;
  }
  return or(t2, [{ key: "code", value: function(t3, e2, n2) {
    var r2 = (e2 || "").match(/\S*/)[0];
    if (this.options.highlight) {
      var i2 = this.options.highlight(t3, r2);
      i2 != null && i2 !== t3 && (n2 = true, t3 = i2);
    }
    return t3 = t3.replace(/\n$/, "") + "\n", r2 ? '<pre><code class="' + this.options.langPrefix + Fo(r2, true) + '">' + (n2 ? t3 : Fo(t3, true)) + "</code></pre>\n" : "<pre><code>" + (n2 ? t3 : Fo(t3, true)) + "</code></pre>\n";
  } }, { key: "blockquote", value: function(t3) {
    return "<blockquote>\n" + t3 + "</blockquote>\n";
  } }, { key: "html", value: function(t3) {
    return t3;
  } }, { key: "heading", value: function(t3, e2, n2, r2) {
    return this.options.headerIds ? "<h" + e2 + ' id="' + this.options.headerPrefix + r2.slug(n2) + '">' + t3 + "</h" + e2 + ">\n" : "<h" + e2 + ">" + t3 + "</h" + e2 + ">\n";
  } }, { key: "hr", value: function() {
    return this.options.xhtml ? "<hr/>\n" : "<hr>\n";
  } }, { key: "list", value: function(t3, e2, n2) {
    var r2 = e2 ? "ol" : "ul";
    return "<" + r2 + (e2 && n2 !== 1 ? ' start="' + n2 + '"' : "") + ">\n" + t3 + "</" + r2 + ">\n";
  } }, { key: "listitem", value: function(t3) {
    return "<li>" + t3 + "</li>\n";
  } }, { key: "checkbox", value: function(t3) {
    return "<input " + (t3 ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> ";
  } }, { key: "paragraph", value: function(t3) {
    return "<p>" + t3 + "</p>\n";
  } }, { key: "table", value: function(t3, e2) {
    return e2 && (e2 = "<tbody>" + e2 + "</tbody>"), "<table>\n<thead>\n" + t3 + "</thead>\n" + e2 + "</table>\n";
  } }, { key: "tablerow", value: function(t3) {
    return "<tr>\n" + t3 + "</tr>\n";
  } }, { key: "tablecell", value: function(t3, e2) {
    var n2 = e2.header ? "th" : "td";
    return (e2.align ? "<" + n2 + ' align="' + e2.align + '">' : "<" + n2 + ">") + t3 + "</" + n2 + ">\n";
  } }, { key: "strong", value: function(t3) {
    return "<strong>" + t3 + "</strong>";
  } }, { key: "em", value: function(t3) {
    return "<em>" + t3 + "</em>";
  } }, { key: "codespan", value: function(t3) {
    return "<code>" + t3 + "</code>";
  } }, { key: "br", value: function() {
    return this.options.xhtml ? "<br/>" : "<br>";
  } }, { key: "del", value: function(t3) {
    return "<del>" + t3 + "</del>";
  } }, { key: "link", value: function(t3, e2, n2) {
    if ((t3 = Io(this.options.sanitize, this.options.baseUrl, t3)) === null)
      return n2;
    var r2 = '<a href="' + Fo(t3) + '"';
    return e2 && (r2 += ' title="' + e2 + '"'), r2 += ">" + n2 + "</a>";
  } }, { key: "image", value: function(t3, e2, n2) {
    if ((t3 = Io(this.options.sanitize, this.options.baseUrl, t3)) === null)
      return n2;
    var r2 = '<img src="' + t3 + '" alt="' + n2 + '"';
    return e2 && (r2 += ' title="' + e2 + '"'), r2 += this.options.xhtml ? "/>" : ">";
  } }, { key: "text", value: function(t3) {
    return t3;
  } }]), t2;
}();
var Xo = function() {
  function t2() {
    ur(this, t2);
  }
  return or(t2, [{ key: "strong", value: function(t3) {
    return t3;
  } }, { key: "em", value: function(t3) {
    return t3;
  } }, { key: "codespan", value: function(t3) {
    return t3;
  } }, { key: "del", value: function(t3) {
    return t3;
  } }, { key: "html", value: function(t3) {
    return t3;
  } }, { key: "text", value: function(t3) {
    return t3;
  } }, { key: "link", value: function(t3, e2, n2) {
    return "" + n2;
  } }, { key: "image", value: function(t3, e2, n2) {
    return "" + n2;
  } }, { key: "br", value: function() {
    return "";
  } }]), t2;
}();
var ts = function() {
  function t2() {
    ur(this, t2), this.seen = {};
  }
  return or(t2, [{ key: "serialize", value: function(t3) {
    return t3.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi, "").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-");
  } }, { key: "getNextSafeSlug", value: function(t3, e2) {
    var n2 = t3, r2 = 0;
    if (this.seen.hasOwnProperty(n2)) {
      r2 = this.seen[t3];
      do {
        n2 = t3 + "-" + ++r2;
      } while (this.seen.hasOwnProperty(n2));
    }
    return e2 || (this.seen[t3] = r2, this.seen[n2] = 0), n2;
  } }, { key: "slug", value: function(t3) {
    var e2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n2 = this.serialize(t3);
    return this.getNextSafeSlug(n2, e2.dryrun);
  } }]), t2;
}();
var es = function() {
  function t2(e2) {
    ur(this, t2), this.options = e2 || ko, this.options.renderer = this.options.renderer || new Yo(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new Xo(), this.slugger = new ts();
  }
  return or(t2, [{ key: "parse", value: function(t3) {
    var e2, n2, r2, i2, u2, a2, o2, s2, l2, c2, p2, d2, f2, h2, g2, D2, m2, v2, y2, k2 = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], E2 = "", x2 = t3.length;
    for (e2 = 0; e2 < x2; e2++)
      if (c2 = t3[e2], !(this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[c2.type]) || (y2 = this.options.extensions.renderers[c2.type].call({ parser: this }, c2)) === false && ["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(c2.type))
        switch (c2.type) {
          case "space":
            continue;
          case "hr":
            E2 += this.renderer.hr();
            continue;
          case "heading":
            E2 += this.renderer.heading(this.parseInline(c2.tokens), c2.depth, Bo(this.parseInline(c2.tokens, this.textRenderer)), this.slugger);
            continue;
          case "code":
            E2 += this.renderer.code(c2.text, c2.lang, c2.escaped);
            continue;
          case "table":
            for (s2 = "", o2 = "", i2 = c2.header.length, n2 = 0; n2 < i2; n2++)
              o2 += this.renderer.tablecell(this.parseInline(c2.header[n2].tokens), { header: true, align: c2.align[n2] });
            for (s2 += this.renderer.tablerow(o2), l2 = "", i2 = c2.rows.length, n2 = 0; n2 < i2; n2++) {
              for (o2 = "", u2 = (a2 = c2.rows[n2]).length, r2 = 0; r2 < u2; r2++)
                o2 += this.renderer.tablecell(this.parseInline(a2[r2].tokens), { header: false, align: c2.align[r2] });
              l2 += this.renderer.tablerow(o2);
            }
            E2 += this.renderer.table(s2, l2);
            continue;
          case "blockquote":
            l2 = this.parse(c2.tokens), E2 += this.renderer.blockquote(l2);
            continue;
          case "list":
            for (p2 = c2.ordered, d2 = c2.start, f2 = c2.loose, i2 = c2.items.length, l2 = "", n2 = 0; n2 < i2; n2++)
              D2 = (g2 = c2.items[n2]).checked, m2 = g2.task, h2 = "", g2.task && (v2 = this.renderer.checkbox(D2), f2 ? g2.tokens.length > 0 && g2.tokens[0].type === "paragraph" ? (g2.tokens[0].text = v2 + " " + g2.tokens[0].text, g2.tokens[0].tokens && g2.tokens[0].tokens.length > 0 && g2.tokens[0].tokens[0].type === "text" && (g2.tokens[0].tokens[0].text = v2 + " " + g2.tokens[0].tokens[0].text)) : g2.tokens.unshift({ type: "text", text: v2 }) : h2 += v2), h2 += this.parse(g2.tokens, f2), l2 += this.renderer.listitem(h2, m2, D2);
            E2 += this.renderer.list(l2, p2, d2);
            continue;
          case "html":
            E2 += this.renderer.html(c2.text);
            continue;
          case "paragraph":
            E2 += this.renderer.paragraph(this.parseInline(c2.tokens));
            continue;
          case "text":
            for (l2 = c2.tokens ? this.parseInline(c2.tokens) : c2.text; e2 + 1 < x2 && t3[e2 + 1].type === "text"; )
              l2 += "\n" + ((c2 = t3[++e2]).tokens ? this.parseInline(c2.tokens) : c2.text);
            E2 += k2 ? this.renderer.paragraph(l2) : l2;
            continue;
          default:
            var A2 = 'Token with "' + c2.type + '" type was not found.';
            if (this.options.silent)
              return void console.error(A2);
            throw new Error(A2);
        }
      else
        E2 += y2 || "";
    return E2;
  } }, { key: "parseInline", value: function(t3, e2) {
    e2 = e2 || this.renderer;
    var n2, r2, i2, u2 = "", a2 = t3.length;
    for (n2 = 0; n2 < a2; n2++)
      if (r2 = t3[n2], !(this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[r2.type]) || (i2 = this.options.extensions.renderers[r2.type].call({ parser: this }, r2)) === false && ["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(r2.type))
        switch (r2.type) {
          case "escape":
            u2 += e2.text(r2.text);
            break;
          case "html":
            u2 += e2.html(r2.text);
            break;
          case "link":
            u2 += e2.link(r2.href, r2.title, this.parseInline(r2.tokens, e2));
            break;
          case "image":
            u2 += e2.image(r2.href, r2.title, r2.text);
            break;
          case "strong":
            u2 += e2.strong(this.parseInline(r2.tokens, e2));
            break;
          case "em":
            u2 += e2.em(this.parseInline(r2.tokens, e2));
            break;
          case "codespan":
            u2 += e2.codespan(r2.text);
            break;
          case "br":
            u2 += e2.br();
            break;
          case "del":
            u2 += e2.del(this.parseInline(r2.tokens, e2));
            break;
          case "text":
            u2 += e2.text(r2.text);
            break;
          default:
            var o2 = 'Token with "' + r2.type + '" type was not found.';
            if (this.options.silent)
              return void console.error(o2);
            throw new Error(o2);
        }
      else
        u2 += i2 || "";
    return u2;
  } }], [{ key: "parse", value: function(e2, n2) {
    return new t2(n2).parse(e2);
  } }, { key: "parseInline", value: function(e2, n2) {
    return new t2(n2).parseInline(e2);
  } }]), t2;
}();
function ns(t2, e2, n2) {
  if (t2 == null)
    throw new Error("marked(): input parameter is undefined or null");
  if (typeof t2 != "string")
    throw new Error("marked(): input parameter is of type " + Object.prototype.toString.call(t2) + ", string expected");
  if (typeof e2 == "function" && (n2 = e2, e2 = null), qo(e2 = jo({}, ns.defaults, e2 || {})), n2) {
    var r2, i2 = e2.highlight;
    try {
      r2 = Wo.lex(t2, e2);
    } catch (t3) {
      return n2(t3);
    }
    var u2 = function(t3) {
      var u3;
      if (!t3)
        try {
          e2.walkTokens && ns.walkTokens(r2, e2.walkTokens), u3 = es.parse(r2, e2);
        } catch (e3) {
          t3 = e3;
        }
      return e2.highlight = i2, t3 ? n2(t3) : n2(null, u3);
    };
    if (!i2 || i2.length < 3)
      return u2();
    if (delete e2.highlight, !r2.length)
      return u2();
    var a2 = 0;
    return ns.walkTokens(r2, function(t3) {
      t3.type === "code" && (a2++, setTimeout(function() {
        i2(t3.text, t3.lang, function(e3, n3) {
          if (e3)
            return u2(e3);
          n3 != null && n3 !== t3.text && (t3.text = n3, t3.escaped = true), --a2 === 0 && u2();
        });
      }, 0));
    }), void (a2 === 0 && u2());
  }
  try {
    var o2 = Wo.lex(t2, e2);
    return e2.walkTokens && ns.walkTokens(o2, e2.walkTokens), es.parse(o2, e2);
  } catch (t3) {
    if (t3.message += "\nPlease report this to https://github.com/markedjs/marked.", e2.silent)
      return "<p>An error occurred:</p><pre>" + Fo(t3.message + "", true) + "</pre>";
    throw t3;
  }
}
ns.options = ns.setOptions = function(t2) {
  var e2;
  return jo(ns.defaults, t2), e2 = ns.defaults, ko = e2, ns;
}, ns.getDefaults = yo, ns.defaults = ko, ns.use = function() {
  for (var t2 = arguments.length, e2 = new Array(t2), n2 = 0; n2 < t2; n2++)
    e2[n2] = arguments[n2];
  var r2, i2 = jo.apply(void 0, [{}].concat(e2)), u2 = ns.defaults.extensions || { renderers: {}, childTokens: {} };
  e2.forEach(function(t3) {
    if (t3.extensions && (r2 = true, t3.extensions.forEach(function(t4) {
      if (!t4.name)
        throw new Error("extension name required");
      if (t4.renderer) {
        var e4 = u2.renderers ? u2.renderers[t4.name] : null;
        u2.renderers[t4.name] = e4 ? function() {
          for (var n3 = arguments.length, r3 = new Array(n3), i3 = 0; i3 < n3; i3++)
            r3[i3] = arguments[i3];
          var u3 = t4.renderer.apply(this, r3);
          return u3 === false && (u3 = e4.apply(this, r3)), u3;
        } : t4.renderer;
      }
      if (t4.tokenizer) {
        if (!t4.level || t4.level !== "block" && t4.level !== "inline")
          throw new Error("extension level must be 'block' or 'inline'");
        u2[t4.level] ? u2[t4.level].unshift(t4.tokenizer) : u2[t4.level] = [t4.tokenizer], t4.start && (t4.level === "block" ? u2.startBlock ? u2.startBlock.push(t4.start) : u2.startBlock = [t4.start] : t4.level === "inline" && (u2.startInline ? u2.startInline.push(t4.start) : u2.startInline = [t4.start]));
      }
      t4.childTokens && (u2.childTokens[t4.name] = t4.childTokens);
    })), t3.renderer && function() {
      var e4 = ns.defaults.renderer || new Yo(), n3 = function(n4) {
        var r4 = e4[n4];
        e4[n4] = function() {
          for (var i3 = arguments.length, u3 = new Array(i3), a2 = 0; a2 < i3; a2++)
            u3[a2] = arguments[a2];
          var o2 = t3.renderer[n4].apply(e4, u3);
          return o2 === false && (o2 = r4.apply(e4, u3)), o2;
        };
      };
      for (var r3 in t3.renderer)
        n3(r3);
      i2.renderer = e4;
    }(), t3.tokenizer && function() {
      var e4 = ns.defaults.tokenizer || new Jo(), n3 = function(n4) {
        var r4 = e4[n4];
        e4[n4] = function() {
          for (var i3 = arguments.length, u3 = new Array(i3), a2 = 0; a2 < i3; a2++)
            u3[a2] = arguments[a2];
          var o2 = t3.tokenizer[n4].apply(e4, u3);
          return o2 === false && (o2 = r4.apply(e4, u3)), o2;
        };
      };
      for (var r3 in t3.tokenizer)
        n3(r3);
      i2.tokenizer = e4;
    }(), t3.walkTokens) {
      var e3 = ns.defaults.walkTokens;
      i2.walkTokens = function(n3) {
        t3.walkTokens.call(this, n3), e3 && e3.call(this, n3);
      };
    }
    r2 && (i2.extensions = u2), ns.setOptions(i2);
  });
}, ns.walkTokens = function(t2, e2) {
  var n2, r2 = pr(t2);
  try {
    var i2 = function() {
      var t3 = n2.value;
      switch (e2.call(ns, t3), t3.type) {
        case "table":
          var r3, i3 = pr(t3.header);
          try {
            for (i3.s(); !(r3 = i3.n()).done; ) {
              var u2 = r3.value;
              ns.walkTokens(u2.tokens, e2);
            }
          } catch (t4) {
            i3.e(t4);
          } finally {
            i3.f();
          }
          var a2, o2 = pr(t3.rows);
          try {
            for (o2.s(); !(a2 = o2.n()).done; ) {
              var s2, l2 = pr(a2.value);
              try {
                for (l2.s(); !(s2 = l2.n()).done; ) {
                  var c2 = s2.value;
                  ns.walkTokens(c2.tokens, e2);
                }
              } catch (t4) {
                l2.e(t4);
              } finally {
                l2.f();
              }
            }
          } catch (t4) {
            o2.e(t4);
          } finally {
            o2.f();
          }
          break;
        case "list":
          ns.walkTokens(t3.items, e2);
          break;
        default:
          ns.defaults.extensions && ns.defaults.extensions.childTokens && ns.defaults.extensions.childTokens[t3.type] ? ns.defaults.extensions.childTokens[t3.type].forEach(function(n3) {
            ns.walkTokens(t3[n3], e2);
          }) : t3.tokens && ns.walkTokens(t3.tokens, e2);
      }
    };
    for (r2.s(); !(n2 = r2.n()).done; )
      i2();
  } catch (t3) {
    r2.e(t3);
  } finally {
    r2.f();
  }
}, ns.parseInline = function(t2, e2) {
  if (t2 == null)
    throw new Error("marked.parseInline(): input parameter is undefined or null");
  if (typeof t2 != "string")
    throw new Error("marked.parseInline(): input parameter is of type " + Object.prototype.toString.call(t2) + ", string expected");
  qo(e2 = jo({}, ns.defaults, e2 || {}));
  try {
    var n2 = Wo.lexInline(t2, e2);
    return e2.walkTokens && ns.walkTokens(n2, e2.walkTokens), es.parseInline(n2, e2);
  } catch (t3) {
    if (t3.message += "\nPlease report this to https://github.com/markedjs/marked.", e2.silent)
      return "<p>An error occurred:</p><pre>" + Fo(t3.message + "", true) + "</pre>";
    throw t3;
  }
}, ns.Parser = es, ns.parser = es.parse, ns.Renderer = Yo, ns.TextRenderer = Xo, ns.Lexer = Wo, ns.lexer = Wo.lex, ns.Tokenizer = Jo, ns.Slugger = ts, ns.parse = ns;
function notes_esm_default() {
  var t2, e2, n2 = null;
  function r2() {
    if (n2 && !n2.closed)
      n2.focus();
    else {
      if ((n2 = window.open("about:blank", "reveal.js - Notes", "width=1100,height=700")).marked = ns, n2.document.write(`<!--
	NOTE: You need to build the notes plugin after making changes to this file.
-->
<html lang="en">
	<head>
		<meta charset="utf-8">

		<title>reveal.js - Speaker View</title>

		<style>
			body {
				font-family: Helvetica;
				font-size: 18px;
			}

			#current-slide,
			#upcoming-slide,
			#speaker-controls {
				padding: 6px;
				box-sizing: border-box;
				-moz-box-sizing: border-box;
			}

			#current-slide iframe,
			#upcoming-slide iframe {
				width: 100%;
				height: 100%;
				border: 1px solid #ddd;
			}

			#current-slide .label,
			#upcoming-slide .label {
				position: absolute;
				top: 10px;
				left: 10px;
				z-index: 2;
			}

			#connection-status {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				z-index: 20;
				padding: 30% 20% 20% 20%;
				font-size: 18px;
				color: #222;
				background: #fff;
				text-align: center;
				box-sizing: border-box;
				line-height: 1.4;
			}

			.overlay-element {
				height: 34px;
				line-height: 34px;
				padding: 0 10px;
				text-shadow: none;
				background: rgba( 220, 220, 220, 0.8 );
				color: #222;
				font-size: 14px;
			}

			.overlay-element.interactive:hover {
				background: rgba( 220, 220, 220, 1 );
			}

			#current-slide {
				position: absolute;
				width: 60%;
				height: 100%;
				top: 0;
				left: 0;
				padding-right: 0;
			}

			#upcoming-slide {
				position: absolute;
				width: 40%;
				height: 40%;
				right: 0;
				top: 0;
			}

			/* Speaker controls */
			#speaker-controls {
				position: absolute;
				top: 40%;
				right: 0;
				width: 40%;
				height: 60%;
				overflow: auto;
				font-size: 18px;
			}

				.speaker-controls-time.hidden,
				.speaker-controls-notes.hidden {
					display: none;
				}

				.speaker-controls-time .label,
				.speaker-controls-pace .label,
				.speaker-controls-notes .label {
					text-transform: uppercase;
					font-weight: normal;
					font-size: 0.66em;
					color: #666;
					margin: 0;
				}

				.speaker-controls-time, .speaker-controls-pace {
					border-bottom: 1px solid rgba( 200, 200, 200, 0.5 );
					margin-bottom: 10px;
					padding: 10px 16px;
					padding-bottom: 20px;
					cursor: pointer;
				}

				.speaker-controls-time .reset-button {
					opacity: 0;
					float: right;
					color: #666;
					text-decoration: none;
				}
				.speaker-controls-time:hover .reset-button {
					opacity: 1;
				}

				.speaker-controls-time .timer,
				.speaker-controls-time .clock {
					width: 50%;
				}

				.speaker-controls-time .timer,
				.speaker-controls-time .clock,
				.speaker-controls-time .pacing .hours-value,
				.speaker-controls-time .pacing .minutes-value,
				.speaker-controls-time .pacing .seconds-value {
					font-size: 1.9em;
				}

				.speaker-controls-time .timer {
					float: left;
				}

				.speaker-controls-time .clock {
					float: right;
					text-align: right;
				}

				.speaker-controls-time span.mute {
					opacity: 0.3;
				}

				.speaker-controls-time .pacing-title {
					margin-top: 5px;
				}

				.speaker-controls-time .pacing.ahead {
					color: blue;
				}

				.speaker-controls-time .pacing.on-track {
					color: green;
				}

				.speaker-controls-time .pacing.behind {
					color: red;
				}

				.speaker-controls-notes {
					padding: 10px 16px;
				}

				.speaker-controls-notes .value {
					margin-top: 5px;
					line-height: 1.4;
					font-size: 1.2em;
				}

			/* Layout selector\xA0*/
			#speaker-layout {
				position: absolute;
				top: 10px;
				right: 10px;
				color: #222;
				z-index: 10;
			}
				#speaker-layout select {
					position: absolute;
					width: 100%;
					height: 100%;
					top: 0;
					left: 0;
					border: 0;
					box-shadow: 0;
					cursor: pointer;
					opacity: 0;

					font-size: 1em;
					background-color: transparent;

					-moz-appearance: none;
					-webkit-appearance: none;
					-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
				}

				#speaker-layout select:focus {
					outline: none;
					box-shadow: none;
				}

			.clear {
				clear: both;
			}

			/* Speaker layout: Wide */
			body[data-speaker-layout="wide"] #current-slide,
			body[data-speaker-layout="wide"] #upcoming-slide {
				width: 50%;
				height: 45%;
				padding: 6px;
			}

			body[data-speaker-layout="wide"] #current-slide {
				top: 0;
				left: 0;
			}

			body[data-speaker-layout="wide"] #upcoming-slide {
				top: 0;
				left: 50%;
			}

			body[data-speaker-layout="wide"] #speaker-controls {
				top: 45%;
				left: 0;
				width: 100%;
				height: 50%;
				font-size: 1.25em;
			}

			/* Speaker layout: Tall */
			body[data-speaker-layout="tall"] #current-slide,
			body[data-speaker-layout="tall"] #upcoming-slide {
				width: 45%;
				height: 50%;
				padding: 6px;
			}

			body[data-speaker-layout="tall"] #current-slide {
				top: 0;
				left: 0;
			}

			body[data-speaker-layout="tall"] #upcoming-slide {
				top: 50%;
				left: 0;
			}

			body[data-speaker-layout="tall"] #speaker-controls {
				padding-top: 40px;
				top: 0;
				left: 45%;
				width: 55%;
				height: 100%;
				font-size: 1.25em;
			}

			/* Speaker layout: Notes only */
			body[data-speaker-layout="notes-only"] #current-slide,
			body[data-speaker-layout="notes-only"] #upcoming-slide {
				display: none;
			}

			body[data-speaker-layout="notes-only"] #speaker-controls {
				padding-top: 40px;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				font-size: 1.25em;
			}

			@media screen and (max-width: 1080px) {
				body[data-speaker-layout="default"] #speaker-controls {
					font-size: 16px;
				}
			}

			@media screen and (max-width: 900px) {
				body[data-speaker-layout="default"] #speaker-controls {
					font-size: 14px;
				}
			}

			@media screen and (max-width: 800px) {
				body[data-speaker-layout="default"] #speaker-controls {
					font-size: 12px;
				}
			}

		</style>
	</head>

	<body>

		<div id="connection-status">Loading speaker view...</div>

		<div id="current-slide"></div>
		<div id="upcoming-slide"><span class="overlay-element label">Upcoming</span></div>
		<div id="speaker-controls">
			<div class="speaker-controls-time">
				<h4 class="label">Time <span class="reset-button">Click to Reset</span></h4>
				<div class="clock">
					<span class="clock-value">0:00 AM</span>
				</div>
				<div class="timer">
					<span class="hours-value">00</span><span class="minutes-value">:00</span><span class="seconds-value">:00</span>
				</div>
				<div class="clear"></div>

				<h4 class="label pacing-title" style="display: none">Pacing \u2013 Time to finish current slide</h4>
				<div class="pacing" style="display: none">
					<span class="hours-value">00</span><span class="minutes-value">:00</span><span class="seconds-value">:00</span>
				</div>
			</div>

			<div class="speaker-controls-notes hidden">
				<h4 class="label">Notes</h4>
				<div class="value"></div>
			</div>
		</div>
		<div id="speaker-layout" class="overlay-element interactive">
			<span class="speaker-layout-label"></span>
			<select class="speaker-layout-dropdown"></select>
		</div>

		<script>

			(function() {

				var notes,
					notesValue,
					currentState,
					currentSlide,
					upcomingSlide,
					layoutLabel,
					layoutDropdown,
					pendingCalls = {},
					lastRevealApiCallId = 0,
					connected = false;

				var SPEAKER_LAYOUTS = {
					'default': 'Default',
					'wide': 'Wide',
					'tall': 'Tall',
					'notes-only': 'Notes only'
				};

				setupLayout();

				var connectionStatus = document.querySelector( '#connection-status' );
				var connectionTimeout = setTimeout( function() {
					connectionStatus.innerHTML = 'Error connecting to main window.<br>Please try closing and reopening the speaker view.';
				}, 5000 );

				window.addEventListener( 'message', function( event ) {

					// Ignore post messages from other origins to prevent XSS
					if( window.location.origin !== event.origin ){
						return;
					}

					clearTimeout( connectionTimeout );
					connectionStatus.style.display = 'none';

					var data = JSON.parse( event.data );

					// The overview mode is only useful to the reveal.js instance
					// where navigation occurs so we don't sync it
					if( data.state ) delete data.state.overview;

					// Messages sent by the notes plugin inside of the main window
					if( data && data.namespace === 'reveal-notes' ) {
						if( data.type === 'connect' ) {
							handleConnectMessage( data );
						}
						else if( data.type === 'state' ) {
							handleStateMessage( data );
						}
						else if( data.type === 'return' ) {
							pendingCalls[data.callId](data.result);
							delete pendingCalls[data.callId];
						}
					}
					// Messages sent by the reveal.js inside of the current slide preview
					else if( data && data.namespace === 'reveal' ) {
						if( /ready/.test( data.eventName ) ) {
							// Send a message back to notify that the handshake is complete
							window.opener.postMessage( JSON.stringify({ namespace: 'reveal-notes', type: 'connected'} ), '*' );
						}
						else if( /slidechanged|fragmentshown|fragmenthidden|paused|resumed/.test( data.eventName ) && currentState !== JSON.stringify( data.state ) ) {

							window.opener.postMessage( JSON.stringify({ method: 'setState', args: [ data.state ]} ), '*' );

						}
					}

				} );

				/**
				 * Asynchronously calls the Reveal.js API of the main frame.
				 */
				function callRevealApi( methodName, methodArguments, callback ) {

					var callId = ++lastRevealApiCallId;
					pendingCalls[callId] = callback;
					window.opener.postMessage( JSON.stringify( {
						namespace: 'reveal-notes',
						type: 'call',
						callId: callId,
						methodName: methodName,
						arguments: methodArguments
					} ), '*' );

				}

				/**
				 * Called when the main window is trying to establish a
				 * connection.
				 */
				function handleConnectMessage( data ) {

					if( connected === false ) {
						connected = true;

						setupIframes( data );
						setupKeyboard();
						setupNotes();
						setupTimer();
						setupHeartbeat();
					}

				}

				/**
				 * Called when the main window sends an updated state.
				 */
				function handleStateMessage( data ) {

					// Store the most recently set state to avoid circular loops
					// applying the same state
					currentState = JSON.stringify( data.state );

					// No need for updating the notes in case of fragment changes
					if ( data.notes ) {
						notes.classList.remove( 'hidden' );
						notesValue.style.whiteSpace = data.whitespace;
						if( data.markdown ) {
							notesValue.innerHTML = marked( data.notes );
						}
						else {
							notesValue.innerHTML = data.notes;
						}
					}
					else {
						notes.classList.add( 'hidden' );
					}

					// Update the note slides
					currentSlide.contentWindow.postMessage( JSON.stringify({ method: 'setState', args: [ data.state ] }), '*' );
					upcomingSlide.contentWindow.postMessage( JSON.stringify({ method: 'setState', args: [ data.state ] }), '*' );
					upcomingSlide.contentWindow.postMessage( JSON.stringify({ method: 'next' }), '*' );

				}

				// Limit to max one state update per X ms
				handleStateMessage = debounce( handleStateMessage, 200 );

				/**
				 * Forward keyboard events to the current slide window.
				 * This enables keyboard events to work even if focus
				 * isn't set on the current slide iframe.
				 *
				 * Block F5 default handling, it reloads and disconnects
				 * the speaker notes window.
				 */
				function setupKeyboard() {

					document.addEventListener( 'keydown', function( event ) {
						if( event.keyCode === 116 || ( event.metaKey && event.keyCode === 82 ) ) {
							event.preventDefault();
							return false;
						}
						currentSlide.contentWindow.postMessage( JSON.stringify({ method: 'triggerKey', args: [ event.keyCode ] }), '*' );
					} );

				}

				/**
				 * Creates the preview iframes.
				 */
				function setupIframes( data ) {

					var params = [
						'receiver',
						'progress=false',
						'history=false',
						'transition=none',
						'autoSlide=0',
						'backgroundTransition=none'
					].join( '&' );

					var urlSeparator = /\\?/.test(data.url) ? '&' : '?';
					var hash = '#/' + data.state.indexh + '/' + data.state.indexv;
					var currentURL = data.url + urlSeparator + params + '&postMessageEvents=true' + hash;
					var upcomingURL = data.url + urlSeparator + params + '&controls=false' + hash;

					currentSlide = document.createElement( 'iframe' );
					currentSlide.setAttribute( 'width', 1280 );
					currentSlide.setAttribute( 'height', 1024 );
					currentSlide.setAttribute( 'src', currentURL );
					document.querySelector( '#current-slide' ).appendChild( currentSlide );

					upcomingSlide = document.createElement( 'iframe' );
					upcomingSlide.setAttribute( 'width', 640 );
					upcomingSlide.setAttribute( 'height', 512 );
					upcomingSlide.setAttribute( 'src', upcomingURL );
					document.querySelector( '#upcoming-slide' ).appendChild( upcomingSlide );

				}

				/**
				 * Setup the notes UI.
				 */
				function setupNotes() {

					notes = document.querySelector( '.speaker-controls-notes' );
					notesValue = document.querySelector( '.speaker-controls-notes .value' );

				}

				/**
				 * We send out a heartbeat at all times to ensure we can
				 * reconnect with the main presentation window after reloads.
				 */
				function setupHeartbeat() {

					setInterval( () => {
						window.opener.postMessage( JSON.stringify({ namespace: 'reveal-notes', type: 'heartbeat'} ), '*' );
					}, 1000 );

				}

				function getTimings( callback ) {

					callRevealApi( 'getSlidesAttributes', [], function ( slideAttributes ) {
						callRevealApi( 'getConfig', [], function ( config ) {
							var totalTime = config.totalTime;
							var minTimePerSlide = config.minimumTimePerSlide || 0;
							var defaultTiming = config.defaultTiming;
							if ((defaultTiming == null) && (totalTime == null)) {
								callback(null);
								return;
							}
							// Setting totalTime overrides defaultTiming
							if (totalTime) {
								defaultTiming = 0;
							}
							var timings = [];
							for ( var i in slideAttributes ) {
								var slide = slideAttributes[ i ];
								var timing = defaultTiming;
								if( slide.hasOwnProperty( 'data-timing' )) {
									var t = slide[ 'data-timing' ];
									timing = parseInt(t);
									if( isNaN(timing) ) {
										console.warn("Could not parse timing '" + t + "' of slide " + i + "; using default of " + defaultTiming);
										timing = defaultTiming;
									}
								}
								timings.push(timing);
							}
							if ( totalTime ) {
								// After we've allocated time to individual slides, we summarize it and
								// subtract it from the total time
								var remainingTime = totalTime - timings.reduce( function(a, b) { return a + b; }, 0 );
								// The remaining time is divided by the number of slides that have 0 seconds
								// allocated at the moment, giving the average time-per-slide on the remaining slides
								var remainingSlides = (timings.filter( function(x) { return x == 0 }) ).length
								var timePerSlide = Math.round( remainingTime / remainingSlides, 0 )
								// And now we replace every zero-value timing with that average
								timings = timings.map( function(x) { return (x==0 ? timePerSlide : x) } );
							}
							var slidesUnderMinimum = timings.filter( function(x) { return (x < minTimePerSlide) } ).length
							if ( slidesUnderMinimum ) {
								message = "The pacing time for " + slidesUnderMinimum + " slide(s) is under the configured minimum of " + minTimePerSlide + " seconds. Check the data-timing attribute on individual slides, or consider increasing the totalTime or minimumTimePerSlide configuration options (or removing some slides).";
								alert(message);
							}
							callback( timings );
						} );
					} );

				}

				/**
				 * Return the number of seconds allocated for presenting
				 * all slides up to and including this one.
				 */
				function getTimeAllocated( timings, callback ) {

					callRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {
						var allocated = 0;
						for (var i in timings.slice(0, currentSlide + 1)) {
							allocated += timings[i];
						}
						callback( allocated );
					} );

				}

				/**
				 * Create the timer and clock and start updating them
				 * at an interval.
				 */
				function setupTimer() {

					var start = new Date(),
					timeEl = document.querySelector( '.speaker-controls-time' ),
					clockEl = timeEl.querySelector( '.clock-value' ),
					hoursEl = timeEl.querySelector( '.hours-value' ),
					minutesEl = timeEl.querySelector( '.minutes-value' ),
					secondsEl = timeEl.querySelector( '.seconds-value' ),
					pacingTitleEl = timeEl.querySelector( '.pacing-title' ),
					pacingEl = timeEl.querySelector( '.pacing' ),
					pacingHoursEl = pacingEl.querySelector( '.hours-value' ),
					pacingMinutesEl = pacingEl.querySelector( '.minutes-value' ),
					pacingSecondsEl = pacingEl.querySelector( '.seconds-value' );

					var timings = null;
					getTimings( function ( _timings ) {

						timings = _timings;
						if (_timings !== null) {
							pacingTitleEl.style.removeProperty('display');
							pacingEl.style.removeProperty('display');
						}

						// Update once directly
						_updateTimer();

						// Then update every second
						setInterval( _updateTimer, 1000 );

					} );


					function _resetTimer() {

						if (timings == null) {
							start = new Date();
							_updateTimer();
						}
						else {
							// Reset timer to beginning of current slide
							getTimeAllocated( timings, function ( slideEndTimingSeconds ) {
								var slideEndTiming = slideEndTimingSeconds * 1000;
								callRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {
									var currentSlideTiming = timings[currentSlide] * 1000;
									var previousSlidesTiming = slideEndTiming - currentSlideTiming;
									var now = new Date();
									start = new Date(now.getTime() - previousSlidesTiming);
									_updateTimer();
								} );
							} );
						}

					}

					timeEl.addEventListener( 'click', function() {
						_resetTimer();
						return false;
					} );

					function _displayTime( hrEl, minEl, secEl, time) {

						var sign = Math.sign(time) == -1 ? "-" : "";
						time = Math.abs(Math.round(time / 1000));
						var seconds = time % 60;
						var minutes = Math.floor( time / 60 ) % 60 ;
						var hours = Math.floor( time / ( 60 * 60 )) ;
						hrEl.innerHTML = sign + zeroPadInteger( hours );
						if (hours == 0) {
							hrEl.classList.add( 'mute' );
						}
						else {
							hrEl.classList.remove( 'mute' );
						}
						minEl.innerHTML = ':' + zeroPadInteger( minutes );
						if (hours == 0 && minutes == 0) {
							minEl.classList.add( 'mute' );
						}
						else {
							minEl.classList.remove( 'mute' );
						}
						secEl.innerHTML = ':' + zeroPadInteger( seconds );
					}

					function _updateTimer() {

						var diff, hours, minutes, seconds,
						now = new Date();

						diff = now.getTime() - start.getTime();

						clockEl.innerHTML = now.toLocaleTimeString( 'en-US', { hour12: true, hour: '2-digit', minute:'2-digit' } );
						_displayTime( hoursEl, minutesEl, secondsEl, diff );
						if (timings !== null) {
							_updatePacing(diff);
						}

					}

					function _updatePacing(diff) {

						getTimeAllocated( timings, function ( slideEndTimingSeconds ) {
							var slideEndTiming = slideEndTimingSeconds * 1000;

							callRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {
								var currentSlideTiming = timings[currentSlide] * 1000;
								var timeLeftCurrentSlide = slideEndTiming - diff;
								if (timeLeftCurrentSlide < 0) {
									pacingEl.className = 'pacing behind';
								}
								else if (timeLeftCurrentSlide < currentSlideTiming) {
									pacingEl.className = 'pacing on-track';
								}
								else {
									pacingEl.className = 'pacing ahead';
								}
								_displayTime( pacingHoursEl, pacingMinutesEl, pacingSecondsEl, timeLeftCurrentSlide );
							} );
						} );
					}

				}

				/**
				 * Sets up the speaker view layout and layout selector.
				 */
				function setupLayout() {

					layoutDropdown = document.querySelector( '.speaker-layout-dropdown' );
					layoutLabel = document.querySelector( '.speaker-layout-label' );

					// Render the list of available layouts
					for( var id in SPEAKER_LAYOUTS ) {
						var option = document.createElement( 'option' );
						option.setAttribute( 'value', id );
						option.textContent = SPEAKER_LAYOUTS[ id ];
						layoutDropdown.appendChild( option );
					}

					// Monitor the dropdown for changes
					layoutDropdown.addEventListener( 'change', function( event ) {

						setLayout( layoutDropdown.value );

					}, false );

					// Restore any currently persisted layout
					setLayout( getLayout() );

				}

				/**
				 * Sets a new speaker view layout. The layout is persisted
				 * in local storage.
				 */
				function setLayout( value ) {

					var title = SPEAKER_LAYOUTS[ value ];

					layoutLabel.innerHTML = 'Layout' + ( title ? ( ': ' + title ) : '' );
					layoutDropdown.value = value;

					document.body.setAttribute( 'data-speaker-layout', value );

					// Persist locally
					if( supportsLocalStorage() ) {
						window.localStorage.setItem( 'reveal-speaker-layout', value );
					}

				}

				/**
				 * Returns the ID of the most recently set speaker layout
				 * or our default layout if none has been set.
				 */
				function getLayout() {

					if( supportsLocalStorage() ) {
						var layout = window.localStorage.getItem( 'reveal-speaker-layout' );
						if( layout ) {
							return layout;
						}
					}

					// Default to the first record in the layouts hash
					for( var id in SPEAKER_LAYOUTS ) {
						return id;
					}

				}

				function supportsLocalStorage() {

					try {
						localStorage.setItem('test', 'test');
						localStorage.removeItem('test');
						return true;
					}
					catch( e ) {
						return false;
					}

				}

				function zeroPadInteger( num ) {

					var str = '00' + parseInt( num );
					return str.substring( str.length - 2 );

				}

				/**
				 * Limits the frequency at which a function can be called.
				 */
				function debounce( fn, ms ) {

					var lastTime = 0,
						timeout;

					return function() {

						var args = arguments;
						var context = this;

						clearTimeout( timeout );

						var timeSinceLastCall = Date.now() - lastTime;
						if( timeSinceLastCall > ms ) {
							fn.apply( context, args );
							lastTime = Date.now();
						}
						else {
							timeout = setTimeout( function() {
								fn.apply( context, args );
								lastTime = Date.now();
							}, ms - timeSinceLastCall );
						}

					}

				}

			})();

		<\/script>
	</body>
</html>`), !n2)
        return void alert("Speaker view popup failed to open. Please make sure popups are allowed and reopen the speaker view.");
      r3 = e2.getConfig().url, i3 = typeof r3 == "string" ? r3 : window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search, t2 = setInterval(function() {
        n2.postMessage(JSON.stringify({ namespace: "reveal-notes", type: "connect", state: e2.getState(), url: i3 }), "*");
      }, 500), window.addEventListener("message", u2);
    }
    var r3, i3;
  }
  function i2(t3) {
    var r3 = e2.getCurrentSlide(), i3 = r3.querySelector("aside.notes"), u3 = r3.querySelector(".current-fragment"), a3 = { namespace: "reveal-notes", type: "state", notes: "", markdown: false, whitespace: "normal", state: e2.getState() };
    if (r3.hasAttribute("data-notes") && (a3.notes = r3.getAttribute("data-notes"), a3.whitespace = "pre-wrap"), u3) {
      var o2 = u3.querySelector("aside.notes");
      o2 ? i3 = o2 : u3.hasAttribute("data-notes") && (a3.notes = u3.getAttribute("data-notes"), a3.whitespace = "pre-wrap", i3 = null);
    }
    i3 && (a3.notes = i3.innerHTML, a3.markdown = typeof i3.getAttribute("data-markdown") == "string"), n2.postMessage(JSON.stringify(a3), "*");
  }
  function u2(r3) {
    var i3, u3, o2, s2, l2 = JSON.parse(r3.data);
    l2 && l2.namespace === "reveal-notes" && l2.type === "connected" ? (clearInterval(t2), a2()) : l2 && l2.namespace === "reveal-notes" && l2.type === "call" && (i3 = l2.methodName, u3 = l2.arguments, o2 = l2.callId, s2 = e2[i3].apply(e2, u3), n2.postMessage(JSON.stringify({ namespace: "reveal-notes", type: "return", result: s2, callId: o2 }), "*"));
  }
  function a2() {
    e2.on("slidechanged", i2), e2.on("fragmentshown", i2), e2.on("fragmenthidden", i2), e2.on("overviewhidden", i2), e2.on("overviewshown", i2), e2.on("paused", i2), e2.on("resumed", i2), i2();
  }
  return { id: "notes", init: function(t3) {
    e2 = t3, /receiver/i.test(window.location.search) || (window.location.search.match(/(\?|\&)notes/gi) !== null ? r2() : window.addEventListener("message", function(t4) {
      if (!n2) {
        var e3 = JSON.parse(t4.data);
        e3 && e3.namespace === "reveal-notes" && e3.type === "heartbeat" && (r3 = t4.source, n2 && !n2.closed ? n2.focus() : (n2 = r3, window.addEventListener("message", u2), a2()));
      }
      var r3;
    }), e2.addKeyBinding({ keyCode: 83, key: "S", description: "Speaker notes view" }, function() {
      r2();
    }));
  }, open: r2 };
}

// dep:reveal_js_plugin_notes_notes_esm_js
var reveal_js_plugin_notes_notes_esm_js_default = notes_esm_default;
export {
  reveal_js_plugin_notes_notes_esm_js_default as default
};
//# sourceMappingURL=reveal_js_plugin_notes_notes_esm_js.js.map
