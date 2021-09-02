(("undefined" != typeof self ? self : this).webpackChunkshopee_pc = ("undefined" != typeof self ? self : this).webpackChunkshopee_pc || []).push([
    [4193], {
        15348: function(e, t, n) {
            "use strict";
            n.d(t, {
                q: function() {
                    return q
                },
                U: function() {
                    return G
                }
            });
            var r = n(27378),
                a = n(79308),
                u = n(15263),
                s = n(97953),
                i = n(44695),
                o = s.Ml.fetchInfo;

            function c(e) {
                return o("" + i.bp + e)
            }
            var l, f, m = n(92027),
                p = n(3792),
                d = n(18363),
                E = n(69068),
                v = (0, E.n)("FETCH_TOP_PRODUCT_CLUSTERS"),
                y = (0, E.n)("FETCH_TOP_PRODUCT_CLUSTER_ITEMS"),
                S = "SET_TOP_PRODUCT_CLUSTERS";
            ! function(e) {
                e.BEST_SELLING = "best_selling_sec", e.BEST_PRICE = "best_price_sec"
            }(f || (f = {}));
            var g = ((l = {})[i.Hk.SALES] = f.BEST_SELLING, l[i.Hk.PRICE] = f.BEST_PRICE, l);

            function _(e) {
                var t = ((0, p.Z)(e, ["data", "sections"]) || []).find((function(e) {
                        return e.key === f.BEST_SELLING
                    })),
                    n = (0, p.Z)(t, ["index"]) || [],
                    r = (0, p.Z)(t, ["data", "top_product"]) || [];
                return n.map((function(e) {
                    return r.find((function(t) {
                        return t.key === e.key
                    }))
                })).filter(Boolean).map((function(e) {
                    e.list;
                    return function(e, t) {
                        if (null == e) return {};
                        var n, r, a = {},
                            u = Object.keys(e);
                        for (r = 0; r < u.length; r++) n = u[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                        return a
                    }(e, ["list"])
                }))
            }
            var I = {
                total: 0,
                key: "",
                index: [],
                data: {
                    item: []
                }
            };

            function T(e, t, n) {
                var r = ((0, p.Z)(e, ["data", "sections"]) || []).find((function(e) {
                        return e.key === t
                    })),
                    a = ((0, p.Z)(r, ["data", "top_product"]) || []).find((function(e) {
                        return e.label === n
                    })),
                    u = (0, p.Z)(a, ["list"]) || I,
                    s = (0, p.Z)(u, ["index"]) || [],
                    i = (0, p.Z)(u, ["data", "item"]) || [],
                    o = s.map((function(e) {
                        return i.find((function(t) {
                            return t.key === e.key
                        }))
                    })).filter(Boolean);
                return {
                    total: u.total,
                    data: o
                }
            }

            function h(e) {
                return function(t) {
                    var n = e(t),
                        r = Date.now();
                    return !n || n.progress === d.Z.REQ || n.last_update_time + 6e4 > r
                }
            }

            function Z(e, t) {
                var n = t.section,
                    r = t.intentionid;
                return function(t) {
                    var a = e(t);
                    if (!a || a.progress !== d.Z.OK) return !0;
                    var u = ((0, p.Z)(a, ["data", n, "clusterItems"]) || {})[r];
                    return !!u && u.progress === d.Z.REQ
                }
            }

            function C(e) {
                var t = e.limit,
                    n = void 0 === t ? 20 : t,
                    r = e.getStore,
                    a = e.onFinish,
                    s = e.shouldSkipCall,
                    i = (0, m.Wc)({
                        bundle: "top_products_homepage",
                        limit: n
                    });
                return (0, u.Z)({
                    apiCall: function() {
                        return c(i)
                    },
                    actions: [function() {
                        return {
                            type: v.REQUESTED
                        }
                    }, function(e, t) {
                        return {
                            type: v.SUCCESS,
                            payload: {
                                clusters: _(t)
                            }
                        }
                    }, function(e, t) {
                        return {
                            type: v.FAILED,
                            payload: {
                                error: t.error
                            }
                        }
                    }],
                    shouldSkipCall: r && !s ? h(r) : s,
                    onFinish: a
                })
            }

            function R(e) {
                var t = e.sortType,
                    n = e.intentionid,
                    r = e.itemOffset,
                    a = e.itemLimit,
                    s = e.getStore,
                    i = e.onFinish,
                    o = e.shouldSkipCall,
                    l = g[t],
                    f = {
                        bundle: "top_products_landing_page",
                        section: l,
                        intentionid: n,
                        limit: 20
                    };
                r && (f.l2_offset = r || 0), a && (f.l2_limit = a || 30);
                var p = (0, m.Wc)(f);
                return (0, u.Z)({
                    apiCall: function() {
                        return c(p)
                    },
                    actions: [function() {
                        return {
                            type: y.REQUESTED,
                            payload: {
                                type: l,
                                intentionid: n
                            }
                        }
                    }, function(e, t) {
                        return {
                            type: y.SUCCESS,
                            payload: {
                                type: l,
                                intentionid: n,
                                clusterItems: T(t, l, n)
                            }
                        }
                    }, function(e, t) {
                        return {
                            type: y.FAILED,
                            payload: {
                                type: l,
                                intentionid: n,
                                error: t.error
                            }
                        }
                    }],
                    shouldSkipCall: s && !o ? Z(s, {
                        section: l,
                        intentionid: n
                    }) : o,
                    onFinish: i
                })
            }

            function k(e, t) {
                return {
                    type: S,
                    payload: {
                        clusters: e,
                        lastUpdateTime: t
                    }
                }
            }
            var N, P = n(14081);

            function b() {
                return (b = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var O = {
                    last_update_time: 0,
                    progress: d.Z.INIT,
                    data: {}
                },
                L = {
                    clusters: [],
                    clusterItems: {}
                },
                U = {
                    progress: d.Z.INIT,
                    total: 0,
                    data: []
                },
                x = (0, P.Z)(((N = {})[v.REQUESTED] = function(e) {
                    return b({}, e, {
                        progress: d.Z.REQ
                    })
                }, N[v.SUCCESS] = function(e, t) {
                    var n, r = t.payload.clusters.map((function(e) {
                        return b({}, e, {
                            progress: d.Z.INIT
                        })
                    }));
                    return b({}, e, {
                        progress: d.Z.OK,
                        last_update_time: Date.now(),
                        data: (n = {}, n[f.BEST_SELLING] = {
                            clusters: r,
                            clusterItems: {}
                        }, n[f.BEST_PRICE] = {
                            clusters: r,
                            clusterItems: {}
                        }, n)
                    })
                }, N[v.FAILED] = function(e, t) {
                    var n = t.payload.error;
                    return b({}, e, {
                        progress: d.Z.ERR,
                        error: n
                    })
                }, N[y.REQUESTED] = function(e, t) {
                    var n, r, a = t.payload,
                        u = a.type,
                        s = a.intentionid,
                        i = (0, p.Z)(e, ["data", u]) || L,
                        o = (0, p.Z)(i, ["clusterItems", s]) || U;
                    return b({}, e, {
                        data: b({}, e.data, (r = {}, r[u] = b({}, i, {
                            clusterItems: b({}, i.clusterItems, (n = {}, n[s] = b({}, o, {
                                progress: d.Z.REQ
                            }), n))
                        }), r))
                    })
                }, N[y.SUCCESS] = function(e, t) {
                    var n, r, a = t.payload,
                        u = a.type,
                        s = a.intentionid,
                        i = a.clusterItems,
                        o = (0, p.Z)(e, ["data", u]) || L;
                    return b({}, e, {
                        data: b({}, e.data, (r = {}, r[u] = b({}, o, {
                            clusterItems: b({}, o.clusterItems, (n = {}, n[s] = b({}, i, {
                                progress: d.Z.OK
                            }), n))
                        }), r))
                    })
                }, N[y.FAILED] = function(e, t) {
                    var n, r, a = t.payload,
                        u = a.type,
                        s = a.intentionid,
                        i = a.error,
                        o = (0, p.Z)(e, ["data", u]) || L,
                        c = (0, p.Z)(o, ["clusterItems", s]) || U;
                    return b({}, e, {
                        data: b({}, e.data, (r = {}, r[u] = b({}, o, {
                            clusterItems: b({}, o.clusterItems, (n = {}, n[s] = b({}, c, {
                                progress: d.Z.ERR,
                                error: i
                            }), n))
                        }), r))
                    })
                }, N.SET_TOP_PRODUCT_CLUSTERS = function(e, t) {
                    var n, r = t.payload,
                        a = r.clusters,
                        u = r.lastUpdateTime;
                    return b({}, e, {
                        progress: d.Z.OK,
                        last_update_time: u,
                        data: (n = {}, n[f.BEST_SELLING] = {
                            clusters: a,
                            clusterItems: {}
                        }, n[f.BEST_PRICE] = {
                            clusters: a,
                            clusterItems: {}
                        }, n)
                    })
                }, N), O);

            function w(e, t) {
                var n = t.sortType,
                    r = void 0 === n ? i.Hk.SALES : n,
                    a = g[r];
                return e && (0, p.Z)(e, ["data", a, "clusters"])
            }

            function D(e) {
                return e ? e.progress : d.Z.INIT
            }

            function H(e, t) {
                var n = t.sortType,
                    r = t.intentionid,
                    a = g[n];
                return e ? (0, p.Z)(e, ["data", a, "clusterItems", r]) : null
            }
            var A = [];
            var B = n(98345),
                Q = n(30085),
                F = n(5751);

            function K(e, t, n, r, a, u, s) {
                try {
                    var i = e[u](s),
                        o = i.value
                } catch (e) {
                    return void n(e)
                }
                i.done ? t(o) : Promise.resolve(o).then(r, a)
            }

            function W(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, a) {
                        var u = e.apply(t, n);

                        function s(e) {
                            K(u, r, a, s, i, "next", e)
                        }

                        function i(e) {
                            K(u, r, a, s, i, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }
            var j = F.X.isSupported();

            function q(e) {
                var t = r.useContext(Q.InjectReducerContext).injectAsyncReducer,
                    n = (0, a.useDispatch)();
                (0, B.u)((function() {
                    var n;
                    t(((n = {})[e] = x, n))
                }), []);
                var u = r.useCallback((function(t) {
                    return t[e]
                }), [e]);
                r.useEffect((function() {
                    if (j) {
                        var e = F.X.get(i.nO);
                        e && n(k(e.clusters, e.lastUpdateTime))
                    }
                }), [n]), (0, B.u)(W(regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, n(C({
                                    getStore: u
                                }));
                            case 2:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))), []);
                var s = (0, a.useSelector)(u),
                    o = D(s),
                    c = function(e) {
                        return e ? e.last_update_time : 0
                    }(s),
                    l = w(s, {
                        sortType: i.Hk.SALES
                    });
                return r.useEffect((function() {
                    j && l && "number" == typeof c && F.X.set(i.nO, {
                        clusters: l,
                        lastUpdateTime: c
                    })
                }), [l, c]), {
                    progress: o,
                    clusters: l
                }
            }

            function G(e) {
                var t = e.reduxKey,
                    n = e.sortType,
                    u = e.clusterId,
                    s = r.useCallback((function(e) {
                        return e[t]
                    }), [t]),
                    o = (0, a.useDispatch)(),
                    c = r.useContext(Q.InjectReducerContext).injectAsyncReducer;
                (0, B.u)((function() {
                    var e;
                    c(((e = {})[t] = x, e))
                }), []), r.useEffect((function() {
                    if (j) {
                        var e = F.X.get(i.nO);
                        e && o(k(e.clusters, e.lastUpdateTime))
                    }
                }), [o]);
                var l = (0, a.useSelector)(s),
                    f = {
                        sortType: n,
                        intentionid: u || ""
                    },
                    m = D(l),
                    p = w(l, {
                        sortType: n
                    }),
                    E = function(e, t) {
                        var n = H(e, t);
                        return n ? n.progress : d.Z.INIT
                    }(l, f),
                    v = function(e, t) {
                        var n = H(e, t);
                        return n ? n.total : 0
                    }(l, f),
                    y = function(e, t) {
                        var n = H(e, t);
                        return n ? n.data : A
                    }(l, f);
                return (0, B.u)(W(regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (m !== d.Z.INIT && m !== d.Z.ERR) {
                                    e.next = 3;
                                    break
                                }
                                return e.next = 3, o(C({
                                    getStore: s,
                                    shouldSkipCall: J(s)
                                }));
                            case 3:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))), [m, s]), (0, B.u)(W(regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (!u) {
                                    e.next = 3;
                                    break
                                }
                                return e.next = 3, o(R({
                                    sortType: n,
                                    intentionid: u,
                                    getStore: s
                                }));
                            case 3:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))), [u, m, s, n]), {
                    clustersProgress: m,
                    clusters: p,
                    itemsProgress: E,
                    itemsTotal: v,
                    itemsData: y
                }
            }

            function J(e) {
                return function(t) {
                    return D(e(t)) === d.Z.OK
                }
            }
        },
        44695: function(e, t, n) {
            "use strict";
            var r;
            n.d(t, {
                    Sh: function() {
                        return u
                    },
                    nO: function() {
                        return s
                    },
                    Hk: function() {
                        return r
                    },
                    bp: function() {
                        return a
                    },
                    Uw: function() {
                        return i
                    }
                }),
                function(e) {
                    e[e.SALES = 0] = "SALES", e[e.PRICE = 1] = "PRICE"
                }(r || (r = {}));
            var a = "/api/v4/recommend/recommend",
                u = 20,
                s = "@shopee/rcmd-top-product-clusters";

            function i(e) {
                return e ? e.filter((function(e) {
                    return e.name && Array.isArray(e.images) && e.images.length > 0
                })) : []
            }
        },
        25391: function(e, t, n) {
            "use strict";
            n.d(t, {
                a: function() {
                    return d
                },
                Z: function() {
                    return E
                }
            });
            var r = n(27378),
                a = n.n(r),
                u = n(60042),
                s = n.n(u),
                i = "_1UlW3k",
                o = "vaO6OQ",
                c = "_28NYkl",
                l = "_2ouwz7",
                f = "_3c4s9s",
                m = "_2Uy-3h",
                p = "_2VqtPi",
                d = 4,
                E = function(e) {
                    var t, n = e.rank,
                        r = e.isNumberOnly,
                        u = e.className,
                        E = null !== n && n >= d;
                    return a().createElement("div", {
                        className: s()(i, u, (t = {}, t[o] = 1 === n, t[c] = 2 === n, t[f] = 3 === n, t[p] = E, t[m] = null === n, t[l] = r, t))
                    }, E && n)
                }
        },
        88317: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return $
                }
            });
            var r = n(27378),
                a = n(84691),
                u = n(62399),
                s = n(23287),
                i = n(32666),
                o = n(22333),
                c = n(66156),
                l = n(70590),
                f = n(3140),
                m = n(3811),
                p = n(3792),
                d = "_3b6QpT",
                E = "_1-LyPB",
                v = function(e) {
                    var t = e.children,
                        n = e.clusterId,
                        a = e.onPageChange;
                    return r.createElement(o.ZP, {
                        targetType: "HomeTopProducts"
                    }, r.createElement(f.Z.Consumer, null, (function(e) {
                        var u = e.customHeader;
                        return r.createElement(i.S, {
                            headerText: r.createElement("span", {
                                className: E
                            }, (0, s.t)("label_top_products")),
                            headerButton: {
                                text: (0, s.t)("rcmd_label_see_all"),
                                linkTo: m.Ls.getUrl({
                                    catId: n
                                })
                            },
                            simpleVersion: !0,
                            classNames: d,
                            customHeader: (0, p.Z)(u, [l.u.TOP_PRODUCTS])
                        }, r.createElement(c.ZP, {
                            autoPlay: !1,
                            looping: !1,
                            indexType: c.QV.NONE,
                            arrowDisplayType: c.sP.SHOW_ALWAYS,
                            onChangeIndex: a,
                            ratio: 1200 / 290
                        }, t))
                    })))
                },
                y = n(94184),
                S = n.n(y),
                g = n(25391),
                _ = n(13384),
                I = "_2j61U1",
                T = "qJTSM5",
                h = "_30vIDo",
                Z = "GqgJnR",
                C = "b5h6nF",
                R = "_2wthtC",
                k = "_1qoDIm",
                N = function(e) {
                    var t = e.className;
                    return r.createElement("div", {
                        className: S()(I, t)
                    }, r.createElement("div", {
                        className: T
                    }, r.createElement(g.Z, {
                        rank: null,
                        className: k
                    }), r.createElement(_.p, {
                        src: "",
                        className: Z,
                        wrapperClassName: h,
                        useImgTag: !0
                    })), r.createElement("div", {
                        className: R
                    }, " "))
                },
                P = "_3cAq1q",
                b = "_2xaiMR",
                O = new Array(6).fill();

            function L() {}
            var U = function() {
                    return r.createElement(v, {
                        onPageChange: L
                    }, [r.createElement("div", {
                        key: 1,
                        className: P
                    }, O.map((function(e, t) {
                        return r.createElement(N, {
                            key: t,
                            className: b
                        })
                    })))])
                },
                x = n(73727),
                w = n(53650),
                D = n(90858),
                H = n(99096),
                A = n(74301),
                B = n(95639),
                Q = n(25846),
                F = function(e) {
                    var t = (0, w.Z)("HomeTopProductsItem", e),
                        n = (0, D.Z)("HomeTopProductsItem", e),
                        a = e.clusterKey,
                        u = e.name,
                        i = e.monthlySales,
                        o = e.className,
                        c = (0, H.topProducts)(a),
                        l = e.images || [],
                        f = e.imageIndex && l.length > 0 ? e.imageIndex % l.length : 0;
                    return r.createElement(x.Link, {
                        to: c,
                        className: S()(I, o),
                        innerRef: t,
                        onClick: n
                    }, r.createElement("div", {
                        className: T
                    }, r.createElement(g.Z, {
                        rank: null,
                        className: k
                    }), r.createElement(_.p, {
                        src: (0, A.Jn)(l[f], !0),
                        className: Z,
                        wrapperClassName: h,
                        imageServerWidthOperator: 180,
                        useImgTag: !0
                    }), !!i && r.createElement("div", {
                        className: C
                    }, (0, s.t)("label_monthly_sales", {
                        count: (0, Q.N)(B.aH, i)
                    }))), r.createElement("div", {
                        className: R
                    }, u))
                },
                K = n(15348),
                W = n(44695);
            var j = n(5751),
                q = n(18363),
                G = n(41525),
                J = [q.Z.INIT, q.Z.REQ],
                M = 6,
                X = j.y.isSupported(),
                V = "@shopee/rcmd-top-product-image-index";

            function Y(e) {
                X && j.y.set(V, e)
            }
            var z = function() {
                    var e = (0, K.q)(G.D4),
                        t = e.progress,
                        n = e.clusters;
                    r.useEffect((function() {
                        ! function() {
                            if (!X) return 0;
                            var e = j.y.get(V);
                            Y(void 0 === e ? 0 : Number(e) + 1)
                        }()
                    }), []);
                    var a = r.useMemo((function() {
                        var e = function(e) {
                            if (e.length < M) return null;
                            var t = [].concat(e);
                            t.length % M != 0 && (t = function(e, t) {
                                if (t <= 0 || e.length % t == 0) return e;
                                var n = e.length,
                                    r = n - n % t,
                                    a = e.slice(0, r),
                                    u = e.slice(n - t, n);
                                return a.concat(u)
                            }(t, M));
                            return t
                        }((0, W.Uw)(n));
                        return e && function(e, t) {
                            for (var n = [].concat(e), r = []; n.length > 0;) r.push(n.splice(0, t));
                            return r
                        }(e, M)
                    }), [n]);
                    if (J.includes(t)) return r.createElement(U, null);
                    if (!a) return r.createElement("div", null);
                    var u = (0, p.Z)(a, [0, 0, "label"]) || void 0,
                        s = function() {
                            if (!X) return 0;
                            var e = j.y.get(V);
                            return e ? Number(e) : 0
                        }();
                    return r.createElement(v, {
                        clusterId: u
                    }, a.map((function(e, t) {
                        return r.createElement("div", {
                            key: "tp-" + t,
                            className: P
                        }, e.map((function(e, n) {
                            return r.createElement(o.ZP, {
                                key: e.label || n,
                                targetData: {
                                    index: t * M + n,
                                    info: e.info
                                }
                            }, r.createElement(F, {
                                clusterKey: e.label || "",
                                name: e.name || "",
                                monthlySales: e.count || 0,
                                images: e.images,
                                imageIndex: s,
                                className: b
                            }))
                        })))
                    })))
                },
                $ = (0, a.compose)(u.Pf, (0, s.withI18nCollections)([119, 120]))((function() {
                    return r.createElement(r.Suspense, {
                        fallback: r.createElement(U, null)
                    }, r.createElement(z, null))
                }))
        },
        95639: function(e, t, n) {
            "use strict";
            n.d(t, {
                rH: function() {
                    return r.rH
                },
                JL: function() {
                    return r.JL
                },
                bW: function() {
                    return r.bW
                },
                aH: function() {
                    return r.aH
                },
                JP: function() {
                    return a
                }
            });
            var r = n(17613),
                a = function(e) {
                    return (0, r.Zf)(e, {
                        symbol: ""
                    })
                }
        },
        25846: function(e, t, n) {
            "use strict";
            n.d(t, {
                N: function() {
                    return u
                }
            });
            var r = (0, n(6976).Kd)();
            var a = 1e3;
            switch (r) {
                case "TW":
                    a = 1e4;
                    break;
                default:
                    a = 1e3
            }

            function u(e, t, n) {
                return void 0 === n && (n = a), e(t, 0) + (t >= n ? "+" : "")
            }
        }
    }
]);
//# sourceMappingURL=https://shopee.sg/assets/HomeTopProducts.0affcad175aca334a4f5.js.map