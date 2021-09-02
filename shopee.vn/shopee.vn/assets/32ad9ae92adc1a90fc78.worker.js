! function() {
    var t = {
            2829: function(t, n, e) {
                var r = e(8e3),
                    o = e(9711),
                    i = r("keys");
                t.exports = function(t) {
                    return i[t] || (i[t] = o(t))
                }
            },
            8e3: function(t, n, e) {
                var r = e(7854),
                    o = e(3505),
                    i = e(1913),
                    u = "__core-js_shared__",
                    c = r[u] || o(u, {});
                (t.exports = function(t, n) {
                    return c[t] || (c[t] = void 0 !== n ? n : {})
                })("versions", []).push({
                    version: "3.1.3",
                    mode: i ? "pure" : "global",
                    copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
                })
            },
            8865: function(t, n, e) {
                "use strict";
                e.d(n, {
                    getRuleSet: function() {
                        return f
                    },
                    injectRules: function() {
                        return a
                    },
                    v2ToV3: function() {
                        return s
                    }
                });
                e(6992), e(8674);
                var r = null,
                    o = {};
                var i = null;

                function u() {
                    return i || (i = function t(n) {
                        return e.e(631).then(e.bind(e, 6631)).catch((function(e) {
                            return n >= 5 ? null : function(t) {
                                return new Promise((function(n) {
                                    return setTimeout(n, t)
                                }))
                            }(1e3 * Math.pow(2, n++)).then((function() {
                                return t(n)
                            }))
                        }))
                    }(0))
                }

                function c() {
                    return r ? Promise.resolve(r) : u().then((function(t) {
                        if (!t || !t.conversion) return null;
                        r = t;
                        var n = t.conversion;
                        return self.match = n.match, self.ruleSet = n.ruleSet, self.schema = n.schema, t
                    }))
                }

                function f() {
                    return c().then((function(t) {
                        return t && t.conversion ? p(t.conversion.getRuleSet()) : []
                    }))
                }

                function a(t) {
                    return c().then((function(n) {
                        if (n && !o[t]) try {
                            self.importScripts(t), o[t] = !0
                        } catch (t) {}
                    }))
                }

                function s(t) {
                    if (t && "v3" === t.type) return Promise.resolve([t]);
                    var n = e.p;
                    return e.p = "https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/", c().then((function(r) {
                        if (e.p = n, !r || !r.conversion) return [t];
                        var o = r.conversion.v2ToV3(t).map((function(t) {
                            if (t && t.errorObj) try {
                                t.errorObj = Object.assign({}, t.errorObj)
                            } catch (n) {
                                t.errorObj = {}
                            }
                            return t
                        }));
                        return o && o.length > 0 ? o : [t]
                    }))
                }

                function p(t) {
                    if (Array.isArray(t)) return t.map(p);
                    if ("object" == typeof t) {
                        var n = {};
                        for (var e in t) n[e] = p(t[e]);
                        return n
                    }
                    return "function" == typeof t ? t.name : t
                }
                addEventListener("message", (function(t) {
                    var e, r = t.data,
                        o = r.type,
                        i = r.method,
                        u = r.id,
                        c = r.params;
                    "RPC" === o && i && ((e = n[i]) ? Promise.resolve().then((function() {
                        return e.apply(n, c)
                    })) : Promise.reject("No such method")).then((function(t) {
                        postMessage({
                            type: "RPC",
                            id: u,
                            result: t
                        })
                    })).catch((function(t) {
                        var n = {
                            message: t
                        };
                        t.stack && (n.message = t.message, n.stack = t.stack, n.name = t.name), postMessage({
                            type: "RPC",
                            id: u,
                            error: n
                        })
                    }))
                })), postMessage({
                    type: "RPC",
                    method: "ready"
                })
            },
            3099: function(t) {
                t.exports = function(t) {
                    if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
                    return t
                }
            },
            6077: function(t, n, e) {
                var r = e(111);
                t.exports = function(t) {
                    if (!r(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype");
                    return t
                }
            },
            1223: function(t, n, e) {
                var r = e(5112),
                    o = e(30),
                    i = e(5185),
                    u = r("unscopables"),
                    c = Array.prototype;
                null == c[u] && i(c, u, o(null)), t.exports = function(t) {
                    c[u][t] = !0
                }
            },
            5787: function(t) {
                t.exports = function(t, n, e) {
                    if (!(t instanceof n)) throw TypeError("Incorrect " + (e ? e + " " : "") + "invocation");
                    return t
                }
            },
            9670: function(t, n, e) {
                var r = e(111);
                t.exports = function(t) {
                    if (!r(t)) throw TypeError(String(t) + " is not an object");
                    return t
                }
            },
            1318: function(t, n, e) {
                var r = e(5656),
                    o = e(7466),
                    i = e(1400),
                    u = function(t) {
                        return function(n, e, u) {
                            var c, f = r(n),
                                a = o(f.length),
                                s = i(u, a);
                            if (t && e != e) {
                                for (; a > s;)
                                    if ((c = f[s++]) != c) return !0
                            } else
                                for (; a > s; s++)
                                    if ((t || s in f) && f[s] === e) return t || s || 0;
                            return !t && -1
                        }
                    };
                t.exports = {
                    includes: u(!0),
                    indexOf: u(!1)
                }
            },
            244: function(t, n, e) {
                var r = e(3099);
                t.exports = function(t, n, e) {
                    if (r(t), void 0 === n) return t;
                    switch (e) {
                        case 0:
                            return function() {
                                return t.call(n)
                            };
                        case 1:
                            return function(e) {
                                return t.call(n, e)
                            };
                        case 2:
                            return function(e, r) {
                                return t.call(n, e, r)
                            };
                        case 3:
                            return function(e, r, o) {
                                return t.call(n, e, r, o)
                            }
                    }
                    return function() {
                        return t.apply(n, arguments)
                    }
                }
            },
            3411: function(t, n, e) {
                var r = e(9670);
                t.exports = function(t, n, e, o) {
                    try {
                        return o ? n(r(e)[0], e[1]) : n(e)
                    } catch (n) {
                        var i = t.return;
                        throw void 0 !== i && r(i.call(t)), n
                    }
                }
            },
            7072: function(t, n, e) {
                var r = e(5112)("iterator"),
                    o = !1;
                try {
                    var i = 0,
                        u = {
                            next: function() {
                                return {
                                    done: !!i++
                                }
                            },
                            return: function() {
                                o = !0
                            }
                        };
                    u[r] = function() {
                        return this
                    }, Array.from(u, (function() {
                        throw 2
                    }))
                } catch (t) {}
                t.exports = function(t, n) {
                    if (!n && !o) return !1;
                    var e = !1;
                    try {
                        var i = {};
                        i[r] = function() {
                            return {
                                next: function() {
                                    return {
                                        done: e = !0
                                    }
                                }
                            }
                        }, t(i)
                    } catch (t) {}
                    return e
                }
            },
            4326: function(t) {
                var n = {}.toString;
                t.exports = function(t) {
                    return n.call(t).slice(8, -1)
                }
            },
            648: function(t, n, e) {
                var r = e(4326),
                    o = e(5112)("toStringTag"),
                    i = "Arguments" == r(function() {
                        return arguments
                    }());
                t.exports = function(t) {
                    var n, e, u;
                    return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(e = function(t, n) {
                        try {
                            return t[n]
                        } catch (t) {}
                    }(n = Object(t), o)) ? e : i ? r(n) : "Object" == (u = r(n)) && "function" == typeof n.callee ? "Arguments" : u
                }
            },
            9920: function(t, n, e) {
                var r = e(6656),
                    o = e(3887),
                    i = e(1236),
                    u = e(3070);
                t.exports = function(t, n) {
                    for (var e = o(n), c = u.f, f = i.f, a = 0; a < e.length; a++) {
                        var s = e[a];
                        r(t, s) || c(t, s, f(n, s))
                    }
                }
            },
            8544: function(t, n, e) {
                var r = e(7293);
                t.exports = !r((function() {
                    function t() {}
                    return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
                }))
            },
            4994: function(t, n, e) {
                "use strict";
                var r = e(3383).IteratorPrototype,
                    o = e(30),
                    i = e(9114),
                    u = e(8003),
                    c = e(7497),
                    f = function() {
                        return this
                    };
                t.exports = function(t, n, e) {
                    var a = n + " Iterator";
                    return t.prototype = o(r, {
                        next: i(1, e)
                    }), u(t, a, !1, !0), c[a] = f, t
                }
            },
            9114: function(t) {
                t.exports = function(t, n) {
                    return {
                        enumerable: !(1 & t),
                        configurable: !(2 & t),
                        writable: !(4 & t),
                        value: n
                    }
                }
            },
            654: function(t, n, e) {
                "use strict";
                var r = e(2109),
                    o = e(4994),
                    i = e(9518),
                    u = e(7674),
                    c = e(8003),
                    f = e(5185),
                    a = e(1320),
                    s = e(5112),
                    p = e(1913),
                    l = e(7497),
                    v = e(3383),
                    h = v.IteratorPrototype,
                    y = v.BUGGY_SAFARI_ITERATORS,
                    d = s("iterator"),
                    m = "keys",
                    g = "values",
                    x = "entries",
                    b = function() {
                        return this
                    };
                t.exports = function(t, n, e, s, v, j, w) {
                    o(e, n, s);
                    var O, P, S, T = function(t) {
                            if (t === v && M) return M;
                            if (!y && t in _) return _[t];
                            switch (t) {
                                case m:
                                case g:
                                case x:
                                    return function() {
                                        return new e(this, t)
                                    }
                            }
                            return function() {
                                return new e(this)
                            }
                        },
                        E = n + " Iterator",
                        k = !1,
                        _ = t.prototype,
                        A = _[d] || _["@@iterator"] || v && _[v],
                        M = !y && A || T(v),
                        I = "Array" == n && _.entries || A;
                    if (I && (O = i(I.call(new t)), h !== Object.prototype && O.next && (p || i(O) === h || (u ? u(O, h) : "function" != typeof O[d] && f(O, d, b)), c(O, E, !0, !0), p && (l[E] = b))), v == g && A && A.name !== g && (k = !0, M = function() {
                            return A.call(this)
                        }), p && !w || _[d] === M || f(_, d, M), l[n] = M, v)
                        if (P = {
                                values: T(g),
                                keys: j ? M : T(m),
                                entries: T(x)
                            }, w)
                            for (S in P)(y || k || !(S in _)) && a(_, S, P[S]);
                        else r({
                            target: n,
                            proto: !0,
                            forced: y || k
                        }, P);
                    return P
                }
            },
            9781: function(t, n, e) {
                var r = e(7293);
                t.exports = !r((function() {
                    return 7 != Object.defineProperty({}, "a", {
                        get: function() {
                            return 7
                        }
                    }).a
                }))
            },
            317: function(t, n, e) {
                var r = e(7854),
                    o = e(111),
                    i = r.document,
                    u = o(i) && o(i.createElement);
                t.exports = function(t) {
                    return u ? i.createElement(t) : {}
                }
            },
            748: function(t) {
                t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
            },
            2109: function(t, n, e) {
                var r = e(7854),
                    o = e(1236).f,
                    i = e(5185),
                    u = e(1320),
                    c = e(3505),
                    f = e(9920),
                    a = e(4705);
                t.exports = function(t, n) {
                    var e, s, p, l, v, h = t.target,
                        y = t.global,
                        d = t.stat;
                    if (e = y ? r : d ? r[h] || c(h, {}) : (r[h] || {}).prototype)
                        for (s in n) {
                            if (l = n[s], p = t.noTargetGet ? (v = o(e, s)) && v.value : e[s], !a(y ? s : h + (d ? "." : "#") + s, t.forced) && void 0 !== p) {
                                if (typeof l == typeof p) continue;
                                f(l, p)
                            }(t.sham || p && p.sham) && i(l, "sham", !0), u(e, s, l, t)
                        }
                }
            },
            7293: function(t) {
                t.exports = function(t) {
                    try {
                        return !!t()
                    } catch (t) {
                        return !0
                    }
                }
            },
            2521: function(t, n, e) {
                var r = e(8e3);
                t.exports = r("native-function-to-string", Function.toString)
            },
            5005: function(t, n, e) {
                var r = e(857),
                    o = e(7854),
                    i = function(t) {
                        return "function" == typeof t ? t : void 0
                    };
                t.exports = function(t, n) {
                    return arguments.length < 2 ? i(r[t]) || i(o[t]) : r[t] && r[t][n] || o[t] && o[t][n]
                }
            },
            1246: function(t, n, e) {
                var r = e(648),
                    o = e(7497),
                    i = e(5112)("iterator");
                t.exports = function(t) {
                    if (null != t) return t[i] || t["@@iterator"] || o[r(t)]
                }
            },
            7854: function(t, n, e) {
                var r = "object",
                    o = function(t) {
                        return t && t.Math == Math && t
                    };
                t.exports = o(typeof globalThis == r && globalThis) || o(typeof window == r && window) || o(typeof self == r && self) || o(typeof e.g == r && e.g) || Function("return this")()
            },
            6656: function(t) {
                var n = {}.hasOwnProperty;
                t.exports = function(t, e) {
                    return n.call(t, e)
                }
            },
            3501: function(t) {
                t.exports = {}
            },
            5185: function(t, n, e) {
                var r = e(9781),
                    o = e(3070),
                    i = e(9114);
                t.exports = r ? function(t, n, e) {
                    return o.f(t, n, i(1, e))
                } : function(t, n, e) {
                    return t[n] = e, t
                }
            },
            842: function(t, n, e) {
                var r = e(7854);
                t.exports = function(t, n) {
                    var e = r.console;
                    e && e.error && (1 === arguments.length ? e.error(t) : e.error(t, n))
                }
            },
            490: function(t, n, e) {
                var r = e(5005);
                t.exports = r("document", "documentElement")
            },
            4664: function(t, n, e) {
                var r = e(9781),
                    o = e(7293),
                    i = e(317);
                t.exports = !r && !o((function() {
                    return 7 != Object.defineProperty(i("div"), "a", {
                        get: function() {
                            return 7
                        }
                    }).a
                }))
            },
            8361: function(t, n, e) {
                var r = e(7293),
                    o = e(4326),
                    i = "".split;
                t.exports = r((function() {
                    return !Object("z").propertyIsEnumerable(0)
                })) ? function(t) {
                    return "String" == o(t) ? i.call(t, "") : Object(t)
                } : Object
            },
            9909: function(t, n, e) {
                var r, o, i, u = e(8536),
                    c = e(7854),
                    f = e(111),
                    a = e(5185),
                    s = e(6656),
                    p = e(2829),
                    l = e(3501),
                    v = c.WeakMap;
                if (u) {
                    var h = new v,
                        y = h.get,
                        d = h.has,
                        m = h.set;
                    r = function(t, n) {
                        return m.call(h, t, n), n
                    }, o = function(t) {
                        return y.call(h, t) || {}
                    }, i = function(t) {
                        return d.call(h, t)
                    }
                } else {
                    var g = p("state");
                    l[g] = !0, r = function(t, n) {
                        return a(t, g, n), n
                    }, o = function(t) {
                        return s(t, g) ? t[g] : {}
                    }, i = function(t) {
                        return s(t, g)
                    }
                }
                t.exports = {
                    set: r,
                    get: o,
                    has: i,
                    enforce: function(t) {
                        return i(t) ? o(t) : r(t, {})
                    },
                    getterFor: function(t) {
                        return function(n) {
                            var e;
                            if (!f(n) || (e = o(n)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
                            return e
                        }
                    }
                }
            },
            7659: function(t, n, e) {
                var r = e(5112),
                    o = e(7497),
                    i = r("iterator"),
                    u = Array.prototype;
                t.exports = function(t) {
                    return void 0 !== t && (o.Array === t || u[i] === t)
                }
            },
            4705: function(t, n, e) {
                var r = e(7293),
                    o = /#|\.prototype\./,
                    i = function(t, n) {
                        var e = c[u(t)];
                        return e == a || e != f && ("function" == typeof n ? r(n) : !!n)
                    },
                    u = i.normalize = function(t) {
                        return String(t).replace(o, ".").toLowerCase()
                    },
                    c = i.data = {},
                    f = i.NATIVE = "N",
                    a = i.POLYFILL = "P";
                t.exports = i
            },
            111: function(t) {
                t.exports = function(t) {
                    return "object" == typeof t ? null !== t : "function" == typeof t
                }
            },
            1913: function(t) {
                t.exports = !1
            },
            408: function(t, n, e) {
                var r = e(9670),
                    o = e(7659),
                    i = e(7466),
                    u = e(244),
                    c = e(1246),
                    f = e(3411),
                    a = function(t, n) {
                        this.stopped = t, this.result = n
                    };
                (t.exports = function(t, n, e, s, p) {
                    var l, v, h, y, d, m, g = u(n, e, s ? 2 : 1);
                    if (p) l = t;
                    else {
                        if ("function" != typeof(v = c(t))) throw TypeError("Target is not iterable");
                        if (o(v)) {
                            for (h = 0, y = i(t.length); y > h; h++)
                                if ((d = s ? g(r(m = t[h])[0], m[1]) : g(t[h])) && d instanceof a) return d;
                            return new a(!1)
                        }
                        l = v.call(t)
                    }
                    for (; !(m = l.next()).done;)
                        if ((d = f(l, g, m.value, s)) && d instanceof a) return d;
                    return new a(!1)
                }).stop = function(t) {
                    return new a(!0, t)
                }
            },
            3383: function(t, n, e) {
                "use strict";
                var r, o, i, u = e(9518),
                    c = e(5185),
                    f = e(6656),
                    a = e(5112),
                    s = e(1913),
                    p = a("iterator"),
                    l = !1;
                [].keys && ("next" in (i = [].keys()) ? (o = u(u(i))) !== Object.prototype && (r = o) : l = !0), null == r && (r = {}), s || f(r, p) || c(r, p, (function() {
                    return this
                })), t.exports = {
                    IteratorPrototype: r,
                    BUGGY_SAFARI_ITERATORS: l
                }
            },
            7497: function(t) {
                t.exports = {}
            },
            5948: function(t, n, e) {
                var r, o, i, u, c, f, a, s = e(7854),
                    p = e(1236).f,
                    l = e(4326),
                    v = e(261).set,
                    h = e(227),
                    y = s.MutationObserver || s.WebKitMutationObserver,
                    d = s.process,
                    m = s.Promise,
                    g = "process" == l(d),
                    x = p(s, "queueMicrotask"),
                    b = x && x.value;
                b || (r = function() {
                    var t, n;
                    for (g && (t = d.domain) && t.exit(); o;) {
                        n = o.fn, o = o.next;
                        try {
                            n()
                        } catch (t) {
                            throw o ? u() : i = void 0, t
                        }
                    }
                    i = void 0, t && t.enter()
                }, g ? u = function() {
                    d.nextTick(r)
                } : y && !/(iphone|ipod|ipad).*applewebkit/i.test(h) ? (c = !0, f = document.createTextNode(""), new y(r).observe(f, {
                    characterData: !0
                }), u = function() {
                    f.data = c = !c
                }) : m && m.resolve ? (a = m.resolve(void 0), u = function() {
                    a.then(r)
                }) : u = function() {
                    v.call(s, r)
                }), t.exports = b || function(t) {
                    var n = {
                        fn: t,
                        next: void 0
                    };
                    i && (i.next = n), o || (o = n, u()), i = n
                }
            },
            133: function(t, n, e) {
                var r = e(7293);
                t.exports = !!Object.getOwnPropertySymbols && !r((function() {
                    return !String(Symbol())
                }))
            },
            8536: function(t, n, e) {
                var r = e(7854),
                    o = e(2521),
                    i = r.WeakMap;
                t.exports = "function" == typeof i && /native code/.test(o.call(i))
            },
            8523: function(t, n, e) {
                "use strict";
                var r = e(3099),
                    o = function(t) {
                        var n, e;
                        this.promise = new t((function(t, r) {
                            if (void 0 !== n || void 0 !== e) throw TypeError("Bad Promise constructor");
                            n = t, e = r
                        })), this.resolve = r(n), this.reject = r(e)
                    };
                t.exports.f = function(t) {
                    return new o(t)
                }
            },
            30: function(t, n, e) {
                var r = e(9670),
                    o = e(6048),
                    i = e(748),
                    u = e(3501),
                    c = e(490),
                    f = e(317),
                    a = e(2829)("IE_PROTO"),
                    s = function() {},
                    p = function() {
                        var t, n = f("iframe"),
                            e = i.length;
                        for (n.style.display = "none", c.appendChild(n), n.src = String("javascript:"), (t = n.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), p = t.F; e--;) delete p.prototype[i[e]];
                        return p()
                    };
                t.exports = Object.create || function(t, n) {
                    var e;
                    return null !== t ? (s.prototype = r(t), e = new s, s.prototype = null, e[a] = t) : e = p(), void 0 === n ? e : o(e, n)
                }, u[a] = !0
            },
            6048: function(t, n, e) {
                var r = e(9781),
                    o = e(3070),
                    i = e(9670),
                    u = e(1956);
                t.exports = r ? Object.defineProperties : function(t, n) {
                    i(t);
                    for (var e, r = u(n), c = r.length, f = 0; c > f;) o.f(t, e = r[f++], n[e]);
                    return t
                }
            },
            3070: function(t, n, e) {
                var r = e(9781),
                    o = e(4664),
                    i = e(9670),
                    u = e(7593),
                    c = Object.defineProperty;
                n.f = r ? c : function(t, n, e) {
                    if (i(t), n = u(n, !0), i(e), o) try {
                        return c(t, n, e)
                    } catch (t) {}
                    if ("get" in e || "set" in e) throw TypeError("Accessors not supported");
                    return "value" in e && (t[n] = e.value), t
                }
            },
            1236: function(t, n, e) {
                var r = e(9781),
                    o = e(5296),
                    i = e(9114),
                    u = e(5656),
                    c = e(7593),
                    f = e(6656),
                    a = e(4664),
                    s = Object.getOwnPropertyDescriptor;
                n.f = r ? s : function(t, n) {
                    if (t = u(t), n = c(n, !0), a) try {
                        return s(t, n)
                    } catch (t) {}
                    if (f(t, n)) return i(!o.f.call(t, n), t[n])
                }
            },
            8006: function(t, n, e) {
                var r = e(6324),
                    o = e(748).concat("length", "prototype");
                n.f = Object.getOwnPropertyNames || function(t) {
                    return r(t, o)
                }
            },
            5181: function(t, n) {
                n.f = Object.getOwnPropertySymbols
            },
            9518: function(t, n, e) {
                var r = e(6656),
                    o = e(7908),
                    i = e(2829),
                    u = e(8544),
                    c = i("IE_PROTO"),
                    f = Object.prototype;
                t.exports = u ? Object.getPrototypeOf : function(t) {
                    return t = o(t), r(t, c) ? t[c] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? f : null
                }
            },
            6324: function(t, n, e) {
                var r = e(6656),
                    o = e(5656),
                    i = e(1318).indexOf,
                    u = e(3501);
                t.exports = function(t, n) {
                    var e, c = o(t),
                        f = 0,
                        a = [];
                    for (e in c) !r(u, e) && r(c, e) && a.push(e);
                    for (; n.length > f;) r(c, e = n[f++]) && (~i(a, e) || a.push(e));
                    return a
                }
            },
            1956: function(t, n, e) {
                var r = e(6324),
                    o = e(748);
                t.exports = Object.keys || function(t) {
                    return r(t, o)
                }
            },
            5296: function(t, n) {
                "use strict";
                var e = {}.propertyIsEnumerable,
                    r = Object.getOwnPropertyDescriptor,
                    o = r && !e.call({
                        1: 2
                    }, 1);
                n.f = o ? function(t) {
                    var n = r(this, t);
                    return !!n && n.enumerable
                } : e
            },
            7674: function(t, n, e) {
                var r = e(9670),
                    o = e(6077);
                t.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
                    var t, n = !1,
                        e = {};
                    try {
                        (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(e, []), n = e instanceof Array
                    } catch (t) {}
                    return function(e, i) {
                        return r(e), o(i), n ? t.call(e, i) : e.__proto__ = i, e
                    }
                }() : void 0)
            },
            3887: function(t, n, e) {
                var r = e(5005),
                    o = e(8006),
                    i = e(5181),
                    u = e(9670);
                t.exports = r("Reflect", "ownKeys") || function(t) {
                    var n = o.f(u(t)),
                        e = i.f;
                    return e ? n.concat(e(t)) : n
                }
            },
            857: function(t, n, e) {
                t.exports = e(7854)
            },
            2534: function(t) {
                t.exports = function(t) {
                    try {
                        return {
                            error: !1,
                            value: t()
                        }
                    } catch (t) {
                        return {
                            error: !0,
                            value: t
                        }
                    }
                }
            },
            9478: function(t, n, e) {
                var r = e(9670),
                    o = e(111),
                    i = e(8523);
                t.exports = function(t, n) {
                    if (r(t), o(n) && n.constructor === t) return n;
                    var e = i.f(t);
                    return (0, e.resolve)(n), e.promise
                }
            },
            2248: function(t, n, e) {
                var r = e(1320);
                t.exports = function(t, n, e) {
                    for (var o in n) r(t, o, n[o], e);
                    return t
                }
            },
            1320: function(t, n, e) {
                var r = e(7854),
                    o = e(8e3),
                    i = e(5185),
                    u = e(6656),
                    c = e(3505),
                    f = e(2521),
                    a = e(9909),
                    s = a.get,
                    p = a.enforce,
                    l = String(f).split("toString");
                o("inspectSource", (function(t) {
                    return f.call(t)
                })), (t.exports = function(t, n, e, o) {
                    var f = !!o && !!o.unsafe,
                        a = !!o && !!o.enumerable,
                        s = !!o && !!o.noTargetGet;
                    "function" == typeof e && ("string" != typeof n || u(e, "name") || i(e, "name", n), p(e).source = l.join("string" == typeof n ? n : "")), t !== r ? (f ? !s && t[n] && (a = !0) : delete t[n], a ? t[n] = e : i(t, n, e)) : a ? t[n] = e : c(n, e)
                })(Function.prototype, "toString", (function() {
                    return "function" == typeof this && s(this).source || f.call(this)
                }))
            },
            4488: function(t) {
                t.exports = function(t) {
                    if (null == t) throw TypeError("Can't call method on " + t);
                    return t
                }
            },
            3505: function(t, n, e) {
                var r = e(7854),
                    o = e(5185);
                t.exports = function(t, n) {
                    try {
                        o(r, t, n)
                    } catch (e) {
                        r[t] = n
                    }
                    return n
                }
            },
            6340: function(t, n, e) {
                "use strict";
                var r = e(5005),
                    o = e(3070),
                    i = e(5112),
                    u = e(9781),
                    c = i("species");
                t.exports = function(t) {
                    var n = r(t),
                        e = o.f;
                    u && n && !n[c] && e(n, c, {
                        configurable: !0,
                        get: function() {
                            return this
                        }
                    })
                }
            },
            8003: function(t, n, e) {
                var r = e(3070).f,
                    o = e(6656),
                    i = e(5112)("toStringTag");
                t.exports = function(t, n, e) {
                    t && !o(t = e ? t : t.prototype, i) && r(t, i, {
                        configurable: !0,
                        value: n
                    })
                }
            },
            6707: function(t, n, e) {
                var r = e(9670),
                    o = e(3099),
                    i = e(5112)("species");
                t.exports = function(t, n) {
                    var e, u = r(t).constructor;
                    return void 0 === u || null == (e = r(u)[i]) ? n : o(e)
                }
            },
            261: function(t, n, e) {
                var r, o, i, u = e(7854),
                    c = e(7293),
                    f = e(4326),
                    a = e(244),
                    s = e(490),
                    p = e(317),
                    l = u.location,
                    v = u.setImmediate,
                    h = u.clearImmediate,
                    y = u.process,
                    d = u.MessageChannel,
                    m = u.Dispatch,
                    g = 0,
                    x = {},
                    b = "onreadystatechange",
                    j = function(t) {
                        if (x.hasOwnProperty(t)) {
                            var n = x[t];
                            delete x[t], n()
                        }
                    },
                    w = function(t) {
                        return function() {
                            j(t)
                        }
                    },
                    O = function(t) {
                        j(t.data)
                    },
                    P = function(t) {
                        u.postMessage(t + "", l.protocol + "//" + l.host)
                    };
                v && h || (v = function(t) {
                    for (var n = [], e = 1; arguments.length > e;) n.push(arguments[e++]);
                    return x[++g] = function() {
                        ("function" == typeof t ? t : Function(t)).apply(void 0, n)
                    }, r(g), g
                }, h = function(t) {
                    delete x[t]
                }, "process" == f(y) ? r = function(t) {
                    y.nextTick(w(t))
                } : m && m.now ? r = function(t) {
                    m.now(w(t))
                } : d ? (i = (o = new d).port2, o.port1.onmessage = O, r = a(i.postMessage, i, 1)) : !u.addEventListener || "function" != typeof postMessage || u.importScripts || c(P) ? r = b in p("script") ? function(t) {
                    s.appendChild(p("script")).onreadystatechange = function() {
                        s.removeChild(this), j(t)
                    }
                } : function(t) {
                    setTimeout(w(t), 0)
                } : (r = P, u.addEventListener("message", O, !1))), t.exports = {
                    set: v,
                    clear: h
                }
            },
            1400: function(t, n, e) {
                var r = e(9958),
                    o = Math.max,
                    i = Math.min;
                t.exports = function(t, n) {
                    var e = r(t);
                    return e < 0 ? o(e + n, 0) : i(e, n)
                }
            },
            5656: function(t, n, e) {
                var r = e(8361),
                    o = e(4488);
                t.exports = function(t) {
                    return r(o(t))
                }
            },
            9958: function(t) {
                var n = Math.ceil,
                    e = Math.floor;
                t.exports = function(t) {
                    return isNaN(t = +t) ? 0 : (t > 0 ? e : n)(t)
                }
            },
            7466: function(t, n, e) {
                var r = e(9958),
                    o = Math.min;
                t.exports = function(t) {
                    return t > 0 ? o(r(t), 9007199254740991) : 0
                }
            },
            7908: function(t, n, e) {
                var r = e(4488);
                t.exports = function(t) {
                    return Object(r(t))
                }
            },
            7593: function(t, n, e) {
                var r = e(111);
                t.exports = function(t, n) {
                    if (!r(t)) return t;
                    var e, o;
                    if (n && "function" == typeof(e = t.toString) && !r(o = e.call(t))) return o;
                    if ("function" == typeof(e = t.valueOf) && !r(o = e.call(t))) return o;
                    if (!n && "function" == typeof(e = t.toString) && !r(o = e.call(t))) return o;
                    throw TypeError("Can't convert object to primitive value")
                }
            },
            9711: function(t) {
                var n = 0,
                    e = Math.random();
                t.exports = function(t) {
                    return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++n + e).toString(36)
                }
            },
            227: function(t, n, e) {
                var r = e(5005);
                t.exports = r("navigator", "userAgent") || ""
            },
            5112: function(t, n, e) {
                var r = e(7854),
                    o = e(8e3),
                    i = e(9711),
                    u = e(133),
                    c = r.Symbol,
                    f = o("wks");
                t.exports = function(t) {
                    return f[t] || (f[t] = u && c[t] || (u ? c : i)("Symbol." + t))
                }
            },
            6992: function(t, n, e) {
                "use strict";
                var r = e(5656),
                    o = e(1223),
                    i = e(7497),
                    u = e(9909),
                    c = e(654),
                    f = "Array Iterator",
                    a = u.set,
                    s = u.getterFor(f);
                t.exports = c(Array, "Array", (function(t, n) {
                    a(this, {
                        type: f,
                        target: r(t),
                        index: 0,
                        kind: n
                    })
                }), (function() {
                    var t = s(this),
                        n = t.target,
                        e = t.kind,
                        r = t.index++;
                    return !n || r >= n.length ? (t.target = void 0, {
                        value: void 0,
                        done: !0
                    }) : "keys" == e ? {
                        value: r,
                        done: !1
                    } : "values" == e ? {
                        value: n[r],
                        done: !1
                    } : {
                        value: [r, n[r]],
                        done: !1
                    }
                }), "values"), i.Arguments = i.Array, o("keys"), o("values"), o("entries")
            },
            8674: function(t, n, e) {
                "use strict";
                var r, o, i, u = e(2109),
                    c = e(1913),
                    f = e(7854),
                    a = e(857),
                    s = e(2248),
                    p = e(8003),
                    l = e(6340),
                    v = e(111),
                    h = e(3099),
                    y = e(5787),
                    d = e(4326),
                    m = e(408),
                    g = e(7072),
                    x = e(6707),
                    b = e(261).set,
                    j = e(5948),
                    w = e(9478),
                    O = e(842),
                    P = e(8523),
                    S = e(2534),
                    T = e(227),
                    E = e(9909),
                    k = e(4705),
                    _ = e(5112)("species"),
                    A = "Promise",
                    M = E.get,
                    I = E.set,
                    R = E.getterFor(A),
                    C = f.Promise,
                    F = f.TypeError,
                    L = f.document,
                    N = f.process,
                    D = f.fetch,
                    G = N && N.versions,
                    U = G && G.v8 || "",
                    W = P.f,
                    z = W,
                    B = "process" == d(N),
                    V = !!(L && L.createEvent && f.dispatchEvent),
                    Y = "unhandledrejection",
                    q = k(A, (function() {
                        var t = C.resolve(1),
                            n = function() {},
                            e = (t.constructor = {})[_] = function(t) {
                                t(n, n)
                            };
                        return !((B || "function" == typeof PromiseRejectionEvent) && (!c || t.finally) && t.then(n) instanceof e && 0 !== U.indexOf("6.6") && -1 === T.indexOf("Chrome/66"))
                    })),
                    K = q || !g((function(t) {
                        C.all(t).catch((function() {}))
                    })),
                    H = function(t) {
                        var n;
                        return !(!v(t) || "function" != typeof(n = t.then)) && n
                    },
                    J = function(t, n, e) {
                        if (!n.notified) {
                            n.notified = !0;
                            var r = n.reactions;
                            j((function() {
                                for (var o = n.value, i = 1 == n.state, u = 0; r.length > u;) {
                                    var c, f, a, s = r[u++],
                                        p = i ? s.ok : s.fail,
                                        l = s.resolve,
                                        v = s.reject,
                                        h = s.domain;
                                    try {
                                        p ? (i || (2 === n.rejection && $(t, n), n.rejection = 1), !0 === p ? c = o : (h && h.enter(), c = p(o), h && (h.exit(), a = !0)), c === s.promise ? v(F("Promise-chain cycle")) : (f = H(c)) ? f.call(c, l, v) : l(c)) : v(o)
                                    } catch (t) {
                                        h && !a && h.exit(), v(t)
                                    }
                                }
                                n.reactions = [], n.notified = !1, e && !n.rejection && X(t, n)
                            }))
                        }
                    },
                    Q = function(t, n, e) {
                        var r, o;
                        V ? ((r = L.createEvent("Event")).promise = n, r.reason = e, r.initEvent(t, !1, !0), f.dispatchEvent(r)) : r = {
                            promise: n,
                            reason: e
                        }, (o = f["on" + t]) ? o(r) : t === Y && O("Unhandled promise rejection", e)
                    },
                    X = function(t, n) {
                        b.call(f, (function() {
                            var e, r = n.value;
                            if (Z(n) && (e = S((function() {
                                    B ? N.emit("unhandledRejection", r, t) : Q(Y, t, r)
                                })), n.rejection = B || Z(n) ? 2 : 1, e.error)) throw e.value
                        }))
                    },
                    Z = function(t) {
                        return 1 !== t.rejection && !t.parent
                    },
                    $ = function(t, n) {
                        b.call(f, (function() {
                            B ? N.emit("rejectionHandled", t) : Q("rejectionhandled", t, n.value)
                        }))
                    },
                    tt = function(t, n, e, r) {
                        return function(o) {
                            t(n, e, o, r)
                        }
                    },
                    nt = function(t, n, e, r) {
                        n.done || (n.done = !0, r && (n = r), n.value = e, n.state = 2, J(t, n, !0))
                    },
                    et = function(t, n, e, r) {
                        if (!n.done) {
                            n.done = !0, r && (n = r);
                            try {
                                if (t === e) throw F("Promise can't be resolved itself");
                                var o = H(e);
                                o ? j((function() {
                                    var r = {
                                        done: !1
                                    };
                                    try {
                                        o.call(e, tt(et, t, r, n), tt(nt, t, r, n))
                                    } catch (e) {
                                        nt(t, r, e, n)
                                    }
                                })) : (n.value = e, n.state = 1, J(t, n, !1))
                            } catch (e) {
                                nt(t, {
                                    done: !1
                                }, e, n)
                            }
                        }
                    };
                q && (C = function(t) {
                    y(this, C, A), h(t), r.call(this);
                    var n = M(this);
                    try {
                        t(tt(et, this, n), tt(nt, this, n))
                    } catch (t) {
                        nt(this, n, t)
                    }
                }, (r = function(t) {
                    I(this, {
                        type: A,
                        done: !1,
                        notified: !1,
                        parent: !1,
                        reactions: [],
                        rejection: !1,
                        state: 0,
                        value: void 0
                    })
                }).prototype = s(C.prototype, {
                    then: function(t, n) {
                        var e = R(this),
                            r = W(x(this, C));
                        return r.ok = "function" != typeof t || t, r.fail = "function" == typeof n && n, r.domain = B ? N.domain : void 0, e.parent = !0, e.reactions.push(r), 0 != e.state && J(this, e, !1), r.promise
                    },
                    catch: function(t) {
                        return this.then(void 0, t)
                    }
                }), o = function() {
                    var t = new r,
                        n = M(t);
                    this.promise = t, this.resolve = tt(et, t, n), this.reject = tt(nt, t, n)
                }, P.f = W = function(t) {
                    return t === C || t === i ? new o(t) : z(t)
                }, c || "function" != typeof D || u({
                    global: !0,
                    enumerable: !0,
                    forced: !0
                }, {
                    fetch: function(t) {
                        return w(C, D.apply(f, arguments))
                    }
                })), u({
                    global: !0,
                    wrap: !0,
                    forced: q
                }, {
                    Promise: C
                }), p(C, A, !1, !0), l(A), i = a.Promise, u({
                    target: A,
                    stat: !0,
                    forced: q
                }, {
                    reject: function(t) {
                        var n = W(this);
                        return n.reject.call(void 0, t), n.promise
                    }
                }), u({
                    target: A,
                    stat: !0,
                    forced: c || q
                }, {
                    resolve: function(t) {
                        return w(c && this === i ? C : this, t)
                    }
                }), u({
                    target: A,
                    stat: !0,
                    forced: K
                }, {
                    all: function(t) {
                        var n = this,
                            e = W(n),
                            r = e.resolve,
                            o = e.reject,
                            i = S((function() {
                                var e = h(n.resolve),
                                    i = [],
                                    u = 0,
                                    c = 1;
                                m(t, (function(t) {
                                    var f = u++,
                                        a = !1;
                                    i.push(void 0), c++, e.call(n, t).then((function(t) {
                                        a || (a = !0, i[f] = t, --c || r(i))
                                    }), o)
                                })), --c || r(i)
                            }));
                        return i.error && o(i.value), e.promise
                    },
                    race: function(t) {
                        var n = this,
                            e = W(n),
                            r = e.reject,
                            o = S((function() {
                                var o = h(n.resolve);
                                m(t, (function(t) {
                                    o.call(n, t).then(e.resolve, r)
                                }))
                            }));
                        return o.error && r(o.value), e.promise
                    }
                })
            }
        },
        n = {};

    function e(r) {
        if (n[r]) return n[r].exports;
        var o = n[r] = {
            exports: {}
        };
        return t[r].call(o.exports, o, o.exports, e), o.exports
    }
    e.m = t, e.n = function(t) {
            var n = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return e.d(n, {
                a: n
            }), n
        }, e.d = function(t, n) {
            for (var r in n) e.o(n, r) && !e.o(t, r) && Object.defineProperty(t, r, {
                enumerable: !0,
                get: n[r]
            })
        }, e.f = {}, e.e = function(t) {
            return Promise.all(Object.keys(e.f).reduce((function(n, r) {
                return e.f[r](t, n), n
            }), []))
        }, e.u = function(t) {
            return t + "." + e.h() + ".worker.js"
        }, e.h = function() {
            return "32ad9ae92adc1a90fc78"
        }, e.g = function() {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (t) {
                if ("object" == typeof window) return window
            }
        }(), e.o = function(t, n) {
            return Object.prototype.hasOwnProperty.call(t, n)
        }, e.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, e.p = "https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/",
        function() {
            var t = {
                179: 1
            };
            e.f.i = function(n, r) {
                t[n] || importScripts("" + e.u(n))
            };
            var n = ("undefined" != typeof self ? self : this).webpackChunkshopee_pc = ("undefined" != typeof self ? self : this).webpackChunkshopee_pc || [],
                r = n.push.bind(n);
            n.push = function(n) {
                var o = n[0],
                    i = n[1],
                    u = n[2];
                for (var c in i) e.o(i, c) && (e.m[c] = i[c]);
                for (u && u(e); o.length;) t[o.pop()] = 1;
                r(n)
            }
        }(), e(8865)
}();
//# sourceMappingURL=https://shopee.sg/assets/32ad9ae92adc1a90fc78.worker.js.map