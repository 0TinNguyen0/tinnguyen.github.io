(("undefined" != typeof self ? self : this).webpackChunkshopee_pc = ("undefined" != typeof self ? self : this).webpackChunkshopee_pc || []).push([
    [4055], {
        47687: function(e) {
            e.exports = function(e, n) {
                var t = 0,
                    r = {};
                e.addEventListener("message", (function(n) {
                    var t = n.data;
                    if ("RPC" === t.type)
                        if (t.id) {
                            var a = r[t.id];
                            a && (delete r[t.id], t.error ? a[1](Object.assign(Error(t.error.message), t.error)) : a[0](t.result))
                        } else {
                            var s = document.createEvent("Event");
                            s.initEvent(t.method, !1, !1), s.data = t.params, e.dispatchEvent(s)
                        }
                })), n.forEach((function(n) {
                    e[n] = function() {
                        var a = arguments;
                        return new Promise((function(s, o) {
                            var i = ++t;
                            r[i] = [s, o], e.postMessage({
                                type: "RPC",
                                id: i,
                                method: n,
                                params: [].slice.call(a)
                            })
                        }))
                    }
                }))
            }
        },
        64055: function(e, n, t) {
            var r = t(47687),
                a = ["getRuleSet", "injectRules", "v2ToV3"];
            e.exports = function() {
                var e = new Worker("/assets/32ad9ae92adc1a90fc78.worker.js", {
                    name: "[fullhash].worker.js"
                });
                return r(e, a), e.ready = new Promise((function(n) {
                    e.addEventListener("ready", (function() {
                        n(e)
                    }))
                })), e
            }
        }
    }
]);
//# sourceMappingURL=https://shopee.sg/assets/4055.b8997e436419e7946060.js.map