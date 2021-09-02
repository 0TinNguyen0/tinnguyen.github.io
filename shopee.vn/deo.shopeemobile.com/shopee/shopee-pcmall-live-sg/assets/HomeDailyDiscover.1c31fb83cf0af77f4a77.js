(("undefined" != typeof self ? self : this).webpackChunkshopee_pc = ("undefined" != typeof self ? self : this).webpackChunkshopee_pc || []).push([
    [6927], {
        84106: function(t, e, n) {
            "use strict";
            n.d(e, {
                fp: function() {
                    return E
                },
                aN: function() {
                    return g
                },
                zP: function() {
                    return P
                },
                WO: function() {
                    return O
                },
                l_: function() {
                    return D
                },
                Vx: function() {
                    return x
                },
                KM: function() {
                    return S
                },
                NU: function() {
                    return A
                }
            });
            var r = n(15263),
                a = n(92027),
                o = n(72609);
            var i, c = (0, n(69068).n)("FETCH_DAILY_DISCOVER_MAIN");

            function s() {
                return (s = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }).apply(this, arguments)
            }

            function u(t) {
                return t ? {
                    name: t.display_text,
                    color: t.text_color,
                    imageForPC: t.pc_image,
                    imageForApp: t.tab_image,
                    label: t.product_label,
                    recommendType: t.algo_type || 0
                } : {}
            }

            function l(t) {
                var e, n = null != (e = null == t ? void 0 : t.data) ? e : {},
                    r = n.update_time,
                    a = n.sections,
                    o = void 0 === a ? [] : a,
                    i = n.version,
                    c = n.tab_meta_data,
                    l = o.find((function(t) {
                        return "dd_main_sec" === t.key
                    }));
                if (!l) return m(r, i);
                var d, p, h, g = l.index,
                    _ = l.data,
                    b = l.total,
                    v = (d = c) ? {
                        tabConfig: {
                            all: u(d.all_tab_config),
                            campaign: null != (p = null === (h = d.campaign_tabs) || void 0 === h ? void 0 : h.map(u)) ? p : []
                        }
                    } : {};
                return s({}, f({
                    index: g,
                    data: _,
                    total: b,
                    update_time: r,
                    version: i
                }), v)
            }

            function d(t) {
                var e = t.data.tab_meta_data;
                return {
                    all: h(e && e.all_tab_config),
                    campaign: (e && e.campaign_tabs || []).map((function(t) {
                        return h(t)
                    }))
                }
            }

            function f(t) {
                var e = t.index,
                    n = t.data,
                    r = t.total,
                    a = t.update_time,
                    o = t.version;
                if (!e || !n) return m(a, o);
                var c = [];
                return e.forEach((function(t) {
                    var e = function(t, e) {
                        var n = e.data_type,
                            r = (t && t[n] || []).find((function(t) {
                                return t.key === e.key
                            }));
                        switch (n) {
                            case i.Collection:
                                return r ? (o = (a = r).key, c = a.collection_id, s = a.collectionid, u = a.name, l = a.page_template_image, d = a.images, f = void 0 === d ? [] : d, m = a.sold, h = a.info, g = a.from, _ = a.data_type, {
                                    key: o,
                                    collectionId: c || s,
                                    name: u,
                                    image: l,
                                    images: f,
                                    sold: m,
                                    recommendation_info: h,
                                    recommendation_algorithm: g,
                                    data_type: _
                                }) : void 0;
                            case i.Knode:
                                return r ? function(t) {
                                    var e = t.data_type,
                                        n = t.name,
                                        r = t.label,
                                        a = t.key,
                                        o = t.knodeid,
                                        i = t.images,
                                        c = t.info,
                                        s = t.count;
                                    return {
                                        data_type: e,
                                        name: n,
                                        label: r,
                                        key: a,
                                        knodeid: o,
                                        image: i ? i[0] : null,
                                        images: i,
                                        count: s,
                                        recommendation_algorithm: "",
                                        recommendation_info: c
                                    }
                                }(r) : void 0;
                            case i.TopProduct:
                                return r ? function(t) {
                                    var e = t.key,
                                        n = t.intentionid,
                                        r = t.label,
                                        a = t.name,
                                        o = t.images,
                                        i = t.count,
                                        c = t.info,
                                        s = t.from,
                                        u = t.data_type;
                                    return {
                                        key: e,
                                        topProductId: n || r || "",
                                        name: a,
                                        image: o ? o[0] : null,
                                        sold: i,
                                        recommendation_info: c,
                                        recommendation_algorithm: s,
                                        data_type: u
                                    }
                                }(r) : void 0;
                            case i.Item:
                                return r ? p(r) : void 0;
                            default:
                                return r
                        }
                        var a, o, c, s, u, l, d, f, m, h, g, _
                    }(n, t);
                    e && c.push(e)
                })), {
                    update_time: a,
                    sections: {
                        dd_main_sec: {
                            total: r,
                            data: c
                        }
                    }
                }
            }! function(t) {
                t.Item = "item", t.Ads = "ads", t.Collection = "collection", t.TopProduct = "top_product", t.Keyword = "keyword", t.L2Cat = "l2cat", t.Shop = "shop", t.Knode = "knode", t.Food = "food_item"
            }(i || (i = {}));
            var p = function(t) {
                return s({}, t, {
                    label_ids: t.label_ids || []
                })
            };

            function m(t, e) {
                return {
                    update_time: t || 0,
                    version: e || void 0,
                    sections: {
                        dd_main_sec: {
                            total: 0,
                            data: []
                        }
                    }
                }
            }

            function h(t) {
                return t ? {
                    name: t.display_text,
                    color: t.text_color,
                    imageForPC: t.pc_image,
                    imageForApp: t.tab_image,
                    label: t.product_label,
                    recommendType: t.algo_type || 0
                } : {}
            }

            function g(t) {
                var e = t.limit,
                    n = t.offset,
                    i = t.latitude,
                    s = t.longitude,
                    u = t.city,
                    f = t.district,
                    p = t.itemCardStyle,
                    m = t.onFinish,
                    h = t.shouldSkipCall,
                    g = t.shouldReset,
                    _ = (0, a.Wc)({
                        bundle: "daily_discover_main",
                        limit: e,
                        offset: n,
                        latitude: i,
                        longitude: s,
                        city: u,
                        district: f,
                        item_card: p
                    });
                return (0, r.Z)({
                    apiCall: function() {
                        return function(t) {
                            return (0, o.fetchInfo)("/api/v4/recommend/recommend" + t)
                        }(_)
                    },
                    actions: [function() {
                        return {
                            type: c.REQUESTED
                        }
                    }, function(t, e) {
                        return {
                            type: c.SUCCESS,
                            payload: {
                                offset: n,
                                data: l(e),
                                tabConfig: d(e),
                                shouldReset: g
                            }
                        }
                    }, function(t, e) {
                        return {
                            type: c.FAILED,
                            payload: {
                                error: e.error
                            }
                        }
                    }],
                    shouldSkipCall: h,
                    onFinish: m
                })
            }
            var _, b = n(14081),
                v = n(67986),
                C = n(18363);

            function y() {
                return (y = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }).apply(this, arguments)
            }
            var T = {
                    nextOffset: 0,
                    progress: C.Z.INIT,
                    error: 0
                },
                E = (0, b.Z)(((_ = {})[c.REQUESTED] = function(t) {
                    return y({}, t, {
                        progress: C.Z.REQ
                    })
                }, _[c.SUCCESS] = function(t, e) {
                    var n = e.payload,
                        r = n.data,
                        a = n.tabConfig,
                        o = n.offset,
                        i = n.limit,
                        c = n.shouldReset,
                        s = t.data || r;
                    return y({}, t, {
                        data: y({}, s, {
                            update_time: r.update_time,
                            sections: y({}, s.sections, {
                                dd_main_sec: y({}, s.sections.dd_main_sec, {
                                    data: c ? r.sections.dd_main_sec.data : (0, v.Z)(t.data ? t.data.sections.dd_main_sec.data : [], r.sections.dd_main_sec.data, o)
                                })
                            })
                        }),
                        nextOffset: (o || 0) + (i || 0),
                        tabConfig: a || t.tabConfig,
                        progress: C.Z.OK
                    })
                }, _[c.FAILED] = function(t, e) {
                    return y({}, t, {
                        error: e.payload.error,
                        progress: C.Z.ERR
                    })
                }, _), T),
                I = [];

            function S(t, e) {
                if (!t || !t.data) return I;
                if (!e || !e.limit && !e.offset) return t.data.sections.dd_main_sec.data;
                var n = e.offset,
                    r = void 0 === n ? 0 : n,
                    a = e.limit;
                return t.data.sections.dd_main_sec.data.slice(r, "number" == typeof a ? a + r : void 0)
            }

            function R(t) {
                return !!t.data_type && [i.Item, i.Ads].includes(t.data_type)
            }

            function D(t, e) {
                return S(t, e).filter(R)
            }

            function A(t) {
                return t && t.data ? t.data.sections.dd_main_sec.total : 0
            }

            function P(t) {
                return t && t.tabConfig ? t.tabConfig.all : null
            }

            function O(t) {
                return t && t.tabConfig ? t.tabConfig.campaign : null
            }

            function x(t) {
                return t ? t.progress : C.Z.INIT
            }
        },
        33734: function(t, e, n) {
            "use strict";
            n.d(e, {
                Di: function() {
                    return a
                },
                xZ: function() {
                    return o
                },
                N: function() {
                    return i
                },
                Ns: function() {
                    return c
                }
            });
            var r = n(69068),
                a = (0, r.n)("FETCH_DAILY_DISCOVER_TAB_CONFIG"),
                o = (0, r.n)("FETCH_DAILY_DISCOVER_PERSONALIZED_TABS"),
                i = (0, r.n)("FETCH_DAILY_DISCOVER_COLLECTIONS"),
                c = (0, r.n)("FETCH_DAILY_DISCOVER_TOP_PRODUCTS")
        },
        75821: function(t, e, n) {
            "use strict";
            n.d(e, {
                Gn: function() {
                    return s
                }
            });
            var r = n(15263),
                a = n(3792);

            function o(t) {
                return t ? {
                    name: t.display_text,
                    color: t.text_color,
                    imageForPC: t.pc_image,
                    imageForApp: t.tab_image,
                    label: t.product_label,
                    recommendType: t.algo_type || 0
                } : {}
            }
            var i = n(72609);
            n(17646);
            var c = n(33734);

            function s(t) {
                var e = t.shouldSkipCall;
                return (0, r.Z)({
                    apiCall: function() {
                        return (0, i.fetchInfo)("/api/v2/cms/daily_discover_config")
                    },
                    actions: [function() {
                        return {
                            type: c.Di.REQUESTED
                        }
                    }, function(t, e) {
                        var n = (0, a.Z)(e, ["data", "all_tab_config"]),
                            r = (0, a.Z)(e, ["data", "campaign_tabs"], []);
                        return {
                            type: c.Di.SUCCESS,
                            data: {
                                all: o(n),
                                campaign: r.map((function(t) {
                                    return o(t)
                                }))
                            }
                        }
                    }, function(t, e) {
                        return {
                            type: c.Di.FAILED,
                            data: e.error
                        }
                    }],
                    shouldSkipCall: function(t) {
                        return "function" == typeof e && e(t)
                    }
                })
            }
        },
        17646: function(t, e, n) {
            "use strict"
        },
        76427: function(t, e, n) {
            "use strict";
            n.d(e, {
                Gn: function() {
                    return r.Gn
                },
                dailyDiscoverReducer: function() {
                    return o.z
                },
                getAllTabConfig: function() {
                    return i.zP
                },
                getFirstCampaignTabConfig: function() {
                    return i.hU
                },
                getTabConfigFetchStatus: function() {
                    return i.uG
                }
            });
            var r = n(75821),
                a = n(91047);
            n.o(a, "dailyDiscoverReducer") && n.d(e, {
                dailyDiscoverReducer: function() {
                    return a.dailyDiscoverReducer
                }
            }), n.o(a, "getAllTabConfig") && n.d(e, {
                getAllTabConfig: function() {
                    return a.getAllTabConfig
                }
            }), n.o(a, "getFirstCampaignTabConfig") && n.d(e, {
                getFirstCampaignTabConfig: function() {
                    return a.getFirstCampaignTabConfig
                }
            }), n.o(a, "getTabConfigFetchStatus") && n.d(e, {
                getTabConfigFetchStatus: function() {
                    return a.getTabConfigFetchStatus
                }
            });
            var o = n(26781),
                i = (n(17646), n(29064))
        },
        26781: function(t, e, n) {
            "use strict";
            n.d(e, {
                z: function() {
                    return l
                }
            });
            var r, a = n(14081),
                o = n(33734),
                i = n(18363),
                c = n(3792);

            function s() {
                return (s = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }).apply(this, arguments)
            }
            var u = {
                    collections: [],
                    topProducts: [],
                    personalizedTabs: {
                        error: 0,
                        loading: !1,
                        categories: []
                    },
                    tabConfig: {
                        error: 0,
                        fetchStatus: i.Z.INIT,
                        config: {
                            all: {},
                            campaign: []
                        }
                    }
                },
                l = (0, a.Z)(((r = {})[o.Di.REQUESTED] = function(t) {
                    return s({}, t, {
                        tabConfig: s({}, t.tabConfig, {
                            fetchStatus: i.Z.REQ,
                            error: 0
                        })
                    })
                }, r[o.Di.SUCCESS] = function(t, e) {
                    return s({}, t, {
                        tabConfig: {
                            config: e.data,
                            fetchStatus: i.Z.OK,
                            error: 0
                        }
                    })
                }, r[o.Di.FAILED] = function(t, e) {
                    return s({}, t, {
                        tabConfig: {
                            config: s({
                                all: {},
                                campaign: []
                            }, (0, c.Z)(t, ["tabConfig", "config"])),
                            fetchStatus: i.Z.ERR,
                            error: e.data
                        }
                    })
                }, r[o.xZ.REQUESTED] = function(t) {
                    return s({}, t, {
                        personalizedTabs: s({}, t.personalizedTabs, {
                            loading: !0,
                            error: 0
                        })
                    })
                }, r[o.xZ.SUCCESS] = function(t, e) {
                    return s({}, t, {
                        personalizedTabs: {
                            loading: !1,
                            error: 0,
                            categories: e.data
                        }
                    })
                }, r[o.xZ.FAILED] = function(t, e) {
                    return s({}, t, {
                        personalizedTabs: {
                            loading: !1,
                            error: e.data,
                            categories: []
                        }
                    })
                }, r[o.N.REQUESTED] = function(t) {
                    return s({}, t, {
                        collections: []
                    })
                }, r[o.N.SUCCESS] = function(t, e) {
                    return s({}, t, {
                        collections: e.data
                    })
                }, r[o.Ns.REQUESTED] = function(t) {
                    return s({}, t, {
                        topProducts: []
                    })
                }, r[o.Ns.SUCCESS] = function(t, e) {
                    return s({}, t, {
                        topProducts: e.data
                    })
                }, r), u)
        },
        29064: function(t, e, n) {
            "use strict";
            n.d(e, {
                uG: function() {
                    return o
                },
                zP: function() {
                    return i
                },
                hU: function() {
                    return c
                }
            });
            var r = n(3792),
                a = n(18363);

            function o(t) {
                return (0, r.Z)(t, ["tabConfig", "fetchStatus"], a.Z.INIT)
            }

            function i(t) {
                return (0, r.Z)(t, ["tabConfig", "config", "all"])
            }

            function c(t) {
                var e = function(t) {
                    return (0, r.Z)(t, ["tabConfig", "config", "campaign"])
                }(t);
                return e ? e[0] : void 0
            }
        },
        91047: function() {},
        9349: function(t, e, n) {
            "use strict";
            n.d(e, {
                T: function() {
                    return p
                },
                $: function() {
                    return l
                }
            });
            var r = n(27378),
                a = n(41143),
                o = n.n(a),
                i = n(60042),
                c = n.n(i);

            function s() {
                return (s = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }).apply(this, arguments)
            }

            function u(t, e) {
                return (u = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }
            var l = function(t) {
                var e, n;

                function a(e) {
                    var n;
                    return (n = t.call(this, e) || this)._containerWidth = 0, n._scrollWidth = 0, n.computeMeasurements = function() {
                        n._tabListRef && (n._containerWidth = n._tabListRef.offsetWidth, n._scrollWidth = n._tabListRef.scrollWidth)
                    }, n.postHeaderUpdate = function() {
                        var t = n.props.activeIndex;
                        n.computeMeasurements(), n.slideIntoView(t)
                    }, n.handleTabHeaderClick = function(t) {
                        var e = n.props.changeActiveTab;
                        e && "function" == typeof e && e(t)
                    }, n.slideIntoView = function(t) {
                        var e = n._tabRefs[t],
                            r = n._tabWrapperRef;
                        if (e && r && !(n._scrollWidth - n._containerWidth < 0)) {
                            var a = r.scrollLeft || 0,
                                o = e.offsetLeft - a,
                                i = e.offsetWidth,
                                c = o - (n._containerWidth - i) / 2;
                            a + c < 0 ? c = -a : a + c > n._scrollWidth - n._containerWidth && (c = n._scrollWidth - n._containerWidth - a), n.cssScrolling(c, e)
                        }
                    }, n.cssScrolling = function(t, e) {
                        var r = n._tabListRef,
                            a = n._tabWrapperRef,
                            o = n._indicatorRef;
                        if (r && a && o) {
                            var i = n.props.transitionConfig,
                                c = i.duration,
                                s = i.easeFunction,
                                u = i.delay;
                            r.style.transition = "transform " + c + " " + s + " " + u, r.style.transform = "translateX(" + -t + "px)", o.style.transition = "transform " + c + " " + s + " " + u, o.style.transform = "translateX(" + (e.offsetLeft - t) + "px)", o.style.width = e.clientWidth + "px", n._transitionEndHandler && r.removeEventListener("transitionend", n._transitionEndHandler), n._transitionEndHandler = function() {
                                n.restoreScrollPosition(e, (a.scrollLeft || 0) + t), r.removeEventListener("transitionend", n._transitionEndHandler), n._transitionEndHandler = null
                            }, r.addEventListener("transitionend", n._transitionEndHandler)
                        }
                    }, n.restoreScrollPosition = function(t, e) {
                        var r = n._tabListRef,
                            a = n._indicatorRef;
                        r && a && (r.style.transition = "transform 0s", r.style.transform = "", a.style.transition = "transform 0s", a.style.transform = "translateX(" + t.offsetLeft + "px)", n.scrollTo(e))
                    }, n.scrollTo = function(t) {
                        requestAnimationFrame((function() {
                            n._tabWrapperRef && ("function" == typeof n._tabWrapperRef.scrollTo ? n._tabWrapperRef.scrollTo(t, 0) : (n._tabWrapperRef.scrollLeft = t, n._tabWrapperRef.scrollTop = 0))
                        }))
                    }, n.indicatorStyle = function(t) {
                        var e = n.props,
                            r = e.activeIndex,
                            a = e.headerScrollable,
                            o = e.underlineActiveTab,
                            i = n._tabRefs && n._tabRefs[r],
                            c = {
                                display: o ? "block" : "none"
                            };
                        return a || (c.width = i ? i.clientWidth + "px" : 100 / t + "%", c.transform = i ? "translateX(" + i.offsetLeft + "px)" : "translateX(" + 100 * r + "%)"), c
                    }, n._tabRefs = [], n
                }
                n = t, (e = a).prototype = Object.create(n.prototype), e.prototype.constructor = e, u(e, n);
                var o = a.prototype;
                return o.componentDidMount = function() {
                    var t = this.props,
                        e = t.headerScrollable,
                        n = t.activeIndex;
                    e && (this.computeMeasurements(), this.slideIntoView(n))
                }, o.componentDidUpdate = function(t) {
                    var e = this.props,
                        n = e.headerScrollable,
                        r = e.activeIndex,
                        a = e.header,
                        o = t.headerScrollable,
                        i = t.activeIndex,
                        c = t.header;
                    n && (a !== c || a.length !== c.length ? requestAnimationFrame(this.postHeaderUpdate) : o && r === i || this.slideIntoView(r))
                }, o.render = function() {
                    var t = this,
                        e = this.props,
                        n = e.headerTop,
                        a = e.header,
                        o = e.activeIndex,
                        i = e.theme,
                        u = e.headerStyle,
                        l = void 0 === u ? {} : u,
                        d = e.headerScrollable,
                        f = a.filter((function(t) {
                            return null != t
                        })),
                        p = f.length;
                    return r.createElement("nav", {
                        className: c()("stardust-tabs-header-wrapper", d ? "stardust-tabs-header-wrapper--scrollable" : ""),
                        style: s({}, l, {
                            top: n
                        }),
                        ref: function(e) {
                            return t._tabWrapperRef = e
                        }
                    }, r.createElement("ul", {
                        className: c()("stardust-tabs-header", {
                            "stardust-tabs-header--light": "light" === i
                        }),
                        ref: function(e) {
                            return t._tabListRef = e
                        }
                    }, f.map((function(e, n) {
                        return r.createElement("li", {
                            className: c()("stardust-tabs-header__tab", {
                                "stardust-tabs-header__tab--active": o === n
                            }),
                            onClick: function() {
                                return t.handleTabHeaderClick(n)
                            },
                            key: n,
                            ref: function(e) {
                                return t._tabRefs[n] = e
                            }
                        }, e)
                    }))), r.createElement("i", {
                        style: this.indicatorStyle(p),
                        ref: function(e) {
                            return t._indicatorRef = e
                        },
                        className: "stardust-tabs-header__tab-indicator"
                    }))
                }, a
            }(r.Component);

            function d(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function f(t, e) {
                return (f = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }
            l.defaultProps = {
                transitionConfig: {
                    duration: "0.5s",
                    easeFunction: "cubic-bezier(0.15, 0.3, 0.25, 1)",
                    delay: "0s"
                }
            };
            var p = function(t) {
                var e, n;

                function a(e) {
                    var n;
                    return n = t.call(this, e) || this, o()(e.header && Array.isArray(e.header), "stardust-tabs-container: must pass in an array of ReactElement for the header props"), o()(e.children && r.Children.count(e.children) === e.header.length, "stardust-tabs-container: tab panels must be equal to the tab headers"), n.state = {
                        activeIndex: e.activeIndex,
                        scrollPositions: new Array(e.header.length).fill(0)
                    }, n._tabsHeaderAnchorRef = null, n.setTabsHeaderAnchorRef = n.setTabsHeaderAnchorRef.bind(d(n)), n.changeActiveTab = n.changeActiveTab.bind(d(n)), n
                }
                n = t, (e = a).prototype = Object.create(n.prototype), e.prototype.constructor = e, f(e, n);
                var i = a.prototype;
                return i.UNSAFE_componentWillReceiveProps = function(t) {
                    t.activeIndex !== this.props.activeIndex && t.activeIndex !== this.state.activeIndex && this.changeActiveTab(t.activeIndex, !0)
                }, i.componentDidUpdate = function(t) {
                    this.updateScrollPositionStateOnUpdate(t.header, this.props.header)
                }, i.updateScrollPositionStateOnUpdate = function(t, e) {
                    if (t.length !== e.length) {
                        var n = this.state.scrollPositions;
                        this.setState({
                            scrollPositions: Array.from({
                                length: e.length
                            }, (function(t, e) {
                                return n[e] || 0
                            }))
                        })
                    }
                }, i.setTabsHeaderAnchorRef = function(t) {
                    t && (this._tabsHeaderAnchorRef = t)
                }, i.changeActiveTab = function(t, e) {
                    var n = this;
                    if (void 0 === e && (e = !1), (e || !this.props.shouldStopChangeTab || "function" != typeof this.props.shouldStopChangeTab || !this.props.shouldStopChangeTab(t)) && this._tabsHeaderAnchorRef) {
                        var r = function(t) {
                                for (var e = 0, n = t; n && n.offsetParent;) "number" == typeof n.offsetTop && (e += n.offsetTop), n = n.offsetParent;
                                return e
                            }(this._tabsHeaderAnchorRef) - this.props.headerTop,
                            a = window && window.scrollY ? window.scrollY : 0,
                            o = a >= r,
                            i = o ? r : a;
                        this.setState({
                            activeIndex: t,
                            scrollPositions: this.state.scrollPositions.map((function(t, e) {
                                return o ? e === n.state.activeIndex ? n.props.scrollTabToTop ? 0 : a - r : t : 0
                            }))
                        }, (function() {
                            n.props.onChangeTab && "function" == typeof n.props.onChangeTab && n.props.onChangeTab(t);
                            var e = i + n.state.scrollPositions[t];
                            window && window.scrollTo && window.scrollTo(window.scrollX, e)
                        }))
                    }
                }, i.render = function() {
                    var t = this.props,
                        e = t.header,
                        n = t.headerTop,
                        a = t.children,
                        o = t.theme,
                        i = t.underlineActiveTab,
                        c = t.className,
                        s = t.headerStyle,
                        u = t.headerScrollable,
                        d = t.toRem,
                        f = this.state.activeIndex;
                    return r.createElement("div", {
                        className: c
                    }, r.createElement("div", {
                        className: "stardust-tabs-header-anchor",
                        ref: this.setTabsHeaderAnchorRef
                    }), e ? r.createElement(l, {
                        activeIndex: f,
                        headerTop: d ? d(n) : n,
                        changeActiveTab: this.changeActiveTab,
                        header: e,
                        theme: o,
                        underlineActiveTab: i,
                        headerStyle: s,
                        headerScrollable: !!u
                    }) : null, r.createElement("div", {
                        className: "stardust-tabs-panels"
                    }, r.Children.map(a, (function(t, e) {
                        return r.createElement("section", {
                            className: "stardust-tabs-panels__panel",
                            style: {
                                display: e !== f ? "none" : "block"
                            },
                            key: e
                        }, t)
                    }))))
                }, a
            }(r.Component);
            p.defaultProps = {
                headerTop: 0,
                activeIndex: 0,
                theme: "dark",
                headerScrollable: !1
            }
        },
        60727: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return q
                }
            });
            var r = n(27378),
                a = n(79308),
                o = n(84691),
                i = n(9349),
                c = n(94184),
                s = n.n(c),
                u = n(9315),
                l = n(98466),
                d = n(23287),
                f = n(29031),
                p = n(41525),
                m = "_85W0IA",
                h = "lpQk8i";

            function g(t, e) {
                return (g = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }
            var _ = function(t) {
                    var e, n;

                    function a() {
                        return t.apply(this, arguments) || this
                    }
                    n = t, (e = a).prototype = Object.create(n.prototype), e.prototype.constructor = e, g(e, n);
                    var o = a.prototype;
                    return o.shouldComponentUpdate = function(t) {
                        return (0, f.Z)(this.props, t, ["recommendType", "customTextColor", "customHeaderImage", "indicatorClassName"])
                    }, o.render = function() {
                        var t = this.props,
                            e = t.customTextColor,
                            n = t.customHeaderImage,
                            a = t.indicatorClassName,
                            o = t.trackingRef,
                            i = t.trackingClick;
                        return r.createElement(r.Fragment, null, r.createElement("div", {
                            className: s()(h, a || ""),
                            style: e ? {
                                background: e
                            } : null
                        }), r.createElement("div", {
                            className: m,
                            onClick: i,
                            ref: o
                        }, r.createElement(u.Z, {
                            headerText: (0, d.t)("label_daily_discover"),
                            customHeader: {
                                color: e,
                                image: n,
                                display_height: p.ID.DAILY_DISCOVER_TAB_IMAGE_HEIGHT
                            }
                        })))
                    }, a
                }(r.Component),
                b = (0, l.Z)(_, "HomeRecommendTab"),
                v = n(45141),
                C = n(62399),
                y = n(22333),
                T = n(12142),
                E = n(13751),
                I = n(87331),
                S = n(312),
                R = n(3792),
                D = n(20832),
                A = n(18363),
                P = n(76282),
                O = n(8205),
                x = n(70590),
                F = n(43351),
                w = n(74301),
                k = n(82695),
                Z = n(69627),
                L = n(76427),
                H = n(84106),
                N = n(9942),
                U = "_8eDJwS",
                W = "KYaVhX",
                V = "_2zwB45";

            function j(t, e, n, r, a, o, i) {
                try {
                    var c = t[o](i),
                        s = c.value
                } catch (t) {
                    return void n(t)
                }
                c.done ? e(s) : Promise.resolve(s).then(r, a)
            }

            function Y(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(r, a) {
                        var o = t.apply(e, n);

                        function i(t) {
                            j(o, r, a, i, c, "next", t)
                        }

                        function c(t) {
                            j(o, r, a, i, c, "throw", t)
                        }
                        i(void 0)
                    }))
                }
            }

            function B(t, e) {
                return (B = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }
            var z = (0, E.Z)({
                    loader: function() {
                        return Promise.all([n.e(3986), n.e(4480), n.e(9524)]).then(n.bind(n, 23121))
                    }
                }),
                M = (0, E.Z)({
                    loader: function() {
                        return Promise.all([n.e(3986), n.e(4480), n.e(700)]).then(n.bind(n, 13402))
                    }
                }),
                G = (0, E.Z)({
                    loader: function() {
                        return Promise.all([n.e(3986), n.e(4480), n.e(5760)]).then(n.bind(n, 51611))
                    }
                }),
                Q = (0, E.Z)({
                    loader: function() {
                        return Promise.all([n.e(3986), n.e(4480), n.e(1451)]).then(n.bind(n, 50603))
                    }
                }),
                K = function(t) {
                    var e, n;

                    function a(e) {
                        var n;
                        return (n = t.call(this, e) || this).handleChangeTab = function(t) {
                            n.setState({
                                activeTab: t
                            }, (function() {
                                if (n._ref) {
                                    var t = (0, I.FM)(n._ref).top - 118;
                                    t < window.pageYOffset && window.scroll(0, t)
                                }
                            }))
                        }, n.getRef = function(t) {
                            t && (n._ref = t)
                        }, n.loadDailyDiscoverConfig = Y(regeneratorRuntime.mark((function t() {
                            var e;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (!n.props.isConfigFromBff) {
                                            t.next = 8;
                                            break
                                        }
                                        return n.props.injectAsyncReducer(((e = {})[p.tW] = H.fp, e)), t.next = 5, n.props.fetchBffDailyDiscoverMain({
                                            offset: 0,
                                            limit: p.ID.DAILY_DISCOVER_BATCH_SIZE,
                                            itemCardStyle: k.$o.SIMPLIFIED_COUNT
                                        });
                                    case 5:
                                        return t.abrupt("return", t.sent);
                                    case 8:
                                        return n.props.injectAsyncReducer({
                                            dailyDiscoverConfig: L.dailyDiscoverReducer
                                        }), t.next = 11, n.props.fetchTabConfig({
                                            shouldSkipCall: function(t) {
                                                return (0, L.getTabConfigFetchStatus)(t.dailyDiscoverConfig) === A.Z.OK
                                            }
                                        });
                                    case 11:
                                        return t.abrupt("return", t.sent);
                                    case 12:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        }))), n.universalDataFetch = Y(regeneratorRuntime.mark((function t() {
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, n.loadDailyDiscoverConfig();
                                    case 2:
                                        return t.abrupt("return", t.sent);
                                    case 3:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        }))), n.state = {
                            activeTab: 0
                        }, n
                    }
                    n = t, (e = a).prototype = Object.create(n.prototype), e.prototype.constructor = e, B(e, n);
                    var o = a.prototype;
                    return o.componentDidMount = function() {
                        this.loadDailyDiscoverConfig()
                    }, o.shouldComponentUpdate = function(t, e) {
                        return (0, f.Z)(this.props, t, ["customHeader", "accountInfo", "accountStatus", "allTabConfig", "campaignTabConfig", "tabConfigFetchStatus"]) || e.activeTab !== this.state.activeTab
                    }, o.getTabs = function() {
                        var t = this.props,
                            e = t.allTabConfig,
                            n = t.campaignTabConfig;
                        return e && n ? [P.P.DAILY_DISCOVER, n.recommendType].map((function(t, a) {
                            var o = e.color,
                                i = null,
                                c = e.name;
                            return n && t !== P.P.DAILY_DISCOVER && (o = n.color || o, i = n.imageForPC || i, c = n.name), r.createElement(y.ZP, {
                                key: t,
                                targetData: {
                                    tabName: c,
                                    index: a
                                }
                            }, r.createElement(b, {
                                recommendType: t,
                                customTextColor: o,
                                customHeaderImage: i,
                                indicatorClassName: W
                            }))
                        })) : []
                    }, o.getContents = function() {
                        var t = this.state.activeTab,
                            e = this.props,
                            n = e.allTabConfig,
                            a = e.campaignTabConfig,
                            o = e.isConfigFromBff;
                        if (!a) return [];
                        var i = (0, D.YH)({
                            username: this.props.accountInfo.username,
                            birth_timestamp: this.props.accountInfo.birthTimestamp,
                            adult_consent: this.props.accountInfo.adultConsentTimestamp
                        }, F.jC, __LOCALE__).isUserAdult;
                        return [P.P.DAILY_DISCOVER, a.recommendType].map((function(e, c) {
                            if (c !== t) return null;
                            var s = a && a.label || 0,
                                u = null,
                                l = "";
                            if (0 === c) u = r.createElement(G, {
                                key: e,
                                recommendType: e,
                                tabId: c,
                                isUserAdult: i,
                                isConfigFromBff: o
                            }), l = n && n.name || "";
                            else if (a.recommendType === P.P.BIG_SALE_11_11 && s) u = r.createElement(Q, {
                                key: e,
                                recommendType: e,
                                labelId: s,
                                tabId: c,
                                isUserAdult: i
                            }), l = a && a.name || "";
                            else if (a.recommendType !== P.P.BIG_SALE_11_11) {
                                var d = s ? [s] : null;
                                u = r.createElement(M, {
                                    key: e,
                                    recommendType: e,
                                    labelIds: d,
                                    tabId: c,
                                    isUserAdult: i
                                }), l = a && a.name || ""
                            }
                            return u ? r.createElement(y.ZP, {
                                key: e,
                                targetData: {
                                    recommendType: e,
                                    tabId: c,
                                    tabName: l
                                }
                            }, u) : null
                        }))
                    }, o.render = function() {
                        var t = this.props,
                            e = t.campaignTabConfig,
                            n = t.tabConfigFetchStatus;
                        if (X.includes(n)) return r.createElement(v.Z, {
                            show: !0,
                            hideOverlay: !0,
                            spinnerClassName: V
                        });
                        var a = e && ["imageForPC", "name"].every((function(t) {
                                return e[t]
                            })) && (e.recommendType !== P.P.BIG_SALE_11_11 || !!e.label),
                            o = (0, R.Z)(this.props.customHeader, [x.u.DAILY_DISCOVER, "background_image"]) || null,
                            c = o ? {
                                backgroundImage: "url(" + (0, w.Jn)(o) + ")"
                            } : void 0;
                        if (a) return r.createElement("div", {
                            ref: this.getRef
                        }, r.createElement(i.T, {
                            header: this.getTabs(),
                            headerStyle: c,
                            className: U,
                            headerTop: 118,
                            activeIndex: this.state.activeTab,
                            onChangeTab: this.handleChangeTab,
                            toRem: S.Z
                        }, this.getContents()));
                        var s = (0, R.Z)(this.props.customHeader, [x.u.DAILY_DISCOVER]) || null,
                            u = (0, R.Z)(this.props.customHeader, [x.u.DAILY_DISCOVER, "color"]);
                        return r.createElement(z, {
                            headerColor: u,
                            customHeader: s
                        })
                    }, a
                }(r.Component),
                X = [A.Z.INIT, A.Z.REQ];
            var q = (0, o.compose)(C.Pf, Z.fg, (0, T.u)(), (0, a.connect)((function(t) {
                var e = t.dailyDiscoverConfig,
                    n = t.dailyDiscoverMain,
                    r = t.featureToggles,
                    a = !!(0, N.A)(r, O.I8U),
                    o = (0, H.WO)(n),
                    i = a ? (0, H.zP)(n) : (0, L.getAllTabConfig)(e);
                return {
                    allTabConfig: i,
                    campaignTabConfig: a ? o && o[0] : (0, L.getFirstCampaignTabConfig)(e),
                    tabConfigFetchStatus: a ? !!i || (0, H.Vx)(n) : (0, L.getTabConfigFetchStatus)(e),
                    isConfigFromBff: a
                }
            }), {
                fetchTabConfig: L.Gn,
                fetchBffDailyDiscoverMain: H.aN
            }), (0, d.withI18nCollections)([119, 120]))((0, y.RW)(K, "HomeDailyDiscover"))
        },
        9942: function(t, e, n) {
            "use strict";
            n.d(e, {
                A: function() {
                    return r.Au
                }
            });
            var r = n(68069)
        }
    }
]);
//# sourceMappingURL=https://shopee.sg/assets/HomeDailyDiscover.1c31fb83cf0af77f4a77.js.map