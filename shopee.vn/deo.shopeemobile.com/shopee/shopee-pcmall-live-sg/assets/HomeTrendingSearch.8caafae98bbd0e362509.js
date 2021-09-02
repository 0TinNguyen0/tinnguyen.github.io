(("undefined" != typeof self ? self : this).webpackChunkshopee_pc = ("undefined" != typeof self ? self : this).webpackChunkshopee_pc || []).push([
    [2034], {
        19725: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return Ne
                }
            });
            var r = n(27378),
                a = n.n(r),
                o = n(79308),
                s = n(84691),
                c = n(49101),
                i = n(22333);

            function u() {
                return (u = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var l = function(e) {
                    return a().createElement("svg", u({
                        viewBox: "0 0 12 15"
                    }, e), a().createElement("path", {
                        d: "M12 7.51268255c0-1.71021918-.7226562-3.30538371-1.9648437-4.43447938-.20507817-.18525749-.52148442-.16965686-.7070313.03315134-.18554687.20475828-.16992188.52067106.03320313.70592856C10.3984375 4.75722109 11 6.08717488 11 7.51268255c0 2.59360495-1.98242187 4.72699125-4.515625 4.96880095l.68164063-.7878318c.1796875-.2086585.15625-.5245713-.05273438-.7039785-.20898438-.1794073-.52539062-.1560063-.70507813.0526521l-1.49609375 1.7336201c-.18164062.2106086-.15625.5284714.05664063.7078787l1.65429688 1.3982065c.21093749.1774572.52539062.1521062.70507812-.0585023.17773438-.2106085.15234375-.5245712-.05859375-.7039785l-.75195313-.6357257C9.58789062 13.2205634 12 10.6484094 12 7.51268255zM2.80273438 11.3523879C1.66796875 10.4085497 1 9.0161934 1 7.51463263c0-2.75741154 2.23828125-4.99220194 5-4.99220194h.01367188l-.7734375.75078037c-.19726563.19305781-.203125.50897059-.00976563.70592855.19335938.19695797.50976563.20280821.70703125.0097504l1.64257813-1.59516453c.19921875-.19305781.20117187-.51287074.00585937-.70982871L6.06054688.14723461c-.1953125-.19500789-.51171875-.19695797-.70703125-.00195008C5.15820313.34029242 5.15625.6562052 5.3515625.85121309l.66992188.67472729H6c-3.31445312 0-6 2.68135846-6 5.99064232 0 1.8018729.80273438 3.4750406 2.16210938 4.6060863.21289062.1755071.52734375.148206.70507812-.0643526.17773438-.2164587.1484375-.5304214-.06445312-.7059285z",
                        fillRule: "nonzero"
                    }))
                },
                f = (0, n(53713).Z)({
                    Icon: l,
                    iconClassNames: ["icon-refresh"]
                }),
                d = n(3792),
                p = n(23287),
                m = n(3140),
                h = n(70590),
                v = "_2V6exT",
                _ = {
                    linkTo: "#",
                    text: ""
                },
                E = function(e) {
                    var t = e.children,
                        n = e.showHeaderButton,
                        a = e.onChangeClick;
                    return r.createElement(i.ZP, {
                        targetType: "HomePersonalizedTrendingSearch"
                    }, r.createElement(m.Z.Consumer, null, (function(e) {
                        var o = e.customHeader;
                        return r.createElement(c.S, {
                            headerText: r.createElement("span", null, (0, p.t)("label_trending_searches")),
                            headerButton: n ? _ : null,
                            onHeaderButtonClick: a,
                            customButtonContent: r.createElement(r.Fragment, null, r.createElement(f, null), " ", (0, p.t)("label_trending_search_change")),
                            simpleVersion: !0,
                            hasNoNavigation: !0,
                            classNames: v,
                            customHeader: (0, d.Z)(o, [h.u.TRENDING_SEARCH])
                        }, t)
                    })))
                },
                y = n(94184),
                g = n.n(y),
                S = n(13384),
                N = "pGTv_Y",
                C = "_2qZOjQ",
                k = "_29Ff_c",
                w = "_3K_oGe",
                R = "_2OKBb0",
                b = "_3FmA9R",
                H = "V53Muj",
                I = function(e) {
                    var t = e.className;
                    return r.createElement("div", {
                        className: g()(N, t || "")
                    }, r.createElement("div", {
                        className: k
                    }, r.createElement("div", {
                        className: g()(w, "skeleton skeleton--medium")
                    }), r.createElement("div", {
                        className: g()(R, "skeleton skeleton--medium")
                    })), r.createElement(S.p, {
                        className: b,
                        wrapperClassName: H,
                        src: ""
                    }))
                };
            var T = function e(t) {
                    return (t = Math.round(t)) < 0 ? -1 : 0 === t ? 1 : t * e(t - 1)
                }(3) - 1,
                Z = "_3I4gP6",
                x = new Array(5).fill(),
                O = function() {
                    return r.createElement(E, {
                        showHeaderButton: !1
                    }, x.map((function(e, t) {
                        return r.createElement(I, {
                            key: t,
                            className: Z
                        })
                    })))
                },
                A = n(73727),
                D = n(95639),
                j = n(99096),
                F = n(74301),
                M = n(53650),
                L = n(90858),
                P = n(25846),
                B = "HomePersonalizedTrendingSearchItem",
                G = function(e) {
                    var t = e.keyword,
                        n = e.count,
                        a = e.image,
                        o = e.className,
                        s = (0, M.Z)(B, e),
                        c = (0, L.Z)(B, e),
                        i = (0, j.searchKeyword)(t);
                    return r.createElement(A.Link, {
                        to: i,
                        className: g()(N, o || ""),
                        onClick: c,
                        innerRef: s
                    }, r.createElement("div", {
                        className: C
                    }, r.createElement("div", {
                        className: k
                    }, r.createElement("div", {
                        className: w
                    }, t), r.createElement("div", {
                        className: R
                    }, (0, p.t)("label_n_products_plural", {
                        count: (0, P.N)(D.aH, n || 0)
                    })))), r.createElement(S.p, {
                        className: b,
                        wrapperClassName: H,
                        src: (0, F.Jn)(a),
                        imageServerWidthOperator: 320
                    }))
                };

            function K() {
                return (K = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function Q(e, t) {
                return (Q = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }
            var U, z, W = function(e) {
                    return function(t) {
                        var n, a;

                        function o(e) {
                            var n;
                            return (n = t.call(this, e) || this).state = {
                                isShuffled: !1
                            }, n.onShuffle = n.onShuffle.bind(function(e) {
                                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return e
                            }(n)), n
                        }
                        a = t, (n = o).prototype = Object.create(a.prototype), n.prototype.constructor = n, Q(n, a);
                        var s = o.prototype;
                        return s.onShuffle = function() {
                            this.setState({
                                isShuffled: !0
                            })
                        }, s.render = function() {
                            var t = this.props.isLoaded,
                                n = K({
                                    shouldShuffle: !this.state.isShuffled && t,
                                    onShuffle: this.onShuffle
                                }, this.state, this.props);
                            return r.createElement(e, n)
                        }, o
                    }(r.Component)
                },
                J = n(14081),
                V = n(67986),
                X = n(18363),
                Y = (0, n(69068).n)("FETCH_TRENDING_SEARCH"),
                q = "SHUFFLE_TRENDING_SEARCH",
                $ = "SET_TRENDING_SEARCH",
                ee = "pts_sec";

            function te() {
                return (te = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var ne = {
                    progress: X.Z.INIT,
                    state_update_time: 0,
                    error: 0
                },
                re = {
                    current_index: 0,
                    update_time: 0,
                    version: "",
                    sections: (U = {}, U.pts_sec = {
                        total: 0,
                        data: []
                    }, U)
                },
                ae = (0, J.Z)(((z = {})[Y.REQUESTED] = function(e) {
                    return te({}, e, {
                        progress: X.Z.REQ,
                        error: 0,
                        state_update_time: 0
                    })
                }, z[Y.SUCCESS] = function(e, t) {
                    var n, r = t.payload,
                        a = r.offset,
                        o = r.data,
                        s = r.defaultIndex,
                        c = r.shouldReset,
                        i = e && e.data || re;
                    return o.version && i.version === o.version ? te({}, e, {
                        progress: X.Z.OK,
                        state_update_time: Date.now()
                    }) : te({}, e, {
                        data: te({}, i, {
                            update_time: o.update_time,
                            current_index: s,
                            version: o.version,
                            sections: te({}, i.sections, (n = {}, n.pts_sec = {
                                total: o.sections.pts_sec.total,
                                data: (0, V.Z)(c ? [] : i.sections.pts_sec.data, o.sections.pts_sec.data, a)
                            }, n))
                        }),
                        progress: X.Z.OK,
                        state_update_time: Date.now()
                    })
                }, z[Y.FAILED] = function(e, t) {
                    var n = t.payload.error;
                    return te({}, e, {
                        progress: X.Z.ERR,
                        error: n
                    })
                }, z.SHUFFLE_TRENDING_SEARCH = function(e, t) {
                    var n = t.payload.offset;
                    return e.data ? te({}, e, {
                        data: te({}, e.data, {
                            current_index: (e.data.current_index + n) % e.data.sections.pts_sec.data.length
                        })
                    }) : e
                }, z.SET_TRENDING_SEARCH = function(e, t) {
                    return t.payload.store
                }, z), ne),
                oe = n(15263),
                se = n(92027),
                ce = n(72609);

            function ie(e, t) {
                var n, r = {
                        current_index: 0,
                        update_time: e.data.update_time,
                        version: e.data.version,
                        sections: (n = {}, n.pts_sec = {
                            total: 0,
                            data: []
                        }, n)
                    },
                    a = e.data.sections.find((function(e) {
                        return e && e.key === t
                    }));
                if (!a) return r;
                var o = a.index,
                    s = a.data,
                    c = a.total;
                return r.sections.pts_sec.total = c || 0, o && s.keyword ? (o.forEach((function(e) {
                    var t = s.keyword.find((function(t) {
                        return t.key === e.key
                    }));
                    t && r.sections.pts_sec.data.push(t)
                })), r) : r
            }

            function ue(e) {
                var t = e.limit,
                    n = void 0 === t ? 20 : t,
                    r = e.offset,
                    a = void 0 === r ? 0 : r,
                    o = e.defaultIndex,
                    s = void 0 === o ? 0 : o,
                    c = e.getStore,
                    i = e.onFinish,
                    u = e.shouldSkipCall,
                    l = e.shouldReset,
                    f = e.version,
                    d = (0, se.Wc)({
                        bundle: "trending_search",
                        limit: n,
                        offset: a,
                        version: a > 0 && f || void 0
                    });
                return (0, oe.Z)({
                    apiCall: function() {
                        return function(e) {
                            return (0, ce.fetchInfo)("/api/v4/recommend/recommend" + e)
                        }(d)
                    },
                    actions: [function() {
                        return {
                            type: Y.REQUESTED
                        }
                    }, function(e, t) {
                        return {
                            type: Y.SUCCESS,
                            payload: {
                                offset: a,
                                data: ie(t, ee),
                                defaultIndex: s,
                                shouldReset: l
                            }
                        }
                    }, function(e, t) {
                        return {
                            type: Y.FAILED,
                            payload: {
                                error: t.error
                            }
                        }
                    }],
                    shouldSkipCall: c && !u ? le(c) : u,
                    onFinish: i
                })
            }

            function le(e) {
                return function(t) {
                    var n = e(t);
                    return !(!n || !n.state_update_time && n.progress !== X.Z.REQ) && n.state_update_time > Date.now() - 6e4
                }
            }

            function fe(e) {
                return {
                    type: q,
                    payload: {
                        offset: e
                    }
                }
            }
            var de = [];
            var pe = n(30085),
                me = n(5751),
                he = n(41525);
            var ve = new Array(5).fill(0),
                _e = [X.Z.INIT, X.Z.REQ],
                Ee = "@shopee/rcmd-trending-search",
                ye = me.X.isSupported();

            function ge(e) {
                return e[he.YC]
            }

            function Se() {
                return ve.map((function() {
                    return e = 0, t = T, e = Math.ceil(e), t = Math.floor(t), Math.floor(Math.random() * (t - e + 1)) + e;
                    var e, t
                }))
            }
            var Ne = (0, s.compose)(W, pe.withInjectReducer, (0, o.connect)())((function(e) {
                var t = e.shouldShuffle,
                    n = e.onShuffle,
                    a = e.injectAsyncReducer,
                    s = e.dispatch;
                r.useEffect((function() {
                    var e;
                    a(((e = {})[he.YC] = ae, e));
                    var t = function() {
                        if (ye) return me.X.get(Ee) || null;
                        return null
                    }();
                    t && s({
                        type: $,
                        payload: {
                            store: t
                        }
                    })
                }), [s, a]);
                var c = r.useState(Se()),
                    i = c[0],
                    u = c[1],
                    l = r.useCallback((function() {
                        u(Se())
                    }), []);
                r.useEffect((function() {
                    s(ue({
                        offset: 0,
                        limit: 20,
                        defaultIndex: -5,
                        getStore: ge
                    }))
                }), [s]);
                var f, d = r.useCallback((function() {
                        s(fe(5)), l()
                    }), [s, l]),
                    p = (0, o.useSelector)(ge),
                    m = _e.includes((f = p) ? f.progress : X.Z.INIT);
                r.useEffect((function() {
                    !m && t && (n(), s(fe(5)), l())
                }), [s, m, n, t, l, p]), r.useEffect((function() {
                    ! function(e) {
                        if (ye) me.X.set(Ee, e)
                    }(p)
                }), [p]);
                var h = r.useMemo((function() {
                    return function(e, t) {
                        if (!e || !e.data) return de;
                        var n = e.data,
                            r = n.current_index,
                            a = n.sections,
                            o = Math.max(r, 0),
                            s = o + t,
                            c = a.pts_sec.data;
                        return c.length <= t ? c : s > c.length ? [].concat(c, c).slice(o, s) : c.slice(o, s)
                    }(p, 5)
                }), [p]);
                if (m) return r.createElement(O, null);
                var v = function(e) {
                    return e && e.data ? e.data.sections.pts_sec.total : 0
                }(p);
                return !h || v < 5 ? null : r.createElement(E, {
                    showHeaderButton: v > 5,
                    onChangeClick: d
                }, h.map((function(e, t) {
                    var n = e && Array.isArray(e.images) ? e.images.length : 0,
                        a = n > 0 ? i[t] % n : 0,
                        o = e && e.keyword ? e.keyword : t;
                    return r.createElement(G, {
                        key: o,
                        keyword: e.keyword || "",
                        count: e.count,
                        image: Array.isArray(e.images) ? e.images[a] : "",
                        className: Z,
                        index: t,
                        info: e.info,
                        conceptid: e.intentionid
                    })
                })))
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
                    return o
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

            function o(e, t, n) {
                return void 0 === n && (n = a), e(t, 0) + (t >= n ? "+" : "")
            }
        }
    }
]);
//# sourceMappingURL=https://shopee.sg/assets/HomeTrendingSearch.8caafae98bbd0e362509.js.map