(("undefined" != typeof self ? self : this).webpackChunkshopee_pc = ("undefined" != typeof self ? self : this).webpackChunkshopee_pc || []).push([
    [5823], {
        41666: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _e
                }
            });
            var a = n(27378),
                l = n.n(a),
                r = n(43058),
                i = n(79308),
                c = n(41153),
                s = n(11812),
                o = n(30085),
                u = n(13751),
                m = n(60042),
                p = n.n(m),
                d = n(62199),
                v = n(6965),
                C = "_2vRYVF",
                f = "_6j_paV",
                g = "_3j47BP",
                h = "_2QSLsI",
                _ = "hVxi2f",
                E = "_1Nopo9",
                y = function(e) {
                    var t = e.className,
                        n = e.sellingPoints;
                    return a.createElement("div", {
                        className: p()(f, t)
                    }, n.map((function(e, t) {
                        var n = e.Icon,
                            l = e.tagTitle,
                            r = e.tagShortText,
                            i = e.onClick;
                        return a.createElement("div", {
                            key: t,
                            className: p()(C, i && E),
                            onClick: i
                        }, a.createElement(n, {
                            className: g
                        }), a.createElement("div", {
                            className: p()(h, i && E)
                        }, a.createElement("p", {
                            className: _
                        }, (0, v.t)(l)), a.createElement("p", {
                            className: _
                        }, (0, v.t)(r))))
                    })))
                },
                b = n(64653),
                N = (0, v.withI18nCollections)([b.ZE])((function(e) {
                    var t = e.className;
                    return l().createElement(y, {
                        sellingPoints: d.Z,
                        className: t
                    })
                })),
                w = n(5410),
                L = n(26424);
            var M = (0, v.withI18nCollections)([L.Am])((function(e) {
                    var t, n = e.className;
                    return l().createElement(y, {
                        sellingPoints: (t = w.h, t.map((function(e) {
                            return {
                                Icon: e.Icon,
                                tagTitle: e.textLabel,
                                tagShortText: e.descLabel
                            }
                        }))),
                        className: n
                    })
                })),
                k = function(e) {
                    var t = e.className,
                        n = e.isShopeeMart,
                        a = e.isShopeeMall;
                    return n ? l().createElement(M, {
                        className: t
                    }) : a ? l().createElement(N, {
                        className: t
                    }) : null
                },
                Z = n(44747),
                H = {
                    button: "_1I0l7D",
                    readMore: "_1q59I2"
                },
                I = function(e) {
                    var t = e.customFooter,
                        n = e.className,
                        a = e.onClickReadMore;
                    return t && t.data ? l().createElement("div", {
                        className: n
                    }, l().createElement("div", {
                        dangerouslySetInnerHTML: {
                            __html: t.data
                        }
                    }), t.hasMore && l().createElement("button", {
                        onClick: a,
                        className: H.button
                    }, l().createElement("div", {
                        className: H.readMore
                    }, (0, v.t)("label_footer_read_more")), l().createElement(Z.Z, {
                        className: H.icon
                    }))) : null
                },
                V = n(50341),
                O = n(73727),
                x = n(3792),
                R = {
                    subItemList: "_2DutXp",
                    column: "_2qBafX",
                    item: "eV3Vqm",
                    itemMain: "_1qTDqU",
                    itemMainLink: "_2xdbPh",
                    subItemLink: "_12uvse"
                },
                T = n(39894),
                B = n(72699),
                j = n(75024);

            function S() {
                return (S = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }).apply(this, arguments)
            }

            function P(e, t) {
                void 0 === e && (e = {}), void 0 === t && (t = !1);
                var n = e.hashtag;
                return t ? B.a5.getLocation(S({}, e, {
                    officialMall: void 0
                })) : n ? j.hR.getLocation(e) : j.yC.getLocation(e)
            }

            function F(e) {
                var t, n, l, r = e.subCategory;
                return a.createElement("div", {
                    className: R.subItem
                }, a.createElement(O.Link, {
                    className: R.subItemLink,
                    to: (t = r.parent_category, n = r.catid, l = r.display_name, l ? T.zH.getUrl({
                        categoryName: l,
                        categoryId: t,
                        subCategoryId: n
                    }) : P({
                        category: t,
                        subcategory: n
                    }))
                }, r.display_name))
            }

            function z(e) {
                var t, n, l = e.categoryTreeItem;
                return a.createElement("div", {
                    className: R.item
                }, a.createElement("div", {
                    className: R.itemMain
                }, a.createElement(O.Link, {
                    className: R.itemMainLink,
                    to: (t = (0, x.Z)(l, ["main", "catid"], 0), n = (0, x.Z)(l, ["main", "display_name"], ""), n && t ? T.rj.getUrl({
                        categoryName: n,
                        categoryId: t
                    }) : P({
                        category: t
                    }))
                }, (0, x.Z)(l, ["main", "display_name"], ""))), a.createElement("div", {
                    className: R.subItemList
                }, (l.sub || []).map((function(e, t, n) {
                    return a.createElement(a.Fragment, {
                        key: t
                    }, a.createElement(F, {
                        subCategory: e
                    }), t !== n.length - 1 && a.createElement("span", null, " | "))
                }))))
            }

            function D(e) {
                var t = e.categoryTreeData;
                return a.createElement("div", {
                    className: R.column
                }, Array.isArray(t) && t.map((function(e, t) {
                    return a.createElement(z, {
                        categoryTreeItem: e,
                        key: t
                    })
                })))
            }
            var A = "OWAap2",
                U = "_1l-1zz",
                q = "_2RzIdU";

            function K(e) {
                return a.createElement("div", {
                    className: U
                }, a.createElement("div", {
                    className: q
                }, (0, v.t)("label_footer_categories")), a.createElement("div", {
                    className: A
                }, (t = e.categoryTreeData, n = 5, l = Array.from(Array(n), (function() {
                    return []
                })), t.forEach((function(e, t) {
                    return l[t % n].push(e)
                })), l).map((function(e, t) {
                    return a.createElement(D, {
                        categoryTreeData: e,
                        key: t
                    })
                }))));
                var t, n, l
            }
            var G = n(18272),
                Q = n(95262),
                W = (0, n(69068).n)("FOOTER_PC/FETCH_CUSTOM_FOOTER"),
                Y = n(72609);
            n(41995);

            function X(e) {
                var t = e.pageType,
                    n = e.extraId,
                    a = e.getFull,
                    l = "/backend/CMS/footer/" + t + "/" + (n ? n + "/" : "");
                return (0, Y.fetchInfo)(l + (a ? "?full=1" : ""))
            }

            function $(e, t) {
                return t ? e + "-" + t : "" + e
            }

            function J(e, t, n) {
                return (0, x.Z)(e, ["customFooter", $(t, n)], null)
            }

            function ee(e, t, n, a, l, r, i) {
                try {
                    var c = e[r](i),
                        s = c.value
                } catch (e) {
                    return void n(e)
                }
                c.done ? t(s) : Promise.resolve(s).then(a, l)
            }
            var te, ne = n(14081);

            function ae() {
                return (ae = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }).apply(this, arguments)
            }
            var le = {},
                re = (0, ne.Z)(((te = {})[W.SUCCESS] = function(e, t) {
                    var n, a = t.pageType,
                        l = t.extraId,
                        r = t.response,
                        i = void 0 === r ? le : r;
                    return ae({}, e, ((n = {})[$(a, l)] = {
                        hasMore: (0, x.Z)(i, ["has_more"], !1),
                        data: (0, x.Z)(i, ["data"], "")
                    }, n))
                }, te), {}),
                ie = n(48189),
                ce = n(6976),
                se = n(83459),
                oe = n(73180),
                ue = n(8205),
                me = "_2SOdI4",
                pe = "_2xyBMh",
                de = "_2rVn6e",
                ve = "Pca2IN",
                Ce = "_3sSQpy",
                fe = "pK829c",
                ge = "_1j83xX";
            var he = (0, u.Z)({
                loader: function() {
                    return n.e(4518).then(n.bind(n, 80445))
                }
            });
            var _e = (0, r.qC)(o.withInjectReducer, (0, i.connect)((function(e, t) {
                return {
                    categoryTreeData: (0, G.tb)(e.sharedCategory),
                    customFooter: J(e, t.pageType, t.extraId),
                    isShopeeMall: (0, ie.H_)(e),
                    isShopeeMart: (0, ie.py)(e),
                    ENABLED_OFFICIAL_SHOP_SELLING_POINT: (0, oe.Au)(e.featureToggles, ue.C$B)
                }
            }), {
                fetchCategoryTree: Q.hy,
                fetchCustomFooter: function(e) {
                    var t = e.pageType,
                        n = e.extraId,
                        a = e.getFull,
                        l = void 0 !== a && a;
                    return function() {
                        var e, a = (e = regeneratorRuntime.mark((function e(a, r) {
                            var i, c, s, o;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (null != t) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        if (!(i = J(r(), t, n)) || i.hasMore) {
                                            e.next = 5;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 5:
                                        return a({
                                            type: W.REQUESTED
                                        }), e.next = 8, X({
                                            pageType: t,
                                            extraId: n,
                                            getFull: l
                                        });
                                    case 8:
                                        c = e.sent, s = c.response, o = c.error, a(o ? {
                                            type: W.FAILED
                                        } : {
                                            type: W.SUCCESS,
                                            pageType: t,
                                            extraId: n,
                                            response: s
                                        });
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })), function() {
                            var t = this,
                                n = arguments;
                            return new Promise((function(a, l) {
                                var r = e.apply(t, n);

                                function i(e) {
                                    ee(r, a, l, i, c, "next", e)
                                }

                                function c(e) {
                                    ee(r, a, l, i, c, "throw", e)
                                }
                                i(void 0)
                            }))
                        });
                        return function(e, t) {
                            return a.apply(this, arguments)
                        }
                    }()
                }
            }), (0, v.withI18nCollections)([se.e$]), c.EN)((function(e) {
                var t = e.pageType,
                    n = e.extraId,
                    l = e.injectAsyncReducer,
                    r = e.fetchCategoryTree,
                    i = e.fetchCustomFooter,
                    c = e.customFooter,
                    o = e.showSellingPoints,
                    u = void 0 === o || o,
                    m = e.isShopeeMall,
                    d = e.isShopeeMart,
                    v = e.categoryTreeData,
                    C = e.location,
                    f = e.ENABLED_OFFICIAL_SHOP_SELLING_POINT;
                a.useEffect((function() {
                    l({
                        customFooter: re
                    }), r({
                        getCategoryStore: function(e) {
                            return e.sharedCategory
                        }
                    }), i({
                        pageType: t,
                        extraId: n
                    })
                }), [r, i, t, n, l]);
                var g = "live" !== (0, ce.dU)(),
                    h = m || (0, s.KN)(C.pathname),
                    _ = u && (h || d) && f,
                    E = !(0, s.G7)() && "/" === C.pathname;
                return a.createElement("footer", {
                    role: "contentinfo",
                    className: p()(ve, u && Ce)
                }, g && a.createElement(he, {
                    className: me
                }), _ && a.createElement("div", {
                    className: fe
                }, a.createElement(k, {
                    className: de,
                    isShopeeMart: d,
                    isShopeeMall: h
                })), a.createElement(I, {
                    customFooter: c,
                    onClickReadMore: function() {
                        i({
                            pageType: t,
                            extraId: n,
                            getFull: !0
                        })
                    },
                    className: pe
                }), E && a.createElement(K, {
                    categoryTreeData: v
                }), a.createElement("div", {
                    className: ge
                }, a.createElement(V.Z, null)))
            }))
        },
        25254: function(e, t, n) {
            "use strict";
            var a = n(27378),
                l = n.n(a),
                r = [function(e) {
                    var t = e.className,
                        n = void 0 === t ? "" : t;
                    return l().createElement("div", {
                        className: n + " mall_selling_points-br-background mall_selling_points-br-15_day_return-png"
                    })
                }, function(e) {
                    var t = e.className,
                        n = void 0 === t ? "" : t;
                    return l().createElement("div", {
                        className: n + " mall_selling_points-br-background mall_selling_points-br-authentic-png"
                    })
                }, function(e) {
                    var t = e.className,
                        n = void 0 === t ? "" : t;
                    return l().createElement("div", {
                        className: n + " mall_selling_points-br-background mall_selling_points-br-free_shipping-png"
                    })
                }];
            t.Z = r
        },
        88776: function(e, t, n) {
            "use strict";
            var a = n(27378),
                l = n.n(a),
                r = [function(e) {
                    var t = e.className,
                        n = void 0 === t ? "" : t;
                    return l().createElement("div", {
                        className: n + " mall_selling_points-id-background mall_selling_points-id-7_day_return-png"
                    })
                }, function(e) {
                    var t = e.className,
                        n = void 0 === t ? "" : t;
                    return l().createElement("div", {
                        className: n + " mall_selling_points-id-background mall_selling_points-id-authentic-png"
                    })
                }, function(e) {
                    var t = e.className,
                        n = void 0 === t ? "" : t;
                    return l().createElement("div", {
                        className: n + " mall_selling_points-id-background mall_selling_points-id-free_shipping-png"
                    })
                }];
            t.Z = r
        },
        78774: function(e, t, n) {
            "use strict";
            var a = n(27378),
                l = n.n(a),
                r = [function(e) {
                    var t = e.className,
                        n = void 0 === t ? "" : t;
                    return l().createElement("div", {
                        className: n + " mall_selling_points-my-background mall_selling_points-my-authentic-png"
                    })
                }, function(e) {
                    var t = e.className,
                        n = void 0 === t ? "" : t;
                    return l().createElement("div", {
                        className: n + " mall_selling_points-my-background mall_selling_points-my-15_day_return-png"
                    })
                }, function(e) {
                    var t = e.className,
                        n = void 0 === t ? "" : t;
                    return l().createElement("div", {
                        className: n + " mall_selling_points-my-background mall_selling_points-my-free_shipping-png"
                    })
                }];
            t.Z = r
        },
        83996: function(e, t, n) {
            "use strict";
            var a = n(27378),
                l = n.n(a),
                r = [function(e) {
                    var t = e.className,
                        n = void 0 === t ? "" : t;
                    return l().createElement("div", {
                        className: n + " mall_selling_points-ph-background mall_selling_points-ph-authentic-png"
                    })
                }, function(e) {
                    var t = e.className,
                        n = void 0 === t ? "" : t;
                    return l().createElement("div", {
                        className: n + " mall_selling_points-ph-background mall_selling_points-ph-7_day_return-png"
                    })
                }, function(e) {
                    var t = e.className,
                        n = void 0 === t ? "" : t;
                    return l().createElement("div", {
                        className: n + " mall_selling_points-ph-background mall_selling_points-ph-free_shipping-png"
                    })
                }];
            t.Z = r
        },
        89204: function(e, t, n) {
            "use strict";
            var a = n(27378),
                l = n.n(a),
                r = [function(e) {
                    var t = e.className,
                        n = void 0 === t ? "" : t;
                    return l().createElement("div", {
                        className: n + " mall_selling_points-sg-background mall_selling_points-sg-15_day_return-png"
                    })
                }, function(e) {
                    var t = e.className,
                        n = void 0 === t ? "" : t;
                    return l().createElement("div", {
                        className: n + " mall_selling_points-sg-background mall_selling_points-sg-authentic-png"
                    })
                }, function(e) {
                    var t = e.className,
                        n = void 0 === t ? "" : t;
                    return l().createElement("div", {
                        className: n + " mall_selling_points-sg-background mall_selling_points-sg-free_shipping-png"
                    })
                }];
            t.Z = r
        },
        32509: function(e, t, n) {
            "use strict";
            var a = n(27378),
                l = n.n(a),
                r = [function(e) {
                    var t = e.className,
                        n = void 0 === t ? "" : t;
                    return l().createElement("div", {
                        className: n + " mall_selling_points-th-background mall_selling_points-th-authentic-png"
                    })
                }, function(e) {
                    var t = e.className,
                        n = void 0 === t ? "" : t;
                    return l().createElement("div", {
                        className: n + " mall_selling_points-th-background mall_selling_points-th-15_day_return-png"
                    })
                }, function(e) {
                    var t = e.className,
                        n = void 0 === t ? "" : t;
                    return l().createElement("div", {
                        className: n + " mall_selling_points-th-background mall_selling_points-th-free_shipping-png"
                    })
                }];
            t.Z = r
        },
        13718: function(e, t, n) {
            "use strict";
            var a = n(27378),
                l = n.n(a),
                r = [function(e) {
                    var t = e.className,
                        n = void 0 === t ? "" : t;
                    return l().createElement("div", {
                        className: n + " mall_selling_points-tw-background mall_selling_points-tw-15_day_return-png"
                    })
                }, function(e) {
                    var t = e.className,
                        n = void 0 === t ? "" : t;
                    return l().createElement("div", {
                        className: n + " mall_selling_points-tw-background mall_selling_points-tw-free_shipping-png"
                    })
                }, function(e) {
                    var t = e.className,
                        n = void 0 === t ? "" : t;
                    return l().createElement("div", {
                        className: n + " mall_selling_points-tw-background mall_selling_points-tw-authentic-png"
                    })
                }];
            t.Z = r
        },
        84514: function(e, t, n) {
            "use strict";
            var a = n(27378),
                l = n.n(a),
                r = [function(e) {
                    var t = e.className,
                        n = void 0 === t ? "" : t;
                    return l().createElement("div", {
                        className: n + " mall_selling_points-vn-background mall_selling_points-vn-7_day_return-png"
                    })
                }, function(e) {
                    var t = e.className,
                        n = void 0 === t ? "" : t;
                    return l().createElement("div", {
                        className: n + " mall_selling_points-vn-background mall_selling_points-vn-authentic-png"
                    })
                }, function(e) {
                    var t = e.className,
                        n = void 0 === t ? "" : t;
                    return l().createElement("div", {
                        className: n + " mall_selling_points-vn-background mall_selling_points-vn-free_shipping-png"
                    })
                }];
            t.Z = r
        },
        62199: function(e, t, n) {
            "use strict";
            var a = (0, n(6976).Kd)(),
                l = [];
            switch (a) {
                case "ID":
                    l = n(88776).Z;
                    break;
                case "MY":
                    l = n(78774).Z;
                    break;
                case "PH":
                    l = n(83996).Z;
                    break;
                case "SG":
                    l = n(89204).Z;
                    break;
                case "TH":
                    l = n(32509).Z;
                    break;
                case "TW":
                    l = n(13718).Z;
                    break;
                case "VN":
                    l = n(84514).Z;
                    break;
                case "BR":
                    l = n(25254).Z
            }
            t.Z = l.map((function(e, t) {
                var n = t + 1 + ("TW" !== a ? "_" + a.toLowerCase() : "");
                return {
                    Icon: e,
                    tagTitle: "Label_selling_point_" + n,
                    tagText: "Msg_selling_point_" + n,
                    tagShortText: "Msg_selling_point_" + n + "_short"
                }
            }))
        },
        5410: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return D
                },
                h: function() {
                    return z
                }
            });
            var a = n(27378),
                l = n.n(a),
                r = n(60042),
                i = n.n(r),
                c = n(97953),
                s = n(6976);

            function o() {
                return (o = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }).apply(this, arguments)
            }

            function u(e) {
                return l().createElement("svg", o({}, e, {
                    fill: "none",
                    height: "16",
                    viewBox: "0 0 16 16",
                    width: "16",
                    xmlns: "http://www.w3.org/2000/svg"
                }), l().createElement("circle", {
                    cx: "8",
                    cy: "8",
                    fill: "#066bc8",
                    r: "6"
                }), l().createElement("path", {
                    d: "m6.5 4.5-2.2943 1.83544c-.10335.08268-.09933.24115.00808.31848l2.28622 1.64608-.3-1.3h3.3c.33333 0 1.5.3 1.5 1.5s-1.16667 1.5-1.5 1.5h-4v1h4c2 0 2.5-1.66667 2.5-2.5s-.5-2.5-2.5-2.5h-3.3z",
                    fill: "#fff"
                }))
            }

            function m() {
                return (m = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }).apply(this, arguments)
            }

            function p() {
                return (p = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }).apply(this, arguments)
            }

            function d() {
                return (d = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }).apply(this, arguments)
            }

            function v(e) {
                return l().createElement("svg", d({
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "40",
                    height: "40",
                    viewBox: "0 0 40 40",
                    fill: "none"
                }, e), l().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M38.7156 28.4099H18.0013C14.8398 28.4099 12.2711 26.0351 12.2711 23.1073V8.53644L8.64852 7.30025C8.49168 7.25714 8.34586 7.18169 8.22067 7.07889C8.09547 6.97608 7.99375 6.84824 7.92219 6.70379C7.85063 6.55934 7.81086 6.40155 7.8055 6.24082C7.80013 6.08009 7.8293 5.92006 7.89108 5.77127C8.02879 5.46623 8.27996 5.22518 8.5926 5.09801C8.90524 4.97085 9.25541 4.9673 9.57062 5.0881L13.4566 6.4219C13.8631 6.55007 14.2185 6.8012 14.4726 7.13978C14.7267 7.47837 14.8667 7.88728 14.8727 8.30872V23.1431C14.8951 23.9324 15.2337 24.6806 15.8141 25.2234C16.3945 25.7663 17.1693 26.0594 17.9683 26.0384H38.6827C38.8495 26.031 39.016 26.0563 39.1728 26.113C39.3295 26.1697 39.4733 26.2565 39.5959 26.3684C39.7184 26.4804 39.8172 26.6153 39.8866 26.7652C39.956 26.9152 39.9945 27.0773 40 27.2421C39.9949 27.4027 39.9575 27.5608 39.89 27.707C39.8224 27.8532 39.726 27.9847 39.6065 28.0937C39.4869 28.2027 39.3465 28.2871 39.1936 28.342C39.0406 28.3968 38.8782 28.421 38.7156 28.4132V28.4099Z",
                    fill: "#066BC8"
                }), l().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M9.52964 13.2896H1.21168C1.05244 13.2901 0.894681 13.2589 0.747479 13.1978C0.600277 13.1367 0.466532 13.047 0.353931 12.9339C0.241331 12.8207 0.152097 12.6862 0.0913577 12.5383C0.0306186 12.3903 -0.000427683 12.2317 4.4498e-06 12.0716C0.00506782 11.7502 0.134351 11.4433 0.360495 11.216C0.58664 10.9887 0.8919 10.8587 1.21168 10.8536H9.52964C9.84956 10.8554 10.1557 10.9846 10.381 11.2129C10.6063 11.4412 10.7324 11.75 10.7315 12.0716C10.7346 12.2324 10.7054 12.3922 10.6456 12.5414C10.5858 12.6906 10.4967 12.8261 10.3835 12.9399C10.2704 13.0536 10.1356 13.1432 9.98716 13.2033C9.83875 13.2634 9.67979 13.2928 9.51981 13.2896",
                    fill: "#066BC8"
                }), l().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M9.49927 17.1921H3.67124C3.50942 17.1921 3.34919 17.1606 3.19969 17.0994C3.05019 17.0382 2.91435 16.9485 2.79993 16.8354C2.68551 16.7223 2.59475 16.588 2.53282 16.4402C2.4709 16.2924 2.43903 16.1341 2.43903 15.9741C2.43903 15.8142 2.4709 15.6558 2.53282 15.508C2.59475 15.3602 2.68551 15.226 2.79993 15.1129C2.91435 14.9997 3.05019 14.91 3.19969 14.8488C3.34919 14.7876 3.50942 14.7561 3.67124 14.7561H9.49927C9.66121 14.7557 9.82164 14.7869 9.97134 14.8479C10.121 14.909 10.257 14.9987 10.3716 15.1119C10.4861 15.2251 10.5768 15.3595 10.6386 15.5075C10.7003 15.6555 10.7319 15.814 10.7315 15.9741C10.7347 16.1349 10.7049 16.2947 10.6441 16.4439C10.5833 16.5931 10.4927 16.7286 10.3776 16.8423C10.2626 16.9561 10.1255 17.0457 9.97454 17.1058C9.82361 17.1659 9.66196 17.1952 9.49927 17.1921Z",
                    fill: "#066BC8"
                }), l().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M9.46513 21.0946H6.14464C5.97818 21.095 5.81328 21.0638 5.6594 21.0027C5.50553 20.9417 5.36572 20.852 5.24802 20.7388C5.13032 20.6256 5.03704 20.4912 4.97355 20.3432C4.91006 20.1952 4.8776 20.0366 4.87806 19.8766C4.88335 19.5551 5.01849 19.2483 5.25488 19.0209C5.49128 18.7936 5.81037 18.6637 6.14464 18.6586H9.46513C9.80105 18.6586 10.1232 18.7869 10.3607 19.0153C10.5983 19.2437 10.7317 19.5535 10.7317 19.8766C10.7317 20.1996 10.5983 20.5094 10.3607 20.7378C10.1232 20.9662 9.80105 21.0946 9.46513 21.0946Z",
                    fill: "#066BC8"
                }), l().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M23.5127 32.0411C23.5192 32.4766 23.3959 32.904 23.1586 33.2692C22.9213 33.6344 22.5808 33.9207 22.1803 34.0918C21.7798 34.2629 21.3374 34.311 20.9095 34.23C20.4816 34.149 20.0875 33.9425 19.7772 33.6369C19.467 33.3312 19.2547 32.9402 19.1673 32.5136C19.08 32.087 19.1215 31.644 19.2867 31.2411C19.4518 30.8381 19.7331 30.4934 20.0948 30.2508C20.4564 30.0082 20.8821 29.8786 21.3176 29.8785C21.6048 29.8725 21.8903 29.9241 22.1573 30.0302C22.4242 30.1363 22.6672 30.2949 22.8718 30.4965C23.0764 30.6981 23.2386 30.9386 23.3487 31.2039C23.4587 31.4692 23.5145 31.7539 23.5127 32.0411Z",
                    fill: "#066BC8"
                }), l().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M37.5607 32.0409C37.5671 32.4764 37.4438 32.9039 37.2066 33.2691C36.9693 33.6343 36.6287 33.9207 36.2282 34.0918C35.8277 34.2629 35.3854 34.311 34.9575 34.23C34.5296 34.149 34.1354 33.9425 33.8252 33.6368C33.515 33.3311 33.3027 32.9401 33.2153 32.5134C33.128 32.0868 33.1695 31.6438 33.3347 31.2408C33.4998 30.8378 33.7811 30.493 34.1428 30.2504C34.5044 30.0077 34.9301 29.8781 35.3656 29.8781C35.9425 29.8772 36.4965 30.1037 36.9074 30.5086C37.3183 30.9135 37.5531 31.4641 37.5607 32.0409Z",
                    fill: "#066BC8"
                }), l().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M19.0546 23.5365H37.5307V23.5333C37.9171 23.5377 38.2898 23.3914 38.569 23.1257C38.8482 22.8599 39.0117 22.4959 39.0244 22.1117V9.34906C39.0117 8.96481 38.8482 8.6008 38.569 8.33506C38.2898 8.06931 37.9171 7.92297 37.5307 7.92741H19.0546C18.8625 7.92225 18.6713 7.95503 18.492 8.02385C18.3126 8.09267 18.1488 8.19617 18.0099 8.32836C17.871 8.46055 17.7599 8.61881 17.6828 8.794C17.6057 8.9692 17.5643 9.15785 17.561 9.34906V22.1149C17.5737 22.4991 17.7372 22.8631 18.0164 23.1289C18.2956 23.3946 18.6683 23.541 19.0546 23.5365ZM26.9125 19.1843C26.3854 19.016 25.899 18.741 25.4838 18.3766L24.6396 19.3782C25.1109 19.7723 25.6356 20.0986 26.1982 20.3475C26.8451 20.6157 27.5439 20.7371 28.2439 20.7029C28.695 20.7066 29.144 20.6412 29.5752 20.5091C29.9571 20.3784 30.3181 20.1934 30.6467 19.9598C30.9546 19.7245 31.209 19.4272 31.3936 19.0874C31.5887 18.7307 31.6893 18.3304 31.6858 17.9242C31.7068 17.4915 31.5935 17.0628 31.3611 16.6964C31.1407 16.3437 30.8541 16.0365 30.5168 15.7917C30.1676 15.5371 29.7853 15.3306 29.3804 15.1779C28.9907 15.0163 28.5686 14.8547 28.2114 14.7255L28.0166 14.6286C27.8165 14.5673 27.6212 14.4917 27.4321 14.4024C27.2373 14.3055 27.0749 14.2085 26.9125 14.1116C26.7594 14.0078 26.6273 13.8762 26.5229 13.7239C26.4419 13.5517 26.3977 13.3647 26.393 13.1746C26.3857 12.9935 26.4308 12.814 26.5229 12.6576C26.6393 12.5045 26.7823 12.3732 26.945 12.2699C27.143 12.1752 27.3496 12.0995 27.562 12.0437C27.7942 11.9777 28.0348 11.9451 28.2763 11.9468C28.7472 11.9398 29.2135 12.0392 29.6401 12.2376C29.963 12.3932 30.2773 12.5658 30.5818 12.7546L31.3286 11.6883C31.2714 11.6542 31.2182 11.616 31.1634 11.5767C31.0626 11.5043 30.9563 11.428 30.8091 11.3652C30.7177 11.3262 30.6262 11.282 30.5327 11.2368C30.3937 11.1696 30.25 11.1001 30.0947 11.0421C29.8224 10.9209 29.5399 10.8236 29.2505 10.7513C28.9305 10.6822 28.6037 10.6496 28.2763 10.6544C27.8573 10.6531 27.4407 10.7185 27.0424 10.8483C26.664 10.9476 26.3103 11.1236 26.0034 11.3652C25.7048 11.5883 25.4606 11.8754 25.289 12.2053C25.1195 12.5355 25.0305 12.9008 25.0292 13.2715C25.0331 13.6665 25.1334 14.0546 25.3215 14.4024C25.5154 14.698 25.7567 14.9599 26.0358 15.1779C26.3346 15.3947 26.6625 15.5687 27.01 15.6948C27.1089 15.7306 27.2103 15.7689 27.3128 15.8076C27.5805 15.9086 27.8557 16.0125 28.114 16.0825C28.2449 16.1198 28.3758 16.1677 28.5192 16.2202C28.6247 16.2588 28.7369 16.2999 28.8608 16.341C29.1187 16.4399 29.3684 16.5587 29.6077 16.6964C29.8241 16.8429 30.0205 17.0167 30.1921 17.2134C30.3394 17.4215 30.4187 17.6697 30.4194 17.9242C30.4239 18.1502 30.3679 18.3732 30.2571 18.5704C29.9663 18.9461 29.5529 19.2089 29.0881 19.3136C28.8333 19.3776 28.5716 19.4101 28.3088 19.4105C27.8328 19.4304 27.3577 19.3534 26.9125 19.1843Z",
                    fill: "#066BC8"
                }))
            }

            function C() {
                return (C = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }).apply(this, arguments)
            }

            function f(e) {
                return l().createElement("svg", C({
                    fill: "none",
                    height: 40,
                    width: 40,
                    viewBox: "0 0 40 40"
                }, e), l().createElement("path", {
                    d: "M0 0h40v40H0z",
                    fill: "#fff"
                }), l().createElement("g", {
                    fill: "#066bc8"
                }, l().createElement("path", {
                    d: "M18.163 28.36a2.73 2.73 0 1 1-5.461 0 2.73 2.73 0 0 1 5.461 0z"
                }), l().createElement("path", {
                    d: "M13.08 27.114h4.688a2.73 2.73 0 0 0-4.687 0z"
                }), l().createElement("path", {
                    d: "M11.593 27.114a4.08 4.08 0 0 1 7.662 0h9.416V9.348c0-.744-.604-1.348-1.348-1.348H10.905c-.744 0-1.348.604-1.348 1.348v16.418c0 .744.604 1.348 1.348 1.348zM36.846 28.516a2.73 2.73 0 1 1-5.461 0 2.73 2.73 0 0 1 5.461 0z"
                }), l().createElement("path", {
                    d: "M31.777 27.114h4.687a2.73 2.73 0 0 0-4.687 0z"
                }), l().createElement("path", {
                    d: "M30.289 27.114a4.08 4.08 0 0 1 7.662 0h.7c.897 0 1.544-.86 1.295-1.722L36.388 13.07a1.348 1.348 0 0 0-1.295-.974h-5.057v15.018zM2.73 21.653h5.462v2.184H2.73zM0 26.177h8.192v2.184H0z"
                })))
            }

            function g() {
                return (g = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }).apply(this, arguments)
            }

            function h() {
                return (h = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }).apply(this, arguments)
            }

            function _(e) {
                return l().createElement("svg", h({
                    width: 40,
                    height: 40,
                    viewBox: "0 0 40 40",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), l().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M19.4326 1.1276C19.7918 0.957466 20.2084 0.957466 20.5675 1.1276L37.3582 9.08109C37.8212 9.30039 38.1163 9.7668 38.1163 10.2791V28.8372C38.1163 29.3294 37.8437 29.781 37.4081 30.0102L20.6175 38.8475C20.231 39.0508 19.7691 39.0508 19.3827 38.8475L2.59199 30.0102C2.15646 29.781 1.88379 29.3294 1.88379 28.8372V10.2791C1.88379 9.7668 2.17895 9.30039 2.64191 9.08109L19.4326 1.1276Z",
                    fill: "#066BC8"
                }), l().createElement("path", {
                    d: "M35.4473 12.1061C35.9413 11.8591 36.1415 11.2584 35.8945 10.7645C35.6476 10.2705 35.0469 10.0703 34.5529 10.3172L35.4473 12.1061ZM5.44734 10.3172C4.95336 10.0703 4.35268 10.2705 4.10569 10.7645C3.85871 11.2584 4.05893 11.8591 4.55291 12.1061L5.44734 10.3172ZM19.0001 35.5867C19.0001 36.139 19.4478 36.5867 20.0001 36.5867C20.5524 36.5867 21.0001 36.139 21.0001 35.5867H19.0001ZM34.5529 10.3172L19.5529 17.8172L20.4473 19.6061L35.4473 12.1061L34.5529 10.3172ZM20.4473 17.8172L5.44734 10.3172L4.55291 12.1061L19.5529 19.6061L20.4473 17.8172ZM19.0001 18.7117V35.5867H21.0001V18.7117H19.0001Z",
                    fill: "white"
                }))
            }

            function E() {
                return (E = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }).apply(this, arguments)
            }

            function y(e) {
                return l().createElement("svg", E({
                    width: 40,
                    height: 40,
                    viewBox: "0 0 40 40",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), l().createElement("path", {
                    d: "M3.8385 9.89575C3.8385 8.08891 5.56419 7.08325 7.05823 7.08325H32.9437C33.7442 7.08325 34.5237 7.33806 35.128 7.78996C35.7286 8.239 36.2501 8.96688 36.2501 9.89575V17.9505L35.0642 18.0113C33.9604 18.0679 32.9703 18.6887 32.5128 19.6738L32.512 19.6754C31.8588 21.0768 32.4833 22.7586 33.9839 23.4196C34.3237 23.5678 34.6869 23.6461 35.0614 23.6644L36.2501 23.7227V31.7708C36.2501 33.577 34.5252 34.5833 33.032 34.5833H7.05823C5.56419 34.5833 3.8385 33.5776 3.8385 31.7708V23.5942H5.0885C6.71223 23.5942 7.96609 22.325 7.96609 20.8333C7.96609 19.3415 6.71223 18.0723 5.0885 18.0723H3.8385V9.89575Z",
                    fill: "#066BC8"
                }), l().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M15 16.6668H16.6667V13.3335H15V16.6668Z",
                    fill: "white"
                }), l().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M15 10.8335H16.6667V8.3335H15L15 10.8335Z",
                    fill: "white"
                }), l().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M15 22.5001H16.6667V19.1667H15V22.5001Z",
                    fill: "white"
                }), l().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M15 28.3336H16.6667V25.0002H15V28.3336Z",
                    fill: "white"
                }), l().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M15 33.3335H16.6667V30.8335H15V33.3335Z",
                    fill: "white"
                }))
            }

            function b() {
                return (b = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }).apply(this, arguments)
            }
            var N = {
                MY: [function(e) {
                    return l().createElement("svg", m({
                        width: 40,
                        height: 40,
                        viewBox: "0 0 40 40",
                        fill: "none"
                    }, e), l().createElement("path", {
                        fill: "#fff",
                        d: "M0 0h40v40H0z"
                    }), l().createElement("path", {
                        d: "M23.986 6 9.61 9.99 24.042 14l14.373-3.99L23.986 6zM24.62 15.043l-.025 12.512 5.464-1.519-.002-1.22 4.024 1.296-4.013 3.565-.002-1.138-5.476 1.521-.01 4.513 15.38-4.27.04-19.53-15.38 4.27zM8.015 15.763l-4.96-1.378v2.505l13.557 3.767.003-1.308 4.457 3.678-4.466 1.204V23.16L5.575 20.096v2.504l17.863 4.963.025-12.52-15.438-4.29-.01 5.01zM0 23.555v2.506l7.99 2.22-.005 2.004 15.438 4.29.009-4.51L0 23.556z",
                        fill: "#066BC8"
                    }))
                }, v, f],
                TH: [function(e) {
                    return l().createElement("svg", g({
                        width: 40,
                        height: 40,
                        viewBox: "0 0 40 40",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, e), l().createElement("path", {
                        d: "M38.5183 21.1795L19.5838 1.68939C19.3318 1.43138 19.0224 1.23658 18.6809 1.1209C18.3393 1.00522 17.9752 0.971922 17.6183 1.02373L4.53314 2.95519C4.17302 3.00754 3.83918 3.17402 3.58068 3.43016C3.32218 3.6863 3.15265 4.0186 3.097 4.37823L1.02665 17.6128C0.969299 17.974 0.999594 18.3437 1.11498 18.6908C1.23037 19.0378 1.42747 19.3521 1.68968 19.6071L21.1798 38.5181C21.5014 38.8303 21.933 39.0034 22.3812 38.9999C22.8295 38.9965 23.2583 38.8168 23.5751 38.4997L38.4921 23.5853C38.8135 23.2691 38.9966 22.8386 39.0015 22.3878C39.0064 21.937 38.8327 21.5026 38.5183 21.1795ZM9.34212 11.2209C8.90269 11.2204 8.47328 11.0896 8.10816 10.8451C7.74304 10.6006 7.45861 10.2533 7.2908 9.84716C7.123 9.44103 7.07937 8.99428 7.16541 8.56335C7.25146 8.13243 7.46332 7.73669 7.77423 7.42615C8.08513 7.11561 8.48112 6.90422 8.91214 6.81868C9.34317 6.73314 9.78987 6.7773 10.1958 6.94558C10.6017 7.11387 10.9487 7.39871 11.1927 7.76412C11.4368 8.12953 11.5671 8.55909 11.5671 8.99852C11.5695 9.29212 11.5137 9.5833 11.403 9.85522C11.2922 10.1271 11.1287 10.3744 10.9218 10.5828C10.7149 10.7911 10.4688 10.9564 10.1976 11.0691C9.92651 11.1817 9.63573 11.2396 9.34212 11.2392V11.2209ZM30.3365 25.1263L27.0476 26.172C26.8907 26.2217 26.7482 26.3088 26.6323 26.4256C26.5164 26.5424 26.4305 26.6856 26.3819 26.8428L25.3729 30.1344C25.317 30.3155 25.2115 30.4773 25.0684 30.6015C24.9252 30.7257 24.7501 30.8073 24.563 30.837C24.3758 30.8668 24.184 30.8435 24.0094 30.7698C23.8348 30.6961 23.6844 30.5749 23.5751 30.4201L21.5729 27.6133C21.4772 27.4791 21.3505 27.3699 21.2036 27.2951C21.0567 27.2203 20.8939 27.182 20.729 27.1835L17.2855 27.236C17.0966 27.2371 16.9112 27.1855 16.75 27.0872C16.5888 26.9889 16.4581 26.8476 16.3727 26.6791C16.2873 26.5107 16.2504 26.3219 16.2663 26.1337C16.2822 25.9455 16.3501 25.7655 16.4626 25.6137L18.5172 22.8489C18.6159 22.7172 18.6809 22.5633 18.7065 22.4007C18.732 22.238 18.7174 22.0716 18.6639 21.9159L17.5449 18.6558C17.4844 18.4774 17.4748 18.2857 17.5172 18.1022C17.5595 17.9187 17.6521 17.7506 17.7846 17.6167C17.9171 17.4829 18.0843 17.3886 18.2674 17.3443C18.4504 17.3001 18.6422 17.3078 18.8212 17.3664L22.0866 18.4671C22.2426 18.5196 22.409 18.5334 22.5715 18.5074C22.734 18.4813 22.8877 18.4163 23.0195 18.3177L25.787 16.2526C25.9385 16.1391 26.1187 16.0703 26.3072 16.0539C26.4957 16.0375 26.6851 16.0742 26.8539 16.1598C27.0227 16.2455 27.1641 16.3766 27.2623 16.5384C27.3604 16.7002 27.4113 16.8863 27.4092 17.0755L27.3725 20.5217C27.3707 20.6863 27.4089 20.8488 27.4838 20.9953C27.5587 21.1418 27.668 21.268 27.8023 21.363L30.6143 23.3468C30.7693 23.4555 30.8908 23.6054 30.965 23.7795C31.0392 23.9536 31.0632 24.145 31.0343 24.3321C31.0054 24.5192 30.9247 24.6944 30.8014 24.838C30.6781 24.9816 30.5171 25.0878 30.3365 25.1446V25.1263Z",
                        fill: "#066BC8"
                    }))
                }, f, u],
                SG: [_, y, f],
                ID: [f, function(e) {
                    return l().createElement("svg", b({
                        width: 40,
                        height: 40,
                        viewBox: "0 0 40 40",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, e), l().createElement("path", {
                        d: "M3.65836 9.99372L18.6584 2.49372C19.5029 2.07143 20.4971 2.07143 21.3416 2.49372L36.3416 9.99372C37.358 10.5019 38 11.5407 38 12.677V37.5229C38 37.6886 37.8657 37.8229 37.7 37.8229H32.3C32.1343 37.8229 32 37.6886 32 37.5229V17.1229C32 16.9572 31.8657 16.8229 31.7 16.8229H8.3C8.13431 16.8229 8 16.9572 8 17.1229V37.5229C8 37.6886 7.86569 37.8229 7.7 37.8229H2.3C2.13431 37.8229 2 37.6886 2 37.5229V12.677C2 11.5407 2.64201 10.5019 3.65836 9.99372Z",
                        fill: "#066BC8"
                    }), l().createElement("path", {
                        d: "M17 31.8229H23V37.8229H17V31.8229Z",
                        fill: "#066BC8"
                    }), l().createElement("path", {
                        d: "M10.0449 31.8229H16.0449V37.8229H10.0449V31.8229Z",
                        fill: "#066BC8"
                    }), l().createElement("path", {
                        d: "M23.9551 31.8229H29.9551V37.8229H23.9551V31.8229Z",
                        fill: "#066BC8"
                    }), l().createElement("path", {
                        d: "M23.9551 25.1066H29.9551V31.1066H23.9551V25.1066Z",
                        fill: "#066BC8"
                    }), l().createElement("path", {
                        d: "M23.9551 18.3903H29.9551V24.3903H23.9551V18.3903Z",
                        fill: "#066BC8"
                    }), l().createElement("path", {
                        d: "M17 25.1066H23V31.1066H17V25.1066Z",
                        fill: "#066BC8"
                    }))
                }, y],
                PH: [_, f, v],
                default: [u, function(e) {
                    return l().createElement("svg", p({}, e, {
                        fill: "none",
                        height: "16",
                        viewBox: "0 0 16 16",
                        width: "16",
                        xmlns: "http://www.w3.org/2000/svg"
                    }), l().createElement("path", {
                        d: "m12.5901 3.75752c-.0459-.00103-1.1986-.03185-2.3873-.51838-1.13013-.45743-1.88063-.97513-2.02445-1.07784l-.21932-.1613-.20013.16299c-.15967.11309-.90691.62233-2.02231 1.07625-.69135.2805-1.52538.46356-2.34874.51548l-.38785.01777v5.00779c0 1.11843.67127 2.40472 1.84255 3.52982 1.05321 1.0046 2.28061 1.6537 3.12692 1.6537.84702 0 2.07503-.6491 3.12853-1.6537 1.1708-1.1165 1.8423-2.4031 1.8423-3.52982v-5.02278z",
                        fill: "#066bc8"
                    }), l().createElement("path", {
                        clipRule: "evenodd",
                        d: "m11.7747 7.06066-1.0607-1.06066-3.12666 3.12667-1.66169-1.66169-1.06066 1.06066 2.19623 2.19626c.2929.2929.76777.2929 1.06066 0 .02275-.0228.04374-.0466.06295-.0714z",
                        fill: "#fff",
                        fillRule: "evenodd"
                    }))
                }, f]
            };
            var w = n(26424),
                L = n(90858),
                M = n(52227),
                k = n.n(M);
            (0, c.nH.injectTracking)(k());
            var Z, H, I, V, O = "_1gY3I-",
                x = "_14a0Fo",
                R = "_1w4Wd8",
                T = "_1D41ng",
                B = "_2nvKUt",
                j = "_3uDF23",
                S = "_1z2Qo8",
                P = c.oc.t,
                F = c.oc.withI18nCollections,
                z = (V = (0, s.Kd)(), [{
                    Icon: (null === (Z = N[V]) || void 0 === Z ? void 0 : Z[0]) || N.default[0],
                    textLabel: "label_mart_ksp_title_1",
                    descLabel: "label_mart_ksp_desc_1"
                }, {
                    Icon: (null === (H = N[V]) || void 0 === H ? void 0 : H[1]) || N.default[1],
                    textLabel: "label_mart_ksp_title_2",
                    descLabel: "label_mart_ksp_desc_2"
                }, {
                    Icon: (null === (I = N[V]) || void 0 === I ? void 0 : I[2]) || N.default[2],
                    textLabel: "label_mart_ksp_title_3",
                    descLabel: "label_mart_ksp_desc_3"
                }]);
            var D = F([w.Am], (function() {
                return l().createElement("div", {
                    className: i()(S, "container")
                })
            }))((function() {
                var e = [(0, L.Z)("MartKsp")][0];
                return l().createElement("div", {
                    className: i()(O, "container"),
                    onClick: e
                }, z.map((function(e, t) {
                    var n = e.textLabel,
                        a = e.descLabel,
                        r = e.Icon;
                    return l().createElement("div", {
                        key: t,
                        className: x
                    }, l().createElement(r, {
                        className: R
                    }), l().createElement("div", {
                        className: T
                    }, l().createElement("div", {
                        className: B
                    }, P(n)), l().createElement("div", {
                        className: j
                    }, P(a))))
                })))
            }))
        },
        44747: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return s
                }
            });
            var a = n(88289),
                l = n(27378),
                r = n.n(l);

            function i() {
                return (i = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }).apply(this, arguments)
            }
            var c = function(e) {
                    return r().createElement("svg", i({
                        enableBackground: "new 0 0 11 11",
                        viewBox: "0 0 11 11"
                    }, e), r().createElement("path", {
                        stroke: "none",
                        d: "m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z"
                    }))
                },
                s = (0, a.Z)(c, "arrow-right")
        },
        52227: function(e, t, n) {
            e.exports = n.p + "8b73fe247bbda275787c.tr.js"
        }
    }
]);
//# sourceMappingURL=https://shopee.sg/assets/PCLazyFooter.a118b38a03d82ec4d5fa.js.map