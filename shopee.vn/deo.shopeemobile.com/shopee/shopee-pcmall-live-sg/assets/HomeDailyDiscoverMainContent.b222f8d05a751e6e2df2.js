(("undefined" != typeof self ? self : this).webpackChunkshopee_pc = ("undefined" != typeof self ? self : this).webpackChunkshopee_pc || []).push([
    [5760], {
        8648: function(e, t, n) {
            "use strict";
            n.d(t, {
                w: function() {
                    return a
                }
            });
            var r = n(69068),
                a = ((0, r.n)("FETCH_ITEM_CARD_MANIFEST"), (0, r.n)("FETCH_ITEM_CARD_MANIFEST_V2"))
        },
        87999: function(e, t, n) {
            "use strict";
            n.d(t, {
                C: function() {
                    return s
                }
            });
            var r = n(72609),
                a = n(92027);
            var i = n(8648),
                o = n(15263);

            function s(e) {
                return (0, o.Z)({
                    apiCall: function() {
                        return function(e) {
                            return (0, r.fetchInfo)("/backend/CMS/item_card_display/labels_v2/" + (0, a.Wc)({
                                set_ids: e.join(",")
                            }))
                        }(e)
                    },
                    actions: [{
                        type: i.w.REQUESTED,
                        payload: {
                            setIds: e
                        }
                    }, function(t, n) {
                        return {
                            type: i.w.SUCCESS,
                            payload: {
                                setIds: e,
                                res: n
                            }
                        }
                    }, function(t, n) {
                        return {
                            type: i.w.FAILED,
                            payload: {
                                setIds: e,
                                res: n
                            }
                        }
                    }]
                })
            }
        },
        7570: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return g
                }
            });
            var r = n(8648),
                a = n(82695),
                i = n(9884),
                o = n(72833),
                s = n(76118),
                c = n(89964),
                u = n(78001),
                l = n(65317);

            function m(e, t) {
                var n;
                if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return d(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t)
                        }(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);
                        var r = 0;
                        return function() {
                            return r >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[r++]
                            }
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                return (n = e[Symbol.iterator]()).next.bind(n)
            }

            function d(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function f() {
                return (f = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var p = {
                    imageFlag: [],
                    iconInPrice: [],
                    overlayImage: [],
                    promotionLabel: [],
                    bottomRight: [{
                        type: u.O.ADS,
                        id: -402,
                        data: u.O.ADS
                    }, {
                        type: u.O.VIDEO,
                        id: -401,
                        data: u.O.VIDEO
                    }],
                    topRight: [{
                        type: l.e.DISCOUNT,
                        id: -303,
                        data: l.e.DISCOUNT
                    }],
                    featureElement: [],
                    maxBadges: f({}, a.$P),
                    status: a.c9.DEFAULT
                },
                v = {
                    bySet: {}
                };

            function y(e, t) {
                for (var n, r = e.badges, a = [], i = m(void 0 === r ? [] : r); !(n = i()).done;) {
                    var o = n.value;
                    "predefined" === o.type ? a.push({
                        type: o.data,
                        id: o.id,
                        data: o.data
                    }) : "custom" === o.type && a.push({
                        type: t,
                        id: o.id,
                        data: o.data
                    })
                }
                return a
            }

            function g(e, t) {
                switch (void 0 === e && (e = v), t.type) {
                    case r.w.REQUESTED:
                        for (var n, u = t.payload.setIds, l = f({}, e.bySet), d = m(u); !(n = d()).done;) {
                            var g = n.value;
                            l[g] = f({}, p, e.bySet[g], {
                                maxBadges: a.U5[g] || a.$P,
                                status: a.c9.LOADING
                            })
                        }
                        return f({}, e, {
                            bySet: l
                        });
                    case r.w.SUCCESS:
                        for (var h, I = t.payload, _ = I.setIds, E = I.res, S = f({}, e.bySet), O = m(_); !(h = O()).done;) {
                            var b = h.value,
                                C = E && E[b] || null;
                            C ? S[b] = f({}, p, {
                                maxBadges: a.U5[b] || a.$P,
                                status: a.c9.LOADED,
                                imageFlag: y({
                                    type: "image_flag",
                                    badges: C.image_flag
                                }, i.S.CUSTOM),
                                iconInPrice: y({
                                    type: "icon_in_price",
                                    badges: C.icon_in_price
                                }, o.d.CUSTOM),
                                overlayImage: y({
                                    type: "overlay_image",
                                    badges: C.overlay_image
                                }, s.y.CUSTOM),
                                promotionLabel: y({
                                    type: "promotion_label",
                                    badges: C.promotion_label
                                }, c.z.CUSTOM),
                                featureElement: y({
                                    type: "feature_element",
                                    badges: C.feature_element
                                }, "CUSTOM")
                            }) : S[b] = f({}, e.bySet[b], {
                                status: a.c9.FAILED
                            })
                        }
                        return f({}, e, {
                            bySet: S
                        });
                    case r.w.FAILED:
                        for (var A, P = t.payload.setIds, D = f({}, e.bySet), T = m(P); !(A = T()).done;) {
                            var k = A.value;
                            D[k] = f({}, e.bySet[k], {
                                status: a.c9.FAILED
                            })
                        }
                        return f({}, e, {
                            bySet: D
                        });
                    default:
                        return e
                }
            }
        },
        94001: function(e, t, n) {
            "use strict";

            function r(e, t, n) {
                void 0 === n && (n = function(e) {
                    return e.itemCardManifest
                });
                var r = n(e);
                return t && r ? r.bySet[t] : {}
            }
            n.d(t, {
                T: function() {
                    return r
                }
            })
        },
        48556: function(e, t, n) {
            "use strict";
            n.d(t, {
                ZP: function() {
                    return f
                }
            });
            var r = n(27378),
                a = n(60042),
                i = n.n(a),
                o = n(3347),
                s = n(13384),
                c = n(89018),
                u = {
                    itemImage: "mxM4vG",
                    wrapper: "_2SHkSu"
                },
                l = n(45366),
                m = n(3792),
                d = function(e) {
                    var t = e.item,
                        a = e.isUserAdult,
                        o = e.adultAge,
                        d = e.getImageUrl,
                        f = e.className,
                        p = e.placeholderClassName,
                        v = e.children,
                        y = e.maskAdultImageWhenApplicable,
                        g = e.useTransparentBackgroundImage,
                        h = e.useThumbnailImage,
                        I = void 0 === h || h,
                        _ = e.showSoldOutBadge,
                        E = void 0 === _ || _,
                        S = !!(y && t && t.is_adult) && !a,
                        O = n(98320)("./" + o + "-plus.png").default,
                        b = (0, m.Z)(t, ["overlay_image"], ""),
                        C = b || (0, m.Z)(t, ["image"]),
                        A = S ? O : t ? d(g && t.transparent_background_image ? t.transparent_background_image : C, I) : null;
                    return t ? r.createElement(s.p, {
                        useImgTag: !0,
                        className: i()(u.itemImage, S && u.adultImage, f),
                        wrapperClassName: i()(u.wrapper),
                        placeholderClassName: p,
                        src: A,
                        alt: t.name ? t.name : ""
                    }, (0, l.E)({
                        item: t,
                        options: {
                            badges: {
                                showSoldOutBadge: E
                            }
                        }
                    }) ? r.createElement(c.Z, null) : null, v) : null
                };
            d.defaultProps = {
                useTransparentBackgroundImage: !1
            };
            var f = (0, o.aQ)(d)
        },
        75749: function(e, t, n) {
            "use strict";
            n.d(t, {
                ZP: function() {
                    return o
                }
            });
            var r = n(27378),
                a = n(3347);

            function i(e, t) {
                return (i = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }
            var o = function(e) {
                var t, n;

                function o(t) {
                    var n;
                    n = e.call(this, t) || this;
                    var r = t.item,
                        a = t.locale,
                        i = t.manifest;
                    return n.state = {
                        item: r,
                        locale: a,
                        manifest: i
                    }, n
                }
                n = e, (t = o).prototype = Object.create(n.prototype), t.prototype.constructor = t, i(t, n);
                var s = o.prototype;
                return s.componentDidUpdate = function(e) {
                    var t = this.props,
                        n = t.item,
                        r = t.locale,
                        a = t.manifest,
                        i = e.item,
                        o = e.manifest;
                    n && r && (n !== i || a !== o) && this.setState({
                        item: n,
                        locale: r,
                        manifest: a
                    })
                }, s.render = function() {
                    var e = this.props.children;
                    return r.createElement(a.ZP.Provider, {
                        value: this.state
                    }, e)
                }, o
            }(r.Component)
        },
        76136: function(e, t, n) {
            "use strict";
            n.d(t, {
                O: function() {
                    return a
                }
            });
            var r = n(27378),
                a = r.createContext(!1)
        },
        30814: function(e, t, n) {
            "use strict";
            n.d(t, {
                ZP: function() {
                    return Z
                }
            });
            var r = n(27378),
                a = n(86552),
                i = n(48189),
                o = n(79308),
                s = n(82695),
                c = n(94001),
                u = n(87999),
                l = n(7570),
                m = n(86959),
                d = n(96733),
                f = n(30085),
                p = n(80525),
                v = n(97953),
                y = n(68069),
                g = n(8205);

            function h() {
                return (h = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function I(e, t, n, r, a, i, o) {
                try {
                    var s = e[i](o),
                        c = s.value
                } catch (e) {
                    return void n(e)
                }
                s.done ? t(c) : Promise.resolve(c).then(r, a)
            }

            function _(e, t) {
                return (_ = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }
            var E = !!v.pp.GROUP_BUY,
                S = function(e, t) {
                    var n = t.item,
                        r = (0, d._k)(e, n ? n.itemid : 0);
                    n && r && (n.liked = r.liked, n.liked_count = r.liked_count);
                    var a = t.setId || s.$o.STANDARD,
                        i = (0, m.fn)(e);
                    return {
                        item: n,
                        manifest: (0, c.T)(e, a),
                        isCcInstallmentPaymentWhitelist: !!i && i.is_cc_installment_payment_eligible,
                        isNonCcInstallmentPaymentWhitelist: !!i && i.is_non_cc_installment_payment_eligible,
                        SHOULD_SHOW_DD_LABEL: (0, y.Au)(e.featureToggles, g.OyX),
                        SHOW_RELATIONSHIP_LABEL: (0, y.Au)(e.featureToggles, g.isJ)
                    }
                },
                O = {
                    passItemDataFromList: a.Zm,
                    setOfficialShopTheme: i.ty,
                    fetchItemCardManifestV2: u.C
                };
            var b = function(e) {
                    var t = function(t) {
                        var n, a;

                        function i(e) {
                            return t.call(this, e) || this
                        }
                        a = t, (n = i).prototype = Object.create(a.prototype), n.prototype.constructor = n, _(n, a);
                        var o = i.prototype;
                        return o.universalDataFetch = function() {
                            return this.load(this.props)
                        }, o.load = function() {
                            var e, t = (e = regeneratorRuntime.mark((function e(t) {
                                var n;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if ("function" == typeof t.injectAsyncReducer && t.injectAsyncReducer({
                                                    itemCardManifest: l.Z
                                                }), !(n = t.setId)) {
                                                e.next = 6;
                                                break
                                            }
                                            if (i.manifestRequested[n]) {
                                                e.next = 6;
                                                break
                                            }
                                            return i.manifestRequested[n] = !0, e.abrupt("return", t.fetchItemCardManifestV2([n]));
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })), function() {
                                var t = this,
                                    n = arguments;
                                return new Promise((function(r, a) {
                                    var i = e.apply(t, n);

                                    function o(e) {
                                        I(i, r, a, o, s, "next", e)
                                    }

                                    function s(e) {
                                        I(i, r, a, o, s, "throw", e)
                                    }
                                    o(void 0)
                                }))
                            });
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }(), o.componentDidMount = function() {
                            this.load(this.props)
                        }, o.render = function() {
                            var t = this.props,
                                n = t.item,
                                a = t.manifest,
                                i = t.isCcInstallmentPaymentWhitelist,
                                o = t.isNonCcInstallmentPaymentWhitelist,
                                s = t.SHOULD_SHOW_DD_LABEL,
                                c = t.SHOW_RELATIONSHIP_LABEL,
                                u = (0, p.ZP)(a, n, {
                                    supportsGroupBuy: E,
                                    supportsPwg: !0,
                                    isCcInstallmentPaymentWhitelist: i,
                                    isNonCcInstallmentPaymentWhitelist: o,
                                    showDeepDiscountLabel: s,
                                    showRelationshipLabel: c
                                }),
                                l = this.props,
                                m = (l.fetchItemCardManifestV2, l.injectAsyncReducer, function(e, t) {
                                    if (null == e) return {};
                                    var n, r, a = {},
                                        i = Object.keys(e);
                                    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                                    return a
                                }(l, ["fetchItemCardManifestV2", "injectAsyncReducer"]));
                            return r.createElement(e, h({}, m, {
                                badges: u
                            }))
                        }, i
                    }(r.Component);
                    return t.manifestRequested = {}, t.defaultProps = {
                        setId: s.$o.STANDARD
                    }, (0, o.connect)(S, O)((0, f.withInjectReducer)(t))
                },
                C = n(73727),
                A = n(92027);
            var P = function(e) {
                return function(t) {
                    var n = function(e) {
                            var t = e.item,
                                n = e.listPosition,
                                r = void 0 === n ? -1 : n,
                                a = e.adParams,
                                i = (a = void 0 === a ? {} : a).adsId,
                                o = void 0 === i ? 0 : i,
                                s = a.adsKeyword,
                                c = void 0 === s ? null : s,
                                u = a.campaignId,
                                l = void 0 === u ? 0 : u,
                                d = (0, A.Wc)({
                                    position: r,
                                    adsid: o,
                                    campaignid: l,
                                    ads_keyword: c
                                }),
                                f = t ? (0, m.$h)(t.shopid, t.itemid, t.name) : "#";
                            return {
                                urlSearchParam: d,
                                productPageUrl: f
                            }
                        }(t),
                        a = n.productPageUrl,
                        i = n.urlSearchParam,
                        o = t.item,
                        s = t.passItemDataFromList;
                    return r.createElement(C.Link, {
                        to: i ? {
                            pathname: a,
                            search: i
                        } : a,
                        "data-sqe": "link",
                        onClick: function() {
                            return s(o)
                        }
                    }, r.createElement(e, t))
                }
            };
            var D = n(98466);

            function T() {
                return (T = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var k = function(e) {
                    return (0, D.Z)((function(t) {
                        var n = t.trackingRef,
                            a = t.trackingClick,
                            i = function(e, t) {
                                if (null == e) return {};
                                var n, r, a = {},
                                    i = Object.keys(e);
                                for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                                return a
                            }(t, ["trackingRef", "trackingClick"]);
                        return r.createElement(e, T({
                            trackingRef: n,
                            onTrackingClick: a
                        }, i))
                    }), "ItemCard", {
                        reportOnce: !0
                    })
                },
                w = n(76136);

            function N() {
                return (N = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var L = n(43058),
                R = n(62399),
                B = n(64653),
                U = v.oc.withI18nCollections,
                Z = (0, L.qC)(R.Pf, b, k, P, (function(e) {
                    return function(t) {
                        return r.createElement(w.O.Consumer, null, (function(n) {
                            return r.createElement(e, N({}, t, {
                                useTransparentBackgroundImage: n
                            }))
                        }))
                    }
                }), U([B.xv], m.nO))
        },
        2552: function(e, t, n) {
            "use strict";
            n.d(t, {
                k: function() {
                    return s
                }
            });
            var r = n(27378),
                a = n(79308),
                i = n(84106);
            n(18363);
            var o = {};

            function s(e) {
                var t = e.limit,
                    n = e.offset,
                    s = e.isItemOnly,
                    c = e.itemCardStyle,
                    u = e.forceRefetch,
                    l = e.skipFirstPage,
                    m = e.getDailyDiscoverMainStore,
                    d = (0, a.useDispatch)(),
                    f = r.useState(n || 0),
                    p = f[0],
                    v = f[1],
                    y = r.useMemo((function() {
                        return p + "-" + (p + t)
                    }), [p, t]),
                    g = r.useCallback((function() {
                        return !u && !!o[y]
                    }), [u, y]),
                    h = r.useCallback((function() {
                        o[y] || (o[y] = !0)
                    }), [y]);
                r.useEffect((function() {
                    l && 0 === p ? h() : d((0, i.aN)({
                        offset: p,
                        limit: t,
                        itemCardStyle: c,
                        shouldSkipCall: g,
                        onFinish: h
                    }))
                }), [p, d, c, t, h, g, l]);
                var I = r.useCallback((function(e) {
                        v(e)
                    }), []),
                    _ = (0, a.useSelector)((function(e) {
                        return m(e)
                    }));
                return {
                    items: r.useMemo((function() {
                        return s ? (0, i.l_)(_, {
                            limit: t,
                            offset: n
                        }) : (0, i.KM)(_, {
                            limit: t,
                            offset: n
                        })
                    }), [s, t, n, _]),
                    total: (0, i.NU)(_),
                    limit: t,
                    offset: p,
                    store: _,
                    loadPage: I
                }
            }
        },
        13130: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return U
                }
            });
            var r, a = n(27378),
                i = n(94184),
                o = n.n(i),
                s = n(61113),
                c = n(48556),
                u = n(86959),
                l = n(74301),
                m = n(43351),
                d = n(12068),
                f = {
                    image: " "
                },
                p = function(e) {
                    var t = e.isGridDisplay,
                        n = void 0 === t || t;
                    return a.createElement(u.pI, {
                        className: n ? d.Z.withMarginBottom : ""
                    }, a.createElement(c.ZP, {
                        item: f,
                        getImageUrl: l.Jn,
                        adultAge: m.jC,
                        isUserAdult: !0
                    }), a.createElement("div", {
                        className: u.c9.lower
                    }, a.createElement("div", {
                        className: u.c9.nameEtAl
                    }), a.createElement("div", {
                        className: u.c9.priceEtAl
                    })))
                },
                v = n(49370),
                y = n(98466),
                g = n(23287),
                h = "_3BrES5",
                I = "_3PNTgJ",
                _ = (0, y.Z)((function(e) {
                    var t = e.url,
                        n = e.recommendType,
                        r = e.trackingRef;
                    return a.createElement("div", {
                        className: h,
                        ref: r
                    }, a.createElement(v.Sy, {
                        size: "m",
                        link: t,
                        className: I,
                        recommendType: n
                    }, (0, g.t)("rcmd_label_see_more")))
                }), "HomeRecommendSeeMoreButton"),
                E = n(45141),
                S = n(34995),
                O = n(22333),
                b = n(3811),
                C = n(76282),
                A = n(41525),
                P = n(6508),
                D = n(91208),
                T = "_1syN0y",
                k = "_1YAByT",
                w = "_3OV6O1",
                N = "_1DCRPM",
                L = "SvLatV",
                R = ((r = {})[D.V2.Tiny] = N, r[D.V2.Portrait] = w, r),
                B = function(e) {
                    return R.hasOwnProperty(e) ? {
                        responsiveClassName: R[e]
                    } : {
                        responsiveClassName: ""
                    }
                },
                U = function(e) {
                    var t = e.items,
                        n = e.total,
                        r = e.loading,
                        i = e.isUserAdult,
                        c = e.tabId,
                        u = e.recommendType,
                        l = (0, D.uW)({
                            mapLayoutTypeToUsedLayoutValue: B
                        }).responsiveClassName;
                    if (r) return a.createElement("div", {
                        className: T
                    }, a.createElement(E.Z, {
                        show: !0,
                        hideOverlay: !0
                    }));
                    if (!t || !t.length) return a.createElement("div", {
                        className: L
                    }, (0, g.t)("label_no_products_found"));
                    var m = u === C.P.DAILY_DISCOVER ? b.jT.getUrl({
                            pageNumber: 2
                        }) : b.SP.getUrl({
                            pageNumber: 2
                        }),
                        d = !!n && n > A.ID.DAILY_DISCOVER_BATCH_SIZE && m;
                    return a.createElement("div", {
                        className: T
                    }, t.map((function(e, t) {
                        var n = {
                                item: e,
                                recommendType: u,
                                listPosition: t,
                                from: e.from,
                                showItemFindSimilarButton: !0,
                                adsTrackingData: {
                                    placement: P.E_.DAILY_DISCOVER
                                },
                                isUserAdult: i,
                                tabId: c
                            },
                            r = t < 18 ? a.createElement(s.Z, n) : a.createElement(S.Z, {
                                placeholder: a.createElement(p, null)
                            }, a.createElement(s.Z, n));
                        return a.createElement(O.ZP, {
                            key: e.itemid,
                            targetData: {
                                index: t
                            }
                        }, a.createElement("div", {
                            className: o()(k, l)
                        }, r))
                    })), d && a.createElement(_, {
                        url: m,
                        recommendType: u
                    }))
                }
        },
        51611: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(27378),
                a = n(79308),
                i = n(84691),
                o = n(13130),
                s = n(69627),
                c = n(84106),
                u = n(2552),
                l = n(93387),
                m = n(21875),
                d = n(41525),
                f = n(18363),
                p = n(82695);
            var v = [f.Z.INIT, f.Z.REQ];
            t.default = (0, i.compose)(s.fg, (0, a.connect)())((function(e) {
                var t = e.recommendType,
                    n = e.tabId,
                    a = e.isUserAdult,
                    i = e.isConfigFromBff,
                    s = e.injectAsyncReducer;
                r.useEffect((function() {
                    var e;
                    s(((e = {})[d.tW] = c.fp, e))
                }), [s]);
                var f = (0, u.k)({
                        limit: d.ID.DAILY_DISCOVER_BATCH_SIZE,
                        getDailyDiscoverMainStore: m.S,
                        isItemOnly: !0,
                        itemCardStyle: p.$o.SIMPLIFIED_COUNT,
                        skipFirstPage: i
                    }),
                    y = f.items,
                    g = f.total,
                    h = f.store,
                    I = r.useMemo((function() {
                        return (0, l.O)(y).slice(0, d.ID.DAILY_DISCOVER_DISPLAY_SIZE)
                    }), [y]),
                    _ = !h || v.includes(h.progress);
                return r.createElement(o.Z, {
                    items: I,
                    total: g,
                    loading: _,
                    isUserAdult: a,
                    tabId: n,
                    recommendType: t
                })
            }))
        },
        21875: function(e, t, n) {
            "use strict";
            n.d(t, {
                S: function() {
                    return a
                },
                E: function() {
                    return i
                }
            });
            var r = n(41525);

            function a(e) {
                return e[r.tW]
            }

            function i(e) {
                return e[r.of]
            }
        },
        61113: function(e, t, n) {
            "use strict";
            var r = n(27378),
                a = n(79308),
                i = n(94184),
                o = n.n(i),
                s = n(74301),
                c = n(43351),
                u = n(82695),
                l = n(78001),
                m = n(92700),
                d = n(6976),
                f = n(30814),
                p = n(75749),
                v = n(48556),
                y = n(86959),
                g = n(12068),
                h = n(68069),
                I = n(8205);

            function _(e, t) {
                return (_ = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }
            var E = (0, d.Kd)(),
                S = function(e) {
                    var t, n;

                    function a(t) {
                        var n;
                        return (n = e.call(this, t) || this).passBoundingBoxWidth = function(e) {
                            e !== n.state.iconsInPriceBoundingWidth && n.setState({
                                iconsInPriceBoundingWidth: e
                            })
                        }, n.state = {
                            iconsInPriceBoundingWidth: 0
                        }, n
                    }
                    return n = e, (t = a).prototype = Object.create(n.prototype), t.prototype.constructor = t, _(t, n), a.prototype.render = function() {
                        var e, t = this.props,
                            n = t.item,
                            a = t.manifest,
                            i = t.displayCountType,
                            d = t.showItemFindSimilarButton,
                            f = t.isUserAdult,
                            h = t.useTransparentBackgroundImage,
                            I = t.isGridDisplay,
                            _ = void 0 === I || I,
                            S = t.trackingRef,
                            O = t.onTrackingClick,
                            b = t.withBorder,
                            C = t.SHOW_RELATIONSHIP_LABEL,
                            A = (a || {}).status,
                            P = A === u.c9.LOADED || A === u.c9.FAILED;
                        return r.createElement(p.ZP, {
                            locale: E,
                            item: n,
                            manifest: a
                        }, r.createElement(y.pI, {
                            trackingRef: S,
                            onTrackingClick: O,
                            className: _ ? g.Z.withPaddingBottom : "",
                            showItemFindSimilarButton: d,
                            withBorder: b
                        }, r.createElement(v.ZP, {
                            getImageUrl: s.Jn,
                            adultAge: c.jC,
                            isUserAdult: f,
                            maskAdultImageWhenApplicable: m.Z.ITEM_LIST_ADULT_CHECK,
                            useTransparentBackgroundImage: h
                        }, P && r.createElement(r.Fragment, null, r.createElement(y.xn, null), r.createElement(y.V, null), r.createElement(y.FY, {
                            componentMapping: Object.freeze((e = {}, e[l.O.ADS] = y.aF, e))
                        }), r.createElement(y.BT, null))), r.createElement("div", {
                            className: y.c9.lower
                        }, r.createElement("div", {
                            className: y.c9.nameEtAl
                        }, r.createElement(y.Rg, {
                            showPromotionLabels: P,
                            showRelationshipLabel: C
                        })), n && n.itemid ? r.createElement("div", {
                            className: o()(g.Z.priceEtAl, y.c9.priceEtAl)
                        }, r.createElement(y.u1, {
                            className: g.Z.lowestPrice,
                            actualPriceBoundingWidth: this.state.iconsInPriceBoundingWidth
                        }), r.createElement(y.FP, {
                            displayCountType: i,
                            className: g.Z.soldCount
                        })) : r.createElement("div", {
                            className: g.Z.priceEtAl
                        }))))
                    }, a
                }(r.Component);
            var O = (0, f.ZP)((0, a.connect)((function(e) {
                return {
                    SHOW_RELATIONSHIP_LABEL: (0, h.Au)(e.featureToggles, I.isJ)
                }
            }))(S));
            O.defaultProps = {
                setId: u.$o.DAILY_DISCOVER
            }, t.Z = O
        },
        34995: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return s
                }
            });
            var r = n(27378),
                a = n.n(r),
                i = n(61439);

            function o(e, t) {
                return (o = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }
            var s = function(e) {
                var t, n;

                function r(t) {
                    var n;
                    return (n = e.call(this, t) || this).state = {
                        showContent: !1
                    }, n
                }
                return n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, o(t, n), r.prototype.render = function() {
                    var e = this,
                        t = this.props,
                        n = t.wrapperStyle,
                        r = t.extraRenderCondition,
                        o = void 0 === r || r,
                        s = t.onEnterViewPort,
                        c = t.children,
                        u = t.placeholder;
                    return this.state.showContent && o ? c : a().createElement(i.U, {
                        onEnterViewPort: function() {
                            "function" == typeof s && s(), e.setState({
                                showContent: !0
                            })
                        }
                    }, a().createElement("div", {
                        style: n
                    }, !!u && u))
                }, r
            }(r.Component)
        },
        93387: function(e, t, n) {
            "use strict";
            n.d(t, {
                O: function() {
                    return r.Ok
                }
            });
            var r = n(72364)
        },
        12068: function(e, t) {
            "use strict";
            t.Z = {
                itemName: "_3yvN_a",
                withMarginBottom: "_3Xj2IC",
                withPaddingBottom: "_1xBuj-",
                priceEtAl: "ytlYat",
                lowestPrice: "MwNe1W",
                soldCount: "_1OROrQ"
            }
        },
        80477: function(e, t, n) {
            "use strict";
            n.r(t), t.default = n.p + "e0d1677a58deaa693aa9fcea93255096.png"
        },
        73834: function(e, t, n) {
            "use strict";
            n.r(t), t.default = n.p + "3d819965643f1287ea7358313e66e85e.png"
        },
        43701: function(e, t, n) {
            "use strict";
            n.r(t), t.default = n.p + "f897d97e691bc43c7b917018f97ad5bc.png"
        },
        98320: function(e, t, n) {
            var r = {
                "./18-plus.png": 80477,
                "./20-plus.png": 73834,
                "./21-plus.png": 43701
            };

            function a(e) {
                var t = i(e);
                return n(t)
            }

            function i(e) {
                if (!n.o(r, e)) {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }
                return r[e]
            }
            a.keys = function() {
                return Object.keys(r)
            }, a.resolve = i, e.exports = a, a.id = 98320
        }
    }
]);
//# sourceMappingURL=https://shopee.sg/assets/HomeDailyDiscoverMainContent.b222f8d05a751e6e2df2.js.map