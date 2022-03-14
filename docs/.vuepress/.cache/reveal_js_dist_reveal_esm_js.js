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

// dep:reveal_js_dist_reveal_esm_js
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

// node_modules/reveal.js/dist/reveal.esm.js
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
var e = (e2, t2) => {
  for (let i2 in t2)
    e2[i2] = t2[i2];
  return e2;
};
var t = (e2, t2) => Array.from(e2.querySelectorAll(t2));
var i = (e2, t2, i2) => {
  i2 ? e2.classList.add(t2) : e2.classList.remove(t2);
};
var s = (e2) => {
  if (typeof e2 == "string") {
    if (e2 === "null")
      return null;
    if (e2 === "true")
      return true;
    if (e2 === "false")
      return false;
    if (e2.match(/^-?[\d\.]+$/))
      return parseFloat(e2);
  }
  return e2;
};
var n = (e2, t2) => {
  e2.style.transform = t2;
};
var a = (e2, t2) => {
  let i2 = e2.matches || e2.matchesSelector || e2.msMatchesSelector;
  return !(!i2 || !i2.call(e2, t2));
};
var r = (e2, t2) => {
  if (typeof e2.closest == "function")
    return e2.closest(t2);
  for (; e2; ) {
    if (a(e2, t2))
      return e2;
    e2 = e2.parentNode;
  }
  return null;
};
var o = (e2, t2, i2, s2 = "") => {
  let n2 = e2.querySelectorAll("." + i2);
  for (let t3 = 0; t3 < n2.length; t3++) {
    let i3 = n2[t3];
    if (i3.parentNode === e2)
      return i3;
  }
  let a2 = document.createElement(t2);
  return a2.className = i2, a2.innerHTML = s2, e2.appendChild(a2), a2;
};
var l = (e2) => {
  let t2 = document.createElement("style");
  return t2.type = "text/css", e2 && e2.length > 0 && (t2.styleSheet ? t2.styleSheet.cssText = e2 : t2.appendChild(document.createTextNode(e2))), document.head.appendChild(t2), t2;
};
var d = () => {
  let e2 = {};
  location.search.replace(/[A-Z0-9]+?=([\w\.%-]*)/gi, (t2) => {
    e2[t2.split("=").shift()] = t2.split("=").pop();
  });
  for (let t2 in e2) {
    let i2 = e2[t2];
    e2[t2] = s(unescape(i2));
  }
  return e2.dependencies !== void 0 && delete e2.dependencies, e2;
};
var c = (e2, t2 = 0) => {
  if (e2) {
    let i2, s2 = e2.style.height;
    return e2.style.height = "0px", e2.parentNode.style.height = "auto", i2 = t2 - e2.parentNode.offsetHeight, e2.style.height = s2 + "px", e2.parentNode.style.removeProperty("height"), i2;
  }
  return t2;
};
var h = { mp4: "video/mp4", m4a: "video/mp4", ogv: "video/ogg", mpeg: "video/mpeg", webm: "video/webm" };
var u = navigator.userAgent;
var g = document.createElement("div");
var v = /(iphone|ipod|ipad|android)/gi.test(u) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
var p = /chrome/i.test(u) && !/edge/i.test(u);
var m = /android/gi.test(u);
var f = "zoom" in g.style && !v && (p || /Version\/[\d\.]+.*Safari/.test(u));
var b = {};
Object.defineProperty(b, "__esModule", { value: true });
var y = Object.assign || function(e2) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var i2 = arguments[t2];
    for (var s2 in i2)
      Object.prototype.hasOwnProperty.call(i2, s2) && (e2[s2] = i2[s2]);
  }
  return e2;
};
var w = b.default = function(e2) {
  if (e2) {
    var t2 = function(e3) {
      return [].slice.call(e3);
    }, i2 = 0, s2 = 1, n2 = 2, a2 = 3, r2 = [], o2 = null, l2 = "requestAnimationFrame" in e2 ? function() {
      e2.cancelAnimationFrame(o2), o2 = e2.requestAnimationFrame(function() {
        return c2(r2.filter(function(e3) {
          return e3.dirty && e3.active;
        }));
      });
    } : function() {
    }, d2 = function(e3) {
      return function() {
        r2.forEach(function(t3) {
          return t3.dirty = e3;
        }), l2();
      };
    }, c2 = function(e3) {
      e3.filter(function(e4) {
        return !e4.styleComputed;
      }).forEach(function(e4) {
        e4.styleComputed = v2(e4);
      }), e3.filter(p2).forEach(m2);
      var t3 = e3.filter(g2);
      t3.forEach(u2), t3.forEach(function(e4) {
        m2(e4), h2(e4);
      }), t3.forEach(f2);
    }, h2 = function(e3) {
      return e3.dirty = i2;
    }, u2 = function(e3) {
      e3.availableWidth = e3.element.parentNode.clientWidth, e3.currentWidth = e3.element.scrollWidth, e3.previousFontSize = e3.currentFontSize, e3.currentFontSize = Math.min(Math.max(e3.minSize, e3.availableWidth / e3.currentWidth * e3.previousFontSize), e3.maxSize), e3.whiteSpace = e3.multiLine && e3.currentFontSize === e3.minSize ? "normal" : "nowrap";
    }, g2 = function(e3) {
      return e3.dirty !== n2 || e3.dirty === n2 && e3.element.parentNode.clientWidth !== e3.availableWidth;
    }, v2 = function(t3) {
      var i3 = e2.getComputedStyle(t3.element, null);
      t3.currentFontSize = parseFloat(i3.getPropertyValue("font-size")), t3.display = i3.getPropertyValue("display"), t3.whiteSpace = i3.getPropertyValue("white-space");
    }, p2 = function(e3) {
      var t3 = false;
      return !e3.preStyleTestCompleted && (/inline-/.test(e3.display) || (t3 = true, e3.display = "inline-block"), e3.whiteSpace !== "nowrap" && (t3 = true, e3.whiteSpace = "nowrap"), e3.preStyleTestCompleted = true, t3);
    }, m2 = function(e3) {
      e3.element.style.whiteSpace = e3.whiteSpace, e3.element.style.display = e3.display, e3.element.style.fontSize = e3.currentFontSize + "px";
    }, f2 = function(e3) {
      e3.element.dispatchEvent(new CustomEvent("fit", { detail: { oldValue: e3.previousFontSize, newValue: e3.currentFontSize, scaleFactor: e3.currentFontSize / e3.previousFontSize } }));
    }, b2 = function(e3, t3) {
      return function() {
        e3.dirty = t3, e3.active && l2();
      };
    }, w2 = function(e3) {
      return function() {
        r2 = r2.filter(function(t3) {
          return t3.element !== e3.element;
        }), e3.observeMutations && e3.observer.disconnect(), e3.element.style.whiteSpace = e3.originalStyle.whiteSpace, e3.element.style.display = e3.originalStyle.display, e3.element.style.fontSize = e3.originalStyle.fontSize;
      };
    }, E2 = function(e3) {
      return function() {
        e3.active || (e3.active = true, l2());
      };
    }, R2 = function(e3) {
      return function() {
        return e3.active = false;
      };
    }, A2 = function(e3) {
      e3.observeMutations && (e3.observer = new MutationObserver(b2(e3, s2)), e3.observer.observe(e3.element, e3.observeMutations));
    }, S2 = { minSize: 16, maxSize: 512, multiLine: true, observeMutations: "MutationObserver" in e2 && { subtree: true, childList: true, characterData: true } }, k2 = null, L2 = function() {
      e2.clearTimeout(k2), k2 = e2.setTimeout(d2(n2), P2.observeWindowDelay);
    }, x2 = ["resize", "orientationchange"];
    return Object.defineProperty(P2, "observeWindow", { set: function(t3) {
      var i3 = (t3 ? "add" : "remove") + "EventListener";
      x2.forEach(function(t4) {
        e2[i3](t4, L2);
      });
    } }), P2.observeWindow = true, P2.observeWindowDelay = 100, P2.fitAll = d2(a2), P2;
  }
  function C2(e3, t3) {
    var i3 = y({}, S2, t3), s3 = e3.map(function(e4) {
      var t4 = y({}, i3, { element: e4, active: true });
      return function(e5) {
        e5.originalStyle = { whiteSpace: e5.element.style.whiteSpace, display: e5.element.style.display, fontSize: e5.element.style.fontSize }, A2(e5), e5.newbie = true, e5.dirty = true, r2.push(e5);
      }(t4), { element: e4, fit: b2(t4, a2), unfreeze: E2(t4), freeze: R2(t4), unsubscribe: w2(t4) };
    });
    return l2(), s3;
  }
  function P2(e3) {
    var i3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return typeof e3 == "string" ? C2(t2(document.querySelectorAll(e3)), i3) : C2([e3], i3)[0];
  }
}(typeof window == "undefined" ? null : window);
var E = class {
  constructor(e2) {
    this.Reveal = e2, this.startEmbeddedIframe = this.startEmbeddedIframe.bind(this);
  }
  shouldPreload(e2) {
    let t2 = this.Reveal.getConfig().preloadIframes;
    return typeof t2 != "boolean" && (t2 = e2.hasAttribute("data-preload")), t2;
  }
  load(e2, i2 = {}) {
    e2.style.display = this.Reveal.getConfig().display, t(e2, "img[data-src], video[data-src], audio[data-src], iframe[data-src]").forEach((e3) => {
      (e3.tagName !== "IFRAME" || this.shouldPreload(e3)) && (e3.setAttribute("src", e3.getAttribute("data-src")), e3.setAttribute("data-lazy-loaded", ""), e3.removeAttribute("data-src"));
    }), t(e2, "video, audio").forEach((e3) => {
      let i3 = 0;
      t(e3, "source[data-src]").forEach((e4) => {
        e4.setAttribute("src", e4.getAttribute("data-src")), e4.removeAttribute("data-src"), e4.setAttribute("data-lazy-loaded", ""), i3 += 1;
      }), v && e3.tagName === "VIDEO" && e3.setAttribute("playsinline", ""), i3 > 0 && e3.load();
    });
    let s2 = e2.slideBackgroundElement;
    if (s2) {
      s2.style.display = "block";
      let t2 = e2.slideBackgroundContentElement, n2 = e2.getAttribute("data-background-iframe");
      if (s2.hasAttribute("data-loaded") === false) {
        s2.setAttribute("data-loaded", "true");
        let a3 = e2.getAttribute("data-background-image"), r2 = e2.getAttribute("data-background-video"), o2 = e2.hasAttribute("data-background-video-loop"), l2 = e2.hasAttribute("data-background-video-muted");
        if (a3)
          /^data:/.test(a3.trim()) ? t2.style.backgroundImage = `url(${a3.trim()})` : t2.style.backgroundImage = a3.split(",").map((e3) => `url(${encodeURI(e3.trim())})`).join(",");
        else if (r2 && !this.Reveal.isSpeakerNotes()) {
          let e3 = document.createElement("video");
          o2 && e3.setAttribute("loop", ""), l2 && (e3.muted = true), v && (e3.muted = true, e3.setAttribute("playsinline", "")), r2.split(",").forEach((t3) => {
            let i3 = ((e4 = "") => h[e4.split(".").pop()])(t3);
            e3.innerHTML += i3 ? `<source src="${t3}" type="${i3}">` : `<source src="${t3}">`;
          }), t2.appendChild(e3);
        } else if (n2 && i2.excludeIframes !== true) {
          let e3 = document.createElement("iframe");
          e3.setAttribute("allowfullscreen", ""), e3.setAttribute("mozallowfullscreen", ""), e3.setAttribute("webkitallowfullscreen", ""), e3.setAttribute("allow", "autoplay"), e3.setAttribute("data-src", n2), e3.style.width = "100%", e3.style.height = "100%", e3.style.maxHeight = "100%", e3.style.maxWidth = "100%", t2.appendChild(e3);
        }
      }
      let a2 = t2.querySelector("iframe[data-src]");
      a2 && this.shouldPreload(s2) && !/autoplay=(1|true|yes)/gi.test(n2) && a2.getAttribute("src") !== n2 && a2.setAttribute("src", n2);
    }
    this.layout(e2);
  }
  layout(e2) {
    Array.from(e2.querySelectorAll(".r-fit-text")).forEach((e3) => {
      w(e3, { minSize: 24, maxSize: 0.8 * this.Reveal.getConfig().height, observeMutations: false, observeWindow: false });
    });
  }
  unload(e2) {
    e2.style.display = "none";
    let i2 = this.Reveal.getSlideBackground(e2);
    i2 && (i2.style.display = "none", t(i2, "iframe[src]").forEach((e3) => {
      e3.removeAttribute("src");
    })), t(e2, "video[data-lazy-loaded][src], audio[data-lazy-loaded][src], iframe[data-lazy-loaded][src]").forEach((e3) => {
      e3.setAttribute("data-src", e3.getAttribute("src")), e3.removeAttribute("src");
    }), t(e2, "video[data-lazy-loaded] source[src], audio source[src]").forEach((e3) => {
      e3.setAttribute("data-src", e3.getAttribute("src")), e3.removeAttribute("src");
    });
  }
  formatEmbeddedContent() {
    let e2 = (e3, i2, s2) => {
      t(this.Reveal.getSlidesElement(), "iframe[" + e3 + '*="' + i2 + '"]').forEach((t2) => {
        let i3 = t2.getAttribute(e3);
        i3 && i3.indexOf(s2) === -1 && t2.setAttribute(e3, i3 + (/\?/.test(i3) ? "&" : "?") + s2);
      });
    };
    e2("src", "youtube.com/embed/", "enablejsapi=1"), e2("data-src", "youtube.com/embed/", "enablejsapi=1"), e2("src", "player.vimeo.com/", "api=1"), e2("data-src", "player.vimeo.com/", "api=1");
  }
  startEmbeddedContent(e2) {
    e2 && !this.Reveal.isSpeakerNotes() && (t(e2, 'img[src$=".gif"]').forEach((e3) => {
      e3.setAttribute("src", e3.getAttribute("src"));
    }), t(e2, "video, audio").forEach((e3) => {
      if (r(e3, ".fragment") && !r(e3, ".fragment.visible"))
        return;
      let t2 = this.Reveal.getConfig().autoPlayMedia;
      if (typeof t2 != "boolean" && (t2 = e3.hasAttribute("data-autoplay") || !!r(e3, ".slide-background")), t2 && typeof e3.play == "function")
        if (e3.readyState > 1)
          this.startEmbeddedMedia({ target: e3 });
        else if (v) {
          let t3 = e3.play();
          t3 && typeof t3.catch == "function" && e3.controls === false && t3.catch(() => {
            e3.controls = true, e3.addEventListener("play", () => {
              e3.controls = false;
            });
          });
        } else
          e3.removeEventListener("loadeddata", this.startEmbeddedMedia), e3.addEventListener("loadeddata", this.startEmbeddedMedia);
    }), t(e2, "iframe[src]").forEach((e3) => {
      r(e3, ".fragment") && !r(e3, ".fragment.visible") || this.startEmbeddedIframe({ target: e3 });
    }), t(e2, "iframe[data-src]").forEach((e3) => {
      r(e3, ".fragment") && !r(e3, ".fragment.visible") || e3.getAttribute("src") !== e3.getAttribute("data-src") && (e3.removeEventListener("load", this.startEmbeddedIframe), e3.addEventListener("load", this.startEmbeddedIframe), e3.setAttribute("src", e3.getAttribute("data-src")));
    }));
  }
  startEmbeddedMedia(e2) {
    let t2 = !!r(e2.target, "html"), i2 = !!r(e2.target, ".present");
    t2 && i2 && (e2.target.currentTime = 0, e2.target.play()), e2.target.removeEventListener("loadeddata", this.startEmbeddedMedia);
  }
  startEmbeddedIframe(e2) {
    let t2 = e2.target;
    if (t2 && t2.contentWindow) {
      let i2 = !!r(e2.target, "html"), s2 = !!r(e2.target, ".present");
      if (i2 && s2) {
        let e3 = this.Reveal.getConfig().autoPlayMedia;
        typeof e3 != "boolean" && (e3 = t2.hasAttribute("data-autoplay") || !!r(t2, ".slide-background")), /youtube\.com\/embed\//.test(t2.getAttribute("src")) && e3 ? t2.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*") : /player\.vimeo\.com\//.test(t2.getAttribute("src")) && e3 ? t2.contentWindow.postMessage('{"method":"play"}', "*") : t2.contentWindow.postMessage("slide:start", "*");
      }
    }
  }
  stopEmbeddedContent(i2, s2 = {}) {
    s2 = e({ unloadIframes: true }, s2), i2 && i2.parentNode && (t(i2, "video, audio").forEach((e2) => {
      e2.hasAttribute("data-ignore") || typeof e2.pause != "function" || (e2.setAttribute("data-paused-by-reveal", ""), e2.pause());
    }), t(i2, "iframe").forEach((e2) => {
      e2.contentWindow && e2.contentWindow.postMessage("slide:stop", "*"), e2.removeEventListener("load", this.startEmbeddedIframe);
    }), t(i2, 'iframe[src*="youtube.com/embed/"]').forEach((e2) => {
      !e2.hasAttribute("data-ignore") && e2.contentWindow && typeof e2.contentWindow.postMessage == "function" && e2.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
    }), t(i2, 'iframe[src*="player.vimeo.com/"]').forEach((e2) => {
      !e2.hasAttribute("data-ignore") && e2.contentWindow && typeof e2.contentWindow.postMessage == "function" && e2.contentWindow.postMessage('{"method":"pause"}', "*");
    }), s2.unloadIframes === true && t(i2, "iframe[data-src]").forEach((e2) => {
      e2.setAttribute("src", "about:blank"), e2.removeAttribute("src");
    }));
  }
};
var R = class {
  constructor(e2) {
    this.Reveal = e2;
  }
  render() {
    this.element = document.createElement("div"), this.element.className = "slide-number", this.Reveal.getRevealElement().appendChild(this.element);
  }
  configure(e2, t2) {
    let i2 = "none";
    e2.slideNumber && !this.Reveal.isPrintingPDF() && (e2.showSlideNumber === "all" || e2.showSlideNumber === "speaker" && this.Reveal.isSpeakerNotes()) && (i2 = "block"), this.element.style.display = i2;
  }
  update() {
    this.Reveal.getConfig().slideNumber && this.element && (this.element.innerHTML = this.getSlideNumber());
  }
  getSlideNumber(e2 = this.Reveal.getCurrentSlide()) {
    let t2, i2 = this.Reveal.getConfig(), s2 = "h.v";
    if (typeof i2.slideNumber == "function")
      t2 = i2.slideNumber(e2);
    else {
      typeof i2.slideNumber == "string" && (s2 = i2.slideNumber), /c/.test(s2) || this.Reveal.getHorizontalSlides().length !== 1 || (s2 = "c");
      let n3 = e2 && e2.dataset.visibility === "uncounted" ? 0 : 1;
      switch (t2 = [], s2) {
        case "c":
          t2.push(this.Reveal.getSlidePastCount(e2) + n3);
          break;
        case "c/t":
          t2.push(this.Reveal.getSlidePastCount(e2) + n3, "/", this.Reveal.getTotalSlides());
          break;
        default:
          let i3 = this.Reveal.getIndices(e2);
          t2.push(i3.h + n3);
          let a2 = s2 === "h/v" ? "/" : ".";
          this.Reveal.isVerticalSlide(e2) && t2.push(a2, i3.v + 1);
      }
    }
    let n2 = "#" + this.Reveal.location.getHash(e2);
    return this.formatNumber(t2[0], t2[1], t2[2], n2);
  }
  formatNumber(e2, t2, i2, s2 = "#" + this.Reveal.location.getHash()) {
    return typeof i2 != "number" || isNaN(i2) ? `<a href="${s2}">
					<span class="slide-number-a">${e2}</span>
					</a>` : `<a href="${s2}">
					<span class="slide-number-a">${e2}</span>
					<span class="slide-number-delimiter">${t2}</span>
					<span class="slide-number-b">${i2}</span>
					</a>`;
  }
  destroy() {
    this.element.remove();
  }
};
var A = (e2) => {
  let t2 = e2.match(/^#([0-9a-f]{3})$/i);
  if (t2 && t2[1])
    return t2 = t2[1], { r: 17 * parseInt(t2.charAt(0), 16), g: 17 * parseInt(t2.charAt(1), 16), b: 17 * parseInt(t2.charAt(2), 16) };
  let i2 = e2.match(/^#([0-9a-f]{6})$/i);
  if (i2 && i2[1])
    return i2 = i2[1], { r: parseInt(i2.substr(0, 2), 16), g: parseInt(i2.substr(2, 2), 16), b: parseInt(i2.substr(4, 2), 16) };
  let s2 = e2.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);
  if (s2)
    return { r: parseInt(s2[1], 10), g: parseInt(s2[2], 10), b: parseInt(s2[3], 10) };
  let n2 = e2.match(/^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\,\s*([\d]+|[\d]*.[\d]+)\s*\)$/i);
  return n2 ? { r: parseInt(n2[1], 10), g: parseInt(n2[2], 10), b: parseInt(n2[3], 10), a: parseFloat(n2[4]) } : null;
};
var S = class {
  constructor(e2) {
    this.Reveal = e2;
  }
  render() {
    this.element = document.createElement("div"), this.element.className = "backgrounds", this.Reveal.getRevealElement().appendChild(this.element);
  }
  create() {
    this.element.innerHTML = "", this.element.classList.add("no-transition"), this.Reveal.getHorizontalSlides().forEach((e2) => {
      let i2 = this.createBackground(e2, this.element);
      t(e2, "section").forEach((e3) => {
        this.createBackground(e3, i2), i2.classList.add("stack");
      });
    }), this.Reveal.getConfig().parallaxBackgroundImage ? (this.element.style.backgroundImage = 'url("' + this.Reveal.getConfig().parallaxBackgroundImage + '")', this.element.style.backgroundSize = this.Reveal.getConfig().parallaxBackgroundSize, this.element.style.backgroundRepeat = this.Reveal.getConfig().parallaxBackgroundRepeat, this.element.style.backgroundPosition = this.Reveal.getConfig().parallaxBackgroundPosition, setTimeout(() => {
      this.Reveal.getRevealElement().classList.add("has-parallax-background");
    }, 1)) : (this.element.style.backgroundImage = "", this.Reveal.getRevealElement().classList.remove("has-parallax-background"));
  }
  createBackground(e2, t2) {
    let i2 = document.createElement("div");
    i2.className = "slide-background " + e2.className.replace(/present|past|future/, "");
    let s2 = document.createElement("div");
    return s2.className = "slide-background-content", i2.appendChild(s2), t2.appendChild(i2), e2.slideBackgroundElement = i2, e2.slideBackgroundContentElement = s2, this.sync(e2), i2;
  }
  sync(e2) {
    const t2 = e2.slideBackgroundElement, i2 = e2.slideBackgroundContentElement, s2 = { background: e2.getAttribute("data-background"), backgroundSize: e2.getAttribute("data-background-size"), backgroundImage: e2.getAttribute("data-background-image"), backgroundVideo: e2.getAttribute("data-background-video"), backgroundIframe: e2.getAttribute("data-background-iframe"), backgroundColor: e2.getAttribute("data-background-color"), backgroundRepeat: e2.getAttribute("data-background-repeat"), backgroundPosition: e2.getAttribute("data-background-position"), backgroundTransition: e2.getAttribute("data-background-transition"), backgroundOpacity: e2.getAttribute("data-background-opacity") }, n2 = e2.hasAttribute("data-preload");
    e2.classList.remove("has-dark-background"), e2.classList.remove("has-light-background"), t2.removeAttribute("data-loaded"), t2.removeAttribute("data-background-hash"), t2.removeAttribute("data-background-size"), t2.removeAttribute("data-background-transition"), t2.style.backgroundColor = "", i2.style.backgroundSize = "", i2.style.backgroundRepeat = "", i2.style.backgroundPosition = "", i2.style.backgroundImage = "", i2.style.opacity = "", i2.innerHTML = "", s2.background && (/^(http|file|\/\/)/gi.test(s2.background) || /\.(svg|png|jpg|jpeg|gif|bmp)([?#\s]|$)/gi.test(s2.background) ? e2.setAttribute("data-background-image", s2.background) : t2.style.background = s2.background), (s2.background || s2.backgroundColor || s2.backgroundImage || s2.backgroundVideo || s2.backgroundIframe) && t2.setAttribute("data-background-hash", s2.background + s2.backgroundSize + s2.backgroundImage + s2.backgroundVideo + s2.backgroundIframe + s2.backgroundColor + s2.backgroundRepeat + s2.backgroundPosition + s2.backgroundTransition + s2.backgroundOpacity), s2.backgroundSize && t2.setAttribute("data-background-size", s2.backgroundSize), s2.backgroundColor && (t2.style.backgroundColor = s2.backgroundColor), s2.backgroundTransition && t2.setAttribute("data-background-transition", s2.backgroundTransition), n2 && t2.setAttribute("data-preload", ""), s2.backgroundSize && (i2.style.backgroundSize = s2.backgroundSize), s2.backgroundRepeat && (i2.style.backgroundRepeat = s2.backgroundRepeat), s2.backgroundPosition && (i2.style.backgroundPosition = s2.backgroundPosition), s2.backgroundOpacity && (i2.style.opacity = s2.backgroundOpacity);
    let a2 = s2.backgroundColor;
    if (!a2 || !A(a2)) {
      let e3 = window.getComputedStyle(t2);
      e3 && e3.backgroundColor && (a2 = e3.backgroundColor);
    }
    if (a2) {
      const t3 = A(a2);
      t3 && t3.a !== 0 && (typeof (r2 = a2) == "string" && (r2 = A(r2)), (r2 ? (299 * r2.r + 587 * r2.g + 114 * r2.b) / 1e3 : null) < 128 ? e2.classList.add("has-dark-background") : e2.classList.add("has-light-background"));
    }
    var r2;
  }
  update(e2 = false) {
    let i2 = this.Reveal.getCurrentSlide(), s2 = this.Reveal.getIndices(), n2 = null, a2 = this.Reveal.getConfig().rtl ? "future" : "past", r2 = this.Reveal.getConfig().rtl ? "past" : "future";
    if (Array.from(this.element.childNodes).forEach((i3, o2) => {
      i3.classList.remove("past", "present", "future"), o2 < s2.h ? i3.classList.add(a2) : o2 > s2.h ? i3.classList.add(r2) : (i3.classList.add("present"), n2 = i3), (e2 || o2 === s2.h) && t(i3, ".slide-background").forEach((e3, t2) => {
        e3.classList.remove("past", "present", "future"), t2 < s2.v ? e3.classList.add("past") : t2 > s2.v ? e3.classList.add("future") : (e3.classList.add("present"), o2 === s2.h && (n2 = e3));
      });
    }), this.previousBackground && this.Reveal.slideContent.stopEmbeddedContent(this.previousBackground, { unloadIframes: !this.Reveal.slideContent.shouldPreload(this.previousBackground) }), n2) {
      this.Reveal.slideContent.startEmbeddedContent(n2);
      let e3 = n2.querySelector(".slide-background-content");
      if (e3) {
        let t3 = e3.style.backgroundImage || "";
        /\.gif/i.test(t3) && (e3.style.backgroundImage = "", window.getComputedStyle(e3).opacity, e3.style.backgroundImage = t3);
      }
      let t2 = this.previousBackground ? this.previousBackground.getAttribute("data-background-hash") : null, i3 = n2.getAttribute("data-background-hash");
      i3 && i3 === t2 && n2 !== this.previousBackground && this.element.classList.add("no-transition"), this.previousBackground = n2;
    }
    i2 && ["has-light-background", "has-dark-background"].forEach((e3) => {
      i2.classList.contains(e3) ? this.Reveal.getRevealElement().classList.add(e3) : this.Reveal.getRevealElement().classList.remove(e3);
    }, this), setTimeout(() => {
      this.element.classList.remove("no-transition");
    }, 1);
  }
  updateParallax() {
    let e2 = this.Reveal.getIndices();
    if (this.Reveal.getConfig().parallaxBackgroundImage) {
      let t2, i2, s2 = this.Reveal.getHorizontalSlides(), n2 = this.Reveal.getVerticalSlides(), a2 = this.element.style.backgroundSize.split(" ");
      a2.length === 1 ? t2 = i2 = parseInt(a2[0], 10) : (t2 = parseInt(a2[0], 10), i2 = parseInt(a2[1], 10));
      let r2, o2, l2 = this.element.offsetWidth, d2 = s2.length;
      r2 = typeof this.Reveal.getConfig().parallaxBackgroundHorizontal == "number" ? this.Reveal.getConfig().parallaxBackgroundHorizontal : d2 > 1 ? (t2 - l2) / (d2 - 1) : 0, o2 = r2 * e2.h * -1;
      let c2, h2, u2 = this.element.offsetHeight, g2 = n2.length;
      c2 = typeof this.Reveal.getConfig().parallaxBackgroundVertical == "number" ? this.Reveal.getConfig().parallaxBackgroundVertical : (i2 - u2) / (g2 - 1), h2 = g2 > 0 ? c2 * e2.v : 0, this.element.style.backgroundPosition = o2 + "px " + -h2 + "px";
    }
  }
  destroy() {
    this.element.remove();
  }
};
var k = /registerPlugin|registerKeyboardShortcut|addKeyBinding|addEventListener/;
var L = /fade-(down|up|right|left|out|in-then-out|in-then-semi-out)|semi-fade-out|current-visible|shrink|grow/;
var x = 0;
var C = class {
  constructor(e2) {
    this.Reveal = e2;
  }
  run(e2, t2) {
    this.reset();
    let i2 = this.Reveal.getSlides(), s2 = i2.indexOf(t2), n2 = i2.indexOf(e2);
    if (e2.hasAttribute("data-auto-animate") && t2.hasAttribute("data-auto-animate") && e2.getAttribute("data-auto-animate-id") === t2.getAttribute("data-auto-animate-id") && !(s2 > n2 ? t2 : e2).hasAttribute("data-auto-animate-restart")) {
      this.autoAnimateStyleSheet = this.autoAnimateStyleSheet || l();
      let i3 = this.getAutoAnimateOptions(t2);
      e2.dataset.autoAnimate = "pending", t2.dataset.autoAnimate = "pending", i3.slideDirection = s2 > n2 ? "forward" : "backward";
      let a2 = this.getAutoAnimatableElements(e2, t2).map((e3) => this.autoAnimateElements(e3.from, e3.to, e3.options || {}, i3, x++));
      if (t2.dataset.autoAnimateUnmatched !== "false" && this.Reveal.getConfig().autoAnimateUnmatched === true) {
        let e3 = 0.8 * i3.duration, s3 = 0.2 * i3.duration;
        this.getUnmatchedAutoAnimateElements(t2).forEach((e4) => {
          let t3 = this.getAutoAnimateOptions(e4, i3), s4 = "unmatched";
          t3.duration === i3.duration && t3.delay === i3.delay || (s4 = "unmatched-" + x++, a2.push(`[data-auto-animate="running"] [data-auto-animate-target="${s4}"] { transition: opacity ${t3.duration}s ease ${t3.delay}s; }`)), e4.dataset.autoAnimateTarget = s4;
        }, this), a2.push(`[data-auto-animate="running"] [data-auto-animate-target="unmatched"] { transition: opacity ${e3}s ease ${s3}s; }`);
      }
      this.autoAnimateStyleSheet.innerHTML = a2.join(""), requestAnimationFrame(() => {
        this.autoAnimateStyleSheet && (getComputedStyle(this.autoAnimateStyleSheet).fontWeight, t2.dataset.autoAnimate = "running");
      }), this.Reveal.dispatchEvent({ type: "autoanimate", data: { fromSlide: e2, toSlide: t2, sheet: this.autoAnimateStyleSheet } });
    }
  }
  reset() {
    t(this.Reveal.getRevealElement(), '[data-auto-animate]:not([data-auto-animate=""])').forEach((e2) => {
      e2.dataset.autoAnimate = "";
    }), t(this.Reveal.getRevealElement(), "[data-auto-animate-target]").forEach((e2) => {
      delete e2.dataset.autoAnimateTarget;
    }), this.autoAnimateStyleSheet && this.autoAnimateStyleSheet.parentNode && (this.autoAnimateStyleSheet.parentNode.removeChild(this.autoAnimateStyleSheet), this.autoAnimateStyleSheet = null);
  }
  autoAnimateElements(e2, t2, i2, s2, n2) {
    e2.dataset.autoAnimateTarget = "", t2.dataset.autoAnimateTarget = n2;
    let a2 = this.getAutoAnimateOptions(t2, s2);
    i2.delay !== void 0 && (a2.delay = i2.delay), i2.duration !== void 0 && (a2.duration = i2.duration), i2.easing !== void 0 && (a2.easing = i2.easing);
    let r2 = this.getAutoAnimatableProperties("from", e2, i2), o2 = this.getAutoAnimatableProperties("to", t2, i2);
    if (t2.classList.contains("fragment") && (delete o2.styles.opacity, e2.classList.contains("fragment"))) {
      (e2.className.match(L) || [""])[0] === (t2.className.match(L) || [""])[0] && s2.slideDirection === "forward" && t2.classList.add("visible", "disabled");
    }
    if (i2.translate !== false || i2.scale !== false) {
      let e3 = this.Reveal.getScale(), t3 = { x: (r2.x - o2.x) / e3, y: (r2.y - o2.y) / e3, scaleX: r2.width / o2.width, scaleY: r2.height / o2.height };
      t3.x = Math.round(1e3 * t3.x) / 1e3, t3.y = Math.round(1e3 * t3.y) / 1e3, t3.scaleX = Math.round(1e3 * t3.scaleX) / 1e3, t3.scaleX = Math.round(1e3 * t3.scaleX) / 1e3;
      let s3 = i2.translate !== false && (t3.x !== 0 || t3.y !== 0), n3 = i2.scale !== false && (t3.scaleX !== 0 || t3.scaleY !== 0);
      if (s3 || n3) {
        let e4 = [];
        s3 && e4.push(`translate(${t3.x}px, ${t3.y}px)`), n3 && e4.push(`scale(${t3.scaleX}, ${t3.scaleY})`), r2.styles.transform = e4.join(" "), r2.styles["transform-origin"] = "top left", o2.styles.transform = "none";
      }
    }
    for (let e3 in o2.styles) {
      const t3 = o2.styles[e3], i3 = r2.styles[e3];
      t3 === i3 ? delete o2.styles[e3] : (t3.explicitValue === true && (o2.styles[e3] = t3.value), i3.explicitValue === true && (r2.styles[e3] = i3.value));
    }
    let l2 = "", d2 = Object.keys(o2.styles);
    if (d2.length > 0) {
      r2.styles.transition = "none", o2.styles.transition = `all ${a2.duration}s ${a2.easing} ${a2.delay}s`, o2.styles["transition-property"] = d2.join(", "), o2.styles["will-change"] = d2.join(", "), l2 = '[data-auto-animate-target="' + n2 + '"] {' + Object.keys(r2.styles).map((e3) => e3 + ": " + r2.styles[e3] + " !important;").join("") + '}[data-auto-animate="running"] [data-auto-animate-target="' + n2 + '"] {' + Object.keys(o2.styles).map((e3) => e3 + ": " + o2.styles[e3] + " !important;").join("") + "}";
    }
    return l2;
  }
  getAutoAnimateOptions(t2, i2) {
    let s2 = { easing: this.Reveal.getConfig().autoAnimateEasing, duration: this.Reveal.getConfig().autoAnimateDuration, delay: 0 };
    if (s2 = e(s2, i2), t2.parentNode) {
      let e2 = r(t2.parentNode, "[data-auto-animate-target]");
      e2 && (s2 = this.getAutoAnimateOptions(e2, s2));
    }
    return t2.dataset.autoAnimateEasing && (s2.easing = t2.dataset.autoAnimateEasing), t2.dataset.autoAnimateDuration && (s2.duration = parseFloat(t2.dataset.autoAnimateDuration)), t2.dataset.autoAnimateDelay && (s2.delay = parseFloat(t2.dataset.autoAnimateDelay)), s2;
  }
  getAutoAnimatableProperties(e2, t2, i2) {
    let s2 = this.Reveal.getConfig(), n2 = { styles: [] };
    if (i2.translate !== false || i2.scale !== false) {
      let e3;
      if (typeof i2.measure == "function")
        e3 = i2.measure(t2);
      else if (s2.center)
        e3 = t2.getBoundingClientRect();
      else {
        let i3 = this.Reveal.getScale();
        e3 = { x: t2.offsetLeft * i3, y: t2.offsetTop * i3, width: t2.offsetWidth * i3, height: t2.offsetHeight * i3 };
      }
      n2.x = e3.x, n2.y = e3.y, n2.width = e3.width, n2.height = e3.height;
    }
    const a2 = getComputedStyle(t2);
    return (i2.styles || s2.autoAnimateStyles).forEach((t3) => {
      let i3;
      typeof t3 == "string" && (t3 = { property: t3 }), i3 = t3.from !== void 0 && e2 === "from" ? { value: t3.from, explicitValue: true } : t3.to !== void 0 && e2 === "to" ? { value: t3.to, explicitValue: true } : a2[t3.property], i3 !== "" && (n2.styles[t3.property] = i3);
    }), n2;
  }
  getAutoAnimatableElements(e2, t2) {
    let i2 = (typeof this.Reveal.getConfig().autoAnimateMatcher == "function" ? this.Reveal.getConfig().autoAnimateMatcher : this.getAutoAnimatePairs).call(this, e2, t2), s2 = [];
    return i2.filter((e3, t3) => {
      if (s2.indexOf(e3.to) === -1)
        return s2.push(e3.to), true;
    });
  }
  getAutoAnimatePairs(e2, t2) {
    let i2 = [];
    const s2 = "h1, h2, h3, h4, h5, h6, p, li";
    return this.findAutoAnimateMatches(i2, e2, t2, "[data-id]", (e3) => e3.nodeName + ":::" + e3.getAttribute("data-id")), this.findAutoAnimateMatches(i2, e2, t2, s2, (e3) => e3.nodeName + ":::" + e3.innerText), this.findAutoAnimateMatches(i2, e2, t2, "img, video, iframe", (e3) => e3.nodeName + ":::" + (e3.getAttribute("src") || e3.getAttribute("data-src"))), this.findAutoAnimateMatches(i2, e2, t2, "pre", (e3) => e3.nodeName + ":::" + e3.innerText), i2.forEach((e3) => {
      a(e3.from, s2) ? e3.options = { scale: false } : a(e3.from, "pre") && (e3.options = { scale: false, styles: ["width", "height"] }, this.findAutoAnimateMatches(i2, e3.from, e3.to, ".hljs .hljs-ln-code", (e4) => e4.textContent, { scale: false, styles: [], measure: this.getLocalBoundingBox.bind(this) }), this.findAutoAnimateMatches(i2, e3.from, e3.to, ".hljs .hljs-ln-line[data-line-number]", (e4) => e4.getAttribute("data-line-number"), { scale: false, styles: ["width"], measure: this.getLocalBoundingBox.bind(this) }));
    }, this), i2;
  }
  getLocalBoundingBox(e2) {
    const t2 = this.Reveal.getScale();
    return { x: Math.round(e2.offsetLeft * t2 * 100) / 100, y: Math.round(e2.offsetTop * t2 * 100) / 100, width: Math.round(e2.offsetWidth * t2 * 100) / 100, height: Math.round(e2.offsetHeight * t2 * 100) / 100 };
  }
  findAutoAnimateMatches(e2, t2, i2, s2, n2, a2) {
    let r2 = {}, o2 = {};
    [].slice.call(t2.querySelectorAll(s2)).forEach((e3, t3) => {
      const i3 = n2(e3);
      typeof i3 == "string" && i3.length && (r2[i3] = r2[i3] || [], r2[i3].push(e3));
    }), [].slice.call(i2.querySelectorAll(s2)).forEach((t3, i3) => {
      const s3 = n2(t3);
      let l2;
      if (o2[s3] = o2[s3] || [], o2[s3].push(t3), r2[s3]) {
        const e3 = o2[s3].length - 1, t4 = r2[s3].length - 1;
        r2[s3][e3] ? (l2 = r2[s3][e3], r2[s3][e3] = null) : r2[s3][t4] && (l2 = r2[s3][t4], r2[s3][t4] = null);
      }
      l2 && e2.push({ from: l2, to: t3, options: a2 });
    });
  }
  getUnmatchedAutoAnimateElements(e2) {
    return [].slice.call(e2.children).reduce((e3, t2) => {
      const i2 = t2.querySelector("[data-auto-animate-target]");
      return t2.hasAttribute("data-auto-animate-target") || i2 || e3.push(t2), t2.querySelector("[data-auto-animate-target]") && (e3 = e3.concat(this.getUnmatchedAutoAnimateElements(t2))), e3;
    }, []);
  }
};
var P = class {
  constructor(e2) {
    this.Reveal = e2;
  }
  configure(e2, t2) {
    e2.fragments === false ? this.disable() : t2.fragments === false && this.enable();
  }
  disable() {
    t(this.Reveal.getSlidesElement(), ".fragment").forEach((e2) => {
      e2.classList.add("visible"), e2.classList.remove("current-fragment");
    });
  }
  enable() {
    t(this.Reveal.getSlidesElement(), ".fragment").forEach((e2) => {
      e2.classList.remove("visible"), e2.classList.remove("current-fragment");
    });
  }
  availableRoutes() {
    let e2 = this.Reveal.getCurrentSlide();
    if (e2 && this.Reveal.getConfig().fragments) {
      let t2 = e2.querySelectorAll(".fragment:not(.disabled)"), i2 = e2.querySelectorAll(".fragment:not(.disabled):not(.visible)");
      return { prev: t2.length - i2.length > 0, next: !!i2.length };
    }
    return { prev: false, next: false };
  }
  sort(e2, t2 = false) {
    e2 = Array.from(e2);
    let i2 = [], s2 = [], n2 = [];
    e2.forEach((e3) => {
      if (e3.hasAttribute("data-fragment-index")) {
        let t3 = parseInt(e3.getAttribute("data-fragment-index"), 10);
        i2[t3] || (i2[t3] = []), i2[t3].push(e3);
      } else
        s2.push([e3]);
    }), i2 = i2.concat(s2);
    let a2 = 0;
    return i2.forEach((e3) => {
      e3.forEach((e4) => {
        n2.push(e4), e4.setAttribute("data-fragment-index", a2);
      }), a2++;
    }), t2 === true ? i2 : n2;
  }
  sortAll() {
    this.Reveal.getHorizontalSlides().forEach((e2) => {
      let i2 = t(e2, "section");
      i2.forEach((e3, t2) => {
        this.sort(e3.querySelectorAll(".fragment"));
      }, this), i2.length === 0 && this.sort(e2.querySelectorAll(".fragment"));
    });
  }
  update(e2, t2) {
    let i2 = { shown: [], hidden: [] }, s2 = this.Reveal.getCurrentSlide();
    if (s2 && this.Reveal.getConfig().fragments && (t2 = t2 || this.sort(s2.querySelectorAll(".fragment"))).length) {
      let n2 = 0;
      if (typeof e2 != "number") {
        let t3 = this.sort(s2.querySelectorAll(".fragment.visible")).pop();
        t3 && (e2 = parseInt(t3.getAttribute("data-fragment-index") || 0, 10));
      }
      Array.from(t2).forEach((t3, s3) => {
        if (t3.hasAttribute("data-fragment-index") && (s3 = parseInt(t3.getAttribute("data-fragment-index"), 10)), n2 = Math.max(n2, s3), s3 <= e2) {
          let n3 = t3.classList.contains("visible");
          t3.classList.add("visible"), t3.classList.remove("current-fragment"), s3 === e2 && (this.Reveal.announceStatus(this.Reveal.getStatusText(t3)), t3.classList.add("current-fragment"), this.Reveal.slideContent.startEmbeddedContent(t3)), n3 || (i2.shown.push(t3), this.Reveal.dispatchEvent({ target: t3, type: "visible", bubbles: false }));
        } else {
          let e3 = t3.classList.contains("visible");
          t3.classList.remove("visible"), t3.classList.remove("current-fragment"), e3 && (this.Reveal.slideContent.stopEmbeddedContent(t3), i2.hidden.push(t3), this.Reveal.dispatchEvent({ target: t3, type: "hidden", bubbles: false }));
        }
      }), e2 = typeof e2 == "number" ? e2 : -1, e2 = Math.max(Math.min(e2, n2), -1), s2.setAttribute("data-fragment", e2);
    }
    return i2;
  }
  sync(e2 = this.Reveal.getCurrentSlide()) {
    return this.sort(e2.querySelectorAll(".fragment"));
  }
  goto(e2, t2 = 0) {
    let i2 = this.Reveal.getCurrentSlide();
    if (i2 && this.Reveal.getConfig().fragments) {
      let s2 = this.sort(i2.querySelectorAll(".fragment:not(.disabled)"));
      if (s2.length) {
        if (typeof e2 != "number") {
          let t3 = this.sort(i2.querySelectorAll(".fragment:not(.disabled).visible")).pop();
          e2 = t3 ? parseInt(t3.getAttribute("data-fragment-index") || 0, 10) : -1;
        }
        e2 += t2;
        let n2 = this.update(e2, s2);
        return n2.hidden.length && this.Reveal.dispatchEvent({ type: "fragmenthidden", data: { fragment: n2.hidden[0], fragments: n2.hidden } }), n2.shown.length && this.Reveal.dispatchEvent({ type: "fragmentshown", data: { fragment: n2.shown[0], fragments: n2.shown } }), this.Reveal.controls.update(), this.Reveal.progress.update(), this.Reveal.getConfig().fragmentInURL && this.Reveal.location.writeURL(), !(!n2.shown.length && !n2.hidden.length);
      }
    }
    return false;
  }
  next() {
    return this.goto(null, 1);
  }
  prev() {
    return this.goto(null, -1);
  }
};
var N = class {
  constructor(e2) {
    this.Reveal = e2, this.active = false, this.onSlideClicked = this.onSlideClicked.bind(this);
  }
  activate() {
    if (this.Reveal.getConfig().overview && !this.isActive()) {
      this.active = true, this.Reveal.getRevealElement().classList.add("overview"), this.Reveal.cancelAutoSlide(), this.Reveal.getSlidesElement().appendChild(this.Reveal.getBackgroundsElement()), t(this.Reveal.getRevealElement(), ".slides section").forEach((e3) => {
        e3.classList.contains("stack") || e3.addEventListener("click", this.onSlideClicked, true);
      });
      const e2 = 70, i2 = this.Reveal.getComputedSlideSize();
      this.overviewSlideWidth = i2.width + e2, this.overviewSlideHeight = i2.height + e2, this.Reveal.getConfig().rtl && (this.overviewSlideWidth = -this.overviewSlideWidth), this.Reveal.updateSlidesVisibility(), this.layout(), this.update(), this.Reveal.layout();
      const s2 = this.Reveal.getIndices();
      this.Reveal.dispatchEvent({ type: "overviewshown", data: { indexh: s2.h, indexv: s2.v, currentSlide: this.Reveal.getCurrentSlide() } });
    }
  }
  layout() {
    this.Reveal.getHorizontalSlides().forEach((e2, i2) => {
      e2.setAttribute("data-index-h", i2), n(e2, "translate3d(" + i2 * this.overviewSlideWidth + "px, 0, 0)"), e2.classList.contains("stack") && t(e2, "section").forEach((e3, t2) => {
        e3.setAttribute("data-index-h", i2), e3.setAttribute("data-index-v", t2), n(e3, "translate3d(0, " + t2 * this.overviewSlideHeight + "px, 0)");
      });
    }), Array.from(this.Reveal.getBackgroundsElement().childNodes).forEach((e2, i2) => {
      n(e2, "translate3d(" + i2 * this.overviewSlideWidth + "px, 0, 0)"), t(e2, ".slide-background").forEach((e3, t2) => {
        n(e3, "translate3d(0, " + t2 * this.overviewSlideHeight + "px, 0)");
      });
    });
  }
  update() {
    const e2 = Math.min(window.innerWidth, window.innerHeight), t2 = Math.max(e2 / 5, 150) / e2, i2 = this.Reveal.getIndices();
    this.Reveal.transformSlides({ overview: ["scale(" + t2 + ")", "translateX(" + -i2.h * this.overviewSlideWidth + "px)", "translateY(" + -i2.v * this.overviewSlideHeight + "px)"].join(" ") });
  }
  deactivate() {
    if (this.Reveal.getConfig().overview) {
      this.active = false, this.Reveal.getRevealElement().classList.remove("overview"), this.Reveal.getRevealElement().classList.add("overview-deactivating"), setTimeout(() => {
        this.Reveal.getRevealElement().classList.remove("overview-deactivating");
      }, 1), this.Reveal.getRevealElement().appendChild(this.Reveal.getBackgroundsElement()), t(this.Reveal.getRevealElement(), ".slides section").forEach((e3) => {
        n(e3, ""), e3.removeEventListener("click", this.onSlideClicked, true);
      }), t(this.Reveal.getBackgroundsElement(), ".slide-background").forEach((e3) => {
        n(e3, "");
      }), this.Reveal.transformSlides({ overview: "" });
      const e2 = this.Reveal.getIndices();
      this.Reveal.slide(e2.h, e2.v), this.Reveal.layout(), this.Reveal.cueAutoSlide(), this.Reveal.dispatchEvent({ type: "overviewhidden", data: { indexh: e2.h, indexv: e2.v, currentSlide: this.Reveal.getCurrentSlide() } });
    }
  }
  toggle(e2) {
    typeof e2 == "boolean" ? e2 ? this.activate() : this.deactivate() : this.isActive() ? this.deactivate() : this.activate();
  }
  isActive() {
    return this.active;
  }
  onSlideClicked(e2) {
    if (this.isActive()) {
      e2.preventDefault();
      let t2 = e2.target;
      for (; t2 && !t2.nodeName.match(/section/gi); )
        t2 = t2.parentNode;
      if (t2 && !t2.classList.contains("disabled") && (this.deactivate(), t2.nodeName.match(/section/gi))) {
        let e3 = parseInt(t2.getAttribute("data-index-h"), 10), i2 = parseInt(t2.getAttribute("data-index-v"), 10);
        this.Reveal.slide(e3, i2);
      }
    }
  }
};
var M = class {
  constructor(e2) {
    this.Reveal = e2, this.shortcuts = {}, this.bindings = {}, this.onDocumentKeyDown = this.onDocumentKeyDown.bind(this), this.onDocumentKeyPress = this.onDocumentKeyPress.bind(this);
  }
  configure(e2, t2) {
    e2.navigationMode === "linear" ? (this.shortcuts["&#8594;  ,  &#8595;  ,  SPACE  ,  N  ,  L  ,  J"] = "Next slide", this.shortcuts["&#8592;  ,  &#8593;  ,  P  ,  H  ,  K"] = "Previous slide") : (this.shortcuts["N  ,  SPACE"] = "Next slide", this.shortcuts["P  ,  Shift SPACE"] = "Previous slide", this.shortcuts["&#8592;  ,  H"] = "Navigate left", this.shortcuts["&#8594;  ,  L"] = "Navigate right", this.shortcuts["&#8593;  ,  K"] = "Navigate up", this.shortcuts["&#8595;  ,  J"] = "Navigate down"), this.shortcuts["Alt + &#8592;/&#8593/&#8594;/&#8595;"] = "Navigate without fragments", this.shortcuts["Shift + &#8592;/&#8593/&#8594;/&#8595;"] = "Jump to first/last slide", this.shortcuts["B  ,  ."] = "Pause", this.shortcuts.F = "Fullscreen", this.shortcuts["ESC, O"] = "Slide overview";
  }
  bind() {
    document.addEventListener("keydown", this.onDocumentKeyDown, false), document.addEventListener("keypress", this.onDocumentKeyPress, false);
  }
  unbind() {
    document.removeEventListener("keydown", this.onDocumentKeyDown, false), document.removeEventListener("keypress", this.onDocumentKeyPress, false);
  }
  addKeyBinding(e2, t2) {
    typeof e2 == "object" && e2.keyCode ? this.bindings[e2.keyCode] = { callback: t2, key: e2.key, description: e2.description } : this.bindings[e2] = { callback: t2, key: null, description: null };
  }
  removeKeyBinding(e2) {
    delete this.bindings[e2];
  }
  triggerKey(e2) {
    this.onDocumentKeyDown({ keyCode: e2 });
  }
  registerKeyboardShortcut(e2, t2) {
    this.shortcuts[e2] = t2;
  }
  getShortcuts() {
    return this.shortcuts;
  }
  getBindings() {
    return this.bindings;
  }
  onDocumentKeyPress(e2) {
    e2.shiftKey && e2.charCode === 63 && this.Reveal.toggleHelp();
  }
  onDocumentKeyDown(e2) {
    let t2 = this.Reveal.getConfig();
    if (typeof t2.keyboardCondition == "function" && t2.keyboardCondition(e2) === false)
      return true;
    if (t2.keyboardCondition === "focused" && !this.Reveal.isFocused())
      return true;
    let i2 = e2.keyCode, s2 = !this.Reveal.isAutoSliding();
    this.Reveal.onUserInput(e2);
    let n2 = document.activeElement && document.activeElement.isContentEditable === true, a2 = document.activeElement && document.activeElement.tagName && /input|textarea/i.test(document.activeElement.tagName), r2 = document.activeElement && document.activeElement.className && /speaker-notes/i.test(document.activeElement.className), o2 = !([32, 37, 38, 39, 40, 78, 80].indexOf(e2.keyCode) !== -1 && e2.shiftKey || e2.altKey) && (e2.shiftKey || e2.altKey || e2.ctrlKey || e2.metaKey);
    if (n2 || a2 || r2 || o2)
      return;
    let l2, d2 = [66, 86, 190, 191];
    if (typeof t2.keyboard == "object")
      for (l2 in t2.keyboard)
        t2.keyboard[l2] === "togglePause" && d2.push(parseInt(l2, 10));
    if (this.Reveal.isPaused() && d2.indexOf(i2) === -1)
      return false;
    let c2 = t2.navigationMode === "linear" || !this.Reveal.hasHorizontalSlides() || !this.Reveal.hasVerticalSlides(), h2 = false;
    if (typeof t2.keyboard == "object") {
      for (l2 in t2.keyboard)
        if (parseInt(l2, 10) === i2) {
          let i3 = t2.keyboard[l2];
          typeof i3 == "function" ? i3.apply(null, [e2]) : typeof i3 == "string" && typeof this.Reveal[i3] == "function" && this.Reveal[i3].call(), h2 = true;
        }
    }
    if (h2 === false) {
      for (l2 in this.bindings)
        if (parseInt(l2, 10) === i2) {
          let t3 = this.bindings[l2].callback;
          typeof t3 == "function" ? t3.apply(null, [e2]) : typeof t3 == "string" && typeof this.Reveal[t3] == "function" && this.Reveal[t3].call(), h2 = true;
        }
    }
    h2 === false && (h2 = true, i2 === 80 || i2 === 33 ? this.Reveal.prev({ skipFragments: e2.altKey }) : i2 === 78 || i2 === 34 ? this.Reveal.next({ skipFragments: e2.altKey }) : i2 === 72 || i2 === 37 ? e2.shiftKey ? this.Reveal.slide(0) : !this.Reveal.overview.isActive() && c2 ? this.Reveal.prev({ skipFragments: e2.altKey }) : this.Reveal.left({ skipFragments: e2.altKey }) : i2 === 76 || i2 === 39 ? e2.shiftKey ? this.Reveal.slide(this.Reveal.getHorizontalSlides().length - 1) : !this.Reveal.overview.isActive() && c2 ? this.Reveal.next({ skipFragments: e2.altKey }) : this.Reveal.right({ skipFragments: e2.altKey }) : i2 === 75 || i2 === 38 ? e2.shiftKey ? this.Reveal.slide(void 0, 0) : !this.Reveal.overview.isActive() && c2 ? this.Reveal.prev({ skipFragments: e2.altKey }) : this.Reveal.up({ skipFragments: e2.altKey }) : i2 === 74 || i2 === 40 ? e2.shiftKey ? this.Reveal.slide(void 0, Number.MAX_VALUE) : !this.Reveal.overview.isActive() && c2 ? this.Reveal.next({ skipFragments: e2.altKey }) : this.Reveal.down({ skipFragments: e2.altKey }) : i2 === 36 ? this.Reveal.slide(0) : i2 === 35 ? this.Reveal.slide(this.Reveal.getHorizontalSlides().length - 1) : i2 === 32 ? (this.Reveal.overview.isActive() && this.Reveal.overview.deactivate(), e2.shiftKey ? this.Reveal.prev({ skipFragments: e2.altKey }) : this.Reveal.next({ skipFragments: e2.altKey })) : i2 === 58 || i2 === 59 || i2 === 66 || i2 === 86 || i2 === 190 || i2 === 191 ? this.Reveal.togglePause() : i2 === 70 ? ((e3) => {
      let t3 = (e3 = e3 || document.documentElement).requestFullscreen || e3.webkitRequestFullscreen || e3.webkitRequestFullScreen || e3.mozRequestFullScreen || e3.msRequestFullscreen;
      t3 && t3.apply(e3);
    })(t2.embedded ? this.Reveal.getViewportElement() : document.documentElement) : i2 === 65 ? t2.autoSlideStoppable && this.Reveal.toggleAutoSlide(s2) : h2 = false), h2 ? e2.preventDefault && e2.preventDefault() : i2 !== 27 && i2 !== 79 || (this.Reveal.closeOverlay() === false && this.Reveal.overview.toggle(), e2.preventDefault && e2.preventDefault()), this.Reveal.cueAutoSlide();
  }
};
var D = class {
  constructor(e2) {
    this.Reveal = e2, this.writeURLTimeout = 0, this.onWindowHashChange = this.onWindowHashChange.bind(this);
  }
  bind() {
    window.addEventListener("hashchange", this.onWindowHashChange, false);
  }
  unbind() {
    window.removeEventListener("hashchange", this.onWindowHashChange, false);
  }
  getIndicesFromHash(e2 = window.location.hash) {
    let t2 = e2.replace(/^#\/?/, ""), i2 = t2.split("/");
    if (/^[0-9]*$/.test(i2[0]) || !t2.length) {
      const e3 = this.Reveal.getConfig();
      let t3, s2 = e3.hashOneBasedIndex ? 1 : 0, n2 = parseInt(i2[0], 10) - s2 || 0, a2 = parseInt(i2[1], 10) - s2 || 0;
      return e3.fragmentInURL && (t3 = parseInt(i2[2], 10), isNaN(t3) && (t3 = void 0)), { h: n2, v: a2, f: t3 };
    }
    {
      let e3, i3;
      /\/[-\d]+$/g.test(t2) && (i3 = parseInt(t2.split("/").pop(), 10), i3 = isNaN(i3) ? void 0 : i3, t2 = t2.split("/").shift());
      try {
        e3 = document.getElementById(decodeURIComponent(t2));
      } catch (e4) {
      }
      if (e3)
        return __spreadProps(__spreadValues({}, this.Reveal.getIndices(e3)), { f: i3 });
    }
    return null;
  }
  readURL() {
    const e2 = this.Reveal.getIndices(), t2 = this.getIndicesFromHash();
    t2 ? t2.h === e2.h && t2.v === e2.v && t2.f === void 0 || this.Reveal.slide(t2.h, t2.v, t2.f) : this.Reveal.slide(e2.h || 0, e2.v || 0);
  }
  writeURL(e2) {
    let t2 = this.Reveal.getConfig(), i2 = this.Reveal.getCurrentSlide();
    if (clearTimeout(this.writeURLTimeout), typeof e2 == "number")
      this.writeURLTimeout = setTimeout(this.writeURL, e2);
    else if (i2) {
      let e3 = this.getHash();
      t2.history ? window.location.hash = e3 : t2.hash && (e3 === "/" ? window.history.replaceState(null, null, window.location.pathname + window.location.search) : window.history.replaceState(null, null, "#" + e3));
    }
  }
  getHash(e2) {
    let t2 = "/", i2 = e2 || this.Reveal.getCurrentSlide(), s2 = i2 ? i2.getAttribute("id") : null;
    s2 && (s2 = encodeURIComponent(s2));
    let n2 = this.Reveal.getIndices(e2);
    if (this.Reveal.getConfig().fragmentInURL || (n2.f = void 0), typeof s2 == "string" && s2.length)
      t2 = "/" + s2, n2.f >= 0 && (t2 += "/" + n2.f);
    else {
      let e3 = this.Reveal.getConfig().hashOneBasedIndex ? 1 : 0;
      (n2.h > 0 || n2.v > 0 || n2.f >= 0) && (t2 += n2.h + e3), (n2.v > 0 || n2.f >= 0) && (t2 += "/" + (n2.v + e3)), n2.f >= 0 && (t2 += "/" + n2.f);
    }
    return t2;
  }
  onWindowHashChange(e2) {
    this.readURL();
  }
};
var I = class {
  constructor(e2) {
    this.Reveal = e2, this.onNavigateLeftClicked = this.onNavigateLeftClicked.bind(this), this.onNavigateRightClicked = this.onNavigateRightClicked.bind(this), this.onNavigateUpClicked = this.onNavigateUpClicked.bind(this), this.onNavigateDownClicked = this.onNavigateDownClicked.bind(this), this.onNavigatePrevClicked = this.onNavigatePrevClicked.bind(this), this.onNavigateNextClicked = this.onNavigateNextClicked.bind(this);
  }
  render() {
    const e2 = this.Reveal.getConfig().rtl, i2 = this.Reveal.getRevealElement();
    this.element = document.createElement("aside"), this.element.className = "controls", this.element.innerHTML = `<button class="navigate-left" aria-label="${e2 ? "next slide" : "previous slide"}"><div class="controls-arrow"></div></button>
			<button class="navigate-right" aria-label="${e2 ? "previous slide" : "next slide"}"><div class="controls-arrow"></div></button>
			<button class="navigate-up" aria-label="above slide"><div class="controls-arrow"></div></button>
			<button class="navigate-down" aria-label="below slide"><div class="controls-arrow"></div></button>`, this.Reveal.getRevealElement().appendChild(this.element), this.controlsLeft = t(i2, ".navigate-left"), this.controlsRight = t(i2, ".navigate-right"), this.controlsUp = t(i2, ".navigate-up"), this.controlsDown = t(i2, ".navigate-down"), this.controlsPrev = t(i2, ".navigate-prev"), this.controlsNext = t(i2, ".navigate-next"), this.controlsRightArrow = this.element.querySelector(".navigate-right"), this.controlsLeftArrow = this.element.querySelector(".navigate-left"), this.controlsDownArrow = this.element.querySelector(".navigate-down");
  }
  configure(e2, t2) {
    this.element.style.display = e2.controls ? "block" : "none", this.element.setAttribute("data-controls-layout", e2.controlsLayout), this.element.setAttribute("data-controls-back-arrows", e2.controlsBackArrows);
  }
  bind() {
    let e2 = ["touchstart", "click"];
    m && (e2 = ["touchstart"]), e2.forEach((e3) => {
      this.controlsLeft.forEach((t2) => t2.addEventListener(e3, this.onNavigateLeftClicked, false)), this.controlsRight.forEach((t2) => t2.addEventListener(e3, this.onNavigateRightClicked, false)), this.controlsUp.forEach((t2) => t2.addEventListener(e3, this.onNavigateUpClicked, false)), this.controlsDown.forEach((t2) => t2.addEventListener(e3, this.onNavigateDownClicked, false)), this.controlsPrev.forEach((t2) => t2.addEventListener(e3, this.onNavigatePrevClicked, false)), this.controlsNext.forEach((t2) => t2.addEventListener(e3, this.onNavigateNextClicked, false));
    });
  }
  unbind() {
    ["touchstart", "click"].forEach((e2) => {
      this.controlsLeft.forEach((t2) => t2.removeEventListener(e2, this.onNavigateLeftClicked, false)), this.controlsRight.forEach((t2) => t2.removeEventListener(e2, this.onNavigateRightClicked, false)), this.controlsUp.forEach((t2) => t2.removeEventListener(e2, this.onNavigateUpClicked, false)), this.controlsDown.forEach((t2) => t2.removeEventListener(e2, this.onNavigateDownClicked, false)), this.controlsPrev.forEach((t2) => t2.removeEventListener(e2, this.onNavigatePrevClicked, false)), this.controlsNext.forEach((t2) => t2.removeEventListener(e2, this.onNavigateNextClicked, false));
    });
  }
  update() {
    let e2 = this.Reveal.availableRoutes();
    [...this.controlsLeft, ...this.controlsRight, ...this.controlsUp, ...this.controlsDown, ...this.controlsPrev, ...this.controlsNext].forEach((e3) => {
      e3.classList.remove("enabled", "fragmented"), e3.setAttribute("disabled", "disabled");
    }), e2.left && this.controlsLeft.forEach((e3) => {
      e3.classList.add("enabled"), e3.removeAttribute("disabled");
    }), e2.right && this.controlsRight.forEach((e3) => {
      e3.classList.add("enabled"), e3.removeAttribute("disabled");
    }), e2.up && this.controlsUp.forEach((e3) => {
      e3.classList.add("enabled"), e3.removeAttribute("disabled");
    }), e2.down && this.controlsDown.forEach((e3) => {
      e3.classList.add("enabled"), e3.removeAttribute("disabled");
    }), (e2.left || e2.up) && this.controlsPrev.forEach((e3) => {
      e3.classList.add("enabled"), e3.removeAttribute("disabled");
    }), (e2.right || e2.down) && this.controlsNext.forEach((e3) => {
      e3.classList.add("enabled"), e3.removeAttribute("disabled");
    });
    let t2 = this.Reveal.getCurrentSlide();
    if (t2) {
      let e3 = this.Reveal.fragments.availableRoutes();
      e3.prev && this.controlsPrev.forEach((e4) => {
        e4.classList.add("fragmented", "enabled"), e4.removeAttribute("disabled");
      }), e3.next && this.controlsNext.forEach((e4) => {
        e4.classList.add("fragmented", "enabled"), e4.removeAttribute("disabled");
      }), this.Reveal.isVerticalSlide(t2) ? (e3.prev && this.controlsUp.forEach((e4) => {
        e4.classList.add("fragmented", "enabled"), e4.removeAttribute("disabled");
      }), e3.next && this.controlsDown.forEach((e4) => {
        e4.classList.add("fragmented", "enabled"), e4.removeAttribute("disabled");
      })) : (e3.prev && this.controlsLeft.forEach((e4) => {
        e4.classList.add("fragmented", "enabled"), e4.removeAttribute("disabled");
      }), e3.next && this.controlsRight.forEach((e4) => {
        e4.classList.add("fragmented", "enabled"), e4.removeAttribute("disabled");
      }));
    }
    if (this.Reveal.getConfig().controlsTutorial) {
      let t3 = this.Reveal.getIndices();
      !this.Reveal.hasNavigatedVertically() && e2.down ? this.controlsDownArrow.classList.add("highlight") : (this.controlsDownArrow.classList.remove("highlight"), this.Reveal.getConfig().rtl ? !this.Reveal.hasNavigatedHorizontally() && e2.left && t3.v === 0 ? this.controlsLeftArrow.classList.add("highlight") : this.controlsLeftArrow.classList.remove("highlight") : !this.Reveal.hasNavigatedHorizontally() && e2.right && t3.v === 0 ? this.controlsRightArrow.classList.add("highlight") : this.controlsRightArrow.classList.remove("highlight"));
    }
  }
  destroy() {
    this.unbind(), this.element.remove();
  }
  onNavigateLeftClicked(e2) {
    e2.preventDefault(), this.Reveal.onUserInput(), this.Reveal.getConfig().navigationMode === "linear" ? this.Reveal.prev() : this.Reveal.left();
  }
  onNavigateRightClicked(e2) {
    e2.preventDefault(), this.Reveal.onUserInput(), this.Reveal.getConfig().navigationMode === "linear" ? this.Reveal.next() : this.Reveal.right();
  }
  onNavigateUpClicked(e2) {
    e2.preventDefault(), this.Reveal.onUserInput(), this.Reveal.up();
  }
  onNavigateDownClicked(e2) {
    e2.preventDefault(), this.Reveal.onUserInput(), this.Reveal.down();
  }
  onNavigatePrevClicked(e2) {
    e2.preventDefault(), this.Reveal.onUserInput(), this.Reveal.prev();
  }
  onNavigateNextClicked(e2) {
    e2.preventDefault(), this.Reveal.onUserInput(), this.Reveal.next();
  }
};
var T = class {
  constructor(e2) {
    this.Reveal = e2, this.onProgressClicked = this.onProgressClicked.bind(this);
  }
  render() {
    this.element = document.createElement("div"), this.element.className = "progress", this.Reveal.getRevealElement().appendChild(this.element), this.bar = document.createElement("span"), this.element.appendChild(this.bar);
  }
  configure(e2, t2) {
    this.element.style.display = e2.progress ? "block" : "none";
  }
  bind() {
    this.Reveal.getConfig().progress && this.element && this.element.addEventListener("click", this.onProgressClicked, false);
  }
  unbind() {
    this.Reveal.getConfig().progress && this.element && this.element.removeEventListener("click", this.onProgressClicked, false);
  }
  update() {
    if (this.Reveal.getConfig().progress && this.bar) {
      let e2 = this.Reveal.getProgress();
      this.Reveal.getTotalSlides() < 2 && (e2 = 0), this.bar.style.transform = "scaleX(" + e2 + ")";
    }
  }
  getMaxWidth() {
    return this.Reveal.getRevealElement().offsetWidth;
  }
  onProgressClicked(e2) {
    this.Reveal.onUserInput(e2), e2.preventDefault();
    let t2 = this.Reveal.getSlides(), i2 = t2.length, s2 = Math.floor(e2.clientX / this.getMaxWidth() * i2);
    this.Reveal.getConfig().rtl && (s2 = i2 - s2);
    let n2 = this.Reveal.getIndices(t2[s2]);
    this.Reveal.slide(n2.h, n2.v);
  }
  destroy() {
    this.element.remove();
  }
};
var z = class {
  constructor(e2) {
    this.Reveal = e2, this.lastMouseWheelStep = 0, this.cursorHidden = false, this.cursorInactiveTimeout = 0, this.onDocumentCursorActive = this.onDocumentCursorActive.bind(this), this.onDocumentMouseScroll = this.onDocumentMouseScroll.bind(this);
  }
  configure(e2, t2) {
    e2.mouseWheel ? (document.addEventListener("DOMMouseScroll", this.onDocumentMouseScroll, false), document.addEventListener("mousewheel", this.onDocumentMouseScroll, false)) : (document.removeEventListener("DOMMouseScroll", this.onDocumentMouseScroll, false), document.removeEventListener("mousewheel", this.onDocumentMouseScroll, false)), e2.hideInactiveCursor ? (document.addEventListener("mousemove", this.onDocumentCursorActive, false), document.addEventListener("mousedown", this.onDocumentCursorActive, false)) : (this.showCursor(), document.removeEventListener("mousemove", this.onDocumentCursorActive, false), document.removeEventListener("mousedown", this.onDocumentCursorActive, false));
  }
  showCursor() {
    this.cursorHidden && (this.cursorHidden = false, this.Reveal.getRevealElement().style.cursor = "");
  }
  hideCursor() {
    this.cursorHidden === false && (this.cursorHidden = true, this.Reveal.getRevealElement().style.cursor = "none");
  }
  destroy() {
    this.showCursor(), document.removeEventListener("DOMMouseScroll", this.onDocumentMouseScroll, false), document.removeEventListener("mousewheel", this.onDocumentMouseScroll, false), document.removeEventListener("mousemove", this.onDocumentCursorActive, false), document.removeEventListener("mousedown", this.onDocumentCursorActive, false);
  }
  onDocumentCursorActive(e2) {
    this.showCursor(), clearTimeout(this.cursorInactiveTimeout), this.cursorInactiveTimeout = setTimeout(this.hideCursor.bind(this), this.Reveal.getConfig().hideCursorTime);
  }
  onDocumentMouseScroll(e2) {
    if (Date.now() - this.lastMouseWheelStep > 1e3) {
      this.lastMouseWheelStep = Date.now();
      let t2 = e2.detail || -e2.wheelDelta;
      t2 > 0 ? this.Reveal.next() : t2 < 0 && this.Reveal.prev();
    }
  }
};
var F = (e2, t2) => {
  const i2 = document.createElement("script");
  i2.type = "text/javascript", i2.async = false, i2.defer = false, i2.src = e2, typeof t2 == "function" && (i2.onload = i2.onreadystatechange = (e3) => {
    (e3.type === "load" || /loaded|complete/.test(i2.readyState)) && (i2.onload = i2.onreadystatechange = i2.onerror = null, t2());
  }, i2.onerror = (e3) => {
    i2.onload = i2.onreadystatechange = i2.onerror = null, t2(new Error("Failed loading script: " + i2.src + "\n" + e3));
  });
  const s2 = document.querySelector("head");
  s2.insertBefore(i2, s2.lastChild);
};
var H = class {
  constructor(e2) {
    this.Reveal = e2, this.state = "idle", this.registeredPlugins = {}, this.asyncDependencies = [];
  }
  load(e2, t2) {
    return this.state = "loading", e2.forEach(this.registerPlugin.bind(this)), new Promise((e3) => {
      let i2 = [], s2 = 0;
      if (t2.forEach((e4) => {
        e4.condition && !e4.condition() || (e4.async ? this.asyncDependencies.push(e4) : i2.push(e4));
      }), i2.length) {
        s2 = i2.length;
        const t3 = (t4) => {
          t4 && typeof t4.callback == "function" && t4.callback(), --s2 == 0 && this.initPlugins().then(e3);
        };
        i2.forEach((e4) => {
          typeof e4.id == "string" ? (this.registerPlugin(e4), t3(e4)) : typeof e4.src == "string" ? F(e4.src, () => t3(e4)) : (console.warn("Unrecognized plugin format", e4), t3());
        });
      } else
        this.initPlugins().then(e3);
    });
  }
  initPlugins() {
    return new Promise((e2) => {
      let t2 = Object.values(this.registeredPlugins), i2 = t2.length;
      if (i2 === 0)
        this.loadAsync().then(e2);
      else {
        let s2, n2 = () => {
          --i2 == 0 ? this.loadAsync().then(e2) : s2();
        }, a2 = 0;
        s2 = () => {
          let e3 = t2[a2++];
          if (typeof e3.init == "function") {
            let t3 = e3.init(this.Reveal);
            t3 && typeof t3.then == "function" ? t3.then(n2) : n2();
          } else
            n2();
        }, s2();
      }
    });
  }
  loadAsync() {
    return this.state = "loaded", this.asyncDependencies.length && this.asyncDependencies.forEach((e2) => {
      F(e2.src, e2.callback);
    }), Promise.resolve();
  }
  registerPlugin(e2) {
    arguments.length === 2 && typeof arguments[0] == "string" ? (e2 = arguments[1]).id = arguments[0] : typeof e2 == "function" && (e2 = e2());
    let t2 = e2.id;
    typeof t2 != "string" ? console.warn("Unrecognized plugin format; can't find plugin.id", e2) : this.registeredPlugins[t2] === void 0 ? (this.registeredPlugins[t2] = e2, this.state === "loaded" && typeof e2.init == "function" && e2.init(this.Reveal)) : console.warn('reveal.js: "' + t2 + '" plugin has already been registered');
  }
  hasPlugin(e2) {
    return !!this.registeredPlugins[e2];
  }
  getPlugin(e2) {
    return this.registeredPlugins[e2];
  }
  getRegisteredPlugins() {
    return this.registeredPlugins;
  }
  destroy() {
    Object.values(this.registeredPlugins).forEach((e2) => {
      typeof e2.destroy == "function" && e2.destroy();
    }), this.registeredPlugins = {}, this.asyncDependencies = [];
  }
};
var q = class {
  constructor(e2) {
    this.Reveal = e2;
  }
  async setupPDF() {
    const e2 = this.Reveal.getConfig(), i2 = t(this.Reveal.getRevealElement(), ".slides section"), s2 = e2.slideNumber && /all|print/i.test(e2.showSlideNumber), n2 = this.Reveal.getComputedSlideSize(window.innerWidth, window.innerHeight), a2 = Math.floor(n2.width * (1 + e2.margin)), r2 = Math.floor(n2.height * (1 + e2.margin)), o2 = n2.width, d2 = n2.height;
    await new Promise(requestAnimationFrame), l("@page{size:" + a2 + "px " + r2 + "px; margin: 0px;}"), l(".reveal section>img, .reveal section>video, .reveal section>iframe{max-width: " + o2 + "px; max-height:" + d2 + "px}"), document.documentElement.classList.add("print-pdf"), document.body.style.width = a2 + "px", document.body.style.height = r2 + "px";
    const c2 = document.querySelector(".reveal-viewport");
    let h2;
    if (c2) {
      const e3 = window.getComputedStyle(c2);
      e3 && e3.background && (h2 = e3.background);
    }
    await new Promise(requestAnimationFrame), this.Reveal.layoutSlideContents(o2, d2), await new Promise(requestAnimationFrame);
    const u2 = i2.map((e3) => e3.scrollHeight), g2 = [], v2 = i2[0].parentNode;
    i2.forEach(function(i3, n3) {
      if (i3.classList.contains("stack") === false) {
        let l2 = (a2 - o2) / 2, c3 = (r2 - d2) / 2;
        const v3 = u2[n3];
        let p2 = Math.max(Math.ceil(v3 / r2), 1);
        p2 = Math.min(p2, e2.pdfMaxPagesPerSlide), (p2 === 1 && e2.center || i3.classList.contains("center")) && (c3 = Math.max((r2 - v3) / 2, 0));
        const m2 = document.createElement("div");
        if (g2.push(m2), m2.className = "pdf-page", m2.style.height = (r2 + e2.pdfPageHeightOffset) * p2 + "px", h2 && (m2.style.background = h2), m2.appendChild(i3), i3.style.left = l2 + "px", i3.style.top = c3 + "px", i3.style.width = o2 + "px", this.Reveal.slideContent.layout(i3), i3.slideBackgroundElement && m2.insertBefore(i3.slideBackgroundElement, i3), e2.showNotes) {
          const t2 = this.Reveal.getSlideNotes(i3);
          if (t2) {
            const i4 = 8, s3 = typeof e2.showNotes == "string" ? e2.showNotes : "inline", n4 = document.createElement("div");
            n4.classList.add("speaker-notes"), n4.classList.add("speaker-notes-pdf"), n4.setAttribute("data-layout", s3), n4.innerHTML = t2, s3 === "separate-page" ? g2.push(n4) : (n4.style.left = i4 + "px", n4.style.bottom = i4 + "px", n4.style.width = a2 - 2 * i4 + "px", m2.appendChild(n4));
          }
        }
        if (s2) {
          const e3 = n3 + 1, t2 = document.createElement("div");
          t2.classList.add("slide-number"), t2.classList.add("slide-number-pdf"), t2.innerHTML = e3, m2.appendChild(t2);
        }
        if (e2.pdfSeparateFragments) {
          const e3 = this.Reveal.fragments.sort(m2.querySelectorAll(".fragment"), true);
          let t2;
          e3.forEach(function(e4) {
            t2 && t2.forEach(function(e5) {
              e5.classList.remove("current-fragment");
            }), e4.forEach(function(e5) {
              e5.classList.add("visible", "current-fragment");
            }, this);
            const i4 = m2.cloneNode(true);
            g2.push(i4), t2 = e4;
          }, this), e3.forEach(function(e4) {
            e4.forEach(function(e5) {
              e5.classList.remove("visible", "current-fragment");
            });
          });
        } else
          t(m2, ".fragment:not(.fade-out)").forEach(function(e3) {
            e3.classList.add("visible");
          });
      }
    }, this), await new Promise(requestAnimationFrame), g2.forEach((e3) => v2.appendChild(e3)), this.Reveal.dispatchEvent({ type: "pdf-ready" });
  }
  isPrintingPDF() {
    return /print-pdf/gi.test(window.location.search);
  }
};
var B = class {
  constructor(e2) {
    this.Reveal = e2, this.touchStartX = 0, this.touchStartY = 0, this.touchStartCount = 0, this.touchCaptured = false, this.onPointerDown = this.onPointerDown.bind(this), this.onPointerMove = this.onPointerMove.bind(this), this.onPointerUp = this.onPointerUp.bind(this), this.onTouchStart = this.onTouchStart.bind(this), this.onTouchMove = this.onTouchMove.bind(this), this.onTouchEnd = this.onTouchEnd.bind(this);
  }
  bind() {
    let e2 = this.Reveal.getRevealElement();
    "onpointerdown" in window ? (e2.addEventListener("pointerdown", this.onPointerDown, false), e2.addEventListener("pointermove", this.onPointerMove, false), e2.addEventListener("pointerup", this.onPointerUp, false)) : window.navigator.msPointerEnabled ? (e2.addEventListener("MSPointerDown", this.onPointerDown, false), e2.addEventListener("MSPointerMove", this.onPointerMove, false), e2.addEventListener("MSPointerUp", this.onPointerUp, false)) : (e2.addEventListener("touchstart", this.onTouchStart, false), e2.addEventListener("touchmove", this.onTouchMove, false), e2.addEventListener("touchend", this.onTouchEnd, false));
  }
  unbind() {
    let e2 = this.Reveal.getRevealElement();
    e2.removeEventListener("pointerdown", this.onPointerDown, false), e2.removeEventListener("pointermove", this.onPointerMove, false), e2.removeEventListener("pointerup", this.onPointerUp, false), e2.removeEventListener("MSPointerDown", this.onPointerDown, false), e2.removeEventListener("MSPointerMove", this.onPointerMove, false), e2.removeEventListener("MSPointerUp", this.onPointerUp, false), e2.removeEventListener("touchstart", this.onTouchStart, false), e2.removeEventListener("touchmove", this.onTouchMove, false), e2.removeEventListener("touchend", this.onTouchEnd, false);
  }
  isSwipePrevented(e2) {
    if (a(e2, "video, audio"))
      return true;
    for (; e2 && typeof e2.hasAttribute == "function"; ) {
      if (e2.hasAttribute("data-prevent-swipe"))
        return true;
      e2 = e2.parentNode;
    }
    return false;
  }
  onTouchStart(e2) {
    if (this.isSwipePrevented(e2.target))
      return true;
    this.touchStartX = e2.touches[0].clientX, this.touchStartY = e2.touches[0].clientY, this.touchStartCount = e2.touches.length;
  }
  onTouchMove(e2) {
    if (this.isSwipePrevented(e2.target))
      return true;
    let t2 = this.Reveal.getConfig();
    if (this.touchCaptured)
      m && e2.preventDefault();
    else {
      this.Reveal.onUserInput(e2);
      let i2 = e2.touches[0].clientX, s2 = e2.touches[0].clientY;
      if (e2.touches.length === 1 && this.touchStartCount !== 2) {
        let n2 = this.Reveal.availableRoutes({ includeFragments: true }), a2 = i2 - this.touchStartX, r2 = s2 - this.touchStartY;
        a2 > 40 && Math.abs(a2) > Math.abs(r2) ? (this.touchCaptured = true, t2.navigationMode === "linear" ? t2.rtl ? this.Reveal.next() : this.Reveal.prev() : this.Reveal.left()) : a2 < -40 && Math.abs(a2) > Math.abs(r2) ? (this.touchCaptured = true, t2.navigationMode === "linear" ? t2.rtl ? this.Reveal.prev() : this.Reveal.next() : this.Reveal.right()) : r2 > 40 && n2.up ? (this.touchCaptured = true, t2.navigationMode === "linear" ? this.Reveal.prev() : this.Reveal.up()) : r2 < -40 && n2.down && (this.touchCaptured = true, t2.navigationMode === "linear" ? this.Reveal.next() : this.Reveal.down()), t2.embedded ? (this.touchCaptured || this.Reveal.isVerticalSlide()) && e2.preventDefault() : e2.preventDefault();
      }
    }
  }
  onTouchEnd(e2) {
    this.touchCaptured = false;
  }
  onPointerDown(e2) {
    e2.pointerType !== e2.MSPOINTER_TYPE_TOUCH && e2.pointerType !== "touch" || (e2.touches = [{ clientX: e2.clientX, clientY: e2.clientY }], this.onTouchStart(e2));
  }
  onPointerMove(e2) {
    e2.pointerType !== e2.MSPOINTER_TYPE_TOUCH && e2.pointerType !== "touch" || (e2.touches = [{ clientX: e2.clientX, clientY: e2.clientY }], this.onTouchMove(e2));
  }
  onPointerUp(e2) {
    e2.pointerType !== e2.MSPOINTER_TYPE_TOUCH && e2.pointerType !== "touch" || (e2.touches = [{ clientX: e2.clientX, clientY: e2.clientY }], this.onTouchEnd(e2));
  }
};
var O = class {
  constructor(e2) {
    this.Reveal = e2, this.onRevealPointerDown = this.onRevealPointerDown.bind(this), this.onDocumentPointerDown = this.onDocumentPointerDown.bind(this);
  }
  configure(e2, t2) {
    e2.embedded ? this.blur() : (this.focus(), this.unbind());
  }
  bind() {
    this.Reveal.getConfig().embedded && this.Reveal.getRevealElement().addEventListener("pointerdown", this.onRevealPointerDown, false);
  }
  unbind() {
    this.Reveal.getRevealElement().removeEventListener("pointerdown", this.onRevealPointerDown, false), document.removeEventListener("pointerdown", this.onDocumentPointerDown, false);
  }
  focus() {
    this.state !== "focus" && (this.Reveal.getRevealElement().classList.add("focused"), document.addEventListener("pointerdown", this.onDocumentPointerDown, false)), this.state = "focus";
  }
  blur() {
    this.state !== "blur" && (this.Reveal.getRevealElement().classList.remove("focused"), document.removeEventListener("pointerdown", this.onDocumentPointerDown, false)), this.state = "blur";
  }
  isFocused() {
    return this.state === "focus";
  }
  destroy() {
    this.Reveal.getRevealElement().classList.remove("focused");
  }
  onRevealPointerDown(e2) {
    this.focus();
  }
  onDocumentPointerDown(e2) {
    let t2 = r(e2.target, ".reveal");
    t2 && t2 === this.Reveal.getRevealElement() || this.blur();
  }
};
var U = class {
  constructor(e2) {
    this.Reveal = e2;
  }
  render() {
    this.element = document.createElement("div"), this.element.className = "speaker-notes", this.element.setAttribute("data-prevent-swipe", ""), this.element.setAttribute("tabindex", "0"), this.Reveal.getRevealElement().appendChild(this.element);
  }
  configure(e2, t2) {
    e2.showNotes && this.element.setAttribute("data-layout", typeof e2.showNotes == "string" ? e2.showNotes : "inline");
  }
  update() {
    this.Reveal.getConfig().showNotes && this.element && this.Reveal.getCurrentSlide() && !this.Reveal.print.isPrintingPDF() && (this.element.innerHTML = this.getSlideNotes() || '<span class="notes-placeholder">No notes on this slide.</span>');
  }
  updateVisibility() {
    this.Reveal.getConfig().showNotes && this.hasNotes() && !this.Reveal.print.isPrintingPDF() ? this.Reveal.getRevealElement().classList.add("show-notes") : this.Reveal.getRevealElement().classList.remove("show-notes");
  }
  hasNotes() {
    return this.Reveal.getSlidesElement().querySelectorAll("[data-notes], aside.notes").length > 0;
  }
  isSpeakerNotesWindow() {
    return !!window.location.search.match(/receiver/gi);
  }
  getSlideNotes(e2 = this.Reveal.getCurrentSlide()) {
    if (e2.hasAttribute("data-notes"))
      return e2.getAttribute("data-notes");
    let t2 = e2.querySelector("aside.notes");
    return t2 ? t2.innerHTML : null;
  }
  destroy() {
    this.element.remove();
  }
};
var W = class {
  constructor(e2, t2) {
    this.diameter = 100, this.diameter2 = this.diameter / 2, this.thickness = 6, this.playing = false, this.progress = 0, this.progressOffset = 1, this.container = e2, this.progressCheck = t2, this.canvas = document.createElement("canvas"), this.canvas.className = "playback", this.canvas.width = this.diameter, this.canvas.height = this.diameter, this.canvas.style.width = this.diameter2 + "px", this.canvas.style.height = this.diameter2 + "px", this.context = this.canvas.getContext("2d"), this.container.appendChild(this.canvas), this.render();
  }
  setPlaying(e2) {
    const t2 = this.playing;
    this.playing = e2, !t2 && this.playing ? this.animate() : this.render();
  }
  animate() {
    const e2 = this.progress;
    this.progress = this.progressCheck(), e2 > 0.8 && this.progress < 0.2 && (this.progressOffset = this.progress), this.render(), this.playing && requestAnimationFrame(this.animate.bind(this));
  }
  render() {
    let e2 = this.playing ? this.progress : 0, t2 = this.diameter2 - this.thickness, i2 = this.diameter2, s2 = this.diameter2, n2 = 28;
    this.progressOffset += 0.1 * (1 - this.progressOffset);
    const a2 = -Math.PI / 2 + e2 * (2 * Math.PI), r2 = -Math.PI / 2 + this.progressOffset * (2 * Math.PI);
    this.context.save(), this.context.clearRect(0, 0, this.diameter, this.diameter), this.context.beginPath(), this.context.arc(i2, s2, t2 + 4, 0, 2 * Math.PI, false), this.context.fillStyle = "rgba( 0, 0, 0, 0.4 )", this.context.fill(), this.context.beginPath(), this.context.arc(i2, s2, t2, 0, 2 * Math.PI, false), this.context.lineWidth = this.thickness, this.context.strokeStyle = "rgba( 255, 255, 255, 0.2 )", this.context.stroke(), this.playing && (this.context.beginPath(), this.context.arc(i2, s2, t2, r2, a2, false), this.context.lineWidth = this.thickness, this.context.strokeStyle = "#fff", this.context.stroke()), this.context.translate(i2 - 14, s2 - 14), this.playing ? (this.context.fillStyle = "#fff", this.context.fillRect(0, 0, 10, n2), this.context.fillRect(18, 0, 10, n2)) : (this.context.beginPath(), this.context.translate(4, 0), this.context.moveTo(0, 0), this.context.lineTo(24, 14), this.context.lineTo(0, n2), this.context.fillStyle = "#fff", this.context.fill()), this.context.restore();
  }
  on(e2, t2) {
    this.canvas.addEventListener(e2, t2, false);
  }
  off(e2, t2) {
    this.canvas.removeEventListener(e2, t2, false);
  }
  destroy() {
    this.playing = false, this.canvas.parentNode && this.container.removeChild(this.canvas);
  }
};
var K = { width: 960, height: 700, margin: 0.04, minScale: 0.2, maxScale: 2, controls: true, controlsTutorial: true, controlsLayout: "bottom-right", controlsBackArrows: "faded", progress: true, slideNumber: false, showSlideNumber: "all", hashOneBasedIndex: false, hash: false, respondToHashChanges: true, history: false, keyboard: true, keyboardCondition: null, disableLayout: false, overview: true, center: true, touch: true, loop: false, rtl: false, navigationMode: "default", shuffle: false, fragments: true, fragmentInURL: true, embedded: false, help: true, pause: true, showNotes: false, showHiddenSlides: false, autoPlayMedia: null, preloadIframes: null, autoAnimate: true, autoAnimateMatcher: null, autoAnimateEasing: "ease", autoAnimateDuration: 1, autoAnimateUnmatched: true, autoAnimateStyles: ["opacity", "color", "background-color", "padding", "font-size", "line-height", "letter-spacing", "border-width", "border-color", "border-radius", "outline", "outline-offset"], autoSlide: 0, autoSlideStoppable: true, autoSlideMethod: null, defaultTiming: null, mouseWheel: false, previewLinks: false, postMessage: true, postMessageEvents: false, focusBodyOnPageVisibilityChange: true, transition: "slide", transitionSpeed: "default", backgroundTransition: "fade", parallaxBackgroundImage: "", parallaxBackgroundSize: "", parallaxBackgroundRepeat: "", parallaxBackgroundPosition: "", parallaxBackgroundHorizontal: null, parallaxBackgroundVertical: null, pdfMaxPagesPerSlide: Number.POSITIVE_INFINITY, pdfSeparateFragments: true, pdfPageHeightOffset: -1, viewDistance: 3, mobileViewDistance: 2, display: "block", hideInactiveCursor: true, hideCursorTime: 5e3, dependencies: [], plugins: [] };
function V(a2, l2) {
  arguments.length < 2 && (l2 = arguments[0], a2 = document.querySelector(".reveal"));
  const h2 = {};
  let u2, g2, p2, m2, b2, y2 = {}, w2 = false, A2 = { hasNavigatedHorizontally: false, hasNavigatedVertically: false }, L2 = [], x2 = 1, F2 = { layout: "", overview: "" }, V2 = {}, $2 = "idle", j2 = 0, X = 0, Y = -1, _ = false, J = new E(h2), Q = new R(h2), Z = new C(h2), G = new S(h2), ee = new P(h2), te = new N(h2), ie = new M(h2), se = new D(h2), ne = new I(h2), ae = new T(h2), re = new z(h2), oe = new H(h2), le = new q(h2), de = new O(h2), ce = new B(h2), he = new U(h2);
  function ue(e2) {
    if (!a2)
      throw 'Unable to find presentation root (<div class="reveal">).';
    if (V2.wrapper = a2, V2.slides = a2.querySelector(".slides"), !V2.slides)
      throw 'Unable to find slides container (<div class="slides">).';
    return y2 = __spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, K), y2), l2), e2), d()), ge(), window.addEventListener("load", qe, false), oe.load(y2.plugins, y2.dependencies).then(ve), new Promise((e3) => h2.on("ready", e3));
  }
  function ge() {
    y2.embedded === true ? V2.viewport = r(a2, ".reveal-viewport") || a2 : (V2.viewport = document.body, document.documentElement.classList.add("reveal-full-page")), V2.viewport.classList.add("reveal-viewport");
  }
  function ve() {
    w2 = true, pe(), me(), Re(), we(), Ee(), it(), Ae(), se.readURL(), G.update(true), setTimeout(() => {
      V2.slides.classList.remove("no-transition"), V2.wrapper.classList.add("ready"), Ne({ type: "ready", data: { indexh: u2, indexv: g2, currentSlide: m2 } });
    }, 1), le.isPrintingPDF() && (ke(), document.readyState === "complete" ? le.setupPDF() : window.addEventListener("load", () => {
      le.setupPDF();
    }));
  }
  function pe() {
    y2.showHiddenSlides || t(V2.wrapper, 'section[data-visibility="hidden"]').forEach((e2) => {
      e2.parentNode.removeChild(e2);
    });
  }
  function me() {
    V2.slides.classList.add("no-transition"), v ? V2.wrapper.classList.add("no-hover") : V2.wrapper.classList.remove("no-hover"), G.render(), Q.render(), ne.render(), ae.render(), he.render(), V2.pauseOverlay = o(V2.wrapper, "div", "pause-overlay", y2.controls ? '<button class="resume-button">Resume presentation</button>' : null), V2.statusElement = fe(), V2.wrapper.setAttribute("role", "application");
  }
  function fe() {
    let e2 = V2.wrapper.querySelector(".aria-status");
    return e2 || (e2 = document.createElement("div"), e2.style.position = "absolute", e2.style.height = "1px", e2.style.width = "1px", e2.style.overflow = "hidden", e2.style.clip = "rect( 1px, 1px, 1px, 1px )", e2.classList.add("aria-status"), e2.setAttribute("aria-live", "polite"), e2.setAttribute("aria-atomic", "true"), V2.wrapper.appendChild(e2)), e2;
  }
  function be(e2) {
    V2.statusElement.textContent = e2;
  }
  function ye(e2) {
    let t2 = "";
    if (e2.nodeType === 3)
      t2 += e2.textContent;
    else if (e2.nodeType === 1) {
      let i2 = e2.getAttribute("aria-hidden"), s2 = window.getComputedStyle(e2).display === "none";
      i2 === "true" || s2 || Array.from(e2.childNodes).forEach((e3) => {
        t2 += ye(e3);
      });
    }
    return t2 = t2.trim(), t2 === "" ? "" : t2 + " ";
  }
  function we() {
    setInterval(() => {
      V2.wrapper.scrollTop === 0 && V2.wrapper.scrollLeft === 0 || (V2.wrapper.scrollTop = 0, V2.wrapper.scrollLeft = 0);
    }, 1e3);
  }
  function Ee() {
    document.addEventListener("fullscreenchange", qt), document.addEventListener("webkitfullscreenchange", qt);
  }
  function Re() {
    y2.postMessage && window.addEventListener("message", It, false);
  }
  function Ae(t2) {
    const s2 = __spreadValues({}, y2);
    if (typeof t2 == "object" && e(y2, t2), h2.isReady() === false)
      return;
    const n2 = V2.wrapper.querySelectorAll(".slides section").length;
    V2.wrapper.classList.remove(s2.transition), V2.wrapper.classList.add(y2.transition), V2.wrapper.setAttribute("data-transition-speed", y2.transitionSpeed), V2.wrapper.setAttribute("data-background-transition", y2.backgroundTransition), V2.viewport.style.setProperty("--slide-width", y2.width + "px"), V2.viewport.style.setProperty("--slide-height", y2.height + "px"), y2.shuffle && st(), i(V2.wrapper, "embedded", y2.embedded), i(V2.wrapper, "rtl", y2.rtl), i(V2.wrapper, "center", y2.center), y2.pause === false && Ye(), y2.previewLinks ? (De(), Ie("[data-preview-link=false]")) : (Ie(), De("[data-preview-link]:not([data-preview-link=false])")), Z.reset(), b2 && (b2.destroy(), b2 = null), n2 > 1 && y2.autoSlide && y2.autoSlideStoppable && (b2 = new W(V2.wrapper, () => Math.min(Math.max((Date.now() - Y) / j2, 0), 1)), b2.on("click", Ot), _ = false), y2.navigationMode !== "default" ? V2.wrapper.setAttribute("data-navigation-mode", y2.navigationMode) : V2.wrapper.removeAttribute("data-navigation-mode"), he.configure(y2, s2), de.configure(y2, s2), re.configure(y2, s2), ne.configure(y2, s2), ae.configure(y2, s2), ie.configure(y2, s2), ee.configure(y2, s2), Q.configure(y2, s2), et();
  }
  function Se() {
    window.addEventListener("resize", Ft, false), y2.touch && ce.bind(), y2.keyboard && ie.bind(), y2.progress && ae.bind(), y2.respondToHashChanges && se.bind(), ne.bind(), de.bind(), V2.slides.addEventListener("click", zt, false), V2.slides.addEventListener("transitionend", Tt, false), V2.pauseOverlay.addEventListener("click", Ye, false), y2.focusBodyOnPageVisibilityChange && document.addEventListener("visibilitychange", Ht, false);
  }
  function ke() {
    ce.unbind(), de.unbind(), ie.unbind(), ne.unbind(), ae.unbind(), se.unbind(), window.removeEventListener("resize", Ft, false), V2.slides.removeEventListener("click", zt, false), V2.slides.removeEventListener("transitionend", Tt, false), V2.pauseOverlay.removeEventListener("click", Ye, false);
  }
  function Le() {
    ke(), At(), Ie(), he.destroy(), de.destroy(), oe.destroy(), re.destroy(), ne.destroy(), ae.destroy(), G.destroy(), Q.destroy(), document.removeEventListener("fullscreenchange", qt), document.removeEventListener("webkitfullscreenchange", qt), document.removeEventListener("visibilitychange", Ht, false), window.removeEventListener("message", It, false), window.removeEventListener("load", qe, false), V2.pauseOverlay && V2.pauseOverlay.remove(), V2.statusElement && V2.statusElement.remove(), document.documentElement.classList.remove("reveal-full-page"), V2.wrapper.classList.remove("ready", "center", "has-horizontal-slides", "has-vertical-slides"), V2.wrapper.removeAttribute("data-transition-speed"), V2.wrapper.removeAttribute("data-background-transition"), V2.viewport.classList.remove("reveal-viewport"), V2.viewport.style.removeProperty("--slide-width"), V2.viewport.style.removeProperty("--slide-height"), V2.slides.style.removeProperty("width"), V2.slides.style.removeProperty("height"), V2.slides.style.removeProperty("zoom"), V2.slides.style.removeProperty("left"), V2.slides.style.removeProperty("top"), V2.slides.style.removeProperty("bottom"), V2.slides.style.removeProperty("right"), V2.slides.style.removeProperty("transform"), Array.from(V2.wrapper.querySelectorAll(".slides section")).forEach((e2) => {
      e2.style.removeProperty("display"), e2.style.removeProperty("top"), e2.removeAttribute("hidden"), e2.removeAttribute("aria-hidden");
    });
  }
  function xe(e2, t2, i2) {
    a2.addEventListener(e2, t2, i2);
  }
  function Ce(e2, t2, i2) {
    a2.removeEventListener(e2, t2, i2);
  }
  function Pe(e2) {
    typeof e2.layout == "string" && (F2.layout = e2.layout), typeof e2.overview == "string" && (F2.overview = e2.overview), F2.layout ? n(V2.slides, F2.layout + " " + F2.overview) : n(V2.slides, F2.overview);
  }
  function Ne({ target: t2 = V2.wrapper, type: i2, data: s2, bubbles: n2 = true }) {
    let a3 = document.createEvent("HTMLEvents", 1, 2);
    return a3.initEvent(i2, n2, true), e(a3, s2), t2.dispatchEvent(a3), t2 === V2.wrapper && Me(i2), a3;
  }
  function Me(t2, i2) {
    if (y2.postMessageEvents && window.parent !== window.self) {
      let s2 = { namespace: "reveal", eventName: t2, state: wt() };
      e(s2, i2), window.parent.postMessage(JSON.stringify(s2), "*");
    }
  }
  function De(e2 = "a") {
    Array.from(V2.wrapper.querySelectorAll(e2)).forEach((e3) => {
      /^(http|www)/gi.test(e3.getAttribute("href")) && e3.addEventListener("click", Bt, false);
    });
  }
  function Ie(e2 = "a") {
    Array.from(V2.wrapper.querySelectorAll(e2)).forEach((e3) => {
      /^(http|www)/gi.test(e3.getAttribute("href")) && e3.removeEventListener("click", Bt, false);
    });
  }
  function Te(e2) {
    He(), V2.overlay = document.createElement("div"), V2.overlay.classList.add("overlay"), V2.overlay.classList.add("overlay-preview"), V2.wrapper.appendChild(V2.overlay), V2.overlay.innerHTML = `<header>
				<a class="close" href="#"><span class="icon"></span></a>
				<a class="external" href="${e2}" target="_blank"><span class="icon"></span></a>
			</header>
			<div class="spinner"></div>
			<div class="viewport">
				<iframe src="${e2}"></iframe>
				<small class="viewport-inner">
					<span class="x-frame-error">Unable to load iframe. This is likely due to the site's policy (x-frame-options).</span>
				</small>
			</div>`, V2.overlay.querySelector("iframe").addEventListener("load", (e3) => {
      V2.overlay.classList.add("loaded");
    }, false), V2.overlay.querySelector(".close").addEventListener("click", (e3) => {
      He(), e3.preventDefault();
    }, false), V2.overlay.querySelector(".external").addEventListener("click", (e3) => {
      He();
    }, false);
  }
  function ze(e2) {
    typeof e2 == "boolean" ? e2 ? Fe() : He() : V2.overlay ? He() : Fe();
  }
  function Fe() {
    if (y2.help) {
      He(), V2.overlay = document.createElement("div"), V2.overlay.classList.add("overlay"), V2.overlay.classList.add("overlay-help"), V2.wrapper.appendChild(V2.overlay);
      let e2 = '<p class="title">Keyboard Shortcuts</p><br/>', t2 = ie.getShortcuts(), i2 = ie.getBindings();
      e2 += "<table><th>KEY</th><th>ACTION</th>";
      for (let i3 in t2)
        e2 += `<tr><td>${i3}</td><td>${t2[i3]}</td></tr>`;
      for (let t3 in i2)
        i2[t3].key && i2[t3].description && (e2 += `<tr><td>${i2[t3].key}</td><td>${i2[t3].description}</td></tr>`);
      e2 += "</table>", V2.overlay.innerHTML = `
				<header>
					<a class="close" href="#"><span class="icon"></span></a>
				</header>
				<div class="viewport">
					<div class="viewport-inner">${e2}</div>
				</div>
			`, V2.overlay.querySelector(".close").addEventListener("click", (e3) => {
        He(), e3.preventDefault();
      }, false);
    }
  }
  function He() {
    return !!V2.overlay && (V2.overlay.parentNode.removeChild(V2.overlay), V2.overlay = null, true);
  }
  function qe() {
    if (V2.wrapper && !le.isPrintingPDF()) {
      if (!y2.disableLayout) {
        v && !y2.embedded && document.documentElement.style.setProperty("--vh", 0.01 * window.innerHeight + "px");
        const e2 = Oe(), t2 = x2;
        Be(y2.width, y2.height), V2.slides.style.width = e2.width + "px", V2.slides.style.height = e2.height + "px", x2 = Math.min(e2.presentationWidth / e2.width, e2.presentationHeight / e2.height), x2 = Math.max(x2, y2.minScale), x2 = Math.min(x2, y2.maxScale), x2 === 1 ? (V2.slides.style.zoom = "", V2.slides.style.left = "", V2.slides.style.top = "", V2.slides.style.bottom = "", V2.slides.style.right = "", Pe({ layout: "" })) : x2 > 1 && f && window.devicePixelRatio < 2 ? (V2.slides.style.zoom = x2, V2.slides.style.left = "", V2.slides.style.top = "", V2.slides.style.bottom = "", V2.slides.style.right = "", Pe({ layout: "" })) : (V2.slides.style.zoom = "", V2.slides.style.left = "50%", V2.slides.style.top = "50%", V2.slides.style.bottom = "auto", V2.slides.style.right = "auto", Pe({ layout: "translate(-50%, -50%) scale(" + x2 + ")" }));
        const i2 = Array.from(V2.wrapper.querySelectorAll(".slides section"));
        for (let t3 = 0, s2 = i2.length; t3 < s2; t3++) {
          const s3 = i2[t3];
          s3.style.display !== "none" && (y2.center || s3.classList.contains("center") ? s3.classList.contains("stack") ? s3.style.top = 0 : s3.style.top = Math.max((e2.height - s3.scrollHeight) / 2, 0) + "px" : s3.style.top = "");
        }
        t2 !== x2 && Ne({ type: "resize", data: { oldScale: t2, scale: x2, size: e2 } });
      }
      ae.update(), G.updateParallax(), te.isActive() && te.update();
    }
  }
  function Be(e2, i2) {
    t(V2.slides, "section > .stretch, section > .r-stretch").forEach((t2) => {
      let s2 = c(t2, i2);
      if (/(img|video)/gi.test(t2.nodeName)) {
        const i3 = t2.naturalWidth || t2.videoWidth, n2 = t2.naturalHeight || t2.videoHeight, a3 = Math.min(e2 / i3, s2 / n2);
        t2.style.width = i3 * a3 + "px", t2.style.height = n2 * a3 + "px";
      } else
        t2.style.width = e2 + "px", t2.style.height = s2 + "px";
    });
  }
  function Oe(e2, t2) {
    const i2 = { width: y2.width, height: y2.height, presentationWidth: e2 || V2.wrapper.offsetWidth, presentationHeight: t2 || V2.wrapper.offsetHeight };
    return i2.presentationWidth -= i2.presentationWidth * y2.margin, i2.presentationHeight -= i2.presentationHeight * y2.margin, typeof i2.width == "string" && /%$/.test(i2.width) && (i2.width = parseInt(i2.width, 10) / 100 * i2.presentationWidth), typeof i2.height == "string" && /%$/.test(i2.height) && (i2.height = parseInt(i2.height, 10) / 100 * i2.presentationHeight), i2;
  }
  function Ue(e2, t2) {
    typeof e2 == "object" && typeof e2.setAttribute == "function" && e2.setAttribute("data-previous-indexv", t2 || 0);
  }
  function We(e2) {
    if (typeof e2 == "object" && typeof e2.setAttribute == "function" && e2.classList.contains("stack")) {
      const t2 = e2.hasAttribute("data-start-indexv") ? "data-start-indexv" : "data-previous-indexv";
      return parseInt(e2.getAttribute(t2) || 0, 10);
    }
    return 0;
  }
  function Ke(e2 = m2) {
    return e2 && e2.parentNode && !!e2.parentNode.nodeName.match(/section/i);
  }
  function Ve() {
    return !(!m2 || !Ke(m2)) && !m2.nextElementSibling;
  }
  function $e() {
    return u2 === 0 && g2 === 0;
  }
  function je() {
    return !!m2 && (!m2.nextElementSibling && (!Ke(m2) || !m2.parentNode.nextElementSibling));
  }
  function Xe() {
    if (y2.pause) {
      const e2 = V2.wrapper.classList.contains("paused");
      At(), V2.wrapper.classList.add("paused"), e2 === false && Ne({ type: "paused" });
    }
  }
  function Ye() {
    const e2 = V2.wrapper.classList.contains("paused");
    V2.wrapper.classList.remove("paused"), Rt(), e2 && Ne({ type: "resumed" });
  }
  function _e(e2) {
    typeof e2 == "boolean" ? e2 ? Xe() : Ye() : Je() ? Ye() : Xe();
  }
  function Je() {
    return V2.wrapper.classList.contains("paused");
  }
  function Qe(e2) {
    typeof e2 == "boolean" ? e2 ? kt() : St() : _ ? kt() : St();
  }
  function Ze() {
    return !(!j2 || _);
  }
  function Ge(e2, t2, i2, s2) {
    if (Ne({ type: "beforeslidechange", data: { indexh: e2 === void 0 ? u2 : e2, indexv: t2 === void 0 ? g2 : t2, origin: s2 } }).defaultPrevented)
      return;
    p2 = m2;
    const n2 = V2.wrapper.querySelectorAll(".slides>section");
    if (n2.length === 0)
      return;
    t2 !== void 0 || te.isActive() || (t2 = We(n2[e2])), p2 && p2.parentNode && p2.parentNode.classList.contains("stack") && Ue(p2.parentNode, g2);
    const a3 = L2.concat();
    L2.length = 0;
    let r2 = u2 || 0, o2 = g2 || 0;
    u2 = nt(".slides>section", e2 === void 0 ? u2 : e2), g2 = nt(".slides>section.present>section", t2 === void 0 ? g2 : t2);
    let l3 = u2 !== r2 || g2 !== o2;
    l3 || (p2 = null);
    let d2 = n2[u2], c2 = d2.querySelectorAll("section");
    m2 = c2[g2] || d2;
    let h3 = false;
    l3 && p2 && m2 && !te.isActive() && (p2.hasAttribute("data-auto-animate") && m2.hasAttribute("data-auto-animate") && p2.getAttribute("data-auto-animate-id") === m2.getAttribute("data-auto-animate-id") && !(u2 > r2 || g2 > o2 ? m2 : p2).hasAttribute("data-auto-animate-restart") && (h3 = true, V2.slides.classList.add("disable-slide-transitions")), $2 = "running"), at(), qe(), te.isActive() && te.update(), i2 !== void 0 && ee.goto(i2), p2 && p2 !== m2 && (p2.classList.remove("present"), p2.setAttribute("aria-hidden", "true"), $e() && setTimeout(() => {
      gt().forEach((e3) => {
        Ue(e3, 0);
      });
    }, 0));
    e:
      for (let e3 = 0, t3 = L2.length; e3 < t3; e3++) {
        for (let t4 = 0; t4 < a3.length; t4++)
          if (a3[t4] === L2[e3]) {
            a3.splice(t4, 1);
            continue e;
          }
        V2.viewport.classList.add(L2[e3]), Ne({ type: L2[e3] });
      }
    for (; a3.length; )
      V2.viewport.classList.remove(a3.pop());
    l3 && Ne({ type: "slidechanged", data: { indexh: u2, indexv: g2, previousSlide: p2, currentSlide: m2, origin: s2 } }), !l3 && p2 || (J.stopEmbeddedContent(p2), J.startEmbeddedContent(m2)), requestAnimationFrame(() => {
      be(ye(m2));
    }), ae.update(), ne.update(), he.update(), G.update(), G.updateParallax(), Q.update(), ee.update(), se.writeURL(), Rt(), h3 && (setTimeout(() => {
      V2.slides.classList.remove("disable-slide-transitions");
    }, 0), y2.autoAnimate && Z.run(p2, m2));
  }
  function et() {
    ke(), Se(), qe(), j2 = y2.autoSlide, Rt(), G.create(), se.writeURL(), ee.sortAll(), ne.update(), ae.update(), at(), he.update(), he.updateVisibility(), G.update(true), Q.update(), J.formatEmbeddedContent(), y2.autoPlayMedia === false ? J.stopEmbeddedContent(m2, { unloadIframes: false }) : J.startEmbeddedContent(m2), te.isActive() && te.layout();
  }
  function tt(e2 = m2) {
    G.sync(e2), ee.sync(e2), J.load(e2), G.update(), he.update();
  }
  function it() {
    ht().forEach((e2) => {
      t(e2, "section").forEach((e3, t2) => {
        t2 > 0 && (e3.classList.remove("present"), e3.classList.remove("past"), e3.classList.add("future"), e3.setAttribute("aria-hidden", "true"));
      });
    });
  }
  function st(e2 = ht()) {
    e2.forEach((t2, i2) => {
      let s2 = e2[Math.floor(Math.random() * e2.length)];
      s2.parentNode === t2.parentNode && t2.parentNode.insertBefore(t2, s2);
      let n2 = t2.querySelectorAll("section");
      n2.length && st(n2);
    });
  }
  function nt(e2, i2) {
    let s2 = t(V2.wrapper, e2), n2 = s2.length, a3 = le.isPrintingPDF();
    if (n2) {
      y2.loop && (i2 %= n2) < 0 && (i2 = n2 + i2), i2 = Math.max(Math.min(i2, n2 - 1), 0);
      for (let e4 = 0; e4 < n2; e4++) {
        let n3 = s2[e4], r3 = y2.rtl && !Ke(n3);
        n3.classList.remove("past"), n3.classList.remove("present"), n3.classList.remove("future"), n3.setAttribute("hidden", ""), n3.setAttribute("aria-hidden", "true"), n3.querySelector("section") && n3.classList.add("stack"), a3 ? n3.classList.add("present") : e4 < i2 ? (n3.classList.add(r3 ? "future" : "past"), y2.fragments && t(n3, ".fragment").forEach((e5) => {
          e5.classList.add("visible"), e5.classList.remove("current-fragment");
        })) : e4 > i2 && (n3.classList.add(r3 ? "past" : "future"), y2.fragments && t(n3, ".fragment.visible").forEach((e5) => {
          e5.classList.remove("visible", "current-fragment");
        }));
      }
      let e3 = s2[i2], r2 = e3.classList.contains("present");
      e3.classList.add("present"), e3.removeAttribute("hidden"), e3.removeAttribute("aria-hidden"), r2 || Ne({ target: e3, type: "visible", bubbles: false });
      let o2 = e3.getAttribute("data-state");
      o2 && (L2 = L2.concat(o2.split(" ")));
    } else
      i2 = 0;
    return i2;
  }
  function at() {
    let e2, i2, s2 = ht(), n2 = s2.length;
    if (n2 && u2 !== void 0) {
      let a3 = te.isActive() ? 10 : y2.viewDistance;
      v && (a3 = te.isActive() ? 6 : y2.mobileViewDistance), le.isPrintingPDF() && (a3 = Number.MAX_VALUE);
      for (let r2 = 0; r2 < n2; r2++) {
        let o2 = s2[r2], l3 = t(o2, "section"), d2 = l3.length;
        if (e2 = Math.abs((u2 || 0) - r2) || 0, y2.loop && (e2 = Math.abs(((u2 || 0) - r2) % (n2 - a3)) || 0), e2 < a3 ? J.load(o2) : J.unload(o2), d2) {
          let t2 = We(o2);
          for (let s3 = 0; s3 < d2; s3++) {
            let n3 = l3[s3];
            i2 = r2 === (u2 || 0) ? Math.abs((g2 || 0) - s3) : Math.abs(s3 - t2), e2 + i2 < a3 ? J.load(n3) : J.unload(n3);
          }
        }
      }
      pt() ? V2.wrapper.classList.add("has-vertical-slides") : V2.wrapper.classList.remove("has-vertical-slides"), vt() ? V2.wrapper.classList.add("has-horizontal-slides") : V2.wrapper.classList.remove("has-horizontal-slides");
    }
  }
  function rt({ includeFragments: e2 = false } = {}) {
    let t2 = V2.wrapper.querySelectorAll(".slides>section"), i2 = V2.wrapper.querySelectorAll(".slides>section.present>section"), s2 = { left: u2 > 0, right: u2 < t2.length - 1, up: g2 > 0, down: g2 < i2.length - 1 };
    if (y2.loop && (t2.length > 1 && (s2.left = true, s2.right = true), i2.length > 1 && (s2.up = true, s2.down = true)), t2.length > 1 && y2.navigationMode === "linear" && (s2.right = s2.right || s2.down, s2.left = s2.left || s2.up), e2 === true) {
      let e3 = ee.availableRoutes();
      s2.left = s2.left || e3.prev, s2.up = s2.up || e3.prev, s2.down = s2.down || e3.next, s2.right = s2.right || e3.next;
    }
    if (y2.rtl) {
      let e3 = s2.left;
      s2.left = s2.right, s2.right = e3;
    }
    return s2;
  }
  function ot(e2 = m2) {
    let t2 = ht(), i2 = 0;
    e:
      for (let s2 = 0; s2 < t2.length; s2++) {
        let n2 = t2[s2], a3 = n2.querySelectorAll("section");
        for (let t3 = 0; t3 < a3.length; t3++) {
          if (a3[t3] === e2)
            break e;
          a3[t3].dataset.visibility !== "uncounted" && i2++;
        }
        if (n2 === e2)
          break;
        n2.classList.contains("stack") === false && n2.dataset.visibility !== "uncounted" && i2++;
      }
    return i2;
  }
  function lt() {
    let e2 = ft(), t2 = ot();
    if (m2) {
      let e3 = m2.querySelectorAll(".fragment");
      if (e3.length > 0) {
        let i2 = 0.9;
        t2 += m2.querySelectorAll(".fragment.visible").length / e3.length * i2;
      }
    }
    return Math.min(t2 / (e2 - 1), 1);
  }
  function dt(e2) {
    let i2, s2 = u2, n2 = g2;
    if (e2) {
      let i3 = Ke(e2), a3 = i3 ? e2.parentNode : e2, r2 = ht();
      s2 = Math.max(r2.indexOf(a3), 0), n2 = void 0, i3 && (n2 = Math.max(t(e2.parentNode, "section").indexOf(e2), 0));
    }
    if (!e2 && m2) {
      if (m2.querySelectorAll(".fragment").length > 0) {
        let e3 = m2.querySelector(".current-fragment");
        i2 = e3 && e3.hasAttribute("data-fragment-index") ? parseInt(e3.getAttribute("data-fragment-index"), 10) : m2.querySelectorAll(".fragment.visible").length - 1;
      }
    }
    return { h: s2, v: n2, f: i2 };
  }
  function ct() {
    return t(V2.wrapper, '.slides section:not(.stack):not([data-visibility="uncounted"])');
  }
  function ht() {
    return t(V2.wrapper, ".slides>section");
  }
  function ut() {
    return t(V2.wrapper, ".slides>section>section");
  }
  function gt() {
    return t(V2.wrapper, ".slides>section.stack");
  }
  function vt() {
    return ht().length > 1;
  }
  function pt() {
    return ut().length > 1;
  }
  function mt() {
    return ct().map((e2) => {
      let t2 = {};
      for (let i2 = 0; i2 < e2.attributes.length; i2++) {
        let s2 = e2.attributes[i2];
        t2[s2.name] = s2.value;
      }
      return t2;
    });
  }
  function ft() {
    return ct().length;
  }
  function bt(e2, t2) {
    let i2 = ht()[e2], s2 = i2 && i2.querySelectorAll("section");
    return s2 && s2.length && typeof t2 == "number" ? s2 ? s2[t2] : void 0 : i2;
  }
  function yt(e2, t2) {
    let i2 = typeof e2 == "number" ? bt(e2, t2) : e2;
    if (i2)
      return i2.slideBackgroundElement;
  }
  function wt() {
    let e2 = dt();
    return { indexh: e2.h, indexv: e2.v, indexf: e2.f, paused: Je(), overview: te.isActive() };
  }
  function Et(e2) {
    if (typeof e2 == "object") {
      Ge(s(e2.indexh), s(e2.indexv), s(e2.indexf));
      let t2 = s(e2.paused), i2 = s(e2.overview);
      typeof t2 == "boolean" && t2 !== Je() && _e(t2), typeof i2 == "boolean" && i2 !== te.isActive() && te.toggle(i2);
    }
  }
  function Rt() {
    if (At(), m2 && y2.autoSlide !== false) {
      let e2 = m2.querySelector(".current-fragment");
      e2 || (e2 = m2.querySelector(".fragment"));
      let i2 = e2 ? e2.getAttribute("data-autoslide") : null, s2 = m2.parentNode ? m2.parentNode.getAttribute("data-autoslide") : null, n2 = m2.getAttribute("data-autoslide");
      i2 ? j2 = parseInt(i2, 10) : n2 ? j2 = parseInt(n2, 10) : s2 ? j2 = parseInt(s2, 10) : (j2 = y2.autoSlide, m2.querySelectorAll(".fragment").length === 0 && t(m2, "video, audio").forEach((e3) => {
        e3.hasAttribute("data-autoplay") && j2 && 1e3 * e3.duration / e3.playbackRate > j2 && (j2 = 1e3 * e3.duration / e3.playbackRate + 1e3);
      })), !j2 || _ || Je() || te.isActive() || je() && !ee.availableRoutes().next && y2.loop !== true || (X = setTimeout(() => {
        typeof y2.autoSlideMethod == "function" ? y2.autoSlideMethod() : Mt(), Rt();
      }, j2), Y = Date.now()), b2 && b2.setPlaying(X !== -1);
    }
  }
  function At() {
    clearTimeout(X), X = -1;
  }
  function St() {
    j2 && !_ && (_ = true, Ne({ type: "autoslidepaused" }), clearTimeout(X), b2 && b2.setPlaying(false));
  }
  function kt() {
    j2 && _ && (_ = false, Ne({ type: "autoslideresumed" }), Rt());
  }
  function Lt({ skipFragments: e2 = false } = {}) {
    A2.hasNavigatedHorizontally = true, y2.rtl ? (te.isActive() || e2 || ee.next() === false) && rt().left && Ge(u2 + 1, y2.navigationMode === "grid" ? g2 : void 0) : (te.isActive() || e2 || ee.prev() === false) && rt().left && Ge(u2 - 1, y2.navigationMode === "grid" ? g2 : void 0);
  }
  function xt({ skipFragments: e2 = false } = {}) {
    A2.hasNavigatedHorizontally = true, y2.rtl ? (te.isActive() || e2 || ee.prev() === false) && rt().right && Ge(u2 - 1, y2.navigationMode === "grid" ? g2 : void 0) : (te.isActive() || e2 || ee.next() === false) && rt().right && Ge(u2 + 1, y2.navigationMode === "grid" ? g2 : void 0);
  }
  function Ct({ skipFragments: e2 = false } = {}) {
    (te.isActive() || e2 || ee.prev() === false) && rt().up && Ge(u2, g2 - 1);
  }
  function Pt({ skipFragments: e2 = false } = {}) {
    A2.hasNavigatedVertically = true, (te.isActive() || e2 || ee.next() === false) && rt().down && Ge(u2, g2 + 1);
  }
  function Nt({ skipFragments: e2 = false } = {}) {
    if (e2 || ee.prev() === false)
      if (rt().up)
        Ct({ skipFragments: e2 });
      else {
        let i2;
        if (i2 = y2.rtl ? t(V2.wrapper, ".slides>section.future").pop() : t(V2.wrapper, ".slides>section.past").pop(), i2 && i2.classList.contains("stack")) {
          let e3 = i2.querySelectorAll("section").length - 1 || void 0;
          Ge(u2 - 1, e3);
        } else
          Lt({ skipFragments: e2 });
      }
  }
  function Mt({ skipFragments: e2 = false } = {}) {
    if (A2.hasNavigatedHorizontally = true, A2.hasNavigatedVertically = true, e2 || ee.next() === false) {
      let t2 = rt();
      t2.down && t2.right && y2.loop && Ve() && (t2.down = false), t2.down ? Pt({ skipFragments: e2 }) : y2.rtl ? Lt({ skipFragments: e2 }) : xt({ skipFragments: e2 });
    }
  }
  function Dt(e2) {
    y2.autoSlideStoppable && St();
  }
  function It(e2) {
    let t2 = e2.data;
    if (typeof t2 == "string" && t2.charAt(0) === "{" && t2.charAt(t2.length - 1) === "}" && (t2 = JSON.parse(t2), t2.method && typeof h2[t2.method] == "function"))
      if (k.test(t2.method) === false) {
        const e3 = h2[t2.method].apply(h2, t2.args);
        Me("callback", { method: t2.method, result: e3 });
      } else
        console.warn('reveal.js: "' + t2.method + '" is is blacklisted from the postMessage API');
  }
  function Tt(e2) {
    $2 === "running" && /section/gi.test(e2.target.nodeName) && ($2 = "idle", Ne({ type: "slidetransitionend", data: { indexh: u2, indexv: g2, previousSlide: p2, currentSlide: m2 } }));
  }
  function zt(e2) {
    const t2 = r(e2.target, 'a[href^="#"]');
    if (t2) {
      const i2 = t2.getAttribute("href"), s2 = se.getIndicesFromHash(i2);
      s2 && (h2.slide(s2.h, s2.v, s2.f), e2.preventDefault());
    }
  }
  function Ft(e2) {
    qe();
  }
  function Ht(e2) {
    document.hidden === false && document.activeElement !== document.body && (typeof document.activeElement.blur == "function" && document.activeElement.blur(), document.body.focus());
  }
  function qt(e2) {
    (document.fullscreenElement || document.webkitFullscreenElement) === V2.wrapper && (e2.stopImmediatePropagation(), setTimeout(() => {
      h2.layout(), h2.focus.focus();
    }, 1));
  }
  function Bt(e2) {
    if (e2.currentTarget && e2.currentTarget.hasAttribute("href")) {
      let t2 = e2.currentTarget.getAttribute("href");
      t2 && (Te(t2), e2.preventDefault());
    }
  }
  function Ot(e2) {
    je() && y2.loop === false ? (Ge(0, 0), kt()) : _ ? kt() : St();
  }
  const Ut = { VERSION: "4.3.0", initialize: ue, configure: Ae, destroy: Le, sync: et, syncSlide: tt, syncFragments: ee.sync.bind(ee), slide: Ge, left: Lt, right: xt, up: Ct, down: Pt, prev: Nt, next: Mt, navigateLeft: Lt, navigateRight: xt, navigateUp: Ct, navigateDown: Pt, navigatePrev: Nt, navigateNext: Mt, navigateFragment: ee.goto.bind(ee), prevFragment: ee.prev.bind(ee), nextFragment: ee.next.bind(ee), on: xe, off: Ce, addEventListener: xe, removeEventListener: Ce, layout: qe, shuffle: st, availableRoutes: rt, availableFragments: ee.availableRoutes.bind(ee), toggleHelp: ze, toggleOverview: te.toggle.bind(te), togglePause: _e, toggleAutoSlide: Qe, isFirstSlide: $e, isLastSlide: je, isLastVerticalSlide: Ve, isVerticalSlide: Ke, isPaused: Je, isAutoSliding: Ze, isSpeakerNotes: he.isSpeakerNotesWindow.bind(he), isOverview: te.isActive.bind(te), isFocused: de.isFocused.bind(de), isPrintingPDF: le.isPrintingPDF.bind(le), isReady: () => w2, loadSlide: J.load.bind(J), unloadSlide: J.unload.bind(J), showPreview: Te, hidePreview: He, addEventListeners: Se, removeEventListeners: ke, dispatchEvent: Ne, getState: wt, setState: Et, getProgress: lt, getIndices: dt, getSlidesAttributes: mt, getSlidePastCount: ot, getTotalSlides: ft, getSlide: bt, getPreviousSlide: () => p2, getCurrentSlide: () => m2, getSlideBackground: yt, getSlideNotes: he.getSlideNotes.bind(he), getSlides: ct, getHorizontalSlides: ht, getVerticalSlides: ut, hasHorizontalSlides: vt, hasVerticalSlides: pt, hasNavigatedHorizontally: () => A2.hasNavigatedHorizontally, hasNavigatedVertically: () => A2.hasNavigatedVertically, addKeyBinding: ie.addKeyBinding.bind(ie), removeKeyBinding: ie.removeKeyBinding.bind(ie), triggerKey: ie.triggerKey.bind(ie), registerKeyboardShortcut: ie.registerKeyboardShortcut.bind(ie), getComputedSlideSize: Oe, getScale: () => x2, getConfig: () => y2, getQueryHash: d, getRevealElement: () => a2, getSlidesElement: () => V2.slides, getViewportElement: () => V2.viewport, getBackgroundsElement: () => G.element, registerPlugin: oe.registerPlugin.bind(oe), hasPlugin: oe.hasPlugin.bind(oe), getPlugin: oe.getPlugin.bind(oe), getPlugins: oe.getRegisteredPlugins.bind(oe) };
  return e(h2, __spreadProps(__spreadValues({}, Ut), { announceStatus: be, getStatusText: ye, print: le, focus: de, progress: ae, controls: ne, location: se, overview: te, fragments: ee, slideContent: J, slideNumber: Q, onUserInput: Dt, closeOverlay: He, updateSlidesVisibility: at, layoutSlideContents: Be, transformSlides: Pe, cueAutoSlide: Rt, cancelAutoSlide: At })), Ut;
}
var $ = V;
var j = [];
$.initialize = (e2) => (Object.assign($, new V(document.querySelector(".reveal"), e2)), j.map((e3) => e3($)), $.initialize()), ["configure", "on", "off", "addEventListener", "removeEventListener", "registerPlugin"].forEach((e2) => {
  $[e2] = (...t2) => {
    j.push((i2) => i2[e2].call(null, ...t2));
  };
}), $.isReady = () => false, $.VERSION = "4.3.0";
var reveal_esm_default = $;

// dep:reveal_js_dist_reveal_esm_js
var reveal_js_dist_reveal_esm_js_default = reveal_esm_default;
export {
  reveal_js_dist_reveal_esm_js_default as default
};
/*!
* reveal.js 4.3.0
* https://revealjs.com
* MIT licensed
*
* Copyright (C) 2011-2022 Hakim El Hattab, https://hakim.se
*/
//# sourceMappingURL=reveal_js_dist_reveal_esm_js.js.map
