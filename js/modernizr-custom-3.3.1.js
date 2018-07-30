/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-hashchange-history-mediaqueries-addtest-atrule-domprefixes-hasevent-mq-prefixed-prefixedcss-prefixedcssvalue-prefixes-printshiv-setclasses-testallprops-testprop-teststyles !*/
! function (e, t, n) {
  function r(e, t) {
    return typeof e === t
  }

  function o() {
    var e, t, n, o, i, a, s;
    for (var u in E)
      if (E.hasOwnProperty(u)) {
        if (e = [], t = E[u], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
          for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
        for (o = r(t.fn, "function") ? t.fn() : t.fn, i = 0; i < e.length; i++) a = e[i], s = a.split("."), 1 === s.length ? Modernizr[s[0]] = o : (!Modernizr[s[0]] || Modernizr[s[0]] instanceof Boolean || (Modernizr[s[0]] = new Boolean(Modernizr[s[0]])), Modernizr[s[0]][s[1]] = o), S.push((o ? "" : "no-") + s.join("-"))
      }
  }

  function i(e) {
    var t = x.className,
      n = Modernizr._config.classPrefix || "";
    if (_ && (t = t.baseVal), Modernizr._config.enableJSClass) {
      var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
      t = t.replace(r, "$1" + n + "js$2")
    }
    Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n), _ ? x.className.baseVal = t : x.className = t)
  }

  function a(e, t) {
    if ("object" == typeof e)
      for (var n in e) N(e, n) && a(n, e[n]);
    else {
      e = e.toLowerCase();
      var r = e.split("."),
        o = Modernizr[r[0]];
      if (2 == r.length && (o = o[r[1]]), "undefined" != typeof o) return Modernizr;
      t = "function" == typeof t ? t() : t, 1 == r.length ? Modernizr[r[0]] = t : (!Modernizr[r[0]] || Modernizr[r[0]] instanceof Boolean || (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])), Modernizr[r[0]][r[1]] = t), i([(t && 0 != t ? "" : "no-") + r.join("-")]), Modernizr._trigger(e, t)
    }
    return Modernizr
  }

  function s() {
    return "function" != typeof t.createElement ? t.createElement(arguments[0]) : _ ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
  }

  function u(e) {
    return e.replace(/([a-z])-([a-z])/g, function (e, t, n) {
      return t + n.toUpperCase()
    }).replace(/^-/, "")
  }

  function l(e) {
    return e.replace(/([A-Z])/g, function (e, t) {
      return "-" + t.toLowerCase()
    }).replace(/^ms-/, "-ms-")
  }

  function f() {
    var e = t.body;
    return e || (e = s(_ ? "svg" : "body"), e.fake = !0), e
  }

  function c(e, n, r, o) {
    var i, a, u, l, c = "modernizr",
      d = s("div"),
      p = f();
    if (parseInt(r, 10))
      for (; r--;) u = s("div"), u.id = o ? o[r] : c + (r + 1), d.appendChild(u);
    return i = s("style"), i.type = "text/css", i.id = "s" + c, (p.fake ? p : d).appendChild(i), p.appendChild(d), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(t.createTextNode(e)), d.id = c, p.fake && (p.style.background = "", p.style.overflow = "hidden", l = x.style.overflow, x.style.overflow = "hidden", x.appendChild(p)), a = n(d, e), p.fake ? (p.parentNode.removeChild(p), x.style.overflow = l, x.offsetHeight) : d.parentNode.removeChild(d), !!a
  }

  function d(e, t) {
    return !!~("" + e).indexOf(t)
  }

  function p(t, r) {
    var o = t.length;
    if ("CSS" in e && "supports" in e.CSS) {
      for (; o--;)
        if (e.CSS.supports(l(t[o]), r)) return !0;
      return !1
    }
    if ("CSSSupportsRule" in e) {
      for (var i = []; o--;) i.push("(" + l(t[o]) + ":" + r + ")");
      return i = i.join(" or "), c("@supports (" + i + ") { #modernizr { position: absolute; } }", function (e) {
        return "absolute" == getComputedStyle(e, null).position
      })
    }
    return n
  }

  function m(e, t) {
    return function () {
      return e.apply(t, arguments)
    }
  }

  function h(e, t, n) {
    var o;
    for (var i in e)
      if (e[i] in t) return n === !1 ? e[i] : (o = t[e[i]], r(o, "function") ? m(o, n || t) : o);
    return !1
  }

  function v(e, t, o, i) {
    function a() {
      f && (delete k.style, delete k.modElem)
    }
    if (i = r(i, "undefined") ? !1 : i, !r(o, "undefined")) {
      var l = p(e, o);
      if (!r(l, "undefined")) return l
    }
    for (var f, c, m, h, v, g = ["modernizr", "tspan"]; !k.style;) f = !0, k.modElem = s(g.shift()), k.style = k.modElem.style;
    for (m = e.length, c = 0; m > c; c++)
      if (h = e[c], v = k.style[h], d(h, "-") && (h = u(h)), k.style[h] !== n) {
        if (i || r(o, "undefined")) return a(), "pfx" == t ? h : !0;
        try {
          k.style[h] = o
        } catch (y) {}
        if (k.style[h] != v) return a(), "pfx" == t ? h : !0
      }
    return a(), !1
  }

  function g(e, t, n, o, i) {
    var a = e.charAt(0).toUpperCase() + e.slice(1),
      s = (e + " " + j.join(a + " ") + a).split(" ");
    return r(t, "string") || r(t, "undefined") ? v(s, t, o, i) : (s = (e + " " + T.join(a + " ") + a).split(" "), h(s, t, n))
  }

  function y(e, t, r) {
    return g(e, n, n, t, r)
  }
  var S = [],
    E = [],
    C = {
      _version: "3.3.1",
      _config: {
        classPrefix: "",
        enableClasses: !0,
        enableJSClass: !0,
        usePrefixes: !0
      },
      _q: [],
      on: function (e, t) {
        var n = this;
        setTimeout(function () {
          t(n[e])
        }, 0)
      },
      addTest: function (e, t, n) {
        E.push({
          name: e,
          fn: t,
          options: n
        })
      },
      addAsyncTest: function (e) {
        E.push({
          name: null,
          fn: e
        })
      }
    },
    Modernizr = function () {};
  Modernizr.prototype = C, Modernizr = new Modernizr, Modernizr.addTest("history", function () {
    var t = navigator.userAgent;
    return -1 === t.indexOf("Android 2.") && -1 === t.indexOf("Android 4.0") || -1 === t.indexOf("Mobile Safari") || -1 !== t.indexOf("Chrome") || -1 !== t.indexOf("Windows Phone") ? e.history && "pushState" in e.history : !1
  });
  var b = C._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
  C._prefixes = b;
  var x = t.documentElement,
    _ = "svg" === x.nodeName.toLowerCase();
  _ || ! function (e, t) {
    function n(e, t) {
      var n = e.createElement("p"),
        r = e.getElementsByTagName("head")[0] || e.documentElement;
      return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
    }

    function r() {
      var e = _.elements;
      return "string" == typeof e ? e.split(" ") : e
    }

    function o(e, t) {
      var n = _.elements;
      "string" != typeof n && (n = n.join(" ")), "string" != typeof e && (e = e.join(" ")), _.elements = n + " " + e, l(t)
    }

    function i(e) {
      var t = x[e[C]];
      return t || (t = {}, b++, e[C] = b, x[b] = t), t
    }

    function a(e, n, r) {
      if (n || (n = t), v) return n.createElement(e);
      r || (r = i(n));
      var o;
      return o = r.cache[e] ? r.cache[e].cloneNode() : E.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), !o.canHaveChildren || S.test(e) || o.tagUrn ? o : r.frag.appendChild(o)
    }

    function s(e, n) {
      if (e || (e = t), v) return e.createDocumentFragment();
      n = n || i(e);
      for (var o = n.frag.cloneNode(), a = 0, s = r(), u = s.length; u > a; a++) o.createElement(s[a]);
      return o
    }

    function u(e, t) {
      t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function (n) {
        return _.shivMethods ? a(n, e, t) : t.createElem(n)
      }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/[\w\-:]+/g, function (e) {
        return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
      }) + ");return n}")(_, t.frag)
    }

    function l(e) {
      e || (e = t);
      var r = i(e);
      return !_.shivCSS || h || r.hasCSS || (r.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), v || u(e, r), e
    }

    function f(e) {
      for (var t, n = e.getElementsByTagName("*"), o = n.length, i = RegExp("^(?:" + r().join("|") + ")$", "i"), a = []; o--;) t = n[o], i.test(t.nodeName) && a.push(t.applyElement(c(t)));
      return a
    }

    function c(e) {
      for (var t, n = e.attributes, r = n.length, o = e.ownerDocument.createElement(T + ":" + e.nodeName); r--;) t = n[r], t.specified && o.setAttribute(t.nodeName, t.nodeValue);
      return o.style.cssText = e.style.cssText, o
    }

    function d(e) {
      for (var t, n = e.split("{"), o = n.length, i = RegExp("(^|[\\s,>+~])(" + r().join("|") + ")(?=[[\\s,>+~#.:]|$)", "gi"), a = "$1" + T + "\\:$2"; o--;) t = n[o] = n[o].split("}"), t[t.length - 1] = t[t.length - 1].replace(i, a), n[o] = t.join("}");
      return n.join("{")
    }

    function p(e) {
      for (var t = e.length; t--;) e[t].removeNode()
    }

    function m(e) {
      function t() {
        clearTimeout(a._removeSheetTimer), r && r.removeNode(!0), r = null
      }
      var r, o, a = i(e),
        s = e.namespaces,
        u = e.parentWindow;
      return !N || e.printShived ? e : ("undefined" == typeof s[T] && s.add(T), u.attachEvent("onbeforeprint", function () {
        t();
        for (var i, a, s, u = e.styleSheets, l = [], c = u.length, p = Array(c); c--;) p[c] = u[c];
        for (; s = p.pop();)
          if (!s.disabled && w.test(s.media)) {
            try {
              i = s.imports, a = i.length
            } catch (m) {
              a = 0
            }
            for (c = 0; a > c; c++) p.push(i[c]);
            try {
              l.push(s.cssText)
            } catch (m) {}
          }
        l = d(l.reverse().join("")), o = f(e), r = n(e, l)
      }), u.attachEvent("onafterprint", function () {
        p(o), clearTimeout(a._removeSheetTimer), a._removeSheetTimer = setTimeout(t, 500)
      }), e.printShived = !0, e)
    }
    var h, v, g = "3.7.3",
      y = e.html5 || {},
      S = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
      E = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
      C = "_html5shiv",
      b = 0,
      x = {};
    ! function () {
      try {
        var e = t.createElement("a");
        e.innerHTML = "<xyz></xyz>", h = "hidden" in e, v = 1 == e.childNodes.length || function () {
          t.createElement("a");
          var e = t.createDocumentFragment();
          return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
        }()
      } catch (n) {
        h = !0, v = !0
      }
    }();
    var _ = {
      elements: y.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
      version: g,
      shivCSS: y.shivCSS !== !1,
      supportsUnknownElements: v,
      shivMethods: y.shivMethods !== !1,
      type: "default",
      shivDocument: l,
      createElement: a,
      createDocumentFragment: s,
      addElements: o
    };
    e.html5 = _, l(t);
    var w = /^$|\b(?:all|print)\b/,
      T = "html5shiv",
      N = !v && function () {
        var n = t.documentElement;
        return !("undefined" == typeof t.namespaces || "undefined" == typeof t.parentWindow || "undefined" == typeof n.applyElement || "undefined" == typeof n.removeNode || "undefined" == typeof e.attachEvent)
      }();
    _.type += " print", _.shivPrint = m, m(t), "object" == typeof module && module.exports && (module.exports = _)
  }("undefined" != typeof e ? e : this, t);
  var w = "Moz O ms Webkit",
    T = C._config.usePrefixes ? w.toLowerCase().split(" ") : [];
  C._domPrefixes = T;
  var N;
  ! function () {
    var e = {}.hasOwnProperty;
    N = r(e, "undefined") || r(e.call, "undefined") ? function (e, t) {
      return t in e && r(e.constructor.prototype[t], "undefined")
    } : function (t, n) {
      return e.call(t, n)
    }
  }(), C._l = {}, C.on = function (e, t) {
    this._l[e] || (this._l[e] = []), this._l[e].push(t), Modernizr.hasOwnProperty(e) && setTimeout(function () {
      Modernizr._trigger(e, Modernizr[e])
    }, 0)
  }, C._trigger = function (e, t) {
    if (this._l[e]) {
      var n = this._l[e];
      setTimeout(function () {
        var e, r;
        for (e = 0; e < n.length; e++)(r = n[e])(t)
      }, 0), delete this._l[e]
    }
  }, Modernizr._q.push(function () {
    C.addTest = a
  });
  var j = C._config.usePrefixes ? w.split(" ") : [];
  C._cssomPrefixes = j;
  var P = function (t) {
    var r, o = b.length,
      i = e.CSSRule;
    if ("undefined" == typeof i) return n;
    if (!t) return !1;
    if (t = t.replace(/^@/, ""), r = t.replace(/-/g, "_").toUpperCase() + "_RULE", r in i) return "@" + t;
    for (var a = 0; o > a; a++) {
      var s = b[a],
        u = s.toUpperCase() + "_" + r;
      if (u in i) return "@-" + s.toLowerCase() + "-" + t
    }
    return !1
  };
  C.atRule = P;
  var A = function () {
    function e(e, t) {
      var o;
      return e ? (t && "string" != typeof t || (t = s(t || "div")), e = "on" + e, o = e in t, !o && r && (t.setAttribute || (t = s("div")), t.setAttribute(e, ""), o = "function" == typeof t[e], t[e] !== n && (t[e] = n), t.removeAttribute(e)), o) : !1
    }
    var r = !("onblur" in t.documentElement);
    return e
  }();
  C.hasEvent = A, Modernizr.addTest("hashchange", function () {
    return A("hashchange", e) === !1 ? !1 : t.documentMode === n || t.documentMode > 7
  });
  var M = function (e, t) {
    var n = !1,
      r = s("div"),
      o = r.style;
    if (e in o) {
      var i = T.length;
      for (o[e] = t, n = o[e]; i-- && !n;) o[e] = "-" + T[i] + "-" + t, n = o[e]
    }
    return "" === n && (n = !1), n
  };
  C.prefixedCSSValue = M;
  var z = function () {
    var t = e.matchMedia || e.msMatchMedia;
    return t ? function (e) {
      var n = t(e);
      return n && n.matches || !1
    } : function (t) {
      var n = !1;
      return c("@media " + t + " { #modernizr { position: absolute; } }", function (t) {
        n = "absolute" == (e.getComputedStyle ? e.getComputedStyle(t, null) : t.currentStyle).position
      }), n
    }
  }();
  C.mq = z, Modernizr.addTest("mediaqueries", z("only all"));
  var O = (C.testStyles = c, {
    elem: s("modernizr")
  });
  Modernizr._q.push(function () {
    delete O.elem
  });
  var k = {
    style: O.elem.style
  };
  Modernizr._q.unshift(function () {
    delete k.style
  });
  C.testProp = function (e, t, r) {
    return v([e], n, t, r)
  };
  C.testAllProps = g;
  var F = C.prefixed = function (e, t, n) {
    return 0 === e.indexOf("@") ? P(e) : (-1 != e.indexOf("-") && (e = u(e)), t ? g(e, t, n) : g(e, "pfx"))
  };
  C.prefixedCSS = function (e) {
    var t = F(e);
    return t && l(t)
  };
  C.testAllProps = y, o(), i(S), delete C.addTest, delete C.addAsyncTest;
  for (var L = 0; L < Modernizr._q.length; L++) Modernizr._q[L]();
  e.Modernizr = Modernizr
}(window, document);