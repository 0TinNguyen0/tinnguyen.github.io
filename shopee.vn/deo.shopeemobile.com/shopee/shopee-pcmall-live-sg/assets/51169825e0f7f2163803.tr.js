! function() {
    "use strict";

    function t(r, e, a) {
        if (Array.isArray(e) && e.length) {
            var i = e[0];
            return r && Object.prototype.hasOwnProperty.call(r, i) ? t(r[i], e.slice(1), a) : a
        }
        return r
    }

    function r(t, r) {
        switch (t.type) {
            case "impression":
                return {
                    viewed_objects: t.info.impressions.map((function(t) {
                        return r(t.targetData)
                    }))
                };
            case "click":
            default:
                return r(t.info.targetData)
        }
    }
    var e, a, i, n, o, c, p, s, u, y, h, l, d;

    function f(t, r, e, a, i) {
        var n = {};
        return Object.keys(a).forEach((function(t) {
            n[t] = a[t]
        })), n.enumerable = !!n.enumerable, n.configurable = !!n.configurable, ("value" in n || n.initializer) && (n.writable = !0), n = e.slice().reverse().reduce((function(e, a) {
            return a(t, r, e) || e
        }), n), i && void 0 !== n.initializer && (n.value = n.initializer ? n.initializer.call(i) : void 0, n.initializer = void 0), void 0 === n.initializer && (Object.defineProperty(t, r, n), n = null), n
    }

    function m() {
        return (m = Object.assign || function(t) {
            for (var r = 1; r < arguments.length; r++) {
                var e = arguments[r];
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
            }
            return t
        }).apply(this, arguments)
    }
    e = ruleSet({
        source: "pc"
    }), a = match({
        type: "action",
        action: "submitMartKeyboardSearch"
    }), i = schema({
        id: "4e889c1f-8e95-4042-86c4-60da4fe6f8a7"
    }), n = match({
        type: "impression",
        componentType: "MartHistoryHint"
    }), o = schema({
        id: "942be82b-b71a-4d3d-97dc-c3ea8a1cc38c"
    }), c = match({
        type: "click",
        componentType: "MartHistoryHint"
    }), p = schema({
        id: "c406be3c-0ced-4f17-9051-a54bdfd335ca"
    }), s = match({
        type: "impression",
        componentType: "MartSearchHint"
    }), u = schema({
        id: "4b01816e-4cba-43b0-b32a-1654e716c3ad"
    }), y = match({
        type: "click",
        componentType: "MartSearchHint"
    }), h = schema({
        id: "e2896cf7-a206-456c-9402-d9a9f72f5a39"
    }), e((f((d = function() {
        function r() {}
        var e = r.prototype;
        return e.actionSearchInMartSearchBar = function(r) {
            var e = t(r, ["info", "data"]);
            return {
                operation: "action_search_in_search_bar",
                page_type: "shopee_mart",
                data: {
                    user_input: e.inputValue || "",
                    keyword: e.targetSearchParams.keyword || "",
                    input_type: "input",
                    search_params: g(e.initialSearchParams)
                }
            }
        }, e.impressionMartSearchHistory = function(t) {
            return _(t)
        }, e.clickMartSearchHistory = function(t) {
            return _(t)
        }, e.impressionMartSearchHint = function(t) {
            return b(t)
        }, e.clickMartSearchHint = function(t) {
            return b(t)
        }, r
    }()).prototype, "actionSearchInMartSearchBar", [a, i], Object.getOwnPropertyDescriptor(d.prototype, "actionSearchInMartSearchBar"), d.prototype), f(d.prototype, "impressionMartSearchHistory", [n, o], Object.getOwnPropertyDescriptor(d.prototype, "impressionMartSearchHistory"), d.prototype), f(d.prototype, "clickMartSearchHistory", [c, p], Object.getOwnPropertyDescriptor(d.prototype, "clickMartSearchHistory"), d.prototype), f(d.prototype, "impressionMartSearchHint", [s, u], Object.getOwnPropertyDescriptor(d.prototype, "impressionMartSearchHint"), d.prototype), f(d.prototype, "clickMartSearchHint", [y, h], Object.getOwnPropertyDescriptor(d.prototype, "clickMartSearchHint"), d.prototype), l = d));

    function _(t) {
        return {
            page_type: "shopee_mart_pre_search",
            page_section: "search_history",
            target_type: "keyword",
            data: r(t, (function(t) {
                var r = t.query,
                    e = t.index,
                    a = t.source;
                return {
                    keyword: r.keyword,
                    input_type: "keyword",
                    location: e,
                    search_source: a
                }
            }))
        }
    }

    function b(t) {
        return {
            page_type: "shopee_mart_pre_search",
            page_section: "search_bar",
            target_type: "hint_keyword",
            data: r(t, (function(t) {
                var r = t.query,
                    e = t.index,
                    a = t.inputValue,
                    i = t.absolute_location,
                    n = t.algorithm,
                    o = t.trackingId;
                return {
                    user_input: a,
                    keyword: r.keyword,
                    input_type: "keyword",
                    location: e,
                    absolute_location: i,
                    relative_location: e,
                    tracking_id: o,
                    source_page_type: "mart",
                    algorithm: n,
                    page_id: ""
                }
            }))
        }
    }

    function g(t) {
        return t && t.brands ? m({}, t, {
            brands: t.brands.map((function(t, r) {
                return {
                    id: t,
                    location: r || 0
                }
            }))
        }) : t
    }
}();
//# sourceMappingURL=https://shopee.sg/assets/51169825e0f7f2163803.tr.js.map