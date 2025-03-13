var e = Object.defineProperty,
  t = (t, n, o) =>
    ((t, n, o) =>
      n in t
        ? e(t, n, { enumerable: !0, configurable: !0, writable: !0, value: o })
        : (t[n] = o))(t, "symbol" != typeof n ? n + "" : n, o);
!(function () {
  const e = document.createElement("link").relList;
  if (!(e && e.supports && e.supports("modulepreload"))) {
    for (const e of document.querySelectorAll('link[rel="modulepreload"]'))
      t(e);
    new MutationObserver((e) => {
      for (const n of e)
        if ("childList" === n.type)
          for (const e of n.addedNodes)
            "LINK" === e.tagName && "modulepreload" === e.rel && t(e);
    }).observe(document, { childList: !0, subtree: !0 });
  }
  function t(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = (function (e) {
      const t = {};
      return (
        e.integrity && (t.integrity = e.integrity),
        e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
        "use-credentials" === e.crossOrigin
          ? (t.credentials = "include")
          : "anonymous" === e.crossOrigin
            ? (t.credentials = "omit")
            : (t.credentials = "same-origin"),
        t
      );
    })(e);
    fetch(e.href, t);
  }
})();
var n,
  o,
  r,
  i,
  s,
  a,
  c,
  l,
  u = {},
  d = [],
  h = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
  f = Array.isArray;
function p(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function v(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function m(e, t, o) {
  var r,
    i,
    s,
    a = {};
  for (s in t)
    "key" == s ? (r = t[s]) : "ref" == s ? (i = t[s]) : (a[s] = t[s]);
  if (
    (arguments.length > 2 &&
      (a.children = arguments.length > 3 ? n.call(arguments, 2) : o),
    "function" == typeof e && null != e.defaultProps)
  )
    for (s in e.defaultProps) void 0 === a[s] && (a[s] = e.defaultProps[s]);
  return y(e, a, r, i, null);
}
function y(e, t, n, i, s) {
  var a = {
    type: e,
    props: t,
    key: n,
    ref: i,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    constructor: void 0,
    __v: null == s ? ++r : s,
    __i: -1,
    __u: 0,
  };
  return null == s && null != o.vnode && o.vnode(a), a;
}
function g() {
  return { current: null };
}
function b(e) {
  return e.children;
}
function _(e, t) {
  (this.props = e), (this.context = t);
}
function w(e, t) {
  if (null == t) return e.__ ? w(e.__, e.__i + 1) : null;
  for (var n; t < e.__k.length; t++)
    if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
  return "function" == typeof e.type ? w(e) : null;
}
function k(e) {
  var t, n;
  if (null != (e = e.__) && null != e.__c) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if (null != (n = e.__k[t]) && null != n.__e) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return k(e);
  }
}
function x(e) {
  ((!e.__d && (e.__d = !0) && i.push(e) && !C.__r++) ||
    s !== o.debounceRendering) &&
    ((s = o.debounceRendering) || a)(C);
}
function C() {
  var e, t, n, r, s, a, l, u, d;
  for (i.sort(c); (e = i.shift()); )
    e.__d &&
      ((t = i.length),
      (r = void 0),
      (a = (s = (n = e).__v).__e),
      (u = []),
      (d = []),
      (l = n.__P) &&
        (((r = p({}, s)).__v = s.__v + 1),
        o.vnode && o.vnode(r),
        T(
          l,
          r,
          s,
          n.__n,
          void 0 !== l.ownerSVGElement,
          32 & s.__u ? [a] : null,
          u,
          null == a ? w(s) : a,
          !!(32 & s.__u),
          d,
        ),
        (r.__.__k[r.__i] = r),
        B(u, r, d),
        r.__e != a && k(r)),
      i.length > t && i.sort(c));
  C.__r = 0;
}
function S(e, t, n, o, r, i, s, a, c, l, h) {
  var p,
    v,
    m,
    g,
    _,
    k = (o && o.__k) || d,
    x = t.length;
  for (
    n.__d = c,
      (function (e, t, n) {
        var o,
          r,
          i,
          s,
          a,
          c = t.length,
          l = n.length,
          u = l,
          d = 0;
        for (e.__k = [], o = 0; o < c; o++)
          null !=
          (r = e.__k[o] =
            null == (r = t[o]) ||
            "boolean" == typeof r ||
            "function" == typeof r
              ? null
              : "string" == typeof r ||
                  "number" == typeof r ||
                  "bigint" == typeof r ||
                  r.constructor == String
                ? y(null, r, null, null, r)
                : f(r)
                  ? y(b, { children: r }, null, null, null)
                  : void 0 === r.constructor && r.__b > 0
                    ? y(r.type, r.props, r.key, r.ref ? r.ref : null, r.__v)
                    : r)
            ? ((r.__ = e),
              (r.__b = e.__b + 1),
              (a = O(r, n, (s = o + d), u)),
              (r.__i = a),
              (i = null),
              -1 !== a && (u--, (i = n[a]) && (i.__u |= 131072)),
              null == i || null === i.__v
                ? (-1 == a && d--,
                  "function" != typeof r.type && (r.__u |= 65536))
                : a !== s &&
                  (a === s + 1
                    ? d++
                    : a > s
                      ? u > c - s
                        ? (d += a - s)
                        : d--
                      : (d = a < s && a == s - 1 ? a - s : 0),
                  a !== o + d && (r.__u |= 65536)))
            : (i = n[o]) &&
              null == i.key &&
              i.__e &&
              (i.__e == e.__d && (e.__d = w(i)),
              L(i, i, !1),
              (n[o] = null),
              u--);
        if (u)
          for (o = 0; o < l; o++)
            null != (i = n[o]) &&
              !(131072 & i.__u) &&
              (i.__e == e.__d && (e.__d = w(i)), L(i, i));
      })(n, t, k),
      c = n.__d,
      p = 0;
    p < x;
    p++
  )
    null != (m = n.__k[p]) &&
      "boolean" != typeof m &&
      "function" != typeof m &&
      ((v = -1 === m.__i ? u : k[m.__i] || u),
      (m.__i = p),
      T(e, m, v, r, i, s, a, c, l, h),
      (g = m.__e),
      m.ref &&
        v.ref != m.ref &&
        (v.ref && z(v.ref, null, m), h.push(m.ref, m.__c || g, m)),
      null == _ && null != g && (_ = g),
      65536 & m.__u || v.__k === m.__k
        ? (c = P(m, c, e))
        : "function" == typeof m.type && void 0 !== m.__d
          ? (c = m.__d)
          : g && (c = g.nextSibling),
      (m.__d = void 0),
      (m.__u &= -196609));
  (n.__d = c), (n.__e = _);
}
function P(e, t, n) {
  var o, r;
  if ("function" == typeof e.type) {
    for (o = e.__k, r = 0; o && r < o.length; r++)
      o[r] && ((o[r].__ = e), (t = P(o[r], t, n)));
    return t;
  }
  return (
    e.__e != t && (n.insertBefore(e.__e, t || null), (t = e.__e)),
    t && t.nextSibling
  );
}
function E(e, t) {
  return (
    (t = t || []),
    null == e ||
      "boolean" == typeof e ||
      (f(e)
        ? e.some(function (e) {
            E(e, t);
          })
        : t.push(e)),
    t
  );
}
function O(e, t, n, o) {
  var r = e.key,
    i = e.type,
    s = n - 1,
    a = n + 1,
    c = t[n];
  if (null === c || (c && r == c.key && i === c.type)) return n;
  if (o > (null == c || 131072 & c.__u ? 0 : 1))
    for (; s >= 0 || a < t.length; ) {
      if (s >= 0) {
        if ((c = t[s]) && !(131072 & c.__u) && r == c.key && i === c.type)
          return s;
        s--;
      }
      if (a < t.length) {
        if ((c = t[a]) && !(131072 & c.__u) && r == c.key && i === c.type)
          return a;
        a++;
      }
    }
  return -1;
}
function M(e, t, n) {
  "-" === t[0]
    ? e.setProperty(t, null == n ? "" : n)
    : (e[t] =
        null == n ? "" : "number" != typeof n || h.test(t) ? n : n + "px");
}
function j(e, t, n, o, r) {
  var i;
  e: if ("style" === t)
    if ("string" == typeof n) e.style.cssText = n;
    else {
      if (("string" == typeof o && (e.style.cssText = o = ""), o))
        for (t in o) (n && t in n) || M(e.style, t, "");
      if (n) for (t in n) (o && n[t] === o[t]) || M(e.style, t, n[t]);
    }
  else if ("o" === t[0] && "n" === t[1])
    (i = t !== (t = t.replace(/(PointerCapture)$|Capture$/, "$1"))),
      (t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2)),
      e.l || (e.l = {}),
      (e.l[t + i] = n),
      n
        ? o
          ? (n.u = o.u)
          : ((n.u = Date.now()), e.addEventListener(t, i ? D : A, i))
        : e.removeEventListener(t, i ? D : A, i);
  else {
    if (r) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (
      "width" !== t &&
      "height" !== t &&
      "href" !== t &&
      "list" !== t &&
      "form" !== t &&
      "tabIndex" !== t &&
      "download" !== t &&
      "rowSpan" !== t &&
      "colSpan" !== t &&
      "role" !== t &&
      t in e
    )
      try {
        e[t] = null == n ? "" : n;
        break e;
      } catch (s) {}
    "function" == typeof n ||
      (null == n || (!1 === n && "-" !== t[4])
        ? e.removeAttribute(t)
        : e.setAttribute(t, n));
  }
}
function A(e) {
  var t = this.l[e.type + !1];
  if (e.t) {
    if (e.t <= t.u) return;
  } else e.t = Date.now();
  return t(o.event ? o.event(e) : e);
}
function D(e) {
  return this.l[e.type + !0](o.event ? o.event(e) : e);
}
function T(e, t, r, i, s, a, c, l, d, h) {
  var m,
    y,
    g,
    k,
    x,
    C,
    P,
    E,
    O,
    M,
    A,
    D,
    T,
    B,
    z,
    L = t.type;
  if (void 0 !== t.constructor) return null;
  128 & r.__u && ((d = !!(32 & r.__u)), (a = [(l = t.__e = r.__e)])),
    (m = o.__b) && m(t);
  e: if ("function" == typeof L)
    try {
      if (
        ((E = t.props),
        (O = (m = L.contextType) && i[m.__c]),
        (M = m ? (O ? O.props.value : m.__) : i),
        r.__c
          ? (P = (y = t.__c = r.__c).__ = y.__E)
          : ("prototype" in L && L.prototype.render
              ? (t.__c = y = new L(E, M))
              : ((t.__c = y = new _(E, M)),
                (y.constructor = L),
                (y.render = R)),
            O && O.sub(y),
            (y.props = E),
            y.state || (y.state = {}),
            (y.context = M),
            (y.__n = i),
            (g = y.__d = !0),
            (y.__h = []),
            (y._sb = [])),
        null == y.__s && (y.__s = y.state),
        null != L.getDerivedStateFromProps &&
          (y.__s == y.state && (y.__s = p({}, y.__s)),
          p(y.__s, L.getDerivedStateFromProps(E, y.__s))),
        (k = y.props),
        (x = y.state),
        (y.__v = t),
        g)
      )
        null == L.getDerivedStateFromProps &&
          null != y.componentWillMount &&
          y.componentWillMount(),
          null != y.componentDidMount && y.__h.push(y.componentDidMount);
      else {
        if (
          (null == L.getDerivedStateFromProps &&
            E !== k &&
            null != y.componentWillReceiveProps &&
            y.componentWillReceiveProps(E, M),
          !y.__e &&
            ((null != y.shouldComponentUpdate &&
              !1 === y.shouldComponentUpdate(E, y.__s, M)) ||
              t.__v === r.__v))
        ) {
          for (
            t.__v !== r.__v && ((y.props = E), (y.state = y.__s), (y.__d = !1)),
              t.__e = r.__e,
              t.__k = r.__k,
              t.__k.forEach(function (e) {
                e && (e.__ = t);
              }),
              A = 0;
            A < y._sb.length;
            A++
          )
            y.__h.push(y._sb[A]);
          (y._sb = []), y.__h.length && c.push(y);
          break e;
        }
        null != y.componentWillUpdate && y.componentWillUpdate(E, y.__s, M),
          null != y.componentDidUpdate &&
            y.__h.push(function () {
              y.componentDidUpdate(k, x, C);
            });
      }
      if (
        ((y.context = M),
        (y.props = E),
        (y.__P = e),
        (y.__e = !1),
        (D = o.__r),
        (T = 0),
        "prototype" in L && L.prototype.render)
      ) {
        for (
          y.state = y.__s,
            y.__d = !1,
            D && D(t),
            m = y.render(y.props, y.state, y.context),
            B = 0;
          B < y._sb.length;
          B++
        )
          y.__h.push(y._sb[B]);
        y._sb = [];
      } else
        do {
          (y.__d = !1),
            D && D(t),
            (m = y.render(y.props, y.state, y.context)),
            (y.state = y.__s);
        } while (y.__d && ++T < 25);
      (y.state = y.__s),
        null != y.getChildContext && (i = p(p({}, i), y.getChildContext())),
        g ||
          null == y.getSnapshotBeforeUpdate ||
          (C = y.getSnapshotBeforeUpdate(k, x)),
        S(
          e,
          f(
            (z =
              null != m && m.type === b && null == m.key
                ? m.props.children
                : m),
          )
            ? z
            : [z],
          t,
          r,
          i,
          s,
          a,
          c,
          l,
          d,
          h,
        ),
        (y.base = t.__e),
        (t.__u &= -161),
        y.__h.length && c.push(y),
        P && (y.__E = y.__ = null);
    } catch (I) {
      (t.__v = null),
        d || null != a
          ? ((t.__e = l), (t.__u |= d ? 160 : 32), (a[a.indexOf(l)] = null))
          : ((t.__e = r.__e), (t.__k = r.__k)),
        o.__e(I, t, r);
    }
  else
    null == a && t.__v === r.__v
      ? ((t.__k = r.__k), (t.__e = r.__e))
      : (t.__e = (function (e, t, o, r, i, s, a, c, l) {
          var d,
            h,
            p,
            m,
            y,
            g,
            b,
            _ = o.props,
            k = t.props,
            x = t.type;
          if (("svg" === x && (i = !0), null != s))
            for (d = 0; d < s.length; d++)
              if (
                (y = s[d]) &&
                "setAttribute" in y == !!x &&
                (x ? y.localName === x : 3 === y.nodeType)
              ) {
                (e = y), (s[d] = null);
                break;
              }
          if (null == e) {
            if (null === x) return document.createTextNode(k);
            (e = i
              ? document.createElementNS("http://www.w3.org/2000/svg", x)
              : document.createElement(x, k.is && k)),
              (s = null),
              (c = !1);
          }
          if (null === x) _ === k || (c && e.data === k) || (e.data = k);
          else {
            if (
              ((s = s && n.call(e.childNodes)),
              (_ = o.props || u),
              !c && null != s)
            )
              for (_ = {}, d = 0; d < e.attributes.length; d++)
                _[(y = e.attributes[d]).name] = y.value;
            for (d in _)
              (y = _[d]),
                "children" == d ||
                  ("dangerouslySetInnerHTML" == d
                    ? (p = y)
                    : "key" === d || d in k || j(e, d, null, y, i));
            for (d in k)
              (y = k[d]),
                "children" == d
                  ? (m = y)
                  : "dangerouslySetInnerHTML" == d
                    ? (h = y)
                    : "value" == d
                      ? (g = y)
                      : "checked" == d
                        ? (b = y)
                        : "key" === d ||
                          (c && "function" != typeof y) ||
                          _[d] === y ||
                          j(e, d, y, _[d], i);
            if (h)
              c ||
                (p && (h.__html === p.__html || h.__html === e.innerHTML)) ||
                (e.innerHTML = h.__html),
                (t.__k = []);
            else if (
              (p && (e.innerHTML = ""),
              S(
                e,
                f(m) ? m : [m],
                t,
                o,
                r,
                i && "foreignObject" !== x,
                s,
                a,
                s ? s[0] : o.__k && w(o, 0),
                c,
                l,
              ),
              null != s)
            )
              for (d = s.length; d--; ) null != s[d] && v(s[d]);
            c ||
              ((d = "value"),
              void 0 !== g &&
                (g !== e[d] ||
                  ("progress" === x && !g) ||
                  ("option" === x && g !== _[d])) &&
                j(e, d, g, _[d], !1),
              (d = "checked"),
              void 0 !== b && b !== e[d] && j(e, d, b, _[d], !1));
          }
          return e;
        })(r.__e, t, r, i, s, a, c, d, h));
  (m = o.diffed) && m(t);
}
function B(e, t, n) {
  t.__d = void 0;
  for (var r = 0; r < n.length; r++) z(n[r], n[++r], n[++r]);
  o.__c && o.__c(t, e),
    e.some(function (t) {
      try {
        (e = t.__h),
          (t.__h = []),
          e.some(function (e) {
            e.call(t);
          });
      } catch (n) {
        o.__e(n, t.__v);
      }
    });
}
function z(e, t, n) {
  try {
    "function" == typeof e ? e(t) : (e.current = t);
  } catch (r) {
    o.__e(r, n);
  }
}
function L(e, t, n) {
  var r, i;
  if (
    (o.unmount && o.unmount(e),
    (r = e.ref) && ((r.current && r.current !== e.__e) || z(r, null, t)),
    null != (r = e.__c))
  ) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (s) {
        o.__e(s, t);
      }
    (r.base = r.__P = null), (e.__c = void 0);
  }
  if ((r = e.__k))
    for (i = 0; i < r.length; i++)
      r[i] && L(r[i], t, n || "function" != typeof e.type);
  n || null == e.__e || v(e.__e), (e.__ = e.__e = e.__d = void 0);
}
function R(e, t, n) {
  return this.constructor(e, n);
}
function I(e, t, r) {
  var i, s, a, c;
  o.__ && o.__(e, t),
    (s = (i = "function" == typeof r) ? null : (r && r.__k) || t.__k),
    (a = []),
    (c = []),
    T(
      t,
      (e = ((!i && r) || t).__k = m(b, null, [e])),
      s || u,
      u,
      void 0 !== t.ownerSVGElement,
      !i && r ? [r] : s ? null : t.firstChild ? n.call(t.childNodes) : null,
      a,
      !i && r ? r : s ? s.__e : t.firstChild,
      i,
      c,
    ),
    B(a, e, c);
}
function N(e, t) {
  I(e, t, N);
}
function U(e, t, o) {
  var r,
    i,
    s,
    a,
    c = p({}, e.props);
  for (s in (e.type && e.type.defaultProps && (a = e.type.defaultProps), t))
    "key" == s
      ? (r = t[s])
      : "ref" == s
        ? (i = t[s])
        : (c[s] = void 0 === t[s] && void 0 !== a ? a[s] : t[s]);
  return (
    arguments.length > 2 &&
      (c.children = arguments.length > 3 ? n.call(arguments, 2) : o),
    y(e.type, c, r || e.key, i || e.ref, null)
  );
}
function K(e, t) {
  var n = {
    __c: (t = "__cC" + l++),
    __: e,
    Consumer: function (e, t) {
      return e.children(t);
    },
    Provider: function (e) {
      var n, o;
      return (
        this.getChildContext ||
          ((n = []),
          ((o = {})[t] = this),
          (this.getChildContext = function () {
            return o;
          }),
          (this.shouldComponentUpdate = function (e) {
            this.props.value !== e.value &&
              n.some(function (e) {
                (e.__e = !0), x(e);
              });
          }),
          (this.sub = function (e) {
            n.push(e);
            var t = e.componentWillUnmount;
            e.componentWillUnmount = function () {
              n.splice(n.indexOf(e), 1), t && t.call(e);
            };
          })),
        e.children
      );
    },
  };
  return (n.Provider.__ = n.Consumer.contextType = n);
}
function F(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function H(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if ("function" == typeof t) {
    var n = function e() {
      return this instanceof e
        ? Reflect.construct(t, arguments, this.constructor)
        : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (t) {
      var o = Object.getOwnPropertyDescriptor(e, t);
      Object.defineProperty(
        n,
        t,
        o.get
          ? o
          : {
              enumerable: !0,
              get: function () {
                return e[t];
              },
            },
      );
    }),
    n
  );
}
(n = d.slice),
  (o = {
    __e: function (e, t, n, o) {
      for (var r, i, s; (t = t.__); )
        if ((r = t.__c) && !r.__)
          try {
            if (
              ((i = r.constructor) &&
                null != i.getDerivedStateFromError &&
                (r.setState(i.getDerivedStateFromError(e)), (s = r.__d)),
              null != r.componentDidCatch &&
                (r.componentDidCatch(e, o || {}), (s = r.__d)),
              s)
            )
              return (r.__E = r);
          } catch (a) {
            e = a;
          }
      throw e;
    },
  }),
  (r = 0),
  (_.prototype.setState = function (e, t) {
    var n;
    (n =
      null != this.__s && this.__s !== this.state
        ? this.__s
        : (this.__s = p({}, this.state))),
      "function" == typeof e && (e = e(p({}, n), this.props)),
      e && p(n, e),
      null != e && this.__v && (t && this._sb.push(t), x(this));
  }),
  (_.prototype.forceUpdate = function (e) {
    this.__v && ((this.__e = !0), e && this.__h.push(e), x(this));
  }),
  (_.prototype.render = b),
  (i = []),
  (a =
    "function" == typeof Promise
      ? Promise.prototype.then.bind(Promise.resolve())
      : setTimeout),
  (c = function (e, t) {
    return e.__v.__b - t.__v.__b;
  }),
  (C.__r = 0),
  (l = 0);
var V,
  W,
  q,
  X,
  $ = { exports: {} },
  G = {},
  Y = 0,
  Z = [],
  Q = [],
  J = o.__b,
  ee = o.__r,
  te = o.diffed,
  ne = o.__c,
  oe = o.unmount;
function re(e, t) {
  o.__h && o.__h(W, e, Y || t), (Y = 0);
  var n = W.__H || (W.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({ __V: Q }), n.__[e];
}
function ie(e) {
  return (Y = 1), se(ke, e);
}
function se(e, t, n) {
  var o = re(V++, 2);
  if (
    ((o.t = e),
    !o.__c &&
      ((o.__ = [
        n ? n(t) : ke(void 0, t),
        function (e) {
          var t = o.__N ? o.__N[0] : o.__[0],
            n = o.t(t, e);
          t !== n && ((o.__N = [n, o.__[1]]), o.__c.setState({}));
        },
      ]),
      (o.__c = W),
      !W.u))
  ) {
    var r = function (e, t, n) {
      if (!o.__c.__H) return !0;
      var r = o.__c.__H.__.filter(function (e) {
        return e.__c;
      });
      if (
        r.every(function (e) {
          return !e.__N;
        })
      )
        return !i || i.call(this, e, t, n);
      var s = !1;
      return (
        r.forEach(function (e) {
          if (e.__N) {
            var t = e.__[0];
            (e.__ = e.__N), (e.__N = void 0), t !== e.__[0] && (s = !0);
          }
        }),
        !(!s && o.__c.props === e) && (!i || i.call(this, e, t, n))
      );
    };
    W.u = !0;
    var i = W.shouldComponentUpdate,
      s = W.componentWillUpdate;
    (W.componentWillUpdate = function (e, t, n) {
      if (this.__e) {
        var o = i;
        (i = void 0), r(e, t, n), (i = o);
      }
      s && s.call(this, e, t, n);
    }),
      (W.shouldComponentUpdate = r);
  }
  return o.__N || o.__;
}
function ae(e, t) {
  var n = re(V++, 3);
  !o.__s && we(n.__H, t) && ((n.__ = e), (n.i = t), W.__H.__h.push(n));
}
function ce(e, t) {
  var n = re(V++, 4);
  !o.__s && we(n.__H, t) && ((n.__ = e), (n.i = t), W.__h.push(n));
}
function le(e) {
  return (
    (Y = 5),
    de(function () {
      return { current: e };
    }, [])
  );
}
function ue(e, t, n) {
  (Y = 6),
    ce(
      function () {
        return "function" == typeof e
          ? (e(t()),
            function () {
              return e(null);
            })
          : e
            ? ((e.current = t()),
              function () {
                return (e.current = null);
              })
            : void 0;
      },
      null == n ? n : n.concat(e),
    );
}
function de(e, t) {
  var n = re(V++, 7);
  return we(n.__H, t) ? ((n.__V = e()), (n.i = t), (n.__h = e), n.__V) : n.__;
}
function he(e, t) {
  return (
    (Y = 8),
    de(function () {
      return e;
    }, t)
  );
}
function fe(e) {
  var t = W.context[e.__c],
    n = re(V++, 9);
  return (
    (n.c = e),
    t ? (null == n.__ && ((n.__ = !0), t.sub(W)), t.props.value) : e.__
  );
}
function pe(e, t) {
  o.useDebugValue && o.useDebugValue(t ? t(e) : e);
}
function ve() {
  var e = re(V++, 11);
  if (!e.__) {
    for (var t = W.__v; null !== t && !t.__m && null !== t.__; ) t = t.__;
    var n = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + n[0] + "-" + n[1]++;
  }
  return e.__;
}
function me() {
  for (var e; (e = Z.shift()); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(be), e.__H.__h.forEach(_e), (e.__H.__h = []);
      } catch (t) {
        (e.__H.__h = []), o.__e(t, e.__v);
      }
}
(o.__b = function (e) {
  (W = null), J && J(e);
}),
  (o.__r = function (e) {
    ee && ee(e), (V = 0);
    var t = (W = e.__c).__H;
    t &&
      (q === W
        ? ((t.__h = []),
          (W.__h = []),
          t.__.forEach(function (e) {
            e.__N && (e.__ = e.__N), (e.__V = Q), (e.__N = e.i = void 0);
          }))
        : (t.__h.forEach(be), t.__h.forEach(_e), (t.__h = []), (V = 0))),
      (q = W);
  }),
  (o.diffed = function (e) {
    te && te(e);
    var t = e.__c;
    t &&
      t.__H &&
      (t.__H.__h.length &&
        ((1 !== Z.push(t) && X === o.requestAnimationFrame) ||
          ((X = o.requestAnimationFrame) || ge)(me)),
      t.__H.__.forEach(function (e) {
        e.i && (e.__H = e.i),
          e.__V !== Q && (e.__ = e.__V),
          (e.i = void 0),
          (e.__V = Q);
      })),
      (q = W = null);
  }),
  (o.__c = function (e, t) {
    t.some(function (e) {
      try {
        e.__h.forEach(be),
          (e.__h = e.__h.filter(function (e) {
            return !e.__ || _e(e);
          }));
      } catch (n) {
        t.some(function (e) {
          e.__h && (e.__h = []);
        }),
          (t = []),
          o.__e(n, e.__v);
      }
    }),
      ne && ne(e, t);
  }),
  (o.unmount = function (e) {
    oe && oe(e);
    var t,
      n = e.__c;
    n &&
      n.__H &&
      (n.__H.__.forEach(function (e) {
        try {
          be(e);
        } catch (n) {
          t = n;
        }
      }),
      (n.__H = void 0),
      t && o.__e(t, n.__v));
  });
var ye = "function" == typeof requestAnimationFrame;
function ge(e) {
  var t,
    n = function () {
      clearTimeout(o), ye && cancelAnimationFrame(t), setTimeout(e);
    },
    o = setTimeout(n, 100);
  ye && (t = requestAnimationFrame(n));
}
function be(e) {
  var t = W,
    n = e.__c;
  "function" == typeof n && ((e.__c = void 0), n()), (W = t);
}
function _e(e) {
  var t = W;
  (e.__c = e.__()), (W = t);
}
function we(e, t) {
  return (
    !e ||
    e.length !== t.length ||
    t.some(function (t, n) {
      return t !== e[n];
    })
  );
}
function ke(e, t) {
  return "function" == typeof t ? t(e) : t;
}
function xe(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function Ce(e, t) {
  for (var n in e) if ("__source" !== n && !(n in t)) return !0;
  for (var o in t) if ("__source" !== o && e[o] !== t[o]) return !0;
  return !1;
}
function Se(e) {
  this.props = e;
}
function Pe(e, t) {
  function n(e) {
    var n = this.props.ref,
      o = n == e.ref;
    return (
      !o && n && (n.call ? n(null) : (n.current = null)),
      t ? !t(this.props, e) || !o : Ce(this.props, e)
    );
  }
  function o(t) {
    return (this.shouldComponentUpdate = n), m(e, t);
  }
  return (
    (o.displayName = "Memo(" + (e.displayName || e.name) + ")"),
    (o.prototype.isReactComponent = !0),
    (o.__f = !0),
    o
  );
}
((Se.prototype = new _()).isPureReactComponent = !0),
  (Se.prototype.shouldComponentUpdate = function (e, t) {
    return Ce(this.props, e) || Ce(this.state, t);
  });
var Ee = o.__b;
o.__b = function (e) {
  e.type && e.type.__f && e.ref && ((e.props.ref = e.ref), (e.ref = null)),
    Ee && Ee(e);
};
var Oe =
  ("undefined" != typeof Symbol &&
    Symbol.for &&
    Symbol.for("react.forward_ref")) ||
  3911;
function Me(e) {
  function t(t) {
    var n = xe({}, t);
    return delete n.ref, e(n, t.ref || null);
  }
  return (
    (t.$$typeof = Oe),
    (t.render = t),
    (t.prototype.isReactComponent = t.__f = !0),
    (t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")"),
    t
  );
}
var je = function (e, t) {
    return null == e ? null : E(E(e).map(t));
  },
  Ae = {
    map: je,
    forEach: je,
    count: function (e) {
      return e ? E(e).length : 0;
    },
    only: function (e) {
      var t = E(e);
      if (1 !== t.length) throw "Children.only";
      return t[0];
    },
    toArray: E,
  },
  De = o.__e;
o.__e = function (e, t, n, o) {
  if (e.then)
    for (var r, i = t; (i = i.__); )
      if ((r = i.__c) && r.__c)
        return null == t.__e && ((t.__e = n.__e), (t.__k = n.__k)), r.__c(e, t);
  De(e, t, n, o);
};
var Te = o.unmount;
function Be(e, t, n) {
  return (
    e &&
      (e.__c &&
        e.__c.__H &&
        (e.__c.__H.__.forEach(function (e) {
          "function" == typeof e.__c && e.__c();
        }),
        (e.__c.__H = null)),
      null != (e = xe({}, e)).__c &&
        (e.__c.__P === n && (e.__c.__P = t), (e.__c = null)),
      (e.__k =
        e.__k &&
        e.__k.map(function (e) {
          return Be(e, t, n);
        }))),
    e
  );
}
function ze(e, t, n) {
  return (
    e &&
      n &&
      ((e.__v = null),
      (e.__k =
        e.__k &&
        e.__k.map(function (e) {
          return ze(e, t, n);
        })),
      e.__c &&
        e.__c.__P === t &&
        (e.__e && n.appendChild(e.__e), (e.__c.__e = !0), (e.__c.__P = n))),
    e
  );
}
function Le() {
  (this.__u = 0), (this.t = null), (this.__b = null);
}
function Re(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function Ie(e) {
  var t, n, o;
  function r(r) {
    if (
      (t ||
        (t = e()).then(
          function (e) {
            n = e.default || e;
          },
          function (e) {
            o = e;
          },
        ),
      o)
    )
      throw o;
    if (!n) throw t;
    return m(n, r);
  }
  return (r.displayName = "Lazy"), (r.__f = !0), r;
}
function Ne() {
  (this.u = null), (this.o = null);
}
(o.unmount = function (e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), Te && Te(e);
}),
  ((Le.prototype = new _()).__c = function (e, t) {
    var n = t.__c,
      o = this;
    null == o.t && (o.t = []), o.t.push(n);
    var r = Re(o.__v),
      i = !1,
      s = function () {
        i || ((i = !0), (n.__R = null), r ? r(a) : a());
      };
    n.__R = s;
    var a = function () {
      if (!--o.__u) {
        if (o.state.__a) {
          var e = o.state.__a;
          o.__v.__k[0] = ze(e, e.__c.__P, e.__c.__O);
        }
        var t;
        for (o.setState({ __a: (o.__b = null) }); (t = o.t.pop()); )
          t.forceUpdate();
      }
    };
    o.__u++ || 32 & t.__u || o.setState({ __a: (o.__b = o.__v.__k[0]) }),
      e.then(s, s);
  }),
  (Le.prototype.componentWillUnmount = function () {
    this.t = [];
  }),
  (Le.prototype.render = function (e, t) {
    if (this.__b) {
      if (this.__v.__k) {
        var n = document.createElement("div"),
          o = this.__v.__k[0].__c;
        this.__v.__k[0] = Be(this.__b, n, (o.__O = o.__P));
      }
      this.__b = null;
    }
    var r = t.__a && m(b, null, e.fallback);
    return r && (r.__u &= -33), [m(b, null, t.__a ? null : e.children), r];
  });
var Ue = function (e, t, n) {
  if (
    (++n[1] === n[0] && e.o.delete(t),
    e.props.revealOrder && ("t" !== e.props.revealOrder[0] || !e.o.size))
  )
    for (n = e.u; n; ) {
      for (; n.length > 3; ) n.pop()();
      if (n[1] < n[0]) break;
      e.u = n = n[2];
    }
};
function Ke(e) {
  return (
    (this.getChildContext = function () {
      return e.context;
    }),
    e.children
  );
}
function Fe(e) {
  var t = this,
    n = e.i;
  (t.componentWillUnmount = function () {
    I(null, t.l), (t.l = null), (t.i = null);
  }),
    t.i && t.i !== n && t.componentWillUnmount(),
    t.l ||
      ((t.i = n),
      (t.l = {
        nodeType: 1,
        parentNode: n,
        childNodes: [],
        appendChild: function (e) {
          this.childNodes.push(e), t.i.appendChild(e);
        },
        insertBefore: function (e, n) {
          this.childNodes.push(e), t.i.appendChild(e);
        },
        removeChild: function (e) {
          this.childNodes.splice(this.childNodes.indexOf(e) >>> 1, 1),
            t.i.removeChild(e);
        },
      })),
    I(m(Ke, { context: t.context }, e.__v), t.l);
}
function He(e, t) {
  var n = m(Fe, { __v: e, i: t });
  return (n.containerInfo = t), n;
}
((Ne.prototype = new _()).__a = function (e) {
  var t = this,
    n = Re(t.__v),
    o = t.o.get(e);
  return (
    o[0]++,
    function (r) {
      var i = function () {
        t.props.revealOrder ? (o.push(r), Ue(t, e, o)) : r();
      };
      n ? n(i) : i();
    }
  );
}),
  (Ne.prototype.render = function (e) {
    (this.u = null), (this.o = new Map());
    var t = E(e.children);
    e.revealOrder && "b" === e.revealOrder[0] && t.reverse();
    for (var n = t.length; n--; ) this.o.set(t[n], (this.u = [1, 0, this.u]));
    return e.children;
  }),
  (Ne.prototype.componentDidUpdate = Ne.prototype.componentDidMount =
    function () {
      var e = this;
      this.o.forEach(function (t, n) {
        Ue(e, n, t);
      });
    });
var Ve =
    ("undefined" != typeof Symbol &&
      Symbol.for &&
      Symbol.for("react.element")) ||
    60103,
  We =
    /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
  qe = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
  Xe = /[A-Z0-9]/g,
  $e = "undefined" != typeof document,
  Ge = function (e) {
    return (
      "undefined" != typeof Symbol && "symbol" == typeof Symbol()
        ? /fil|che|rad/
        : /fil|che|ra/
    ).test(e);
  };
function Ye(e, t, n) {
  return (
    null == t.__k && (t.textContent = ""),
    I(e, t),
    "function" == typeof n && n(),
    e ? e.__c : null
  );
}
function Ze(e, t, n) {
  return N(e, t), "function" == typeof n && n(), e ? e.__c : null;
}
(_.prototype.isReactComponent = {}),
  [
    "componentWillMount",
    "componentWillReceiveProps",
    "componentWillUpdate",
  ].forEach(function (e) {
    Object.defineProperty(_.prototype, e, {
      configurable: !0,
      get: function () {
        return this["UNSAFE_" + e];
      },
      set: function (t) {
        Object.defineProperty(this, e, {
          configurable: !0,
          writable: !0,
          value: t,
        });
      },
    });
  });
var Qe = o.event;
function Je() {}
function et() {
  return this.cancelBubble;
}
function tt() {
  return this.defaultPrevented;
}
o.event = function (e) {
  return (
    Qe && (e = Qe(e)),
    (e.persist = Je),
    (e.isPropagationStopped = et),
    (e.isDefaultPrevented = tt),
    (e.nativeEvent = e)
  );
};
var nt,
  ot = {
    enumerable: !1,
    configurable: !0,
    get: function () {
      return this.class;
    },
  },
  rt = o.vnode;
o.vnode = function (e) {
  "string" == typeof e.type &&
    (function (e) {
      var t = e.props,
        n = e.type,
        o = {};
      for (var r in t) {
        var i = t[r];
        if (
          !(
            ("value" === r && "defaultValue" in t && null == i) ||
            ($e && "children" === r && "noscript" === n) ||
            "class" === r ||
            "className" === r
          )
        ) {
          var s = r.toLowerCase();
          "defaultValue" === r && "value" in t && null == t.value
            ? (r = "value")
            : "download" === r && !0 === i
              ? (i = "")
              : "ondoubleclick" === s
                ? (r = "ondblclick")
                : "onchange" !== s ||
                    ("input" !== n && "textarea" !== n) ||
                    Ge(t.type)
                  ? "onfocus" === s
                    ? (r = "onfocusin")
                    : "onblur" === s
                      ? (r = "onfocusout")
                      : qe.test(r)
                        ? (r = s)
                        : -1 === n.indexOf("-") && We.test(r)
                          ? (r = r.replace(Xe, "-$&").toLowerCase())
                          : null === i && (i = void 0)
                  : (s = r = "oninput"),
            "oninput" === s && o[(r = s)] && (r = "oninputCapture"),
            (o[r] = i);
        }
      }
      "select" == n &&
        o.multiple &&
        Array.isArray(o.value) &&
        (o.value = E(t.children).forEach(function (e) {
          e.props.selected = -1 != o.value.indexOf(e.props.value);
        })),
        "select" == n &&
          null != o.defaultValue &&
          (o.value = E(t.children).forEach(function (e) {
            e.props.selected = o.multiple
              ? -1 != o.defaultValue.indexOf(e.props.value)
              : o.defaultValue == e.props.value;
          })),
        t.class && !t.className
          ? ((o.class = t.class), Object.defineProperty(o, "className", ot))
          : ((t.className && !t.class) || (t.class && t.className)) &&
            (o.class = o.className = t.className),
        (e.props = o);
    })(e),
    (e.$$typeof = Ve),
    rt && rt(e);
};
var it = o.__r;
o.__r = function (e) {
  it && it(e), (nt = e.__c);
};
var st = o.diffed;
o.diffed = function (e) {
  st && st(e);
  var t = e.props,
    n = e.__e;
  null != n &&
    "textarea" === e.type &&
    "value" in t &&
    t.value !== n.value &&
    (n.value = null == t.value ? "" : t.value),
    (nt = null);
};
var at = {
  ReactCurrentDispatcher: {
    current: {
      readContext: function (e) {
        return nt.__n[e.__c].props.value;
      },
    },
  },
};
function ct(e) {
  return m.bind(null, e);
}
function lt(e) {
  return !!e && e.$$typeof === Ve;
}
function ut(e) {
  return lt(e) && e.type === b;
}
function dt(e) {
  return lt(e) ? U.apply(null, arguments) : e;
}
function ht(e) {
  return !!e.__k && (I(null, e), !0);
}
function ft(e) {
  return (e && (e.base || (1 === e.nodeType && e))) || null;
}
var pt = function (e, t) {
    return e(t);
  },
  vt = function (e, t) {
    return e(t);
  },
  mt = b;
function yt(e) {
  e();
}
function gt(e) {
  return e;
}
function bt() {
  return [!1, yt];
}
var _t = ce,
  wt = lt;
function kt(e, t) {
  var n = t(),
    o = ie({ h: { __: n, v: t } }),
    r = o[0].h,
    i = o[1];
  return (
    ce(
      function () {
        (r.__ = n), (r.v = t), xt(r) && i({ h: r });
      },
      [e, n, t],
    ),
    ae(
      function () {
        return (
          xt(r) && i({ h: r }),
          e(function () {
            xt(r) && i({ h: r });
          })
        );
      },
      [e],
    ),
    n
  );
}
function xt(e) {
  var t,
    n,
    o = e.v,
    r = e.__;
  try {
    var i = o();
    return !(
      ((t = r) === (n = i) && (0 !== t || 1 / t == 1 / n)) ||
      (t != t && n != n)
    );
  } catch (s) {
    return !0;
  }
}
var Ct = {
  useState: ie,
  useId: ve,
  useReducer: se,
  useEffect: ae,
  useLayoutEffect: ce,
  useInsertionEffect: _t,
  useTransition: bt,
  useDeferredValue: gt,
  useSyncExternalStore: kt,
  startTransition: yt,
  useRef: le,
  useImperativeHandle: ue,
  useMemo: de,
  useCallback: he,
  useContext: fe,
  useDebugValue: pe,
  version: "17.0.2",
  Children: Ae,
  render: Ye,
  hydrate: Ze,
  unmountComponentAtNode: ht,
  createPortal: He,
  createElement: m,
  createContext: K,
  createFactory: ct,
  cloneElement: dt,
  createRef: g,
  Fragment: b,
  isValidElement: lt,
  isElement: wt,
  isFragment: ut,
  findDOMNode: ft,
  Component: _,
  PureComponent: Se,
  memo: Pe,
  forwardRef: Me,
  flushSync: vt,
  unstable_batchedUpdates: pt,
  StrictMode: mt,
  Suspense: Le,
  SuspenseList: Ne,
  lazy: Ie,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: at,
};
const St = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        Children: Ae,
        Component: _,
        Fragment: b,
        PureComponent: Se,
        StrictMode: mt,
        Suspense: Le,
        SuspenseList: Ne,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: at,
        cloneElement: dt,
        createContext: K,
        createElement: m,
        createFactory: ct,
        createPortal: He,
        createRef: g,
        default: Ct,
        findDOMNode: ft,
        flushSync: vt,
        forwardRef: Me,
        hydrate: Ze,
        isElement: wt,
        isFragment: ut,
        isValidElement: lt,
        lazy: Ie,
        memo: Pe,
        render: Ye,
        startTransition: yt,
        unmountComponentAtNode: ht,
        unstable_batchedUpdates: pt,
        useCallback: he,
        useContext: fe,
        useDebugValue: pe,
        useDeferredValue: gt,
        useEffect: ae,
        useErrorBoundary: function (e) {
          var t = re(V++, 10),
            n = ie();
          return (
            (t.__ = e),
            W.componentDidCatch ||
              (W.componentDidCatch = function (e, o) {
                t.__ && t.__(e, o), n[1](e);
              }),
            [
              n[0],
              function () {
                n[1](void 0);
              },
            ]
          );
        },
        useId: ve,
        useImperativeHandle: ue,
        useInsertionEffect: _t,
        useLayoutEffect: ce,
        useMemo: de,
        useReducer: se,
        useRef: le,
        useState: ie,
        useSyncExternalStore: kt,
        useTransition: bt,
        version: "17.0.2",
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Pt = H(St);
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Et = Pt;
var Ot =
    "function" == typeof Object.is
      ? Object.is
      : function (e, t) {
          return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
        },
  Mt = Et.useState,
  jt = Et.useEffect,
  At = Et.useLayoutEffect,
  Dt = Et.useDebugValue;
function Tt(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ot(e, n);
  } catch (o) {
    return !0;
  }
}
var Bt =
  "undefined" == typeof window ||
  void 0 === window.document ||
  void 0 === window.document.createElement
    ? function (e, t) {
        return t();
      }
    : function (e, t) {
        var n = t(),
          o = Mt({ inst: { value: n, getSnapshot: t } }),
          r = o[0].inst,
          i = o[1];
        return (
          At(
            function () {
              (r.value = n), (r.getSnapshot = t), Tt(r) && i({ inst: r });
            },
            [e, n, t],
          ),
          jt(
            function () {
              return (
                Tt(r) && i({ inst: r }),
                e(function () {
                  Tt(r) && i({ inst: r });
                })
              );
            },
            [e],
          ),
          Dt(n),
          n
        );
      };
(G.useSyncExternalStore =
  void 0 !== Et.useSyncExternalStore ? Et.useSyncExternalStore : Bt),
  ($.exports = G);
var zt = $.exports,
  Lt = { exports: {} },
  Rt = {},
  It = Pt,
  Nt = zt;
var Ut =
    "function" == typeof Object.is
      ? Object.is
      : function (e, t) {
          return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
        },
  Kt = Nt.useSyncExternalStore,
  Ft = It.useRef,
  Ht = It.useEffect,
  Vt = It.useMemo,
  Wt = It.useDebugValue;
(Rt.useSyncExternalStoreWithSelector = function (e, t, n, o, r) {
  var i = Ft(null);
  if (null === i.current) {
    var s = { hasValue: !1, value: null };
    i.current = s;
  } else s = i.current;
  i = Vt(
    function () {
      function e(e) {
        if (!c) {
          if (((c = !0), (i = e), (e = o(e)), void 0 !== r && s.hasValue)) {
            var t = s.value;
            if (r(t, e)) return (a = t);
          }
          return (a = e);
        }
        if (((t = a), Ut(i, e))) return t;
        var n = o(e);
        return void 0 !== r && r(t, n) ? t : ((i = e), (a = n));
      }
      var i,
        a,
        c = !1,
        l = void 0 === n ? null : n;
      return [
        function () {
          return e(t());
        },
        null === l
          ? void 0
          : function () {
              return e(l());
            },
      ];
    },
    [t, n, o, r],
  );
  var a = Kt(e, i[0], i[1]);
  return (
    Ht(
      function () {
        (s.hasValue = !0), (s.value = a);
      },
      [a],
    ),
    Wt(a),
    a
  );
}),
  (Lt.exports = Rt);
var qt = Lt.exports;
let Xt = function (e) {
  e();
};
const $t = Symbol.for("react-redux-context"),
  Gt = "undefined" != typeof globalThis ? globalThis : {};
function Yt() {
  var e;
  if (!K) return {};
  const t = null != (e = Gt[$t]) ? e : (Gt[$t] = new Map());
  let n = t.get(K);
  return n || ((n = K(null)), t.set(K, n)), n;
}
const Zt = Yt();
function Qt(e = Zt) {
  return function () {
    return fe(e);
  };
}
const Jt = Qt();
let en = () => {
  throw new Error("uSES not initialized!");
};
const tn = (e, t) => e === t;
function nn(e = Zt) {
  const t = e === Zt ? Jt : Qt(e);
  return function (e, n = {}) {
    const {
        equalityFn: o = tn,
        stabilityCheck: r,
        noopCheck: i,
      } = "function" == typeof n ? { equalityFn: n } : n,
      {
        store: s,
        subscription: a,
        getServerState: c,
        stabilityCheck: l,
        noopCheck: u,
      } = t();
    le(!0);
    const d = he({ [e.name]: (t) => e(t) }[e.name], [e, l, r]),
      h = en(a.addNestedSub, s.getState, c || s.getState, d, o);
    return pe(h), h;
  };
}
const on = nn();
var rn = { exports: {} },
  sn = {},
  an = "function" == typeof Symbol && Symbol.for,
  cn = an ? Symbol.for("react.element") : 60103,
  ln = an ? Symbol.for("react.portal") : 60106,
  un = an ? Symbol.for("react.fragment") : 60107,
  dn = an ? Symbol.for("react.strict_mode") : 60108,
  hn = an ? Symbol.for("react.profiler") : 60114,
  fn = an ? Symbol.for("react.provider") : 60109,
  pn = an ? Symbol.for("react.context") : 60110,
  vn = an ? Symbol.for("react.async_mode") : 60111,
  mn = an ? Symbol.for("react.concurrent_mode") : 60111,
  yn = an ? Symbol.for("react.forward_ref") : 60112,
  gn = an ? Symbol.for("react.suspense") : 60113,
  bn = an ? Symbol.for("react.suspense_list") : 60120,
  _n = an ? Symbol.for("react.memo") : 60115,
  wn = an ? Symbol.for("react.lazy") : 60116,
  kn = an ? Symbol.for("react.block") : 60121,
  xn = an ? Symbol.for("react.fundamental") : 60117,
  Cn = an ? Symbol.for("react.responder") : 60118,
  Sn = an ? Symbol.for("react.scope") : 60119;
function Pn(e) {
  if ("object" == typeof e && null !== e) {
    var t = e.$$typeof;
    switch (t) {
      case cn:
        switch ((e = e.type)) {
          case vn:
          case mn:
          case un:
          case hn:
          case dn:
          case gn:
            return e;
          default:
            switch ((e = e && e.$$typeof)) {
              case pn:
              case yn:
              case wn:
              case _n:
              case fn:
                return e;
              default:
                return t;
            }
        }
      case ln:
        return t;
    }
  }
}
function En(e) {
  return Pn(e) === mn;
}
(sn.AsyncMode = vn),
  (sn.ConcurrentMode = mn),
  (sn.ContextConsumer = pn),
  (sn.ContextProvider = fn),
  (sn.Element = cn),
  (sn.ForwardRef = yn),
  (sn.Fragment = un),
  (sn.Lazy = wn),
  (sn.Memo = _n),
  (sn.Portal = ln),
  (sn.Profiler = hn),
  (sn.StrictMode = dn),
  (sn.Suspense = gn),
  (sn.isAsyncMode = function (e) {
    return En(e) || Pn(e) === vn;
  }),
  (sn.isConcurrentMode = En),
  (sn.isContextConsumer = function (e) {
    return Pn(e) === pn;
  }),
  (sn.isContextProvider = function (e) {
    return Pn(e) === fn;
  }),
  (sn.isElement = function (e) {
    return "object" == typeof e && null !== e && e.$$typeof === cn;
  }),
  (sn.isForwardRef = function (e) {
    return Pn(e) === yn;
  }),
  (sn.isFragment = function (e) {
    return Pn(e) === un;
  }),
  (sn.isLazy = function (e) {
    return Pn(e) === wn;
  }),
  (sn.isMemo = function (e) {
    return Pn(e) === _n;
  }),
  (sn.isPortal = function (e) {
    return Pn(e) === ln;
  }),
  (sn.isProfiler = function (e) {
    return Pn(e) === hn;
  }),
  (sn.isStrictMode = function (e) {
    return Pn(e) === dn;
  }),
  (sn.isSuspense = function (e) {
    return Pn(e) === gn;
  }),
  (sn.isValidElementType = function (e) {
    return (
      "string" == typeof e ||
      "function" == typeof e ||
      e === un ||
      e === mn ||
      e === hn ||
      e === dn ||
      e === gn ||
      e === bn ||
      ("object" == typeof e &&
        null !== e &&
        (e.$$typeof === wn ||
          e.$$typeof === _n ||
          e.$$typeof === fn ||
          e.$$typeof === pn ||
          e.$$typeof === yn ||
          e.$$typeof === xn ||
          e.$$typeof === Cn ||
          e.$$typeof === Sn ||
          e.$$typeof === kn))
    );
  }),
  (sn.typeOf = Pn),
  (rn.exports = sn);
var On = rn.exports,
  Mn = {};
(Mn[On.ForwardRef] = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
}),
  (Mn[On.Memo] = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  });
var jn,
  An = {},
  Dn = Symbol.for("react.element"),
  Tn = Symbol.for("react.portal"),
  Bn = Symbol.for("react.fragment"),
  zn = Symbol.for("react.strict_mode"),
  Ln = Symbol.for("react.profiler"),
  Rn = Symbol.for("react.provider"),
  In = Symbol.for("react.context"),
  Nn = Symbol.for("react.server_context"),
  Un = Symbol.for("react.forward_ref"),
  Kn = Symbol.for("react.suspense"),
  Fn = Symbol.for("react.suspense_list"),
  Hn = Symbol.for("react.memo"),
  Vn = Symbol.for("react.lazy"),
  Wn = Symbol.for("react.offscreen");
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function qn(e) {
  if ("object" == typeof e && null !== e) {
    var t = e.$$typeof;
    switch (t) {
      case Dn:
        switch ((e = e.type)) {
          case Bn:
          case Ln:
          case zn:
          case Kn:
          case Fn:
            return e;
          default:
            switch ((e = e && e.$$typeof)) {
              case Nn:
              case In:
              case Un:
              case Vn:
              case Hn:
              case Rn:
                return e;
              default:
                return t;
            }
        }
      case Tn:
        return t;
    }
  }
}
function Xn() {
  const e = Xt;
  let t = null,
    n = null;
  return {
    clear() {
      (t = null), (n = null);
    },
    notify() {
      e(() => {
        let e = t;
        for (; e; ) e.callback(), (e = e.next);
      });
    },
    get() {
      let e = [],
        n = t;
      for (; n; ) e.push(n), (n = n.next);
      return e;
    },
    subscribe(e) {
      let o = !0,
        r = (n = { callback: e, next: null, prev: n });
      return (
        r.prev ? (r.prev.next = r) : (t = r),
        function () {
          o &&
            null !== t &&
            ((o = !1),
            r.next ? (r.next.prev = r.prev) : (n = r.prev),
            r.prev ? (r.prev.next = r.next) : (t = r.next));
        }
      );
    },
  };
}
(jn = Symbol.for("react.module.reference")),
  (An.ContextConsumer = In),
  (An.ContextProvider = Rn),
  (An.Element = Dn),
  (An.ForwardRef = Un),
  (An.Fragment = Bn),
  (An.Lazy = Vn),
  (An.Memo = Hn),
  (An.Portal = Tn),
  (An.Profiler = Ln),
  (An.StrictMode = zn),
  (An.Suspense = Kn),
  (An.SuspenseList = Fn),
  (An.isAsyncMode = function () {
    return !1;
  }),
  (An.isConcurrentMode = function () {
    return !1;
  }),
  (An.isContextConsumer = function (e) {
    return qn(e) === In;
  }),
  (An.isContextProvider = function (e) {
    return qn(e) === Rn;
  }),
  (An.isElement = function (e) {
    return "object" == typeof e && null !== e && e.$$typeof === Dn;
  }),
  (An.isForwardRef = function (e) {
    return qn(e) === Un;
  }),
  (An.isFragment = function (e) {
    return qn(e) === Bn;
  }),
  (An.isLazy = function (e) {
    return qn(e) === Vn;
  }),
  (An.isMemo = function (e) {
    return qn(e) === Hn;
  }),
  (An.isPortal = function (e) {
    return qn(e) === Tn;
  }),
  (An.isProfiler = function (e) {
    return qn(e) === Ln;
  }),
  (An.isStrictMode = function (e) {
    return qn(e) === zn;
  }),
  (An.isSuspense = function (e) {
    return qn(e) === Kn;
  }),
  (An.isSuspenseList = function (e) {
    return qn(e) === Fn;
  }),
  (An.isValidElementType = function (e) {
    return (
      "string" == typeof e ||
      "function" == typeof e ||
      e === Bn ||
      e === Ln ||
      e === zn ||
      e === Kn ||
      e === Fn ||
      e === Wn ||
      ("object" == typeof e &&
        null !== e &&
        (e.$$typeof === Vn ||
          e.$$typeof === Hn ||
          e.$$typeof === Rn ||
          e.$$typeof === In ||
          e.$$typeof === Un ||
          e.$$typeof === jn ||
          void 0 !== e.getModuleId))
    );
  }),
  (An.typeOf = qn);
const $n = { notify() {}, get: () => [] };
const Gn = !(
  "undefined" == typeof window ||
  void 0 === window.document ||
  void 0 === window.document.createElement
)
  ? ce
  : ae;
function Yn({
  store: e,
  context: t,
  children: n,
  serverState: o,
  stabilityCheck: r = "once",
  noopCheck: i = "once",
}) {
  const s = de(() => {
      const t = (function (e) {
        let t,
          n = $n,
          o = 0,
          r = !1;
        function i() {
          c.onStateChange && c.onStateChange();
        }
        function s() {
          o++, t || ((t = e.subscribe(i)), (n = Xn()));
        }
        function a() {
          o--, t && 0 === o && (t(), (t = void 0), n.clear(), (n = $n));
        }
        const c = {
          addNestedSub: function (e) {
            s();
            const t = n.subscribe(e);
            let o = !1;
            return () => {
              o || ((o = !0), t(), a());
            };
          },
          notifyNestedSubs: function () {
            n.notify();
          },
          handleChangeWrapper: i,
          isSubscribed: function () {
            return r;
          },
          trySubscribe: function () {
            r || ((r = !0), s());
          },
          tryUnsubscribe: function () {
            r && ((r = !1), a());
          },
          getListeners: () => n,
        };
        return c;
      })(e);
      return {
        store: e,
        subscription: t,
        getServerState: o ? () => o : void 0,
        stabilityCheck: r,
        noopCheck: i,
      };
    }, [e, o, r, i]),
    a = de(() => e.getState(), [e]);
  Gn(() => {
    const { subscription: t } = s;
    return (
      (t.onStateChange = t.notifyNestedSubs),
      t.trySubscribe(),
      a !== e.getState() && t.notifyNestedSubs(),
      () => {
        t.tryUnsubscribe(), (t.onStateChange = void 0);
      }
    );
  }, [s, a]);
  return m((t || Zt).Provider, { value: s }, n);
}
function Zn(e = Zt) {
  const t = e === Zt ? Jt : Qt(e);
  return function () {
    const { store: e } = t();
    return e;
  };
}
const Qn = Zn();
function Jn(e = Zt) {
  const t = e === Zt ? Qn : Zn(e);
  return function () {
    return t().dispatch;
  };
}
const eo = Jn();
var to;
function no(e) {
  for (
    var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), o = 1;
    o < t;
    o++
  )
    n[o - 1] = arguments[o];
  throw Error(
    "[Immer] minified error nr: " +
      e +
      (n.length
        ? " " +
          n
            .map(function (e) {
              return "'" + e + "'";
            })
            .join(",")
        : "") +
      ". Find the full error at: https://bit.ly/3cXEKWf",
  );
}
function oo(e) {
  return !!e && !!e[Vo];
}
function ro(e) {
  var t;
  return (
    !!e &&
    ((function (e) {
      if (!e || "object" != typeof e) return !1;
      var t = Object.getPrototypeOf(e);
      if (null === t) return !0;
      var n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
      return (
        n === Object ||
        ("function" == typeof n && Function.toString.call(n) === Wo)
      );
    })(e) ||
      Array.isArray(e) ||
      !!e[Ho] ||
      !!(null === (t = e.constructor) || void 0 === t ? void 0 : t[Ho]) ||
      uo(e) ||
      ho(e))
  );
}
function io(e, t, n) {
  void 0 === n && (n = !1),
    0 === so(e)
      ? (n ? Object.keys : qo)(e).forEach(function (o) {
          (n && "symbol" == typeof o) || t(o, e[o], e);
        })
      : e.forEach(function (n, o) {
          return t(o, n, e);
        });
}
function so(e) {
  var t = e[Vo];
  return t
    ? t.i > 3
      ? t.i - 4
      : t.i
    : Array.isArray(e)
      ? 1
      : uo(e)
        ? 2
        : ho(e)
          ? 3
          : 0;
}
function ao(e, t) {
  return 2 === so(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function co(e, t, n) {
  var o = so(e);
  2 === o ? e.set(t, n) : 3 === o ? e.add(n) : (e[t] = n);
}
function lo(e, t) {
  return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
}
function uo(e) {
  return No && e instanceof Map;
}
function ho(e) {
  return Uo && e instanceof Set;
}
function fo(e) {
  return e.o || e.t;
}
function po(e) {
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  var t = Xo(e);
  delete t[Vo];
  for (var n = qo(t), o = 0; o < n.length; o++) {
    var r = n[o],
      i = t[r];
    !1 === i.writable && ((i.writable = !0), (i.configurable = !0)),
      (i.get || i.set) &&
        (t[r] = {
          configurable: !0,
          writable: !0,
          enumerable: i.enumerable,
          value: e[r],
        });
  }
  return Object.create(Object.getPrototypeOf(e), t);
}
function vo(e, t) {
  return (
    void 0 === t && (t = !1),
    yo(e) ||
      oo(e) ||
      !ro(e) ||
      (so(e) > 1 && (e.set = e.add = e.clear = e.delete = mo),
      Object.freeze(e),
      t &&
        io(
          e,
          function (e, t) {
            return vo(t, !0);
          },
          !0,
        )),
    e
  );
}
function mo() {
  no(2);
}
function yo(e) {
  return null == e || "object" != typeof e || Object.isFrozen(e);
}
function go(e) {
  var t = $o[e];
  return t || no(18, e), t;
}
function bo() {
  return Ro;
}
function _o(e, t) {
  t && (go("Patches"), (e.u = []), (e.s = []), (e.v = t));
}
function wo(e) {
  ko(e), e.p.forEach(Co), (e.p = null);
}
function ko(e) {
  e === Ro && (Ro = e.l);
}
function xo(e) {
  return (Ro = { p: [], l: Ro, h: e, m: !0, _: 0 });
}
function Co(e) {
  var t = e[Vo];
  0 === t.i || 1 === t.i ? t.j() : (t.g = !0);
}
function So(e, t) {
  t._ = t.p.length;
  var n = t.p[0],
    o = void 0 !== e && e !== n;
  return (
    t.h.O || go("ES5").S(t, e, o),
    o
      ? (n[Vo].P && (wo(t), no(4)),
        ro(e) && ((e = Po(t, e)), t.l || Oo(t, e)),
        t.u && go("Patches").M(n[Vo].t, e, t.u, t.s))
      : (e = Po(t, n, [])),
    wo(t),
    t.u && t.v(t.u, t.s),
    e !== Fo ? e : void 0
  );
}
function Po(e, t, n) {
  if (yo(t)) return t;
  var o = t[Vo];
  if (!o)
    return (
      io(
        t,
        function (r, i) {
          return Eo(e, o, t, r, i, n);
        },
        !0,
      ),
      t
    );
  if (o.A !== e) return t;
  if (!o.P) return Oo(e, o.t, !0), o.t;
  if (!o.I) {
    (o.I = !0), o.A._--;
    var r = 4 === o.i || 5 === o.i ? (o.o = po(o.k)) : o.o,
      i = r,
      s = !1;
    3 === o.i && ((i = new Set(r)), r.clear(), (s = !0)),
      io(i, function (t, i) {
        return Eo(e, o, r, t, i, n, s);
      }),
      Oo(e, r, !1),
      n && e.u && go("Patches").N(o, n, e.u, e.s);
  }
  return o.o;
}
function Eo(e, t, n, o, r, i, s) {
  if (oo(r)) {
    var a = Po(e, r, i && t && 3 !== t.i && !ao(t.R, o) ? i.concat(o) : void 0);
    if ((co(n, o, a), !oo(a))) return;
    e.m = !1;
  } else s && n.add(r);
  if (ro(r) && !yo(r)) {
    if (!e.h.D && e._ < 1) return;
    Po(e, r), (t && t.A.l) || Oo(e, r);
  }
}
function Oo(e, t, n) {
  void 0 === n && (n = !1), !e.l && e.h.D && e.m && vo(t, n);
}
function Mo(e, t) {
  var n = e[Vo];
  return (n ? fo(n) : e)[t];
}
function jo(e, t) {
  if (t in e)
    for (var n = Object.getPrototypeOf(e); n; ) {
      var o = Object.getOwnPropertyDescriptor(n, t);
      if (o) return o;
      n = Object.getPrototypeOf(n);
    }
}
function Ao(e) {
  e.P || ((e.P = !0), e.l && Ao(e.l));
}
function Do(e) {
  e.o || (e.o = po(e.t));
}
function To(e, t, n) {
  var o = uo(t)
    ? go("MapSet").F(t, n)
    : ho(t)
      ? go("MapSet").T(t, n)
      : e.O
        ? (function (e, t) {
            var n = Array.isArray(e),
              o = {
                i: n ? 1 : 0,
                A: t ? t.A : bo(),
                P: !1,
                I: !1,
                R: {},
                l: t,
                t: e,
                k: null,
                o: null,
                j: null,
                C: !1,
              },
              r = o,
              i = Go;
            n && ((r = [o]), (i = Yo));
            var s = Proxy.revocable(r, i),
              a = s.revoke,
              c = s.proxy;
            return (o.k = c), (o.j = a), c;
          })(t, n)
        : go("ES5").J(t, n);
  return (n ? n.A : bo()).p.push(o), o;
}
function Bo(e) {
  return (
    oo(e) || no(22, e),
    (function e(t) {
      if (!ro(t)) return t;
      var n,
        o = t[Vo],
        r = so(t);
      if (o) {
        if (!o.P && (o.i < 4 || !go("ES5").K(o))) return o.t;
        (o.I = !0), (n = zo(t, r)), (o.I = !1);
      } else n = zo(t, r);
      return (
        io(n, function (t, r) {
          (o &&
            (function (e, t) {
              return 2 === so(e) ? e.get(t) : e[t];
            })(o.t, t) === r) ||
            co(n, t, e(r));
        }),
        3 === r ? new Set(n) : n
      );
    })(e)
  );
}
function zo(e, t) {
  switch (t) {
    case 2:
      return new Map(e);
    case 3:
      return Array.from(e);
  }
  return po(e);
}
(to = qt.useSyncExternalStoreWithSelector), (en = to), (Xt = pt);
var Lo,
  Ro,
  Io = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x"),
  No = "undefined" != typeof Map,
  Uo = "undefined" != typeof Set,
  Ko =
    "undefined" != typeof Proxy &&
    void 0 !== Proxy.revocable &&
    "undefined" != typeof Reflect,
  Fo = Io
    ? Symbol.for("immer-nothing")
    : (((Lo = {})["immer-nothing"] = !0), Lo),
  Ho = Io ? Symbol.for("immer-draftable") : "__$immer_draftable",
  Vo = Io ? Symbol.for("immer-state") : "__$immer_state",
  Wo = "" + Object.prototype.constructor,
  qo =
    "undefined" != typeof Reflect && Reflect.ownKeys
      ? Reflect.ownKeys
      : void 0 !== Object.getOwnPropertySymbols
        ? function (e) {
            return Object.getOwnPropertyNames(e).concat(
              Object.getOwnPropertySymbols(e),
            );
          }
        : Object.getOwnPropertyNames,
  Xo =
    Object.getOwnPropertyDescriptors ||
    function (e) {
      var t = {};
      return (
        qo(e).forEach(function (n) {
          t[n] = Object.getOwnPropertyDescriptor(e, n);
        }),
        t
      );
    },
  $o = {},
  Go = {
    get: function (e, t) {
      if (t === Vo) return e;
      var n,
        o,
        r,
        i = fo(e);
      if (!ao(i, t))
        return (
          (n = e),
          (r = jo(i, t))
            ? "value" in r
              ? r.value
              : null === (o = r.get) || void 0 === o
                ? void 0
                : o.call(n.k)
            : void 0
        );
      var s = i[t];
      return e.I || !ro(s)
        ? s
        : s === Mo(e.t, t)
          ? (Do(e), (e.o[t] = To(e.A.h, s, e)))
          : s;
    },
    has: function (e, t) {
      return t in fo(e);
    },
    ownKeys: function (e) {
      return Reflect.ownKeys(fo(e));
    },
    set: function (e, t, n) {
      var o = jo(fo(e), t);
      if (null == o ? void 0 : o.set) return o.set.call(e.k, n), !0;
      if (!e.P) {
        var r = Mo(fo(e), t),
          i = null == r ? void 0 : r[Vo];
        if (i && i.t === n) return (e.o[t] = n), (e.R[t] = !1), !0;
        if (lo(n, r) && (void 0 !== n || ao(e.t, t))) return !0;
        Do(e), Ao(e);
      }
      return (
        (e.o[t] === n && (void 0 !== n || t in e.o)) ||
          (Number.isNaN(n) && Number.isNaN(e.o[t])) ||
          ((e.o[t] = n), (e.R[t] = !0)),
        !0
      );
    },
    deleteProperty: function (e, t) {
      return (
        void 0 !== Mo(e.t, t) || t in e.t
          ? ((e.R[t] = !1), Do(e), Ao(e))
          : delete e.R[t],
        e.o && delete e.o[t],
        !0
      );
    },
    getOwnPropertyDescriptor: function (e, t) {
      var n = fo(e),
        o = Reflect.getOwnPropertyDescriptor(n, t);
      return o
        ? {
            writable: !0,
            configurable: 1 !== e.i || "length" !== t,
            enumerable: o.enumerable,
            value: n[t],
          }
        : o;
    },
    defineProperty: function () {
      no(11);
    },
    getPrototypeOf: function (e) {
      return Object.getPrototypeOf(e.t);
    },
    setPrototypeOf: function () {
      no(12);
    },
  },
  Yo = {};
io(Go, function (e, t) {
  Yo[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
}),
  (Yo.deleteProperty = function (e, t) {
    return Yo.set.call(this, e, t, void 0);
  }),
  (Yo.set = function (e, t, n) {
    return Go.set.call(this, e[0], t, n, e[0]);
  });
var Zo = (function () {
    function e(e) {
      var t = this;
      (this.O = Ko),
        (this.D = !0),
        (this.produce = function (e, n, o) {
          if ("function" == typeof e && "function" != typeof n) {
            var r = n;
            n = e;
            var i = t;
            return function (e) {
              var t = this;
              void 0 === e && (e = r);
              for (
                var o = arguments.length, s = Array(o > 1 ? o - 1 : 0), a = 1;
                a < o;
                a++
              )
                s[a - 1] = arguments[a];
              return i.produce(e, function (e) {
                var o;
                return (o = n).call.apply(o, [t, e].concat(s));
              });
            };
          }
          var s;
          if (
            ("function" != typeof n && no(6),
            void 0 !== o && "function" != typeof o && no(7),
            ro(e))
          ) {
            var a = xo(t),
              c = To(t, e, void 0),
              l = !0;
            try {
              (s = n(c)), (l = !1);
            } finally {
              l ? wo(a) : ko(a);
            }
            return "undefined" != typeof Promise && s instanceof Promise
              ? s.then(
                  function (e) {
                    return _o(a, o), So(e, a);
                  },
                  function (e) {
                    throw (wo(a), e);
                  },
                )
              : (_o(a, o), So(s, a));
          }
          if (!e || "object" != typeof e) {
            if (
              (void 0 === (s = n(e)) && (s = e),
              s === Fo && (s = void 0),
              t.D && vo(s, !0),
              o)
            ) {
              var u = [],
                d = [];
              go("Patches").M(e, s, u, d), o(u, d);
            }
            return s;
          }
          no(21, e);
        }),
        (this.produceWithPatches = function (e, n) {
          if ("function" == typeof e)
            return function (n) {
              for (
                var o = arguments.length, r = Array(o > 1 ? o - 1 : 0), i = 1;
                i < o;
                i++
              )
                r[i - 1] = arguments[i];
              return t.produceWithPatches(n, function (t) {
                return e.apply(void 0, [t].concat(r));
              });
            };
          var o,
            r,
            i = t.produce(e, n, function (e, t) {
              (o = e), (r = t);
            });
          return "undefined" != typeof Promise && i instanceof Promise
            ? i.then(function (e) {
                return [e, o, r];
              })
            : [i, o, r];
        }),
        "boolean" == typeof (null == e ? void 0 : e.useProxies) &&
          this.setUseProxies(e.useProxies),
        "boolean" == typeof (null == e ? void 0 : e.autoFreeze) &&
          this.setAutoFreeze(e.autoFreeze);
    }
    var t = e.prototype;
    return (
      (t.createDraft = function (e) {
        ro(e) || no(8), oo(e) && (e = Bo(e));
        var t = xo(this),
          n = To(this, e, void 0);
        return (n[Vo].C = !0), ko(t), n;
      }),
      (t.finishDraft = function (e, t) {
        var n = (e && e[Vo]).A;
        return _o(n, t), So(void 0, n);
      }),
      (t.setAutoFreeze = function (e) {
        this.D = e;
      }),
      (t.setUseProxies = function (e) {
        e && !Ko && no(20), (this.O = e);
      }),
      (t.applyPatches = function (e, t) {
        var n;
        for (n = t.length - 1; n >= 0; n--) {
          var o = t[n];
          if (0 === o.path.length && "replace" === o.op) {
            e = o.value;
            break;
          }
        }
        n > -1 && (t = t.slice(n + 1));
        var r = go("Patches").$;
        return oo(e)
          ? r(e, t)
          : this.produce(e, function (e) {
              return r(e, t);
            });
      }),
      e
    );
  })(),
  Qo = new Zo(),
  Jo = Qo.produce;
function er(e) {
  return (er =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function (e) {
          return typeof e;
        }
      : function (e) {
          return e &&
            "function" == typeof Symbol &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? "symbol"
            : typeof e;
        })(e);
}
function tr(e) {
  var t = (function (e, t) {
    if ("object" !== er(e) || null === e) return e;
    var n = e[Symbol.toPrimitive];
    if (void 0 !== n) {
      var o = n.call(e, t || "default");
      if ("object" !== er(o)) return o;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === t ? String : Number)(e);
  })(e, "string");
  return "symbol" === er(t) ? t : String(t);
}
function nr(e, t, n) {
  return (
    (t = tr(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function or(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    t &&
      (o = o.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, o);
  }
  return n;
}
function rr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2
      ? or(Object(n), !0).forEach(function (t) {
          nr(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : or(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function ir(e) {
  return (
    "Minified Redux error #" +
    e +
    "; visit https://redux.js.org/Errors?code=" +
    e +
    " for the full message or use the non-minified dev environment for full errors. "
  );
}
Qo.produceWithPatches.bind(Qo),
  Qo.setAutoFreeze.bind(Qo),
  Qo.setUseProxies.bind(Qo),
  Qo.applyPatches.bind(Qo),
  Qo.createDraft.bind(Qo),
  Qo.finishDraft.bind(Qo);
var sr = ("function" == typeof Symbol && Symbol.observable) || "@@observable",
  ar = function () {
    return Math.random().toString(36).substring(7).split("").join(".");
  },
  cr = {
    INIT: "@@redux/INIT" + ar(),
    REPLACE: "@@redux/REPLACE" + ar(),
    PROBE_UNKNOWN_ACTION: function () {
      return "@@redux/PROBE_UNKNOWN_ACTION" + ar();
    },
  };
function lr(e, t, n) {
  var o;
  if (
    ("function" == typeof t && "function" == typeof n) ||
    ("function" == typeof n && "function" == typeof arguments[3])
  )
    throw new Error(ir(0));
  if (
    ("function" == typeof t && void 0 === n && ((n = t), (t = void 0)),
    void 0 !== n)
  ) {
    if ("function" != typeof n) throw new Error(ir(1));
    return n(lr)(e, t);
  }
  if ("function" != typeof e) throw new Error(ir(2));
  var r = e,
    i = t,
    s = [],
    a = s,
    c = !1;
  function l() {
    a === s && (a = s.slice());
  }
  function u() {
    if (c) throw new Error(ir(3));
    return i;
  }
  function d(e) {
    if ("function" != typeof e) throw new Error(ir(4));
    if (c) throw new Error(ir(5));
    var t = !0;
    return (
      l(),
      a.push(e),
      function () {
        if (t) {
          if (c) throw new Error(ir(6));
          (t = !1), l();
          var n = a.indexOf(e);
          a.splice(n, 1), (s = null);
        }
      }
    );
  }
  function h(e) {
    if (
      !(function (e) {
        if ("object" != typeof e || null === e) return !1;
        for (var t = e; null !== Object.getPrototypeOf(t); )
          t = Object.getPrototypeOf(t);
        return Object.getPrototypeOf(e) === t;
      })(e)
    )
      throw new Error(ir(7));
    if (void 0 === e.type) throw new Error(ir(8));
    if (c) throw new Error(ir(9));
    try {
      (c = !0), (i = r(i, e));
    } finally {
      c = !1;
    }
    for (var t = (s = a), n = 0; n < t.length; n++) {
      (0, t[n])();
    }
    return e;
  }
  return (
    h({ type: cr.INIT }),
    ((o = {
      dispatch: h,
      subscribe: d,
      getState: u,
      replaceReducer: function (e) {
        if ("function" != typeof e) throw new Error(ir(10));
        (r = e), h({ type: cr.REPLACE });
      },
    })[sr] = function () {
      var e,
        t = d;
      return (
        ((e = {
          subscribe: function (e) {
            if ("object" != typeof e || null === e) throw new Error(ir(11));
            function n() {
              e.next && e.next(u());
            }
            return n(), { unsubscribe: t(n) };
          },
        })[sr] = function () {
          return this;
        }),
        e
      );
    }),
    o
  );
}
function ur(e) {
  for (var t = Object.keys(e), n = {}, o = 0; o < t.length; o++) {
    var r = t[o];
    "function" == typeof e[r] && (n[r] = e[r]);
  }
  var i,
    s = Object.keys(n);
  try {
    !(function (e) {
      Object.keys(e).forEach(function (t) {
        var n = e[t];
        if (void 0 === n(void 0, { type: cr.INIT })) throw new Error(ir(12));
        if (void 0 === n(void 0, { type: cr.PROBE_UNKNOWN_ACTION() }))
          throw new Error(ir(13));
      });
    })(n);
  } catch (a) {
    i = a;
  }
  return function (e, t) {
    if ((void 0 === e && (e = {}), i)) throw i;
    for (var o = !1, r = {}, a = 0; a < s.length; a++) {
      var c = s[a],
        l = n[c],
        u = e[c],
        d = l(u, t);
      if (void 0 === d) throw (t && t.type, new Error(ir(14)));
      (r[c] = d), (o = o || d !== u);
    }
    return (o = o || s.length !== Object.keys(e).length) ? r : e;
  };
}
function dr() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return 0 === t.length
    ? function (e) {
        return e;
      }
    : 1 === t.length
      ? t[0]
      : t.reduce(function (e, t) {
          return function () {
            return e(t.apply(void 0, arguments));
          };
        });
}
function hr() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function (e) {
    return function () {
      var n = e.apply(void 0, arguments),
        o = function () {
          throw new Error(ir(15));
        },
        r = {
          getState: n.getState,
          dispatch: function () {
            return o.apply(void 0, arguments);
          },
        },
        i = t.map(function (e) {
          return e(r);
        });
      return (
        (o = dr.apply(void 0, i)(n.dispatch)),
        rr(rr({}, n), {}, { dispatch: o })
      );
    };
  };
}
function fr(e) {
  return function (t) {
    var n = t.dispatch,
      o = t.getState;
    return function (t) {
      return function (r) {
        return "function" == typeof r ? r(n, o, e) : t(r);
      };
    };
  };
}
var pr = fr();
pr.withExtraArgument = fr;
var vr = (function () {
    var e = function (t, n) {
      return (e =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (e, t) {
            e.__proto__ = t;
          }) ||
        function (e, t) {
          for (var n in t)
            Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        })(t, n);
    };
    return function (t, n) {
      if ("function" != typeof n && null !== n)
        throw new TypeError(
          "Class extends value " + String(n) + " is not a constructor or null",
        );
      function o() {
        this.constructor = t;
      }
      e(t, n),
        (t.prototype =
          null === n
            ? Object.create(n)
            : ((o.prototype = n.prototype), new o()));
    };
  })(),
  mr = function (e, t) {
    var n,
      o,
      r,
      i,
      s = {
        label: 0,
        sent: function () {
          if (1 & r[0]) throw r[1];
          return r[1];
        },
        trys: [],
        ops: [],
      };
    return (
      (i = { next: a(0), throw: a(1), return: a(2) }),
      "function" == typeof Symbol &&
        (i[Symbol.iterator] = function () {
          return this;
        }),
      i
    );
    function a(i) {
      return function (a) {
        return (function (i) {
          if (n) throw new TypeError("Generator is already executing.");
          for (; s; )
            try {
              if (
                ((n = 1),
                o &&
                  (r =
                    2 & i[0]
                      ? o.return
                      : i[0]
                        ? o.throw || ((r = o.return) && r.call(o), 0)
                        : o.next) &&
                  !(r = r.call(o, i[1])).done)
              )
                return r;
              switch (((o = 0), r && (i = [2 & i[0], r.value]), i[0])) {
                case 0:
                case 1:
                  r = i;
                  break;
                case 4:
                  return s.label++, { value: i[1], done: !1 };
                case 5:
                  s.label++, (o = i[1]), (i = [0]);
                  continue;
                case 7:
                  (i = s.ops.pop()), s.trys.pop();
                  continue;
                default:
                  if (
                    !((r = s.trys),
                    (r = r.length > 0 && r[r.length - 1]) ||
                      (6 !== i[0] && 2 !== i[0]))
                  ) {
                    s = 0;
                    continue;
                  }
                  if (3 === i[0] && (!r || (i[1] > r[0] && i[1] < r[3]))) {
                    s.label = i[1];
                    break;
                  }
                  if (6 === i[0] && s.label < r[1]) {
                    (s.label = r[1]), (r = i);
                    break;
                  }
                  if (r && s.label < r[2]) {
                    (s.label = r[2]), s.ops.push(i);
                    break;
                  }
                  r[2] && s.ops.pop(), s.trys.pop();
                  continue;
              }
              i = t.call(e, s);
            } catch (a) {
              (i = [6, a]), (o = 0);
            } finally {
              n = r = 0;
            }
          if (5 & i[0]) throw i[1];
          return { value: i[0] ? i[1] : void 0, done: !0 };
        })([i, a]);
      };
    }
  },
  yr = function (e, t) {
    for (var n = 0, o = t.length, r = e.length; n < o; n++, r++) e[r] = t[n];
    return e;
  },
  gr = Object.defineProperty,
  br = Object.defineProperties,
  _r = Object.getOwnPropertyDescriptors,
  wr = Object.getOwnPropertySymbols,
  kr = Object.prototype.hasOwnProperty,
  xr = Object.prototype.propertyIsEnumerable,
  Cr = function (e, t, n) {
    return t in e
      ? gr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  Sr = function (e, t) {
    for (var n in t || (t = {})) kr.call(t, n) && Cr(e, n, t[n]);
    if (wr)
      for (var o = 0, r = wr(t); o < r.length; o++) {
        n = r[o];
        xr.call(t, n) && Cr(e, n, t[n]);
      }
    return e;
  },
  Pr = function (e, t) {
    return br(e, _r(t));
  },
  Er =
    "undefined" != typeof window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (0 !== arguments.length)
            return "object" == typeof arguments[0]
              ? dr
              : dr.apply(null, arguments);
        };
function Or(e, t) {
  function n() {
    for (var n = [], o = 0; o < arguments.length; o++) n[o] = arguments[o];
    if (t) {
      var r = t.apply(void 0, n);
      if (!r) throw new Error("prepareAction did not return an object");
      return Sr(
        Sr({ type: e, payload: r.payload }, "meta" in r && { meta: r.meta }),
        "error" in r && { error: r.error },
      );
    }
    return { type: e, payload: n[0] };
  }
  return (
    (n.toString = function () {
      return "" + e;
    }),
    (n.type = e),
    (n.match = function (t) {
      return t.type === e;
    }),
    n
  );
}
var Mr = (function (e) {
    function t() {
      for (var n = [], o = 0; o < arguments.length; o++) n[o] = arguments[o];
      var r = e.apply(this, n) || this;
      return Object.setPrototypeOf(r, t.prototype), r;
    }
    return (
      vr(t, e),
      Object.defineProperty(t, Symbol.species, {
        get: function () {
          return t;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.concat = function () {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return e.prototype.concat.apply(this, t);
      }),
      (t.prototype.prepend = function () {
        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
        return 1 === e.length && Array.isArray(e[0])
          ? new (t.bind.apply(t, yr([void 0], e[0].concat(this))))()
          : new (t.bind.apply(t, yr([void 0], e.concat(this))))();
      }),
      t
    );
  })(Array),
  jr = (function (e) {
    function t() {
      for (var n = [], o = 0; o < arguments.length; o++) n[o] = arguments[o];
      var r = e.apply(this, n) || this;
      return Object.setPrototypeOf(r, t.prototype), r;
    }
    return (
      vr(t, e),
      Object.defineProperty(t, Symbol.species, {
        get: function () {
          return t;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.concat = function () {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return e.prototype.concat.apply(this, t);
      }),
      (t.prototype.prepend = function () {
        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
        return 1 === e.length && Array.isArray(e[0])
          ? new (t.bind.apply(t, yr([void 0], e[0].concat(this))))()
          : new (t.bind.apply(t, yr([void 0], e.concat(this))))();
      }),
      t
    );
  })(Array);
function Ar(e) {
  return ro(e) ? Jo(e, function () {}) : e;
}
function Dr() {
  return function (e) {
    return (function (e) {
      void 0 === e && (e = {});
      var t = e.thunk,
        n = void 0 === t || t;
      e.immutableCheck, e.serializableCheck, e.actionCreatorCheck;
      var o = new Mr();
      n &&
        ("boolean" == typeof n
          ? o.push(pr)
          : o.push(pr.withExtraArgument(n.extraArgument)));
      return o;
    })(e);
  };
}
function Tr(e) {
  var t,
    n = Dr(),
    o = e,
    r = o.reducer,
    i = void 0 === r ? void 0 : r,
    s = o.middleware,
    a = void 0 === s ? n() : s,
    c = o.devTools,
    l = void 0 === c || c,
    u = o.preloadedState,
    d = void 0 === u ? void 0 : u,
    h = o.enhancers,
    f = void 0 === h ? void 0 : h;
  if ("function" == typeof i) t = i;
  else {
    if (
      !(function (e) {
        if ("object" != typeof e || null === e) return !1;
        var t = Object.getPrototypeOf(e);
        if (null === t) return !0;
        for (var n = t; null !== Object.getPrototypeOf(n); )
          n = Object.getPrototypeOf(n);
        return t === n;
      })(i)
    )
      throw new Error(
        '"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers',
      );
    t = ur(i);
  }
  var p = a;
  "function" == typeof p && (p = p(n));
  var v = hr.apply(void 0, p),
    m = dr;
  l && (m = Er(Sr({ trace: !1 }, "object" == typeof l && l)));
  var y = new jr(v),
    g = y;
  return (
    Array.isArray(f) ? (g = yr([v], f)) : "function" == typeof f && (g = f(y)),
    lr(t, d, m.apply(void 0, g))
  );
}
function Br(e) {
  var t,
    n = {},
    o = [],
    r = {
      addCase: function (e, t) {
        var o = "string" == typeof e ? e : e.type;
        if (!o)
          throw new Error(
            "`builder.addCase` cannot be called with an empty action type",
          );
        if (o in n)
          throw new Error(
            "`builder.addCase` cannot be called with two reducers for the same action type",
          );
        return (n[o] = t), r;
      },
      addMatcher: function (e, t) {
        return o.push({ matcher: e, reducer: t }), r;
      },
      addDefaultCase: function (e) {
        return (t = e), r;
      },
    };
  return e(r), [n, o, t];
}
function zr(e) {
  var t = e.name;
  if (!t) throw new Error("`name` is a required option for createSlice");
  var n,
    o =
      "function" == typeof e.initialState ? e.initialState : Ar(e.initialState),
    r = e.reducers || {},
    i = Object.keys(r),
    s = {},
    a = {},
    c = {};
  function l() {
    var t =
        "function" == typeof e.extraReducers
          ? Br(e.extraReducers)
          : [e.extraReducers],
      n = t[0],
      r = void 0 === n ? {} : n,
      i = t[1],
      s = void 0 === i ? [] : i,
      c = t[2],
      l = void 0 === c ? void 0 : c,
      u = Sr(Sr({}, r), a);
    return (function (e, t, n, o) {
      void 0 === n && (n = []);
      var r,
        i = "function" == typeof t ? Br(t) : [t, n, o],
        s = i[0],
        a = i[1],
        c = i[2];
      if ("function" == typeof e)
        r = function () {
          return Ar(e());
        };
      else {
        var l = Ar(e);
        r = function () {
          return l;
        };
      }
      function u(e, t) {
        void 0 === e && (e = r());
        var n = yr(
          [s[t.type]],
          a
            .filter(function (e) {
              return (0, e.matcher)(t);
            })
            .map(function (e) {
              return e.reducer;
            }),
        );
        return (
          0 ===
            n.filter(function (e) {
              return !!e;
            }).length && (n = [c]),
          n.reduce(function (e, n) {
            if (n) {
              var o;
              if (oo(e)) return void 0 === (o = n(e, t)) ? e : o;
              if (ro(e))
                return Jo(e, function (e) {
                  return n(e, t);
                });
              if (void 0 === (o = n(e, t))) {
                if (null === e) return e;
                throw Error(
                  "A case reducer on a non-draftable value must not return undefined",
                );
              }
              return o;
            }
            return e;
          }, e)
        );
      }
      return (u.getInitialState = r), u;
    })(o, function (e) {
      for (var t in u) e.addCase(t, u[t]);
      for (var n = 0, o = s; n < o.length; n++) {
        var r = o[n];
        e.addMatcher(r.matcher, r.reducer);
      }
      l && e.addDefaultCase(l);
    });
  }
  return (
    i.forEach(function (e) {
      var n,
        o,
        i = r[e],
        l = t + "/" + e;
      "reducer" in i ? ((n = i.reducer), (o = i.prepare)) : (n = i),
        (s[e] = n),
        (a[l] = n),
        (c[e] = o ? Or(l, o) : Or(l));
    }),
    {
      name: t,
      reducer: function (e, t) {
        return n || (n = l()), n(e, t);
      },
      actions: c,
      caseReducers: s,
      getInitialState: function () {
        return n || (n = l()), n.getInitialState();
      },
    }
  );
}
var Lr = ["name", "message", "stack", "code"],
  Rr = (function () {
    return function (e, t) {
      (this.payload = e), (this.meta = t);
    };
  })(),
  Ir = (function () {
    return function (e, t) {
      (this.payload = e), (this.meta = t);
    };
  })(),
  Nr = function (e) {
    if ("object" == typeof e && null !== e) {
      for (var t = {}, n = 0, o = Lr; n < o.length; n++) {
        var r = o[n];
        "string" == typeof e[r] && (t[r] = e[r]);
      }
      return t;
    }
    return { message: String(e) };
  };
function Ur(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload;
  if (e.error) throw e.error;
  return e.payload;
}
!(function () {
  function e(e, t, n) {
    var o = Or(e + "/fulfilled", function (e, t, n, o) {
        return {
          payload: e,
          meta: Pr(Sr({}, o || {}), {
            arg: n,
            requestId: t,
            requestStatus: "fulfilled",
          }),
        };
      }),
      r = Or(e + "/pending", function (e, t, n) {
        return {
          payload: void 0,
          meta: Pr(Sr({}, n || {}), {
            arg: t,
            requestId: e,
            requestStatus: "pending",
          }),
        };
      }),
      i = Or(e + "/rejected", function (e, t, o, r, i) {
        return {
          payload: r,
          error: ((n && n.serializeError) || Nr)(e || "Rejected"),
          meta: Pr(Sr({}, i || {}), {
            arg: o,
            requestId: t,
            rejectedWithValue: !!r,
            requestStatus: "rejected",
            aborted: "AbortError" === (null == e ? void 0 : e.name),
            condition: "ConditionError" === (null == e ? void 0 : e.name),
          }),
        };
      }),
      s =
        "undefined" != typeof AbortController
          ? AbortController
          : (function () {
              function e() {
                this.signal = {
                  aborted: !1,
                  addEventListener: function () {},
                  dispatchEvent: function () {
                    return !1;
                  },
                  onabort: function () {},
                  removeEventListener: function () {},
                  reason: void 0,
                  throwIfAborted: function () {},
                };
              }
              return (e.prototype.abort = function () {}), e;
            })();
    return Object.assign(
      function (e) {
        return function (a, c, l) {
          var u,
            d = (null == n ? void 0 : n.idGenerator)
              ? n.idGenerator(e)
              : (function (e) {
                  void 0 === e && (e = 21);
                  for (var t = "", n = e; n--; )
                    t +=
                      "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[
                        (64 * Math.random()) | 0
                      ];
                  return t;
                })(),
            h = new s();
          function f(e) {
            (u = e), h.abort();
          }
          var p = (function () {
            return (
              (s = this),
              (p = null),
              (v = function () {
                var s, p, v, m, y, g;
                return mr(this, function (b) {
                  switch (b.label) {
                    case 0:
                      return (
                        b.trys.push([0, 4, , 5]),
                        (m =
                          null == (s = null == n ? void 0 : n.condition)
                            ? void 0
                            : s.call(n, e, { getState: c, extra: l })),
                        null === (_ = m) ||
                        "object" != typeof _ ||
                        "function" != typeof _.then
                          ? [3, 2]
                          : [4, m]
                      );
                    case 1:
                      (m = b.sent()), (b.label = 2);
                    case 2:
                      if (!1 === m || h.signal.aborted)
                        throw {
                          name: "ConditionError",
                          message:
                            "Aborted due to condition callback returning false.",
                        };
                      return (
                        (y = new Promise(function (e, t) {
                          return h.signal.addEventListener(
                            "abort",
                            function () {
                              return t({
                                name: "AbortError",
                                message: u || "Aborted",
                              });
                            },
                          );
                        })),
                        a(
                          r(
                            d,
                            e,
                            null == (p = null == n ? void 0 : n.getPendingMeta)
                              ? void 0
                              : p.call(
                                  n,
                                  { requestId: d, arg: e },
                                  { getState: c, extra: l },
                                ),
                          ),
                        ),
                        [
                          4,
                          Promise.race([
                            y,
                            Promise.resolve(
                              t(e, {
                                dispatch: a,
                                getState: c,
                                extra: l,
                                requestId: d,
                                signal: h.signal,
                                abort: f,
                                rejectWithValue: function (e, t) {
                                  return new Rr(e, t);
                                },
                                fulfillWithValue: function (e, t) {
                                  return new Ir(e, t);
                                },
                              }),
                            ).then(function (t) {
                              if (t instanceof Rr) throw t;
                              return t instanceof Ir
                                ? o(t.payload, d, e, t.meta)
                                : o(t, d, e);
                            }),
                          ]),
                        ]
                      );
                    case 3:
                      return (v = b.sent()), [3, 5];
                    case 4:
                      return (
                        (g = b.sent()),
                        (v =
                          g instanceof Rr
                            ? i(null, d, e, g.payload, g.meta)
                            : i(g, d, e)),
                        [3, 5]
                      );
                    case 5:
                      return (
                        (n &&
                          !n.dispatchConditionRejection &&
                          i.match(v) &&
                          v.meta.condition) ||
                          a(v),
                        [2, v]
                      );
                  }
                  var _;
                });
              }),
              new Promise(function (e, t) {
                var n = function (e) {
                    try {
                      r(v.next(e));
                    } catch (n) {
                      t(n);
                    }
                  },
                  o = function (e) {
                    try {
                      r(v.throw(e));
                    } catch (n) {
                      t(n);
                    }
                  },
                  r = function (t) {
                    return t.done
                      ? e(t.value)
                      : Promise.resolve(t.value).then(n, o);
                  };
                r((v = v.apply(s, p)).next());
              })
            );
            var s, p, v;
          })();
          return Object.assign(p, {
            abort: f,
            requestId: d,
            arg: e,
            unwrap: function () {
              return p.then(Ur);
            },
          });
        };
      },
      { pending: r, rejected: i, fulfilled: o, typePrefix: e },
    );
  }
  e.withTypes = function () {
    return e;
  };
})();
var Kr = "listenerMiddleware";
Or(Kr + "/add"),
  Or(Kr + "/removeAll"),
  Or(Kr + "/remove"),
  "function" == typeof queueMicrotask &&
    queueMicrotask.bind(
      "undefined" != typeof window
        ? window
        : "undefined" != typeof global
          ? global
          : globalThis,
    ),
  (function () {
    function e(e, t) {
      var n = s[e];
      return (
        n
          ? (n.enumerable = t)
          : (s[e] = n =
              {
                configurable: !0,
                enumerable: t,
                get: function () {
                  var t = this[Vo];
                  return Go.get(t, e);
                },
                set: function (t) {
                  var n = this[Vo];
                  Go.set(n, e, t);
                },
              }),
        n
      );
    }
    function t(e) {
      for (var t = e.length - 1; t >= 0; t--) {
        var r = e[t][Vo];
        if (!r.P)
          switch (r.i) {
            case 5:
              o(r) && Ao(r);
              break;
            case 4:
              n(r) && Ao(r);
          }
      }
    }
    function n(e) {
      for (var t = e.t, n = e.k, o = qo(n), r = o.length - 1; r >= 0; r--) {
        var i = o[r];
        if (i !== Vo) {
          var s = t[i];
          if (void 0 === s && !ao(t, i)) return !0;
          var a = n[i],
            c = a && a[Vo];
          if (c ? c.t !== s : !lo(a, s)) return !0;
        }
      }
      var l = !!t[Vo];
      return o.length !== qo(t).length + (l ? 0 : 1);
    }
    function o(e) {
      var t = e.k;
      if (t.length !== e.t.length) return !0;
      var n = Object.getOwnPropertyDescriptor(t, t.length - 1);
      if (n && !n.get) return !0;
      for (var o = 0; o < t.length; o++) if (!t.hasOwnProperty(o)) return !0;
      return !1;
    }
    var r,
      i,
      s = {};
    (i = {
      J: function (t, n) {
        var o = Array.isArray(t),
          r = (function (t, n) {
            if (t) {
              for (var o = Array(n.length), r = 0; r < n.length; r++)
                Object.defineProperty(o, "" + r, e(r, !0));
              return o;
            }
            var i = Xo(n);
            delete i[Vo];
            for (var s = qo(i), a = 0; a < s.length; a++) {
              var c = s[a];
              i[c] = e(c, t || !!i[c].enumerable);
            }
            return Object.create(Object.getPrototypeOf(n), i);
          })(o, t),
          i = {
            i: o ? 5 : 4,
            A: n ? n.A : bo(),
            P: !1,
            I: !1,
            R: {},
            l: n,
            t: t,
            k: r,
            o: null,
            g: !1,
            C: !1,
          };
        return Object.defineProperty(r, Vo, { value: i, writable: !0 }), r;
      },
      S: function (e, n, r) {
        r
          ? oo(n) && n[Vo].A === e && t(e.p)
          : (e.u &&
              (function e(t) {
                if (t && "object" == typeof t) {
                  var n = t[Vo];
                  if (n) {
                    var r = n.t,
                      i = n.k,
                      s = n.R,
                      a = n.i;
                    if (4 === a)
                      io(i, function (t) {
                        t !== Vo &&
                          (void 0 !== r[t] || ao(r, t)
                            ? s[t] || e(i[t])
                            : ((s[t] = !0), Ao(n)));
                      }),
                        io(r, function (e) {
                          void 0 !== i[e] || ao(i, e) || ((s[e] = !1), Ao(n));
                        });
                    else if (5 === a) {
                      if (
                        (o(n) && (Ao(n), (s.length = !0)), i.length < r.length)
                      )
                        for (var c = i.length; c < r.length; c++) s[c] = !1;
                      else for (var l = r.length; l < i.length; l++) s[l] = !0;
                      for (
                        var u = Math.min(i.length, r.length), d = 0;
                        d < u;
                        d++
                      )
                        i.hasOwnProperty(d) || (s[d] = !0),
                          void 0 === s[d] && e(i[d]);
                    }
                  }
                }
              })(e.p[0]),
            t(e.p));
      },
      K: function (e) {
        return 4 === e.i ? n(e) : o(e);
      },
    }),
      $o[(r = "ES5")] || ($o[r] = i);
  })();
const Fr = {
    ru: {
      hello: "ÐŸÑ€Ð¸Ð²ÐµÑ‚",
      hello_guest: "ÐŸÑ€Ð¸Ð²ÐµÑ‚, Ð³Ð¾ÑÑ‚ÑŒ!",
      mobile_controls: "ÐœÐ¾Ð±Ð¸Ð»ÑŒÐ½Ð¾Ðµ ÑƒÐ¿Ñ€Ð°Ð²Ð»ÐµÐ½Ð¸Ðµ",
      mirrored_controls: "ÐžÑ‚Ñ€Ð°Ð·Ð¸Ñ‚ÑŒ ÑƒÐ¿Ñ€Ð°Ð²Ð»ÐµÐ½Ð¸Ðµ",
      scale_controls: "ÐœÐ°ÑÑˆÑ‚Ð°Ð± ÑƒÐ¿Ñ€Ð°Ð²Ð»ÐµÐ½Ð¸Ñ",
      enter_name_of_drive: "Ð’Ð²ÐµÐ´Ð¸Ñ‚Ðµ Ð½Ð°Ð·Ð²Ð°Ð½Ð¸Ðµ Ð´Ð¸ÑÐºÐ°",
      ws_outdated: "ÐÐµÐ¾Ð±Ñ…Ð¾Ð´Ð¸Ð¼Ð¾ Ð¾Ð±Ð½Ð¾Ð²Ð¸Ñ‚ÑŒ DOS Ð‘Ñ€Ð°ÑƒÐ·ÐµÑ€",
      update: "ÐžÐ±Ð½Ð¾Ð²Ð¸Ñ‚ÑŒ",
      preloading_sockdrive: "Ð—Ð°Ð³Ñ€ÑƒÐ·ÐºÐ°",
      filter: "Ð¤Ð¸Ð»ÑŒÑ‚Ñ€",
      add: "Ð”Ð¾Ð±Ð°Ð²Ð¸Ñ‚ÑŒ",
      logout: "Ð’Ñ‹Ð¹Ñ‚Ð¸",
      features: "Ð¤ÑƒÐ½ÐºÑ†Ð¸Ð¸",
      premium: "ÐŸÐ¾Ð´Ð¿Ð¸ÑÐºÐ°",
      buy: "ÐšÑƒÐ¿Ð¸Ñ‚ÑŒ",
      experimental_features:
        "Ð”Ð¾ÑÑ‚ÑƒÐ¿ Ðº ÑÐºÑÐ¿ÐµÑ€Ð¸ÐµÐ½Ñ‚Ð°Ð»ÑŒÐ½Ñ‹Ð¼ Ñ„ÑƒÐ½ÐºÑ†Ð¸ÑÐ¼",
      cloud_saves: "ÐžÐ±Ð»Ð°Ñ‡Ð½Ñ‹Ðµ ÑÐ¾Ñ…Ñ€Ð°Ð½ÐµÐ½Ð¸Ñ",
      writeable_fat32: "FAT32 Ð´Ð¸ÑÐºÐ¸",
      net_no_limits: "Ð’Ñ‹Ð±Ð¾Ñ€ ÑÐµÑ€Ð²ÐµÑ€Ð° Ð´Ð»Ñ ÑÑ‚ÐµÐ²Ð¾Ð¹ Ð¸Ð³Ñ€Ñ‹",
      unlock_options: "Ð”Ð¾ÑÑ‚ÑƒÐ¿ ÐºÐ¾ Ð²ÑÐµÐ¼ Ð½Ð°ÑÑ‚Ñ€Ð¾Ð¹ÐºÐ°Ð¼",
      error: "Ð£Ð¿Ñ... Ð§Ñ‚Ð¾-Ñ‚Ð¾ Ð¿Ð¾ÑˆÐ»Ð¾ Ð½Ðµ Ñ‚Ð°Ðº...",
      consult_logs: "ÐŸÑ€Ð¾Ð²ÐµÑ€ÑŒÑ‚Ðµ Ð»Ð¾Ð³Ð¸ Ð±Ñ€Ð°ÑƒÐ·ÐµÑ€Ð°",
      bundle_loading: "Ð—Ð°Ð³Ñ€ÑƒÐ·ÐºÐ° Ð±Ð°Ð½Ð´Ð»Ð°",
      bundle_config: "Ð§Ñ‚ÐµÐ½Ð¸Ðµ ÐºÐ¾Ð½Ñ„Ð¸Ð³ÑƒÑ€Ð°Ñ†Ð¸Ð¸",
      try_free: "Ð´Ð½ÐµÐ¹ Ð±ÐµÑÐ¿Ð»Ð°Ñ‚Ð½Ð¾",
      upload_file:
        "Ð’Ñ‹Ð±Ð¸Ñ€Ð¸Ñ‚Ðµ Ð°Ñ€Ñ…Ð¸Ð² jsdos/zip Ñ‡Ñ‚Ð¾ Ð±Ñ‹ Ð½Ð°Ñ‡Ð°Ñ‚ÑŒ...",
      emulation_backend: "Ð­Ð¼ÑƒÐ»ÑÑ†Ð¸Ñ",
      render_backend: "Ð ÐµÐ½Ð´ÐµÑ€",
      render_aspect: "Ð¡Ð¾Ð¾Ñ‚Ð½Ð¾ÑˆÐµÐ½Ð¸Ðµ ÑÑ‚Ð¾Ñ€Ð¾Ð½",
      worker: "Ð¤Ð¾Ð½Ð¾Ð²Ñ‹Ð¹ Ð¿Ð¾Ñ‚Ð¾Ðº",
      mouse_sensitivity: "Ð§ÑƒÐ²ÑÑ‚. Ð¼Ñ‹ÑˆÐ¸",
      mouse_lock: "Ð—Ð°Ñ…Ð²Ð°Ñ‚ Ð¼Ñ‹ÑˆÐ¸",
      volume: "Ð“Ñ€Ð¾Ð¼ÐºÐ¾ÑÑ‚ÑŒ",
      pause: "ÐŸÐ°ÑƒÐ·Ð°",
      dosboxconf_template: "dosbox.conf ÑˆÐ°Ð±Ð»Ð¾Ð½:",
      preview: "ÐŸÑ€ÐµÐ²ÑŒÑŽ",
      continue: "ÐŸÑ€Ð¾Ð´Ð¾Ð»Ð¶Ð¸Ñ‚ÑŒ",
      skip: "ÐŸÑ€Ð¾Ð¿ÑƒÑÑ‚Ð¸Ñ‚ÑŒ",
      loading: "Ð—Ð°Ð³Ñ€ÑƒÐ·ÐºÐ°",
      extract_loading: "Ð Ð°ÑÐ¿Ð°ÐºÐ¾Ð²ÐºÐ° Ð°Ñ€Ñ…Ð¸Ð²Ð°",
      extract_long_time:
        "ÐœÐ¾Ð¶ÐµÑ‚ Ð·Ð°Ð½ÑÑ‚ÑŒ Ð´Ð»Ð¸Ñ‚ÐµÐ»ÑŒÐ½Ð¾Ðµ Ð²Ñ€ÐµÐ¼Ñ, Ð¿Ð¾Ð¶Ð°Ð»ÑƒÐ¹ÑÑ‚Ð° Ð¶Ð´Ð¸Ñ‚Ðµ...",
      theme: "Ð¢ÐµÐ¼Ð°",
      create_empty: "Ð¡Ð¾Ð·Ð´Ð°Ñ‚ÑŒ Ð¿ÑƒÑÑ‚Ð¾Ð¹ Ð±Ð°Ð½Ð´Ð»",
      uploading_file: "Ð—Ð°Ð³Ñ€ÑƒÐ·ÐºÐ° Ñ„Ð°Ð¹Ð»Ð°",
      fs_restart:
        "Ð’Ñ‹ Ñ…Ð¾Ñ‚Ð¸Ñ‚Ðµ Ð¿ÐµÑ€ÐµÑÐ¾Ð±Ñ€Ð°Ñ‚ÑŒ Ð±Ð°Ð½Ð´Ð» Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·ÑƒÑ ÑÑ‚Ñƒ FS?",
      please_wait: "ÐŸÐ¾Ð¶Ð°Ð»ÑƒÐ¹ÑÑ‚Ð° Ð¿Ð¾Ð´Ð¾Ð¶Ð´Ð¸Ñ‚Ðµ",
      making_bundle: "Ð¡Ð¾Ð·Ð´Ð°ÐµÐ¼ Ð±Ð°Ð½Ð´Ð»",
      size: "Ð Ð°Ð·Ð¼ÐµÑ€",
      room: "ÐšÐ¾Ð¼Ð°Ð½Ñ‚Ð°",
      server: "Ð¡ÐµÑ€Ð²ÐµÑ€",
      load_by_url: "Ð—Ð°Ð³Ñ€ÑƒÐ·Ð¸Ñ‚ÑŒ Ð¿Ð¾ ÑÑÑ‹Ð»ÐºÐµ",
      enter_url: "Ð’Ð²ÐµÐ´Ð¸Ñ‚Ðµ ÑÑÑ‹Ð»ÐºÑƒ",
      load: "Ð—Ð°Ð³Ñ€ÑƒÐ·Ð¸Ñ‚ÑŒ",
      stored: "Ð¡Ð¾Ñ…Ñ€Ð°Ð½ÐµÐ½Ð½Ñ‹Ðµ",
      delete: "Ð£Ð´Ð°Ð»Ð¸Ñ‚ÑŒ",
      editor: "Ð ÐµÐ´Ð°ÐºÑ‚Ð¾Ñ€",
      download: "Ð¡ÐºÐ°Ñ‡Ð°Ñ‚ÑŒ",
      changes: "Ð¡Ð¾Ñ…Ñ€Ð°Ð½ÐµÐ½Ð¸Ñ",
      loading_saves: "Ð—Ð°Ð³Ñ€ÑƒÐ·ÐºÐ° ÑÐ¾Ñ…Ñ€Ð°Ð½ÐµÐ½Ð¸Ð¹",
      success: "Ð£ÑÐ¿ÐµÑˆÐ½Ð¾",
      success_save: "Ð¡Ð¾Ñ…Ñ€Ð°Ð½ÐµÐ½Ð¾ Ð² Ð¾Ð±Ð»Ð°ÐºÐµ",
      warn_save: "CÐ¾Ñ…Ñ€Ð°Ð½ÐµÐ½Ð¾ Ð² Ð±Ñ€Ð°ÑƒÐ·ÐµÑ€Ðµ (Ð²Ñ‹ Ð½Ðµ Ð²Ð¾ÑˆÐ»Ð¸)",
      unable_to_save: "ÐžÑˆÐ¸Ð±ÐºÐ° Ð·Ð°Ð¿Ð¸ÑÐ¸",
      not_premium: "ÐŸÐ¾Ð´ÐºÐ»ÑŽÑ‡Ð¸Ñ‚ÑŒ Ð¿Ð¾Ð´Ð¿Ð¸ÑÐºÑƒ",
      copy_net_link:
        "ÐžÑ‚Ð¿Ñ€Ð°Ð²ÑŒÑ‚Ðµ ÑÑÑ‹Ð»ÐºÑƒ Ð½Ð° Ð¿Ð¾Ð´ÐºÐ»ÑŽÑ‡ÐµÐ½Ð¸Ðµ",
      copied: "Ð¡ÐºÐ¾Ð¿Ð¸Ñ€Ð¾Ð²Ð°Ð½Ð¾",
      image_rendering: "ÐžÐ±Ñ€Ð°Ð±Ð¾Ñ‚ÐºÐ° Ð¸Ð·Ð¾Ð±Ñ€Ð°Ð¶ÐµÐ½Ð¸Ñ",
      read_only_access:
        "Ð­Ð¼ÑƒÐ»ÑÑ†Ð¸Ñ Win 9x Ð² Ñ€ÐµÐ¶Ð¸Ð¼Ðµ Ñ‚Ð¾Ð»ÑŒÐºÐ¾ Ð´Ð»Ñ Ñ‡Ñ‚ÐµÐ½Ð¸Ñ",
      fix: "Ð˜ÑÐ¿Ñ€Ð°Ð²Ð¸Ñ‚ÑŒ",
      close: "Ð—Ð°ÐºÑ€Ñ‹Ñ‚ÑŒ",
      cancle: "ÐžÑ‚ÐºÐ°Ð·Ð°Ñ‚ÑŒÑÑ",
      manage: "Ð£Ð¿Ñ€Ð°Ð²Ð»ÑÑ‚ÑŒ",
      unable_to_cancle_subscription:
        "ÐÐµ ÑƒÐ´Ð°Ð»Ð¾ÑÑŒ Ð¾Ñ‚Ð¼ÐµÐ½Ð¸Ñ‚ÑŒ Ð¿Ð¾Ð´Ð¿Ð¸ÑÐºÑƒ",
      subscription_cancelled: "ÐŸÐ¾Ð´Ð¿Ð¸ÑÐºÐ° Ð¾Ñ‚Ð¼ÐµÐ½ÐµÐ½Ð°",
      hardware: "ÐÐ¿Ð¿Ð°Ñ€Ð°Ñ‚Ð½Ð¾Ðµ ÑƒÑÐºÐ¾Ñ€ÐµÐ½Ð¸Ðµ",
      net_drives: "Ð¡ÐµÑ‚ÐµÐ²Ñ‹Ðµ Ð´Ð¸ÑÐºÐ¸",
      fat_write: "FAT Ð·Ð°Ð¿Ð¸ÑÑŒ",
      play: "Ð—Ð°Ð¿ÑƒÑÑ‚Ð¸Ñ‚ÑŒ",
      system_cursor: "Ð¡Ð¸ÑÑ‚ÐµÐ¼Ð½Ñ‹Ð¹ ÐºÑƒÑ€ÑÐ¾Ñ€",
      no_cloud_access: "Ð’Ð²ÐµÐ´Ð¸Ñ‚Ðµ",
      no_cloud_access2:
        "Ñ‡Ñ‚Ð¾ Ð±Ñ‹ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÑŒ Ð¾Ð±Ð»Ð°Ñ‡Ð½Ð¾Ðµ Ñ…Ñ€Ð°Ð½Ð¸Ð»Ð¸Ñ‰Ðµ",
      key: "Ð’Ð°Ñˆ ÐºÐ»ÑŽÑ‡",
      sockdrive_native: "Native drives",
    },
    en: {
      hello: "Hello",
      hello_guest: "Hello, guest!",
      play: "Start",
      system_cursor: "System cursor",
      mobile_controls: "Mobile controls",
      mirrored_controls: "Mirror controls",
      scale_controls: "Scale controls",
      enter_name_of_drive: "Enter name of drive",
      ws_outdated: "Must update DOS Browser App",
      update: "Update",
      preloading_sockdrive: "Loading",
      filter: "Filter",
      add: "Add",
      logout: "Logout",
      features: "Features",
      premium: "Subscription",
      buy: "Buy",
      experimental_features: "Access to all experimental features",
      cloud_saves: "Cloud saves",
      writeable_fat32: "Writable FAT32",
      net_no_limits: "Change the network region",
      unlock_options: "Unlock all configuration options",
      error: "Oops... Something went wrong...",
      consult_logs: "Please check browser logs",
      bundle_loading: "Bundle loading",
      bundle_config: "Reading config",
      try_free: "days for free",
      upload_file: "Select jsdos/zip file to start...",
      emulation_backend: "Emulation",
      render_backend: "Render",
      render_aspect: "Aspect",
      worker: "Worker thread",
      mouse_sensitivity: "Mouse sens...",
      mouse_lock: "Capture mouse",
      volume: "Volume",
      pause: "Pause",
      dosboxconf_template: "dosbox.conf template:",
      preview: "Preview",
      continue: "Continue",
      skip: "Skip",
      loading: "Loading",
      extract_loading: "Unpacking archive",
      extract_long_time: "Can take long time, please be patient...",
      theme: "Theme",
      create_empty: "Create empty bundle",
      uploading_file: "Uploading file",
      fs_restart: "Do you want to rebuild the bundle using this fs?",
      please_wait: "Please wait",
      making_bundle: "Creating bundle",
      size: "Size",
      room: "Room",
      server: "Server",
      load_by_url: "Load by url",
      enter_url: "Enter url",
      load: "Load",
      stored: "Stored",
      delete: "Delete",
      editor: "Editor",
      download: "Download",
      changes: "Saves",
      loading_saves: "Loading saves",
      success: "Success",
      success_save: "Saved in cloud",
      warn_save: "Saved in browser (you are not logged)",
      unable_to_save: "Unable to save",
      not_premium: "Subscribe",
      copy_net_link: "Share this link to connect",
      copied: "Copied",
      image_rendering: "Image rendering",
      read_only_access: "Win 9x emulation is in READ ONLY mode",
      fix: "Fix",
      close: "Close",
      cancle: "Cancle",
      manage: "Manage",
      unable_to_cancle_subscription: "Unable to cancle subscription",
      subscription_cancelled: "Subscription cancelled",
      hardware: "Hardware acceleration",
      net_drives: "Net drives",
      fat_write: "Writeable FAT",
      no_cloud_access: "Please enter",
      no_cloud_access2: "to use cloud storage",
      key: "your key",
      sockdrive_native: "Native drives",
    },
    pt: {
      hello: "OlÃ¡",
      hello_guest: "OlÃ¡, convidado!",
      play: "Iniciar",
      system_cursor: "Cursor do sistema",
      mobile_controls: "Controles mÃ³veis",
      mirrored_controls: "Controles espelhados",
      scale_controls: "Escalar controles",
      enter_name_of_drive: "Digite o nome da unidade",
      ws_outdated: "VocÃª precisa atualizar o aplicativo DOS Browser",
      update: "Atualizar",
      preloading_sockdrive: "Carregando",
      filter: "Filtrar",
      add: "Adicionar",
      logout: "Sair",
      features: "Recursos",
      premium: "Assinatura",
      buy: "Comprar",
      experimental_features: "Acesso a todos os recursos experimentais",
      cloud_saves: "Salvamentos em nuvem",
      writeable_fat32: "FAT32 gravÃ¡vel",
      net_no_limits: "Alterar a regiÃ£o da rede",
      unlock_options: "Desbloquear todas as opÃ§Ãµes de configuraÃ§Ã£o",
      error: "Oops... Algo deu errado...",
      consult_logs: "Por favor, verifique os logs do navegador",
      bundle_loading: "Carregando pacote",
      bundle_config: "Lendo configuraÃ§Ã£o",
      try_free: "dias grÃ¡tis",
      upload_file: "Selecione um arquivo jsdos/zip para iniciar...",
      emulation_backend: "Emulador",
      render_backend: "RenderizaÃ§Ã£o",
      render_aspect: "Aspecto",
      worker: "Thread de trabalho",
      mouse_sensitivity: "Sensibilidade do mouse...",
      mouse_lock: "Capturar mouse",
      volume: "Volume",
      pause: "Pausar",
      dosboxconf_template: "Modelo dosbox.conf:",
      preview: "PrÃ©-visualizar",
      continue: "Continuar",
      skip: "Pular",
      loading: "Carregando",
      extract_loading: "Extraindo arquivo",
      extract_long_time: "Pode levar algum tempo, por favor, seja paciente...",
      theme: "Tema",
      create_empty: "Criar pacote vazio",
      uploading_file: "Enviando arquivo",
      fs_restart:
        "VocÃª deseja reconstruir o pacote usando este sistema de arquivos?",
      please_wait: "Por favor, aguarde",
      making_bundle: "Criando pacote",
      size: "Tamanho",
      room: "Sala",
      server: "Servidor",
      load_by_url: "Carregar por URL",
      enter_url: "Digite a URL",
      load: "Carregar",
      stored: "Armazenado",
      delete: "Excluir",
      editor: "Editor",
      download: "Download",
      changes: "Salvamentos",
      loading_saves: "Carregando salvamentos",
      success: "Sucesso",
      success_save: "Salvo na nuvem",
      warn_save: "Salvo no navegador (vocÃª nÃ£o estÃ¡ conectado)",
      unable_to_save: "NÃ£o foi possÃ­vel salvar",
      not_premium: "Assine",
      copy_net_link: "Compartilhe este link para se conectar",
      copied: "Copiado",
      image_rendering: "RenderizaÃ§Ã£o de imagem",
      read_only_access: "A emulaÃ§Ã£o do Win 9x estÃ¡ no modo SOMENTE LEITURA",
      fix: "Corrigir",
      close: "Fechar",
      cancle: "Cancelar",
      manage: "Gerenciar",
      unable_to_cancle_subscription: "NÃ£o foi possÃ­vel cancelar a assinatura",
      subscription_cancelled: "Assinatura cancelada",
      hardware: "AceleraÃ§Ã£o de hardware",
      net_drives: "Unidades de rede",
      fat_write: "FAT gravÃ¡vel",
      no_cloud_access: "Por favor, insira",
      no_cloud_access2: "para usar o armazenamento em nuvem",
      key: "sua chave",
      sockdrive_native: "Unidades nativas",
    },
  },
  Hr = navigator.language.startsWith("ru")
    ? "ru"
    : navigator.language.startsWith("pt")
      ? "pt"
      : "en",
  Vr = zr({
    name: "i18n",
    initialState: { lang: Hr, keys: Fr[Hr] },
    reducers: {
      setLang: (e, t) => {
        (e.lang = t.payload), (e.keys = Fr[t.payload]);
      },
    },
  });
function Wr() {
  const e = on((e) => e.i18n.keys);
  return (t) => e[t] ?? t;
}
const qr = [
    {
      name: "7.xx",
      backend: "dosbox",
      contents:
        "[sdl]\nautolock=false\n\nfullscreen=false\nfulldouble=false\nfullresolution=original\nwindowresolution=original\noutput=surface\nsensitivity=100\nwaitonerror=true\npriority=higher,normal\nmapperfile=mapper-jsdos.map\nusescancodes=true\nvsync=false\n[dosbox]\nmachine=svga_s3\n\nlanguage=\ncaptures=capture\nmemsize=16\n[cpu]\ncore=auto\ncputype=auto\ncycles=auto\n\ncycleup=10\ncycledown=20\n[mixer]\nnosound=false\nrate=44100\n\nblocksize=1024\nprebuffer=20\n\n[render]\n# frameskip: How many frames DOSBox skips before drawing one.\n#    aspect: Do aspect correction, if your output method doesn't support scaling this can slow things down!.\n#    scaler: Scaler used to enlarge/enhance low resolution modes.\n#              If 'forced' is appended, then the scaler will be used even if the result might not be desired.\n#            Possible values: none, normal2x, normal3x, advmame2x, advmame3x, advinterp2x, advinterp3x, hq2x, hq3x, 2xsai, super2xsai, supereagle, tv2x, tv3x, rgb2x, rgb3x, scan2x, scan3x.\n\nframeskip=0\naspect=false\nscaler=none\n\n[midi]\n#     mpu401: Type of MPU-401 to emulate.\n#             Possible values: intelligent, uart, none.\n# mididevice: Device that will receive the MIDI data from MPU-401.\n#             Possible values: default, win32, alsa, oss, coreaudio, coremidi, none.\n# midiconfig: Special configuration options for the device driver. This is usually the id of the device you want to use.\n#               See the README/Manual for more details.\n\nmpu401=intelligent\nmididevice=default\nmidiconfig=\n\n[sblaster]\n#  sbtype: Type of Soundblaster to emulate. gb is Gameblaster.\n#          Possible values: sb1, sb2, sbpro1, sbpro2, sb16, gb, none.\n#  sbbase: The IO address of the soundblaster.\n#          Possible values: 220, 240, 260, 280, 2a0, 2c0, 2e0, 300.\n#     irq: The IRQ number of the soundblaster.\n#          Possible values: 7, 5, 3, 9, 10, 11, 12.\n#     dma: The DMA number of the soundblaster.\n#          Possible values: 1, 5, 0, 3, 6, 7.\n#    hdma: The High DMA number of the soundblaster.\n#          Possible values: 1, 5, 0, 3, 6, 7.\n# sbmixer: Allow the soundblaster mixer to modify the DOSBox mixer.\n# oplmode: Type of OPL emulation. On 'auto' the mode is determined by sblaster type. All OPL modes are Adlib-compatible, except for 'cms'.\n#          Possible values: auto, cms, opl2, dualopl2, opl3, none.\n#  oplemu: Provider for the OPL emulation. compat might provide better quality (see oplrate as well).\n#          Possible values: default, compat, fast.\n# oplrate: Sample rate of OPL music emulation. Use 49716 for highest quality (set the mixer rate accordingly).\n#          Possible values: 44100, 49716, 48000, 32000, 22050, 16000, 11025, 8000.\n\nsbtype=sb16\nsbbase=220\nirq=7\ndma=1\nhdma=5\nsbmixer=true\noplmode=auto\noplemu=default\noplrate=44100\n\n[gus]\n#      gus: Enable the Gravis Ultrasound emulation.\n#  gusrate: Sample rate of Ultrasound emulation.\n#           Possible values: 44100, 48000, 32000, 22050, 16000, 11025, 8000, 49716.\n#  gusbase: The IO base address of the Gravis Ultrasound.\n#           Possible values: 240, 220, 260, 280, 2a0, 2c0, 2e0, 300.\n#   gusirq: The IRQ number of the Gravis Ultrasound.\n#           Possible values: 5, 3, 7, 9, 10, 11, 12.\n#   gusdma: The DMA channel of the Gravis Ultrasound.\n#           Possible values: 3, 0, 1, 5, 6, 7.\n# ultradir: Path to Ultrasound directory. In this directory\n#           there should be a MIDI directory that contains\n#           the patch files for GUS playback. Patch sets used\n#           with Timidity should work fine.\n\ngus=false\ngusrate=44100\ngusbase=240\ngusirq=5\ngusdma=3\nultradir=C:\\ULTRASND\n\n[speaker]\n# pcspeaker: Enable PC-Speaker emulation.\n#    pcrate: Sample rate of the PC-Speaker sound generation.\n#            Possible values: 44100, 48000, 32000, 22050, 16000, 11025, 8000, 49716.\n#     tandy: Enable Tandy Sound System emulation. For 'auto', emulation is present only if machine is set to 'tandy'.\n#            Possible values: auto, on, off.\n# tandyrate: Sample rate of the Tandy 3-Voice generation.\n#            Possible values: 44100, 48000, 32000, 22050, 16000, 11025, 8000, 49716.\n#    disney: Enable Disney Sound Source emulation. (Covox Voice Master and Speech Thing compatible).\n\npcspeaker=true\npcrate=44100\ntandy=auto\ntandyrate=44100\ndisney=true\n\n[joystick]\n# joysticktype: Type of joystick to emulate: auto (default), none,\n#               2axis (supports two joysticks),\n#               4axis (supports one joystick, first joystick used),\n#               4axis_2 (supports one joystick, second joystick used),\n#               fcs (Thrustmaster), ch (CH Flightstick).\n#               none disables joystick emulation.\n#               auto chooses emulation depending on real joystick(s).\n#               (Remember to reset dosbox's mapperfile if you saved it earlier)\n#               Possible values: auto, 2axis, 4axis, 4axis_2, fcs, ch, none.\n#        timed: enable timed intervals for axis. Experiment with this option, if your joystick drifts (away).\n#     autofire: continuously fires as long as you keep the button pressed.\n#       swap34: swap the 3rd and the 4th axis. can be useful for certain joysticks.\n#   buttonwrap: enable button wrapping at the number of emulated buttons.\n\njoysticktype=auto\ntimed=true\nautofire=false\nswap34=false\nbuttonwrap=false\n\n[serial]\n# serial1: set type of device connected to com port.\n#          Can be disabled, dummy, modem, nullmodem, directserial.\n#          Additional parameters must be in the same line in the form of\n#          parameter:value. Parameter for all types is irq (optional).\n#          for directserial: realport (required), rxdelay (optional).\n#                           (realport:COM1 realport:ttyS0).\n#          for modem: listenport (optional).\n#          for nullmodem: server, rxdelay, txdelay, telnet, usedtr,\n#                         transparent, port, inhsocket (all optional).\n#          Example: serial1=modem listenport:5000\n#          Possible values: dummy, disabled, modem, nullmodem, directserial.\n# serial2: see serial1\n#          Possible values: dummy, disabled, modem, nullmodem, directserial.\n# serial3: see serial1\n#          Possible values: dummy, disabled, modem, nullmodem, directserial.\n# serial4: see serial1\n#          Possible values: dummy, disabled, modem, nullmodem, directserial.\n\nserial1=dummy\nserial2=dummy\nserial3=disabled\nserial4=disabled\n\n[dos]\n#            xms: Enable XMS support.\n#            ems: Enable EMS support.\n#            umb: Enable UMB support.\n# keyboardlayout: Language code of the keyboard layout (or none).\n\nxms=true\nems=true\numb=true\nkeyboardlayout=auto\n\n[ipx]\n# ipx: Enable ipx over UDP/IP emulation.\n\nipx=true\n[autoexec]\necho off\nmount c .\nc:\n\ntype jsdos~1/readme.txt\necho on\n\n# Generated using https://js-dos.com\n# â–ˆâ–€â–€â–€â–€â–€â–ˆ â–ˆ  â–„â–„â–„â–€â–€â–ˆ â–ˆâ–€â–€â–€â–€â–€â–ˆ\n# â–ˆ â–ˆâ–ˆâ–ˆ â–ˆ â–ˆâ–ˆâ–„ â–ˆ â–€ â–„ â–ˆ â–ˆâ–ˆâ–ˆ â–ˆ\n# â–ˆ â–€â–€â–€ â–ˆ â–„â–ˆâ–ˆ â–€ â–€â–€â–ˆ â–ˆ â–€â–€â–€ â–ˆ\n# â–€â–€â–€â–€â–€â–€â–€ â–€ â–ˆâ–„â–€â–„â–€ â–ˆ â–€â–€â–€â–€â–€â–€â–€\n# â–ˆâ–€â–„â–„â–ˆâ–€â–€â–„â–„ â–€ â–€â–ˆâ–„â–„â–„â–„ â–€â–„â–ˆâ–€â–ˆâ–€\n# â–ˆâ–€ â–€ â–€â–€â–„ â–ˆâ–€ â–„ â–„â–€â–€â–€â–„ â–ˆâ–€â–ˆâ–„\n# â–„ â–„â–„ â–ˆâ–€â–€â–„ â–„â–€â–„â–€â–€â–ˆ  â–€â–€â–„â–€â–€â–ˆâ–€\n#   â–„â–€â–€â–ˆâ–€â–€ â–ˆâ–€â–ˆâ–€â–ˆâ–€â–€â–„ â–€â–ˆâ–ˆâ–€â–ˆâ–„\n# â–€â–€â–€ â–€ â–€ â–ˆâ–„â–ˆ â–€â–ˆâ–„â–„â–ˆâ–€â–€â–€â–ˆâ–€â–€\n# â–ˆâ–€â–€â–€â–€â–€â–ˆ â–„â–„â–„ â–„ â–„ â–ˆ â–€ â–ˆâ–„â–„â–„â–„\n# â–ˆ â–ˆâ–ˆâ–ˆ â–ˆ â–€â–ˆâ–€â–€â–„â–€â–€â–„â–ˆâ–ˆâ–ˆâ–ˆâ–€â–€â–ˆâ–„â–ˆ\n# â–ˆ â–€â–€â–€ â–ˆ â–„â–€â–€â–ˆâ–€â–ˆâ–€â–„ â–€â–€â–„â–„â–ˆâ–„â–ˆ\n# â–€â–€â–€â–€â–€â–€â–€ â–€   â–€â–€ â–€  â–€   â–€â–€â–€\n".replace(
          /\n/g,
          "\r\n",
        ),
    },
    {
      name: "DOS 7.1",
      backend: "dosboxX",
      contents:
        "\n[sdl]\nautolock=false\n\n[dosbox]\ntitle=DOS 7.1\nmemsize=64\n\n[dos]\nver=7.1\nhard drive data rate limit=0\nfloppy drive data rate limit=0\n\n[cpu]\ncputype=pentium_mmx\ncore=auto\n\n[sblaster]\nsbtype=sb16vibra\n\n[render]\nscaler=none\n\n[autoexec]\necho off\nimgmount 2 sockdrive {wss-makevm} system dos7.1-v1\necho Please visit our website:\necho \necho         _                __\necho        (_)____      ____/ /___  _____ _________  ____ ___\necho       / / ___/_____/ __  / __ \\/ ___// ___/ __ \\/ __ `__ \\\necho      / (__  )_____/ /_/ / /_/ (__  )/ /__/ /_/ / / / / / /\necho   __/ /____/      \\__,_/\\____/____(_)___/\\____/_/ /_/ /_/\necho  /___/\necho\necho type 'boot c:' to load DOS 7.1\necho on\n# \n# â–ˆâ–€â–€â–€â–€â–€â–ˆ â–ˆ  â–„â–„â–„â–€â–€â–ˆ â–ˆâ–€â–€â–€â–€â–€â–ˆ\n# â–ˆ â–ˆâ–ˆâ–ˆ â–ˆ â–ˆâ–ˆâ–„ â–ˆ â–€ â–„ â–ˆ â–ˆâ–ˆâ–ˆ â–ˆ\n# â–ˆ â–€â–€â–€ â–ˆ â–„â–ˆâ–ˆ â–€ â–€â–€â–ˆ â–ˆ â–€â–€â–€ â–ˆ\n# â–€â–€â–€â–€â–€â–€â–€ â–€ â–ˆâ–„â–€â–„â–€ â–ˆ â–€â–€â–€â–€â–€â–€â–€\n# â–ˆâ–€â–„â–„â–ˆâ–€â–€â–„â–„ â–€ â–€â–ˆâ–„â–„â–„â–„ â–€â–„â–ˆâ–€â–ˆâ–€\n# â–ˆâ–€ â–€ â–€â–€â–„ â–ˆâ–€ â–„ â–„â–€â–€â–€â–„ â–ˆâ–€â–ˆâ–„\n# â–„ â–„â–„ â–ˆâ–€â–€â–„ â–„â–€â–„â–€â–€â–ˆ  â–€â–€â–„â–€â–€â–ˆâ–€\n#   â–„â–€â–€â–ˆâ–€â–€ â–ˆâ–€â–ˆâ–€â–ˆâ–€â–€â–„ â–€â–ˆâ–ˆâ–€â–ˆâ–„\n# â–€â–€â–€ â–€ â–€ â–ˆâ–„â–ˆ â–€â–ˆâ–„â–„â–ˆâ–€â–€â–€â–ˆâ–€â–€\n# â–ˆâ–€â–€â–€â–€â–€â–ˆ â–„â–„â–„ â–„ â–„ â–ˆ â–€ â–ˆâ–„â–„â–„â–„\n# â–ˆ â–ˆâ–ˆâ–ˆ â–ˆ â–€â–ˆâ–€â–€â–„â–€â–€â–„â–ˆâ–ˆâ–ˆâ–ˆâ–€â–€â–ˆâ–„â–ˆ\n# â–ˆ â–€â–€â–€ â–ˆ â–„â–€â–€â–ˆâ–€â–ˆâ–€â–„ â–€â–€â–„â–„â–ˆâ–„â–ˆ\n# â–€â–€â–€â–€â–€â–€â–€ â–€   â–€â–€ â–€  â–€   â–€â–€â–€\n#\n".replace(
          /\n/g,
          "\r\n",
        ),
    },
    {
      name: "Win 3.11",
      backend: "dosboxX",
      contents:
        "\n[sdl]\nautolock=false\nmouse emulation=integration\n\n[dosbox]\ntitle=Win 3.11\nmemsize=256\n\n[dos]\nhard drive data rate limit=0\nfloppy drive data rate limit=0\n\n[cpu]\ncputype=pentium\ncore=auto\nintegration device=true\n\n[pci]\nvoodoo=false\n\n[sblaster]\nsbtype=sb16vibra\n\n[render]\nscaler=none\n\n[autoexec]\necho off\nimgmount 2 sockdrive {wss-makevm} system win311-v1\necho Please visit our website:\necho \necho         _                __\necho        (_)____      ____/ /___  _____ _________  ____ ___\necho       / / ___/_____/ __  / __ \\/ ___// ___/ __ \\/ __ `__ \\\necho      / (__  )_____/ /_/ / /_/ (__  )/ /__/ /_/ / / / / / /\necho   __/ /____/      \\__,_/\\____/____(_)___/\\____/_/ /_/ /_/\necho  /___/\necho\necho type 'boot c:' to load Win 3.11\necho on\n# \n# â–ˆâ–€â–€â–€â–€â–€â–ˆ â–ˆ  â–„â–„â–„â–€â–€â–ˆ â–ˆâ–€â–€â–€â–€â–€â–ˆ\n# â–ˆ â–ˆâ–ˆâ–ˆ â–ˆ â–ˆâ–ˆâ–„ â–ˆ â–€ â–„ â–ˆ â–ˆâ–ˆâ–ˆ â–ˆ\n# â–ˆ â–€â–€â–€ â–ˆ â–„â–ˆâ–ˆ â–€ â–€â–€â–ˆ â–ˆ â–€â–€â–€ â–ˆ\n# â–€â–€â–€â–€â–€â–€â–€ â–€ â–ˆâ–„â–€â–„â–€ â–ˆ â–€â–€â–€â–€â–€â–€â–€\n# â–ˆâ–€â–„â–„â–ˆâ–€â–€â–„â–„ â–€ â–€â–ˆâ–„â–„â–„â–„ â–€â–„â–ˆâ–€â–ˆâ–€\n# â–ˆâ–€ â–€ â–€â–€â–„ â–ˆâ–€ â–„ â–„â–€â–€â–€â–„ â–ˆâ–€â–ˆâ–„\n# â–„ â–„â–„ â–ˆâ–€â–€â–„ â–„â–€â–„â–€â–€â–ˆ  â–€â–€â–„â–€â–€â–ˆâ–€\n#   â–„â–€â–€â–ˆâ–€â–€ â–ˆâ–€â–ˆâ–€â–ˆâ–€â–€â–„ â–€â–ˆâ–ˆâ–€â–ˆâ–„\n# â–€â–€â–€ â–€ â–€ â–ˆâ–„â–ˆ â–€â–ˆâ–„â–„â–ˆâ–€â–€â–€â–ˆâ–€â–€\n# â–ˆâ–€â–€â–€â–€â–€â–ˆ â–„â–„â–„ â–„ â–„ â–ˆ â–€ â–ˆâ–„â–„â–„â–„\n# â–ˆ â–ˆâ–ˆâ–ˆ â–ˆ â–€â–ˆâ–€â–€â–„â–€â–€â–„â–ˆâ–ˆâ–ˆâ–ˆâ–€â–€â–ˆâ–„â–ˆ\n# â–ˆ â–€â–€â–€ â–ˆ â–„â–€â–€â–ˆâ–€â–ˆâ–€â–„ â–€â–€â–„â–„â–ˆâ–„â–ˆ\n# â–€â–€â–€â–€â–€â–€â–€ â–€   â–€â–€ â–€  â–€   â–€â–€â–€\n#\n".replace(
          /\n/g,
          "\r\n",
        ),
    },
    {
      name: "Win 95",
      backend: "dosboxX",
      contents:
        "\n[sdl]\nautolock=false\nmouse_emulation=integration\n\n[dosbox]\ntitle=Windows 95\nmemsize=128\n\n[video]\nvmemsize=8\nvesa modelist width limit=0\nvesa modelist height limit=0\n\n[dos]\nver=7.1\nhard drive data rate limit=0\nfloppy drive data rate limit=0\n\n[cpu]\ncputype=pentium_mmx\ncore=auto\nintegration device=true\n\n[sblaster]\nsbtype=sb16vibra\n\n[fdc, primary]\nint13fakev86io=true\n\n[ide, primary]\nint13fakeio=true\nint13fakev86io=true\n\n[ide, secondary]\nint13fakeio=true\nint13fakev86io=true\ncd-rom insertion delay=4000\n\n[render]\nscaler=none\n\n[autoexec]\necho off\nimgmount 2 sockdrive {wss-makevm} system win95-v2\necho Please visit our website:\necho \necho         _                __\necho        (_)____      ____/ /___  _____ _________  ____ ___\necho       / / ___/_____/ __  / __ \\/ ___// ___/ __ \\/ __ `__ \\\necho      / (__  )_____/ /_/ / /_/ (__  )/ /__/ /_/ / / / / / /\necho   __/ /____/      \\__,_/\\____/____(_)___/\\____/_/ /_/ /_/\necho  /___/\necho\necho type 'boot c:' to load windows 95\necho on\n# \n# â–ˆâ–€â–€â–€â–€â–€â–ˆ â–ˆ  â–„â–„â–„â–€â–€â–ˆ â–ˆâ–€â–€â–€â–€â–€â–ˆ\n# â–ˆ â–ˆâ–ˆâ–ˆ â–ˆ â–ˆâ–ˆâ–„ â–ˆ â–€ â–„ â–ˆ â–ˆâ–ˆâ–ˆ â–ˆ\n# â–ˆ â–€â–€â–€ â–ˆ â–„â–ˆâ–ˆ â–€ â–€â–€â–ˆ â–ˆ â–€â–€â–€ â–ˆ\n# â–€â–€â–€â–€â–€â–€â–€ â–€ â–ˆâ–„â–€â–„â–€ â–ˆ â–€â–€â–€â–€â–€â–€â–€\n# â–ˆâ–€â–„â–„â–ˆâ–€â–€â–„â–„ â–€ â–€â–ˆâ–„â–„â–„â–„ â–€â–„â–ˆâ–€â–ˆâ–€\n# â–ˆâ–€ â–€ â–€â–€â–„ â–ˆâ–€ â–„ â–„â–€â–€â–€â–„ â–ˆâ–€â–ˆâ–„\n# â–„ â–„â–„ â–ˆâ–€â–€â–„ â–„â–€â–„â–€â–€â–ˆ  â–€â–€â–„â–€â–€â–ˆâ–€\n#   â–„â–€â–€â–ˆâ–€â–€ â–ˆâ–€â–ˆâ–€â–ˆâ–€â–€â–„ â–€â–ˆâ–ˆâ–€â–ˆâ–„\n# â–€â–€â–€ â–€ â–€ â–ˆâ–„â–ˆ â–€â–ˆâ–„â–„â–ˆâ–€â–€â–€â–ˆâ–€â–€\n# â–ˆâ–€â–€â–€â–€â–€â–ˆ â–„â–„â–„ â–„ â–„ â–ˆ â–€ â–ˆâ–„â–„â–„â–„\n# â–ˆ â–ˆâ–ˆâ–ˆ â–ˆ â–€â–ˆâ–€â–€â–„â–€â–€â–„â–ˆâ–ˆâ–ˆâ–ˆâ–€â–€â–ˆâ–„â–ˆ\n# â–ˆ â–€â–€â–€ â–ˆ â–„â–€â–€â–ˆâ–€â–ˆâ–€â–„ â–€â–€â–„â–„â–ˆâ–„â–ˆ\n# â–€â–€â–€â–€â–€â–€â–€ â–€   â–€â–€ â–€  â–€   â–€â–€â–€\n#\n".replace(
          /\n/g,
          "\r\n",
        ),
    },
    {
      name: "Win 98",
      backend: "dosboxX",
      contents:
        "\n[sdl]\nautolock=false\nmouse_emulation=integration\n\n[dosbox]\ntitle=Windows 98\nmemsize=128\n\n[video]\nvmemsize=8\nvesa modelist width limit=0\nvesa modelist height limit=0\n\n[dos]\nver=7.1\nhard drive data rate limit=0\nfloppy drive data rate limit=0\n\n[cpu]\ncputype=pentium_mmx\ncore=auto\nintegration device=true\n\n[sblaster]\nsbtype=sb16vibra\n\n[fdc, primary]\nint13fakev86io=true\n\n[ide, primary]\nint13fakeio=true\nint13fakev86io=true\n\n[ide, secondary]\nint13fakeio=true\nint13fakev86io=true\ncd-rom insertion delay=4000\n\n[render]\nscaler=none\n\n[autoexec]\necho off\nimgmount 2 sockdrive {wss-makevm} system win98-v1\necho Please visit our website:\necho \necho         _                __\necho        (_)____      ____/ /___  _____ _________  ____ ___\necho       / / ___/_____/ __  / __ \\/ ___// ___/ __ \\/ __ `__ \\\necho      / (__  )_____/ /_/ / /_/ (__  )/ /__/ /_/ / / / / / /\necho   __/ /____/      \\__,_/\\____/____(_)___/\\____/_/ /_/ /_/\necho  /___/\necho\necho type 'boot c:' to load windows 98\necho on\n# \n# â–ˆâ–€â–€â–€â–€â–€â–ˆ â–ˆ  â–„â–„â–„â–€â–€â–ˆ â–ˆâ–€â–€â–€â–€â–€â–ˆ\n# â–ˆ â–ˆâ–ˆâ–ˆ â–ˆ â–ˆâ–ˆâ–„ â–ˆ â–€ â–„ â–ˆ â–ˆâ–ˆâ–ˆ â–ˆ\n# â–ˆ â–€â–€â–€ â–ˆ â–„â–ˆâ–ˆ â–€ â–€â–€â–ˆ â–ˆ â–€â–€â–€ â–ˆ\n# â–€â–€â–€â–€â–€â–€â–€ â–€ â–ˆâ–„â–€â–„â–€ â–ˆ â–€â–€â–€â–€â–€â–€â–€\n# â–ˆâ–€â–„â–„â–ˆâ–€â–€â–„â–„ â–€ â–€â–ˆâ–„â–„â–„â–„ â–€â–„â–ˆâ–€â–ˆâ–€\n# â–ˆâ–€ â–€ â–€â–€â–„ â–ˆâ–€ â–„ â–„â–€â–€â–€â–„ â–ˆâ–€â–ˆâ–„\n# â–„ â–„â–„ â–ˆâ–€â–€â–„ â–„â–€â–„â–€â–€â–ˆ  â–€â–€â–„â–€â–€â–ˆâ–€\n#   â–„â–€â–€â–ˆâ–€â–€ â–ˆâ–€â–ˆâ–€â–ˆâ–€â–€â–„ â–€â–ˆâ–ˆâ–€â–ˆâ–„\n# â–€â–€â–€ â–€ â–€ â–ˆâ–„â–ˆ â–€â–ˆâ–„â–„â–ˆâ–€â–€â–€â–ˆâ–€â–€\n# â–ˆâ–€â–€â–€â–€â–€â–ˆ â–„â–„â–„ â–„ â–„ â–ˆ â–€ â–ˆâ–„â–„â–„â–„\n# â–ˆ â–ˆâ–ˆâ–ˆ â–ˆ â–€â–ˆâ–€â–€â–„â–€â–€â–„â–ˆâ–ˆâ–ˆâ–ˆâ–€â–€â–ˆâ–„â–ˆ\n# â–ˆ â–€â–€â–€ â–ˆ â–„â–€â–€â–ˆâ–€â–ˆâ–€â–„ â–€â–€â–„â–„â–ˆâ–„â–ˆ\n# â–€â–€â–€â–€â–€â–€â–€ â–€   â–€â–€ â–€  â–€   â–€â–€â–€\n#\n".replace(
          /\n/g,
          "\r\n",
        ),
    },
  ],
  Xr = zr({
    name: "editor",
    initialState: {
      configChanged: !1,
      bundleConfig: null,
      errorMessage: null,
      fs: [],
    },
    reducers: {
      init: (e, t) => {
        null === t.payload
          ? ((e.configChanged = !0),
            (e.bundleConfig = {
              dosboxConf: qr[0].contents,
              jsdosConf: { version: "js-dos-v8" },
            }))
          : ((e.configChanged = !1), (e.bundleConfig = t.payload));
      },
      dosboxConf: (e, t) => {
        (e.configChanged = !0), (e.bundleConfig.dosboxConf = t.payload);
      },
    },
  });
class $r {
  constructor() {
    t(this, "length", 0), t(this, "storage", {});
  }
  setItem(e, t) {
    (this.storage[e] = t), (this.length = Object.keys(this.storage).length);
  }
  getItem(e) {
    const t = this.storage[e];
    return void 0 === t ? null : t;
  }
  removeItem(e) {
    delete this.storage[e], (this.length = Object.keys(this.storage).length);
  }
  key(e) {
    const t = Object.keys(this.storage);
    return void 0 === t[e] ? null : t[e];
  }
  clear() {
    (this.length = 0), (this.storage = {});
  }
}
const Gr = new (class {
    constructor(e, n) {
      t(this, "backend"),
        t(this, "length"),
        t(this, "prefix"),
        (this.prefix = n);
      try {
        (this.backend = e || localStorage), this.testBackend();
      } catch (o) {
        this.backend = new $r();
      }
      (this.length = this.backend.length),
        "function" == typeof this.backend.sync &&
          (this.sync = (e) => {
            this.backend.sync(e);
          });
    }
    testBackend() {
      const e = this.prefix + ".test.record";
      this.backend.setItem(e, "123");
      const t = this.backend.getItem(e);
      this.backend.removeItem(e);
      if (!("123" === t && null === this.backend.getItem(e)))
        throw new Error("Storage backend is not working properly");
    }
    setLocalStoragePrefix(e) {
      this.prefix = e;
    }
    clear() {
      if (!this.backend.length) return;
      const e = [];
      for (let t = 0; t < this.backend.length; ++t) {
        const n = this.backend.key(t);
        n && n.startsWith(this.prefix) && e.push(n);
      }
      for (const t of e) this.backend.removeItem(t);
      this.length = this.backend.length;
    }
    key(e) {
      return this.backend.key(e);
    }
    setItem(e, t) {
      if (!t || void 0 === t.length || 0 === t.length)
        return void this.writeStringToKey(e, "");
      let n = 0;
      for (; n < t.length; ) {
        let o = t.substr(n, 1024);
        (n += o.length),
          n < t.length && (o += "@"),
          this.writeStringToKey(e, o),
          (e += ".");
      }
    }
    getItem(e) {
      let t = this.readStringFromKey(e);
      if (null === t) return null;
      if (0 === t.length) return t;
      for (; "@" === t[t.length - 1]; ) {
        (t = t.substr(0, t.length - 1)), (e += ".");
        const n = this.readStringFromKey(e);
        t += null === n ? "" : n;
      }
      return t;
    }
    removeItem(e) {
      this.backend.removeItem(this.prefix + e),
        (this.length = this.backend.length);
    }
    writeStringToKey(e, t) {
      this.backend.setItem(this.prefix + e, t),
        (this.length = this.backend.length);
    }
    readStringFromKey(e) {
      return this.backend.getItem(this.prefix + e);
    }
  })(void 0, "jsdos.8."),
  Yr = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
  ],
  Zr = zr({
    name: "js-dos v8s",
    initialState: {
      hidden: !1,
      frame: "none",
      frameXs: !1,
      window: "none",
      theme: Gr.getItem("theme") ?? "light",
      editor: !1,
      wideScreen: !0,
      fullScreen: !1,
      toast: null,
      toastIntent: "none",
      toastTimeoutId: 0,
      background: null,
      updateWsWarning: !1,
      cloudSaves: !0,
      autoStart: !1,
      kiosk: !1,
      documentHidden: document.hidden ?? !1,
      noNetworking: !0,
      noCloud: !1,
      warnOnKey: !1,
      warnOnPremium: !1,
      softFullscreen: !1,
    },
    reducers: {
      theme: (e, t) => {
        Gr.setItem("theme", t.payload), (e.theme = t.payload);
      },
      frameNone: (e) => {
        (e.frame = "none"), (e.frameXs = !1);
      },
      frameSettings: (e) => {
        (e.frame = "settings"), (e.frameXs = !1);
      },
      frameNetwork: (e) => {
        (e.frame = "network"), (e.frameXs = !1);
      },
      frameStats: (e) => {
        (e.frame = "stats"), (e.frameXs = !1);
      },
      frameConf: (e) => {
        (e.frame = "editor-conf"), (e.frameXs = !1);
      },
      frameFs: (e) => {
        (e.frame = "editor-fs"), (e.frameXs = !1);
      },
      frameFatDrives: (e) => {
        (e.frame = "fat-drives"), (e.frameXs = !1);
      },
      framePreRun: (e) => {
        (e.frame = "prerun"), (e.frameXs = !1);
      },
      windowSelect: (e) => {
        (e.window = "select"), (e.editor = !0);
      },
      background: (e, t) => {
        e.background = t.payload;
      },
      setEditor: (e, t) => {
        e.editor = t.payload;
      },
      setWideScreen: (e, t) => {
        e.wideScreen = t.payload;
      },
      setFullScreen: (e, t) => {
        e.fullScreen = t.payload;
      },
      showToast: (e, t) => {
        0 !== e.toastTimeoutId && clearInterval(e.toastTimeoutId),
          (e.toast = t.payload.message),
          (e.toastIntent = t.payload.intent ?? "none"),
          "panic" !== t.payload.intent &&
            (e.toastTimeoutId = setTimeout(
              () => {
                t.asyncStore((e) => e.dispatch(Zr.actions.hideToast()));
              },
              t.payload.long ? 5e3 : 1500,
            ));
      },
      hideToast: (e) => {
        (e.toast = null), (e.toastTimeoutId = 0);
      },
      updateWsWarning: (e, t) => {
        e.updateWsWarning = t.payload;
      },
      cloudSaves: (e, t) => {
        e.cloudSaves = t.payload;
      },
      autoStart: (e, t) => {
        e.autoStart = t.payload;
      },
      kiosk: (e, t) => {
        e.kiosk = t.payload;
      },
      documentHidden: (e, t) => {
        e.documentHidden = t.payload;
      },
      noNetworking: (e, t) => {
        e.noNetworking = t.payload;
      },
      noCloud: (e, t) => {
        e.noCloud = t.payload;
      },
      hidden: (e, t) => {
        e.hidden = t.payload;
      },
      warnOnKey: (e, t) => {
        (e.warnOnKey = t.payload), (e.frame = "none");
      },
      warnOnPremium: (e, t) => {
        (e.warnOnKey = t.payload), (e.frame = "none");
      },
      softFullscreen: (e, t) => {
        e.softFullscreen = t.payload;
      },
    },
    extraReducers: (e) => {
      e.addCase(Or("dos/bndLoad"), (e, t) => {
        e.window = "loading";
      })
        .addCase(Or("editor/extract"), (e, t) => {
          e.window = "loading";
        })
        .addCase(Or("editor/ready"), (e, t) => {
          e.window = "prerun";
        })
        .addCase(Or("dos/bndReady"), (e, t) => {
          e.autoStart
            ? t.asyncStore((e) => {
                e.dispatch(Ci.actions.bndPlay({}));
              })
            : (e.window = "prerun");
        })
        .addCase(Or("dos/bndPlay"), (e, t) => {
          (e.window = "run"), (e.frame = "none");
        })
        .addMatcher(
          (e) => e.type.startsWith("dos/") && e.type.endsWith("Error"),
          (e, t) => {
            e.window = "error";
          },
        );
    },
  }),
  Qr = "https://d5dn8hh4ivlobv6682ep.apigw.yandexcloud.net",
  Jr = Qr + "/presign-put",
  ei = Qr + "/token/get",
  ti = "cached.jsdos.account",
  ni = zr({
    name: "auth",
    initialState: {
      account: (() => {
        const e = Gr.getItem(ti);
        if (e) {
          const t = JSON.parse(e);
          if (t.email && t.email.length > 0 && t.token && 5 === t.token.length)
            return t;
        }
        return null;
      })(),
    },
    reducers: {
      setAccount: (e, t) => {
        const n = t.payload;
        null !== n
          ? (Gr.setItem(ti, JSON.stringify(n)),
            t.asyncStore((e) => {
              "dz.caiiiycuk@gmail.com" === n.email &&
                e.dispatch(Ci.actions.setSockdriveWrite(!1));
            }))
          : Gr.removeItem(ti),
          (e.account = n);
      },
    },
  });
async function oi(e) {
  if (!e || 5 !== e.length) return { token: e, account: null };
  for (let n = 0; n < e.length; ++n) {
    const t = e.charCodeAt(n);
    if (!(t > 96 && t < 123)) return { token: e, account: null };
  }
  const t = await (await fetch(ei + "?id=" + e)).json();
  return delete t.success, { token: e, account: t.email ? t : null };
}
const ri = zr({
  name: "storage",
  initialState: { recived: 0, total: 0, ready: !1 },
  reducers: {
    reset: (e) => {
      (e.recived = -1), (e.total = 0), (e.ready = !1);
    },
    progress: (e, t) => {
      (e.recived = t.payload[0]), (e.total = t.payload[1]);
    },
    ready: (e) => {
      e.ready = !0;
    },
  },
});
class ii {
  constructor() {
    t(this, "owner", "");
  }
  close() {}
  put(e, t) {
    return Promise.resolve();
  }
  get(e, t) {
    return void 0 !== t
      ? Promise.resolve(t)
      : Promise.reject(new Error("Cache is not supported on this host"));
  }
  del(e) {
    return Promise.resolve();
  }
  keys() {
    return Promise.resolve([]);
  }
  forEach(e) {
    return Promise.resolve();
  }
}
class si {
  constructor(e, n, o) {
    if (
      (t(this, "owner"),
      t(this, "storeName", "files"),
      t(this, "indexedDB"),
      t(this, "db", null),
      (this.owner = e),
      (this.indexedDB =
        "undefined" == typeof window
          ? void 0
          : window.indexedDB ||
            window.mozIndexedDB ||
            window.webkitIndexedDB ||
            window.msIndexedDB),
      this.indexedDB)
    )
      try {
        const t = this.indexedDB.open("js-dos-cache (" + e + ")", 1);
        (t.onerror = (e) => {
          var n;
          o(
            "Can't open cache database: " +
              (null == (n = t.error) ? void 0 : n.message),
          );
        }),
          (t.onsuccess = (e) => {
            (this.db = t.result), n(this);
          }),
          (t.onupgradeneeded = (e) => {
            try {
              (this.db = t.result),
                (this.db.onerror = (e) => {
                  o("Can't upgrade cache database");
                });
              this.db
                .createObjectStore(this.storeName)
                .createIndex("key", "", { unique: !0, multiEntry: !1 });
            } catch (n) {
              o("Can't upgrade cache database");
            }
          });
      } catch (r) {
        o("Can't open cache database: " + r.message);
      }
    else o("Indexed db is not supported on this host");
  }
  async resultToUint8Array(e) {
    return e instanceof Blob
      ? new Uint8Array(await e.arrayBuffer())
      : new Uint8Array(e);
  }
  close() {
    null !== this.db && (this.db.close(), (this.db = null));
  }
  put(e, t) {
    return new Promise((n, o) => {
      if (null === this.db) return void n();
      const r = this.db
        .transaction(this.storeName, "readwrite")
        .objectStore(this.storeName)
        .put(new Blob([t.buffer]), e);
      (r.onerror = (t) => {
        o(new Error("Can't put key '" + e + "'")), console.error(t);
      }),
        (r.onsuccess = () => n());
    });
  }
  del(e) {
    return new Promise((t, n) => {
      if (null === this.db) return void t();
      const o = this.db
        .transaction(this.storeName, "readwrite")
        .objectStore(this.storeName)
        .delete(e);
      (o.onerror = () => n), (o.onsuccess = () => t());
    });
  }
  get(e, t) {
    return new Promise((n, o) => {
      function r(e) {
        void 0 === t ? o(new Error(e)) : n(t);
      }
      if (null === this.db) return void r("db is not initalized");
      const i = this.db
        .transaction(this.storeName, "readonly")
        .objectStore(this.storeName)
        .get(e);
      (i.onerror = () => o(new Error("Can't read value for key '" + e + "'"))),
        (i.onsuccess = () => {
          i.result
            ? n(this.resultToUint8Array(i.result))
            : r("Result is empty for key '" + e + "', result: " + i.result);
        });
    });
  }
  keys() {
    return new Promise((e, t) => {
      if (null === this.db) return void e([]);
      const n = this.db
        .transaction(this.storeName, "readonly")
        .objectStore(this.storeName)
        .getAllKeys();
      (n.onerror = t),
        (n.onsuccess = (t) => {
          n.result ? e(n.result) : e([]);
        });
    });
  }
  async forEach(e) {
    const t = await this.keys();
    for (const n of t) {
      const t = await this.get(n);
      t && e(n, t);
    }
  }
}
const ai = ["localhost", "js-dos"],
  ci = {
    "js-dos": {
      sockdriveEndpoint: "https://sockdrive.js-dos.com:8001",
      sockdriveWssEndpoint: "wss://sockdrive.js-dos.com:8001",
    },
    localhost: {
      sockdriveEndpoint: "http://localhost:8001",
      sockdriveWssEndpoint: "ws://localhost:8001",
    },
  };
let li = -1;
function ui() {
  return (
    (li += 1),
    {
      storeUid: li,
      slice: zr({
        name: "init",
        initialState: {
          uid: li,
          sockdriveBackendName:
            Gr.getItem("sockdrive.backend.name") ?? "js-dos",
        },
        reducers: {
          setSockdriveBackendName: (e, t) => {
            (e.sockdriveBackendName = t.payload),
              Gr.setItem("sockdrive.backend.name", t.payload);
          },
        },
      }),
    }
  );
}
const di = ui().slice,
  hi = (e) => (t) => (n) => {
    const o = Object.assign({}, n, {
      asyncStore: function (t) {
        setTimeout(() => t(e), 4);
      },
    });
    t(o);
  },
  fi = {};
function pi(e) {
  return "function" == typeof e.getState
    ? fi[e.getState().init.uid]
    : fi[e.init.uid];
}
function vi() {
  return pi(Qn());
}
function mi(e, t, n) {
  e.options.onEvent &&
    setTimeout(() => {
      var o, r;
      null == (r = (o = e.options).onEvent) || r.call(o, t, n);
    }, 4);
}
function yi(e) {
  return e.getState();
}
const gi = "qwertyuiopasdfghjklzxcvbnm1234567890",
  bi = ["dosbox", "dosboxX"],
  _i = ["webgl", "canvas"],
  wi = ["AsIs", "1/1", "5/4", "4/3", "16/10", "16/9", "Fit"],
  ki = 65535,
  xi = ["pixelated", "smooth"],
  Ci = zr({
    name: "dos",
    initialState: {
      step: "emu-init",
      emuVersion: "-",
      error: null,
      bundle: null,
      config: {},
      worker: "false" !== Gr.getItem("worker"),
      backend: Gr.getItem("backend") ?? "dosbox",
      backendLocked: !1,
      backendHardware: "false" !== Gr.getItem("backendHardware"),
      renderBackend: Gr.getItem("renderBackend") ?? "webgl",
      renderAspect: Gr.getItem("renderAspect") ?? "AsIs",
      volume: Number.parseFloat(Gr.getItem("volume") ?? "1.0"),
      mobileControls: !1,
      mirroredControls: "true" === Gr.getItem("mirroredControls"),
      scaleControls: Number.parseFloat(Gr.getItem("scaleControls") ?? "0.2"),
      mouseSensitivity: Number.parseFloat(
        Gr.getItem("mouse_sensitivity") ?? "1.0",
      ),
      mouseCapture: !1,
      paused: !1,
      stats: {
        cyclesPerMs: 0,
        nonSkippableSleepPreSec: 0,
        sleepPerSec: 0,
        sleepTimePerSec: 0,
        framePerSec: 0,
        soundPerSec: 0,
        msgSentPerSec: 0,
        msgRecvPerSec: 0,
        netRecv: 0,
        netSent: 0,
        driveSent: 0,
        driveRecv: 0,
        driveRecvTime: 0,
        driveCacheHit: 0,
        driveCacheMiss: 0,
        driveCacheUsed: 0,
        driveBufferedAmount: 0,
        driveIo: [],
      },
      ipx: {
        backends: [{ name: "dos.zone", host: "wss://netherlands.dos.zone" }],
        backend: Gr.getItem("net.ipx.server") ?? "netherlands",
        room: Ei() + Ei() + Ei(),
        status: "disconnected",
      },
      ci: !1,
      ciStartedAt: 0,
      imageRendering: Gr.getItem("imageRendering") ?? "pixelated",
      sockdriveWrite: !0,
      sockdriveInfo: [],
      sockdriveNative: "true" === Gr.getItem("sockdriveNative"),
      softKeyboard: !1,
      softKeyboardLayout: [
        [
          [
            "{esc} {f1} {f2} {f3} {f4}",
            "0 1 2 3 4",
            "5 6 7 8 9",
            "{ } ( ) {shift}",
            "{layout} {ctrl} {alt} {space}",
          ],
          [
            "{f5} {f6} {f7} {f8}",
            "{pgup} {pgdown} {bksp}",
            "",
            "{up}",
            "{left} {down} {right}",
          ],
          [
            "{f9} {f10} {f11} {f12}",
            "{del} {kp7} {kp8} {kp9}",
            "{tab} {kp4} {kp5} {kp6}",
            "- {kp1} {kp2} {kp3}",
            "+ {kp0} . {enter}",
          ],
        ],
        [
          [
            "{esc} ` 1 2 3 4 5 6 7 8 9 0 ( ) - = {bksp} {enter}",
            "{tab} q w e r t y u i o p { } \\ [ ] {up}",
            "{shift} {left} {right} a s d f g h j k l : ; ' [ {down}",
            "{layout} {symbols} {alt} {ctrl} z x c v b n m , . / ] {space}",
          ],
        ],
      ],
      softKeyboardSymbols: [
        {
          "{esc}": "â›",
          "{bksp}": "âŒ«",
          "{enter}": "â†µ",
          "{up}": "â†‘",
          "{down}": "â†“",
          "{left}": "â†",
          "{right}": "â†’",
          "{shift}": "â‡‘",
          "{layout}": "âŽ˜",
          "{pgup}": "PgUp",
          "{pgdown}": "PgDown",
          "{kp7}": "â†–",
          "{kp8}": "â†‘",
          "{kp9}": "â†—",
          "{kp5}": "5",
          "{kp4}": "â†",
          "{kp6}": "â†’",
          "{kp1}": "â†™",
          "{kp2}": "â†“",
          "{kp3}": "â†˜",
          "{kp0}": "0",
          "{symbols}": "En/Ru",
        },
        {
          q: "Ð¹",
          w: "Ñ†",
          e: "Ñƒ",
          r: "Ðº",
          t: "Ðµ",
          y: "Ð½",
          u: "Ð³",
          i: "Ñˆ",
          o: "Ñ‰",
          p: "Ð·",
          "{": "Ñ…",
          "}": "ÑŠ",
          a: "Ñ„",
          s: "Ñ‹",
          d: "Ð²",
          f: "Ð°",
          g: "Ð¿",
          h: "Ñ€",
          j: "Ð¾",
          k: "Ð»",
          l: "Ð´",
          ";": "Ð¶",
          "'": "Ñ",
          z: "Ñ",
          x: "Ñ‡",
          c: "Ñ",
          v: "Ð¼",
          b: "Ð¸",
          n: "Ñ‚",
          m: "ÑŒ",
          ",": "Ð±",
          ".": "ÑŽ",
        },
      ],
      softKeyboardActiveSymbols: 0,
      softKeyboardActiveLayout: 0,
      noCursor: !1,
    },
    reducers: {
      emuReady: (e, t) => {
        (e.step = "emu-ready"), (e.emuVersion = t.payload);
      },
      emuError: (e, t) => {
        (e.step = "emu-error"), (e.error = t.payload ?? "Unexpeceted error");
      },
      bndLoad: (e, t) => {
        (e.step = "bnd-load"), (e.bundle = t.payload);
      },
      bndError: (e, t) => {
        (e.step = "bnd-error"), (e.error = t.payload ?? "Unexpeceted error");
      },
      bndConfig: (e) => {
        e.step = "bnd-config";
      },
      bndReady: (e, t) => {
        (e.step = "bnd-ready"), (e.config = t.payload);
      },
      bndPlay: (e, t) => {
        (e.step = "bnd-play"),
          t.asyncStore((e) => {
            mi(pi(e), "bnd-play");
          });
      },
      dosWorker: (e, t) => {
        (e.worker = t.payload),
          Gr.setItem("worker", e.worker ? "true" : "false");
      },
      dosBackend: (e, t) => {
        e.backend = t.payload;
      },
      dosBackendLocked: (e, t) => {
        e.backendLocked = t.payload;
      },
      dosBackendHardware: (e, t) => {
        (e.backendHardware = t.payload),
          Gr.setItem("backendHardware", e.backendHardware ? "true" : "false");
      },
      renderBackend: (e, t) => {
        (e.renderBackend = t.payload),
          Gr.setItem("renderBackend", e.renderBackend);
      },
      renderAspect: (e, t) => {
        (e.renderAspect = t.payload),
          Gr.setItem("renderAspect", e.renderAspect);
      },
      imageRendering: (e, t) => {
        (e.imageRendering = t.payload),
          Gr.setItem("imageRendering", e.imageRendering);
      },
      volume: (e, t) => {
        (e.volume = t.payload), Gr.setItem("volume", e.volume + "");
      },
      mouseSensitivity: (e, t) => {
        (e.mouseSensitivity = t.payload),
          Gr.setItem("mouse_sensitivity", e.mouseSensitivity + "");
      },
      mouseCapture: (e, t) => {
        e.mouseCapture = t.payload;
      },
      paused: (e, t) => {
        e.paused = t.payload;
      },
      stats: (e, t) => {
        e.stats = t.payload;
      },
      ci: (e, t) => {
        (e.ci = t.payload), t.payload && (e.ciStartedAt = Date.now());
      },
      connectIpx: (e, t) => {
        if ("connected" === e.ipx.status) throw new Error("Already connected");
        if (!e.ci) throw new Error("DOS is not started");
        const { room: n, address: o } = t.payload;
        (e.ipx.status = "connecting"),
          t.asyncStore((e) => {
            const t = pi(e);
            if (!t.ci) throw new Error("DOS is not started");
            const r = o.endsWith("/") ? o.substring(0, o.length - 1) : o;
            t.ci
              .networkConnect(0, r + ":1900/ipx/" + n.replaceAll("@", "_"))
              .then(() => {
                e.dispatch(Ci.actions.statusIpx("connected"));
              })
              .catch((t) => {
                e.dispatch(Ci.actions.statusIpx("error")), console.error(t);
              });
          });
      },
      statusIpx: (e, t) => {
        e.ipx.status = t.payload;
      },
      disconnectIpx: (e, t) => {
        (e.ipx.status = "disconnected"),
          t.asyncStore((e) => {
            var t;
            null == (t = pi(e).ci) || t.networkDisconnect(0);
          });
      },
      setRoom: (e, t) => {
        e.ipx.room = t.payload;
      },
      setIpxBackends: (e, t) => {
        e.ipx.backends = t.payload;
        const n = Gr.getItem("net.ipx.server");
        null !== n && void 0 !== t.payload.find((e) => e.name === n)
          ? (e.ipx.backend = n)
          : ((e.ipx.backend = t.payload[0].name),
            Gr.setItem("net.ipx.server", e.ipx.backend));
      },
      setIpxBackend: (e, t) => {
        const n = e.ipx.backends.find((e) => e.name === t.payload);
        n &&
          ((e.ipx.backend = n.name), Gr.setItem("net.ipx.server", t.payload));
      },
      setSockdriveWrite: (e, t) => {
        e.sockdriveWrite = t.payload;
      },
      setSockdriveNative: (e, t) => {
        (e.sockdriveNative = t.payload),
          Gr.setItem("sockdriveNative", t.payload ? "true" : "false");
      },
      addSockdriveInfo: (e, t) => {
        e.sockdriveInfo.push(t.payload);
      },
      mobileControls: (e, t) => {
        e.mobileControls = t.payload;
      },
      mirroredControls: (e, t) => {
        (e.mirroredControls = t.payload),
          Gr.setItem("mirroredControls", t.payload ? "true" : "false");
      },
      scaleControls: (e, t) => {
        (e.scaleControls = t.payload),
          Gr.setItem("scaleControls", e.scaleControls + "");
      },
      softKeyboard: (e, t) => {
        e.softKeyboard = t.payload;
      },
      softKeyboardLayout: (e, t) => {
        t.payload.length > 0 && Array.isArray(t.payload[0])
          ? (e.softKeyboardLayout = t.payload)
          : (e.softKeyboardLayout = [[t.payload]]);
      },
      softKeyboardSymbols: (e, t) => {
        e.softKeyboardSymbols = t.payload;
      },
      softKeyboardActiveSymbols: (e, t) => {
        e.softKeyboardActiveSymbols = t.payload;
      },
      softKeyboardActiveLayout: (e, t) => {
        e.softKeyboardActiveLayout = t.payload;
      },
      noCursor: (e, t) => {
        e.noCursor = t.payload;
      },
    },
  });
let Si = !1;
function Pi(e, t) {
  e.dispatch(async (e) => {
    try {
      Si ||
        (await (function (e) {
          if (null !== document.querySelector("#emulators.js"))
            return Promise.resolve();
          return new Promise((t, n) => {
            const o = document.createElement("script");
            (o.async = !0),
              (o.type = "text/javascript"),
              (o.src = e + "emulators.js"),
              (o.onload = () => {
                (emulators.pathPrefix = e), t();
              }),
              (o.onerror = (e) => {
                n(
                  new Error(
                    "Unable to add emulators.js. Probably you should set the 'pathPrefix' option to point to the js-dos folder.",
                  ),
                );
              }),
              document.head.appendChild(o);
          });
        })(t),
        (Si = !0)),
        e(Ci.actions.emuReady(emulators.version));
    } catch (n) {
      console.error("Unable to init emulators.js", n),
        e(Ci.actions.emuError(n.message));
    }
  });
}
function Ei() {
  return gi[Math.round(35 * Math.random())];
}
async function Oi(e, t, n) {
  var o;
  const r = t.ci,
    i = null == (o = t.loadedBundle) ? void 0 : o.bundleChangesUrl;
  if (null === r || !i || !e.ui.cloudSaves) return !1;
  const s = (function (e) {
      return (t) => e.i18n.keys[t] ?? t;
    })(e),
    a = e.auth.account;
  try {
    const e = await r.persist(!0);
    return (
      null !== e &&
        (ji(a)
          ? await (async function (e, t) {
              let n = await fetch(Jr + "?bundleUrl=" + encodeURIComponent(e));
              const o = await n.json();
              if (!o.success) throw new Error("Unable to put personal bundle");
              const r = o.post,
                i = new FormData();
              if (
                (Object.entries(r.fields).forEach(([e, t]) => {
                  i.append(e, t);
                }),
                i.append("acl", "public-read"),
                i.append("file", new Blob([t])),
                (n = await fetch(r.url, { method: "post", body: i })),
                200 !== n.status && 204 !== n.status)
              )
                throw new Error("Unable to put changes: " + n.statusText);
            })(i, e)
          : await t.cache.put(i, e)),
      null === a || null === a.email
        ? n(
            Zr.actions.showToast({
              message: s("warn_save"),
              intent: "success",
            }),
          )
        : n(
            Zr.actions.showToast({
              message: s("success_save"),
              intent: "success",
            }),
          ),
      !0
    );
  } catch (c) {
    return (
      n(
        Zr.actions.showToast({ message: s("unable_to_save"), intent: "error" }),
      ),
      console.error(c),
      !1
    );
  }
}
function Mi(e, t) {
  return t
    ? fetch(e + "/premium/" + t.email)
        .then((e) => e.json())
        .then((e) => e.premium)
    : Promise.resolve(!1);
}
function ji(e) {
  return void 0 !== (null == e ? void 0 : e.email);
}
const Ai = new RegExp(
  "imgmount\\s+(\\d+)\\s+sockdrive\\s+([^\\s]+)\\s+([^\\s]+)\\s+([^\\s]+)\\s*$",
  "gm",
);
function Di(e, t) {
  return Bi(
    e.name,
    (function (e, t) {
      return new Promise((n) => {
        t.dispatch(ri.actions.reset());
        const o = new FileReader();
        o.addEventListener("load", async (e) => {
          n(new Uint8Array(o.result));
        }),
          o.addEventListener("progress", (e) => {
            t.dispatch(ri.actions.progress([e.loaded, e.total]));
          }),
          o.readAsArrayBuffer(e);
      });
    })(e, t),
    null,
    null,
    t,
  );
}
async function Ti(e, t) {
  return Bi(
    e,
    (async function (e, t) {
      try {
        return await pi(t).cache.get(e);
      } catch (u) {}
      t.dispatch(ri.actions.reset());
      const n = await fetch(e, { cache: "no-store" });
      if (200 !== n.status)
        throw new Error(
          "Resource not avalible (" + n.status + "): " + n.statusText,
        );
      const o = n.headers.get("Content-Length"),
        r = null === o ? 0 : Number.parseInt(o),
        i = n.body.getReader();
      let s = 0;
      const a = [];
      for (;;) {
        const { done: n, value: o } = await i.read();
        if (n) break;
        a.push(o), (s += o.length);
        const c = Math.min(
          e.startsWith("https://br.cdn.dos.zone") ? s / 2 : s,
          r,
        );
        t.dispatch(ri.actions.progress([c, r]));
      }
      let c = 0;
      const l = new Uint8Array(s);
      for (const d of a) l.set(d, c), (c += d.length);
      return pi(t).cache.put(e, l).catch(console.error), l;
    })(e, t),
    (async function (e, t) {
      const n = yi(t).auth.account,
        o = (function (e, t) {
          const n = (function (e, t) {
            const n = t.lastIndexOf("/");
            return "personal-v2/dzapi/" + e + "/" + t.substring(n + 1);
          })(e, t);
          return "https://storage.yandexcloud.net/doszone-uploads/" + n;
        })((null == n ? void 0 : n.email) ?? "guest", e),
        r = await (async function (e, t, n) {
          if (!ji(t))
            return await pi(n)
              .cache.get(e)
              .catch(() => null);
          try {
            const t = await fetch(e, { cache: "no-cache" });
            if (200 !== t.status)
              throw new Error(
                "Resource not avalible (" + t.status + "): " + t.statusText,
              );
            return t.arrayBuffer().then((e) => new Uint8Array(e));
          } catch (o) {
            return await pi(n)
              .cache.get(e)
              .catch(() => null);
          }
        })(o, n, t);
      return { url: o, bundle: r };
    })(e, t),
    e,
    t,
  );
}
async function Bi(e, t, n, o, r) {
  const i = pi(r),
    s = r.dispatch;
  (i.loadedBundle = null), s(Ci.actions.bndLoad(e));
  const a = await t;
  s(ri.actions.ready());
  const c = await n;
  s(Ci.actions.bndConfig());
  const l = await emulators.bundleConfig(a);
  s(Xr.actions.init(l)),
    null === l ? s(Zr.actions.frameConf()) : zi(l, s),
    (i.loadedBundle = {
      bundleUrl: o,
      bundleChangesUrl: (null == c ? void 0 : c.url) ?? null,
      bundle: a,
      bundleChanges: (null == c ? void 0 : c.bundle) ?? null,
      initFs: null,
    }),
    s(Ci.actions.bndReady({}));
}
function zi(e, t) {
  Li(e.dosboxConf, t),
    t(Ci.actions.mouseCapture(e.dosboxConf.indexOf("autolock=true") >= 0));
}
function Li(e, t) {
  e.indexOf("sockdrive") >= 0 &&
    (t(Ci.actions.dosBackendLocked(!0)),
    t(Ci.actions.dosBackend("dosboxX")),
    t(Ci.actions.noCursor(!0)));
}
var Ri = 0;
function Ii(e, t, n, r, i, s) {
  var a,
    c,
    l = {};
  for (c in t) "ref" == c ? (a = t[c]) : (l[c] = t[c]);
  var u = {
    type: e,
    props: l,
    key: n,
    ref: a,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    constructor: void 0,
    __v: --Ri,
    __i: -1,
    __u: 0,
    __source: i,
    __self: s,
  };
  if ("function" == typeof e && (a = e.defaultProps))
    for (c in a) void 0 === l[c] && (l[c] = a[c]);
  return o.vnode && o.vnode(u), u;
}
function Ni() {
  const e = Wr(),
    t = on((e) => e.editor.bundleConfig),
    n = on((e) => e.auth.account),
    o = on((e) => e.dos.backend),
    { sockdriveEndpoint: r, sockdriveWssEndpoint: i } = on(
      (e) => ci[e.init.sockdriveBackendName] ?? ci["js-dos"],
    ),
    s = eo(),
    [a, c] = ie([]);
  function l(e) {
    const t = {};
    let n;
    for (; (n = Ai.exec(e)); ) {
      const [e, o, r, i, s] = n;
      t[o] = { num: o, backend: r, owner: i, drive: s };
    }
    return t;
  }
  ae(() => {
    n
      ? fetch(r + "/list/drives/" + n.token)
          .then((e) => e.json())
          .then(c)
          .catch(console.error)
      : c([]);
  }, [null == n ? void 0 : n.token, r]);
  const [u, d] = ie(l((null == t ? void 0 : t.dosboxConf) ?? ""));
  function h(e) {
    if ((d(e), t)) {
      const n = [];
      for (const t of Object.values(e))
        t.owner.length > 0 &&
          t.drive.length > 0 &&
          n.push(
            `imgmount ${t.num} sockdrive ${t.backend} ${t.owner} ${t.drive}`,
          );
      let o = t.dosboxConf;
      if (
        ((o = o.replaceAll(
          new RegExp("imgmount\\s+(\\d+)\\s+sockdrive\\s+.*$", "gm"),
          "",
        )),
        n.length > 0)
      ) {
        let e = o.indexOf("[autoexec]");
        -1 === e ? (e = o.length) : (e += 10);
        const t = o.substring(e);
        (o = o.substring(0, e)), (o += "\n" + n.join("\n") + "\n" + t.trim());
      }
      p(o);
    }
  }
  function f(e) {
    d(l(e)), p(e);
  }
  function p(e) {
    Li(e, s),
      s(Ci.actions.mouseCapture(e.indexOf("autolock=true") > 0)),
      s(Xr.actions.dosboxConf(e));
  }
  return null === t
    ? null
    : Ii("div", {
        class: "editor-conf-frame flex flex-col flex-grow w-full gap-2",
        children: [
          Ii("div", { class: "", children: e("dosboxconf_template") }),
          Ii("div", {
            class: "flex flex-row flex-wrap items-center gap-2",
            children: qr.map(({ name: e, backend: t, contents: n }) =>
              Ii("button", {
                class: "btn btn-sm",
                onClick: () => {
                  s(
                    Ci.actions.dosBackend(
                      "dosboxX" === t ? "dosboxX" : "dosbox",
                    ),
                  ),
                    f(n.replaceAll("{wss-makevm}", i));
                },
                children: e,
              }),
            ),
          }),
          "dosboxX" === o &&
            Ii(b, {
              children: [
                Ii("button", {
                  class: "btn btn-ghost btn-xs self-start",
                  target: "_blank",
                  onClick: () => s(Zr.actions.frameFatDrives()),
                  children: [
                    e("net_drives"),
                    ":",
                    Ii("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      "stroke-width": "1.5",
                      stroke: "currentColor",
                      class: "w-4 h-4",
                      children: Ii("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        d: "m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
                      }),
                    }),
                  ],
                }),
                ["2", "3"].map((e) => {
                  var t, n;
                  return Ii("div", {
                    class:
                      "flex flex-row justify-start items-center gap-3 w-full",
                    children: [
                      Ii("p", { children: "2" === e ? "C:" : "D:" }),
                      Ii("div", {
                        class: "flex flex-col gap-2",
                        children: [
                          Ii("div", {
                            class: "flex flex-row gap-1 items-center",
                            children: [
                              Ii("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                "stroke-width": "1.5",
                                stroke: "currentColor",
                                class: "w-4 h-4",
                                children: Ii("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  d: "M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
                                }),
                              }),
                              Ii("input", {
                                class: "input input-xs",
                                type: "text",
                                value:
                                  (null == (t = u[e]) ? void 0 : t.owner) ?? "",
                                onChange: (t) => {
                                  var n, o;
                                  const r = { ...u };
                                  (r[e] = {
                                    num: e,
                                    backend:
                                      (null == (n = u[e])
                                        ? void 0
                                        : n.backend) ?? i,
                                    owner: t.currentTarget.value,
                                    drive:
                                      (null == (o = u[e]) ? void 0 : o.drive) ??
                                      "",
                                  }),
                                    h(r);
                                },
                              }),
                            ],
                          }),
                          Ii("div", {
                            class: "flex flex-row gap-1 items-center",
                            children: [
                              Ii("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                "stroke-width": "1.5",
                                stroke: "currentColor",
                                class: "w-4 h-4",
                                children: Ii("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  d: "M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125",
                                }),
                              }),
                              Ii("input", {
                                class: "input input-xs",
                                type: "text",
                                value:
                                  (null == (n = u[e]) ? void 0 : n.drive) ?? "",
                                onChange: (t) => {
                                  var n, o;
                                  const r = { ...u };
                                  (r[e] = {
                                    num: e,
                                    backend:
                                      (null == (n = u[e])
                                        ? void 0
                                        : n.backend) ?? i,
                                    owner:
                                      (null == (o = u[e]) ? void 0 : o.owner) ??
                                      "",
                                    drive: t.currentTarget.value,
                                  }),
                                    h(r);
                                },
                              }),
                            ],
                          }),
                        ],
                      }),
                      Ii("div", {
                        class: "dropdown dropdown-bottom dropdown-end",
                        children: [
                          Ii("button", {
                            tabIndex: 0,
                            role: "button",
                            class: "btn btn-sm",
                            children: Ii("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              "stroke-width": "1.5",
                              stroke: "currentColor",
                              class: "w-4 h-4",
                              children: Ii("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                d: "M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776",
                              }),
                            }),
                          }),
                          Ii("ul", {
                            tabIndex: 0,
                            class:
                              "dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 max-h-80 overflow-auto",
                            children: a.map(({ name: t, owner: n }) =>
                              Ii("li", {
                                onClick: (o) => {
                                  const r = { ...u };
                                  (r[e] = {
                                    num: e,
                                    owner: n,
                                    backend: i,
                                    drive: t,
                                  }),
                                    h(r),
                                    o.currentTarget.parentElement.blur();
                                },
                                children: Ii("a", { children: t }),
                              }),
                            ),
                          }),
                        ],
                      }),
                      Ii("button", {
                        class: "btn btn-sm",
                        onClick: () => {
                          const t = { ...u };
                          delete t[e], h(t);
                        },
                        children: Ii("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          "stroke-width": "1.5",
                          stroke: "currentColor",
                          class: "w-4 h-4",
                          children: Ii("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            d: "M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z",
                          }),
                        }),
                      }),
                    ],
                  });
                }),
              ],
            }),
          Ii("textarea", {
            class: "flex-grow",
            value: t.dosboxConf,
            onChange: (e) => {
              var t;
              return f(
                (null == (t = e.currentTarget) ? void 0 : t.value) ?? "",
              );
            },
          }),
        ],
      });
}
var Ui = { exports: {} };
/*! react-checkbox-tree - v1.8.0 | 2022 */ self;
const Ki = F(
  (Ui.exports = ((e) =>
    (() => {
      var t = {
          4184: (e, t) => {
            var n;
            !(function () {
              var o = {}.hasOwnProperty;
              function r() {
                for (var e = [], t = 0; t < arguments.length; t++) {
                  var n = arguments[t];
                  if (n) {
                    var i = typeof n;
                    if ("string" === i || "number" === i) e.push(n);
                    else if (Array.isArray(n)) {
                      if (n.length) {
                        var s = r.apply(null, n);
                        s && e.push(s);
                      }
                    } else if ("object" === i)
                      if (n.toString === Object.prototype.toString)
                        for (var a in n) o.call(n, a) && n[a] && e.push(a);
                      else e.push(n.toString());
                  }
                }
                return e.join(" ");
              }
              e.exports
                ? ((r.default = r), (e.exports = r))
                : void 0 ===
                    (n = function () {
                      return r;
                    }.apply(t, [])) || (e.exports = n);
            })();
          },
          8552: (e, t, n) => {
            var o = n(852)(n(5639), "DataView");
            e.exports = o;
          },
          1989: (e, t, n) => {
            var o = n(1789),
              r = n(401),
              i = n(7667),
              s = n(1327),
              a = n(1866);
            function c(e) {
              var t = -1,
                n = null == e ? 0 : e.length;
              for (this.clear(); ++t < n; ) {
                var o = e[t];
                this.set(o[0], o[1]);
              }
            }
            (c.prototype.clear = o),
              (c.prototype.delete = r),
              (c.prototype.get = i),
              (c.prototype.has = s),
              (c.prototype.set = a),
              (e.exports = c);
          },
          8407: (e, t, n) => {
            var o = n(7040),
              r = n(4125),
              i = n(2117),
              s = n(7518),
              a = n(4705);
            function c(e) {
              var t = -1,
                n = null == e ? 0 : e.length;
              for (this.clear(); ++t < n; ) {
                var o = e[t];
                this.set(o[0], o[1]);
              }
            }
            (c.prototype.clear = o),
              (c.prototype.delete = r),
              (c.prototype.get = i),
              (c.prototype.has = s),
              (c.prototype.set = a),
              (e.exports = c);
          },
          7071: (e, t, n) => {
            var o = n(852)(n(5639), "Map");
            e.exports = o;
          },
          3369: (e, t, n) => {
            var o = n(4785),
              r = n(1285),
              i = n(6e3),
              s = n(9916),
              a = n(5265);
            function c(e) {
              var t = -1,
                n = null == e ? 0 : e.length;
              for (this.clear(); ++t < n; ) {
                var o = e[t];
                this.set(o[0], o[1]);
              }
            }
            (c.prototype.clear = o),
              (c.prototype.delete = r),
              (c.prototype.get = i),
              (c.prototype.has = s),
              (c.prototype.set = a),
              (e.exports = c);
          },
          3818: (e, t, n) => {
            var o = n(852)(n(5639), "Promise");
            e.exports = o;
          },
          8525: (e, t, n) => {
            var o = n(852)(n(5639), "Set");
            e.exports = o;
          },
          8668: (e, t, n) => {
            var o = n(3369),
              r = n(619),
              i = n(2385);
            function s(e) {
              var t = -1,
                n = null == e ? 0 : e.length;
              for (this.__data__ = new o(); ++t < n; ) this.add(e[t]);
            }
            (s.prototype.add = s.prototype.push = r),
              (s.prototype.has = i),
              (e.exports = s);
          },
          6384: (e, t, n) => {
            var o = n(8407),
              r = n(7465),
              i = n(3779),
              s = n(7599),
              a = n(4758),
              c = n(4309);
            function l(e) {
              var t = (this.__data__ = new o(e));
              this.size = t.size;
            }
            (l.prototype.clear = r),
              (l.prototype.delete = i),
              (l.prototype.get = s),
              (l.prototype.has = a),
              (l.prototype.set = c),
              (e.exports = l);
          },
          2705: (e, t, n) => {
            var o = n(5639).Symbol;
            e.exports = o;
          },
          1149: (e, t, n) => {
            var o = n(5639).Uint8Array;
            e.exports = o;
          },
          577: (e, t, n) => {
            var o = n(852)(n(5639), "WeakMap");
            e.exports = o;
          },
          4963: (e) => {
            e.exports = function (e, t) {
              for (
                var n = -1, o = null == e ? 0 : e.length, r = 0, i = [];
                ++n < o;

              ) {
                var s = e[n];
                t(s, n, e) && (i[r++] = s);
              }
              return i;
            };
          },
          4636: (e, t, n) => {
            var o = n(2545),
              r = n(5694),
              i = n(1469),
              s = n(4144),
              a = n(5776),
              c = n(6719),
              l = Object.prototype.hasOwnProperty;
            e.exports = function (e, t) {
              var n = i(e),
                u = !n && r(e),
                d = !n && !u && s(e),
                h = !n && !u && !d && c(e),
                f = n || u || d || h,
                p = f ? o(e.length, String) : [],
                v = p.length;
              for (var m in e)
                (!t && !l.call(e, m)) ||
                  (f &&
                    ("length" == m ||
                      (d && ("offset" == m || "parent" == m)) ||
                      (h &&
                        ("buffer" == m ||
                          "byteLength" == m ||
                          "byteOffset" == m)) ||
                      a(m, v))) ||
                  p.push(m);
              return p;
            };
          },
          2488: (e) => {
            e.exports = function (e, t) {
              for (var n = -1, o = t.length, r = e.length; ++n < o; )
                e[r + n] = t[n];
              return e;
            };
          },
          2908: (e) => {
            e.exports = function (e, t) {
              for (var n = -1, o = null == e ? 0 : e.length; ++n < o; )
                if (t(e[n], n, e)) return !0;
              return !1;
            };
          },
          8470: (e, t, n) => {
            var o = n(7813);
            e.exports = function (e, t) {
              for (var n = e.length; n--; ) if (o(e[n][0], t)) return n;
              return -1;
            };
          },
          8866: (e, t, n) => {
            var o = n(2488),
              r = n(1469);
            e.exports = function (e, t, n) {
              var i = t(e);
              return r(e) ? i : o(i, n(e));
            };
          },
          4239: (e, t, n) => {
            var o = n(2705),
              r = n(9607),
              i = n(2333),
              s = o ? o.toStringTag : void 0;
            e.exports = function (e) {
              return null == e
                ? void 0 === e
                  ? "[object Undefined]"
                  : "[object Null]"
                : s && s in Object(e)
                  ? r(e)
                  : i(e);
            };
          },
          9454: (e, t, n) => {
            var o = n(4239),
              r = n(7005);
            e.exports = function (e) {
              return r(e) && "[object Arguments]" == o(e);
            };
          },
          939: (e, t, n) => {
            var o = n(2492),
              r = n(7005);
            e.exports = function e(t, n, i, s, a) {
              return (
                t === n ||
                (null == t || null == n || (!r(t) && !r(n))
                  ? t != t && n != n
                  : o(t, n, i, s, e, a))
              );
            };
          },
          2492: (e, t, n) => {
            var o = n(6384),
              r = n(7114),
              i = n(8351),
              s = n(6096),
              a = n(4160),
              c = n(1469),
              l = n(4144),
              u = n(6719),
              d = "[object Arguments]",
              h = "[object Array]",
              f = "[object Object]",
              p = Object.prototype.hasOwnProperty;
            e.exports = function (e, t, n, v, m, y) {
              var g = c(e),
                b = c(t),
                _ = g ? h : a(e),
                w = b ? h : a(t),
                k = (_ = _ == d ? f : _) == f,
                x = (w = w == d ? f : w) == f,
                C = _ == w;
              if (C && l(e)) {
                if (!l(t)) return !1;
                (g = !0), (k = !1);
              }
              if (C && !k)
                return (
                  y || (y = new o()),
                  g || u(e) ? r(e, t, n, v, m, y) : i(e, t, _, n, v, m, y)
                );
              if (!(1 & n)) {
                var S = k && p.call(e, "__wrapped__"),
                  P = x && p.call(t, "__wrapped__");
                if (S || P) {
                  var E = S ? e.value() : e,
                    O = P ? t.value() : t;
                  return y || (y = new o()), m(E, O, n, v, y);
                }
              }
              return !!C && (y || (y = new o()), s(e, t, n, v, m, y));
            };
          },
          8458: (e, t, n) => {
            var o = n(3560),
              r = n(5346),
              i = n(3218),
              s = n(346),
              a = /^\[object .+?Constructor\]$/,
              c = Function.prototype,
              l = Object.prototype,
              u = c.toString,
              d = l.hasOwnProperty,
              h = RegExp(
                "^" +
                  u
                    .call(d)
                    .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                    .replace(
                      /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                      "$1.*?",
                    ) +
                  "$",
              );
            e.exports = function (e) {
              return !(!i(e) || r(e)) && (o(e) ? h : a).test(s(e));
            };
          },
          8749: (e, t, n) => {
            var o = n(4239),
              r = n(1780),
              i = n(7005),
              s = {};
            (s["[object Float32Array]"] =
              s["[object Float64Array]"] =
              s["[object Int8Array]"] =
              s["[object Int16Array]"] =
              s["[object Int32Array]"] =
              s["[object Uint8Array]"] =
              s["[object Uint8ClampedArray]"] =
              s["[object Uint16Array]"] =
              s["[object Uint32Array]"] =
                !0),
              (s["[object Arguments]"] =
                s["[object Array]"] =
                s["[object ArrayBuffer]"] =
                s["[object Boolean]"] =
                s["[object DataView]"] =
                s["[object Date]"] =
                s["[object Error]"] =
                s["[object Function]"] =
                s["[object Map]"] =
                s["[object Number]"] =
                s["[object Object]"] =
                s["[object RegExp]"] =
                s["[object Set]"] =
                s["[object String]"] =
                s["[object WeakMap]"] =
                  !1),
              (e.exports = function (e) {
                return i(e) && r(e.length) && !!s[o(e)];
              });
          },
          280: (e, t, n) => {
            var o = n(5726),
              r = n(6916),
              i = Object.prototype.hasOwnProperty;
            e.exports = function (e) {
              if (!o(e)) return r(e);
              var t = [];
              for (var n in Object(e))
                i.call(e, n) && "constructor" != n && t.push(n);
              return t;
            };
          },
          2545: (e) => {
            e.exports = function (e, t) {
              for (var n = -1, o = Array(e); ++n < e; ) o[n] = t(n);
              return o;
            };
          },
          1717: (e) => {
            e.exports = function (e) {
              return function (t) {
                return e(t);
              };
            };
          },
          4757: (e) => {
            e.exports = function (e, t) {
              return e.has(t);
            };
          },
          4429: (e, t, n) => {
            var o = n(5639)["__core-js_shared__"];
            e.exports = o;
          },
          7114: (e, t, n) => {
            var o = n(8668),
              r = n(2908),
              i = n(4757);
            e.exports = function (e, t, n, s, a, c) {
              var l = 1 & n,
                u = e.length,
                d = t.length;
              if (u != d && !(l && d > u)) return !1;
              var h = c.get(e),
                f = c.get(t);
              if (h && f) return h == t && f == e;
              var p = -1,
                v = !0,
                m = 2 & n ? new o() : void 0;
              for (c.set(e, t), c.set(t, e); ++p < u; ) {
                var y = e[p],
                  g = t[p];
                if (s) var b = l ? s(g, y, p, t, e, c) : s(y, g, p, e, t, c);
                if (void 0 !== b) {
                  if (b) continue;
                  v = !1;
                  break;
                }
                if (m) {
                  if (
                    !r(t, function (e, t) {
                      if (!i(m, t) && (y === e || a(y, e, n, s, c)))
                        return m.push(t);
                    })
                  ) {
                    v = !1;
                    break;
                  }
                } else if (y !== g && !a(y, g, n, s, c)) {
                  v = !1;
                  break;
                }
              }
              return c.delete(e), c.delete(t), v;
            };
          },
          8351: (e, t, n) => {
            var o = n(2705),
              r = n(1149),
              i = n(7813),
              s = n(7114),
              a = n(8776),
              c = n(1814),
              l = o ? o.prototype : void 0,
              u = l ? l.valueOf : void 0;
            e.exports = function (e, t, n, o, l, d, h) {
              switch (n) {
                case "[object DataView]":
                  if (
                    e.byteLength != t.byteLength ||
                    e.byteOffset != t.byteOffset
                  )
                    return !1;
                  (e = e.buffer), (t = t.buffer);
                case "[object ArrayBuffer]":
                  return !(
                    e.byteLength != t.byteLength || !d(new r(e), new r(t))
                  );
                case "[object Boolean]":
                case "[object Date]":
                case "[object Number]":
                  return i(+e, +t);
                case "[object Error]":
                  return e.name == t.name && e.message == t.message;
                case "[object RegExp]":
                case "[object String]":
                  return e == t + "";
                case "[object Map]":
                  var f = a;
                case "[object Set]":
                  var p = 1 & o;
                  if ((f || (f = c), e.size != t.size && !p)) return !1;
                  var v = h.get(e);
                  if (v) return v == t;
                  (o |= 2), h.set(e, t);
                  var m = s(f(e), f(t), o, l, d, h);
                  return h.delete(e), m;
                case "[object Symbol]":
                  if (u) return u.call(e) == u.call(t);
              }
              return !1;
            };
          },
          6096: (e, t, n) => {
            var o = n(8234),
              r = Object.prototype.hasOwnProperty;
            e.exports = function (e, t, n, i, s, a) {
              var c = 1 & n,
                l = o(e),
                u = l.length;
              if (u != o(t).length && !c) return !1;
              for (var d = u; d--; ) {
                var h = l[d];
                if (!(c ? h in t : r.call(t, h))) return !1;
              }
              var f = a.get(e),
                p = a.get(t);
              if (f && p) return f == t && p == e;
              var v = !0;
              a.set(e, t), a.set(t, e);
              for (var m = c; ++d < u; ) {
                var y = e[(h = l[d])],
                  g = t[h];
                if (i) var b = c ? i(g, y, h, t, e, a) : i(y, g, h, e, t, a);
                if (!(void 0 === b ? y === g || s(y, g, n, i, a) : b)) {
                  v = !1;
                  break;
                }
                m || (m = "constructor" == h);
              }
              if (v && !m) {
                var _ = e.constructor,
                  w = t.constructor;
                _ == w ||
                  !("constructor" in e) ||
                  !("constructor" in t) ||
                  ("function" == typeof _ &&
                    _ instanceof _ &&
                    "function" == typeof w &&
                    w instanceof w) ||
                  (v = !1);
              }
              return a.delete(e), a.delete(t), v;
            };
          },
          1957: (e, t, n) => {
            var o =
              "object" == typeof n.g && n.g && n.g.Object === Object && n.g;
            e.exports = o;
          },
          8234: (e, t, n) => {
            var o = n(8866),
              r = n(9551),
              i = n(3674);
            e.exports = function (e) {
              return o(e, i, r);
            };
          },
          5050: (e, t, n) => {
            var o = n(7019);
            e.exports = function (e, t) {
              var n = e.__data__;
              return o(t) ? n["string" == typeof t ? "string" : "hash"] : n.map;
            };
          },
          852: (e, t, n) => {
            var o = n(8458),
              r = n(7801);
            e.exports = function (e, t) {
              var n = r(e, t);
              return o(n) ? n : void 0;
            };
          },
          9607: (e, t, n) => {
            var o = n(2705),
              r = Object.prototype,
              i = r.hasOwnProperty,
              s = r.toString,
              a = o ? o.toStringTag : void 0;
            e.exports = function (e) {
              var t = i.call(e, a),
                n = e[a];
              try {
                e[a] = void 0;
                var o = !0;
              } catch (c) {}
              var r = s.call(e);
              return o && (t ? (e[a] = n) : delete e[a]), r;
            };
          },
          9551: (e, t, n) => {
            var o = n(4963),
              r = n(479),
              i = Object.prototype.propertyIsEnumerable,
              s = Object.getOwnPropertySymbols,
              a = s
                ? function (e) {
                    return null == e
                      ? []
                      : ((e = Object(e)),
                        o(s(e), function (t) {
                          return i.call(e, t);
                        }));
                  }
                : r;
            e.exports = a;
          },
          4160: (e, t, n) => {
            var o = n(8552),
              r = n(7071),
              i = n(3818),
              s = n(8525),
              a = n(577),
              c = n(4239),
              l = n(346),
              u = "[object Map]",
              d = "[object Promise]",
              h = "[object Set]",
              f = "[object WeakMap]",
              p = "[object DataView]",
              v = l(o),
              m = l(r),
              y = l(i),
              g = l(s),
              b = l(a),
              _ = c;
            ((o && _(new o(new ArrayBuffer(1))) != p) ||
              (r && _(new r()) != u) ||
              (i && _(i.resolve()) != d) ||
              (s && _(new s()) != h) ||
              (a && _(new a()) != f)) &&
              (_ = function (e) {
                var t = c(e),
                  n = "[object Object]" == t ? e.constructor : void 0,
                  o = n ? l(n) : "";
                if (o)
                  switch (o) {
                    case v:
                      return p;
                    case m:
                      return u;
                    case y:
                      return d;
                    case g:
                      return h;
                    case b:
                      return f;
                  }
                return t;
              }),
              (e.exports = _);
          },
          7801: (e) => {
            e.exports = function (e, t) {
              return null == e ? void 0 : e[t];
            };
          },
          1789: (e, t, n) => {
            var o = n(4536);
            e.exports = function () {
              (this.__data__ = o ? o(null) : {}), (this.size = 0);
            };
          },
          401: (e) => {
            e.exports = function (e) {
              var t = this.has(e) && delete this.__data__[e];
              return (this.size -= t ? 1 : 0), t;
            };
          },
          7667: (e, t, n) => {
            var o = n(4536),
              r = Object.prototype.hasOwnProperty;
            e.exports = function (e) {
              var t = this.__data__;
              if (o) {
                var n = t[e];
                return "__lodash_hash_undefined__" === n ? void 0 : n;
              }
              return r.call(t, e) ? t[e] : void 0;
            };
          },
          1327: (e, t, n) => {
            var o = n(4536),
              r = Object.prototype.hasOwnProperty;
            e.exports = function (e) {
              var t = this.__data__;
              return o ? void 0 !== t[e] : r.call(t, e);
            };
          },
          1866: (e, t, n) => {
            var o = n(4536);
            e.exports = function (e, t) {
              var n = this.__data__;
              return (
                (this.size += this.has(e) ? 0 : 1),
                (n[e] = o && void 0 === t ? "__lodash_hash_undefined__" : t),
                this
              );
            };
          },
          5776: (e) => {
            var t = /^(?:0|[1-9]\d*)$/;
            e.exports = function (e, n) {
              var o = typeof e;
              return (
                !!(n = null == n ? 9007199254740991 : n) &&
                ("number" == o || ("symbol" != o && t.test(e))) &&
                e > -1 &&
                e % 1 == 0 &&
                e < n
              );
            };
          },
          7019: (e) => {
            e.exports = function (e) {
              var t = typeof e;
              return "string" == t ||
                "number" == t ||
                "symbol" == t ||
                "boolean" == t
                ? "__proto__" !== e
                : null === e;
            };
          },
          5346: (e, t, n) => {
            var o,
              r = n(4429),
              i = (o = /[^.]+$/.exec((r && r.keys && r.keys.IE_PROTO) || ""))
                ? "Symbol(src)_1." + o
                : "";
            e.exports = function (e) {
              return !!i && i in e;
            };
          },
          5726: (e) => {
            var t = Object.prototype;
            e.exports = function (e) {
              var n = e && e.constructor;
              return e === (("function" == typeof n && n.prototype) || t);
            };
          },
          7040: (e) => {
            e.exports = function () {
              (this.__data__ = []), (this.size = 0);
            };
          },
          4125: (e, t, n) => {
            var o = n(8470),
              r = Array.prototype.splice;
            e.exports = function (e) {
              var t = this.__data__,
                n = o(t, e);
              return !(
                n < 0 ||
                (n == t.length - 1 ? t.pop() : r.call(t, n, 1), --this.size, 0)
              );
            };
          },
          2117: (e, t, n) => {
            var o = n(8470);
            e.exports = function (e) {
              var t = this.__data__,
                n = o(t, e);
              return n < 0 ? void 0 : t[n][1];
            };
          },
          7518: (e, t, n) => {
            var o = n(8470);
            e.exports = function (e) {
              return o(this.__data__, e) > -1;
            };
          },
          4705: (e, t, n) => {
            var o = n(8470);
            e.exports = function (e, t) {
              var n = this.__data__,
                r = o(n, e);
              return (
                r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this
              );
            };
          },
          4785: (e, t, n) => {
            var o = n(1989),
              r = n(8407),
              i = n(7071);
            e.exports = function () {
              (this.size = 0),
                (this.__data__ = {
                  hash: new o(),
                  map: new (i || r)(),
                  string: new o(),
                });
            };
          },
          1285: (e, t, n) => {
            var o = n(5050);
            e.exports = function (e) {
              var t = o(this, e).delete(e);
              return (this.size -= t ? 1 : 0), t;
            };
          },
          6e3: (e, t, n) => {
            var o = n(5050);
            e.exports = function (e) {
              return o(this, e).get(e);
            };
          },
          9916: (e, t, n) => {
            var o = n(5050);
            e.exports = function (e) {
              return o(this, e).has(e);
            };
          },
          5265: (e, t, n) => {
            var o = n(5050);
            e.exports = function (e, t) {
              var n = o(this, e),
                r = n.size;
              return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
            };
          },
          8776: (e) => {
            e.exports = function (e) {
              var t = -1,
                n = Array(e.size);
              return (
                e.forEach(function (e, o) {
                  n[++t] = [o, e];
                }),
                n
              );
            };
          },
          4536: (e, t, n) => {
            var o = n(852)(Object, "create");
            e.exports = o;
          },
          6916: (e, t, n) => {
            var o = n(5569)(Object.keys, Object);
            e.exports = o;
          },
          1167: (e, t, n) => {
            e = n.nmd(e);
            var o = n(1957),
              r = t && !t.nodeType && t,
              i = r && e && !e.nodeType && e,
              s = i && i.exports === r && o.process,
              a = (function () {
                try {
                  return (
                    (i && i.require && i.require("util").types) ||
                    (s && s.binding && s.binding("util"))
                  );
                } catch (e) {}
              })();
            e.exports = a;
          },
          2333: (e) => {
            var t = Object.prototype.toString;
            e.exports = function (e) {
              return t.call(e);
            };
          },
          5569: (e) => {
            e.exports = function (e, t) {
              return function (n) {
                return e(t(n));
              };
            };
          },
          5639: (e, t, n) => {
            var o = n(1957),
              r =
                "object" == typeof self &&
                self &&
                self.Object === Object &&
                self,
              i = o || r || Function("return this")();
            e.exports = i;
          },
          619: (e) => {
            e.exports = function (e) {
              return this.__data__.set(e, "__lodash_hash_undefined__"), this;
            };
          },
          2385: (e) => {
            e.exports = function (e) {
              return this.__data__.has(e);
            };
          },
          1814: (e) => {
            e.exports = function (e) {
              var t = -1,
                n = Array(e.size);
              return (
                e.forEach(function (e) {
                  n[++t] = e;
                }),
                n
              );
            };
          },
          7465: (e, t, n) => {
            var o = n(8407);
            e.exports = function () {
              (this.__data__ = new o()), (this.size = 0);
            };
          },
          3779: (e) => {
            e.exports = function (e) {
              var t = this.__data__,
                n = t.delete(e);
              return (this.size = t.size), n;
            };
          },
          7599: (e) => {
            e.exports = function (e) {
              return this.__data__.get(e);
            };
          },
          4758: (e) => {
            e.exports = function (e) {
              return this.__data__.has(e);
            };
          },
          4309: (e, t, n) => {
            var o = n(8407),
              r = n(7071),
              i = n(3369);
            e.exports = function (e, t) {
              var n = this.__data__;
              if (n instanceof o) {
                var s = n.__data__;
                if (!r || s.length < 199)
                  return s.push([e, t]), (this.size = ++n.size), this;
                n = this.__data__ = new i(s);
              }
              return n.set(e, t), (this.size = n.size), this;
            };
          },
          346: (e) => {
            var t = Function.prototype.toString;
            e.exports = function (e) {
              if (null != e) {
                try {
                  return t.call(e);
                } catch (n) {}
                try {
                  return e + "";
                } catch (n) {}
              }
              return "";
            };
          },
          7813: (e) => {
            e.exports = function (e, t) {
              return e === t || (e != e && t != t);
            };
          },
          5694: (e, t, n) => {
            var o = n(9454),
              r = n(7005),
              i = Object.prototype,
              s = i.hasOwnProperty,
              a = i.propertyIsEnumerable,
              c = o(
                (function () {
                  return arguments;
                })(),
              )
                ? o
                : function (e) {
                    return r(e) && s.call(e, "callee") && !a.call(e, "callee");
                  };
            e.exports = c;
          },
          1469: (e) => {
            var t = Array.isArray;
            e.exports = t;
          },
          8612: (e, t, n) => {
            var o = n(3560),
              r = n(1780);
            e.exports = function (e) {
              return null != e && r(e.length) && !o(e);
            };
          },
          4144: (e, t, n) => {
            e = n.nmd(e);
            var o = n(5639),
              r = n(5062),
              i = t && !t.nodeType && t,
              s = i && e && !e.nodeType && e,
              a = s && s.exports === i ? o.Buffer : void 0,
              c = (a ? a.isBuffer : void 0) || r;
            e.exports = c;
          },
          8446: (e, t, n) => {
            var o = n(939);
            e.exports = function (e, t) {
              return o(e, t);
            };
          },
          3560: (e, t, n) => {
            var o = n(4239),
              r = n(3218);
            e.exports = function (e) {
              if (!r(e)) return !1;
              var t = o(e);
              return (
                "[object Function]" == t ||
                "[object GeneratorFunction]" == t ||
                "[object AsyncFunction]" == t ||
                "[object Proxy]" == t
              );
            };
          },
          1780: (e) => {
            e.exports = function (e) {
              return (
                "number" == typeof e &&
                e > -1 &&
                e % 1 == 0 &&
                e <= 9007199254740991
              );
            };
          },
          3218: (e) => {
            e.exports = function (e) {
              var t = typeof e;
              return null != e && ("object" == t || "function" == t);
            };
          },
          7005: (e) => {
            e.exports = function (e) {
              return null != e && "object" == typeof e;
            };
          },
          6719: (e, t, n) => {
            var o = n(8749),
              r = n(1717),
              i = n(1167),
              s = i && i.isTypedArray,
              a = s ? r(s) : o;
            e.exports = a;
          },
          3674: (e, t, n) => {
            var o = n(4636),
              r = n(280),
              i = n(8612);
            e.exports = function (e) {
              return i(e) ? o(e) : r(e);
            };
          },
          8306: (e, t, n) => {
            var o = n(3369);
            function r(e, t) {
              if (
                "function" != typeof e ||
                (null != t && "function" != typeof t)
              )
                throw new TypeError("Expected a function");
              var n = function () {
                var o = arguments,
                  r = t ? t.apply(this, o) : o[0],
                  i = n.cache;
                if (i.has(r)) return i.get(r);
                var s = e.apply(this, o);
                return (n.cache = i.set(r, s) || i), s;
              };
              return (n.cache = new (r.Cache || o)()), n;
            }
            (r.Cache = o), (e.exports = r);
          },
          479: (e) => {
            e.exports = function () {
              return [];
            };
          },
          5062: (e) => {
            e.exports = function () {
              return !1;
            };
          },
          2703: (e, t, n) => {
            var o = n(414);
            function r() {}
            function i() {}
            (i.resetWarningCache = r),
              (e.exports = function () {
                function e(e, t, n, r, i, s) {
                  if (s !== o) {
                    var a = new Error(
                      "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
                    );
                    throw ((a.name = "Invariant Violation"), a);
                  }
                }
                function t() {
                  return e;
                }
                e.isRequired = e;
                var n = {
                  array: e,
                  bigint: e,
                  bool: e,
                  func: e,
                  number: e,
                  object: e,
                  string: e,
                  symbol: e,
                  any: e,
                  arrayOf: t,
                  element: e,
                  elementType: e,
                  instanceOf: t,
                  node: e,
                  objectOf: t,
                  oneOf: t,
                  oneOfType: t,
                  shape: t,
                  exact: t,
                  checkPropTypes: i,
                  resetWarningCache: r,
                };
                return (n.PropTypes = n), n;
              });
          },
          5697: (e, t, n) => {
            e.exports = n(2703)();
          },
          414: (e) => {
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
          },
          9787: (t) => {
            t.exports = e;
          },
        },
        n = {};
      function o(e) {
        var r = n[e];
        if (void 0 !== r) return r.exports;
        var i = (n[e] = { id: e, loaded: !1, exports: {} });
        return t[e](i, i.exports, o), (i.loaded = !0), i.exports;
      }
      (o.n = (e) => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return o.d(t, { a: t }), t;
      }),
        (o.d = (e, t) => {
          for (var n in t)
            o.o(t, n) &&
              !o.o(e, n) &&
              Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        }),
        (o.g = (function () {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")();
          } catch (e) {
            if ("object" == typeof window) return window;
          }
        })()),
        (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (o.r = (e) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (o.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e));
      var r = {};
      return (
        (() => {
          o.r(r), o.d(r, { default: () => le, expandNodesToLevel: () => ce });
          var e = o(4184),
            t = o.n(e),
            n = o(8446),
            i = o.n(n),
            s = o(8306),
            a = o.n(s);
          let c = (e = 21) =>
            crypto
              .getRandomValues(new Uint8Array(e))
              .reduce(
                (e, t) =>
                  e +
                  ((t &= 63) < 36
                    ? t.toString(36)
                    : t < 62
                      ? (t - 26).toString(36).toUpperCase()
                      : t > 62
                        ? "-"
                        : "_"),
                "",
              );
          var l = o(5697),
            u = o.n(l),
            d = o(9787),
            h = o.n(d);
          function f(e) {
            return (f =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  })(e);
          }
          var p = ["children", "title"];
          function v() {
            return (
              (v = Object.assign
                ? Object.assign.bind()
                : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var o in n)
                        Object.prototype.hasOwnProperty.call(n, o) &&
                          (e[o] = n[o]);
                    }
                    return e;
                  }),
              v.apply(this, arguments)
            );
          }
          function m(e, t) {
            return (m = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (e, t) {
                  return (e.__proto__ = t), e;
                })(e, t);
          }
          function y(e) {
            return (y = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
          }
          function g(e, t, n) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
          var b = (function (e) {
            !(function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(e, "prototype", { writable: !1 }),
                t && m(e, t);
            })(s, e);
            var t,
              n,
              o,
              r,
              i =
                ((o = s),
                (r = (function () {
                  if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                  if (Reflect.construct.sham) return !1;
                  if ("function" == typeof Proxy) return !0;
                  try {
                    return (
                      Boolean.prototype.valueOf.call(
                        Reflect.construct(Boolean, [], function () {}),
                      ),
                      !0
                    );
                  } catch (e) {
                    return !1;
                  }
                })()),
                function () {
                  var e,
                    t = y(o);
                  if (r) {
                    var n = y(this).constructor;
                    e = Reflect.construct(t, arguments, n);
                  } else e = t.apply(this, arguments);
                  return (function (e, t) {
                    if (t && ("object" === f(t) || "function" == typeof t))
                      return t;
                    if (void 0 !== t)
                      throw new TypeError(
                        "Derived constructors may only return object or undefined",
                      );
                    return (function (e) {
                      if (void 0 === e)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called",
                        );
                      return e;
                    })(e);
                  })(this, e);
                });
            function s() {
              return (
                (function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, s),
                i.apply(this, arguments)
              );
            }
            return (
              (t = s),
              (n = [
                {
                  key: "render",
                  value: function () {
                    var e = this.props,
                      t = e.children,
                      n = e.title,
                      o = (function (e, t) {
                        if (null == e) return {};
                        var n,
                          o,
                          r = (function (e, t) {
                            if (null == e) return {};
                            var n,
                              o,
                              r = {},
                              i = Object.keys(e);
                            for (o = 0; o < i.length; o++)
                              (n = i[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                          })(e, t);
                        if (Object.getOwnPropertySymbols) {
                          var i = Object.getOwnPropertySymbols(e);
                          for (o = 0; o < i.length; o++)
                            (n = i[o]),
                              t.indexOf(n) >= 0 ||
                                (Object.prototype.propertyIsEnumerable.call(
                                  e,
                                  n,
                                ) &&
                                  (r[n] = e[n]));
                        }
                        return r;
                      })(e, p);
                    return h().createElement(
                      "button",
                      v({ "aria-label": n, title: n, type: "button" }, o),
                      t,
                    );
                  },
                },
              ]) &&
                (function (e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1),
                      (o.configurable = !0),
                      "value" in o && (o.writable = !0),
                      Object.defineProperty(e, o.key, o);
                  }
                })(t.prototype, n),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              s
            );
          })(h().PureComponent);
          g(b, "propTypes", {
            children: u().node.isRequired,
            title: u().string,
          }),
            g(b, "defaultProps", { title: null });
          const _ = b,
            w = { ALL: "all", PARENT: "parent", LEAF: "leaf" };
          function k(e) {
            (this.message = e), (this.stack = Error().stack);
          }
          (k.prototype = Object.create(Error.prototype)),
            (k.prototype.name = "CheckboxTreeError");
          const x = k;
          function C(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var o = Object.getOwnPropertySymbols(e);
              t &&
                (o = o.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                n.push.apply(n, o);
            }
            return n;
          }
          function S(e, t, n) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
          var P = w;
          const E = (function () {
            function e(t) {
              var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (this.props = t),
                (this.flatNodes = n);
            }
            var t, n;
            return (
              (t = e),
              (n = [
                {
                  key: "setProps",
                  value: function (e) {
                    this.props = e;
                  },
                },
                {
                  key: "clone",
                  value: function () {
                    var t = this,
                      n = {};
                    return (
                      Object.keys(this.flatNodes).forEach(function (e) {
                        var o = t.flatNodes[e];
                        n[e] = (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2
                              ? C(Object(n), !0).forEach(function (t) {
                                  S(e, t, n[t]);
                                })
                              : Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(
                                    e,
                                    Object.getOwnPropertyDescriptors(n),
                                  )
                                : C(Object(n)).forEach(function (t) {
                                    Object.defineProperty(
                                      e,
                                      t,
                                      Object.getOwnPropertyDescriptor(n, t),
                                    );
                                  });
                          }
                          return e;
                        })({}, o);
                      }),
                      new e(this.props, n)
                    );
                  },
                },
                {
                  key: "getNode",
                  value: function (e) {
                    return this.flatNodes[e];
                  },
                },
                {
                  key: "reset",
                  value: function () {
                    this.flatNodes = {};
                  },
                },
                {
                  key: "flattenNodes",
                  value: function (e) {
                    var t = this,
                      n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {},
                      o =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : 0;
                    if (Array.isArray(e) && 0 !== e.length) {
                      var r = this.props,
                        i = r.disabled,
                        s = r.noCascade;
                      e.forEach(function (e, r) {
                        var a = t.nodeHasChildren(e);
                        if (void 0 !== t.flatNodes[e.value])
                          throw new x(
                            "Duplicate value '".concat(
                              e.value,
                              "' detected. All node values must be unique.",
                            ),
                          );
                        (t.flatNodes[e.value] = {
                          label: e.label,
                          value: e.value,
                          children: e.children,
                          parent: n,
                          isChild: void 0 !== n.value,
                          isParent: a,
                          isLeaf: !a,
                          showCheckbox:
                            void 0 === e.showCheckbox || e.showCheckbox,
                          disabled: t.getDisabledState(e, n, i, s),
                          treeDepth: o,
                          index: r,
                        }),
                          t.flattenNodes(e.children, e, o + 1);
                      });
                    }
                  },
                },
                {
                  key: "nodeHasChildren",
                  value: function (e) {
                    return Array.isArray(e.children);
                  },
                },
                {
                  key: "getDisabledState",
                  value: function (e, t, n, o) {
                    return !!n || !(o || !t.disabled) || Boolean(e.disabled);
                  },
                },
                {
                  key: "deserializeLists",
                  value: function (e) {
                    var t = this,
                      n = ["checked", "expanded"];
                    Object.keys(this.flatNodes).forEach(function (e) {
                      n.forEach(function (n) {
                        t.flatNodes[e][n] = !1;
                      });
                    }),
                      n.forEach(function (n) {
                        e[n].forEach(function (e) {
                          void 0 !== t.flatNodes[e] && (t.flatNodes[e][n] = !0);
                        });
                      });
                  },
                },
                {
                  key: "serializeList",
                  value: function (e) {
                    var t = this,
                      n = [];
                    return (
                      Object.keys(this.flatNodes).forEach(function (o) {
                        t.flatNodes[o][e] && n.push(o);
                      }),
                      n
                    );
                  },
                },
                {
                  key: "expandAllNodes",
                  value: function (e) {
                    var t = this;
                    return (
                      Object.keys(this.flatNodes).forEach(function (n) {
                        t.flatNodes[n].isParent &&
                          (t.flatNodes[n].expanded = e);
                      }),
                      this
                    );
                  },
                },
                {
                  key: "toggleChecked",
                  value: function (e, t, n, o) {
                    var r = this,
                      i =
                        !(arguments.length > 4 && void 0 !== arguments[4]) ||
                        arguments[4],
                      s = this.flatNodes[e.value],
                      a = [P.PARENT, P.ALL].indexOf(n) > -1,
                      c = [P.LEAF, P.ALL].indexOf(n) > -1;
                    if (s.isLeaf || o) {
                      if (e.disabled) return this;
                      this.toggleNode(e.value, "checked", t);
                    } else
                      (a || 0 === s.children.length) &&
                        this.toggleNode(e.value, "checked", t),
                        c &&
                          s.children.forEach(function (e) {
                            r.toggleChecked(e, t, n, o, !1);
                          });
                    return (
                      i &&
                        !o &&
                        s.isChild &&
                        a &&
                        this.toggleParentStatus(s.parent, n),
                      this
                    );
                  },
                },
                {
                  key: "toggleParentStatus",
                  value: function (e, t) {
                    var n = this.flatNodes[e.value];
                    n.isChild
                      ? (t === P.ALL &&
                          this.toggleNode(
                            e.value,
                            "checked",
                            this.isEveryChildChecked(n),
                          ),
                        this.toggleParentStatus(n.parent, t))
                      : this.toggleNode(
                          e.value,
                          "checked",
                          this.isEveryChildChecked(n),
                        );
                  },
                },
                {
                  key: "isEveryChildChecked",
                  value: function (e) {
                    var t = this;
                    return e.children.every(function (e) {
                      return t.getNode(e.value).checked;
                    });
                  },
                },
                {
                  key: "toggleNode",
                  value: function (e, t, n) {
                    return (this.flatNodes[e][t] = n), this;
                  },
                },
              ]),
              n &&
                (function (e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1),
                      (o.configurable = !0),
                      "value" in o && (o.writable = !0),
                      Object.defineProperty(e, o.key, o);
                  }
                })(t.prototype, n),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e
            );
          })();
          function O(e) {
            return (O =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  })(e);
          }
          function M() {
            return (
              (M = Object.assign
                ? Object.assign.bind()
                : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var o in n)
                        Object.prototype.hasOwnProperty.call(n, o) &&
                          (e[o] = n[o]);
                    }
                    return e;
                  }),
              M.apply(this, arguments)
            );
          }
          function j(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var o = Object.getOwnPropertySymbols(e);
              t &&
                (o = o.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                n.push.apply(n, o);
            }
            return n;
          }
          function A(e, t) {
            return (A = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (e, t) {
                  return (e.__proto__ = t), e;
                })(e, t);
          }
          function D(e) {
            return (D = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
          }
          function T(e, t, n) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
          var B = (function (e) {
            !(function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(e, "prototype", { writable: !1 }),
                t && A(e, t);
            })(s, e);
            var t,
              n,
              o,
              r,
              i =
                ((o = s),
                (r = (function () {
                  if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                  if (Reflect.construct.sham) return !1;
                  if ("function" == typeof Proxy) return !0;
                  try {
                    return (
                      Boolean.prototype.valueOf.call(
                        Reflect.construct(Boolean, [], function () {}),
                      ),
                      !0
                    );
                  } catch (e) {
                    return !1;
                  }
                })()),
                function () {
                  var e,
                    t = D(o);
                  if (r) {
                    var n = D(this).constructor;
                    e = Reflect.construct(t, arguments, n);
                  } else e = t.apply(this, arguments);
                  return (function (e, t) {
                    if (t && ("object" === O(t) || "function" == typeof t))
                      return t;
                    if (void 0 !== t)
                      throw new TypeError(
                        "Derived constructors may only return object or undefined",
                      );
                    return (function (e) {
                      if (void 0 === e)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called",
                        );
                      return e;
                    })(e);
                  })(this, e);
                });
            function s() {
              return (
                (function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, s),
                i.apply(this, arguments)
              );
            }
            return (
              (t = s),
              (n = [
                {
                  key: "componentDidMount",
                  value: function () {
                    this.updateDeterminateProperty();
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function () {
                    this.updateDeterminateProperty();
                  },
                },
                {
                  key: "updateDeterminateProperty",
                  value: function () {
                    var e = this.props.indeterminate;
                    this.checkbox.indeterminate = e;
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this,
                      t = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                          var n = null != arguments[t] ? arguments[t] : {};
                          t % 2
                            ? j(Object(n), !0).forEach(function (t) {
                                T(e, t, n[t]);
                              })
                            : Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(
                                  e,
                                  Object.getOwnPropertyDescriptors(n),
                                )
                              : j(Object(n)).forEach(function (t) {
                                  Object.defineProperty(
                                    e,
                                    t,
                                    Object.getOwnPropertyDescriptor(n, t),
                                  );
                                });
                        }
                        return e;
                      })({}, this.props);
                    return (
                      delete t.indeterminate,
                      h().createElement(
                        "input",
                        M({}, t, {
                          ref: function (t) {
                            e.checkbox = t;
                          },
                          type: "checkbox",
                        }),
                      )
                    );
                  },
                },
              ]),
              n &&
                (function (e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1),
                      (o.configurable = !0),
                      "value" in o && (o.writable = !0),
                      Object.defineProperty(e, o.key, o);
                  }
                })(t.prototype, n),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              s
            );
          })(h().PureComponent);
          T(B, "propTypes", { indeterminate: u().bool }),
            T(B, "defaultProps", { indeterminate: !1 });
          const z = B,
            L = u().shape({
              check: u().node,
              uncheck: u().node,
              halfCheck: u().node,
              expandClose: u().node,
              expandOpen: u().node,
              expandAll: u().node,
              collapseAll: u().node,
              parentClose: u().node,
              parentOpen: u().node,
              leaf: u().node,
            }),
            R = u().shape({
              collapseAll: u().string.isRequired,
              expandAll: u().string.isRequired,
              toggle: u().string.isRequired,
            });
          function I(e) {
            return (I =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  })(e);
          }
          function N(e, t) {
            return (N = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (e, t) {
                  return (e.__proto__ = t), e;
                })(e, t);
          }
          function U(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called",
              );
            return e;
          }
          function K(e) {
            return (K = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
          }
          function F(e, t, n) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
          var H = (function (e) {
            !(function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(e, "prototype", { writable: !1 }),
                t && N(e, t);
            })(a, e);
            var n,
              o,
              r,
              i,
              s =
                ((r = a),
                (i = (function () {
                  if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                  if (Reflect.construct.sham) return !1;
                  if ("function" == typeof Proxy) return !0;
                  try {
                    return (
                      Boolean.prototype.valueOf.call(
                        Reflect.construct(Boolean, [], function () {}),
                      ),
                      !0
                    );
                  } catch (e) {
                    return !1;
                  }
                })()),
                function () {
                  var e,
                    t = K(r);
                  if (i) {
                    var n = K(this).constructor;
                    e = Reflect.construct(t, arguments, n);
                  } else e = t.apply(this, arguments);
                  return (function (e, t) {
                    if (t && ("object" === I(t) || "function" == typeof t))
                      return t;
                    if (void 0 !== t)
                      throw new TypeError(
                        "Derived constructors may only return object or undefined",
                      );
                    return U(e);
                  })(this, e);
                });
            function a(e) {
              var t;
              return (
                (function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, a),
                ((t = s.call(this, e)).onCheck = t.onCheck.bind(U(t))),
                (t.onCheckboxKeyPress = t.onCheckboxKeyPress.bind(U(t))),
                (t.onCheckboxKeyUp = t.onCheckboxKeyUp.bind(U(t))),
                (t.onClick = t.onClick.bind(U(t))),
                (t.onExpand = t.onExpand.bind(U(t))),
                t
              );
            }
            return (
              (n = a),
              (o = [
                {
                  key: "onCheck",
                  value: function () {
                    var e = this.props,
                      t = e.value;
                    (0, e.onCheck)({
                      value: t,
                      checked: this.getCheckState({ toggle: !0 }),
                    });
                  },
                },
                {
                  key: "onCheckboxKeyPress",
                  value: function (e) {
                    32 === e.which && e.preventDefault();
                  },
                },
                {
                  key: "onCheckboxKeyUp",
                  value: function (e) {
                    var t = e.keyCode;
                    [13, 32].includes(t) && this.onCheck();
                  },
                },
                {
                  key: "onClick",
                  value: function () {
                    var e = this.props,
                      t = e.expandOnClick,
                      n = e.isParent,
                      o = e.value,
                      r = e.onClick;
                    n && t && this.onExpand(),
                      r({
                        value: o,
                        checked: this.getCheckState({ toggle: !1 }),
                      });
                  },
                },
                {
                  key: "onExpand",
                  value: function () {
                    var e = this.props,
                      t = e.expanded,
                      n = e.value;
                    (0, e.onExpand)({ value: n, expanded: !t });
                  },
                },
                {
                  key: "getCheckState",
                  value: function (e) {
                    var t = e.toggle,
                      n = this.props,
                      o = n.checked,
                      r = n.optimisticToggle;
                    return (
                      !(0 !== o || !t) || (1 === o && !t) || (2 === o && r)
                    );
                  },
                },
                {
                  key: "renderCollapseButton",
                  value: function () {
                    var e = this.props,
                      t = e.expandDisabled,
                      n = e.isLeaf,
                      o = e.lang;
                    return n
                      ? h().createElement(
                          "span",
                          { className: "rct-collapse" },
                          h().createElement("span", { className: "rct-icon" }),
                        )
                      : h().createElement(
                          _,
                          {
                            className: "rct-collapse rct-collapse-btn",
                            disabled: t,
                            title: o.toggle,
                            onClick: this.onExpand,
                          },
                          this.renderCollapseIcon(),
                        );
                  },
                },
                {
                  key: "renderCollapseIcon",
                  value: function () {
                    var e = this.props,
                      t = e.expanded,
                      n = e.icons,
                      o = n.expandClose,
                      r = n.expandOpen;
                    return t ? r : o;
                  },
                },
                {
                  key: "renderCheckboxIcon",
                  value: function () {
                    var e = this.props,
                      t = e.checked,
                      n = e.icons,
                      o = n.uncheck,
                      r = n.check,
                      i = n.halfCheck;
                    return 0 === t ? o : 1 === t ? r : i;
                  },
                },
                {
                  key: "renderNodeIcon",
                  value: function () {
                    var e = this.props,
                      t = e.expanded,
                      n = e.icon,
                      o = e.icons,
                      r = o.leaf,
                      i = o.parentClose,
                      s = o.parentOpen,
                      a = e.isLeaf;
                    return null !== n ? n : a ? r : t ? s : i;
                  },
                },
                {
                  key: "renderBareLabel",
                  value: function (e) {
                    var t = this.props,
                      n = t.onClick,
                      o = t.title,
                      r = null !== n;
                    return h().createElement(
                      "span",
                      { className: "rct-bare-label", title: o },
                      r
                        ? h().createElement(
                            "span",
                            {
                              className: "rct-node-clickable",
                              onClick: this.onClick,
                              onKeyPress: this.onClick,
                              role: "button",
                              tabIndex: 0,
                            },
                            e,
                          )
                        : e,
                    );
                  },
                },
                {
                  key: "renderCheckboxLabel",
                  value: function (e) {
                    var t = this.props,
                      n = t.checked,
                      o = t.disabled,
                      r = t.title,
                      i = t.treeId,
                      s = t.value,
                      a = null !== t.onClick,
                      c = ""
                        .concat(i, "-")
                        .concat(String(s).split(" ").join("_")),
                      l = [
                        h().createElement(
                          "label",
                          { key: 0, htmlFor: c, title: r },
                          h().createElement(z, {
                            checked: 1 === n,
                            disabled: o,
                            id: c,
                            indeterminate: 2 === n,
                            onClick: this.onCheck,
                            onChange: function () {},
                          }),
                          h().createElement(
                            "span",
                            {
                              "aria-checked": 1 === n,
                              "aria-disabled": o,
                              className: "rct-checkbox",
                              role: "checkbox",
                              tabIndex: 0,
                              onKeyPress: this.onCheckboxKeyPress,
                              onKeyUp: this.onCheckboxKeyUp,
                            },
                            this.renderCheckboxIcon(),
                          ),
                          a ? null : e,
                        ),
                      ];
                    return (
                      a &&
                        l.push(
                          h().createElement(
                            "span",
                            {
                              key: 1,
                              className: "rct-node-clickable",
                              onClick: this.onClick,
                              onKeyPress: this.onClick,
                              role: "link",
                              tabIndex: 0,
                            },
                            e,
                          ),
                        ),
                      l
                    );
                  },
                },
                {
                  key: "renderLabel",
                  value: function () {
                    var e = this.props,
                      t = e.label,
                      n = e.showCheckbox,
                      o = [
                        e.showNodeIcon
                          ? h().createElement(
                              "span",
                              { key: 0, className: "rct-node-icon" },
                              this.renderNodeIcon(),
                            )
                          : null,
                        h().createElement(
                          "span",
                          { key: 1, className: "rct-title" },
                          t,
                        ),
                      ];
                    return n
                      ? this.renderCheckboxLabel(o)
                      : this.renderBareLabel(o);
                  },
                },
                {
                  key: "renderChildren",
                  value: function () {
                    return this.props.expanded ? this.props.children : null;
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.props,
                      n = e.className,
                      o = e.disabled,
                      r = e.expanded,
                      i = e.isLeaf,
                      s = t()(
                        {
                          "rct-node": !0,
                          "rct-node-leaf": i,
                          "rct-node-parent": !i,
                          "rct-node-expanded": !i && r,
                          "rct-node-collapsed": !i && !r,
                          "rct-disabled": o,
                        },
                        n,
                      );
                    return h().createElement(
                      "li",
                      { className: s },
                      h().createElement(
                        "span",
                        { className: "rct-text" },
                        this.renderCollapseButton(),
                        this.renderLabel(),
                      ),
                      this.renderChildren(),
                    );
                  },
                },
              ]) &&
                (function (e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1),
                      (o.configurable = !0),
                      "value" in o && (o.writable = !0),
                      Object.defineProperty(e, o.key, o);
                  }
                })(n.prototype, o),
              Object.defineProperty(n, "prototype", { writable: !1 }),
              a
            );
          })(h().PureComponent);
          F(H, "propTypes", {
            checked: u().number.isRequired,
            disabled: u().bool.isRequired,
            expandDisabled: u().bool.isRequired,
            expanded: u().bool.isRequired,
            icons: L.isRequired,
            isLeaf: u().bool.isRequired,
            isParent: u().bool.isRequired,
            label: u().node.isRequired,
            lang: R.isRequired,
            optimisticToggle: u().bool.isRequired,
            showNodeIcon: u().bool.isRequired,
            treeId: u().string.isRequired,
            value: u().oneOfType([u().string, u().number]).isRequired,
            onCheck: u().func.isRequired,
            onExpand: u().func.isRequired,
            children: u().node,
            className: u().string,
            expandOnClick: u().bool,
            icon: u().node,
            showCheckbox: u().bool,
            title: u().string,
            onClick: u().func,
          }),
            F(H, "defaultProps", {
              children: null,
              className: null,
              expandOnClick: !1,
              icon: null,
              showCheckbox: !0,
              title: null,
              onClick: function () {},
            });
          const V = H,
            W = u().oneOfType([
              u().arrayOf(u().string),
              u().arrayOf(u().number),
            ]);
          function q(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var o = Object.getOwnPropertySymbols(e);
              t &&
                (o = o.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                n.push.apply(n, o);
            }
            return n;
          }
          function X(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? q(Object(n), !0).forEach(function (t) {
                    $(e, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(n),
                    )
                  : q(Object(n)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(n, t),
                      );
                    });
            }
            return e;
          }
          function $(e, t, n) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
          var G = {
            label: u().node.isRequired,
            value: u().oneOfType([u().string, u().number]).isRequired,
            disabled: u().bool,
            icon: u().node,
            showCheckbox: u().bool,
            title: u().string,
          };
          const Y = u().oneOfType([
            u().shape(G),
            u().shape(X(X({}, G), {}, { children: u().arrayOf(G).isRequired })),
          ]);
          function Z(e) {
            return (Z =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  })(e);
          }
          function Q(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var o = Object.getOwnPropertySymbols(e);
              t &&
                (o = o.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                n.push.apply(n, o);
            }
            return n;
          }
          function J(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? Q(Object(n), !0).forEach(function (t) {
                    re(e, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(n),
                    )
                  : Q(Object(n)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(n, t),
                      );
                    });
            }
            return e;
          }
          function ee(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                "value" in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o);
            }
          }
          function te(e, t) {
            return (te = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (e, t) {
                  return (e.__proto__ = t), e;
                })(e, t);
          }
          function ne(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called",
              );
            return e;
          }
          function oe(e) {
            return (oe = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
          }
          function re(e, t, n) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
          var ie = (function (e) {
            !(function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(e, "prototype", { writable: !1 }),
                t && te(e, t);
            })(d, e);
            var n,
              o,
              r,
              s,
              l,
              u =
                ((s = d),
                (l = (function () {
                  if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                  if (Reflect.construct.sham) return !1;
                  if ("function" == typeof Proxy) return !0;
                  try {
                    return (
                      Boolean.prototype.valueOf.call(
                        Reflect.construct(Boolean, [], function () {}),
                      ),
                      !0
                    );
                  } catch (e) {
                    return !1;
                  }
                })()),
                function () {
                  var e,
                    t = oe(s);
                  if (l) {
                    var n = oe(this).constructor;
                    e = Reflect.construct(t, arguments, n);
                  } else e = t.apply(this, arguments);
                  return (function (e, t) {
                    if (t && ("object" === Z(t) || "function" == typeof t))
                      return t;
                    if (void 0 !== t)
                      throw new TypeError(
                        "Derived constructors may only return object or undefined",
                      );
                    return ne(e);
                  })(this, e);
                });
            function d(e) {
              var t;
              !(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, d),
                (t = u.call(this, e));
              var n = new E(e);
              return (
                n.flattenNodes(e.nodes),
                n.deserializeLists({
                  checked: e.checked,
                  expanded: e.expanded,
                }),
                (t.state = {
                  id: e.id || "rct-".concat(c()),
                  model: n,
                  prevProps: e,
                }),
                (t.onCheck = t.onCheck.bind(ne(t))),
                (t.onExpand = t.onExpand.bind(ne(t))),
                (t.onNodeClick = t.onNodeClick.bind(ne(t))),
                (t.onExpandAll = t.onExpandAll.bind(ne(t))),
                (t.onCollapseAll = t.onCollapseAll.bind(ne(t))),
                (t.combineMemorized = a()(function (e, t) {
                  return J(J({}, e), t);
                }).bind(ne(t))),
                t
              );
            }
            return (
              (n = d),
              (o = [
                {
                  key: "onCheck",
                  value: function (e) {
                    var t = this.props,
                      n = t.checkModel,
                      o = t.noCascade,
                      r = t.onCheck,
                      i = this.state.model.clone(),
                      s = i.getNode(e.value);
                    i.toggleChecked(e, e.checked, n, o),
                      r(i.serializeList("checked"), J(J({}, s), e));
                  },
                },
                {
                  key: "onExpand",
                  value: function (e) {
                    var t = this.props.onExpand,
                      n = this.state.model.clone(),
                      o = n.getNode(e.value);
                    n.toggleNode(e.value, "expanded", e.expanded),
                      t(n.serializeList("expanded"), J(J({}, o), e));
                  },
                },
                {
                  key: "onNodeClick",
                  value: function (e) {
                    (0, this.props.onClick)(
                      J(J({}, this.state.model.getNode(e.value)), e),
                    );
                  },
                },
                {
                  key: "onExpandAll",
                  value: function () {
                    this.expandAllNodes();
                  },
                },
                {
                  key: "onCollapseAll",
                  value: function () {
                    this.expandAllNodes(!1);
                  },
                },
                {
                  key: "expandAllNodes",
                  value: function () {
                    var e =
                      !(arguments.length > 0 && void 0 !== arguments[0]) ||
                      arguments[0];
                    (0, this.props.onExpand)(
                      this.state.model
                        .clone()
                        .expandAllNodes(e)
                        .serializeList("expanded"),
                    );
                  },
                },
                {
                  key: "determineShallowCheckState",
                  value: function (e, t) {
                    var n = this.state.model.getNode(e.value);
                    return n.isLeaf || t || 0 === e.children.length
                      ? n.checked
                        ? 1
                        : 0
                      : this.isEveryChildChecked(e)
                        ? 1
                        : this.isSomeChildChecked(e)
                          ? 2
                          : 0;
                  },
                },
                {
                  key: "isEveryChildChecked",
                  value: function (e) {
                    var t = this;
                    return e.children.every(function (e) {
                      return 1 === t.state.model.getNode(e.value).checkState;
                    });
                  },
                },
                {
                  key: "isSomeChildChecked",
                  value: function (e) {
                    var t = this;
                    return e.children.some(function (e) {
                      return t.state.model.getNode(e.value).checkState > 0;
                    });
                  },
                },
                {
                  key: "renderTreeNodes",
                  value: function (e) {
                    var t = this,
                      n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {},
                      o = this.props,
                      r = o.expandDisabled,
                      i = o.expandOnClick,
                      s = o.icons,
                      a = o.lang,
                      c = o.noCascade,
                      l = o.onClick,
                      u = o.onlyLeafCheckboxes,
                      f = o.optimisticToggle,
                      p = o.showNodeTitle,
                      v = o.showNodeIcon,
                      m = this.state,
                      y = m.id,
                      g = m.model,
                      b = d.defaultProps.icons,
                      _ = e.map(function (e) {
                        var o = e.value,
                          d = g.getNode(e.value),
                          m = d.isParent
                            ? t.renderTreeNodes(e.children, e)
                            : null;
                        d.checkState = t.determineShallowCheckState(e, c);
                        var _ = u ? d.isLeaf : d.showCheckbox;
                        return !n.value || g.getNode(n.value).expanded
                          ? h().createElement(
                              V,
                              {
                                key: o,
                                checked: d.checkState,
                                className: e.className,
                                disabled: d.disabled,
                                expandDisabled: r,
                                expandOnClick: i,
                                expanded: d.expanded,
                                icon: e.icon,
                                icons: t.combineMemorized(b, s),
                                label: e.label,
                                lang: a,
                                optimisticToggle: f,
                                isLeaf: d.isLeaf,
                                isParent: d.isParent,
                                showCheckbox: _,
                                showNodeIcon: v,
                                title: p ? e.title || e.label : e.title,
                                treeId: y,
                                value: e.value,
                                onCheck: t.onCheck,
                                onClick: l && t.onNodeClick,
                                onExpand: t.onExpand,
                              },
                              m,
                            )
                          : null;
                      });
                    return h().createElement("ol", null, _);
                  },
                },
                {
                  key: "renderExpandAll",
                  value: function () {
                    var e = this.props,
                      t = e.icons,
                      n = t.expandAll,
                      o = t.collapseAll,
                      r = e.lang;
                    return e.showExpandAll
                      ? h().createElement(
                          "div",
                          { className: "rct-options" },
                          h().createElement(
                            _,
                            {
                              className: "rct-option rct-option-expand-all",
                              title: r.expandAll,
                              onClick: this.onExpandAll,
                            },
                            n,
                          ),
                          h().createElement(
                            _,
                            {
                              className: "rct-option rct-option-collapse-all",
                              title: r.collapseAll,
                              onClick: this.onCollapseAll,
                            },
                            o,
                          ),
                        )
                      : null;
                  },
                },
                {
                  key: "renderHiddenInput",
                  value: function () {
                    var e = this.props,
                      t = e.name,
                      n = e.nameAsArray;
                    return void 0 === t
                      ? null
                      : n
                        ? this.renderArrayHiddenInput()
                        : this.renderJoinedHiddenInput();
                  },
                },
                {
                  key: "renderArrayHiddenInput",
                  value: function () {
                    var e = this.props,
                      t = e.checked,
                      n = e.name;
                    return t.map(function (e) {
                      var t = "".concat(n, "[]");
                      return h().createElement("input", {
                        key: e,
                        name: t,
                        type: "hidden",
                        value: e,
                      });
                    });
                  },
                },
                {
                  key: "renderJoinedHiddenInput",
                  value: function () {
                    var e = this.props,
                      t = e.checked,
                      n = e.name,
                      o = t.join(",");
                    return h().createElement("input", {
                      name: n,
                      type: "hidden",
                      value: o,
                    });
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e,
                      n = this.props,
                      o = n.direction,
                      r = n.disabled,
                      i = n.iconsClass,
                      s = n.nodes,
                      a = n.nativeCheckboxes,
                      c = this.state.id,
                      l = this.renderTreeNodes(s),
                      u = t()(
                        (re(
                          (e = {
                            "react-checkbox-tree": !0,
                            "rct-disabled": r,
                          }),
                          "rct-icons-".concat(i),
                          !0,
                        ),
                        re(e, "rct-native-display", a),
                        re(e, "rct-direction-rtl", "rtl" === o),
                        e),
                      );
                    return h().createElement(
                      "div",
                      { className: u, id: c },
                      this.renderExpandAll(),
                      this.renderHiddenInput(),
                      l,
                    );
                  },
                },
              ]),
              (r = [
                {
                  key: "getDerivedStateFromProps",
                  value: function (e, t) {
                    var n = t.model,
                      o = t.prevProps,
                      r = e.disabled,
                      s = e.id,
                      a = e.nodes,
                      c = J(J({}, t), {}, { prevProps: e });
                    return (
                      n.setProps(e),
                      (i()(o.nodes, a) && o.disabled === r) ||
                        (n.reset(), n.flattenNodes(a)),
                      null !== s && (c = J(J({}, c), {}, { id: s })),
                      n.deserializeLists({
                        checked: e.checked,
                        expanded: e.expanded,
                      }),
                      c
                    );
                  },
                },
              ]),
              o && ee(n.prototype, o),
              r && ee(n, r),
              Object.defineProperty(n, "prototype", { writable: !1 }),
              d
            );
          })(h().Component);
          function se(e) {
            return (
              (function (e) {
                if (Array.isArray(e)) return ae(e);
              })(e) ||
              (function (e) {
                if (
                  ("undefined" != typeof Symbol &&
                    null != e[Symbol.iterator]) ||
                  null != e["@@iterator"]
                )
                  return Array.from(e);
              })(e) ||
              (function (e, t) {
                if (e) {
                  if ("string" == typeof e) return ae(e, t);
                  var n = Object.prototype.toString.call(e).slice(8, -1);
                  return (
                    "Object" === n && e.constructor && (n = e.constructor.name),
                    "Map" === n || "Set" === n
                      ? Array.from(e)
                      : "Arguments" === n ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                        ? ae(e, t)
                        : void 0
                  );
                }
              })(e) ||
              (function () {
                throw new TypeError(
                  "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                );
              })()
            );
          }
          function ae(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
            return o;
          }
          function ce(e, t) {
            var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0;
            if (n > t) return [];
            var o = [];
            return (
              e.forEach(function (e) {
                e.children &&
                  (o = [].concat(
                    se(o),
                    [e.value],
                    se(ce(e.children, t, n + 1)),
                  ));
              }),
              o
            );
          }
          re(ie, "propTypes", {
            nodes: u().arrayOf(Y).isRequired,
            checkModel: u().oneOf([w.LEAF, w.ALL]),
            checked: W,
            direction: u().string,
            disabled: u().bool,
            expandDisabled: u().bool,
            expandOnClick: u().bool,
            expanded: W,
            icons: L,
            iconsClass: u().string,
            id: u().string,
            lang: R,
            name: u().string,
            nameAsArray: u().bool,
            nativeCheckboxes: u().bool,
            noCascade: u().bool,
            onlyLeafCheckboxes: u().bool,
            optimisticToggle: u().bool,
            showExpandAll: u().bool,
            showNodeIcon: u().bool,
            showNodeTitle: u().bool,
            onCheck: u().func,
            onClick: u().func,
            onExpand: u().func,
          }),
            re(ie, "defaultProps", {
              checkModel: w.LEAF,
              checked: [],
              direction: "ltr",
              disabled: !1,
              expandDisabled: !1,
              expandOnClick: !1,
              expanded: [],
              icons: {
                check: h().createElement("span", {
                  className: "rct-icon rct-icon-check",
                }),
                uncheck: h().createElement("span", {
                  className: "rct-icon rct-icon-uncheck",
                }),
                halfCheck: h().createElement("span", {
                  className: "rct-icon rct-icon-half-check",
                }),
                expandClose: h().createElement("span", {
                  className: "rct-icon rct-icon-expand-close",
                }),
                expandOpen: h().createElement("span", {
                  className: "rct-icon rct-icon-expand-open",
                }),
                expandAll: h().createElement("span", {
                  className: "rct-icon rct-icon-expand-all",
                }),
                collapseAll: h().createElement("span", {
                  className: "rct-icon rct-icon-collapse-all",
                }),
                parentClose: h().createElement("span", {
                  className: "rct-icon rct-icon-parent-close",
                }),
                parentOpen: h().createElement("span", {
                  className: "rct-icon rct-icon-parent-open",
                }),
                leaf: h().createElement("span", {
                  className: "rct-icon rct-icon-leaf",
                }),
              },
              iconsClass: "fa4",
              id: null,
              lang: {
                collapseAll: "Collapse all",
                expandAll: "Expand all",
                toggle: "Toggle",
              },
              name: void 0,
              nameAsArray: !1,
              nativeCheckboxes: !1,
              noCascade: !1,
              onlyLeafCheckboxes: !1,
              optimisticToggle: !0,
              showExpandAll: !1,
              showNodeIcon: !0,
              showNodeTitle: !1,
              onCheck: function () {},
              onClick: null,
              onExpand: function () {},
            });
          const le = ie;
        })(),
        r
      );
    })())(Pt)),
);
function Fi(e, t) {
  const n = new Blob([t], { type: "application/zip" });
  !(function (e, t, n = !0) {
    const o = document.createElement("a");
    (o.href = t),
      (o.target = n ? "_blank" : "_self"),
      (o.download = e),
      (o.style.display = "none"),
      document.body.appendChild(o),
      o.click(),
      o.remove();
  })(e, URL.createObjectURL(n));
}
function Hi() {
  const e = Wr(),
    t = on((e) => e.dos.ci),
    n = vi(),
    [o, r] = ie(0),
    [i, s] = ie(null),
    [a, c] = ie([]),
    [l, u] = ie([]),
    [d, h] = ie(null),
    [f, p] = ie(!1);
  function v(e) {
    s(e), r(Math.round((Yi(e) / 1024 / 1024) * 100) / 100);
  }
  return (
    ae(() => {
      if (null === n.ci || !t) return;
      let e = !1;
      return (
        n.ci
          .fsTree()
          .then((t) => {
            e || v(Vi(t));
          })
          .catch((t) => {
            console.error(t), e || v(null);
          }),
        () => {
          e = !0;
        }
      );
    }, [t]),
    Ii("div", {
      class: "editor-fs-frame frame-root items-start px-4",
      children: [
        (f || null !== d) &&
          Ii("div", {
            class: "card card-bordered bg-base-100 shadow-xl w-full",
            children: Ii("div", {
              class: "card-body",
              children: [
                Ii("div", {
                  class: "card-title",
                  children: e(f ? "please_wait" : "uploading_file"),
                }),
                Ii("span", {
                  class: "break-words",
                  children: f ? e("making_bundle") : d,
                }),
              ],
            }),
          }),
        !f &&
          null === d &&
          i &&
          Ii("div", {
            className: "fs-tree-view",
            children: [
              Ii(qi, {
                onRefresh: async function () {
                  if ((v(null), null === n.ci || !t)) return;
                  v(Vi(await n.ci.fsTree()));
                },
                onUploadingFile: h,
                onMakingBundle: p,
              }),
              Ii("div", {
                class: "bg-base-200 px-2 py-1 text-right",
                children: [e("size"), ": ", o, " Mb"],
              }),
              Ii("div", {
                class: "fs-tree",
                children: Ii(Ki, {
                  icons: { expandOpen: Ii($i, {}), expandClose: Ii(Gi, {}) },
                  iconsClass: "icon",
                  nativeCheckboxes: !1,
                  onlyLeafCheckboxes: !0,
                  nodes: i,
                  checked: l,
                  onCheck: function (e, t) {
                    u(e);
                  },
                  expanded: a,
                  onExpand: function (e, t) {
                    c(e);
                  },
                }),
              }),
            ],
          }),
      ],
    })
  );
}
function Vi(e) {
  var t;
  const n = [];
  for (const o of (null == (t = e.nodes) ? void 0 : t.sort(Xi)) || [])
    n.push(Wi(o, "."));
  return n;
}
function Wi(e, t) {
  const n = t + "/" + e.name,
    o = { label: e.name, value: n, fsNode: e };
  if (null !== e.nodes) {
    const t = e.nodes.sort(Xi).map((e) => Wi(e, n));
    o.children = t;
  }
  return o;
}
function qi(e) {
  const t = Wr(),
    n = le(null),
    o = le(null),
    r = Qn(),
    i = vi(),
    { onRefresh: s, onUploadingFile: a, onMakingBundle: c } = e;
  function l(e) {
    const t = (e ? o : n).current;
    null !== t && t.click();
  }
  async function u(e) {
    const t = i.ci,
      n = e.target.files;
    if (null !== t && null !== n) {
      try {
        for (const e of n) {
          a(e.name);
          const n = (e.webkitRelativePath ?? "").split("/");
          n.shift();
          const o = n.join("/");
          await t.fsWriteFile(0 == o.length ? e.name : o, e.stream());
        }
      } finally {
        a(null);
      }
      await s();
    }
  }
  return (
    ae(() => {
      null !== n.current &&
        (n.current.setAttribute("directory", ""),
        n.current.setAttribute("webkitdirectory", ""));
    }, [n]),
    Ii("div", {
      class: "h-6 flex flex-row",
      children: [
        Ii("input", {
          class: "hidden",
          type: "file",
          multiple: !0,
          ref: n,
          onChange: u,
        }),
        Ii("input", {
          class: "hidden",
          type: "file",
          multiple: !0,
          ref: o,
          onChange: u,
        }),
        Ii("button", {
          class: "refresh btn-xs rounded-none",
          onClick: s,
          children: Ii("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            class: "w-4 h-4",
            children: Ii("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99",
            }),
          }),
        }),
        Ii("button", {
          class: "add-file btn-xs rounded-none",
          onClick: () => l(!0),
          children: Ii("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            class: "w-4 h-4",
            children: Ii("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z",
            }),
          }),
        }),
        Ii("button", {
          class: "add-dir btn-xs rounded-none",
          onClick: () => l(!1),
          children: Ii("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            class: "w-4 h-4",
            children: Ii("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z",
            }),
          }),
        }),
        Ii("div", { class: "flex-grow" }),
        Ii("button", {
          class: "download btn-xs rounded-none",
          onClick: async function () {
            const e = i.ci;
            if (null !== e) {
              c(!0);
              try {
                const t = await e.persist(!1);
                t && Fi("bundle.jsdos", t);
              } finally {
                c(!1);
              }
            }
          },
          children: Ii("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            class: "w-4 h-4",
            children: Ii("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M9 13.5l3 3m0 0l3-3m-3 3v-6m1.06-4.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z",
            }),
          }),
        }),
        Ii("button", {
          class: "restart btn-xs rounded-none",
          onClick: async function () {
            const e = i.ci;
            if (null !== e && window.confirm(t("fs_restart"))) {
              c(!0);
              try {
                const t = await e.persist(!1);
                t &&
                  (async function (e, t, n) {
                    await Bi("bundle.jsdos", Promise.resolve(e), null, null, n),
                      n.dispatch(Zr.actions.frameConf());
                  })(t, 0, r);
              } finally {
                c(!1);
              }
            }
          },
          children: Ii("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            class: "w-4 h-4",
            children: Ii("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M21 7.5V18M15 7.5V18M3 16.811V8.69c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 010 1.954l-7.108 4.061A1.125 1.125 0 013 16.811z",
            }),
          }),
        }),
      ],
    })
  );
}
function Xi(e, t) {
  return null !== e.nodes && null !== t.nodes
    ? t.name.localeCompare(e.name)
    : null === e.nodes
      ? 1
      : -1;
}
function $i() {
  return Ii("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    class: "w-4 h-4 mr-2",
    children: Ii("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M19.5 8.25l-7.5 7.5-7.5-7.5",
    }),
  });
}
function Gi() {
  return Ii("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    class: "w-4 h-4 mr-2",
    children: Ii("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M8.25 4.5l7.5 7.5-7.5 7.5",
    }),
  });
}
function Yi(e) {
  if (!e) return 0;
  let t = 0;
  for (const n of e)
    null !== n.fsNode.size ? (t += n.fsNode.size) : (t += Yi(n.children));
  return t;
}
function Zi(e) {
  const t = Wr(),
    n = !0 === e.multiline;
  return Ii("div", {
    class:
      e.class + " option flex " + (n ? "flex-col" : "flex-row items-center"),
    children: [
      Ii("div", { class: n ? "mb-2" : "mr-4", children: e.label }),
      Ii("div", {
        class: "flex-grow",
        children: Ii("select", {
          class: e.selectClass ? e.selectClass : n ? "w-full" : "w-28",
          onChange: function (t) {
            void 0 !== e.onSelect && e.onSelect(t.currentTarget.value);
          },
          disabled: !0 === e.disabled,
          children: e.values.map((n) =>
            Ii("option", {
              selected: n === e.selected,
              value: n,
              children: t(n),
            }),
          ),
        }),
      }),
    ],
  });
}
function Qi(e) {
  const t = on((e) => e.dos.backendLocked);
  return Ii(rs, {
    multiline: e.multiline,
    label: "emulation_backend",
    values: [...bi],
    disabled: t,
    selector: (e) => e.dos.backend,
    dispatch: (e) => (Gr.setItem("backend", e), Ci.actions.dosBackend(e)),
  });
}
function Ji(e) {
  const t = "run" === on((e) => e.ui.window);
  return Ii(rs, {
    multiline: e.multiline,
    label: "render_backend",
    values: [..._i],
    disabled: t,
    selector: (e) => e.dos.renderBackend,
    dispatch: (e) => Ci.actions.renderBackend(e),
  });
}
function es(e) {
  return Ii(rs, {
    label: "render_aspect",
    multiline: e.multiline,
    values: [...wi],
    selector: (e) => e.dos.renderAspect,
    dispatch: (e) => Ci.actions.renderAspect(e),
  });
}
function ts(e) {
  return Ii(rs, {
    label: "image_rendering",
    multiline: e.multiline,
    values: [...xi],
    selector: (e) => e.dos.imageRendering,
    dispatch: (e) => Ci.actions.imageRendering(e),
  });
}
function ns(e) {
  return Ii(rs, {
    class: e.class,
    label: "theme",
    values: [...Yr],
    selector: (e) => e.ui.theme,
    dispatch: (e) => Zr.actions.theme(e),
    multiline: e.multiline,
  });
}
function os(e) {
  return Ii(rs, {
    class: e.class,
    label: "FAT16/32 Backend",
    values: ai,
    selector: (e) => e.init.sockdriveBackendName,
    dispatch: (e) => di.actions.setSockdriveBackendName(e),
    multiline: e.multiline,
  });
}
function rs(e) {
  const t = Wr(),
    n = on(e.selector),
    o = eo();
  return Ii(Zi, {
    class: "mt-4 " + e.class,
    selectClass: e.selectClass,
    disabled: e.disabled,
    multiline: e.multiline,
    label: t(e.label),
    selected: n,
    values: e.values,
    onSelect: function (t) {
      o(e.dispatch(t));
    },
  });
}
function is(e) {
  return Ii("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    class: e.class ?? "absolute left-0 top-0 -ml-1 -mt-1 text-error w-4 h-4",
    children: Ii("path", {
      "fill-rule": "evenodd",
      d: "M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z",
      "clip-rule": "evenodd",
    }),
  });
}
function ss() {
  const e = Wr(),
    t = on((e) => e.auth.account),
    { sockdriveEndpoint: n } = on(
      (e) => ci[e.init.sockdriveBackendName] ?? ci["js-dos"],
    ),
    [o, r] = ie([]),
    i = eo(),
    s = (null == t ? void 0 : t.email) ?? "",
    [a, c] = ie(""),
    [l, u] = ie(!0),
    d = le(null),
    h = le(null),
    [f, p] = ie(""),
    [v, m] = ie(""),
    [y, g] = ie(null),
    [_, w] = ie(-1),
    [k, x] = ie(!1),
    C = ((null == t ? void 0 : t.premium) ?? !1) || k;
  function S() {
    t && t.token
      ? (u(!0),
        fetch(n + "/list/drives/" + t.token)
          .then((e) => e.json())
          .then((e) => {
            r(e.sort((e, t) => e.name.localeCompare(t.name)));
          })
          .catch(console.error)
          .finally(() => u(!1)),
        Mi(n, t).then(x).catch(console.error))
      : (r([
          {
            fork_of: [],
            name: "fat32-2gb",
            owner: "system",
            template: "fat32-2gb",
          },
          {
            fork_of: [],
            name: "fat16-256m",
            owner: "system",
            template: "fat16-256m",
          },
          {
            fork_of: ["system/fat16-256m"],
            name: "win95-v1",
            owner: "system",
            template: "fat16-256m",
          },
          {
            fork_of: ["system/fat16-256m"],
            name: "dos7.1-v1",
            owner: "system",
            template: "fat16-256m",
          },
          {
            fork_of: ["system/fat32-2gb"],
            name: "win98-v1",
            owner: "system",
            template: "fat32-2gb",
          },
          {
            fork_of: ["system/fat32-2gb"],
            name: "win95-v2",
            owner: "system",
            template: "fat32-2gb",
          },
        ]),
        u(!1));
  }
  return (
    ae(() => {
      S();
    }, [null == t ? void 0 : t.token, n]),
    Ii("div", {
      class: "frame-root items-start gap-3 px-4",
      children: [
        Ii(os, { multiline: !0, class: "w-full " }),
        Ii("input", {
          class: "input input-bordered input-sm w-full",
          placeholder: e("filter"),
          value: a,
          onChange: (e) => c(e.currentTarget.value ?? ""),
        }),
        Ii("div", {
          class: "w-full",
          children: [
            !l &&
              Ii("table", {
                class: "table w-full",
                children: [
                  Ii("thead", {
                    children: Ii("tr", {
                      children: [
                        Ii("th", { children: e("net_drives") }),
                        Ii("th", {}),
                      ],
                    }),
                  }),
                  Ii("tbody", {
                    children: o.map(({ name: n, owner: o, fork_of: r }, c) =>
                      a.length > 0 && -1 === o.indexOf(a) && -1 === n.indexOf(a)
                        ? null
                        : Ii(b, {
                            children: Ii("tr", {
                              children: [
                                Ii("td", {
                                  onClick: () => {},
                                  children: [
                                    Ii("p", {
                                      class: "font-bold",
                                      children: n,
                                    }),
                                    r.map((e) =>
                                      Ii("p", {
                                        class: "text-xs",
                                        children: ["Â Â Â Â ", e],
                                      }),
                                    ),
                                    o !== (null == t ? void 0 : t.email) &&
                                      Ii("p", {
                                        class: "text-xs",
                                        children: o,
                                      }),
                                  ],
                                }),
                                C &&
                                  Ii("td", {
                                    children: [
                                      (null == t ? void 0 : t.token) &&
                                        Ii("div", {
                                          class: "btn btn-ghost btn-xs",
                                          onClick: () => {
                                            var e;
                                            w(c),
                                              null == (e = d.current) ||
                                                e.showModal();
                                          },
                                          children: "Fork",
                                        }),
                                      (null == t ? void 0 : t.token) &&
                                        o === s &&
                                        Ii("div", {
                                          class: "btn btn-xs btn-ghost",
                                          onClick: () => {
                                            var e;
                                            w(c),
                                              null == (e = h.current) ||
                                                e.showModal();
                                          },
                                          children: e("delete"),
                                        }),
                                    ],
                                  }),
                                !C &&
                                  Ii("td", {
                                    children: Ii("div", {
                                      class: "cursor-pointer",
                                      onClick: () =>
                                        i(Zr.actions.warnOnPremium(!0)),
                                      children: Ii(is, { class: "text-error" }),
                                    }),
                                  }),
                              ],
                            }),
                          }),
                    ),
                  }),
                ],
              }),
            l && Ii("span", { class: "loading loading-spinner loading-lg" }),
          ],
        }),
        Ii("dialog", {
          ref: d,
          class: "modal",
          children:
            !l &&
            _ >= 0 &&
            null !== t &&
            Ii("div", {
              class: "modal-box",
              children: [
                Ii("h3", {
                  class: "font-bold text-lg",
                  children: [e("enter_name_of_drive"), ":"],
                }),
                Ii("p", {
                  class: "text-xs text-neutral-content mt-2",
                  children: ["fork of: ", o[_].owner, "/", o[_].name],
                }),
                Ii("input", {
                  type: "text",
                  placeholder: "name",
                  value: f,
                  class: "mt-6 input input-bordered input-primary w-full",
                  onChange: (e) => p(e.currentTarget.value),
                }),
                null !== y &&
                  Ii("p", {
                    class: "mt-2 text-error",
                    children: [e("error"), ": ", y],
                  }),
                Ii("div", {
                  class: "modal-action",
                  children: [
                    f.length > 0 &&
                      Ii("button", {
                        class: "btn mr-2 btn-primary",
                        onClick: () => {
                          w(-1),
                            u(!0),
                            fetch(
                              `${n}/fork/drive/${o[_].owner}/${o[_].name}/${f}/${t.token}`,
                              { method: "POST" },
                            )
                              .then((e) => e.json())
                              .then((e) => {
                                var t;
                                if (e.error) throw new Error(e.error);
                                r([]),
                                  S(),
                                  null == (t = d.current) || t.close();
                              })
                              .catch((e) => {
                                console.error(e.message),
                                  i(
                                    Zr.actions.showToast({
                                      message: e.message,
                                      intent: "error",
                                    }),
                                  );
                              })
                              .finally(() => {
                                u(!1);
                              });
                        },
                        children: e("fork"),
                      }),
                    Ii("button", {
                      class: "btn",
                      onClick: () => {
                        var e;
                        return null == (e = d.current) ? void 0 : e.close();
                      },
                      children: e("close"),
                    }),
                  ],
                }),
              ],
            }),
        }),
        Ii("dialog", {
          ref: h,
          class: "modal",
          children:
            !l &&
            _ >= 0 &&
            null !== t &&
            Ii("div", {
              class: "modal-box",
              children: [
                Ii("h3", {
                  class: "font-bold text-lg",
                  children: [e("enter_name_of_drive"), ":"],
                }),
                Ii("p", {
                  class: "text-xs text-neutral mt-2",
                  children: [o[_].owner, "/", o[_].name],
                }),
                Ii("input", {
                  type: "text",
                  placeholder: "name",
                  value: v,
                  class: "mt-6 input input-bordered input-primary w-full",
                  onChange: (e) => m(e.currentTarget.value),
                }),
                null !== y &&
                  Ii("p", {
                    class: "mt-2 text-error",
                    children: [e("error"), ": ", g],
                  }),
                Ii("div", {
                  class: "modal-action",
                  children: [
                    v === o[_].owner + "/" + o[_].name &&
                      Ii("button", {
                        class: "btn mr-2 btn-primary",
                        onClick: () => {
                          w(-1),
                            u(!0),
                            fetch(
                              `${n}/fork/delete/${o[_].owner}/${o[_].name}/${t.token}`,
                              { method: "POST" },
                            )
                              .then((e) => e.json())
                              .then((e) => {
                                var t;
                                if (e.error) throw new Error(e.error);
                                {
                                  const e = [...o];
                                  e.splice(_, 1), r(e);
                                }
                                null == (t = h.current) || t.close();
                              })
                              .catch((e) => {
                                console.error(e.message),
                                  g(e.message),
                                  i(
                                    Zr.actions.showToast({
                                      message: e.message,
                                      intent: "error",
                                    }),
                                  );
                              })
                              .finally(() => {
                                u(!1);
                              });
                        },
                        children: e("delete"),
                      }),
                    Ii("button", {
                      class: "btn",
                      onClick: () => {
                        var e;
                        return null == (e = h.current) ? void 0 : e.close();
                      },
                      children: e("close"),
                    }),
                  ],
                }),
              ],
            }),
        }),
      ],
    })
  );
}
function as(e) {
  const t = le(null);
  return (
    ae(() => {
      null !== t &&
        null !== t.current &&
        (t.current.indeterminate = e.intermediate);
    }, [t, e.intermediate]),
    Ii("div", {
      className: e.class + " form-control option",
      onClick: function () {
        e.onChange && e.onChange(!(!0 === e.checked));
      },
      children: Ii("label", {
        className: "label cursor-pointer",
        children: [
          Ii("span", { className: "label-text mr-6", children: e.label }),
          Ii("input", {
            ref: t,
            checked: !0 === e.checked,
            type: "checkbox",
            className:
              "toggle " + (e.checked ? " toggle-primary " : "") + e.toggleClass,
            disabled: !0 === e.disabled,
          }),
        ],
      }),
    })
  );
}
function cs() {
  const e = on((e) => e.dos.ipx),
    t = e.backends,
    n = e.backend,
    o = e.room,
    r = e.backends.find((e) => e.name === n) ?? t[0],
    i = "disconnected" !== e.status,
    s = Wr(),
    a = eo(),
    c =
      "connected" === e.status
        ? location.href +
          (function () {
            if (location.href.endsWith("?") || location.href.endsWith("&"))
              return "";
            return location.href.indexOf("?") > 0 ? "&" : "?";
          })() +
          "ipx=1&ipxBackend=" +
          n +
          "&room=" +
          o
        : null;
  return Ii("div", {
    class: "network-frame frame-root items-start px-4 relative",
    children: [
      Ii("div", {
        class: "ml-1 mb-4 w-full flex flex-row items-center",
        children: Ii(Zi, {
          class: "text-sm",
          selectClass: "w-full",
          label: s("server") + ":",
          selected: r.name,
          values: t.map((e) => e.name),
          disabled: i,
          onSelect: function (e) {
            var t;
            (t = e), a(Ci.actions.setIpxBackend(t));
          },
        }),
      }),
      Ii("div", {
        class: "form-control w-full",
        children: [
          Ii("label", {
            class: "label",
            children: Ii("span", {
              class: "label-text",
              children: [s("room"), ":"],
            }),
          }),
          Ii("input", {
            type: "text",
            class: "input w-full input-sm input-bordered",
            disabled: i,
            onChange: (e) => {
              return (t = e.currentTarget.value), void a(Ci.actions.setRoom(t));
              var t;
            },
            value: o,
          }),
        ],
      }),
      Ii(as, {
        class: "mt-4 " + ("error" === e.status ? "error" : ""),
        onChange: function () {
          "connected" === e.status
            ? a(Ci.actions.disconnectIpx({}))
            : a(Ci.actions.connectIpx({ room: o, address: r.host }));
        },
        label: "IPX",
        checked: "connected" === e.status,
        disabled: "connecting" === e.status,
        intermediate: "connecting" === e.status,
      }),
      null !== c &&
        Ii("div", {
          class: "mt-4 text-sm alert alert-success shadow-lg flex flex-col",
          children: [
            Ii("div", { children: [s("copy_net_link"), ":"] }),
            Ii("div", {
              class: "flex flex-row",
              children: [
                Ii("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  class:
                    "w-6 h-6 mx-1 cursor-pointer hover:text-accent-focus flex-shrink-0",
                  fill: "none",
                  onClick: function () {
                    c &&
                      (!(async function (e, t, n) {
                        if (!navigator.clipboard) return;
                        try {
                          await navigator.clipboard.writeText(e),
                            n(
                              Zr.actions.showToast({
                                message: t("copied"),
                                intent: "success",
                              }),
                            );
                        } catch (o) {
                          n(
                            Zr.actions.showToast({
                              message: t("error"),
                              intent: "error",
                            }),
                          );
                        }
                      })(c, s, a),
                      a(Zr.actions.frameNone()));
                  },
                  viewBox: "0 0 24 24",
                  "stroke-width": "1.5",
                  stroke: "currentColor",
                  children: Ii("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75",
                  }),
                }),
                Ii("div", {
                  class: "contextmenu underline break-all",
                  target: "_blank",
                  children: c,
                }),
              ],
            }),
          ],
        }),
    ],
  });
}
function ls() {
  const e = Wr(),
    t = eo(),
    n = on((e) => e.ui.editor);
  return Ii(as, {
    class: "mt-4",
    label: e("editor"),
    checked: n,
    onChange: (e) => t(Zr.actions.setEditor(e)),
  });
}
function us() {
  const e = Wr(),
    t = eo(),
    n = on((e) => e.dos.mouseCapture);
  return Ii(as, {
    class: "mt-4",
    label: e("mouse_lock"),
    checked: n,
    onChange: (e) => t(Ci.actions.mouseCapture(e)),
  });
}
function ds() {
  const e = Wr(),
    t = eo(),
    n = on((e) => e.dos.sockdriveNative);
  return Ii(as, {
    class: "mt-4",
    label: e("sockdrive_native"),
    checked: n,
    onChange: (e) => t(Ci.actions.setSockdriveNative(e)),
  });
}
function hs() {
  const e = Wr(),
    t = eo(),
    n = on((e) => !e.dos.noCursor);
  return Ii(as, {
    class: "mt-4",
    label: e("system_cursor"),
    checked: n,
    onChange: (e) => t(Ci.actions.noCursor(!e)),
  });
}
function fs() {
  const e = Wr(),
    t = eo(),
    n = on((e) => e.dos.mobileControls);
  return Ii(as, {
    class: "mt-4",
    label: e("mobile_controls"),
    checked: n,
    onChange: (e) => t(Ci.actions.mobileControls(e)),
  });
}
function ps() {
  const e = Wr(),
    t = eo(),
    n = on((e) => e.dos.mirroredControls);
  return Ii(as, {
    class: "mt-4",
    label: e("mirrored_controls"),
    checked: n,
    onChange: (e) => t(Ci.actions.mirroredControls(e)),
  });
}
function vs() {
  const e = Wr(),
    t = eo(),
    n = on((e) => e.dos.paused),
    o = "run" !== on((e) => e.ui.window);
  return Ii(as, {
    class: "mt-4",
    label: e("pause"),
    checked: n,
    disabled: o,
    onChange: (e) => t(Ci.actions.paused(e)),
  });
}
function ms() {
  const e = Wr(),
    t = eo(),
    n = on((e) => e.dos.worker),
    o = on((e) => e.dos.backendHardware),
    r = "run" === on((e) => e.ui.window),
    i = vi();
  return o && i.options.backendHardware
    ? null
    : Ii(as, {
        class: "mt-4",
        label: e("worker"),
        checked: n,
        disabled: r,
        onChange: (e) => t(Ci.actions.dosWorker(e)),
      });
}
function ys() {
  const e = Wr(),
    t = eo(),
    n = on((e) => e.dos.backendHardware);
  return vi().options.backendHardware
    ? Ii(as, {
        class: "mt-4",
        label: e("hardware"),
        checked: n,
        onChange: (e) => t(Ci.actions.dosBackendHardware(e)),
      })
    : null;
}
function gs() {
  const e = Wr(),
    t = eo(),
    n = on((e) => e.auth.account),
    o = on((e) => "dosboxX" === e.dos.backend),
    r = on((e) => e.dos.sockdriveWrite) && null !== n;
  return o
    ? Ii(as, {
        class: "mt-4",
        label: e("fat_write"),
        checked: r,
        onChange: (e) => {
          n
            ? n.premium || t(Zr.actions.warnOnPremium(!0))
            : t(Zr.actions.warnOnKey(!0)),
            t(Ci.actions.setSockdriveWrite(e));
        },
      })
    : null;
}
function bs(e) {
  const t = le(null),
    n = le(null);
  ae(() => {
    if (null === (null == t ? void 0 : t.current)) return;
    const n = t.current;
    let o = !1;
    function r(t) {
      const o = n.getBoundingClientRect(),
        r = Math.min(1, Math.max(0, (t.clientX - o.left) / o.width));
      e.onChange(r);
    }
    function i(e) {
      (o = !0), r(e);
    }
    function s(e) {
      o && r(e);
    }
    function a(e) {
      o = !1;
    }
    return (
      n.addEventListener("pointerdown", i),
      n.addEventListener("pointermove", s),
      n.addEventListener("pointerup", a),
      n.addEventListener("pointercancel", a),
      n.addEventListener("pointerleave", a),
      () => {
        n.removeEventListener("pointerdown", i),
          n.removeEventListener("pointermove", s),
          n.removeEventListener("pointerup", a),
          n.removeEventListener("pointercancel", a),
          n.removeEventListener("pointerleave", a);
      }
    );
  }, [t]);
  const o = Math.min(Math.max(0, 100 * e.value), 100);
  return Ii("div", {
    class: e.class + " slider option",
    children: [
      Ii("div", { class: "label", children: e.label }),
      Ii("div", {
        class: "touch",
        ref: t,
        children: [
          Ii("div", { class: "bg" }),
          Ii("div", {
            class: "point",
            ref: n,
            style: { left: "calc(" + o + "% - 12px)" },
          }),
        ],
      }),
    ],
  });
}
function _s(e) {
  const t = Wr(),
    n = on((e) => e.dos.mouseSensitivity),
    o = eo();
  return Ii(bs, {
    class: e.class,
    label: t("mouse_sensitivity"),
    value: n,
    onChange: (e) => o(Ci.actions.mouseSensitivity(e)),
  });
}
function ws(e) {
  const t = Wr(),
    n = on((e) => e.dos.scaleControls),
    o = eo();
  return Ii(bs, {
    class: e.class,
    label: t("scale_controls"),
    value: n,
    onChange: (e) => o(Ci.actions.scaleControls(e)),
  });
}
function ks(e) {
  const t = Wr(),
    n = on((e) => e.dos.volume),
    o = eo();
  return Ii(bs, {
    class: e.class,
    label: t("volume"),
    value: n,
    onChange: (e) => o(Ci.actions.volume(e)),
  });
}
function xs(e) {
  return Ii("div", {
    class: "settings-frame frame-root items-start pl-4",
    children: [
      Ii(vs, {}),
      Ii(hs, {}),
      Ii(us, {}),
      Ii(fs, {}),
      Ii(ps, {}),
      Ii(ws, { class: "mt-4" }),
      Ii(_s, {}),
      Ii(ks, {}),
      Ii(es, { multiline: !0 }),
      Ii(ts, { multiline: !0 }),
      Ii(ns, { multiline: !0 }),
    ],
  });
}
function Cs() {
  const e = vi(),
    t = on((e) => e.dos.backend),
    n = on((e) => e.dos.backendHardware) && e.options.backendHardware,
    o = on((e) => e.dos.emuVersion),
    r = on((e) => e.dos.ciStartedAt),
    i = on((e) => e.dos.stats),
    s = on((e) => e.dos.sockdriveInfo),
    a = Math.round(on((e) => e.dos.stats.cyclesPerMs) / 1e3),
    c = Math.round((i.driveRecv / 1024 / 1024) * 100) / 100,
    l = Math.round((c / (Date.now() - r)) * 1e3 * 100) / 100;
  return Ii("div", {
    class: "stats-frame frame-root items-start px-4",
    children: [
      Ii("div", {
        class: "text-center mb-2 text-xs",
        children: ["js-dos/emu: ", "8.3.14", "/", o],
      }),
      Ii("div", {
        class: "w-full overflow-x-auto",
        children: Ii("table", {
          class: "table table-compact w-full",
          children: [
            Ii("thead", {
              children: Ii("tr", {
                children: [
                  Ii("th", { children: "Metric" }),
                  Ii("th", { children: "Value" }),
                ],
              }),
            }),
            Ii("tbody", {
              children: [
                Ii("tr", {
                  children: [
                    Ii("td", { children: "Emulation" }),
                    Ii("td", { children: t + " " + (n ? "(WS)" : "(WA)") }),
                  ],
                }),
                Ii("tr", {
                  children: [
                    Ii("td", { children: "Uptime" }),
                    Ii("td", {
                      children: [Math.round((Date.now() - r) / 100) / 10, " s"],
                    }),
                  ],
                }),
                Ii("tr", {
                  children: [
                    Ii("td", { children: "Cycles/ms" }),
                    a <= 0 && Ii("td", { children: "~ K" }),
                    a > 0 && a <= 1e3 && Ii("td", { children: [a, " K"] }),
                    a > 1e3 &&
                      Ii("td", { children: [Math.round(a / 1e3), " KK"] }),
                  ],
                }),
                Ii("tr", {
                  children: [
                    Ii("td", { children: "NonSkipSleep COUNT/s" }),
                    Ii("td", { children: i.nonSkippableSleepPreSec }),
                  ],
                }),
                Ii("tr", {
                  children: [
                    Ii("td", { children: "Sleep COUNT/s" }),
                    Ii("td", { children: i.sleepPerSec }),
                  ],
                }),
                Ii("tr", {
                  children: [
                    Ii("td", { children: "Sleep TIME/s" }),
                    Ii("td", { children: i.sleepTimePerSec }),
                  ],
                }),
                Ii("tr", {
                  children: [
                    Ii("td", { children: "Msg FRAME/s" }),
                    Ii("td", { children: i.framePerSec }),
                  ],
                }),
                Ii("tr", {
                  children: [
                    Ii("td", { children: "Msg SOUND/s" }),
                    Ii("td", { children: i.soundPerSec }),
                  ],
                }),
                Ii("tr", {
                  children: [
                    Ii("td", { children: "Msg SENT/s" }),
                    Ii("td", { children: i.msgSentPerSec }),
                  ],
                }),
                Ii("tr", {
                  children: [
                    Ii("td", { children: "Msg RECV/s" }),
                    Ii("td", { children: i.msgRecvPerSec }),
                  ],
                }),
                Ii("tr", {
                  children: [
                    Ii("td", { children: "Net SENT/s" }),
                    Ii("td", {
                      children: [
                        Math.round((i.netSent / 1024) * 100) / 100,
                        "Kb",
                      ],
                    }),
                  ],
                }),
                Ii("tr", {
                  children: [
                    Ii("td", { children: "Net RECV/s" }),
                    Ii("td", {
                      children: [
                        Math.round((i.netRecv / 1024) * 100) / 100,
                        "Kb",
                      ],
                    }),
                  ],
                }),
                s.map((e, t) =>
                  Ii("tr", {
                    children: [
                      Ii("td", { children: ["HDD ", 0 == t ? "C:" : "D:"] }),
                      Ii("td", {
                        children: [
                          e.drive.replace("/", " "),
                          " ",
                          e.write ? " RW" : " RO",
                        ],
                      }),
                    ],
                  }),
                ),
                Ii("tr", {
                  children: [
                    Ii("td", { children: "HDD RECV/s" }),
                    Ii("td", { children: [c, "Mb (~", l, "Mb/s)"] }),
                  ],
                }),
                Ii("tr", {
                  children: [
                    Ii("td", { children: "HDD SENT/s" }),
                    Ii("td", {
                      children: [
                        Math.round((i.driveSent / 1024 / 1024) * 100) / 100,
                        "Mb",
                      ],
                    }),
                  ],
                }),
                Ii("tr", {
                  children: [
                    Ii("td", { children: "HDD Cache" }),
                    Ii("td", {
                      children: [
                        Math.round((i.driveCacheUsed / 1024 / 1024) * 100) /
                          100,
                        "Mb",
                      ],
                    }),
                  ],
                }),
                Ii("tr", {
                  children: [
                    Ii("td", { children: "HDD Cache Hit/Miss" }),
                    Ii("td", {
                      children: [i.driveCacheHit, " / ", i.driveCacheMiss],
                    }),
                  ],
                }),
                Ii("tr", {
                  children: [
                    Ii("td", { children: "HDD Buffered" }),
                    Ii("td", { children: i.driveBufferedAmount }),
                  ],
                }),
                Ii("tr", {
                  children: [
                    Ii("td", { children: "HDD RX" }),
                    Ii("td", {
                      children: i.driveIo.map((e) => e.read).join(", "),
                    }),
                  ],
                }),
                Ii("tr", {
                  children: [
                    Ii("td", { children: "HDD TX" }),
                    Ii("td", {
                      children: i.driveIo.map((e) => e.write).join(", "),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function Ss() {
  const e = on((e) => e.dos.emuVersion);
  return Ii("div", {
    class: "pre-run-window",
    children: [
      Ii(Os, {}),
      Ii(Es, {}),
      Ii("div", {
        class: "self-end mt-8 absolute bottom-3",
        children: Ii("span", {
          class: "text-ellipsis overflow-hidden",
          children: ["js-", "8.3.14", "/emu-", e.substring(0, e.indexOf(" "))],
        }),
      }),
    ],
  });
}
let Ps = "-----";
function Es() {
  const e = Wr(),
    t = on((e) => e.auth.account),
    n = on((e) => e.ui.kiosk),
    o = on((e) => e.ui.noCloud),
    [r, i] = ie((null == t ? void 0 : t.token) ?? ""),
    { sockdriveEndpoint: s } = on(
      (e) => ci[e.init.sockdriveBackendName] ?? ci["js-dos"],
    ),
    [a, c] = ie(!0),
    l = ((null == t ? void 0 : t.premium) ?? !1) || a,
    u = vi(),
    d = on((e) => e.ui.warnOnKey),
    h = on((e) => e.ui.warnOnPremium),
    f = eo(),
    p = Qn();
  if (
    (ae(() => {
      Mi(s, t).then(c);
    }, [null == t ? void 0 : t.token, s]),
    n || o)
  )
    return null;
  function v(e) {
    e !== Ps &&
      (f(Zr.actions.warnOnKey(!1)),
      f(Zr.actions.warnOnPremium(!1)),
      (Ps = e),
      i(e),
      oi(e)
        .then(({ token: e, account: t }) => {
          e === Ps &&
            (f(ni.actions.setAccount(t)),
            null !== t &&
              u.options.url &&
              Ti(u.options.url, p).catch((e) => {
                p.dispatch(Ci.actions.bndError(e.message));
              }));
        })
        .catch(console.error));
  }
  function m() {
    mi(u, "open-key");
  }
  ae(() => {
    oi(r).then(({ token: e, account: t }) => {
      f(ni.actions.setAccount(t));
    });
  }, []);
  const y = "dz.caiiiycuk@gmail.com" === (null == t ? void 0 : t.email),
    g = Ii("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      "stroke-width": "1.5",
      stroke: "currentColor",
      class: "size-4 inline mr-2 text-warning opacity-50",
      children: Ii("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z",
      }),
    });
  return Ii("div", {
    class: "mt-4 flex flex-col items-center",
    children: [
      null === t && e("hello_guest"),
      null !== t &&
        Ii("div", {
          class: y ? "bg-warning px-2" : "",
          children: [
            e("hello") + ", " + (y ? "DOS Zone" : (t.name ?? t.email)) + "!",
            Ii("span", {
              class: "link link-neutral lowercase inline ml-1",
              onClick: () => v(""),
              children: ["(", e("logout"), ")"],
            }),
          ],
        }),
      Ii("div", {
        class: "mt-2",
        children: [
          null === t &&
            Ii(b, {
              children: [
                e("no_cloud_access"),
                Ii("a", {
                  href: "https://v8.js-dos.com/key",
                  onClick: m,
                  target: "_blank",
                  class: "link link-neutral ml-1",
                  children: e("key"),
                }),
                "Â ",
                e("no_cloud_access2"),
                ".",
              ],
            }),
          null !== t &&
            !1 === l &&
            Ii(b, {
              children: [
                g,
                Ii("span", {
                  class: h ? "text-warning font-bold" : "",
                  children: [
                    e("read_only_access"),
                    Ii("a", {
                      href: "https://v8.js-dos.com/key",
                      onClick: m,
                      target: "_blank",
                      class: "link ml-1 lowercase " + (h ? "" : "link-neutral"),
                      children: ["(", e("fix"), ")"],
                    }),
                  ],
                }),
              ],
            }),
        ],
      }),
      null === t &&
        Ii("div", {
          class: "-ml-4",
          children: [
            g,
            Ii("input", {
              maxLength: 5,
              value: r,
              onChange: (e) => v(e.currentTarget.value),
              placeholder: "-----",
              class:
                "input input-xs input-bordered mt-4 mb-4 text-center w-20 bg-blend-multiply bg-opacity-40" +
                (d ? " input-warning animate-pulse" : ""),
            }),
          ],
        }),
    ],
  });
}
function Os(e) {
  const t = on((e) => e.editor.configChanged),
    n = on((e) => e.editor.bundleConfig),
    o = on((e) => "none" !== e.ui.frame),
    r = vi(),
    i = eo(),
    s = Wr();
  async function a() {
    var e;
    if (t) {
      const t = n,
        s = null == (e = r.loadedBundle) ? void 0 : e.bundle;
      if (null === s || null === t || !ArrayBuffer.isView(s))
        throw new Error(
          "Unexpected behaviour (internal state is broken), bundle is null",
        );
      try {
        (r.loadedBundle.bundle = await emulators.bundleUpdateConfig(s, t)),
          i(Ci.actions.bndPlay({}));
      } catch (o) {
        i(Ci.actions.bndError(o.message ?? "unexpected error"));
      }
    } else i(Ci.actions.bndPlay({}));
  }
  return !0 === e.button
    ? Ii("div", {
        class: "btn btn-accent w-full sm:hidden",
        onClick: a,
        children: [
          Ii("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            class: "w-6 h-6",
            children: [
              Ii("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
              }),
              Ii("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z",
              }),
            ],
          }),
          s("play"),
        ],
      })
    : Ii("div", {
        class:
          e.class +
          " relative cursor-pointer w-1/4 h-1/4 min-w-48 min-h-48 max-w-96 max-h-96",
        onClick: a,
        children: [
          Ii("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            class: "w-full h-full play-button",
            children: [
              Ii("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
              }),
              Ii("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z",
              }),
            ],
          }),
          Ii("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            class:
              "w-10 h-10 absolute right-0 bottom-0 cursor-pointer" +
              (o ? " sidebar-highlight" : ""),
            onClick: (e) => {
              i(o ? Zr.actions.frameNone() : Zr.actions.framePreRun()),
                e.stopPropagation();
            },
            children: [
              Ii("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z",
              }),
              Ii("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z",
              }),
            ],
          }),
        ],
      });
}
function Ms(e) {
  return Ii("div", {
    class: "prerun-frame frame-root items-start pl-4",
    children: [
      Ii(Os, { button: !0 }),
      Ii(hs, {}),
      Ii(us, {}),
      Ii(fs, {}),
      Ii(ps, {}),
      Ii(ws, { class: "mt-4" }),
      Ii(_s, {}),
      Ii(ks, {}),
      Ii(Qi, { multiline: !0 }),
      Ii(ms, {}),
      Ii(Ji, { multiline: !0 }),
      Ii(es, { multiline: !0 }),
      Ii(ys, {}),
      Ii(gs, {}),
      Ii(ls, {}),
      Ii(ds, {}),
      Ii(ns, { multiline: !0 }),
    ],
  });
}
function js(e) {
  const t = on((e) => e.ui.frame),
    n = on((e) => e.ui.frameXs),
    o = on((e) => e.ui.wideScreen);
  return "none" === t
    ? null
    : Ii("div", {
        class: "frame " + (n ? " frame-xs " : "") + (n || o ? "" : " frame-md"),
        children: [
          "settings" === t && Ii(xs, {}),
          "editor-conf" === t && Ii(Ni, {}),
          "editor-fs" === t && Ii(Hi, {}),
          "network" === t && Ii(cs, {}),
          "stats" === t && Ii(Cs, {}),
          "fat-drives" === t && Ii(ss, {}),
          "prerun" === t && Ii(Ms, {}),
        ],
      });
}
function As(e, t) {
  (async () => {
    const n = t.getState().ui.softFullscreen,
      o = pi(t),
      r = o.root;
    e
      ? n
        ? r.classList.add("jsdos-fullscreen-workaround")
        : r.requestFullscreen
          ? await r.requestFullscreen()
          : r.webkitRequestFullscreen
            ? await r.webkitRequestFullscreen()
            : r.mozRequestFullScreen
              ? await r.mozRequestFullScreen()
              : r.msRequestFullscreen
                ? await r.msRequestFullscreen()
                : r.webkitEnterFullscreen
                  ? await r.webkitEnterFullscreen()
                  : r.classList.add("jsdos-fullscreen-workaround")
      : r.classList.contains("jsdos-fullscreen-workaround")
        ? r.classList.remove("jsdos-fullscreen-workaround")
        : document.exitFullscreen
          ? document.exitFullscreen()
          : document.webkitExitFullscreen
            ? document.webkitExitFullscreen()
            : document.mozCancelFullScreen
              ? document.mozCancelFullScreen()
              : document.msExitFullscreen && document.msExitFullscreen(),
      t.dispatch(Zr.actions.setFullScreen(e)),
      mi(o, "fullscreen-change", e);
  })().catch((e) => {
    console.error("Can't enter fullscreen", e);
  });
}
function Ds(e) {
  const t = on((e) => e.ui.fullScreen),
    n = Qn();
  return Ii("div", {
    class: "fullscreen-button sidebar-button " + e.class,
    onClick: function () {
      As(!t, n);
    },
    children: Ii("div", {
      class: "w-full h-full scale-75 hover:scale-90",
      children: [
        !t &&
          Ii("svg", {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            x: "0px",
            y: "0px",
            viewBox: "0 0 16 16",
            fill: "currentColor",
            stroke: "none",
            "enable-background": "new 0 0 16 16",
            children: Ii("g", {
              children: Ii("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M5.99,8.99c-0.28,0-0.53,0.11-0.71,0.29l-3.29,3.29v-1.59c0-0.55-0.45-1-1-1 s-1,0.45-1,1v4c0,0.55,0.45,1,1,1h4c0.55,0,1-0.45,1-1s-0.45-1-1-1H3.41L6.7,10.7c0.18-0.18,0.29-0.43,0.29-0.71 C6.99,9.44,6.54,8.99,5.99,8.99z M14.99-0.01h-4c-0.55,0-1,0.45-1,1s0.45,1,1,1h1.59L9.28,5.29C9.1,5.47,8.99,5.72,8.99,5.99 c0,0.55,0.45,1,1,1c0.28,0,0.53-0.11,0.71-0.29l3.29-3.29v1.59c0,0.55,0.45,1,1,1s1-0.45,1-1v-4C15.99,0.44,15.54-0.01,14.99-0.01 z",
              }),
            }),
          }),
        t &&
          Ii("svg", {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            x: "0px",
            y: "0px",
            viewBox: "0 0 16 16",
            fill: "currentColor",
            stroke: "none",
            "enable-background": "new 0 0 16 16",
            children: Ii("g", {
              children: Ii("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M15.99,0.99c0-0.55-0.45-1-1-1c-0.28,0-0.53,0.11-0.71,0.29l-3.29,3.29V1.99 c0-0.55-0.45-1-1-1s-1,0.45-1,1v4c0,0.55,0.45,1,1,1h4c0.55,0,1-0.45,1-1s-0.45-1-1-1h-1.59L15.7,1.7 C15.88,1.52,15.99,1.27,15.99,0.99z M5.99,8.99h-4c-0.55,0-1,0.45-1,1s0.45,1,1,1h1.59l-3.29,3.29c-0.18,0.18-0.29,0.43-0.29,0.71 c0,0.55,0.45,1,1,1c0.28,0,0.53-0.11,0.71-0.29l3.29-3.29v1.59c0,0.55,0.45,1,1,1s1-0.45,1-1v-4C6.99,9.44,6.54,8.99,5.99,8.99z",
              }),
            }),
          }),
      ],
    }),
  });
}
function Ts(e) {
  const t = "network" === on((e) => e.ui.frame),
    n = on((e) => "connected" !== e.dos.ipx.status),
    o = eo();
  return Ii("div", {
    class:
      "network-button sidebar-button " +
      (t ? " sidebar-highlight " : "") +
      (n ? " inactive " : "") +
      e.class,
    onClick: function () {
      o(t ? Zr.actions.frameNone() : Zr.actions.frameNetwork());
    },
    children: Ii("div", {
      class: "w-full h-full",
      children: [
        Ii("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          "stroke-width": "1.5",
          stroke: "currentColor",
          class: "w-full h-full",
          children: Ii("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            d: "M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z",
          }),
        }),
        n &&
          Ii("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            class: "w-full text-error h-full absolute top-0 left-0",
            children: Ii("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M4 4L18 18",
            }),
          }),
      ],
    }),
  });
}
function Bs(e) {
  return Ii(Us, {
    class: e.class,
    frame: "fat-drives",
    action: Zr.actions.frameFatDrives(),
    children: Ii("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      "stroke-width": "1.5",
      stroke: "currentColor",
      class: "w-full h-full",
      children: Ii("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z",
      }),
    }),
  });
}
function zs(e) {
  return Ii(Us, {
    class: e.class,
    frame: "editor-conf",
    action: Zr.actions.frameConf(),
    children: Ii("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      "stroke-width": "1.5",
      stroke: "currentColor",
      class: "w-full h-full",
      children: Ii("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z",
      }),
    }),
  });
}
function Ls(e) {
  return Ii(Us, {
    class: e.class,
    frame: "editor-fs",
    action: Zr.actions.frameFs(),
    children: Ii("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      "stroke-width": "1.5",
      stroke: "currentColor",
      class: "w-full h-full",
      children: Ii("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M21.75 17.25v-.228a4.5 4.5 0 00-.12-1.03l-2.268-9.64a3.375 3.375 0 00-3.285-2.602H7.923a3.375 3.375 0 00-3.285 2.602l-2.268 9.64a4.5 4.5 0 00-.12 1.03v.228m19.5 0a3 3 0 01-3 3H5.25a3 3 0 01-3-3m19.5 0a3 3 0 00-3-3H5.25a3 3 0 00-3 3m16.5 0h.008v.008h-.008v-.008zm-3 0h.008v.008h-.008v-.008z",
      }),
    }),
  });
}
function Rs() {
  const e = Math.round(on((e) => e.dos.stats.cyclesPerMs) / 1e3);
  return Ii(Us, {
    class: "cycles",
    frame: "stats",
    action: Zr.actions.frameStats(),
    children: [
      e <= 0 &&
        Ii(b, {
          children: [
            Ii("span", { children: "~" }),
            Ii("sup", { children: "KC" }),
          ],
        }),
      e > 0 &&
        e <= 1e3 &&
        Ii(b, {
          children: [
            Ii("span", { children: e }),
            Ii("sup", { children: "KC" }),
          ],
        }),
      e > 0 &&
        e > 1e3 &&
        Ii(b, {
          children: [
            Ii("span", { children: Math.round(e / 1e3) }),
            Ii("sup", { children: [Ii("strong", { children: "K" }), "KC"] }),
          ],
        }),
    ],
  });
}
function Is(e) {
  const t = Qn(),
    n = le(null),
    [o] = ie({ recv: 0, enabled: !1, delayLedTo: 0 });
  ae(() => {
    if (n.current) {
      const e = n.current;
      e.classList.add("bg-base-300");
      const r = setInterval(() => {
        if (o.delayLedTo <= Date.now()) {
          const n = yi(t).dos.stats.driveRecv,
            r = yi(t).dos.stats.driveBufferedAmount,
            i = o.recv !== n;
          i !== o.enabled &&
            (e.classList.remove("bg-base-300", "bg-green-300", "animate-led"),
            i
              ? e.classList.add("bg-green-300", "animate-led")
              : e.classList.add("bg-base-300"),
            (o.enabled = i)),
            r
              ? e.classList.contains("bg-red-300") ||
                e.classList.add("bg-red-300")
              : e.classList.remove("bg-red-300"),
            (o.delayLedTo = i ? Date.now() + 300 + 1500 * Math.random() : 0),
            (o.recv = n);
        }
      }, 150);
      return () => {
        e.classList.remove("bg-base-300", "bg-green-300", "animate-led"),
          clearInterval(r);
      };
    }
  }, [n, o]);
  const [r, i] = ie(!1),
    [s, a] = ie({ recv: 0, timeoutId: null }),
    c = on((e) => e.dos.stats.driveRecv);
  if (s.recv !== c) {
    r || i(!0), s.timeoutId && clearTimeout(s.timeoutId);
    const e = setTimeout(() => {
      i(!1), a({ recv: c, timeoutId: null });
    }, 1e3);
    a({ recv: c, timeoutId: e });
  }
  return Ii("div", { ref: n, class: "self-end mr-2 -mt-3 w-2 h-1" });
}
function Ns(e) {
  return Ii(Us, {
    class: e.class,
    action: Zr.actions.frameSettings(),
    frame: "settings",
    children: Ii("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      "stroke-width": "1.5",
      stroke: "currentColor",
      class: "w-full h-full",
      children: [
        Ii("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          d: "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z",
        }),
        Ii("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z",
        }),
      ],
    }),
  });
}
function Us(e) {
  const t = on((e) => e.ui.frame) === e.frame,
    n = eo();
  return Ii("div", {
    class: "sidebar-button " + (t ? "sidebar-highlight " : "") + e.class,
    onClick: function () {
      n(t ? Zr.actions.frameNone() : e.action);
    },
    children: e.children,
  });
}
function Ks(e) {
  const t = on((e) => e.dos.softKeyboard),
    n = eo();
  return Ii("div", {
    class: "sidebar-button " + (t ? "sidebar-highlight " : "") + e.class,
    onClick: () => n(Ci.actions.softKeyboard(!t)),
    children: Ii("svg", {
      class: "w-full h-full",
      fill: "currentColor",
      stroke: "currentColor",
      version: "1.1",
      id: "Layer_1",
      viewBox: "0 0 507.9 507.9",
      children: [
        Ii("g", { id: "SVGRepo_bgCarrier", "stroke-width": "0" }),
        Ii("g", {
          id: "SVGRepo_tracerCarrier",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
        }),
        Ii("g", {
          id: "SVGRepo_iconCarrier",
          children: [
            " ",
            Ii("g", {
              children: [
                " ",
                Ii("g", {
                  children: [
                    " ",
                    Ii("path", {
                      d: "M465.7,140.75H268.1v-77.3c0-7.8-6.3-14.1-14.1-14.1c-7.8,0-14.1,6.3-14.1,14.1v77.3H42.3c-23.3,0-42.3,19-42.3,42.3 v233.2c0,23.3,19,42.3,42.3,42.3h423.3c23.3,0,42.3-19,42.3-42.3v-233.2C508,159.75,489,140.75,465.7,140.75z M465.7,430.35H42.3 c-7.8,0-14.1-6.3-14.1-14.1v-233.2c0-7.8,6.3-14.1,14.1-14.1h423.3c7.8,0,14.1,6.3,14.1,14.1v233.2h0.1 C479.8,424.05,473.5,430.35,465.7,430.35z",
                    }),
                    " ",
                  ],
                }),
                " ",
              ],
            }),
            " ",
            Ii("g", {
              children: [
                " ",
                Ii("g", {
                  children: [
                    " ",
                    Ii("path", {
                      d: "M440.6,194.05h-85.4c-7.8,0-14.1,6.3-14.1,14.1s6.3,14.1,14.1,14.1h85.4c7.8,0,14.1-6.3,14.1-14.1 C454.7,200.35,448.4,194.05,440.6,194.05z",
                    }),
                    " ",
                  ],
                }),
                " ",
              ],
            }),
            " ",
            Ii("g", {
              children: [
                " ",
                Ii("g", {
                  children: [
                    " ",
                    Ii("path", {
                      d: "M80.9,377.05H67.4c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C95,383.35,88.7,377.05,80.9,377.05z",
                    }),
                    " ",
                  ],
                }),
                " ",
              ],
            }),
            " ",
            Ii("g", {
              children: [
                " ",
                Ii("g", {
                  children: [
                    " ",
                    Ii("path", {
                      d: "M303.3,377.05H141.6c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h161.8c7.8,0,14.1-6.3,14.1-14.1 C317.5,383.35,311.1,377.05,303.3,377.05z",
                    }),
                    " ",
                  ],
                }),
                " ",
              ],
            }),
            " ",
            Ii("g", {
              children: [
                " ",
                Ii("g", {
                  children: [
                    " ",
                    Ii("path", {
                      d: "M80.9,255.05H67.4c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C95.1,261.35,88.7,255.05,80.9,255.05z",
                    }),
                    " ",
                  ],
                }),
                " ",
              ],
            }),
            " ",
            Ii("g", {
              children: [
                " ",
                Ii("g", {
                  children: [
                    " ",
                    Ii("path", {
                      d: "M152.8,255.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.4,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C166.9,261.35,160.6,255.05,152.8,255.05z",
                    }),
                    " ",
                  ],
                }),
                " ",
              ],
            }),
            " ",
            Ii("g", {
              children: [
                " ",
                Ii("g", {
                  children: [
                    " ",
                    Ii("path", {
                      d: "M224.8,255.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C238.9,261.35,232.6,255.05,224.8,255.05z",
                    }),
                    " ",
                  ],
                }),
                " ",
              ],
            }),
            " ",
            Ii("g", {
              children: [
                " ",
                Ii("g", {
                  children: [
                    " ",
                    Ii("path", {
                      d: "M296.7,255.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C310.8,261.35,304.5,255.05,296.7,255.05z",
                    }),
                    " ",
                  ],
                }),
                " ",
              ],
            }),
            " ",
            Ii("g", {
              children: [
                " ",
                Ii("g", {
                  children: [
                    " ",
                    Ii("path", {
                      d: "M80.9,194.05H67.4c-7.8,0-14.1,6.3-14.1,14.1s6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C95.1,200.35,88.7,194.05,80.9,194.05z",
                    }),
                    " ",
                  ],
                }),
                " ",
              ],
            }),
            " ",
            Ii("g", {
              children: [
                " ",
                Ii("g", {
                  children: [
                    " ",
                    Ii("path", {
                      d: "M152.8,194.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.4,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C166.9,200.35,160.6,194.05,152.8,194.05z",
                    }),
                    " ",
                  ],
                }),
                " ",
              ],
            }),
            " ",
            Ii("g", {
              children: [
                " ",
                Ii("g", {
                  children: [
                    " ",
                    Ii("path", {
                      d: "M224.8,194.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C238.9,200.35,232.6,194.05,224.8,194.05z",
                    }),
                    " ",
                  ],
                }),
                " ",
              ],
            }),
            " ",
            Ii("g", {
              children: [
                " ",
                Ii("g", {
                  children: [
                    " ",
                    Ii("path", {
                      d: "M296.7,194.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C310.8,200.35,304.5,194.05,296.7,194.05z",
                    }),
                    " ",
                  ],
                }),
                " ",
              ],
            }),
            " ",
            Ii("g", {
              children: [
                " ",
                Ii("g", {
                  children: [
                    " ",
                    Ii("path", {
                      d: "M368.7,255.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C382.8,261.35,376.4,255.05,368.7,255.05z",
                    }),
                    " ",
                  ],
                }),
                " ",
              ],
            }),
            " ",
            Ii("g", {
              children: [
                " ",
                Ii("g", {
                  children: [
                    " ",
                    Ii("path", {
                      d: "M440.6,255.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C454.7,261.35,448.4,255.05,440.6,255.05z",
                    }),
                    " ",
                  ],
                }),
                " ",
              ],
            }),
            " ",
            Ii("g", {
              children: [
                " ",
                Ii("g", {
                  children: [
                    " ",
                    Ii("path", {
                      d: "M368.7,316.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C382.8,322.35,376.4,316.05,368.7,316.05z",
                    }),
                    " ",
                  ],
                }),
                " ",
              ],
            }),
            " ",
            Ii("g", {
              children: [
                " ",
                Ii("g", {
                  children: [
                    " ",
                    Ii("path", {
                      d: "M440.6,316.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C454.7,322.35,448.4,316.05,440.6,316.05z",
                    }),
                    " ",
                  ],
                }),
                " ",
              ],
            }),
            " ",
            Ii("g", {
              children: [
                " ",
                Ii("g", {
                  children: [
                    " ",
                    Ii("path", {
                      d: "M368.7,377.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C382.8,383.35,376.4,377.05,368.7,377.05z",
                    }),
                    " ",
                  ],
                }),
                " ",
              ],
            }),
            " ",
            Ii("g", {
              children: [
                " ",
                Ii("g", {
                  children: [
                    " ",
                    Ii("path", {
                      d: "M440.6,377.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C454.7,383.35,448.4,377.05,440.6,377.05z",
                    }),
                    " ",
                  ],
                }),
                " ",
              ],
            }),
            " ",
            Ii("g", {
              children: [
                " ",
                Ii("g", {
                  children: [
                    " ",
                    Ii("path", {
                      d: "M80.9,316.05H67.4c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C95.1,322.35,88.7,316.05,80.9,316.05z",
                    }),
                    " ",
                  ],
                }),
                " ",
              ],
            }),
            " ",
            Ii("g", {
              children: [
                " ",
                Ii("g", {
                  children: [
                    " ",
                    Ii("path", {
                      d: "M152.8,316.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.4,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C166.9,322.35,160.6,316.05,152.8,316.05z",
                    }),
                    " ",
                  ],
                }),
                " ",
              ],
            }),
            " ",
            Ii("g", {
              children: [
                " ",
                Ii("g", {
                  children: [
                    " ",
                    Ii("path", {
                      d: "M224.8,316.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C238.9,322.35,232.6,316.05,224.8,316.05z",
                    }),
                    " ",
                  ],
                }),
                " ",
              ],
            }),
            " ",
            Ii("g", {
              children: [
                " ",
                Ii("g", {
                  children: [
                    " ",
                    Ii("path", {
                      d: "M296.7,316.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C310.8,322.35,304.5,316.05,296.7,316.05z",
                    }),
                    " ",
                  ],
                }),
                " ",
              ],
            }),
            " ",
          ],
        }),
      ],
    }),
  });
}
function Fs(e) {
  return Ii(Us, {
    class: e.class,
    frame: "prerun",
    action: Zr.actions.framePreRun(),
    children: Ii("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      "stroke-width": "1.5",
      stroke: "currentColor",
      class: "w-full h-full",
      children: [
        Ii("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          d: "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z",
        }),
        Ii("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z",
        }),
      ],
    }),
  });
}
function Hs(e) {
  return Ii("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    style: "padding: 2px",
    viewBox: "0 0 16 16",
    "enable-background": "new 0 0 16 16",
    fill: "currentColor",
    class: "w-full h-full rounded-lg " + e.class,
    children: Ii("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M15.71,2.29l-2-2C13.53,0.11,13.28,0,13,0h-1v6H4V0H1C0.45,0,0,0.45,0,1v14 c0,0.55,0.45,1,1,1h14c0.55,0,1-0.45,1-1V3C16,2.72,15.89,2.47,15.71,2.29z M14,15H2V9c0-0.55,0.45-1,1-1h10c0.55,0,1,0.45,1,1V15 z M11,1H9v4h2V1z",
    }),
  });
}
function Vs() {
  const [e, t] = ie(!1),
    n = "dosboxX" === on((e) => e.dos.backend);
  return Ii("div", {
    class: "save-buttons flex flex-col justify-center items-center -my-2",
    children: [
      Ii(Xs, {}),
      n &&
        Ii(Ws, {
          label: "X",
          bgcolor: "bg-primary",
          textcolor: "text-primary-content",
          onClick: () => t(!0),
        }),
      n && e && Ii(qs, { label: "X", bgcolor: "bg-primary" }),
    ],
  });
}
function Ws(e) {
  const t = vi();
  return Ii("div", {
    class: "sidebar-button flex justify-center",
    onClick: function () {
      const n = t.ci;
      null !== n &&
        (n.sendBackendEvent({
          type: "wc-trigger-event",
          event: "hand_savestate",
        }),
        e.onClick());
    },
    children: [
      Ii(Hs, {}),
      Ii("div", {
        class: "text-badge " + e.textcolor + " " + e.bgcolor,
        children: e.label,
      }),
      Ii("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": "1.5",
        stroke: "currentColor",
        class: "absolute bottom-1 w-3 h-3",
        children: Ii("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          d: "M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z",
        }),
      }),
    ],
  });
}
function qs(e) {
  const t = vi();
  return Ii("div", {
    class: "sidebar-button flex justify-center",
    onClick: function () {
      const e = t.ci;
      null !== e &&
        e.sendBackendEvent({
          type: "wc-trigger-event",
          event: "hand_loadstate",
        });
    },
    children: [
      Ii(Hs, { class: "opacity-10" }),
      Ii("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": "1.5",
        stroke: "currentColor",
        class: "absolute bottom-1 w-6 h-6 -scale-y-100",
        children: Ii("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          d: "m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3",
        }),
      }),
    ],
  });
}
function Xs(e) {
  const [t, n] = ie(!1),
    o = eo(),
    r = on((e) => e.ui.cloudSaves),
    i = vi(),
    s = Qn();
  if (!r || null === i.loadedBundle || null === i.loadedBundle.bundleChangesUrl)
    return null;
  return Ii("div", {
    class:
      "save-button sidebar-button overflow-hidden " +
      (t ? " sidebar-highlight " : "") +
      e.class,
    onClick: function () {
      t || (n(!0), Oi(yi(s), i, o).finally(() => n(!1)));
    },
    children: Ii("div", {
      class: "w-full h-full flex justify-center",
      children: [
        Ii(Hs, {}),
        t && Ii("div", { class: "sidebar-badge" }),
        Ii("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          "stroke-width": "1.5",
          stroke: "currentColor",
          class: "absolute bottom-1 w-3 h-3",
          children: Ii("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            d: "M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z",
          }),
        }),
      ],
    }),
  });
}
function $s(e) {
  const t = on((e) => e.ui.window),
    n = on((e) => e.ui.editor),
    o = on((e) => e.ui.kiosk),
    r = !on((e) => e.ui.noNetworking);
  return o
    ? null
    : Ii("div", {
        class: "sidebar",
        children: [
          "run" === t && Ii(Vs, {}),
          "run" === t && Ii(Ks, {}),
          "run" === t && r && Ii(Ts, {}),
          n && "prerun" === t && Ii(zs, {}),
          n && "prerun" === t && Ii(Bs, {}),
          n && "run" === t && Ii(Ls, {}),
          Ii("div", { class: "contentbar" }),
          "run" === t && Ii(Ds, {}),
          "run" === t && Ii(Rs, {}),
          "run" === t && Ii(Is, {}),
          "prerun" === t && Ii(Fs, {}),
          "run" === t && Ii(Ns, {}),
        ],
      });
}
const Gs = 48,
  Ys = 290,
  Zs = 291,
  Qs = 292,
  Js = 293,
  ea = 294,
  ta = 295,
  na = 296,
  oa = 297,
  ra = 298,
  ia = 299,
  sa = 300,
  aa = 301,
  ca = 320,
  la = 321,
  ua = 322,
  da = 323,
  ha = 324,
  fa = 325,
  pa = 326,
  va = 327,
  ma = 328,
  ya = 329,
  ga = 256,
  ba = 258,
  _a = 259,
  wa = 257,
  ka = 342,
  xa = 341,
  Ca = 340,
  Sa = 61,
  Pa = 268,
  Ea = 266,
  Oa = 261,
  Ma = 269,
  ja = 267,
  Aa = 263,
  Da = 265,
  Ta = 264,
  Ba = 262,
  za = {
    8: 259,
    9: 258,
    13: 257,
    16: Ca,
    17: xa,
    18: ka,
    19: 284,
    27: 256,
    32: 32,
    33: 266,
    34: 267,
    35: 269,
    36: 268,
    37: 263,
    38: 265,
    39: 262,
    40: 264,
    45: 260,
    46: 261,
    48: 48,
    49: 49,
    50: 50,
    51: 51,
    52: 52,
    53: 53,
    54: 54,
    55: 55,
    56: 56,
    57: 57,
    59: 59,
    64: 61,
    65: 65,
    66: 66,
    67: 67,
    68: 68,
    69: 69,
    70: 70,
    71: 71,
    72: 72,
    73: 73,
    74: 74,
    75: 75,
    76: 76,
    77: 77,
    78: 78,
    79: 79,
    80: 80,
    81: 81,
    82: 82,
    83: 83,
    84: 84,
    85: 85,
    86: 86,
    87: 87,
    88: 88,
    89: 89,
    90: 90,
    91: 91,
    93: 93,
    96: 320,
    97: 321,
    98: 322,
    99: 323,
    100: 324,
    101: 325,
    102: 326,
    103: 327,
    104: 328,
    105: 329,
    106: 332,
    111: 331,
    112: 290,
    113: 291,
    114: 292,
    115: 293,
    116: 294,
    117: 295,
    118: 296,
    119: 297,
    120: 298,
    121: 299,
    122: 300,
    123: 301,
    144: 282,
    145: 281,
    173: 45,
    186: 59,
    187: 61,
    188: 44,
    189: 45,
    190: 46,
    191: 47,
    192: 96,
    219: 91,
    220: 92,
    221: 93,
    222: 39,
  },
  La = {
    KBD_NONE: 0,
    KBD_0: 48,
    KBD_1: 49,
    KBD_2: 50,
    KBD_3: 51,
    KBD_4: 52,
    KBD_5: 53,
    KBD_6: 54,
    KBD_7: 55,
    KBD_8: 56,
    KBD_9: 57,
    KBD_a: 65,
    KBD_b: 66,
    KBD_c: 67,
    KBD_d: 68,
    KBD_e: 69,
    KBD_f: 70,
    KBD_g: 71,
    KBD_h: 72,
    KBD_i: 73,
    KBD_j: 74,
    KBD_k: 75,
    KBD_l: 76,
    KBD_m: 77,
    KBD_n: 78,
    KBD_o: 79,
    KBD_p: 80,
    KBD_q: 81,
    KBD_r: 82,
    KBD_s: 83,
    KBD_t: 84,
    KBD_u: 85,
    KBD_v: 86,
    KBD_w: 87,
    KBD_x: 88,
    KBD_y: 89,
    KBD_z: 90,
    KBD_f1: 290,
    KBD_f2: 291,
    KBD_f3: 292,
    KBD_f4: 293,
    KBD_f5: 294,
    KBD_f6: 295,
    KBD_f7: 296,
    KBD_f8: 297,
    KBD_f9: 298,
    KBD_f10: 299,
    KBD_f11: 300,
    KBD_f12: 301,
    KBD_kp0: 320,
    KBD_kp1: 321,
    KBD_kp2: 322,
    KBD_kp3: 323,
    KBD_kp4: 324,
    KBD_kp5: 325,
    KBD_kp6: 326,
    KBD_kp7: 327,
    KBD_kp8: 328,
    KBD_kp9: 329,
    KBD_kpperiod: 330,
    KBD_kpdivide: 331,
    KBD_kpmultiply: 332,
    KBD_kpminus: 333,
    KBD_kpplus: 334,
    KBD_kpenter: 335,
    KBD_esc: 256,
    KBD_tab: 258,
    KBD_backspace: 259,
    KBD_enter: 257,
    KBD_space: 32,
    KBD_leftalt: ka,
    KBD_rightalt: 346,
    KBD_leftctrl: xa,
    KBD_rightctrl: 345,
    KBD_leftshift: Ca,
    KBD_rightshift: 344,
    KBD_capslock: 280,
    KBD_scrolllock: 281,
    KBD_numlock: 282,
    KBD_grave: 96,
    KBD_minus: 45,
    KBD_equals: 61,
    KBD_backslash: 92,
    KBD_leftbracket: 91,
    KBD_rightbracket: 93,
    KBD_semicolon: 59,
    KBD_quote: 39,
    KBD_period: 46,
    KBD_comma: 44,
    KBD_slash: 47,
    KBD_printscreen: 283,
    KBD_pause: 284,
    KBD_insert: 260,
    KBD_home: 268,
    KBD_pageup: 266,
    KBD_delete: 261,
    KBD_end: 269,
    KBD_pagedown: 267,
    KBD_left: 263,
    KBD_up: 265,
    KBD_down: 264,
    KBD_right: 262,
    KBD_extra_lt_gt: 348,
  },
  Ra = { 16: { 1: Ca, 2: 344 }, 17: { 1: xa, 2: 345 }, 18: { 1: ka, 2: 346 } };
function Ia(e, t) {
  var n;
  return (null == (n = Ra[e]) ? void 0 : n[t]) ?? za[e] ?? 0;
}
function Na(e, t, n, o) {
  const r = e.parentElement.getBoundingClientRect(),
    i = r.width,
    s = r.height;
  if (0 === n) return;
  const a = 65535 === o ? i / s : (o ?? t / n);
  let c = i,
    l = i / a;
  l > s && ((l = s), (c = s * a)),
    (e.style.position = "relative"),
    (e.style.top = (s - l) / 2 + "px"),
    (e.style.left = (i - c) / 2 + "px"),
    (e.style.width = c + "px"),
    (e.style.height = l + "px");
}
function Ua(e, t, n, o) {
  const r = n.gl ?? e.getContext("webgl");
  if (null === r)
    throw new Error("Unable to create webgl context on given canvas");
  n.gl = r;
  const i = (function (e, t, n) {
      const o = Ka(e, e.VERTEX_SHADER, t),
        r = Ka(e, e.FRAGMENT_SHADER, n),
        i = e.createProgram();
      if (
        (e.attachShader(i, o),
        e.attachShader(i, r),
        e.linkProgram(i),
        !e.getProgramParameter(i, e.LINK_STATUS))
      )
        throw new Error(
          "Unable to initialize the shader program: " + e.getProgramInfoLog(i),
        );
      return i;
    })(
      r,
      "\nattribute vec4 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nvarying highp vec2 vTextureCoord;\n\nvoid main(void) {\n  gl_Position = aVertexPosition;\n  vTextureCoord = aTextureCoord;\n}\n",
      "\nvarying highp vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\n\nvoid main(void) {\n  highp vec4 color = texture2D(uSampler, vTextureCoord);\n  gl_FragColor = vec4(color.r, color.g, color.b, 1.0);\n}\n",
    ),
    s = r.getAttribLocation(i, "aVertexPosition"),
    a = r.getAttribLocation(i, "aTextureCoord"),
    c = r.getUniformLocation(i, "uSampler");
  !(function (e, t, n) {
    const o = e.createBuffer();
    e.bindBuffer(e.ARRAY_BUFFER, o);
    const r = [-1, -1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, 1, 1, 0, -1, 1, 0];
    e.bufferData(e.ARRAY_BUFFER, new Float32Array(r), e.STATIC_DRAW),
      e.vertexAttribPointer(t, 3, e.FLOAT, !1, 0, 0),
      e.enableVertexAttribArray(t);
    const i = e.createBuffer();
    e.bindBuffer(e.ARRAY_BUFFER, i);
    const s = [0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0];
    e.bufferData(e.ARRAY_BUFFER, new Float32Array(s), e.STATIC_DRAW),
      e.vertexAttribPointer(n, 2, e.FLOAT, !1, 0, 0),
      e.enableVertexAttribArray(n);
  })(r, s, a);
  const l = r.createTexture();
  r.bindTexture(r.TEXTURE_2D, l),
    r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE),
    r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE),
    r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR),
    r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, r.LINEAR);
  const u = new Uint8Array([0, 0, 0]);
  r.texImage2D(r.TEXTURE_2D, 0, r.RGB, 1, 1, 0, r.RGB, r.UNSIGNED_BYTE, u),
    r.useProgram(i),
    r.activeTexture(r.TEXTURE0),
    r.uniform1i(c, 0);
  let d = 0,
    h = 0,
    f = null,
    p = null,
    v = 0;
  const m = () => {
      null !== p &&
        (r.texImage2D(r.TEXTURE_2D, 0, v, d, h, 0, v, r.UNSIGNED_BYTE, p),
        (p = null)),
        r.drawArrays(r.TRIANGLES, 0, 6),
        (f = null);
    },
    y = () => {
      Na(e, d, h, o);
    },
    g = (t, n) => {
      (d = t),
        (h = n),
        (e.width = d),
        (e.height = h),
        (p = null),
        r.viewport(0, 0, d, h),
        y();
    };
  t.events().onFrameSize(g),
    t.events().onFrame((e, t) => {
      (p = null != e ? e : t),
        (v = null != e ? r.RGB : r.RGBA),
        null === f && (f = requestAnimationFrame(m));
    }),
    g(t.width(), t.height());
  const b = new ResizeObserver(y);
  return (
    b.observe(e.parentElement),
    window.addEventListener("resize", y),
    () => {
      (n.gl = null),
        t.events().onFrameSize(() => {}),
        t.events().onFrame(() => {}),
        b.disconnect(),
        window.removeEventListener("resize", y);
    }
  );
}
function Ka(e, t, n) {
  const o = e.createShader(t);
  if (
    (e.shaderSource(o, n),
    e.compileShader(o),
    !e.getShaderParameter(o, e.COMPILE_STATUS))
  ) {
    const t = e.getShaderInfoLog(o);
    throw (
      (e.deleteShader(o),
      new Error("An error occurred compiling the shaders: " + t))
    );
  }
  return o;
}
function Fa(e, t, n) {
  const o = e.getContext("2d");
  if (null === o)
    throw new Error("Unable to create 2d context on given canvas");
  let r = 0,
    i = 0;
  const s = () => {
    Na(e, r, i, n);
  };
  let a = new Uint8ClampedArray(0);
  const c = (t, n) => {
    (r = t),
      (i = n),
      (e.width = r),
      (e.height = i),
      (a = new Uint8ClampedArray(t * n * 4)),
      s();
  };
  t.events().onFrameSize(c),
    t.events().onFrame((e, t) => {
      if (null === e && null === t) return;
      const n = null !== e ? e : t;
      let s = 0,
        c = 0;
      for (; c < a.length; )
        (a[c++] = n[s++]),
          (a[c++] = n[s++]),
          (a[c++] = n[s++]),
          (a[c++] = 255),
          n.length === a.length && s++;
      o.putImageData(new ImageData(a, r, i), 0, 0);
    }),
    c(t.width(), t.height());
  const l = new ResizeObserver(s);
  return (
    l.observe(e.parentElement),
    window.addEventListener("resize", s),
    () => {
      t.events().onFrameSize(() => {}),
        t.events().onFrame(() => {}),
        l.disconnect(),
        window.removeEventListener("resize", s);
    }
  );
}
class Ha {
  constructor() {
    t(this, "samplesQueue", []);
  }
  push(e) {
    this.samplesQueue.push(e);
  }
  length() {
    let e = 0;
    for (const t of this.samplesQueue) e += t.length;
    return e;
  }
  writeTo(e, t) {
    let n = 0;
    for (; this.samplesQueue.length > 0; ) {
      const o = this.samplesQueue[0],
        r = Math.min(t - n, o.length);
      if (
        (r === o.length
          ? (e.set(o, n), this.samplesQueue.shift())
          : (e.set(o.slice(0, r), n), (this.samplesQueue[0] = o.slice(r))),
        (n += r),
        n === t)
      )
        break;
    }
    n < t && e.fill(0, n);
  }
}
function Va(e, t) {
  if (e.type.match(/^touch/)) {
    const n = e,
      o = t.getBoundingClientRect();
    return {
      x: n.targetTouches[0].clientX - o.x,
      y: n.targetTouches[0].clientY - o.y,
      mX: 0,
      mY: 0,
    };
  }
  if (e.type.match(/^pointer/)) {
    const t = e;
    return { x: t.offsetX, y: t.offsetY, mX: t.movementX, mY: t.movementY };
  }
  {
    const t = e;
    return {
      x: t.offsetX,
      y: t.offsetY,
      mX: t.movementX,
      mY: t.movementY,
      button: 0 === t.button ? 0 : 1,
    };
  }
}
const Wa = (function () {
  const e =
      /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(navigator.appVersion) ||
      /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(navigator.userAgent) ||
      (/MacIntel/.test(navigator.platform) &&
        navigator.maxTouchPoints &&
        navigator.maxTouchPoints > 2),
    t = e && !!("ontouchstart" in window),
    n = e && !!window.PointerEvent,
    o = e && !!window.MSPointerEvent;
  let r = !e;
  const i = [],
    s = [],
    a = [],
    c = [],
    l = [];
  return (
    n
      ? (i.push("pointerdown"),
        a.push("pointerup", "pointercancel"),
        s.push("pointermove"),
        l.push("touchstart", "touchmove", "touchend"))
      : o
        ? (i.push("MSPointerDown"),
          s.push("MSPointerMove"),
          a.push("MSPointerUp"))
        : t
          ? ((r = !1),
            i.push("touchstart", "mousedown"),
            s.push("touchmove"),
            a.push("touchend", "touchcancel", "mouseup"))
          : (i.push("mousedown"),
            s.push("mousemove"),
            a.push("mouseup"),
            c.push("mouseleave")),
    {
      mobile: e,
      canLock: r,
      starters: i,
      changers: s,
      enders: a,
      prevents: l,
      leavers: c,
    }
  );
})();
function qa(e, t, n, o, r) {
  const i = (n) => {
      if (n.target !== e) return;
      const o = Va(n, e);
      t(o.x, o.y, o.button), n.stopPropagation();
    },
    s = (t) => {
      if (t.target !== e) return;
      const o = Va(t, e);
      n(o.x, o.y, o.mX, o.mY), t.stopPropagation();
    },
    a = (t) => {
      const n = Va(t, e);
      o(n.x, n.y, n.button), t.stopPropagation();
    },
    c = (t) => {
      if (t.target !== e) return;
      const n = Va(t, e);
      r(n.x, n.y), t.stopPropagation();
    },
    l = (e) => {
      e.stopPropagation();
    },
    u = { capture: !1 };
  for (const d of Wa.starters) e.addEventListener(d, i, u);
  for (const d of Wa.changers) e.addEventListener(d, s, u);
  for (const d of Wa.enders) e.addEventListener(d, a, u);
  for (const d of Wa.prevents) e.addEventListener(d, l, u);
  for (const d of Wa.leavers) e.addEventListener(d, c, u);
  return () => {
    for (const t of Wa.starters) e.removeEventListener(t, i, u);
    for (const t of Wa.changers) e.removeEventListener(t, s, u);
    for (const t of Wa.enders) e.removeEventListener(t, a, u);
    for (const t of Wa.prevents) e.removeEventListener(t, l, u);
    for (const t of Wa.leavers) e.removeEventListener(t, c, u);
  };
}
const Xa = 0.01;
function $a(e, t, n) {
  const o = (e, o) =>
    (function (e, t, n, o) {
      const { width: r, height: i } = n.getBoundingClientRect(),
        s = o.width(),
        a = o.height(),
        c = s / a;
      let l = r,
        u = r / c;
      u > i && ((u = i), (l = i * c));
      const d = (i - u) / 2,
        h = (r - l) / 2;
      let f = Math.max(0, Math.min(1, (e - h) / l)),
        p = Math.max(0, Math.min(1, (t - d) / u));
      f <= Xa && (f = 0);
      f >= 0.99 && (f = 1);
      p <= Xa && (p = 0);
      p >= 0.99 && (p = 1);
      return { x: f, y: p };
    })(e, o, t, n);
  return (
    document.pointerLockElement === t && document.exitPointerLock(),
    qa(
      t,
      function (t, r, i) {
        const s = o(t, r);
        n.sendMouseMotion(s.x, s.y), n.sendMouseButton(i ?? e, !0);
      },
      function (e, t, r, i) {
        const s = o(e, t);
        n.sendMouseMotion(s.x, s.y);
      },
      function (t, r, i) {
        const s = o(t, r);
        n.sendMouseMotion(s.x, s.y), n.sendMouseButton(i ?? e, !1);
      },
      function (e, t) {
        const r = o(e, t);
        n.sendMouseMotion(r.x, r.y);
      },
    )
  );
}
function Ga(e, t, n, o) {
  let r = -1,
    i = 0,
    s = 0,
    a = 0;
  return qa(
    n,
    (e, t, n) => {
      (r = Date.now()),
        (i = 0),
        (s = e),
        (a = t),
        void 0 !== n && o.sendMouseButton(n, !0);
    },
    function (t, n, r, c) {
      void 0 === r && (r = t - s),
        void 0 === c && (c = n - a),
        (s = t),
        (a = n),
        (0 === r && 0 === c) ||
          ((i += Math.abs(r) + Math.abs(c)),
          o.sendMouseRelativeMotion(r * e * 2, c * e * 2));
    },
    (e, n, s) => {
      if (void 0 !== s) o.sendMouseButton(s, !1);
      else {
        if (Date.now() - r < 500 && i < 50) {
          const e = s ?? t;
          o.sendMouseButton(e, !0),
            setTimeout(() => o.sendMouseButton(e, !1), 60);
        }
      }
    },
    () => {},
  );
}
function Ya(e, t, n, o, r) {
  if (e && !Wa.canLock) return Ga(t, n, o, r);
  if (e) {
    const e = (function (e) {
        function t() {
          document.pointerLockElement === e ||
            (
              e.requestPointerLock ||
              e.mozRequestPointerLock ||
              e.webkitRequestPointerLock
            ).call(e);
        }
        const n = { capture: !0 };
        for (const o of Wa.starters) e.addEventListener(o, t, n);
        return () => {
          for (const o of Wa.starters) e.removeEventListener(o, t, n);
        };
      })(o),
      i = Ga(t, n, o, r);
    return () => {
      i(), e();
    };
  }
  return $a(n, o, r);
}
function Za(e, t) {
  const n = document.createElement("div");
  return (n.className = e), void 0 !== t && (n.innerHTML = t), n;
}
class Qa {
  constructor(e, n, o, r) {
    t(this, "options"),
      t(this, "root"),
      t(this, "canvas"),
      t(this, "mouseOverlay"),
      t(this, "width"),
      t(this, "height"),
      t(this, "keyboardVisible", !1),
      t(this, "pointerLock", !1),
      t(this, "pointerDisabled", !1),
      t(this, "pointerButton", 0),
      t(this, "toggleKeyboard"),
      t(this, "onResize"),
      t(this, "onKeyDown"),
      t(this, "onKeyUp"),
      t(this, "onKeyPress"),
      t(this, "onKeysPress"),
      (this.toggleKeyboard = o),
      (this.options = r),
      (this.root = e),
      this.root.classList.add("emulator-root"),
      (this.canvas = n),
      (this.canvas.className = "emulator-canvas"),
      (this.mouseOverlay = Za("emulator-mouse-overlay", "")),
      this.root.appendChild(this.mouseOverlay),
      (this.width = e.offsetWidth),
      (this.height = e.offsetHeight),
      (this.onResize = []),
      (this.onKeyDown = () => {}),
      (this.onKeyUp = () => {}),
      (this.onKeyPress = () => {}),
      (this.onKeysPress = () => {}),
      new ResizeObserver((t) => {
        for (const n of t)
          if (n.target === e) {
            (this.width = n.contentRect.width),
              (this.height = n.contentRect.height);
            for (const e of this.onResize) e(this.width, this.height);
          }
      }).observe(this.root);
  }
  addOnResize(e) {
    this.onResize.push(e);
  }
  removeOnResize(e) {
    this.onResize = this.onResize.filter((t) => t !== e);
  }
  setOnKeyDown(e) {
    this.onKeyDown = e;
  }
  fireKeyDown(e) {
    this.onKeyDown(e);
  }
  setOnKeyUp(e) {
    this.onKeyUp = e;
  }
  fireKeyUp(e) {
    this.onKeyUp(e);
  }
  setOnKeyPress(e) {
    this.onKeyPress = e;
  }
  fireKeyPress(e) {
    this.onKeyPress(e);
  }
  setOnKeysPress(e) {
    this.onKeysPress = e;
  }
  fireKeysPress(e) {
    this.onKeysPress(e);
  }
}
function Ja(e) {
  return void 0 !== e.layersConfig
    ? (1 === e.layersConfig.version &&
        (function (e) {
          for (const t of e.layers)
            for (const e of t.controls)
              if ("Key" === e.type) {
                const t = e;
                "number" == typeof t.mapTo && (t.mapTo = [t.mapTo]);
              }
        })(e.layersConfig),
      e.layersConfig)
    : void 0 !== e.layers
      ? e.layers
      : null;
}
const ec = (function () {
  const e = {};
  for (const t of Object.keys(La)) e[La[t]] = t.substr(4, 2);
  return e;
})();
function tc(e, t, n) {
  const o = Math.round(0.6 * n),
    r = Math.round(0.5 * n),
    i = Math.max(1, Math.round(n / 20)),
    s = lc[e.toLowerCase()],
    a = void 0 === s ? e : "",
    c = nc("emulator-button-touch-zone"),
    l = nc("emulator-button"),
    u = nc(
      "emulator-button-text",
      void 0 === s
        ? void 0 === a || 0 === a.length
          ? "â–¡"
          : a.substr(0, 1).toUpperCase()
        : "",
    );
  void 0 !== s && (l.style.backgroundImage = 'url("' + s + '")'),
    (l.style.width = o + "px"),
    (l.style.height = o + "px"),
    (u.style.fontSize = r + "px"),
    (c.widthPx = n - 2 * i),
    (c.heightPx = n - 2 * i),
    (c.style.width = c.widthPx + "px"),
    (c.style.height = c.heightPx + "px"),
    (c.style.borderWidth = i + "px"),
    c.appendChild(l),
    c.appendChild(u);
  const d = (e) => {
      void 0 !== t.onDown && t.onDown(),
        void 0 !== t.onClick && t.onClick(),
        e.stopPropagation(),
        e.preventDefault();
    },
    h = (e) => {
      void 0 !== t.onUp && t.onUp(), e.stopPropagation(), e.preventDefault();
    },
    f = (e) => {
      e.stopPropagation(), e.preventDefault();
    },
    p = { capture: !0 };
  for (const v of Wa.starters) c.addEventListener(v, d, p);
  for (const v of Wa.enders) c.addEventListener(v, h, p);
  for (const v of Wa.changers) c.addEventListener(v, f, p);
  for (const v of Wa.leavers) c.addEventListener(v, f, p);
  for (const v of Wa.prevents) c.addEventListener(v, f, p);
  return c;
}
function nc(e, t) {
  const n = document.createElement("div");
  return (n.className = e), void 0 !== t && (n.innerHTML = t), n;
}
function oc(e) {
  return "number" == typeof e ? ec[e] : e;
}
function rc(e, t) {
  return "click" === e.action
    ? { onClick: () => t.fireKeyPress(e.mapTo) }
    : {
        onDown: () => t.fireKeyDown(e.mapTo),
        onUp: () => t.fireKeyUp(e.mapTo),
      };
}
const ic =
    "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Layer_1' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 20 20' fill='%23FFF' enable-background='new 0 0 20 20' xml:space='preserve'%3E%3Ctitle%3EShape%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg id='Page-1' sketch:type='MSPage'%3E%3Cg id='Artboard-1' transform='translate(-3.000000, -1.000000)' sketch:type='MSArtboardGroup'%3E%3Cpath id='Shape' sketch:type='MSShapeGroup' d='M19,12c-0.3,0-0.5,0.1-0.7,0.3L14,16.6V3c0-0.5-0.4-1-1-1s-1,0.5-1,1v13.6 l-4.3-4.3C7.5,12.1,7.3,12,7,12c-0.5,0-1,0.4-1,1c0,0.3,0.1,0.5,0.3,0.7l6,6c0.2,0.2,0.4,0.3,0.7,0.3s0.5-0.1,0.7-0.3l6-6 c0.2-0.2,0.3-0.4,0.3-0.7C20,12.4,19.5,12,19,12L19,12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
  sc =
    "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 20 20' enable-background='new 0 0 20 20' fill='%23FFF' xml:space='preserve'%3E%3Cg id='left_arrow_1_'%3E%3Cg%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M18,9H4.41l4.29-4.29C8.89,4.53,9,4.28,9,4c0-0.55-0.45-1-1-1 C7.72,3,7.47,3.11,7.29,3.29l-6,6C1.11,9.47,1,9.72,1,10c0,0.28,0.11,0.53,0.29,0.71l6,6C7.47,16.89,7.72,17,8,17 c0.55,0,1-0.45,1-1c0-0.28-0.11-0.53-0.29-0.71L4.41,11H18c0.55,0,1-0.45,1-1C19,9.45,18.55,9,18,9z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
  ac =
    "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' fill='%23fff' viewBox='0 0 20 20' enable-background='new 0 0 20 20' xml:space='preserve'%3E%3Cg id='right_arrow_1_'%3E%3Cg%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M18.71,9.29l-6-6C12.53,3.11,12.28,3,12,3c-0.55,0-1,0.45-1,1 c0,0.28,0.11,0.53,0.29,0.71L15.59,9H2c-0.55,0-1,0.45-1,1c0,0.55,0.45,1,1,1h13.59l-4.29,4.29C11.11,15.47,11,15.72,11,16 c0,0.55,0.45,1,1,1c0.28,0,0.53-0.11,0.71-0.29l6-6C18.89,10.53,19,10.28,19,10C19,9.72,18.89,9.47,18.71,9.29z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
  cc =
    "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 18.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' fill='%23fff' viewBox='0 0 20 20' enable-background='new 0 0 20 20' xml:space='preserve'%3E%3Cg id='key_enter_1_'%3E%3Cg%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M18,2c-0.55,0-1,0.45-1,1v5c0,2.21-1.79,4-4,4H4.41l2.29-2.29 C6.89,9.53,7,9.28,7,9c0-0.55-0.45-1-1-1C5.72,8,5.47,8.11,5.29,8.29l-4,4C1.11,12.47,1,12.72,1,13c0,0.28,0.11,0.53,0.29,0.71 l4,4C5.47,17.89,5.72,18,6,18c0.55,0,1-0.45,1-1c0-0.28-0.11-0.53-0.29-0.71L4.41,14H13c3.31,0,6-2.69,6-6V3C19,2.45,18.55,2,18,2 z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
  lc = {
    fullscreen:
      "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 16 16' enable-background='new 0 0 16 16' xml:space='preserve'%3E%3Cg id='maximize_1_' fill='%23FFFFFF'%3E%3Cg%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M5.99,8.99c-0.28,0-0.53,0.11-0.71,0.29l-3.29,3.29v-1.59c0-0.55-0.45-1-1-1 s-1,0.45-1,1v4c0,0.55,0.45,1,1,1h4c0.55,0,1-0.45,1-1s-0.45-1-1-1H3.41L6.7,10.7c0.18-0.18,0.29-0.43,0.29-0.71 C6.99,9.44,6.54,8.99,5.99,8.99z M14.99-0.01h-4c-0.55,0-1,0.45-1,1s0.45,1,1,1h1.59L9.28,5.29C9.1,5.47,8.99,5.72,8.99,5.99 c0,0.55,0.45,1,1,1c0.28,0,0.53-0.11,0.71-0.29l3.29-3.29v1.59c0,0.55,0.45,1,1,1s1-0.45,1-1v-4C15.99,0.44,15.54-0.01,14.99-0.01 z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
    save: "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 18.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 16 16' enable-background='new 0 0 16 16' fill='%23FFFFFF' xml:space='preserve'%3E%3Cg id='floppy_disk'%3E%3Cg%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M15.71,2.29l-2-2C13.53,0.11,13.28,0,13,0h-1v6H4V0H1C0.45,0,0,0.45,0,1v14 c0,0.55,0.45,1,1,1h14c0.55,0,1-0.45,1-1V3C16,2.72,15.89,2.47,15.71,2.29z M14,15H2V9c0-0.55,0.45-1,1-1h10c0.55,0,1,0.45,1,1V15 z M11,1H9v4h2V1z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A",
    options:
      "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 20 20' enable-background='new 0 0 20 20' fill='%23FFF' xml:space='preserve'%3E%3Cg id='cog_2_'%3E%3Cg%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M19,8h-2.31c-0.14-0.46-0.33-0.89-0.56-1.3l1.7-1.7c0.39-0.39,0.39-1.02,0-1.41 l-1.41-1.41c-0.39-0.39-1.02-0.39-1.41,0l-1.7,1.7c-0.41-0.22-0.84-0.41-1.3-0.55V1c0-0.55-0.45-1-1-1H9C8.45,0,8,0.45,8,1v2.33 C7.52,3.47,7.06,3.67,6.63,3.91L5,2.28c-0.37-0.37-0.98-0.37-1.36,0L2.28,3.64C1.91,4.02,1.91,4.63,2.28,5l1.62,1.62 C3.66,7.06,3.46,7.51,3.31,8H1C0.45,8,0,8.45,0,9v2c0,0.55,0.45,1,1,1h2.31c0.14,0.46,0.33,0.89,0.56,1.3L2.17,15 c-0.39,0.39-0.39,1.02,0,1.41l1.41,1.41c0.39,0.39,1.02,0.39,1.41,0l1.7-1.7c0.41,0.22,0.84,0.41,1.3,0.55V19c0,0.55,0.45,1,1,1h2 c0.55,0,1-0.45,1-1v-2.33c0.48-0.14,0.94-0.35,1.37-0.59L15,17.72c0.37,0.37,0.98,0.37,1.36,0l1.36-1.36 c0.37-0.37,0.37-0.98,0-1.36l-1.62-1.62c0.24-0.43,0.45-0.89,0.6-1.38H19c0.55,0,1-0.45,1-1V9C20,8.45,19.55,8,19,8z M10,14 c-2.21,0-4-1.79-4-4c0-2.21,1.79-4,4-4s4,1.79,4,4C14,12.21,12.21,14,10,14z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
    keyboard:
      "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 18.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 16 16' enable-background='new 0 0 16 16' xml:space='preserve'%3E%3Cg id='manually_entered_data_2_'%3E%3Cg%3E%3Cpath fill='%23FFFFFF' fill-rule='evenodd' clip-rule='evenodd' d='M1,8h3.76l2-2H1C0.45,6,0,6.45,0,7C0,7.55,0.45,8,1,8z M15.49,3.99 C15.8,3.67,16,3.23,16,2.75C16,1.78,15.22,1,14.25,1c-0.48,0-0.92,0.2-1.24,0.51l-1.44,1.44l2.47,2.47L15.49,3.99z M1,4h7.76l2-2 H1C0.45,2,0,2.45,0,3C0,3.55,0.45,4,1,4z M1,10c-0.55,0-1,0.45-1,1c0,0.48,0.35,0.86,0.8,0.96L2.76,10H1z M10.95,3.57l-6.69,6.69 l2.47,2.47l6.69-6.69L10.95,3.57z M15.2,6.04L13.24,8H15c0.55,0,1-0.45,1-1C16,6.52,15.65,6.14,15.2,6.04z M2,15l3.86-1.39 l-2.46-2.44L2,15z M15,10h-3.76l-2,2H15c0.55,0,1-0.45,1-1C16,10.45,15.55,10,15,10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
    up: "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Layer_1' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 20 20' fill='%23FFF' enable-background='new 0 0 20 20' xml:space='preserve'%3E%3Ctitle%3EShape%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg id='Page-1' sketch:type='MSPage'%3E%3Cg id='Artboard-1' transform='translate(-3.000000, -1.000000)' sketch:type='MSArtboardGroup'%3E%3Cpath id='Shape' sketch:type='MSShapeGroup' d='M19.7,8.3l-6-6C13.5,2.1,13.3,2,13,2s-0.5,0.1-0.7,0.3l-6,6C6.1,8.5,6,8.7,6,9 c0,0.6,0.5,1,1,1c0.3,0,0.5-0.1,0.7-0.3L12,5.4V19c0,0.5,0.4,1,1,1s1-0.5,1-1V5.4l4.3,4.3C18.5,9.9,18.7,10,19,10c0.5,0,1-0.4,1-1 C20,8.7,19.9,8.5,19.7,8.3L19.7,8.3z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
    down: ic,
    do: ic,
    dw: ic,
    dwn: ic,
    left: sc,
    le: sc,
    lft: sc,
    right: ac,
    ri: ac,
    rght: ac,
    rgh: ac,
    enter: cc,
    en: cc,
    enr: cc,
    ent: cc,
    entr: cc,
  };
function uc(e, t) {
  const n = e.mouseOverlay,
    o = (n, o) =>
      (function (e, t, n, o) {
        const r = n.width(),
          i = n.height(),
          s = o.width,
          a = o.height,
          c = r / i;
        let l = s,
          u = s / c;
        u > a && ((u = a), (l = a * c));
        const d = (a - u) / 2,
          h = (s - l) / 2;
        let f = Math.max(0, Math.min(1, (e - h) / l)),
          p = Math.max(0, Math.min(1, (t - d) / u));
        f <= dc && (f = 0);
        f >= 1 - dc && (f = 1);
        p <= dc && (p = 0);
        p >= 1 - dc && (p = 1);
        return { x: f, y: p };
      })(n, o, t, e);
  return (
    document.pointerLockElement === n && document.exitPointerLock(),
    hc(
      n,
      e,
      function (e, n, r) {
        const i = o(e, n);
        t.sendMouseMotion(i.x, i.y), t.sendMouseButton(r, !0);
      },
      function (e, n, r, i) {
        const s = o(e, n);
        t.sendMouseMotion(s.x, s.y);
      },
      function (e, n, r) {
        const i = o(e, n);
        t.sendMouseMotion(i.x, i.y), t.sendMouseButton(r, !1);
      },
      function (e, n) {
        const r = o(e, n);
        t.sendMouseMotion(r.x, r.y);
      },
    )
  );
}
const dc = 0.01;
function hc(e, t, n, o, r, i) {
  let s = 0;
  const a = (o) => {
      if (o.target !== e) return;
      if (t.pointerDisabled) return void o.stopPropagation();
      const r = Va(o, e);
      (s = r.button || t.pointerButton), n(r.x, r.y, s), o.stopPropagation();
    },
    c = (n) => {
      if (n.target !== e) return;
      if (t.pointerDisabled) return void n.stopPropagation();
      const r = Va(n, e);
      o(r.x, r.y, r.mX, r.mY), n.stopPropagation();
    },
    l = (n) => {
      if (t.pointerDisabled) return void n.stopPropagation();
      const o = Va(n, e);
      r(o.x, o.y, s), n.stopPropagation();
    },
    u = (n) => {
      if (n.target !== e) return;
      if (t.pointerDisabled) return void n.stopPropagation();
      const o = Va(n, e);
      i(o.x, o.y), n.stopPropagation();
    },
    d = (e) => {
      e.stopPropagation();
    },
    h = { capture: !1 };
  for (const f of Wa.starters) e.addEventListener(f, a, h);
  for (const f of Wa.changers) e.addEventListener(f, c, h);
  for (const f of Wa.enders) e.addEventListener(f, l, h);
  for (const f of Wa.prevents) e.addEventListener(f, d, h);
  for (const f of Wa.leavers) e.addEventListener(f, u, h);
  return () => {
    for (const t of Wa.starters) e.removeEventListener(t, a, h);
    for (const t of Wa.changers) e.removeEventListener(t, c, h);
    for (const t of Wa.enders) e.removeEventListener(t, l, h);
    for (const t of Wa.prevents) e.removeEventListener(t, d, h);
    for (const t of Wa.leavers) e.removeEventListener(t, u, h);
  };
}
function fc(e, t, n, o) {
  return e && !Wa.canLock
    ? (function (e, t, n) {
        const o = t.mouseOverlay;
        let r = -1,
          i = 0,
          s = 0,
          a = 0;
        return hc(
          o,
          t,
          (e, t) => {
            (r = Date.now()), (i = 0), (s = e), (a = t);
          },
          function (t, o, r, c) {
            void 0 === r && (r = t - s),
              void 0 === c && (c = o - a),
              (s = t),
              (a = o),
              (0 === r && 0 === c) ||
                ((i += Math.abs(r) + Math.abs(c)),
                n.sendMouseRelativeMotion(r * e * 2, c * e * 2));
          },
          (e, o) => {
            if (Date.now() - r < 500 && i < 50) {
              const e = t.pointerButton || 0;
              n.sendMouseButton(e, !0),
                setTimeout(() => n.sendMouseButton(e, !1), 60);
            }
          },
          () => {},
        );
      })(t, n, o)
    : e
      ? (function (e, t, n) {
          const o = t.mouseOverlay;
          function r() {
            return document.pointerLockElement !== o;
          }
          return hc(
            o,
            t,
            function (e, t, i) {
              r()
                ? (
                    o.requestPointerLock ||
                    o.mozRequestPointerLock ||
                    o.webkitRequestPointerLock
                  ).call(o)
                : n.sendMouseButton(i, !0);
            },
            function (t, o, i, s) {
              r() ||
                (0 === i && 0 === s) ||
                n.sendMouseRelativeMotion(i * e, s * e);
            },
            function (e, t, o) {
              r() || n.sendMouseButton(o, !1);
            },
            function (e, t) {},
          );
        })(t, n, o)
      : uc(n, o);
}
const pc = (e, t) => {
    const n = t.x - e.x,
      o = t.y - e.y;
    return Math.sqrt(n * n + o * o);
  },
  vc = (e) => e * (Math.PI / 180),
  mc = (e) => e * (180 / Math.PI),
  yc = new Map(),
  gc = (e) => {
    yc.has(e) && clearTimeout(yc.get(e)), yc.set(e, setTimeout(e, 100));
  },
  bc = (e, t, n) => {
    const o = t.split(/[ ,]+/g);
    let r;
    for (let i = 0; i < o.length; i += 1)
      (r = o[i]),
        e.addEventListener
          ? e.addEventListener(r, n, !1)
          : e.attachEvent && e.attachEvent(r, n);
  },
  _c = (e, t, n) => {
    const o = t.split(/[ ,]+/g);
    let r;
    for (let i = 0; i < o.length; i += 1)
      (r = o[i]),
        e.removeEventListener
          ? e.removeEventListener(r, n)
          : e.detachEvent && e.detachEvent(r, n);
  },
  wc = (e) => (
    e.preventDefault(), e.type.match(/^touch/) ? e.changedTouches : e
  ),
  kc = () => ({
    x:
      void 0 !== window.pageXOffset
        ? window.pageXOffset
        : (
            document.documentElement ||
            document.body.parentNode ||
            document.body
          ).scrollLeft,
    y:
      void 0 !== window.pageYOffset
        ? window.pageYOffset
        : (
            document.documentElement ||
            document.body.parentNode ||
            document.body
          ).scrollTop,
  }),
  xc = (e, t) => {
    t.top || t.right || t.bottom || t.left
      ? ((e.style.top = t.top),
        (e.style.right = t.right),
        (e.style.bottom = t.bottom),
        (e.style.left = t.left))
      : ((e.style.left = t.x + "px"), (e.style.top = t.y + "px"));
  },
  Cc = (e, t, n) => {
    const o = Sc(e);
    for (let r in o)
      if (o.hasOwnProperty(r))
        if ("string" == typeof t) o[r] = t + " " + n;
        else {
          let e = "";
          for (let o = 0, r = t.length; o < r; o += 1)
            e += t[o] + " " + n + ", ";
          o[r] = e.slice(0, -2);
        }
    return o;
  },
  Sc = (e) => {
    const t = {};
    t[e] = "";
    return (
      ["webkit", "Moz", "o"].forEach(function (n) {
        t[n + e.charAt(0).toUpperCase() + e.slice(1)] = "";
      }),
      t
    );
  },
  Pc = (e, t) => {
    for (let n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    return e;
  },
  Ec = (e, t) => {
    if (e.length) for (let n = 0, o = e.length; n < o; n += 1) t(e[n]);
    else t(e);
  };
var Oc,
  Mc = !!("ontouchstart" in window),
  jc = !!window.PointerEvent,
  Ac = !!window.MSPointerEvent,
  Dc = { start: "mousedown", move: "mousemove", end: "mouseup" },
  Tc = {};
function Bc() {}
function zc(e, t) {
  return (
    (this.identifier = t.identifier),
    (this.position = t.position),
    (this.frontPosition = t.frontPosition),
    (this.collection = e),
    (this.defaults = {
      size: 100,
      threshold: 0.1,
      color: "white",
      fadeTime: 250,
      dataOnly: !1,
      restJoystick: !0,
      restOpacity: 0.5,
      mode: "dynamic",
      zone: document.body,
      lockX: !1,
      lockY: !1,
      shape: "circle",
    }),
    this.config(t),
    "dynamic" === this.options.mode && (this.options.restOpacity = 0),
    (this.id = zc.id),
    (zc.id += 1),
    this.buildEl().stylize(),
    (this.instance = {
      el: this.ui.el,
      on: this.on.bind(this),
      off: this.off.bind(this),
      show: this.show.bind(this),
      hide: this.hide.bind(this),
      add: this.addToDom.bind(this),
      remove: this.removeFromDom.bind(this),
      destroy: this.destroy.bind(this),
      setPosition: this.setPosition.bind(this),
      resetDirection: this.resetDirection.bind(this),
      computeDirection: this.computeDirection.bind(this),
      trigger: this.trigger.bind(this),
      position: this.position,
      frontPosition: this.frontPosition,
      ui: this.ui,
      identifier: this.identifier,
      id: this.id,
      options: this.options,
    }),
    this.instance
  );
}
function Lc(e, t) {
  var n = this;
  (n.nipples = []),
    (n.idles = []),
    (n.actives = []),
    (n.ids = []),
    (n.pressureIntervals = {}),
    (n.manager = e),
    (n.id = Lc.id),
    (Lc.id += 1),
    (n.defaults = {
      zone: document.body,
      multitouch: !1,
      maxNumberOfNipples: 10,
      mode: "dynamic",
      position: { top: 0, left: 0 },
      catchDistance: 200,
      size: 100,
      threshold: 0.1,
      color: "white",
      fadeTime: 250,
      dataOnly: !1,
      restJoystick: !0,
      restOpacity: 0.5,
      lockX: !1,
      lockY: !1,
      shape: "circle",
      dynamicPage: !1,
      follow: !1,
    }),
    n.config(t),
    ("static" !== n.options.mode && "semi" !== n.options.mode) ||
      (n.options.multitouch = !1),
    n.options.multitouch || (n.options.maxNumberOfNipples = 1);
  const o = getComputedStyle(n.options.zone.parentElement);
  return (
    o && "flex" === o.display && (n.parentIsFlex = !0),
    n.updateBox(),
    n.prepareNipples(),
    n.bindings(),
    n.begin(),
    n.nipples
  );
}
function Rc(e) {
  var t = this;
  (t.ids = {}),
    (t.index = 0),
    (t.collections = []),
    (t.scroll = kc()),
    t.config(e),
    t.prepareCollections();
  var n = function () {
    var e;
    t.collections.forEach(function (n) {
      n.forEach(function (n) {
        (e = n.el.getBoundingClientRect()),
          (n.position = { x: t.scroll.x + e.left, y: t.scroll.y + e.top });
      });
    });
  };
  bc(window, "resize", function () {
    gc(n);
  });
  var o = function () {
    t.scroll = kc();
  };
  return (
    bc(window, "scroll", function () {
      gc(o);
    }),
    t.collections
  );
}
jc
  ? (Oc = {
      start: "pointerdown",
      move: "pointermove",
      end: "pointerup, pointercancel",
    })
  : Ac
    ? (Oc = {
        start: "MSPointerDown",
        move: "MSPointerMove",
        end: "MSPointerUp",
      })
    : Mc
      ? ((Oc = {
          start: "touchstart",
          move: "touchmove",
          end: "touchend, touchcancel",
        }),
        (Tc = Dc))
      : (Oc = Dc),
  (Bc.prototype.on = function (e, t) {
    var n,
      o = this,
      r = e.split(/[ ,]+/g);
    o._handlers_ = o._handlers_ || {};
    for (var i = 0; i < r.length; i += 1)
      (n = r[i]),
        (o._handlers_[n] = o._handlers_[n] || []),
        o._handlers_[n].push(t);
    return o;
  }),
  (Bc.prototype.off = function (e, t) {
    var n = this;
    return (
      (n._handlers_ = n._handlers_ || {}),
      void 0 === e
        ? (n._handlers_ = {})
        : void 0 === t
          ? (n._handlers_[e] = null)
          : n._handlers_[e] &&
            n._handlers_[e].indexOf(t) >= 0 &&
            n._handlers_[e].splice(n._handlers_[e].indexOf(t), 1),
      n
    );
  }),
  (Bc.prototype.trigger = function (e, t) {
    var n,
      o = this,
      r = e.split(/[ ,]+/g);
    o._handlers_ = o._handlers_ || {};
    for (var i = 0; i < r.length; i += 1)
      (n = r[i]),
        o._handlers_[n] &&
          o._handlers_[n].length &&
          o._handlers_[n].forEach(function (e) {
            e.call(o, { type: n, target: o }, t);
          });
  }),
  (Bc.prototype.config = function (e) {
    var t = this;
    (t.options = t.defaults || {}),
      e &&
        (t.options = ((e, t) => {
          const n = {};
          for (let o in e)
            e.hasOwnProperty(o) && t.hasOwnProperty(o)
              ? (n[o] = t[o])
              : e.hasOwnProperty(o) && (n[o] = e[o]);
          return n;
        })(t.options, e));
  }),
  (Bc.prototype.bindEvt = function (e, t) {
    var n = this;
    return (
      (n._domHandlers_ = n._domHandlers_ || {}),
      (n._domHandlers_[t] = function () {
        "function" == typeof n["on" + t]
          ? n["on" + t].apply(n, arguments)
          : console.warn('[WARNING] : Missing "on' + t + '" handler.');
      }),
      bc(e, Oc[t], n._domHandlers_[t]),
      Tc[t] && bc(e, Tc[t], n._domHandlers_[t]),
      n
    );
  }),
  (Bc.prototype.unbindEvt = function (e, t) {
    var n = this;
    return (
      (n._domHandlers_ = n._domHandlers_ || {}),
      _c(e, Oc[t], n._domHandlers_[t]),
      Tc[t] && _c(e, Tc[t], n._domHandlers_[t]),
      delete n._domHandlers_[t],
      this
    );
  }),
  (zc.prototype = new Bc()),
  (zc.constructor = zc),
  (zc.id = 0),
  (zc.prototype.buildEl = function (e) {
    return (
      (this.ui = {}),
      this.options.dataOnly ||
        ((this.ui.el = document.createElement("div")),
        (this.ui.back = document.createElement("div")),
        (this.ui.front = document.createElement("div")),
        (this.ui.el.className = "nipple collection_" + this.collection.id),
        (this.ui.back.className = "back"),
        (this.ui.front.className = "front"),
        this.ui.el.setAttribute(
          "id",
          "nipple_" + this.collection.id + "_" + this.id,
        ),
        this.ui.el.appendChild(this.ui.back),
        this.ui.el.appendChild(this.ui.front)),
      this
    );
  }),
  (zc.prototype.stylize = function () {
    if (this.options.dataOnly) return this;
    var e = this.options.fadeTime + "ms",
      t = ((e, t) => {
        const n = Sc(e);
        for (let o in n) n.hasOwnProperty(o) && (n[o] = t);
        return n;
      })("borderRadius", "50%"),
      n = Cc("transition", "opacity", e),
      o = {};
    return (
      (o.el = {
        position: "absolute",
        opacity: this.options.restOpacity,
        display: "block",
        zIndex: 999,
      }),
      (o.back = {
        position: "absolute",
        display: "block",
        width: this.options.size + "px",
        height: this.options.size + "px",
        left: 0,
        marginLeft: -this.options.size / 2 + "px",
        marginTop: -this.options.size / 2 + "px",
        background: this.options.color,
        opacity: ".5",
      }),
      (o.front = {
        width: this.options.size / 2 + "px",
        height: this.options.size / 2 + "px",
        position: "absolute",
        display: "block",
        left: 0,
        marginLeft: -this.options.size / 4 + "px",
        marginTop: -this.options.size / 4 + "px",
        background: this.options.color,
        opacity: ".5",
        transform: "translate(0px, 0px)",
      }),
      Pc(o.el, n),
      "circle" === this.options.shape && Pc(o.back, t),
      Pc(o.front, t),
      this.applyStyles(o),
      this
    );
  }),
  (zc.prototype.applyStyles = function (e) {
    for (var t in this.ui)
      if (this.ui.hasOwnProperty(t))
        for (var n in e[t]) this.ui[t].style[n] = e[t][n];
    return this;
  }),
  (zc.prototype.addToDom = function () {
    return (
      this.options.dataOnly ||
        document.body.contains(this.ui.el) ||
        this.options.zone.appendChild(this.ui.el),
      this
    );
  }),
  (zc.prototype.removeFromDom = function () {
    return (
      this.options.dataOnly ||
        !document.body.contains(this.ui.el) ||
        this.options.zone.removeChild(this.ui.el),
      this
    );
  }),
  (zc.prototype.destroy = function () {
    clearTimeout(this.removeTimeout),
      clearTimeout(this.showTimeout),
      clearTimeout(this.restTimeout),
      this.trigger("destroyed", this.instance),
      this.removeFromDom(),
      this.off();
  }),
  (zc.prototype.show = function (e) {
    var t = this;
    return (
      t.options.dataOnly ||
        (clearTimeout(t.removeTimeout),
        clearTimeout(t.showTimeout),
        clearTimeout(t.restTimeout),
        t.addToDom(),
        t.restCallback(),
        setTimeout(function () {
          t.ui.el.style.opacity = 1;
        }, 0),
        (t.showTimeout = setTimeout(function () {
          t.trigger("shown", t.instance),
            "function" == typeof e && e.call(this);
        }, t.options.fadeTime))),
      t
    );
  }),
  (zc.prototype.hide = function (e) {
    var t = this;
    if (t.options.dataOnly) return t;
    if (
      ((t.ui.el.style.opacity = t.options.restOpacity),
      clearTimeout(t.removeTimeout),
      clearTimeout(t.showTimeout),
      clearTimeout(t.restTimeout),
      (t.removeTimeout = setTimeout(function () {
        var n = "dynamic" === t.options.mode ? "none" : "block";
        (t.ui.el.style.display = n),
          "function" == typeof e && e.call(t),
          t.trigger("hidden", t.instance);
      }, t.options.fadeTime)),
      t.options.restJoystick)
    ) {
      const n = t.options.restJoystick,
        o = {};
      (o.x = !0 === n || !1 !== n.x ? 0 : t.instance.frontPosition.x),
        (o.y = !0 === n || !1 !== n.y ? 0 : t.instance.frontPosition.y),
        t.setPosition(e, o);
    }
    return t;
  }),
  (zc.prototype.setPosition = function (e, t) {
    var n = this;
    n.frontPosition = { x: t.x, y: t.y };
    var o = n.options.fadeTime + "ms",
      r = {};
    r.front = Cc("transition", ["transform"], o);
    var i = { front: {} };
    (i.front = {
      transform:
        "translate(" + n.frontPosition.x + "px," + n.frontPosition.y + "px)",
    }),
      n.applyStyles(r),
      n.applyStyles(i),
      (n.restTimeout = setTimeout(function () {
        "function" == typeof e && e.call(n), n.restCallback();
      }, n.options.fadeTime));
  }),
  (zc.prototype.restCallback = function () {
    var e = this,
      t = {};
    (t.front = Cc("transition", "none", "")),
      e.applyStyles(t),
      e.trigger("rested", e.instance);
  }),
  (zc.prototype.resetDirection = function () {
    this.direction = { x: !1, y: !1, angle: !1 };
  }),
  (zc.prototype.computeDirection = function (e) {
    var t,
      n,
      o,
      r = e.angle.radian,
      i = Math.PI / 4,
      s = Math.PI / 2;
    if (
      (r > i && r < 3 * i && !e.lockX
        ? (t = "up")
        : r > -i && r <= i && !e.lockY
          ? (t = "left")
          : r > 3 * -i && r <= -i && !e.lockX
            ? (t = "down")
            : e.lockY || (t = "right"),
      e.lockY || (n = r > -s && r < s ? "left" : "right"),
      e.lockX || (o = r > 0 ? "up" : "down"),
      e.force > this.options.threshold)
    ) {
      var a,
        c = {};
      for (a in this.direction)
        this.direction.hasOwnProperty(a) && (c[a] = this.direction[a]);
      var l = {};
      for (a in ((this.direction = { x: n, y: o, angle: t }),
      (e.direction = this.direction),
      c))
        c[a] === this.direction[a] && (l[a] = !0);
      if (l.x && l.y && l.angle) return e;
      (l.x && l.y) || this.trigger("plain", e),
        l.x || this.trigger("plain:" + n, e),
        l.y || this.trigger("plain:" + o, e),
        l.angle || this.trigger("dir dir:" + t, e);
    } else this.resetDirection();
    return e;
  }),
  (Lc.prototype = new Bc()),
  (Lc.constructor = Lc),
  (Lc.id = 0),
  (Lc.prototype.prepareNipples = function () {
    var e = this,
      t = e.nipples;
    (t.on = e.on.bind(e)),
      (t.off = e.off.bind(e)),
      (t.options = e.options),
      (t.destroy = e.destroy.bind(e)),
      (t.ids = e.ids),
      (t.id = e.id),
      (t.processOnMove = e.processOnMove.bind(e)),
      (t.processOnEnd = e.processOnEnd.bind(e)),
      (t.get = function (e) {
        if (void 0 === e) return t[0];
        for (var n = 0, o = t.length; n < o; n += 1)
          if (t[n].identifier === e) return t[n];
        return !1;
      });
  }),
  (Lc.prototype.bindings = function () {
    var e = this;
    e.bindEvt(e.options.zone, "start"),
      (e.options.zone.style.touchAction = "none"),
      (e.options.zone.style.msTouchAction = "none");
  }),
  (Lc.prototype.begin = function () {
    var e = this,
      t = e.options;
    if ("static" === t.mode) {
      var n = e.createNipple(t.position, e.manager.getIdentifier());
      n.add(), e.idles.push(n);
    }
  }),
  (Lc.prototype.createNipple = function (e, t) {
    var n = this,
      o = n.manager.scroll,
      r = {},
      i = n.options,
      s = n.parentIsFlex ? o.x : o.x + n.box.left,
      a = n.parentIsFlex ? o.y : o.y + n.box.top;
    if (e.x && e.y) r = { x: e.x - s, y: e.y - a };
    else if (e.top || e.right || e.bottom || e.left) {
      var c = document.createElement("DIV");
      (c.style.display = "hidden"),
        (c.style.top = e.top),
        (c.style.right = e.right),
        (c.style.bottom = e.bottom),
        (c.style.left = e.left),
        (c.style.position = "absolute"),
        i.zone.appendChild(c);
      var l = c.getBoundingClientRect();
      i.zone.removeChild(c), (r = e), (e = { x: l.left + o.x, y: l.top + o.y });
    }
    var u = new zc(n, {
      color: i.color,
      size: i.size,
      threshold: i.threshold,
      fadeTime: i.fadeTime,
      dataOnly: i.dataOnly,
      restJoystick: i.restJoystick,
      restOpacity: i.restOpacity,
      mode: i.mode,
      identifier: t,
      position: e,
      zone: i.zone,
      frontPosition: { x: 0, y: 0 },
      shape: i.shape,
    });
    return (
      i.dataOnly || (xc(u.ui.el, r), xc(u.ui.front, u.frontPosition)),
      n.nipples.push(u),
      n.trigger("added " + u.identifier + ":added", u),
      n.manager.trigger("added " + u.identifier + ":added", u),
      n.bindNipple(u),
      u
    );
  }),
  (Lc.prototype.updateBox = function () {
    this.box = this.options.zone.getBoundingClientRect();
  }),
  (Lc.prototype.bindNipple = function (e) {
    var t,
      n = this,
      o = function (e, o) {
        (t = e.type + " " + o.id + ":" + e.type), n.trigger(t, o);
      };
    e.on("destroyed", n.onDestroyed.bind(n)),
      e.on("shown hidden rested dir plain", o),
      e.on("dir:up dir:right dir:down dir:left", o),
      e.on("plain:up plain:right plain:down plain:left", o);
  }),
  (Lc.prototype.pressureFn = function (e, t, n) {
    var o = this,
      r = 0;
    clearInterval(o.pressureIntervals[n]),
      (o.pressureIntervals[n] = setInterval(
        function () {
          var n = e.force || e.pressure || e.webkitForce || 0;
          n !== r &&
            (t.trigger("pressure", n),
            o.trigger("pressure " + t.identifier + ":pressure", n),
            (r = n));
        }.bind(o),
        100,
      ));
  }),
  (Lc.prototype.onstart = function (e) {
    var t = this,
      n = t.options,
      o = e;
    (e = wc(e)), t.updateBox();
    return (
      Ec(e, function (r) {
        t.actives.length < n.maxNumberOfNipples
          ? t.processOnStart(r)
          : o.type.match(/^touch/) &&
            (Object.keys(t.manager.ids).forEach(function (n) {
              if (
                Object.values(o.touches).findIndex(function (e) {
                  return e.identifier === n;
                }) < 0
              ) {
                var r = [e[0]];
                (r.identifier = n), t.processOnEnd(r);
              }
            }),
            t.actives.length < n.maxNumberOfNipples && t.processOnStart(r));
      }),
      t.manager.bindDocument(),
      !1
    );
  }),
  (Lc.prototype.processOnStart = function (e) {
    var t,
      n = this,
      o = n.options,
      r = n.manager.getIdentifier(e),
      i = e.force || e.pressure || e.webkitForce || 0,
      s = { x: e.pageX, y: e.pageY },
      a = n.getOrCreate(r, s);
    a.identifier !== r && n.manager.removeIdentifier(a.identifier),
      (a.identifier = r);
    var c = function (t) {
      t.trigger("start", t),
        n.trigger("start " + t.id + ":start", t),
        t.show(),
        i > 0 && n.pressureFn(e, t, t.identifier),
        n.processOnMove(e);
    };
    if (
      ((t = n.idles.indexOf(a)) >= 0 && n.idles.splice(t, 1),
      n.actives.push(a),
      n.ids.push(a.identifier),
      "semi" !== o.mode)
    )
      c(a);
    else {
      if (!(pc(s, a.position) <= o.catchDistance))
        return a.destroy(), void n.processOnStart(e);
      c(a);
    }
    return a;
  }),
  (Lc.prototype.getOrCreate = function (e, t) {
    var n,
      o = this,
      r = o.options;
    return /(semi|static)/.test(r.mode)
      ? (n = o.idles[0])
        ? (o.idles.splice(0, 1), n)
        : "semi" === r.mode
          ? o.createNipple(t, e)
          : (console.warn("Coudln't find the needed nipple."), !1)
      : (n = o.createNipple(t, e));
  }),
  (Lc.prototype.processOnMove = function (e) {
    var t = this,
      n = t.options,
      o = t.manager.getIdentifier(e),
      r = t.nipples.get(o),
      i = t.manager.scroll;
    if (((e) => (isNaN(e.buttons) ? 0 !== e.pressure : 0 !== e.buttons))(e)) {
      if (!r)
        return (
          console.error("Found zombie joystick with ID " + o),
          void t.manager.removeIdentifier(o)
        );
      if (n.dynamicPage) {
        var s = r.el.getBoundingClientRect();
        r.position = { x: i.x + s.left, y: i.y + s.top };
      }
      r.identifier = o;
      var a = r.options.size / 2,
        c = { x: e.pageX, y: e.pageY };
      n.lockX && (c.y = r.position.y), n.lockY && (c.x = r.position.x);
      var l,
        u,
        d = pc(c, r.position),
        h = ((e, t) => {
          const n = t.x - e.x,
            o = t.y - e.y;
          return mc(Math.atan2(o, n));
        })(c, r.position),
        f = vc(h),
        p = d / a,
        v = { distance: d, position: c };
      if (
        ("circle" === r.options.shape
          ? ((l = Math.min(d, a)),
            (u = ((e, t, n) => {
              const o = { x: 0, y: 0 };
              return (
                (n = vc(n)),
                (o.x = e.x - t * Math.cos(n)),
                (o.y = e.y - t * Math.sin(n)),
                o
              );
            })(r.position, l, h)))
          : ((u = ((e, t, n) => ({
              x: Math.min(Math.max(e.x, t.x - n), t.x + n),
              y: Math.min(Math.max(e.y, t.y - n), t.y + n),
            }))(c, r.position, a)),
            (l = pc(u, r.position))),
        n.follow)
      ) {
        if (d > a) {
          let e = c.x - u.x,
            n = c.y - u.y;
          (r.position.x += e),
            (r.position.y += n),
            (r.el.style.top = r.position.y - (t.box.top + i.y) + "px"),
            (r.el.style.left = r.position.x - (t.box.left + i.x) + "px"),
            (d = pc(c, r.position));
        }
      } else (c = u), (d = l);
      var m = c.x - r.position.x,
        y = c.y - r.position.y;
      (r.frontPosition = { x: m, y: y }),
        n.dataOnly ||
          (r.ui.front.style.transform = "translate(" + m + "px," + y + "px)");
      var g = {
        identifier: r.identifier,
        position: c,
        force: p,
        pressure: e.force || e.pressure || e.webkitForce || 0,
        distance: d,
        angle: { radian: f, degree: h },
        vector: { x: m / a, y: -y / a },
        raw: v,
        instance: r,
        lockX: n.lockX,
        lockY: n.lockY,
      };
      ((g = r.computeDirection(g)).angle = {
        radian: vc(180 - h),
        degree: 180 - h,
      }),
        r.trigger("move", g),
        t.trigger("move " + r.id + ":move", g);
    } else this.processOnEnd(e);
  }),
  (Lc.prototype.processOnEnd = function (e) {
    var t = this,
      n = t.options,
      o = t.manager.getIdentifier(e),
      r = t.nipples.get(o),
      i = t.manager.removeIdentifier(r.identifier);
    r &&
      (n.dataOnly ||
        r.hide(function () {
          "dynamic" === n.mode &&
            (r.trigger("removed", r),
            t.trigger("removed " + r.id + ":removed", r),
            t.manager.trigger("removed " + r.id + ":removed", r),
            r.destroy());
        }),
      clearInterval(t.pressureIntervals[r.identifier]),
      r.resetDirection(),
      r.trigger("end", r),
      t.trigger("end " + r.id + ":end", r),
      t.ids.indexOf(r.identifier) >= 0 &&
        t.ids.splice(t.ids.indexOf(r.identifier), 1),
      t.actives.indexOf(r) >= 0 && t.actives.splice(t.actives.indexOf(r), 1),
      /(semi|static)/.test(n.mode)
        ? t.idles.push(r)
        : t.nipples.indexOf(r) >= 0 &&
          t.nipples.splice(t.nipples.indexOf(r), 1),
      t.manager.unbindDocument(),
      /(semi|static)/.test(n.mode) && (t.manager.ids[i.id] = i.identifier));
  }),
  (Lc.prototype.onDestroyed = function (e, t) {
    var n = this;
    n.nipples.indexOf(t) >= 0 && n.nipples.splice(n.nipples.indexOf(t), 1),
      n.actives.indexOf(t) >= 0 && n.actives.splice(n.actives.indexOf(t), 1),
      n.idles.indexOf(t) >= 0 && n.idles.splice(n.idles.indexOf(t), 1),
      n.ids.indexOf(t.identifier) >= 0 &&
        n.ids.splice(n.ids.indexOf(t.identifier), 1),
      n.manager.removeIdentifier(t.identifier),
      n.manager.unbindDocument();
  }),
  (Lc.prototype.destroy = function () {
    var e = this;
    for (var t in (e.unbindEvt(e.options.zone, "start"),
    e.nipples.forEach(function (e) {
      e.destroy();
    }),
    e.pressureIntervals))
      e.pressureIntervals.hasOwnProperty(t) &&
        clearInterval(e.pressureIntervals[t]);
    e.trigger("destroyed", e.nipples), e.manager.unbindDocument(), e.off();
  }),
  (Rc.prototype = new Bc()),
  (Rc.constructor = Rc),
  (Rc.prototype.prepareCollections = function () {
    var e = this;
    (e.collections.create = e.create.bind(e)),
      (e.collections.on = e.on.bind(e)),
      (e.collections.off = e.off.bind(e)),
      (e.collections.destroy = e.destroy.bind(e)),
      (e.collections.get = function (t) {
        var n;
        return (
          e.collections.every(function (e) {
            return !(n = e.get(t));
          }),
          n
        );
      });
  }),
  (Rc.prototype.create = function (e) {
    return this.createCollection(e);
  }),
  (Rc.prototype.createCollection = function (e) {
    var t = this,
      n = new Lc(t, e);
    return t.bindCollection(n), t.collections.push(n), n;
  }),
  (Rc.prototype.bindCollection = function (e) {
    var t,
      n = this,
      o = function (e, o) {
        (t = e.type + " " + o.id + ":" + e.type), n.trigger(t, o);
      };
    e.on("destroyed", n.onDestroyed.bind(n)),
      e.on("shown hidden rested dir plain", o),
      e.on("dir:up dir:right dir:down dir:left", o),
      e.on("plain:up plain:right plain:down plain:left", o);
  }),
  (Rc.prototype.bindDocument = function () {
    var e = this;
    e.binded ||
      (e.bindEvt(document, "move").bindEvt(document, "end"), (e.binded = !0));
  }),
  (Rc.prototype.unbindDocument = function (e) {
    var t = this;
    (Object.keys(t.ids).length && !0 !== e) ||
      (t.unbindEvt(document, "move").unbindEvt(document, "end"),
      (t.binded = !1));
  }),
  (Rc.prototype.getIdentifier = function (e) {
    var t;
    return (
      e
        ? void 0 ===
            (t = void 0 === e.identifier ? e.pointerId : e.identifier) &&
          (t = this.latest || 0)
        : (t = this.index),
      void 0 === this.ids[t] && ((this.ids[t] = this.index), (this.index += 1)),
      (this.latest = t),
      this.ids[t]
    );
  }),
  (Rc.prototype.removeIdentifier = function (e) {
    var t = {};
    for (var n in this.ids)
      if (this.ids[n] === e) {
        (t.id = n), (t.identifier = this.ids[n]), delete this.ids[n];
        break;
      }
    return t;
  }),
  (Rc.prototype.onmove = function (e) {
    return this.onAny("move", e), !1;
  }),
  (Rc.prototype.onend = function (e) {
    return this.onAny("end", e), !1;
  }),
  (Rc.prototype.oncancel = function (e) {
    return this.onAny("end", e), !1;
  }),
  (Rc.prototype.onAny = function (e, t) {
    var n,
      o = this,
      r = "processOn" + e.charAt(0).toUpperCase() + e.slice(1);
    t = wc(t);
    var i = function (e, t, n) {
      n.ids.indexOf(t) >= 0 && (n[r](e), (e._found_ = !0));
    };
    return (
      Ec(t, function (e) {
        (n = o.getIdentifier(e)),
          Ec(o.collections, i.bind(null, e, n)),
          e._found_ || o.removeIdentifier(n);
      }),
      !1
    );
  }),
  (Rc.prototype.destroy = function () {
    var e = this;
    e.unbindDocument(!0),
      (e.ids = {}),
      (e.index = 0),
      e.collections.forEach(function (e) {
        e.destroy();
      }),
      e.off();
  }),
  (Rc.prototype.onDestroyed = function (e, t) {
    var n = this;
    if (n.collections.indexOf(t) < 0) return !1;
    n.collections.splice(n.collections.indexOf(t), 1);
  });
const Ic = new Rc(),
  Nc = function (e) {
    return Ic.create(e);
  };
function Uc(e, t, n, o, r, i) {
  const s = Math.round(o / 4);
  let a = !1;
  const c = () => {
      const e = a ? "flex" : "none";
      for (const t of l) t != u && (t.style.display = e);
    },
    l = [
      Kc(t, n),
      tc(
        "keyboard",
        {
          onClick: () => {
            e.toggleKeyboard(), a && ((a = !1), c());
          },
        },
        o,
      ),
      tc(
        "options",
        {
          onClick: () => {
            (a = !a), c();
          },
        },
        o,
      ),
    ],
    u = l[l.length - 1],
    d = Za("emulator-options");
  for (const h of l)
    h !== u && h.classList.add("emulator-button-control"),
      (h.style.marginRight = s + "px"),
      (h.style.marginBottom = s + "px"),
      h !== u && (h.style.display = "none"),
      d.appendChild(h);
  return (
    (d.style.position = "absolute"),
    (d.style.right = i + "px"),
    (d.style.top = r + "px"),
    e.mouseOverlay.appendChild(d),
    () => {
      e.mouseOverlay.removeChild(d);
    }
  );
}
function Kc(e, t) {
  if (e.length <= 1) return document.createElement("div");
  const n = document.createElement("select");
  n.classList.add("emulator-control-select");
  for (const o of e) {
    const e = document.createElement("option");
    (e.value = o), (e.innerHTML = o), n.appendChild(e);
  }
  return (
    (n.onchange = (e) => {
      const n = e.target.value;
      t(n);
    }),
    (function (e, t = !0) {
      const n = (e) => {
          e.stopPropagation();
        },
        o = (e) => {
          e.stopPropagation(), t && e.preventDefault();
        },
        r = { capture: !1 };
      for (const i of Wa.starters) e.addEventListener(i, n, r);
      for (const i of Wa.enders) e.addEventListener(i, n, r);
      for (const i of Wa.prevents) e.addEventListener(i, o, r);
    })(n, !1),
    n
  );
}
function Fc(e, t, n) {
  const o = n || {};
  function r(e) {
    return void 0 !== o[e] ? o[e] : e;
  }
  return (
    e.setOnKeyDown((e) => {
      t.sendKeyEvent(r(e), !0);
    }),
    e.setOnKeyUp((e) => {
      t.sendKeyEvent(r(e), !1);
    }),
    e.setOnKeyPress((e) => {
      t.simulateKeyPress(r(e));
    }),
    e.setOnKeysPress((e) => {
      t.simulateKeyPress(...e);
    }),
    () => {
      e.setOnKeyDown((e) => {}),
        e.setOnKeyUp((e) => {}),
        e.setOnKeyPress((e) => {}),
        e.setOnKeysPress((e) => {});
    }
  );
}
function Hc(e, t, n, o) {
  var r;
  const i = Object.keys(n),
    s = {
      keyboard: () => {},
      mouse: () => {},
      gestures: () => {},
      buttons: () => {},
    },
    a = (r) => {
      s.keyboard(),
        s.mouse(),
        s.gestures(),
        s.buttons(),
        (s.keyboard = () => {}),
        (s.mouse = () => {}),
        (s.gestures = () => {}),
        (s.buttons = () => {});
      const i = n[r];
      void 0 !== i &&
        ((s.keyboard = Fc(t, o, i.mapper)),
        void 0 !== i.gestures && i.gestures.length > 0
          ? (s.gestures = (function (e, t, n) {
              const o = Nc({
                zone: e.mouseOverlay,
                multitouch: !0,
                maxNumberOfNipples: 2,
              });
              let r = -1;
              const i = () => {
                  -1 !== r && (e.fireKeyUp(r), (r = -1));
                },
                s = {},
                a = {},
                c = {};
              for (const u of n)
                "end:release" === u.event
                  ? (s[u.joystickId] = !0)
                  : 0 !== u.mapTo &&
                    ("tap" === u.event
                      ? (a[u.joystickId] = u.mapTo)
                      : o.on(u.event, () => {
                          var t;
                          (c[u.joystickId] = Date.now()),
                            i(),
                            (t = u.mapTo),
                            e.fireKeyDown(t),
                            (r = t);
                        }));
              const l = {};
              return (
                o.on("start", () => {
                  const e = o.ids.length - 1;
                  l[e] = Date.now();
                }),
                o.on("end", () => {
                  const t = o.ids.length - 1,
                    n = Date.now() - l[t];
                  !0 === s[t] && i(),
                    a[t] && n < 500 && c[t] < l[t] && e.fireKeyPress(a[t]);
                }),
                () => o.destroy()
              );
            })(t, 0, i.gestures))
          : (s.mouse = fc(e.autolock, e.sensitivity, t, o)),
        void 0 !== i.buttons &&
          i.buttons.length &&
          (s.buttons = (function (e, t, n, o) {
            const r = Math.round(o / 4),
              i = [];
            for (const s of n) {
              if (0 === s.mapTo) continue;
              const t = tc(
                (s.symbol || oc(s.mapTo)).toUpperCase(),
                rc(s, e),
                o,
              );
              t.style.position = "absolute";
              const n = s.style;
              if (n) for (const e of Object.keys(n)) t.style[e] = n[e];
              if (void 0 !== s.position) {
                const e = s.position.left,
                  n = s.position.top,
                  i = s.position.bottom,
                  a = s.position.right;
                void 0 !== e && (t.style.left = r * e + o * (e - 1) + "px"),
                  void 0 !== a && (t.style.right = r * a + o * (a - 1) + "px"),
                  void 0 !== n && (t.style.top = r * n + o * (n - 1) + "px"),
                  void 0 !== i && (t.style.bottom = r * i + o * (i - 1) + "px");
              }
              e.mouseOverlay.appendChild(t), i.push(t);
            }
            return () => {
              for (const t of i)
                t.parentElement === e.mouseOverlay &&
                  e.mouseOverlay.removeChild(t);
            };
          })(t, 0, i.buttons, 54)));
    },
    c =
      0 === (null == (r = t.options.optionControls) ? void 0 : r.length)
        ? () => {}
        : Uc(t, i, a, 54, 13.5, 0);
  return (
    a("default"),
    () => {
      s.gestures(), s.buttons(), s.mouse(), s.keyboard(), c();
    }
  );
}
function Vc(e) {
  switch (e) {
    case "square":
      return (function () {
        class e {
          constructor() {
            t(this, "aspect", 0.625);
          }
          getConfiguration(e, t, n = 1) {
            const o = this.getCols(),
              r = this.getRows(),
              i = Math.floor(o / 2),
              s = Math.floor(r / 2),
              a = (5 * e) / 100 / 2,
              c = a,
              l = ((e - 2 * a) / o) * n,
              u = ((t - 2 * c) / r) * n,
              d = Math.min(l, u),
              h = [];
            for (let f = 0; f < r; ++f) {
              const n = [];
              for (let l = 0; l < o; ++l)
                n.push({
                  centerX:
                    l < i ? a + d * (l + 0.5) : e - a - d * (o - l - 1 + 0.5),
                  centerY:
                    f < s ? c + d * (f + 0.5) : t - c - d * (r - f - 1 + 0.5),
                });
              h.push(n);
            }
            return {
              gridType: "square",
              cells: h,
              columnWidth: d,
              rowHeight: d,
              columnsPadding: a,
              rowsPadding: c,
              width: e,
              height: t,
            };
          }
          getCols() {
            return 10;
          }
          getRows() {
            return Math.floor(this.getCols() * this.aspect) + 1;
          }
        }
        return new e();
      })();
    case "honeycomb":
      return (function () {
        class e {
          constructor() {
            t(this, "aspect", 0.625);
          }
          getConfiguration(e, t, n = 1) {
            const o = this.getCols(),
              r = this.getRows(),
              i = Math.floor(o / 2),
              s = Math.floor(r / 2),
              a = (5 * e) / 100 / 2,
              c = a,
              l = ((e - 2 * a) / o) * n,
              u = ((t - 2 * c) / r) * n,
              d = Math.min(l, u),
              h = [];
            for (let f = 0; f < r; ++f) {
              const n = [],
                l = f % 2 == 0 ? o : o - 1,
                u = f % 2 == 0 ? 0 : d / 2;
              for (let h = 0; h < l; ++h)
                n.push({
                  centerX:
                    h < i
                      ? u + a + d * (h + 0.5)
                      : u + e - a - d * (o - h - 1 + 0.5),
                  centerY:
                    f < s ? c + d * (f + 0.5) : t - c - d * (r - f - 1 + 0.5),
                });
              h.push(n);
            }
            return {
              gridType: "honeycomb",
              cells: h,
              columnWidth: d,
              rowHeight: d,
              columnsPadding: a,
              rowsPadding: c,
              width: e,
              height: t,
            };
          }
          getCols() {
            return 10;
          }
          getRows() {
            return Math.floor(this.getCols() * this.aspect) + 1;
          }
        }
        return new e();
      })();
  }
  throw new Error("Unknown grid type " + e);
}
function Wc(e, t, n, o, r, i, s) {
  let a = t.layers[0];
  if (void 0 !== s)
    for (const c of t.layers)
      if (c.title === s) {
        a = c;
        break;
      }
  return (function (e, t, n, o, r, i) {
    const s = Fc(t, n),
      a = fc(o.autolock, o.sensitivity, t, n),
      c = [];
    function l(s, a) {
      var l;
      for (const e of c) e();
      c.splice(0, c.length);
      const u = Vc(e.grid).getConfiguration(s, a, i),
        d = new qc();
      for (const t of e.controls) {
        const { row: e, column: n, type: o } = t;
        "NippleActivator" === o && Yc(u, e, n);
      }
      let h = -1;
      if (0 === (null == (l = t.options.optionControls) ? void 0 : l.length))
        for (const t of e.controls) {
          const { row: e, type: n } = t;
          if ("Options" === n) {
            h = e;
            break;
          }
        }
      const f = {};
      if (r)
        for (const t of e.controls) {
          const { row: e } = t;
          let n = t.column;
          const o = u.cells[e].length,
            r = o / 2;
          e === h && n >= r && (n = Math.min(n + 1, o - 1)),
            void 0 === f[e] &&
              (f[e] = {
                leftStart: r,
                leftEnd: 0,
                rightStart: o - 1,
                rightEnd: r,
              }),
            n < r
              ? ((f[e].leftStart = Math.min(f[e].leftStart, n)),
                (f[e].leftEnd = Math.max(f[e].leftEnd, n)))
              : ((f[e].rightStart = Math.min(f[e].rightStart, n)),
                (f[e].rightEnd = Math.max(f[e].rightEnd, n)));
        }
      for (const i of e.controls) {
        const e = Xc[i.type];
        if (void 0 === e) {
          console.error("Factory for control '" + i.type + "' is not defined");
          continue;
        }
        const s = { ...i },
          a = u.cells[i.row].length,
          l = a / 2;
        if (
          (h === i.row &&
            i.column >= l &&
            (s.column = Math.min(s.column + 1, a - 1)),
          r)
        ) {
          const {
              leftStart: e,
              leftEnd: t,
              rightStart: n,
              rightEnd: o,
            } = f[s.row],
            r = s.column < l;
          r
            ? (s.column += l + (l - t) - e - 1)
            : (s.column -= l + (n - l) - (a - o) + 1),
            s.column >= a
              ? (console.error(
                  "Column",
                  s.column,
                  "is out of bound",
                  a,
                  r ? "[leftSide]" : "[rightSide]",
                  f,
                ),
                (s.column = a - 1))
              : s.column < 0 &&
                (console.error(
                  "Column",
                  s.column,
                  "is out of bound",
                  0,
                  r ? "[leftSide]" : "[rightSide]",
                  f,
                ),
                (s.column = 0));
        }
        const p = e(s, t, n, u, d, o);
        c.push(p);
      }
    }
    return (
      t.addOnResize(l),
      l(t.width, t.height),
      () => {
        t.removeOnResize(l), s(), a();
        for (const e of c) e();
      }
    );
  })(a, e, n, o, r, i);
}
class qc {
  constructor() {
    t(this, "sensors", {});
  }
  activate(e, t) {
    const n = this.sensors[t + "_" + e];
    void 0 !== n && n.activate();
  }
  deactivate(e, t) {
    const n = this.sensors[t + "_" + e];
    void 0 !== n && n.deactivate();
  }
  register(e, t, n) {
    this.sensors[t + "_" + e] = n;
  }
}
const Xc = {
  Key: function (e, t, n, o, r, i) {
    const { cells: s, columnWidth: a } = o,
      { row: c, column: l } = e,
      { centerX: u, centerY: d } = s[c][l],
      h = {
        onDown: () => {
          for (const t of e.mapTo) n.sendKeyEvent(t, !0);
        },
        onUp: () => {
          for (const t of e.mapTo) n.sendKeyEvent(t, !1);
        },
      };
    if (
      (r.register(c, l, { activate: h.onDown, deactivate: h.onUp }),
      Gc(o, c, l))
    )
      return () => {};
    const f = tc(e.symbol, h, a);
    return (
      (f.style.position = "absolute"),
      (f.style.left = u - f.widthPx / 2 + "px"),
      (f.style.top = d - f.heightPx / 2 + "px"),
      t.mouseOverlay.appendChild(f),
      () => t.mouseOverlay.removeChild(f)
    );
  },
  Options: function (e, t, n, o, r, i) {
    var s;
    if (0 === (null == (s = t.options.optionControls) ? void 0 : s.length))
      return () => {};
    if (
      void 0 !== t.options.optionControls &&
      1 === t.options.optionControls.length &&
      "keyboard" === t.options.optionControls[0]
    )
      return $c(e, t, n, o);
    const { cells: a, columnWidth: c, rowHeight: l } = o,
      { row: u, column: d } = e,
      { centerX: h, centerY: f } = a[u][d],
      p = f - l / 2,
      v = h - c / 2,
      m = o.width - v - c;
    return Uc(t, ["default"], () => {}, c, p, m);
  },
  Keyboard: $c,
  Switch: function (e, t, n, o, r, i) {
    const { cells: s, columnWidth: a } = o,
      { row: c, column: l } = e,
      { centerX: u, centerY: d } = s[c][l],
      h = tc(
        e.symbol,
        { onUp: () => i.setActiveConfig(i.getActiveConfig(), e.layerName) },
        a,
      );
    return (
      (h.style.position = "absolute"),
      (h.style.left = u - h.widthPx / 2 + "px"),
      (h.style.top = d - h.heightPx / 2 + "px"),
      t.mouseOverlay.appendChild(h),
      () => {
        t.mouseOverlay.removeChild(h);
      }
    );
  },
  ScreenMove: function (e, t, n, o, r, i) {
    const { cells: s, columnWidth: a } = o,
      { row: c, column: l } = e,
      { centerX: u, centerY: d } = s[c][l];
    let h = 0.5,
      f = 0.5;
    e.direction.indexOf("up") >= 0 && (f = 0);
    e.direction.indexOf("down") >= 0 && (f = 1);
    e.direction.indexOf("left") >= 0 && (h = 0);
    e.direction.indexOf("right") >= 0 && (h = 1);
    const p = {
      onDown: () => {
        n.sendMouseMotion(h, f);
      },
      onUp: () => {
        n.sendMouseMotion(0.5, 0.5);
      },
    };
    if (
      (r.register(c, l, { activate: p.onDown, deactivate: p.onUp }),
      Gc(o, c, l))
    )
      return () => {};
    const v = tc(e.symbol, p, a);
    return (
      (v.style.position = "absolute"),
      (v.style.left = u - v.widthPx / 2 + "px"),
      (v.style.top = d - v.heightPx / 2 + "px"),
      t.mouseOverlay.appendChild(v),
      () => t.mouseOverlay.removeChild(v)
    );
  },
  PointerButton: function (e, t, n, o, r, i) {
    const { cells: s, columnWidth: a } = o,
      { row: c, column: l, click: u } = e,
      { centerX: d, centerY: h } = s[c][l],
      f = {
        onDown: () => {
          u ? n.sendMouseButton(e.button, !0) : (t.pointerButton = e.button);
        },
        onUp: () => {
          u ? n.sendMouseButton(e.button, !1) : (t.pointerButton = 0);
        },
      };
    if (
      (r.register(c, l, { activate: f.onDown, deactivate: f.onUp }),
      Gc(o, c, l))
    )
      return () => {};
    const p = tc(e.symbol, f, a);
    return (
      (p.style.position = "absolute"),
      (p.style.left = d - p.widthPx / 2 + "px"),
      (p.style.top = h - p.heightPx / 2 + "px"),
      t.mouseOverlay.appendChild(p),
      () => t.mouseOverlay.removeChild(p)
    );
  },
  PointerMove: function (e, t, n, o, r, i) {
    const { cells: s, columnWidth: a } = o,
      { row: c, column: l, x: u, y: d } = e,
      { centerX: h, centerY: f } = s[c][l],
      p = {
        onDown: () => {
          n.sendMouseMotion(u, d);
        },
        onUp: () => {
          n.sendMouseMotion(u, d);
        },
      };
    if (
      (r.register(c, l, { activate: p.onDown, deactivate: p.onUp }),
      Gc(o, c, l))
    )
      return () => {};
    const v = tc(e.symbol, p, a);
    return (
      (v.style.position = "absolute"),
      (v.style.left = h - v.widthPx / 2 + "px"),
      (v.style.top = f - v.heightPx / 2 + "px"),
      t.mouseOverlay.appendChild(v),
      () => t.mouseOverlay.removeChild(v)
    );
  },
  PointerReset: function (e, t, n, o, r, i) {
    const { cells: s, columnWidth: a } = o,
      { row: c, column: l } = e,
      { centerX: u, centerY: d } = s[c][l],
      h = {
        onDown: () => {
          n.sendMouseSync();
        },
      };
    if (
      (r.register(c, l, { activate: h.onDown, deactivate: () => {} }),
      Gc(o, c, l))
    )
      return () => {};
    const f = tc(e.symbol, h, a);
    return (
      (f.style.position = "absolute"),
      (f.style.left = u - f.widthPx / 2 + "px"),
      (f.style.top = d - f.heightPx / 2 + "px"),
      t.mouseOverlay.appendChild(f),
      () => t.mouseOverlay.removeChild(f)
    );
  },
  PointerToggle: function (e, t, n, o, r, i) {
    const { cells: s, columnWidth: a } = o,
      { row: c, column: l } = e,
      { centerX: u, centerY: d } = s[c][l],
      h = {
        onDown: () => {
          (t.pointerDisabled = !t.pointerDisabled),
            t.pointerDisabled
              ? f.classList.contains("emulator-button-highlight") ||
                f.classList.add("emulator-button-highlight")
              : f.classList.remove("emulator-button-highlight");
        },
      };
    if (
      (r.register(c, l, { activate: h.onDown, deactivate: () => {} }),
      Gc(o, c, l))
    )
      return () => {};
    const f = tc(e.symbol, h, a);
    return (
      (f.style.position = "absolute"),
      (f.style.left = u - f.widthPx / 2 + "px"),
      (f.style.top = d - f.heightPx / 2 + "px"),
      t.mouseOverlay.appendChild(f),
      () => t.mouseOverlay.removeChild(f)
    );
  },
  NippleActivator: function (e, t, n, o, r, i) {
    const { cells: s, columnWidth: a, rowHeight: c, width: l, height: u } = o,
      { row: d, column: h } = e,
      { centerX: f, centerY: p } = s[d][h],
      v = document.createElement("div"),
      m = 1.5,
      y = Math.max(0, f - a * m),
      g = Math.max(0, p - c * m),
      b = Math.max(0, l - f - a * m),
      _ = Math.max(0, u - p - c * m);
    (v.style.position = "absolute"),
      (v.style.zIndex = "999"),
      (v.style.left = y + "px"),
      (v.style.top = g + "px"),
      (v.style.right = b + "px"),
      (v.style.bottom = _ + "px"),
      t.mouseOverlay.appendChild(v);
    const w = Nc({
      zone: v,
      multitouch: !1,
      maxNumberOfNipples: 1,
      mode: "static",
      follow: !1,
      dynamicPage: !0,
      size: 1.5 * Math.max(a, c),
      position: { left: (l - b - y) / 2 + "px", top: (u - _ - g) / 2 + "px" },
    });
    let k = -1,
      x = -1;
    w.on("move", (e, t) => {
      if (t.distance < 10) return r.deactivate(x, k), (k = -1), void (x = -1);
      let n = -1,
        o = -1;
      const i = 22.5,
        s = t.angle.degree;
      s > i && s <= 67.5
        ? ((n = h + 1), (o = d - 1))
        : s > 67.5 && s <= 112.5
          ? ((n = h), (o = d - 1))
          : s > 112.5 && s <= 157.5
            ? ((n = h - 1), (o = d - 1))
            : s > 157.5 && s <= 202.5
              ? ((n = h - 1), (o = d))
              : s > 202.5 && s <= 247.5
                ? ((n = h - 1), (o = d + 1))
                : s > 247.5 && s <= 292.5
                  ? ((n = h), (o = d + 1))
                  : s > 292.5 && s <= 337.5
                    ? ((n = h + 1), (o = d + 1))
                    : ((n = h + 1), (o = d)),
        (k === n && x === o) ||
          (r.deactivate(x, k), r.activate(o, n), (k = n), (x = o));
    });
    let C = !1;
    w.on("start", () => {
      C = !0;
    }),
      w.on("end", () => {
        (C = !1), r.deactivate(x, k), (x = -1), (k = -1);
      });
    const S = { capture: !0 };
    function P(e) {
      C && w.processOnEnd(e);
    }
    for (const E of Wa.enders) t.mouseOverlay.addEventListener(E, P, S);
    return () => {
      w.destroy(), t.mouseOverlay.removeChild(v);
      for (const e of Wa.enders) t.mouseOverlay.removeEventListener(e, P, S);
    };
  },
};
function $c(e, t, n, o, r, i) {
  const { cells: s, columnWidth: a } = o,
    { row: c, column: l } = e,
    { centerX: u, centerY: d } = s[c][l],
    h = tc("keyboard", { onUp: () => t.toggleKeyboard() }, a);
  return (
    (h.style.position = "absolute"),
    (h.style.left = u - h.widthPx / 2 + "px"),
    (h.style.top = d - h.heightPx / 2 + "px"),
    t.mouseOverlay.appendChild(h),
    () => {
      t.mouseOverlay.removeChild(h);
    }
  );
}
function Gc(e, t, n) {
  return !0 === e.cells[t][n].hidden;
}
function Yc(e, t, n) {
  function o(o, r) {
    if ((o !== t || r !== n) && o >= 0 && o < e.cells.length) {
      const t = e.cells[o];
      r >= 0 && r < t.length && (t[r].hidden = !0);
    }
  }
  for (let r = t - 1; r <= t + 1; ++r)
    for (let e = n - 1; e <= n + 1; ++e) o(r, e);
}
function Zc(e, t) {
  !(function (e) {
    const t = eo(),
      n = Wr();
    ae(() => {
      const o = {},
        r = {};
      e.events().onMessage((e, ...i) => {
        var s, a, c, l, u;
        if (
          "error" === e &&
          (null == (s = i[0]) ? void 0 : s.startsWith("[panic]"))
        )
          t(Zr.actions.showToast({ message: i[0], intent: "panic" }));
        else if (
          "log" === e &&
          -1 !== (null == (a = i[0]) ? void 0 : a.indexOf("sockdrive:"))
        ) {
          const e = i[0].substring(i[0].indexOf(" ") + 1, i[0].indexOf(","));
          if (
            (t(Zr.actions.cloudSaves(!1)),
            -1 !== (null == (c = i[0]) ? void 0 : c.indexOf("write=")))
          ) {
            e.substring(e.indexOf("/") + 1).startsWith("@") &&
              (r[e.substring(e.indexOf(".", e.indexOf("/")) + 1)] = !0),
              t(
                Ci.actions.addSockdriveInfo({
                  drive: e,
                  write:
                    -1 ===
                    (null == (l = i[0]) ? void 0 : l.indexOf("write=false")),
                }),
              );
          }
          if (-1 !== (null == (u = i[0]) ? void 0 : u.indexOf("preload="))) {
            const s = Number.parseInt(
              i[0].substring(i[0].indexOf("preload=") + 8),
            );
            void 0 === o[e] && (o[e] = s);
            const a = e.substring(e.indexOf("/") + 1);
            t(
              Zr.actions.showToast({
                message:
                  n("preloading_sockdrive") +
                  " " +
                  (r[a] ? "@" + a : a) +
                  " â€” " +
                  Math.round((100 * (o[e] - s)) / o[e]) +
                  "%",
                long: !0,
              }),
            );
          }
        }
      });
    }, [e, t]);
  })(t),
    (function (e) {
      const t = on((e) => e.dos.imageRendering);
      ae(() => {
        e.style.imageRendering = "smooth" === t ? "auto" : t;
      }, [e, t]);
    })(e),
    (function (e) {
      const t = eo();
      ae(() => {
        let n = 0,
          o = 0,
          r = 0,
          i = 48,
          s = 0,
          a = 0,
          c = 0,
          l = 0,
          u = Date.now();
        const d = setInterval(() => {
          e.asyncifyStats().then((e) => {
            const d = Date.now() - u,
              h = d / 1e3;
            if (h > 0) {
              const f = {
                cyclesPerMs: Math.round((e.cycles - n) / d),
                nonSkippableSleepPreSec: Math.round(
                  (e.nonSkippableSleepCount - o) / h,
                ),
                sleepPerSec: Math.round((e.sleepCount - r) / h),
                sleepTimePerSec: Math.round((e.sleepTime - i) / h),
                framePerSec: Math.round((e.messageFrame - s) / h),
                soundPerSec: Math.round((e.messageSound - a) / h),
                msgSentPerSec: Math.round((e.messageSent - c) / h),
                msgRecvPerSec: Math.round((e.messageReceived - l) / h),
                netSent: e.netSent,
                netRecv: e.netRecv,
                driveSent: e.driveSent,
                driveRecv: e.driveRecv,
                driveRecvTime: e.driveRecvTime,
                driveCacheHit: e.driveCacheHit,
                driveCacheMiss: e.driveCacheMiss,
                driveCacheUsed: e.driveCacheUsed,
                driveBufferedAmount: e.driveBufferedAmount,
                driveIo: structuredClone(e.driveIo),
              };
              t(Ci.actions.stats(f)),
                (n = e.cycles),
                (o = e.nonSkippableSleepCount),
                (r = e.sleepCount),
                (i = e.sleepTime),
                (s = e.messageFrame),
                (a = e.messageSound),
                (c = e.messageSent),
                (l = e.messageReceived),
                (u = Date.now());
            }
          });
        }, 3e3);
        return () => {
          clearInterval(d);
        };
      }, [t, e]);
    })(t),
    (function (e) {
      const t = on((e) => e.dos.paused),
        n = on((e) => e.ui.documentHidden);
      ae(() => {
        t || n ? e.pause() : e.resume();
      }, [t, n, e]);
    })(t),
    (function (e) {
      ae(
        () =>
          (function (e, t) {
            function n(e) {
              if ("text" === e.target.type) return;
              const n = Ia(e.keyCode, e.location);
              t.sendKeyEvent(n, !0), e.stopPropagation(), e.preventDefault();
            }
            function o(e) {
              if ("text" === e.target.type) return;
              const n = Ia(e.keyCode, e.location);
              t.sendKeyEvent(n, !1), e.stopPropagation(), e.preventDefault();
            }
            return (
              e.addEventListener("keydown", n),
              e.addEventListener("keyup", o),
              () => {
                e.removeEventListener("keydown", n),
                  e.removeEventListener("keyup", o);
              }
            );
          })(window, e),
        [e],
      );
    })(t),
    (function (e, t) {
      const n = on((e) => e.dos.mobileControls),
        o = on((e) => e.dos.mouseCapture),
        r = 0.1 + 3 * on((e) => e.dos.mouseSensitivity);
      ae(() => {
        if (!n) return Ya(o, r, 0, e, t);
      }, [e, t, o, r, n]);
    })(e, t),
    (function (e, t) {
      const n = vi(),
        o = on((e) => e.dos.mouseCapture),
        r = on((e) => e.dos.mirroredControls),
        i = 1 + on((e) => e.dos.scaleControls),
        s = 0.1 + 3 * on((e) => e.dos.mouseSensitivity),
        a = on((e) => e.dos.mobileControls),
        c = eo();
      let l = on((e) => e.dos.softKeyboard);
      function u() {
        (l = !l), c(Ci.actions.softKeyboard(l));
      }
      ae(() => {
        a
          ? null === n.layers
            ? ((n.layers = (async function () {
                const n = new Qa(e.parentElement, e, u, {}),
                  a = Ja((await t.config()).jsdosConf);
                let c,
                  l = null,
                  d = () => {};
                const h = {
                  config: a,
                  layers: n,
                  autolock: o,
                  sensitivity: s,
                  mirroredControls: r,
                  scaleControls: i,
                  activeLayer: c,
                  getActiveConfig: () => l,
                  setActiveConfig: (e, o) => {
                    (l = e),
                      (c = o),
                      d(),
                      null === e
                        ? ((d = () => {}),
                          (n.mouseOverlay.style.display = "none"))
                        : void 0 === e.version
                          ? ((n.mouseOverlay.style.display = "block"),
                            (d = Hc(h, n, e, t)))
                          : ((n.mouseOverlay.style.display = "block"),
                            (d = Wc(
                              n,
                              e,
                              t,
                              h,
                              h.mirroredControls,
                              h.scaleControls,
                              o,
                            )));
                  },
                };
                return h.setActiveConfig(a), h;
              })()),
              n.layers.catch(console.error))
            : n.layers.then((e) => {
                (e.autolock = o),
                  (e.sensitivity = s),
                  (e.mirroredControls = r),
                  (e.scaleControls = i),
                  e.setActiveConfig(
                    e.getActiveConfig() ?? e.config,
                    e.activeLayer,
                  );
              })
          : null !== n.layers && n.layers.then((e) => e.setActiveConfig(null));
      }, [t, o, s, a, r, i]);
    })(e, t),
    (function (e, t) {
      const n = vi(),
        o = on((e) => e.dos.renderBackend),
        r = on((e) => e.dos.renderAspect);
      let i;
      switch (r) {
        case "1/1":
          i = 1;
          break;
        case "5/4":
          i = 5 / 4;
          break;
        case "4/3":
          i = 4 / 3;
          break;
        case "16/10":
          i = 1.6;
          break;
        case "16/9":
          i = 16 / 9;
          break;
        case "Fit":
          i = ki;
      }
      ae(() => {
        let r = () => {};
        if ("canvas" === o) r = Fa(e, t, i);
        else
          try {
            r = Ua(e, t, n, i);
          } catch (s) {
            console.error("Unalbe to start webgl render", s), (r = Fa(e, t, i));
          }
        return r;
      }, [e, t, o, i]);
    })(e, t),
    (function (e) {
      const t = Qn();
      ae(() => {
        const n = (function (e, t) {
          const n = e.soundFrequency();
          if (0 === n)
            return (
              console.warn(
                "Can't create audio node with sampleRate === 0, ingnoring",
              ),
              () => {}
            );
          let o = null;
          if (
            ("undefined" != typeof AudioContext
              ? (o = new AudioContext({
                  sampleRate: n,
                  latencyHint: "interactive",
                }))
              : void 0 !== window.webkitAudioContext &&
                (o = new window.webkitAudioContext({
                  sampleRate: n,
                  latencyHint: "interactive",
                })),
            null == o)
          )
            return () => {};
          const r = new Ha();
          e.events().onSoundPush((e) => {
            r.length() < 6144 && r.push(e);
          });
          const i = o.createScriptProcessor(2048, 0, 1);
          let s = !1;
          i.onaudioprocess = (e) => {
            const t = e.outputBuffer.length,
              n = e.outputBuffer.numberOfChannels,
              o = r.length();
            if ((s || (s = o >= 2048), s))
              for (let i = 0; i < n; i++) {
                const n = e.outputBuffer.getChannelData(i);
                r.writeTo(n, t);
              }
          };
          const a = o.createGain();
          let c;
          a.connect(o.destination),
            i.connect(a),
            (a.gain.value = 1),
            (c = t((e) => {
              a.gain.value = e;
            }));
          const l = () => {
            null !== o && "suspended" === o.state && o.resume();
          };
          return (
            document.addEventListener("pointerdown", l, { once: !0 }),
            document.addEventListener("keydown", l, { once: !0 }),
            () => {
              e.events().onSoundPush(() => {}),
                null !== o &&
                  (i.disconnect(),
                  a.disconnect(),
                  o.close().catch(console.error),
                  (o = null)),
                void 0 !== c && c(),
                document.removeEventListener("pointerdown", l),
                document.removeEventListener("keydown", l);
            }
          );
        })(e, (e) => {
          let n = 1;
          const o = () => {
            const o = yi(t).dos.volume;
            Math.abs(n - o) >= 0.05 && (e(o), (n = o));
          };
          return t.subscribe(o);
        });
        return n;
      }, [e]);
    })(t);
}
const Qc = [
  { cpu: "a7", width: 640, height: 1136, model: "iPhone 5/iPhone 5s" },
  {
    cpu: "a7",
    width: 1536,
    height: 2048,
    model: "iPad Air/iPad Mini 2/iPad Mini 3",
  },
  { cpu: "a8", width: 640, height: 1136, model: "iPod touch (6th gen)" },
  { cpu: "a8", width: 750, height: 1334, model: "iPhone 6" },
  { cpu: "a8", width: 1242, height: 2208, model: "iPhone 6 Plus" },
  { cpu: "a8", width: 1536, height: 2048, model: "iPad Air 2/iPad Mini 4" },
  { cpu: "a9", width: 640, height: 1136, model: "iPhone SE" },
  { cpu: "a9", width: 750, height: 1334, model: "iPhone 6s" },
  { cpu: "a9", width: 1242, height: 2208, model: "iPhone 6s Plus" },
  {
    cpu: "a9x",
    width: 1536,
    height: 2048,
    model: "iPad Pro (1st gen 9.7-inch)",
  },
  {
    cpu: "a9x",
    width: 2048,
    height: 2732,
    model: "iPad Pro (1st gen 12.9-inch)",
  },
  { cpu: "a10", width: 750, height: 1334, model: "iPhone 7" },
  { cpu: "a10", width: 1242, height: 2208, model: "iPhone 7 Plus" },
  {
    cpu: "a10x",
    width: 1668,
    height: 2224,
    model: "iPad Pro (2th gen 10.5-inch)",
  },
  {
    cpu: "a10x",
    width: 2048,
    height: 2732,
    model: "iPad Pro (2th gen 12.9-inch)",
  },
  { cpu: "a11", width: 750, height: 1334, model: "iPhone 8" },
  { cpu: "a11", width: 1242, height: 2208, model: "iPhone 8 Plus" },
  { cpu: "a11", width: 1125, height: 2436, model: "iPhone X" },
  { cpu: "a12", width: 828, height: 1792, model: "iPhone Xr" },
  { cpu: "a12", width: 1125, height: 2436, model: "iPhone Xs" },
  { cpu: "a12", width: 1242, height: 2688, model: "iPhone Xs Max" },
  {
    cpu: "a12x",
    width: 1668,
    height: 2388,
    model: "iPad Pro (3rd gen 11-inch)",
  },
  {
    cpu: "a12x",
    width: 2048,
    height: 2732,
    model: "iPad Pro (3rd gen 12.9-inch)",
  },
  { cpu: "a13", width: 828, height: 1792, model: "iPhone 11" },
  { cpu: "a13", width: 1125, height: 2436, model: "iPhone 11 Pro" },
  { cpu: "a13", width: 1242, height: 2688, model: "iPhone 11 Pro Max" },
  { cpu: "a14", width: 1080, height: 2340, model: "iPhone 12 Mini" },
  { cpu: "a14", width: 1170, height: 2532, model: "iPhone 12" },
  { cpu: "a14", width: 1284, height: 2778, model: "iPhone 12 Pro Max" },
  { cpu: "a15", width: 1080, height: 2340, model: "iPhone 13 Mini" },
  { cpu: "a15", width: 1170, height: 2532, model: "iPhone 13" },
  { cpu: "a15", width: 1284, height: 2778, model: "iPhone 13 Pro Max" },
  { cpu: "a15", width: 1170, height: 2532, model: "iPhone 14" },
  { cpu: "a15", width: 1284, height: 2778, model: "iPhone 14 Plus" },
  { cpu: "a16", width: 1179, height: 2556, model: "iPhone 14 Pro" },
  { cpu: "a16", width: 1290, height: 2796, model: "iPhone 14 Pro Max" },
  { cpu: "a16", width: 1179, height: 2556, model: "iPhone 15" },
  { cpu: "a16", width: 1290, height: 2796, model: "iPhone 15 Plus" },
  { cpu: "a17", width: 1179, height: 2556, model: "iPhone 15 Pro" },
  { cpu: "a17", width: 1290, height: 2796, model: "iPhone 15 Pro Max" },
  { cpu: "a18", width: 1179, height: 2556, model: "iPhone 16" },
  { cpu: "a18", width: 1290, height: 2796, model: "iPhone 16 Plus" },
  { cpu: "a18", width: 1206, height: 2622, model: "iPhone 16 Pro" },
  { cpu: "a18", width: 1320, height: 2868, model: "iPhone 16 Pro Max" },
];
function Jc(e) {
  const t = navigator.userAgent + " ";
  function n(e, t, n) {
    const o = RegExp(e, "i").exec(t);
    return o && o[n];
  }
  const o = (function () {
      const e = {
        Yandex: { prefixs: ["YaApp", "YaBrowser"] },
        Firefox: { prefixs: ["Firefox"] },
        Opera: { prefixs: ["OPR"] },
        Edge: { prefixs: ["Edg"] },
        "Samsung Browser": { prefixs: ["SamsungBrowser"] },
        "Internet Explorer": { prefixs: ["Trident", "MSIE"] },
        Chrome: { prefixs: ["Chrome"] },
        "Chrome on iOS": { prefixs: ["CriOS"] },
        "Firefox on iOS": { prefixs: ["FxiOS"] },
        Safari: { prefixs: ["Safari"] },
        Facebook: { prefixs: ["FBSV"], regExp: "[/;](.*?)[;\\)]" },
      };
      for (const [o, r] of Object.entries(e))
        for (const e of r.prefixs) {
          let i = n(e + (r.regExp || "[/ ](.*?)[ \\)]"), t, 1);
          if (null !== i)
            return (
              "Safari" === o && (i = n("Version/(.*?) ", t, 1)),
              "Internet Explorer" === o && (i = n("rv:(.*?)\\)? ", t, 1) || i),
              { name: o, version: i }
            );
        }
      return { name: "", version: "" };
    })(),
    r = (function () {
      const e = {
        Android: ["Android ([0-9_.]+)"],
        Windows: ["Windows (.*?)[;)]"],
        iOS: ["iPhone OS ([0-9_.]+)", "iPad.*? OS ([0-9_.]+)"],
        macOS: ["Mac OS X ([0-9_.]+)"],
        Linux: ["FreeBSD( )", "OpenBSD( )", "Linux|X11()"],
        "Search Bot": ["bot|google|baidu|bing|msn|teoma|slurp|yandex"],
      };
      for (const [o, r] of Object.entries(e))
        for (const e of r) {
          let r = n(e, t, 1);
          if (null != r) {
            if (((r = r.replace(/_/g, ".")), "Windows" === o)) {
              r =
                {
                  "NT 5.0": "2000",
                  "NT 5.1": "XP",
                  "NT 5.2": "Server 2003",
                  "NT 6.0": "Vista",
                  "NT 6.1": "7",
                  "NT 6.2": "8",
                  "NT 6.3": "8.1",
                  "NT 10.0": "10",
                }[r] || r;
            }
            return { name: o, version: r };
          }
        }
      return { name: "", version: "" };
    })(),
    i =
      /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(navigator.appVersion) ||
      /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(navigator.userAgent) ||
      (/MacIntel/.test(navigator.platform) &&
        void 0 !== navigator.maxTouchPoints &&
        navigator.maxTouchPoints > 2),
    s = navigator.hardwareConcurrency,
    a = (function (e) {
      const t = e.getExtension("WEBGL_debug_renderer_info");
      if (t) return e.getParameter(t.UNMASKED_RENDERER_WEBGL) || "-";
      return "-";
    })(e),
    c = (function () {
      const e = window.devicePixelRatio || 1;
      return {
        width: Math.min(screen.width, screen.height) * e,
        height: Math.max(screen.width, screen.height) * e,
      };
    })(),
    l = c.height,
    u = c.width;
  return {
    browser: o.name,
    browserVersion: o.version ?? "???",
    mobile: i,
    os: r.name,
    osVersion: r.version,
    gpu: a,
    deviceModel: el(i, a, { width: u, height: l }),
    cpu: (s || 0).toString(),
    emscripten: "3.1.68",
  };
}
function el(e, t, n) {
  if (!e) return "desktop/laptop";
  return t.match(/^apple+[a-zA-Z0-9_\s]+gpu$/i)
    ? (function (e) {
        let t = "";
        for (const n of Qc)
          e.width === Math.min(n.width, n.height) &&
            e.height === Math.max(n.width, n.height) &&
            (t += t.length > 0 ? "/" + n.model : n.model);
        return t.length > 0 ? t : "unknown iPhone";
      })(n)
    : (function (e) {
        const t = [
          /Android[\s][\d]+\.[\d]+\.[\d]+; [A-Za-z]{2}\-[A-Za-z]{2}\; (.+) Build/,
          /Android[\s][\d]+\.[\d]+\.[\d]+; (.+) Build/,
          /Android(.+)Build/,
        ];
        for (const n of t) {
          const t = e.match(n);
          if (t && t.length > 0) return t[1];
        }
        return "unknown Android";
      })(navigator.userAgent);
}
function tl(e) {
  const t = e.ci,
    n = vi(),
    o = on((e) => e.dos.backend),
    r = on((e) => e.dos.worker),
    i = on((e) => {
      var t;
      return null == (t = e.auth.account) ? void 0 : t.token;
    }),
    s = on((e) => e.dos.emuVersion),
    a = on((e) => e.dos.backendHardware) && n.options.backendHardware,
    [c, l] = ie(!1),
    [u, d] = ie({ runs: 0, time: 0, vax: 0, pc: null }),
    [h, f] = ie({ sleepPerSec: 0, cyclesPerMs: 0 });
  return (
    ae(() => {
      const e = [];
      t.events().onStdout((t) => {
        for (const n of e) n(t);
      });
      const c = t.events().onStdout;
      t.events().onStdout = (t) => {
        e.push(t);
      };
      let u = Date.now(),
        h = 0,
        p = 0;
      return (
        t.events().onStdout((e) => {
          if (!e.startsWith("dhry2:")) return;
          t.asyncifyStats().then((e) => {
            const t = Date.now() - u;
            f({
              sleepPerSec: Math.round((1e3 * (e.sleepCount - h)) / t),
              cyclesPerMs: Math.round((e.cycles - p) / t),
            }),
              (u = Date.now()),
              (h = e.sleepCount),
              (p = e.cycles);
          });
          const [c, v, m, y] = e.split(" "),
            g = Number.parseInt(v),
            b = Number.parseFloat(m),
            _ = Number.parseFloat(y);
          b >= 5e3
            ? (d({
                runs: g,
                time: Math.round(10 * b) / 10,
                vax: Math.round(100 * _) / 100,
                pc: nl(_),
              }),
              (async () => {
                const e = n.gl;
                if (e) {
                  const t = {
                    token: i ?? "",
                    test: "dhry2",
                    jsdos: "8.3.14",
                    emu: s,
                    backend: o,
                    worker: r,
                    hardware: !1 !== a && null != a,
                    result: Math.round(100 * _) / 100,
                    ...Jc(e),
                  };
                  await fetch(Qr + "/perf/set", {
                    method: "POST",
                    body: JSON.stringify(t),
                  });
                }
              })()
                .catch(console.error)
                .finally(() => l(!0)))
            : d({
                runs: g,
                time: Math.round(10 * b) / 10,
                vax: Math.round(100 * _) / 100,
                pc: null,
              });
        }),
        () => {
          t.events().onStdout = c;
        }
      );
    }, [t]),
    Ii("div", {
      class: "dhry2-window",
      children: [
        Ii("div", { class: "title", children: "Dhrystone 2 Benchmark" }),
        Ii("div", {
          class: "backend",
          children: [
            "Backend: ",
            o + "-" + (r ? "worker" : "direct"),
            " ",
            a ? "(WS)" : "(WA)",
          ],
        }),
        Ii("div", {
          class: "results",
          children: [
            Ii("div", { children: "VAX:" }),
            Ii("div", { children: u.vax }),
            Ii("div", { children: "Cycles p/ms:" }),
            Ii("div", { children: h.cyclesPerMs }),
            Ii("div", { children: "Sleep p/sec:" }),
            Ii("div", { children: h.sleepPerSec }),
            Ii("div", { children: "Runs:" }),
            Ii("div", { children: u.runs }),
            Ii("div", { children: "Time:" }),
            Ii("div", {
              children: [u.time, " ", Ii("span", { children: "ms" })],
            }),
            c && null !== u.pc && Ii("div", { children: "PC:" }),
            c && null !== u.pc && Ii("div", { children: u.pc ?? "..." }),
          ],
        }),
        !c &&
          Ii("div", {
            class: "mt-14 text-yellow-500",
            children: "Please wait until this message disappears",
          }),
        !c &&
          !i &&
          Ii("div", {
            class: "mt-14 text-yellow-500",
            children: "Please enter your key to submit results",
          }),
      ],
    })
  );
}
function nl(e) {
  let t = 0;
  for (; 2 * t + 1 < ol.length && !(ol[2 * t + 1] >= e); ) t++;
  return (t = Math.min(ol.length / 2 - 1, t)), (ol[2 * t] + "").trim();
}
const ol = [
    "AMD 80386 40MHz",
    13.7,
    "IBM 486D2 50MHz",
    22.4,
    "80486 DX2 66MHz",
    35.3,
    "IBM 486BL 100MHz",
    40.9,
    "AMD 5X86 133MHz",
    84.5,
    "Pentium 75MHz",
    87.1,
    "Cyrix P150 120MHz",
    160,
    "Pentium 100MHz",
    122,
    "Cyrix PP166 133MHz",
    180,
    "IBM 6x86 150MHz",
    188,
    "Pentium 133MHz",
    181,
    "Pentium 166MHz",
    189,
    "Cyrix PR233 188MHz",
    232,
    "Pentium 200MHz",
    269,
    "Pentium MMX 200MHz",
    276,
    "AMD K6 200MHz",
    289,
    "Pentium Pro 200MHz",
    312,
    "Celeron A 300MHz",
    484,
    "Pentium II 300MHz",
    477,
    "AMD K62 500MHz",
    606,
    "AMD K63 450MHz",
    645,
    "Pentium II 450MHz",
    713,
    "Celeron A 450MHz",
    720,
    "Pentium III 450MHz",
    722,
    "Pentium III 600MHz",
    959,
    "Athlon 600MHz",
    942,
    "Duron 600MHz",
    999,
    "Pentium III 1000MHz",
    1595,
    "PIII Tualatin 1200MHz",
    1907,
    "Pentium 4 1700MHz",
    1843,
    "Athlon Tbird 1000MHz",
    1659,
    "Duron 1000MHz",
    1674,
    "Celeron M 1295MHz",
    2273,
    "Atom 1600MHz",
    1828,
    "Pentium 4 1900MHz",
    2003,
    "Atom 1666MHz",
    1948,
    "P4 Xeon 2200MHz",
    2265,
    "Atom Z8300 1840MHz",
    2686,
    "Athlon 4 1600MHz",
    2830,
    "Pentium M 1862MHz",
    3933,
    "Ath4 Barton 1800MHz",
    3172,
    "Pentium 4E 3000MHz",
    3553,
    "Athlon XP 2080MHz",
    3700,
    "Turion 64 M 1900MHz",
    3742,
    "Pentium 4 3066MHz",
    4012,
    "Opteron 1991MHz",
    3985,
    "Core 2 Duo M 1830MHz",
    4952,
    "Athlon XP 2338MHz",
    4160,
    "Athlon 64 2150MHz",
    4288,
    "Pentium 4 3678MHz",
    4227,
    "Athlon 64 2211MHz",
    4462,
    "Celeron C2 M 2000MHz",
    5275,
    "Core 2 Duo 1 CP 2400MHz",
    6446,
    "Core i5 2467M 2300MHz",
    4752,
    "Phenom II 1 CP 3000MHz",
    7615,
    "Core i7 930 3066MHz",
    8684,
    "Core i7 860 3460MHz",
    9978,
    "Core i7 3930K 3800MHz",
    11197,
    "Core i7 4820K 3900MHz",
    11867,
    "Core i7 4820K 3900MHz",
    11978,
    "Core i7 3930K",
    13877,
  ],
  rl = 1048576;
function il(e, t) {
  if (e.data instanceof ArrayBuffer) {
    let n = new Uint8Array(e.data);
    0 === t.payloadSize &&
      ((t.payloadSize = n[0] + (n[1] << 8) + (n[2] << 16) + (n[3] << 24)),
      (n = n.slice(4)));
    const o = t.payloadSize - t.payloadPos;
    if (n.byteLength > o || o < 0)
      return (
        (t.error =
          "wrong read payload length " + n.byteLength + " instead of " + o),
        !0
      );
    if (
      (t.payload.set(n, t.payloadPos),
      (t.payloadPos += n.byteLength),
      t.payloadPos == t.payloadSize)
    ) {
      const e = t.aheadSize * t.sectors.length;
      let n = e;
      return (
        t.payloadSize < e
          ? (n = (function (e, t, n, o) {
              let r, i, s;
              for (
                n = n || 0, o = o || e.length - n, r = n, i = o, s = 0;
                r < i;

              ) {
                const n = e[r++];
                let o = n >> 4;
                if (o > 0) {
                  let n = o + 240;
                  for (; 255 === n; ) (n = e[r++]), (o += n);
                  const a = r + o;
                  for (; r < a; ) t[s++] = e[r++];
                  if (r === i) return s;
                }
                const a = e[r++] | (e[r++] << 8);
                if (0 === a) return s;
                if (a > s) return -(r - 2);
                let c = 15 & n,
                  l = c + 240;
                for (; 255 === l; ) (l = e[r++]), (c += l);
                let u = s - a;
                const d = s + c + 4;
                for (; s < d; ) t[s++] = t[u++];
              }
              return s;
            })(t.payload, t.sectorsRow, 0, t.payloadSize))
          : t.sectorsRow.set(t.payload),
        n != e && (t.error = "wrong decode result " + n + " should be " + e),
        !0
      );
    }
    return !1;
  }
  return (t.error = "received non arraybuffer data"), !0;
}
class sl {
  constructor(e, t, n, o, r, i, s = null, a = !1) {
    var c;
    (this.socket = Promise.resolve(null)),
      (this.aheadRange = 0),
      (this.aheadSize = 0),
      (this.readStartedAt = 0),
      (this.cleanup = () => {}),
      (this.openFn = (e, t, n, o, r, i) => {}),
      (this.errorFn = (e) => {}),
      (this.readOnly = !1),
      (this.alive = !0),
      (this.lastBufferedAmount = 0),
      (this.statsDirty = {}),
      (this.sectorSize = 512),
      (this.module = i),
      (this.endpoint = e),
      (this.owner = t),
      (this.drive = n),
      (this.realOwner = t),
      (this.realDrive = n),
      (this.token = o),
      (this.request = null),
      (this.readBuffer = new Uint8Array(9)),
      (this.writeBuffer = new Uint8Array(5 + this.sectorSize)),
      (this.stats = r),
      (this.cache = s),
      null == (c = this.cache) || c.open(this.owner, this.drive, this.token),
      (this.frame = null),
      (this.readBuffered = a),
      this.reconnect(),
      (this.statsCommitInterval = setInterval(() => {
        Object.keys(this.statsDirty).length > 0 &&
          (fetch(
            e.replace("wss://", "https://").replace("ws://", "http://") +
              "/cache/set/" +
              encodeURIComponent(this.realOwner) +
              "/" +
              encodeURIComponent(this.realDrive) +
              "/" +
              (0 === o.length ? "guest" : o),
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(this.statsDirty),
            },
          ).catch((e) => console.warn("Can't send drive cache stats", e)),
          (this.statsDirty = {}));
      }, 6e4));
  }
  onError(e) {
    this.errorFn = e;
  }
  onOpen(e) {
    this.openFn = e;
  }
  reconnect() {
    this.alive &&
      (this.socket &&
        this.socket.then((e) => {
          null !== e && e.close();
        }),
      (this.socket = new Promise((e, t) => {
        const n = new WebSocket(this.endpoint);
        n.binaryType = "arraybuffer";
        const o = this.onMessage.bind(this),
          r = () => {
            const r = (i) => {
              if (
                (n.removeEventListener("message", r),
                i.data.startsWith("write") || i.data.startsWith("read"))
              ) {
                const [t, r, s, a, c] = i.data.split(",");
                (this.realOwner = a),
                  (this.realDrive = c),
                  (this.aheadRange = Number.parseInt(r)),
                  (this.aheadSize = this.aheadRange * this.sectorSize),
                  (this.readOnly = "write" !== t),
                  (this.frame = {
                    sectors: [],
                    sectorsRow: new Uint8Array(this.aheadSize),
                    payload: new Uint8Array(this.aheadSize),
                    payloadPos: 0,
                    payloadSize: 0,
                    aheadSize: this.aheadSize,
                  });
                const l = (t) => {
                  n.removeEventListener("message", l),
                    n.addEventListener("message", o),
                    this.openFn(
                      !0,
                      !this.readOnly,
                      1024 * (Number.parseInt(s) ?? 2097152),
                      this.aheadRange,
                      a,
                      c,
                    ),
                    (this.onOpen = () => {}),
                    (this.errorFn = () => {}),
                    e(n);
                };
                n.addEventListener("message", l);
              } else {
                const e = new Error(i.data ?? "Unable to establish connection");
                this.errorFn(e), t(e);
              }
            };
            n.addEventListener("message", r),
              n.send(this.owner + "&" + this.drive + "&" + this.token);
          },
          i = (e) => {
            console.error("Network error", e, "will reconnect"),
              s(),
              n.close(),
              setTimeout(this.reconnect.bind(this), 300);
          };
        n.addEventListener("error", i), n.addEventListener("open", r);
        const s = function () {
          n.removeEventListener("message", o),
            n.removeEventListener("open", r),
            n.removeEventListener("error", i);
        };
        this.cleanup = s;
      })),
      null !== this.request && this.executeRequest(this.request));
  }
  read(e, t, n) {
    var o;
    const r = this.getOrigin(e);
    this.statsDirty[r] = (this.statsDirty[r] ?? 0) + 1;
    const i =
      null == (o = this.cache) ? void 0 : o.read(this.owner, this.drive, e);
    return i
      ? (this.stats.cacheHit++,
        this.module.HEAPU8.set(
          this.readBuffered || i.length == this.sectorSize
            ? i
            : i.slice(0, this.sectorSize),
          t,
        ),
        n ? 0 : Promise.resolve(0))
      : n
        ? 255
        : new Promise((n) => {
            this.stats.cacheMiss++;
            const o = { type: 1, sector: e, buffer: t, resolve: n };
            null !== this.request
              ? (console.error(
                  "New read request while old one is still processed",
                ),
                n(3))
              : ((this.request = o), this.executeRequest(this.request));
          });
  }
  write(e, t) {
    var n;
    const o = {
      type: 2,
      sector: e,
      buffer: this.module.HEAPU8.slice(t, t + this.sectorSize),
      resolve: () => {},
    };
    return (
      (this.lastBufferedAmount += this.sectorSize),
      null == (n = this.cache) || n.write(this.owner, this.drive, e, o.buffer),
      this.executeRequest(o),
      0
    );
  }
  async close() {
    clearInterval(this.statsCommitInterval), (this.alive = !1);
    const e = await this.socket;
    await new Promise((t) => {
      const n = setInterval(() => {
        0 === e.bufferedAmount && (clearInterval(n), t());
      }, 32);
    }),
      this.cleanup(),
      e.close();
  }
  executeRequest(e) {
    this.socket
      .then(async (t) => {
        if (
          t.readyState !== WebSocket.CLOSED &&
          t.readyState !== WebSocket.CLOSING
        )
          if (1 === e.type) {
            const { sector: n } = e;
            (this.readStartedAt = Date.now()),
              (this.readBuffer[0] = 1),
              (this.readBuffer[1] = 1),
              (this.readBuffer[2] = 0),
              (this.readBuffer[3] = 0),
              (this.readBuffer[4] = 0);
            const o = this.getOrigin(n);
            (this.readBuffer[5] = 255 & o),
              (this.readBuffer[6] = (o >> 8) & 255),
              (this.readBuffer[7] = (o >> 16) & 255),
              (this.readBuffer[8] = (o >> 24) & 255),
              (this.frame.sectors = [n]),
              (this.frame.payloadPos = 0),
              (this.frame.payloadSize = 0),
              t.send(this.readBuffer.slice(0, 9).buffer);
          } else if (this.readOnly) e.resolve(0);
          else {
            const { sector: n, buffer: o, resolve: r } = e;
            (this.stats.write += this.sectorSize),
              (this.writeBuffer[0] = 2),
              (this.writeBuffer[1] = 255 & n),
              (this.writeBuffer[2] = (n >> 8) & 255),
              (this.writeBuffer[3] = (n >> 16) & 255),
              (this.writeBuffer[4] = (n >> 24) & 255),
              this.writeBuffer.set(o, 5),
              t.send(this.writeBuffer.buffer),
              r(0);
          }
        else
          this.alive
            ? (console.error(
                "Drive connection to '" +
                  this.owner +
                  "/" +
                  this.drive +
                  "' was closed, trying to reconnect...",
              ),
              this.reconnect())
            : (console.error("Trying to read from closed drive", this.drive),
              e.resolve(4));
      })
      .catch(console.error);
  }
  onMessage(e) {
    var t;
    if (null === this.request)
      console.error("Received message without request"), this.reconnect();
    else if (2 === this.request.type)
      console.error("Received read payload while write request"),
        this.reconnect();
    else if (il(e, this.frame)) {
      if (this.frame.error)
        return console.error(this.frame.error), void this.reconnect();
      {
        const { buffer: e, sector: n, resolve: o } = this.request,
          r = this.getOrigin(n);
        null == (t = this.cache) ||
          t.update(this.owner, this.drive, r, this.frame.sectorsRow, 0);
        const i = (n - r) * this.sectorSize;
        this.readBuffered
          ? 0 !== i
            ? (console.error("Buffered mode only works for origin!"), o(3))
            : this.module.HEAPU8.set(this.frame.sectorsRow, e)
          : this.module.HEAPU8.set(
              this.frame.sectorsRow.slice(i, i + this.sectorSize),
              e,
            ),
          (this.stats.read += this.frame.payloadSize),
          (this.stats.readTotalTime += Date.now() - this.readStartedAt),
          (this.request = null),
          o(0);
      }
    }
  }
  currentSocket() {
    return this.socket;
  }
  getOrigin(e) {
    return e - (e % this.aheadRange);
  }
  bufferedAmount() {
    return (
      this.socket.then((e) => {
        e && (this.lastBufferedAmount = e.bufferedAmount);
      }),
      this.lastBufferedAmount
    );
  }
}
const al = Symbol("newer"),
  cl = Symbol("older");
class ll {
  constructor(e, t) {
    "number" != typeof e && ((t = e), (e = 0)),
      (this.size = 0),
      (this.limit = e),
      (this.oldest = this.newest = void 0),
      (this._keymap = new Map()),
      t && (this.assign(t), e < 1 && (this.limit = this.size));
  }
  _markEntryAsUsed(e) {
    e !== this.newest &&
      (e[al] &&
        (e === this.oldest && (this.oldest = e[al]), (e[al][cl] = e[cl])),
      e[cl] && (e[cl][al] = e[al]),
      (e[al] = void 0),
      (e[cl] = this.newest),
      this.newest && (this.newest[al] = e),
      (this.newest = e));
  }
  assign(e) {
    let t,
      n = this.limit || Number.MAX_VALUE;
    this._keymap.clear();
    const o = e[Symbol.iterator]();
    for (let r = o.next(); !r.done; r = o.next()) {
      const e = new ul(r.value[0], r.value[1]);
      if (
        (this._keymap.set(e.key, e),
        t ? ((t[al] = e), (e[cl] = t)) : (this.oldest = e),
        (t = e),
        0 == n--)
      )
        throw new Error("overflow");
    }
    (this.newest = t), (this.size = this._keymap.size);
  }
  get(e) {
    const t = this._keymap.get(e);
    if (t) return this._markEntryAsUsed(t), t.value;
  }
  set(e, t) {
    let n = this._keymap.get(e);
    return n
      ? ((n.value = t), this._markEntryAsUsed(n), this)
      : (this._keymap.set(e, (n = new ul(e, t))),
        this.newest
          ? ((this.newest[al] = n), (n[cl] = this.newest))
          : (this.oldest = n),
        (this.newest = n),
        ++this.size,
        this.size > this.limit && this.shift(),
        this);
  }
  shift() {
    const e = this.oldest;
    if (e)
      return (
        this.oldest[al]
          ? ((this.oldest = this.oldest[al]), (this.oldest[cl] = void 0))
          : ((this.oldest = void 0), (this.newest = void 0)),
        (e[al] = e[cl] = void 0),
        this._keymap.delete(e.key),
        --this.size,
        [e.key, e.value]
      );
  }
}
function ul(e, t) {
  (this.key = e), (this.value = t), (this[al] = void 0), (this[cl] = void 0);
}
class dl {
  constructor(e, t, n) {
    (this.aheadRange = t),
      (this.sectorSize = e),
      (this.aheadSize = t * e),
      (this.lru = new ll(Math.floor(n / (t * e))));
  }
  contains(e) {
    return !!this.lru.get(e);
  }
  read(e) {
    const t = this.getOrigin(e),
      n = this.lru.get(t);
    if (n) {
      const o = e - t;
      return 0 === o
        ? n
        : n.slice(o * this.sectorSize, (o + 1) * this.sectorSize);
    }
    return null;
  }
  create(e, t, n) {
    this.lru.set(e, t.slice(n, n + this.aheadSize));
  }
  getOrigin(e) {
    return e - (e % this.aheadRange);
  }
  memUsed() {
    return this.lru.size * this.aheadSize;
  }
}
class hl {
  constructor(e, t, n, o, r, i, s) {
    (this.cache = null),
      (this.writeCache = {}),
      (this.socket = null),
      (this.connect = () =>
        new Promise((a) => {
          const c = new WebSocket(e);
          (this.socket = c),
            c.addEventListener("close", () => {
              a();
            }),
            (c.binaryType = "arraybuffer"),
            c.addEventListener("error", () => {
              console.error("Can't connect to", e, t, n), c.close();
            }),
            c.addEventListener("open", () => {
              c.addEventListener(
                "message",
                (e) => {
                  const o = new Uint32Array(e.data);
                  if (3 !== (null == o ? void 0 : o.length))
                    console.error("Wrong cache format");
                  else {
                    const e = o[0],
                      a = o[1];
                    if (((this.cache = new dl(e, a, 67108864)), !r))
                      return void c.close();
                    let l = o[2];
                    if (0 === l) c.close();
                    else {
                      const o = e * a,
                        r = Math.floor(rl / o),
                        u = {
                          payload: new Uint8Array(rl),
                          sectorsRow: new Uint8Array(rl),
                          aheadSize: a * e,
                          sectors: [],
                          payloadSize: 0,
                          payloadPos: 0,
                        },
                        d = l * o;
                      let h = d;
                      i(t, n, h, d),
                        c.addEventListener("message", (f) => {
                          var p, v;
                          if (f.data instanceof ArrayBuffer) {
                            const m = new Uint8Array(f.data);
                            if (0 === u.sectors.length) {
                              const e =
                                m[1] +
                                (m[2] << 8) +
                                (m[3] << 16) +
                                (m[4] << 24);
                              if (e > r)
                                return (
                                  console.error(
                                    "Can't load more than",
                                    r,
                                    "at once (requested" + e + ")",
                                  ),
                                  void c.close()
                                );
                              for (let t = 0; t < e; ++t) {
                                const e = 5 + 4 * t;
                                u.sectors.push(
                                  m[e] +
                                    (m[e + 1] << 8) +
                                    (m[e + 2] << 16) +
                                    (m[e + 3] << 24),
                                );
                              }
                            } else if (il(f, u))
                              if (u.error) console.error(u.error), c.close();
                              else {
                                s(t, n, e, a, u.sectors, u.sectorsRow),
                                  (h -= u.sectors.length * o),
                                  (l -= u.sectors.length),
                                  i(t, n, h, d);
                                for (let e = 0; e < u.sectors.length; ++e)
                                  (null == (p = this.cache)
                                    ? void 0
                                    : p.contains(u.sectors[e])) ||
                                    null == (v = this.cache) ||
                                    v.create(
                                      u.sectors[e],
                                      u.sectorsRow,
                                      e * u.aheadSize,
                                    );
                                (u.sectors = []),
                                  (u.payloadSize = 0),
                                  (u.payloadPos = 0),
                                  0 === l && c.close();
                              }
                          } else console.error("Unknown event", f), c.close();
                        });
                    }
                  }
                },
                { once: !0 },
              ),
                c.send(t + "&" + n + "&" + o);
            });
        }));
  }
  read(e) {
    var t;
    return (
      this.writeCache[e] ??
      (null == (t = this.cache) ? void 0 : t.read(e)) ??
      null
    );
  }
  write(e, t) {
    this.writeCache[e] = t;
  }
  create(e, t, n) {
    var o;
    null == (o = this.cache) || o.create(e, t, n);
  }
  getOrigin(e) {
    var t;
    return (null == (t = this.cache) ? void 0 : t.getOrigin(e)) ?? 0;
  }
  memUsed() {
    var e;
    return (null == (e = this.cache) ? void 0 : e.memUsed()) ?? 0;
  }
  close() {
    var e;
    null == (e = this.socket) || e.close();
  }
}
class fl {
  constructor(e, t) {
    (this.impl = {}),
      (this.progress = () => {}),
      (this.payload = () => {}),
      (this.connectQueue = []),
      (this.url = e),
      (this.preload = t);
  }
  key(e, t) {
    return e + "/" + t;
  }
  open(e, t, n) {
    const o = this.key(e, t);
    if (void 0 === this.impl[o]) {
      const r = new hl(
        this.url + "/cache",
        e,
        t,
        n,
        this.preload,
        this.progress,
        this.payload,
      );
      (this.impl[o] = r),
        this.connectQueue.push(r.connect),
        1 == this.connectQueue.length && this.runNextCache();
    }
  }
  runNextCache() {
    if (this.connectQueue.length > 0) {
      const e = this.connectQueue[0];
      e().then(() => {
        e === this.connectQueue[0]
          ? (this.connectQueue.splice(0, 1), this.runNextCache())
          : console.error("wrong cache order!");
      });
    }
  }
  read(e, t, n) {
    const o = this.key(e, t);
    return this.impl[o]
      ? this.impl[o].read(n)
      : (console.error("Cache for drive", o, "not opened!"), null);
  }
  update(e, t, n, o, r) {
    const i = this.key(e, t);
    if (this.impl[i]) {
      const e = this.impl[i].getOrigin(n);
      if (e && e !== n) throw new Error("Origin mistamtch for " + i);
      this.impl[i].create(n, o, r);
    } else console.error("Cache for drive", i, "not opened!");
  }
  write(e, t, n, o) {
    const r = this.key(e, t);
    this.impl[r]
      ? this.impl[r].write(n, o)
      : console.error("Cache for drive", r, "not opened!");
  }
  memUsed() {
    let e = 0;
    for (const t of Object.keys(this.impl)) e += this.impl[t].memUsed();
    return e;
  }
  onProgress(e) {
    this.progress = e;
  }
  onPayload(e) {
    this.payload = e;
  }
  close() {
    for (const e of Object.keys(this.impl)) this.impl[e].close();
  }
}
const pl = new TextDecoder(),
  vl = new TextEncoder(),
  ml = 2e8,
  yl = {};
[
  "wc-install",
  "wc-run",
  "wc-pack-fs-to-bundle",
  "wc-add-key",
  "wc-mouse-move",
  "wc-mouse-button",
  "wc-mouse-sync",
  "wc-exit",
  "wc-sync-sleep",
  "wc-pause",
  "wc-resume",
  "wc-mute",
  "wc-unmute",
  "wc-connect",
  "wc-disconnect",
  "wc-backend-event",
  "wc-asyncify-stats",
  "wc-fs-tree",
  "wc-fs-get-file",
  "wc-send-data-chunk",
  "wc-net-connected",
  "wc-net-received",
].forEach((e, t) => (yl[e] = t));
const gl = {};
[
  "ws-extract-progress",
  "ws-ready",
  "ws-server-ready",
  "ws-frame-set-size",
  "ws-update-lines",
  "ws-log",
  "ws-warn",
  "ws-err",
  "ws-stdout",
  "ws-exit",
  "ws-persist",
  "ws-sound-init",
  "ws-sound-push",
  "ws-config",
  "ws-sync-sleep",
  "ws-connected",
  "ws-disconnected",
  "ws-asyncify-stats",
  "ws-fs-tree",
  "ws-send-data-chunk",
  "ws-net-connect",
  "ws-net-disconnect",
  "ws-net-send",
].forEach((e, t) => (gl[t] = e));
class bl {
  constructor(e, n) {
    t(this, "socket"),
      t(this, "sessionId", Date.now() + ""),
      t(this, "hardware"),
      t(this, "onInit", () => {}),
      t(this, "cycles", 0),
      t(
        this,
        "sockdrive",
        (function (e, t, n, o) {
          let r = 0,
            i = "";
          const s = {},
            a = {},
            c = {},
            l = {},
            u = {
              read: 0,
              write: 0,
              readTotalTime: 0,
              cacheHit: 0,
              cacheMiss: 0,
              cacheUsed: 0,
              io: [],
            };
          return {
            stats: u,
            open: async (n, o, d, h) => {
              i !== h &&
                console.error("sockdrive error: token mistmatch", i, "!=", h);
              const f = await fetch(
                  n.replace("wss://", "https://").replace("ws://", "http://") +
                    "/template/" +
                    o +
                    "/" +
                    d,
                ),
                p = await f.json();
              if (p.error) throw new Error(p.error);
              r++,
                (c[r] = {
                  name: p.name,
                  size: p.size ?? 0,
                  heads: p.heads ?? 1,
                  cylinders: p.cylinders ?? 520,
                  sectors: p.sectors ?? 63,
                  sectorSize: p.sector_size ?? 512,
                });
              const v = c[r].sectorSize,
                m = { HEAPU8: new Uint8Array(0) };
              u.io.push({ read: 0, write: 0 });
              const y = s[n] ?? null;
              return (
                y
                  ? y.open(o, d, i)
                  : console.error("Sockdrive cache not found for", n),
                (a[r] = new sl(n, o, d, i, u, m, y, !0)),
                new Promise((n, i) => {
                  const s = o + "/" + d;
                  a[r].onOpen((t, o, i, a, c, u) => {
                    (l[r] = new Uint8Array(v + v * a)),
                      (m.HEAPU8 = l[r]),
                      e(s, t, o, i, c, u),
                      n({ handle: r, aheadRange: a });
                  }),
                    a[r].onError((e) => {
                      t(e), i(e);
                    });
                })
              );
            },
            readSync: (e, t) => {
              if (a[e]) {
                u.io[e - 1].read++;
                const n = c[e].sectorSize,
                  o = a[e].read(t, n, !0);
                return { code: o, buffer: 255 === o ? void 0 : l[e].slice(n) };
              }
              return (
                console.error("ERROR! sockdrive handle", e, "not found"),
                { code: 1 }
              );
            },
            readAsync: async (e, t) => {
              if (a[e]) {
                u.io[e - 1].read++;
                const n = c[e].sectorSize;
                return {
                  code: await a[e].read(t, n, !1),
                  buffer: l[e].slice(n),
                };
              }
              return (
                console.error("ERROR! sockdrive handle", e, "not found"),
                Promise.resolve({ code: 1 })
              );
            },
            write: (e, n, o) =>
              o.byteLength != c[e].sectorSize
                ? (t(
                    new Error(
                      "sockdrive write buffer size " +
                        o.byteLength +
                        " != sector size " +
                        c[e].sectorSize,
                    ),
                  ),
                  1)
                : a[e]
                  ? (u.io[e - 1].write++, l[e].set(o, 0), a[e].write(n, 0))
                  : (console.error("ERROR! sockdrive handle", e, "not found"),
                    1),
            close: (e) => {
              a[e] && (a[e].close(), delete l[e], delete c[e], delete a[e]);
            },
            template: (e) => c[e],
            applyToken: (e) => {
              i = e;
            },
            applyConf: (e) => {
              let t;
              for (console.log("applyConf", e); (t = Ai.exec(e)); ) {
                const [e, r, a, c, l] = t;
                s[a] || (s[a] = new fl(a, !0)),
                  s[a].onProgress((e, t, o, r) => {
                    n(e + "/" + t, o);
                  }),
                  s[a].onPayload(o),
                  s[a].open(c, l, i);
              }
            },
          };
        })(
          this.onSockdriveOpen.bind(this),
          this.onSockdriveError.bind(this),
          this.onSockdrivePreloadProgress.bind(this),
          this.onSockdrivePayload.bind(this),
        ),
      ),
      t(this, "sockdriveSeq", 1),
      t(this, "version", 0),
      t(this, "handler", () => {}),
      (this.socket = e),
      this.socket.addEventListener("error", (e) => {
        this.handler("ws-err", {
          tag: "ws",
          message: e.message ?? "Unknown transport layer error",
        }),
          this.handler("ws-exit", {}),
          this.socket.close();
      }),
      this.socket.addEventListener("message", async (e) => {
        const t = e.data;
        this.onMessage(new Uint8Array(await t.arrayBuffer()));
      }),
      this.sendMessageToSocket("wc-install"),
      (this.hardware = null),
      (this.onInit = n);
  }
  writeUint32(e, t, n) {
    return (
      (e[n] = 255 & t),
      (e[n + 1] = (65280 & t) >> 8),
      (e[n + 2] = (16711680 & t) >> 16),
      (e[n + 3] = (4278190080 & t) >> 24),
      n + 4
    );
  }
  readUint32(e, t) {
    return (
      (255 & e[t]) |
      ((e[t + 1] << 8) & 65280) |
      ((e[t + 2] << 16) & 16711680) |
      ((e[t + 3] << 24) & 4278190080)
    );
  }
  readUint64(e, t) {
    return this.readUint32(e, t) + this.readUint32(e, t + 4) * 2 ** 32;
  }
  sendMessageToSocket(e, ...t) {
    let n = 1;
    for (const i of t) n += 4 + ((null == i ? void 0 : i.length) ?? 0);
    const o = new Uint8Array(n);
    o[0] = "string" == typeof e ? yl[e] : e;
    let r = 1;
    for (const i of t)
      this.writeUint32(o, (null == i ? void 0 : i.length) ?? 0, r),
        (r += 4),
        i && (o.set(i, r), (r += i.length));
    this.socket.send(o);
  }
  readMessage(e) {
    const t = [];
    let n = 1;
    for (; n + 4 <= e.length; ) {
      const o = this.readUint32(e, n);
      if (((n += 4), n + o > e.length))
        throw new Error("read_message out of bounds");
      t.push(e.slice(n, n + o)), (n += o);
    }
    return { id: e[0], payload: t };
  }
  onMessage(e) {
    var t;
    const { id: n, payload: o } = this.readMessage(e),
      r = gl[n];
    switch (r) {
      case "ws-ready":
        (this.version = o && o[0] && o.length > 0 ? o[0][0] : 0),
          this.onInit(this.version),
          this.handler(r, {});
        break;
      case "ws-server-ready":
      case "ws-exit":
        "ws-server-ready" !== r && this.handler(r, {});
        break;
      case "ws-stdout":
      case "ws-log":
      case "ws-warn":
      case "ws-err":
        this.handler(r, { tag: pl.decode(o[0]), message: pl.decode(o[1]) });
        break;
      case "ws-send-data-chunk":
        {
          const e = {
            type: pl.decode(o[0]),
            name: pl.decode(o[1]),
            data: o[2],
          };
          this.handler(r, { chunk: e });
        }
        break;
      case "ws-config":
        if (o[0]) {
          const e = pl.decode(o[0]);
          this.sockdrive.applyConf(e);
        }
        this.handler(r, { dosboxConf: o[0], jsdosConf: pl.decode(o[1]) });
        break;
      case "ws-sound-init":
        this.handler(r, { freq: this.readUint32(o[0], 0) }),
          this.handler("ws-server-ready", {});
        break;
      case "ws-sound-push":
        this.handler(r, { samples: new Float32Array(o[0].buffer) });
        break;
      case "ws-frame-set-size":
        this.handler(r, {
          width: this.readUint32(o[0], 0),
          height: this.readUint32(o[0], 4),
        });
        break;
      case "ws-update-lines":
        if (o.length > 0) {
          const e = [];
          for (const t of o)
            e.push({ start: this.readUint32(t, 0), heapu8: t.slice(4) });
          this.handler(r, { lines: e });
        }
        break;
      case "ws-asyncify-stats":
        {
          this.cycles += this.readUint32(o[0], 0);
          const e = {
            messageSent: this.readUint32(o[0], 4),
            messageReceived: this.readUint32(o[0], 8),
            messageFrame: this.readUint32(o[0], 12),
            messageSound: this.readUint32(o[0], 16),
            nonSkippableSleepCount: 0,
            sleepCount: 0,
            sleepTime: 0,
            cycles: this.cycles,
            netSent: 0,
            netRecv: 0,
            driveSent: this.sockdrive.stats.write,
            driveRecv: this.sockdrive.stats.read,
            driveCacheHit: this.sockdrive.stats.cacheHit,
            driveCacheMiss: this.sockdrive.stats.cacheMiss,
            driveRecvTime: this.sockdrive.stats.readTotalTime,
            driveCacheUsed: this.sockdrive.stats.cacheUsed,
            driveBufferedAmount: 0,
            driveIo: this.sockdrive.stats.io,
          };
          o[0].length > 20 &&
            ((e.driveCacheHit = this.readUint32(o[0], 20)),
            (e.driveCacheMiss = this.readUint32(o[0], 24)),
            (e.driveRecv = this.readUint32(o[0], 28)),
            (e.driveSent = this.readUint32(o[0], 32)),
            (e.driveRecvTime = this.readUint32(o[0], 36))),
            this.handler(r, e);
        }
        break;
      case "ws-connected":
        this.handler(r, { networkType: o[0][0], address: pl.decode(o[1]) });
        break;
      case "ws-disconnected":
        this.handler(r, { networkType: o[0][0] });
        break;
      case "ws-fs-tree":
        {
          let e = function (e) {
            var t;
            const n = e.split("/");
            let o = i;
            for (let r = 1; r < n.length - 1; ++r) {
              const i = n[r];
              if (
                ((o =
                  null == (t = o.nodes) ? void 0 : t.find((e) => e.name == i)),
                !o)
              )
                throw new Error("Unable to find node " + e + ", subdir " + i);
            }
            return [o, n[n.length - 1]];
          };
          const n = [];
          for (let t = 0; t < o.length - 1; ++t)
            n.push({ name: pl.decode(o[t]), size: null });
          const r = o[o.length - 1];
          for (let t = 0; t < n.length; ++t) {
            const e = this.readUint32(r, 4 * t);
            n[t].size = e < 0 ? null : e;
          }
          const i = { name: ".", nodes: [], size: null };
          for (const { name: o, size: s } of n) {
            const [n, r] = e(o);
            null == (t = n.nodes) ||
              t.push({ name: r, size: s, nodes: null === s ? [] : null });
          }
          this.handler("ws-fs-tree", { fsTree: i });
        }
        break;
      case "ws-persist":
        this.handler("ws-persist", { bundle: o.length > 0 ? o[0] : null });
        break;
      case "ws-net-connect":
        {
          let e = pl.decode(o[0]);
          e.startsWith("wss://") ||
            e.startsWith("ws://") ||
            (e =
              ("http:" === window.location.protocol &&
              "localhost" !== window.location.hostname
                ? "ws://"
                : "wss://") + e),
            this.handler("ws-net-connect", { address: e });
        }
        break;
      case "ws-net-send":
        this.handler("ws-net-send", {
          networkId: this.readUint32(o[0], 0),
          data: o[1],
        });
        break;
      case "ws-net-disconnect":
        this.handler("ws-net-disconnect", {
          networkId: this.readUint32(o[0], 0),
        });
        break;
      default:
        void 0 === r
          ? (async () => {
              switch (n) {
                case 100:
                case 104:
                  {
                    const e = pl.decode(o[0]),
                      t = pl.decode(o[1]),
                      r = pl.decode(o[2]),
                      i = pl.decode(o[3]);
                    let s,
                      a = this.sockdriveSeq++,
                      c = 0;
                    if (100 === n) {
                      const n = await this.sockdrive.open(e, t, r, i);
                      (a = n.handle),
                        (c = n.aheadRange),
                        (s = this.sockdrive.template(a));
                    } else {
                      const n = await fetch(
                          e
                            .replace("wss://", "https://")
                            .replace("ws://", "http://") +
                            "/template/" +
                            t +
                            "/" +
                            r,
                        ),
                        o = await n.json();
                      if (o.error) throw new Error(o.error);
                      s = {
                        name: o.name,
                        size: o.size ?? 0,
                        heads: o.heads ?? 1,
                        cylinders: o.cylinders ?? 520,
                        sectors: o.sectors ?? 63,
                        sectorSize: o.sector_size ?? 512,
                      };
                    }
                    const l = new Uint8Array(28);
                    let u = 0;
                    (u = this.writeUint32(l, a, u)),
                      (u = this.writeUint32(l, s.size, u)),
                      (u = this.writeUint32(l, s.heads, u)),
                      (u = this.writeUint32(l, s.cylinders, u)),
                      (u = this.writeUint32(l, s.sectors, u)),
                      (u = this.writeUint32(l, s.sectorSize, u)),
                      this.writeUint32(l, c, u),
                      this.sendMessageToSocket(100, l);
                  }
                  break;
                case 101:
                  {
                    const e = this.readUint32(o[0], 0),
                      t = this.readUint32(o[0], 4);
                    let n = this.sockdrive.readSync(e, t);
                    255 === n.code &&
                      (n = await this.sockdrive.readAsync(e, t));
                    const r = new Uint8Array(4);
                    this.writeUint32(r, n.code, 0),
                      this.sendMessageToSocket(101, r, n.buffer ?? null);
                  }
                  break;
                case 102:
                  {
                    const e = this.readUint32(o[0], 0),
                      t = this.readUint32(o[0], 4),
                      n = this.sockdrive.write(e, t, o[1]),
                      r = new Uint8Array(4);
                    this.writeUint32(r, n, 0);
                  }
                  break;
                case 103:
                  this.sockdrive.close(this.readUint32(o[0], 0));
                  break;
                case 105:
                  {
                    const e = pl.decode(o[0]),
                      t = pl.decode(o[1]);
                    this.onSockdriveOpen(
                      e + "/" + t,
                      !0,
                      1 === o[2][0],
                      this.readUint32(o[2], 1),
                      e,
                      t,
                    );
                  }
                  break;
                default:
                  console.log(
                    "WARN! Unhandled server non standard message",
                    n,
                    o,
                  );
              }
            })().catch((e) => {
              this.handler("ws-err", {
                tag: "panic",
                message: "sockdrive error: " + (e.message ?? "???"),
              });
            })
          : console.warn("WARN! Unhandled server message", r);
    }
  }
  async sendMessageToServer(e, t) {
    if (void 0 === t || (null == t ? void 0 : t.sessionId) !== this.sessionId)
      return;
    const n = yl[e];
    switch (e) {
      case "wc-run":
        {
          const e = t.token ?? "";
          this.sockdrive.applyToken(e),
            this.sendMessageToSocket(n, vl.encode(e));
        }
        break;
      case "wc-send-data-chunk":
        {
          const e = t.chunk;
          this.sendMessageToSocket(
            n,
            vl.encode(e.type),
            vl.encode(e.name),
            e.data ? new Uint8Array(e.data) : null,
          );
        }
        break;
      case "wc-asyncify-stats":
      case "wc-fs-tree":
        this.sendMessageToSocket(n);
        break;
      case "wc-add-key":
        {
          const e = new Uint8Array(12);
          let o = 0;
          (o = this.writeUint32(e, t.key, o)),
            (o = this.writeUint32(e, t.pressed ? 1 : 0, o)),
            this.writeUint32(e, t.timeMs, o),
            this.sendMessageToSocket(n, e);
        }
        break;
      case "wc-mouse-move":
        {
          const e = new Uint8Array(15);
          let o = 0;
          (o = this.writeUint32(e, Math.abs(t.x) * ml, o)),
            (o = this.writeUint32(e, Math.abs(t.y) * ml, o)),
            (o = this.writeUint32(e, t.timeMs, o)),
            (e[o] = t.relative ? 1 : 0),
            (e[o + 1] = t.x >= 0 ? 0 : 1),
            (e[o + 2] = t.y >= 0 ? 0 : 1),
            this.sendMessageToSocket(n, e);
        }
        break;
      case "wc-mouse-button":
        {
          const e = new Uint8Array(6);
          (e[0] = t.button),
            (e[1] = t.pressed ? 1 : 0),
            this.writeUint32(e, t.timeMs, 2),
            this.sendMessageToSocket(n, e);
        }
        break;
      case "wc-mouse-sync":
        {
          const e = new Uint8Array(4);
          this.writeUint32(e, t.timeMs, 0), this.sendMessageToSocket(n, e);
        }
        break;
      case "wc-connect":
        this.sendMessageToSocket(
          n,
          new Uint8Array([t.networkType]),
          vl.encode(t.address),
        );
        break;
      case "wc-pack-fs-to-bundle":
        this.sendMessageToSocket(n, new Uint8Array([t.onlyChanges ? 1 : 0]));
        break;
      case "wc-net-connected":
        {
          const e = new Uint8Array(4);
          this.writeUint32(e, t.networkId + 1, 0),
            this.sendMessageToSocket(n, e);
        }
        break;
      case "wc-net-received":
        {
          const e = new Uint8Array(4);
          this.writeUint32(e, t.networkId, 0),
            this.sendMessageToSocket(n, e, new Uint8Array(t.data));
        }
        break;
      default:
        console.log("Unhandled client message (wc):", e, n, t);
    }
  }
  initMessageHandler(e) {
    this.handler = (t, n) => {
      (n.sessionId = this.sessionId), e(t, n);
    };
  }
  exit() {
    this.sendMessageToSocket("wc-exit");
  }
  onSockdriveOpen(e, t, n, o, r, i) {
    this.handler("ws-log", {
      tag: "worker",
      message:
        "sockdrive: " +
        (r ? r + "/" + i : e) +
        ", read=" +
        t +
        ", write=" +
        n +
        ", imageSize=" +
        Math.round(o / 1024 / 1024) +
        "Mb",
    });
  }
  onSockdriveError(e) {
    this.handler("ws-err", {
      tag: "panic",
      message: e.message ?? "unable to open sockdrive",
    });
  }
  onSockdrivePreloadProgress(e, t) {
    this.handler("ws-log", {
      tag: "worker",
      message: "sockdrive: " + e + ", preload=" + t,
    });
  }
  onSockdrivePayload(e, t, n, o, r, i) {
    if (this.version > 3) {
      const s = new Uint8Array(4 * r.length + 8);
      let a = 0;
      for (const e of r) a = this.writeUint32(s, e, a);
      (a = this.writeUint32(s, n, a)),
        this.writeUint32(s, o, a),
        this.sendMessageToSocket(106, vl.encode(e), vl.encode(t), s, i);
    }
  }
}
function _l(e) {
  const { ci: t } = e,
    n = on((e) => e.dos.softKeyboard),
    o = on((e) => e.dos.softKeyboardLayout),
    r = on((e) => e.dos.softKeyboardSymbols),
    i = on((e) => e.dos.softKeyboardActiveSymbols),
    s = on((e) => e.dos.softKeyboardActiveLayout),
    a = eo(),
    c = r[i % r.length],
    l = o[s % o.length];
  if (!n || null === t) return null;
  function u(e, n) {
    if (null !== t)
      if ("{symbols}" === e) {
        if (n) {
          const e = (i + 1) % r.length;
          e !== i && a(Ci.actions.softKeyboardActiveSymbols(e));
        }
      } else if ("{layout}" === e) {
        if (n) {
          const e = (s + 1) % o.length;
          e !== s && a(Ci.actions.softKeyboardActiveLayout(e));
        }
      } else
        for (const o of (function (e) {
          switch (e) {
            case "{enter}":
              return [wa];
            case "{shift}":
              return [Ca];
            case "{bksp}":
              return [_a];
            case "{lock}":
              return [280];
            case "{tab}":
              return [ba];
            case "{space}":
              return [32];
            case "{esc}":
              return [ga];
            case "{ctrl}":
              return [xa];
            case "{alt}":
              return [ka];
            case "{up}":
              return [Da];
            case "{down}":
              return [Ta];
            case "{left}":
              return [Aa];
            case "{right}":
              return [Ba];
            case ",":
              return [44];
            case ".":
              return [46];
            case "'":
              return [39];
            case ":":
              return [Ca, 59];
            case "{":
              return [Ca, 91];
            case "}":
              return [Ca, 93];
            case "(":
              return [Ca, 57];
            case ")":
              return [Ca, Gs];
            case "{f1}":
              return [Ys];
            case "{f2}":
              return [Zs];
            case "{f3}":
              return [Qs];
            case "{f4}":
              return [Js];
            case "{f5}":
              return [ea];
            case "{f6}":
              return [ta];
            case "{f7}":
              return [na];
            case "{f8}":
              return [oa];
            case "{f9}":
              return [ra];
            case "{f10}":
              return [ia];
            case "{f11}":
              return [sa];
            case "{f12}":
              return [aa];
            case "{kp1}":
              return [la];
            case "{kp2}":
              return [ua];
            case "{kp3}":
              return [da];
            case "{kp4}":
              return [ha];
            case "{kp5}":
              return [fa];
            case "{kp6}":
              return [pa];
            case "{kp7}":
              return [va];
            case "{kp8}":
              return [ma];
            case "{kp9}":
              return [ya];
            case "{kp0}":
              return [ca];
            case "{pgup}":
              return [Ea];
            case "{pgdown}":
              return [ja];
            case "{del}":
              return [Oa];
            case "{home}":
              return [Pa];
            case "{end}":
              return [Ma];
            case "-":
              return [45];
            case "=":
              return [Sa];
            case "+":
              return [Ca, Sa];
            default:
              if (e.length > 1) return console.warn("Unknown button", e), [];
          }
          const t = Ia(e.toUpperCase().charCodeAt(0), 0);
          if (0 === t) return [];
          return [t];
        })(e))
          t.sendKeyEvent(o, n);
  }
  function d(e) {
    return e.length > 2 && e.startsWith("{") && e.endsWith("}")
      ? e[1].toUpperCase() + e.substring(2, e.length - 1)
      : e;
  }
  return Ii("div", {
    class: "soft-keyboard my-4 mx-2",
    children: Ii("div", {
      class: "flex flex-row gap-2 flex-wrap justify-evenly items-center",
      children: l.map((e, t) =>
        Ii("div", {
          class:
            "flex flex-col gap-2 flex-wrap" +
            (1 === l.length || 1 === t
              ? " items-center"
              : 0 === t
                ? " items-start"
                : " items-end"),
          children: e.map((e) =>
            Ii("div", {
              class: "flex flex-row gap-2 flex-wrap items-center",
              children:
                0 === e.length
                  ? Ii("div", { class: "kbd-md" })
                  : e
                      .split(" ")
                      .map((e) =>
                        Ii("kbd", {
                          class:
                            "kbd kbd-md cursor-pointer hover:bg-accent-focus",
                          onPointerDown: () => u(e, !0),
                          onPointerUp: () => u(e, !1),
                          onPointerCancel: () => u(e, !1),
                          children: c[e] ?? r[0][e] ?? d(e),
                        }),
                      ),
            }),
          ),
        }),
      ),
    }),
  });
}
function wl(e) {
  const t = le(null),
    [n, o] = ie(null),
    r = on((e) => e.dos.sockdriveWrite),
    i = on((e) => {
      var t;
      return null == (t = e.auth.account) ? void 0 : t.token;
    }),
    s = r ? i : void 0,
    a = on((e) => e.dos.worker),
    c = on((e) => e.dos.backend),
    l = on((e) => e.dos.backendHardware),
    u = on((e) => e.dos.sockdriveNative),
    d = on((e) => e.dos.noCursor),
    h = eo(),
    f = vi();
  return (
    ae(() => {
      try {
        const e = f.loadedBundle;
        let t =
          null !== e.bundleChanges ? [e.bundle, e.bundleChanges] : e.bundle;
        if (null !== e.initFs)
          if ((Array.isArray(t) || (t = [t]), Array.isArray(e.initFs)))
            for (const o of e.initFs) t.push(o);
          else t.push(e.initFs);
        (e.bundle = null), (e.bundleChanges = null), (e.initFs = null);
        const n = (async () => {
          if (l && f.options.backendHardware) {
            const o = await f.options.backendHardware(c, u);
            if (null !== o)
              return emulators.backend(
                t,
                await ((e = o),
                (n = (e) => {
                  e < 4 && h(Zr.actions.updateWsWarning(!0)),
                    console.log("wsServer:", e, " expected:", 4);
                }),
                new Promise((t) => {
                  let o = !1;
                  const r = setInterval(() => {
                    if (o) return;
                    o = !0;
                    const i = new WebSocket(e),
                      s = () => {
                        clearInterval(r),
                          console.log("Connected to", e),
                          t(new bl(i, n));
                      };
                    i.addEventListener("error", (t) => {
                      console.error("Can't conect to ", e, t),
                        i.removeEventListener("open", s),
                        i.close(),
                        (o = !1);
                    }),
                      i.addEventListener("open", s);
                  }, 1e3);
                })),
                { token: s },
              );
          }
          var e, n;
          return emulators[
            ("dosbox" !== c && "dosboxX" !== c ? "dosbox" : c) +
              (a ? "Worker" : "Direct")
          ](t, { token: s });
        })();
        return (
          n
            .then((e) => {
              o(e),
                h(Ci.actions.ci(!0)),
                Wa.mobile &&
                  e
                    .config()
                    .then((e) => {
                      h(Ci.actions.mobileControls(null !== Ja(e.jsdosConf)));
                    })
                    .catch((e) => h(Ci.actions.emuError(e.message))),
                (f.ci = e),
                mi(f, "ci-ready", e);
            })
            .catch((e) => h(Ci.actions.emuError(e.message))),
          () => {
            n.then((e) => {
              h(Ci.actions.ci(!1)), (f.ci = null), e.exit();
            });
          }
        );
      } catch (e) {
        h(Ci.actions.emuError(e.message));
      }
    }, [a, c, u, s ?? null]),
    Ii("div", {
      class: "flex flex-col flex-grow h-full overflow-hidden",
      children: [
        Ii("div", {
          class: "bg-black h-full flex-grow overflow-hidden relative",
          children: [
            Ii("canvas", { class: d ? "cursor-none" : "", ref: t }),
            t.current && n && Ii(kl, { canvas: t.current, ci: n }),
          ],
        }),
        Ii(_l, { ci: n }),
      ],
    })
  );
}
function kl(e) {
  const { canvas: t, ci: n } = e,
    o = on((e) => e.dos.bundle);
  return (
    Zc(t, n),
    Ii(b, {
      children:
        (null == o
          ? void 0
          : o.endsWith("/b4b5275904d86a4ab8a20917b2b7e34f0df47bf7.jsdos")) &&
        Ii(tl, { ci: n }),
    })
  );
}
function xl(e) {
  const t = Wr(),
    n = e.error ?? "Unexpected error";
  return Ii("div", {
    class: "flex-grow flex flex-col items-center justify-center px-8 m-auto",
    children: [
      Ii("div", { class: "text-2xl text-center", children: t("error") }),
      Ii("div", {
        class: "text-red-400 mt-8 text-2xl text-center",
        children: ['"', n, '"'],
      }),
      Ii("div", {
        class: "mt-8 text-sm text-center",
        children: t("consult_logs"),
      }),
      e.onSkip &&
        Ii("button", {
          class: "mt-8 btn-primary",
          onClick: e.onSkip,
          children: t("skip"),
        }),
    ],
  });
}
function Cl() {
  return Ii(xl, { error: on((e) => e.dos.error) });
}
function Sl(e) {
  const { head: t, message: n } = e;
  return Ii("div", {
    class: "flex flex-col items-center justify-center frame-color px-8",
    children: [
      Ii("div", { class: "text-2xl text-center", children: t }),
      Ii("div", { class: "mt-2 text-center", children: n }),
    ],
  });
}
function Pl(e) {
  return e < 1024
    ? e + "b"
    : (e /= 1024) < 1024
      ? Math.round(e) + "kb"
      : ((e /= 1024), Math.round(10 * e) / 10 + "mb");
}
function El() {
  const e = Wr(),
    t = on((e) => e.dos.step),
    n = on((e) => e.storage.recived),
    o = on((e) => e.storage.total);
  let r = e("loading"),
    i = "100%";
  switch (t) {
    case "bnd-load":
      (r = e("bundle_loading")),
        n > 0 &&
          ((i = `${Pl(n)} / ${Pl(o)}`),
          o > 0 && (i += ` (${Math.round((1e3 * n) / o) / 10}%)`));
      break;
    case "bnd-config":
      r = e("bundle_config");
  }
  return Ii("div", {
    class: "flex flex-col w-full h-full items-center justify-center",
    children: Ii(Sl, { head: r, message: i }),
  });
}
const Ol = document.createElement("input");
function Ml() {
  const e = Wr(),
    t = Qn(),
    [n, o] = ie(!1);
  if (n)
    return Ii("div", {
      class:
        "select-window overflow-hidden flex-grow flex flex-col items-center justify-center px-8 py-8",
      children: Ii(jl, {}),
    });
  return Ii("div", {
    class:
      "select-window overflow-hidden flex-grow flex flex-col items-center justify-center px-8",
    children: [
      Ii("div", {
        class: "mb-4 text-center underline cursor-pointer hover:text-accent",
        onClick: () => o(!0),
        children: e("load_by_url"),
      }),
      Ii(Al, {}),
      Ii("div", { class: "mt-4 text-center", children: e("upload_file") }),
      Ii("div", {
        class: "mt-4 text-center underline cursor-pointer hover:text-accent",
        onClick: async function () {
          try {
            await (async function (e) {
              await Bi(
                "empty.jsdos",
                (async () => (await emulators.bundle()).toUint8Array())(),
                null,
                null,
                e,
              ),
                e.dispatch(Zr.actions.frameConf()),
                e.dispatch(Zr.actions.setEditor(!0));
            })(t).catch(console.error);
          } catch (e) {
            t.dispatch(Ci.actions.bndError(e.message ?? "unexpected error"));
          }
        },
        children: e("create_empty"),
      }),
    ],
  });
}
function jl() {
  const e = Wr(),
    t = Qn(),
    n = eo(),
    [o, r] = ie(""),
    [i, s] = ie(null);
  return Ii(b, {
    children: [
      Ii("div", {
        class: "form-control w-3/4 mb-4",
        children: [
          Ii("label", {
            class: "label",
            children: Ii("span", {
              class: "label-text",
              children: [e("enter_url"), ":"],
            }),
          }),
          Ii("input", {
            type: "text",
            class: "input w-full input-sm input-bordered",
            onChange: (e) => r(e.currentTarget.value ?? ""),
            value: o,
          }),
        ],
      }),
      Ii("div", {
        class: "mt-4 text-center underline cursor-pointer hover:text-accent",
        onClick: () =>
          (async function (e) {
            let o;
            n(Zr.actions.frameNone());
            try {
              o = new URL(e);
            } catch (r) {
              return void s(r.message);
            }
            try {
              await Ti(o.toString(), t);
            } catch (r) {
              n(Ci.actions.bndError(r.message ?? "unexpected error"));
            }
          })(o),
        children: e("load"),
      }),
      null !== i &&
        Ii("div", { class: "mt-8 text-center text-error", children: i }),
    ],
  });
}
function Al() {
  const e = Qn();
  async function t() {
    if (
      (Ol.removeEventListener("change", t),
      null === Ol.files || 0 === Ol.files.length)
    )
      return;
    const n = Ol.files[0];
    try {
      await Di(n, e).catch((t) => e.dispatch(Ci.actions.bndError(t.message)));
    } catch (o) {
      e.dispatch(Ci.actions.bndError(o.message ?? "unexpected error"));
    }
  }
  return Ii("div", {
    class: "cursor-pointer",
    onClick: function () {
      Ol.addEventListener("change", t), Ol.click();
    },
    children: Ii("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      "stroke-width": "1.5",
      stroke: "currentColor",
      class: "w-48 h-48 play-button",
      children: Ii("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M9 13.5l3 3m0 0l3-3m-3 3v-6m1.06-4.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z",
      }),
    }),
  });
}
function Dl(e) {
  const t = "none" !== on((e) => e.ui.frame),
    n = on((e) => e.ui.frameXs),
    o = on((e) => e.ui.window),
    r = on((e) => e.ui.background),
    i = on((e) => e.ui.kiosk);
  let s = Ii(Tl, {});
  switch (o) {
    case "error":
      s = Ii(Cl, {});
      break;
    case "loading":
      s = Ii(El, {});
      break;
    case "prerun":
      s = Ii(Ss, {});
      break;
    case "run":
      s = Ii(wl, {});
      break;
    case "select":
      s = Ii(Ml, {});
  }
  return Ii("div", {
    class: "window absolute w-full h-full bg-base-100",
    children: [
      Ii("div", {
        class: "background-image",
        style: { backgroundImage: r ? "url(" + r + ")" : void 0 },
      }),
      Ii("div", {
        class:
          "relative flex flex-row h-full w-full items-start justify-start overflow-auto",
        children: [
          !i &&
            Ii("div", {
              class: (t ? (n ? "w-24" : "w-96") : "w-12") + " flex-shrink-0",
            }),
          s,
        ],
      }),
    ],
  });
}
function Tl() {
  return Ii("div", {
    class: "w-full h-full flex justify-center items-center",
    children: Ii("div", {
      class: "radial-progress animate-spin",
      style: "--value:70;",
    }),
  });
}
Ol.type = "file";
let Bl = Zr.getInitialState().wideScreen;
function zl() {
  const e = le(null),
    t = on((e) => e.ui.hidden),
    n = on((e) => e.ui.theme),
    o = eo();
  return (
    ae(() => {
      if (t || null === e || null === e.current) return;
      const n = e.current;
      function r() {
        const e = n.getBoundingClientRect().width > 640;
        e !== Bl && ((Bl = e), o(Zr.actions.setWideScreen(Bl)));
      }
      const i = new ResizeObserver(r);
      return (
        i.observe(n),
        window.addEventListener("resize", r),
        () => {
          i.disconnect(), window.removeEventListener("resize", r);
        }
      );
    }, [t, e, o]),
    t
      ? null
      : Ii("div", {
          ref: e,
          class: "w-full h-full relative",
          "data-theme": n,
          children: [
            Ii(Dl, {}),
            Ii(js, {}),
            Ii($s, {}),
            Ii(Ll, {}),
            Ii(Rl, {}),
          ],
        })
  );
}
function Ll() {
  const e = on((e) => e.ui.toast),
    t = on((e) => e.ui.toastIntent),
    n = "panic" === t ? "error" : t;
  if (null === e) return null;
  let o = Ii("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  });
  return (
    "warning" === t &&
      (o = Ii("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z",
      })),
    ("error" !== t && "panic" !== t) ||
      (o = Ii("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z",
      })),
    Ii("div", {
      class: "absolute right-10 bottom-10",
      children: Ii("div", {
        class: "alert alert-" + n + " text-" + n + "-content",
        children: [
          Ii("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            class: "shrink-0 w-6 h-6",
            children: o,
          }),
          Ii("span", { class: "break-words", children: e }),
        ],
      }),
    })
  );
}
function Rl() {
  const e = on((e) => e.ui.updateWsWarning),
    t = Wr(),
    n = eo();
  if (!e) return null;
  return Ii("div", {
    class: "absolute left-20 right-10 top-10 flex justify-center",
    children: Ii("div", {
      class: "alert w-auto",
      children: [
        Ii("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          "stroke-width": "1.5",
          stroke: "currentColor",
          class: "size-6 text-error",
          children: Ii("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z",
          }),
        }),
        Ii("span", { children: t("ws_outdated") }),
        Ii("div", {
          children: [
            Ii("button", {
              class: "btn btn-sm btn-primary mr-2",
              onClick: function () {
                window.open("https://dos.zone/download/", "_blank"),
                  n(Zr.actions.updateWsWarning(!1));
              },
              children: t("update"),
            }),
            Ii("button", {
              class: "btn btn-sm",
              onClick: function () {
                n(Zr.actions.updateWsWarning(!1));
              },
              children: t("close"),
            }),
          ],
        }),
      ],
    }),
  });
}
window.Dos = (e, t = {}) => {
  var n;
  const o = (function (e) {
      return {
        root: null,
        loadedBundle: null,
        ci: null,
        cache: new ii(),
        options: e,
        layers: null,
        gl: null,
      };
    })(t),
    r = (function (e, t) {
      const { storeUid: n, slice: o } = ui(),
        r = Tr({
          reducer: {
            init: o.reducer,
            i18n: Vr.reducer,
            auth: ni.reducer,
            ui: Zr.reducer,
            dos: Ci.reducer,
            storage: ri.reducer,
            editor: Xr.reducer,
          },
          middleware: (e) => {
            const t = e();
            return t.push(hi), t;
          },
        });
      return (
        (fi[n] = e),
        t.sockdriveBackend &&
          -1 === ai.indexOf(t.sockdriveBackend.name) &&
          (ai.push(t.sockdriveBackend.name),
          (ci[t.sockdriveBackend.name] = {
            sockdriveEndpoint: "https://" + t.sockdriveBackend.host,
            sockdriveWssEndpoint: "wss://" + t.sockdriveBackend.host,
          }),
          r.dispatch(
            di.actions.setSockdriveBackendName(t.sockdriveBackend.name),
          )),
        r
      );
    })(o, t),
    i =
      ((s = "guest"),
      new Promise((e) => {
        new si(s, e, (t) => {
          console.error("Can't open IndexedDB cache", t), e(new ii());
        });
      }));
  var s;
  "dz.caiiiycuk@gmail.com" ===
    (null == (n = yi(r).auth.account) ? void 0 : n.email) &&
    r.dispatch(Ci.actions.setSockdriveWrite(!1)),
    (function (e, t, n) {
      function o() {
        n.dispatch(Zr.actions.documentHidden(document.hidden));
      }
      (t.root = e),
        e.classList.add("jsdos-rso"),
        e.addEventListener("contextmenu", (e) => {
          var t;
          if (
            null === e.target ||
            !(null == (t = e.target.classList)
              ? void 0
              : t.contains("contextmenu"))
          )
            return e.stopPropagation(), e.preventDefault(), !1;
        }),
        document.addEventListener("fullscreenchange", (o) => {
          if (!n.getState().ui.softFullscreen) {
            const o = document.fullscreenElement === e;
            n.dispatch(Zr.actions.setFullScreen(o)),
              o || Oi(yi(n), t, n.dispatch);
          }
        }),
        document.addEventListener("pointerlockchange", () => {
          null === document.pointerLockElement && Oi(yi(n), t, n.dispatch);
        }),
        document.addEventListener("visibilitychange", o);
    })(e, o, r);
  let a = "none";
  function c(e) {
    r.dispatch(Zr.actions.theme(e));
  }
  function l(e) {
    r.dispatch(Vr.actions.setLang(e));
  }
  function u(e) {
    r.dispatch(Ci.actions.dosBackend(e));
  }
  function d(e) {
    r.dispatch(Ci.actions.dosBackendLocked(e));
  }
  function h(e) {
    r.dispatch(Ci.actions.dosWorker(e));
  }
  function f(e) {
    r.dispatch(Ci.actions.mouseCapture(e));
  }
  function p(e) {
    r.dispatch(Ci.actions.setIpxBackends(e));
  }
  function v(e) {
    r.dispatch(Ci.actions.setIpxBackend(e));
  }
  function m(e) {
    r.dispatch(Ci.actions.setRoom(e));
  }
  function y(e) {
    r.dispatch(Zr.actions.background(e));
  }
  function g(e) {
    As(e, r);
  }
  function b(e) {
    r.dispatch(Zr.actions.autoStart(e));
  }
  function _(e) {
    r.dispatch(Zr.actions.kiosk(e));
  }
  function w(e) {
    r.dispatch(Ci.actions.imageRendering(e));
  }
  function k(e) {
    r.dispatch(Ci.actions.renderBackend(e));
  }
  function x(e) {
    r.dispatch(Ci.actions.renderAspect(e));
  }
  function C(e) {
    r.dispatch(Zr.actions.noNetworking(e));
  }
  function S(e) {
    r.dispatch(Zr.actions.noCloud(e));
  }
  function P(e) {
    r.dispatch(Ci.actions.scaleControls(e));
  }
  function E(e) {
    r.dispatch(Ci.actions.mouseSensitivity(e));
  }
  function O(e) {
    r.dispatch(Ci.actions.noCursor(e));
  }
  function M(e) {
    r.dispatch(Ci.actions.softKeyboardLayout(e));
  }
  function j(e) {
    r.dispatch(Ci.actions.softKeyboardSymbols(e));
  }
  function A(e) {
    r.dispatch(Ci.actions.volume(e));
  }
  function D(e) {
    null === e || 5 !== e.length
      ? r.dispatch(ni.actions.setAccount(null))
      : oi(e)
          .then(({ account: e }) => {
            r.dispatch(ni.actions.setAccount(e));
          })
          .catch(console.error);
  }
  function T(e) {
    r.dispatch(Zr.actions.softFullscreen(e));
  }
  return (
    r.subscribe(function () {
      (async () => {
        const e = yi(r),
          n = e.dos.step;
        if (n !== a)
          switch (((a = n), e.dos.step)) {
            case "bnd-ready":
              void 0 !== t.mouseCapture && f(t.mouseCapture);
              break;
            case "emu-ready":
              if (((o.cache = await i), o.options.url))
                try {
                  await Ti(o.options.url, r);
                } catch (s) {
                  r.dispatch(Ci.actions.bndError(s.message));
                }
              else if (o.options.dosboxConf) {
                const e = o.options.jsdosConf ?? { version: "8" };
                e.version || (e.version = "8"),
                  (async function (e, t, n) {
                    const o = pi(n),
                      r = n.dispatch;
                    (o.loadedBundle = null),
                      r(Xr.actions.init(e)),
                      zi(e, r),
                      (o.loadedBundle = {
                        bundleUrl: null,
                        bundleChangesUrl: null,
                        bundle: e,
                        bundleChanges: null,
                        initFs: t,
                      }),
                      r(Ci.actions.bndReady({}));
                  })(
                    { dosboxConf: o.options.dosboxConf, jsdosConf: e },
                    o.options.initFs ?? null,
                    r,
                  );
              } else r.dispatch(Zr.actions.windowSelect());
              mi(o, "emu-ready");
          }
      })().catch(console.error);
    }),
    Pi(r, t.pathPrefix ?? "https://v8.js-dos.com/latest/emulators/"),
    t.theme && c(t.theme),
    t.lang && l(t.lang),
    t.backend && u(t.backend),
    t.backendLocked && d(t.backendLocked),
    void 0 !== t.workerThread && h(t.workerThread),
    t.ipx && p(t.ipx),
    t.ipxBackend && v(t.ipxBackend),
    t.room && m(t.room),
    t.background && y(t.background),
    void 0 !== t.fullScreen && g(t.fullScreen),
    void 0 !== t.autoStart && b(t.autoStart),
    void 0 !== t.kiosk && _(t.kiosk),
    void 0 !== t.imageRendering && w(t.imageRendering),
    void 0 !== t.renderBackend && k(t.renderBackend),
    void 0 !== t.renderAspect && x(t.renderAspect),
    void 0 !== t.noNetworking && C(t.noNetworking),
    void 0 !== t.noCloud && S(t.noCloud),
    void 0 !== t.scaleControls && P(t.scaleControls),
    void 0 !== t.mouseSensitivity && E(t.mouseSensitivity),
    void 0 !== t.noCursor && O(t.noCursor),
    void 0 !== t.softKeyboardLayout && M(t.softKeyboardLayout),
    void 0 !== t.softKeyboardSymbols && j(t.softKeyboardSymbols),
    void 0 !== t.volume && A(t.volume),
    void 0 !== t.key && D(t.key),
    void 0 !== t.backendHardware && T(!0),
    void 0 !== t.softFullscreen && T(t.softFullscreen),
    I(Ii(Yn, { store: r, children: Ii(zl, {}) }), e),
    {
      getVersion: () => ["8.3.14", r.getState().dos.emuVersion],
      getToken: () => {
        var e;
        return (null == (e = yi(r).auth.account) ? void 0 : e.token) ?? null;
      },
      setTheme: c,
      setLang: l,
      setBackend: u,
      setBackendLocked: d,
      setWorkerThread: h,
      setMouseCapture: f,
      setIpx: p,
      setIpxBackend: v,
      setRoom: m,
      setFrame: function (e) {
        r.dispatch(Zr.actions.frameNetwork());
      },
      setBackground: y,
      setFullScreen: g,
      setAutoStart: b,
      setKiosk: _,
      setImageRendering: w,
      setRenderBackend: k,
      setRenderAspect: x,
      setNoNetworking: C,
      setNoCloud: S,
      setPaused: function (e) {
        r.dispatch(Ci.actions.paused(e));
      },
      setScaleControls: P,
      setMouseSensitivity: E,
      setNoCursor: O,
      setSoftKeyboardLayout: M,
      setSoftKeyboardSymbols: j,
      setVolume: A,
      setKey: D,
      setSoftFullscreen: T,
      save: () => Oi(yi(r), o, r.dispatch),
      stop: async () => {
        r.dispatch(Zr.actions.hidden(!0));
        const e = pi(r);
        if (e.ci) return e.ci.exit();
      },
    }
  );
};
//# sourceMappingURL=js-dos.js.map
