(("undefined" != typeof self ? self : this).webpackChunkshopee_pc = ("undefined" != typeof self ? self : this).webpackChunkshopee_pc || []).push([
    [442], {
        33972: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return we
                }
            });
            var a, r = t(27378),
                l = t(79308),
                s = t(43058),
                o = t(69068),
                i = t(18363),
                c = (0, o.n)("FETCH_HOME_OFFICIAL_MALL_SHOP"),
                u = t(14081);

            function m() {
                return (m = Object.assign || function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
                    }
                    return e
                }).apply(this, arguments)
            }
            var p = m({}, i.e, {
                    mallShops: []
                }),
                f = ((a = {})[c.SUCCESS] = function(e, n) {
                    var t;
                    return m({}, e, i.e, {
                        apiProgress: i.Z.OK,
                        mallShops: null != (t = n.payload.shops) ? t : [],
                        brandOfTheWeek: n.payload.brand_of_the_week
                    })
                }, a[c.FAILED] = function(e, n) {
                    return m({}, e, i.e, {
                        apiProgress: i.Z.ERR,
                        error: n.payload
                    })
                }, a),
                _ = (0, u.Z)(f, p),
                g = t(72609),
                d = t(92027);
            var v = t(19511);

            function h(e, n, t, a, r, l, s) {
                try {
                    var o = e[l](s),
                        i = o.value
                } catch (e) {
                    return void t(e)
                }
                o.done ? n(i) : Promise.resolve(i).then(a, r)
            }
            var k = t(30085),
                E = t(4918),
                N = t(84571),
                y = t(66156),
                b = t(95802),
                I = t(13384),
                O = t(98466),
                S = "_35r9oG",
                w = "_3GoGen",
                x = (0, O.Z)((function(e) {
                    var n = e.banner,
                        t = e.trackingRef,
                        a = e.trackingClick,
                        l = !!(n && n.navigate_params && n.navigate_params.url && "#" === n.navigate_params.url),
                        s = n.navigate_params && n.navigate_params.url;
                    return r.createElement("div", {
                        ref: t
                    }, r.createElement(b.Z, {
                        to: (0, d.OE)(s),
                        className: w,
                        style: l ? {
                            cursor: "default"
                        } : {},
                        onClick: function(e) {
                            l && e && e.preventDefault(), a && a()
                        }
                    }, r.createElement(I.p, {
                        className: w,
                        src: n.pc_banner_image ? n.pc_banner_image : null
                    })))
                }), "OfficialBanner");

            function C(e) {
                var n = e.banners;
                return r.createElement(y.ZP, {
                    indexType: n.length > 1 ? y.QV.DOTS : y.QV.NONE,
                    arrowDisplayType: y.sP.HIDDEN,
                    ratio: 1.1894736842105262,
                    className: S
                }, n.map((function(e, n) {
                    return r.createElement(x, {
                        banner: e,
                        key: e.id,
                        index: n
                    })
                })))
            }
            var Z = t(8013),
                R = t(72323),
                L = t(6965),
                F = (0, l.connect)(null, {
                    setHomeOfficialShopSectionFocusIndex: R.eg
                })((0, O.Z)((function(e) {
                    var n = e.carouselFocusIndex,
                        t = e.link,
                        a = e.setHomeOfficialShopSectionFocusIndex,
                        l = e.trackingRef,
                        s = e.trackingClick;
                    return r.createElement(b.Z, {
                        to: (0, d.OE)(t),
                        className: "ofs-carousel__item ofs-seemore",
                        onClick: function() {
                            a(n), s && s()
                        },
                        _ref: l
                    }, r.createElement("div", {
                        className: "ofs-carousel__cover-image"
                    }), r.createElement("div", {
                        className: "ofs-seemore__content"
                    }, (0, L.t)("home_page_ofs_section_see_all"), r.createElement("div", {
                        className: "ofs-seemore__arrow"
                    }, r.createElement(E.Z, null))))
                }), "OfficialShopSeeMore")),
                T = t(40011);

            function P() {
                return (P = Object.assign || function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
                    }
                    return e
                }).apply(this, arguments)
            }
            var A = (0, l.connect)(null, {
                    setHomeOfficialShopSectionFocusIndex: R.eg
                })((0, O.Z)((function(e) {
                    var n = e.trackingRef,
                        t = e.trackingClick,
                        a = e.url,
                        l = e.backgroundImage,
                        s = e.labelText,
                        o = e.setHomeOfficialShopSectionFocusIndex,
                        i = e.carouselFocusIndex,
                        c = function(e, n) {
                            if (null == e) return {};
                            var t, a, r = {},
                                l = Object.keys(e);
                            for (a = 0; a < l.length; a++) t = l[a], n.indexOf(t) >= 0 || (r[t] = e[t]);
                            return r
                        }(e, ["trackingRef", "trackingClick", "url", "backgroundImage", "labelText", "setHomeOfficialShopSectionFocusIndex", "carouselFocusIndex"]),
                        u = "#" === a;
                    return r.createElement("div", P({
                        onClick: t,
                        ref: n,
                        className: "ofs-carousel__item"
                    }, c), r.createElement(b.Z, {
                        to: (0, d.OE)(a),
                        style: u ? {
                            cursor: "default"
                        } : {},
                        onClick: function(e) {
                            u ? e && e.preventDefault() : o(i)
                        },
                        className: "ofs-carousel__shop-cover-image"
                    }, r.createElement(I.p, {
                        className: "ofs-carousel__cover-image",
                        src: l ? (0, T.R)(l, 2) : null,
                        imageServerWidthOperator: 201
                    })), r.createElement("div", {
                        className: "ofs-carousel__item__text"
                    }, s))
                }), "OfficialShopCard")),
                H = t(60042),
                j = t.n(H),
                M = t(49792),
                D = t(60710),
                B = {
                    ofsCarouselItems: "QKY3Jf",
                    ofsCarouselItemsShops: "_1QAEyW"
                };

            function Q() {
                return (Q = Object.assign || function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
                    }
                    return e
                }).apply(this, arguments)
            }

            function U(e, n) {
                return (U = Object.setPrototypeOf || function(e, n) {
                    return e.__proto__ = n, e
                })(e, n)
            }
            var V = function(e) {
                    var n, t;

                    function a() {
                        return e.apply(this, arguments) || this
                    }
                    t = e, (n = a).prototype = Object.create(t.prototype), n.prototype.constructor = n, U(n, t);
                    var l = a.prototype;
                    return l.oneRowShops = function() {
                        var e = this,
                            n = this.props,
                            t = n.shops,
                            a = n.seeAllLink;
                        return t.map((function(n, t) {
                            return r.createElement("div", {
                                key: t
                            }, e.individualShop(n, t))
                        })).concat(r.createElement(F, {
                            key: "n",
                            carouselFocusIndex: t.length,
                            link: a
                        }))
                    }, l.twoRowShops = function() {
                        var e = this,
                            n = this.props,
                            t = n.shops,
                            a = n.seeAllLink,
                            l = n.numRows,
                            s = t.length,
                            o = [];
                        t.forEach((function(n, t) {
                            var a = e.individualShop(n, t);
                            t % 2 ? o[t >> 1].push(a) : o.push([a])
                        }));
                        var i = r.createElement(F, {
                            key: "m",
                            carouselFocusIndex: Math.floor(s / l),
                            link: a
                        });
                        return s % 2 && o[o.length - 1].push(i), o.map((function(e, n) {
                            return r.createElement("div", {
                                key: n
                            }, e[0], e[1])
                        }))
                    }, l.individualShop = function(e, n) {
                        var t = e.url,
                            a = e.image,
                            l = e.promo_text,
                            s = function(e, n) {
                                if (null == e) return {};
                                var t, a, r = {},
                                    l = Object.keys(e);
                                for (a = 0; a < l.length; a++) t = l[a], n.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r
                            }(e, ["url", "image", "promo_text"]);
                        return r.createElement(A, Q({
                            key: n,
                            carouselFocusIndex: Math.floor(n / this.props.numRows),
                            url: t || M.Ri.getUrl({
                                shopId: e.shopid
                            }),
                            backgroundImage: (0, D.Jn)(a),
                            labelText: l,
                            location: n
                        }, s))
                    }, l.render = function() {
                        var e = this.props,
                            n = e.hasBanner,
                            t = e.numItemsPerRow,
                            a = e.numRows,
                            l = e.carouselFocusIndex,
                            s = e.trackingRef;
                        return r.createElement("div", {
                            className: j()(B.ofsCarousel, n ? B.ofsCarouselItemsShops : B.ofsCarouselItems),
                            ref: s
                        }, r.createElement(Z.lr, {
                            showArrowOnHover: !0,
                            numItemsPerRow: t,
                            padding: "0",
                            items: 1 === a ? this.oneRowShops() : this.twoRowShops(),
                            keepPreviousItemOnSlide: !1,
                            showArrowHint: !0,
                            focusIndex: l
                        }))
                    }, a
                }(r.Component),
                W = (0, O.Z)(V, "OfficialShopCarousel"),
                K = t(73727),
                G = t(3792),
                Y = t(3140),
                q = t(9315),
                J = t(70590),
                X = "_2jXJnV",
                z = "_2QwDm3",
                $ = function(e) {
                    var n = e.title;
                    return r.createElement(Y.Z.Consumer, null, (function(e) {
                        var t = e.customHeader;
                        return r.createElement(q.Z, {
                            headerText: n,
                            customHeader: (0, G.Z)(t, [J.u.OFFICIAL_MALL])
                        })
                    }))
                },
                ee = (0, O.Z)((function(e) {
                    var n = e.headerLink,
                        t = e.title,
                        a = e.trackingClick;
                    return n ? r.createElement(K.Link, {
                        className: j()(X, z),
                        to: n,
                        onClick: function() {
                            a && a()
                        }
                    }, r.createElement($, {
                        title: t
                    })) : r.createElement("div", {
                        className: X,
                        onClick: function() {
                            a && a()
                        }
                    }, r.createElement($, {
                        title: t
                    }))
                }), "OfficialShopTitle"),
                ne = t(49101),
                te = t(64653),
                ae = t(72699),
                re = t(29031),
                le = t(62199),
                se = t(22333),
                oe = "_2V1-Vu",
                ie = "_19fjwV",
                ce = "_3WSAH5",
                ue = "_2TyZyx",
                me = "_2Kl5gH",
                pe = "sQprQi",
                fe = "_2SCKPT",
                _e = "FxuC02";

            function ge(e, n) {
                return (ge = Object.setPrototypeOf || function(e, n) {
                    return e.__proto__ = n, e
                })(e, n)
            }
            var de = (0, ae.qY.getUrl)(),
                ve = {
                    linkTo: "#",
                    text: ""
                },
                he = function(e) {
                    var n, t;

                    function a() {
                        return e.apply(this, arguments) || this
                    }
                    t = e, (n = a).prototype = Object.create(t.prototype), n.prototype.constructor = n, ge(n, t);
                    var l = a.prototype;
                    return l.shouldComponentUpdate = function(e) {
                        var n = this.props;
                        return (0, re.Z)(n, e, ["categoryId", "numItemsPerRow", "numRows", "itemLink", "carouselFocusIndex", "seeAllLink"], ["shops", "searchParams"])
                    }, l.render = function() {
                        var e = this.props,
                            n = e.seeAllLink,
                            t = e.banners,
                            a = e.carouselFocusIndex,
                            l = e.numItemsPerRow,
                            s = e.numRows,
                            o = e.shops;
                        return r.createElement(se.ZP, {
                            targetType: "OfficialShopSection"
                        }, r.createElement(Y.Z.Consumer, null, (function(e) {
                            var i = e.customHeader;
                            return r.createElement(ne.S, {
                                hasNoNavigation: !0,
                                headerButton: ve,
                                headerText: r.createElement("div", {
                                    className: oe
                                }, r.createElement(ee, {
                                    headerLink: de,
                                    title: (0, L.t)("home_page_label_shopee_mall_header")
                                }), r.createElement("div", {
                                    className: me
                                }, le.Z.map((function(e, n) {
                                    var t = e.Icon,
                                        a = e.tagTitle;
                                    return r.createElement("div", {
                                        className: pe,
                                        key: n
                                    }, r.createElement(t, {
                                        className: fe
                                    }), (0, L.t)(a))
                                })))),
                                customButtonContent: r.createElement(N.LinkWithTrackImpression, {
                                    className: ie,
                                    to: n,
                                    targetType: "SeeAllLink"
                                }, r.createElement("div", {
                                    className: ce
                                }, (0, L.t)("home_page_ofs_section_see_all"), r.createElement("div", {
                                    className: ue
                                }, r.createElement(E.Z, null)))),
                                simpleVersion: !0,
                                customHeader: (0, G.Z)(i, [J.u.OFFICIAL_MALL])
                            }, t.length > 0 && r.createElement(C, {
                                banners: t
                            }), r.createElement(W, {
                                shops: o,
                                hasBanner: t.length > 0,
                                carouselFocusIndex: a,
                                numItemsPerRow: l,
                                numRows: s,
                                seeAllLink: n
                            }))
                        })))
                    }, a
                }(r.Component),
                ke = (0, L.withI18nCollections)([te.ZE], (function() {
                    return r.createElement("div", {
                        className: _e
                    }, r.createElement("div", {
                        className: "skeleton skeleton-medium skeleton-line",
                        style: {
                            height: 16,
                            marginLeft: 10,
                            marginRight: 5
                        }
                    }), r.createElement("div", {
                        className: "flex",
                        style: {
                            height: 452
                        }
                    }, r.createElement("div", {
                        className: "skeleton skeleton-full",
                        style: {
                            width: 380,
                            margin: 10,
                            marginRight: 0
                        }
                    }), r.createElement("div", {
                        className: "flex flex-column",
                        style: {
                            flex: 1,
                            margin: 10
                        }
                    }, r.createElement("div", {
                        className: "skeleton skeleton-full",
                        style: {
                            flex: 1
                        }
                    }), r.createElement("div", {
                        className: "skeleton skeleton-full",
                        style: {
                            flex: 1,
                            marginTop: 10
                        }
                    }))))
                }))(he),
                Ee = t(82500),
                Ne = t(50949),
                ye = t(73180),
                be = t(8205);

            function Ie(e, n) {
                return (Ie = Object.setPrototypeOf || function(e, n) {
                    return e.__proto__ = n, e
                })(e, n)
            }
            var Oe = ae.qY.getUrl,
                Se = function(e) {
                    var n, t;

                    function a(n) {
                        var t;
                        return t = e.call(this, n) || this, n.injectAsyncReducer({
                            officialMallShop: _
                        }), t
                    }
                    t = e, (n = a).prototype = Object.create(t.prototype), n.prototype.constructor = n, Ie(n, t);
                    var l = a.prototype;
                    return l.universalDataFetch = function() {
                        return this.props.fetchOfficialMallShopsLimitBy(23)
                    }, l.componentDidMount = function() {
                        this.universalDataFetch()
                    }, l.render = function() {
                        var e = this.props,
                            n = e.mallBanner,
                            t = e.mallShops,
                            a = e.focusIndex,
                            l = n.length > 0,
                            s = {
                                categoryId: -2,
                                shops: t,
                                seeAllLink: Ee.ROUTE_OFFICIAL_SHOP,
                                itemLink: Oe(),
                                carouselFocusIndex: a,
                                numItemsPerRow: l ? 4 : 6,
                                numRows: l ? 2 : 1,
                                banners: n || []
                            };
                        return r.createElement("div", {
                            className: "homepage-mall-section"
                        }, r.createElement(ke, s))
                    }, a
                }(r.PureComponent);
            var we = (0, s.qC)((0, l.connect)((function(e) {
                var n = (0, ye.Au)(e.featureToggles, be.flO),
                    t = function(e) {
                        return e.mallShops
                    }(e.officialMallShop || {}) || [];
                return n || (t = t.slice(0, 15)), {
                    IS_MALL_SHOP_ENABLED: n,
                    mallBanner: (0, Ne.UK)((0, Ne.tj)(e)),
                    mallShops: t,
                    focusIndex: (0, R.Qx)(e)
                }
            }), {
                fetchOfficialMallShopsLimitBy: function(e) {
                    return function() {
                        var n, t = (n = regeneratorRuntime.mark((function n(t, a) {
                            return regeneratorRuntime.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.next = 2, (0, v.Z)({
                                            apiCall: function() {
                                                return n = {
                                                    limit: e
                                                }, (0, g.fetchInfo)("/api/v4/homepage/mall_shops" + (0, d.Wc)(n));
                                                var n
                                            },
                                            actions: [{
                                                type: c.REQUESTED
                                            }, {
                                                type: c.SUCCESS,
                                                payload: function(e, n, t) {
                                                    return t.data
                                                }
                                            }, {
                                                type: c.FAILED,
                                                payload: function(e, n, t) {
                                                    return t.error
                                                }
                                            }]
                                        }, t, a);
                                    case 2:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })), function() {
                            var e = this,
                                t = arguments;
                            return new Promise((function(a, r) {
                                var l = n.apply(e, t);

                                function s(e) {
                                    h(l, a, r, s, o, "next", e)
                                }

                                function o(e) {
                                    h(l, a, r, s, o, "throw", e)
                                }
                                s(void 0)
                            }))
                        });
                        return function(e, n) {
                            return t.apply(this, arguments)
                        }
                    }()
                }
            }), k.withInjectReducer)(Se)
        },
        25254: function(e, n, t) {
            "use strict";
            var a = t(27378),
                r = t.n(a),
                l = [function(e) {
                    var n = e.className,
                        t = void 0 === n ? "" : n;
                    return r().createElement("div", {
                        className: t + " mall_selling_points-br-background mall_selling_points-br-15_day_return-png"
                    })
                }, function(e) {
                    var n = e.className,
                        t = void 0 === n ? "" : n;
                    return r().createElement("div", {
                        className: t + " mall_selling_points-br-background mall_selling_points-br-authentic-png"
                    })
                }, function(e) {
                    var n = e.className,
                        t = void 0 === n ? "" : n;
                    return r().createElement("div", {
                        className: t + " mall_selling_points-br-background mall_selling_points-br-free_shipping-png"
                    })
                }];
            n.Z = l
        },
        88776: function(e, n, t) {
            "use strict";
            var a = t(27378),
                r = t.n(a),
                l = [function(e) {
                    var n = e.className,
                        t = void 0 === n ? "" : n;
                    return r().createElement("div", {
                        className: t + " mall_selling_points-id-background mall_selling_points-id-7_day_return-png"
                    })
                }, function(e) {
                    var n = e.className,
                        t = void 0 === n ? "" : n;
                    return r().createElement("div", {
                        className: t + " mall_selling_points-id-background mall_selling_points-id-authentic-png"
                    })
                }, function(e) {
                    var n = e.className,
                        t = void 0 === n ? "" : n;
                    return r().createElement("div", {
                        className: t + " mall_selling_points-id-background mall_selling_points-id-free_shipping-png"
                    })
                }];
            n.Z = l
        },
        78774: function(e, n, t) {
            "use strict";
            var a = t(27378),
                r = t.n(a),
                l = [function(e) {
                    var n = e.className,
                        t = void 0 === n ? "" : n;
                    return r().createElement("div", {
                        className: t + " mall_selling_points-my-background mall_selling_points-my-authentic-png"
                    })
                }, function(e) {
                    var n = e.className,
                        t = void 0 === n ? "" : n;
                    return r().createElement("div", {
                        className: t + " mall_selling_points-my-background mall_selling_points-my-15_day_return-png"
                    })
                }, function(e) {
                    var n = e.className,
                        t = void 0 === n ? "" : n;
                    return r().createElement("div", {
                        className: t + " mall_selling_points-my-background mall_selling_points-my-free_shipping-png"
                    })
                }];
            n.Z = l
        },
        83996: function(e, n, t) {
            "use strict";
            var a = t(27378),
                r = t.n(a),
                l = [function(e) {
                    var n = e.className,
                        t = void 0 === n ? "" : n;
                    return r().createElement("div", {
                        className: t + " mall_selling_points-ph-background mall_selling_points-ph-authentic-png"
                    })
                }, function(e) {
                    var n = e.className,
                        t = void 0 === n ? "" : n;
                    return r().createElement("div", {
                        className: t + " mall_selling_points-ph-background mall_selling_points-ph-7_day_return-png"
                    })
                }, function(e) {
                    var n = e.className,
                        t = void 0 === n ? "" : n;
                    return r().createElement("div", {
                        className: t + " mall_selling_points-ph-background mall_selling_points-ph-free_shipping-png"
                    })
                }];
            n.Z = l
        },
        89204: function(e, n, t) {
            "use strict";
            var a = t(27378),
                r = t.n(a),
                l = [function(e) {
                    var n = e.className,
                        t = void 0 === n ? "" : n;
                    return r().createElement("div", {
                        className: t + " mall_selling_points-sg-background mall_selling_points-sg-15_day_return-png"
                    })
                }, function(e) {
                    var n = e.className,
                        t = void 0 === n ? "" : n;
                    return r().createElement("div", {
                        className: t + " mall_selling_points-sg-background mall_selling_points-sg-authentic-png"
                    })
                }, function(e) {
                    var n = e.className,
                        t = void 0 === n ? "" : n;
                    return r().createElement("div", {
                        className: t + " mall_selling_points-sg-background mall_selling_points-sg-free_shipping-png"
                    })
                }];
            n.Z = l
        },
        32509: function(e, n, t) {
            "use strict";
            var a = t(27378),
                r = t.n(a),
                l = [function(e) {
                    var n = e.className,
                        t = void 0 === n ? "" : n;
                    return r().createElement("div", {
                        className: t + " mall_selling_points-th-background mall_selling_points-th-authentic-png"
                    })
                }, function(e) {
                    var n = e.className,
                        t = void 0 === n ? "" : n;
                    return r().createElement("div", {
                        className: t + " mall_selling_points-th-background mall_selling_points-th-15_day_return-png"
                    })
                }, function(e) {
                    var n = e.className,
                        t = void 0 === n ? "" : n;
                    return r().createElement("div", {
                        className: t + " mall_selling_points-th-background mall_selling_points-th-free_shipping-png"
                    })
                }];
            n.Z = l
        },
        13718: function(e, n, t) {
            "use strict";
            var a = t(27378),
                r = t.n(a),
                l = [function(e) {
                    var n = e.className,
                        t = void 0 === n ? "" : n;
                    return r().createElement("div", {
                        className: t + " mall_selling_points-tw-background mall_selling_points-tw-15_day_return-png"
                    })
                }, function(e) {
                    var n = e.className,
                        t = void 0 === n ? "" : n;
                    return r().createElement("div", {
                        className: t + " mall_selling_points-tw-background mall_selling_points-tw-free_shipping-png"
                    })
                }, function(e) {
                    var n = e.className,
                        t = void 0 === n ? "" : n;
                    return r().createElement("div", {
                        className: t + " mall_selling_points-tw-background mall_selling_points-tw-authentic-png"
                    })
                }];
            n.Z = l
        },
        84514: function(e, n, t) {
            "use strict";
            var a = t(27378),
                r = t.n(a),
                l = [function(e) {
                    var n = e.className,
                        t = void 0 === n ? "" : n;
                    return r().createElement("div", {
                        className: t + " mall_selling_points-vn-background mall_selling_points-vn-7_day_return-png"
                    })
                }, function(e) {
                    var n = e.className,
                        t = void 0 === n ? "" : n;
                    return r().createElement("div", {
                        className: t + " mall_selling_points-vn-background mall_selling_points-vn-authentic-png"
                    })
                }, function(e) {
                    var n = e.className,
                        t = void 0 === n ? "" : n;
                    return r().createElement("div", {
                        className: t + " mall_selling_points-vn-background mall_selling_points-vn-free_shipping-png"
                    })
                }];
            n.Z = l
        },
        62199: function(e, n, t) {
            "use strict";
            var a = (0, t(6976).Kd)(),
                r = [];
            switch (a) {
                case "ID":
                    r = t(88776).Z;
                    break;
                case "MY":
                    r = t(78774).Z;
                    break;
                case "PH":
                    r = t(83996).Z;
                    break;
                case "SG":
                    r = t(89204).Z;
                    break;
                case "TH":
                    r = t(32509).Z;
                    break;
                case "TW":
                    r = t(13718).Z;
                    break;
                case "VN":
                    r = t(84514).Z;
                    break;
                case "BR":
                    r = t(25254).Z
            }
            n.Z = r.map((function(e, n) {
                var t = n + 1 + ("TW" !== a ? "_" + a.toLowerCase() : "");
                return {
                    Icon: e,
                    tagTitle: "Label_selling_point_" + t,
                    tagText: "Msg_selling_point_" + t,
                    tagShortText: "Msg_selling_point_" + t + "_short"
                }
            }))
        }
    }
]);
//# sourceMappingURL=https://shopee.sg/assets/HomeOfficialShopSection.017bca5a395d020114e2.js.map