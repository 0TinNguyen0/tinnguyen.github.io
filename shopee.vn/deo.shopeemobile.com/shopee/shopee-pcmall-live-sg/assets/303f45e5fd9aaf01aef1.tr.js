! function() {
    "use strict";

    function t(e, o, r) {
        if (Array.isArray(o) && o.length) {
            var i = o[0];
            return e && Object.prototype.hasOwnProperty.call(e, i) ? t(e[i], o.slice(1), r) : r
        }
        return e
    }
    var e, o, r, i, n, a, l;

    function c(t, e, o, r, i) {
        var n = {};
        return Object.keys(r).forEach((function(t) {
            n[t] = r[t]
        })), n.enumerable = !!n.enumerable, n.configurable = !!n.configurable, ("value" in n || n.initializer) && (n.writable = !0), n = o.slice().reverse().reduce((function(o, r) {
            return r(t, e, o) || o
        }), n), i && void 0 !== n.initializer && (n.value = n.initializer ? n.initializer.call(i) : void 0, n.initializer = void 0), void 0 === n.initializer && (Object.defineProperty(t, e, n), n = null), n
    }
    e = ruleSet({
        source: "pc"
    }), o = match({
        type: "impression",
        targetType: "ShopeeMartHomePage.MartHeader.FollowButton"
    }), r = schema({
        id: "c5efb36b-4f8d-4de8-8a3d-3f1acd261e97"
    }), i = match({
        type: "click",
        targetType: "ShopeeMartHomePage.MartHeader.FollowButton"
    }), n = schema({
        id: "7cd539d0-4103-4c8d-8e63-e69be82b6175"
    }), e((c((l = function() {
        function e() {}
        var o = e.prototype;
        return o.impressionFollowButton = function(e) {
            return {
                operation: "impression",
                page_type: "shopee_mart_home",
                target_type: "follow_button",
                data: {
                    viewed_objects: [p(t(e, ["info", "impressions", 0, "targetData"]) || {})]
                }
            }
        }, o.clickFollowButton = function(e) {
            return {
                operation: "click",
                page_type: "shopee_mart_home",
                target_type: "follow_button",
                data: p(t(e, ["info", "targetData"], {}))
            }
        }, e
    }()).prototype, "impressionFollowButton", [o, r], Object.getOwnPropertyDescriptor(l.prototype, "impressionFollowButton"), l.prototype), c(l.prototype, "clickFollowButton", [i, n], Object.getOwnPropertyDescriptor(l.prototype, "clickFollowButton"), l.prototype), a = l));

    function p(e) {
        return {
            is_follow_button: t(e, ["is_follow_button"], !0)
        }
    }
}();
//# sourceMappingURL=https://shopee.sg/assets/303f45e5fd9aaf01aef1.tr.js.map