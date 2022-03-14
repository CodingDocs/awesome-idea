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

// dep:reveal_js_plugin_search_search_esm_js
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

// node_modules/reveal.js/plugin/search/search.esm.js
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
var e = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};
var t = function(e2) {
  try {
    return !!e2();
  } catch (e3) {
    return true;
  }
};
var n = !t(function() {
  return Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1] != 7;
});
var r = function(e2) {
  return e2 && e2.Math == Math && e2;
};
var o = r(typeof globalThis == "object" && globalThis) || r(typeof window == "object" && window) || r(typeof self == "object" && self) || r(typeof e == "object" && e) || function() {
  return this;
}() || Function("return this")();
var i = t;
var c = /#|\.prototype\./;
var a = function(e2, t2) {
  var n2 = l[u(e2)];
  return n2 == s || n2 != f && (typeof t2 == "function" ? i(t2) : !!t2);
};
var u = a.normalize = function(e2) {
  return String(e2).replace(c, ".").toLowerCase();
};
var l = a.data = {};
var f = a.NATIVE = "N";
var s = a.POLYFILL = "P";
var p = a;
var g = function(e2) {
  return typeof e2 == "object" ? e2 !== null : typeof e2 == "function";
};
var d = g;
var h = function(e2) {
  if (!d(e2))
    throw TypeError(String(e2) + " is not an object");
  return e2;
};
var y = g;
var v = h;
var x = function(e2) {
  if (!y(e2) && e2 !== null)
    throw TypeError("Can't set " + String(e2) + " as a prototype");
  return e2;
};
var b = Object.setPrototypeOf || ("__proto__" in {} ? function() {
  var e2, t2 = false, n2 = {};
  try {
    (e2 = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n2, []), t2 = n2 instanceof Array;
  } catch (e3) {
  }
  return function(n3, r2) {
    return v(n3), x(r2), t2 ? e2.call(n3, r2) : n3.__proto__ = r2, n3;
  };
}() : void 0);
var E = g;
var m = b;
var S = {};
var w = g;
var O = o.document;
var R = w(O) && w(O.createElement);
var T = function(e2) {
  return R ? O.createElement(e2) : {};
};
var _ = !n && !t(function() {
  return Object.defineProperty(T("div"), "a", { get: function() {
    return 7;
  } }).a != 7;
});
var j = g;
var P = function(e2, t2) {
  if (!j(e2))
    return e2;
  var n2, r2;
  if (t2 && typeof (n2 = e2.toString) == "function" && !j(r2 = n2.call(e2)))
    return r2;
  if (typeof (n2 = e2.valueOf) == "function" && !j(r2 = n2.call(e2)))
    return r2;
  if (!t2 && typeof (n2 = e2.toString) == "function" && !j(r2 = n2.call(e2)))
    return r2;
  throw TypeError("Can't convert object to primitive value");
};
var I = n;
var C = _;
var N = h;
var A = P;
var k = Object.defineProperty;
S.f = I ? k : function(e2, t2, n2) {
  if (N(e2), t2 = A(t2, true), N(n2), C)
    try {
      return k(e2, t2, n2);
    } catch (e3) {
    }
  if ("get" in n2 || "set" in n2)
    throw TypeError("Accessors not supported");
  return "value" in n2 && (e2[t2] = n2.value), e2;
};
var $ = {};
var L = function(e2) {
  if (e2 == null)
    throw TypeError("Can't call method on " + e2);
  return e2;
};
var M = L;
var U = function(e2) {
  return Object(M(e2));
};
var D = U;
var F = {}.hasOwnProperty;
var z = function(e2, t2) {
  return F.call(D(e2), t2);
};
var K = {}.toString;
var B = function(e2) {
  return K.call(e2).slice(8, -1);
};
var W = B;
var G = "".split;
var V = t(function() {
  return !Object("z").propertyIsEnumerable(0);
}) ? function(e2) {
  return W(e2) == "String" ? G.call(e2, "") : Object(e2);
} : Object;
var Y = L;
var q = function(e2) {
  return V(Y(e2));
};
var X = Math.ceil;
var H = Math.floor;
var J = function(e2) {
  return isNaN(e2 = +e2) ? 0 : (e2 > 0 ? H : X)(e2);
};
var Q = J;
var Z = Math.min;
var ee = function(e2) {
  return e2 > 0 ? Z(Q(e2), 9007199254740991) : 0;
};
var te = J;
var ne = Math.max;
var re = Math.min;
var oe = q;
var ie = ee;
var ce = function(e2, t2) {
  var n2 = te(e2);
  return n2 < 0 ? ne(n2 + t2, 0) : re(n2, t2);
};
var ae = function(e2) {
  return function(t2, n2, r2) {
    var o2, i2 = oe(t2), c2 = ie(i2.length), a2 = ce(r2, c2);
    if (e2 && n2 != n2) {
      for (; c2 > a2; )
        if ((o2 = i2[a2++]) != o2)
          return true;
    } else
      for (; c2 > a2; a2++)
        if ((e2 || a2 in i2) && i2[a2] === n2)
          return e2 || a2 || 0;
    return !e2 && -1;
  };
};
var ue = { includes: ae(true), indexOf: ae(false) };
var le = {};
var fe = z;
var se = q;
var pe = ue.indexOf;
var ge = le;
var de = function(e2, t2) {
  var n2, r2 = se(e2), o2 = 0, i2 = [];
  for (n2 in r2)
    !fe(ge, n2) && fe(r2, n2) && i2.push(n2);
  for (; t2.length > o2; )
    fe(r2, n2 = t2[o2++]) && (~pe(i2, n2) || i2.push(n2));
  return i2;
};
var he = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"].concat("length", "prototype");
$.f = Object.getOwnPropertyNames || function(e2) {
  return de(e2, he);
};
var ye = { exports: {} };
var ve = function(e2, t2) {
  return { enumerable: !(1 & e2), configurable: !(2 & e2), writable: !(4 & e2), value: t2 };
};
var xe = S;
var be = ve;
var Ee = n ? function(e2, t2, n2) {
  return xe.f(e2, t2, be(1, n2));
} : function(e2, t2, n2) {
  return e2[t2] = n2, e2;
};
var me = o;
var Se = Ee;
var we = function(e2, t2) {
  try {
    Se(me, e2, t2);
  } catch (n2) {
    me[e2] = t2;
  }
  return t2;
};
var Oe = we;
var Re = o["__core-js_shared__"] || Oe("__core-js_shared__", {});
var Te = Re;
(ye.exports = function(e2, t2) {
  return Te[e2] || (Te[e2] = t2 !== void 0 ? t2 : {});
})("versions", []).push({ version: "3.12.1", mode: "global", copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)" });
var _e;
var je;
var Pe = 0;
var Ie = Math.random();
var Ce = function(e2) {
  return "Symbol(" + String(e2 === void 0 ? "" : e2) + ")_" + (++Pe + Ie).toString(36);
};
var Ne = o;
var Ae = o;
var ke = function(e2) {
  return typeof e2 == "function" ? e2 : void 0;
};
var $e = function(e2, t2) {
  return arguments.length < 2 ? ke(Ne[e2]) || ke(Ae[e2]) : Ne[e2] && Ne[e2][t2] || Ae[e2] && Ae[e2][t2];
};
var Le = $e("navigator", "userAgent") || "";
var Me = o.process;
var Ue = Me && Me.versions;
var De = Ue && Ue.v8;
De ? je = (_e = De.split("."))[0] < 4 ? 1 : _e[0] + _e[1] : Le && (!(_e = Le.match(/Edge\/(\d+)/)) || _e[1] >= 74) && (_e = Le.match(/Chrome\/(\d+)/)) && (je = _e[1]);
var Fe = je && +je;
var ze = t;
var Ke = !!Object.getOwnPropertySymbols && !ze(function() {
  return !String(Symbol()) || !Symbol.sham && Fe && Fe < 41;
});
var Be = Ke && !Symbol.sham && typeof Symbol.iterator == "symbol";
var We = o;
var Ge = ye.exports;
var Ve = z;
var Ye = Ce;
var qe = Ke;
var Xe = Be;
var He = Ge("wks");
var Je = We.Symbol;
var Qe = Xe ? Je : Je && Je.withoutSetter || Ye;
var Ze = function(e2) {
  return Ve(He, e2) && (qe || typeof He[e2] == "string") || (qe && Ve(Je, e2) ? He[e2] = Je[e2] : He[e2] = Qe("Symbol." + e2)), He[e2];
};
var et = g;
var tt = B;
var nt = Ze("match");
var rt = h;
var ot = function() {
  var e2 = rt(this), t2 = "";
  return e2.global && (t2 += "g"), e2.ignoreCase && (t2 += "i"), e2.multiline && (t2 += "m"), e2.dotAll && (t2 += "s"), e2.unicode && (t2 += "u"), e2.sticky && (t2 += "y"), t2;
};
var it = {};
var ct = t;
function at(e2, t2) {
  return RegExp(e2, t2);
}
it.UNSUPPORTED_Y = ct(function() {
  var e2 = at("a", "y");
  return e2.lastIndex = 2, e2.exec("abcd") != null;
}), it.BROKEN_CARET = ct(function() {
  var e2 = at("^r", "gy");
  return e2.lastIndex = 2, e2.exec("str") != null;
});
var ut = { exports: {} };
var lt = Re;
var ft = Function.toString;
typeof lt.inspectSource != "function" && (lt.inspectSource = function(e2) {
  return ft.call(e2);
});
var st;
var pt;
var gt;
var dt = lt.inspectSource;
var ht = dt;
var yt = o.WeakMap;
var vt = typeof yt == "function" && /native code/.test(ht(yt));
var xt = ye.exports;
var bt = Ce;
var Et = xt("keys");
var mt = vt;
var St = g;
var wt = Ee;
var Ot = z;
var Rt = Re;
var Tt = function(e2) {
  return Et[e2] || (Et[e2] = bt(e2));
};
var _t = le;
var jt = o.WeakMap;
if (mt || Rt.state) {
  Pt = Rt.state || (Rt.state = new jt()), It = Pt.get, Ct = Pt.has, Nt = Pt.set;
  st = function(e2, t2) {
    if (Ct.call(Pt, e2))
      throw new TypeError("Object already initialized");
    return t2.facade = e2, Nt.call(Pt, e2, t2), t2;
  }, pt = function(e2) {
    return It.call(Pt, e2) || {};
  }, gt = function(e2) {
    return Ct.call(Pt, e2);
  };
} else {
  At = Tt("state");
  _t[At] = true, st = function(e2, t2) {
    if (Ot(e2, At))
      throw new TypeError("Object already initialized");
    return t2.facade = e2, wt(e2, At, t2), t2;
  }, pt = function(e2) {
    return Ot(e2, At) ? e2[At] : {};
  }, gt = function(e2) {
    return Ot(e2, At);
  };
}
var Pt;
var It;
var Ct;
var Nt;
var At;
var kt = { set: st, get: pt, has: gt, enforce: function(e2) {
  return gt(e2) ? pt(e2) : st(e2, {});
}, getterFor: function(e2) {
  return function(t2) {
    var n2;
    if (!St(t2) || (n2 = pt(t2)).type !== e2)
      throw TypeError("Incompatible receiver, " + e2 + " required");
    return n2;
  };
} };
var $t = o;
var Lt = Ee;
var Mt = z;
var Ut = we;
var Dt = dt;
var Ft = kt.get;
var zt = kt.enforce;
var Kt = String(String).split("String");
(ut.exports = function(e2, t2, n2, r2) {
  var o2, i2 = !!r2 && !!r2.unsafe, c2 = !!r2 && !!r2.enumerable, a2 = !!r2 && !!r2.noTargetGet;
  typeof n2 == "function" && (typeof t2 != "string" || Mt(n2, "name") || Lt(n2, "name", t2), (o2 = zt(n2)).source || (o2.source = Kt.join(typeof t2 == "string" ? t2 : ""))), e2 !== $t ? (i2 ? !a2 && e2[t2] && (c2 = true) : delete e2[t2], c2 ? e2[t2] = n2 : Lt(e2, t2, n2)) : c2 ? e2[t2] = n2 : Ut(t2, n2);
})(Function.prototype, "toString", function() {
  return typeof this == "function" && Ft(this).source || Dt(this);
});
var Bt = $e;
var Wt = S;
var Gt = n;
var Vt = Ze("species");
var Yt = n;
var qt = o;
var Xt = p;
var Ht = function(e2, t2, n2) {
  var r2, o2;
  return m && typeof (r2 = t2.constructor) == "function" && r2 !== n2 && E(o2 = r2.prototype) && o2 !== n2.prototype && m(e2, o2), e2;
};
var Jt = S.f;
var Qt = $.f;
var Zt = function(e2) {
  var t2;
  return et(e2) && ((t2 = e2[nt]) !== void 0 ? !!t2 : tt(e2) == "RegExp");
};
var en = ot;
var tn = it;
var nn = ut.exports;
var rn = t;
var on = kt.enforce;
var cn = function(e2) {
  var t2 = Bt(e2), n2 = Wt.f;
  Gt && t2 && !t2[Vt] && n2(t2, Vt, { configurable: true, get: function() {
    return this;
  } });
};
var an = Ze("match");
var un = qt.RegExp;
var ln = un.prototype;
var fn = /a/g;
var sn = /a/g;
var pn = new un(fn) !== fn;
var gn = tn.UNSUPPORTED_Y;
if (Yt && Xt("RegExp", !pn || gn || rn(function() {
  return sn[an] = false, un(fn) != fn || un(sn) == sn || un(fn, "i") != "/a/i";
}))) {
  for (dn = function(e2, t2) {
    var n2, r2 = this instanceof dn, o2 = Zt(e2), i2 = t2 === void 0;
    if (!r2 && o2 && e2.constructor === dn && i2)
      return e2;
    pn ? o2 && !i2 && (e2 = e2.source) : e2 instanceof dn && (i2 && (t2 = en.call(e2)), e2 = e2.source), gn && (n2 = !!t2 && t2.indexOf("y") > -1) && (t2 = t2.replace(/y/g, ""));
    var c2 = Ht(pn ? new un(e2, t2) : un(e2, t2), r2 ? this : ln, dn);
    gn && n2 && (on(c2).sticky = true);
    return c2;
  }, hn = function(e2) {
    e2 in dn || Jt(dn, e2, { configurable: true, get: function() {
      return un[e2];
    }, set: function(t2) {
      un[e2] = t2;
    } });
  }, yn = Qt(un), vn = 0; yn.length > vn; )
    hn(yn[vn++]);
  ln.constructor = dn, dn.prototype = ln, nn(qt, "RegExp", dn);
}
var dn;
var hn;
var yn;
var vn;
cn("RegExp");
var xn = {};
var bn = {};
var En = {}.propertyIsEnumerable;
var mn = Object.getOwnPropertyDescriptor;
var Sn = mn && !En.call({ 1: 2 }, 1);
bn.f = Sn ? function(e2) {
  var t2 = mn(this, e2);
  return !!t2 && t2.enumerable;
} : En;
var wn = n;
var On = bn;
var Rn = ve;
var Tn = q;
var _n = P;
var jn = z;
var Pn = _;
var In = Object.getOwnPropertyDescriptor;
xn.f = wn ? In : function(e2, t2) {
  if (e2 = Tn(e2), t2 = _n(t2, true), Pn)
    try {
      return In(e2, t2);
    } catch (e3) {
    }
  if (jn(e2, t2))
    return Rn(!On.f.call(e2, t2), e2[t2]);
};
var Cn = {};
Cn.f = Object.getOwnPropertySymbols;
var Nn = $;
var An = Cn;
var kn = h;
var $n = $e("Reflect", "ownKeys") || function(e2) {
  var t2 = Nn.f(kn(e2)), n2 = An.f;
  return n2 ? t2.concat(n2(e2)) : t2;
};
var Ln = z;
var Mn = $n;
var Un = xn;
var Dn = S;
var Fn = o;
var zn = xn.f;
var Kn = Ee;
var Bn = ut.exports;
var Wn = we;
var Gn = function(e2, t2) {
  for (var n2 = Mn(t2), r2 = Dn.f, o2 = Un.f, i2 = 0; i2 < n2.length; i2++) {
    var c2 = n2[i2];
    Ln(e2, c2) || r2(e2, c2, o2(t2, c2));
  }
};
var Vn = p;
var Yn = ot;
var qn = it;
var Xn = ye.exports;
var Hn = RegExp.prototype.exec;
var Jn = Xn("native-string-replace", String.prototype.replace);
var Qn = Hn;
var Zn = function() {
  var e2 = /a/, t2 = /b*/g;
  return Hn.call(e2, "a"), Hn.call(t2, "a"), e2.lastIndex !== 0 || t2.lastIndex !== 0;
}();
var er = qn.UNSUPPORTED_Y || qn.BROKEN_CARET;
var tr = /()??/.exec("")[1] !== void 0;
(Zn || tr || er) && (Qn = function(e2) {
  var t2, n2, r2, o2, i2 = this, c2 = er && i2.sticky, a2 = Yn.call(i2), u2 = i2.source, l2 = 0, f2 = e2;
  return c2 && ((a2 = a2.replace("y", "")).indexOf("g") === -1 && (a2 += "g"), f2 = String(e2).slice(i2.lastIndex), i2.lastIndex > 0 && (!i2.multiline || i2.multiline && e2[i2.lastIndex - 1] !== "\n") && (u2 = "(?: " + u2 + ")", f2 = " " + f2, l2++), n2 = new RegExp("^(?:" + u2 + ")", a2)), tr && (n2 = new RegExp("^" + u2 + "$(?!\\s)", a2)), Zn && (t2 = i2.lastIndex), r2 = Hn.call(c2 ? n2 : i2, f2), c2 ? r2 ? (r2.input = r2.input.slice(l2), r2[0] = r2[0].slice(l2), r2.index = i2.lastIndex, i2.lastIndex += r2[0].length) : i2.lastIndex = 0 : Zn && r2 && (i2.lastIndex = i2.global ? r2.index + r2[0].length : t2), tr && r2 && r2.length > 1 && Jn.call(r2[0], n2, function() {
    for (o2 = 1; o2 < arguments.length - 2; o2++)
      arguments[o2] === void 0 && (r2[o2] = void 0);
  }), r2;
});
var nr = Qn;
(function(e2, t2) {
  var n2, r2, o2, i2, c2, a2 = e2.target, u2 = e2.global, l2 = e2.stat;
  if (n2 = u2 ? Fn : l2 ? Fn[a2] || Wn(a2, {}) : (Fn[a2] || {}).prototype)
    for (r2 in t2) {
      if (i2 = t2[r2], o2 = e2.noTargetGet ? (c2 = zn(n2, r2)) && c2.value : n2[r2], !Vn(u2 ? r2 : a2 + (l2 ? "." : "#") + r2, e2.forced) && o2 !== void 0) {
        if (typeof i2 == typeof o2)
          continue;
        Gn(i2, o2);
      }
      (e2.sham || o2 && o2.sham) && Kn(i2, "sham", true), Bn(n2, r2, i2, e2);
    }
})({ target: "RegExp", proto: true, forced: /./.exec !== nr }, { exec: nr });
var rr = ut.exports;
var or = h;
var ir = t;
var cr = ot;
var ar = RegExp.prototype;
var ur = ar.toString;
var lr = ir(function() {
  return ur.call({ source: "a", flags: "b" }) != "/a/b";
});
var fr = ur.name != "toString";
(lr || fr) && rr(RegExp.prototype, "toString", function() {
  var e2 = or(this), t2 = String(e2.source), n2 = e2.flags;
  return "/" + t2 + "/" + String(n2 === void 0 && e2 instanceof RegExp && !("flags" in ar) ? cr.call(e2) : n2);
}, { unsafe: true });
var sr = ut.exports;
var pr = nr;
var gr = t;
var dr = Ze;
var hr = Ee;
var yr = dr("species");
var vr = RegExp.prototype;
var xr = !gr(function() {
  var e2 = /./;
  return e2.exec = function() {
    var e3 = [];
    return e3.groups = { a: "7" }, e3;
  }, "".replace(e2, "$<a>") !== "7";
});
var br = "a".replace(/./, "$0") === "$0";
var Er = dr("replace");
var mr = !!/./[Er] && /./[Er]("a", "$0") === "";
var Sr = !gr(function() {
  var e2 = /(?:)/, t2 = e2.exec;
  e2.exec = function() {
    return t2.apply(this, arguments);
  };
  var n2 = "ab".split(e2);
  return n2.length !== 2 || n2[0] !== "a" || n2[1] !== "b";
});
var wr = J;
var Or = L;
var Rr = function(e2) {
  return function(t2, n2) {
    var r2, o2, i2 = String(Or(t2)), c2 = wr(n2), a2 = i2.length;
    return c2 < 0 || c2 >= a2 ? e2 ? "" : void 0 : (r2 = i2.charCodeAt(c2)) < 55296 || r2 > 56319 || c2 + 1 === a2 || (o2 = i2.charCodeAt(c2 + 1)) < 56320 || o2 > 57343 ? e2 ? i2.charAt(c2) : r2 : e2 ? i2.slice(c2, c2 + 2) : o2 - 56320 + (r2 - 55296 << 10) + 65536;
  };
};
var Tr = { codeAt: Rr(false), charAt: Rr(true) }.charAt;
var _r = U;
var jr = Math.floor;
var Pr = "".replace;
var Ir = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var Cr = /\$([$&'`]|\d{1,2})/g;
var Nr = B;
var Ar = nr;
var kr = function(e2, t2, n2, r2) {
  var o2 = dr(e2), i2 = !gr(function() {
    var t3 = {};
    return t3[o2] = function() {
      return 7;
    }, ""[e2](t3) != 7;
  }), c2 = i2 && !gr(function() {
    var t3 = false, n3 = /a/;
    return e2 === "split" && ((n3 = {}).constructor = {}, n3.constructor[yr] = function() {
      return n3;
    }, n3.flags = "", n3[o2] = /./[o2]), n3.exec = function() {
      return t3 = true, null;
    }, n3[o2](""), !t3;
  });
  if (!i2 || !c2 || e2 === "replace" && (!xr || !br || mr) || e2 === "split" && !Sr) {
    var a2 = /./[o2], u2 = n2(o2, ""[e2], function(e3, t3, n3, r3, o3) {
      var c3 = t3.exec;
      return c3 === pr || c3 === vr.exec ? i2 && !o3 ? { done: true, value: a2.call(t3, n3, r3) } : { done: true, value: e3.call(n3, t3, r3) } : { done: false };
    }, { REPLACE_KEEPS_$0: br, REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: mr }), l2 = u2[0], f2 = u2[1];
    sr(String.prototype, e2, l2), sr(vr, o2, t2 == 2 ? function(e3, t3) {
      return f2.call(e3, this, t3);
    } : function(e3) {
      return f2.call(e3, this);
    });
  }
  r2 && hr(vr[o2], "sham", true);
};
var $r = h;
var Lr = ee;
var Mr = J;
var Ur = L;
var Dr = function(e2, t2, n2) {
  return t2 + (n2 ? Tr(e2, t2).length : 1);
};
var Fr = function(e2, t2, n2, r2, o2, i2) {
  var c2 = n2 + e2.length, a2 = r2.length, u2 = Cr;
  return o2 !== void 0 && (o2 = _r(o2), u2 = Ir), Pr.call(i2, u2, function(i3, u3) {
    var l2;
    switch (u3.charAt(0)) {
      case "$":
        return "$";
      case "&":
        return e2;
      case "`":
        return t2.slice(0, n2);
      case "'":
        return t2.slice(c2);
      case "<":
        l2 = o2[u3.slice(1, -1)];
        break;
      default:
        var f2 = +u3;
        if (f2 === 0)
          return i3;
        if (f2 > a2) {
          var s2 = jr(f2 / 10);
          return s2 === 0 ? i3 : s2 <= a2 ? r2[s2 - 1] === void 0 ? u3.charAt(1) : r2[s2 - 1] + u3.charAt(1) : i3;
        }
        l2 = r2[f2 - 1];
    }
    return l2 === void 0 ? "" : l2;
  });
};
var zr = function(e2, t2) {
  var n2 = e2.exec;
  if (typeof n2 == "function") {
    var r2 = n2.call(e2, t2);
    if (typeof r2 != "object")
      throw TypeError("RegExp exec method returned something other than an Object or null");
    return r2;
  }
  if (Nr(e2) !== "RegExp")
    throw TypeError("RegExp#exec called on incompatible receiver");
  return Ar.call(e2, t2);
};
var Kr = Math.max;
var Br = Math.min;
kr("replace", 2, function(e2, t2, n2, r2) {
  var o2 = r2.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE, i2 = r2.REPLACE_KEEPS_$0, c2 = o2 ? "$" : "$0";
  return [function(n3, r3) {
    var o3 = Ur(this), i3 = n3 == null ? void 0 : n3[e2];
    return i3 !== void 0 ? i3.call(n3, o3, r3) : t2.call(String(o3), n3, r3);
  }, function(e3, r3) {
    if (!o2 && i2 || typeof r3 == "string" && r3.indexOf(c2) === -1) {
      var a2 = n2(t2, e3, this, r3);
      if (a2.done)
        return a2.value;
    }
    var u2 = $r(e3), l2 = String(this), f2 = typeof r3 == "function";
    f2 || (r3 = String(r3));
    var s2 = u2.global;
    if (s2) {
      var p2 = u2.unicode;
      u2.lastIndex = 0;
    }
    for (var g2 = []; ; ) {
      var d2 = zr(u2, l2);
      if (d2 === null)
        break;
      if (g2.push(d2), !s2)
        break;
      String(d2[0]) === "" && (u2.lastIndex = Dr(l2, Lr(u2.lastIndex), p2));
    }
    for (var h2, y2 = "", v2 = 0, x2 = 0; x2 < g2.length; x2++) {
      d2 = g2[x2];
      for (var b2 = String(d2[0]), E2 = Kr(Br(Mr(d2.index), l2.length), 0), m2 = [], S2 = 1; S2 < d2.length; S2++)
        m2.push((h2 = d2[S2]) === void 0 ? h2 : String(h2));
      var w2 = d2.groups;
      if (f2) {
        var O2 = [b2].concat(m2, E2, l2);
        w2 !== void 0 && O2.push(w2);
        var R2 = String(r3.apply(void 0, O2));
      } else
        R2 = Fr(b2, l2, E2, m2, w2, r3);
      E2 >= v2 && (y2 += l2.slice(v2, E2) + R2, v2 = E2 + b2.length);
    }
    return y2 + l2.slice(v2);
  }];
});
var Wr = {};
Wr[Ze("toStringTag")] = "z";
var Gr = String(Wr) === "[object z]";
var Vr = Gr;
var Yr = B;
var qr = Ze("toStringTag");
var Xr = Yr(function() {
  return arguments;
}()) == "Arguments";
var Hr = Vr ? Yr : function(e2) {
  var t2, n2, r2;
  return e2 === void 0 ? "Undefined" : e2 === null ? "Null" : typeof (n2 = function(e3, t3) {
    try {
      return e3[t3];
    } catch (e4) {
    }
  }(t2 = Object(e2), qr)) == "string" ? n2 : Xr ? Yr(t2) : (r2 = Yr(t2)) == "Object" && typeof t2.callee == "function" ? "Arguments" : r2;
};
var Jr = Gr ? {}.toString : function() {
  return "[object " + Hr(this) + "]";
};
var Qr = Gr;
var Zr = ut.exports;
var eo = Jr;
Qr || Zr(Object.prototype, "toString", eo, { unsafe: true });
function search_esm_default() {
  var e2, t2, n2, r2, o2, i2, c2;
  function a2() {
    (t2 = document.createElement("div")).classList.add("searchbox"), t2.style.position = "absolute", t2.style.top = "10px", t2.style.right = "10px", t2.style.zIndex = 10, t2.innerHTML = '<input type="search" class="searchinput" placeholder="Search..." style="vertical-align: top;"/>\n		</span>', (n2 = t2.querySelector(".searchinput")).style.width = "240px", n2.style.fontSize = "14px", n2.style.padding = "4px 6px", n2.style.color = "#000", n2.style.background = "#fff", n2.style.borderRadius = "2px", n2.style.border = "0", n2.style.outline = "0", n2.style.boxShadow = "0 2px 18px rgba(0, 0, 0, 0.2)", n2.style["-webkit-appearance"] = "none", e2.getRevealElement().appendChild(t2), n2.addEventListener("keyup", function(t3) {
      switch (t3.keyCode) {
        case 13:
          t3.preventDefault(), function() {
            if (i2) {
              var t4 = n2.value;
              t4 === "" ? (c2 && c2.remove(), r2 = null) : (c2 = new f2("slidecontent"), r2 = c2.apply(t4), o2 = 0);
            }
            r2 && (r2.length && r2.length <= o2 && (o2 = 0), r2.length > o2 && (e2.slide(r2[o2].h, r2[o2].v), o2++));
          }(), i2 = false;
          break;
        default:
          i2 = true;
      }
    }, false), l2();
  }
  function u2() {
    t2 || a2(), t2.style.display = "inline", n2.focus(), n2.select();
  }
  function l2() {
    t2 || a2(), t2.style.display = "none", c2 && c2.remove();
  }
  function f2(t3, n3) {
    var r3 = document.getElementById(t3) || document.body, o3 = n3 || "EM", i3 = new RegExp("^(?:" + o3 + "|SCRIPT|FORM)$"), c3 = ["#ff6", "#a0ffff", "#9f9", "#f99", "#f6f"], a3 = [], u3 = 0, l3 = "", f3 = [];
    this.setRegex = function(e3) {
      e3 = e3.replace(/^[^\w]+|[^\w]+$/g, "").replace(/[^\w'-]+/g, "|"), l3 = new RegExp("(" + e3 + ")", "i");
    }, this.getRegex = function() {
      return l3.toString().replace(/^\/\\b\(|\)\\b\/i$/g, "").replace(/\|/g, " ");
    }, this.hiliteWords = function(t4) {
      if (t4 != null && t4 && l3 && !i3.test(t4.nodeName)) {
        if (t4.hasChildNodes())
          for (var n4 = 0; n4 < t4.childNodes.length; n4++)
            this.hiliteWords(t4.childNodes[n4]);
        var r4, s2;
        if (t4.nodeType == 3) {
          if ((r4 = t4.nodeValue) && (s2 = l3.exec(r4))) {
            for (var p2 = t4; p2 != null && p2.nodeName != "SECTION"; )
              p2 = p2.parentNode;
            var g2 = e2.getIndices(p2), d2 = f3.length, h2 = false;
            for (n4 = 0; n4 < d2; n4++)
              f3[n4].h === g2.h && f3[n4].v === g2.v && (h2 = true);
            h2 || f3.push(g2), a3[s2[0].toLowerCase()] || (a3[s2[0].toLowerCase()] = c3[u3++ % c3.length]);
            var y2 = document.createElement(o3);
            y2.appendChild(document.createTextNode(s2[0])), y2.style.backgroundColor = a3[s2[0].toLowerCase()], y2.style.fontStyle = "inherit", y2.style.color = "#000";
            var v2 = t4.splitText(s2.index);
            v2.nodeValue = v2.nodeValue.substring(s2[0].length), t4.parentNode.insertBefore(y2, v2);
          }
        }
      }
    }, this.remove = function() {
      for (var e3, t4 = document.getElementsByTagName(o3); t4.length && (e3 = t4[0]); )
        e3.parentNode.replaceChild(e3.firstChild, e3);
    }, this.apply = function(e3) {
      if (e3 != null && e3)
        return this.remove(), this.setRegex(e3), this.hiliteWords(r3), f3;
    };
  }
  return { id: "search", init: function(n3) {
    (e2 = n3).registerKeyboardShortcut("CTRL + Shift + F", "Search"), document.addEventListener("keydown", function(e3) {
      e3.key == "F" && (e3.ctrlKey || e3.metaKey) && (e3.preventDefault(), t2 || a2(), t2.style.display !== "inline" ? u2() : l2());
    }, false);
  }, open: u2 };
}

// dep:reveal_js_plugin_search_search_esm_js
var reveal_js_plugin_search_search_esm_js_default = search_esm_default;
export {
  reveal_js_plugin_search_search_esm_js_default as default
};
//# sourceMappingURL=reveal_js_plugin_search_search_esm_js.js.map
