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

// dep:reveal_js_plugin_math_math_esm_js
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

// node_modules/reveal.js/plugin/math/math.esm.js
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
var o = function(t2) {
  try {
    return !!t2();
  } catch (t3) {
    return true;
  }
};
var i = !o(function() {
  return Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1] != 7;
});
var a = {};
var c = {}.propertyIsEnumerable;
var u = Object.getOwnPropertyDescriptor;
var f = u && !c.call({ 1: 2 }, 1);
a.f = f ? function(t2) {
  var e2 = u(this, t2);
  return !!e2 && e2.enumerable;
} : c;
var s = function(t2, e2) {
  return { enumerable: !(1 & t2), configurable: !(2 & t2), writable: !(4 & t2), value: e2 };
};
var l = {}.toString;
var p = function(t2) {
  return l.call(t2).slice(8, -1);
};
var h = p;
var v = "".split;
var d = o(function() {
  return !Object("z").propertyIsEnumerable(0);
}) ? function(t2) {
  return h(t2) == "String" ? v.call(t2, "") : Object(t2);
} : Object;
var y = function(t2) {
  if (t2 == null)
    throw TypeError("Can't call method on " + t2);
  return t2;
};
var g = d;
var m = y;
var b = function(t2) {
  return g(m(t2));
};
var w = function(t2) {
  return typeof t2 == "object" ? t2 !== null : typeof t2 == "function";
};
var j = w;
var x = function(t2, e2) {
  if (!j(t2))
    return t2;
  var n2, r2;
  if (e2 && typeof (n2 = t2.toString) == "function" && !j(r2 = n2.call(t2)))
    return r2;
  if (typeof (n2 = t2.valueOf) == "function" && !j(r2 = n2.call(t2)))
    return r2;
  if (!e2 && typeof (n2 = t2.toString) == "function" && !j(r2 = n2.call(t2)))
    return r2;
  throw TypeError("Can't convert object to primitive value");
};
var O = y;
var E = function(t2) {
  return Object(O(t2));
};
var S = E;
var T = {}.hasOwnProperty;
var P = function(t2, e2) {
  return T.call(S(t2), e2);
};
var _ = w;
var k = n.document;
var L = _(k) && _(k.createElement);
var M = function(t2) {
  return L ? k.createElement(t2) : {};
};
var A = M;
var I = !i && !o(function() {
  return Object.defineProperty(A("div"), "a", { get: function() {
    return 7;
  } }).a != 7;
});
var R = i;
var C = a;
var N = s;
var F = b;
var J = x;
var D = P;
var $ = I;
var G = Object.getOwnPropertyDescriptor;
r.f = R ? G : function(t2, e2) {
  if (t2 = F(t2), e2 = J(e2, true), $)
    try {
      return G(t2, e2);
    } catch (t3) {
    }
  if (D(t2, e2))
    return N(!C.f.call(t2, e2), t2[e2]);
};
var H = {};
var z = w;
var W = function(t2) {
  if (!z(t2))
    throw TypeError(String(t2) + " is not an object");
  return t2;
};
var q = i;
var U = I;
var K = W;
var Q = x;
var X = Object.defineProperty;
H.f = q ? X : function(t2, e2, n2) {
  if (K(t2), e2 = Q(e2, true), K(n2), U)
    try {
      return X(t2, e2, n2);
    } catch (t3) {
    }
  if ("get" in n2 || "set" in n2)
    throw TypeError("Accessors not supported");
  return "value" in n2 && (t2[e2] = n2.value), t2;
};
var Y = H;
var B = s;
var V = i ? function(t2, e2, n2) {
  return Y.f(t2, e2, B(1, n2));
} : function(t2, e2, n2) {
  return t2[e2] = n2, t2;
};
var Z = { exports: {} };
var tt = n;
var et = V;
var nt = function(t2, e2) {
  try {
    et(tt, t2, e2);
  } catch (n2) {
    tt[t2] = e2;
  }
  return e2;
};
var rt = nt;
var ot = n["__core-js_shared__"] || rt("__core-js_shared__", {});
var it = ot;
var at = Function.toString;
typeof it.inspectSource != "function" && (it.inspectSource = function(t2) {
  return at.call(t2);
});
var ct = it.inspectSource;
var ut = ct;
var ft = n.WeakMap;
var st = typeof ft == "function" && /native code/.test(ut(ft));
var lt = { exports: {} };
var pt = ot;
(lt.exports = function(t2, e2) {
  return pt[t2] || (pt[t2] = e2 !== void 0 ? e2 : {});
})("versions", []).push({ version: "3.12.1", mode: "global", copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)" });
var ht;
var vt;
var dt;
var yt = 0;
var gt = Math.random();
var mt = function(t2) {
  return "Symbol(" + String(t2 === void 0 ? "" : t2) + ")_" + (++yt + gt).toString(36);
};
var bt = lt.exports;
var wt = mt;
var jt = bt("keys");
var xt = function(t2) {
  return jt[t2] || (jt[t2] = wt(t2));
};
var Ot = {};
var Et = st;
var St = w;
var Tt = V;
var Pt = P;
var _t = ot;
var kt = xt;
var Lt = Ot;
var Mt = n.WeakMap;
if (Et || _t.state) {
  At = _t.state || (_t.state = new Mt()), It = At.get, Rt = At.has, Ct = At.set;
  ht = function(t2, e2) {
    if (Rt.call(At, t2))
      throw new TypeError("Object already initialized");
    return e2.facade = t2, Ct.call(At, t2, e2), e2;
  }, vt = function(t2) {
    return It.call(At, t2) || {};
  }, dt = function(t2) {
    return Rt.call(At, t2);
  };
} else {
  Nt = kt("state");
  Lt[Nt] = true, ht = function(t2, e2) {
    if (Pt(t2, Nt))
      throw new TypeError("Object already initialized");
    return e2.facade = t2, Tt(t2, Nt, e2), e2;
  }, vt = function(t2) {
    return Pt(t2, Nt) ? t2[Nt] : {};
  }, dt = function(t2) {
    return Pt(t2, Nt);
  };
}
var At;
var It;
var Rt;
var Ct;
var Nt;
var Ft = { set: ht, get: vt, has: dt, enforce: function(t2) {
  return dt(t2) ? vt(t2) : ht(t2, {});
}, getterFor: function(t2) {
  return function(e2) {
    var n2;
    if (!St(e2) || (n2 = vt(e2)).type !== t2)
      throw TypeError("Incompatible receiver, " + t2 + " required");
    return n2;
  };
} };
var Jt = n;
var Dt = V;
var $t = P;
var Gt = nt;
var Ht = ct;
var zt = Ft.get;
var Wt = Ft.enforce;
var qt = String(String).split("String");
(Z.exports = function(t2, e2, n2, r2) {
  var o2, i2 = !!r2 && !!r2.unsafe, a2 = !!r2 && !!r2.enumerable, c2 = !!r2 && !!r2.noTargetGet;
  typeof n2 == "function" && (typeof e2 != "string" || $t(n2, "name") || Dt(n2, "name", e2), (o2 = Wt(n2)).source || (o2.source = qt.join(typeof e2 == "string" ? e2 : ""))), t2 !== Jt ? (i2 ? !c2 && t2[e2] && (a2 = true) : delete t2[e2], a2 ? t2[e2] = n2 : Dt(t2, e2, n2)) : a2 ? t2[e2] = n2 : Gt(e2, n2);
})(Function.prototype, "toString", function() {
  return typeof this == "function" && zt(this).source || Ht(this);
});
var Ut = n;
var Kt = n;
var Qt = function(t2) {
  return typeof t2 == "function" ? t2 : void 0;
};
var Xt = function(t2, e2) {
  return arguments.length < 2 ? Qt(Ut[t2]) || Qt(Kt[t2]) : Ut[t2] && Ut[t2][e2] || Kt[t2] && Kt[t2][e2];
};
var Yt = {};
var Bt = Math.ceil;
var Vt = Math.floor;
var Zt = function(t2) {
  return isNaN(t2 = +t2) ? 0 : (t2 > 0 ? Vt : Bt)(t2);
};
var te = Zt;
var ee = Math.min;
var ne = function(t2) {
  return t2 > 0 ? ee(te(t2), 9007199254740991) : 0;
};
var re = Zt;
var oe = Math.max;
var ie = Math.min;
var ae = b;
var ce = ne;
var ue = function(t2, e2) {
  var n2 = re(t2);
  return n2 < 0 ? oe(n2 + e2, 0) : ie(n2, e2);
};
var fe = function(t2) {
  return function(e2, n2, r2) {
    var o2, i2 = ae(e2), a2 = ce(i2.length), c2 = ue(r2, a2);
    if (t2 && n2 != n2) {
      for (; a2 > c2; )
        if ((o2 = i2[c2++]) != o2)
          return true;
    } else
      for (; a2 > c2; c2++)
        if ((t2 || c2 in i2) && i2[c2] === n2)
          return t2 || c2 || 0;
    return !t2 && -1;
  };
};
var se = { includes: fe(true), indexOf: fe(false) };
var le = P;
var pe = b;
var he = se.indexOf;
var ve = Ot;
var de = function(t2, e2) {
  var n2, r2 = pe(t2), o2 = 0, i2 = [];
  for (n2 in r2)
    !le(ve, n2) && le(r2, n2) && i2.push(n2);
  for (; e2.length > o2; )
    le(r2, n2 = e2[o2++]) && (~he(i2, n2) || i2.push(n2));
  return i2;
};
var ye = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
var ge = de;
var me = ye.concat("length", "prototype");
Yt.f = Object.getOwnPropertyNames || function(t2) {
  return ge(t2, me);
};
var be = {};
be.f = Object.getOwnPropertySymbols;
var we = Yt;
var je = be;
var xe = W;
var Oe = Xt("Reflect", "ownKeys") || function(t2) {
  var e2 = we.f(xe(t2)), n2 = je.f;
  return n2 ? e2.concat(n2(t2)) : e2;
};
var Ee = P;
var Se = Oe;
var Te = r;
var Pe = H;
var _e = o;
var ke = /#|\.prototype\./;
var Le = function(t2, e2) {
  var n2 = Ae[Me(t2)];
  return n2 == Re || n2 != Ie && (typeof e2 == "function" ? _e(e2) : !!e2);
};
var Me = Le.normalize = function(t2) {
  return String(t2).replace(ke, ".").toLowerCase();
};
var Ae = Le.data = {};
var Ie = Le.NATIVE = "N";
var Re = Le.POLYFILL = "P";
var Ce = Le;
var Ne = n;
var Fe = r.f;
var Je = V;
var De = Z.exports;
var $e = nt;
var Ge = function(t2, e2) {
  for (var n2 = Se(e2), r2 = Pe.f, o2 = Te.f, i2 = 0; i2 < n2.length; i2++) {
    var a2 = n2[i2];
    Ee(t2, a2) || r2(t2, a2, o2(e2, a2));
  }
};
var He = Ce;
var ze = function(t2, e2) {
  var n2, r2, o2, i2, a2, c2 = t2.target, u2 = t2.global, f2 = t2.stat;
  if (n2 = u2 ? Ne : f2 ? Ne[c2] || $e(c2, {}) : (Ne[c2] || {}).prototype)
    for (r2 in e2) {
      if (i2 = e2[r2], o2 = t2.noTargetGet ? (a2 = Fe(n2, r2)) && a2.value : n2[r2], !He(u2 ? r2 : c2 + (f2 ? "." : "#") + r2, t2.forced) && o2 !== void 0) {
        if (typeof i2 == typeof o2)
          continue;
        Ge(i2, o2);
      }
      (t2.sham || o2 && o2.sham) && Je(i2, "sham", true), De(n2, r2, i2, t2);
    }
};
var We = de;
var qe = ye;
var Ue = Object.keys || function(t2) {
  return We(t2, qe);
};
var Ke = i;
var Qe = o;
var Xe = Ue;
var Ye = be;
var Be = a;
var Ve = E;
var Ze = d;
var tn = Object.assign;
var en = Object.defineProperty;
var nn = !tn || Qe(function() {
  if (Ke && tn({ b: 1 }, tn(en({}, "a", { enumerable: true, get: function() {
    en(this, "b", { value: 3, enumerable: false });
  } }), { b: 2 })).b !== 1)
    return true;
  var t2 = {}, e2 = {}, n2 = Symbol(), r2 = "abcdefghijklmnopqrst";
  return t2[n2] = 7, r2.split("").forEach(function(t3) {
    e2[t3] = t3;
  }), tn({}, t2)[n2] != 7 || Xe(tn({}, e2)).join("") != r2;
}) ? function(t2, e2) {
  for (var n2 = Ve(t2), r2 = arguments.length, o2 = 1, i2 = Ye.f, a2 = Be.f; r2 > o2; )
    for (var c2, u2 = Ze(arguments[o2++]), f2 = i2 ? Xe(u2).concat(i2(u2)) : Xe(u2), s2 = f2.length, l2 = 0; s2 > l2; )
      c2 = f2[l2++], Ke && !a2.call(u2, c2) || (n2[c2] = u2[c2]);
  return n2;
} : tn;
function rn(t2, e2) {
  var n2 = Object.keys(t2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(t2);
    e2 && (r2 = r2.filter(function(e3) {
      return Object.getOwnPropertyDescriptor(t2, e3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function on(t2) {
  for (var e2 = 1; e2 < arguments.length; e2++) {
    var n2 = arguments[e2] != null ? arguments[e2] : {};
    e2 % 2 ? rn(Object(n2), true).forEach(function(e3) {
      un(t2, e3, n2[e3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t2, Object.getOwnPropertyDescriptors(n2)) : rn(Object(n2)).forEach(function(e3) {
      Object.defineProperty(t2, e3, Object.getOwnPropertyDescriptor(n2, e3));
    });
  }
  return t2;
}
function an(t2, e2, n2, r2, o2, i2, a2) {
  try {
    var c2 = t2[i2](a2), u2 = c2.value;
  } catch (t3) {
    return void n2(t3);
  }
  c2.done ? e2(u2) : Promise.resolve(u2).then(r2, o2);
}
function cn(t2) {
  return function() {
    var e2 = this, n2 = arguments;
    return new Promise(function(r2, o2) {
      var i2 = t2.apply(e2, n2);
      function a2(t3) {
        an(i2, r2, o2, a2, c2, "next", t3);
      }
      function c2(t3) {
        an(i2, r2, o2, a2, c2, "throw", t3);
      }
      a2(void 0);
    });
  };
}
function un(t2, e2, n2) {
  return e2 in t2 ? Object.defineProperty(t2, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t2[e2] = n2, t2;
}
function fn(t2, e2) {
  if (t2 == null)
    return {};
  var n2, r2, o2 = function(t3, e3) {
    if (t3 == null)
      return {};
    var n3, r3, o3 = {}, i3 = Object.keys(t3);
    for (r3 = 0; r3 < i3.length; r3++)
      n3 = i3[r3], e3.indexOf(n3) >= 0 || (o3[n3] = t3[n3]);
    return o3;
  }(t2, e2);
  if (Object.getOwnPropertySymbols) {
    var i2 = Object.getOwnPropertySymbols(t2);
    for (r2 = 0; r2 < i2.length; r2++)
      n2 = i2[r2], e2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(t2, n2) && (o2[n2] = t2[n2]);
  }
  return o2;
}
function sn(t2, e2) {
  (e2 == null || e2 > t2.length) && (e2 = t2.length);
  for (var n2 = 0, r2 = new Array(e2); n2 < e2; n2++)
    r2[n2] = t2[n2];
  return r2;
}
function ln(t2, e2) {
  var n2 = typeof Symbol != "undefined" && t2[Symbol.iterator] || t2["@@iterator"];
  if (!n2) {
    if (Array.isArray(t2) || (n2 = function(t3, e3) {
      if (t3) {
        if (typeof t3 == "string")
          return sn(t3, e3);
        var n3 = Object.prototype.toString.call(t3).slice(8, -1);
        return n3 === "Object" && t3.constructor && (n3 = t3.constructor.name), n3 === "Map" || n3 === "Set" ? Array.from(t3) : n3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3) ? sn(t3, e3) : void 0;
      }
    }(t2)) || e2 && t2 && typeof t2.length == "number") {
      n2 && (t2 = n2);
      var r2 = 0, o2 = function() {
      };
      return { s: o2, n: function() {
        return r2 >= t2.length ? { done: true } : { done: false, value: t2[r2++] };
      }, e: function(t3) {
        throw t3;
      }, f: o2 };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var i2, a2 = true, c2 = false;
  return { s: function() {
    n2 = n2.call(t2);
  }, n: function() {
    var t3 = n2.next();
    return a2 = t3.done, t3;
  }, e: function(t3) {
    c2 = true, i2 = t3;
  }, f: function() {
    try {
      a2 || n2.return == null || n2.return();
    } finally {
      if (c2)
        throw i2;
    }
  } };
}
ze({ target: "Object", stat: true, forced: Object.assign !== nn }, { assign: nn });
!function(t2) {
  var e2 = function(t3) {
    var e3, n2 = Object.prototype, r2 = n2.hasOwnProperty, o2 = typeof Symbol == "function" ? Symbol : {}, i2 = o2.iterator || "@@iterator", a2 = o2.asyncIterator || "@@asyncIterator", c2 = o2.toStringTag || "@@toStringTag";
    function u2(t4, e4, n3) {
      return Object.defineProperty(t4, e4, { value: n3, enumerable: true, configurable: true, writable: true }), t4[e4];
    }
    try {
      u2({}, "");
    } catch (t4) {
      u2 = function(t5, e4, n3) {
        return t5[e4] = n3;
      };
    }
    function f2(t4, e4, n3, r3) {
      var o3 = e4 && e4.prototype instanceof y2 ? e4 : y2, i3 = Object.create(o3.prototype), a3 = new _2(r3 || []);
      return i3._invoke = function(t5, e5, n4) {
        var r4 = l2;
        return function(o4, i4) {
          if (r4 === h2)
            throw new Error("Generator is already running");
          if (r4 === v2) {
            if (o4 === "throw")
              throw i4;
            return L2();
          }
          for (n4.method = o4, n4.arg = i4; ; ) {
            var a4 = n4.delegate;
            if (a4) {
              var c3 = S2(a4, n4);
              if (c3) {
                if (c3 === d2)
                  continue;
                return c3;
              }
            }
            if (n4.method === "next")
              n4.sent = n4._sent = n4.arg;
            else if (n4.method === "throw") {
              if (r4 === l2)
                throw r4 = v2, n4.arg;
              n4.dispatchException(n4.arg);
            } else
              n4.method === "return" && n4.abrupt("return", n4.arg);
            r4 = h2;
            var u3 = s2(t5, e5, n4);
            if (u3.type === "normal") {
              if (r4 = n4.done ? v2 : p2, u3.arg === d2)
                continue;
              return { value: u3.arg, done: n4.done };
            }
            u3.type === "throw" && (r4 = v2, n4.method = "throw", n4.arg = u3.arg);
          }
        };
      }(t4, n3, a3), i3;
    }
    function s2(t4, e4, n3) {
      try {
        return { type: "normal", arg: t4.call(e4, n3) };
      } catch (t5) {
        return { type: "throw", arg: t5 };
      }
    }
    t3.wrap = f2;
    var l2 = "suspendedStart", p2 = "suspendedYield", h2 = "executing", v2 = "completed", d2 = {};
    function y2() {
    }
    function g2() {
    }
    function m2() {
    }
    var b2 = {};
    b2[i2] = function() {
      return this;
    };
    var w2 = Object.getPrototypeOf, j2 = w2 && w2(w2(k2([])));
    j2 && j2 !== n2 && r2.call(j2, i2) && (b2 = j2);
    var x2 = m2.prototype = y2.prototype = Object.create(b2);
    function O2(t4) {
      ["next", "throw", "return"].forEach(function(e4) {
        u2(t4, e4, function(t5) {
          return this._invoke(e4, t5);
        });
      });
    }
    function E2(t4, e4) {
      function n3(o4, i3, a3, c3) {
        var u3 = s2(t4[o4], t4, i3);
        if (u3.type !== "throw") {
          var f3 = u3.arg, l3 = f3.value;
          return l3 && typeof l3 == "object" && r2.call(l3, "__await") ? e4.resolve(l3.__await).then(function(t5) {
            n3("next", t5, a3, c3);
          }, function(t5) {
            n3("throw", t5, a3, c3);
          }) : e4.resolve(l3).then(function(t5) {
            f3.value = t5, a3(f3);
          }, function(t5) {
            return n3("throw", t5, a3, c3);
          });
        }
        c3(u3.arg);
      }
      var o3;
      this._invoke = function(t5, r3) {
        function i3() {
          return new e4(function(e5, o4) {
            n3(t5, r3, e5, o4);
          });
        }
        return o3 = o3 ? o3.then(i3, i3) : i3();
      };
    }
    function S2(t4, n3) {
      var r3 = t4.iterator[n3.method];
      if (r3 === e3) {
        if (n3.delegate = null, n3.method === "throw") {
          if (t4.iterator.return && (n3.method = "return", n3.arg = e3, S2(t4, n3), n3.method === "throw"))
            return d2;
          n3.method = "throw", n3.arg = new TypeError("The iterator does not provide a 'throw' method");
        }
        return d2;
      }
      var o3 = s2(r3, t4.iterator, n3.arg);
      if (o3.type === "throw")
        return n3.method = "throw", n3.arg = o3.arg, n3.delegate = null, d2;
      var i3 = o3.arg;
      return i3 ? i3.done ? (n3[t4.resultName] = i3.value, n3.next = t4.nextLoc, n3.method !== "return" && (n3.method = "next", n3.arg = e3), n3.delegate = null, d2) : i3 : (n3.method = "throw", n3.arg = new TypeError("iterator result is not an object"), n3.delegate = null, d2);
    }
    function T2(t4) {
      var e4 = { tryLoc: t4[0] };
      1 in t4 && (e4.catchLoc = t4[1]), 2 in t4 && (e4.finallyLoc = t4[2], e4.afterLoc = t4[3]), this.tryEntries.push(e4);
    }
    function P2(t4) {
      var e4 = t4.completion || {};
      e4.type = "normal", delete e4.arg, t4.completion = e4;
    }
    function _2(t4) {
      this.tryEntries = [{ tryLoc: "root" }], t4.forEach(T2, this), this.reset(true);
    }
    function k2(t4) {
      if (t4) {
        var n3 = t4[i2];
        if (n3)
          return n3.call(t4);
        if (typeof t4.next == "function")
          return t4;
        if (!isNaN(t4.length)) {
          var o3 = -1, a3 = function n4() {
            for (; ++o3 < t4.length; )
              if (r2.call(t4, o3))
                return n4.value = t4[o3], n4.done = false, n4;
            return n4.value = e3, n4.done = true, n4;
          };
          return a3.next = a3;
        }
      }
      return { next: L2 };
    }
    function L2() {
      return { value: e3, done: true };
    }
    return g2.prototype = x2.constructor = m2, m2.constructor = g2, g2.displayName = u2(m2, c2, "GeneratorFunction"), t3.isGeneratorFunction = function(t4) {
      var e4 = typeof t4 == "function" && t4.constructor;
      return !!e4 && (e4 === g2 || (e4.displayName || e4.name) === "GeneratorFunction");
    }, t3.mark = function(t4) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(t4, m2) : (t4.__proto__ = m2, u2(t4, c2, "GeneratorFunction")), t4.prototype = Object.create(x2), t4;
    }, t3.awrap = function(t4) {
      return { __await: t4 };
    }, O2(E2.prototype), E2.prototype[a2] = function() {
      return this;
    }, t3.AsyncIterator = E2, t3.async = function(e4, n3, r3, o3, i3) {
      i3 === void 0 && (i3 = Promise);
      var a3 = new E2(f2(e4, n3, r3, o3), i3);
      return t3.isGeneratorFunction(n3) ? a3 : a3.next().then(function(t4) {
        return t4.done ? t4.value : a3.next();
      });
    }, O2(x2), u2(x2, c2, "Generator"), x2[i2] = function() {
      return this;
    }, x2.toString = function() {
      return "[object Generator]";
    }, t3.keys = function(t4) {
      var e4 = [];
      for (var n3 in t4)
        e4.push(n3);
      return e4.reverse(), function n4() {
        for (; e4.length; ) {
          var r3 = e4.pop();
          if (r3 in t4)
            return n4.value = r3, n4.done = false, n4;
        }
        return n4.done = true, n4;
      };
    }, t3.values = k2, _2.prototype = { constructor: _2, reset: function(t4) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = e3, this.done = false, this.delegate = null, this.method = "next", this.arg = e3, this.tryEntries.forEach(P2), !t4)
        for (var n3 in this)
          n3.charAt(0) === "t" && r2.call(this, n3) && !isNaN(+n3.slice(1)) && (this[n3] = e3);
    }, stop: function() {
      this.done = true;
      var t4 = this.tryEntries[0].completion;
      if (t4.type === "throw")
        throw t4.arg;
      return this.rval;
    }, dispatchException: function(t4) {
      if (this.done)
        throw t4;
      var n3 = this;
      function o3(r3, o4) {
        return c3.type = "throw", c3.arg = t4, n3.next = r3, o4 && (n3.method = "next", n3.arg = e3), !!o4;
      }
      for (var i3 = this.tryEntries.length - 1; i3 >= 0; --i3) {
        var a3 = this.tryEntries[i3], c3 = a3.completion;
        if (a3.tryLoc === "root")
          return o3("end");
        if (a3.tryLoc <= this.prev) {
          var u3 = r2.call(a3, "catchLoc"), f3 = r2.call(a3, "finallyLoc");
          if (u3 && f3) {
            if (this.prev < a3.catchLoc)
              return o3(a3.catchLoc, true);
            if (this.prev < a3.finallyLoc)
              return o3(a3.finallyLoc);
          } else if (u3) {
            if (this.prev < a3.catchLoc)
              return o3(a3.catchLoc, true);
          } else {
            if (!f3)
              throw new Error("try statement without catch or finally");
            if (this.prev < a3.finallyLoc)
              return o3(a3.finallyLoc);
          }
        }
      }
    }, abrupt: function(t4, e4) {
      for (var n3 = this.tryEntries.length - 1; n3 >= 0; --n3) {
        var o3 = this.tryEntries[n3];
        if (o3.tryLoc <= this.prev && r2.call(o3, "finallyLoc") && this.prev < o3.finallyLoc) {
          var i3 = o3;
          break;
        }
      }
      i3 && (t4 === "break" || t4 === "continue") && i3.tryLoc <= e4 && e4 <= i3.finallyLoc && (i3 = null);
      var a3 = i3 ? i3.completion : {};
      return a3.type = t4, a3.arg = e4, i3 ? (this.method = "next", this.next = i3.finallyLoc, d2) : this.complete(a3);
    }, complete: function(t4, e4) {
      if (t4.type === "throw")
        throw t4.arg;
      return t4.type === "break" || t4.type === "continue" ? this.next = t4.arg : t4.type === "return" ? (this.rval = this.arg = t4.arg, this.method = "return", this.next = "end") : t4.type === "normal" && e4 && (this.next = e4), d2;
    }, finish: function(t4) {
      for (var e4 = this.tryEntries.length - 1; e4 >= 0; --e4) {
        var n3 = this.tryEntries[e4];
        if (n3.finallyLoc === t4)
          return this.complete(n3.completion, n3.afterLoc), P2(n3), d2;
      }
    }, catch: function(t4) {
      for (var e4 = this.tryEntries.length - 1; e4 >= 0; --e4) {
        var n3 = this.tryEntries[e4];
        if (n3.tryLoc === t4) {
          var r3 = n3.completion;
          if (r3.type === "throw") {
            var o3 = r3.arg;
            P2(n3);
          }
          return o3;
        }
      }
      throw new Error("illegal catch attempt");
    }, delegateYield: function(t4, n3, r3) {
      return this.delegate = { iterator: k2(t4), resultName: n3, nextLoc: r3 }, this.method === "next" && (this.arg = e3), d2;
    } }, t3;
  }(t2.exports);
  try {
    regeneratorRuntime = e2;
  } catch (t3) {
    Function("r", "regeneratorRuntime = r")(e2);
  }
}({ exports: {} });
var pn;
var hn;
var vn = Xt("navigator", "userAgent") || "";
var dn = vn;
var yn = n.process;
var gn = yn && yn.versions;
var mn = gn && gn.v8;
mn ? hn = (pn = mn.split("."))[0] < 4 ? 1 : pn[0] + pn[1] : dn && (!(pn = dn.match(/Edge\/(\d+)/)) || pn[1] >= 74) && (pn = dn.match(/Chrome\/(\d+)/)) && (hn = pn[1]);
var bn = hn && +hn;
var wn = bn;
var jn = o;
var xn = !!Object.getOwnPropertySymbols && !jn(function() {
  return !String(Symbol()) || !Symbol.sham && wn && wn < 41;
});
var On = xn && !Symbol.sham && typeof Symbol.iterator == "symbol";
var En = n;
var Sn = lt.exports;
var Tn = P;
var Pn = mt;
var _n = xn;
var kn = On;
var Ln = Sn("wks");
var Mn = En.Symbol;
var An = kn ? Mn : Mn && Mn.withoutSetter || Pn;
var In = function(t2) {
  return Tn(Ln, t2) && (_n || typeof Ln[t2] == "string") || (_n && Tn(Mn, t2) ? Ln[t2] = Mn[t2] : Ln[t2] = An("Symbol." + t2)), Ln[t2];
};
var Rn = {};
Rn[In("toStringTag")] = "z";
var Cn = String(Rn) === "[object z]";
var Nn = Cn;
var Fn = p;
var Jn = In("toStringTag");
var Dn = Fn(function() {
  return arguments;
}()) == "Arguments";
var $n = Nn ? Fn : function(t2) {
  var e2, n2, r2;
  return t2 === void 0 ? "Undefined" : t2 === null ? "Null" : typeof (n2 = function(t3, e3) {
    try {
      return t3[e3];
    } catch (t4) {
    }
  }(e2 = Object(t2), Jn)) == "string" ? n2 : Dn ? Fn(e2) : (r2 = Fn(e2)) == "Object" && typeof e2.callee == "function" ? "Arguments" : r2;
};
var Gn = $n;
var Hn = Cn ? {}.toString : function() {
  return "[object " + Gn(this) + "]";
};
var zn = Cn;
var Wn = Z.exports;
var qn = Hn;
zn || Wn(Object.prototype, "toString", qn, { unsafe: true });
var Un = n.Promise;
var Kn = Z.exports;
var Qn = w;
var Xn = W;
var Yn = function(t2) {
  if (!Qn(t2) && t2 !== null)
    throw TypeError("Can't set " + String(t2) + " as a prototype");
  return t2;
};
var Bn = Object.setPrototypeOf || ("__proto__" in {} ? function() {
  var t2, e2 = false, n2 = {};
  try {
    (t2 = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n2, []), e2 = n2 instanceof Array;
  } catch (t3) {
  }
  return function(n3, r2) {
    return Xn(n3), Yn(r2), e2 ? t2.call(n3, r2) : n3.__proto__ = r2, n3;
  };
}() : void 0);
var Vn = H.f;
var Zn = P;
var tr = In("toStringTag");
var er = Xt;
var nr = H;
var rr = i;
var or = In("species");
var ir = function(t2) {
  if (typeof t2 != "function")
    throw TypeError(String(t2) + " is not a function");
  return t2;
};
var ar = {};
var cr = ar;
var ur = In("iterator");
var fr = Array.prototype;
var sr = ir;
var lr = function(t2, e2, n2) {
  if (sr(t2), e2 === void 0)
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
      return function(n3, r2, o2) {
        return t2.call(e2, n3, r2, o2);
      };
  }
  return function() {
    return t2.apply(e2, arguments);
  };
};
var pr = $n;
var hr = ar;
var vr = In("iterator");
var dr = W;
var yr = W;
var gr = function(t2) {
  return t2 !== void 0 && (cr.Array === t2 || fr[ur] === t2);
};
var mr = ne;
var br = lr;
var wr = function(t2) {
  if (t2 != null)
    return t2[vr] || t2["@@iterator"] || hr[pr(t2)];
};
var jr = function(t2) {
  var e2 = t2.return;
  if (e2 !== void 0)
    return dr(e2.call(t2)).value;
};
var xr = function(t2, e2) {
  this.stopped = t2, this.result = e2;
};
var Or = In("iterator");
var Er = false;
try {
  Sr = 0, Tr = { next: function() {
    return { done: !!Sr++ };
  }, return: function() {
    Er = true;
  } };
  Tr[Or] = function() {
    return this;
  }, Array.from(Tr, function() {
    throw 2;
  });
} catch (t2) {
}
var Sr;
var Tr;
var Pr;
var _r;
var kr;
var Lr = W;
var Mr = ir;
var Ar = In("species");
var Ir = Xt("document", "documentElement");
var Rr = /(?:iphone|ipod|ipad).*applewebkit/i.test(vn);
var Cr = p(n.process) == "process";
var Nr = n;
var Fr = o;
var Jr = lr;
var Dr = Ir;
var $r = M;
var Gr = Rr;
var Hr = Cr;
var zr = Nr.location;
var Wr = Nr.setImmediate;
var qr = Nr.clearImmediate;
var Ur = Nr.process;
var Kr = Nr.MessageChannel;
var Qr = Nr.Dispatch;
var Xr = 0;
var Yr = {};
var Br = function(t2) {
  if (Yr.hasOwnProperty(t2)) {
    var e2 = Yr[t2];
    delete Yr[t2], e2();
  }
};
var Vr = function(t2) {
  return function() {
    Br(t2);
  };
};
var Zr = function(t2) {
  Br(t2.data);
};
var to = function(t2) {
  Nr.postMessage(t2 + "", zr.protocol + "//" + zr.host);
};
Wr && qr || (Wr = function(t2) {
  for (var e2 = [], n2 = 1; arguments.length > n2; )
    e2.push(arguments[n2++]);
  return Yr[++Xr] = function() {
    (typeof t2 == "function" ? t2 : Function(t2)).apply(void 0, e2);
  }, Pr(Xr), Xr;
}, qr = function(t2) {
  delete Yr[t2];
}, Hr ? Pr = function(t2) {
  Ur.nextTick(Vr(t2));
} : Qr && Qr.now ? Pr = function(t2) {
  Qr.now(Vr(t2));
} : Kr && !Gr ? (kr = (_r = new Kr()).port2, _r.port1.onmessage = Zr, Pr = Jr(kr.postMessage, kr, 1)) : Nr.addEventListener && typeof postMessage == "function" && !Nr.importScripts && zr && zr.protocol !== "file:" && !Fr(to) ? (Pr = to, Nr.addEventListener("message", Zr, false)) : Pr = "onreadystatechange" in $r("script") ? function(t2) {
  Dr.appendChild($r("script")).onreadystatechange = function() {
    Dr.removeChild(this), Br(t2);
  };
} : function(t2) {
  setTimeout(Vr(t2), 0);
});
var eo;
var no;
var ro;
var oo;
var io;
var ao;
var co;
var uo;
var fo = { set: Wr, clear: qr };
var so = /web0s(?!.*chrome)/i.test(vn);
var lo = n;
var po = r.f;
var ho = fo.set;
var vo = Rr;
var yo = so;
var go = Cr;
var mo = lo.MutationObserver || lo.WebKitMutationObserver;
var bo = lo.document;
var wo = lo.process;
var jo = lo.Promise;
var xo = po(lo, "queueMicrotask");
var Oo = xo && xo.value;
Oo || (eo = function() {
  var t2, e2;
  for (go && (t2 = wo.domain) && t2.exit(); no; ) {
    e2 = no.fn, no = no.next;
    try {
      e2();
    } catch (t3) {
      throw no ? oo() : ro = void 0, t3;
    }
  }
  ro = void 0, t2 && t2.enter();
}, vo || go || yo || !mo || !bo ? jo && jo.resolve ? ((co = jo.resolve(void 0)).constructor = jo, uo = co.then, oo = function() {
  uo.call(co, eo);
}) : oo = go ? function() {
  wo.nextTick(eo);
} : function() {
  ho.call(lo, eo);
} : (io = true, ao = bo.createTextNode(""), new mo(eo).observe(ao, { characterData: true }), oo = function() {
  ao.data = io = !io;
}));
var Eo = Oo || function(t2) {
  var e2 = { fn: t2, next: void 0 };
  ro && (ro.next = e2), no || (no = e2, oo()), ro = e2;
};
var So = {};
var To = ir;
var Po = function(t2) {
  var e2, n2;
  this.promise = new t2(function(t3, r2) {
    if (e2 !== void 0 || n2 !== void 0)
      throw TypeError("Bad Promise constructor");
    e2 = t3, n2 = r2;
  }), this.resolve = To(e2), this.reject = To(n2);
};
So.f = function(t2) {
  return new Po(t2);
};
var _o;
var ko;
var Lo;
var Mo;
var Ao = W;
var Io = w;
var Ro = So;
var Co = n;
var No = typeof window == "object";
var Fo = ze;
var Jo = n;
var Do = Xt;
var $o = Un;
var Go = Z.exports;
var Ho = function(t2, e2, n2) {
  for (var r2 in e2)
    Kn(t2, r2, e2[r2], n2);
  return t2;
};
var zo = Bn;
var Wo = function(t2, e2, n2) {
  t2 && !Zn(t2 = n2 ? t2 : t2.prototype, tr) && Vn(t2, tr, { configurable: true, value: e2 });
};
var qo = function(t2) {
  var e2 = er(t2), n2 = nr.f;
  rr && e2 && !e2[or] && n2(e2, or, { configurable: true, get: function() {
    return this;
  } });
};
var Uo = w;
var Ko = ir;
var Qo = function(t2, e2, n2) {
  if (!(t2 instanceof e2))
    throw TypeError("Incorrect " + (n2 ? n2 + " " : "") + "invocation");
  return t2;
};
var Xo = ct;
var Yo = function(t2, e2, n2) {
  var r2, o2, i2, a2, c2, u2, f2, s2 = n2 && n2.that, l2 = !(!n2 || !n2.AS_ENTRIES), p2 = !(!n2 || !n2.IS_ITERATOR), h2 = !(!n2 || !n2.INTERRUPTED), v2 = br(e2, s2, 1 + l2 + h2), d2 = function(t3) {
    return r2 && jr(r2), new xr(true, t3);
  }, y2 = function(t3) {
    return l2 ? (yr(t3), h2 ? v2(t3[0], t3[1], d2) : v2(t3[0], t3[1])) : h2 ? v2(t3, d2) : v2(t3);
  };
  if (p2)
    r2 = t2;
  else {
    if (typeof (o2 = wr(t2)) != "function")
      throw TypeError("Target is not iterable");
    if (gr(o2)) {
      for (i2 = 0, a2 = mr(t2.length); a2 > i2; i2++)
        if ((c2 = y2(t2[i2])) && c2 instanceof xr)
          return c2;
      return new xr(false);
    }
    r2 = o2.call(t2);
  }
  for (u2 = r2.next; !(f2 = u2.call(r2)).done; ) {
    try {
      c2 = y2(f2.value);
    } catch (t3) {
      throw jr(r2), t3;
    }
    if (typeof c2 == "object" && c2 && c2 instanceof xr)
      return c2;
  }
  return new xr(false);
};
var Bo = function(t2, e2) {
  if (!e2 && !Er)
    return false;
  var n2 = false;
  try {
    var r2 = {};
    r2[Or] = function() {
      return { next: function() {
        return { done: n2 = true };
      } };
    }, t2(r2);
  } catch (t3) {
  }
  return n2;
};
var Vo = function(t2, e2) {
  var n2, r2 = Lr(t2).constructor;
  return r2 === void 0 || (n2 = Lr(r2)[Ar]) == null ? e2 : Mr(n2);
};
var Zo = fo.set;
var ti = Eo;
var ei = function(t2, e2) {
  if (Ao(t2), Io(e2) && e2.constructor === t2)
    return e2;
  var n2 = Ro.f(t2);
  return (0, n2.resolve)(e2), n2.promise;
};
var ni = function(t2, e2) {
  var n2 = Co.console;
  n2 && n2.error && (arguments.length === 1 ? n2.error(t2) : n2.error(t2, e2));
};
var ri = So;
var oi = function(t2) {
  try {
    return { error: false, value: t2() };
  } catch (t3) {
    return { error: true, value: t3 };
  }
};
var ii = Ft;
var ai = Ce;
var ci = No;
var ui = Cr;
var fi = bn;
var si = In("species");
var li = "Promise";
var pi = ii.get;
var hi = ii.set;
var vi = ii.getterFor(li);
var di = $o && $o.prototype;
var yi = $o;
var gi = di;
var mi = Jo.TypeError;
var bi = Jo.document;
var wi = Jo.process;
var ji = ri.f;
var xi = ji;
var Oi = !!(bi && bi.createEvent && Jo.dispatchEvent);
var Ei = typeof PromiseRejectionEvent == "function";
var Si = false;
var Ti = ai(li, function() {
  var t2 = Xo(yi) !== String(yi);
  if (!t2 && fi === 66)
    return true;
  if (fi >= 51 && /native code/.test(yi))
    return false;
  var e2 = new yi(function(t3) {
    t3(1);
  }), n2 = function(t3) {
    t3(function() {
    }, function() {
    });
  };
  return (e2.constructor = {})[si] = n2, !(Si = e2.then(function() {
  }) instanceof n2) || !t2 && ci && !Ei;
});
var Pi = Ti || !Bo(function(t2) {
  yi.all(t2).catch(function() {
  });
});
var _i = function(t2) {
  var e2;
  return !(!Uo(t2) || typeof (e2 = t2.then) != "function") && e2;
};
var ki = function(t2, e2) {
  if (!t2.notified) {
    t2.notified = true;
    var n2 = t2.reactions;
    ti(function() {
      for (var r2 = t2.value, o2 = t2.state == 1, i2 = 0; n2.length > i2; ) {
        var a2, c2, u2, f2 = n2[i2++], s2 = o2 ? f2.ok : f2.fail, l2 = f2.resolve, p2 = f2.reject, h2 = f2.domain;
        try {
          s2 ? (o2 || (t2.rejection === 2 && Ii(t2), t2.rejection = 1), s2 === true ? a2 = r2 : (h2 && h2.enter(), a2 = s2(r2), h2 && (h2.exit(), u2 = true)), a2 === f2.promise ? p2(mi("Promise-chain cycle")) : (c2 = _i(a2)) ? c2.call(a2, l2, p2) : l2(a2)) : p2(r2);
        } catch (t3) {
          h2 && !u2 && h2.exit(), p2(t3);
        }
      }
      t2.reactions = [], t2.notified = false, e2 && !t2.rejection && Mi(t2);
    });
  }
};
var Li = function(t2, e2, n2) {
  var r2, o2;
  Oi ? ((r2 = bi.createEvent("Event")).promise = e2, r2.reason = n2, r2.initEvent(t2, false, true), Jo.dispatchEvent(r2)) : r2 = { promise: e2, reason: n2 }, !Ei && (o2 = Jo["on" + t2]) ? o2(r2) : t2 === "unhandledrejection" && ni("Unhandled promise rejection", n2);
};
var Mi = function(t2) {
  Zo.call(Jo, function() {
    var e2, n2 = t2.facade, r2 = t2.value;
    if (Ai(t2) && (e2 = oi(function() {
      ui ? wi.emit("unhandledRejection", r2, n2) : Li("unhandledrejection", n2, r2);
    }), t2.rejection = ui || Ai(t2) ? 2 : 1, e2.error))
      throw e2.value;
  });
};
var Ai = function(t2) {
  return t2.rejection !== 1 && !t2.parent;
};
var Ii = function(t2) {
  Zo.call(Jo, function() {
    var e2 = t2.facade;
    ui ? wi.emit("rejectionHandled", e2) : Li("rejectionhandled", e2, t2.value);
  });
};
var Ri = function(t2, e2, n2) {
  return function(r2) {
    t2(e2, r2, n2);
  };
};
var Ci = function(t2, e2, n2) {
  t2.done || (t2.done = true, n2 && (t2 = n2), t2.value = e2, t2.state = 2, ki(t2, true));
};
var Ni = function(t2, e2, n2) {
  if (!t2.done) {
    t2.done = true, n2 && (t2 = n2);
    try {
      if (t2.facade === e2)
        throw mi("Promise can't be resolved itself");
      var r2 = _i(e2);
      r2 ? ti(function() {
        var n3 = { done: false };
        try {
          r2.call(e2, Ri(Ni, n3, t2), Ri(Ci, n3, t2));
        } catch (e3) {
          Ci(n3, e3, t2);
        }
      }) : (t2.value = e2, t2.state = 1, ki(t2, false));
    } catch (e3) {
      Ci({ done: false }, e3, t2);
    }
  }
};
if (Ti && (gi = (yi = function(t2) {
  Qo(this, yi, li), Ko(t2), _o.call(this);
  var e2 = pi(this);
  try {
    t2(Ri(Ni, e2), Ri(Ci, e2));
  } catch (t3) {
    Ci(e2, t3);
  }
}).prototype, (_o = function(t2) {
  hi(this, { type: li, done: false, notified: false, parent: false, reactions: [], rejection: false, state: 0, value: void 0 });
}).prototype = Ho(gi, { then: function(t2, e2) {
  var n2 = vi(this), r2 = ji(Vo(this, yi));
  return r2.ok = typeof t2 != "function" || t2, r2.fail = typeof e2 == "function" && e2, r2.domain = ui ? wi.domain : void 0, n2.parent = true, n2.reactions.push(r2), n2.state != 0 && ki(n2, false), r2.promise;
}, catch: function(t2) {
  return this.then(void 0, t2);
} }), ko = function() {
  var t2 = new _o(), e2 = pi(t2);
  this.promise = t2, this.resolve = Ri(Ni, e2), this.reject = Ri(Ci, e2);
}, ri.f = ji = function(t2) {
  return t2 === yi || t2 === Lo ? new ko(t2) : xi(t2);
}, typeof $o == "function" && di !== Object.prototype)) {
  Mo = di.then, Si || (Go(di, "then", function(t2, e2) {
    var n2 = this;
    return new yi(function(t3, e3) {
      Mo.call(n2, t3, e3);
    }).then(t2, e2);
  }, { unsafe: true }), Go(di, "catch", gi.catch, { unsafe: true }));
  try {
    delete di.constructor;
  } catch (t2) {
  }
  zo && zo(di, gi);
}
Fo({ global: true, wrap: true, forced: Ti }, { Promise: yi }), Wo(yi, li, false), qo(li), Lo = Do(li), Fo({ target: li, stat: true, forced: Ti }, { reject: function(t2) {
  var e2 = ji(this);
  return e2.reject.call(void 0, t2), e2.promise;
} }), Fo({ target: li, stat: true, forced: Ti }, { resolve: function(t2) {
  return ei(this, t2);
} }), Fo({ target: li, stat: true, forced: Pi }, { all: function(t2) {
  var e2 = this, n2 = ji(e2), r2 = n2.resolve, o2 = n2.reject, i2 = oi(function() {
    var n3 = Ko(e2.resolve), i3 = [], a2 = 0, c2 = 1;
    Yo(t2, function(t3) {
      var u2 = a2++, f2 = false;
      i3.push(void 0), c2++, n3.call(e2, t3).then(function(t4) {
        f2 || (f2 = true, i3[u2] = t4, --c2 || r2(i3));
      }, o2);
    }), --c2 || r2(i3);
  });
  return i2.error && o2(i2.value), n2.promise;
}, race: function(t2) {
  var e2 = this, n2 = ji(e2), r2 = n2.reject, o2 = oi(function() {
    var o3 = Ko(e2.resolve);
    Yo(t2, function(t3) {
      o3.call(e2, t3).then(n2.resolve, r2);
    });
  });
  return o2.error && r2(o2.value), n2.promise;
} });
var Fi;
var Ji = H;
var Di = W;
var $i = Ue;
var Gi = i ? Object.defineProperties : function(t2, e2) {
  Di(t2);
  for (var n2, r2 = $i(e2), o2 = r2.length, i2 = 0; o2 > i2; )
    Ji.f(t2, n2 = r2[i2++], e2[n2]);
  return t2;
};
var Hi = W;
var zi = Gi;
var Wi = ye;
var qi = Ot;
var Ui = Ir;
var Ki = M;
var Qi = xt("IE_PROTO");
var Xi = function() {
};
var Yi = function(t2) {
  return "<script>" + t2 + "<\/script>";
};
var Bi = function() {
  try {
    Fi = document.domain && new ActiveXObject("htmlfile");
  } catch (t3) {
  }
  var t2, e2;
  Bi = Fi ? function(t3) {
    t3.write(Yi("")), t3.close();
    var e3 = t3.parentWindow.Object;
    return t3 = null, e3;
  }(Fi) : ((e2 = Ki("iframe")).style.display = "none", Ui.appendChild(e2), e2.src = String("javascript:"), (t2 = e2.contentWindow.document).open(), t2.write(Yi("document.F=Object")), t2.close(), t2.F);
  for (var n2 = Wi.length; n2--; )
    delete Bi.prototype[Wi[n2]];
  return Bi();
};
qi[Qi] = true;
var Vi = Object.create || function(t2, e2) {
  var n2;
  return t2 !== null ? (Xi.prototype = Hi(t2), n2 = new Xi(), Xi.prototype = null, n2[Qi] = t2) : n2 = Bi(), e2 === void 0 ? n2 : zi(n2, e2);
};
var Zi = H;
var ta = In("unscopables");
var ea = Array.prototype;
ea[ta] == null && Zi.f(ea, ta, { configurable: true, value: Vi(null) });
var na = se.includes;
var ra = function(t2) {
  ea[ta][t2] = true;
};
ze({ target: "Array", proto: true }, { includes: function(t2) {
  return na(this, t2, arguments.length > 1 ? arguments[1] : void 0);
} }), ra("includes");
var oa = w;
var ia = p;
var aa = In("match");
var ca = function(t2) {
  var e2;
  return oa(t2) && ((e2 = t2[aa]) !== void 0 ? !!e2 : ia(t2) == "RegExp");
};
var ua = In("match");
var fa = function(t2) {
  if (ca(t2))
    throw TypeError("The method doesn't accept regular expressions");
  return t2;
};
var sa = y;
ze({ target: "String", proto: true, forced: !function(t2) {
  var e2 = /./;
  try {
    "/./"[t2](e2);
  } catch (n2) {
    try {
      return e2[ua] = false, "/./"[t2](e2);
    } catch (t3) {
    }
  }
  return false;
}("includes") }, { includes: function(t2) {
  return !!~String(sa(this)).indexOf(fa(t2), arguments.length > 1 ? arguments[1] : void 0);
} });
var la = function() {
  var t2, e2 = { messageStyle: "none", tex2jax: { inlineMath: [["$", "$"], ["\\(", "\\)"]], skipTags: ["script", "noscript", "style", "textarea", "pre"] }, skipStartupTypeset: true };
  return { id: "mathjax2", init: function(n2) {
    var r2 = (t2 = n2).getConfig().mathjax2 || t2.getConfig().math || {}, o2 = on(on({}, e2), r2), i2 = (o2.mathjax || "https://cdn.jsdelivr.net/npm/mathjax@2/MathJax.js") + "?config=" + (o2.config || "TeX-AMS_HTML-full");
    o2.tex2jax = on(on({}, e2.tex2jax), r2.tex2jax), o2.mathjax = o2.config = null, function(t3, e3) {
      var n3 = this, r3 = document.querySelector("head"), o3 = document.createElement("script");
      o3.type = "text/javascript", o3.src = t3;
      var i3 = function() {
        typeof e3 == "function" && (e3.call(), e3 = null);
      };
      o3.onload = i3, o3.onreadystatechange = function() {
        n3.readyState === "loaded" && i3();
      }, r3.appendChild(o3);
    }(i2, function() {
      MathJax.Hub.Config(o2), MathJax.Hub.Queue(["Typeset", MathJax.Hub, t2.getRevealElement()]), MathJax.Hub.Queue(t2.layout), t2.on("slidechanged", function(t3) {
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, t3.currentSlide]);
      });
    });
  } };
};
var pa = la;
var ha = Plugin = Object.assign(pa(), { KaTeX: function() {
  var t2, e2 = { version: "latest", delimiters: [{ left: "$$", right: "$$", display: true }, { left: "$", right: "$", display: false }, { left: "\\(", right: "\\)", display: false }, { left: "\\[", right: "\\]", display: true }], ignoredTags: ["script", "noscript", "style", "textarea", "pre"] }, n2 = function(t3) {
    return new Promise(function(e3, n3) {
      var r3 = document.createElement("script");
      r3.type = "text/javascript", r3.onload = e3, r3.onerror = n3, r3.src = t3, document.head.append(r3);
    });
  };
  function r2() {
    return (r2 = cn(regeneratorRuntime.mark(function t3(e3) {
      var r3, o2, i2;
      return regeneratorRuntime.wrap(function(t4) {
        for (; ; )
          switch (t4.prev = t4.next) {
            case 0:
              r3 = ln(e3), t4.prev = 1, r3.s();
            case 3:
              if ((o2 = r3.n()).done) {
                t4.next = 9;
                break;
              }
              return i2 = o2.value, t4.next = 7, n2(i2);
            case 7:
              t4.next = 3;
              break;
            case 9:
              t4.next = 14;
              break;
            case 11:
              t4.prev = 11, t4.t0 = t4.catch(1), r3.e(t4.t0);
            case 14:
              return t4.prev = 14, r3.f(), t4.finish(14);
            case 17:
            case "end":
              return t4.stop();
          }
      }, t3, null, [[1, 11, 14, 17]]);
    }))).apply(this, arguments);
  }
  return { id: "katex", init: function(n3) {
    var o2 = this, i2 = (t2 = n3).getConfig().katex || {}, a2 = on(on({}, e2), i2);
    a2.local, a2.version, a2.extensions;
    var c2 = fn(a2, ["local", "version", "extensions"]), u2 = a2.local || "https://cdn.jsdelivr.net/npm/katex", f2 = a2.local ? "" : "@" + a2.version, s2 = u2 + f2 + "/dist/katex.min.css", l2 = u2 + f2 + "/dist/contrib/mhchem.min.js", p2 = u2 + f2 + "/dist/contrib/auto-render.min.js", h2 = [u2 + f2 + "/dist/katex.min.js"];
    a2.extensions && a2.extensions.includes("mhchem") && h2.push(l2), h2.push(p2);
    var v2, d2, y2 = function() {
      renderMathInElement(n3.getSlidesElement(), c2), t2.layout();
    };
    v2 = s2, (d2 = document.createElement("link")).rel = "stylesheet", d2.href = v2, document.head.appendChild(d2), function(t3) {
      return r2.apply(this, arguments);
    }(h2).then(function() {
      t2.isReady() ? y2() : t2.on("ready", y2.bind(o2));
    });
  } };
}, MathJax2: la, MathJax3: function() {
  var t2 = { tex: { inlineMath: [["$", "$"], ["\\(", "\\)"]] }, options: { skipHtmlTags: ["script", "noscript", "style", "textarea", "pre"] }, startup: { ready: function() {
    MathJax.startup.defaultReady(), MathJax.startup.promise.then(function() {
      Reveal.layout();
    });
  } } };
  return { id: "mathjax3", init: function(e2) {
    var n2 = e2.getConfig().mathjax3 || {}, r2 = on(on({}, t2), n2);
    r2.tex = on(on({}, t2.tex), n2.tex), r2.options = on(on({}, r2.options), t2.options), r2.startup = on(on({}, t2.startup), n2.startup);
    var o2 = r2.mathjax || "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";
    r2.mathjax = null, window.MathJax = r2, function(t3, e3) {
      var n3 = document.createElement("script");
      n3.type = "text/javascript", n3.id = "MathJax-script", n3.src = t3, n3.async = true, n3.onload = function() {
        typeof e3 == "function" && (e3.call(), e3 = null);
      }, document.head.appendChild(n3);
    }(o2, function() {
      Reveal.addEventListener("slidechanged", function(t3) {
        MathJax.typeset();
      });
    });
  } };
} });
var math_esm_default = ha;

// dep:reveal_js_plugin_math_math_esm_js
var reveal_js_plugin_math_math_esm_js_default = math_esm_default;
export {
  reveal_js_plugin_math_math_esm_js_default as default
};
//# sourceMappingURL=reveal_js_plugin_math_math_esm_js.js.map
