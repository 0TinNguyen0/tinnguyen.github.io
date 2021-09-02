! function() {
    "use strict";
    var e = {
            230: function(e, t, r) {
                var a, o, i, c, n, p, u;

                function l(e, t, r, a, o) {
                    var i = {};
                    return Object.keys(a).forEach((function(e) {
                        i[e] = a[e]
                    })), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), i = r.slice().reverse().reduce((function(r, a) {
                        return a(e, t, r) || r
                    }), i), o && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(o) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, t, i), i = null), i
                }
                a = ruleSet({
                    source: "pc"
                }), o = match({
                    type: "click",
                    targetType: "ShopeeMartHomePage.MartHeader.ViewCartButton"
                }), i = schema({
                    id: "ea1ba272-8fca-44ed-99f3-a8a5d8682413"
                }), c = match({
                    type: "click",
                    targetType: "ShopeeMartHomePage.MartHeader.SearchBarInput"
                }), n = schema({
                    id: "0ea7697b-8d0a-4693-8b75-2ed28bc835df"
                }), a((l((u = function() {
                    function e() {}
                    var t = e.prototype;
                    return t.clickCartIcon = function() {
                        return {
                            operation: "click",
                            page_type: "shopee_mart_home",
                            target_type: "cart_button"
                        }
                    }, t.clickSearchBar = function() {
                        return {
                            operation: "click",
                            page_type: "shopee_mart_home",
                            target_type: "search_bar"
                        }
                    }, e
                }()).prototype, "clickCartIcon", [o, i], Object.getOwnPropertyDescriptor(u.prototype, "clickCartIcon"), u.prototype), l(u.prototype, "clickSearchBar", [c, n], Object.getOwnPropertyDescriptor(u.prototype, "clickSearchBar"), u.prototype), p = u))
            }
        },
        t = {};

    function r(a) {
        if (t[a]) return t[a].exports;
        var o = t[a] = {
            exports: {}
        };
        return e[a](o, o.exports, r), o.exports
    }
    r.d = function(e, t) {
        for (var a in t) r.o(t, a) && !r.o(e, a) && Object.defineProperty(e, a, {
            enumerable: !0,
            get: t[a]
        })
    }, r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r(230)
}();
//# sourceMappingURL=https://shopee.sg/assets/81e06ee8fa02adbdce4d.tr.js.map