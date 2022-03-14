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

// node_modules/photoswipe/dist/photoswipe-ui-default.js
var require_photoswipe_ui_default = __commonJS({
  "node_modules/photoswipe/dist/photoswipe-ui-default.js"(exports, module) {
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
    (function(root, factory) {
      if (typeof define === "function" && define.amd) {
        define(factory);
      } else if (typeof exports === "object") {
        module.exports = factory();
      } else {
        root.PhotoSwipeUI_Default = factory();
      }
    })(exports, function() {
      "use strict";
      var PhotoSwipeUI_Default = function(pswp, framework) {
        var ui = this;
        var _overlayUIUpdated = false, _controlsVisible = true, _fullscrenAPI, _controls, _captionContainer, _fakeCaptionContainer, _indexIndicator, _shareButton, _shareModal, _shareModalHidden = true, _initalCloseOnScrollValue, _isIdle, _listen, _loadingIndicator, _loadingIndicatorHidden, _loadingIndicatorTimeout, _galleryHasOneSlide, _options, _defaultUIOptions = {
          barsSize: { top: 44, bottom: "auto" },
          closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
          timeToIdle: 4e3,
          timeToIdleOutside: 1e3,
          loadingIndicatorDelay: 1e3,
          addCaptionHTMLFn: function(item, captionEl) {
            if (!item.title) {
              captionEl.children[0].innerHTML = "";
              return false;
            }
            captionEl.children[0].innerHTML = item.title;
            return true;
          },
          closeEl: true,
          captionEl: true,
          fullscreenEl: true,
          zoomEl: true,
          shareEl: true,
          counterEl: true,
          arrowEl: true,
          preloaderEl: true,
          tapToClose: false,
          tapToToggleControls: true,
          clickToCloseNonZoomable: true,
          shareButtons: [
            { id: "facebook", label: "Share on Facebook", url: "https://www.facebook.com/sharer/sharer.php?u={{url}}" },
            { id: "twitter", label: "Tweet", url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}" },
            { id: "pinterest", label: "Pin it", url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}" },
            { id: "download", label: "Download image", url: "{{raw_image_url}}", download: true }
          ],
          getImageURLForShare: function() {
            return pswp.currItem.src || "";
          },
          getPageURLForShare: function() {
            return window.location.href;
          },
          getTextForShare: function() {
            return pswp.currItem.title || "";
          },
          indexIndicatorSep: " / ",
          fitControlsWidth: 1200
        }, _blockControlsTap, _blockControlsTapTimeout;
        var _onControlsTap = function(e) {
          if (_blockControlsTap) {
            return true;
          }
          e = e || window.event;
          if (_options.timeToIdle && _options.mouseUsed && !_isIdle) {
            _onIdleMouseMove();
          }
          var target = e.target || e.srcElement, uiElement, clickedClass = target.getAttribute("class") || "", found;
          for (var i = 0; i < _uiElements.length; i++) {
            uiElement = _uiElements[i];
            if (uiElement.onTap && clickedClass.indexOf("pswp__" + uiElement.name) > -1) {
              uiElement.onTap();
              found = true;
            }
          }
          if (found) {
            if (e.stopPropagation) {
              e.stopPropagation();
            }
            _blockControlsTap = true;
            var tapDelay = framework.features.isOldAndroid ? 600 : 30;
            _blockControlsTapTimeout = setTimeout(function() {
              _blockControlsTap = false;
            }, tapDelay);
          }
        }, _fitControlsInViewport = function() {
          return !pswp.likelyTouchDevice || _options.mouseUsed || screen.width > _options.fitControlsWidth;
        }, _togglePswpClass = function(el, cName, add) {
          framework[(add ? "add" : "remove") + "Class"](el, "pswp__" + cName);
        }, _countNumItems = function() {
          var hasOneSlide = _options.getNumItemsFn() === 1;
          if (hasOneSlide !== _galleryHasOneSlide) {
            _togglePswpClass(_controls, "ui--one-slide", hasOneSlide);
            _galleryHasOneSlide = hasOneSlide;
          }
        }, _toggleShareModalClass = function() {
          _togglePswpClass(_shareModal, "share-modal--hidden", _shareModalHidden);
        }, _toggleShareModal = function() {
          _shareModalHidden = !_shareModalHidden;
          if (!_shareModalHidden) {
            _toggleShareModalClass();
            setTimeout(function() {
              if (!_shareModalHidden) {
                framework.addClass(_shareModal, "pswp__share-modal--fade-in");
              }
            }, 30);
          } else {
            framework.removeClass(_shareModal, "pswp__share-modal--fade-in");
            setTimeout(function() {
              if (_shareModalHidden) {
                _toggleShareModalClass();
              }
            }, 300);
          }
          if (!_shareModalHidden) {
            _updateShareURLs();
          }
          return false;
        }, _openWindowPopup = function(e) {
          e = e || window.event;
          var target = e.target || e.srcElement;
          pswp.shout("shareLinkClick", e, target);
          if (!target.href) {
            return false;
          }
          if (target.hasAttribute("download")) {
            return true;
          }
          window.open(target.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100));
          if (!_shareModalHidden) {
            _toggleShareModal();
          }
          return false;
        }, _updateShareURLs = function() {
          var shareButtonOut = "", shareButtonData, shareURL, image_url, page_url, share_text;
          for (var i = 0; i < _options.shareButtons.length; i++) {
            shareButtonData = _options.shareButtons[i];
            image_url = _options.getImageURLForShare(shareButtonData);
            page_url = _options.getPageURLForShare(shareButtonData);
            share_text = _options.getTextForShare(shareButtonData);
            shareURL = shareButtonData.url.replace("{{url}}", encodeURIComponent(page_url)).replace("{{image_url}}", encodeURIComponent(image_url)).replace("{{raw_image_url}}", image_url).replace("{{text}}", encodeURIComponent(share_text));
            shareButtonOut += '<a href="' + shareURL + '" target="_blank" class="pswp__share--' + shareButtonData.id + '"' + (shareButtonData.download ? "download" : "") + ">" + shareButtonData.label + "</a>";
            if (_options.parseShareButtonOut) {
              shareButtonOut = _options.parseShareButtonOut(shareButtonData, shareButtonOut);
            }
          }
          _shareModal.children[0].innerHTML = shareButtonOut;
          _shareModal.children[0].onclick = _openWindowPopup;
        }, _hasCloseClass = function(target) {
          for (var i = 0; i < _options.closeElClasses.length; i++) {
            if (framework.hasClass(target, "pswp__" + _options.closeElClasses[i])) {
              return true;
            }
          }
        }, _idleInterval, _idleTimer, _idleIncrement = 0, _onIdleMouseMove = function() {
          clearTimeout(_idleTimer);
          _idleIncrement = 0;
          if (_isIdle) {
            ui.setIdle(false);
          }
        }, _onMouseLeaveWindow = function(e) {
          e = e ? e : window.event;
          var from = e.relatedTarget || e.toElement;
          if (!from || from.nodeName === "HTML") {
            clearTimeout(_idleTimer);
            _idleTimer = setTimeout(function() {
              ui.setIdle(true);
            }, _options.timeToIdleOutside);
          }
        }, _setupFullscreenAPI = function() {
          if (_options.fullscreenEl && !framework.features.isOldAndroid) {
            if (!_fullscrenAPI) {
              _fullscrenAPI = ui.getFullscreenAPI();
            }
            if (_fullscrenAPI) {
              framework.bind(document, _fullscrenAPI.eventK, ui.updateFullscreen);
              ui.updateFullscreen();
              framework.addClass(pswp.template, "pswp--supports-fs");
            } else {
              framework.removeClass(pswp.template, "pswp--supports-fs");
            }
          }
        }, _setupLoadingIndicator = function() {
          if (_options.preloaderEl) {
            _toggleLoadingIndicator(true);
            _listen("beforeChange", function() {
              clearTimeout(_loadingIndicatorTimeout);
              _loadingIndicatorTimeout = setTimeout(function() {
                if (pswp.currItem && pswp.currItem.loading) {
                  if (!pswp.allowProgressiveImg() || pswp.currItem.img && !pswp.currItem.img.naturalWidth) {
                    _toggleLoadingIndicator(false);
                  }
                } else {
                  _toggleLoadingIndicator(true);
                }
              }, _options.loadingIndicatorDelay);
            });
            _listen("imageLoadComplete", function(index, item) {
              if (pswp.currItem === item) {
                _toggleLoadingIndicator(true);
              }
            });
          }
        }, _toggleLoadingIndicator = function(hide) {
          if (_loadingIndicatorHidden !== hide) {
            _togglePswpClass(_loadingIndicator, "preloader--active", !hide);
            _loadingIndicatorHidden = hide;
          }
        }, _applyNavBarGaps = function(item) {
          var gap = item.vGap;
          if (_fitControlsInViewport()) {
            var bars = _options.barsSize;
            if (_options.captionEl && bars.bottom === "auto") {
              if (!_fakeCaptionContainer) {
                _fakeCaptionContainer = framework.createEl("pswp__caption pswp__caption--fake");
                _fakeCaptionContainer.appendChild(framework.createEl("pswp__caption__center"));
                _controls.insertBefore(_fakeCaptionContainer, _captionContainer);
                framework.addClass(_controls, "pswp__ui--fit");
              }
              if (_options.addCaptionHTMLFn(item, _fakeCaptionContainer, true)) {
                var captionSize = _fakeCaptionContainer.clientHeight;
                gap.bottom = parseInt(captionSize, 10) || 44;
              } else {
                gap.bottom = bars.top;
              }
            } else {
              gap.bottom = bars.bottom === "auto" ? 0 : bars.bottom;
            }
            gap.top = bars.top;
          } else {
            gap.top = gap.bottom = 0;
          }
        }, _setupIdle = function() {
          if (_options.timeToIdle) {
            _listen("mouseUsed", function() {
              framework.bind(document, "mousemove", _onIdleMouseMove);
              framework.bind(document, "mouseout", _onMouseLeaveWindow);
              _idleInterval = setInterval(function() {
                _idleIncrement++;
                if (_idleIncrement === 2) {
                  ui.setIdle(true);
                }
              }, _options.timeToIdle / 2);
            });
          }
        }, _setupHidingControlsDuringGestures = function() {
          _listen("onVerticalDrag", function(now) {
            if (_controlsVisible && now < 0.95) {
              ui.hideControls();
            } else if (!_controlsVisible && now >= 0.95) {
              ui.showControls();
            }
          });
          var pinchControlsHidden;
          _listen("onPinchClose", function(now) {
            if (_controlsVisible && now < 0.9) {
              ui.hideControls();
              pinchControlsHidden = true;
            } else if (pinchControlsHidden && !_controlsVisible && now > 0.9) {
              ui.showControls();
            }
          });
          _listen("zoomGestureEnded", function() {
            pinchControlsHidden = false;
            if (pinchControlsHidden && !_controlsVisible) {
              ui.showControls();
            }
          });
        };
        var _uiElements = [
          {
            name: "caption",
            option: "captionEl",
            onInit: function(el) {
              _captionContainer = el;
            }
          },
          {
            name: "share-modal",
            option: "shareEl",
            onInit: function(el) {
              _shareModal = el;
            },
            onTap: function() {
              _toggleShareModal();
            }
          },
          {
            name: "button--share",
            option: "shareEl",
            onInit: function(el) {
              _shareButton = el;
            },
            onTap: function() {
              _toggleShareModal();
            }
          },
          {
            name: "button--zoom",
            option: "zoomEl",
            onTap: pswp.toggleDesktopZoom
          },
          {
            name: "counter",
            option: "counterEl",
            onInit: function(el) {
              _indexIndicator = el;
            }
          },
          {
            name: "button--close",
            option: "closeEl",
            onTap: pswp.close
          },
          {
            name: "button--arrow--left",
            option: "arrowEl",
            onTap: pswp.prev
          },
          {
            name: "button--arrow--right",
            option: "arrowEl",
            onTap: pswp.next
          },
          {
            name: "button--fs",
            option: "fullscreenEl",
            onTap: function() {
              if (_fullscrenAPI.isFullscreen()) {
                _fullscrenAPI.exit();
              } else {
                _fullscrenAPI.enter();
              }
            }
          },
          {
            name: "preloader",
            option: "preloaderEl",
            onInit: function(el) {
              _loadingIndicator = el;
            }
          }
        ];
        var _setupUIElements = function() {
          var item, classAttr, uiElement;
          var loopThroughChildElements = function(sChildren) {
            if (!sChildren) {
              return;
            }
            var l = sChildren.length;
            for (var i = 0; i < l; i++) {
              item = sChildren[i];
              classAttr = item.className;
              for (var a = 0; a < _uiElements.length; a++) {
                uiElement = _uiElements[a];
                if (classAttr.indexOf("pswp__" + uiElement.name) > -1) {
                  if (_options[uiElement.option]) {
                    framework.removeClass(item, "pswp__element--disabled");
                    if (uiElement.onInit) {
                      uiElement.onInit(item);
                    }
                  } else {
                    framework.addClass(item, "pswp__element--disabled");
                  }
                }
              }
            }
          };
          loopThroughChildElements(_controls.children);
          var topBar = framework.getChildByClass(_controls, "pswp__top-bar");
          if (topBar) {
            loopThroughChildElements(topBar.children);
          }
        };
        ui.init = function() {
          framework.extend(pswp.options, _defaultUIOptions, true);
          _options = pswp.options;
          _controls = framework.getChildByClass(pswp.scrollWrap, "pswp__ui");
          _listen = pswp.listen;
          _setupHidingControlsDuringGestures();
          _listen("beforeChange", ui.update);
          _listen("doubleTap", function(point) {
            var initialZoomLevel = pswp.currItem.initialZoomLevel;
            if (pswp.getZoomLevel() !== initialZoomLevel) {
              pswp.zoomTo(initialZoomLevel, point, 333);
            } else {
              pswp.zoomTo(_options.getDoubleTapZoom(false, pswp.currItem), point, 333);
            }
          });
          _listen("preventDragEvent", function(e, isDown, preventObj) {
            var t = e.target || e.srcElement;
            if (t && t.getAttribute("class") && e.type.indexOf("mouse") > -1 && (t.getAttribute("class").indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(t.tagName))) {
              preventObj.prevent = false;
            }
          });
          _listen("bindEvents", function() {
            framework.bind(_controls, "pswpTap click", _onControlsTap);
            framework.bind(pswp.scrollWrap, "pswpTap", ui.onGlobalTap);
            if (!pswp.likelyTouchDevice) {
              framework.bind(pswp.scrollWrap, "mouseover", ui.onMouseOver);
            }
          });
          _listen("unbindEvents", function() {
            if (!_shareModalHidden) {
              _toggleShareModal();
            }
            if (_idleInterval) {
              clearInterval(_idleInterval);
            }
            framework.unbind(document, "mouseout", _onMouseLeaveWindow);
            framework.unbind(document, "mousemove", _onIdleMouseMove);
            framework.unbind(_controls, "pswpTap click", _onControlsTap);
            framework.unbind(pswp.scrollWrap, "pswpTap", ui.onGlobalTap);
            framework.unbind(pswp.scrollWrap, "mouseover", ui.onMouseOver);
            if (_fullscrenAPI) {
              framework.unbind(document, _fullscrenAPI.eventK, ui.updateFullscreen);
              if (_fullscrenAPI.isFullscreen()) {
                _options.hideAnimationDuration = 0;
                _fullscrenAPI.exit();
              }
              _fullscrenAPI = null;
            }
          });
          _listen("destroy", function() {
            if (_options.captionEl) {
              if (_fakeCaptionContainer) {
                _controls.removeChild(_fakeCaptionContainer);
              }
              framework.removeClass(_captionContainer, "pswp__caption--empty");
            }
            if (_shareModal) {
              _shareModal.children[0].onclick = null;
            }
            framework.removeClass(_controls, "pswp__ui--over-close");
            framework.addClass(_controls, "pswp__ui--hidden");
            ui.setIdle(false);
          });
          if (!_options.showAnimationDuration) {
            framework.removeClass(_controls, "pswp__ui--hidden");
          }
          _listen("initialZoomIn", function() {
            if (_options.showAnimationDuration) {
              framework.removeClass(_controls, "pswp__ui--hidden");
            }
          });
          _listen("initialZoomOut", function() {
            framework.addClass(_controls, "pswp__ui--hidden");
          });
          _listen("parseVerticalMargin", _applyNavBarGaps);
          _setupUIElements();
          if (_options.shareEl && _shareButton && _shareModal) {
            _shareModalHidden = true;
          }
          _countNumItems();
          _setupIdle();
          _setupFullscreenAPI();
          _setupLoadingIndicator();
        };
        ui.setIdle = function(isIdle) {
          _isIdle = isIdle;
          _togglePswpClass(_controls, "ui--idle", isIdle);
        };
        ui.update = function() {
          if (_controlsVisible && pswp.currItem) {
            ui.updateIndexIndicator();
            if (_options.captionEl) {
              _options.addCaptionHTMLFn(pswp.currItem, _captionContainer);
              _togglePswpClass(_captionContainer, "caption--empty", !pswp.currItem.title);
            }
            _overlayUIUpdated = true;
          } else {
            _overlayUIUpdated = false;
          }
          if (!_shareModalHidden) {
            _toggleShareModal();
          }
          _countNumItems();
        };
        ui.updateFullscreen = function(e) {
          if (e) {
            setTimeout(function() {
              pswp.setScrollOffset(0, framework.getScrollY());
            }, 50);
          }
          framework[(_fullscrenAPI.isFullscreen() ? "add" : "remove") + "Class"](pswp.template, "pswp--fs");
        };
        ui.updateIndexIndicator = function() {
          if (_options.counterEl) {
            _indexIndicator.innerHTML = pswp.getCurrentIndex() + 1 + _options.indexIndicatorSep + _options.getNumItemsFn();
          }
        };
        ui.onGlobalTap = function(e) {
          e = e || window.event;
          var target = e.target || e.srcElement;
          if (_blockControlsTap) {
            return;
          }
          if (e.detail && e.detail.pointerType === "mouse") {
            if (_hasCloseClass(target)) {
              pswp.close();
              return;
            }
            if (framework.hasClass(target, "pswp__img")) {
              if (pswp.getZoomLevel() === 1 && pswp.getZoomLevel() <= pswp.currItem.fitRatio) {
                if (_options.clickToCloseNonZoomable) {
                  pswp.close();
                }
              } else {
                pswp.toggleDesktopZoom(e.detail.releasePoint);
              }
            }
          } else {
            if (_options.tapToToggleControls) {
              if (_controlsVisible) {
                ui.hideControls();
              } else {
                ui.showControls();
              }
            }
            if (_options.tapToClose && (framework.hasClass(target, "pswp__img") || _hasCloseClass(target))) {
              pswp.close();
              return;
            }
          }
        };
        ui.onMouseOver = function(e) {
          e = e || window.event;
          var target = e.target || e.srcElement;
          _togglePswpClass(_controls, "ui--over-close", _hasCloseClass(target));
        };
        ui.hideControls = function() {
          framework.addClass(_controls, "pswp__ui--hidden");
          _controlsVisible = false;
        };
        ui.showControls = function() {
          _controlsVisible = true;
          if (!_overlayUIUpdated) {
            ui.update();
          }
          framework.removeClass(_controls, "pswp__ui--hidden");
        };
        ui.supportsFullscreen = function() {
          var d = document;
          return !!(d.exitFullscreen || d.mozCancelFullScreen || d.webkitExitFullscreen || d.msExitFullscreen);
        };
        ui.getFullscreenAPI = function() {
          var dE = document.documentElement, api, tF = "fullscreenchange";
          if (dE.requestFullscreen) {
            api = {
              enterK: "requestFullscreen",
              exitK: "exitFullscreen",
              elementK: "fullscreenElement",
              eventK: tF
            };
          } else if (dE.mozRequestFullScreen) {
            api = {
              enterK: "mozRequestFullScreen",
              exitK: "mozCancelFullScreen",
              elementK: "mozFullScreenElement",
              eventK: "moz" + tF
            };
          } else if (dE.webkitRequestFullscreen) {
            api = {
              enterK: "webkitRequestFullscreen",
              exitK: "webkitExitFullscreen",
              elementK: "webkitFullscreenElement",
              eventK: "webkit" + tF
            };
          } else if (dE.msRequestFullscreen) {
            api = {
              enterK: "msRequestFullscreen",
              exitK: "msExitFullscreen",
              elementK: "msFullscreenElement",
              eventK: "MSFullscreenChange"
            };
          }
          if (api) {
            api.enter = function() {
              _initalCloseOnScrollValue = _options.closeOnScroll;
              _options.closeOnScroll = false;
              if (this.enterK === "webkitRequestFullscreen") {
                pswp.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT);
              } else {
                return pswp.template[this.enterK]();
              }
            };
            api.exit = function() {
              _options.closeOnScroll = _initalCloseOnScrollValue;
              return document[this.exitK]();
            };
            api.isFullscreen = function() {
              return document[this.elementK];
            };
          }
          return api;
        };
      };
      return PhotoSwipeUI_Default;
    });
  }
});

// dep:photoswipe_dist_photoswipe-ui-default
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
var photoswipe_dist_photoswipe_ui_default_default = require_photoswipe_ui_default();
export {
  photoswipe_dist_photoswipe_ui_default_default as default
};
/*! PhotoSwipe Default UI - 4.1.3 - 2019-01-08
* http://photoswipe.com
* Copyright (c) 2019 Dmitry Semenov; */
//# sourceMappingURL=photoswipe_dist_photoswipe-ui-default.js.map
