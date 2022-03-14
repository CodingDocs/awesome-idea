import {
  __commonJS,
  __objRest,
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

// node_modules/@waline/client/dist/Waline.min.js
var require_Waline_min = __commonJS({
  "node_modules/@waline/client/dist/Waline.min.js"(exports, module) {
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
    !function(e, t) {
      typeof exports == "object" && typeof module == "object" ? module.exports = t() : typeof define == "function" && define.amd ? define([], t) : typeof exports == "object" ? exports.Waline = t() : e.Waline = t();
    }(exports, function() {
      return (() => {
        var e = { 523: (e2, t2, n2) => {
          "use strict";
          n2.d(t2, { Z: () => l });
          var o2 = n2(601), r = n2.n(o2), a = n2(609), i = n2.n(a)()(r());
          i.push([e2.id, ':root{--waline-font-size: 16px;--waline-white: #fff;--waline-light-grey: #999;--waline-dark-grey: #666;--waline-theme-color: #27ae60;--waline-active-color: #2ecc71;--waline-text-color: #444;--waline-bgcolor: #fff;--waline-bgcolor-light: #f8f8f8;--waline-bgcolor-hover: #f0f0f0;--waline-border-color: #ddd;--waline-disable-bgcolor: #f8f8f8;--waline-disable-color: #000;--waline-code-bgcolor: #282c34;--waline-bq-color: #f0f0f0;--waline-avatar-size: 3.25rem;--waline-mobile-avatar-size: calc(var(--waline-avatar-size) * 9 / 13);--waline-badge-color: #3498db;--waline-badge-font-size: 0.775em;--waline-info-bgcolor: #f8f8f8;--waline-info-color: #999;--waline-info-font-size: 0.625em;--waline-border: 1px solid var(--waline-border-color);--waline-avatar-radius: 50%;--waline-box-shadow: none}.v[data-class=v]{font-size:var(--waline-font-size);text-align:left}.v[data-class=v] *{box-sizing:content-box;line-height:1.75}.v[data-class=v] p{color:var(--waline-text-color)}.v[data-class=v] a{position:relative;display:inline-block;color:var(--waline-theme-color);text-decoration:none;cursor:pointer}.v[data-class=v] a:hover{color:var(--waline-active-color)}.v[data-class=v] img{max-width:100%;max-height:400px;border:none}.v[data-class=v] hr{margin:.825em 0;border-style:dashed;border-color:var(--waline-bgcolor-light)}.v[data-class=v] code,.v[data-class=v] pre{margin:0;padding:.2em .4em;border-radius:3px;background:var(--waline-bgcolor-light);font-size:85%}.v[data-class=v] pre{overflow:auto;padding:10px;line-height:1.45}.v[data-class=v] pre::-webkit-scrollbar{width:6px;height:6px}.v[data-class=v] pre::-webkit-scrollbar-track-piece:horizontal{border-radius:6px;background:rgba(0,0,0,.1)}.v[data-class=v] pre::-webkit-scrollbar-thumb:horizontal{width:6px;border-radius:6px;background:var(--waline-theme-color)}.v[data-class=v] pre code{padding:0;background:transparent;color:var(--waline-text-color);white-space:pre-wrap;word-break:keep-all}.v[data-class=v] blockquote{margin:.5em 0;padding:.5em 0 .5em 1em;border-left:8px solid var(--waline-bq-color);color:var(--waline-dark-grey)}.v[data-class=v] blockquote>p{margin:0}.v[data-class=v] ol,.v[data-class=v] ul{margin-left:1.25em;padding:0}.v[data-class=v] input[type=checkbox],.v[data-class=v] input[type=radio]{display:inline-block;vertical-align:middle;margin-top:-2px}.v[data-class=v] .vbtn{display:inline-block;vertical-align:middle;min-width:2.5em;margin-bottom:0;padding:.5em 1em;border:1px solid var(--waline-border-color);border-radius:.5em;background:transparent;color:var(--waline-text-color);font-weight:400;font-size:.75em;line-height:1.5;text-align:center;white-space:nowrap;cursor:pointer;-webkit-user-select:none;user-select:none;transition-duration:.4s;touch-action:manipulation}.v[data-class=v] .vbtn:hover,.v[data-class=v] .vbtn:active{border-color:var(--waline-theme-color);color:var(--waline-theme-color)}.v[data-class=v] .vbtn:disabled{border-color:var(--waline-border-color);background:var(--waline-disable-bgcolor);color:var(--waline-disable-color);cursor:not-allowed}.v[data-class=v] .vbtn.primary{border-color:var(--waline-theme-color);background:var(--waline-theme-color);color:var(--waline-white)}.v[data-class=v] .vbtn.primary:hover,.v[data-class=v] .vbtn.primary:active{border-color:var(--waline-active-color);background:var(--waline-active-color);color:var(--waline-white)}.v[data-class=v] .vbtn.primary:disabled{border-color:var(--waline-border-color);background:var(--waline-disable-bgcolor);color:var(--waline-disable-color);cursor:not-allowed}.v[data-class=v] .vloading{text-align:center}.v[data-class=v] .vloading svg{margin:0 auto}.v[data-class=v] .vcomment{position:relative;display:flex;margin-bottom:.75em}.v[data-class=v] .vclose{position:absolute;top:-4px;right:-4px;padding:0;border:none;background:transparent;line-height:1;cursor:pointer}.v[data-class=v] .vlogin-info{max-width:80px;margin-top:.75em;text-align:center}.v[data-class=v] .vlogout-btn{position:absolute;top:-10px;right:-10px;padding:3px;border:none;background:transparent;line-height:0;cursor:pointer}.v[data-class=v] .vavatar{position:relative;width:var(--waline-avatar-size);height:var(--waline-avatar-size);margin:0 auto;border:var(--waline-border);border-radius:var(--waline-avatar-radius)}@media(max-width: 720px){.v[data-class=v] .vavatar{width:var(--waline-mobile-avatar-size);height:var(--waline-mobile-avatar-size)}}.v[data-class=v] .vavatar img{width:100%;height:100%;border-radius:var(--waline-avatar-radius)}.v[data-class=v] .vlogin-nick{display:block;color:var(--waline-theme-color);font-size:.75em;word-break:break-all}.v[data-class=v] .vpanel{position:relative;width:100%;flex-shrink:1;margin:.5em;border:var(--waline-border);border-radius:.75em;background:var(--waline-bgcolor);box-shadow:var(--waline-box-shadow)}.v[data-class=v] .vheader{display:flex;padding:0 4px;border-bottom:2px dashed var(--waline-border-color);border-top-left-radius:.75em;border-top-right-radius:.75em;overflow:hidden}@media(max-width: 580px){.v[data-class=v] .vheader{display:block}}.v[data-class=v] .vheader .vheader-item{display:flex;flex:1}@media(max-width: 580px){.v[data-class=v] .vheader .vheader-item:not(:last-child){border-bottom:2px dashed var(--waline-border-color)}}.v[data-class=v] .vheader.vheader-1 .vheader-item{width:100%}.v[data-class=v] .vheader.vheader-2 .vheader-item{width:50%}@media(max-width: 580px){.v[data-class=v] .vheader.vheader-2 .vheader-item{flex:0;width:100%}}.v[data-class=v] .vheader.vheader-3 .vheader-item{width:33.33%}@media(max-width: 580px){.v[data-class=v] .vheader.vheader-3 .vheader-item{width:100%}}.v[data-class=v] .vheader label{min-width:40px;padding:.75em .5em;color:var(--waline-text-color);font-size:.75em;text-align:center}.v[data-class=v] .vheader input{flex:1;width:0;padding:.5em;background:transparent;font-size:.625em;resize:none}.v[data-class=v] .veditor,.v[data-class=v] .vinput{max-width:100%;border:none;color:var(--waline-text-color);outline:none;transition:all .25s ease}.v[data-class=v] .veditor:focus,.v[data-class=v] .vinput:focus{background:var(--waline-bgcolor-light)}.v[data-class=v] .veditor{position:relative;width:calc(100% - 1em);min-height:8.75em;margin:.75em .5em;border-radius:.5em;background:transparent;font-size:.875em;resize:vertical}.v[data-class=v] .vpreview{padding:0 .5em .5em}.v[data-class=v] .vpreview h4{margin:.25em;font-weight:bold;font-size:.9375em}.v[data-class=v] .vpreview .vcontent{padding:.25em;min-height:1.25em;border:var(--waline-border);border-radius:.25em;word-break:break-word;-webkit-hyphens:auto;hyphens:auto}.v[data-class=v] .vpreview .vcontent>*:first-child{margin-top:0}.v[data-class=v] .vpreview .vcontent>*:last-child{margin-bottom:0}.v[data-class=v] .vfooter{position:relative;display:flex;flex-wrap:wrap;margin:.5em .75em}.v[data-class=v] .vactions{display:flex;flex:2;align-items:center}.v[data-class=v] .vaction{width:1.5em;height:1.5em;border:none;margin:2px;padding:0;background:transparent;font-size:16px;cursor:pointer;color:var(--waline-text-color);display:inline-flex;justify-content:center;align-items:center}.v[data-class=v] .vaction:hover{color:var(--waline-theme-color)}.v[data-class=v] .vaction.actived{color:var(--waline-active-color)}.v[data-class=v] #waline-image-upload{display:none}.v[data-class=v] #waline-image-upload:focus+label{color:var(--waline-text-color)}.v[data-class=v] #waline-image-upload:focus-visible+label{outline:-webkit-focus-ring-color auto 1px}.v[data-class=v] .vinfo{display:flex;flex:3;align-items:center;justify-content:flex-end}.v[data-class=v] .vinfo .vtext-number{color:var(--waline-info-color);font-size:.75em}.v[data-class=v] .vinfo .vtext-number .illegal{color:red}.v[data-class=v] .vinfo button{margin-left:.75em}.v[data-class=v] .vinfo button svg{display:block;margin:0 auto;line-height:18px}.v[data-class=v] .vemoji-popup{position:absolute;top:100%;left:1.25em;z-index:10;max-width:526px;border:var(--waline-border);border-radius:6px;background:var(--waline-bgcolor);box-shadow:var(--waline-box-shadow);visibility:hidden;opacity:0;transform:scale(0.9, 0.9);transform-origin:0 0;transition:transform .2s ease-out,opacity .2s ease-out}.v[data-class=v] .vemoji-popup.display{visibility:visible;opacity:1;transform:none}.v[data-class=v] .vemoji-popup button{display:inline-block;vertical-align:middle;background:transparent;width:2em;margin:.125em;padding:0;border-width:0;font-size:inherit;line-height:2;text-align:center;cursor:pointer}.v[data-class=v] .vemoji-popup button:hover{background:var(--waline-bgcolor-hover)}.v[data-class=v] .vemoji-popup .vemoji{display:inline-block;vertical-align:middle;max-width:1.5em;max-height:1.5em}.v[data-class=v] .vemoji-popup .vtab-wrapper{max-height:145px;overflow-y:auto;padding:.5em}.v[data-class=v] .vemoji-popup .vtab-wrapper::-webkit-scrollbar{width:6px;height:6px}.v[data-class=v] .vemoji-popup .vtab-wrapper::-webkit-scrollbar-track-piece:vertical{border-radius:6px;background:rgba(0,0,0,.1)}.v[data-class=v] .vemoji-popup .vtab-wrapper::-webkit-scrollbar-thumb:vertical{width:6px;border-radius:6px;background:var(--waline-theme-color)}.v[data-class=v] .vemoji-popup .vtabs{position:relative;height:2em;padding:0 6px}.v[data-class=v] .vemoji-popup .vtabs::before{content:" ";position:absolute;z-index:2;left:0;top:0;right:0;height:1px;background:var(--waline-border-color)}.v[data-class=v] .vemoji-popup .vtab{position:relative;margin:0;padding:0 .5em}.v[data-class=v] .vemoji-popup .vtab.active{z-index:3;background:var(--waline-bgcolor);border:1px solid var(--waline-border-color);border-top-width:0;border-bottom-left-radius:6px;border-bottom-right-radius:6px}.v[data-class=v] .vcards .vitem{position:relative;display:flex;padding:.5em}.v[data-class=v] .vcards .vitem .vuser{width:var(--waline-avatar-size);height:var(--waline-avatar-size);margin-right:.75em;border-radius:var(--waline-avatar-radius);box-shadow:var(--waline-box-shadow)}@media(max-width: 720px){.v[data-class=v] .vcards .vitem .vuser{width:var(--waline-mobile-avatar-size);height:var(--waline-mobile-avatar-size)}}.v[data-class=v] .vcards .vitem:last-child .vcard{border-bottom:none}.v[data-class=v] .vcards .vcard .vitem{padding-right:0}.v[data-class=v] .vcard{flex:1;width:0;padding-bottom:.5em;border-bottom:1px dashed var(--waline-border-color)}.v[data-class=v] .vcard:first-child{margin-left:1em}.v[data-class=v] .vcard .vhead{line-height:1.5}.v[data-class=v] .vcard .vhead .vnick{position:relative;display:inline-block;margin-right:.5em;font-weight:bold;font-size:.875em;line-height:1;text-decoration:none}.v[data-class=v] .vcard .vhead .vnick svg{position:relative;bottom:-0.125em;line-height:1}.v[data-class=v] .vcard .vhead span.vnick{color:var(--waline-dark-grey)}.v[data-class=v] .vcard .vhead .vbadge{display:inline-block;margin-right:.5em;padding:0 .3em;border-radius:3px;background:var(--waline-badge-color);color:var(--waline-white);font-size:var(--waline-badge-font-size)}.v[data-class=v] .vcard .vhead .vtime{margin-right:.875em;color:var(--waline-info-color);font-size:.75em}.v[data-class=v] .vcard .vhead .vreply{float:right;cursor:pointer;padding:4px;border:none;background:transparent;color:var(--waline-text-color);line-height:1;transition:color .2s ease}.v[data-class=v] .vcard .vhead .vreply:hover{color:var(--waline-theme-color)}.v[data-class=v] .vcard .vhead .vreply.active{color:var(--waline-active-color)}.v[data-class=v] .vcard .vmeta{position:relative;line-height:1}.v[data-class=v] .vcard .vmeta>span{display:inline-block;margin-right:.25em;padding:2px 4px;border-radius:.2em;background:var(--waline-info-bgcolor);color:var(--waline-info-color);font-size:var(--waline-info-font-size);line-height:1.5}@media(max-width: 520px){.v[data-class=v] .vcard .vmeta>span{display:none}}.v[data-class=v] .vcard .vmeta>span:empty{display:none}.v[data-class=v] .vcard .vcontent{line-height:2;position:relative;margin-bottom:.75em;padding-top:.625em;font-size:.875em;word-wrap:break-word}.v[data-class=v] .vcard .vcontent.expand{overflow:hidden;max-height:8em;cursor:pointer}.v[data-class=v] .vcard .vcontent.expand::before{content:"";position:absolute;top:0;bottom:3.15em;left:0;z-index:999;display:block;width:100%;background:linear-gradient(180deg, #000, rgba(255, 255, 255, 0.9))}.v[data-class=v] .vcard .vcontent.expand::after{content:attr(data-expand);position:absolute;bottom:0;left:0;z-index:999;display:block;width:100%;height:3.15em;background:rgba(255,255,255,.9);color:#828586;line-height:3.15em;text-align:center}.v[data-class=v] .vcard .vcontent>*:first-child{margin-top:0}.v[data-class=v] .vcard .vcontent>*:last-child{margin-bottom:0}.v[data-class=v] .vcard .vquote{border-left:1px dashed rgba(237,237,237,.5)}.v[data-class=v] .vcard .vquote .vuser{width:var(--waline-mobile-avatar-size);height:var(--waline-mobile-avatar-size)}.v[data-class=v] .vclose-icon{color:var(--waline-border-color)}.v[data-class=v] .vcontent .vemoji{display:inline-block;vertical-align:middle;width:1.25em;margin:.25em}.v[data-class=v] .vcontent .vtex{background:var(--waline-info-bgcolor);color:var(--waline-info-color)}.v[data-class=v] .vcontent span.vtex{display:inline-block;margin-right:.25em;padding:2px 4px;border-radius:.2em;font-size:var(--waline-info-font-size);line-height:1.5}.v[data-class=v] .vcontent p.vtex{text-align:center}.v[data-class=v] .vcontent .katex-display{padding-top:.2em;padding-bottom:.2em;overflow:auto hidden;-webkit-overflow-scrolling:touch}.v[data-class=v] .vcontent .katex-display::-webkit-scrollbar{height:3px}.v[data-class=v] .vcontent .katex-error{color:red}.v[data-class=v] .vcount{padding:.375em;font-weight:bold;font-size:1.25em}.v[data-class=v] .vempty{overflow:auto;padding:1.25em;color:var(--waline-text-color);text-align:center}.v[data-class=v] .vmore{text-align:center}.v[data-class=v] .vmore button{margin:1em 0}.v[data-class=v] .vpower{padding:.5em 0;color:var(--waline-light-grey);font-size:var(--waline-info-font-size);text-align:right}.v[data-class=v] pre,.v[data-class=v] pre[class*=language-]{line-height:1.4;padding:1rem 1.25rem;margin:.75rem 0;background:var(--waline-code-bgcolor);border-radius:6px;overflow:auto}.v[data-class=v] pre code,.v[data-class=v] pre[class*=language-] code{color:#bbb;padding:0;background:transparent !important;border-radius:0}.v[data-class=v] code[class*=language-],.v[data-class=v] pre[class*=language-]{color:#ccc;background:none;font-family:Consolas,Monaco,"Andale Mono","Ubuntu Mono",monospace;font-size:1em;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;-moz-tab-size:4;tab-size:4;-webkit-hyphens:none;hyphens:none}.v[data-class=v] pre[class*=language-]{overflow:auto}.v[data-class=v] :not(pre)>code[class*=language-],.v[data-class=v] pre[class*=language-]{background:#2d2d2d}.v[data-class=v] :not(pre)>code[class*=language-]{padding:.1em;border-radius:.3em;white-space:normal}.v[data-class=v] .token.comment,.v[data-class=v] .token.block-comment,.v[data-class=v] .token.prolog,.v[data-class=v] .token.doctype,.v[data-class=v] .token.cdata{color:#999}.v[data-class=v] .token.punctuation{color:#ccc}.v[data-class=v] .token.tag,.v[data-class=v] .token.attr-name,.v[data-class=v] .token.namespace,.v[data-class=v] .token.deleted{color:#e2777a}.v[data-class=v] .token.function-name{color:#6196cc}.v[data-class=v] .token.boolean,.v[data-class=v] .token.number,.v[data-class=v] .token.function{color:#f08d49}.v[data-class=v] .token.property,.v[data-class=v] .token.class-name,.v[data-class=v] .token.constant,.v[data-class=v] .token.symbol{color:#f8c555}.v[data-class=v] .token.selector,.v[data-class=v] .token.important,.v[data-class=v] .token.atrule,.v[data-class=v] .token.keyword,.v[data-class=v] .token.builtin{color:#cc99cd}.v[data-class=v] .token.string,.v[data-class=v] .token.char,.v[data-class=v] .token.attr-value,.v[data-class=v] .token.regex,.v[data-class=v] .token.variable{color:#7ec699}.v[data-class=v] .token.operator,.v[data-class=v] .token.entity,.v[data-class=v] .token.url{color:#67cdcc}.v[data-class=v] .token.important,.v[data-class=v] .token.bold{font-weight:bold}.v[data-class=v] .token.italic{font-style:italic}.v[data-class=v] .token.entity{cursor:help}.v[data-class=v] .token.inserted{color:green}.waline-widget-item p{display:inline}', ""]);
          const l = i;
        }, 609: (e2) => {
          "use strict";
          e2.exports = function(e3) {
            var t2 = [];
            return t2.toString = function() {
              return this.map(function(t3) {
                var n2 = "", o2 = t3[5] !== void 0;
                return t3[4] && (n2 += "@supports (".concat(t3[4], ") {")), t3[2] && (n2 += "@media ".concat(t3[2], " {")), o2 && (n2 += "@layer".concat(t3[5].length > 0 ? " ".concat(t3[5]) : "", " {")), n2 += e3(t3), o2 && (n2 += "}"), t3[2] && (n2 += "}"), t3[4] && (n2 += "}"), n2;
              }).join("");
            }, t2.i = function(e4, n2, o2, r, a) {
              typeof e4 == "string" && (e4 = [[null, e4, void 0]]);
              var i = {};
              if (o2)
                for (var l = 0; l < this.length; l++) {
                  var s = this[l][0];
                  s != null && (i[s] = true);
                }
              for (var c = 0; c < e4.length; c++) {
                var u = [].concat(e4[c]);
                o2 && i[u[0]] || (a !== void 0 && (u[5] === void 0 || (u[1] = "@layer".concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {").concat(u[1], "}")), u[5] = a), n2 && (u[2] ? (u[1] = "@media ".concat(u[2], " {").concat(u[1], "}"), u[2] = n2) : u[2] = n2), r && (u[4] ? (u[1] = "@supports (".concat(u[4], ") {").concat(u[1], "}"), u[4] = r) : u[4] = "".concat(r)), t2.push(u));
              }
            }, t2;
          };
        }, 601: (e2) => {
          "use strict";
          e2.exports = function(e3) {
            return e3[1];
          };
        }, 948: function(e2) {
          e2.exports = function() {
            "use strict";
            var e3 = function(e4, t3) {
              return e4(t3 = { exports: {} }, t3.exports), t3.exports;
            }(function(e4) {
              var t3 = e4.exports = function() {
                return new RegExp("(?:" + t3.line().source + ")|(?:" + t3.block().source + ")", "gm");
              };
              t3.line = function() {
                return /(?:^|\s)\/\/(.+?)$/gm;
              }, t3.block = function() {
                return /\/\*([\S\s]*?)\*\//gm;
              };
            }), t2 = ["23AC69", "91C132", "F19726", "E8552D", "1AAB8E", "E1147F", "2980C1", "1BA1E6", "9FA0A0", "F19726", "E30B20", "E30B20", "A3338B"];
            return function(n2, o2) {
              o2 === void 0 && (o2 = {});
              var r = o2.colors;
              r === void 0 && (r = t2);
              var a = 0, i = {}, l = new RegExp("(" + /[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af\u0400-\u04FF]+|\w+/.source + "|" + /</.source + ")|(" + e3().source + ")", "gmi");
              return n2.replace(l, function(e4, t3, n3) {
                if (n3)
                  return function(e5) {
                    return '<span style="color: slategray">' + e5 + "</span>";
                  }(n3);
                if (t3 === "<")
                  return "&lt;";
                var o3;
                i[t3] ? o3 = i[t3] : (o3 = r[a], i[t3] = o3);
                var l2 = '<span style="color: #' + o3 + '">' + t3 + "</span>";
                return a = ++a % r.length, l2;
              });
            };
          }();
        }, 62: (e2) => {
          "use strict";
          var t2 = [];
          function n2(e3) {
            for (var n3 = -1, o3 = 0; o3 < t2.length; o3++)
              if (t2[o3].identifier === e3) {
                n3 = o3;
                break;
              }
            return n3;
          }
          function o2(e3, o3) {
            for (var a = {}, i = [], l = 0; l < e3.length; l++) {
              var s = e3[l], c = o3.base ? s[0] + o3.base : s[0], u = a[c] || 0, d = "".concat(c, " ").concat(u);
              a[c] = u + 1;
              var p = n2(d), h = { css: s[1], media: s[2], sourceMap: s[3], supports: s[4], layer: s[5] };
              if (p !== -1)
                t2[p].references++, t2[p].updater(h);
              else {
                var v = r(h, o3);
                o3.byIndex = l, t2.splice(l, 0, { identifier: d, updater: v, references: 1 });
              }
              i.push(d);
            }
            return i;
          }
          function r(e3, t3) {
            var n3 = t3.domAPI(t3);
            return n3.update(e3), function(t4) {
              if (t4) {
                if (t4.css === e3.css && t4.media === e3.media && t4.sourceMap === e3.sourceMap && t4.supports === e3.supports && t4.layer === e3.layer)
                  return;
                n3.update(e3 = t4);
              } else
                n3.remove();
            };
          }
          e2.exports = function(e3, r2) {
            var a = o2(e3 = e3 || [], r2 = r2 || {});
            return function(e4) {
              e4 = e4 || [];
              for (var i = 0; i < a.length; i++) {
                var l = n2(a[i]);
                t2[l].references--;
              }
              for (var s = o2(e4, r2), c = 0; c < a.length; c++) {
                var u = n2(a[c]);
                t2[u].references === 0 && (t2[u].updater(), t2.splice(u, 1));
              }
              a = s;
            };
          };
        }, 793: (e2) => {
          "use strict";
          var t2 = {};
          e2.exports = function(e3, n2) {
            var o2 = function(e4) {
              if (t2[e4] === void 0) {
                var n3 = document.querySelector(e4);
                if (window.HTMLIFrameElement && n3 instanceof window.HTMLIFrameElement)
                  try {
                    n3 = n3.contentDocument.head;
                  } catch (e5) {
                    n3 = null;
                  }
                t2[e4] = n3;
              }
              return t2[e4];
            }(e3);
            if (!o2)
              throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
            o2.appendChild(n2);
          };
        }, 173: (e2) => {
          "use strict";
          e2.exports = function(e3) {
            var t2 = document.createElement("style");
            return e3.setAttributes(t2, e3.attributes), e3.insert(t2, e3.options), t2;
          };
        }, 892: (e2, t2, n2) => {
          "use strict";
          e2.exports = function(e3) {
            var t3 = n2.nc;
            t3 && e3.setAttribute("nonce", t3);
          };
        }, 36: (e2) => {
          "use strict";
          e2.exports = function(e3) {
            var t2 = e3.insertStyleElement(e3);
            return { update: function(n2) {
              !function(e4, t3, n3) {
                var o2 = "";
                n3.supports && (o2 += "@supports (".concat(n3.supports, ") {")), n3.media && (o2 += "@media ".concat(n3.media, " {"));
                var r = n3.layer !== void 0;
                r && (o2 += "@layer".concat(n3.layer.length > 0 ? " ".concat(n3.layer) : "", " {")), o2 += n3.css, r && (o2 += "}"), n3.media && (o2 += "}"), n3.supports && (o2 += "}");
                var a = n3.sourceMap;
                a && typeof btoa != "undefined" && (o2 += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a)))), " */")), t3.styleTagTransform(o2, e4, t3.options);
              }(t2, e3, n2);
            }, remove: function() {
              !function(e4) {
                if (e4.parentNode === null)
                  return false;
                e4.parentNode.removeChild(e4);
              }(t2);
            } };
          };
        }, 464: (e2) => {
          "use strict";
          e2.exports = function(e3, t2) {
            if (t2.styleSheet)
              t2.styleSheet.cssText = e3;
            else {
              for (; t2.firstChild; )
                t2.removeChild(t2.firstChild);
              t2.appendChild(document.createTextNode(e3));
            }
          };
        }, 407: (e2, t2) => {
          "use strict";
          t2.Z = (e3, t3) => {
            const n2 = e3.__vccOpts || e3;
            for (const [e4, o2] of t3)
              n2[e4] = o2;
            return n2;
          };
        } }, t = {};
        function n(o2) {
          var r = t[o2];
          if (r !== void 0)
            return r.exports;
          var a = t[o2] = { id: o2, exports: {} };
          return e[o2].call(a.exports, a, a.exports, n), a.exports;
        }
        n.n = (e2) => {
          var t2 = e2 && e2.__esModule ? () => e2.default : () => e2;
          return n.d(t2, { a: t2 }), t2;
        }, n.d = (e2, t2) => {
          for (var o2 in t2)
            n.o(t2, o2) && !n.o(e2, o2) && Object.defineProperty(e2, o2, { enumerable: true, get: t2[o2] });
        }, n.g = function() {
          if (typeof globalThis == "object")
            return globalThis;
          try {
            return this || new Function("return this")();
          } catch (e2) {
            if (typeof window == "object")
              return window;
          }
        }(), n.o = (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2);
        var o = {};
        return (() => {
          "use strict";
          function e2(e3, t3) {
            const n2 = /* @__PURE__ */ Object.create(null), o2 = e3.split(",");
            for (let e4 = 0; e4 < o2.length; e4++)
              n2[o2[e4]] = true;
            return t3 ? (e4) => !!n2[e4.toLowerCase()] : (e4) => !!n2[e4];
          }
          n.d(o, { default: () => es });
          const t2 = e2("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");
          function r(e3) {
            return !!e3 || e3 === "";
          }
          function a(e3) {
            if (S(e3)) {
              const t3 = {};
              for (let n2 = 0; n2 < e3.length; n2++) {
                const o2 = e3[n2], r2 = L(o2) ? s(o2) : a(o2);
                if (r2)
                  for (const e4 in r2)
                    t3[e4] = r2[e4];
              }
              return t3;
            }
            return L(e3) || R(e3) ? e3 : void 0;
          }
          const i = /;(?![^(]*\))/g, l = /:(.+)/;
          function s(e3) {
            const t3 = {};
            return e3.split(i).forEach((e4) => {
              if (e4) {
                const n2 = e4.split(l);
                n2.length > 1 && (t3[n2[0].trim()] = n2[1].trim());
              }
            }), t3;
          }
          function c(e3) {
            let t3 = "";
            if (L(e3))
              t3 = e3;
            else if (S(e3))
              for (let n2 = 0; n2 < e3.length; n2++) {
                const o2 = c(e3[n2]);
                o2 && (t3 += o2 + " ");
              }
            else if (R(e3))
              for (const n2 in e3)
                e3[n2] && (t3 += n2 + " ");
            return t3.trim();
          }
          function u(e3, t3) {
            if (e3 === t3)
              return true;
            let n2 = E(e3), o2 = E(t3);
            if (n2 || o2)
              return !(!n2 || !o2) && e3.getTime() === t3.getTime();
            if (n2 = S(e3), o2 = S(t3), n2 || o2)
              return !(!n2 || !o2) && function(e4, t4) {
                if (e4.length !== t4.length)
                  return false;
                let n3 = true;
                for (let o3 = 0; n3 && o3 < e4.length; o3++)
                  n3 = u(e4[o3], t4[o3]);
                return n3;
              }(e3, t3);
            if (n2 = R(e3), o2 = R(t3), n2 || o2) {
              if (!n2 || !o2)
                return false;
              if (Object.keys(e3).length !== Object.keys(t3).length)
                return false;
              for (const n3 in e3) {
                const o3 = e3.hasOwnProperty(n3), r2 = t3.hasOwnProperty(n3);
                if (o3 && !r2 || !o3 && r2 || !u(e3[n3], t3[n3]))
                  return false;
              }
            }
            return String(e3) === String(t3);
          }
          function d(e3, t3) {
            return e3.findIndex((e4) => u(e4, t3));
          }
          const p = (e3) => e3 == null ? "" : S(e3) || R(e3) && (e3.toString === O || !A(e3.toString)) ? JSON.stringify(e3, h, 2) : String(e3), h = (e3, t3) => t3 && t3.__v_isRef ? h(e3, t3.value) : C(t3) ? { [`Map(${t3.size})`]: [...t3.entries()].reduce((e4, [t4, n2]) => (e4[`${t4} =>`] = n2, e4), {}) } : z(t3) ? { [`Set(${t3.size})`]: [...t3.values()] } : !R(t3) || S(t3) || $(t3) ? t3 : String(t3), v = {}, f = [], m = () => {
          }, g = () => false, b = /^on[^a-z]/, w = (e3) => b.test(e3), y = (e3) => e3.startsWith("onUpdate:"), k = Object.assign, x = Object.prototype.hasOwnProperty, _ = (e3, t3) => x.call(e3, t3), S = Array.isArray, C = (e3) => j(e3) === "[object Map]", z = (e3) => j(e3) === "[object Set]", E = (e3) => e3 instanceof Date, A = (e3) => typeof e3 == "function", L = (e3) => typeof e3 == "string", T = (e3) => typeof e3 == "symbol", R = (e3) => e3 !== null && typeof e3 == "object", I = (e3) => R(e3) && A(e3.then) && A(e3.catch), O = Object.prototype.toString, j = (e3) => O.call(e3), $ = (e3) => j(e3) === "[object Object]", M = (e3) => L(e3) && e3 !== "NaN" && e3[0] !== "-" && "" + parseInt(e3, 10) === e3, U = e2(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), P = (e3) => {
            const t3 = /* @__PURE__ */ Object.create(null);
            return (n2) => t3[n2] || (t3[n2] = e3(n2));
          }, N = /-(\w)/g, F = P((e3) => e3.replace(N, (e4, t3) => t3 ? t3.toUpperCase() : "")), V = /\B([A-Z])/g, D = P((e3) => e3.replace(V, "-$1").toLowerCase()), B = P((e3) => e3.charAt(0).toUpperCase() + e3.slice(1)), q = P((e3) => e3 ? `on${B(e3)}` : ""), H = (e3, t3) => !Object.is(e3, t3), W = (e3, t3) => {
            for (let n2 = 0; n2 < e3.length; n2++)
              e3[n2](t3);
          }, Z = (e3, t3, n2) => {
            Object.defineProperty(e3, t3, { configurable: true, enumerable: false, value: n2 });
          }, J = (e3) => {
            const t3 = parseFloat(e3);
            return isNaN(t3) ? e3 : t3;
          };
          let K;
          const Q = () => K || (K = typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : typeof window != "undefined" ? window : n.g !== void 0 ? n.g : {});
          let Y;
          const X = [];
          class G {
            constructor(e3 = false) {
              this.active = true, this.effects = [], this.cleanups = [], !e3 && Y && (this.parent = Y, this.index = (Y.scopes || (Y.scopes = [])).push(this) - 1);
            }
            run(e3) {
              if (this.active)
                try {
                  return this.on(), e3();
                } finally {
                  this.off();
                }
            }
            on() {
              this.active && (X.push(this), Y = this);
            }
            off() {
              this.active && (X.pop(), Y = X[X.length - 1]);
            }
            stop(e3) {
              if (this.active) {
                if (this.effects.forEach((e4) => e4.stop()), this.cleanups.forEach((e4) => e4()), this.scopes && this.scopes.forEach((e4) => e4.stop(true)), this.parent && !e3) {
                  const e4 = this.parent.scopes.pop();
                  e4 && e4 !== this && (this.parent.scopes[this.index] = e4, e4.index = this.index);
                }
                this.active = false;
              }
            }
          }
          const ee = (e3) => {
            const t3 = new Set(e3);
            return t3.w = 0, t3.n = 0, t3;
          }, te = (e3) => (e3.w & ae) > 0, ne = (e3) => (e3.n & ae) > 0, oe = /* @__PURE__ */ new WeakMap();
          let re = 0, ae = 1;
          const ie = [];
          let le;
          const se = Symbol(""), ce = Symbol("");
          class ue {
            constructor(e3, t3 = null, n2) {
              this.fn = e3, this.scheduler = t3, this.active = true, this.deps = [], function(e4, t4) {
                (t4 = t4 || Y) && t4.active && t4.effects.push(e4);
              }(this, n2);
            }
            run() {
              if (!this.active)
                return this.fn();
              if (!ie.includes(this))
                try {
                  return ie.push(le = this), he.push(pe), pe = true, ae = 1 << ++re, re <= 30 ? (({ deps: e3 }) => {
                    if (e3.length)
                      for (let t3 = 0; t3 < e3.length; t3++)
                        e3[t3].w |= ae;
                  })(this) : de(this), this.fn();
                } finally {
                  re <= 30 && ((e4) => {
                    const { deps: t3 } = e4;
                    if (t3.length) {
                      let n2 = 0;
                      for (let o2 = 0; o2 < t3.length; o2++) {
                        const r2 = t3[o2];
                        te(r2) && !ne(r2) ? r2.delete(e4) : t3[n2++] = r2, r2.w &= ~ae, r2.n &= ~ae;
                      }
                      t3.length = n2;
                    }
                  })(this), ae = 1 << --re, fe(), ie.pop();
                  const e3 = ie.length;
                  le = e3 > 0 ? ie[e3 - 1] : void 0;
                }
            }
            stop() {
              this.active && (de(this), this.onStop && this.onStop(), this.active = false);
            }
          }
          function de(e3) {
            const { deps: t3 } = e3;
            if (t3.length) {
              for (let n2 = 0; n2 < t3.length; n2++)
                t3[n2].delete(e3);
              t3.length = 0;
            }
          }
          let pe = true;
          const he = [];
          function ve() {
            he.push(pe), pe = false;
          }
          function fe() {
            const e3 = he.pop();
            pe = e3 === void 0 || e3;
          }
          function me(e3, t3, n2) {
            if (!ge())
              return;
            let o2 = oe.get(e3);
            o2 || oe.set(e3, o2 = /* @__PURE__ */ new Map());
            let r2 = o2.get(n2);
            r2 || o2.set(n2, r2 = ee()), be(r2);
          }
          function ge() {
            return pe && le !== void 0;
          }
          function be(e3, t3) {
            let n2 = false;
            re <= 30 ? ne(e3) || (e3.n |= ae, n2 = !te(e3)) : n2 = !e3.has(le), n2 && (e3.add(le), le.deps.push(e3));
          }
          function we(e3, t3, n2, o2, r2, a2) {
            const i2 = oe.get(e3);
            if (!i2)
              return;
            let l2 = [];
            if (t3 === "clear")
              l2 = [...i2.values()];
            else if (n2 === "length" && S(e3))
              i2.forEach((e4, t4) => {
                (t4 === "length" || t4 >= o2) && l2.push(e4);
              });
            else
              switch (n2 !== void 0 && l2.push(i2.get(n2)), t3) {
                case "add":
                  S(e3) ? M(n2) && l2.push(i2.get("length")) : (l2.push(i2.get(se)), C(e3) && l2.push(i2.get(ce)));
                  break;
                case "delete":
                  S(e3) || (l2.push(i2.get(se)), C(e3) && l2.push(i2.get(ce)));
                  break;
                case "set":
                  C(e3) && l2.push(i2.get(se));
              }
            if (l2.length === 1)
              l2[0] && ye(l2[0]);
            else {
              const e4 = [];
              for (const t4 of l2)
                t4 && e4.push(...t4);
              ye(ee(e4));
            }
          }
          function ye(e3, t3) {
            for (const t4 of S(e3) ? e3 : [...e3])
              (t4 !== le || t4.allowRecurse) && (t4.scheduler ? t4.scheduler() : t4.run());
          }
          const ke = e2("__proto__,__v_isRef,__isVue"), xe = new Set(Object.getOwnPropertyNames(Symbol).map((e3) => Symbol[e3]).filter(T)), _e = Ae(), Se = Ae(false, true), Ce = Ae(true), ze = Ee();
          function Ee() {
            const e3 = {};
            return ["includes", "indexOf", "lastIndexOf"].forEach((t3) => {
              e3[t3] = function(...e4) {
                const n2 = ut(this);
                for (let e5 = 0, t4 = this.length; e5 < t4; e5++)
                  me(n2, 0, e5 + "");
                const o2 = n2[t3](...e4);
                return o2 === -1 || o2 === false ? n2[t3](...e4.map(ut)) : o2;
              };
            }), ["push", "pop", "shift", "unshift", "splice"].forEach((t3) => {
              e3[t3] = function(...e4) {
                ve();
                const n2 = ut(this)[t3].apply(this, e4);
                return fe(), n2;
              };
            }), e3;
          }
          function Ae(e3 = false, t3 = false) {
            return function(n2, o2, r2) {
              if (o2 === "__v_isReactive")
                return !e3;
              if (o2 === "__v_isReadonly")
                return e3;
              if (o2 === "__v_raw" && r2 === (e3 ? t3 ? ot : nt : t3 ? tt : et).get(n2))
                return n2;
              const a2 = S(n2);
              if (!e3 && a2 && _(ze, o2))
                return Reflect.get(ze, o2, r2);
              const i2 = Reflect.get(n2, o2, r2);
              return (T(o2) ? xe.has(o2) : ke(o2)) ? i2 : (e3 || me(n2, 0, o2), t3 ? i2 : mt(i2) ? a2 && M(o2) ? i2 : i2.value : R(i2) ? e3 ? at(i2) : rt(i2) : i2);
            };
          }
          function Le(e3 = false) {
            return function(t3, n2, o2, r2) {
              let a2 = t3[n2];
              if (!e3 && !st(o2) && (o2 = ut(o2), a2 = ut(a2), !S(t3) && mt(a2) && !mt(o2)))
                return a2.value = o2, true;
              const i2 = S(t3) && M(n2) ? Number(n2) < t3.length : _(t3, n2), l2 = Reflect.set(t3, n2, o2, r2);
              return t3 === ut(r2) && (i2 ? H(o2, a2) && we(t3, "set", n2, o2) : we(t3, "add", n2, o2)), l2;
            };
          }
          const Te = { get: _e, set: Le(), deleteProperty: function(e3, t3) {
            const n2 = _(e3, t3), o2 = (e3[t3], Reflect.deleteProperty(e3, t3));
            return o2 && n2 && we(e3, "delete", t3, void 0), o2;
          }, has: function(e3, t3) {
            const n2 = Reflect.has(e3, t3);
            return T(t3) && xe.has(t3) || me(e3, 0, t3), n2;
          }, ownKeys: function(e3) {
            return me(e3, 0, S(e3) ? "length" : se), Reflect.ownKeys(e3);
          } }, Re = { get: Ce, set: (e3, t3) => true, deleteProperty: (e3, t3) => true }, Ie = k({}, Te, { get: Se, set: Le(true) }), Oe = (e3) => e3, je = (e3) => Reflect.getPrototypeOf(e3);
          function $e(e3, t3, n2 = false, o2 = false) {
            const r2 = ut(e3 = e3.__v_raw), a2 = ut(t3);
            t3 !== a2 && !n2 && me(r2, 0, t3), !n2 && me(r2, 0, a2);
            const { has: i2 } = je(r2), l2 = o2 ? Oe : n2 ? ht : pt;
            return i2.call(r2, t3) ? l2(e3.get(t3)) : i2.call(r2, a2) ? l2(e3.get(a2)) : void (e3 !== r2 && e3.get(t3));
          }
          function Me(e3, t3 = false) {
            const n2 = this.__v_raw, o2 = ut(n2), r2 = ut(e3);
            return e3 !== r2 && !t3 && me(o2, 0, e3), !t3 && me(o2, 0, r2), e3 === r2 ? n2.has(e3) : n2.has(e3) || n2.has(r2);
          }
          function Ue(e3, t3 = false) {
            return e3 = e3.__v_raw, !t3 && me(ut(e3), 0, se), Reflect.get(e3, "size", e3);
          }
          function Pe(e3) {
            e3 = ut(e3);
            const t3 = ut(this);
            return je(t3).has.call(t3, e3) || (t3.add(e3), we(t3, "add", e3, e3)), this;
          }
          function Ne(e3, t3) {
            t3 = ut(t3);
            const n2 = ut(this), { has: o2, get: r2 } = je(n2);
            let a2 = o2.call(n2, e3);
            a2 || (e3 = ut(e3), a2 = o2.call(n2, e3));
            const i2 = r2.call(n2, e3);
            return n2.set(e3, t3), a2 ? H(t3, i2) && we(n2, "set", e3, t3) : we(n2, "add", e3, t3), this;
          }
          function Fe(e3) {
            const t3 = ut(this), { has: n2, get: o2 } = je(t3);
            let r2 = n2.call(t3, e3);
            r2 || (e3 = ut(e3), r2 = n2.call(t3, e3)), o2 && o2.call(t3, e3);
            const a2 = t3.delete(e3);
            return r2 && we(t3, "delete", e3, void 0), a2;
          }
          function Ve() {
            const e3 = ut(this), t3 = e3.size !== 0, n2 = e3.clear();
            return t3 && we(e3, "clear", void 0, void 0), n2;
          }
          function De(e3, t3) {
            return function(n2, o2) {
              const r2 = this, a2 = r2.__v_raw, i2 = ut(a2), l2 = t3 ? Oe : e3 ? ht : pt;
              return !e3 && me(i2, 0, se), a2.forEach((e4, t4) => n2.call(o2, l2(e4), l2(t4), r2));
            };
          }
          function Be(e3, t3, n2) {
            return function(...o2) {
              const r2 = this.__v_raw, a2 = ut(r2), i2 = C(a2), l2 = e3 === "entries" || e3 === Symbol.iterator && i2, s2 = e3 === "keys" && i2, c2 = r2[e3](...o2), u2 = n2 ? Oe : t3 ? ht : pt;
              return !t3 && me(a2, 0, s2 ? ce : se), { next() {
                const { value: e4, done: t4 } = c2.next();
                return t4 ? { value: e4, done: t4 } : { value: l2 ? [u2(e4[0]), u2(e4[1])] : u2(e4), done: t4 };
              }, [Symbol.iterator]() {
                return this;
              } };
            };
          }
          function qe(e3) {
            return function(...t3) {
              return e3 !== "delete" && this;
            };
          }
          function He() {
            const e3 = { get(e4) {
              return $e(this, e4);
            }, get size() {
              return Ue(this);
            }, has: Me, add: Pe, set: Ne, delete: Fe, clear: Ve, forEach: De(false, false) }, t3 = { get(e4) {
              return $e(this, e4, false, true);
            }, get size() {
              return Ue(this);
            }, has: Me, add: Pe, set: Ne, delete: Fe, clear: Ve, forEach: De(false, true) }, n2 = { get(e4) {
              return $e(this, e4, true);
            }, get size() {
              return Ue(this, true);
            }, has(e4) {
              return Me.call(this, e4, true);
            }, add: qe("add"), set: qe("set"), delete: qe("delete"), clear: qe("clear"), forEach: De(true, false) }, o2 = { get(e4) {
              return $e(this, e4, true, true);
            }, get size() {
              return Ue(this, true);
            }, has(e4) {
              return Me.call(this, e4, true);
            }, add: qe("add"), set: qe("set"), delete: qe("delete"), clear: qe("clear"), forEach: De(true, true) };
            return ["keys", "values", "entries", Symbol.iterator].forEach((r2) => {
              e3[r2] = Be(r2, false, false), n2[r2] = Be(r2, true, false), t3[r2] = Be(r2, false, true), o2[r2] = Be(r2, true, true);
            }), [e3, n2, t3, o2];
          }
          const [We, Ze, Je, Ke] = He();
          function Qe(e3, t3) {
            const n2 = t3 ? e3 ? Ke : Je : e3 ? Ze : We;
            return (t4, o2, r2) => o2 === "__v_isReactive" ? !e3 : o2 === "__v_isReadonly" ? e3 : o2 === "__v_raw" ? t4 : Reflect.get(_(n2, o2) && o2 in t4 ? n2 : t4, o2, r2);
          }
          const Ye = { get: Qe(false, false) }, Xe = { get: Qe(false, true) }, Ge = { get: Qe(true, false) }, et = /* @__PURE__ */ new WeakMap(), tt = /* @__PURE__ */ new WeakMap(), nt = /* @__PURE__ */ new WeakMap(), ot = /* @__PURE__ */ new WeakMap();
          function rt(e3) {
            return e3 && e3.__v_isReadonly ? e3 : it(e3, false, Te, Ye, et);
          }
          function at(e3) {
            return it(e3, true, Re, Ge, nt);
          }
          function it(e3, t3, n2, o2, r2) {
            if (!R(e3))
              return e3;
            if (e3.__v_raw && (!t3 || !e3.__v_isReactive))
              return e3;
            const a2 = r2.get(e3);
            if (a2)
              return a2;
            const i2 = (l2 = e3).__v_skip || !Object.isExtensible(l2) ? 0 : function(e4) {
              switch (e4) {
                case "Object":
                case "Array":
                  return 1;
                case "Map":
                case "Set":
                case "WeakMap":
                case "WeakSet":
                  return 2;
                default:
                  return 0;
              }
            }(((e4) => j(e4).slice(8, -1))(l2));
            var l2;
            if (i2 === 0)
              return e3;
            const s2 = new Proxy(e3, i2 === 2 ? o2 : n2);
            return r2.set(e3, s2), s2;
          }
          function lt(e3) {
            return st(e3) ? lt(e3.__v_raw) : !(!e3 || !e3.__v_isReactive);
          }
          function st(e3) {
            return !(!e3 || !e3.__v_isReadonly);
          }
          function ct(e3) {
            return lt(e3) || st(e3);
          }
          function ut(e3) {
            const t3 = e3 && e3.__v_raw;
            return t3 ? ut(t3) : e3;
          }
          function dt(e3) {
            return Z(e3, "__v_skip", true), e3;
          }
          const pt = (e3) => R(e3) ? rt(e3) : e3, ht = (e3) => R(e3) ? at(e3) : e3;
          function vt(e3) {
            ge() && ((e3 = ut(e3)).dep || (e3.dep = ee()), be(e3.dep));
          }
          function ft(e3, t3) {
            (e3 = ut(e3)).dep && ye(e3.dep);
          }
          function mt(e3) {
            return Boolean(e3 && e3.__v_isRef === true);
          }
          function gt(e3) {
            return n2 = false, mt(t3 = e3) ? t3 : new bt(t3, n2);
            var t3, n2;
          }
          class bt {
            constructor(e3, t3) {
              this._shallow = t3, this.dep = void 0, this.__v_isRef = true, this._rawValue = t3 ? e3 : ut(e3), this._value = t3 ? e3 : pt(e3);
            }
            get value() {
              return vt(this), this._value;
            }
            set value(e3) {
              e3 = this._shallow ? e3 : ut(e3), H(e3, this._rawValue) && (this._rawValue = e3, this._value = this._shallow ? e3 : pt(e3), ft(this));
            }
          }
          const wt = { get: (e3, t3, n2) => {
            return mt(o2 = Reflect.get(e3, t3, n2)) ? o2.value : o2;
            var o2;
          }, set: (e3, t3, n2, o2) => {
            const r2 = e3[t3];
            return mt(r2) && !mt(n2) ? (r2.value = n2, true) : Reflect.set(e3, t3, n2, o2);
          } };
          function yt(e3) {
            return lt(e3) ? e3 : new Proxy(e3, wt);
          }
          class kt {
            constructor(e3, t3, n2) {
              this._setter = t3, this.dep = void 0, this._dirty = true, this.__v_isRef = true, this.effect = new ue(e3, () => {
                this._dirty || (this._dirty = true, ft(this));
              }), this.__v_isReadonly = n2;
            }
            get value() {
              const e3 = ut(this);
              return vt(e3), e3._dirty && (e3._dirty = false, e3._value = e3.effect.run()), e3._value;
            }
            set value(e3) {
              this._setter(e3);
            }
          }
          function xt(e3, t3) {
            let n2, o2;
            const r2 = A(e3);
            return r2 ? (n2 = e3, o2 = m) : (n2 = e3.get, o2 = e3.set), new kt(n2, o2, r2 || !o2);
          }
          Promise.resolve(), /* @__PURE__ */ new Set(), /* @__PURE__ */ new Map();
          let _t, St = [], Ct = false;
          function zt(e3, ...t3) {
            _t ? _t.emit(e3, ...t3) : Ct || St.push({ event: e3, args: t3 });
          }
          function Et(e3, t3) {
            var n2, o2;
            _t = e3, _t ? (_t.enabled = true, St.forEach(({ event: e4, args: t4 }) => _t.emit(e4, ...t4)), St = []) : typeof window != "undefined" && window.HTMLElement && !((o2 = (n2 = window.navigator) === null || n2 === void 0 ? void 0 : n2.userAgent) === null || o2 === void 0 ? void 0 : o2.includes("jsdom")) ? ((t3.__VUE_DEVTOOLS_HOOK_REPLAY__ = t3.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((e4) => {
              Et(e4, t3);
            }), setTimeout(() => {
              _t || (t3.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Ct = true, St = []);
            }, 3e3)) : (Ct = true, St = []);
          }
          const At = Rt("component:added"), Lt = Rt("component:updated"), Tt = Rt("component:removed");
          function Rt(e3) {
            return (t3) => {
              zt(e3, t3.appContext.app, t3.uid, t3.parent ? t3.parent.uid : void 0, t3);
            };
          }
          function It(e3, t3, ...n2) {
            const o2 = e3.vnode.props || v;
            let r2 = n2;
            const a2 = t3.startsWith("update:"), i2 = a2 && t3.slice(7);
            if (i2 && i2 in o2) {
              const e4 = `${i2 === "modelValue" ? "model" : i2}Modifiers`, { number: t4, trim: a3 } = o2[e4] || v;
              a3 ? r2 = n2.map((e5) => e5.trim()) : t4 && (r2 = n2.map(J));
            }
            let l2;
            let s2 = o2[l2 = q(t3)] || o2[l2 = q(F(t3))];
            !s2 && a2 && (s2 = o2[l2 = q(D(t3))]), s2 && wo(s2, e3, 6, r2);
            const c2 = o2[l2 + "Once"];
            if (c2) {
              if (e3.emitted) {
                if (e3.emitted[l2])
                  return;
              } else
                e3.emitted = {};
              e3.emitted[l2] = true, wo(c2, e3, 6, r2);
            }
          }
          function Ot(e3, t3, n2 = false) {
            const o2 = t3.emitsCache, r2 = o2.get(e3);
            if (r2 !== void 0)
              return r2;
            const a2 = e3.emits;
            let i2 = {};
            return a2 ? (S(a2) ? a2.forEach((e4) => i2[e4] = null) : k(i2, a2), o2.set(e3, i2), i2) : (o2.set(e3, null), null);
          }
          function jt(e3, t3) {
            return !(!e3 || !w(t3)) && (t3 = t3.slice(2).replace(/Once$/, ""), _(e3, t3[0].toLowerCase() + t3.slice(1)) || _(e3, D(t3)) || _(e3, t3));
          }
          let $t = null, Mt = null;
          function Ut(e3) {
            const t3 = $t;
            return $t = e3, Mt = e3 && e3.type.__scopeId || null, t3;
          }
          function Pt(e3) {
            const { type: t3, vnode: n2, proxy: o2, withProxy: r2, props: a2, propsOptions: [i2], slots: l2, attrs: s2, emit: c2, render: u2, renderCache: d2, data: p2, setupState: h2, ctx: v2, inheritAttrs: f2 } = e3;
            let m2, g2;
            const b2 = Ut(e3);
            try {
              if (4 & n2.shapeFlag) {
                const e4 = r2 || o2;
                m2 = Gn(u2.call(e4, e4, d2, a2, h2, p2, v2)), g2 = s2;
              } else {
                const e4 = t3;
                m2 = Gn(e4.length > 1 ? e4(a2, { attrs: s2, slots: l2, emit: c2 }) : e4(a2, null)), g2 = t3.props ? s2 : Nt(s2);
              }
            } catch (t4) {
              $n.length = 0, yo(t4, e3, 1), m2 = Kn(On);
            }
            let w2 = m2;
            if (g2 && f2 !== false) {
              const e4 = Object.keys(g2), { shapeFlag: t4 } = w2;
              e4.length && 7 & t4 && (i2 && e4.some(y) && (g2 = Ft(g2, i2)), w2 = Qn(w2, g2));
            }
            return n2.dirs && (w2.dirs = w2.dirs ? w2.dirs.concat(n2.dirs) : n2.dirs), n2.transition && (w2.transition = n2.transition), m2 = w2, Ut(b2), m2;
          }
          const Nt = (e3) => {
            let t3;
            for (const n2 in e3)
              (n2 === "class" || n2 === "style" || w(n2)) && ((t3 || (t3 = {}))[n2] = e3[n2]);
            return t3;
          }, Ft = (e3, t3) => {
            const n2 = {};
            for (const o2 in e3)
              y(o2) && o2.slice(9) in t3 || (n2[o2] = e3[o2]);
            return n2;
          };
          function Vt(e3, t3, n2) {
            const o2 = Object.keys(t3);
            if (o2.length !== Object.keys(e3).length)
              return true;
            for (let r2 = 0; r2 < o2.length; r2++) {
              const a2 = o2[r2];
              if (t3[a2] !== e3[a2] && !jt(n2, a2))
                return true;
            }
            return false;
          }
          function Dt(e3, t3, n2 = false) {
            const o2 = so || $t;
            if (o2) {
              const r2 = o2.parent == null ? o2.vnode.appContext && o2.vnode.appContext.provides : o2.parent.provides;
              if (r2 && e3 in r2)
                return r2[e3];
              if (arguments.length > 1)
                return n2 && A(t3) ? t3.call(o2.proxy) : t3;
            }
          }
          const Bt = [Function, Array], qt = { name: "BaseTransition", props: { mode: String, appear: Boolean, persisted: Boolean, onBeforeEnter: Bt, onEnter: Bt, onAfterEnter: Bt, onEnterCancelled: Bt, onBeforeLeave: Bt, onLeave: Bt, onAfterLeave: Bt, onLeaveCancelled: Bt, onBeforeAppear: Bt, onAppear: Bt, onAfterAppear: Bt, onAppearCancelled: Bt }, setup(e3, { slots: t3 }) {
            const n2 = co(), o2 = function() {
              const e4 = { isMounted: false, isLeaving: false, isUnmounting: false, leavingVNodes: /* @__PURE__ */ new Map() };
              return tn(() => {
                e4.isMounted = true;
              }), nn(() => {
                e4.isUnmounting = true;
              }), e4;
            }();
            let r2;
            return () => {
              const a2 = t3.default && Qt(t3.default(), true);
              if (!a2 || !a2.length)
                return;
              const i2 = ut(e3), { mode: l2 } = i2, s2 = a2[0];
              if (o2.isLeaving)
                return Zt(s2);
              const c2 = Jt(s2);
              if (!c2)
                return Zt(s2);
              const u2 = Wt(c2, i2, o2, n2);
              Kt(c2, u2);
              const d2 = n2.subTree, p2 = d2 && Jt(d2);
              let h2 = false;
              const { getTransitionKey: v2 } = c2.type;
              if (v2) {
                const e4 = v2();
                r2 === void 0 ? r2 = e4 : e4 !== r2 && (r2 = e4, h2 = true);
              }
              if (p2 && p2.type !== On && (!qn(c2, p2) || h2)) {
                const e4 = Wt(p2, i2, o2, n2);
                if (Kt(p2, e4), l2 === "out-in")
                  return o2.isLeaving = true, e4.afterLeave = () => {
                    o2.isLeaving = false, n2.update();
                  }, Zt(s2);
                l2 === "in-out" && c2.type !== On && (e4.delayLeave = (e5, t4, n3) => {
                  Ht(o2, p2)[String(p2.key)] = p2, e5._leaveCb = () => {
                    t4(), e5._leaveCb = void 0, delete u2.delayedLeave;
                  }, u2.delayedLeave = n3;
                });
              }
              return s2;
            };
          } };
          function Ht(e3, t3) {
            const { leavingVNodes: n2 } = e3;
            let o2 = n2.get(t3.type);
            return o2 || (o2 = /* @__PURE__ */ Object.create(null), n2.set(t3.type, o2)), o2;
          }
          function Wt(e3, t3, n2, o2) {
            const { appear: r2, mode: a2, persisted: i2 = false, onBeforeEnter: l2, onEnter: s2, onAfterEnter: c2, onEnterCancelled: u2, onBeforeLeave: d2, onLeave: p2, onAfterLeave: h2, onLeaveCancelled: v2, onBeforeAppear: f2, onAppear: m2, onAfterAppear: g2, onAppearCancelled: b2 } = t3, w2 = String(e3.key), y2 = Ht(n2, e3), k2 = (e4, t4) => {
              e4 && wo(e4, o2, 9, t4);
            }, x2 = { mode: a2, persisted: i2, beforeEnter(t4) {
              let o3 = l2;
              if (!n2.isMounted) {
                if (!r2)
                  return;
                o3 = f2 || l2;
              }
              t4._leaveCb && t4._leaveCb(true);
              const a3 = y2[w2];
              a3 && qn(e3, a3) && a3.el._leaveCb && a3.el._leaveCb(), k2(o3, [t4]);
            }, enter(e4) {
              let t4 = s2, o3 = c2, a3 = u2;
              if (!n2.isMounted) {
                if (!r2)
                  return;
                t4 = m2 || s2, o3 = g2 || c2, a3 = b2 || u2;
              }
              let i3 = false;
              const l3 = e4._enterCb = (t5) => {
                i3 || (i3 = true, k2(t5 ? a3 : o3, [e4]), x2.delayedLeave && x2.delayedLeave(), e4._enterCb = void 0);
              };
              t4 ? (t4(e4, l3), t4.length <= 1 && l3()) : l3();
            }, leave(t4, o3) {
              const r3 = String(e3.key);
              if (t4._enterCb && t4._enterCb(true), n2.isUnmounting)
                return o3();
              k2(d2, [t4]);
              let a3 = false;
              const i3 = t4._leaveCb = (n3) => {
                a3 || (a3 = true, o3(), k2(n3 ? v2 : h2, [t4]), t4._leaveCb = void 0, y2[r3] === e3 && delete y2[r3]);
              };
              y2[r3] = e3, p2 ? (p2(t4, i3), p2.length <= 1 && i3()) : i3();
            }, clone: (e4) => Wt(e4, t3, n2, o2) };
            return x2;
          }
          function Zt(e3) {
            if (Gt(e3))
              return (e3 = Qn(e3)).children = null, e3;
          }
          function Jt(e3) {
            return Gt(e3) ? e3.children ? e3.children[0] : void 0 : e3;
          }
          function Kt(e3, t3) {
            6 & e3.shapeFlag && e3.component ? Kt(e3.component.subTree, t3) : 128 & e3.shapeFlag ? (e3.ssContent.transition = t3.clone(e3.ssContent), e3.ssFallback.transition = t3.clone(e3.ssFallback)) : e3.transition = t3;
          }
          function Qt(e3, t3 = false) {
            let n2 = [], o2 = 0;
            for (let r2 = 0; r2 < e3.length; r2++) {
              const a2 = e3[r2];
              a2.type === Rn ? (128 & a2.patchFlag && o2++, n2 = n2.concat(Qt(a2.children, t3))) : (t3 || a2.type !== On) && n2.push(a2);
            }
            if (o2 > 1)
              for (let e4 = 0; e4 < n2.length; e4++)
                n2[e4].patchFlag = -2;
            return n2;
          }
          function Yt(e3) {
            return A(e3) ? { setup: e3, name: e3.name } : e3;
          }
          const Xt = (e3) => !!e3.type.__asyncLoader, Gt = (e3) => e3.type.__isKeepAlive;
          RegExp, RegExp;
          const en = (e3) => (t3, n2 = so) => (!vo || e3 === "sp") && function(e4, t4, n3 = so, o2 = false) {
            if (n3) {
              const r2 = n3[e4] || (n3[e4] = []), a2 = t4.__weh || (t4.__weh = (...o3) => {
                if (n3.isUnmounted)
                  return;
                ve(), uo(n3);
                const r3 = wo(t4, n3, e4, o3);
                return po(), fe(), r3;
              });
              return o2 ? r2.unshift(a2) : r2.push(a2), a2;
            }
          }(e3, t3, n2), tn = (en("bm"), en("m")), nn = (en("bu"), en("u"), en("bum")), on = en("um");
          function rn(e3, t3, n2, o2) {
            const [r2, a2] = e3.propsOptions;
            let i2, l2 = false;
            if (t3)
              for (let s2 in t3) {
                if (U(s2))
                  continue;
                const c2 = t3[s2];
                let u2;
                r2 && _(r2, u2 = F(s2)) ? a2 && a2.includes(u2) ? (i2 || (i2 = {}))[u2] = c2 : n2[u2] = c2 : jt(e3.emitsOptions, s2) || c2 !== o2[s2] && (o2[s2] = c2, l2 = true);
              }
            if (a2) {
              const t4 = ut(n2), o3 = i2 || v;
              for (let i3 = 0; i3 < a2.length; i3++) {
                const l3 = a2[i3];
                n2[l3] = an(r2, t4, l3, o3[l3], e3, !_(o3, l3));
              }
            }
            return l2;
          }
          function an(e3, t3, n2, o2, r2, a2) {
            const i2 = e3[n2];
            if (i2 != null) {
              const e4 = _(i2, "default");
              if (e4 && o2 === void 0) {
                const e5 = i2.default;
                if (i2.type !== Function && A(e5)) {
                  const { propsDefaults: a3 } = r2;
                  n2 in a3 ? o2 = a3[n2] : (uo(r2), o2 = a3[n2] = e5.call(null, t3), po());
                } else
                  o2 = e5;
              }
              i2[0] && (a2 && !e4 ? o2 = false : !i2[1] || o2 !== "" && o2 !== D(n2) || (o2 = true));
            }
            return o2;
          }
          function ln(e3, t3, n2 = false) {
            const o2 = t3.propsCache, r2 = o2.get(e3);
            if (r2)
              return r2;
            const a2 = e3.props, i2 = {}, l2 = [];
            if (!a2)
              return o2.set(e3, f), f;
            if (S(a2))
              for (let e4 = 0; e4 < a2.length; e4++) {
                const t4 = F(a2[e4]);
                sn(t4) && (i2[t4] = v);
              }
            else if (a2)
              for (const e4 in a2) {
                const t4 = F(e4);
                if (sn(t4)) {
                  const n3 = a2[e4], o3 = i2[t4] = S(n3) || A(n3) ? { type: n3 } : n3;
                  if (o3) {
                    const e5 = dn(Boolean, o3.type), n4 = dn(String, o3.type);
                    o3[0] = e5 > -1, o3[1] = n4 < 0 || e5 < n4, (e5 > -1 || _(o3, "default")) && l2.push(t4);
                  }
                }
              }
            const s2 = [i2, l2];
            return o2.set(e3, s2), s2;
          }
          function sn(e3) {
            return e3[0] !== "$";
          }
          function cn(e3) {
            const t3 = e3 && e3.toString().match(/^\s*function (\w+)/);
            return t3 ? t3[1] : e3 === null ? "null" : "";
          }
          function un(e3, t3) {
            return cn(e3) === cn(t3);
          }
          function dn(e3, t3) {
            return S(t3) ? t3.findIndex((t4) => un(t4, e3)) : A(t3) && un(t3, e3) ? 0 : -1;
          }
          en("sp"), en("rtg"), en("rtc");
          const pn = (e3) => e3[0] === "_" || e3 === "$stable", hn = (e3) => S(e3) ? e3.map(Gn) : [Gn(e3)], vn = (e3, t3, n2) => {
            const o2 = function(e4, t4 = $t, n3) {
              if (!t4)
                return e4;
              if (e4._n)
                return e4;
              const o3 = (...n4) => {
                o3._d && Nn(-1);
                const r2 = Ut(t4), a2 = e4(...n4);
                return Ut(r2), o3._d && Nn(1), false, a2;
              };
              return o3._n = true, o3._c = true, o3._d = true, o3;
            }((...e4) => hn(t3(...e4)), n2);
            return o2._c = false, o2;
          }, fn = (e3, t3, n2) => {
            const o2 = e3._ctx;
            for (const n3 in e3) {
              if (pn(n3))
                continue;
              const r2 = e3[n3];
              if (A(r2))
                t3[n3] = vn(0, r2, o2);
              else if (r2 != null) {
                const e4 = hn(r2);
                t3[n3] = () => e4;
              }
            }
          }, mn = (e3, t3) => {
            const n2 = hn(t3);
            e3.slots.default = () => n2;
          };
          function gn(e3, t3) {
            if ($t === null)
              return e3;
            const n2 = $t.proxy, o2 = e3.dirs || (e3.dirs = []);
            for (let e4 = 0; e4 < t3.length; e4++) {
              let [r2, a2, i2, l2 = v] = t3[e4];
              A(r2) && (r2 = { mounted: r2, updated: r2 }), r2.deep && qo(a2), o2.push({ dir: r2, instance: n2, value: a2, oldValue: void 0, arg: i2, modifiers: l2 });
            }
            return e3;
          }
          function bn(e3, t3, n2, o2) {
            const r2 = e3.dirs, a2 = t3 && t3.dirs;
            for (let i2 = 0; i2 < r2.length; i2++) {
              const l2 = r2[i2];
              a2 && (l2.oldValue = a2[i2].value);
              let s2 = l2.dir[o2];
              s2 && (ve(), wo(s2, n2, 8, [e3.el, l2, e3, t3]), fe());
            }
          }
          function wn() {
            return { app: null, config: { isNativeTag: g, performance: false, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: /* @__PURE__ */ Object.create(null), optionsCache: /* @__PURE__ */ new WeakMap(), propsCache: /* @__PURE__ */ new WeakMap(), emitsCache: /* @__PURE__ */ new WeakMap() };
          }
          let yn = 0;
          function kn(e3, t3) {
            return function(n2, o2 = null) {
              o2 == null || R(o2) || (o2 = null);
              const r2 = wn(), a2 = /* @__PURE__ */ new Set();
              let i2 = false;
              const l2 = r2.app = { _uid: yn++, _component: n2, _props: o2, _container: null, _context: r2, _instance: null, version: Wo, get config() {
                return r2.config;
              }, set config(e4) {
              }, use: (e4, ...t4) => (a2.has(e4) || (e4 && A(e4.install) ? (a2.add(e4), e4.install(l2, ...t4)) : A(e4) && (a2.add(e4), e4(l2, ...t4))), l2), mixin: (e4) => l2, component: (e4, t4) => t4 ? (r2.components[e4] = t4, l2) : r2.components[e4], directive: (e4, t4) => t4 ? (r2.directives[e4] = t4, l2) : r2.directives[e4], mount(a3, s2, c2) {
                if (!i2) {
                  const u2 = Kn(n2, o2);
                  return u2.appContext = r2, s2 && t3 ? t3(u2, a3) : e3(u2, a3, c2), i2 = true, l2._container = a3, a3.__vue_app__ = l2, false, go(u2.component) || u2.component.proxy;
                }
              }, unmount() {
                i2 && (e3(null, l2._container), false, delete l2._container.__vue_app__);
              }, provide: (e4, t4) => (r2.provides[e4] = t4, l2) };
              return l2;
            };
          }
          const xn = function(e3, t3) {
            t3 && t3.pendingBranch ? S(e3) ? t3.effects.push(...e3) : t3.effects.push(e3) : Uo(e3, Lo, Ao, To);
          };
          function _n(e3, t3) {
            const n2 = Q();
            n2.__VUE__ = true, false;
            const { insert: o2, remove: r2, patchProp: a2, createElement: i2, createText: l2, createComment: s2, setText: c2, setElementText: u2, parentNode: d2, nextSibling: p2, setScopeId: h2 = m, cloneNode: g2, insertStaticContent: b2 } = e3, w2 = (e4, t4, n3, o3 = null, r3 = null, a3 = null, i3 = false, l3 = null, s3 = !!t4.dynamicChildren) => {
              if (e4 === t4)
                return;
              e4 && !qn(e4, t4) && (o3 = te2(e4), J2(e4, r3, a3, true), e4 = null), t4.patchFlag === -2 && (s3 = false, t4.dynamicChildren = null);
              const { type: c3, ref: u3, shapeFlag: d3 } = t4;
              switch (c3) {
                case In:
                  y2(e4, t4, n3, o3);
                  break;
                case On:
                  x2(e4, t4, n3, o3);
                  break;
                case jn:
                  e4 == null && S2(t4, n3, o3, i3);
                  break;
                case Rn:
                  O2(e4, t4, n3, o3, r3, a3, i3, l3, s3);
                  break;
                default:
                  1 & d3 ? C2(e4, t4, n3, o3, r3, a3, i3, l3, s3) : 6 & d3 ? j2(e4, t4, n3, o3, r3, a3, i3, l3, s3) : (64 & d3 || 128 & d3) && c3.process(e4, t4, n3, o3, r3, a3, i3, l3, s3, oe2);
              }
              u3 != null && r3 && Sn(u3, e4 && e4.ref, a3, t4 || e4, !t4);
            }, y2 = (e4, t4, n3, r3) => {
              if (e4 == null)
                o2(t4.el = l2(t4.children), n3, r3);
              else {
                const n4 = t4.el = e4.el;
                t4.children !== e4.children && c2(n4, t4.children);
              }
            }, x2 = (e4, t4, n3, r3) => {
              e4 == null ? o2(t4.el = s2(t4.children || ""), n3, r3) : t4.el = e4.el;
            }, S2 = (e4, t4, n3, o3) => {
              [e4.el, e4.anchor] = b2(e4.children, t4, n3, o3);
            }, C2 = (e4, t4, n3, o3, r3, a3, i3, l3, s3) => {
              i3 = i3 || t4.type === "svg", e4 == null ? z2(t4, n3, o3, r3, a3, i3, l3, s3) : L2(e4, t4, r3, a3, i3, l3, s3);
            }, z2 = (e4, t4, n3, r3, l3, s3, c3, d3) => {
              let p3, h3;
              const { type: v2, props: f2, shapeFlag: m2, transition: b3, patchFlag: w3, dirs: y3 } = e4;
              if (e4.el && g2 !== void 0 && w3 === -1)
                p3 = e4.el = g2(e4.el);
              else {
                if (p3 = e4.el = i2(e4.type, s3, f2 && f2.is, f2), 8 & m2 ? u2(p3, e4.children) : 16 & m2 && A2(e4.children, p3, null, r3, l3, s3 && v2 !== "foreignObject", c3, d3), y3 && bn(e4, null, r3, "created"), f2) {
                  for (const t5 in f2)
                    t5 === "value" || U(t5) || a2(p3, t5, null, f2[t5], s3, e4.children, r3, l3, ee2);
                  "value" in f2 && a2(p3, "value", null, f2.value), (h3 = f2.onVnodeBeforeMount) && Cn(h3, r3, e4);
                }
                E2(p3, e4, e4.scopeId, c3, r3);
              }
              false, y3 && bn(e4, null, r3, "beforeMount");
              const k2 = (!l3 || l3 && !l3.pendingBranch) && b3 && !b3.persisted;
              k2 && b3.beforeEnter(p3), o2(p3, t4, n3), ((h3 = f2 && f2.onVnodeMounted) || k2 || y3) && xn(() => {
                h3 && Cn(h3, r3, e4), k2 && b3.enter(p3), y3 && bn(e4, null, r3, "mounted");
              }, l3);
            }, E2 = (e4, t4, n3, o3, r3) => {
              if (n3 && h2(e4, n3), o3)
                for (let t5 = 0; t5 < o3.length; t5++)
                  h2(e4, o3[t5]);
              if (r3 && t4 === r3.subTree) {
                const t5 = r3.vnode;
                E2(e4, t5, t5.scopeId, t5.slotScopeIds, r3.parent);
              }
            }, A2 = (e4, t4, n3, o3, r3, a3, i3, l3, s3 = 0) => {
              for (let c3 = s3; c3 < e4.length; c3++) {
                const s4 = e4[c3] = l3 ? eo(e4[c3]) : Gn(e4[c3]);
                w2(null, s4, t4, n3, o3, r3, a3, i3, l3);
              }
            }, L2 = (e4, t4, n3, o3, r3, i3, l3) => {
              const s3 = t4.el = e4.el;
              let { patchFlag: c3, dynamicChildren: d3, dirs: p3 } = t4;
              c3 |= 16 & e4.patchFlag;
              const h3 = e4.props || v, f2 = t4.props || v;
              let m2;
              (m2 = f2.onVnodeBeforeUpdate) && Cn(m2, n3, t4, e4), p3 && bn(t4, e4, n3, "beforeUpdate");
              const g3 = r3 && t4.type !== "foreignObject";
              if (d3 ? T2(e4.dynamicChildren, d3, s3, n3, o3, g3, i3) : l3 || V2(e4, t4, s3, null, n3, o3, g3, i3, false), c3 > 0) {
                if (16 & c3)
                  R2(s3, t4, h3, f2, n3, o3, r3);
                else if (2 & c3 && h3.class !== f2.class && a2(s3, "class", null, f2.class, r3), 4 & c3 && a2(s3, "style", h3.style, f2.style, r3), 8 & c3) {
                  const i4 = t4.dynamicProps;
                  for (let t5 = 0; t5 < i4.length; t5++) {
                    const l4 = i4[t5], c4 = h3[l4], u3 = f2[l4];
                    u3 === c4 && l4 !== "value" || a2(s3, l4, c4, u3, r3, e4.children, n3, o3, ee2);
                  }
                }
                1 & c3 && e4.children !== t4.children && u2(s3, t4.children);
              } else
                l3 || d3 != null || R2(s3, t4, h3, f2, n3, o3, r3);
              ((m2 = f2.onVnodeUpdated) || p3) && xn(() => {
                m2 && Cn(m2, n3, t4, e4), p3 && bn(t4, e4, n3, "updated");
              }, o3);
            }, T2 = (e4, t4, n3, o3, r3, a3, i3) => {
              for (let l3 = 0; l3 < t4.length; l3++) {
                const s3 = e4[l3], c3 = t4[l3], u3 = s3.el && (s3.type === Rn || !qn(s3, c3) || 70 & s3.shapeFlag) ? d2(s3.el) : n3;
                w2(s3, c3, u3, null, o3, r3, a3, i3, true);
              }
            }, R2 = (e4, t4, n3, o3, r3, i3, l3) => {
              if (n3 !== o3) {
                for (const s3 in o3) {
                  if (U(s3))
                    continue;
                  const c3 = o3[s3], u3 = n3[s3];
                  c3 !== u3 && s3 !== "value" && a2(e4, s3, u3, c3, l3, t4.children, r3, i3, ee2);
                }
                if (n3 !== v)
                  for (const s3 in n3)
                    U(s3) || s3 in o3 || a2(e4, s3, n3[s3], null, l3, t4.children, r3, i3, ee2);
                "value" in o3 && a2(e4, "value", n3.value, o3.value);
              }
            }, O2 = (e4, t4, n3, r3, a3, i3, s3, c3, u3) => {
              const d3 = t4.el = e4 ? e4.el : l2(""), p3 = t4.anchor = e4 ? e4.anchor : l2("");
              let { patchFlag: h3, dynamicChildren: v2, slotScopeIds: f2 } = t4;
              f2 && (c3 = c3 ? c3.concat(f2) : f2), e4 == null ? (o2(d3, n3, r3), o2(p3, n3, r3), A2(t4.children, n3, p3, a3, i3, s3, c3, u3)) : h3 > 0 && 64 & h3 && v2 && e4.dynamicChildren ? (T2(e4.dynamicChildren, v2, n3, a3, i3, s3, c3), (t4.key != null || a3 && t4 === a3.subTree) && zn(e4, t4, true)) : V2(e4, t4, n3, p3, a3, i3, s3, c3, u3);
            }, j2 = (e4, t4, n3, o3, r3, a3, i3, l3, s3) => {
              t4.slotScopeIds = l3, e4 == null ? 512 & t4.shapeFlag ? r3.ctx.activate(t4, n3, o3, i3, s3) : $2(t4, n3, o3, r3, a3, i3, s3) : M2(e4, t4, s3);
            }, $2 = (e4, t4, n3, o3, r3, a3, i3) => {
              const l3 = e4.component = function(e5, t5, n4) {
                const o4 = e5.type, r4 = (t5 ? t5.appContext : e5.appContext) || io, a4 = { uid: lo++, vnode: e5, type: o4, parent: t5, appContext: r4, root: null, next: null, subTree: null, update: null, scope: new G(true), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: t5 ? t5.provides : Object.create(r4.provides), accessCache: null, renderCache: [], components: null, directives: null, propsOptions: ln(o4, r4), emitsOptions: Ot(o4, r4), emit: null, emitted: null, propsDefaults: v, inheritAttrs: o4.inheritAttrs, ctx: v, data: v, props: v, attrs: v, slots: v, refs: v, setupState: v, setupContext: null, suspense: n4, suspenseId: n4 ? n4.pendingId : 0, asyncDep: null, asyncResolved: false, isMounted: false, isUnmounted: false, isDeactivated: false, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null };
                return a4.ctx = { _: a4 }, a4.root = t5 ? t5.root : a4, a4.emit = It.bind(null, a4), e5.ce && e5.ce(a4), a4;
              }(e4, o3, r3);
              if (Gt(e4) && (l3.ctx.renderer = oe2), function(e5, t5 = false) {
                vo = t5;
                const { props: n4, children: o4 } = e5.vnode, r4 = ho(e5);
                (function(e6, t6, n5, o5 = false) {
                  const r5 = {}, a5 = {};
                  Z(a5, Hn, 1), e6.propsDefaults = /* @__PURE__ */ Object.create(null), rn(e6, t6, r5, a5);
                  for (const t7 in e6.propsOptions[0])
                    t7 in r5 || (r5[t7] = void 0);
                  n5 ? e6.props = o5 ? r5 : it(r5, false, Ie, Xe, tt) : e6.type.props ? e6.props = r5 : e6.props = a5, e6.attrs = a5;
                })(e5, n4, r4, t5), ((e6, t6) => {
                  if (32 & e6.vnode.shapeFlag) {
                    const n5 = t6._;
                    n5 ? (e6.slots = ut(t6), Z(t6, "_", n5)) : fn(t6, e6.slots = {});
                  } else
                    e6.slots = {}, t6 && mn(e6, t6);
                  Z(e6.slots, Hn, 1);
                })(e5, o4);
                const a4 = r4 ? function(e6, t6) {
                  const n5 = e6.type;
                  e6.accessCache = /* @__PURE__ */ Object.create(null), e6.proxy = dt(new Proxy(e6.ctx, ao));
                  const { setup: o5 } = n5;
                  if (o5) {
                    const n6 = e6.setupContext = o5.length > 1 ? function(e7) {
                      const t7 = (t8) => {
                        e7.exposed = t8 || {};
                      };
                      let n7;
                      return { get attrs() {
                        return n7 || (n7 = function(e8) {
                          return new Proxy(e8.attrs, { get: (t8, n8) => (me(e8, 0, "$attrs"), t8[n8]) });
                        }(e7));
                      }, slots: e7.slots, emit: e7.emit, expose: t7 };
                    }(e6) : null;
                    uo(e6), ve();
                    const r5 = bo(o5, e6, 0, [e6.props, n6]);
                    if (fe(), po(), I(r5)) {
                      if (r5.then(po, po), t6)
                        return r5.then((n7) => {
                          fo(e6, n7, t6);
                        }).catch((t7) => {
                          yo(t7, e6, 0);
                        });
                      e6.asyncDep = r5;
                    } else
                      fo(e6, r5, t6);
                  } else
                    mo(e6, t6);
                }(e5, t5) : void 0;
                vo = false;
              }(l3), l3.asyncDep) {
                if (r3 && r3.registerDep(l3, P2), !e4.el) {
                  const e5 = l3.subTree = Kn(On);
                  x2(null, e5, t4, n3);
                }
              } else
                P2(l3, e4, t4, n3, r3, a3, i3);
            }, M2 = (e4, t4, n3) => {
              const o3 = t4.component = e4.component;
              if (function(e5, t5, n4) {
                const { props: o4, children: r3, component: a3 } = e5, { props: i3, children: l3, patchFlag: s3 } = t5, c3 = a3.emitsOptions;
                if (t5.dirs || t5.transition)
                  return true;
                if (!(n4 && s3 >= 0))
                  return !(!r3 && !l3 || l3 && l3.$stable) || o4 !== i3 && (o4 ? !i3 || Vt(o4, i3, c3) : !!i3);
                if (1024 & s3)
                  return true;
                if (16 & s3)
                  return o4 ? Vt(o4, i3, c3) : !!i3;
                if (8 & s3) {
                  const e6 = t5.dynamicProps;
                  for (let t6 = 0; t6 < e6.length; t6++) {
                    const n5 = e6[t6];
                    if (i3[n5] !== o4[n5] && !jt(c3, n5))
                      return true;
                  }
                }
                return false;
              }(e4, t4, n3)) {
                if (o3.asyncDep && !o3.asyncResolved)
                  return void N2(o3, t4, n3);
                o3.next = t4, function(e5) {
                  const t5 = _o.indexOf(e5);
                  t5 > So && _o.splice(t5, 1);
                }(o3.update), o3.update();
              } else
                t4.component = e4.component, t4.el = e4.el, o3.vnode = t4;
            }, P2 = (e4, t4, n3, o3, r3, a3, i3) => {
              const l3 = new ue(() => {
                if (e4.isMounted) {
                  let t5, { next: n4, bu: o4, u: s4, parent: c3, vnode: u3 } = e4, p3 = n4;
                  l3.allowRecurse = false, n4 ? (n4.el = u3.el, N2(e4, n4, i3)) : n4 = u3, o4 && W(o4), (t5 = n4.props && n4.props.onVnodeBeforeUpdate) && Cn(t5, c3, n4, u3), l3.allowRecurse = true;
                  const h3 = Pt(e4), v2 = e4.subTree;
                  e4.subTree = h3, w2(v2, h3, d2(v2.el), te2(v2), e4, r3, a3), n4.el = h3.el, p3 === null && function({ vnode: e5, parent: t6 }, n5) {
                    for (; t6 && t6.subTree === e5; )
                      (e5 = t6.vnode).el = n5, t6 = t6.parent;
                  }(e4, h3.el), s4 && xn(s4, r3), (t5 = n4.props && n4.props.onVnodeUpdated) && xn(() => Cn(t5, c3, n4, u3), r3), false;
                } else {
                  let i4;
                  const { el: s4, props: c3 } = t4, { bm: u3, m: d3, parent: p3 } = e4, h3 = Xt(t4);
                  if (l3.allowRecurse = false, u3 && W(u3), !h3 && (i4 = c3 && c3.onVnodeBeforeMount) && Cn(i4, p3, t4), l3.allowRecurse = true, s4 && ae2) {
                    const n4 = () => {
                      e4.subTree = Pt(e4), ae2(s4, e4.subTree, e4, r3, null);
                    };
                    h3 ? t4.type.__asyncLoader().then(() => !e4.isUnmounted && n4()) : n4();
                  } else {
                    const i5 = e4.subTree = Pt(e4);
                    w2(null, i5, n3, o3, e4, r3, a3), t4.el = i5.el;
                  }
                  if (d3 && xn(d3, r3), !h3 && (i4 = c3 && c3.onVnodeMounted)) {
                    const e5 = t4;
                    xn(() => Cn(i4, p3, e5), r3);
                  }
                  256 & t4.shapeFlag && e4.a && xn(e4.a, r3), e4.isMounted = true, false, t4 = n3 = o3 = null;
                }
              }, () => $o(e4.update), e4.scope), s3 = e4.update = l3.run.bind(l3);
              s3.id = e4.uid, l3.allowRecurse = s3.allowRecurse = true, s3();
            }, N2 = (e4, t4, n3) => {
              t4.component = e4;
              const o3 = e4.vnode.props;
              e4.vnode = t4, e4.next = null, function(e5, t5, n4, o4) {
                const { props: r3, attrs: a3, vnode: { patchFlag: i3 } } = e5, l3 = ut(r3), [s3] = e5.propsOptions;
                let c3 = false;
                if (!(o4 || i3 > 0) || 16 & i3) {
                  let o5;
                  rn(e5, t5, r3, a3) && (c3 = true);
                  for (const a4 in l3)
                    t5 && (_(t5, a4) || (o5 = D(a4)) !== a4 && _(t5, o5)) || (s3 ? !n4 || n4[a4] === void 0 && n4[o5] === void 0 || (r3[a4] = an(s3, l3, a4, void 0, e5, true)) : delete r3[a4]);
                  if (a3 !== l3)
                    for (const e6 in a3)
                      t5 && _(t5, e6) || (delete a3[e6], c3 = true);
                } else if (8 & i3) {
                  const n5 = e5.vnode.dynamicProps;
                  for (let o5 = 0; o5 < n5.length; o5++) {
                    let i4 = n5[o5];
                    const u3 = t5[i4];
                    if (s3)
                      if (_(a3, i4))
                        u3 !== a3[i4] && (a3[i4] = u3, c3 = true);
                      else {
                        const t6 = F(i4);
                        r3[t6] = an(s3, l3, t6, u3, e5, false);
                      }
                    else
                      u3 !== a3[i4] && (a3[i4] = u3, c3 = true);
                  }
                }
                c3 && we(e5, "set", "$attrs");
              }(e4, t4.props, o3, n3), ((e5, t5, n4) => {
                const { vnode: o4, slots: r3 } = e5;
                let a3 = true, i3 = v;
                if (32 & o4.shapeFlag) {
                  const e6 = t5._;
                  e6 ? n4 && e6 === 1 ? a3 = false : (k(r3, t5), n4 || e6 !== 1 || delete r3._) : (a3 = !t5.$stable, fn(t5, r3)), i3 = t5;
                } else
                  t5 && (mn(e5, t5), i3 = { default: 1 });
                if (a3)
                  for (const e6 in r3)
                    pn(e6) || e6 in i3 || delete r3[e6];
              })(e4, t4.children, n3), ve(), Po(void 0, e4.update), fe();
            }, V2 = (e4, t4, n3, o3, r3, a3, i3, l3, s3 = false) => {
              const c3 = e4 && e4.children, d3 = e4 ? e4.shapeFlag : 0, p3 = t4.children, { patchFlag: h3, shapeFlag: v2 } = t4;
              if (h3 > 0) {
                if (128 & h3)
                  return void q2(c3, p3, n3, o3, r3, a3, i3, l3, s3);
                if (256 & h3)
                  return void B2(c3, p3, n3, o3, r3, a3, i3, l3, s3);
              }
              8 & v2 ? (16 & d3 && ee2(c3, r3, a3), p3 !== c3 && u2(n3, p3)) : 16 & d3 ? 16 & v2 ? q2(c3, p3, n3, o3, r3, a3, i3, l3, s3) : ee2(c3, r3, a3, true) : (8 & d3 && u2(n3, ""), 16 & v2 && A2(p3, n3, o3, r3, a3, i3, l3, s3));
            }, B2 = (e4, t4, n3, o3, r3, a3, i3, l3, s3) => {
              t4 = t4 || f;
              const c3 = (e4 = e4 || f).length, u3 = t4.length, d3 = Math.min(c3, u3);
              let p3;
              for (p3 = 0; p3 < d3; p3++) {
                const o4 = t4[p3] = s3 ? eo(t4[p3]) : Gn(t4[p3]);
                w2(e4[p3], o4, n3, null, r3, a3, i3, l3, s3);
              }
              c3 > u3 ? ee2(e4, r3, a3, true, false, d3) : A2(t4, n3, o3, r3, a3, i3, l3, s3, d3);
            }, q2 = (e4, t4, n3, o3, r3, a3, i3, l3, s3) => {
              let c3 = 0;
              const u3 = t4.length;
              let d3 = e4.length - 1, p3 = u3 - 1;
              for (; c3 <= d3 && c3 <= p3; ) {
                const o4 = e4[c3], u4 = t4[c3] = s3 ? eo(t4[c3]) : Gn(t4[c3]);
                if (!qn(o4, u4))
                  break;
                w2(o4, u4, n3, null, r3, a3, i3, l3, s3), c3++;
              }
              for (; c3 <= d3 && c3 <= p3; ) {
                const o4 = e4[d3], c4 = t4[p3] = s3 ? eo(t4[p3]) : Gn(t4[p3]);
                if (!qn(o4, c4))
                  break;
                w2(o4, c4, n3, null, r3, a3, i3, l3, s3), d3--, p3--;
              }
              if (c3 > d3) {
                if (c3 <= p3) {
                  const e5 = p3 + 1, d4 = e5 < u3 ? t4[e5].el : o3;
                  for (; c3 <= p3; )
                    w2(null, t4[c3] = s3 ? eo(t4[c3]) : Gn(t4[c3]), n3, d4, r3, a3, i3, l3, s3), c3++;
                }
              } else if (c3 > p3)
                for (; c3 <= d3; )
                  J2(e4[c3], r3, a3, true), c3++;
              else {
                const h3 = c3, v2 = c3, m2 = /* @__PURE__ */ new Map();
                for (c3 = v2; c3 <= p3; c3++) {
                  const e5 = t4[c3] = s3 ? eo(t4[c3]) : Gn(t4[c3]);
                  e5.key != null && m2.set(e5.key, c3);
                }
                let g3, b3 = 0;
                const y3 = p3 - v2 + 1;
                let k2 = false, x3 = 0;
                const _2 = new Array(y3);
                for (c3 = 0; c3 < y3; c3++)
                  _2[c3] = 0;
                for (c3 = h3; c3 <= d3; c3++) {
                  const o4 = e4[c3];
                  if (b3 >= y3) {
                    J2(o4, r3, a3, true);
                    continue;
                  }
                  let u4;
                  if (o4.key != null)
                    u4 = m2.get(o4.key);
                  else
                    for (g3 = v2; g3 <= p3; g3++)
                      if (_2[g3 - v2] === 0 && qn(o4, t4[g3])) {
                        u4 = g3;
                        break;
                      }
                  u4 === void 0 ? J2(o4, r3, a3, true) : (_2[u4 - v2] = c3 + 1, u4 >= x3 ? x3 = u4 : k2 = true, w2(o4, t4[u4], n3, null, r3, a3, i3, l3, s3), b3++);
                }
                const S3 = k2 ? function(e5) {
                  const t5 = e5.slice(), n4 = [0];
                  let o4, r4, a4, i4, l4;
                  const s4 = e5.length;
                  for (o4 = 0; o4 < s4; o4++) {
                    const s5 = e5[o4];
                    if (s5 !== 0) {
                      if (r4 = n4[n4.length - 1], e5[r4] < s5) {
                        t5[o4] = r4, n4.push(o4);
                        continue;
                      }
                      for (a4 = 0, i4 = n4.length - 1; a4 < i4; )
                        l4 = a4 + i4 >> 1, e5[n4[l4]] < s5 ? a4 = l4 + 1 : i4 = l4;
                      s5 < e5[n4[a4]] && (a4 > 0 && (t5[o4] = n4[a4 - 1]), n4[a4] = o4);
                    }
                  }
                  for (a4 = n4.length, i4 = n4[a4 - 1]; a4-- > 0; )
                    n4[a4] = i4, i4 = t5[i4];
                  return n4;
                }(_2) : f;
                for (g3 = S3.length - 1, c3 = y3 - 1; c3 >= 0; c3--) {
                  const e5 = v2 + c3, d4 = t4[e5], p4 = e5 + 1 < u3 ? t4[e5 + 1].el : o3;
                  _2[c3] === 0 ? w2(null, d4, n3, p4, r3, a3, i3, l3, s3) : k2 && (g3 < 0 || c3 !== S3[g3] ? H2(d4, n3, p4, 2) : g3--);
                }
              }
            }, H2 = (e4, t4, n3, r3, a3 = null) => {
              const { el: i3, type: l3, transition: s3, children: c3, shapeFlag: u3 } = e4;
              if (6 & u3)
                H2(e4.component.subTree, t4, n3, r3);
              else if (128 & u3)
                e4.suspense.move(t4, n3, r3);
              else if (64 & u3)
                l3.move(e4, t4, n3, oe2);
              else if (l3 !== Rn)
                if (l3 !== jn)
                  if (r3 !== 2 && 1 & u3 && s3)
                    if (r3 === 0)
                      s3.beforeEnter(i3), o2(i3, t4, n3), xn(() => s3.enter(i3), a3);
                    else {
                      const { leave: e5, delayLeave: r4, afterLeave: a4 } = s3, l4 = () => o2(i3, t4, n3), c4 = () => {
                        e5(i3, () => {
                          l4(), a4 && a4();
                        });
                      };
                      r4 ? r4(i3, l4, c4) : c4();
                    }
                  else
                    o2(i3, t4, n3);
                else
                  (({ el: e5, anchor: t5 }, n4, r4) => {
                    let a4;
                    for (; e5 && e5 !== t5; )
                      a4 = p2(e5), o2(e5, n4, r4), e5 = a4;
                    o2(t5, n4, r4);
                  })(e4, t4, n3);
              else {
                o2(i3, t4, n3);
                for (let e5 = 0; e5 < c3.length; e5++)
                  H2(c3[e5], t4, n3, r3);
                o2(e4.anchor, t4, n3);
              }
            }, J2 = (e4, t4, n3, o3 = false, r3 = false) => {
              const { type: a3, props: i3, ref: l3, children: s3, dynamicChildren: c3, shapeFlag: u3, patchFlag: d3, dirs: p3 } = e4;
              if (l3 != null && Sn(l3, null, n3, e4, true), 256 & u3)
                return void t4.ctx.deactivate(e4);
              const h3 = 1 & u3 && p3, v2 = !Xt(e4);
              let f2;
              if (v2 && (f2 = i3 && i3.onVnodeBeforeUnmount) && Cn(f2, t4, e4), 6 & u3)
                X2(e4.component, n3, o3);
              else {
                if (128 & u3)
                  return void e4.suspense.unmount(n3, o3);
                h3 && bn(e4, null, t4, "beforeUnmount"), 64 & u3 ? e4.type.remove(e4, t4, n3, r3, oe2, o3) : c3 && (a3 !== Rn || d3 > 0 && 64 & d3) ? ee2(c3, t4, n3, false, true) : (a3 === Rn && 384 & d3 || !r3 && 16 & u3) && ee2(s3, t4, n3), o3 && K2(e4);
              }
              (v2 && (f2 = i3 && i3.onVnodeUnmounted) || h3) && xn(() => {
                f2 && Cn(f2, t4, e4), h3 && bn(e4, null, t4, "unmounted");
              }, n3);
            }, K2 = (e4) => {
              const { type: t4, el: n3, anchor: o3, transition: a3 } = e4;
              if (t4 === Rn)
                return void Y2(n3, o3);
              if (t4 === jn)
                return void (({ el: e5, anchor: t5 }) => {
                  let n4;
                  for (; e5 && e5 !== t5; )
                    n4 = p2(e5), r2(e5), e5 = n4;
                  r2(t5);
                })(e4);
              const i3 = () => {
                r2(n3), a3 && !a3.persisted && a3.afterLeave && a3.afterLeave();
              };
              if (1 & e4.shapeFlag && a3 && !a3.persisted) {
                const { leave: t5, delayLeave: o4 } = a3, r3 = () => t5(n3, i3);
                o4 ? o4(e4.el, i3, r3) : r3();
              } else
                i3();
            }, Y2 = (e4, t4) => {
              let n3;
              for (; e4 !== t4; )
                n3 = p2(e4), r2(e4), e4 = n3;
              r2(t4);
            }, X2 = (e4, t4, n3) => {
              const { bum: o3, scope: r3, update: a3, subTree: i3, um: l3 } = e4;
              o3 && W(o3), r3.stop(), a3 && (a3.active = false, J2(i3, e4, t4, n3)), l3 && xn(l3, t4), xn(() => {
                e4.isUnmounted = true;
              }, t4), t4 && t4.pendingBranch && !t4.isUnmounted && e4.asyncDep && !e4.asyncResolved && e4.suspenseId === t4.pendingId && (t4.deps--, t4.deps === 0 && t4.resolve()), false;
            }, ee2 = (e4, t4, n3, o3 = false, r3 = false, a3 = 0) => {
              for (let i3 = a3; i3 < e4.length; i3++)
                J2(e4[i3], t4, n3, o3, r3);
            }, te2 = (e4) => 6 & e4.shapeFlag ? te2(e4.component.subTree) : 128 & e4.shapeFlag ? e4.suspense.next() : p2(e4.anchor || e4.el), ne2 = (e4, t4, n3) => {
              e4 == null ? t4._vnode && J2(t4._vnode, null, null, true) : w2(t4._vnode || null, e4, t4, null, null, null, n3), No(), t4._vnode = e4;
            }, oe2 = { p: w2, um: J2, m: H2, r: K2, mt: $2, mc: A2, pc: V2, pbc: T2, n: te2, o: e3 };
            let re2, ae2;
            return t3 && ([re2, ae2] = t3(oe2)), { render: ne2, hydrate: re2, createApp: kn(ne2, re2) };
          }
          function Sn(e3, t3, n2, o2, r2 = false) {
            if (S(e3))
              return void e3.forEach((e4, a3) => Sn(e4, t3 && (S(t3) ? t3[a3] : t3), n2, o2, r2));
            if (Xt(o2) && !r2)
              return;
            const a2 = 4 & o2.shapeFlag ? go(o2.component) || o2.component.proxy : o2.el, i2 = r2 ? null : a2, { i: l2, r: s2 } = e3, c2 = t3 && t3.r, u2 = l2.refs === v ? l2.refs = {} : l2.refs, d2 = l2.setupState;
            if (c2 != null && c2 !== s2 && (L(c2) ? (u2[c2] = null, _(d2, c2) && (d2[c2] = null)) : mt(c2) && (c2.value = null)), L(s2)) {
              const e4 = () => {
                u2[s2] = i2, _(d2, s2) && (d2[s2] = i2);
              };
              i2 ? (e4.id = -1, xn(e4, n2)) : e4();
            } else if (mt(s2)) {
              const e4 = () => {
                s2.value = i2;
              };
              i2 ? (e4.id = -1, xn(e4, n2)) : e4();
            } else
              A(s2) && bo(s2, l2, 12, [i2, u2]);
          }
          function Cn(e3, t3, n2, o2 = null) {
            wo(e3, t3, 7, [n2, o2]);
          }
          function zn(e3, t3, n2 = false) {
            const o2 = e3.children, r2 = t3.children;
            if (S(o2) && S(r2))
              for (let e4 = 0; e4 < o2.length; e4++) {
                const t4 = o2[e4];
                let a2 = r2[e4];
                1 & a2.shapeFlag && !a2.dynamicChildren && ((a2.patchFlag <= 0 || a2.patchFlag === 32) && (a2 = r2[e4] = eo(r2[e4]), a2.el = t4.el), n2 || zn(t4, a2));
              }
          }
          const En = "components";
          function An(e3, t3) {
            return function(e4, t4, n2 = true, o2 = false) {
              const r2 = $t || so;
              if (r2) {
                const n3 = r2.type;
                if (e4 === En) {
                  const e5 = function(e6) {
                    return A(e6) && e6.displayName || e6.name;
                  }(n3);
                  if (e5 && (e5 === t4 || e5 === F(t4) || e5 === B(F(t4))))
                    return n3;
                }
                const a2 = Tn(r2[e4] || n3[e4], t4) || Tn(r2.appContext[e4], t4);
                return !a2 && o2 ? n3 : a2;
              }
            }(En, e3, true, t3) || e3;
          }
          const Ln = Symbol();
          function Tn(e3, t3) {
            return e3 && (e3[t3] || e3[F(t3)] || e3[B(F(t3))]);
          }
          const Rn = Symbol(void 0), In = Symbol(void 0), On = Symbol(void 0), jn = Symbol(void 0), $n = [];
          let Mn = null;
          function Un(e3 = false) {
            $n.push(Mn = e3 ? null : []);
          }
          let Pn = 1;
          function Nn(e3) {
            Pn += e3;
          }
          function Fn(e3) {
            return e3.dynamicChildren = Pn > 0 ? Mn || f : null, $n.pop(), Mn = $n[$n.length - 1] || null, Pn > 0 && Mn && Mn.push(e3), e3;
          }
          function Vn(e3, t3, n2, o2, r2, a2) {
            return Fn(Jn(e3, t3, n2, o2, r2, a2, true));
          }
          function Dn(e3, t3, n2, o2, r2) {
            return Fn(Kn(e3, t3, n2, o2, r2, true));
          }
          function Bn(e3) {
            return !!e3 && e3.__v_isVNode === true;
          }
          function qn(e3, t3) {
            return e3.type === t3.type && e3.key === t3.key;
          }
          const Hn = "__vInternal", Wn = ({ key: e3 }) => e3 != null ? e3 : null, Zn = ({ ref: e3 }) => e3 != null ? L(e3) || mt(e3) || A(e3) ? { i: $t, r: e3 } : e3 : null;
          function Jn(e3, t3 = null, n2 = null, o2 = 0, r2 = null, a2 = e3 === Rn ? 0 : 1, i2 = false, l2 = false) {
            const s2 = { __v_isVNode: true, __v_skip: true, type: e3, props: t3, key: t3 && Wn(t3), ref: t3 && Zn(t3), scopeId: Mt, slotScopeIds: null, children: n2, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetAnchor: null, staticCount: 0, shapeFlag: a2, patchFlag: o2, dynamicProps: r2, dynamicChildren: null, appContext: null };
            return l2 ? (to(s2, n2), 128 & a2 && e3.normalize(s2)) : n2 && (s2.shapeFlag |= L(n2) ? 8 : 16), Pn > 0 && !i2 && Mn && (s2.patchFlag > 0 || 6 & a2) && s2.patchFlag !== 32 && Mn.push(s2), s2;
          }
          const Kn = function(e3, t3 = null, n2 = null, o2 = 0, r2 = null, i2 = false) {
            if (e3 && e3 !== Ln || (e3 = On), Bn(e3)) {
              const o3 = Qn(e3, t3, true);
              return n2 && to(o3, n2), o3;
            }
            if (l2 = e3, A(l2) && "__vccOpts" in l2 && (e3 = e3.__vccOpts), t3) {
              t3 = function(e5) {
                return e5 ? ct(e5) || Hn in e5 ? k({}, e5) : e5 : null;
              }(t3);
              let { class: e4, style: n3 } = t3;
              e4 && !L(e4) && (t3.class = c(e4)), R(n3) && (ct(n3) && !S(n3) && (n3 = k({}, n3)), t3.style = a(n3));
            }
            var l2;
            return Jn(e3, t3, n2, o2, r2, L(e3) ? 1 : ((e4) => e4.__isSuspense)(e3) ? 128 : ((e4) => e4.__isTeleport)(e3) ? 64 : R(e3) ? 4 : A(e3) ? 2 : 0, i2, true);
          };
          function Qn(e3, t3, n2 = false) {
            const { props: o2, ref: r2, patchFlag: i2, children: l2 } = e3, s2 = t3 ? function(...e4) {
              const t4 = {};
              for (let n3 = 0; n3 < e4.length; n3++) {
                const o3 = e4[n3];
                for (const e5 in o3)
                  if (e5 === "class")
                    t4.class !== o3.class && (t4.class = c([t4.class, o3.class]));
                  else if (e5 === "style")
                    t4.style = a([t4.style, o3.style]);
                  else if (w(e5)) {
                    const n4 = t4[e5], r3 = o3[e5];
                    n4 === r3 || S(n4) && n4.includes(r3) || (t4[e5] = n4 ? [].concat(n4, r3) : r3);
                  } else
                    e5 !== "" && (t4[e5] = o3[e5]);
              }
              return t4;
            }(o2 || {}, t3) : o2;
            return { __v_isVNode: true, __v_skip: true, type: e3.type, props: s2, key: s2 && Wn(s2), ref: t3 && t3.ref ? n2 && r2 ? S(r2) ? r2.concat(Zn(t3)) : [r2, Zn(t3)] : Zn(t3) : r2, scopeId: e3.scopeId, slotScopeIds: e3.slotScopeIds, children: l2, target: e3.target, targetAnchor: e3.targetAnchor, staticCount: e3.staticCount, shapeFlag: e3.shapeFlag, patchFlag: t3 && e3.type !== Rn ? i2 === -1 ? 16 : 16 | i2 : i2, dynamicProps: e3.dynamicProps, dynamicChildren: e3.dynamicChildren, appContext: e3.appContext, dirs: e3.dirs, transition: e3.transition, component: e3.component, suspense: e3.suspense, ssContent: e3.ssContent && Qn(e3.ssContent), ssFallback: e3.ssFallback && Qn(e3.ssFallback), el: e3.el, anchor: e3.anchor };
          }
          function Yn(e3 = " ", t3 = 0) {
            return Kn(In, null, e3, t3);
          }
          function Xn(e3 = "", t3 = false) {
            return t3 ? (Un(), Dn(On, null, e3)) : Kn(On, null, e3);
          }
          function Gn(e3) {
            return e3 == null || typeof e3 == "boolean" ? Kn(On) : S(e3) ? Kn(Rn, null, e3.slice()) : typeof e3 == "object" ? eo(e3) : Kn(In, null, String(e3));
          }
          function eo(e3) {
            return e3.el === null || e3.memo ? e3 : Qn(e3);
          }
          function to(e3, t3) {
            let n2 = 0;
            const { shapeFlag: o2 } = e3;
            if (t3 == null)
              t3 = null;
            else if (S(t3))
              n2 = 16;
            else if (typeof t3 == "object") {
              if (65 & o2) {
                const n3 = t3.default;
                return void (n3 && (n3._c && (n3._d = false), to(e3, n3()), n3._c && (n3._d = true)));
              }
              {
                n2 = 32;
                const o3 = t3._;
                o3 || Hn in t3 ? o3 === 3 && $t && ($t.slots._ === 1 ? t3._ = 1 : (t3._ = 2, e3.patchFlag |= 1024)) : t3._ctx = $t;
              }
            } else
              A(t3) ? (t3 = { default: t3, _ctx: $t }, n2 = 32) : (t3 = String(t3), 64 & o2 ? (n2 = 16, t3 = [Yn(t3)]) : n2 = 8);
            e3.children = t3, e3.shapeFlag |= n2;
          }
          function no(e3, t3, n2, o2) {
            let r2;
            const a2 = n2 && n2[o2];
            if (S(e3) || L(e3)) {
              r2 = new Array(e3.length);
              for (let n3 = 0, o3 = e3.length; n3 < o3; n3++)
                r2[n3] = t3(e3[n3], n3, void 0, a2 && a2[n3]);
            } else if (typeof e3 == "number") {
              r2 = new Array(e3);
              for (let n3 = 0; n3 < e3; n3++)
                r2[n3] = t3(n3 + 1, n3, void 0, a2 && a2[n3]);
            } else if (R(e3))
              if (e3[Symbol.iterator])
                r2 = Array.from(e3, (e4, n3) => t3(e4, n3, void 0, a2 && a2[n3]));
              else {
                const n3 = Object.keys(e3);
                r2 = new Array(n3.length);
                for (let o3 = 0, i2 = n3.length; o3 < i2; o3++) {
                  const i3 = n3[o3];
                  r2[o3] = t3(e3[i3], i3, o3, a2 && a2[o3]);
                }
              }
            else
              r2 = [];
            return n2 && (n2[o2] = r2), r2;
          }
          const oo = (e3) => e3 ? ho(e3) ? go(e3) || e3.proxy : oo(e3.parent) : null, ro = k(/* @__PURE__ */ Object.create(null), { $: (e3) => e3, $el: (e3) => e3.vnode.el, $data: (e3) => e3.data, $props: (e3) => e3.props, $attrs: (e3) => e3.attrs, $slots: (e3) => e3.slots, $refs: (e3) => e3.refs, $parent: (e3) => oo(e3.parent), $root: (e3) => oo(e3.root), $emit: (e3) => e3.emit, $options: (e3) => e3.type, $forceUpdate: (e3) => () => $o(e3.update), $nextTick: (e3) => jo.bind(e3.proxy), $watch: (e3) => m }), ao = { get({ _: e3 }, t3) {
            const { ctx: n2, setupState: o2, data: r2, props: a2, accessCache: i2, type: l2, appContext: s2 } = e3;
            let c2;
            if (t3[0] !== "$") {
              const l3 = i2[t3];
              if (l3 !== void 0)
                switch (l3) {
                  case 1:
                    return o2[t3];
                  case 2:
                    return r2[t3];
                  case 4:
                    return n2[t3];
                  case 3:
                    return a2[t3];
                }
              else {
                if (o2 !== v && _(o2, t3))
                  return i2[t3] = 1, o2[t3];
                if (r2 !== v && _(r2, t3))
                  return i2[t3] = 2, r2[t3];
                if ((c2 = e3.propsOptions[0]) && _(c2, t3))
                  return i2[t3] = 3, a2[t3];
                if (n2 !== v && _(n2, t3))
                  return i2[t3] = 4, n2[t3];
                i2[t3] = 0;
              }
            }
            const u2 = ro[t3];
            let d2, p2;
            return u2 ? (t3 === "$attrs" && me(e3, 0, t3), u2(e3)) : (d2 = l2.__cssModules) && (d2 = d2[t3]) ? d2 : n2 !== v && _(n2, t3) ? (i2[t3] = 4, n2[t3]) : (p2 = s2.config.globalProperties, _(p2, t3) ? p2[t3] : void 0);
          }, set({ _: e3 }, t3, n2) {
            const { data: o2, setupState: r2, ctx: a2 } = e3;
            if (r2 !== v && _(r2, t3))
              r2[t3] = n2;
            else if (o2 !== v && _(o2, t3))
              o2[t3] = n2;
            else if (_(e3.props, t3))
              return false;
            return !(t3[0] === "$" && t3.slice(1) in e3 || (a2[t3] = n2, 0));
          }, has({ _: { data: e3, setupState: t3, accessCache: n2, ctx: o2, appContext: r2, propsOptions: a2 } }, i2) {
            let l2;
            return !!n2[i2] || e3 !== v && _(e3, i2) || t3 !== v && _(t3, i2) || (l2 = a2[0]) && _(l2, i2) || _(o2, i2) || _(ro, i2) || _(r2.config.globalProperties, i2);
          } }, io = wn();
          let lo = 0;
          let so = null;
          const co = () => so || $t, uo = (e3) => {
            so = e3, e3.scope.on();
          }, po = () => {
            so && so.scope.off(), so = null;
          };
          function ho(e3) {
            return 4 & e3.vnode.shapeFlag;
          }
          let vo = false;
          function fo(e3, t3, n2) {
            A(t3) ? e3.type.__ssrInlineRender ? e3.ssrRender = t3 : e3.render = t3 : R(t3) && (false, e3.setupState = yt(t3)), mo(e3, n2);
          }
          function mo(e3, t3, n2) {
            const o2 = e3.type;
            e3.render || (e3.render = o2.render || m);
          }
          function go(e3) {
            if (e3.exposed)
              return e3.exposeProxy || (e3.exposeProxy = new Proxy(yt(dt(e3.exposed)), { get: (t3, n2) => n2 in t3 ? t3[n2] : n2 in ro ? ro[n2](e3) : void 0 }));
          }
          function bo(e3, t3, n2, o2) {
            let r2;
            try {
              r2 = o2 ? e3(...o2) : e3();
            } catch (e4) {
              yo(e4, t3, n2);
            }
            return r2;
          }
          function wo(e3, t3, n2, o2) {
            if (A(e3)) {
              const r3 = bo(e3, t3, n2, o2);
              return r3 && I(r3) && r3.catch((e4) => {
                yo(e4, t3, n2);
              }), r3;
            }
            const r2 = [];
            for (let a2 = 0; a2 < e3.length; a2++)
              r2.push(wo(e3[a2], t3, n2, o2));
            return r2;
          }
          function yo(e3, t3, n2, o2 = true) {
            if (t3 && t3.vnode, t3) {
              let o3 = t3.parent;
              const r2 = t3.proxy, a2 = n2;
              for (; o3; ) {
                const t4 = o3.ec;
                if (t4) {
                  for (let n3 = 0; n3 < t4.length; n3++)
                    if (t4[n3](e3, r2, a2) === false)
                      return;
                }
                o3 = o3.parent;
              }
              const i2 = t3.appContext.config.errorHandler;
              if (i2)
                return void bo(i2, null, 10, [e3, r2, a2]);
            }
            !function(e4, t4, n3, o3 = true) {
              console.error(e4);
            }(e3, 0, 0, o2);
          }
          let ko = false, xo = false;
          const _o = [];
          let So = 0;
          const Co = [];
          let zo = null, Eo = 0;
          const Ao = [];
          let Lo = null, To = 0;
          const Ro = Promise.resolve();
          let Io = null, Oo = null;
          function jo(e3) {
            const t3 = Io || Ro;
            return e3 ? t3.then(this ? e3.bind(this) : e3) : t3;
          }
          function $o(e3) {
            _o.length && _o.includes(e3, ko && e3.allowRecurse ? So + 1 : So) || e3 === Oo || (e3.id == null ? _o.push(e3) : _o.splice(function(e4) {
              let t3 = So + 1, n2 = _o.length;
              for (; t3 < n2; ) {
                const o2 = t3 + n2 >>> 1;
                Fo(_o[o2]) < e4 ? t3 = o2 + 1 : n2 = o2;
              }
              return t3;
            }(e3.id), 0, e3), Mo());
          }
          function Mo() {
            ko || xo || (xo = true, Io = Ro.then(Vo));
          }
          function Uo(e3, t3, n2, o2) {
            S(e3) ? n2.push(...e3) : t3 && t3.includes(e3, e3.allowRecurse ? o2 + 1 : o2) || n2.push(e3), Mo();
          }
          function Po(e3, t3 = null) {
            if (Co.length) {
              for (Oo = t3, zo = [...new Set(Co)], Co.length = 0, Eo = 0; Eo < zo.length; Eo++)
                zo[Eo]();
              zo = null, Eo = 0, Oo = null, Po(e3, t3);
            }
          }
          function No(e3) {
            if (Ao.length) {
              const e4 = [...new Set(Ao)];
              if (Ao.length = 0, Lo)
                return void Lo.push(...e4);
              for (Lo = e4, Lo.sort((e5, t3) => Fo(e5) - Fo(t3)), To = 0; To < Lo.length; To++)
                Lo[To]();
              Lo = null, To = 0;
            }
          }
          const Fo = (e3) => e3.id == null ? 1 / 0 : e3.id;
          function Vo(e3) {
            xo = false, ko = true, Po(e3), _o.sort((e4, t3) => Fo(e4) - Fo(t3));
            try {
              for (So = 0; So < _o.length; So++) {
                const e4 = _o[So];
                e4 && e4.active !== false && bo(e4, null, 14);
              }
            } finally {
              So = 0, _o.length = 0, No(), ko = false, Io = null, (_o.length || Co.length || Ao.length) && Vo(e3);
            }
          }
          const Do = {};
          function Bo(e3, t3, n2) {
            return function(e4, t4, { immediate: n3, deep: o2, flush: r2, onTrack: a2, onTrigger: i2 } = v) {
              const l2 = so;
              let s2, c2, u2 = false, d2 = false;
              if (mt(e4) ? (s2 = () => e4.value, u2 = !!e4._shallow) : lt(e4) ? (s2 = () => e4, o2 = true) : S(e4) ? (d2 = true, u2 = e4.some(lt), s2 = () => e4.map((e5) => mt(e5) ? e5.value : lt(e5) ? qo(e5) : A(e5) ? bo(e5, l2, 2) : void 0)) : s2 = A(e4) ? t4 ? () => bo(e4, l2, 2) : () => {
                if (!l2 || !l2.isUnmounted)
                  return c2 && c2(), wo(e4, l2, 3, [p2]);
              } : m, t4 && o2) {
                const e5 = s2;
                s2 = () => qo(e5());
              }
              let p2 = (e5) => {
                c2 = b2.onStop = () => {
                  bo(e5, l2, 4);
                };
              };
              if (vo)
                return p2 = m, t4 ? n3 && wo(t4, l2, 3, [s2(), d2 ? [] : void 0, p2]) : s2(), m;
              let h2 = d2 ? [] : Do;
              const f2 = () => {
                if (b2.active)
                  if (t4) {
                    const e5 = b2.run();
                    (o2 || u2 || (d2 ? e5.some((e6, t5) => H(e6, h2[t5])) : H(e5, h2))) && (c2 && c2(), wo(t4, l2, 3, [e5, h2 === Do ? void 0 : h2, p2]), h2 = e5);
                  } else
                    b2.run();
              };
              let g2;
              f2.allowRecurse = !!t4, g2 = r2 === "sync" ? f2 : r2 === "post" ? () => xn(f2, l2 && l2.suspense) : () => {
                !l2 || l2.isMounted ? function(e5) {
                  Uo(e5, zo, Co, Eo);
                }(f2) : f2();
              };
              const b2 = new ue(s2, g2);
              return t4 ? n3 ? f2() : h2 = b2.run() : r2 === "post" ? xn(b2.run.bind(b2), l2 && l2.suspense) : b2.run(), () => {
                b2.stop(), l2 && l2.scope && ((e5, t5) => {
                  const n4 = e5.indexOf(t5);
                  n4 > -1 && e5.splice(n4, 1);
                })(l2.scope.effects, b2);
              };
            }(e3, t3, n2);
          }
          function qo(e3, t3) {
            if (!R(e3) || e3.__v_skip)
              return e3;
            if ((t3 = t3 || /* @__PURE__ */ new Set()).has(e3))
              return e3;
            if (t3.add(e3), mt(e3))
              qo(e3.value, t3);
            else if (S(e3))
              for (let n2 = 0; n2 < e3.length; n2++)
                qo(e3[n2], t3);
            else if (z(e3) || C(e3))
              e3.forEach((e4) => {
                qo(e4, t3);
              });
            else if ($(e3))
              for (const n2 in e3)
                qo(e3[n2], t3);
            return e3;
          }
          function Ho(e3, t3, n2) {
            const o2 = arguments.length;
            return o2 === 2 ? R(t3) && !S(t3) ? Bn(t3) ? Kn(e3, null, [t3]) : Kn(e3, t3) : Kn(e3, null, t3) : (o2 > 3 ? n2 = Array.prototype.slice.call(arguments, 2) : o2 === 3 && Bn(n2) && (n2 = [n2]), Kn(e3, t3, n2));
          }
          Symbol("");
          const Wo = "3.2.23", Zo = typeof document != "undefined" ? document : null, Jo = /* @__PURE__ */ new Map(), Ko = { insert: (e3, t3, n2) => {
            t3.insertBefore(e3, n2 || null);
          }, remove: (e3) => {
            const t3 = e3.parentNode;
            t3 && t3.removeChild(e3);
          }, createElement: (e3, t3, n2, o2) => {
            const r2 = t3 ? Zo.createElementNS("http://www.w3.org/2000/svg", e3) : Zo.createElement(e3, n2 ? { is: n2 } : void 0);
            return e3 === "select" && o2 && o2.multiple != null && r2.setAttribute("multiple", o2.multiple), r2;
          }, createText: (e3) => Zo.createTextNode(e3), createComment: (e3) => Zo.createComment(e3), setText: (e3, t3) => {
            e3.nodeValue = t3;
          }, setElementText: (e3, t3) => {
            e3.textContent = t3;
          }, parentNode: (e3) => e3.parentNode, nextSibling: (e3) => e3.nextSibling, querySelector: (e3) => Zo.querySelector(e3), setScopeId(e3, t3) {
            e3.setAttribute(t3, "");
          }, cloneNode(e3) {
            const t3 = e3.cloneNode(true);
            return "_value" in e3 && (t3._value = e3._value), t3;
          }, insertStaticContent(e3, t3, n2, o2) {
            const r2 = n2 ? n2.previousSibling : t3.lastChild;
            let a2 = Jo.get(e3);
            if (!a2) {
              const t4 = Zo.createElement("template");
              if (t4.innerHTML = o2 ? `<svg>${e3}</svg>` : e3, a2 = t4.content, o2) {
                const e4 = a2.firstChild;
                for (; e4.firstChild; )
                  a2.appendChild(e4.firstChild);
                a2.removeChild(e4);
              }
              Jo.set(e3, a2);
            }
            return t3.insertBefore(a2.cloneNode(true), n2), [r2 ? r2.nextSibling : t3.firstChild, n2 ? n2.previousSibling : t3.lastChild];
          } }, Qo = /\s*!important$/;
          function Yo(e3, t3, n2) {
            if (S(n2))
              n2.forEach((n3) => Yo(e3, t3, n3));
            else if (t3.startsWith("--"))
              e3.setProperty(t3, n2);
            else {
              const o2 = function(e4, t4) {
                const n3 = Go[t4];
                if (n3)
                  return n3;
                let o3 = F(t4);
                if (o3 !== "filter" && o3 in e4)
                  return Go[t4] = o3;
                o3 = B(o3);
                for (let n4 = 0; n4 < Xo.length; n4++) {
                  const r2 = Xo[n4] + o3;
                  if (r2 in e4)
                    return Go[t4] = r2;
                }
                return t4;
              }(e3, t3);
              Qo.test(n2) ? e3.setProperty(D(o2), n2.replace(Qo, ""), "important") : e3[o2] = n2;
            }
          }
          const Xo = ["Webkit", "Moz", "ms"], Go = {}, er = "http://www.w3.org/1999/xlink";
          let tr = Date.now, nr = false;
          if (typeof window != "undefined") {
            tr() > document.createEvent("Event").timeStamp && (tr = () => performance.now());
            const e3 = navigator.userAgent.match(/firefox\/(\d+)/i);
            nr = !!(e3 && Number(e3[1]) <= 53);
          }
          let or = 0;
          const rr = Promise.resolve(), ar = () => {
            or = 0;
          };
          function ir(e3, t3, n2, o2) {
            e3.addEventListener(t3, n2, o2);
          }
          const lr = /(?:Once|Passive|Capture)$/, sr = /^on[a-z]/;
          typeof HTMLElement != "undefined" && HTMLElement;
          const cr = "transition", ur = "animation", dr = (e3, { slots: t3 }) => Ho(qt, function(e4) {
            const t4 = {};
            for (const n3 in e4)
              n3 in pr || (t4[n3] = e4[n3]);
            if (e4.css === false)
              return t4;
            const { name: n2 = "v", type: o2, duration: r2, enterFromClass: a2 = `${n2}-enter-from`, enterActiveClass: i2 = `${n2}-enter-active`, enterToClass: l2 = `${n2}-enter-to`, appearFromClass: s2 = a2, appearActiveClass: c2 = i2, appearToClass: u2 = l2, leaveFromClass: d2 = `${n2}-leave-from`, leaveActiveClass: p2 = `${n2}-leave-active`, leaveToClass: h2 = `${n2}-leave-to` } = e4, v2 = function(e5) {
              if (e5 == null)
                return null;
              if (R(e5))
                return [fr(e5.enter), fr(e5.leave)];
              {
                const t5 = fr(e5);
                return [t5, t5];
              }
            }(r2), f2 = v2 && v2[0], m2 = v2 && v2[1], { onBeforeEnter: g2, onEnter: b2, onEnterCancelled: w2, onLeave: y2, onLeaveCancelled: x2, onBeforeAppear: _2 = g2, onAppear: S2 = b2, onAppearCancelled: C2 = w2 } = t4, z2 = (e5, t5, n3) => {
              gr(e5, t5 ? u2 : l2), gr(e5, t5 ? c2 : i2), n3 && n3();
            }, E2 = (e5, t5) => {
              gr(e5, h2), gr(e5, p2), t5 && t5();
            }, A2 = (e5) => (t5, n3) => {
              const r3 = e5 ? S2 : b2, i3 = () => z2(t5, e5, n3);
              hr(r3, [t5, i3]), br(() => {
                gr(t5, e5 ? s2 : a2), mr(t5, e5 ? u2 : l2), vr(r3) || yr(t5, o2, f2, i3);
              });
            };
            return k(t4, { onBeforeEnter(e5) {
              hr(g2, [e5]), mr(e5, a2), mr(e5, i2);
            }, onBeforeAppear(e5) {
              hr(_2, [e5]), mr(e5, s2), mr(e5, c2);
            }, onEnter: A2(false), onAppear: A2(true), onLeave(e5, t5) {
              const n3 = () => E2(e5, t5);
              mr(e5, d2), document.body.offsetHeight, mr(e5, p2), br(() => {
                gr(e5, d2), mr(e5, h2), vr(y2) || yr(e5, o2, m2, n3);
              }), hr(y2, [e5, n3]);
            }, onEnterCancelled(e5) {
              z2(e5, false), hr(w2, [e5]);
            }, onAppearCancelled(e5) {
              z2(e5, true), hr(C2, [e5]);
            }, onLeaveCancelled(e5) {
              E2(e5), hr(x2, [e5]);
            } });
          }(e3), t3);
          dr.displayName = "Transition";
          const pr = { name: String, type: String, css: { type: Boolean, default: true }, duration: [String, Number, Object], enterFromClass: String, enterActiveClass: String, enterToClass: String, appearFromClass: String, appearActiveClass: String, appearToClass: String, leaveFromClass: String, leaveActiveClass: String, leaveToClass: String }, hr = (dr.props = k({}, qt.props, pr), (e3, t3 = []) => {
            S(e3) ? e3.forEach((e4) => e4(...t3)) : e3 && e3(...t3);
          }), vr = (e3) => !!e3 && (S(e3) ? e3.some((e4) => e4.length > 1) : e3.length > 1);
          function fr(e3) {
            return J(e3);
          }
          function mr(e3, t3) {
            t3.split(/\s+/).forEach((t4) => t4 && e3.classList.add(t4)), (e3._vtc || (e3._vtc = /* @__PURE__ */ new Set())).add(t3);
          }
          function gr(e3, t3) {
            t3.split(/\s+/).forEach((t4) => t4 && e3.classList.remove(t4));
            const { _vtc: n2 } = e3;
            n2 && (n2.delete(t3), n2.size || (e3._vtc = void 0));
          }
          function br(e3) {
            requestAnimationFrame(() => {
              requestAnimationFrame(e3);
            });
          }
          let wr = 0;
          function yr(e3, t3, n2, o2) {
            const r2 = e3._endId = ++wr, a2 = () => {
              r2 === e3._endId && o2();
            };
            if (n2)
              return setTimeout(a2, n2);
            const { type: i2, timeout: l2, propCount: s2 } = function(e4, t4) {
              const n3 = window.getComputedStyle(e4), o3 = (e5) => (n3[e5] || "").split(", "), r3 = o3("transitionDelay"), a3 = o3("transitionDuration"), i3 = kr(r3, a3), l3 = o3("animationDelay"), s3 = o3("animationDuration"), c3 = kr(l3, s3);
              let u3 = null, d3 = 0, p3 = 0;
              return t4 === cr ? i3 > 0 && (u3 = cr, d3 = i3, p3 = a3.length) : t4 === ur ? c3 > 0 && (u3 = ur, d3 = c3, p3 = s3.length) : (d3 = Math.max(i3, c3), u3 = d3 > 0 ? i3 > c3 ? cr : ur : null, p3 = u3 ? u3 === cr ? a3.length : s3.length : 0), { type: u3, timeout: d3, propCount: p3, hasTransform: u3 === cr && /\b(transform|all)(,|$)/.test(n3.transitionProperty) };
            }(e3, t3);
            if (!i2)
              return o2();
            const c2 = i2 + "end";
            let u2 = 0;
            const d2 = () => {
              e3.removeEventListener(c2, p2), a2();
            }, p2 = (t4) => {
              t4.target === e3 && ++u2 >= s2 && d2();
            };
            setTimeout(() => {
              u2 < s2 && d2();
            }, l2 + 1), e3.addEventListener(c2, p2);
          }
          function kr(e3, t3) {
            for (; e3.length < t3.length; )
              e3 = e3.concat(e3);
            return Math.max(...t3.map((t4, n2) => xr(t4) + xr(e3[n2])));
          }
          function xr(e3) {
            return 1e3 * Number(e3.slice(0, -1).replace(",", "."));
          }
          /* @__PURE__ */ new WeakMap(), /* @__PURE__ */ new WeakMap();
          const _r = (e3) => {
            const t3 = e3.props["onUpdate:modelValue"];
            return S(t3) ? (e4) => W(t3, e4) : t3;
          };
          function Sr(e3) {
            e3.target.composing = true;
          }
          function Cr(e3) {
            const t3 = e3.target;
            t3.composing && (t3.composing = false, function(e4, t4) {
              const n2 = document.createEvent("HTMLEvents");
              n2.initEvent("input", true, true), e4.dispatchEvent(n2);
            }(t3));
          }
          const zr = { created(e3, { modifiers: { lazy: t3, trim: n2, number: o2 } }, r2) {
            e3._assign = _r(r2);
            const a2 = o2 || r2.props && r2.props.type === "number";
            ir(e3, t3 ? "change" : "input", (t4) => {
              if (t4.target.composing)
                return;
              let o3 = e3.value;
              n2 ? o3 = o3.trim() : a2 && (o3 = J(o3)), e3._assign(o3);
            }), n2 && ir(e3, "change", () => {
              e3.value = e3.value.trim();
            }), t3 || (ir(e3, "compositionstart", Sr), ir(e3, "compositionend", Cr), ir(e3, "change", Cr));
          }, mounted(e3, { value: t3 }) {
            e3.value = t3 == null ? "" : t3;
          }, beforeUpdate(e3, { value: t3, modifiers: { lazy: n2, trim: o2, number: r2 } }, a2) {
            if (e3._assign = _r(a2), e3.composing)
              return;
            if (document.activeElement === e3) {
              if (n2)
                return;
              if (o2 && e3.value.trim() === t3)
                return;
              if ((r2 || e3.type === "number") && J(e3.value) === t3)
                return;
            }
            const i2 = t3 == null ? "" : t3;
            e3.value !== i2 && (e3.value = i2);
          } }, Er = { deep: true, created(e3, t3, n2) {
            e3._assign = _r(n2), ir(e3, "change", () => {
              const t4 = e3._modelValue, n3 = Ir(e3), o2 = e3.checked, r2 = e3._assign;
              if (S(t4)) {
                const e4 = d(t4, n3), a2 = e4 !== -1;
                if (o2 && !a2)
                  r2(t4.concat(n3));
                else if (!o2 && a2) {
                  const n4 = [...t4];
                  n4.splice(e4, 1), r2(n4);
                }
              } else if (z(t4)) {
                const e4 = new Set(t4);
                o2 ? e4.add(n3) : e4.delete(n3), r2(e4);
              } else
                r2(Or(e3, o2));
            });
          }, mounted: Ar, beforeUpdate(e3, t3, n2) {
            e3._assign = _r(n2), Ar(e3, t3, n2);
          } };
          function Ar(e3, { value: t3, oldValue: n2 }, o2) {
            e3._modelValue = t3, S(t3) ? e3.checked = d(t3, o2.props.value) > -1 : z(t3) ? e3.checked = t3.has(o2.props.value) : t3 !== n2 && (e3.checked = u(t3, Or(e3, true)));
          }
          const Lr = { created(e3, { value: t3 }, n2) {
            e3.checked = u(t3, n2.props.value), e3._assign = _r(n2), ir(e3, "change", () => {
              e3._assign(Ir(e3));
            });
          }, beforeUpdate(e3, { value: t3, oldValue: n2 }, o2) {
            e3._assign = _r(o2), t3 !== n2 && (e3.checked = u(t3, o2.props.value));
          } }, Tr = { deep: true, created(e3, { value: t3, modifiers: { number: n2 } }, o2) {
            const r2 = z(t3);
            ir(e3, "change", () => {
              const t4 = Array.prototype.filter.call(e3.options, (e4) => e4.selected).map((e4) => n2 ? J(Ir(e4)) : Ir(e4));
              e3._assign(e3.multiple ? r2 ? new Set(t4) : t4 : t4[0]);
            }), e3._assign = _r(o2);
          }, mounted(e3, { value: t3 }) {
            Rr(e3, t3);
          }, beforeUpdate(e3, t3, n2) {
            e3._assign = _r(n2);
          }, updated(e3, { value: t3 }) {
            Rr(e3, t3);
          } };
          function Rr(e3, t3) {
            const n2 = e3.multiple;
            if (!n2 || S(t3) || z(t3)) {
              for (let o2 = 0, r2 = e3.options.length; o2 < r2; o2++) {
                const r3 = e3.options[o2], a2 = Ir(r3);
                if (n2)
                  S(t3) ? r3.selected = d(t3, a2) > -1 : r3.selected = t3.has(a2);
                else if (u(Ir(r3), t3))
                  return void (e3.selectedIndex !== o2 && (e3.selectedIndex = o2));
              }
              n2 || e3.selectedIndex === -1 || (e3.selectedIndex = -1);
            }
          }
          function Ir(e3) {
            return "_value" in e3 ? e3._value : e3.value;
          }
          function Or(e3, t3) {
            const n2 = t3 ? "_trueValue" : "_falseValue";
            return n2 in e3 ? e3[n2] : t3;
          }
          const jr = { created(e3, t3, n2) {
            $r(e3, t3, n2, null, "created");
          }, mounted(e3, t3, n2) {
            $r(e3, t3, n2, null, "mounted");
          }, beforeUpdate(e3, t3, n2, o2) {
            $r(e3, t3, n2, o2, "beforeUpdate");
          }, updated(e3, t3, n2, o2) {
            $r(e3, t3, n2, o2, "updated");
          } };
          function $r(e3, t3, n2, o2, r2) {
            let a2;
            switch (e3.tagName) {
              case "SELECT":
                a2 = Tr;
                break;
              case "TEXTAREA":
                a2 = zr;
                break;
              default:
                switch (n2.props && n2.props.type) {
                  case "checkbox":
                    a2 = Er;
                    break;
                  case "radio":
                    a2 = Lr;
                    break;
                  default:
                    a2 = zr;
                }
            }
            const i2 = a2[r2];
            i2 && i2(e3, t3, n2, o2);
          }
          const Mr = k({ patchProp: (e3, n2, o2, a2, i2 = false, l2, s2, c2, u2) => {
            n2 === "class" ? function(e4, t3, n3) {
              const o3 = e4._vtc;
              o3 && (t3 = (t3 ? [t3, ...o3] : [...o3]).join(" ")), t3 == null ? e4.removeAttribute("class") : n3 ? e4.setAttribute("class", t3) : e4.className = t3;
            }(e3, a2, i2) : n2 === "style" ? function(e4, t3, n3) {
              const o3 = e4.style, r2 = L(n3);
              if (n3 && !r2) {
                for (const e5 in n3)
                  Yo(o3, e5, n3[e5]);
                if (t3 && !L(t3))
                  for (const e5 in t3)
                    n3[e5] == null && Yo(o3, e5, "");
              } else {
                const a3 = o3.display;
                r2 ? t3 !== n3 && (o3.cssText = n3) : t3 && e4.removeAttribute("style"), "_vod" in e4 && (o3.display = a3);
              }
            }(e3, o2, a2) : w(n2) ? y(n2) || function(e4, t3, n3, o3, r2 = null) {
              const a3 = e4._vei || (e4._vei = {}), i3 = a3[t3];
              if (o3 && i3)
                i3.value = o3;
              else {
                const [n4, l3] = function(e5) {
                  let t4;
                  if (lr.test(e5)) {
                    let n5;
                    for (t4 = {}; n5 = e5.match(lr); )
                      e5 = e5.slice(0, e5.length - n5[0].length), t4[n5[0].toLowerCase()] = true;
                  }
                  return [D(e5.slice(2)), t4];
                }(t3);
                if (o3) {
                  const i4 = a3[t3] = function(e5, t4) {
                    const n5 = (e6) => {
                      const o4 = e6.timeStamp || tr();
                      (nr || o4 >= n5.attached - 1) && wo(function(e7, t5) {
                        if (S(t5)) {
                          const n6 = e7.stopImmediatePropagation;
                          return e7.stopImmediatePropagation = () => {
                            n6.call(e7), e7._stopped = true;
                          }, t5.map((e8) => (t6) => !t6._stopped && e8(t6));
                        }
                        return t5;
                      }(e6, n5.value), t4, 5, [e6]);
                    };
                    return n5.value = e5, n5.attached = or || (rr.then(ar), or = tr()), n5;
                  }(o3, r2);
                  ir(e4, n4, i4, l3);
                } else
                  i3 && (function(e5, t4, n5, o4) {
                    e5.removeEventListener(t4, n5, o4);
                  }(e4, n4, i3, l3), a3[t3] = void 0);
              }
            }(e3, n2, 0, a2, s2) : (n2[0] === "." ? (n2 = n2.slice(1), 1) : n2[0] === "^" ? (n2 = n2.slice(1), 0) : function(e4, t3, n3, o3) {
              return o3 ? t3 === "innerHTML" || t3 === "textContent" || !!(t3 in e4 && sr.test(t3) && A(n3)) : t3 !== "spellcheck" && t3 !== "draggable" && (t3 !== "form" && ((t3 !== "list" || e4.tagName !== "INPUT") && ((t3 !== "type" || e4.tagName !== "TEXTAREA") && ((!sr.test(t3) || !L(n3)) && t3 in e4))));
            }(e3, n2, a2, i2)) ? function(e4, t3, n3, o3, a3, i3, l3) {
              if (t3 === "innerHTML" || t3 === "textContent")
                return o3 && l3(o3, a3, i3), void (e4[t3] = n3 == null ? "" : n3);
              if (t3 === "value" && e4.tagName !== "PROGRESS" && !e4.tagName.includes("-")) {
                e4._value = n3;
                const o4 = n3 == null ? "" : n3;
                return e4.value === o4 && e4.tagName !== "OPTION" || (e4.value = o4), void (n3 == null && e4.removeAttribute(t3));
              }
              if (n3 === "" || n3 == null) {
                const o4 = typeof e4[t3];
                if (o4 === "boolean")
                  return void (e4[t3] = r(n3));
                if (n3 == null && o4 === "string")
                  return e4[t3] = "", void e4.removeAttribute(t3);
                if (o4 === "number") {
                  try {
                    e4[t3] = 0;
                  } catch (e5) {
                  }
                  return void e4.removeAttribute(t3);
                }
              }
              try {
                e4[t3] = n3;
              } catch (e5) {
              }
            }(e3, n2, a2, l2, s2, c2, u2) : (n2 === "true-value" ? e3._trueValue = a2 : n2 === "false-value" && (e3._falseValue = a2), function(e4, n3, o3, a3, i3) {
              if (a3 && n3.startsWith("xlink:"))
                o3 == null ? e4.removeAttributeNS(er, n3.slice(6, n3.length)) : e4.setAttributeNS(er, n3, o3);
              else {
                const a4 = t2(n3);
                o3 == null || a4 && !r(o3) ? e4.removeAttribute(n3) : e4.setAttribute(n3, a4 ? "" : o3);
              }
            }(e3, n2, a2, i2));
          } }, Ko);
          let Ur;
          const Pr = function(e3) {
            let t3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
            if (typeof e3 == "object" && e3.errno)
              throw new TypeError("Fetch ".concat(t3, " failed with ").concat(e3.errno, ": ").concat(e3.errmsg));
            return e3;
          }, Nr = (e3) => {
            try {
              e3 = decodeURI(e3);
            } catch (e4) {
            }
            return e3;
          }, Fr = function() {
            let e3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
            return e3.replace(/\/$/u, "");
          }, Vr = (e3) => /^(https?:)?\/\//.test(e3), Dr = ["mp", "identicon", "monsterid", "wavatar", "robohash", "retro", ""], Br = ["nick", "mail", "link"], qr = (e3) => e3 && Dr.includes(e3) ? e3 : "mp", Hr = (e3) => e3.filter((e4) => Br.includes(e4)), Wr = "zh-CN", Zr = (e3) => new Promise((t3, n2) => {
            const o2 = new FileReader();
            o2.readAsDataURL(e3), o2.onload = () => {
              var e4;
              return t3(((e4 = o2.result) === null || e4 === void 0 ? void 0 : e4.toString()) || "");
            }, o2.onerror = n2;
          }), Jr = (e3) => e3 === true ? '<p class="vtex">Tex is not available in preview</p>' : '<span class="vtex">Tex is not available in preview</span>', Kr = ["nick", "nickError", "mail", "mailError", "link", "optional", "placeholder", "sofa", "submit", "reply", "cancelReply", "comment", "refresh", "more", "preview", "emoji", "uploadImage", "seconds", "minutes", "hours", "days", "now", "uploading", "login", "logout", "admin", "sticky", "word", "wordHint", "anonymous"], Qr = (e3) => Object.fromEntries(e3.map((e4, t3) => [Kr[t3], e4])), Yr = Qr(["NickName", "NickName cannot be less than 3 bytes.", "E-Mail", "Please confirm your email address.", "Website", "Optional", "Comment here...", "No comment yet.", "Submit", "Reply", "Cancel reply", "Comments", "Refresh", "Load More...", "Preview", "Emoji", "Upload Image", "seconds ago", "minutes ago", "hours ago", "days ago", "just now", "Uploading", "Login", "logout", "Admin", "Sticky", "Words", "Please input comments between $0 and $1 words!\n Current word number: $2", "Anonymous"]), Xr = Qr(["\u30CB\u30C3\u30AF\u30CD\u30FC\u30E0", "3\u30D0\u30A4\u30C8\u4EE5\u4E0A\u306E\u30CB\u30C3\u30AF\u30CD\u30FC\u30E0\u3092\u3054\u5165\u529B\u304F\u3060\u3055\u3044.", "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9", "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044.", "\u30B5\u30A4\u30C8", "\u30AA\u30D7\u30B7\u30E7\u30F3", "\u3053\u3053\u306B\u30B3\u30E1\u30F3\u30C8", "\u30B3\u30E1\u30F3\u30C8\u3057\u307E\u3057\u3087\u3046~", "\u63D0\u51FA\u3059\u308B", "\u8FD4\u4FE1\u3059\u308B", "\u30AD\u30E3\u30F3\u30BB\u30EB", "\u30B3\u30E1\u30F3\u30C8", "\u66F4\u65B0", "\u3055\u3089\u306B\u8AAD\u307F\u8FBC\u3080", "\u30D7\u30EC\u30D3\u30E5\u30FC", "\u7D75\u6587\u5B57", "\u753B\u50CF\u3092\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9", "\u79D2\u524D", "\u5206\u524D", "\u6642\u9593\u524D", "\u65E5\u524D", "\u305F\u3063\u3060\u4ECA", "\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9", "\u30ED\u30B0\u30A4\u30F3\u3059\u308B", "\u30ED\u30B0\u30A2\u30A6\u30C8", "\u7BA1\u7406\u8005", "\u30C8\u30C3\u30D7\u306B\u7F6E\u304F", "\u30EF\u30FC\u30C9", "\u30B3\u30E1\u30F3\u30C8\u306F $0 \u304B\u3089 $1 \u30EF\u30FC\u30C9\u306E\u9593\u3067\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093!\n \u73FE\u5728\u306E\u5358\u8A9E\u756A\u53F7: $2", "\u533F\u540D"]), Gr = Qr(["\u6635\u79F0", "\u6635\u79F0\u4E0D\u80FD\u5C11\u4E8E3\u4E2A\u5B57\u7B26", "\u90AE\u7BB1", "\u8BF7\u586B\u5199\u6B63\u786E\u7684\u90AE\u4EF6\u5730\u5740", "\u7F51\u5740", "\u53EF\u9009", "\u6B22\u8FCE\u8BC4\u8BBA", "\u6765\u53D1\u8BC4\u8BBA\u5427~", "\u63D0\u4EA4", "\u56DE\u590D", "\u53D6\u6D88\u56DE\u590D", "\u8BC4\u8BBA", "\u5237\u65B0", "\u52A0\u8F7D\u66F4\u591A...", "\u9884\u89C8", "\u8868\u60C5", "\u4E0A\u4F20\u56FE\u7247", "\u79D2\u524D", "\u5206\u949F\u524D", "\u5C0F\u65F6\u524D", "\u5929\u524D", "\u521A\u521A", "\u6B63\u5728\u4E0A\u4F20", "\u767B\u5F55", "\u9000\u51FA", "\u535A\u4E3B", "\u7F6E\u9876", "\u5B57", "\u8BC4\u8BBA\u5B57\u6570\u5E94\u5728 $0 \u5230 $1 \u5B57\u4E4B\u95F4\uFF01\n\u5F53\u524D\u5B57\u6570\uFF1A$2", "\u533F\u540D"]), ea = Qr(["\u66B1\u7A31", "\u90F5\u7BB1", "\u7DB2\u5740", "\u53EF\u9078", "\u66B1\u7A31\u4E0D\u80FD\u5C11\u65BC3\u500B\u5B57\u5143", "\u8ACB\u586B\u5BEB\u6B63\u78BA\u7684\u90F5\u4EF6\u5730\u5740", "\u6B61\u8FCE\u8A55\u8AD6", "\u4F86\u767C\u8A55\u8AD6\u5427~", "\u63D0\u4EA4", "\u56DE\u8986", "\u53D6\u6D88\u56DE\u8986", "\u8A55\u8AD6", "\u5237\u65B0", "\u8F09\u5165\u66F4\u591A...", "\u9810\u89BD", "\u8868\u60C5", "\u4E0A\u50B3\u5716\u7247", "\u79D2\u524D", "\u5206\u9418\u524D", "\u5C0F\u6642\u524D", "\u5929\u524D", "\u525B\u525B", "\u6B63\u5728\u4E0A\u50B3", "\u767B\u9304", "\u9000\u51FA", "\u535A\u4E3B", "\u7F6E\u9802", "\u5B57", "\u8A55\u8AD6\u5B57\u6578\u61C9\u5728 $0 \u5230 $1 \u5B57\u4E4B\u9593\uFF01\n\u7576\u524D\u5B57\u6578\uFF1A$2", "\u533F\u540D"]), ta = Qr(["Apelido", "Apelido n\xE3o pode ser menor que 3 bytes.", "E-Mail", "Por favor, confirme seu endere\xE7o de e-mail.", "Website", "Opcional", "Comente aqui...", "Nenhum coment\xE1rio, ainda.", "Enviar", "Responder", "Cancelar resposta", "Coment\xE1rios", "Refrescar", "Carregar Mais...", "Visualizar", "Emoji", "Enviar Imagem", "segundos atr\xE1s", "minutos atr\xE1s", "horas atr\xE1s", "dias atr\xE1s", "agora mesmo", "Enviando", "Entrar", "Sair", "Admin", "Sticky", "Palavras", "Favor enviar coment\xE1rio com $0 a $1 palavras!\n N\xFAmero de palavras atuais: $2", "An\xF4nimo"]), na = { zh: Gr, "zh-cn": Gr, "zh-CN": Gr, "zh-tw": ea, "zh-TW": ea, en: Yr, "en-US": Yr, jp: Xr, "jp-jp": Xr, "jp-JP": Xr, "pt-br": ta, "pt-BR": ta }, oa = (e3) => {
            let t3 = {};
            const n2 = localStorage.getItem(e3);
            if (n2)
              try {
                t3 = JSON.parse(n2);
              } catch (e4) {
              }
            return { get: (e4) => t3[e4] || null, set(n3, o2) {
              try {
                t3[n3] = JSON.parse(JSON.stringify(o2)), localStorage.setItem(e3, JSON.stringify(t3));
              } catch (e4) {
              }
            }, update(n3) {
              t3 = JSON.parse(JSON.stringify(n3)), localStorage.setItem(e3, JSON.stringify(t3));
            } };
          };
          let ra;
          const aa = function(e3, t3) {
            let n2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "", o2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "";
            return "".concat(t3, "/").concat(n2).concat(e3).concat(o2 ? ".".concat(o2) : "");
          };
          var ia = n(948), la = n.n(ia);
          const sa = (e3) => {
            const t3 = Fr(e3);
            return Vr(t3) ? t3 : "https://".concat(t3);
          }, ca = (e3, t3) => typeof e3 == "function" ? e3 : e3 !== false && t3, ua = (e3) => {
            let _a2 = e3, { el: t3 = "#waline", serverURL: n2, placeholder: o2, langMode: r2, emojiCDN: a2, emojiMaps: i2, requiredFields: l2 = [], anonymous: s2, avatarCDN: c2, avatar: u2, avatarForce: d2, previewMath: p2, path: h2 = location.pathname, lang: v2 = Wr, locale: f2 = r2, emoji: m2 = ["https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/weibo"], meta: g2 = ["nick", "mail", "link"], requiredMeta: b2 = l2, pageSize: w2 = 10, wordLimit: y2, uploadImage: k2, highlight: x2, tex: _2 = p2, copyright: S2 = true, login: C2 = s2 === true ? "disable" : s2 === false ? "force" : "enable" } = _a2, z2 = __objRest(_a2, ["el", "serverURL", "placeholder", "langMode", "emojiCDN", "emojiMaps", "requiredFields", "anonymous", "avatarCDN", "avatar", "avatarForce", "previewMath", "path", "lang", "locale", "emoji", "meta", "requiredMeta", "pageSize", "wordLimit", "uploadImage", "highlight", "tex", "copyright", "login"]);
            const E2 = na[v2] || na[Wr];
            o2 && (E2.placeholder = o2);
            const A2 = a2 && typeof i2 == "object" ? Promise.resolve(function(e4) {
              let t4 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
              const n3 = {};
              for (const o3 in e4)
                n3[o3] = /(?:https?:)?\/\//.test(e4[o3]) ? e4[o3] : "".concat(t4).concat(e4[o3]);
              return { tabs: [{ name: "Emoji", icon: Object.values(n3).pop() || "", items: Object.keys(n3) }], map: n3 };
            }(i2, a2)) : (L2 = m2, Promise.all(L2.map((e4) => typeof e4 == "string" ? ((e5) => {
              ra || (ra = oa("WALINE_EMOJI"));
              const t4 = Boolean(/@[0-9]+\.[0-9]+\.[0-9]+/.test(e5));
              if (t4) {
                const t5 = ra.get(e5);
                if (t5)
                  return Promise.resolve(t5);
              }
              return fetch("".concat(e5, "/info.json")).then((e6) => e6.json()).then((n3) => {
                const o3 = __spreadValues({ folder: e5 }, n3);
                return t4 && ra.set(e5, o3), o3;
              });
            })(Fr(e4)) : Promise.resolve(e4))).then((e4) => {
              const t4 = { tabs: [], map: {} };
              return e4.forEach((e5) => {
                const { name: n3, folder: o3, icon: r3, prefix: a3, type: i3, items: l3 } = e5;
                t4.tabs.push({ name: n3, icon: aa(r3, o3, a3, i3), items: l3.map((e6) => {
                  const n4 = "".concat(a3 || "").concat(e6);
                  return t4.map[n4] = aa(e6, o3, a3, i3), n4;
                }) });
              }), t4;
            }));
            var L2;
            return __spreadValues({ el: t3, serverURL: sa(n2), path: Nr(h2), lang: v2, locale: __spreadValues(__spreadValues({}, E2), typeof f2 == "object" ? f2 : {}), emoji: A2, wordLimit: Array.isArray(y2) ? y2 : !!y2 && [0, y2], meta: Hr(g2), requiredMeta: Hr(b2), pageSize: w2, avatar: { cdn: c2 || "https://seccdn.libravatar.org/avatar/", param: "?d=".concat(qr(u2)).concat(d2 ? "&q=".concat(Math.random().toString(32).substring(2)) : ""), default: !u2 && !c2, hide: u2 === "hide" }, uploadImage: ca(k2, Zr), highlight: ca(x2, la()), tex: ca(_2, Jr), copyright: S2, login: C2 }, z2);
          }, da = (e3) => e3.type.includes("image"), pa = (e3) => {
            const t3 = Array.from(e3).find(da);
            return !!t3 && t3.getAsFile();
          }, ha = "{--waline-white:#000;--waline-light-grey:#666;--waline-dark-grey:#999;--waline-text-color:#888;--waline-bgcolor:#1e1e1e;--waline-bgcolor-light:#272727;--waline-bgcolor-hover: #444;--waline-border-color:#333;--waline-disable-bgcolor:#444;--waline-disable-color:#272727;--waline-bq-color:#272727;--waline-info-bgcolor:#272727;--waline-info-color:#666}", va = (e3, t3) => {
            if (!document.body.hasAttribute(t3)) {
              const n2 = document.createElement("style");
              n2.appendChild(document.createTextNode(e3)), document.head.appendChild(n2), document.body.setAttribute(t3, "");
            }
          }, fa = () => {
            va(`
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/* See https://github.com/fred-wang/mathml.css */

@namespace "http://www.w3.org/1998/Math/MathML";
body[waline-math] .v math{display:inline;font-size:0;font-family:Cambria Math,Latin Modern Math;text-indent:0}body[waline-math] .v math>*{font-size:14px}body[waline-math] .v math[display=block]{display:block;font-size:0;text-align:center}body[waline-math] .v math[display=block]>*{font-size:16px}body[waline-math] .v mfrac{display:inline-block !important;vertical-align:-50%;border-collapse:collapse;text-align:center}body[waline-math] .v mfrac>*{display:block !important}body[waline-math] .v mfrac>*+*{display:inline-block !important;vertical-align:top}body[waline-math] .v mfrac:not([linethickness="0"])>*:first-child{border-bottom:solid thin}body[waline-math] .v msub>*:nth-child(2),body[waline-math] .v msubsup>*:nth-child(2),body[waline-math] .v mmultiscripts>*:nth-child(2n+2),body[waline-math] .v mmultiscripts>mprescripts~*:nth-child(2n+3){vertical-align:sub;font-size:.8em}body[waline-math] .v msup>*:nth-child(2),body[waline-math] .v msubsup>*:nth-child(3),body[waline-math] .v mmultiscripts>*:nth-child(2n+3),body[waline-math] .v mmultiscripts>mprescripts~*:nth-child(2n+2){vertical-align:super;font-size:.8em}body[waline-math] .v mprescripts::after{content:";"}body[waline-math] .v munder,body[waline-math] .v mover,body[waline-math] .v munderover{display:inline-flex !important;flex-direction:column}body[waline-math] .v munder>*:nth-child(2),body[waline-math] .v munderover>*:nth-child(2){order:1;font-size:.8em}body[waline-math] .v mover>*:nth-child(2),body[waline-math] .v munderover>*:nth-child(3){order:-1;font-size:.8em}body[waline-math] .v munder{vertical-align:text-top}body[waline-math] .v mover{vertical-align:text-bottom}body[waline-math] .v munderover{vertical-align:middle}body[waline-math] .v msqrt,body[waline-math] .v mroot{display:inline-flex !important;vertical-align:middle;margin-left:.5em;border-top:solid thin}body[waline-math] .v msqrt::before,body[waline-math] .v mroot::before{content:"\u221A";margin-left:-0.5em}body[waline-math] .v mroot>*:nth-child(2){order:-1;margin-right:.25em;margin-left:-0.75em;font-size:.8em}body[waline-math] .v menclose{display:inline-table !important;border-spacing:.4ex 0;border-collapse:separate}body[waline-math] .v menclose[notation*=top],body[waline-math] .v menclose[notation*=actuarial]{border-top:solid thin}body[waline-math] .v menclose[notation*=bottom],body[waline-math] .v menclose[notation*=madruwb]{border-bottom:solid thin}body[waline-math] .v menclose[notation*=right],body[waline-math] .v menclose[notation*=actuarial],body[waline-math] .v menclose[notation*=madruwb]{border-right:solid thin}body[waline-math] .v menclose[notation*=left]{border-left:solid thin}body[waline-math] .v menclose[notation*=box],body[waline-math] .v menclose[notation*=roundedbox],body[waline-math] .v menclose[notation*=circle]{border:solid thin}body[waline-math] .v menclose[notation*=roundedbox]{border-radius:15%}body[waline-math] .v menclose[notation*=circle]{border-radius:50%}body[waline-math] .v menclose[notation*=horizontalstrike]{text-decoration:line-through}body[waline-math] .v mtable{display:inline-table !important;vertical-align:middle;text-align:center}body[waline-math] .v mtr{display:table-row !important}body[waline-math] .v mtd{display:table-cell !important;padding:0 .5ex}body[waline-math] .v mspace{margin:.2em}body[waline-math] .v mi{font-style:italic}body[waline-math] .v mo{margin-right:.2em;margin-left:.2em}body[waline-math] .v ms::before,body[waline-math] .v ms::after{content:'"'}body[waline-math] .v ms[lquote]::before{content:attr(lquote)}body[waline-math] .v ms[lquote]::after{content:attr(rquote)}body[waline-math] .v [mathvariant=bold],body[waline-math] .v [mathvariant=bold-italic],body[waline-math] .v [mathvariant=bold-sans-serif],body[waline-math] .v [mathvariant=sans-serif-bold-italic]{font-weight:bold;font-style:normal}body[waline-math] .v [mathvariant=monospace]{font-style:normal;font-family:monospace}body[waline-math] .v [mathvariant=sans-serif],body[waline-math] .v [mathvariant=bold-sans-serif],body[waline-math] .v [mathvariant=sans-serif-italic],body[waline-math] .v [mathvariant=sans-serif-bold-italic]{font-style:normal;font-family:sans-serif}body[waline-math] .v [mathvariant=italic],body[waline-math] .v [mathvariant=bold-italic],body[waline-math] .v [mathvariant=sans-serif-italic],body[waline-math] .v [mathvariant=sans-serif-bold-italic]{font-style:italic}body[waline-math] .v [mathvariant=normal]{font-style:normal}body[waline-math] .v mphantom{visibility:hidden}body[waline-math] .v merror{outline:solid thin red}body[waline-math] .v merror::before{content:"Error: "}body[waline-math] .v semantics>*:first-child{display:inline}body[waline-math] .v annotation,body[waline-math] .v annotation-xml{display:none !important;font-family:monospace}body[waline-math] .v math:active>semantics>*:first-child{display:none !important}body[waline-math] .v math:active annotation:first-of-type{display:inline !important}`, "waline-math-style"), document.body.insertAdjacentHTML("afterbegin", "<div style='border: 0; clip: rect(0 0 0 0); height: 1px; margin: -1px; overflow: hidden; padding: 0; position: absolute; width: 1px;'><math xmlns='http://www.w3.org/1998/Math/MathML'><mspace height='23px' width='77px'></mspace></math></div>");
            const e3 = document.body.firstChild, t3 = e3.firstChild.firstChild.getBoundingClientRect();
            document.body.removeChild(e3), (Math.abs(t3.height - 23) > 1 || Math.abs(t3.width - 77) > 1) && document.body.setAttribute("waline-math", "");
          }, ma = (e3) => e3 instanceof HTMLElement ? e3 : typeof e3 == "string" ? document.querySelector(e3) : null;
          let ga = { baseUrl: null, breaks: false, extensions: null, gfm: true, headerIds: true, headerPrefix: "", highlight: null, langPrefix: "language-", mangle: true, pedantic: false, renderer: null, sanitize: false, sanitizer: null, silent: false, smartLists: false, smartypants: false, tokenizer: null, walkTokens: null, xhtml: false };
          const ba = /[&<>"']/, wa = /[&<>"']/g, ya = /[<>"']|&(?!#?\w+;)/, ka = /[<>"']|&(?!#?\w+;)/g, xa = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, _a = (e3) => xa[e3];
          function Sa(e3, t3) {
            if (t3) {
              if (ba.test(e3))
                return e3.replace(wa, _a);
            } else if (ya.test(e3))
              return e3.replace(ka, _a);
            return e3;
          }
          const Ca = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
          function za(e3) {
            return e3.replace(Ca, (e4, t3) => (t3 = t3.toLowerCase()) === "colon" ? ":" : t3.charAt(0) === "#" ? t3.charAt(1) === "x" ? String.fromCharCode(parseInt(t3.substring(2), 16)) : String.fromCharCode(+t3.substring(1)) : "");
          }
          const Ea = /(^|[^\[])\^/g;
          function Aa(e3, t3) {
            e3 = e3.source || e3, t3 = t3 || "";
            const n2 = { replace: (t4, o2) => (o2 = (o2 = o2.source || o2).replace(Ea, "$1"), e3 = e3.replace(t4, o2), n2), getRegex: () => new RegExp(e3, t3) };
            return n2;
          }
          const La = /[^\w:]/g, Ta = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
          function Ra(e3, t3, n2) {
            if (e3) {
              let e4;
              try {
                e4 = decodeURIComponent(za(n2)).replace(La, "").toLowerCase();
              } catch (e5) {
                return null;
              }
              if (e4.indexOf("javascript:") === 0 || e4.indexOf("vbscript:") === 0 || e4.indexOf("data:") === 0)
                return null;
            }
            t3 && !Ta.test(n2) && (n2 = function(e4, t4) {
              Ia[" " + e4] || (Oa.test(e4) ? Ia[" " + e4] = e4 + "/" : Ia[" " + e4] = Na(e4, "/", true));
              const n3 = (e4 = Ia[" " + e4]).indexOf(":") === -1;
              return t4.substring(0, 2) === "//" ? n3 ? t4 : e4.replace(ja, "$1") + t4 : t4.charAt(0) === "/" ? n3 ? t4 : e4.replace($a, "$1") + t4 : e4 + t4;
            }(t3, n2));
            try {
              n2 = encodeURI(n2).replace(/%25/g, "%");
            } catch (e4) {
              return null;
            }
            return n2;
          }
          const Ia = {}, Oa = /^[^:]+:\/*[^/]*$/, ja = /^([^:]+:)[\s\S]*$/, $a = /^([^:]+:\/*[^/]*)[\s\S]*$/, Ma = { exec: function() {
          } };
          function Ua(e3) {
            let t3, n2, o2 = 1;
            for (; o2 < arguments.length; o2++)
              for (n2 in t3 = arguments[o2], t3)
                Object.prototype.hasOwnProperty.call(t3, n2) && (e3[n2] = t3[n2]);
            return e3;
          }
          function Pa(e3, t3) {
            const n2 = e3.replace(/\|/g, (e4, t4, n3) => {
              let o3 = false, r2 = t4;
              for (; --r2 >= 0 && n3[r2] === "\\"; )
                o3 = !o3;
              return o3 ? "|" : " |";
            }).split(/ \|/);
            let o2 = 0;
            if (n2[0].trim() || n2.shift(), n2[n2.length - 1].trim() || n2.pop(), n2.length > t3)
              n2.splice(t3);
            else
              for (; n2.length < t3; )
                n2.push("");
            for (; o2 < n2.length; o2++)
              n2[o2] = n2[o2].trim().replace(/\\\|/g, "|");
            return n2;
          }
          function Na(e3, t3, n2) {
            const o2 = e3.length;
            if (o2 === 0)
              return "";
            let r2 = 0;
            for (; r2 < o2; ) {
              const a2 = e3.charAt(o2 - r2 - 1);
              if (a2 !== t3 || n2) {
                if (a2 === t3 || !n2)
                  break;
                r2++;
              } else
                r2++;
            }
            return e3.substr(0, o2 - r2);
          }
          function Fa(e3) {
            e3 && e3.sanitize && !e3.silent && console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options");
          }
          function Va(e3, t3) {
            if (t3 < 1)
              return "";
            let n2 = "";
            for (; t3 > 1; )
              1 & t3 && (n2 += e3), t3 >>= 1, e3 += e3;
            return n2 + e3;
          }
          function Da(e3, t3, n2, o2) {
            const r2 = t3.href, a2 = t3.title ? Sa(t3.title) : null, i2 = e3[1].replace(/\\([\[\]])/g, "$1");
            if (e3[0].charAt(0) !== "!") {
              o2.state.inLink = true;
              const e4 = { type: "link", raw: n2, href: r2, title: a2, text: i2, tokens: o2.inlineTokens(i2, []) };
              return o2.state.inLink = false, e4;
            }
            return { type: "image", raw: n2, href: r2, title: a2, text: Sa(i2) };
          }
          class Ba {
            constructor(e3) {
              this.options = e3 || ga;
            }
            space(e3) {
              const t3 = this.rules.block.newline.exec(e3);
              if (t3)
                return t3[0].length > 1 ? { type: "space", raw: t3[0] } : { raw: "\n" };
            }
            code(e3) {
              const t3 = this.rules.block.code.exec(e3);
              if (t3) {
                const e4 = t3[0].replace(/^ {1,4}/gm, "");
                return { type: "code", raw: t3[0], codeBlockStyle: "indented", text: this.options.pedantic ? e4 : Na(e4, "\n") };
              }
            }
            fences(e3) {
              const t3 = this.rules.block.fences.exec(e3);
              if (t3) {
                const e4 = t3[0], n2 = function(e5, t4) {
                  const n3 = e5.match(/^(\s+)(?:```)/);
                  if (n3 === null)
                    return t4;
                  const o2 = n3[1];
                  return t4.split("\n").map((e6) => {
                    const t5 = e6.match(/^\s+/);
                    if (t5 === null)
                      return e6;
                    const [n4] = t5;
                    return n4.length >= o2.length ? e6.slice(o2.length) : e6;
                  }).join("\n");
                }(e4, t3[3] || "");
                return { type: "code", raw: e4, lang: t3[2] ? t3[2].trim() : t3[2], text: n2 };
              }
            }
            heading(e3) {
              const t3 = this.rules.block.heading.exec(e3);
              if (t3) {
                let e4 = t3[2].trim();
                if (/#$/.test(e4)) {
                  const t4 = Na(e4, "#");
                  this.options.pedantic ? e4 = t4.trim() : t4 && !/ $/.test(t4) || (e4 = t4.trim());
                }
                const n2 = { type: "heading", raw: t3[0], depth: t3[1].length, text: e4, tokens: [] };
                return this.lexer.inline(n2.text, n2.tokens), n2;
              }
            }
            hr(e3) {
              const t3 = this.rules.block.hr.exec(e3);
              if (t3)
                return { type: "hr", raw: t3[0] };
            }
            blockquote(e3) {
              const t3 = this.rules.block.blockquote.exec(e3);
              if (t3) {
                const e4 = t3[0].replace(/^ *> ?/gm, "");
                return { type: "blockquote", raw: t3[0], tokens: this.lexer.blockTokens(e4, []), text: e4 };
              }
            }
            list(e3) {
              let t3 = this.rules.block.list.exec(e3);
              if (t3) {
                let n2, o2, r2, a2, i2, l2, s2, c2, u2, d2, p2, h2 = t3[1].trim();
                const v2 = h2.length > 1, f2 = { type: "list", raw: "", ordered: v2, start: v2 ? +h2.slice(0, -1) : "", loose: false, items: [] };
                h2 = v2 ? `\\d{1,9}\\${h2.slice(-1)}` : `\\${h2}`, this.options.pedantic && (h2 = v2 ? h2 : "[*+-]");
                const m2 = new RegExp(`^( {0,3}${h2})((?: [^\\n]*)?(?:\\n|$))`);
                for (; e3 && (t3 = m2.exec(e3)) && !this.rules.block.hr.test(e3); ) {
                  n2 = t3[0], e3 = e3.substring(n2.length), c2 = t3[2].split("\n", 1)[0], u2 = e3.split("\n", 1)[0], this.options.pedantic ? (a2 = 2, p2 = c2.trimLeft()) : (a2 = t3[2].search(/[^ ]/), a2 = a2 > 4 ? 1 : a2, p2 = c2.slice(a2), a2 += t3[1].length), l2 = false, !c2 && /^ *$/.test(u2) && (n2 += u2 + "\n", e3 = e3.substring(u2.length + 1), f2.loose = true);
                  const i3 = new RegExp(`^ {0,${Math.min(3, a2 - 1)}}(?:[*+-]|\\d{1,9}[.)])`);
                  for (; e3 && !f2.loose && (d2 = e3.split("\n", 1)[0], c2 = d2, this.options.pedantic && (c2 = c2.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), !i3.test(c2)); ) {
                    if (c2.search(/[^ ]/) >= a2 || !c2.trim())
                      p2 += "\n" + c2.slice(a2);
                    else {
                      if (l2)
                        break;
                      p2 += "\n" + c2;
                    }
                    l2 || c2.trim() || (l2 = true), n2 += d2 + "\n", e3 = e3.substring(d2.length + 1);
                  }
                  f2.loose || (s2 ? f2.loose = true : /\n *\n *$/.test(n2) && (s2 = true)), this.options.gfm && (o2 = /^\[[ xX]\] /.exec(p2), o2 && (r2 = o2[0] !== "[ ] ", p2 = p2.replace(/^\[[ xX]\] +/, ""))), f2.items.push({ type: "list_item", raw: n2, task: !!o2, checked: r2, loose: false, text: p2 }), f2.raw += n2;
                }
                f2.items[f2.items.length - 1].raw = n2.trimRight(), f2.items[f2.items.length - 1].text = p2.trimRight(), f2.raw = f2.raw.trimRight();
                const g2 = f2.items.length;
                for (i2 = 0; i2 < g2; i2++)
                  this.lexer.state.top = false, f2.items[i2].tokens = this.lexer.blockTokens(f2.items[i2].text, []), !f2.loose && f2.items[i2].tokens.some((e4) => e4.type === "space") && (f2.loose = true, f2.items[i2].loose = true);
                return f2;
              }
            }
            html(e3) {
              const t3 = this.rules.block.html.exec(e3);
              if (t3) {
                const e4 = { type: "html", raw: t3[0], pre: !this.options.sanitizer && (t3[1] === "pre" || t3[1] === "script" || t3[1] === "style"), text: t3[0] };
                return this.options.sanitize && (e4.type = "paragraph", e4.text = this.options.sanitizer ? this.options.sanitizer(t3[0]) : Sa(t3[0]), e4.tokens = [], this.lexer.inline(e4.text, e4.tokens)), e4;
              }
            }
            def(e3) {
              const t3 = this.rules.block.def.exec(e3);
              if (t3)
                return t3[3] && (t3[3] = t3[3].substring(1, t3[3].length - 1)), { type: "def", tag: t3[1].toLowerCase().replace(/\s+/g, " "), raw: t3[0], href: t3[2], title: t3[3] };
            }
            table(e3) {
              const t3 = this.rules.block.table.exec(e3);
              if (t3) {
                const e4 = { type: "table", header: Pa(t3[1]).map((e5) => ({ text: e5 })), align: t3[2].replace(/^ *|\| *$/g, "").split(/ *\| */), rows: t3[3] ? t3[3].replace(/\n$/, "").split("\n") : [] };
                if (e4.header.length === e4.align.length) {
                  e4.raw = t3[0];
                  let n2, o2, r2, a2, i2 = e4.align.length;
                  for (n2 = 0; n2 < i2; n2++)
                    /^ *-+: *$/.test(e4.align[n2]) ? e4.align[n2] = "right" : /^ *:-+: *$/.test(e4.align[n2]) ? e4.align[n2] = "center" : /^ *:-+ *$/.test(e4.align[n2]) ? e4.align[n2] = "left" : e4.align[n2] = null;
                  for (i2 = e4.rows.length, n2 = 0; n2 < i2; n2++)
                    e4.rows[n2] = Pa(e4.rows[n2], e4.header.length).map((e5) => ({ text: e5 }));
                  for (i2 = e4.header.length, o2 = 0; o2 < i2; o2++)
                    e4.header[o2].tokens = [], this.lexer.inlineTokens(e4.header[o2].text, e4.header[o2].tokens);
                  for (i2 = e4.rows.length, o2 = 0; o2 < i2; o2++)
                    for (a2 = e4.rows[o2], r2 = 0; r2 < a2.length; r2++)
                      a2[r2].tokens = [], this.lexer.inlineTokens(a2[r2].text, a2[r2].tokens);
                  return e4;
                }
              }
            }
            lheading(e3) {
              const t3 = this.rules.block.lheading.exec(e3);
              if (t3) {
                const e4 = { type: "heading", raw: t3[0], depth: t3[2].charAt(0) === "=" ? 1 : 2, text: t3[1], tokens: [] };
                return this.lexer.inline(e4.text, e4.tokens), e4;
              }
            }
            paragraph(e3) {
              const t3 = this.rules.block.paragraph.exec(e3);
              if (t3) {
                const e4 = { type: "paragraph", raw: t3[0], text: t3[1].charAt(t3[1].length - 1) === "\n" ? t3[1].slice(0, -1) : t3[1], tokens: [] };
                return this.lexer.inline(e4.text, e4.tokens), e4;
              }
            }
            text(e3) {
              const t3 = this.rules.block.text.exec(e3);
              if (t3) {
                const e4 = { type: "text", raw: t3[0], text: t3[0], tokens: [] };
                return this.lexer.inline(e4.text, e4.tokens), e4;
              }
            }
            escape(e3) {
              const t3 = this.rules.inline.escape.exec(e3);
              if (t3)
                return { type: "escape", raw: t3[0], text: Sa(t3[1]) };
            }
            tag(e3) {
              const t3 = this.rules.inline.tag.exec(e3);
              if (t3)
                return !this.lexer.state.inLink && /^<a /i.test(t3[0]) ? this.lexer.state.inLink = true : this.lexer.state.inLink && /^<\/a>/i.test(t3[0]) && (this.lexer.state.inLink = false), !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(t3[0]) ? this.lexer.state.inRawBlock = true : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(t3[0]) && (this.lexer.state.inRawBlock = false), { type: this.options.sanitize ? "text" : "html", raw: t3[0], inLink: this.lexer.state.inLink, inRawBlock: this.lexer.state.inRawBlock, text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(t3[0]) : Sa(t3[0]) : t3[0] };
            }
            link(e3) {
              const t3 = this.rules.inline.link.exec(e3);
              if (t3) {
                const e4 = t3[2].trim();
                if (!this.options.pedantic && /^</.test(e4)) {
                  if (!/>$/.test(e4))
                    return;
                  const t4 = Na(e4.slice(0, -1), "\\");
                  if ((e4.length - t4.length) % 2 == 0)
                    return;
                } else {
                  const e5 = function(e6, t4) {
                    if (e6.indexOf(t4[1]) === -1)
                      return -1;
                    const n3 = e6.length;
                    let o3 = 0, r2 = 0;
                    for (; r2 < n3; r2++)
                      if (e6[r2] === "\\")
                        r2++;
                      else if (e6[r2] === t4[0])
                        o3++;
                      else if (e6[r2] === t4[1] && (o3--, o3 < 0))
                        return r2;
                    return -1;
                  }(t3[2], "()");
                  if (e5 > -1) {
                    const n3 = (t3[0].indexOf("!") === 0 ? 5 : 4) + t3[1].length + e5;
                    t3[2] = t3[2].substring(0, e5), t3[0] = t3[0].substring(0, n3).trim(), t3[3] = "";
                  }
                }
                let n2 = t3[2], o2 = "";
                if (this.options.pedantic) {
                  const e5 = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(n2);
                  e5 && (n2 = e5[1], o2 = e5[3]);
                } else
                  o2 = t3[3] ? t3[3].slice(1, -1) : "";
                return n2 = n2.trim(), /^</.test(n2) && (n2 = this.options.pedantic && !/>$/.test(e4) ? n2.slice(1) : n2.slice(1, -1)), Da(t3, { href: n2 ? n2.replace(this.rules.inline._escapes, "$1") : n2, title: o2 ? o2.replace(this.rules.inline._escapes, "$1") : o2 }, t3[0], this.lexer);
              }
            }
            reflink(e3, t3) {
              let n2;
              if ((n2 = this.rules.inline.reflink.exec(e3)) || (n2 = this.rules.inline.nolink.exec(e3))) {
                let e4 = (n2[2] || n2[1]).replace(/\s+/g, " ");
                if (e4 = t3[e4.toLowerCase()], !e4 || !e4.href) {
                  const e5 = n2[0].charAt(0);
                  return { type: "text", raw: e5, text: e5 };
                }
                return Da(n2, e4, n2[0], this.lexer);
              }
            }
            emStrong(e3, t3, n2 = "") {
              let o2 = this.rules.inline.emStrong.lDelim.exec(e3);
              if (!o2)
                return;
              if (o2[3] && n2.match(/[\p{L}\p{N}]/u))
                return;
              const r2 = o2[1] || o2[2] || "";
              if (!r2 || r2 && (n2 === "" || this.rules.inline.punctuation.exec(n2))) {
                const n3 = o2[0].length - 1;
                let r3, a2, i2 = n3, l2 = 0;
                const s2 = o2[0][0] === "*" ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
                for (s2.lastIndex = 0, t3 = t3.slice(-1 * e3.length + n3); (o2 = s2.exec(t3)) != null; ) {
                  if (r3 = o2[1] || o2[2] || o2[3] || o2[4] || o2[5] || o2[6], !r3)
                    continue;
                  if (a2 = r3.length, o2[3] || o2[4]) {
                    i2 += a2;
                    continue;
                  }
                  if ((o2[5] || o2[6]) && n3 % 3 && !((n3 + a2) % 3)) {
                    l2 += a2;
                    continue;
                  }
                  if (i2 -= a2, i2 > 0)
                    continue;
                  if (a2 = Math.min(a2, a2 + i2 + l2), Math.min(n3, a2) % 2) {
                    const t5 = e3.slice(1, n3 + o2.index + a2);
                    return { type: "em", raw: e3.slice(0, n3 + o2.index + a2 + 1), text: t5, tokens: this.lexer.inlineTokens(t5, []) };
                  }
                  const t4 = e3.slice(2, n3 + o2.index + a2 - 1);
                  return { type: "strong", raw: e3.slice(0, n3 + o2.index + a2 + 1), text: t4, tokens: this.lexer.inlineTokens(t4, []) };
                }
              }
            }
            codespan(e3) {
              const t3 = this.rules.inline.code.exec(e3);
              if (t3) {
                let e4 = t3[2].replace(/\n/g, " ");
                const n2 = /[^ ]/.test(e4), o2 = /^ /.test(e4) && / $/.test(e4);
                return n2 && o2 && (e4 = e4.substring(1, e4.length - 1)), e4 = Sa(e4, true), { type: "codespan", raw: t3[0], text: e4 };
              }
            }
            br(e3) {
              const t3 = this.rules.inline.br.exec(e3);
              if (t3)
                return { type: "br", raw: t3[0] };
            }
            del(e3) {
              const t3 = this.rules.inline.del.exec(e3);
              if (t3)
                return { type: "del", raw: t3[0], text: t3[2], tokens: this.lexer.inlineTokens(t3[2], []) };
            }
            autolink(e3, t3) {
              const n2 = this.rules.inline.autolink.exec(e3);
              if (n2) {
                let e4, o2;
                return n2[2] === "@" ? (e4 = Sa(this.options.mangle ? t3(n2[1]) : n2[1]), o2 = "mailto:" + e4) : (e4 = Sa(n2[1]), o2 = e4), { type: "link", raw: n2[0], text: e4, href: o2, tokens: [{ type: "text", raw: e4, text: e4 }] };
              }
            }
            url(e3, t3) {
              let n2;
              if (n2 = this.rules.inline.url.exec(e3)) {
                let e4, o2;
                if (n2[2] === "@")
                  e4 = Sa(this.options.mangle ? t3(n2[0]) : n2[0]), o2 = "mailto:" + e4;
                else {
                  let t4;
                  do {
                    t4 = n2[0], n2[0] = this.rules.inline._backpedal.exec(n2[0])[0];
                  } while (t4 !== n2[0]);
                  e4 = Sa(n2[0]), o2 = n2[1] === "www." ? "http://" + e4 : e4;
                }
                return { type: "link", raw: n2[0], text: e4, href: o2, tokens: [{ type: "text", raw: e4, text: e4 }] };
              }
            }
            inlineText(e3, t3) {
              const n2 = this.rules.inline.text.exec(e3);
              if (n2) {
                let e4;
                return e4 = this.lexer.state.inRawBlock ? this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(n2[0]) : Sa(n2[0]) : n2[0] : Sa(this.options.smartypants ? t3(n2[0]) : n2[0]), { type: "text", raw: n2[0], text: e4 };
              }
            }
          }
          const qa = { newline: /^(?: *(?:\n|$))+/, code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/, fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/, hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/, heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/, list: /^( {0,3}bull)( [^\n]+?)?(?:\n|$)/, html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/, table: Ma, lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/, _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, text: /^[^\n]+/, _label: /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/, _title: /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/ };
          qa.def = Aa(qa.def).replace("label", qa._label).replace("title", qa._title).getRegex(), qa.bullet = /(?:[*+-]|\d{1,9}[.)])/, qa.listItemStart = Aa(/^( *)(bull) */).replace("bull", qa.bullet).getRegex(), qa.list = Aa(qa.list).replace(/bull/g, qa.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + qa.def.source + ")").getRegex(), qa._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", qa._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/, qa.html = Aa(qa.html, "i").replace("comment", qa._comment).replace("tag", qa._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), qa.paragraph = Aa(qa._paragraph).replace("hr", qa.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", qa._tag).getRegex(), qa.blockquote = Aa(qa.blockquote).replace("paragraph", qa.paragraph).getRegex(), qa.normal = Ua({}, qa), qa.gfm = Ua({}, qa.normal, { table: "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)" }), qa.gfm.table = Aa(qa.gfm.table).replace("hr", qa.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", qa._tag).getRegex(), qa.gfm.paragraph = Aa(qa._paragraph).replace("hr", qa.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("table", qa.gfm.table).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", qa._tag).getRegex(), qa.pedantic = Ua({}, qa.normal, { html: Aa(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", qa._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: Ma, paragraph: Aa(qa.normal._paragraph).replace("hr", qa.hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", qa.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex() });
          const Ha = { escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/, url: Ma, tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>", link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/, reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/, nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/, reflinkSearch: "reflink|nolink(?!\\()", emStrong: { lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/, rDelimAst: /^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/, rDelimUnd: /^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/ }, code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, br: /^( {2,}|\\)\n(?!\s*$)/, del: Ma, text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, punctuation: /^([\spunctuation])/ };
          function Wa(e3) {
            return e3.replace(/---/g, "\u2014").replace(/--/g, "\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018").replace(/'/g, "\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201C").replace(/"/g, "\u201D").replace(/\.{3}/g, "\u2026");
          }
          function Za(e3) {
            let t3, n2, o2 = "";
            const r2 = e3.length;
            for (t3 = 0; t3 < r2; t3++)
              n2 = e3.charCodeAt(t3), Math.random() > 0.5 && (n2 = "x" + n2.toString(16)), o2 += "&#" + n2 + ";";
            return o2;
          }
          Ha._punctuation = "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~", Ha.punctuation = Aa(Ha.punctuation).replace(/punctuation/g, Ha._punctuation).getRegex(), Ha.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g, Ha.escapedEmSt = /\\\*|\\_/g, Ha._comment = Aa(qa._comment).replace("(?:-->|$)", "-->").getRegex(), Ha.emStrong.lDelim = Aa(Ha.emStrong.lDelim).replace(/punct/g, Ha._punctuation).getRegex(), Ha.emStrong.rDelimAst = Aa(Ha.emStrong.rDelimAst, "g").replace(/punct/g, Ha._punctuation).getRegex(), Ha.emStrong.rDelimUnd = Aa(Ha.emStrong.rDelimUnd, "g").replace(/punct/g, Ha._punctuation).getRegex(), Ha._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g, Ha._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/, Ha._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/, Ha.autolink = Aa(Ha.autolink).replace("scheme", Ha._scheme).replace("email", Ha._email).getRegex(), Ha._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/, Ha.tag = Aa(Ha.tag).replace("comment", Ha._comment).replace("attribute", Ha._attribute).getRegex(), Ha._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, Ha._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/, Ha._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/, Ha.link = Aa(Ha.link).replace("label", Ha._label).replace("href", Ha._href).replace("title", Ha._title).getRegex(), Ha.reflink = Aa(Ha.reflink).replace("label", Ha._label).getRegex(), Ha.reflinkSearch = Aa(Ha.reflinkSearch, "g").replace("reflink", Ha.reflink).replace("nolink", Ha.nolink).getRegex(), Ha.normal = Ua({}, Ha), Ha.pedantic = Ua({}, Ha.normal, { strong: { start: /^__|\*\*/, middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/, endAst: /\*\*(?!\*)/g, endUnd: /__(?!_)/g }, em: { start: /^_|\*/, middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/, endAst: /\*(?!\*)/g, endUnd: /_(?!_)/g }, link: Aa(/^!?\[(label)\]\((.*?)\)/).replace("label", Ha._label).getRegex(), reflink: Aa(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", Ha._label).getRegex() }), Ha.gfm = Ua({}, Ha.normal, { escape: Aa(Ha.escape).replace("])", "~|])").getRegex(), _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/, url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/, text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/ }), Ha.gfm.url = Aa(Ha.gfm.url, "i").replace("email", Ha.gfm._extended_email).getRegex(), Ha.breaks = Ua({}, Ha.gfm, { br: Aa(Ha.br).replace("{2,}", "*").getRegex(), text: Aa(Ha.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() });
          class Ja {
            constructor(e3) {
              this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e3 || ga, this.options.tokenizer = this.options.tokenizer || new Ba(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: false, inRawBlock: false, top: true };
              const t3 = { block: qa.normal, inline: Ha.normal };
              this.options.pedantic ? (t3.block = qa.pedantic, t3.inline = Ha.pedantic) : this.options.gfm && (t3.block = qa.gfm, this.options.breaks ? t3.inline = Ha.breaks : t3.inline = Ha.gfm), this.tokenizer.rules = t3;
            }
            static get rules() {
              return { block: qa, inline: Ha };
            }
            static lex(e3, t3) {
              return new Ja(t3).lex(e3);
            }
            static lexInline(e3, t3) {
              return new Ja(t3).inlineTokens(e3);
            }
            lex(e3) {
              let t3;
              for (e3 = e3.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    "), this.blockTokens(e3, this.tokens); t3 = this.inlineQueue.shift(); )
                this.inlineTokens(t3.src, t3.tokens);
              return this.tokens;
            }
            blockTokens(e3, t3 = []) {
              let n2, o2, r2, a2;
              for (this.options.pedantic && (e3 = e3.replace(/^ +$/gm, "")); e3; )
                if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((o3) => !!(n2 = o3.call({ lexer: this }, e3, t3)) && (e3 = e3.substring(n2.raw.length), t3.push(n2), true))))
                  if (n2 = this.tokenizer.space(e3))
                    e3 = e3.substring(n2.raw.length), n2.type && t3.push(n2);
                  else if (n2 = this.tokenizer.code(e3))
                    e3 = e3.substring(n2.raw.length), o2 = t3[t3.length - 1], !o2 || o2.type !== "paragraph" && o2.type !== "text" ? t3.push(n2) : (o2.raw += "\n" + n2.raw, o2.text += "\n" + n2.text, this.inlineQueue[this.inlineQueue.length - 1].src = o2.text);
                  else if (n2 = this.tokenizer.fences(e3))
                    e3 = e3.substring(n2.raw.length), t3.push(n2);
                  else if (n2 = this.tokenizer.heading(e3))
                    e3 = e3.substring(n2.raw.length), t3.push(n2);
                  else if (n2 = this.tokenizer.hr(e3))
                    e3 = e3.substring(n2.raw.length), t3.push(n2);
                  else if (n2 = this.tokenizer.blockquote(e3))
                    e3 = e3.substring(n2.raw.length), t3.push(n2);
                  else if (n2 = this.tokenizer.list(e3))
                    e3 = e3.substring(n2.raw.length), t3.push(n2);
                  else if (n2 = this.tokenizer.html(e3))
                    e3 = e3.substring(n2.raw.length), t3.push(n2);
                  else if (n2 = this.tokenizer.def(e3))
                    e3 = e3.substring(n2.raw.length), o2 = t3[t3.length - 1], !o2 || o2.type !== "paragraph" && o2.type !== "text" ? this.tokens.links[n2.tag] || (this.tokens.links[n2.tag] = { href: n2.href, title: n2.title }) : (o2.raw += "\n" + n2.raw, o2.text += "\n" + n2.raw, this.inlineQueue[this.inlineQueue.length - 1].src = o2.text);
                  else if (n2 = this.tokenizer.table(e3))
                    e3 = e3.substring(n2.raw.length), t3.push(n2);
                  else if (n2 = this.tokenizer.lheading(e3))
                    e3 = e3.substring(n2.raw.length), t3.push(n2);
                  else {
                    if (r2 = e3, this.options.extensions && this.options.extensions.startBlock) {
                      let t4 = 1 / 0;
                      const n3 = e3.slice(1);
                      let o3;
                      this.options.extensions.startBlock.forEach(function(e4) {
                        o3 = e4.call({ lexer: this }, n3), typeof o3 == "number" && o3 >= 0 && (t4 = Math.min(t4, o3));
                      }), t4 < 1 / 0 && t4 >= 0 && (r2 = e3.substring(0, t4 + 1));
                    }
                    if (this.state.top && (n2 = this.tokenizer.paragraph(r2)))
                      o2 = t3[t3.length - 1], a2 && o2.type === "paragraph" ? (o2.raw += "\n" + n2.raw, o2.text += "\n" + n2.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = o2.text) : t3.push(n2), a2 = r2.length !== e3.length, e3 = e3.substring(n2.raw.length);
                    else if (n2 = this.tokenizer.text(e3))
                      e3 = e3.substring(n2.raw.length), o2 = t3[t3.length - 1], o2 && o2.type === "text" ? (o2.raw += "\n" + n2.raw, o2.text += "\n" + n2.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = o2.text) : t3.push(n2);
                    else if (e3) {
                      const t4 = "Infinite loop on byte: " + e3.charCodeAt(0);
                      if (this.options.silent) {
                        console.error(t4);
                        break;
                      }
                      throw new Error(t4);
                    }
                  }
              return this.state.top = true, t3;
            }
            inline(e3, t3) {
              this.inlineQueue.push({ src: e3, tokens: t3 });
            }
            inlineTokens(e3, t3 = []) {
              let n2, o2, r2, a2, i2, l2, s2 = e3;
              if (this.tokens.links) {
                const e4 = Object.keys(this.tokens.links);
                if (e4.length > 0)
                  for (; (a2 = this.tokenizer.rules.inline.reflinkSearch.exec(s2)) != null; )
                    e4.includes(a2[0].slice(a2[0].lastIndexOf("[") + 1, -1)) && (s2 = s2.slice(0, a2.index) + "[" + Va("a", a2[0].length - 2) + "]" + s2.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
              }
              for (; (a2 = this.tokenizer.rules.inline.blockSkip.exec(s2)) != null; )
                s2 = s2.slice(0, a2.index) + "[" + Va("a", a2[0].length - 2) + "]" + s2.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
              for (; (a2 = this.tokenizer.rules.inline.escapedEmSt.exec(s2)) != null; )
                s2 = s2.slice(0, a2.index) + "++" + s2.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);
              for (; e3; )
                if (i2 || (l2 = ""), i2 = false, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((o3) => !!(n2 = o3.call({ lexer: this }, e3, t3)) && (e3 = e3.substring(n2.raw.length), t3.push(n2), true))))
                  if (n2 = this.tokenizer.escape(e3))
                    e3 = e3.substring(n2.raw.length), t3.push(n2);
                  else if (n2 = this.tokenizer.tag(e3))
                    e3 = e3.substring(n2.raw.length), o2 = t3[t3.length - 1], o2 && n2.type === "text" && o2.type === "text" ? (o2.raw += n2.raw, o2.text += n2.text) : t3.push(n2);
                  else if (n2 = this.tokenizer.link(e3))
                    e3 = e3.substring(n2.raw.length), t3.push(n2);
                  else if (n2 = this.tokenizer.reflink(e3, this.tokens.links))
                    e3 = e3.substring(n2.raw.length), o2 = t3[t3.length - 1], o2 && n2.type === "text" && o2.type === "text" ? (o2.raw += n2.raw, o2.text += n2.text) : t3.push(n2);
                  else if (n2 = this.tokenizer.emStrong(e3, s2, l2))
                    e3 = e3.substring(n2.raw.length), t3.push(n2);
                  else if (n2 = this.tokenizer.codespan(e3))
                    e3 = e3.substring(n2.raw.length), t3.push(n2);
                  else if (n2 = this.tokenizer.br(e3))
                    e3 = e3.substring(n2.raw.length), t3.push(n2);
                  else if (n2 = this.tokenizer.del(e3))
                    e3 = e3.substring(n2.raw.length), t3.push(n2);
                  else if (n2 = this.tokenizer.autolink(e3, Za))
                    e3 = e3.substring(n2.raw.length), t3.push(n2);
                  else if (this.state.inLink || !(n2 = this.tokenizer.url(e3, Za))) {
                    if (r2 = e3, this.options.extensions && this.options.extensions.startInline) {
                      let t4 = 1 / 0;
                      const n3 = e3.slice(1);
                      let o3;
                      this.options.extensions.startInline.forEach(function(e4) {
                        o3 = e4.call({ lexer: this }, n3), typeof o3 == "number" && o3 >= 0 && (t4 = Math.min(t4, o3));
                      }), t4 < 1 / 0 && t4 >= 0 && (r2 = e3.substring(0, t4 + 1));
                    }
                    if (n2 = this.tokenizer.inlineText(r2, Wa))
                      e3 = e3.substring(n2.raw.length), n2.raw.slice(-1) !== "_" && (l2 = n2.raw.slice(-1)), i2 = true, o2 = t3[t3.length - 1], o2 && o2.type === "text" ? (o2.raw += n2.raw, o2.text += n2.text) : t3.push(n2);
                    else if (e3) {
                      const t4 = "Infinite loop on byte: " + e3.charCodeAt(0);
                      if (this.options.silent) {
                        console.error(t4);
                        break;
                      }
                      throw new Error(t4);
                    }
                  } else
                    e3 = e3.substring(n2.raw.length), t3.push(n2);
              return t3;
            }
          }
          class Ka {
            constructor(e3) {
              this.options = e3 || ga;
            }
            code(e3, t3, n2) {
              const o2 = (t3 || "").match(/\S*/)[0];
              if (this.options.highlight) {
                const t4 = this.options.highlight(e3, o2);
                t4 != null && t4 !== e3 && (n2 = true, e3 = t4);
              }
              return e3 = e3.replace(/\n$/, "") + "\n", o2 ? '<pre><code class="' + this.options.langPrefix + Sa(o2, true) + '">' + (n2 ? e3 : Sa(e3, true)) + "</code></pre>\n" : "<pre><code>" + (n2 ? e3 : Sa(e3, true)) + "</code></pre>\n";
            }
            blockquote(e3) {
              return "<blockquote>\n" + e3 + "</blockquote>\n";
            }
            html(e3) {
              return e3;
            }
            heading(e3, t3, n2, o2) {
              return this.options.headerIds ? "<h" + t3 + ' id="' + this.options.headerPrefix + o2.slug(n2) + '">' + e3 + "</h" + t3 + ">\n" : "<h" + t3 + ">" + e3 + "</h" + t3 + ">\n";
            }
            hr() {
              return this.options.xhtml ? "<hr/>\n" : "<hr>\n";
            }
            list(e3, t3, n2) {
              const o2 = t3 ? "ol" : "ul";
              return "<" + o2 + (t3 && n2 !== 1 ? ' start="' + n2 + '"' : "") + ">\n" + e3 + "</" + o2 + ">\n";
            }
            listitem(e3) {
              return "<li>" + e3 + "</li>\n";
            }
            checkbox(e3) {
              return "<input " + (e3 ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> ";
            }
            paragraph(e3) {
              return "<p>" + e3 + "</p>\n";
            }
            table(e3, t3) {
              return t3 && (t3 = "<tbody>" + t3 + "</tbody>"), "<table>\n<thead>\n" + e3 + "</thead>\n" + t3 + "</table>\n";
            }
            tablerow(e3) {
              return "<tr>\n" + e3 + "</tr>\n";
            }
            tablecell(e3, t3) {
              const n2 = t3.header ? "th" : "td";
              return (t3.align ? "<" + n2 + ' align="' + t3.align + '">' : "<" + n2 + ">") + e3 + "</" + n2 + ">\n";
            }
            strong(e3) {
              return "<strong>" + e3 + "</strong>";
            }
            em(e3) {
              return "<em>" + e3 + "</em>";
            }
            codespan(e3) {
              return "<code>" + e3 + "</code>";
            }
            br() {
              return this.options.xhtml ? "<br/>" : "<br>";
            }
            del(e3) {
              return "<del>" + e3 + "</del>";
            }
            link(e3, t3, n2) {
              if ((e3 = Ra(this.options.sanitize, this.options.baseUrl, e3)) === null)
                return n2;
              let o2 = '<a href="' + Sa(e3) + '"';
              return t3 && (o2 += ' title="' + t3 + '"'), o2 += ">" + n2 + "</a>", o2;
            }
            image(e3, t3, n2) {
              if ((e3 = Ra(this.options.sanitize, this.options.baseUrl, e3)) === null)
                return n2;
              let o2 = '<img src="' + e3 + '" alt="' + n2 + '"';
              return t3 && (o2 += ' title="' + t3 + '"'), o2 += this.options.xhtml ? "/>" : ">", o2;
            }
            text(e3) {
              return e3;
            }
          }
          class Qa {
            strong(e3) {
              return e3;
            }
            em(e3) {
              return e3;
            }
            codespan(e3) {
              return e3;
            }
            del(e3) {
              return e3;
            }
            html(e3) {
              return e3;
            }
            text(e3) {
              return e3;
            }
            link(e3, t3, n2) {
              return "" + n2;
            }
            image(e3, t3, n2) {
              return "" + n2;
            }
            br() {
              return "";
            }
          }
          class Ya {
            constructor() {
              this.seen = {};
            }
            serialize(e3) {
              return e3.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi, "").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-");
            }
            getNextSafeSlug(e3, t3) {
              let n2 = e3, o2 = 0;
              if (this.seen.hasOwnProperty(n2)) {
                o2 = this.seen[e3];
                do {
                  o2++, n2 = e3 + "-" + o2;
                } while (this.seen.hasOwnProperty(n2));
              }
              return t3 || (this.seen[e3] = o2, this.seen[n2] = 0), n2;
            }
            slug(e3, t3 = {}) {
              const n2 = this.serialize(e3);
              return this.getNextSafeSlug(n2, t3.dryrun);
            }
          }
          class Xa {
            constructor(e3) {
              this.options = e3 || ga, this.options.renderer = this.options.renderer || new Ka(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new Qa(), this.slugger = new Ya();
            }
            static parse(e3, t3) {
              return new Xa(t3).parse(e3);
            }
            static parseInline(e3, t3) {
              return new Xa(t3).parseInline(e3);
            }
            parse(e3, t3 = true) {
              let n2, o2, r2, a2, i2, l2, s2, c2, u2, d2, p2, h2, v2, f2, m2, g2, b2, w2, y2, k2 = "";
              const x2 = e3.length;
              for (n2 = 0; n2 < x2; n2++)
                if (d2 = e3[n2], this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[d2.type] && (y2 = this.options.extensions.renderers[d2.type].call({ parser: this }, d2), y2 !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(d2.type)))
                  k2 += y2 || "";
                else
                  switch (d2.type) {
                    case "space":
                      continue;
                    case "hr":
                      k2 += this.renderer.hr();
                      continue;
                    case "heading":
                      k2 += this.renderer.heading(this.parseInline(d2.tokens), d2.depth, za(this.parseInline(d2.tokens, this.textRenderer)), this.slugger);
                      continue;
                    case "code":
                      k2 += this.renderer.code(d2.text, d2.lang, d2.escaped);
                      continue;
                    case "table":
                      for (c2 = "", s2 = "", a2 = d2.header.length, o2 = 0; o2 < a2; o2++)
                        s2 += this.renderer.tablecell(this.parseInline(d2.header[o2].tokens), { header: true, align: d2.align[o2] });
                      for (c2 += this.renderer.tablerow(s2), u2 = "", a2 = d2.rows.length, o2 = 0; o2 < a2; o2++) {
                        for (l2 = d2.rows[o2], s2 = "", i2 = l2.length, r2 = 0; r2 < i2; r2++)
                          s2 += this.renderer.tablecell(this.parseInline(l2[r2].tokens), { header: false, align: d2.align[r2] });
                        u2 += this.renderer.tablerow(s2);
                      }
                      k2 += this.renderer.table(c2, u2);
                      continue;
                    case "blockquote":
                      u2 = this.parse(d2.tokens), k2 += this.renderer.blockquote(u2);
                      continue;
                    case "list":
                      for (p2 = d2.ordered, h2 = d2.start, v2 = d2.loose, a2 = d2.items.length, u2 = "", o2 = 0; o2 < a2; o2++)
                        m2 = d2.items[o2], g2 = m2.checked, b2 = m2.task, f2 = "", m2.task && (w2 = this.renderer.checkbox(g2), v2 ? m2.tokens.length > 0 && m2.tokens[0].type === "paragraph" ? (m2.tokens[0].text = w2 + " " + m2.tokens[0].text, m2.tokens[0].tokens && m2.tokens[0].tokens.length > 0 && m2.tokens[0].tokens[0].type === "text" && (m2.tokens[0].tokens[0].text = w2 + " " + m2.tokens[0].tokens[0].text)) : m2.tokens.unshift({ type: "text", text: w2 }) : f2 += w2), f2 += this.parse(m2.tokens, v2), u2 += this.renderer.listitem(f2, b2, g2);
                      k2 += this.renderer.list(u2, p2, h2);
                      continue;
                    case "html":
                      k2 += this.renderer.html(d2.text);
                      continue;
                    case "paragraph":
                      k2 += this.renderer.paragraph(this.parseInline(d2.tokens));
                      continue;
                    case "text":
                      for (u2 = d2.tokens ? this.parseInline(d2.tokens) : d2.text; n2 + 1 < x2 && e3[n2 + 1].type === "text"; )
                        d2 = e3[++n2], u2 += "\n" + (d2.tokens ? this.parseInline(d2.tokens) : d2.text);
                      k2 += t3 ? this.renderer.paragraph(u2) : u2;
                      continue;
                    default: {
                      const e4 = 'Token with "' + d2.type + '" type was not found.';
                      if (this.options.silent)
                        return void console.error(e4);
                      throw new Error(e4);
                    }
                  }
              return k2;
            }
            parseInline(e3, t3) {
              t3 = t3 || this.renderer;
              let n2, o2, r2, a2 = "";
              const i2 = e3.length;
              for (n2 = 0; n2 < i2; n2++)
                if (o2 = e3[n2], this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[o2.type] && (r2 = this.options.extensions.renderers[o2.type].call({ parser: this }, o2), r2 !== false || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(o2.type)))
                  a2 += r2 || "";
                else
                  switch (o2.type) {
                    case "escape":
                    case "text":
                      a2 += t3.text(o2.text);
                      break;
                    case "html":
                      a2 += t3.html(o2.text);
                      break;
                    case "link":
                      a2 += t3.link(o2.href, o2.title, this.parseInline(o2.tokens, t3));
                      break;
                    case "image":
                      a2 += t3.image(o2.href, o2.title, o2.text);
                      break;
                    case "strong":
                      a2 += t3.strong(this.parseInline(o2.tokens, t3));
                      break;
                    case "em":
                      a2 += t3.em(this.parseInline(o2.tokens, t3));
                      break;
                    case "codespan":
                      a2 += t3.codespan(o2.text);
                      break;
                    case "br":
                      a2 += t3.br();
                      break;
                    case "del":
                      a2 += t3.del(this.parseInline(o2.tokens, t3));
                      break;
                    default: {
                      const e4 = 'Token with "' + o2.type + '" type was not found.';
                      if (this.options.silent)
                        return void console.error(e4);
                      throw new Error(e4);
                    }
                  }
              return a2;
            }
          }
          function Ga(e3, t3, n2) {
            if (e3 == null)
              throw new Error("marked(): input parameter is undefined or null");
            if (typeof e3 != "string")
              throw new Error("marked(): input parameter is of type " + Object.prototype.toString.call(e3) + ", string expected");
            if (typeof t3 == "function" && (n2 = t3, t3 = null), Fa(t3 = Ua({}, Ga.defaults, t3 || {})), n2) {
              const o2 = t3.highlight;
              let r2;
              try {
                r2 = Ja.lex(e3, t3);
              } catch (e4) {
                return n2(e4);
              }
              const a2 = function(e4) {
                let a3;
                if (!e4)
                  try {
                    t3.walkTokens && Ga.walkTokens(r2, t3.walkTokens), a3 = Xa.parse(r2, t3);
                  } catch (t4) {
                    e4 = t4;
                  }
                return t3.highlight = o2, e4 ? n2(e4) : n2(null, a3);
              };
              if (!o2 || o2.length < 3)
                return a2();
              if (delete t3.highlight, !r2.length)
                return a2();
              let i2 = 0;
              return Ga.walkTokens(r2, function(e4) {
                e4.type === "code" && (i2++, setTimeout(() => {
                  o2(e4.text, e4.lang, function(t4, n3) {
                    if (t4)
                      return a2(t4);
                    n3 != null && n3 !== e4.text && (e4.text = n3, e4.escaped = true), i2--, i2 === 0 && a2();
                  });
                }, 0));
              }), void (i2 === 0 && a2());
            }
            try {
              const n3 = Ja.lex(e3, t3);
              return t3.walkTokens && Ga.walkTokens(n3, t3.walkTokens), Xa.parse(n3, t3);
            } catch (e4) {
              if (e4.message += "\nPlease report this to https://github.com/markedjs/marked.", t3.silent)
                return "<p>An error occurred:</p><pre>" + Sa(e4.message + "", true) + "</pre>";
              throw e4;
            }
          }
          Ga.options = Ga.setOptions = function(e3) {
            var t3;
            return Ua(Ga.defaults, e3), t3 = Ga.defaults, ga = t3, Ga;
          }, Ga.getDefaults = function() {
            return { baseUrl: null, breaks: false, extensions: null, gfm: true, headerIds: true, headerPrefix: "", highlight: null, langPrefix: "language-", mangle: true, pedantic: false, renderer: null, sanitize: false, sanitizer: null, silent: false, smartLists: false, smartypants: false, tokenizer: null, walkTokens: null, xhtml: false };
          }, Ga.defaults = ga, Ga.use = function(...e3) {
            const t3 = Ua({}, ...e3), n2 = Ga.defaults.extensions || { renderers: {}, childTokens: {} };
            let o2;
            e3.forEach((e4) => {
              if (e4.extensions && (o2 = true, e4.extensions.forEach((e5) => {
                if (!e5.name)
                  throw new Error("extension name required");
                if (e5.renderer) {
                  const t4 = n2.renderers ? n2.renderers[e5.name] : null;
                  n2.renderers[e5.name] = t4 ? function(...n3) {
                    let o3 = e5.renderer.apply(this, n3);
                    return o3 === false && (o3 = t4.apply(this, n3)), o3;
                  } : e5.renderer;
                }
                if (e5.tokenizer) {
                  if (!e5.level || e5.level !== "block" && e5.level !== "inline")
                    throw new Error("extension level must be 'block' or 'inline'");
                  n2[e5.level] ? n2[e5.level].unshift(e5.tokenizer) : n2[e5.level] = [e5.tokenizer], e5.start && (e5.level === "block" ? n2.startBlock ? n2.startBlock.push(e5.start) : n2.startBlock = [e5.start] : e5.level === "inline" && (n2.startInline ? n2.startInline.push(e5.start) : n2.startInline = [e5.start]));
                }
                e5.childTokens && (n2.childTokens[e5.name] = e5.childTokens);
              })), e4.renderer) {
                const n3 = Ga.defaults.renderer || new Ka();
                for (const t4 in e4.renderer) {
                  const o3 = n3[t4];
                  n3[t4] = (...r2) => {
                    let a2 = e4.renderer[t4].apply(n3, r2);
                    return a2 === false && (a2 = o3.apply(n3, r2)), a2;
                  };
                }
                t3.renderer = n3;
              }
              if (e4.tokenizer) {
                const n3 = Ga.defaults.tokenizer || new Ba();
                for (const t4 in e4.tokenizer) {
                  const o3 = n3[t4];
                  n3[t4] = (...r2) => {
                    let a2 = e4.tokenizer[t4].apply(n3, r2);
                    return a2 === false && (a2 = o3.apply(n3, r2)), a2;
                  };
                }
                t3.tokenizer = n3;
              }
              if (e4.walkTokens) {
                const n3 = Ga.defaults.walkTokens;
                t3.walkTokens = function(t4) {
                  e4.walkTokens.call(this, t4), n3 && n3.call(this, t4);
                };
              }
              o2 && (t3.extensions = n2), Ga.setOptions(t3);
            });
          }, Ga.walkTokens = function(e3, t3) {
            for (const n2 of e3)
              switch (t3.call(Ga, n2), n2.type) {
                case "table":
                  for (const e4 of n2.header)
                    Ga.walkTokens(e4.tokens, t3);
                  for (const e4 of n2.rows)
                    for (const n3 of e4)
                      Ga.walkTokens(n3.tokens, t3);
                  break;
                case "list":
                  Ga.walkTokens(n2.items, t3);
                  break;
                default:
                  Ga.defaults.extensions && Ga.defaults.extensions.childTokens && Ga.defaults.extensions.childTokens[n2.type] ? Ga.defaults.extensions.childTokens[n2.type].forEach(function(e4) {
                    Ga.walkTokens(n2[e4], t3);
                  }) : n2.tokens && Ga.walkTokens(n2.tokens, t3);
              }
          }, Ga.parseInline = function(e3, t3) {
            if (e3 == null)
              throw new Error("marked.parseInline(): input parameter is undefined or null");
            if (typeof e3 != "string")
              throw new Error("marked.parseInline(): input parameter is of type " + Object.prototype.toString.call(e3) + ", string expected");
            Fa(t3 = Ua({}, Ga.defaults, t3 || {}));
            try {
              const n2 = Ja.lexInline(e3, t3);
              return t3.walkTokens && Ga.walkTokens(n2, t3.walkTokens), Xa.parseInline(n2, t3);
            } catch (e4) {
              if (e4.message += "\nPlease report this to https://github.com/markedjs/marked.", t3.silent)
                return "<p>An error occurred:</p><pre>" + Sa(e4.message + "", true) + "</pre>";
              throw e4;
            }
          }, Ga.Parser = Xa, Ga.parser = Xa.parse, Ga.Renderer = Ka, Ga.TextRenderer = Qa, Ga.Lexer = Ja, Ga.lexer = Ja.lex, Ga.Tokenizer = Ba, Ga.Slugger = Ya, Ga.parse = Ga, Ga.options, Ga.setOptions, Ga.use, Ga.walkTokens, Ga.parseInline, Xa.parse, Ja.lex;
          const ei = /\$.*?\$/, ti = /^\$(.*?)\$/, ni = /^(?:\s{0,3})\$\$((?:[^\n]|\n[^\n])+?)\n{0,1}\$\$/, oi = function() {
            let e3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            return e3.replace(/:(.+?):/g, (e4, n2) => t3[n2] ? '<img class="vemoji" src="'.concat(t3[n2], '" alt="').concat(n2, '">') : e4);
          }, ri = (e3, t3) => {
            let n2 = e3.toString();
            for (; n2.length < t3; )
              n2 = "0" + n2;
            return n2;
          }, ai = (e3, t3) => {
            if (e3)
              try {
                typeof e3 == "string" && (e3 = new Date(e3.indexOf(" ") !== -1 ? e3.replace(/-/g, "/") : e3));
                const n2 = e3.getTime(), o2 = new Date().getTime() - n2, r2 = Math.floor(o2 / 864e5);
                if (r2 === 0) {
                  const e4 = o2 % 864e5, n3 = Math.floor(e4 / 36e5);
                  if (n3 === 0) {
                    const n4 = e4 % 36e5, o3 = Math.floor(n4 / 6e4);
                    if (o3 === 0) {
                      const e5 = n4 % 6e4, o4 = Math.round(e5 / 1e3);
                      return "".concat(o4, " ").concat(t3.seconds);
                    }
                    return "".concat(o3, " ").concat(t3.minutes);
                  }
                  return "".concat(n3, " ").concat(t3.hours);
                }
                return r2 < 0 ? t3.now : r2 < 8 ? "".concat(r2, " ").concat(t3.days) : ((e4) => {
                  const t4 = ri(e4.getDate(), 2), n3 = ri(e4.getMonth() + 1, 2), o3 = ri(e4.getFullYear(), 2);
                  return "".concat(o3, "-").concat(n3, "-").concat(t4);
                })(e3);
              } catch (e4) {
                console.log(e4);
              }
            return "";
          }, ii = (e3, t3) => {
            t3.forEach((t4, n2) => {
              (t4.querySelector(".leancloud-visitors-count") || t4).innerText = e3[n2].toString();
            });
          };
          let li, si;
          const ci = () => (si || (li = oa("WALINE_USER_CACHE"), si = rt({ nick: li.get("nick") || "", mail: li.get("mail") || "", link: li.get("link") || "", editor: "" })), { inputs: si, store: li }), ui = "WALINE_USER", di = gt({}), pi = () => {
            if (!di.value.token)
              try {
                di.value = JSON.parse(localStorage.getItem(ui) || "") || JSON.parse(sessionStorage.getItem(ui) || "") || {};
              } catch (e3) {
              }
            return { userInfo: at(di), setUserInfo: (e3) => {
              di.value = e3;
            } };
          }, hi = { class: "v", "data-class": "v" }, vi = { class: "vcount" }, fi = ["textContent"], mi = { class: "vcards" }, gi = { key: 1, class: "vloading" }, bi = ["textContent"], wi = { key: 2, class: "vloading" }, yi = ["textContent"], ki = { key: 4, class: "vmore" }, xi = ["textContent"], _i = { key: 5, class: "vpower" }, Si = Yn(" Powered by "), Ci = Jn("a", { href: "https://github.com/walinejs/waline", target: "_blank", rel: "noreferrer" }, " Waline ", -1), zi = { class: "vcomment" }, Ei = { key: 0, class: "vlogin-info" }, Ai = { class: "vavatar" }, Li = ["title"], Ti = ["src"], Ri = ["textContent"], Ii = { class: "vpanel" }, Oi = ["for", "textContent"], ji = ["id", "name", "type", "onUpdate:modelValue"], $i = ["placeholder"], Mi = ["innerHTML"], Ui = { class: "vfooter" }, Pi = { class: "vactions" }, Ni = { href: "https://guides.github.com/features/mastering-markdown/", title: "Markdown Guide", "aria-label": "Markdown is supported", class: "vaction", target: "_blank", rel: "noreferrer" }, Fi = ["title"], Vi = ["title"], Di = ["title"], Bi = { class: "vinfo" }, qi = { class: "vtext-number" }, Hi = { key: 0 }, Wi = Yn(" \xA0/\xA0 "), Zi = ["textContent"], Ji = ["textContent"], Ki = ["disabled"], Qi = { key: 0, class: "vtab-wrapper" }, Yi = ["title", "onClick"], Xi = ["src", "alt"], Gi = { key: 0, class: "vtabs" }, el = ["onClick"], tl = ["src", "alt", "title"], nl = ["title"];
          var ol, rl, al = typeof Map == "function" ? /* @__PURE__ */ new Map() : (ol = [], rl = [], { has: function(e3) {
            return ol.indexOf(e3) > -1;
          }, get: function(e3) {
            return rl[ol.indexOf(e3)];
          }, set: function(e3, t3) {
            ol.indexOf(e3) === -1 && (ol.push(e3), rl.push(t3));
          }, delete: function(e3) {
            var t3 = ol.indexOf(e3);
            t3 > -1 && (ol.splice(t3, 1), rl.splice(t3, 1));
          } }), il = function(e3) {
            return new Event(e3, { bubbles: true });
          };
          try {
            new Event("test");
          } catch (ol2) {
            il = function(e3) {
              var t3 = document.createEvent("Event");
              return t3.initEvent(e3, true, false), t3;
            };
          }
          function ll(e3) {
            var t3 = al.get(e3);
            t3 && t3.destroy();
          }
          function sl(e3) {
            var t3 = al.get(e3);
            t3 && t3.update();
          }
          var cl = null;
          typeof window == "undefined" || typeof window.getComputedStyle != "function" ? ((cl = function(e3) {
            return e3;
          }).destroy = function(e3) {
            return e3;
          }, cl.update = function(e3) {
            return e3;
          }) : ((cl = function(e3, t3) {
            return e3 && Array.prototype.forEach.call(e3.length ? e3 : [e3], function(e4) {
              return function(e5) {
                if (e5 && e5.nodeName && e5.nodeName === "TEXTAREA" && !al.has(e5)) {
                  var t4, n2 = null, o2 = null, r2 = null, a2 = function() {
                    e5.clientWidth !== o2 && c2();
                  }, i2 = function(t5) {
                    window.removeEventListener("resize", a2, false), e5.removeEventListener("input", c2, false), e5.removeEventListener("keyup", c2, false), e5.removeEventListener("autosize:destroy", i2, false), e5.removeEventListener("autosize:update", c2, false), Object.keys(t5).forEach(function(n3) {
                      e5.style[n3] = t5[n3];
                    }), al.delete(e5);
                  }.bind(e5, { height: e5.style.height, resize: e5.style.resize, overflowY: e5.style.overflowY, overflowX: e5.style.overflowX, wordWrap: e5.style.wordWrap });
                  e5.addEventListener("autosize:destroy", i2, false), "onpropertychange" in e5 && "oninput" in e5 && e5.addEventListener("keyup", c2, false), window.addEventListener("resize", a2, false), e5.addEventListener("input", c2, false), e5.addEventListener("autosize:update", c2, false), e5.style.overflowX = "hidden", e5.style.wordWrap = "break-word", al.set(e5, { destroy: i2, update: c2 }), (t4 = window.getComputedStyle(e5, null)).resize === "vertical" ? e5.style.resize = "none" : t4.resize === "both" && (e5.style.resize = "horizontal"), n2 = t4.boxSizing === "content-box" ? -(parseFloat(t4.paddingTop) + parseFloat(t4.paddingBottom)) : parseFloat(t4.borderTopWidth) + parseFloat(t4.borderBottomWidth), isNaN(n2) && (n2 = 0), c2();
                }
                function l2(t5) {
                  var n3 = e5.style.width;
                  e5.style.width = "0px", e5.style.width = n3, e5.style.overflowY = t5;
                }
                function s2() {
                  if (e5.scrollHeight !== 0) {
                    var t5 = function(e6) {
                      for (var t6 = []; e6 && e6.parentNode && e6.parentNode instanceof Element; )
                        e6.parentNode.scrollTop && t6.push({ node: e6.parentNode, scrollTop: e6.parentNode.scrollTop }), e6 = e6.parentNode;
                      return t6;
                    }(e5), r3 = document.documentElement && document.documentElement.scrollTop;
                    e5.style.height = "", e5.style.height = e5.scrollHeight + n2 + "px", o2 = e5.clientWidth, t5.forEach(function(e6) {
                      e6.node.scrollTop = e6.scrollTop;
                    }), r3 && (document.documentElement.scrollTop = r3);
                  }
                }
                function c2() {
                  s2();
                  var t5 = Math.round(parseFloat(e5.style.height)), n3 = window.getComputedStyle(e5, null), o3 = n3.boxSizing === "content-box" ? Math.round(parseFloat(n3.height)) : e5.offsetHeight;
                  if (o3 < t5 ? n3.overflowY === "hidden" && (l2("scroll"), s2(), o3 = n3.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(e5, null).height)) : e5.offsetHeight) : n3.overflowY !== "hidden" && (l2("hidden"), s2(), o3 = n3.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(e5, null).height)) : e5.offsetHeight), r2 !== o3) {
                    r2 = o3;
                    var a3 = il("autosize:resized");
                    try {
                      e5.dispatchEvent(a3);
                    } catch (e6) {
                    }
                  }
                }
              }(e4);
            }), e3;
          }).destroy = function(e3) {
            return e3 && Array.prototype.forEach.call(e3.length ? e3 : [e3], ll), e3;
          }, cl.update = function(e3) {
            return e3 && Array.prototype.forEach.call(e3.length ? e3 : [e3], sl), e3;
          });
          const ul = cl, dl = (e3) => {
            let { size: t3 } = e3;
            return Ho("svg", { width: t3, height: t3, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid" }, Ho("circle", { cx: 50, cy: 50, fill: "none", stroke: "currentColor", strokeWidth: "4", r: "40", "stroke-dasharray": "85 30" }, Ho("animateTransform", { attributeName: "transform", type: "rotate", repeatCount: "indefinite", dur: "1s", values: "0 50 50;360 50 50", keyTimes: "0;1" })));
          }, pl = Yt({ name: "CommentBox", components: { CloseIcon: (e3) => {
            let { size: t3 } = e3;
            return Ho("svg", { class: "vclose-icon", viewBox: "0 0 1024 1024", width: t3, height: t3 }, [Ho("path", { d: "M697.173 85.333h-369.92c-144.64 0-241.92 101.547-241.92 252.587v348.587c0 150.613 97.28 252.16 241.92 252.16h369.92c144.64 0 241.494-101.547 241.494-252.16V337.92c0-151.04-96.854-252.587-241.494-252.587z", fill: "currentColor" }), Ho("path", { d: "m640.683 587.52-75.947-75.861 75.904-75.862a37.29 37.29 0 0 0 0-52.778 37.205 37.205 0 0 0-52.779 0l-75.946 75.818-75.862-75.946a37.419 37.419 0 0 0-52.821 0 37.419 37.419 0 0 0 0 52.821l75.947 75.947-75.776 75.733a37.29 37.29 0 1 0 52.778 52.821l75.776-75.776 75.947 75.947a37.376 37.376 0 0 0 52.779-52.821z", fill: "#888" })]);
          }, EmojiIcon: () => Ho("svg", { viewBox: "0 0 1024 1024", width: "24", height: "24" }, Ho("path", { d: "M563.2 463.3 677 540c1.7 1.2 3.7 1.8 5.8 1.8.7 0 1.4-.1 2-.2 2.7-.5 5.1-2.1 6.6-4.4l25.3-37.8c1.5-2.3 2.1-5.1 1.6-7.8s-2.1-5.1-4.4-6.6l-73.6-49.1 73.6-49.1c2.3-1.5 3.9-3.9 4.4-6.6.5-2.7 0-5.5-1.6-7.8l-25.3-37.8a10.1 10.1 0 0 0-6.6-4.4c-.7-.1-1.3-.2-2-.2-2.1 0-4.1.6-5.8 1.8l-113.8 76.6c-9.2 6.2-14.7 16.4-14.7 27.5.1 11 5.5 21.3 14.7 27.4zM387 348.8h-45.5c-5.7 0-10.4 4.7-10.4 10.4v153.3c0 5.7 4.7 10.4 10.4 10.4H387c5.7 0 10.4-4.7 10.4-10.4V359.2c0-5.7-4.7-10.4-10.4-10.4zm333.8 241.3-41-20a10.3 10.3 0 0 0-8.1-.5c-2.6.9-4.8 2.9-5.9 5.4-30.1 64.9-93.1 109.1-164.4 115.2-5.7.5-9.9 5.5-9.5 11.2l3.9 45.5c.5 5.3 5 9.5 10.3 9.5h.9c94.8-8 178.5-66.5 218.6-152.7 2.4-5 .3-11.2-4.8-13.6zm186-186.1c-11.9-42-30.5-81.4-55.2-117.1-24.1-34.9-53.5-65.6-87.5-91.2-33.9-25.6-71.5-45.5-111.6-59.2-41.2-14-84.1-21.1-127.8-21.1h-1.2c-75.4 0-148.8 21.4-212.5 61.7-63.7 40.3-114.3 97.6-146.5 165.8-32.2 68.1-44.3 143.6-35.1 218.4 9.3 74.8 39.4 145 87.3 203.3.1.2.3.3.4.5l36.2 38.4c1.1 1.2 2.5 2.1 3.9 2.6 73.3 66.7 168.2 103.5 267.5 103.5 73.3 0 145.2-20.3 207.7-58.7 37.3-22.9 70.3-51.5 98.1-85 27.1-32.7 48.7-69.5 64.2-109.1 15.5-39.7 24.4-81.3 26.6-123.8 2.4-43.6-2.5-87-14.5-129zm-60.5 181.1c-8.3 37-22.8 72-43 104-19.7 31.1-44.3 58.6-73.1 81.7-28.8 23.1-61 41-95.7 53.4-35.6 12.7-72.9 19.1-110.9 19.1-82.6 0-161.7-30.6-222.8-86.2l-34.1-35.8c-23.9-29.3-42.4-62.2-55.1-97.7-12.4-34.7-18.8-71-19.2-107.9-.4-36.9 5.4-73.3 17.1-108.2 12-35.8 30-69.2 53.4-99.1 31.7-40.4 71.1-72 117.2-94.1 44.5-21.3 94-32.6 143.4-32.6 49.3 0 97 10.8 141.8 32 34.3 16.3 65.3 38.1 92 64.8 26.1 26 47.5 56 63.6 89.2 16.2 33.2 26.6 68.5 31 105.1 4.6 37.5 2.7 75.3-5.6 112.3z", fill: "currentColor" })), ImageIcon: () => Ho("svg", { viewBox: "0 0 1024 1024", width: "24", height: "24" }, [Ho("path", { d: "M784 112H240c-88 0-160 72-160 160v480c0 88 72 160 160 160h544c88 0 160-72 160-160V272c0-88-72-160-160-160zm96 640c0 52.8-43.2 96-96 96H240c-52.8 0-96-43.2-96-96V272c0-52.8 43.2-96 96-96h544c52.8 0 96 43.2 96 96v480z", fill: "currentColor" }), Ho("path", { d: "M352 480c52.8 0 96-43.2 96-96s-43.2-96-96-96-96 43.2-96 96 43.2 96 96 96zm0-128c17.6 0 32 14.4 32 32s-14.4 32-32 32-32-14.4-32-32 14.4-32 32-32zm462.4 379.2-3.2-3.2-177.6-177.6c-25.6-25.6-65.6-25.6-91.2 0l-80 80-36.8-36.8c-25.6-25.6-65.6-25.6-91.2 0L200 728c-4.8 6.4-8 14.4-8 24 0 17.6 14.4 32 32 32 9.6 0 16-3.2 22.4-9.6L380.8 640l134.4 134.4c6.4 6.4 14.4 9.6 24 9.6 17.6 0 32-14.4 32-32 0-9.6-4.8-17.6-9.6-24l-52.8-52.8 80-80L769.6 776c6.4 4.8 12.8 8 20.8 8 17.6 0 32-14.4 32-32 0-8-3.2-16-8-20.8z", fill: "currentColor" })]), MarkdownIcon: () => Ho("svg", { width: "16", height: "16", ariaHidden: "true" }, Ho("path", { d: "M14.85 3H1.15C.52 3 0 3.52 0 4.15v7.69C0 12.48.52 13 1.15 13h13.69c.64 0 1.15-.52 1.15-1.15v-7.7C16 3.52 15.48 3 14.85 3zM9 11H7V8L5.5 9.92 4 8v3H2V5h2l1.5 2L7 5h2v6zm2.99.5L9.5 8H11V5h2v3h1.5l-2.51 3.5z", fill: "currentColor" })), PreviewIcon: () => Ho("svg", { viewBox: "0 0 1024 1024", width: "24", height: "24" }, [Ho("path", { d: "M710.816 654.301c70.323-96.639 61.084-230.578-23.705-314.843-46.098-46.098-107.183-71.109-172.28-71.109-65.008 0-126.092 25.444-172.28 71.109-45.227 46.098-70.756 107.183-70.756 172.106 0 64.923 25.444 126.007 71.194 172.106 46.099 46.098 107.184 71.109 172.28 71.109 51.414 0 100.648-16.212 142.824-47.404l126.53 126.006c7.058 7.06 16.297 10.979 26.406 10.979 10.105 0 19.343-3.919 26.402-10.979 14.467-14.467 14.467-38.172 0-52.723L710.816 654.301zm-315.107-23.265c-65.88-65.88-65.88-172.54 0-238.42 32.069-32.07 74.245-49.149 119.471-49.149 45.227 0 87.407 17.603 119.472 49.149 65.88 65.879 65.88 172.539 0 238.42-63.612 63.178-175.242 63.178-238.943 0zm0 0", fill: "currentColor" }), Ho("path", { d: "M703.319 121.603H321.03c-109.8 0-199.469 89.146-199.469 199.38v382.034c0 109.796 89.236 199.38 199.469 199.38h207.397c20.653 0 37.384-16.645 37.384-37.299 0-20.649-16.731-37.296-37.384-37.296H321.03c-68.582 0-124.352-55.77-124.352-124.267V321.421c0-68.496 55.77-124.267 124.352-124.267h382.289c68.582 0 124.352 55.771 124.352 124.267V524.72c0 20.654 16.736 37.299 37.385 37.299 20.654 0 37.384-16.645 37.384-37.299V320.549c-.085-109.8-89.321-198.946-199.121-198.946zm0 0", fill: "currentColor" })]), LoadingIcon: dl }, props: { rootId: { type: String, default: "" }, replyId: { type: String, default: "" }, replyUser: { type: String, default: "" } }, emits: ["submit", "cancel-reply"], setup(e3, t3) {
            let { emit: n2 } = t3;
            const o2 = Dt("config"), { inputs: r2, store: a2 } = ci(), { userInfo: i2, setUserInfo: l2 } = pi(), s2 = gt({}), c2 = gt(null), u2 = gt(null), d2 = gt(null), p2 = gt(null), h2 = gt({ tabs: [], map: {} }), v2 = gt(0), f2 = gt(false), m2 = gt(false), g2 = gt(""), b2 = gt(0), w2 = gt(0), y2 = gt(false), k2 = gt(""), x2 = gt(false), _2 = xt(() => o2.value.locale), S2 = xt(() => {
              var e4;
              return Boolean((e4 = i2.value) === null || e4 === void 0 ? void 0 : e4.token);
            }), C2 = xt(() => o2.value.uploadImage !== false), z2 = (e4) => {
              const t4 = c2.value, n3 = t4.selectionStart, o3 = t4.selectionEnd || 0, a3 = t4.scrollTop;
              r2.editor = t4.value.substring(0, n3) + e4 + t4.value.substring(o3, t4.value.length), t4.focus(), t4.selectionStart = n3 + e4.length, t4.selectionEnd = n3 + e4.length, t4.scrollTop = a3;
            }, E2 = (e4) => {
              const t4 = "![".concat(o2.value.locale.uploading, " ").concat(e4.name, "]()");
              return z2(t4), Promise.resolve().then(() => o2.value.uploadImage(e4)).then((n3) => {
                r2.editor = r2.editor.replace(t4, "\r\n![".concat(e4.name, "](").concat(n3, ")"));
              });
            }, A2 = () => {
              var t4, l3;
              const { serverURL: u3, lang: d3, login: p3, wordLimit: v3, requiredMeta: f3 } = o2.value, m3 = { comment: k2.value, nick: r2.nick, mail: r2.mail, link: r2.link, ua: navigator.userAgent, url: o2.value.path };
              if ((t4 = i2.value) !== null && t4 !== void 0 && t4.token)
                m3.nick = i2.value.display_name, m3.mail = i2.value.email, m3.link = i2.value.url;
              else {
                if (p3 === "force")
                  return;
                var w3, S3, C3;
                if ((f3.indexOf("nick") > -1 || m3.nick) && !m3.nick)
                  return (w3 = s2.value.nick) === null || w3 === void 0 || w3.focus(), alert(_2.value.nickError);
                if (f3.indexOf("mail") > -1 && !m3.mail)
                  return (S3 = s2.value.mail) === null || S3 === void 0 || S3.focus(), alert(_2.value.mailError);
                if (!m3.comment)
                  return void ((C3 = c2.value) === null || C3 === void 0 || C3.focus());
                m3.nick || (m3.nick = _2.value.anonymous);
              }
              if (!y2.value)
                return alert(_2.value.wordHint.replace("$0", v3[0].toString()).replace("$1", v3[1].toString()).replace("$2", b2.value.toString()));
              m3.comment = oi(m3.comment, h2.value.map), e3.replyId && e3.rootId && (m3.pid = e3.replyId, m3.rid = e3.rootId, m3.at = e3.replyUser), x2.value = true, ((e4) => {
                let { serverURL: t5, lang: n3, token: o3, comment: r3 } = e4;
                const a3 = { "Content-Type": "application/json" };
                return o3 && (a3.Authorization = "Bearer ".concat(o3)), fetch("".concat(t5, "/comment?lang=").concat(n3), { method: "POST", headers: a3, body: JSON.stringify(r3) }).then((e5) => e5.json());
              })({ serverURL: u3, lang: d3, token: (l3 = i2.value) === null || l3 === void 0 ? void 0 : l3.token, comment: m3 }).then((t5) => {
                if (x2.value = false, a2.update({ nick: m3.nick, link: m3.link, mail: m3.mail }), t5.errmsg)
                  return alert(t5.errmsg);
                n2("submit", t5.data), r2.editor = "", g2.value = "", e3.replyId && n2("cancel-reply");
              }).catch((e4) => {
                x2.value = false, alert(e4.message);
              });
            }, L2 = (e4) => {
              d2.value.contains(e4.target) || p2.value.contains(e4.target) || (f2.value = false);
            };
            return Bo(() => r2.editor, (e4) => {
              const { highlight: t4, tex: n3 } = o2.value;
              k2.value = e4, g2.value = ((e5, t5, n4, o3) => {
                if (Ga.setOptions({ highlight: t5 || void 0, breaks: true, smartLists: true, smartypants: true }), o3) {
                  const e6 = ((e7) => {
                    const t6 = { name: "blockMath", level: "block", tokenizer(t7) {
                      const n6 = ni.exec(t7);
                      if (n6 !== null)
                        return { type: "html", raw: n6[0], text: e7(true, n6[1]) };
                    } }, n5 = { name: "inlineMath", level: "inline", start(e8) {
                      const t7 = e8.search(ei);
                      return t7 !== -1 ? t7 : e8.length;
                    }, tokenizer(t7) {
                      const n6 = ti.exec(t7);
                      if (n6 !== null)
                        return { type: "html", raw: n6[0], text: e7(false, n6[1]) };
                    } };
                    return [t6, n5];
                  })(o3);
                  Ga.use({ extensions: e6 });
                }
                return Ga.parse(oi(e5, n4));
              })(e4, t4, h2.value.map, n3), b2.value = ((e5) => ((e6) => e6.match(/[\w\d\s\u00C0-\u024F]+/giu) || [])(e5).reduce((e6, t5) => e6 + (t5.trim() === "" ? 0 : t5.trim().split(/\s+/u).length), 0) + ((e6) => e6.match(/[\u4E00-\u9FA5]/gu) || [])(e5).length)(e4), c2.value && (e4 ? ul(c2.value) : ul.destroy(c2.value));
            }, { immediate: true }), Bo(() => o2.value.emoji, (e4) => e4.then((e5) => {
              h2.value = e5;
            }), { immediate: true }), Bo([o2, b2], (e4) => {
              let [t4, n3] = e4;
              const { wordLimit: o3 } = t4;
              o3 ? n3 < o3[0] && o3[0] !== 0 ? (w2.value = o3[0], y2.value = false) : n3 > o3[1] ? (w2.value = o3[1], y2.value = false) : (w2.value = o3[1], y2.value = true) : (w2.value = 0, y2.value = true);
            }, { immediate: true }), tn(() => {
              document.body.addEventListener("click", L2);
            }), on(() => {
              document.body.removeEventListener("click", L2);
            }), { config: o2, locale: _2, insert: z2, onChange: () => {
              const e4 = u2.value;
              e4.files && C2.value && E2(e4.files[0]).then(() => {
                e4.value = "";
              });
            }, onDrop: (e4) => {
              var t4;
              if ((t4 = e4.dataTransfer) !== null && t4 !== void 0 && t4.items) {
                const t5 = pa(e4.dataTransfer.items);
                t5 && C2.value && (E2(t5), e4.preventDefault());
              }
            }, onKeyDown: (e4) => {
              const t4 = e4.key;
              (e4.ctrlKey || e4.metaKey) && t4 === "Enter" && A2();
            }, onPaste: (e4) => {
              if (e4.clipboardData) {
                const t4 = pa(e4.clipboardData.items);
                t4 && C2.value && E2(t4);
              }
            }, onLogin: (e4) => {
              e4.preventDefault();
              const { lang: t4, serverURL: n3 } = o2.value, r3 = (window.innerWidth - 450) / 2, a3 = (window.innerHeight - 450) / 2, i3 = window.open("".concat(n3, "/ui/login?lng=").concat(encodeURIComponent(t4)), "_blank", "width=".concat(450, ",height=").concat(450, ",left=").concat(r3, ",top=").concat(a3, ",scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no"));
              i3 == null || i3.postMessage({ type: "TOKEN", data: null }, "*");
              const s3 = (e5) => {
                let { data: t5 } = e5;
                t5 && t5.type === "userInfo" && t5.data.token && (i3 == null || i3.close(), l2(t5.data), (t5.data.remember ? localStorage : sessionStorage).setItem("WALINE_USER", JSON.stringify(t5.data)), window.removeEventListener("message", s3));
              };
              window.addEventListener("message", s3);
            }, onLogout: () => {
              l2({}), localStorage.setItem("WALINE_USER", "null"), sessionStorage.setItem("WALINE_USER", "null");
            }, onProfile: (e4) => {
              e4.preventDefault();
              const { lang: t4, serverURL: n3 } = o2.value, r3 = (window.innerWidth - 800) / 2, a3 = (window.innerHeight - 800) / 2, s3 = window.open("".concat(n3, "/ui/profile?lng=").concat(encodeURIComponent(t4)), "_blank", "width=".concat(800, ",height=").concat(800, ",left=").concat(r3, ",top=").concat(a3, ",scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no"));
              s3 == null || s3.postMessage({ type: "TOKEN", data: i2.value.token }, "*");
              const c3 = (e5) => {
                let { data: t5 } = e5;
                t5 && t5.type === "profile" && (l2(Object.assign({}, i2.value, t5)), [localStorage, sessionStorage].filter((e6) => e6.getItem("WALINE_USER")).forEach((e6) => e6.setItem("WALINE_USER", JSON.stringify(i2))), window.removeEventListener("message", c3));
              };
              window.addEventListener("message", c3);
            }, submitComment: A2, isLogin: S2, userInfo: i2, isSubmitting: x2, wordNumber: b2, wordLimit: w2, isWordNumberLegal: y2, inputs: r2, emoji: h2, emojiTabIndex: v2, showEmoji: f2, canUploadImage: C2, previewText: g2, showPreview: m2, inputRefs: s2, editorRef: c2, emojiButtonRef: d2, emojiPopupRef: p2, imageUploadRef: u2 };
          } });
          var hl = n(407);
          const vl = (0, hl.Z)(pl, [["render", function(e3, t3, n2, o2, r2, i2) {
            const l2 = An("CloseIcon"), s2 = An("MarkdownIcon"), u2 = An("EmojiIcon"), d2 = An("ImageIcon"), h2 = An("PreviewIcon"), v2 = An("LoadingIcon");
            return Un(), Vn("div", zi, [e3.config.login !== "disable" && e3.isLogin ? (Un(), Vn("div", Ei, [Jn("div", Ai, [Jn("button", { class: "vlogout-btn", title: e3.locale.logout, onClick: t3[0] || (t3[0] = function() {
              return e3.onLogout && e3.onLogout(...arguments);
            }) }, [Kn(l2, { size: "14" })], 8, Li), Jn("img", { src: e3.userInfo.avatar || "".concat(e3.config.avatar.cdn).concat(e3.userInfo.mailMd5).concat(e3.config.avatar.param), alt: "avatar" }, null, 8, Ti)]), Jn("a", { href: "#", class: "vlogin-nick", "aria-label": "Profile", onClick: t3[1] || (t3[1] = function() {
              return e3.onProfile && e3.onProfile(...arguments);
            }), textContent: p(e3.userInfo.display_name) }, null, 8, Ri)])) : Xn("v-if", true), Jn("div", Ii, [e3.config.login !== "force" && e3.config.meta.length && !e3.isLogin ? (Un(), Vn("div", { key: 0, class: c(["vheader", "vheader-".concat(e3.config.meta.length)]) }, [(Un(true), Vn(Rn, null, no(e3.config.meta, (t4) => (Un(), Vn("div", { class: "vheader-item", key: t4 }, [Jn("label", { for: t4, textContent: p(e3.locale[t4] + (e3.config.requiredMeta.includes(t4) || !e3.config.requiredMeta.length ? "" : "(".concat(e3.locale.optional, ")"))) }, null, 8, Oi), gn(Jn("input", { ref: (n3) => {
              n3 && (e3.inputRefs[t4] = n3);
            }, id: "waline-".concat(t4), class: c(["vinput", "v".concat(t4)]), name: t4, type: t4 === "mail" ? "email" : "text", "onUpdate:modelValue": (n3) => e3.inputs[t4] = n3 }, null, 10, ji), [[jr, e3.inputs[t4]]])]))), 128))], 2)) : Xn("v-if", true), gn(Jn("textarea", { class: "veditor", ref: "editorRef", id: "waline-edit", placeholder: e3.replyUser ? "@".concat(e3.replyUser) : e3.locale.placeholder, "onUpdate:modelValue": t3[2] || (t3[2] = (t4) => e3.inputs.editor = t4), onKeydown: t3[3] || (t3[3] = function() {
              return e3.onKeyDown && e3.onKeyDown(...arguments);
            }), onDrop: t3[4] || (t3[4] = function() {
              return e3.onDrop && e3.onDrop(...arguments);
            }), onPaste: t3[5] || (t3[5] = function() {
              return e3.onPaste && e3.onPaste(...arguments);
            }) }, null, 40, $i), [[zr, e3.inputs.editor]]), Jn("div", { class: "vpreview", style: a({ display: e3.showPreview ? "block" : "none" }) }, [Jn("h4", null, p(e3.locale.preview) + ":", 1), Jn("div", { class: "vcontent", innerHTML: e3.previewText }, null, 8, Mi)], 4), Jn("div", Ui, [Jn("div", Pi, [Jn("a", Ni, [Kn(s2)]), Jn("button", { ref: "emojiButtonRef", class: c(["vaction", { actived: e3.showEmoji }]), title: e3.locale.emoji, onClick: t3[6] || (t3[6] = (t4) => e3.showEmoji = !e3.showEmoji) }, [Kn(u2)], 10, Fi), Jn("input", { ref: "imageUploadRef", class: "upload", id: "waline-image-upload", type: "file", accept: ".png,.jpg,.jpeg,.webp,.bmp,.gif", onChange: t3[7] || (t3[7] = function() {
              return e3.onChange && e3.onChange(...arguments);
            }) }, null, 544), e3.canUploadImage ? (Un(), Vn("label", { key: 0, for: "waline-image-upload", class: "vaction", title: e3.locale.uploadImage }, [Kn(d2)], 8, Vi)) : Xn("v-if", true), Jn("button", { class: c(["vaction", { actived: e3.showPreview }]), title: e3.locale.preview, onClick: t3[8] || (t3[8] = (t4) => e3.showPreview = !e3.showPreview) }, [Kn(h2)], 10, Di)]), Jn("div", Bi, [Jn("div", qi, [Yn(p(e3.wordNumber) + " ", 1), e3.config.wordLimit ? (Un(), Vn("span", Hi, [Wi, Jn("span", { class: c({ illegal: !e3.isWordNumberLegal }), textContent: p(e3.wordLimit) }, null, 10, Zi)])) : Xn("v-if", true), Yn(" \xA0" + p(e3.locale.word), 1)]), e3.config.login === "disable" || e3.isLogin ? Xn("v-if", true) : (Un(), Vn("button", { key: 0, class: "vbtn", onClick: t3[9] || (t3[9] = function() {
              return e3.onLogin && e3.onLogin(...arguments);
            }), textContent: p(e3.locale.login) }, null, 8, Ji)), e3.config.login !== "force" || e3.isLogin ? (Un(), Vn("button", { key: 1, class: "vbtn primary", title: "Cmd|Ctrl + Enter", disabled: e3.isSubmitting, onClick: t3[10] || (t3[10] = function() {
              return e3.submitComment && e3.submitComment(...arguments);
            }) }, [e3.isSubmitting ? (Un(), Dn(v2, { key: 0, size: 16 })) : (Un(), Vn(Rn, { key: 1 }, [Yn(p(e3.locale.submit), 1)], 2112))], 8, Ki)) : Xn("v-if", true)]), Jn("div", { ref: "emojiPopupRef", class: c(["vemoji-popup", { display: e3.showEmoji }]) }, [(Un(true), Vn(Rn, null, no(e3.emoji.tabs, (t4, n3) => (Un(), Vn(Rn, { key: t4.name }, [n3 === e3.emojiTabIndex ? (Un(), Vn("div", Qi, [(Un(true), Vn(Rn, null, no(t4.items, (t5) => (Un(), Vn("button", { key: t5, title: t5, onClick: (n4) => e3.insert(":".concat(t5, ":")) }, [e3.showEmoji ? (Un(), Vn("img", { key: 0, class: "vemoji", src: e3.emoji.map[t5], alt: t5, loading: "lazy", referrerPolicy: "no-referrer" }, null, 8, Xi)) : Xn("v-if", true)], 8, Yi))), 128))])) : Xn("v-if", true)], 64))), 128)), e3.emoji.tabs.length > 1 ? (Un(), Vn("div", Gi, [(Un(true), Vn(Rn, null, no(e3.emoji.tabs, (t4, n3) => (Un(), Vn("button", { key: t4.name, class: c(["vtab", { active: e3.emojiTabIndex === n3 }]), onClick: (t5) => e3.emojiTabIndex = n3 }, [Jn("img", { class: "vemoji", src: t4.icon, alt: t4.name, title: t4.name, loading: "lazy", referrerPolicy: "no-referrer" }, null, 8, tl)], 10, el))), 128))])) : Xn("v-if", true)], 2)])]), e3.replyId ? (Un(), Vn("button", { key: 1, class: "vclose", title: e3.locale.cancelReply, onClick: t3[11] || (t3[11] = (t4) => e3.$emit("cancel-reply")) }, [Kn(l2, { size: "24" })], 8, nl)) : Xn("v-if", true)]);
          }]]), fl = vl, ml = ["id"], gl = ["src"], bl = { class: "vcard" }, wl = { class: "vhead" }, yl = ["href"], kl = { key: 1, class: "vnick" }, xl = ["textContent"], _l = ["textContent"], Sl = ["textContent"], Cl = ["title"], zl = { class: "vmeta", "aria-hidden": "true" }, El = ["textContent"], Al = ["textContent"], Ll = ["innerHTML"], Tl = { key: 0, class: "vreply-wrapper" }, Rl = { key: 1, class: "vquote" }, Il = Yt({ props: { comment: { type: Object, required: true }, rootId: { type: String, required: true }, reply: { type: Object } }, components: { CommentBox: fl, ReplyIcon: () => Ho("svg", { viewBox: "0 0 1024 1024", width: "18", height: "18" }, Ho("path", { d: "M1019.2 720C1001.6 625.6 968 566.4 904 497.6c-89.6-89.6-214.4-150.4-347.2-176v-120c0-25.6-8-51.2-25.6-64-33.6-30.4-81.6-30.4-112-4.8L33.6 441.6C12.8 459.2 0 484.8 0 510.4c0 25.6 12.8 51.2 30.4 68.8l385.6 312c17.6 12.8 33.6 17.6 51.2 17.6 12.8 0 25.6-4.8 38.4-8C536 888 552 857.6 552 824v-99.2c124.8 20.8 248 86.4 339.2 140.8 25.6 17.6 59.2 17.6 89.6 0 25.6-17.6 43.2-46.4 43.2-76.8 0-33.6 0-56-4.8-68.8zm-500.8-89.6-46.4-4.8v193.6L86.4 510.4 472 201.6V400l38.4 4.8c128 12.8 248 68.8 334.4 153.6 51.2 56 76.8 102.4 94.4 179.2 0 4.8 4.8 20.8 4.8 51.2C835.2 720 672 640 518.4 630.4z", fill: "currentColor" })), VerifiedIcon: () => Ho("svg", { class: "verified-icon", viewBox: "0 0 1024 1024", width: "14", height: "14" }, Ho("path", { d: "M512 44.608l388.352 109.696a38.016 38.016 0 0 1 27.648 36.608v337.984c-1.984 110.528-40.192 207.04-113.984 288-73.92 81.024-172.48 134.528-294.592 160.32l-8.192 1.728-8.192-2.048c-127.616-32.832-225.536-85.952-293.056-160-68.096-74.688-105.984-171.584-113.92-289.28L96 526.336V190.976c0-17.024 11.328-32 27.648-36.608L512 44.608z m0 74.816L168 216.64v307.328l0.128 1.856c7.232 99.712 38.4 179.52 93.44 240.704l1.664 1.92c55.488 60.8 137.728 106.304 247.488 136l2.048 0.512 1.408-0.32c102.272-23.232 183.552-67.968 244.736-134.144l1.92-2.112c62.592-68.672 94.08-149.376 95.168-243.584V216.64L512 119.36z m222.592 229.888a32 32 0 0 1 0.448 44.864l-0.384 0.384-244.8 246.016a32 32 0 0 1-44.992 0.384l-0.384-0.384-155.136-155.968a32 32 0 0 1 44.992-45.504L467.2 572.608 689.28 349.44a32 32 0 0 1 45.312-0.128z", fill: "#27ae60" })) }, emits: ["submit", "reply"], setup(e3) {
            const t3 = Dt("config"), n2 = xt(() => t3.value.locale), o2 = xt(() => {
              let { link: t4 } = e3.comment;
              return t4 ? Vr(t4) ? t4 : "https://".concat(t4) : "";
            }), r2 = xt(() => {
              const n3 = e3.comment, o3 = t3.value.avatar;
              return !(!n3 || o3.hide) && (e3.comment.avatar || "".concat(o3.cdn).concat(e3.comment.mail).concat(o3.param));
            }), a2 = xt(() => {
              var t4;
              return e3.comment.objectId === ((t4 = e3.reply) === null || t4 === void 0 ? void 0 : t4.objectId);
            });
            return { config: t3, locale: n2, avatar: r2, isReplyingCurrent: a2, link: o2, timeAgo: ai };
          } }), Ol = Yt({ name: "Waline-Root", components: { CommentBox: fl, CommentCard: (0, hl.Z)(Il, [["render", function(e3, t3, n2, o2, r2, a2) {
            const i2 = An("VerifiedIcon"), l2 = An("ReplyIcon"), s2 = An("CommentBox"), u2 = An("CommentCard", true);
            return Un(), Vn("div", { class: "vitem", id: e3.comment.objectId }, [e3.avatar ? (Un(), Vn("img", { key: 0, class: "vuser", "aria-hidden": "true", src: e3.avatar }, null, 8, gl)) : Xn("v-if", true), Jn("div", bl, [Jn("div", wl, [e3.link ? (Un(), Vn("a", { key: 0, class: "vnick", href: e3.link, target: "_blank", rel: "nofollow noreferrer" }, [Yn(p(e3.comment.nick), 1), e3.comment.type ? (Un(), Dn(i2, { key: 0 })) : Xn("v-if", true)], 8, yl)) : (Un(), Vn("span", kl, [Yn(p(e3.comment.nick), 1), e3.comment.type ? (Un(), Dn(i2, { key: 0 })) : Xn("v-if", true)])), e3.comment.type === "administrator" ? (Un(), Vn("span", { key: 2, class: "vbadge", textContent: p(e3.locale.admin) }, null, 8, xl)) : Xn("v-if", true), e3.comment.sticky ? (Un(), Vn("span", { key: 3, class: "vbadge", textContent: p(e3.locale.sticky) }, null, 8, _l)) : Xn("v-if", true), Jn("span", { class: "vtime", textContent: p(e3.timeAgo(e3.comment.insertedAt, e3.locale)) }, null, 8, Sl), Jn("button", { class: c(["vreply", { active: e3.isReplyingCurrent }]), title: e3.isReplyingCurrent ? e3.locale.cancelReply : e3.locale.reply, onClick: t3[0] || (t3[0] = (t4) => e3.$emit("reply", e3.isReplyingCurrent ? null : e3.comment)) }, [Kn(l2)], 10, Cl)]), Jn("div", zl, [e3.comment.browser ? (Un(), Vn("span", { key: 0, textContent: p(e3.comment.browser) }, null, 8, El)) : Xn("v-if", true), e3.comment.os ? (Un(), Vn("span", { key: 1, textContent: p(e3.comment.os) }, null, 8, Al)) : Xn("v-if", true)]), Jn("div", { class: "vcontent", innerHTML: e3.comment.comment }, null, 8, Ll), e3.isReplyingCurrent ? (Un(), Vn("div", Tl, [Kn(s2, { replyId: e3.comment.objectId, replyUser: e3.comment.nick, rootId: e3.rootId, onSubmit: t3[1] || (t3[1] = (t4) => e3.$emit("submit", t4)), onCancelReply: t3[2] || (t3[2] = (t4) => e3.$emit("reply", null)) }, null, 8, ["replyId", "replyUser", "rootId"])])) : Xn("v-if", true), e3.comment.children ? (Un(), Vn("div", Rl, [(Un(true), Vn(Rn, null, no(e3.comment.children, (n3) => (Un(), Dn(u2, { key: n3.objectId, comment: n3, reply: e3.reply, rootId: e3.rootId, onReply: t3[3] || (t3[3] = (t4) => e3.$emit("reply", t4)), onSubmit: t3[4] || (t3[4] = (t4) => e3.$emit("submit", t4)) }, null, 8, ["comment", "reply", "rootId"]))), 128))])) : Xn("v-if", true)])], 8, ml);
          }]]), LoadingIcon: dl }, props: { signal: { type: Object, required: true } }, setup(e3) {
            const t3 = Dt("config"), n2 = Dt("event"), { userInfo: o2 } = pi(), r2 = gt(0), a2 = gt(1), i2 = gt(0), l2 = gt(true), s2 = gt(false), c2 = gt([]), u2 = gt(null);
            let d2 = e3.signal;
            const p2 = xt(() => t3.value.locale), h2 = (e4) => {
              var n3;
              l2.value = true, s2.value = false, ((e5) => {
                let { serverURL: t4, path: n4, page: o3, pageSize: r3, signal: a3, token: i3 } = e5;
                const l3 = {};
                return i3 && (l3.Authorization = "Bearer ".concat(i3)), fetch("".concat(t4, "/comment?path=").concat(encodeURIComponent(n4), "&pageSize=").concat(r3, "&page=").concat(o3), { signal: a3, headers: l3 }).then((e6) => e6.json()).then((e6) => Pr(e6, "comment list"));
              })(Object.assign({}, t3.value, { page: e4, signal: d2, token: (n3 = o2.value) === null || n3 === void 0 ? void 0 : n3.token })).then((t4) => {
                l2.value = false, r2.value = t4.count, c2.value.push(...t4.data), a2.value = e4, i2.value = t4.totalPages;
              }).catch((e5) => {
                e5.name !== "AbortError" && (console.error(e5.message), s2.value = true, l2.value = false);
              });
            };
            return n2.on("render", (e4) => {
              d2 = e4, r2.value = 0, c2.value = [], h2(1);
            }), tn(() => h2(1)), { config: t3, locale: p2, count: r2, data: c2, loading: l2, inError: s2, page: a2, totalPages: i2, reply: u2, loadMore: () => h2(a2.value + 1), refresh: () => {
              c2.value = [], h2(1);
            }, onReply: (e4) => {
              u2.value = e4;
            }, onSubmit: (e4) => {
              if (e4.rid) {
                const t4 = c2.value.find((t5) => {
                  let { objectId: n3 } = t5;
                  return n3 === e4.rid;
                });
                if (!t4)
                  return;
                Array.isArray(t4.children) || (t4.children = []), t4.children.push(e4);
              } else
                c2.value.unshift(e4);
            }, version: "1.5.4" };
          } }), jl = (0, hl.Z)(Ol, [["render", function(e3, t3, n2, o2, r2, a2) {
            const i2 = An("CommentBox"), l2 = An("CommentCard"), s2 = An("LoadingIcon");
            return Un(), Vn("div", hi, [e3.reply ? Xn("v-if", true) : (Un(), Dn(i2, { key: 0, onSubmit: e3.onSubmit }, null, 8, ["onSubmit"])), Jn("div", vi, [e3.count ? (Un(), Vn("span", { key: 0, class: "vnum", textContent: p(e3.count) }, null, 8, fi)) : Xn("v-if", true), Yn(" " + p(e3.locale.comment), 1)]), Jn("div", mi, [(Un(true), Vn(Rn, null, no(e3.data, (t4) => (Un(), Dn(l2, { key: t4.objectId, "root-id": t4.objectId, comment: t4, reply: e3.reply, onReply: e3.onReply, onSubmit: e3.onSubmit }, null, 8, ["root-id", "comment", "reply", "onReply", "onSubmit"]))), 128))]), e3.inError ? (Un(), Vn("div", gi, [Jn("button", { type: "button", class: "vbtn", onClick: t3[0] || (t3[0] = function() {
              return e3.refresh && e3.refresh(...arguments);
            }), textContent: p(e3.locale.refresh) }, null, 8, bi)])) : e3.loading ? (Un(), Vn("div", wi, [Kn(s2, { size: 30 })])) : e3.data.length ? Xn("v-if", true) : (Un(), Vn("div", { key: 3, class: "vempty", textContent: p(e3.locale.sofa) }, null, 8, yi)), e3.page < e3.totalPages && !e3.loading ? (Un(), Vn("div", ki, [Jn("button", { type: "button", class: "vbtn", onClick: t3[1] || (t3[1] = function() {
              return e3.loadMore && e3.loadMore(...arguments);
            }), textContent: p(e3.locale.more) }, null, 8, xi)])) : Xn("v-if", true), e3.config.copyright ? (Un(), Vn("div", _i, [Si, Ci, Yn(" v" + p(e3.version), 1)])) : Xn("v-if", true)]);
          }]]), $l = jl;
          var Ml = n(62), Ul = n.n(Ml), Pl = n(36), Nl = n.n(Pl), Fl = n(793), Vl = n.n(Fl), Dl = n(892), Bl = n.n(Dl), ql = n(173), Hl = n.n(ql), Wl = n(464), Zl = n.n(Wl), Jl = n(523), Kl = {};
          Kl.styleTagTransform = Zl(), Kl.setAttributes = Bl(), Kl.insert = Vl().bind(null, "head"), Kl.domAPI = Nl(), Kl.insertStyleElement = Hl(), Ul()(Jl.Z, Kl), Jl.Z && Jl.Z.locals && Jl.Z.locals;
          class Ql {
            constructor() {
              var e3, t3;
              t3 = void 0, (e3 = "controller") in this ? Object.defineProperty(this, e3, { value: t3, enumerable: true, configurable: true, writable: true }) : this[e3] = t3, this.controller = new AbortController();
            }
            get signal() {
              return this.controller.signal;
            }
            abort() {
              this.controller.abort();
            }
            new() {
              this.abort(), this.controller = new AbortController();
            }
          }
          const Yl = (e3, t3) => {
            const { path: n2, serverURL: o2, visitor: r2 } = e3;
            r2 && ((e4) => {
              let { serverURL: t4, path: n3, signal: o3 } = e4;
              const r3 = ((e5) => {
                let { serverURL: t5, path: n4 } = e5;
                return fetch("".concat(t5, "/article"), { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ path: n4 }) }).then((e6) => e6.json()).then((e6) => Pr(e6, "visit count"));
              })({ serverURL: t4, path: n3 }), a2 = Array.from(document.querySelectorAll(".waline-visitor-count,.leancloud_visitors,.leancloud-visitors")).filter((e5) => e5.getAttribute("id")), i2 = a2.map((e5) => Nr(e5.getAttribute("id") || "")), l2 = i2.filter((e5) => e5 !== n3);
              l2.length ? (l2.length === i2.length ? Promise.resolve() : r3).then(() => ((e5) => {
                let { serverURL: t5, paths: n4, signal: o4 } = e5;
                return fetch("".concat(t5, "/article?path=").concat(encodeURIComponent(n4.join(","))), { signal: o4 }).then((e6) => e6.json()).then((e6) => Pr(e6, "visit count")).then((e6) => Array.isArray(e6) ? e6 : [e6]);
              })({ serverURL: t4, paths: i2, signal: o3 })).then((e5) => ii(e5, a2)).catch((e5) => {
                e5.name !== "AbortError" && console.error(e5.message);
              }) : r3.then((e5) => ii(new Array(a2.length).fill(e5), a2));
            })({ serverURL: o2, path: n2, signal: t3 }), ((e4, t4) => {
              var n3;
              const o3 = Array.from(document.querySelectorAll(".waline-comment-count")).filter((e5) => e5.getAttribute("data-xid") || e5.getAttribute("id")), { userInfo: r3 } = pi();
              o3.length && ((e5) => {
                let { serverURL: t5, paths: n4, signal: o4, token: r4 } = e5;
                const a2 = {};
                return r4 && (a2.Authorization = "Bearer ".concat(r4)), fetch("".concat(t5, "/comment?type=count&url=").concat(encodeURIComponent(n4.join(","))), { signal: o4, headers: a2 }).then((e6) => e6.json()).then((e6) => Pr(e6, "comment count")).then((e6) => Array.isArray(e6) ? e6 : [e6]);
              })({ serverURL: e4, paths: o3.map((e5) => Nr(e5.getAttribute("data-xid") || e5.getAttribute("id"))), signal: t4, token: (n3 = r3.value) === null || n3 === void 0 ? void 0 : n3.token }).then((e5) => {
                o3.forEach((t5, n4) => {
                  t5.innerText = e5[n4].toString();
                });
              }).catch((e5) => {
                e5.name !== "AbortError" && console.error(e5.message);
              });
            })(o2, t3);
          }, Xl = (e3) => (console.warn(e3), { errMsg: e3 });
          function Gl(e3) {
            const { el: t3, serverURL: n2 } = e3;
            if (!n2)
              return Xl("Option 'serverURL' is missing!");
            var o2;
            e3.dark && typeof (o2 = e3.dark) == "string" && va(o2 === "auto" ? "@media(prefers-color-scheme:dark){body".concat(ha, "}") : "".concat(o2).concat(ha), "waline-dark"), e3.mathTagSupport && window.addEventListener("load", fa);
            const r2 = new Ql(), a2 = new Ql(), i2 = function(e4) {
              return { all: e4 = e4 || /* @__PURE__ */ new Map(), on: function(t4, n3) {
                var o3 = e4.get(t4);
                o3 ? o3.push(n3) : e4.set(t4, [n3]);
              }, off: function(t4, n3) {
                var o3 = e4.get(t4);
                o3 && (n3 ? o3.splice(o3.indexOf(n3) >>> 0, 1) : e4.set(t4, []));
              }, emit: function(t4, n3) {
                var o3 = e4.get(t4);
                o3 && o3.slice().map(function(e5) {
                  e5(n3);
                }), (o3 = e4.get("*")) && o3.slice().map(function(e5) {
                  e5(t4, n3);
                });
              } };
            }(), { config: l2, update: s2 } = ((e4) => {
              let t4 = e4;
              const n3 = gt(ua(e4));
              return { config: at(n3), update: function() {
                let e5 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                t4 = __spreadValues(__spreadValues({}, t4), e5), n3.value = ua(t4);
              } };
            })(e3);
            Yl(l2.value, a2.signal);
            const c2 = ma(t3);
            if (t3 && !c2)
              return Xl("Option 'el' do not match any domElement!");
            let u2;
            c2 && (u2 = ((...e4) => {
              const t4 = (Ur || (Ur = _n(Mr))).createApp(...e4), { mount: n3 } = t4;
              return t4.mount = (e5) => {
                const o3 = function(e6) {
                  return L(e6) ? document.querySelector(e6) : e6;
                }(e5);
                if (!o3)
                  return;
                const r3 = t4._component;
                A(r3) || r3.render || r3.template || (r3.template = o3.innerHTML), o3.innerHTML = "";
                const a3 = n3(o3, false, o3 instanceof SVGElement);
                return o3 instanceof Element && (o3.removeAttribute("v-cloak"), o3.setAttribute("data-v-app", "")), a3;
              }, t4;
            })($l, { signal: r2.signal }).provide("config", l2).provide("event", i2).provide("version", "1.5.4"), u2.mount(c2));
            const d2 = { options: e3, path: l2.value.path };
            return { el: c2, update: (e4) => {
              s2(e4);
              const { path: t4 } = l2.value;
              d2.path !== t4 && (r2.new(), d2.path = t4, i2.emit("render", r2.signal)), a2.new(), Yl(l2.value, a2.signal);
            }, destroy: () => {
              t3 && u2.unmount();
            } };
          }
          Gl.Widget = { RecentComments: (e3) => {
            var t3;
            let { el: n2, serverURL: o2, count: r2 } = e3;
            const a2 = ma(n2), i2 = new AbortController(), { userInfo: l2 } = pi();
            return ((e4) => {
              let { serverURL: t4, count: n3, signal: o3, token: r3 } = e4;
              const a3 = {};
              return r3 && (a3.Authorization = "Bearer ".concat(r3)), fetch("".concat(t4, "/comment?type=recent&count=").concat(n3), { signal: o3, headers: a3 }).then((e5) => e5.json()).then((e5) => Pr(e5, "recent comment"));
            })({ serverURL: o2, count: r2, signal: i2.signal, token: (t3 = l2.value) === null || t3 === void 0 ? void 0 : t3.token }).then((e4) => a2 && e4.length ? (a2.innerHTML = '<ul class="waline-widget-list">'.concat(e4.map((e5) => '<li class="waline-widget-item"><a href="'.concat(e5.url, '">').concat(e5.nick, "</a>\uFF1A").concat(e5.comment, "</li>")).join(""), "</ul>"), { comments: e4, destroy: () => {
              i2.abort(), a2.innerHTML = "";
            } }) : { comments: e4, destroy: () => i2.abort() });
          } }, Gl.version = "1.5.4";
          const es = Gl;
        })(), o.default;
      })();
    });
  }
});

// dep:@waline_client
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
var waline_client_default = require_Waline_min();
export {
  waline_client_default as default
};
//# sourceMappingURL=@waline_client.js.map
