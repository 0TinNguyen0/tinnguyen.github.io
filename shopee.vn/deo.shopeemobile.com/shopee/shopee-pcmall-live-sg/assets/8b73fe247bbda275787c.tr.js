! function() {
    "use strict";
    var e = {
            754: function(e, t, r) {
                var i, o, n, c, a;
                var p, u, l, f, s, y;
                i = ruleSet({
                    source: "pc"
                }), o = match({
                    type: "click",
                    targetType: "ShopeeMartHomePage.MartKsp"
                }), n = schema({
                    id: "17a8502b-59c7-4fc5-89a9-c014228ea91f"
                }), i((p = (a = function() {
                    function e() {}
                    return e.prototype.clickMartKsp = function() {
                        return {
                            operation: "click",
                            page_type: "shopee_mart_home",
                            target_type: "info_button"
                        }
                    }, e
                }()).prototype, u = "clickMartKsp", l = [o, n], f = Object.getOwnPropertyDescriptor(a.prototype, "clickMartKsp"), s = a.prototype, y = {}, Object.keys(f).forEach((function(e) {
                    y[e] = f[e]
                })), y.enumerable = !!y.enumerable, y.configurable = !!y.configurable, ("value" in y || y.initializer) && (y.writable = !0), y = l.slice().reverse().reduce((function(e, t) {
                    return t(p, u, e) || e
                }), y), s && void 0 !== y.initializer && (y.value = y.initializer ? y.initializer.call(s) : void 0, y.initializer = void 0), void 0 === y.initializer && (Object.defineProperty(p, u, y), y = null), c = a))
            }
        },
        t = {};

    function r(i) {
        if (t[i]) return t[i].exports;
        var o = t[i] = {
            exports: {}
        };
        return e[i](o, o.exports, r), o.exports
    }
    r.d = function(e, t) {
        for (var i in t) r.o(t, i) && !r.o(e, i) && Object.defineProperty(e, i, {
            enumerable: !0,
            get: t[i]
        })
    }, r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r(754)
}();
//# sourceMappingURL=https://shopee.sg/assets/8b73fe247bbda275787c.tr.js.map