/*! jQuery Migrate v3.3.2 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
  (function(t) {
    "use strict";
    "function" == typeof define && define.amd ?
      define(["jquery"], function(e) {
        return t(e, window);
      }) :
      "object" == typeof module && module.exports ?
      (module.exports = t(require("jquery"), window)) :
      t(jQuery, window);
  })(function(s, n) {
    "use strict";

    function e(e) {
      return (
        0 <=
        (function(e, t) {
          for (var r = /^(\d+)\.(\d+)\.(\d+)/, n = r.exec(e) || [], o = r.exec(t) || [], i = 1; i <= 3; i++) {
            if (+o[i] < +n[i]) return 1;
            if (+n[i] < +o[i]) return -1;
          }
          return 0;
        })(s.fn.jquery, e)
      );
    }
    (s.migrateVersion = "3.3.2"),
    n.console &&
      n.console.log &&
      ((s && e("3.0.0")) || n.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),
        s.migrateWarnings && n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),
        n.console.log("JQMIGRATE: Migrate is installed" + (s.migrateMute ? "" : " with logging active") + ", version " + s.migrateVersion));
    var r = {};

    function u(e) {
      var t = n.console;
      (s.migrateDeduplicateWarnings && r[e]) || ((r[e] = !0), s.migrateWarnings.push(e), t && t.warn && !s.migrateMute && (t.warn("JQMIGRATE: " + e), s.migrateTrace && t.trace && t.trace()));
    }

    function t(e, t, r, n) {
      Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !0,
        get: function() {
          return u(n), r;
        },
        set: function(e) {
          u(n), (r = e);
        },
      });
    }

    function o(e, t, r, n) {
      e[t] = function() {
        return u(n), r.apply(this, arguments);
      };
    }
    (s.migrateDeduplicateWarnings = !0),
    (s.migrateWarnings = []),
    void 0 === s.migrateTrace && (s.migrateTrace = !0),
      (s.migrateReset = function() {
        (r = {}), (s.migrateWarnings.length = 0);
      }),
      "BackCompat" === n.document.compatMode && u("jQuery is not compatible with Quirks Mode");
    var i,
      a,
      c,
      d = {},
      l = s.fn.init,
      p = s.find,
      f = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
      y = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
      m = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    for (i in ((s.fn.init = function(e) {
          var t = Array.prototype.slice.call(arguments);
          return "string" == typeof e && "#" === e && (u("jQuery( '#' ) is not a valid selector"), (t[0] = [])), l.apply(this, t);
        }),
        (s.fn.init.prototype = s.fn),
        (s.find = function(t) {
          var r = Array.prototype.slice.call(arguments);
          if ("string" == typeof t && f.test(t))
            try {
              n.document.querySelector(t);
            } catch (e) {
              t = t.replace(y, function(e, t, r, n) {
                return "[" + t + r + '"' + n + '"]';
              });
              try {
                n.document.querySelector(t), u("Attribute selector with '#' must be quoted: " + r[0]), (r[0] = t);
              } catch (e) {
                u("Attribute selector with '#' was not fixed: " + r[0]);
              }
            }
          return p.apply(this, r);
        }),
        p))
      Object.prototype.hasOwnProperty.call(p, i) && (s.find[i] = p[i]);
    o(
        s.fn,
        "size",
        function() {
          return this.length;
        },
        "jQuery.fn.size() is deprecated and removed; use the .length property"
      ),
      o(
        s,
        "parseJSON",
        function() {
          return JSON.parse.apply(null, arguments);
        },
        "jQuery.parseJSON is deprecated; use JSON.parse"
      ),
      o(s, "holdReady", s.holdReady, "jQuery.holdReady is deprecated"),
      o(s, "unique", s.uniqueSort, "jQuery.unique is deprecated; use jQuery.uniqueSort"),
      t(s.expr, "filters", s.expr.pseudos, "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"),
      t(s.expr, ":", s.expr.pseudos, "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"),
      e("3.1.1") &&
      o(
        s,
        "trim",
        function(e) {
          return null == e ? "" : (e + "").replace(m, "");
        },
        "jQuery.trim is deprecated; use String.prototype.trim"
      ),
      e("3.2.0") &&
      (o(
          s,
          "nodeName",
          function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          },
          "jQuery.nodeName is deprecated"
        ),
        o(s, "isArray", Array.isArray, "jQuery.isArray is deprecated; use Array.isArray")),
      e("3.3.0") &&
      (o(
          s,
          "isNumeric",
          function(e) {
            var t = typeof e;
            return ("number" == t || "string" == t) && !isNaN(e - parseFloat(e));
          },
          "jQuery.isNumeric() is deprecated"
        ),
        s.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
          d["[object " + t + "]"] = t.toLowerCase();
        }),
        o(
          s,
          "type",
          function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? d[Object.prototype.toString.call(e)] || "object" : typeof e;
          },
          "jQuery.type is deprecated"
        ),
        o(
          s,
          "isFunction",
          function(e) {
            return "function" == typeof e;
          },
          "jQuery.isFunction() is deprecated"
        ),
        o(
          s,
          "isWindow",
          function(e) {
            return null != e && e === e.window;
          },
          "jQuery.isWindow() is deprecated"
        )),
      s.ajax &&
      ((a = s.ajax),
        (c = /(=)\?(?=&|$)|\?\?/),
        (s.ajax = function() {
          var e = a.apply(this, arguments);
          return (
            e.promise &&
            (o(e, "success", e.done, "jQXHR.success is deprecated and removed"), o(e, "error", e.fail, "jQXHR.error is deprecated and removed"), o(e, "complete", e.always, "jQXHR.complete is deprecated and removed")),
            e
          );
        }),
        e("4.0.0") ||
        s.ajaxPrefilter("+json", function(e) {
          !1 !== e.jsonp && (c.test(e.url) || ("string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && c.test(e.data))) && u("JSON-to-JSONP auto-promotion is deprecated");
        }));
    var g = s.fn.removeAttr,
      h = s.fn.toggleClass,
      v = /\S+/g;

    function j(e) {
      return e.replace(/-([a-z])/g, function(e, t) {
        return t.toUpperCase();
      });
    }
    s.fn.removeAttr = function(e) {
      var r = this;
      return (
        s.each(e.match(v), function(e, t) {
          s.expr.match.bool.test(t) && (u("jQuery.fn.removeAttr no longer sets boolean properties: " + t), r.prop(t, !1));
        }),
        g.apply(this, arguments)
      );
    };
    var Q,
      b = !(s.fn.toggleClass = function(t) {
        return void 0 !== t && "boolean" != typeof t ?
          h.apply(this, arguments) :
          (u("jQuery.fn.toggleClass( boolean ) is deprecated"),
            this.each(function() {
              var e = (this.getAttribute && this.getAttribute("class")) || "";
              e && s.data(this, "__className__", e), this.setAttribute && this.setAttribute("class", (!e && !1 !== t && s.data(this, "__className__")) || "");
            }));
      }),
      w = /^[a-z]/,
      x = /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
    s.swap &&
      s.each(["height", "width", "reliableMarginRight"], function(e, t) {
        var r = s.cssHooks[t] && s.cssHooks[t].get;
        r &&
          (s.cssHooks[t].get = function() {
            var e;
            return (b = !0), (e = r.apply(this, arguments)), (b = !1), e;
          });
      }),
      (s.swap = function(e, t, r, n) {
        var o,
          i,
          a = {};
        for (i in (b || u("jQuery.swap() is undocumented and deprecated"), t))(a[i] = e.style[i]), (e.style[i] = t[i]);
        for (i in ((o = r.apply(e, n || [])), t)) e.style[i] = a[i];
        return o;
      }),
      e("3.4.0") &&
      "undefined" != typeof Proxy &&
      (s.cssProps = new Proxy(s.cssProps || {}, {
        set: function() {
          return u("JQMIGRATE: jQuery.cssProps is deprecated"), Reflect.set.apply(this, arguments);
        },
      })),
      s.cssNumber || (s.cssNumber = {}),
      (Q = s.fn.css),
      (s.fn.css = function(e, t) {
        var r,
          n,
          o = this;
        return e && "object" == typeof e && !Array.isArray(e) ?
          (s.each(e, function(e, t) {
              s.fn.css.call(o, e, t);
            }),
            this) :
          ("number" == typeof t && ((r = j(e)), (n = r), (w.test(n) && x.test(n[0].toUpperCase() + n.slice(1))) || s.cssNumber[r] || u('Number-typed values are deprecated for jQuery.fn.css( "' + e + '", value )')),
            Q.apply(this, arguments));
      });
    var A,
      k,
      S,
      M,
      N = s.data;
    (s.data = function(e, t, r) {
      var n, o, i;
      if (t && "object" == typeof t && 2 === arguments.length) {
        for (i in ((n = s.hasData(e) && N.call(this, e)), (o = {}), t)) i !== j(i) ? (u("jQuery.data() always sets/gets camelCased names: " + i), (n[i] = t[i])) : (o[i] = t[i]);
        return N.call(this, e, o), t;
      }
      return t && "string" == typeof t && t !== j(t) && (n = s.hasData(e) && N.call(this, e)) && t in n ?
        (u("jQuery.data() always sets/gets camelCased names: " + t), 2 < arguments.length && (n[t] = r), n[t]) :
        N.apply(this, arguments);
    }),
    s.fx &&
      ((S = s.Tween.prototype.run),
        (M = function(e) {
          return e;
        }),
        (s.Tween.prototype.run = function() {
          1 < s.easing[this.easing].length && (u("'jQuery.easing." + this.easing.toString() + "' should use only one argument"), (s.easing[this.easing] = M)), S.apply(this, arguments);
        }),
        (A = s.fx.interval || 13),
        (k = "jQuery.fx.interval is deprecated"),
        n.requestAnimationFrame &&
        Object.defineProperty(s.fx, "interval", {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return n.document.hidden || u(k), A;
          },
          set: function(e) {
            u(k), (A = e);
          },
        }));
    var R = s.fn.load,
      H = s.event.add,
      C = s.event.fix;
    (s.event.props = []),
    (s.event.fixHooks = {}),
    t(s.event.props, "concat", s.event.props.concat, "jQuery.event.props.concat() is deprecated and removed"),
      (s.event.fix = function(e) {
        var t,
          r = e.type,
          n = this.fixHooks[r],
          o = s.event.props;
        if (o.length) {
          u("jQuery.event.props are deprecated and removed: " + o.join());
          while (o.length) s.event.addProp(o.pop());
        }
        if (n && !n._migrated_ && ((n._migrated_ = !0), u("jQuery.event.fixHooks are deprecated and removed: " + r), (o = n.props) && o.length))
          while (o.length) s.event.addProp(o.pop());
        return (t = C.call(this, e)), n && n.filter ? n.filter(t, e) : t;
      }),
      (s.event.add = function(e, t) {
        return e === n && "load" === t && "complete" === n.document.readyState && u("jQuery(window).on('load'...) called after load event occurred"), H.apply(this, arguments);
      }),
      s.each(["load", "unload", "error"], function(e, t) {
        s.fn[t] = function() {
          var e = Array.prototype.slice.call(arguments, 0);
          return "load" === t && "string" == typeof e[0] ? R.apply(this, e) : (u("jQuery.fn." + t + "() is deprecated"), e.splice(0, 0, t), arguments.length ? this.on.apply(this, e) : (this.triggerHandler.apply(this, e), this));
        };
      }),
      s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, r) {
        s.fn[r] = function(e, t) {
          return u("jQuery.fn." + r + "() event shorthand is deprecated"), 0 < arguments.length ? this.on(r, null, e, t) : this.trigger(r);
        };
      }),
      s(function() {
        s(n.document).triggerHandler("ready");
      }),
      (s.event.special.ready = {
        setup: function() {
          this === n.document && u("'ready' event is deprecated");
        },
      }),
      s.fn.extend({
        bind: function(e, t, r) {
          return u("jQuery.fn.bind() is deprecated"), this.on(e, null, t, r);
        },
        unbind: function(e, t) {
          return u("jQuery.fn.unbind() is deprecated"), this.off(e, null, t);
        },
        delegate: function(e, t, r, n) {
          return u("jQuery.fn.delegate() is deprecated"), this.on(t, e, r, n);
        },
        undelegate: function(e, t, r) {
          return u("jQuery.fn.undelegate() is deprecated"), 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", r);
        },
        hover: function(e, t) {
          return u("jQuery.fn.hover() is deprecated"), this.on("mouseenter", e).on("mouseleave", t || e);
        },
      });

    function T(e) {
      var t = n.document.implementation.createHTMLDocument("");
      return (t.body.innerHTML = e), t.body && t.body.innerHTML;
    }

    function P(e) {
      var t = e.replace(O, "<$1></$2>");
      t !== e && T(e) !== T(t) && u("HTML tags must be properly nested and closed: " + e);
    }
    var O = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      q = s.htmlPrefilter;
    (s.UNSAFE_restoreLegacyHtmlPrefilter = function() {
      s.htmlPrefilter = function(e) {
        return P(e), e.replace(O, "<$1></$2>");
      };
    }),
    (s.htmlPrefilter = function(e) {
      return P(e), q(e);
    });
    var D,
      _ = s.fn.offset;
    (s.fn.offset = function() {
      var e = this[0];
      return !e || (e.nodeType && e.getBoundingClientRect) ? _.apply(this, arguments) : (u("jQuery.fn.offset() requires a valid DOM element"), arguments.length ? this : void 0);
    }),
    s.ajax &&
      ((D = s.param),
        (s.param = function(e, t) {
          var r = s.ajaxSettings && s.ajaxSettings.traditional;
          return void 0 === t && r && (u("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"), (t = r)), D.call(this, e, t);
        }));
    var E,
      F,
      J = s.fn.andSelf || s.fn.addBack;
    return (
      (s.fn.andSelf = function() {
        return u("jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"), J.apply(this, arguments);
      }),
      s.Deferred &&
      ((E = s.Deferred),
        (F = [
          ["resolve", "done", s.Callbacks("once memory"), s.Callbacks("once memory"), "resolved"],
          ["reject", "fail", s.Callbacks("once memory"), s.Callbacks("once memory"), "rejected"],
          ["notify", "progress", s.Callbacks("memory"), s.Callbacks("memory")],
        ]),
        (s.Deferred = function(e) {
          var i = E(),
            a = i.promise();
          return (
            (i.pipe = a.pipe = function() {
              var o = arguments;
              return (
                u("deferred.pipe() is deprecated"),
                s
                .Deferred(function(n) {
                  s.each(F, function(e, t) {
                      var r = "function" == typeof o[e] && o[e];
                      i[t[1]](function() {
                        var e = r && r.apply(this, arguments);
                        e && "function" == typeof e.promise ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[t[0] + "With"](this === a ? n.promise() : this, r ? [e] : arguments);
                      });
                    }),
                    (o = null);
                })
                .promise()
              );
            }),
            e && e.call(i, i),
            i
          );
        }),
        (s.Deferred.exceptionHook = E.exceptionHook)),
      s
    );
  });
(function($) {
  "use strict";
  $(window).on("elementor/frontend/init", function() {
    elementorFrontend.hooks.addAction("frontend/element_ready/myour-started-section.default", function() {
      if ($(".typed-subtitle").length && $(".h-subtitle p").length > 1) {
        $(".typed-subtitle").each(function() {
          $(this).typed({
            stringsElement: $(this).prev(".typing-subtitle"),
            loop: true
          });
        });
      }
    });
    elementorFrontend.hooks.addAction("frontend/element_ready/global", function($scope) {
      if ($(".content-carousel").length) {
        var $carousel = $(".owl-carousel");
        $carousel.each(function() {
          var $this = $(this);
          var slidesview = $this.data("slidesview");
          var slidesview_mobile = $this.data("slidesview_mobile");
          $this.owlCarousel({
            margin: 40,
            items: slidesview,
            autoplay: false,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            loop: false,
            rewind: true,
            nav: false,
            dots: false,
            responsive: {
              0: {
                margin: 40,
                items: slidesview_mobile
              },
              720: {
                margin: 40,
                items: slidesview
              },
              1200: {
                margin: 40,
                items: slidesview
              }
            },
          });
        });
      }
    });
    elementorFrontend.hooks.addAction("frontend/element_ready/widget", function($scope) {});
  });
})(jQuery);
!(function(e) {
  var t = {};

  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = {
      i: r,
      l: !1,
      exports: {}
    });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
  (n.c = t),
  (n.d = function(e, t, r) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: r
    });
  }),
  (n.r = function(e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }),
  (n.t = function(e, t) {
    if ((1 & t && (e = n(e)), 8 & t)) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var r = Object.create(null);
    if ((n.r(r), Object.defineProperty(r, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e))
      for (var o in e)
        n.d(
          r,
          o,
          function(t) {
            return e[t];
          }.bind(null, o)
        );
    return r;
  }),
  (n.n = function(e) {
    var t =
      e && e.__esModule ?
      function() {
        return e.default;
      } :
      function() {
        return e;
      };
    return n.d(t, "a", t), t;
  }),
  (n.o = function(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }),
  (n.p = ""),
  n((n.s = 3));
})([
  function(e, t) {
    (e.exports = function(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : (e[t] = n), e;
    }),
    (e.exports.default = e.exports),
    (e.exports.__esModule = !0);
  },
  function(e, t, n) {
    var r = n(2);
    (e.exports = function(e, t) {
      if (null == e) return {};
      var n,
        o,
        a = r(e, t);
      if (Object.getOwnPropertySymbols) {
        var c = Object.getOwnPropertySymbols(e);
        for (o = 0; o < c.length; o++)(n = c[o]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]));
      }
      return a;
    }),
    (e.exports.default = e.exports),
    (e.exports.__esModule = !0);
  },
  function(e, t) {
    (e.exports = function(e, t) {
      if (null == e) return {};
      var n,
        r,
        o = {},
        a = Object.keys(e);
      for (r = 0; r < a.length; r++)(n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
      return o;
    }),
    (e.exports.default = e.exports),
    (e.exports.__esModule = !0);
  },
  function(e, t, n) {
    "use strict";
    n.r(t);
    var r = function(e) {
        return Math.abs(parseInt(e, 10));
      },
      o = function(e, t) {
        var n = new Map([
          ["init", "init"],
          ["validation_failed", "invalid"],
          ["acceptance_missing", "unaccepted"],
          ["spam", "spam"],
          ["aborted", "aborted"],
          ["mail_sent", "sent"],
          ["mail_failed", "failed"],
          ["submitting", "submitting"],
          ["resetting", "resetting"],
        ]);
        n.has(t) && (t = n.get(t)), Array.from(n.values()).includes(t) || ((t = (t = t.replace(/[^0-9a-z]+/i, " ").trim()).replace(/\s+/, "-")), (t = "custom-".concat(t)));
        var r = e.getAttribute("data-status");
        return (e.wpcf7.status = t), e.setAttribute("data-status", t), e.classList.add(t), r && r !== t && e.classList.remove(r), t;
      },
      a = function(e, t, n) {
        var r = new CustomEvent("wpcf7".concat(t), {
          bubbles: !0,
          detail: n
        });
        "string" == typeof e && (e = document.querySelector(e)), e.dispatchEvent(r);
      },
      c = n(0),
      i = n.n(c),
      s = n(1),
      u = n.n(s);

    function l(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }

    function f(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ?
          l(Object(n), !0).forEach(function(t) {
            i()(e, t, n[t]);
          }) :
          Object.getOwnPropertyDescriptors ?
          Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) :
          l(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
      }
      return e;
    }
    var p = function(e) {
        var t = wpcf7.api,
          n = t.root,
          r = t.namespace,
          o = void 0 === r ? "contact-form-7/v1" : r;
        return d.reduceRight(
          function(e, t) {
            return function(n) {
              return t(n, e);
            };
          },
          function(e) {
            var t,
              r,
              a = e.url,
              c = e.path,
              i = e.endpoint,
              s = e.headers,
              l = e.body,
              p = e.data,
              d = u()(e, ["url", "path", "endpoint", "headers", "body", "data"]);
            "string" == typeof i && ((t = o.replace(/^\/|\/$/g, "")), (c = (r = i.replace(/^\//, "")) ? t + "/" + r : t)),
              "string" == typeof c && (-1 !== n.indexOf("?") && (c = c.replace("?", "&")), (c = c.replace(/^\//, "")), (a = n + c)),
              delete(s = f({
                Accept: "application/json, */*;q=0.1"
              }, s))["X-WP-Nonce"],
              p && ((l = JSON.stringify(p)), (s["Content-Type"] = "application/json"));
            var v = {
                code: "fetch_error",
                message: "You are probably offline."
              },
              b = {
                code: "invalid_json",
                message: "The response is not a valid JSON response."
              };
            return window.fetch(a || c || window.location.href, f(f({}, d), {}, {
              headers: s,
              body: l
            })).then(
              function(e) {
                return Promise.resolve(e)
                  .then(function(e) {
                    if (e.status >= 200 && e.status < 300) return e;
                    throw e;
                  })
                  .then(function(e) {
                    if (204 === e.status) return null;
                    if (e && e.json)
                      return e.json().catch(function() {
                        throw b;
                      });
                    throw b;
                  });
              },
              function() {
                throw v;
              }
            );
          }
        )(e);
      },
      d = [];

    function v(e, t = {}) {
      const n = new FormData(e);
      t.submitter && t.submitter.name && n.append(t.submitter.name, t.submitter.value);
      const r = {
          contactFormId: e.wpcf7.id,
          pluginVersion: e.wpcf7.pluginVersion,
          contactFormLocale: e.wpcf7.locale,
          unitTag: e.wpcf7.unitTag,
          containerPostId: e.wpcf7.containerPost,
          status: e.wpcf7.status,
          inputs: Array.from(n, (e) => {
            const t = e[0],
              n = e[1];
            return !t.match(/^_/) && {
              name: t,
              value: n
            };
          }).filter((e) => !1 !== e),
          formData: n,
        },
        c = (t) => {
          const n = document.createElement("li");
          n.setAttribute("id", t.error_id),
            t.idref ? n.insertAdjacentHTML("beforeend", `<a href="#${t.idref}">${t.message}</a>`) : n.insertAdjacentText("beforeend", t.message),
            e.wpcf7.parent.querySelector(".screen-reader-response ul").appendChild(n);
        },
        i = (t) => {
          const n = e.querySelector(t.into),
            r = n.querySelector(".wpcf7-form-control");
          r.classList.add("wpcf7-not-valid"), r.setAttribute("aria-describedby", t.error_id);
          const o = document.createElement("span");
          o.setAttribute("class", "wpcf7-not-valid-tip"),
            o.setAttribute("aria-hidden", "true"),
            o.insertAdjacentText("beforeend", t.message),
            n.appendChild(o),
            n.querySelectorAll("[aria-invalid]").forEach((e) => {
              e.setAttribute("aria-invalid", "true");
            }),
            r.closest(".use-floating-validation-tip") &&
            (r.addEventListener("focus", (e) => {
                o.setAttribute("style", "display: none");
              }),
              o.addEventListener("mouseover", (e) => {
                o.setAttribute("style", "display: none");
              }));
        };
      p({
          endpoint: `contact-forms/${e.wpcf7.id}/feedback`,
          method: "POST",
          body: n,
          wpcf7: {
            endpoint: "feedback",
            form: e,
            detail: r
          }
        })
        .then((t) => {
          const n = o(e, t.status);
          return (r.status = t.status), (r.apiResponse = t), ["invalid", "unaccepted", "spam", "aborted"].includes(n) ? a(e, n, r) : ["sent", "failed"].includes(n) && a(e, "mail" + n, r), a(e, "submit", r), t;
        })
        .then((t) => {
          t.posted_data_hash && (e.querySelector('input[name="_wpcf7_posted_data_hash"]').value = t.posted_data_hash),
            "mail_sent" === t.status && (e.reset(), (e.wpcf7.resetOnMailSent = !0)),
            t.invalid_fields && (t.invalid_fields.forEach(c), t.invalid_fields.forEach(i)),
            e.wpcf7.parent.querySelector('.screen-reader-response [role="status"]').insertAdjacentText("beforeend", t.message),
            e.querySelectorAll(".wpcf7-response-output").forEach((e) => {
              e.innerText = t.message;
            });
        })
        .catch((e) => console.error(e));
    }
    (p.use = function(e) {
      d.unshift(e);
    }),
    p.use((e, t) => {
      if (e.wpcf7 && "feedback" === e.wpcf7.endpoint) {
        const {
          form: t,
          detail: n
        } = e.wpcf7;
        b(t), a(t, "beforesubmit", n), o(t, "submitting");
      }
      return t(e);
    });
    const b = (e) => {
      (e.wpcf7.parent.querySelector('.screen-reader-response [role="status"]').innerText = ""),
      (e.wpcf7.parent.querySelector(".screen-reader-response ul").innerText = ""),
      e.querySelectorAll(".wpcf7-not-valid-tip").forEach((e) => {
          e.remove();
        }),
        e.querySelectorAll("[aria-invalid]").forEach((e) => {
          e.setAttribute("aria-invalid", "false");
        }),
        e.querySelectorAll(".wpcf7-form-control").forEach((e) => {
          e.removeAttribute("aria-describedby"), e.classList.remove("wpcf7-not-valid");
        }),
        e.querySelectorAll(".wpcf7-response-output").forEach((e) => {
          e.innerText = "";
        });
    };

    function w(e) {
      var t = new FormData(e),
        n = {
          contactFormId: e.wpcf7.id,
          pluginVersion: e.wpcf7.pluginVersion,
          contactFormLocale: e.wpcf7.locale,
          unitTag: e.wpcf7.unitTag,
          containerPostId: e.wpcf7.containerPost,
          status: e.wpcf7.status,
          inputs: Array.from(t, function(e) {
            var t = e[0],
              n = e[1];
            return !t.match(/^_/) && {
              name: t,
              value: n
            };
          }).filter(function(e) {
            return !1 !== e;
          }),
          formData: t,
        };
      p({
          endpoint: "contact-forms/".concat(e.wpcf7.id, "/refill"),
          method: "GET",
          wpcf7: {
            endpoint: "refill",
            form: e,
            detail: n
          }
        })
        .then(function(t) {
          e.wpcf7.resetOnMailSent ? (delete e.wpcf7.resetOnMailSent, o(e, "mail_sent")) : o(e, "init"), (n.apiResponse = t), a(e, "reset", n);
        })
        .catch(function(e) {
          return console.error(e);
        });
    }
    p.use(function(e, t) {
      if (e.wpcf7 && "refill" === e.wpcf7.endpoint) {
        var n = e.wpcf7,
          r = n.form;
        n.detail, b(r), o(r, "resetting");
      }
      return t(e);
    });
    var m = function(e, t) {
        var n = function(n) {
          var r = t[n];
          e.querySelectorAll('input[name="'.concat(n, '"]')).forEach(function(e) {
              e.value = "";
            }),
            e.querySelectorAll("img.wpcf7-captcha-".concat(n)).forEach(function(e) {
              e.setAttribute("src", r);
            });
          var o = /([0-9]+)\.(png|gif|jpeg)$/.exec(r);
          o &&
            e.querySelectorAll('input[name="_wpcf7_captcha_challenge_'.concat(n, '"]')).forEach(function(e) {
              e.value = o[1];
            });
        };
        for (var r in t) n(r);
      },
      h = function(e, t) {
        var n = function(n) {
          var r = t[n][0],
            o = t[n][1];
          e.querySelectorAll(".wpcf7-form-control-wrap.".concat(n)).forEach(function(e) {
            (e.querySelector('input[name="'.concat(n, '"]')).value = ""), (e.querySelector(".wpcf7-quiz-label").textContent = r), (e.querySelector('input[name="_wpcf7_quiz_answer_'.concat(n, '"]')).value = o);
          });
        };
        for (var r in t) n(r);
      };

    function y(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }

    function g(e) {
      var t = new FormData(e);
      (e.wpcf7 = {
        id: r(t.get("_wpcf7")),
        status: e.getAttribute("data-status"),
        pluginVersion: t.get("_wpcf7_version"),
        locale: t.get("_wpcf7_locale"),
        unitTag: t.get("_wpcf7_unit_tag"),
        containerPost: r(t.get("_wpcf7_container_post")),
        parent: e.closest(".wpcf7"),
      }),
      e.querySelectorAll(".wpcf7-submit").forEach(function(e) {
          e.insertAdjacentHTML("afterend", '<span class="ajax-loader"></span>');
        }),
        (function(e) {
          e.querySelectorAll(".wpcf7-exclusive-checkbox").forEach(function(t) {
            t.addEventListener("change", function(t) {
              var n = t.target.getAttribute("name");
              e.querySelectorAll('input[type="checkbox"][name="'.concat(n, '"]')).forEach(function(e) {
                e !== t.target && (e.checked = !1);
              });
            });
          });
        })(e),
        (function(e) {
          e.querySelectorAll(".has-free-text").forEach(function(t) {
            var n = t.querySelector("input.wpcf7-free-text"),
              r = t.querySelector('input[type="checkbox"], input[type="radio"]');
            (n.disabled = !r.checked),
            e.addEventListener("change", function(e) {
              (n.disabled = !r.checked), e.target === r && r.checked && n.focus();
            });
          });
        })(e),
        (function(e) {
          e.querySelectorAll(".wpcf7-validates-as-url").forEach(function(e) {
            e.addEventListener("change", function(t) {
              var n = e.value.trim();
              n && !n.match(/^[a-z][a-z0-9.+-]*:/i) && -1 !== n.indexOf(".") && (n = "http://" + (n = n.replace(/^\/+/, ""))), (e.value = n);
            });
          });
        })(e),
        (function(e) {
          if (e.querySelector(".wpcf7-acceptance") && !e.classList.contains("wpcf7-acceptance-as-validation")) {
            var t = function() {
              var t = !0;
              e.querySelectorAll(".wpcf7-acceptance").forEach(function(e) {
                  if (t && !e.classList.contains("optional")) {
                    var n = e.querySelector('input[type="checkbox"]');
                    ((e.classList.contains("invert") && n.checked) || (!e.classList.contains("invert") && !n.checked)) && (t = !1);
                  }
                }),
                e.querySelectorAll(".wpcf7-submit").forEach(function(e) {
                  e.disabled = !t;
                });
            };
            t(),
              e.addEventListener("change", function(e) {
                t();
              }),
              e.addEventListener("wpcf7reset", function(e) {
                t();
              });
          }
        })(e),
        (function(e) {
          var t = function(e, t) {
              var n = r(e.getAttribute("data-starting-value")),
                o = r(e.getAttribute("data-maximum-value")),
                a = r(e.getAttribute("data-minimum-value")),
                c = e.classList.contains("down") ? n - t.value.length : t.value.length;
              e.setAttribute("data-current-value", c),
                (e.innerText = c),
                o && o < t.value.length ? e.classList.add("too-long") : e.classList.remove("too-long"),
                a && t.value.length < a ? e.classList.add("too-short") : e.classList.remove("too-short");
            },
            n = function(n) {
              (n = (function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {};
                  t % 2 ?
                    y(Object(n), !0).forEach(function(t) {
                      i()(e, t, n[t]);
                    }) :
                    Object.getOwnPropertyDescriptors ?
                    Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) :
                    y(Object(n)).forEach(function(t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
              })({
                init: !1
              }, n)),
              e.querySelectorAll(".wpcf7-character-count").forEach(function(r) {
                var o = r.getAttribute("data-target-name"),
                  a = e.querySelector('[name="'.concat(o, '"]'));
                a &&
                  ((a.value = a.defaultValue),
                    t(r, a),
                    n.init &&
                    a.addEventListener("keyup", function(e) {
                      t(r, a);
                    }));
              });
            };
          n({
              init: !0
            }),
            e.addEventListener("wpcf7reset", function(e) {
              n();
            });
        })(e),
        window.addEventListener("load", function(t) {
          wpcf7.cached && e.reset();
        }),
        e.addEventListener("reset", function(t) {
          wpcf7.reset(e);
        }),
        e.addEventListener("submit", function(t) {
          var n = t.submitter;
          wpcf7.submit(e, {
            submitter: n
          }), t.preventDefault();
        }),
        e.addEventListener("wpcf7submit", function(t) {
          t.detail.apiResponse.captcha && m(e, t.detail.apiResponse.captcha), t.detail.apiResponse.quiz && h(e, t.detail.apiResponse.quiz);
        }),
        e.addEventListener("wpcf7reset", function(t) {
          t.detail.apiResponse.captcha && m(e, t.detail.apiResponse.captcha), t.detail.apiResponse.quiz && h(e, t.detail.apiResponse.quiz);
        });
    }
    document.addEventListener("DOMContentLoaded", (e) => {
      var t;
      if ("undefined" == typeof wpcf7) return void console.error("wpcf7 is not defined.");
      if (void 0 === wpcf7.api) return void console.error("wpcf7.api is not defined.");
      if ("function" != typeof window.fetch) return void console.error("Your browser doesn't support window.fetch().");
      if ("function" != typeof window.FormData) return void console.error("Your browser doesn't support window.FormData().");
      const n = document.querySelectorAll(".wpcf7 > form");
      "function" == typeof n.forEach ?
        ((wpcf7 = {
          init: g,
          submit: v,
          reset: w,
          ...(null !== (t = wpcf7) && void 0 !== t ? t : {})
        }), n.forEach((e) => wpcf7.init(e))) :
        console.error("Your browser doesn't support NodeList.forEach().");
    });
  },
]);
(function($) {
  "use strict";
  var container, button, menu, links, i, len;
  container = document.getElementById("site-navigation");
  if (!container) {
    return;
  }
  button = container.getElementsByTagName("button")[0];
  if ("undefined" === typeof button) {
    return;
  }
  menu = container.getElementsByTagName("ul")[0];
  if ("undefined" === typeof menu) {
    button.style.display = "none";
    return;
  }
  menu.setAttribute("aria-expanded", "false");
  if (-1 === menu.className.indexOf("nav-menu")) {
    menu.className += " nav-menu";
  }
  button.onclick = function() {
    if (-1 !== container.className.indexOf("toggled")) {
      container.className = container.className.replace(" toggled", "");
      button.setAttribute("aria-expanded", "false");
      menu.setAttribute("aria-expanded", "false");
    } else {
      container.className += " toggled";
      button.setAttribute("aria-expanded", "true");
      menu.setAttribute("aria-expanded", "true");
    }
  };
  links = menu.getElementsByTagName("a");
  for (i = 0, len = links.length; i < len; i++) {
    links[i].addEventListener("focus", toggleFocus, true);
    links[i].addEventListener("blur", toggleFocus, true);
  }

  function toggleFocus() {
    var self = this;
    while (-1 === self.className.indexOf("nav-menu")) {
      if ("li" === self.tagName.toLowerCase()) {
        if (-1 !== self.className.indexOf("focus")) {
          self.className = self.className.replace(" focus", "");
        } else {
          self.className += " focus";
        }
      }
      self = self.parentElement;
    }
  }
  (function(container) {
    var touchStartFn,
      i,
      parentLink = container.querySelectorAll(".menu-item-has-children > a, .page_item_has_children > a");
    if ("ontouchstart" in window) {
      touchStartFn = function(e) {
        var menuItem = this.parentNode,
          i;
        if (!menuItem.classList.contains("focus")) {
          e.preventDefault();
          for (i = 0; i < menuItem.parentNode.children.length; ++i) {
            if (menuItem === menuItem.parentNode.children[i]) {
              continue;
            }
            menuItem.parentNode.children[i].classList.remove("focus");
          }
          menuItem.classList.add("focus");
        } else {
          menuItem.classList.remove("focus");
        }
      };
      for (i = 0; i < parentLink.length; ++i) {
        parentLink[i].addEventListener("touchstart", touchStartFn, false);
      }
    }
  })(container);
})(jQuery);
(function($) {
  "use strict";
  var isIe = /(trident|msie)/i.test(navigator.userAgent);
  if (isIe && document.getElementById && window.addEventListener) {
    window.addEventListener(
      "hashchange",
      function() {
        var id = location.hash.substring(1),
          element;
        if (!/^[A-z0-9_-]+$/.test(id)) {
          return;
        }
        element = document.getElementById(id);
        if (element) {
          if (!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)) {
            element.tabIndex = -1;
          }
          element.focus();
        }
      },
      false
    );
  }
})(jQuery);
/*! VelocityJS.org (1.5.2). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
!(function(a) {
  "use strict";

  function b(a) {
    var b = a.length,
      d = c.type(a);
    return "function" !== d && !c.isWindow(a) && (!(1 !== a.nodeType || !b) || "array" === d || 0 === b || ("number" == typeof b && b > 0 && b - 1 in a));
  }
  if (!a.jQuery) {
    var c = function(a, b) {
      return new c.fn.init(a, b);
    };
    (c.isWindow = function(a) {
      return a && a === a.window;
    }),
    (c.type = function(a) {
      return a ? ("object" == typeof a || "function" == typeof a ? e[g.call(a)] || "object" : typeof a) : a + "";
    }),
    (c.isArray =
      Array.isArray ||
      function(a) {
        return "array" === c.type(a);
      }),
    (c.isPlainObject = function(a) {
      var b;
      if (!a || "object" !== c.type(a) || a.nodeType || c.isWindow(a)) return !1;
      try {
        if (a.constructor && !f.call(a, "constructor") && !f.call(a.constructor.prototype, "isPrototypeOf")) return !1;
      } catch (d) {
        return !1;
      }
      for (b in a);
      return b === undefined || f.call(a, b);
    }),
    (c.each = function(a, c, d) {
      var e = 0,
        f = a.length,
        g = b(a);
      if (d) {
        if (g)
          for (; e < f && !1 !== c.apply(a[e], d); e++);
        else
          for (e in a)
            if (a.hasOwnProperty(e) && !1 === c.apply(a[e], d)) break;
      } else if (g)
        for (; e < f && !1 !== c.call(a[e], e, a[e]); e++);
      else
        for (e in a)
          if (a.hasOwnProperty(e) && !1 === c.call(a[e], e, a[e])) break;
      return a;
    }),
    (c.data = function(a, b, e) {
      if (e === undefined) {
        var f = a[c.expando],
          g = f && d[f];
        if (b === undefined) return g;
        if (g && b in g) return g[b];
      } else if (b !== undefined) {
        var h = a[c.expando] || (a[c.expando] = ++c.uuid);
        return (d[h] = d[h] || {}), (d[h][b] = e), e;
      }
    }),
    (c.removeData = function(a, b) {
      var e = a[c.expando],
        f = e && d[e];
      f &&
        (b ?
          c.each(b, function(a, b) {
            delete f[b];
          }) :
          delete d[e]);
    }),
    (c.extend = function() {
      var a,
        b,
        d,
        e,
        f,
        g,
        h = arguments[0] || {},
        i = 1,
        j = arguments.length,
        k = !1;
      for ("boolean" == typeof h && ((k = h), (h = arguments[i] || {}), i++), "object" != typeof h && "function" !== c.type(h) && (h = {}), i === j && ((h = this), i--); i < j; i++)
        if ((f = arguments[i]))
          for (e in f)
            f.hasOwnProperty(e) &&
            ((a = h[e]),
              (d = f[e]),
              h !== d &&
              (k && d && (c.isPlainObject(d) || (b = c.isArray(d))) ?
                (b ? ((b = !1), (g = a && c.isArray(a) ? a : [])) : (g = a && c.isPlainObject(a) ? a : {}), (h[e] = c.extend(k, g, d))) :
                d !== undefined && (h[e] = d)));
      return h;
    }),
    (c.queue = function(a, d, e) {
      if (a) {
        d = (d || "fx") + "queue";
        var f = c.data(a, d);
        return e ?
          (!f || c.isArray(e) ?
            (f = c.data(
              a,
              d,
              (function(a, c) {
                var d = c || [];
                return (
                  a &&
                  (b(Object(a)) ?
                    (function(a, b) {
                      for (var c = +b.length, d = 0, e = a.length; d < c;) a[e++] = b[d++];
                      if (c !== c)
                        for (; b[d] !== undefined;) a[e++] = b[d++];
                      a.length = e;
                    })(d, "string" == typeof a ? [a] : a) :
                    [].push.call(d, a)),
                  d
                );
              })(e)
            )) :
            f.push(e),
            f) :
          f || [];
      }
    }),
    (c.dequeue = function(a, b) {
      c.each(a.nodeType ? [a] : a, function(a, d) {
        b = b || "fx";
        var e = c.queue(d, b),
          f = e.shift();
        "inprogress" === f && (f = e.shift()),
          f &&
          ("fx" === b && e.unshift("inprogress"),
            f.call(d, function() {
              c.dequeue(d, b);
            }));
      });
    }),
    (c.fn = c.prototype = {
      init: function(a) {
        if (a.nodeType) return (this[0] = a), this;
        throw new Error("Not a DOM node.");
      },
      offset: function() {
        var b = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
          top: 0,
          left: 0
        };
        return {
          top: b.top + (a.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
          left: b.left + (a.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
        };
      },
      position: function() {
        var a = this[0],
          b = (function(a) {
            for (var b = a.offsetParent; b && "html" !== b.nodeName.toLowerCase() && b.style && "static" === b.style.position.toLowerCase();) b = b.offsetParent;
            return b || document;
          })(a),
          d = this.offset(),
          e = /^(?:body|html)$/i.test(b.nodeName) ? {
            top: 0,
            left: 0
          } : c(b).offset();
        return (
          (d.top -= parseFloat(a.style.marginTop) || 0),
          (d.left -= parseFloat(a.style.marginLeft) || 0),
          b.style && ((e.top += parseFloat(b.style.borderTopWidth) || 0), (e.left += parseFloat(b.style.borderLeftWidth) || 0)), {
            top: d.top - e.top,
            left: d.left - e.left
          }
        );
      },
    });
    var d = {};
    (c.expando = "velocity" + new Date().getTime()), (c.uuid = 0);
    for (var e = {}, f = e.hasOwnProperty, g = e.toString, h = "Boolean Number String Function Array Date RegExp Object Error".split(" "), i = 0; i < h.length; i++) e["[object " + h[i] + "]"] = h[i].toLowerCase();
    (c.fn.init.prototype = c.fn), (a.Velocity = {
      Utilities: c
    });
  }
})(window),
(function(a) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports ? (module.exports = a()) : "function" == typeof define && define.amd ? define(a) : a();
})(function() {
  "use strict";
  return (function(a, b, c, d) {
    function e(a) {
      for (var b = -1, c = a ? a.length : 0, d = []; ++b < c;) {
        var e = a[b];
        e && d.push(e);
      }
      return d;
    }

    function f(a) {
      return u.isWrapped(a) ? (a = s.call(a)) : u.isNode(a) && (a = [a]), a;
    }

    function g(a) {
      var b = o.data(a, "velocity");
      return null === b ? d : b;
    }

    function h(a, b) {
      var c = g(a);
      c && c.delayTimer && !c.delayPaused && ((c.delayRemaining = c.delay - b + c.delayBegin), (c.delayPaused = !0), clearTimeout(c.delayTimer.setTimeout));
    }

    function i(a, b) {
      var c = g(a);
      c && c.delayTimer && c.delayPaused && ((c.delayPaused = !1), (c.delayTimer.setTimeout = setTimeout(c.delayTimer.next, c.delayRemaining)));
    }

    function j(a) {
      return function(b) {
        return Math.round(b * a) * (1 / a);
      };
    }

    function k(a, c, d, e) {
      function f(a, b) {
        return 1 - 3 * b + 3 * a;
      }

      function g(a, b) {
        return 3 * b - 6 * a;
      }

      function h(a) {
        return 3 * a;
      }

      function i(a, b, c) {
        return ((f(b, c) * a + g(b, c)) * a + h(b)) * a;
      }

      function j(a, b, c) {
        return 3 * f(b, c) * a * a + 2 * g(b, c) * a + h(b);
      }

      function k(b, c) {
        for (var e = 0; e < p; ++e) {
          var f = j(c, a, d);
          if (0 === f) return c;
          c -= (i(c, a, d) - b) / f;
        }
        return c;
      }

      function l() {
        for (var b = 0; b < t; ++b) x[b] = i(b * u, a, d);
      }

      function m(b, c, e) {
        var f,
          g,
          h = 0;
        do {
          (g = c + (e - c) / 2), (f = i(g, a, d) - b), f > 0 ? (e = g) : (c = g);
        } while (Math.abs(f) > r && ++h < s);
        return g;
      }

      function n(b) {
        for (var c = 0, e = 1, f = t - 1; e !== f && x[e] <= b; ++e) c += u;
        --e;
        var g = (b - x[e]) / (x[e + 1] - x[e]),
          h = c + g * u,
          i = j(h, a, d);
        return i >= q ? k(b, h) : 0 === i ? h : m(b, c, c + u);
      }

      function o() {
        (y = !0), (a === c && d === e) || l();
      }
      var p = 4,
        q = 0.001,
        r = 1e-7,
        s = 10,
        t = 11,
        u = 1 / (t - 1),
        v = "Float32Array" in b;
      if (4 !== arguments.length) return !1;
      for (var w = 0; w < 4; ++w)
        if ("number" != typeof arguments[w] || isNaN(arguments[w]) || !isFinite(arguments[w])) return !1;
      (a = Math.min(a, 1)), (d = Math.min(d, 1)), (a = Math.max(a, 0)), (d = Math.max(d, 0));
      var x = v ? new Float32Array(t) : new Array(t),
        y = !1,
        z = function(b) {
          return y || o(), a === c && d === e ? b : 0 === b ? 0 : 1 === b ? 1 : i(n(b), c, e);
        };
      z.getControlPoints = function() {
        return [{
            x: a,
            y: c
          },
          {
            x: d,
            y: e
          },
        ];
      };
      var A = "generateBezier(" + [a, c, d, e] + ")";
      return (
        (z.toString = function() {
          return A;
        }),
        z
      );
    }

    function l(a, b) {
      var c = a;
      return (
        u.isString(a) ? y.Easings[a] || (c = !1) : (c = u.isArray(a) && 1 === a.length ? j.apply(null, a) : u.isArray(a) && 2 === a.length ? z.apply(null, a.concat([b])) : !(!u.isArray(a) || 4 !== a.length) && k.apply(null, a)),
        !1 === c && (c = y.Easings[y.defaults.easing] ? y.defaults.easing : x),
        c
      );
    }

    function m(a) {
      if (a) {
        var b = y.timestamp && !0 !== a ? a : r.now(),
          c = y.State.calls.length;
        c > 1e4 && ((y.State.calls = e(y.State.calls)), (c = y.State.calls.length));
        for (var f = 0; f < c; f++)
          if (y.State.calls[f]) {
            var h = y.State.calls[f],
              i = h[0],
              j = h[2],
              k = h[3],
              l = !k,
              q = null,
              s = h[5],
              t = h[6];
            if ((k || (k = y.State.calls[f][3] = b - 16), s)) {
              if (!0 !== s.resume) continue;
              (k = h[3] = Math.round(b - t - 16)), (h[5] = null);
            }
            t = h[6] = b - k;
            for (var v = Math.min(t / j.duration, 1), w = 0, x = i.length; w < x; w++) {
              var z = i[w],
                B = z.element;
              if (g(B)) {
                var D = !1;
                if (j.display !== d && null !== j.display && "none" !== j.display) {
                  if ("flex" === j.display) {
                    var E = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                    o.each(E, function(a, b) {
                      A.setPropertyValue(B, "display", b);
                    });
                  }
                  A.setPropertyValue(B, "display", j.display);
                }
                j.visibility !== d && "hidden" !== j.visibility && A.setPropertyValue(B, "visibility", j.visibility);
                for (var F in z)
                  if (z.hasOwnProperty(F) && "element" !== F) {
                    var G,
                      H = z[F],
                      I = u.isString(H.easing) ? y.Easings[H.easing] : H.easing;
                    if (u.isString(H.pattern)) {
                      var J =
                        1 === v ?
                        function(a, b, c) {
                          var d = H.endValue[b];
                          return c ? Math.round(d) : d;
                        } :
                        function(a, b, c) {
                          var d = H.startValue[b],
                            e = H.endValue[b] - d,
                            f = d + e * I(v, j, e);
                          return c ? Math.round(f) : f;
                        };
                      G = H.pattern.replace(/{(\d+)(!)?}/g, J);
                    } else if (1 === v) G = H.endValue;
                    else {
                      var K = H.endValue - H.startValue;
                      G = H.startValue + K * I(v, j, K);
                    }
                    if (!l && G === H.currentValue) continue;
                    if (((H.currentValue = G), "tween" === F)) q = G;
                    else {
                      var L;
                      if (A.Hooks.registered[F]) {
                        L = A.Hooks.getRoot(F);
                        var M = g(B).rootPropertyValueCache[L];
                        M && (H.rootPropertyValue = M);
                      }
                      var N = A.setPropertyValue(B, F, H.currentValue + (p < 9 && 0 === parseFloat(G) ? "" : H.unitType), H.rootPropertyValue, H.scrollData);
                      A.Hooks.registered[F] && (A.Normalizations.registered[L] ? (g(B).rootPropertyValueCache[L] = A.Normalizations.registered[L]("extract", null, N[1])) : (g(B).rootPropertyValueCache[L] = N[1])),
                        "transform" === N[0] && (D = !0);
                    }
                  }
                j.mobileHA && g(B).transformCache.translate3d === d && ((g(B).transformCache.translate3d = "(0px, 0px, 0px)"), (D = !0)), D && A.flushTransformCache(B);
              }
            }
            j.display !== d && "none" !== j.display && (y.State.calls[f][2].display = !1),
              j.visibility !== d && "hidden" !== j.visibility && (y.State.calls[f][2].visibility = !1),
              j.progress && j.progress.call(h[1], h[1], v, Math.max(0, k + j.duration - b), k, q),
              1 === v && n(f);
          }
      }
      y.State.isTicking && C(m);
    }

    function n(a, b) {
      if (!y.State.calls[a]) return !1;
      for (var c = y.State.calls[a][0], e = y.State.calls[a][1], f = y.State.calls[a][2], h = y.State.calls[a][4], i = !1, j = 0, k = c.length; j < k; j++) {
        var l = c[j].element;
        b || f.loop || ("none" === f.display && A.setPropertyValue(l, "display", f.display), "hidden" === f.visibility && A.setPropertyValue(l, "visibility", f.visibility));
        var m = g(l);
        if (!0 !== f.loop && (o.queue(l)[1] === d || !/\.velocityQueueEntryFlag/i.test(o.queue(l)[1])) && m) {
          (m.isAnimating = !1), (m.rootPropertyValueCache = {});
          var n = !1;
          o.each(A.Lists.transforms3D, function(a, b) {
              var c = /^scale/.test(b) ? 1 : 0,
                e = m.transformCache[b];
              m.transformCache[b] !== d && new RegExp("^\\(" + c + "[^.]").test(e) && ((n = !0), delete m.transformCache[b]);
            }),
            f.mobileHA && ((n = !0), delete m.transformCache.translate3d),
            n && A.flushTransformCache(l),
            A.Values.removeClass(l, "velocity-animating");
        }
        if (!b && f.complete && !f.loop && j === k - 1)
          try {
            f.complete.call(e, e);
          } catch (r) {
            setTimeout(function() {
              throw r;
            }, 1);
          }
        h && !0 !== f.loop && h(e),
          m &&
          !0 === f.loop &&
          !b &&
          (o.each(m.tweensContainer, function(a, b) {
              if (/^rotate/.test(a) && (parseFloat(b.startValue) - parseFloat(b.endValue)) % 360 == 0) {
                var c = b.startValue;
                (b.startValue = b.endValue), (b.endValue = c);
              }
              /^backgroundPosition/.test(a) && 100 === parseFloat(b.endValue) && "%" === b.unitType && ((b.endValue = 0), (b.startValue = 100));
            }),
            y(l, "reverse", {
              loop: !0,
              delay: f.delay
            })),
          !1 !== f.queue && o.dequeue(l, f.queue);
      }
      y.State.calls[a] = !1;
      for (var p = 0, q = y.State.calls.length; p < q; p++)
        if (!1 !== y.State.calls[p]) {
          i = !0;
          break;
        }! 1 === i && ((y.State.isTicking = !1), delete y.State.calls, (y.State.calls = []));
    }
    var o,
      p = (function() {
        if (c.documentMode) return c.documentMode;
        for (var a = 7; a > 4; a--) {
          var b = c.createElement("div");
          if (((b.innerHTML = "\x3c!--[if IE " + a + "]><span></span><![endif]--\x3e"), b.getElementsByTagName("span").length)) return (b = null), a;
        }
        return d;
      })(),
      q = (function() {
        var a = 0;
        return (
          b.webkitRequestAnimationFrame ||
          b.mozRequestAnimationFrame ||
          function(b) {
            var c,
              d = new Date().getTime();
            return (
              (c = Math.max(0, 16 - (d - a))),
              (a = d + c),
              setTimeout(function() {
                b(d + c);
              }, c)
            );
          }
        );
      })(),
      r = (function() {
        var a = b.performance || {};
        if ("function" != typeof a.now) {
          var c = a.timing && a.timing.navigationStart ? a.timing.navigationStart : new Date().getTime();
          a.now = function() {
            return new Date().getTime() - c;
          };
        }
        return a;
      })(),
      s = (function() {
        var a = Array.prototype.slice;
        try {
          return a.call(c.documentElement), a;
        } catch (b) {
          return function(b, c) {
            var d = this.length;
            if (("number" != typeof b && (b = 0), "number" != typeof c && (c = d), this.slice)) return a.call(this, b, c);
            var e,
              f = [],
              g = b >= 0 ? b : Math.max(0, d + b),
              h = c < 0 ? d + c : Math.min(c, d),
              i = h - g;
            if (i > 0)
              if (((f = new Array(i)), this.charAt))
                for (e = 0; e < i; e++) f[e] = this.charAt(g + e);
              else
                for (e = 0; e < i; e++) f[e] = this[g + e];
            return f;
          };
        }
      })(),
      t = function() {
        return Array.prototype.includes ?
          function(a, b) {
            return a.includes(b);
          } :
          Array.prototype.indexOf ?
          function(a, b) {
            return a.indexOf(b) >= 0;
          } :
          function(a, b) {
            for (var c = 0; c < a.length; c++)
              if (a[c] === b) return !0;
            return !1;
          };
      },
      u = {
        isNumber: function(a) {
          return "number" == typeof a;
        },
        isString: function(a) {
          return "string" == typeof a;
        },
        isArray: Array.isArray ||
          function(a) {
            return "[object Array]" === Object.prototype.toString.call(a);
          },
        isFunction: function(a) {
          return "[object Function]" === Object.prototype.toString.call(a);
        },
        isNode: function(a) {
          return a && a.nodeType;
        },
        isWrapped: function(a) {
          return a && a !== b && u.isNumber(a.length) && !u.isString(a) && !u.isFunction(a) && !u.isNode(a) && (0 === a.length || u.isNode(a[0]));
        },
        isSVG: function(a) {
          return b.SVGElement && a instanceof b.SVGElement;
        },
        isEmptyObject: function(a) {
          for (var b in a)
            if (a.hasOwnProperty(b)) return !1;
          return !0;
        },
      },
      v = !1;
    if ((a.fn && a.fn.jquery ? ((o = a), (v = !0)) : (o = b.Velocity.Utilities), p <= 8 && !v)) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
    if (p <= 7) return void(jQuery.fn.velocity = jQuery.fn.animate);
    var w = 400,
      x = "swing",
      y = {
        State: {
          isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(b.navigator.userAgent),
          isAndroid: /Android/i.test(b.navigator.userAgent),
          isGingerbread: /Android 2\.3\.[3-7]/i.test(b.navigator.userAgent),
          isChrome: b.chrome,
          isFirefox: /Firefox/i.test(b.navigator.userAgent),
          prefixElement: c.createElement("div"),
          prefixMatches: {},
          scrollAnchor: null,
          scrollPropertyLeft: null,
          scrollPropertyTop: null,
          isTicking: !1,
          calls: [],
          delayedElements: {
            count: 0
          },
        },
        CSS: {},
        Utilities: o,
        Redirects: {},
        Easings: {},
        Promise: b.Promise,
        defaults: {
          queue: "",
          duration: w,
          easing: x,
          begin: d,
          complete: d,
          progress: d,
          display: d,
          visibility: d,
          loop: !1,
          delay: !1,
          mobileHA: !0,
          _cacheValues: !0,
          promiseRejectEmpty: !0
        },
        init: function(a) {
          o.data(a, "velocity", {
            isSVG: u.isSVG(a),
            isAnimating: !1,
            computedStyle: null,
            tweensContainer: null,
            rootPropertyValueCache: {},
            transformCache: {}
          });
        },
        hook: null,
        mock: !1,
        version: {
          major: 1,
          minor: 5,
          patch: 2
        },
        debug: !1,
        timestamp: !0,
        pauseAll: function(a) {
          var b = new Date().getTime();
          o.each(y.State.calls, function(b, c) {
              if (c) {
                if (a !== d && (c[2].queue !== a || !1 === c[2].queue)) return !0;
                c[5] = {
                  resume: !1
                };
              }
            }),
            o.each(y.State.delayedElements, function(a, c) {
              c && h(c, b);
            });
        },
        resumeAll: function(a) {
          var b = new Date().getTime();
          o.each(y.State.calls, function(b, c) {
              if (c) {
                if (a !== d && (c[2].queue !== a || !1 === c[2].queue)) return !0;
                c[5] && (c[5].resume = !0);
              }
            }),
            o.each(y.State.delayedElements, function(a, c) {
              c && i(c, b);
            });
        },
      };
    b.pageYOffset !== d ?
      ((y.State.scrollAnchor = b), (y.State.scrollPropertyLeft = "pageXOffset"), (y.State.scrollPropertyTop = "pageYOffset")) :
      ((y.State.scrollAnchor = c.documentElement || c.body.parentNode || c.body), (y.State.scrollPropertyLeft = "scrollLeft"), (y.State.scrollPropertyTop = "scrollTop"));
    var z = (function() {
      function a(a) {
        return -a.tension * a.x - a.friction * a.v;
      }

      function b(b, c, d) {
        var e = {
          x: b.x + d.dx * c,
          v: b.v + d.dv * c,
          tension: b.tension,
          friction: b.friction
        };
        return {
          dx: e.v,
          dv: a(e)
        };
      }

      function c(c, d) {
        var e = {
            dx: c.v,
            dv: a(c)
          },
          f = b(c, 0.5 * d, e),
          g = b(c, 0.5 * d, f),
          h = b(c, d, g),
          i = (1 / 6) * (e.dx + 2 * (f.dx + g.dx) + h.dx),
          j = (1 / 6) * (e.dv + 2 * (f.dv + g.dv) + h.dv);
        return (c.x = c.x + i * d), (c.v = c.v + j * d), c;
      }
      return function d(a, b, e) {
        var f,
          g,
          h,
          i = {
            x: -1,
            v: 0,
            tension: null,
            friction: null
          },
          j = [0],
          k = 0;
        for (a = parseFloat(a) || 500, b = parseFloat(b) || 20, e = e || null, i.tension = a, i.friction = b, f = null !== e, f ? ((k = d(a, b)), (g = (k / e) * 0.016)) : (g = 0.016);;)
          if (((h = c(h || i, g)), j.push(1 + h.x), (k += 16), !(Math.abs(h.x) > 1e-4 && Math.abs(h.v) > 1e-4))) break;
        return f ?
          function(a) {
            return j[(a * (j.length - 1)) | 0];
          } :
          k;
      };
    })();
    (y.Easings = {
      linear: function(a) {
        return a;
      },
      swing: function(a) {
        return 0.5 - Math.cos(a * Math.PI) / 2;
      },
      spring: function(a) {
        return 1 - Math.cos(4.5 * a * Math.PI) * Math.exp(6 * -a);
      },
    }),
    o.each(
      [
        ["ease", [0.25, 0.1, 0.25, 1]],
        ["ease-in", [0.42, 0, 1, 1]],
        ["ease-out", [0, 0, 0.58, 1]],
        ["ease-in-out", [0.42, 0, 0.58, 1]],
        ["easeInSine", [0.47, 0, 0.745, 0.715]],
        ["easeOutSine", [0.39, 0.575, 0.565, 1]],
        ["easeInOutSine", [0.445, 0.05, 0.55, 0.95]],
        ["easeInQuad", [0.55, 0.085, 0.68, 0.53]],
        ["easeOutQuad", [0.25, 0.46, 0.45, 0.94]],
        ["easeInOutQuad", [0.455, 0.03, 0.515, 0.955]],
        ["easeInCubic", [0.55, 0.055, 0.675, 0.19]],
        ["easeOutCubic", [0.215, 0.61, 0.355, 1]],
        ["easeInOutCubic", [0.645, 0.045, 0.355, 1]],
        ["easeInQuart", [0.895, 0.03, 0.685, 0.22]],
        ["easeOutQuart", [0.165, 0.84, 0.44, 1]],
        ["easeInOutQuart", [0.77, 0, 0.175, 1]],
        ["easeInQuint", [0.755, 0.05, 0.855, 0.06]],
        ["easeOutQuint", [0.23, 1, 0.32, 1]],
        ["easeInOutQuint", [0.86, 0, 0.07, 1]],
        ["easeInExpo", [0.95, 0.05, 0.795, 0.035]],
        ["easeOutExpo", [0.19, 1, 0.22, 1]],
        ["easeInOutExpo", [1, 0, 0, 1]],
        ["easeInCirc", [0.6, 0.04, 0.98, 0.335]],
        ["easeOutCirc", [0.075, 0.82, 0.165, 1]],
        ["easeInOutCirc", [0.785, 0.135, 0.15, 0.86]],
      ],
      function(a, b) {
        y.Easings[b[0]] = k.apply(null, b[1]);
      }
    );
    var A = (y.CSS = {
      RegEx: {
        isHex: /^#([A-f\d]{3}){1,2}$/i,
        valueUnwrap: /^[A-z]+\((.*)\)$/i,
        wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
        valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
      },
      Lists: {
        colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
        transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
        transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"],
        units: ["%", "em", "ex", "ch", "rem", "vw", "vh", "vmin", "vmax", "cm", "mm", "Q", "in", "pc", "pt", "px", "deg", "grad", "rad", "turn", "s", "ms"],
        colorNames: {
          aliceblue: "240,248,255",
          antiquewhite: "250,235,215",
          aquamarine: "127,255,212",
          aqua: "0,255,255",
          azure: "240,255,255",
          beige: "245,245,220",
          bisque: "255,228,196",
          black: "0,0,0",
          blanchedalmond: "255,235,205",
          blueviolet: "138,43,226",
          blue: "0,0,255",
          brown: "165,42,42",
          burlywood: "222,184,135",
          cadetblue: "95,158,160",
          chartreuse: "127,255,0",
          chocolate: "210,105,30",
          coral: "255,127,80",
          cornflowerblue: "100,149,237",
          cornsilk: "255,248,220",
          crimson: "220,20,60",
          cyan: "0,255,255",
          darkblue: "0,0,139",
          darkcyan: "0,139,139",
          darkgoldenrod: "184,134,11",
          darkgray: "169,169,169",
          darkgrey: "169,169,169",
          darkgreen: "0,100,0",
          darkkhaki: "189,183,107",
          darkmagenta: "139,0,139",
          darkolivegreen: "85,107,47",
          darkorange: "255,140,0",
          darkorchid: "153,50,204",
          darkred: "139,0,0",
          darksalmon: "233,150,122",
          darkseagreen: "143,188,143",
          darkslateblue: "72,61,139",
          darkslategray: "47,79,79",
          darkturquoise: "0,206,209",
          darkviolet: "148,0,211",
          deeppink: "255,20,147",
          deepskyblue: "0,191,255",
          dimgray: "105,105,105",
          dimgrey: "105,105,105",
          dodgerblue: "30,144,255",
          firebrick: "178,34,34",
          floralwhite: "255,250,240",
          forestgreen: "34,139,34",
          fuchsia: "255,0,255",
          gainsboro: "220,220,220",
          ghostwhite: "248,248,255",
          gold: "255,215,0",
          goldenrod: "218,165,32",
          gray: "128,128,128",
          grey: "128,128,128",
          greenyellow: "173,255,47",
          green: "0,128,0",
          honeydew: "240,255,240",
          hotpink: "255,105,180",
          indianred: "205,92,92",
          indigo: "75,0,130",
          ivory: "255,255,240",
          khaki: "240,230,140",
          lavenderblush: "255,240,245",
          lavender: "230,230,250",
          lawngreen: "124,252,0",
          lemonchiffon: "255,250,205",
          lightblue: "173,216,230",
          lightcoral: "240,128,128",
          lightcyan: "224,255,255",
          lightgoldenrodyellow: "250,250,210",
          lightgray: "211,211,211",
          lightgrey: "211,211,211",
          lightgreen: "144,238,144",
          lightpink: "255,182,193",
          lightsalmon: "255,160,122",
          lightseagreen: "32,178,170",
          lightskyblue: "135,206,250",
          lightslategray: "119,136,153",
          lightsteelblue: "176,196,222",
          lightyellow: "255,255,224",
          limegreen: "50,205,50",
          lime: "0,255,0",
          linen: "250,240,230",
          magenta: "255,0,255",
          maroon: "128,0,0",
          mediumaquamarine: "102,205,170",
          mediumblue: "0,0,205",
          mediumorchid: "186,85,211",
          mediumpurple: "147,112,219",
          mediumseagreen: "60,179,113",
          mediumslateblue: "123,104,238",
          mediumspringgreen: "0,250,154",
          mediumturquoise: "72,209,204",
          mediumvioletred: "199,21,133",
          midnightblue: "25,25,112",
          mintcream: "245,255,250",
          mistyrose: "255,228,225",
          moccasin: "255,228,181",
          navajowhite: "255,222,173",
          navy: "0,0,128",
          oldlace: "253,245,230",
          olivedrab: "107,142,35",
          olive: "128,128,0",
          orangered: "255,69,0",
          orange: "255,165,0",
          orchid: "218,112,214",
          palegoldenrod: "238,232,170",
          palegreen: "152,251,152",
          paleturquoise: "175,238,238",
          palevioletred: "219,112,147",
          papayawhip: "255,239,213",
          peachpuff: "255,218,185",
          peru: "205,133,63",
          pink: "255,192,203",
          plum: "221,160,221",
          powderblue: "176,224,230",
          purple: "128,0,128",
          red: "255,0,0",
          rosybrown: "188,143,143",
          royalblue: "65,105,225",
          saddlebrown: "139,69,19",
          salmon: "250,128,114",
          sandybrown: "244,164,96",
          seagreen: "46,139,87",
          seashell: "255,245,238",
          sienna: "160,82,45",
          silver: "192,192,192",
          skyblue: "135,206,235",
          slateblue: "106,90,205",
          slategray: "112,128,144",
          snow: "255,250,250",
          springgreen: "0,255,127",
          steelblue: "70,130,180",
          tan: "210,180,140",
          teal: "0,128,128",
          thistle: "216,191,216",
          tomato: "255,99,71",
          turquoise: "64,224,208",
          violet: "238,130,238",
          wheat: "245,222,179",
          whitesmoke: "245,245,245",
          white: "255,255,255",
          yellowgreen: "154,205,50",
          yellow: "255,255,0",
        },
      },
      Hooks: {
        templates: {
          textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
          boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
          clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
          backgroundPosition: ["X Y", "0% 0%"],
          transformOrigin: ["X Y Z", "50% 50% 0px"],
          perspectiveOrigin: ["X Y", "50% 50%"],
        },
        registered: {},
        register: function() {
          for (var a = 0; a < A.Lists.colors.length; a++) {
            var b = "color" === A.Lists.colors[a] ? "0 0 0 1" : "255 255 255 1";
            A.Hooks.templates[A.Lists.colors[a]] = ["Red Green Blue Alpha", b];
          }
          var c, d, e;
          if (p)
            for (c in A.Hooks.templates)
              if (A.Hooks.templates.hasOwnProperty(c)) {
                (d = A.Hooks.templates[c]), (e = d[0].split(" "));
                var f = d[1].match(A.RegEx.valueSplit);
                "Color" === e[0] && (e.push(e.shift()), f.push(f.shift()), (A.Hooks.templates[c] = [e.join(" "), f.join(" ")]));
              }
          for (c in A.Hooks.templates)
            if (A.Hooks.templates.hasOwnProperty(c)) {
              (d = A.Hooks.templates[c]), (e = d[0].split(" "));
              for (var g in e)
                if (e.hasOwnProperty(g)) {
                  var h = c + e[g],
                    i = g;
                  A.Hooks.registered[h] = [c, i];
                }
            }
        },
        getRoot: function(a) {
          var b = A.Hooks.registered[a];
          return b ? b[0] : a;
        },
        getUnit: function(a, b) {
          var c = (a.substr(b || 0, 5).match(/^[a-z%]+/) || [])[0] || "";
          return c && t(A.Lists.units, c) ? c : "";
        },
        fixColors: function(a) {
          return a.replace(/(rgba?\(\s*)?(\b[a-z]+\b)/g, function(a, b, c) {
            return A.Lists.colorNames.hasOwnProperty(c) ? (b || "rgba(") + A.Lists.colorNames[c] + (b ? "" : ",1)") : b + c;
          });
        },
        cleanRootPropertyValue: function(a, b) {
          return A.RegEx.valueUnwrap.test(b) && (b = b.match(A.RegEx.valueUnwrap)[1]), A.Values.isCSSNullValue(b) && (b = A.Hooks.templates[a][1]), b;
        },
        extractValue: function(a, b) {
          var c = A.Hooks.registered[a];
          if (c) {
            var d = c[0],
              e = c[1];
            return (b = A.Hooks.cleanRootPropertyValue(d, b)), b.toString().match(A.RegEx.valueSplit)[e];
          }
          return b;
        },
        injectValue: function(a, b, c) {
          var d = A.Hooks.registered[a];
          if (d) {
            var e,
              f = d[0],
              g = d[1];
            return (c = A.Hooks.cleanRootPropertyValue(f, c)), (e = c.toString().match(A.RegEx.valueSplit)), (e[g] = b), e.join(" ");
          }
          return c;
        },
      },
      Normalizations: {
        registered: {
          clip: function(a, b, c) {
            switch (a) {
              case "name":
                return "clip";
              case "extract":
                var d;
                return A.RegEx.wrappedValueAlreadyExtracted.test(c) ? (d = c) : ((d = c.toString().match(A.RegEx.valueUnwrap)), (d = d ? d[1].replace(/,(\s+)?/g, " ") : c)), d;
              case "inject":
                return "rect(" + c + ")";
            }
          },
          blur: function(a, b, c) {
            switch (a) {
              case "name":
                return y.State.isFirefox ? "filter" : "-webkit-filter";
              case "extract":
                var d = parseFloat(c);
                if (!d && 0 !== d) {
                  var e = c.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                  d = e ? e[1] : 0;
                }
                return d;
              case "inject":
                return parseFloat(c) ? "blur(" + c + ")" : "none";
            }
          },
          opacity: function(a, b, c) {
            if (p <= 8)
              switch (a) {
                case "name":
                  return "filter";
                case "extract":
                  var d = c.toString().match(/alpha\(opacity=(.*)\)/i);
                  return (c = d ? d[1] / 100 : 1);
                case "inject":
                  return (b.style.zoom = 1), parseFloat(c) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(c), 10) + ")";
              }
            else
              switch (a) {
                case "name":
                  return "opacity";
                case "extract":
                case "inject":
                  return c;
              }
          },
        },
        register: function() {
          function a(a, b, c) {
            if (("border-box" === A.getPropertyValue(b, "boxSizing").toString().toLowerCase()) === (c || !1)) {
              var d,
                e,
                f = 0,
                g = "width" === a ? ["Left", "Right"] : ["Top", "Bottom"],
                h = ["padding" + g[0], "padding" + g[1], "border" + g[0] + "Width", "border" + g[1] + "Width"];
              for (d = 0; d < h.length; d++)(e = parseFloat(A.getPropertyValue(b, h[d]))), isNaN(e) || (f += e);
              return c ? -f : f;
            }
            return 0;
          }

          function b(b, c) {
            return function(d, e, f) {
              switch (d) {
                case "name":
                  return b;
                case "extract":
                  return parseFloat(f) + a(b, e, c);
                case "inject":
                  return parseFloat(f) - a(b, e, c) + "px";
              }
            };
          }
          (p && !(p > 9)) || y.State.isGingerbread || (A.Lists.transformsBase = A.Lists.transformsBase.concat(A.Lists.transforms3D));
          for (var c = 0; c < A.Lists.transformsBase.length; c++)
            !(function() {
              var a = A.Lists.transformsBase[c];
              A.Normalizations.registered[a] = function(b, c, e) {
                switch (b) {
                  case "name":
                    return "transform";
                  case "extract":
                    return g(c) === d || g(c).transformCache[a] === d ? (/^scale/i.test(a) ? 1 : 0) : g(c).transformCache[a].replace(/[()]/g, "");
                  case "inject":
                    var f = !1;
                    switch (a.substr(0, a.length - 1)) {
                      case "translate":
                        f = !/(%|px|em|rem|vw|vh|\d)$/i.test(e);
                        break;
                      case "scal":
                      case "scale":
                        y.State.isAndroid && g(c).transformCache[a] === d && e < 1 && (e = 1), (f = !/(\d)$/i.test(e));
                        break;
                      case "skew":
                      case "rotate":
                        f = !/(deg|\d)$/i.test(e);
                    }
                    return f || (g(c).transformCache[a] = "(" + e + ")"), g(c).transformCache[a];
                }
              };
            })();
          for (var e = 0; e < A.Lists.colors.length; e++)
            !(function() {
              var a = A.Lists.colors[e];
              A.Normalizations.registered[a] = function(b, c, e) {
                switch (b) {
                  case "name":
                    return a;
                  case "extract":
                    var f;
                    if (A.RegEx.wrappedValueAlreadyExtracted.test(e)) f = e;
                    else {
                      var g,
                        h = {
                          black: "rgb(0, 0, 0)",
                          blue: "rgb(0, 0, 255)",
                          gray: "rgb(128, 128, 128)",
                          green: "rgb(0, 128, 0)",
                          red: "rgb(255, 0, 0)",
                          white: "rgb(255, 255, 255)"
                        };
                      /^[A-z]+$/i.test(e) ? (g = h[e] !== d ? h[e] : h.black) : A.RegEx.isHex.test(e) ? (g = "rgb(" + A.Values.hexToRgb(e).join(" ") + ")") : /^rgba?\(/i.test(e) || (g = h.black),
                        (f = (g || e)
                          .toString()
                          .match(A.RegEx.valueUnwrap)[1]
                          .replace(/,(\s+)?/g, " "));
                    }
                    return (!p || p > 8) && 3 === f.split(" ").length && (f += " 1"), f;
                  case "inject":
                    return /^rgb/.test(e) ?
                      e :
                      (p <= 8 ? 4 === e.split(" ").length && (e = e.split(/\s+/).slice(0, 3).join(" ")) : 3 === e.split(" ").length && (e += " 1"),
                        (p <= 8 ? "rgb" : "rgba") + "(" + e.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")");
                }
              };
            })();
          (A.Normalizations.registered.innerWidth = b("width", !0)),
          (A.Normalizations.registered.innerHeight = b("height", !0)),
          (A.Normalizations.registered.outerWidth = b("width")),
          (A.Normalizations.registered.outerHeight = b("height"));
        },
      },
      Names: {
        camelCase: function(a) {
          return a.replace(/-(\w)/g, function(a, b) {
            return b.toUpperCase();
          });
        },
        SVGAttribute: function(a) {
          var b = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
          return (p || (y.State.isAndroid && !y.State.isChrome)) && (b += "|transform"), new RegExp("^(" + b + ")$", "i").test(a);
        },
        prefixCheck: function(a) {
          if (y.State.prefixMatches[a]) return [y.State.prefixMatches[a], !0];
          for (var b = ["", "Webkit", "Moz", "ms", "O"], c = 0, d = b.length; c < d; c++) {
            var e;
            if (
              ((e =
                  0 === c ?
                  a :
                  b[c] +
                  a.replace(/^\w/, function(a) {
                    return a.toUpperCase();
                  })),
                u.isString(y.State.prefixElement.style[e]))
            )
              return (y.State.prefixMatches[a] = e), [e, !0];
          }
          return [a, !1];
        },
      },
      Values: {
        hexToRgb: function(a) {
          var b,
            c = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
            d = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
          return (
            (a = a.replace(c, function(a, b, c, d) {
              return b + b + c + c + d + d;
            })),
            (b = d.exec(a)),
            b ? [parseInt(b[1], 16), parseInt(b[2], 16), parseInt(b[3], 16)] : [0, 0, 0]
          );
        },
        isCSSNullValue: function(a) {
          return !a || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(a);
        },
        getUnitType: function(a) {
          return /^(rotate|skew)/i.test(a) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(a) ? "" : "px";
        },
        getDisplayType: function(a) {
          var b = a && a.tagName.toString().toLowerCase();
          return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(b) ?
            "inline" :
            /^(li)$/i.test(b) ?
            "list-item" :
            /^(tr)$/i.test(b) ?
            "table-row" :
            /^(table)$/i.test(b) ?
            "table" :
            /^(tbody)$/i.test(b) ?
            "table-row-group" :
            "block";
        },
        addClass: function(a, b) {
          if (a)
            if (a.classList) a.classList.add(b);
            else if (u.isString(a.className)) a.className += (a.className.length ? " " : "") + b;
          else {
            var c = a.getAttribute(p <= 7 ? "className" : "class") || "";
            a.setAttribute("class", c + (c ? " " : "") + b);
          }
        },
        removeClass: function(a, b) {
          if (a)
            if (a.classList) a.classList.remove(b);
            else if (u.isString(a.className)) a.className = a.className.toString().replace(new RegExp("(^|\\s)" + b.split(" ").join("|") + "(\\s|$)", "gi"), " ");
          else {
            var c = a.getAttribute(p <= 7 ? "className" : "class") || "";
            a.setAttribute("class", c.replace(new RegExp("(^|s)" + b.split(" ").join("|") + "(s|$)", "gi"), " "));
          }
        },
      },
      getPropertyValue: function(a, c, e, f) {
        function h(a, c) {
          var e = 0;
          if (p <= 8) e = o.css(a, c);
          else {
            var i = !1;
            /^(width|height)$/.test(c) && 0 === A.getPropertyValue(a, "display") && ((i = !0), A.setPropertyValue(a, "display", A.Values.getDisplayType(a)));
            var j = function() {
              i && A.setPropertyValue(a, "display", "none");
            };
            if (!f) {
              if ("height" === c && "border-box" !== A.getPropertyValue(a, "boxSizing").toString().toLowerCase()) {
                var k =
                  a.offsetHeight -
                  (parseFloat(A.getPropertyValue(a, "borderTopWidth")) || 0) -
                  (parseFloat(A.getPropertyValue(a, "borderBottomWidth")) || 0) -
                  (parseFloat(A.getPropertyValue(a, "paddingTop")) || 0) -
                  (parseFloat(A.getPropertyValue(a, "paddingBottom")) || 0);
                return j(), k;
              }
              if ("width" === c && "border-box" !== A.getPropertyValue(a, "boxSizing").toString().toLowerCase()) {
                var l =
                  a.offsetWidth -
                  (parseFloat(A.getPropertyValue(a, "borderLeftWidth")) || 0) -
                  (parseFloat(A.getPropertyValue(a, "borderRightWidth")) || 0) -
                  (parseFloat(A.getPropertyValue(a, "paddingLeft")) || 0) -
                  (parseFloat(A.getPropertyValue(a, "paddingRight")) || 0);
                return j(), l;
              }
            }
            var m;
            (m = g(a) === d ? b.getComputedStyle(a, null) : g(a).computedStyle ? g(a).computedStyle : (g(a).computedStyle = b.getComputedStyle(a, null))),
            "borderColor" === c && (c = "borderTopColor"),
              (e = 9 === p && "filter" === c ? m.getPropertyValue(c) : m[c]),
              ("" !== e && null !== e) || (e = a.style[c]),
              j();
          }
          if ("auto" === e && /^(top|right|bottom|left)$/i.test(c)) {
            var n = h(a, "position");
            ("fixed" === n || ("absolute" === n && /top|left/i.test(c))) && (e = o(a).position()[c] + "px");
          }
          return e;
        }
        var i;
        if (A.Hooks.registered[c]) {
          var j = c,
            k = A.Hooks.getRoot(j);
          e === d && (e = A.getPropertyValue(a, A.Names.prefixCheck(k)[0])), A.Normalizations.registered[k] && (e = A.Normalizations.registered[k]("extract", a, e)), (i = A.Hooks.extractValue(j, e));
        } else if (A.Normalizations.registered[c]) {
          var l, m;
          (l = A.Normalizations.registered[c]("name", a)),
          "transform" !== l && ((m = h(a, A.Names.prefixCheck(l)[0])), A.Values.isCSSNullValue(m) && A.Hooks.templates[c] && (m = A.Hooks.templates[c][1])),
            (i = A.Normalizations.registered[c]("extract", a, m));
        }
        if (!/^[\d-]/.test(i)) {
          var n = g(a);
          if (n && n.isSVG && A.Names.SVGAttribute(c))
            if (/^(height|width)$/i.test(c))
              try {
                i = a.getBBox()[c];
              } catch (q) {
                i = 0;
              }
          else i = a.getAttribute(c);
          else i = h(a, A.Names.prefixCheck(c)[0]);
        }
        return A.Values.isCSSNullValue(i) && (i = 0), y.debug >= 2 && console.log("Get " + c + ": " + i), i;
      },
      setPropertyValue: function(a, c, d, e, f) {
        var h = c;
        if ("scroll" === c) f.container ? (f.container["scroll" + f.direction] = d) : "Left" === f.direction ? b.scrollTo(d, f.alternateValue) : b.scrollTo(f.alternateValue, d);
        else if (A.Normalizations.registered[c] && "transform" === A.Normalizations.registered[c]("name", a)) A.Normalizations.registered[c]("inject", a, d), (h = "transform"), (d = g(a).transformCache[c]);
        else {
          if (A.Hooks.registered[c]) {
            var i = c,
              j = A.Hooks.getRoot(c);
            (e = e || A.getPropertyValue(a, j)), (d = A.Hooks.injectValue(i, d, e)), (c = j);
          }
          if ((A.Normalizations.registered[c] && ((d = A.Normalizations.registered[c]("inject", a, d)), (c = A.Normalizations.registered[c]("name", a))), (h = A.Names.prefixCheck(c)[0]), p <= 8))
            try {
              a.style[h] = d;
            } catch (l) {
              y.debug && console.log("Browser does not support [" + d + "] for [" + h + "]");
            }
          else {
            var k = g(a);
            k && k.isSVG && A.Names.SVGAttribute(c) ? a.setAttribute(c, d) : (a.style[h] = d);
          }
          y.debug >= 2 && console.log("Set " + c + " (" + h + "): " + d);
        }
        return [h, d];
      },
      flushTransformCache: function(a) {
        var b = "",
          c = g(a);
        if ((p || (y.State.isAndroid && !y.State.isChrome)) && c && c.isSVG) {
          var d = function(b) {
              return parseFloat(A.getPropertyValue(a, b));
            },
            e = {
              translate: [d("translateX"), d("translateY")],
              skewX: [d("skewX")],
              skewY: [d("skewY")],
              scale: 1 !== d("scale") ? [d("scale"), d("scale")] : [d("scaleX"), d("scaleY")],
              rotate: [d("rotateZ"), 0, 0]
            };
          o.each(g(a).transformCache, function(a) {
            /^translate/i.test(a) ? (a = "translate") : /^scale/i.test(a) ? (a = "scale") : /^rotate/i.test(a) && (a = "rotate"), e[a] && ((b += a + "(" + e[a].join(" ") + ") "), delete e[a]);
          });
        } else {
          var f, h;
          o.each(g(a).transformCache, function(c) {
              if (((f = g(a).transformCache[c]), "transformPerspective" === c)) return (h = f), !0;
              9 === p && "rotateZ" === c && (c = "rotate"), (b += c + f + " ");
            }),
            h && (b = "perspective" + h + " " + b);
        }
        A.setPropertyValue(a, "transform", b);
      },
    });
    A.Hooks.register(),
      A.Normalizations.register(),
      (y.hook = function(a, b, c) {
        var e;
        return (
          (a = f(a)),
          o.each(a, function(a, f) {
            if ((g(f) === d && y.init(f), c === d)) e === d && (e = A.getPropertyValue(f, b));
            else {
              var h = A.setPropertyValue(f, b, c);
              "transform" === h[0] && y.CSS.flushTransformCache(f), (e = h);
            }
          }),
          e
        );
      });
    var B = function() {
      function a() {
        return k ? z.promise || null : p;
      }

      function e(a, e) {
        function f(f) {
          var k, n;
          if (i.begin && 0 === D)
            try {
              i.begin.call(r, r);
            } catch (V) {
              setTimeout(function() {
                throw V;
              }, 1);
            }
          if ("scroll" === G) {
            var p,
              q,
              w,
              x = /^x$/i.test(i.axis) ? "Left" : "Top",
              B = parseFloat(i.offset) || 0;
            i.container ?
              u.isWrapped(i.container) || u.isNode(i.container) ?
              ((i.container = i.container[0] || i.container), (p = i.container["scroll" + x]), (w = p + o(a).position()[x.toLowerCase()] + B)) :
              (i.container = null) :
              ((p = y.State.scrollAnchor[y.State["scrollProperty" + x]]), (q = y.State.scrollAnchor[y.State["scrollProperty" + ("Left" === x ? "Top" : "Left")]]), (w = o(a).offset()[x.toLowerCase()] + B)),
              (j = {
                scroll: {
                  rootPropertyValue: !1,
                  startValue: p,
                  currentValue: p,
                  endValue: w,
                  unitType: "",
                  easing: i.easing,
                  scrollData: {
                    container: i.container,
                    direction: x,
                    alternateValue: q
                  }
                },
                element: a
              }),
              y.debug && console.log("tweensContainer (scroll): ", j.scroll, a);
          } else if ("reverse" === G) {
            if (!(k = g(a))) return;
            if (!k.tweensContainer) return void o.dequeue(a, i.queue);
            "none" === k.opts.display && (k.opts.display = "auto"),
              "hidden" === k.opts.visibility && (k.opts.visibility = "visible"),
              (k.opts.loop = !1),
              (k.opts.begin = null),
              (k.opts.complete = null),
              v.easing || delete i.easing,
              v.duration || delete i.duration,
              (i = o.extend({}, k.opts, i)),
              (n = o.extend(!0, {}, k ? k.tweensContainer : null));
            for (var E in n)
              if (n.hasOwnProperty(E) && "element" !== E) {
                var F = n[E].startValue;
                (n[E].startValue = n[E].currentValue = n[E].endValue),
                (n[E].endValue = F),
                u.isEmptyObject(v) || (n[E].easing = i.easing),
                  y.debug && console.log("reverse tweensContainer (" + E + "): " + JSON.stringify(n[E]), a);
              }
            j = n;
          } else if ("start" === G) {
            (k = g(a)), k && k.tweensContainer && !0 === k.isAnimating && (n = k.tweensContainer);
            var H = function(e, f) {
              var g,
                l = A.Hooks.getRoot(e),
                m = !1,
                p = f[0],
                q = f[1],
                r = f[2];
              if (!((k && k.isSVG) || "tween" === l || !1 !== A.Names.prefixCheck(l)[1] || A.Normalizations.registered[l] !== d))
                return void(y.debug && console.log("Skipping [" + l + "] due to a lack of browser support."));
              ((i.display !== d && null !== i.display && "none" !== i.display) || (i.visibility !== d && "hidden" !== i.visibility)) && /opacity|filter/.test(e) && !r && 0 !== p && (r = 0),
                i._cacheValues && n && n[e] ?
                (r === d && (r = n[e].endValue + n[e].unitType), (m = k.rootPropertyValueCache[l])) :
                A.Hooks.registered[e] ?
                r === d ?
                ((m = A.getPropertyValue(a, l)), (r = A.getPropertyValue(a, e, m))) :
                (m = A.Hooks.templates[l][1]) :
                r === d && (r = A.getPropertyValue(a, e));
              var s,
                t,
                v,
                w = !1,
                x = function(a, b) {
                  var c, d;
                  return (
                    (d = (b || "0")
                      .toString()
                      .toLowerCase()
                      .replace(/[%A-z]+$/, function(a) {
                        return (c = a), "";
                      })),
                    c || (c = A.Values.getUnitType(a)),
                    [d, c]
                  );
                };
              if (r !== p && u.isString(r) && u.isString(p)) {
                g = "";
                var z = 0,
                  B = 0,
                  C = [],
                  D = [],
                  E = 0,
                  F = 0,
                  G = 0;
                for (r = A.Hooks.fixColors(r), p = A.Hooks.fixColors(p); z < r.length && B < p.length;) {
                  var H = r[z],
                    I = p[B];
                  if (/[\d\.-]/.test(H) && /[\d\.-]/.test(I)) {
                    for (var J = H, K = I, L = ".", N = "."; ++z < r.length;) {
                      if ((H = r[z]) === L) L = "..";
                      else if (!/\d/.test(H)) break;
                      J += H;
                    }
                    for (; ++B < p.length;) {
                      if ((I = p[B]) === N) N = "..";
                      else if (!/\d/.test(I)) break;
                      K += I;
                    }
                    var O = A.Hooks.getUnit(r, z),
                      P = A.Hooks.getUnit(p, B);
                    if (((z += O.length), (B += P.length), O === P)) J === K ? (g += J + O) : ((g += "{" + C.length + (F ? "!" : "") + "}" + O), C.push(parseFloat(J)), D.push(parseFloat(K)));
                    else {
                      var Q = parseFloat(J),
                        R = parseFloat(K);
                      (g += (E < 5 ? "calc" : "") + "(" + (Q ? "{" + C.length + (F ? "!" : "") + "}" : "0") + O + " + " + (R ? "{" + (C.length + (Q ? 1 : 0)) + (F ? "!" : "") + "}" : "0") + P + ")"),
                      Q && (C.push(Q), D.push(0)),
                        R && (C.push(0), D.push(R));
                    }
                  } else {
                    if (H !== I) {
                      E = 0;
                      break;
                    }
                    (g += H),
                    z++,
                    B++,
                    (0 === E && "c" === H) || (1 === E && "a" === H) || (2 === E && "l" === H) || (3 === E && "c" === H) || (E >= 4 && "(" === H) ?
                    E++
                    :
                    ((E && E < 5) || (E >= 4 && ")" === H && --E < 5)) && (E = 0),
                    (0 === F && "r" === H) || (1 === F && "g" === H) || (2 === F && "b" === H) || (3 === F && "a" === H) || (F >= 3 && "(" === H) ?
                    (3 === F && "a" === H && (G = 1), F++) :
                    G && "," === H ?
                      ++G > 3 && (F = G = 0) :
                      ((G && F < (G ? 5 : 4)) || (F >= (G ? 4 : 3) && ")" === H && --F < (G ? 5 : 4))) && (F = G = 0);
                  }
                }
                (z === r.length && B === p.length) || (y.debug && console.error('Trying to pattern match mis-matched strings ["' + p + '", "' + r + '"]'), (g = d)),
                g && (C.length ? (y.debug && console.log('Pattern found "' + g + '" -> ', C, D, "[" + r + "," + p + "]"), (r = C), (p = D), (t = v = "")) : (g = d));
              }
              g ||
                ((s = x(e, r)),
                  (r = s[0]),
                  (v = s[1]),
                  (s = x(e, p)),
                  (p = s[0].replace(/^([+-\/*])=/, function(a, b) {
                    return (w = b), "";
                  })),
                  (t = s[1]),
                  (r = parseFloat(r) || 0),
                  (p = parseFloat(p) || 0),
                  "%" === t && (/^(fontSize|lineHeight)$/.test(e) ? ((p /= 100), (t = "em")) : /^scale/.test(e) ? ((p /= 100), (t = "")) : /(Red|Green|Blue)$/i.test(e) && ((p = (p / 100) * 255), (t = ""))));
              if (/[\/*]/.test(w)) t = v;
              else if (v !== t && 0 !== r)
                if (0 === p) t = v;
                else {
                  h =
                    h ||
                    (function() {
                      var d = {
                          myParent: a.parentNode || c.body,
                          position: A.getPropertyValue(a, "position"),
                          fontSize: A.getPropertyValue(a, "fontSize")
                        },
                        e = d.position === M.lastPosition && d.myParent === M.lastParent,
                        f = d.fontSize === M.lastFontSize;
                      (M.lastParent = d.myParent), (M.lastPosition = d.position), (M.lastFontSize = d.fontSize);
                      var g = {};
                      if (f && e)(g.emToPx = M.lastEmToPx), (g.percentToPxWidth = M.lastPercentToPxWidth), (g.percentToPxHeight = M.lastPercentToPxHeight);
                      else {
                        var h = k && k.isSVG ? c.createElementNS("http://www.w3.org/2000/svg", "rect") : c.createElement("div");
                        y.init(h),
                          d.myParent.appendChild(h),
                          o.each(["overflow", "overflowX", "overflowY"], function(a, b) {
                            y.CSS.setPropertyValue(h, b, "hidden");
                          }),
                          y.CSS.setPropertyValue(h, "position", d.position),
                          y.CSS.setPropertyValue(h, "fontSize", d.fontSize),
                          y.CSS.setPropertyValue(h, "boxSizing", "content-box"),
                          o.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(a, b) {
                            y.CSS.setPropertyValue(h, b, "100%");
                          }),
                          y.CSS.setPropertyValue(h, "paddingLeft", "100em"),
                          (g.percentToPxWidth = M.lastPercentToPxWidth = (parseFloat(A.getPropertyValue(h, "width", null, !0)) || 1) / 100),
                          (g.percentToPxHeight = M.lastPercentToPxHeight = (parseFloat(A.getPropertyValue(h, "height", null, !0)) || 1) / 100),
                          (g.emToPx = M.lastEmToPx = (parseFloat(A.getPropertyValue(h, "paddingLeft")) || 1) / 100),
                          d.myParent.removeChild(h);
                      }
                      return (
                        null === M.remToPx && (M.remToPx = parseFloat(A.getPropertyValue(c.body, "fontSize")) || 16),
                        null === M.vwToPx && ((M.vwToPx = parseFloat(b.innerWidth) / 100), (M.vhToPx = parseFloat(b.innerHeight) / 100)),
                        (g.remToPx = M.remToPx),
                        (g.vwToPx = M.vwToPx),
                        (g.vhToPx = M.vhToPx),
                        y.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(g), a),
                        g
                      );
                    })();
                  var S = /margin|padding|left|right|width|text|word|letter/i.test(e) || /X$/.test(e) || "x" === e ? "x" : "y";
                  switch (v) {
                    case "%":
                      r *= "x" === S ? h.percentToPxWidth : h.percentToPxHeight;
                      break;
                    case "px":
                      break;
                    default:
                      r *= h[v + "ToPx"];
                  }
                  switch (t) {
                    case "%":
                      r *= 1 / ("x" === S ? h.percentToPxWidth : h.percentToPxHeight);
                      break;
                    case "px":
                      break;
                    default:
                      r *= 1 / h[t + "ToPx"];
                  }
                }
              switch (w) {
                case "+":
                  p = r + p;
                  break;
                case "-":
                  p = r - p;
                  break;
                case "*":
                  p *= r;
                  break;
                case "/":
                  p = r / p;
              }
              (j[e] = {
                rootPropertyValue: m,
                startValue: r,
                currentValue: r,
                endValue: p,
                unitType: t,
                easing: q
              }),
              g && (j[e].pattern = g),
                y.debug && console.log("tweensContainer (" + e + "): " + JSON.stringify(j[e]), a);
            };
            for (var I in s)
              if (s.hasOwnProperty(I)) {
                var J = A.Names.camelCase(I),
                  K = (function(b, c) {
                    var d, f, g;
                    return (
                      u.isFunction(b) && (b = b.call(a, e, C)),
                      u.isArray(b) ?
                      ((d = b[0]),
                        (!u.isArray(b[1]) && /^[\d-]/.test(b[1])) || u.isFunction(b[1]) || A.RegEx.isHex.test(b[1]) ?
                        (g = b[1]) :
                        (u.isString(b[1]) && !A.RegEx.isHex.test(b[1]) && y.Easings[b[1]]) || u.isArray(b[1]) ?
                        ((f = c ? b[1] : l(b[1], i.duration)), (g = b[2])) :
                        (g = b[1] || b[2])) :
                      (d = b),
                      c || (f = f || i.easing),
                      u.isFunction(d) && (d = d.call(a, e, C)),
                      u.isFunction(g) && (g = g.call(a, e, C)),
                      [d || 0, f, g]
                    );
                  })(s[I]);
                if (t(A.Lists.colors, J)) {
                  var L = K[0],
                    O = K[1],
                    P = K[2];
                  if (A.RegEx.isHex.test(L)) {
                    for (var Q = ["Red", "Green", "Blue"], R = A.Values.hexToRgb(L), S = P ? A.Values.hexToRgb(P) : d, T = 0; T < Q.length; T++) {
                      var U = [R[T]];
                      O && U.push(O), S !== d && U.push(S[T]), H(J + Q[T], U);
                    }
                    continue;
                  }
                }
                H(J, K);
              }
            j.element = a;
          }
          j.element &&
            (A.Values.addClass(a, "velocity-animating"),
              N.push(j),
              (k = g(a)),
              k && ("" === i.queue && ((k.tweensContainer = j), (k.opts = i)), (k.isAnimating = !0)),
              D === C - 1 ? (y.State.calls.push([N, r, i, null, z.resolver, null, 0]), !1 === y.State.isTicking && ((y.State.isTicking = !0), m())) : D++);
        }
        var h,
          i = o.extend({}, y.defaults, v),
          j = {};
        switch (
          (g(a) === d && y.init(a),
            parseFloat(i.delay) &&
            !1 !== i.queue &&
            o.queue(a, i.queue, function(b, c) {
              if (!0 === c) return !0;
              y.velocityQueueEntryFlag = !0;
              var d = y.State.delayedElements.count++;
              y.State.delayedElements[d] = a;
              var e = (function(a) {
                return function() {
                  (y.State.delayedElements[a] = !1), b();
                };
              })(d);
              (g(a).delayBegin = new Date().getTime()), (g(a).delay = parseFloat(i.delay)), (g(a).delayTimer = {
                setTimeout: setTimeout(b, parseFloat(i.delay)),
                next: e
              });
            }),
            i.duration.toString().toLowerCase())
        ) {
          case "fast":
            i.duration = 200;
            break;
          case "normal":
            i.duration = w;
            break;
          case "slow":
            i.duration = 600;
            break;
          default:
            i.duration = parseFloat(i.duration) || 1;
        }
        if (
          (!1 !== y.mock && (!0 === y.mock ? (i.duration = i.delay = 1) : ((i.duration *= parseFloat(y.mock) || 1), (i.delay *= parseFloat(y.mock) || 1))),
            (i.easing = l(i.easing, i.duration)),
            i.begin && !u.isFunction(i.begin) && (i.begin = null),
            i.progress && !u.isFunction(i.progress) && (i.progress = null),
            i.complete && !u.isFunction(i.complete) && (i.complete = null),
            i.display !== d && null !== i.display && ((i.display = i.display.toString().toLowerCase()), "auto" === i.display && (i.display = y.CSS.Values.getDisplayType(a))),
            i.visibility !== d && null !== i.visibility && (i.visibility = i.visibility.toString().toLowerCase()),
            (i.mobileHA = i.mobileHA && y.State.isMobile && !y.State.isGingerbread),
            !1 === i.queue)
        )
          if (i.delay) {
            var k = y.State.delayedElements.count++;
            y.State.delayedElements[k] = a;
            var n = (function(a) {
              return function() {
                (y.State.delayedElements[a] = !1), f();
              };
            })(k);
            (g(a).delayBegin = new Date().getTime()), (g(a).delay = parseFloat(i.delay)), (g(a).delayTimer = {
              setTimeout: setTimeout(f, parseFloat(i.delay)),
              next: n
            });
          } else f();
        else
          o.queue(a, i.queue, function(a, b) {
            if (!0 === b) return z.promise && z.resolver(r), !0;
            (y.velocityQueueEntryFlag = !0), f(a);
          });
        ("" !== i.queue && "fx" !== i.queue) || "inprogress" === o.queue(a)[0] || o.dequeue(a);
      }
      var j,
        k,
        p,
        q,
        r,
        s,
        v,
        x = arguments[0] && (arguments[0].p || (o.isPlainObject(arguments[0].properties) && !arguments[0].properties.names) || u.isString(arguments[0].properties));
      u.isWrapped(this) ? ((k = !1), (q = 0), (r = this), (p = this)) : ((k = !0), (q = 1), (r = x ? arguments[0].elements || arguments[0].e : arguments[0]));
      var z = {
        promise: null,
        resolver: null,
        rejecter: null
      };
      if (
        (k &&
          y.Promise &&
          (z.promise = new y.Promise(function(a, b) {
            (z.resolver = a), (z.rejecter = b);
          })),
          x ? ((s = arguments[0].properties || arguments[0].p), (v = arguments[0].options || arguments[0].o)) : ((s = arguments[q]), (v = arguments[q + 1])),
          !(r = f(r)))
      )
        return void(z.promise && (s && v && !1 === v.promiseRejectEmpty ? z.resolver() : z.rejecter()));
      var C = r.length,
        D = 0;
      if (!/^(stop|finish|finishAll|pause|resume)$/i.test(s) && !o.isPlainObject(v)) {
        var E = q + 1;
        v = {};
        for (var F = E; F < arguments.length; F++)
          u.isArray(arguments[F]) || (!/^(fast|normal|slow)$/i.test(arguments[F]) && !/^\d/.test(arguments[F])) ?
          u.isString(arguments[F]) || u.isArray(arguments[F]) ?
          (v.easing = arguments[F]) :
          u.isFunction(arguments[F]) && (v.complete = arguments[F]) :
          (v.duration = arguments[F]);
      }
      var G;
      switch (s) {
        case "scroll":
          G = "scroll";
          break;
        case "reverse":
          G = "reverse";
          break;
        case "pause":
          var H = new Date().getTime();
          return (
            o.each(r, function(a, b) {
              h(b, H);
            }),
            o.each(y.State.calls, function(a, b) {
              var c = !1;
              b &&
                o.each(b[1], function(a, e) {
                  var f = v === d ? "" : v;
                  return (
                    (!0 !== f && b[2].queue !== f && (v !== d || !1 !== b[2].queue)) ||
                    (o.each(r, function(a, d) {
                        if (d === e) return (b[5] = {
                          resume: !1
                        }), (c = !0), !1;
                      }),
                      !c && void 0)
                  );
                });
            }),
            a()
          );
        case "resume":
          return (
            o.each(r, function(a, b) {
              i(b, H);
            }),
            o.each(y.State.calls, function(a, b) {
              var c = !1;
              b &&
                o.each(b[1], function(a, e) {
                  var f = v === d ? "" : v;
                  return (
                    (!0 !== f && b[2].queue !== f && (v !== d || !1 !== b[2].queue)) ||
                    !b[5] ||
                    (o.each(r, function(a, d) {
                        if (d === e) return (b[5].resume = !0), (c = !0), !1;
                      }),
                      !c && void 0)
                  );
                });
            }),
            a()
          );
        case "finish":
        case "finishAll":
        case "stop":
          o.each(r, function(a, b) {
            g(b) && g(b).delayTimer && (clearTimeout(g(b).delayTimer.setTimeout), g(b).delayTimer.next && g(b).delayTimer.next(), delete g(b).delayTimer),
              "finishAll" !== s ||
              (!0 !== v && !u.isString(v)) ||
              (o.each(o.queue(b, u.isString(v) ? v : ""), function(a, b) {
                  u.isFunction(b) && b();
                }),
                o.queue(b, u.isString(v) ? v : "", []));
          });
          var I = [];
          return (
            o.each(y.State.calls, function(a, b) {
              b &&
                o.each(b[1], function(c, e) {
                  var f = v === d ? "" : v;
                  if (!0 !== f && b[2].queue !== f && (v !== d || !1 !== b[2].queue)) return !0;
                  o.each(r, function(c, d) {
                    if (d === e)
                      if (
                        ((!0 === v || u.isString(v)) &&
                          (o.each(o.queue(d, u.isString(v) ? v : ""), function(a, b) {
                              u.isFunction(b) && b(null, !0);
                            }),
                            o.queue(d, u.isString(v) ? v : "", [])),
                          "stop" === s)
                      ) {
                        var h = g(d);
                        h &&
                          h.tweensContainer &&
                          (!0 === f || "" === f) &&
                          o.each(h.tweensContainer, function(a, b) {
                            b.endValue = b.currentValue;
                          }),
                          I.push(a);
                      } else("finish" !== s && "finishAll" !== s) || (b[2].duration = 1);
                  });
                });
            }),
            "stop" === s &&
            (o.each(I, function(a, b) {
                n(b, !0);
              }),
              z.promise && z.resolver(r)),
            a()
          );
        default:
          if (!o.isPlainObject(s) || u.isEmptyObject(s)) {
            if (u.isString(s) && y.Redirects[s]) {
              j = o.extend({}, v);
              var J = j.duration,
                K = j.delay || 0;
              return (
                !0 === j.backwards && (r = o.extend(!0, [], r).reverse()),
                o.each(r, function(a, b) {
                  parseFloat(j.stagger) ? (j.delay = K + parseFloat(j.stagger) * a) : u.isFunction(j.stagger) && (j.delay = K + j.stagger.call(b, a, C)),
                    j.drag && ((j.duration = parseFloat(J) || (/^(callout|transition)/.test(s) ? 1e3 : w)), (j.duration = Math.max(j.duration * (j.backwards ? 1 - a / C : (a + 1) / C), 0.75 * j.duration, 200))),
                    y.Redirects[s].call(b, b, j || {}, a, C, r, z.promise ? z : d);
                }),
                a()
              );
            }
            var L = "Velocity: First argument (" + s + ") was not a property map, a known action, or a registered redirect. Aborting.";
            return z.promise ? z.rejecter(new Error(L)) : b.console && console.log(L), a();
          }
          G = "start";
      }
      var M = {
          lastParent: null,
          lastPosition: null,
          lastFontSize: null,
          lastPercentToPxWidth: null,
          lastPercentToPxHeight: null,
          lastEmToPx: null,
          remToPx: null,
          vwToPx: null,
          vhToPx: null
        },
        N = [];
      o.each(r, function(a, b) {
          u.isNode(b) && e(b, a);
        }),
        (j = o.extend({}, y.defaults, v)),
        (j.loop = parseInt(j.loop, 10));
      var O = 2 * j.loop - 1;
      if (j.loop)
        for (var P = 0; P < O; P++) {
          var Q = {
            delay: j.delay,
            progress: j.progress
          };
          P === O - 1 && ((Q.display = j.display), (Q.visibility = j.visibility), (Q.complete = j.complete)), B(r, "reverse", Q);
        }
      return a();
    };
    (y = o.extend(B, y)), (y.animate = B);
    var C = b.requestAnimationFrame || q;
    if (!y.State.isMobile && c.hidden !== d) {
      var D = function() {
        c.hidden ?
          ((C = function(a) {
              return setTimeout(function() {
                a(!0);
              }, 16);
            }),
            m()) :
          (C = b.requestAnimationFrame || q);
      };
      D(), c.addEventListener("visibilitychange", D);
    }
    return (
      (a.Velocity = y),
      a !== b && ((a.fn.velocity = B), (a.fn.velocity.defaults = y.defaults)),
      o.each(["Down", "Up"], function(a, b) {
        y.Redirects["slide" + b] = function(a, c, e, f, g, h) {
          var i = o.extend({}, c),
            j = i.begin,
            k = i.complete,
            l = {},
            m = {
              height: "",
              marginTop: "",
              marginBottom: "",
              paddingTop: "",
              paddingBottom: ""
            };
          i.display === d && (i.display = "Down" === b ? ("inline" === y.CSS.Values.getDisplayType(a) ? "inline-block" : "block") : "none"),
            (i.begin = function() {
              0 === e && j && j.call(g, g);
              for (var c in m)
                if (m.hasOwnProperty(c)) {
                  l[c] = a.style[c];
                  var d = A.getPropertyValue(a, c);
                  m[c] = "Down" === b ? [d, 0] : [0, d];
                }
                (l.overflow = a.style.overflow), (a.style.overflow = "hidden");
            }),
            (i.complete = function() {
              for (var b in l) l.hasOwnProperty(b) && (a.style[b] = l[b]);
              e === f - 1 && (k && k.call(g, g), h && h.resolver(g));
            }),
            y(a, m, i);
        };
      }),
      o.each(["In", "Out"], function(a, b) {
        y.Redirects["fade" + b] = function(a, c, e, f, g, h) {
          var i = o.extend({}, c),
            j = i.complete,
            k = {
              opacity: "In" === b ? 1 : 0
            };
          0 !== e && (i.begin = null),
            (i.complete =
              e !== f - 1 ?
              null :
              function() {
                j && j.call(g, g), h && h.resolver(g);
              }),
            i.display === d && (i.display = "In" === b ? "auto" : "none"),
            y(this, k, i);
        };
      }),
      y
    );
  })(window.jQuery || window.Zepto || window, window, window ? window.document : undefined);
});
/*! Magnific Popup - v1.1.0 - 2016-02-20
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2016 Dmitry Semenov; */
(function(factory) {
  if (typeof define === "function" && define.amd) {
    define(["jquery"], factory);
  } else if (typeof exports === "object") {
    factory(require("jquery"));
  } else {
    factory(window.jQuery || window.Zepto);
  }
})(function($) {
  var CLOSE_EVENT = "Close",
    BEFORE_CLOSE_EVENT = "BeforeClose",
    AFTER_CLOSE_EVENT = "AfterClose",
    BEFORE_APPEND_EVENT = "BeforeAppend",
    MARKUP_PARSE_EVENT = "MarkupParse",
    OPEN_EVENT = "Open",
    CHANGE_EVENT = "Change",
    NS = "mfp",
    EVENT_NS = "." + NS,
    READY_CLASS = "mfp-ready",
    REMOVING_CLASS = "mfp-removing",
    PREVENT_CLOSE_CLASS = "mfp-prevent-close";
  var mfp,
    MagnificPopup = function() {},
    _isJQ = !!window.jQuery,
    _prevStatus,
    _window = $(window),
    _document,
    _prevContentType,
    _wrapClasses,
    _currPopupType;
  var _mfpOn = function(name, f) {
      mfp.ev.on(NS + name + EVENT_NS, f);
    },
    _getEl = function(className, appendTo, html, raw) {
      var el = document.createElement("div");
      el.className = "mfp-" + className;
      if (html) {
        el.innerHTML = html;
      }
      if (!raw) {
        el = $(el);
        if (appendTo) {
          el.appendTo(appendTo);
        }
      } else if (appendTo) {
        appendTo.appendChild(el);
      }
      return el;
    },
    _mfpTrigger = function(e, data) {
      mfp.ev.triggerHandler(NS + e, data);
      if (mfp.st.callbacks) {
        e = e.charAt(0).toLowerCase() + e.slice(1);
        if (mfp.st.callbacks[e]) {
          mfp.st.callbacks[e].apply(mfp, $.isArray(data) ? data : [data]);
        }
      }
    },
    _getCloseBtn = function(type) {
      if (type !== _currPopupType || !mfp.currTemplate.closeBtn) {
        mfp.currTemplate.closeBtn = $(mfp.st.closeMarkup.replace("%title%", mfp.st.tClose));
        _currPopupType = type;
      }
      return mfp.currTemplate.closeBtn;
    },
    _checkInstance = function() {
      if (!$.magnificPopup.instance) {
        mfp = new MagnificPopup();
        mfp.init();
        $.magnificPopup.instance = mfp;
      }
    },
    supportsTransitions = function() {
      var s = document.createElement("p").style,
        v = ["ms", "O", "Moz", "Webkit"];
      if (s["transition"] !== undefined) {
        return true;
      }
      while (v.length) {
        if (v.pop() + "Transition" in s) {
          return true;
        }
      }
      return false;
    };
  MagnificPopup.prototype = {
    constructor: MagnificPopup,
    init: function() {
      var appVersion = navigator.appVersion;
      mfp.isLowIE = mfp.isIE8 = document.all && !document.addEventListener;
      mfp.isAndroid = /android/gi.test(appVersion);
      mfp.isIOS = /iphone|ipad|ipod/gi.test(appVersion);
      mfp.supportsTransition = supportsTransitions();
      mfp.probablyMobile = mfp.isAndroid || mfp.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent);
      _document = $(document);
      mfp.popupsCache = {};
    },
    open: function(data) {
      var i;
      if (data.isObj === false) {
        mfp.items = data.items.toArray();
        mfp.index = 0;
        var items = data.items,
          item;
        for (i = 0; i < items.length; i++) {
          item = items[i];
          if (item.parsed) {
            item = item.el[0];
          }
          if (item === data.el[0]) {
            mfp.index = i;
            break;
          }
        }
      } else {
        mfp.items = $.isArray(data.items) ? data.items : [data.items];
        mfp.index = data.index || 0;
      }
      if (mfp.isOpen) {
        mfp.updateItemHTML();
        return;
      }
      mfp.types = [];
      _wrapClasses = "";
      if (data.mainEl && data.mainEl.length) {
        mfp.ev = data.mainEl.eq(0);
      } else {
        mfp.ev = _document;
      }
      if (data.key) {
        if (!mfp.popupsCache[data.key]) {
          mfp.popupsCache[data.key] = {};
        }
        mfp.currTemplate = mfp.popupsCache[data.key];
      } else {
        mfp.currTemplate = {};
      }
      mfp.st = $.extend(true, {}, $.magnificPopup.defaults, data);
      mfp.fixedContentPos = mfp.st.fixedContentPos === "auto" ? !mfp.probablyMobile : mfp.st.fixedContentPos;
      if (mfp.st.modal) {
        mfp.st.closeOnContentClick = false;
        mfp.st.closeOnBgClick = false;
        mfp.st.showCloseBtn = false;
        mfp.st.enableEscapeKey = false;
      }
      if (!mfp.bgOverlay) {
        mfp.bgOverlay = _getEl("bg").on("click" + EVENT_NS, function() {
          mfp.close();
        });
        mfp.wrap = _getEl("wrap")
          .attr("tabindex", -1)
          .on("click" + EVENT_NS, function(e) {
            if (mfp._checkIfClose(e.target)) {
              mfp.close();
            }
          });
        mfp.container = _getEl("container", mfp.wrap);
      }
      mfp.contentContainer = _getEl("content");
      if (mfp.st.preloader) {
        mfp.preloader = _getEl("preloader", mfp.container, mfp.st.tLoading);
      }
      var modules = $.magnificPopup.modules;
      for (i = 0; i < modules.length; i++) {
        var n = modules[i];
        n = n.charAt(0).toUpperCase() + n.slice(1);
        mfp["init" + n].call(mfp);
      }
      _mfpTrigger("BeforeOpen");
      if (mfp.st.showCloseBtn) {
        if (!mfp.st.closeBtnInside) {
          mfp.wrap.append(_getCloseBtn());
        } else {
          _mfpOn(MARKUP_PARSE_EVENT, function(e, template, values, item) {
            values.close_replaceWith = _getCloseBtn(item.type);
          });
          _wrapClasses += " mfp-close-btn-in";
        }
      }
      if (mfp.st.alignTop) {
        _wrapClasses += " mfp-align-top";
      }
      if (mfp.fixedContentPos) {
        mfp.wrap.css({
          overflow: mfp.st.overflowY,
          overflowX: "hidden",
          overflowY: mfp.st.overflowY
        });
      } else {
        mfp.wrap.css({
          top: _window.scrollTop(),
          position: "absolute"
        });
      }
      if (mfp.st.fixedBgPos === false || (mfp.st.fixedBgPos === "auto" && !mfp.fixedContentPos)) {
        mfp.bgOverlay.css({
          height: _document.height(),
          position: "absolute"
        });
      }
      if (mfp.st.enableEscapeKey) {
        _document.on("keyup" + EVENT_NS, function(e) {
          if (e.keyCode === 27) {
            mfp.close();
          }
        });
      }
      _window.on("resize" + EVENT_NS, function() {
        mfp.updateSize();
      });
      if (!mfp.st.closeOnContentClick) {
        _wrapClasses += " mfp-auto-cursor";
      }
      if (_wrapClasses) mfp.wrap.addClass(_wrapClasses);
      var windowHeight = (mfp.wH = _window.height());
      var windowStyles = {};
      if (mfp.fixedContentPos) {
        if (mfp._hasScrollBar(windowHeight)) {
          var s = mfp._getScrollbarSize();
          if (s) {
            windowStyles.marginRight = s;
          }
        }
      }
      if (mfp.fixedContentPos) {
        if (!mfp.isIE7) {
          windowStyles.overflow = "hidden";
        } else {
          $("body, html").css("overflow", "hidden");
        }
      }
      var classesToadd = mfp.st.mainClass;
      if (mfp.isIE7) {
        classesToadd += " mfp-ie7";
      }
      if (classesToadd) {
        mfp._addClassToMFP(classesToadd);
      }
      mfp.updateItemHTML();
      _mfpTrigger("BuildControls");
      $("html").css(windowStyles);
      mfp.bgOverlay.add(mfp.wrap).prependTo(mfp.st.prependTo || $(document.body));
      mfp._lastFocusedEl = document.activeElement;
      setTimeout(function() {
        if (mfp.content) {
          mfp._addClassToMFP(READY_CLASS);
          mfp._setFocus();
        } else {
          mfp.bgOverlay.addClass(READY_CLASS);
        }
        _document.on("focusin" + EVENT_NS, mfp._onFocusIn);
      }, 16);
      mfp.isOpen = true;
      mfp.updateSize(windowHeight);
      _mfpTrigger(OPEN_EVENT);
      return data;
    },
    close: function() {
      if (!mfp.isOpen) return;
      _mfpTrigger(BEFORE_CLOSE_EVENT);
      mfp.isOpen = false;
      if (mfp.st.removalDelay && !mfp.isLowIE && mfp.supportsTransition) {
        mfp._addClassToMFP(REMOVING_CLASS);
        setTimeout(function() {
          mfp._close();
        }, mfp.st.removalDelay);
      } else {
        mfp._close();
      }
    },
    _close: function() {
      _mfpTrigger(CLOSE_EVENT);
      var classesToRemove = REMOVING_CLASS + " " + READY_CLASS + " ";
      mfp.bgOverlay.detach();
      mfp.wrap.detach();
      mfp.container.empty();
      if (mfp.st.mainClass) {
        classesToRemove += mfp.st.mainClass + " ";
      }
      mfp._removeClassFromMFP(classesToRemove);
      if (mfp.fixedContentPos) {
        var windowStyles = {
          marginRight: ""
        };
        if (mfp.isIE7) {
          $("body, html").css("overflow", "");
        } else {
          windowStyles.overflow = "";
        }
        $("html").css(windowStyles);
      }
      _document.off("keyup" + EVENT_NS + " focusin" + EVENT_NS);
      mfp.ev.off(EVENT_NS);
      mfp.wrap.attr("class", "mfp-wrap").removeAttr("style");
      mfp.bgOverlay.attr("class", "mfp-bg");
      mfp.container.attr("class", "mfp-container");
      if (mfp.st.showCloseBtn && (!mfp.st.closeBtnInside || mfp.currTemplate[mfp.currItem.type] === true)) {
        if (mfp.currTemplate.closeBtn) mfp.currTemplate.closeBtn.detach();
      }
      if (mfp.st.autoFocusLast && mfp._lastFocusedEl) {
        $(mfp._lastFocusedEl).focus();
      }
      mfp.currItem = null;
      mfp.content = null;
      mfp.currTemplate = null;
      mfp.prevHeight = 0;
      _mfpTrigger(AFTER_CLOSE_EVENT);
    },
    updateSize: function(winHeight) {
      if (mfp.isIOS) {
        var zoomLevel = document.documentElement.clientWidth / window.innerWidth;
        var height = window.innerHeight * zoomLevel;
        mfp.wrap.css("height", height);
        mfp.wH = height;
      } else {
        mfp.wH = winHeight || _window.height();
      }
      if (!mfp.fixedContentPos) {
        mfp.wrap.css("height", mfp.wH);
      }
      _mfpTrigger("Resize");
    },
    updateItemHTML: function() {
      var item = mfp.items[mfp.index];
      mfp.contentContainer.detach();
      if (mfp.content) mfp.content.detach();
      if (!item.parsed) {
        item = mfp.parseEl(mfp.index);
      }
      var type = item.type;
      _mfpTrigger("BeforeChange", [mfp.currItem ? mfp.currItem.type : "", type]);
      mfp.currItem = item;
      if (!mfp.currTemplate[type]) {
        var markup = mfp.st[type] ? mfp.st[type].markup : false;
        _mfpTrigger("FirstMarkupParse", markup);
        if (markup) {
          mfp.currTemplate[type] = $(markup);
        } else {
          mfp.currTemplate[type] = true;
        }
      }
      if (_prevContentType && _prevContentType !== item.type) {
        mfp.container.removeClass("mfp-" + _prevContentType + "-holder");
      }
      var newContent = mfp["get" + type.charAt(0).toUpperCase() + type.slice(1)](item, mfp.currTemplate[type]);
      mfp.appendContent(newContent, type);
      item.preloaded = true;
      _mfpTrigger(CHANGE_EVENT, item);
      _prevContentType = item.type;
      mfp.container.prepend(mfp.contentContainer);
      _mfpTrigger("AfterChange");
    },
    appendContent: function(newContent, type) {
      mfp.content = newContent;
      if (newContent) {
        if (mfp.st.showCloseBtn && mfp.st.closeBtnInside && mfp.currTemplate[type] === true) {
          if (!mfp.content.find(".mfp-close").length) {
            mfp.content.append(_getCloseBtn());
          }
        } else {
          mfp.content = newContent;
        }
      } else {
        mfp.content = "";
      }
      _mfpTrigger(BEFORE_APPEND_EVENT);
      mfp.container.addClass("mfp-" + type + "-holder");
      mfp.contentContainer.append(mfp.content);
    },
    parseEl: function(index) {
      var item = mfp.items[index],
        type;
      if (item.tagName) {
        item = {
          el: $(item)
        };
      } else {
        type = item.type;
        item = {
          data: item,
          src: item.src
        };
      }
      if (item.el) {
        var types = mfp.types;
        for (var i = 0; i < types.length; i++) {
          if (item.el.hasClass("mfp-" + types[i])) {
            type = types[i];
            break;
          }
        }
        item.src = item.el.attr("data-mfp-src");
        if (!item.src) {
          item.src = item.el.attr("href");
        }
      }
      item.type = type || mfp.st.type || "inline";
      item.index = index;
      item.parsed = true;
      mfp.items[index] = item;
      _mfpTrigger("ElementParse", item);
      return mfp.items[index];
    },
    addGroup: function(el, options) {
      var eHandler = function(e) {
        e.mfpEl = this;
        mfp._openClick(e, el, options);
      };
      if (!options) {
        options = {};
      }
      var eName = "click.magnificPopup";
      options.mainEl = el;
      if (options.items) {
        options.isObj = true;
        el.off(eName).on(eName, eHandler);
      } else {
        options.isObj = false;
        if (options.delegate) {
          el.off(eName).on(eName, options.delegate, eHandler);
        } else {
          options.items = el;
          el.off(eName).on(eName, eHandler);
        }
      }
    },
    _openClick: function(e, el, options) {
      var midClick = options.midClick !== undefined ? options.midClick : $.magnificPopup.defaults.midClick;
      if (!midClick && (e.which === 2 || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey)) {
        return;
      }
      var disableOn = options.disableOn !== undefined ? options.disableOn : $.magnificPopup.defaults.disableOn;
      if (disableOn) {
        if ($.isFunction(disableOn)) {
          if (!disableOn.call(mfp)) {
            return true;
          }
        } else {
          if (_window.width() < disableOn) {
            return true;
          }
        }
      }
      if (e.type) {
        e.preventDefault();
        if (mfp.isOpen) {
          e.stopPropagation();
        }
      }
      options.el = $(e.mfpEl);
      if (options.delegate) {
        options.items = el.find(options.delegate);
      }
      mfp.open(options);
    },
    updateStatus: function(status, text) {
      if (mfp.preloader) {
        if (_prevStatus !== status) {
          mfp.container.removeClass("mfp-s-" + _prevStatus);
        }
        if (!text && status === "loading") {
          text = mfp.st.tLoading;
        }
        var data = {
          status: status,
          text: text
        };
        _mfpTrigger("UpdateStatus", data);
        status = data.status;
        text = data.text;
        mfp.preloader.html(text);
        mfp.preloader.find("a").on("click", function(e) {
          e.stopImmediatePropagation();
        });
        mfp.container.addClass("mfp-s-" + status);
        _prevStatus = status;
      }
    },
    _checkIfClose: function(target) {
      if ($(target).hasClass(PREVENT_CLOSE_CLASS)) {
        return;
      }
      var closeOnContent = mfp.st.closeOnContentClick;
      var closeOnBg = mfp.st.closeOnBgClick;
      if (closeOnContent && closeOnBg) {
        return true;
      } else {
        if (!mfp.content || $(target).hasClass("mfp-close") || (mfp.preloader && target === mfp.preloader[0])) {
          return true;
        }
        if (target !== mfp.content[0] && !$.contains(mfp.content[0], target)) {
          if (closeOnBg) {
            if ($.contains(document, target)) {
              return true;
            }
          }
        } else if (closeOnContent) {
          return true;
        }
      }
      return false;
    },
    _addClassToMFP: function(cName) {
      mfp.bgOverlay.addClass(cName);
      mfp.wrap.addClass(cName);
    },
    _removeClassFromMFP: function(cName) {
      this.bgOverlay.removeClass(cName);
      mfp.wrap.removeClass(cName);
    },
    _hasScrollBar: function(winHeight) {
      return (mfp.isIE7 ? _document.height() : document.body.scrollHeight) > (winHeight || _window.height());
    },
    _setFocus: function() {
      (mfp.st.focus ? mfp.content.find(mfp.st.focus).eq(0) : mfp.wrap).focus();
    },
    _onFocusIn: function(e) {
      if (e.target !== mfp.wrap[0] && !$.contains(mfp.wrap[0], e.target)) {
        mfp._setFocus();
        return false;
      }
    },
    _parseMarkup: function(template, values, item) {
      var arr;
      if (item.data) {
        values = $.extend(item.data, values);
      }
      _mfpTrigger(MARKUP_PARSE_EVENT, [template, values, item]);
      $.each(values, function(key, value) {
        if (value === undefined || value === false) {
          return true;
        }
        arr = key.split("_");
        if (arr.length > 1) {
          var el = template.find(EVENT_NS + "-" + arr[0]);
          if (el.length > 0) {
            var attr = arr[1];
            if (attr === "replaceWith") {
              if (el[0] !== value[0]) {
                el.replaceWith(value);
              }
            } else if (attr === "img") {
              if (el.is("img")) {
                el.attr("src", value);
              } else {
                el.replaceWith($("<img>").attr("src", value).attr("class", el.attr("class")));
              }
            } else {
              el.attr(arr[1], value);
            }
          }
        } else {
          template.find(EVENT_NS + "-" + key).html(value);
        }
      });
    },
    _getScrollbarSize: function() {
      if (mfp.scrollbarSize === undefined) {
        var scrollDiv = document.createElement("div");
        scrollDiv.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;";
        document.body.appendChild(scrollDiv);
        mfp.scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        document.body.removeChild(scrollDiv);
      }
      return mfp.scrollbarSize;
    },
  };
  $.magnificPopup = {
    instance: null,
    proto: MagnificPopup.prototype,
    modules: [],
    open: function(options, index) {
      _checkInstance();
      if (!options) {
        options = {};
      } else {
        options = $.extend(true, {}, options);
      }
      options.isObj = true;
      options.index = index || 0;
      return this.instance.open(options);
    },
    close: function() {
      return $.magnificPopup.instance && $.magnificPopup.instance.close();
    },
    registerModule: function(name, module) {
      if (module.options) {
        $.magnificPopup.defaults[name] = module.options;
      }
      $.extend(this.proto, module.proto);
      this.modules.push(name);
    },
    defaults: {
      disableOn: 0,
      key: null,
      midClick: false,
      mainClass: "",
      preloader: true,
      focus: "",
      closeOnContentClick: false,
      closeOnBgClick: true,
      closeBtnInside: true,
      showCloseBtn: true,
      enableEscapeKey: true,
      modal: false,
      alignTop: false,
      removalDelay: 0,
      prependTo: null,
      fixedContentPos: "auto",
      fixedBgPos: "auto",
      overflowY: "auto",
      closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
      tClose: "Close (Esc)",
      tLoading: "Loading...",
      autoFocusLast: true,
    },
  };
  $.fn.magnificPopup = function(options) {
    _checkInstance();
    var jqEl = $(this);
    if (typeof options === "string") {
      if (options === "open") {
        var items,
          itemOpts = _isJQ ? jqEl.data("magnificPopup") : jqEl[0].magnificPopup,
          index = parseInt(arguments[1], 10) || 0;
        if (itemOpts.items) {
          items = itemOpts.items[index];
        } else {
          items = jqEl;
          if (itemOpts.delegate) {
            items = items.find(itemOpts.delegate);
          }
          items = items.eq(index);
        }
        mfp._openClick({
          mfpEl: items
        }, jqEl, itemOpts);
      } else {
        if (mfp.isOpen) mfp[options].apply(mfp, Array.prototype.slice.call(arguments, 1));
      }
    } else {
      options = $.extend(true, {}, options);
      if (_isJQ) {
        jqEl.data("magnificPopup", options);
      } else {
        jqEl[0].magnificPopup = options;
      }
      mfp.addGroup(jqEl, options);
    }
    return jqEl;
  };
  var INLINE_NS = "inline",
    _hiddenClass,
    _inlinePlaceholder,
    _lastInlineElement,
    _putInlineElementsBack = function() {
      if (_lastInlineElement) {
        _inlinePlaceholder.after(_lastInlineElement.addClass(_hiddenClass)).detach();
        _lastInlineElement = null;
      }
    };
  $.magnificPopup.registerModule(INLINE_NS, {
    options: {
      hiddenClass: "hide",
      markup: "",
      tNotFound: "Content not found"
    },
    proto: {
      initInline: function() {
        mfp.types.push(INLINE_NS);
        _mfpOn(CLOSE_EVENT + "." + INLINE_NS, function() {
          _putInlineElementsBack();
        });
      },
      getInline: function(item, template) {
        _putInlineElementsBack();
        if (item.src) {
          var inlineSt = mfp.st.inline,
            el = $(item.src);
          if (el.length) {
            var parent = el[0].parentNode;
            if (parent && parent.tagName) {
              if (!_inlinePlaceholder) {
                _hiddenClass = inlineSt.hiddenClass;
                _inlinePlaceholder = _getEl(_hiddenClass);
                _hiddenClass = "mfp-" + _hiddenClass;
              }
              _lastInlineElement = el.after(_inlinePlaceholder).detach().removeClass(_hiddenClass);
            }
            mfp.updateStatus("ready");
          } else {
            mfp.updateStatus("error", inlineSt.tNotFound);
            el = $("<div>");
          }
          item.inlineElement = el;
          return el;
        }
        mfp.updateStatus("ready");
        mfp._parseMarkup(template, {}, item);
        return template;
      },
    },
  });
  var AJAX_NS = "ajax",
    _ajaxCur,
    _removeAjaxCursor = function() {
      if (_ajaxCur) {
        $(document.body).removeClass(_ajaxCur);
      }
    },
    _destroyAjaxRequest = function() {
      _removeAjaxCursor();
      if (mfp.req) {
        mfp.req.abort();
      }
    };
  $.magnificPopup.registerModule(AJAX_NS, {
    options: {
      settings: null,
      cursor: "mfp-ajax-cur",
      tError: '<a href="%url%">The content</a> could not be loaded.'
    },
    proto: {
      initAjax: function() {
        mfp.types.push(AJAX_NS);
        _ajaxCur = mfp.st.ajax.cursor;
        _mfpOn(CLOSE_EVENT + "." + AJAX_NS, _destroyAjaxRequest);
        _mfpOn("BeforeChange." + AJAX_NS, _destroyAjaxRequest);
      },
      getAjax: function(item) {
        if (_ajaxCur) {
          $(document.body).addClass(_ajaxCur);
        }
        mfp.updateStatus("loading");
        var opts = $.extend({
            url: item.src,
            success: function(data, textStatus, jqXHR) {
              var temp = {
                data: data,
                xhr: jqXHR
              };
              _mfpTrigger("ParseAjax", temp);
              mfp.appendContent($(temp.data), AJAX_NS);
              item.finished = true;
              _removeAjaxCursor();
              mfp._setFocus();
              setTimeout(function() {
                mfp.wrap.addClass(READY_CLASS);
              }, 16);
              mfp.updateStatus("ready");
              _mfpTrigger("AjaxContentAdded");
            },
            error: function() {
              _removeAjaxCursor();
              item.finished = item.loadError = true;
              mfp.updateStatus("error", mfp.st.ajax.tError.replace("%url%", item.src));
            },
          },
          mfp.st.ajax.settings
        );
        mfp.req = $.ajax(opts);
        return "";
      },
    },
  });
  var _imgInterval,
    _getTitle = function(item) {
      if (item.data && item.data.title !== undefined) return item.data.title;
      var src = mfp.st.image.titleSrc;
      if (src) {
        if ($.isFunction(src)) {
          return src.call(mfp, item);
        } else if (item.el) {
          return item.el.attr(src) || "";
        }
      }
      return "";
    };
  $.magnificPopup.registerModule("image", {
    options: {
      markup: '<div class="mfp-figure">' +
        '<div class="mfp-close"></div>' +
        "<figure>" +
        '<div class="mfp-img"></div>' +
        "<figcaption>" +
        '<div class="mfp-bottom-bar">' +
        '<div class="mfp-title"></div>' +
        '<div class="mfp-counter"></div>' +
        "</div>" +
        "</figcaption>" +
        "</figure>" +
        "</div>",
      cursor: "mfp-zoom-out-cur",
      titleSrc: "title",
      verticalFit: true,
      tError: '<a href="%url%">The image</a> could not be loaded.',
    },
    proto: {
      initImage: function() {
        var imgSt = mfp.st.image,
          ns = ".image";
        mfp.types.push("image");
        _mfpOn(OPEN_EVENT + ns, function() {
          if (mfp.currItem.type === "image" && imgSt.cursor) {
            $(document.body).addClass(imgSt.cursor);
          }
        });
        _mfpOn(CLOSE_EVENT + ns, function() {
          if (imgSt.cursor) {
            $(document.body).removeClass(imgSt.cursor);
          }
          _window.off("resize" + EVENT_NS);
        });
        _mfpOn("Resize" + ns, mfp.resizeImage);
        if (mfp.isLowIE) {
          _mfpOn("AfterChange", mfp.resizeImage);
        }
      },
      resizeImage: function() {
        var item = mfp.currItem;
        if (!item || !item.img) return;
        if (mfp.st.image.verticalFit) {
          var decr = 0;
          if (mfp.isLowIE) {
            decr = parseInt(item.img.css("padding-top"), 10) + parseInt(item.img.css("padding-bottom"), 10);
          }
          item.img.css("max-height", mfp.wH - decr);
        }
      },
      _onImageHasSize: function(item) {
        if (item.img) {
          item.hasSize = true;
          if (_imgInterval) {
            clearInterval(_imgInterval);
          }
          item.isCheckingImgSize = false;
          _mfpTrigger("ImageHasSize", item);
          if (item.imgHidden) {
            if (mfp.content) mfp.content.removeClass("mfp-loading");
            item.imgHidden = false;
          }
        }
      },
      findImageSize: function(item) {
        var counter = 0,
          img = item.img[0],
          mfpSetInterval = function(delay) {
            if (_imgInterval) {
              clearInterval(_imgInterval);
            }
            _imgInterval = setInterval(function() {
              if (img.naturalWidth > 0) {
                mfp._onImageHasSize(item);
                return;
              }
              if (counter > 200) {
                clearInterval(_imgInterval);
              }
              counter++;
              if (counter === 3) {
                mfpSetInterval(10);
              } else if (counter === 40) {
                mfpSetInterval(50);
              } else if (counter === 100) {
                mfpSetInterval(500);
              }
            }, delay);
          };
        mfpSetInterval(1);
      },
      getImage: function(item, template) {
        var guard = 0,
          onLoadComplete = function() {
            if (item) {
              if (item.img[0].complete) {
                item.img.off(".mfploader");
                if (item === mfp.currItem) {
                  mfp._onImageHasSize(item);
                  mfp.updateStatus("ready");
                }
                item.hasSize = true;
                item.loaded = true;
                _mfpTrigger("ImageLoadComplete");
              } else {
                guard++;
                if (guard < 200) {
                  setTimeout(onLoadComplete, 100);
                } else {
                  onLoadError();
                }
              }
            }
          },
          onLoadError = function() {
            if (item) {
              item.img.off(".mfploader");
              if (item === mfp.currItem) {
                mfp._onImageHasSize(item);
                mfp.updateStatus("error", imgSt.tError.replace("%url%", item.src));
              }
              item.hasSize = true;
              item.loaded = true;
              item.loadError = true;
            }
          },
          imgSt = mfp.st.image;
        var el = template.find(".mfp-img");
        if (el.length) {
          var img = document.createElement("img");
          img.className = "mfp-img";
          if (item.el && item.el.find("img").length) {
            img.alt = item.el.find("img").attr("alt");
          }
          item.img = $(img).on("load.mfploader", onLoadComplete).on("error.mfploader", onLoadError);
          img.src = item.src;
          if (el.is("img")) {
            item.img = item.img.clone();
          }
          img = item.img[0];
          if (img.naturalWidth > 0) {
            item.hasSize = true;
          } else if (!img.width) {
            item.hasSize = false;
          }
        }
        mfp._parseMarkup(template, {
          title: _getTitle(item),
          img_replaceWith: item.img
        }, item);
        mfp.resizeImage();
        if (item.hasSize) {
          if (_imgInterval) clearInterval(_imgInterval);
          if (item.loadError) {
            template.addClass("mfp-loading");
            mfp.updateStatus("error", imgSt.tError.replace("%url%", item.src));
          } else {
            template.removeClass("mfp-loading");
            mfp.updateStatus("ready");
          }
          return template;
        }
        mfp.updateStatus("loading");
        item.loading = true;
        if (!item.hasSize) {
          item.imgHidden = true;
          template.addClass("mfp-loading");
          mfp.findImageSize(item);
        }
        return template;
      },
    },
  });
  var hasMozTransform,
    getHasMozTransform = function() {
      if (hasMozTransform === undefined) {
        hasMozTransform = document.createElement("p").style.MozTransform !== undefined;
      }
      return hasMozTransform;
    };
  $.magnificPopup.registerModule("zoom", {
    options: {
      enabled: false,
      easing: "ease-in-out",
      duration: 300,
      opener: function(element) {
        return element.is("img") ? element : element.find("img");
      },
    },
    proto: {
      initZoom: function() {
        var zoomSt = mfp.st.zoom,
          ns = ".zoom",
          image;
        if (!zoomSt.enabled || !mfp.supportsTransition) {
          return;
        }
        var duration = zoomSt.duration,
          getElToAnimate = function(image) {
            var newImg = image.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
              transition = "all " + zoomSt.duration / 1000 + "s " + zoomSt.easing,
              cssObj = {
                position: "fixed",
                zIndex: 9999,
                left: 0,
                top: 0,
                "-webkit-backface-visibility": "hidden"
              },
              t = "transition";
            cssObj["-webkit-" + t] = cssObj["-moz-" + t] = cssObj["-o-" + t] = cssObj[t] = transition;
            newImg.css(cssObj);
            return newImg;
          },
          showMainContent = function() {
            mfp.content.css("visibility", "visible");
          },
          openTimeout,
          animatedImg;
        _mfpOn("BuildControls" + ns, function() {
          if (mfp._allowZoom()) {
            clearTimeout(openTimeout);
            mfp.content.css("visibility", "hidden");
            image = mfp._getItemToZoom();
            if (!image) {
              showMainContent();
              return;
            }
            animatedImg = getElToAnimate(image);
            animatedImg.css(mfp._getOffset());
            mfp.wrap.append(animatedImg);
            openTimeout = setTimeout(function() {
              animatedImg.css(mfp._getOffset(true));
              openTimeout = setTimeout(function() {
                showMainContent();
                setTimeout(function() {
                  animatedImg.remove();
                  image = animatedImg = null;
                  _mfpTrigger("ZoomAnimationEnded");
                }, 16);
              }, duration);
            }, 16);
          }
        });
        _mfpOn(BEFORE_CLOSE_EVENT + ns, function() {
          if (mfp._allowZoom()) {
            clearTimeout(openTimeout);
            mfp.st.removalDelay = duration;
            if (!image) {
              image = mfp._getItemToZoom();
              if (!image) {
                return;
              }
              animatedImg = getElToAnimate(image);
            }
            animatedImg.css(mfp._getOffset(true));
            mfp.wrap.append(animatedImg);
            mfp.content.css("visibility", "hidden");
            setTimeout(function() {
              animatedImg.css(mfp._getOffset());
            }, 16);
          }
        });
        _mfpOn(CLOSE_EVENT + ns, function() {
          if (mfp._allowZoom()) {
            showMainContent();
            if (animatedImg) {
              animatedImg.remove();
            }
            image = null;
          }
        });
      },
      _allowZoom: function() {
        return mfp.currItem.type === "image";
      },
      _getItemToZoom: function() {
        if (mfp.currItem.hasSize) {
          return mfp.currItem.img;
        } else {
          return false;
        }
      },
      _getOffset: function(isLarge) {
        var el;
        if (isLarge) {
          el = mfp.currItem.img;
        } else {
          el = mfp.st.zoom.opener(mfp.currItem.el || mfp.currItem);
        }
        var offset = el.offset();
        var paddingTop = parseInt(el.css("padding-top"), 10);
        var paddingBottom = parseInt(el.css("padding-bottom"), 10);
        offset.top -= $(window).scrollTop() - paddingTop;
        var obj = {
          width: el.width(),
          height: (_isJQ ? el.innerHeight() : el[0].offsetHeight) - paddingBottom - paddingTop
        };
        if (getHasMozTransform()) {
          obj["-moz-transform"] = obj["transform"] = "translate(" + offset.left + "px," + offset.top + "px)";
        } else {
          obj.left = offset.left;
          obj.top = offset.top;
        }
        return obj;
      },
    },
  });
  var IFRAME_NS = "iframe",
    _emptyPage = "//about:blank",
    _fixIframeBugs = function(isShowing) {
      if (mfp.currTemplate[IFRAME_NS]) {
        var el = mfp.currTemplate[IFRAME_NS].find("iframe");
        if (el.length) {
          if (!isShowing) {
            el[0].src = _emptyPage;
          }
          if (mfp.isIE8) {
            el.css("display", isShowing ? "block" : "none");
          }
        }
      }
    };
  $.magnificPopup.registerModule(IFRAME_NS, {
    options: {
      markup: '<div class="mfp-iframe-scaler">' + '<div class="mfp-close"></div>' + '<iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe>' + "</div>",
      srcAction: "iframe_src",
      patterns: {
        youtube: {
          index: "youtube.com",
          id: "v=",
          src: "https://www.youtube.com/embed/%id%?autoplay=1"
        },
        vimeo: {
          index: "vimeo.com/",
          id: "/",
          src: "https://player.vimeo.com/video/%id%?autoplay=1"
        },
        gmaps: {
          index: "//maps.google.",
          src: "%id%&output=embed"
        },
      },
    },
    proto: {
      initIframe: function() {
        mfp.types.push(IFRAME_NS);
        _mfpOn("BeforeChange", function(e, prevType, newType) {
          if (prevType !== newType) {
            if (prevType === IFRAME_NS) {
              _fixIframeBugs();
            } else if (newType === IFRAME_NS) {
              _fixIframeBugs(true);
            }
          }
        });
        _mfpOn(CLOSE_EVENT + "." + IFRAME_NS, function() {
          _fixIframeBugs();
        });
      },
      getIframe: function(item, template) {
        var embedSrc = item.src;
        var iframeSt = mfp.st.iframe;
        $.each(iframeSt.patterns, function() {
          if (embedSrc.indexOf(this.index) > -1) {
            if (this.id) {
              if (typeof this.id === "string") {
                embedSrc = embedSrc.substr(embedSrc.lastIndexOf(this.id) + this.id.length, embedSrc.length);
              } else {
                embedSrc = this.id.call(this, embedSrc);
              }
            }
            embedSrc = this.src.replace("%id%", embedSrc);
            return false;
          }
        });
        var dataObj = {};
        if (iframeSt.srcAction) {
          dataObj[iframeSt.srcAction] = embedSrc;
        }
        mfp._parseMarkup(template, dataObj, item);
        mfp.updateStatus("ready");
        return template;
      },
    },
  });
  var _getLoopedId = function(index) {
      var numSlides = mfp.items.length;
      if (index > numSlides - 1) {
        return index - numSlides;
      } else if (index < 0) {
        return numSlides + index;
      }
      return index;
    },
    _replaceCurrTotal = function(text, curr, total) {
      return text.replace(/%curr%/gi, curr + 1).replace(/%total%/gi, total);
    };
  $.magnificPopup.registerModule("gallery", {
    options: {
      enabled: false,
      arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      preload: [0, 2],
      navigateByImgClick: true,
      arrows: true,
      tPrev: "Previous (Left arrow key)",
      tNext: "Next (Right arrow key)",
      tCounter: "%curr% of %total%",
    },
    proto: {
      initGallery: function() {
        var gSt = mfp.st.gallery,
          ns = ".mfp-gallery";
        mfp.direction = true;
        if (!gSt || !gSt.enabled) return false;
        _wrapClasses += " mfp-gallery";
        _mfpOn(OPEN_EVENT + ns, function() {
          if (gSt.navigateByImgClick) {
            mfp.wrap.on("click" + ns, ".mfp-img", function() {
              if (mfp.items.length > 1) {
                mfp.next();
                return false;
              }
            });
          }
          _document.on("keydown" + ns, function(e) {
            if (e.keyCode === 37) {
              mfp.prev();
            } else if (e.keyCode === 39) {
              mfp.next();
            }
          });
        });
        _mfpOn("UpdateStatus" + ns, function(e, data) {
          if (data.text) {
            data.text = _replaceCurrTotal(data.text, mfp.currItem.index, mfp.items.length);
          }
        });
        _mfpOn(MARKUP_PARSE_EVENT + ns, function(e, element, values, item) {
          var l = mfp.items.length;
          values.counter = l > 1 ? _replaceCurrTotal(gSt.tCounter, item.index, l) : "";
        });
        _mfpOn("BuildControls" + ns, function() {
          if (mfp.items.length > 1 && gSt.arrows && !mfp.arrowLeft) {
            var markup = gSt.arrowMarkup,
              arrowLeft = (mfp.arrowLeft = $(markup.replace(/%title%/gi, gSt.tPrev).replace(/%dir%/gi, "left")).addClass(PREVENT_CLOSE_CLASS)),
              arrowRight = (mfp.arrowRight = $(markup.replace(/%title%/gi, gSt.tNext).replace(/%dir%/gi, "right")).addClass(PREVENT_CLOSE_CLASS));
            arrowLeft.click(function() {
              mfp.prev();
            });
            arrowRight.click(function() {
              mfp.next();
            });
            mfp.container.append(arrowLeft.add(arrowRight));
          }
        });
        _mfpOn(CHANGE_EVENT + ns, function() {
          if (mfp._preloadTimeout) clearTimeout(mfp._preloadTimeout);
          mfp._preloadTimeout = setTimeout(function() {
            mfp.preloadNearbyImages();
            mfp._preloadTimeout = null;
          }, 16);
        });
        _mfpOn(CLOSE_EVENT + ns, function() {
          _document.off(ns);
          mfp.wrap.off("click" + ns);
          mfp.arrowRight = mfp.arrowLeft = null;
        });
      },
      next: function() {
        mfp.direction = true;
        mfp.index = _getLoopedId(mfp.index + 1);
        mfp.updateItemHTML();
      },
      prev: function() {
        mfp.direction = false;
        mfp.index = _getLoopedId(mfp.index - 1);
        mfp.updateItemHTML();
      },
      goTo: function(newIndex) {
        mfp.direction = newIndex >= mfp.index;
        mfp.index = newIndex;
        mfp.updateItemHTML();
      },
      preloadNearbyImages: function() {
        var p = mfp.st.gallery.preload,
          preloadBefore = Math.min(p[0], mfp.items.length),
          preloadAfter = Math.min(p[1], mfp.items.length),
          i;
        for (i = 1; i <= (mfp.direction ? preloadAfter : preloadBefore); i++) {
          mfp._preloadItem(mfp.index + i);
        }
        for (i = 1; i <= (mfp.direction ? preloadBefore : preloadAfter); i++) {
          mfp._preloadItem(mfp.index - i);
        }
      },
      _preloadItem: function(index) {
        index = _getLoopedId(index);
        if (mfp.items[index].preloaded) {
          return;
        }
        var item = mfp.items[index];
        if (!item.parsed) {
          item = mfp.parseEl(index);
        }
        _mfpTrigger("LazyLoad", item);
        if (item.type === "image") {
          item.img = $('<img class="mfp-img" />')
            .on("load.mfploader", function() {
              item.hasSize = true;
            })
            .on("error.mfploader", function() {
              item.hasSize = true;
              item.loadError = true;
              _mfpTrigger("LazyLoadError", item);
            })
            .attr("src", item.src);
        }
        item.preloaded = true;
      },
    },
  });
  var RETINA_NS = "retina";
  $.magnificPopup.registerModule(RETINA_NS, {
    options: {
      replaceSrc: function(item) {
        return item.src.replace(/\.\w+$/, function(m) {
          return "@2x" + m;
        });
      },
      ratio: 1,
    },
    proto: {
      initRetina: function() {
        if (window.devicePixelRatio > 1) {
          var st = mfp.st.retina,
            ratio = st.ratio;
          ratio = !isNaN(ratio) ? ratio : ratio();
          if (ratio > 1) {
            _mfpOn("ImageHasSize" + "." + RETINA_NS, function(e, item) {
              item.img.css({
                "max-width": item.img[0].naturalWidth / ratio,
                width: "100%"
              });
            });
            _mfpOn("ElementParse" + "." + RETINA_NS, function(e, item) {
              item.src = st.replaceSrc(item, ratio);
            });
          }
        }
      },
    },
  });
  _checkInstance();
});
!(function($) {
  "use strict";
  var Typed = function(el, options) {
    this.el = $(el);
    this.options = $.extend({}, $.fn.typed.defaults, options);
    this.isInput = this.el.is("input");
    this.attr = this.options.attr;
    this.showCursor = this.isInput ? false : this.options.showCursor;
    this.elContent = this.attr ? this.el.attr(this.attr) : this.el.text();
    this.contentType = this.options.contentType;
    this.typeSpeed = this.options.typeSpeed;
    this.startDelay = this.options.startDelay;
    this.backSpeed = this.options.backSpeed;
    this.backDelay = this.options.backDelay;
    this.stringsElement = this.options.stringsElement;
    this.strings = this.options.strings;
    this.strPos = 0;
    this.arrayPos = 0;
    this.stopNum = 0;
    this.loop = this.options.loop;
    this.loopCount = this.options.loopCount;
    this.curLoop = 0;
    this.stop = false;
    this.cursorChar = this.options.cursorChar;
    this.shuffle = this.options.shuffle;
    this.sequence = [];
    this.build();
  };
  Typed.prototype = {
    constructor: Typed,
    init: function() {
      var self = this;
      self.timeout = setTimeout(function() {
        for (var i = 0; i < self.strings.length; ++i) self.sequence[i] = i;
        if (self.shuffle) self.sequence = self.shuffleArray(self.sequence);
        self.typewrite(self.strings[self.sequence[self.arrayPos]], self.strPos);
      }, self.startDelay);
    },
    build: function() {
      var self = this;
      if (this.showCursor === true) {
        this.cursor = $('<span class="typed-cursor">' + this.cursorChar + "</span>");
        this.el.after(this.cursor);
      }
      if (this.stringsElement) {
        self.strings = [];
        this.stringsElement.hide();
        var strings = this.stringsElement.find("p");
        $.each(strings, function(key, value) {
          self.strings.push($(value).html());
        });
      }
      this.init();
    },
    typewrite: function(curString, curStrPos) {
      if (this.stop === true) {
        return;
      }
      var humanize = Math.round(Math.random() * (100 - 30)) + this.typeSpeed;
      var self = this;
      self.timeout = setTimeout(function() {
        var charPause = 0;
        var substr = curString.substr(curStrPos);
        if (substr.charAt(0) === "^") {
          var skip = 1;
          if (/^\^\d+/.test(substr)) {
            substr = /\d+/.exec(substr)[0];
            skip += substr.length;
            charPause = parseInt(substr);
          }
          curString = curString.substring(0, curStrPos) + curString.substring(curStrPos + skip);
        }
        if (self.contentType === "html") {
          var curChar = curString.substr(curStrPos).charAt(0);
          if (curChar === "<" || curChar === "&") {
            var tag = "";
            var endTag = "";
            if (curChar === "<") {
              endTag = ">";
            } else {
              endTag = ";";
            }
            while (curString.substr(curStrPos).charAt(0) !== endTag) {
              tag += curString.substr(curStrPos).charAt(0);
              curStrPos++;
            }
            curStrPos++;
            tag += endTag;
          }
        }
        self.timeout = setTimeout(function() {
          if (curStrPos === curString.length) {
            self.options.onStringTyped(self.arrayPos);
            if (self.arrayPos === self.strings.length - 1) {
              self.options.callback();
              self.curLoop++;
              if (self.loop === false || self.curLoop === self.loopCount) return;
            }
            self.timeout = setTimeout(function() {
              self.backspace(curString, curStrPos);
            }, self.backDelay);
          } else {
            if (curStrPos === 0) self.options.preStringTyped(self.arrayPos);
            var nextString = curString.substr(0, curStrPos + 1);
            if (self.attr) {
              self.el.attr(self.attr, nextString);
            } else {
              if (self.isInput) {
                self.el.val(nextString);
              } else if (self.contentType === "html") {
                self.el.html(nextString);
              } else {
                self.el.text(nextString);
              }
            }
            curStrPos++;
            self.typewrite(curString, curStrPos);
          }
        }, charPause);
      }, humanize);
    },
    backspace: function(curString, curStrPos) {
      if (this.stop === true) {
        return;
      }
      var humanize = Math.round(Math.random() * (100 - 30)) + this.backSpeed;
      var self = this;
      self.timeout = setTimeout(function() {
        if (self.contentType === "html") {
          if (curString.substr(curStrPos).charAt(0) === ">") {
            var tag = "";
            while (curString.substr(curStrPos).charAt(0) !== "<") {
              tag -= curString.substr(curStrPos).charAt(0);
              curStrPos--;
            }
            curStrPos--;
            tag += "<";
          }
        }
        var nextString = curString.substr(0, curStrPos);
        if (self.attr) {
          self.el.attr(self.attr, nextString);
        } else {
          if (self.isInput) {
            self.el.val(nextString);
          } else if (self.contentType === "html") {
            self.el.html(nextString);
          } else {
            self.el.text(nextString);
          }
        }
        if (curStrPos > self.stopNum) {
          curStrPos--;
          self.backspace(curString, curStrPos);
        } else if (curStrPos <= self.stopNum) {
          self.arrayPos++;
          if (self.arrayPos === self.strings.length) {
            self.arrayPos = 0;
            if (self.shuffle) self.sequence = self.shuffleArray(self.sequence);
            self.init();
          } else self.typewrite(self.strings[self.sequence[self.arrayPos]], curStrPos);
        }
      }, humanize);
    },
    shuffleArray: function(array) {
      var tmp,
        current,
        top = array.length;
      if (top)
        while (--top) {
          current = Math.floor(Math.random() * (top + 1));
          tmp = array[current];
          array[current] = array[top];
          array[top] = tmp;
        }
      return array;
    },
    reset: function() {
      var self = this;
      clearInterval(self.timeout);
      var id = this.el.attr("id");
      this.el.after('<span id="' + id + '"/>');
      this.el.remove();
      if (typeof this.cursor !== "undefined") {
        this.cursor.remove();
      }
      self.options.resetCallback();
    },
  };
  $.fn.typed = function(option) {
    return this.each(function() {
      var $this = $(this),
        data = $this.data("typed"),
        options = typeof option == "object" && option;
      if (!data) $this.data("typed", (data = new Typed(this, options)));
      if (typeof option == "string") data[option]();
    });
  };
  $.fn.typed.defaults = {
    strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
    stringsElement: null,
    typeSpeed: 0,
    startDelay: 0,
    backSpeed: 0,
    shuffle: false,
    backDelay: 500,
    loop: false,
    loopCount: false,
    showCursor: true,
    cursorChar: "|",
    attr: null,
    contentType: "html",
    callback: function() {},
    preStringTyped: function() {},
    onStringTyped: function() {},
    resetCallback: function() {},
  };
})(window.jQuery);
/*!
 * Name    : Just Another Parallax [Jarallax]
 * Version : 1.10.7
 * Author  : nK <https://nkdev.info>
 * GitHub  : https://github.com/nk-o/jarallax
 */
(function(modules) {
  var installedModules = {};

  function __webpack_require__(moduleId) {
    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }
    var module = (installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {}
    });
    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    module.l = true;
    return module.exports;
  }
  __webpack_require__.m = modules;
  __webpack_require__.c = installedModules;
  __webpack_require__.d = function(exports, name, getter) {
    if (!__webpack_require__.o(exports, name)) {
      Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
    }
  };
  __webpack_require__.r = function(exports) {
    if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      Object.defineProperty(exports, Symbol.toStringTag, {
        value: "Module"
      });
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
  };
  __webpack_require__.t = function(value, mode) {
    if (mode & 1) value = __webpack_require__(value);
    if (mode & 8) return value;
    if (mode & 4 && typeof value === "object" && value && value.__esModule) return value;
    var ns = Object.create(null);
    __webpack_require__.r(ns);
    Object.defineProperty(ns, "default", {
      enumerable: true,
      value: value
    });
    if (mode & 2 && typeof value != "string")
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function(key) {
            return value[key];
          }.bind(null, key)
        );
    return ns;
  };
  __webpack_require__.n = function(module) {
    var getter =
      module && module.__esModule ?
      function getDefault() {
        return module["default"];
      } :
      function getModuleExports() {
        return module;
      };
    __webpack_require__.d(getter, "a", getter);
    return getter;
  };
  __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  __webpack_require__.p = "";
  return __webpack_require__((__webpack_require__.s = 11));
})([, ,
  function(module, exports, __webpack_require__) {
    "use strict";
    module.exports = function(callback) {
      if (document.readyState === "complete" || document.readyState === "interactive") {
        callback.call();
      } else if (document.attachEvent) {
        document.attachEvent("onreadystatechange", function() {
          if (document.readyState === "interactive") callback.call();
        });
      } else if (document.addEventListener) {
        document.addEventListener("DOMContentLoaded", callback);
      }
    };
  }, ,
  function(module, exports, __webpack_require__) {
    "use strict";
    (function(global) {
      var win;
      if (typeof window !== "undefined") {
        win = window;
      } else if (typeof global !== "undefined") {
        win = global;
      } else if (typeof self !== "undefined") {
        win = self;
      } else {
        win = {};
      }
      module.exports = win;
    }.call(this, __webpack_require__(5)));
  },
  function(module, exports, __webpack_require__) {
    "use strict";
    var _typeof =
      typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ?
      function(obj) {
        return typeof obj;
      } :
      function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    var g;
    g = (function() {
      return this;
    })();
    try {
      g = g || Function("return this")() || (1, eval)("this");
    } catch (e) {
      if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
    }
    module.exports = g;
  }, , , , , ,
  function(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(12);
  },
  function(module, exports, __webpack_require__) {
    "use strict";
    var _typeof =
      typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ?
      function(obj) {
        return typeof obj;
      } :
      function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    var _liteReady = __webpack_require__(2);
    var _liteReady2 = _interopRequireDefault(_liteReady);
    var _global = __webpack_require__(4);
    var _jarallax = __webpack_require__(13);
    var _jarallax2 = _interopRequireDefault(_jarallax);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var oldPlugin = _global.window.jarallax;
    _global.window.jarallax = _jarallax2.default;
    _global.window.jarallax.noConflict = function() {
      _global.window.jarallax = oldPlugin;
      return this;
    };
    if (typeof _global.jQuery !== "undefined") {
      var jQueryPlugin = function jQueryPlugin() {
        var args = arguments || [];
        Array.prototype.unshift.call(args, this);
        var res = _jarallax2.default.apply(_global.window, args);
        return (typeof res === "undefined" ? "undefined" : _typeof(res)) !== "object" ? res : this;
      };
      jQueryPlugin.constructor = _jarallax2.default.constructor;
      var oldJqPlugin = _global.jQuery.fn.jarallax;
      _global.jQuery.fn.jarallax = jQueryPlugin;
      _global.jQuery.fn.jarallax.noConflict = function() {
        _global.jQuery.fn.jarallax = oldJqPlugin;
        return this;
      };
    }
    (0, _liteReady2.default)(function() {
      (0, _jarallax2.default)(document.querySelectorAll("[data-jarallax]"));
    });
  },
  function(module, exports, __webpack_require__) {
    "use strict";
    (function(global) {
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _slicedToArray = (function() {
        function sliceIterator(arr, i) {
          var _arr = [];
          var _n = true;
          var _d = false;
          var _e = undefined;
          try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);
              if (i && _arr.length === i) break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n && _i["return"]) _i["return"]();
            } finally {
              if (_d) throw _e;
            }
          }
          return _arr;
        }
        return function(arr, i) {
          if (Array.isArray(arr)) {
            return arr;
          } else if (Symbol.iterator in Object(arr)) {
            return sliceIterator(arr, i);
          } else {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          }
        };
      })();
      var _createClass = (function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      })();
      var _typeof =
        typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ?
        function(obj) {
          return typeof obj;
        } :
        function(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
      var _liteReady = __webpack_require__(2);
      var _liteReady2 = _interopRequireDefault(_liteReady);
      var _rafl = __webpack_require__(14);
      var _rafl2 = _interopRequireDefault(_rafl);
      var _global = __webpack_require__(4);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      var isIE = navigator.userAgent.indexOf("MSIE ") > -1 || navigator.userAgent.indexOf("Trident/") > -1 || navigator.userAgent.indexOf("Edge/") > -1;
      var supportTransform = (function() {
        var prefixes = "transform WebkitTransform MozTransform".split(" ");
        var div = document.createElement("div");
        for (var i = 0; i < prefixes.length; i++) {
          if (div && div.style[prefixes[i]] !== undefined) {
            return prefixes[i];
          }
        }
        return false;
      })();
      var wndW = void 0;
      var wndH = void 0;
      var wndY = void 0;
      var forceResizeParallax = false;
      var forceScrollParallax = false;

      function updateWndVars(e) {
        wndW = _global.window.innerWidth || document.documentElement.clientWidth;
        wndH = _global.window.innerHeight || document.documentElement.clientHeight;
        if ((typeof e === "undefined" ? "undefined" : _typeof(e)) === "object" && (e.type === "load" || e.type === "dom-loaded")) {
          forceResizeParallax = true;
        }
      }
      updateWndVars();
      _global.window.addEventListener("resize", updateWndVars);
      _global.window.addEventListener("orientationchange", updateWndVars);
      _global.window.addEventListener("load", updateWndVars);
      (0, _liteReady2.default)(function() {
        updateWndVars({
          type: "dom-loaded"
        });
      });
      var jarallaxList = [];
      var oldPageData = false;

      function updateParallax() {
        if (!jarallaxList.length) {
          return;
        }
        if (_global.window.pageYOffset !== undefined) {
          wndY = _global.window.pageYOffset;
        } else {
          wndY = (document.documentElement || document.body.parentNode || document.body).scrollTop;
        }
        var isResized = forceResizeParallax || !oldPageData || oldPageData.width !== wndW || oldPageData.height !== wndH;
        var isScrolled = forceScrollParallax || isResized || !oldPageData || oldPageData.y !== wndY;
        forceResizeParallax = false;
        forceScrollParallax = false;
        if (isResized || isScrolled) {
          jarallaxList.forEach(function(item) {
            if (isResized) {
              item.onResize();
            }
            if (isScrolled) {
              item.onScroll();
            }
          });
          oldPageData = {
            width: wndW,
            height: wndH,
            y: wndY
          };
        }
        (0, _rafl2.default)(updateParallax);
      }
      var resizeObserver = global.ResizeObserver ?
        new global.ResizeObserver(function(entry) {
          if (entry && entry.length) {
            (0, _rafl2.default)(function() {
              entry.forEach(function(item) {
                if (item.target && item.target.jarallax) {
                  if (!forceResizeParallax) {
                    item.target.jarallax.onResize();
                  }
                  forceScrollParallax = true;
                }
              });
            });
          }
        }) :
        false;
      var instanceID = 0;
      var Jarallax = (function() {
        function Jarallax(item, userOptions) {
          _classCallCheck(this, Jarallax);
          var self = this;
          self.instanceID = instanceID++;
          self.$item = item;
          self.defaults = {
            type: "scroll",
            speed: 0.5,
            imgSrc: null,
            imgElement: ".jarallax-img",
            imgSize: "cover",
            imgPosition: "50% 50%",
            imgRepeat: "no-repeat",
            keepImg: false,
            elementInViewport: null,
            zIndex: -100,
            disableParallax: false,
            disableVideo: false,
            automaticResize: true,
            videoSrc: null,
            videoStartTime: 0,
            videoEndTime: 0,
            videoVolume: 0,
            videoLoop: true,
            videoPlayOnlyVisible: true,
            onScroll: null,
            onInit: null,
            onDestroy: null,
            onCoverImage: null,
          };
          var deprecatedDataAttribute = self.$item.getAttribute("data-jarallax");
          var oldDataOptions = JSON.parse(deprecatedDataAttribute || "{}");
          if (deprecatedDataAttribute) {
            console.warn("Detected usage of deprecated data-jarallax JSON options, you should use pure data-attribute options. See info here - https://github.com/nk-o/jarallax/issues/53");
          }
          var dataOptions = self.$item.dataset || {};
          var pureDataOptions = {};
          Object.keys(dataOptions).forEach(function(key) {
            var loweCaseOption = key.substr(0, 1).toLowerCase() + key.substr(1);
            if (loweCaseOption && typeof self.defaults[loweCaseOption] !== "undefined") {
              pureDataOptions[loweCaseOption] = dataOptions[key];
            }
          });
          self.options = self.extend({}, self.defaults, oldDataOptions, pureDataOptions, userOptions);
          self.pureOptions = self.extend({}, self.options);
          Object.keys(self.options).forEach(function(key) {
            if (self.options[key] === "true") {
              self.options[key] = true;
            } else if (self.options[key] === "false") {
              self.options[key] = false;
            }
          });
          self.options.speed = Math.min(2, Math.max(-1, parseFloat(self.options.speed)));
          if (self.options.noAndroid || self.options.noIos) {
            console.warn("Detected usage of deprecated noAndroid or noIos options, you should use disableParallax option. See info here - https://github.com/nk-o/jarallax/#disable-on-mobile-devices");
            if (!self.options.disableParallax) {
              if (self.options.noIos && self.options.noAndroid) {
                self.options.disableParallax = /iPad|iPhone|iPod|Android/;
              } else if (self.options.noIos) {
                self.options.disableParallax = /iPad|iPhone|iPod/;
              } else if (self.options.noAndroid) {
                self.options.disableParallax = /Android/;
              }
            }
          }
          if (typeof self.options.disableParallax === "string") {
            self.options.disableParallax = new RegExp(self.options.disableParallax);
          }
          if (self.options.disableParallax instanceof RegExp) {
            var disableParallaxRegexp = self.options.disableParallax;
            self.options.disableParallax = function() {
              return disableParallaxRegexp.test(navigator.userAgent);
            };
          }
          if (typeof self.options.disableParallax !== "function") {
            self.options.disableParallax = function() {
              return false;
            };
          }
          if (typeof self.options.disableVideo === "string") {
            self.options.disableVideo = new RegExp(self.options.disableVideo);
          }
          if (self.options.disableVideo instanceof RegExp) {
            var disableVideoRegexp = self.options.disableVideo;
            self.options.disableVideo = function() {
              return disableVideoRegexp.test(navigator.userAgent);
            };
          }
          if (typeof self.options.disableVideo !== "function") {
            self.options.disableVideo = function() {
              return false;
            };
          }
          var elementInVP = self.options.elementInViewport;
          if (elementInVP && (typeof elementInVP === "undefined" ? "undefined" : _typeof(elementInVP)) === "object" && typeof elementInVP.length !== "undefined") {
            var _elementInVP = elementInVP;
            var _elementInVP2 = _slicedToArray(_elementInVP, 1);
            elementInVP = _elementInVP2[0];
          }
          if (!(elementInVP instanceof Element)) {
            elementInVP = null;
          }
          self.options.elementInViewport = elementInVP;
          self.image = {
            src: self.options.imgSrc || null,
            $container: null,
            useImgTag: false,
            position: /iPad|iPhone|iPod|Android/.test(navigator.userAgent) ? "absolute" : "fixed"
          };
          if (self.initImg() && self.canInitParallax()) {
            self.init();
          }
        }
        _createClass(Jarallax, [{
            key: "css",
            value: function css(el, styles) {
              if (typeof styles === "string") {
                return _global.window.getComputedStyle(el).getPropertyValue(styles);
              }
              if (styles.transform && supportTransform) {
                styles[supportTransform] = styles.transform;
              }
              Object.keys(styles).forEach(function(key) {
                el.style[key] = styles[key];
              });
              return el;
            },
          },
          {
            key: "extend",
            value: function extend(out) {
              var _arguments = arguments;
              out = out || {};
              Object.keys(arguments).forEach(function(i) {
                if (!_arguments[i]) {
                  return;
                }
                Object.keys(_arguments[i]).forEach(function(key) {
                  out[key] = _arguments[i][key];
                });
              });
              return out;
            },
          },
          {
            key: "getWindowData",
            value: function getWindowData() {
              return {
                width: wndW,
                height: wndH,
                y: wndY
              };
            },
          },
          {
            key: "initImg",
            value: function initImg() {
              var self = this;
              var $imgElement = self.options.imgElement;
              if ($imgElement && typeof $imgElement === "string") {
                $imgElement = self.$item.querySelector($imgElement);
              }
              if (!($imgElement instanceof Element)) {
                $imgElement = null;
              }
              if ($imgElement) {
                if (self.options.keepImg) {
                  self.image.$item = $imgElement.cloneNode(true);
                } else {
                  self.image.$item = $imgElement;
                  self.image.$itemParent = $imgElement.parentNode;
                }
                self.image.useImgTag = true;
              }
              if (self.image.$item) {
                return true;
              }
              if (self.image.src === null) {
                self.image.src = self
                  .css(self.$item, "background-image")
                  .replace(/^url\(['"]?/g, "")
                  .replace(/['"]?\)$/g, "");
              }
              return !(!self.image.src || self.image.src === "none");
            },
          },
          {
            key: "canInitParallax",
            value: function canInitParallax() {
              return supportTransform && !this.options.disableParallax();
            },
          },
          {
            key: "init",
            value: function init() {
              var self = this;
              var containerStyles = {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                overflow: "hidden",
                pointerEvents: "none"
              };
              var imageStyles = {};
              if (!self.options.keepImg) {
                var curStyle = self.$item.getAttribute("style");
                if (curStyle) {
                  self.$item.setAttribute("data-jarallax-original-styles", curStyle);
                }
                if (self.image.useImgTag) {
                  var curImgStyle = self.image.$item.getAttribute("style");
                  if (curImgStyle) {
                    self.image.$item.setAttribute("data-jarallax-original-styles", curImgStyle);
                  }
                }
              }
              if (self.css(self.$item, "position") === "static") {
                self.css(self.$item, {
                  position: "relative"
                });
              }
              if (self.css(self.$item, "z-index") === "auto") {
                self.css(self.$item, {
                  zIndex: 0
                });
              }
              self.image.$container = document.createElement("div");
              self.css(self.image.$container, containerStyles);
              self.css(self.image.$container, {
                "z-index": self.options.zIndex
              });
              if (isIE) {
                self.css(self.image.$container, {
                  opacity: 0.9999
                });
              }
              self.image.$container.setAttribute("id", "jarallax-container-" + self.instanceID);
              self.$item.appendChild(self.image.$container);
              if (self.image.useImgTag) {
                imageStyles = self.extend({
                    "object-fit": self.options.imgSize,
                    "object-position": self.options.imgPosition,
                    "font-family": "object-fit: " + self.options.imgSize + "; object-position: " + self.options.imgPosition + ";",
                    "max-width": "none",
                  },
                  containerStyles,
                  imageStyles
                );
              } else {
                self.image.$item = document.createElement("div");
                if (self.image.src) {
                  imageStyles = self.extend({
                      "background-position": self.options.imgPosition,
                      "background-size": self.options.imgSize,
                      "background-repeat": self.options.imgRepeat,
                      "background-image": 'url("' + self.image.src + '")'
                    },
                    containerStyles,
                    imageStyles
                  );
                }
              }
              if (self.options.type === "opacity" || self.options.type === "scale" || self.options.type === "scale-opacity" || self.options.speed === 1) {
                self.image.position = "absolute";
              }
              if (self.image.position === "fixed") {
                var parentWithTransform = 0;
                var $itemParents = self.$item;
                while ($itemParents !== null && $itemParents !== document && parentWithTransform === 0) {
                  var parentTransform = self.css($itemParents, "-webkit-transform") || self.css($itemParents, "-moz-transform") || self.css($itemParents, "transform");
                  if (parentTransform && parentTransform !== "none") {
                    parentWithTransform = 1;
                    self.image.position = "absolute";
                  }
                  $itemParents = $itemParents.parentNode;
                }
              }
              imageStyles.position = self.image.position;
              self.css(self.image.$item, imageStyles);
              self.image.$container.appendChild(self.image.$item);
              self.onResize();
              self.onScroll(true);
              if (self.options.automaticResize && resizeObserver) {
                resizeObserver.observe(self.$item);
              }
              if (self.options.onInit) {
                self.options.onInit.call(self);
              }
              if (self.css(self.$item, "background-image") !== "none") {
                self.css(self.$item, {
                  "background-image": "none"
                });
              }
              self.addToParallaxList();
            },
          },
          {
            key: "addToParallaxList",
            value: function addToParallaxList() {
              jarallaxList.push(this);
              if (jarallaxList.length === 1) {
                updateParallax();
              }
            },
          },
          {
            key: "removeFromParallaxList",
            value: function removeFromParallaxList() {
              var self = this;
              jarallaxList.forEach(function(item, key) {
                if (item.instanceID === self.instanceID) {
                  jarallaxList.splice(key, 1);
                }
              });
            },
          },
          {
            key: "destroy",
            value: function destroy() {
              var self = this;
              self.removeFromParallaxList();
              var originalStylesTag = self.$item.getAttribute("data-jarallax-original-styles");
              self.$item.removeAttribute("data-jarallax-original-styles");
              if (!originalStylesTag) {
                self.$item.removeAttribute("style");
              } else {
                self.$item.setAttribute("style", originalStylesTag);
              }
              if (self.image.useImgTag) {
                var originalStylesImgTag = self.image.$item.getAttribute("data-jarallax-original-styles");
                self.image.$item.removeAttribute("data-jarallax-original-styles");
                if (!originalStylesImgTag) {
                  self.image.$item.removeAttribute("style");
                } else {
                  self.image.$item.setAttribute("style", originalStylesTag);
                }
                if (self.image.$itemParent) {
                  self.image.$itemParent.appendChild(self.image.$item);
                }
              }
              if (self.$clipStyles) {
                self.$clipStyles.parentNode.removeChild(self.$clipStyles);
              }
              if (self.image.$container) {
                self.image.$container.parentNode.removeChild(self.image.$container);
              }
              if (self.options.onDestroy) {
                self.options.onDestroy.call(self);
              }
              delete self.$item.jarallax;
            },
          },
          {
            key: "clipContainer",
            value: function clipContainer() {
              if (this.image.position !== "fixed") {
                return;
              }
              var self = this;
              var rect = self.image.$container.getBoundingClientRect();
              var width = rect.width,
                height = rect.height;
              if (!self.$clipStyles) {
                self.$clipStyles = document.createElement("style");
                self.$clipStyles.setAttribute("type", "text/css");
                self.$clipStyles.setAttribute("id", "jarallax-clip-" + self.instanceID);
                var head = document.head || document.getElementsByTagName("head")[0];
                head.appendChild(self.$clipStyles);
              }
              var styles = "#jarallax-container-" + self.instanceID + " {\n           clip: rect(0 " + width + "px " + height + "px 0);\n           clip: rect(0, " + width + "px, " + height + "px, 0);\n        }";
              if (self.$clipStyles.styleSheet) {
                self.$clipStyles.styleSheet.cssText = styles;
              } else {
                self.$clipStyles.innerHTML = styles;
              }
            },
          },
          {
            key: "coverImage",
            value: function coverImage() {
              var self = this;
              var rect = self.image.$container.getBoundingClientRect();
              var contH = rect.height;
              var speed = self.options.speed;
              var isScroll = self.options.type === "scroll" || self.options.type === "scroll-opacity";
              var scrollDist = 0;
              var resultH = contH;
              var resultMT = 0;
              if (isScroll) {
                if (speed < 0) {
                  scrollDist = speed * Math.max(contH, wndH);
                  if (wndH < contH) {
                    scrollDist -= speed * (contH - wndH);
                  }
                } else {
                  scrollDist = speed * (contH + wndH);
                }
                if (speed > 1) {
                  resultH = Math.abs(scrollDist - wndH);
                } else if (speed < 0) {
                  resultH = scrollDist / speed + Math.abs(scrollDist);
                } else {
                  resultH += (wndH - contH) * (1 - speed);
                }
                scrollDist /= 2;
              }
              self.parallaxScrollDistance = scrollDist;
              if (isScroll) {
                resultMT = (wndH - resultH) / 2;
              } else {
                resultMT = (contH - resultH) / 2;
              }
              self.css(self.image.$item, {
                height: resultH + "px",
                marginTop: resultMT + "px",
                left: self.image.position === "fixed" ? rect.left + "px" : "0",
                width: rect.width + "px"
              });
              if (self.options.onCoverImage) {
                self.options.onCoverImage.call(self);
              }
              return {
                image: {
                  height: resultH,
                  marginTop: resultMT
                },
                container: rect
              };
            },
          },
          {
            key: "isVisible",
            value: function isVisible() {
              return this.isElementInViewport || false;
            },
          },
          {
            key: "onScroll",
            value: function onScroll(force) {
              var self = this;
              var rect = self.$item.getBoundingClientRect();
              var contT = rect.top;
              var contH = rect.height;
              var styles = {};
              var viewportRect = rect;
              if (self.options.elementInViewport) {
                viewportRect = self.options.elementInViewport.getBoundingClientRect();
              }
              self.isElementInViewport = viewportRect.bottom >= 0 && viewportRect.right >= 0 && viewportRect.top <= wndH && viewportRect.left <= wndW;
              if (force ? false : !self.isElementInViewport) {
                return;
              }
              var beforeTop = Math.max(0, contT);
              var beforeTopEnd = Math.max(0, contH + contT);
              var afterTop = Math.max(0, -contT);
              var beforeBottom = Math.max(0, contT + contH - wndH);
              var beforeBottomEnd = Math.max(0, contH - (contT + contH - wndH));
              var afterBottom = Math.max(0, -contT + wndH - contH);
              var fromViewportCenter = 1 - (2 * (wndH - contT)) / (wndH + contH);
              var visiblePercent = 1;
              if (contH < wndH) {
                visiblePercent = 1 - (afterTop || beforeBottom) / contH;
              } else if (beforeTopEnd <= wndH) {
                visiblePercent = beforeTopEnd / wndH;
              } else if (beforeBottomEnd <= wndH) {
                visiblePercent = beforeBottomEnd / wndH;
              }
              if (self.options.type === "opacity" || self.options.type === "scale-opacity" || self.options.type === "scroll-opacity") {
                styles.transform = "translate3d(0,0,0)";
                styles.opacity = visiblePercent;
              }
              if (self.options.type === "scale" || self.options.type === "scale-opacity") {
                var scale = 1;
                if (self.options.speed < 0) {
                  scale -= self.options.speed * visiblePercent;
                } else {
                  scale += self.options.speed * (1 - visiblePercent);
                }
                styles.transform = "scale(" + scale + ") translate3d(0,0,0)";
              }
              if (self.options.type === "scroll" || self.options.type === "scroll-opacity") {
                var positionY = self.parallaxScrollDistance * fromViewportCenter;
                if (self.image.position === "absolute") {
                  positionY -= contT;
                }
                styles.transform = "translate3d(0," + positionY + "px,0)";
              }
              self.css(self.image.$item, styles);
              if (self.options.onScroll) {
                self.options.onScroll.call(self, {
                  section: rect,
                  beforeTop: beforeTop,
                  beforeTopEnd: beforeTopEnd,
                  afterTop: afterTop,
                  beforeBottom: beforeBottom,
                  beforeBottomEnd: beforeBottomEnd,
                  afterBottom: afterBottom,
                  visiblePercent: visiblePercent,
                  fromViewportCenter: fromViewportCenter,
                });
              }
            },
          },
          {
            key: "onResize",
            value: function onResize() {
              this.coverImage();
              this.clipContainer();
            },
          },
        ]);
        return Jarallax;
      })();
      var plugin = function plugin(items) {
        if (
          (typeof HTMLElement === "undefined" ? "undefined" : _typeof(HTMLElement)) === "object" ?
          items instanceof HTMLElement :
          items && (typeof items === "undefined" ? "undefined" : _typeof(items)) === "object" && items !== null && items.nodeType === 1 && typeof items.nodeName === "string"
        ) {
          items = [items];
        }
        var options = arguments[1];
        var args = Array.prototype.slice.call(arguments, 2);
        var len = items.length;
        var k = 0;
        var ret = void 0;
        for (k; k < len; k++) {
          if ((typeof options === "undefined" ? "undefined" : _typeof(options)) === "object" || typeof options === "undefined") {
            if (!items[k].jarallax) {
              items[k].jarallax = new Jarallax(items[k], options);
            }
          } else if (items[k].jarallax) {
            ret = items[k].jarallax[options].apply(items[k].jarallax, args);
          }
          if (typeof ret !== "undefined") {
            return ret;
          }
        }
        return items;
      };
      plugin.constructor = Jarallax;
      exports.default = plugin;
    }.call(this, __webpack_require__(5)));
  },
  function(module, exports, __webpack_require__) {
    "use strict";
    var global = __webpack_require__(4);
    var request = global.requestAnimationFrame || global.webkitRequestAnimationFrame || global.mozRequestAnimationFrame || fallback;
    var prev = +new Date();

    function fallback(fn) {
      var curr = +new Date();
      var ms = Math.max(0, 16 - (curr - prev));
      var req = setTimeout(fn, ms);
      return (prev = curr), req;
    }
    var cancel = global.cancelAnimationFrame || global.webkitCancelAnimationFrame || global.mozCancelAnimationFrame || clearTimeout;
    if (Function.prototype.bind) {
      request = request.bind(global);
      cancel = cancel.bind(global);
    }
    exports = module.exports = request;
    exports.cancel = cancel;
  },
]);
/*!
 * Name    : Video Background Extension for Jarallax
 * Version : 1.0.1
 * Author  : nK <https://nkdev.info>
 * GitHub  : https://github.com/nk-o/jarallax
 */
(function(modules) {
  var installedModules = {};

  function __webpack_require__(moduleId) {
    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }
    var module = (installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {}
    });
    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    module.l = true;
    return module.exports;
  }
  __webpack_require__.m = modules;
  __webpack_require__.c = installedModules;
  __webpack_require__.d = function(exports, name, getter) {
    if (!__webpack_require__.o(exports, name)) {
      Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
    }
  };
  __webpack_require__.r = function(exports) {
    if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      Object.defineProperty(exports, Symbol.toStringTag, {
        value: "Module"
      });
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
  };
  __webpack_require__.t = function(value, mode) {
    if (mode & 1) value = __webpack_require__(value);
    if (mode & 8) return value;
    if (mode & 4 && typeof value === "object" && value && value.__esModule) return value;
    var ns = Object.create(null);
    __webpack_require__.r(ns);
    Object.defineProperty(ns, "default", {
      enumerable: true,
      value: value
    });
    if (mode & 2 && typeof value != "string")
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function(key) {
            return value[key];
          }.bind(null, key)
        );
    return ns;
  };
  __webpack_require__.n = function(module) {
    var getter =
      module && module.__esModule ?
      function getDefault() {
        return module["default"];
      } :
      function getModuleExports() {
        return module;
      };
    __webpack_require__.d(getter, "a", getter);
    return getter;
  };
  __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  __webpack_require__.p = "";
  return __webpack_require__((__webpack_require__.s = 6));
})([, ,
  function(module, exports, __webpack_require__) {
    "use strict";
    module.exports = function(callback) {
      if (document.readyState === "complete" || document.readyState === "interactive") {
        callback.call();
      } else if (document.attachEvent) {
        document.attachEvent("onreadystatechange", function() {
          if (document.readyState === "interactive") callback.call();
        });
      } else if (document.addEventListener) {
        document.addEventListener("DOMContentLoaded", callback);
      }
    };
  }, ,
  function(module, exports, __webpack_require__) {
    "use strict";
    (function(global) {
      var win;
      if (typeof window !== "undefined") {
        win = window;
      } else if (typeof global !== "undefined") {
        win = global;
      } else if (typeof self !== "undefined") {
        win = self;
      } else {
        win = {};
      }
      module.exports = win;
    }.call(this, __webpack_require__(5)));
  },
  function(module, exports, __webpack_require__) {
    "use strict";
    var _typeof =
      typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ?
      function(obj) {
        return typeof obj;
      } :
      function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    var g;
    g = (function() {
      return this;
    })();
    try {
      g = g || Function("return this")() || (1, eval)("this");
    } catch (e) {
      if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
    }
    module.exports = g;
  },
  function(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(7);
  },
  function(module, exports, __webpack_require__) {
    "use strict";
    var _videoWorker = __webpack_require__(8);
    var _videoWorker2 = _interopRequireDefault(_videoWorker);
    var _global = __webpack_require__(4);
    var _global2 = _interopRequireDefault(_global);
    var _liteReady = __webpack_require__(2);
    var _liteReady2 = _interopRequireDefault(_liteReady);
    var _jarallaxVideo = __webpack_require__(10);
    var _jarallaxVideo2 = _interopRequireDefault(_jarallaxVideo);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    _global2.default.VideoWorker = _global2.default.VideoWorker || _videoWorker2.default;
    (0, _jarallaxVideo2.default)();
    (0, _liteReady2.default)(function() {
      if (typeof jarallax !== "undefined") {
        jarallax(document.querySelectorAll("[data-jarallax-video]"));
      }
    });
  },
  function(module, exports, __webpack_require__) {
    "use strict";
    module.exports = __webpack_require__(9);
  },
  function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _typeof =
      typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ?
      function(obj) {
        return typeof obj;
      } :
      function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    var _createClass = (function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    })();

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function Deferred() {
      this._done = [];
      this._fail = [];
    }
    Deferred.prototype = {
      execute: function execute(list, args) {
        var i = list.length;
        args = Array.prototype.slice.call(args);
        while (i--) {
          list[i].apply(null, args);
        }
      },
      resolve: function resolve() {
        this.execute(this._done, arguments);
      },
      reject: function reject() {
        this.execute(this._fail, arguments);
      },
      done: function done(callback) {
        this._done.push(callback);
      },
      fail: function fail(callback) {
        this._fail.push(callback);
      },
    };
    var ID = 0;
    var YoutubeAPIadded = 0;
    var VimeoAPIadded = 0;
    var loadingYoutubePlayer = 0;
    var loadingVimeoPlayer = 0;
    var loadingYoutubeDefer = new Deferred();
    var loadingVimeoDefer = new Deferred();
    var VideoWorker = (function() {
      function VideoWorker(url, options) {
        _classCallCheck(this, VideoWorker);
        var self = this;
        self.url = url;
        self.options_default = {
          autoplay: false,
          loop: false,
          mute: false,
          volume: 100,
          showContols: true,
          startTime: 0,
          endTime: 0
        };
        self.options = self.extend({}, self.options_default, options);
        self.videoID = self.parseURL(url);
        if (self.videoID) {
          self.ID = ID++;
          self.loadAPI();
          self.init();
        }
      }
      _createClass(VideoWorker, [{
          key: "extend",
          value: function extend(out) {
            var _arguments = arguments;
            out = out || {};
            Object.keys(arguments).forEach(function(i) {
              if (!_arguments[i]) {
                return;
              }
              Object.keys(_arguments[i]).forEach(function(key) {
                out[key] = _arguments[i][key];
              });
            });
            return out;
          },
        },
        {
          key: "parseURL",
          value: function parseURL(url) {
            function getYoutubeID(ytUrl) {
              var regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
              var match = ytUrl.match(regExp);
              return match && match[1].length === 11 ? match[1] : false;
            }

            function getVimeoID(vmUrl) {
              var regExp = /https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/;
              var match = vmUrl.match(regExp);
              return match && match[3] ? match[3] : false;
            }

            function getLocalVideos(locUrl) {
              var videoFormats = locUrl.split(/,(?=mp4\:|webm\:|ogv\:|ogg\:)/);
              var result = {};
              var ready = 0;
              videoFormats.forEach(function(val) {
                var match = val.match(/^(mp4|webm|ogv|ogg)\:(.*)/);
                if (match && match[1] && match[2]) {
                  result[match[1] === "ogv" ? "ogg" : match[1]] = match[2];
                  ready = 1;
                }
              });
              return ready ? result : false;
            }
            var Youtube = getYoutubeID(url);
            var Vimeo = getVimeoID(url);
            var Local = getLocalVideos(url);
            if (Youtube) {
              this.type = "youtube";
              return Youtube;
            } else if (Vimeo) {
              this.type = "vimeo";
              return Vimeo;
            } else if (Local) {
              this.type = "local";
              return Local;
            }
            return false;
          },
        },
        {
          key: "isValid",
          value: function isValid() {
            return !!this.videoID;
          },
        },
        {
          key: "on",
          value: function on(name, callback) {
            this.userEventsList = this.userEventsList || [];
            (this.userEventsList[name] || (this.userEventsList[name] = [])).push(callback);
          },
        },
        {
          key: "off",
          value: function off(name, callback) {
            var _this = this;
            if (!this.userEventsList || !this.userEventsList[name]) {
              return;
            }
            if (!callback) {
              delete this.userEventsList[name];
            } else {
              this.userEventsList[name].forEach(function(val, key) {
                if (val === callback) {
                  _this.userEventsList[name][key] = false;
                }
              });
            }
          },
        },
        {
          key: "fire",
          value: function fire(name) {
            var _this2 = this;
            var args = [].slice.call(arguments, 1);
            if (this.userEventsList && typeof this.userEventsList[name] !== "undefined") {
              this.userEventsList[name].forEach(function(val) {
                if (val) {
                  val.apply(_this2, args);
                }
              });
            }
          },
        },
        {
          key: "play",
          value: function play(start) {
            var self = this;
            if (!self.player) {
              return;
            }
            if (self.type === "youtube" && self.player.playVideo) {
              if (typeof start !== "undefined") {
                self.player.seekTo(start || 0);
              }
              if (YT.PlayerState.PLAYING !== self.player.getPlayerState()) {
                self.player.playVideo();
              }
            }
            if (self.type === "vimeo") {
              if (typeof start !== "undefined") {
                self.player.setCurrentTime(start);
              }
              self.player.getPaused().then(function(paused) {
                if (paused) {
                  self.player.play();
                }
              });
            }
            if (self.type === "local") {
              if (typeof start !== "undefined") {
                self.player.currentTime = start;
              }
              if (self.player.paused) {
                self.player.play();
              }
            }
          },
        },
        {
          key: "pause",
          value: function pause() {
            var self = this;
            if (!self.player) {
              return;
            }
            if (self.type === "youtube" && self.player.pauseVideo) {
              if (YT.PlayerState.PLAYING === self.player.getPlayerState()) {
                self.player.pauseVideo();
              }
            }
            if (self.type === "vimeo") {
              self.player.getPaused().then(function(paused) {
                if (!paused) {
                  self.player.pause();
                }
              });
            }
            if (self.type === "local") {
              if (!self.player.paused) {
                self.player.pause();
              }
            }
          },
        },
        {
          key: "mute",
          value: function mute() {
            var self = this;
            if (!self.player) {
              return;
            }
            if (self.type === "youtube" && self.player.mute) {
              self.player.mute();
            }
            if (self.type === "vimeo" && self.player.setVolume) {
              self.player.setVolume(0);
            }
            if (self.type === "local") {
              self.$video.muted = true;
            }
          },
        },
        {
          key: "unmute",
          value: function unmute() {
            var self = this;
            if (!self.player) {
              return;
            }
            if (self.type === "youtube" && self.player.mute) {
              self.player.unMute();
            }
            if (self.type === "vimeo" && self.player.setVolume) {
              self.player.setVolume(self.options.volume);
            }
            if (self.type === "local") {
              self.$video.muted = false;
            }
          },
        },
        {
          key: "setVolume",
          value: function setVolume() {
            var volume = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var self = this;
            if (!self.player || !volume) {
              return;
            }
            if (self.type === "youtube" && self.player.setVolume) {
              self.player.setVolume(volume);
            }
            if (self.type === "vimeo" && self.player.setVolume) {
              self.player.setVolume(volume);
            }
            if (self.type === "local") {
              self.$video.volume = volume / 100;
            }
          },
        },
        {
          key: "getVolume",
          value: function getVolume(callback) {
            var self = this;
            if (!self.player) {
              callback(false);
              return;
            }
            if (self.type === "youtube" && self.player.getVolume) {
              callback(self.player.getVolume());
            }
            if (self.type === "vimeo" && self.player.getVolume) {
              self.player.getVolume().then(function(volume) {
                callback(volume);
              });
            }
            if (self.type === "local") {
              callback(self.$video.volume * 100);
            }
          },
        },
        {
          key: "getMuted",
          value: function getMuted(callback) {
            var self = this;
            if (!self.player) {
              callback(null);
              return;
            }
            if (self.type === "youtube" && self.player.isMuted) {
              callback(self.player.isMuted());
            }
            if (self.type === "vimeo" && self.player.getVolume) {
              self.player.getVolume().then(function(volume) {
                callback(!!volume);
              });
            }
            if (self.type === "local") {
              callback(self.$video.muted);
            }
          },
        },
        {
          key: "getImageURL",
          value: function getImageURL(callback) {
            var self = this;
            if (self.videoImage) {
              callback(self.videoImage);
              return;
            }
            if (self.type === "youtube") {
              var availableSizes = ["maxresdefault", "sddefault", "hqdefault", "0"];
              var step = 0;
              var tempImg = new Image();
              tempImg.onload = function() {
                if ((this.naturalWidth || this.width) !== 120 || step === availableSizes.length - 1) {
                  self.videoImage = "https://img.youtube.com/vi/" + self.videoID + "/" + availableSizes[step] + ".jpg";
                  callback(self.videoImage);
                } else {
                  step++;
                  this.src = "https://img.youtube.com/vi/" + self.videoID + "/" + availableSizes[step] + ".jpg";
                }
              };
              tempImg.src = "https://img.youtube.com/vi/" + self.videoID + "/" + availableSizes[step] + ".jpg";
            }
            if (self.type === "vimeo") {
              var request = new XMLHttpRequest();
              request.open("GET", "https://vimeo.com/api/v2/video/" + self.videoID + ".json", true);
              request.onreadystatechange = function() {
                if (this.readyState === 4) {
                  if (this.status >= 200 && this.status < 400) {
                    var response = JSON.parse(this.responseText);
                    self.videoImage = response[0].thumbnail_large;
                    callback(self.videoImage);
                  } else {}
                }
              };
              request.send();
              request = null;
            }
          },
        },
        {
          key: "getIframe",
          value: function getIframe(callback) {
            this.getVideo(callback);
          },
        },
        {
          key: "getVideo",
          value: function getVideo(callback) {
            var self = this;
            if (self.$video) {
              callback(self.$video);
              return;
            }
            self.onAPIready(function() {
              var hiddenDiv = void 0;
              if (!self.$video) {
                hiddenDiv = document.createElement("div");
                hiddenDiv.style.display = "none";
              }
              if (self.type === "youtube") {
                self.playerOptions = {};
                self.playerOptions.videoId = self.videoID;
                self.playerOptions.playerVars = {
                  autohide: 1,
                  rel: 0,
                  autoplay: 0,
                  playsinline: 1
                };
                if (!self.options.showContols) {
                  self.playerOptions.playerVars.iv_load_policy = 3;
                  self.playerOptions.playerVars.modestbranding = 1;
                  self.playerOptions.playerVars.controls = 0;
                  self.playerOptions.playerVars.showinfo = 0;
                  self.playerOptions.playerVars.disablekb = 1;
                }
                var ytStarted = void 0;
                var ytProgressInterval = void 0;
                self.playerOptions.events = {
                  onReady: function onReady(e) {
                    if (self.options.mute) {
                      e.target.mute();
                    } else if (self.options.volume) {
                      e.target.setVolume(self.options.volume);
                    }
                    if (self.options.autoplay) {
                      self.play(self.options.startTime);
                    }
                    self.fire("ready", e);
                    if (self.options.loop && !self.options.endTime) {
                      var secondsOffset = 0.1;
                      self.options.endTime = self.player.getDuration() - secondsOffset;
                    }
                    setInterval(function() {
                      self.getVolume(function(volume) {
                        if (self.options.volume !== volume) {
                          self.options.volume = volume;
                          self.fire("volumechange", e);
                        }
                      });
                    }, 150);
                  },
                  onStateChange: function onStateChange(e) {
                    if (self.options.loop && e.data === YT.PlayerState.ENDED) {
                      self.play(self.options.startTime);
                    }
                    if (!ytStarted && e.data === YT.PlayerState.PLAYING) {
                      ytStarted = 1;
                      self.fire("started", e);
                    }
                    if (e.data === YT.PlayerState.PLAYING) {
                      self.fire("play", e);
                    }
                    if (e.data === YT.PlayerState.PAUSED) {
                      self.fire("pause", e);
                    }
                    if (e.data === YT.PlayerState.ENDED) {
                      self.fire("ended", e);
                    }
                    if (e.data === YT.PlayerState.PLAYING) {
                      ytProgressInterval = setInterval(function() {
                        self.fire("timeupdate", e);
                        if (self.options.endTime && self.player.getCurrentTime() >= self.options.endTime) {
                          if (self.options.loop) {
                            self.play(self.options.startTime);
                          } else {
                            self.pause();
                          }
                        }
                      }, 150);
                    } else {
                      clearInterval(ytProgressInterval);
                    }
                  },
                };
                var firstInit = !self.$video;
                if (firstInit) {
                  var div = document.createElement("div");
                  div.setAttribute("id", self.playerID);
                  hiddenDiv.appendChild(div);
                  document.body.appendChild(hiddenDiv);
                }
                self.player = self.player || new window.YT.Player(self.playerID, self.playerOptions);
                if (firstInit) {
                  self.$video = document.getElementById(self.playerID);
                  self.videoWidth = parseInt(self.$video.getAttribute("width"), 10) || 1280;
                  self.videoHeight = parseInt(self.$video.getAttribute("height"), 10) || 720;
                }
              }
              if (self.type === "vimeo") {
                self.playerOptions = {
                  id: self.videoID,
                  autopause: 0,
                  transparent: 0,
                  autoplay: self.options.autoplay ? 1 : 0,
                  loop: self.options.loop ? 1 : 0,
                  muted: self.options.mute ? 1 : 0
                };
                if (self.options.volume) {
                  self.playerOptions.volume = self.options.volume;
                }
                if (!self.options.showContols) {
                  self.playerOptions.badge = 0;
                  self.playerOptions.byline = 0;
                  self.playerOptions.portrait = 0;
                  self.playerOptions.title = 0;
                }
                if (!self.$video) {
                  var playerOptionsString = "";
                  Object.keys(self.playerOptions).forEach(function(key) {
                    if (playerOptionsString !== "") {
                      playerOptionsString += "&";
                    }
                    playerOptionsString += key + "=" + encodeURIComponent(self.playerOptions[key]);
                  });
                  self.$video = document.createElement("iframe");
                  self.$video.setAttribute("id", self.playerID);
                  self.$video.setAttribute("src", "https://player.vimeo.com/video/" + self.videoID + "?" + playerOptionsString);
                  self.$video.setAttribute("frameborder", "0");
                  self.$video.setAttribute("mozallowfullscreen", "");
                  self.$video.setAttribute("allowfullscreen", "");
                  hiddenDiv.appendChild(self.$video);
                  document.body.appendChild(hiddenDiv);
                }
                self.player = self.player || new Vimeo.Player(self.$video, self.playerOptions);
                if (self.options.startTime && self.options.autoplay) {
                  self.player.setCurrentTime(self.options.startTime);
                }
                self.player.getVideoWidth().then(function(width) {
                  self.videoWidth = width || 1280;
                });
                self.player.getVideoHeight().then(function(height) {
                  self.videoHeight = height || 720;
                });
                var vmStarted = void 0;
                self.player.on("timeupdate", function(e) {
                  if (!vmStarted) {
                    self.fire("started", e);
                    vmStarted = 1;
                  }
                  self.fire("timeupdate", e);
                  if (self.options.endTime) {
                    if (self.options.endTime && e.seconds >= self.options.endTime) {
                      if (self.options.loop) {
                        self.play(self.options.startTime);
                      } else {
                        self.pause();
                      }
                    }
                  }
                });
                self.player.on("play", function(e) {
                  self.fire("play", e);
                  if (self.options.startTime && e.seconds === 0) {
                    self.play(self.options.startTime);
                  }
                });
                self.player.on("pause", function(e) {
                  self.fire("pause", e);
                });
                self.player.on("ended", function(e) {
                  self.fire("ended", e);
                });
                self.player.on("loaded", function(e) {
                  self.fire("ready", e);
                });
                self.player.on("volumechange", function(e) {
                  self.fire("volumechange", e);
                });
              }

              function addSourceToLocal(element, src, type) {
                var source = document.createElement("source");
                source.src = src;
                source.type = type;
                element.appendChild(source);
              }
              if (self.type === "local") {
                if (!self.$video) {
                  self.$video = document.createElement("video");
                  if (self.options.showContols) {
                    self.$video.controls = true;
                  }
                  if (self.options.mute) {
                    self.$video.muted = true;
                  } else if (self.$video.volume) {
                    self.$video.volume = self.options.volume / 100;
                  }
                  if (self.options.loop) {
                    self.$video.loop = true;
                  }
                  self.$video.setAttribute("playsinline", "");
                  self.$video.setAttribute("webkit-playsinline", "");
                  self.$video.setAttribute("id", self.playerID);
                  hiddenDiv.appendChild(self.$video);
                  document.body.appendChild(hiddenDiv);
                  Object.keys(self.videoID).forEach(function(key) {
                    addSourceToLocal(self.$video, self.videoID[key], "video/" + key);
                  });
                }
                self.player = self.player || self.$video;
                var locStarted = void 0;
                self.player.addEventListener("playing", function(e) {
                  if (!locStarted) {
                    self.fire("started", e);
                  }
                  locStarted = 1;
                });
                self.player.addEventListener("timeupdate", function(e) {
                  self.fire("timeupdate", e);
                  if (self.options.endTime) {
                    if (self.options.endTime && this.currentTime >= self.options.endTime) {
                      if (self.options.loop) {
                        self.play(self.options.startTime);
                      } else {
                        self.pause();
                      }
                    }
                  }
                });
                self.player.addEventListener("play", function(e) {
                  self.fire("play", e);
                });
                self.player.addEventListener("pause", function(e) {
                  self.fire("pause", e);
                });
                self.player.addEventListener("ended", function(e) {
                  self.fire("ended", e);
                });
                self.player.addEventListener("loadedmetadata", function() {
                  self.videoWidth = this.videoWidth || 1280;
                  self.videoHeight = this.videoHeight || 720;
                  self.fire("ready");
                  if (self.options.autoplay) {
                    self.play(self.options.startTime);
                  }
                });
                self.player.addEventListener("volumechange", function(e) {
                  self.getVolume(function(volume) {
                    self.options.volume = volume;
                  });
                  self.fire("volumechange", e);
                });
              }
              callback(self.$video);
            });
          },
        },
        {
          key: "init",
          value: function init() {
            var self = this;
            self.playerID = "VideoWorker-" + self.ID;
          },
        },
        {
          key: "loadAPI",
          value: function loadAPI() {
            var self = this;
            if (YoutubeAPIadded && VimeoAPIadded) {
              return;
            }
            var src = "";
            if (self.type === "youtube" && !YoutubeAPIadded) {
              YoutubeAPIadded = 1;
              src = "https://www.youtube.com/iframe_api";
            }
            if (self.type === "vimeo" && !VimeoAPIadded) {
              VimeoAPIadded = 1;
              src = "https://player.vimeo.com/api/player.js";
            }
            if (!src) {
              return;
            }
            var tag = document.createElement("script");
            var head = document.getElementsByTagName("head")[0];
            tag.src = src;
            head.appendChild(tag);
            head = null;
            tag = null;
          },
        },
        {
          key: "onAPIready",
          value: function onAPIready(callback) {
            var self = this;
            if (self.type === "youtube") {
              if ((typeof YT === "undefined" || YT.loaded === 0) && !loadingYoutubePlayer) {
                loadingYoutubePlayer = 1;
                window.onYouTubeIframeAPIReady = function() {
                  window.onYouTubeIframeAPIReady = null;
                  loadingYoutubeDefer.resolve("done");
                  callback();
                };
              } else if ((typeof YT === "undefined" ? "undefined" : _typeof(YT)) === "object" && YT.loaded === 1) {
                callback();
              } else {
                loadingYoutubeDefer.done(function() {
                  callback();
                });
              }
            }
            if (self.type === "vimeo") {
              if (typeof Vimeo === "undefined" && !loadingVimeoPlayer) {
                loadingVimeoPlayer = 1;
                var vimeoInterval = setInterval(function() {
                  if (typeof Vimeo !== "undefined") {
                    clearInterval(vimeoInterval);
                    loadingVimeoDefer.resolve("done");
                    callback();
                  }
                }, 20);
              } else if (typeof Vimeo !== "undefined") {
                callback();
              } else {
                loadingVimeoDefer.done(function() {
                  callback();
                });
              }
            }
            if (self.type === "local") {
              callback();
            }
          },
        },
      ]);
      return VideoWorker;
    })();
    exports.default = VideoWorker;
  },
  function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = jarallaxVideo;
    var _videoWorker = __webpack_require__(8);
    var _videoWorker2 = _interopRequireDefault(_videoWorker);
    var _global = __webpack_require__(4);
    var _global2 = _interopRequireDefault(_global);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    function jarallaxVideo() {
      var jarallax = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _global2.default.jarallax;
      if (typeof jarallax === "undefined") {
        return;
      }
      var Jarallax = jarallax.constructor;
      var defInit = Jarallax.prototype.init;
      Jarallax.prototype.init = function() {
        var self = this;
        defInit.apply(self);
        if (self.video && !self.options.disableVideo()) {
          self.video.getVideo(function(video) {
            var $parent = video.parentNode;
            self.css(video, {
              position: self.image.position,
              top: "0px",
              left: "0px",
              right: "0px",
              bottom: "0px",
              width: "100%",
              height: "100%",
              maxWidth: "none",
              maxHeight: "none",
              margin: 0,
              zIndex: -1
            });
            self.$video = video;
            self.image.$container.appendChild(video);
            $parent.parentNode.removeChild($parent);
          });
        }
      };
      var defCoverImage = Jarallax.prototype.coverImage;
      Jarallax.prototype.coverImage = function() {
        var self = this;
        var imageData = defCoverImage.apply(self);
        var node = self.image.$item ? self.image.$item.nodeName : false;
        if (imageData && self.video && node && (node === "IFRAME" || node === "VIDEO")) {
          var h = imageData.image.height;
          var w = (h * self.image.width) / self.image.height;
          var ml = (imageData.container.width - w) / 2;
          var mt = imageData.image.marginTop;
          if (imageData.container.width > w) {
            w = imageData.container.width;
            h = (w * self.image.height) / self.image.width;
            ml = 0;
            mt += (imageData.image.height - h) / 2;
          }
          if (node === "IFRAME") {
            h += 400;
            mt -= 200;
          }
          self.css(self.$video, {
            width: w + "px",
            marginLeft: ml + "px",
            height: h + "px",
            marginTop: mt + "px"
          });
        }
        return imageData;
      };
      var defInitImg = Jarallax.prototype.initImg;
      Jarallax.prototype.initImg = function() {
        var self = this;
        var defaultResult = defInitImg.apply(self);
        if (!self.options.videoSrc) {
          self.options.videoSrc = self.$item.getAttribute("data-jarallax-video") || null;
        }
        if (self.options.videoSrc) {
          self.defaultInitImgResult = defaultResult;
          return true;
        }
        return defaultResult;
      };
      var defCanInitParallax = Jarallax.prototype.canInitParallax;
      Jarallax.prototype.canInitParallax = function() {
        var self = this;
        var defaultResult = defCanInitParallax.apply(self);
        if (!self.options.videoSrc) {
          return defaultResult;
        }
        var video = new _videoWorker2.default(self.options.videoSrc, {
          autoplay: true,
          loop: self.options.videoLoop,
          showContols: false,
          startTime: self.options.videoStartTime || 0,
          endTime: self.options.videoEndTime || 0,
          mute: self.options.videoVolume ? 0 : 1,
          volume: self.options.videoVolume || 0,
        });
        if (video.isValid()) {
          if (!defaultResult) {
            if (!self.defaultInitImgResult) {
              video.getImageURL(function(url) {
                var curStyle = self.$item.getAttribute("style");
                if (curStyle) {
                  self.$item.setAttribute("data-jarallax-original-styles", curStyle);
                }
                self.css(self.$item, {
                  "background-image": 'url("' + url + '")',
                  "background-position": "center",
                  "background-size": "cover"
                });
              });
            }
          } else {
            video.on("ready", function() {
              if (self.options.videoPlayOnlyVisible) {
                var oldOnScroll = self.onScroll;
                self.onScroll = function() {
                  oldOnScroll.apply(self);
                  if (self.options.videoLoop || (!self.options.videoLoop && !self.videoEnded)) {
                    if (self.isVisible()) {
                      video.play();
                    } else {
                      video.pause();
                    }
                  }
                };
              } else {
                video.play();
              }
            });
            video.on("started", function() {
              self.image.$default_item = self.image.$item;
              self.image.$item = self.$video;
              self.image.width = self.video.videoWidth || 1280;
              self.image.height = self.video.videoHeight || 720;
              self.coverImage();
              self.clipContainer();
              self.onScroll();
              if (self.image.$default_item) {
                self.image.$default_item.style.display = "none";
              }
            });
            video.on("ended", function() {
              self.videoEnded = true;
              if (!self.options.videoLoop) {
                if (self.image.$default_item) {
                  self.image.$item = self.image.$default_item;
                  self.image.$item.style.display = "block";
                  self.coverImage();
                  self.clipContainer();
                  self.onScroll();
                }
              }
            });
            self.video = video;
            if (!self.defaultInitImgResult) {
              if (video.type !== "local") {
                video.getImageURL(function(url) {
                  self.image.src = url;
                  self.init();
                });
                return false;
              }
              self.image.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
              return true;
            }
          }
        }
        return defaultResult;
      };
      var defDestroy = Jarallax.prototype.destroy;
      Jarallax.prototype.destroy = function() {
        var self = this;
        if (self.image.$default_item) {
          self.image.$item = self.image.$default_item;
          delete self.image.$default_item;
        }
        defDestroy.apply(self);
      };
    }
  },
]);
/*!
 * Name    : Elements Extension for Jarallax
 * Version : 1.0.0
 * Author  : nK <https://nkdev.info>
 * GitHub  : https://github.com/nk-o/jarallax
 */
(function(modules) {
  var installedModules = {};

  function __webpack_require__(moduleId) {
    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }
    var module = (installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {}
    });
    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    module.l = true;
    return module.exports;
  }
  __webpack_require__.m = modules;
  __webpack_require__.c = installedModules;
  __webpack_require__.d = function(exports, name, getter) {
    if (!__webpack_require__.o(exports, name)) {
      Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
    }
  };
  __webpack_require__.r = function(exports) {
    if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      Object.defineProperty(exports, Symbol.toStringTag, {
        value: "Module"
      });
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
  };
  __webpack_require__.t = function(value, mode) {
    if (mode & 1) value = __webpack_require__(value);
    if (mode & 8) return value;
    if (mode & 4 && typeof value === "object" && value && value.__esModule) return value;
    var ns = Object.create(null);
    __webpack_require__.r(ns);
    Object.defineProperty(ns, "default", {
      enumerable: true,
      value: value
    });
    if (mode & 2 && typeof value != "string")
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function(key) {
            return value[key];
          }.bind(null, key)
        );
    return ns;
  };
  __webpack_require__.n = function(module) {
    var getter =
      module && module.__esModule ?
      function getDefault() {
        return module["default"];
      } :
      function getModuleExports() {
        return module;
      };
    __webpack_require__.d(getter, "a", getter);
    return getter;
  };
  __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  __webpack_require__.p = "";
  return __webpack_require__((__webpack_require__.s = 0));
})([
  function(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(1);
  },
  function(module, exports, __webpack_require__) {
    "use strict";
    var _liteReady = __webpack_require__(2);
    var _liteReady2 = _interopRequireDefault(_liteReady);
    var _jarallaxElement = __webpack_require__(3);
    var _jarallaxElement2 = _interopRequireDefault(_jarallaxElement);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    (0, _jarallaxElement2.default)();
    (0, _liteReady2.default)(function() {
      if (typeof jarallax !== "undefined") {
        jarallax(document.querySelectorAll("[data-jarallax-element]"));
      }
    });
  },
  function(module, exports, __webpack_require__) {
    "use strict";
    module.exports = function(callback) {
      if (document.readyState === "complete" || document.readyState === "interactive") {
        callback.call();
      } else if (document.attachEvent) {
        document.attachEvent("onreadystatechange", function() {
          if (document.readyState === "interactive") callback.call();
        });
      } else if (document.addEventListener) {
        document.addEventListener("DOMContentLoaded", callback);
      }
    };
  },
  function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = jarallaxElement;
    var _global = __webpack_require__(4);
    var _global2 = _interopRequireDefault(_global);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    function jarallaxElement() {
      var jarallax = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _global2.default.jarallax;
      if (typeof jarallax === "undefined") {
        return;
      }
      var Jarallax = jarallax.constructor;
      ["initImg", "canInitParallax", "init", "destroy", "clipContainer", "coverImage", "isVisible", "onScroll", "onResize"].forEach(function(key) {
        var def = Jarallax.prototype[key];
        Jarallax.prototype[key] = function() {
          var self = this;
          var args = arguments || [];
          if (key === "initImg" && self.$item.getAttribute("data-jarallax-element") !== null) {
            self.options.type = "element";
            self.pureOptions.speed = self.$item.getAttribute("data-jarallax-element") || self.pureOptions.speed;
          }
          if (self.options.type !== "element") {
            return def.apply(self, args);
          }
          self.pureOptions.threshold = self.$item.getAttribute("data-threshold") || "";
          switch (key) {
            case "init":
              var speedArr = self.pureOptions.speed.split(" ");
              self.options.speed = self.pureOptions.speed || 0;
              self.options.speedY = speedArr[0] ? parseFloat(speedArr[0]) : 0;
              self.options.speedX = speedArr[1] ? parseFloat(speedArr[1]) : 0;
              var thresholdArr = self.pureOptions.threshold.split(" ");
              self.options.thresholdY = thresholdArr[0] ? parseFloat(thresholdArr[0]) : null;
              self.options.thresholdX = thresholdArr[1] ? parseFloat(thresholdArr[1]) : null;
              break;
            case "onResize":
              var defTransform = self.css(self.$item, "transform");
              self.css(self.$item, {
                transform: ""
              });
              var rect = self.$item.getBoundingClientRect();
              self.itemData = {
                width: rect.width,
                height: rect.height,
                y: rect.top + self.getWindowData().y,
                x: rect.left
              };
              self.css(self.$item, {
                transform: defTransform
              });
              break;
            case "onScroll":
              var wnd = self.getWindowData();
              var centerPercent = (wnd.y + wnd.height / 2 - self.itemData.y - self.itemData.height / 2) / (wnd.height / 2);
              var moveY = centerPercent * self.options.speedY;
              var moveX = centerPercent * self.options.speedX;
              var my = moveY;
              var mx = moveX;
              if (self.options.thresholdY !== null && moveY > self.options.thresholdY) my = 0;
              if (self.options.thresholdX !== null && moveX > self.options.thresholdX) mx = 0;
              self.css(self.$item, {
                transform: "translate3d(" + mx + "px," + my + "px,0)"
              });
              break;
            case "initImg":
            case "isVisible":
            case "clipContainer":
            case "coverImage":
              return true;
          }
          return def.apply(self, args);
        };
      });
    }
  },
  function(module, exports, __webpack_require__) {
    "use strict";
    (function(global) {
      var win;
      if (typeof window !== "undefined") {
        win = window;
      } else if (typeof global !== "undefined") {
        win = global;
      } else if (typeof self !== "undefined") {
        win = self;
      } else {
        win = {};
      }
      module.exports = win;
    }.call(this, __webpack_require__(5)));
  },
  function(module, exports, __webpack_require__) {
    "use strict";
    var _typeof =
      typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ?
      function(obj) {
        return typeof obj;
      } :
      function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    var g;
    g = (function() {
      return this;
    })();
    try {
      g = g || Function("return this")() || (1, eval)("this");
    } catch (e) {
      if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
    }
    module.exports = g;
  },
]);
/*! This file is auto-generated */
/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
!(function(e, t) {
  "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? (module.exports = t()) : (e.EvEmitter = t());
})("undefined" != typeof window ? window : this, function() {
  function e() {}
  var t = e.prototype;
  return (
    (t.on = function(e, t) {
      if (e && t) {
        var i = (this._events = this._events || {}),
          n = (i[e] = i[e] || []);
        return n.indexOf(t) == -1 && n.push(t), this;
      }
    }),
    (t.once = function(e, t) {
      if (e && t) {
        this.on(e, t);
        var i = (this._onceEvents = this._onceEvents || {}),
          n = (i[e] = i[e] || {});
        return (n[t] = !0), this;
      }
    }),
    (t.off = function(e, t) {
      var i = this._events && this._events[e];
      if (i && i.length) {
        var n = i.indexOf(t);
        return n != -1 && i.splice(n, 1), this;
      }
    }),
    (t.emitEvent = function(e, t) {
      var i = this._events && this._events[e];
      if (i && i.length) {
        (i = i.slice(0)), (t = t || []);
        for (var n = this._onceEvents && this._onceEvents[e], o = 0; o < i.length; o++) {
          var r = i[o],
            s = n && n[r];
          s && (this.off(e, r), delete n[r]), r.apply(this, t);
        }
        return this;
      }
    }),
    (t.allOff = function() {
      delete this._events, delete this._onceEvents;
    }),
    e
  );
}),
(function(e, t) {
  "use strict";
  "function" == typeof define && define.amd ?
    define(["ev-emitter/ev-emitter"], function(i) {
      return t(e, i);
    }) :
    "object" == typeof module && module.exports ?
    (module.exports = t(e, require("ev-emitter"))) :
    (e.imagesLoaded = t(e, e.EvEmitter));
})("undefined" != typeof window ? window : this, function(e, t) {
  function i(e, t) {
    for (var i in t) e[i] = t[i];
    return e;
  }

  function n(e) {
    if (Array.isArray(e)) return e;
    var t = "object" == typeof e && "number" == typeof e.length;
    return t ? d.call(e) : [e];
  }

  function o(e, t, r) {
    if (!(this instanceof o)) return new o(e, t, r);
    var s = e;
    return (
      "string" == typeof e && (s = document.querySelectorAll(e)),
      s ?
      ((this.elements = n(s)),
        (this.options = i({}, this.options)),
        "function" == typeof t ? (r = t) : i(this.options, t),
        r && this.on("always", r),
        this.getImages(),
        h && (this.jqDeferred = new h.Deferred()),
        void setTimeout(this.check.bind(this))) :
      void a.error("Bad element for imagesLoaded " + (s || e))
    );
  }

  function r(e) {
    this.img = e;
  }

  function s(e, t) {
    (this.url = e), (this.element = t), (this.img = new Image());
  }
  var h = e.jQuery,
    a = e.console,
    d = Array.prototype.slice;
  (o.prototype = Object.create(t.prototype)),
  (o.prototype.options = {}),
  (o.prototype.getImages = function() {
    (this.images = []), this.elements.forEach(this.addElementImages, this);
  }),
  (o.prototype.addElementImages = function(e) {
    "IMG" == e.nodeName && this.addImage(e), this.options.background === !0 && this.addElementBackgroundImages(e);
    var t = e.nodeType;
    if (t && u[t]) {
      for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) {
        var o = i[n];
        this.addImage(o);
      }
      if ("string" == typeof this.options.background) {
        var r = e.querySelectorAll(this.options.background);
        for (n = 0; n < r.length; n++) {
          var s = r[n];
          this.addElementBackgroundImages(s);
        }
      }
    }
  });
  var u = {
    1: !0,
    9: !0,
    11: !0
  };
  return (
    (o.prototype.addElementBackgroundImages = function(e) {
      var t = getComputedStyle(e);
      if (t)
        for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage); null !== n;) {
          var o = n && n[2];
          o && this.addBackground(o, e), (n = i.exec(t.backgroundImage));
        }
    }),
    (o.prototype.addImage = function(e) {
      var t = new r(e);
      this.images.push(t);
    }),
    (o.prototype.addBackground = function(e, t) {
      var i = new s(e, t);
      this.images.push(i);
    }),
    (o.prototype.check = function() {
      function e(e, i, n) {
        setTimeout(function() {
          t.progress(e, i, n);
        });
      }
      var t = this;
      return (
        (this.progressedCount = 0),
        (this.hasAnyBroken = !1),
        this.images.length ?
        void this.images.forEach(function(t) {
          t.once("progress", e), t.check();
        }) :
        void this.complete()
      );
    }),
    (o.prototype.progress = function(e, t, i) {
      this.progressedCount++,
        (this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded),
        this.emitEvent("progress", [this, e, t]),
        this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e),
        this.progressedCount == this.images.length && this.complete(),
        this.options.debug && a && a.log("progress: " + i, e, t);
    }),
    (o.prototype.complete = function() {
      var e = this.hasAnyBroken ? "fail" : "done";
      if (((this.isComplete = !0), this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred)) {
        var t = this.hasAnyBroken ? "reject" : "resolve";
        this.jqDeferred[t](this);
      }
    }),
    (r.prototype = Object.create(t.prototype)),
    (r.prototype.check = function() {
      var e = this.getIsImageComplete();
      return e ?
        void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") :
        ((this.proxyImage = new Image()),
          this.proxyImage.addEventListener("load", this),
          this.proxyImage.addEventListener("error", this),
          this.img.addEventListener("load", this),
          this.img.addEventListener("error", this),
          void(this.proxyImage.src = this.img.src));
    }),
    (r.prototype.getIsImageComplete = function() {
      return this.img.complete && this.img.naturalWidth;
    }),
    (r.prototype.confirm = function(e, t) {
      (this.isLoaded = e), this.emitEvent("progress", [this, this.img, t]);
    }),
    (r.prototype.handleEvent = function(e) {
      var t = "on" + e.type;
      this[t] && this[t](e);
    }),
    (r.prototype.onload = function() {
      this.confirm(!0, "onload"), this.unbindEvents();
    }),
    (r.prototype.onerror = function() {
      this.confirm(!1, "onerror"), this.unbindEvents();
    }),
    (r.prototype.unbindEvents = function() {
      this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
    }),
    (s.prototype = Object.create(r.prototype)),
    (s.prototype.check = function() {
      this.img.addEventListener("load", this), this.img.addEventListener("error", this), (this.img.src = this.url);
      var e = this.getIsImageComplete();
      e && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents());
    }),
    (s.prototype.unbindEvents = function() {
      this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
    }),
    (s.prototype.confirm = function(e, t) {
      (this.isLoaded = e), this.emitEvent("progress", [this, this.element, t]);
    }),
    (o.makeJQueryPlugin = function(t) {
      (t = t || e.jQuery),
      t &&
        ((h = t),
          (h.fn.imagesLoaded = function(e, t) {
            var i = new o(this, e, t);
            return i.jqDeferred.promise(h(this));
          }));
    }),
    o.makeJQueryPlugin(),
    o
  );
});
/*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */
(function(window, factory) {
  if (typeof define == "function" && define.amd) {
    define("jquery-bridget/jquery-bridget", ["jquery"], function(jQuery) {
      return factory(window, jQuery);
    });
  } else if (typeof module == "object" && module.exports) {
    module.exports = factory(window, require("jquery"));
  } else {
    window.jQueryBridget = factory(window, window.jQuery);
  }
})(window, function factory(window, jQuery) {
  "use strict";
  var arraySlice = Array.prototype.slice;
  var console = window.console;
  var logError =
    typeof console == "undefined" ?
    function() {} :
    function(message) {
      console.error(message);
    };

  function jQueryBridget(namespace, PluginClass, $) {
    $ = $ || jQuery || window.jQuery;
    if (!$) {
      return;
    }
    if (!PluginClass.prototype.option) {
      PluginClass.prototype.option = function(opts) {
        if (!$.isPlainObject(opts)) {
          return;
        }
        this.options = $.extend(true, this.options, opts);
      };
    }
    $.fn[namespace] = function(arg0) {
      if (typeof arg0 == "string") {
        var args = arraySlice.call(arguments, 1);
        return methodCall(this, arg0, args);
      }
      plainCall(this, arg0);
      return this;
    };

    function methodCall($elems, methodName, args) {
      var returnValue;
      var pluginMethodStr = "$()." + namespace + '("' + methodName + '")';
      $elems.each(function(i, elem) {
        var instance = $.data(elem, namespace);
        if (!instance) {
          logError(namespace + " not initialized. Cannot call methods, i.e. " + pluginMethodStr);
          return;
        }
        var method = instance[methodName];
        if (!method || methodName.charAt(0) == "_") {
          logError(pluginMethodStr + " is not a valid method");
          return;
        }
        var value = method.apply(instance, args);
        returnValue = returnValue === undefined ? value : returnValue;
      });
      return returnValue !== undefined ? returnValue : $elems;
    }

    function plainCall($elems, options) {
      $elems.each(function(i, elem) {
        var instance = $.data(elem, namespace);
        if (instance) {
          instance.option(options);
          instance._init();
        } else {
          instance = new PluginClass(elem, options);
          $.data(elem, namespace, instance);
        }
      });
    }
    updateJQuery($);
  }

  function updateJQuery($) {
    if (!$ || ($ && $.bridget)) {
      return;
    }
    $.bridget = jQueryBridget;
  }
  updateJQuery(jQuery || window.jQuery);
  return jQueryBridget;
});
(function(global, factory) {
  if (typeof define == "function" && define.amd) {
    define("ev-emitter/ev-emitter", factory);
  } else if (typeof module == "object" && module.exports) {
    module.exports = factory();
  } else {
    global.EvEmitter = factory();
  }
})(typeof window != "undefined" ? window : this, function() {
  function EvEmitter() {}
  var proto = EvEmitter.prototype;
  proto.on = function(eventName, listener) {
    if (!eventName || !listener) {
      return;
    }
    var events = (this._events = this._events || {});
    var listeners = (events[eventName] = events[eventName] || []);
    if (listeners.indexOf(listener) == -1) {
      listeners.push(listener);
    }
    return this;
  };
  proto.once = function(eventName, listener) {
    if (!eventName || !listener) {
      return;
    }
    this.on(eventName, listener);
    var onceEvents = (this._onceEvents = this._onceEvents || {});
    var onceListeners = (onceEvents[eventName] = onceEvents[eventName] || {});
    onceListeners[listener] = true;
    return this;
  };
  proto.off = function(eventName, listener) {
    var listeners = this._events && this._events[eventName];
    if (!listeners || !listeners.length) {
      return;
    }
    var index = listeners.indexOf(listener);
    if (index != -1) {
      listeners.splice(index, 1);
    }
    return this;
  };
  proto.emitEvent = function(eventName, args) {
    var listeners = this._events && this._events[eventName];
    if (!listeners || !listeners.length) {
      return;
    }
    listeners = listeners.slice(0);
    args = args || [];
    var onceListeners = this._onceEvents && this._onceEvents[eventName];
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      var isOnce = onceListeners && onceListeners[listener];
      if (isOnce) {
        this.off(eventName, listener);
        delete onceListeners[listener];
      }
      listener.apply(this, args);
    }
    return this;
  };
  proto.allOff = function() {
    delete this._events;
    delete this._onceEvents;
  };
  return EvEmitter;
});
/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */
(function(window, factory) {
  if (typeof define == "function" && define.amd) {
    define("get-size/get-size", factory);
  } else if (typeof module == "object" && module.exports) {
    module.exports = factory();
  } else {
    window.getSize = factory();
  }
})(window, function factory() {
  "use strict";

  function getStyleSize(value) {
    var num = parseFloat(value);
    var isValid = value.indexOf("%") == -1 && !isNaN(num);
    return isValid && num;
  }

  function noop() {}
  var logError =
    typeof console == "undefined" ?
    noop :
    function(message) {
      console.error(message);
    };
  var measurements = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
  var measurementsLength = measurements.length;

  function getZeroSize() {
    var size = {
      width: 0,
      height: 0,
      innerWidth: 0,
      innerHeight: 0,
      outerWidth: 0,
      outerHeight: 0
    };
    for (var i = 0; i < measurementsLength; i++) {
      var measurement = measurements[i];
      size[measurement] = 0;
    }
    return size;
  }

  function getStyle(elem) {
    var style = getComputedStyle(elem);
    if (!style) {
      logError("Style returned " + style + ". Are you running this code in a hidden iframe on Firefox? " + "See https://bit.ly/getsizebug1");
    }
    return style;
  }
  var isSetup = false;
  var isBoxSizeOuter;

  function setup() {
    if (isSetup) {
      return;
    }
    isSetup = true;
    var div = document.createElement("div");
    div.style.width = "200px";
    div.style.padding = "1px 2px 3px 4px";
    div.style.borderStyle = "solid";
    div.style.borderWidth = "1px 2px 3px 4px";
    div.style.boxSizing = "border-box";
    var body = document.body || document.documentElement;
    body.appendChild(div);
    var style = getStyle(div);
    isBoxSizeOuter = Math.round(getStyleSize(style.width)) == 200;
    getSize.isBoxSizeOuter = isBoxSizeOuter;
    body.removeChild(div);
  }

  function getSize(elem) {
    setup();
    if (typeof elem == "string") {
      elem = document.querySelector(elem);
    }
    if (!elem || typeof elem != "object" || !elem.nodeType) {
      return;
    }
    var style = getStyle(elem);
    if (style.display == "none") {
      return getZeroSize();
    }
    var size = {};
    size.width = elem.offsetWidth;
    size.height = elem.offsetHeight;
    var isBorderBox = (size.isBorderBox = style.boxSizing == "border-box");
    for (var i = 0; i < measurementsLength; i++) {
      var measurement = measurements[i];
      var value = style[measurement];
      var num = parseFloat(value);
      size[measurement] = !isNaN(num) ? num : 0;
    }
    var paddingWidth = size.paddingLeft + size.paddingRight;
    var paddingHeight = size.paddingTop + size.paddingBottom;
    var marginWidth = size.marginLeft + size.marginRight;
    var marginHeight = size.marginTop + size.marginBottom;
    var borderWidth = size.borderLeftWidth + size.borderRightWidth;
    var borderHeight = size.borderTopWidth + size.borderBottomWidth;
    var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;
    var styleWidth = getStyleSize(style.width);
    if (styleWidth !== false) {
      size.width = styleWidth + (isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth);
    }
    var styleHeight = getStyleSize(style.height);
    if (styleHeight !== false) {
      size.height = styleHeight + (isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight);
    }
    size.innerWidth = size.width - (paddingWidth + borderWidth);
    size.innerHeight = size.height - (paddingHeight + borderHeight);
    size.outerWidth = size.width + marginWidth;
    size.outerHeight = size.height + marginHeight;
    return size;
  }
  return getSize;
});
(function(window, factory) {
  "use strict";
  if (typeof define == "function" && define.amd) {
    define("desandro-matches-selector/matches-selector", factory);
  } else if (typeof module == "object" && module.exports) {
    module.exports = factory();
  } else {
    window.matchesSelector = factory();
  }
})(window, function factory() {
  "use strict";
  var matchesMethod = (function() {
    var ElemProto = window.Element.prototype;
    if (ElemProto.matches) {
      return "matches";
    }
    if (ElemProto.matchesSelector) {
      return "matchesSelector";
    }
    var prefixes = ["webkit", "moz", "ms", "o"];
    for (var i = 0; i < prefixes.length; i++) {
      var prefix = prefixes[i];
      var method = prefix + "MatchesSelector";
      if (ElemProto[method]) {
        return method;
      }
    }
  })();
  return function matchesSelector(elem, selector) {
    return elem[matchesMethod](selector);
  };
});
(function(window, factory) {
  if (typeof define == "function" && define.amd) {
    define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(matchesSelector) {
      return factory(window, matchesSelector);
    });
  } else if (typeof module == "object" && module.exports) {
    module.exports = factory(window, require("desandro-matches-selector"));
  } else {
    window.fizzyUIUtils = factory(window, window.matchesSelector);
  }
})(window, function factory(window, matchesSelector) {
  var utils = {};
  utils.extend = function(a, b) {
    for (var prop in b) {
      a[prop] = b[prop];
    }
    return a;
  };
  utils.modulo = function(num, div) {
    return ((num % div) + div) % div;
  };
  var arraySlice = Array.prototype.slice;
  utils.makeArray = function(obj) {
    if (Array.isArray(obj)) {
      return obj;
    }
    if (obj === null || obj === undefined) {
      return [];
    }
    var isArrayLike = typeof obj == "object" && typeof obj.length == "number";
    if (isArrayLike) {
      return arraySlice.call(obj);
    }
    return [obj];
  };
  utils.removeFrom = function(ary, obj) {
    var index = ary.indexOf(obj);
    if (index != -1) {
      ary.splice(index, 1);
    }
  };
  utils.getParent = function(elem, selector) {
    while (elem.parentNode && elem != document.body) {
      elem = elem.parentNode;
      if (matchesSelector(elem, selector)) {
        return elem;
      }
    }
  };
  utils.getQueryElement = function(elem) {
    if (typeof elem == "string") {
      return document.querySelector(elem);
    }
    return elem;
  };
  utils.handleEvent = function(event) {
    var method = "on" + event.type;
    if (this[method]) {
      this[method](event);
    }
  };
  utils.filterFindElements = function(elems, selector) {
    elems = utils.makeArray(elems);
    var ffElems = [];
    elems.forEach(function(elem) {
      if (!(elem instanceof HTMLElement)) {
        return;
      }
      if (!selector) {
        ffElems.push(elem);
        return;
      }
      if (matchesSelector(elem, selector)) {
        ffElems.push(elem);
      }
      var childElems = elem.querySelectorAll(selector);
      for (var i = 0; i < childElems.length; i++) {
        ffElems.push(childElems[i]);
      }
    });
    return ffElems;
  };
  utils.debounceMethod = function(_class, methodName, threshold) {
    threshold = threshold || 100;
    var method = _class.prototype[methodName];
    var timeoutName = methodName + "Timeout";
    _class.prototype[methodName] = function() {
      var timeout = this[timeoutName];
      clearTimeout(timeout);
      var args = arguments;
      var _this = this;
      this[timeoutName] = setTimeout(function() {
        method.apply(_this, args);
        delete _this[timeoutName];
      }, threshold);
    };
  };
  utils.docReady = function(callback) {
    var readyState = document.readyState;
    if (readyState == "complete" || readyState == "interactive") {
      setTimeout(callback);
    } else {
      document.addEventListener("DOMContentLoaded", callback);
    }
  };
  utils.toDashed = function(str) {
    return str
      .replace(/(.)([A-Z])/g, function(match, $1, $2) {
        return $1 + "-" + $2;
      })
      .toLowerCase();
  };
  var console = window.console;
  utils.htmlInit = function(WidgetClass, namespace) {
    utils.docReady(function() {
      var dashedNamespace = utils.toDashed(namespace);
      var dataAttr = "data-" + dashedNamespace;
      var dataAttrElems = document.querySelectorAll("[" + dataAttr + "]");
      var jsDashElems = document.querySelectorAll(".js-" + dashedNamespace);
      var elems = utils.makeArray(dataAttrElems).concat(utils.makeArray(jsDashElems));
      var dataOptionsAttr = dataAttr + "-options";
      var jQuery = window.jQuery;
      elems.forEach(function(elem) {
        var attr = elem.getAttribute(dataAttr) || elem.getAttribute(dataOptionsAttr);
        var options;
        try {
          options = attr && JSON.parse(attr);
        } catch (error) {
          if (console) {
            console.error("Error parsing " + dataAttr + " on " + elem.className + ": " + error);
          }
          return;
        }
        var instance = new WidgetClass(elem, options);
        if (jQuery) {
          jQuery.data(elem, namespace, instance);
        }
      });
    });
  };
  return utils;
});
(function(window, factory) {
  if (typeof define == "function" && define.amd) {
    define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], factory);
  } else if (typeof module == "object" && module.exports) {
    module.exports = factory(require("ev-emitter"), require("get-size"));
  } else {
    window.Outlayer = {};
    window.Outlayer.Item = factory(window.EvEmitter, window.getSize);
  }
})(window, function factory(EvEmitter, getSize) {
  "use strict";

  function isEmptyObj(obj) {
    for (var prop in obj) {
      return false;
    }
    prop = null;
    return true;
  }
  var docElemStyle = document.documentElement.style;
  var transitionProperty = typeof docElemStyle.transition == "string" ? "transition" : "WebkitTransition";
  var transformProperty = typeof docElemStyle.transform == "string" ? "transform" : "WebkitTransform";
  var transitionEndEvent = {
    WebkitTransition: "webkitTransitionEnd",
    transition: "transitionend"
  } [transitionProperty];
  var vendorProperties = {
    transform: transformProperty,
    transition: transitionProperty,
    transitionDuration: transitionProperty + "Duration",
    transitionProperty: transitionProperty + "Property",
    transitionDelay: transitionProperty + "Delay",
  };

  function Item(element, layout) {
    if (!element) {
      return;
    }
    this.element = element;
    this.layout = layout;
    this.position = {
      x: 0,
      y: 0
    };
    this._create();
  }
  var proto = (Item.prototype = Object.create(EvEmitter.prototype));
  proto.constructor = Item;
  proto._create = function() {
    this._transn = {
      ingProperties: {},
      clean: {},
      onEnd: {}
    };
    this.css({
      position: "absolute"
    });
  };
  proto.handleEvent = function(event) {
    var method = "on" + event.type;
    if (this[method]) {
      this[method](event);
    }
  };
  proto.getSize = function() {
    this.size = getSize(this.element);
  };
  proto.css = function(style) {
    var elemStyle = this.element.style;
    for (var prop in style) {
      var supportedProp = vendorProperties[prop] || prop;
      elemStyle[supportedProp] = style[prop];
    }
  };
  proto.getPosition = function() {
    var style = getComputedStyle(this.element);
    var isOriginLeft = this.layout._getOption("originLeft");
    var isOriginTop = this.layout._getOption("originTop");
    var xValue = style[isOriginLeft ? "left" : "right"];
    var yValue = style[isOriginTop ? "top" : "bottom"];
    var x = parseFloat(xValue);
    var y = parseFloat(yValue);
    var layoutSize = this.layout.size;
    if (xValue.indexOf("%") != -1) {
      x = (x / 100) * layoutSize.width;
    }
    if (yValue.indexOf("%") != -1) {
      y = (y / 100) * layoutSize.height;
    }
    x = isNaN(x) ? 0 : x;
    y = isNaN(y) ? 0 : y;
    x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
    y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;
    this.position.x = x;
    this.position.y = y;
  };
  proto.layoutPosition = function() {
    var layoutSize = this.layout.size;
    var style = {};
    var isOriginLeft = this.layout._getOption("originLeft");
    var isOriginTop = this.layout._getOption("originTop");
    var xPadding = isOriginLeft ? "paddingLeft" : "paddingRight";
    var xProperty = isOriginLeft ? "left" : "right";
    var xResetProperty = isOriginLeft ? "right" : "left";
    var x = this.position.x + layoutSize[xPadding];
    style[xProperty] = this.getXValue(x);
    style[xResetProperty] = "";
    var yPadding = isOriginTop ? "paddingTop" : "paddingBottom";
    var yProperty = isOriginTop ? "top" : "bottom";
    var yResetProperty = isOriginTop ? "bottom" : "top";
    var y = this.position.y + layoutSize[yPadding];
    style[yProperty] = this.getYValue(y);
    style[yResetProperty] = "";
    this.css(style);
    this.emitEvent("layout", [this]);
  };
  proto.getXValue = function(x) {
    var isHorizontal = this.layout._getOption("horizontal");
    return this.layout.options.percentPosition && !isHorizontal ? (x / this.layout.size.width) * 100 + "%" : x + "px";
  };
  proto.getYValue = function(y) {
    var isHorizontal = this.layout._getOption("horizontal");
    return this.layout.options.percentPosition && isHorizontal ? (y / this.layout.size.height) * 100 + "%" : y + "px";
  };
  proto._transitionTo = function(x, y) {
    this.getPosition();
    var curX = this.position.x;
    var curY = this.position.y;
    var didNotMove = x == this.position.x && y == this.position.y;
    this.setPosition(x, y);
    if (didNotMove && !this.isTransitioning) {
      this.layoutPosition();
      return;
    }
    var transX = x - curX;
    var transY = y - curY;
    var transitionStyle = {};
    transitionStyle.transform = this.getTranslate(transX, transY);
    this.transition({
      to: transitionStyle,
      onTransitionEnd: {
        transform: this.layoutPosition
      },
      isCleaning: true
    });
  };
  proto.getTranslate = function(x, y) {
    var isOriginLeft = this.layout._getOption("originLeft");
    var isOriginTop = this.layout._getOption("originTop");
    x = isOriginLeft ? x : -x;
    y = isOriginTop ? y : -y;
    return "translate3d(" + x + "px, " + y + "px, 0)";
  };
  proto.goTo = function(x, y) {
    this.setPosition(x, y);
    this.layoutPosition();
  };
  proto.moveTo = proto._transitionTo;
  proto.setPosition = function(x, y) {
    this.position.x = parseFloat(x);
    this.position.y = parseFloat(y);
  };
  proto._nonTransition = function(args) {
    this.css(args.to);
    if (args.isCleaning) {
      this._removeStyles(args.to);
    }
    for (var prop in args.onTransitionEnd) {
      args.onTransitionEnd[prop].call(this);
    }
  };
  proto.transition = function(args) {
    if (!parseFloat(this.layout.options.transitionDuration)) {
      this._nonTransition(args);
      return;
    }
    var _transition = this._transn;
    for (var prop in args.onTransitionEnd) {
      _transition.onEnd[prop] = args.onTransitionEnd[prop];
    }
    for (prop in args.to) {
      _transition.ingProperties[prop] = true;
      if (args.isCleaning) {
        _transition.clean[prop] = true;
      }
    }
    if (args.from) {
      this.css(args.from);
      var h = this.element.offsetHeight;
      h = null;
    }
    this.enableTransition(args.to);
    this.css(args.to);
    this.isTransitioning = true;
  };

  function toDashedAll(str) {
    return str.replace(/([A-Z])/g, function($1) {
      return "-" + $1.toLowerCase();
    });
  }
  var transitionProps = "opacity," + toDashedAll(transformProperty);
  proto.enableTransition = function() {
    if (this.isTransitioning) {
      return;
    }
    var duration = this.layout.options.transitionDuration;
    duration = typeof duration == "number" ? duration + "ms" : duration;
    this.css({
      transitionProperty: transitionProps,
      transitionDuration: duration,
      transitionDelay: this.staggerDelay || 0
    });
    this.element.addEventListener(transitionEndEvent, this, false);
  };
  proto.onwebkitTransitionEnd = function(event) {
    this.ontransitionend(event);
  };
  proto.onotransitionend = function(event) {
    this.ontransitionend(event);
  };
  var dashedVendorProperties = {
    "-webkit-transform": "transform"
  };
  proto.ontransitionend = function(event) {
    if (event.target !== this.element) {
      return;
    }
    var _transition = this._transn;
    var propertyName = dashedVendorProperties[event.propertyName] || event.propertyName;
    delete _transition.ingProperties[propertyName];
    if (isEmptyObj(_transition.ingProperties)) {
      this.disableTransition();
    }
    if (propertyName in _transition.clean) {
      this.element.style[event.propertyName] = "";
      delete _transition.clean[propertyName];
    }
    if (propertyName in _transition.onEnd) {
      var onTransitionEnd = _transition.onEnd[propertyName];
      onTransitionEnd.call(this);
      delete _transition.onEnd[propertyName];
//     }
//     this.emitEvent("transitionEnd", [this]);
//   };
//   proto.disableTransition = function() {
//     this.removeTransitionStyles();
//     this.element.removeEventListener(transitionEndEvent, this, false);
//     this.isTransitioning = false;
//   };
//   proto._removeStyles = function(style) {
//     var cleanStyle = {};
//     for (var prop in style) {
//       cleanStyle[prop] = "";
//     }
//     this.css(cleanStyle);
//   };
//   var cleanTransitionStyle = {
//     transitionProperty: "",
//     transitionDuration: "",
//     transitionDelay: ""
//   };
//   proto.removeTransitionStyles = function() {
//     this.css(cleanTransitionStyle);
//   };
//   proto.stagger = function(delay) {
//     delay = isNaN(delay) ? 0 : delay;
//     this.staggerDelay = delay + "ms";
//   };
//   proto.removeElem = function() {
//     this.element.parentNode.removeChild(this.element);
//     this.css({
//       display: ""
//     });
//     this.emitEvent("remove", [this]);
//   };
//   proto.remove = function() {
//     if (!transitionProperty || !parseFloat(this.layout.options.transitionDuration)) {
//       this.removeElem();
//       return;
//     }
//     this.once("transitionEnd", function() {
//       this.removeElem();
//     });
//     this.hide();
//   };
//   proto.reveal = function() {
//     delete this.isHidden;
//     this.css({
//       display: ""
//     });
//     var options = this.layout.options;
//     var onTransitionEnd = {};
//     var transitionEndProperty = this.getHideRevealTransitionEndProperty("visibleStyle");
//     onTransitionEnd[transitionEndProperty] = this.onRevealTransitionEnd;
//     this.transition({
//       from: options.hiddenStyle,
//       to: options.visibleStyle,
//       isCleaning: true,
//       onTransitionEnd: onTransitionEnd
//     });
//   };
//   proto.onRevealTransitionEnd = function() {
//     if (!this.isHidden) {
//       this.emitEvent("reveal");
//     }
//   };
//   proto.getHideRevealTransitionEndProperty = function(styleProperty) {
//     var optionStyle = this.layout.options[styleProperty];
//     if (optionStyle.opacity) {
//       return "opacity";
//     }
//     for (var prop in optionStyle) {
//       return prop;
//     }
//   };
//   proto.hide = function() {
//     this.isHidden = true;
//     this.css({
//       display: ""
//     });
//     var options = this.layout.options;
//     var onTransitionEnd = {};
//     var transitionEndProperty = this.getHideRevealTransitionEndProperty("hiddenStyle");
//     onTransitionEnd[transitionEndProperty] = this.onHideTransitionEnd;
//     this.transition({
//       from: options.visibleStyle,
//       to: options.hiddenStyle,
//       isCleaning: true,
//       onTransitionEnd: onTransitionEnd
//     });
//   };
//   proto.onHideTransitionEnd = function() {
//     if (this.isHidden) {
//       this.css({
//         display: "none"
//       });
//       this.emitEvent("hide");
//     }
//   };
//   proto.destroy = function() {
//     this.css({
//       position: "",
//       left: "",
//       right: "",
//       top: "",
//       bottom: "",
//       transition: "",
//       transform: ""
//     });
//   };
//   return Item;
// });
// /*!
//  * Outlayer v2.1.1
//  * the brains and guts of a layout library
//  * MIT license
//  */
// (function(window, factory) {
//   "use strict";
//   if (typeof define == "function" && define.amd) {
//     define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(EvEmitter, getSize, utils, Item) {
//       return factory(window, EvEmitter, getSize, utils, Item);
//     });
//   } else if (typeof module == "object" && module.exports) {
//     module.exports = factory(window, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item"));
//   } else {
//     window.Outlayer = factory(window, window.EvEmitter, window.getSize, window.fizzyUIUtils, window.Outlayer.Item);
//   }
// })(window, function factory(window, EvEmitter, getSize, utils, Item) {
//   "use strict";
//   var console = window.console;
//   var jQuery = window.jQuery;
//   var noop = function() {};
//   var GUID = 0;
//   var instances = {};