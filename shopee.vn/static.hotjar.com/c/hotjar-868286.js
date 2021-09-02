window.hjSiteSettings = window.hjSiteSettings || {
    "site_id": 868286,
    "r": 0.006777630621693121,
    "rec_value": 1.0,
    "state_change_listen_mode": "automatic",
    "record": false,
    "continuous_capture_enabled": false,
    "recording_capture_keystrokes": false,
    "anonymize_digits": true,
    "anonymize_emails": true,
    "suppress_all": false,
    "suppress_text": null,
    "suppress_location": false,
    "user_attributes_enabled": false,
    "legal_name": null,
    "privacy_policy_url": null,
    "deferred_page_contents": [],
    "record_targeting_rules": [{
        "component": "url",
        "match_operation": "simple",
        "pattern": "https://shopee.vn/Th%E1%BB%9Di-Trang-Nam-cat.78",
        "negate": false
    }],
    "feedback_widgets": [],
    "heatmaps": [],
    "polls": [],
    "integrations": {
        "optimizely": {
            "tag_recordings": false
        },
        "google_optimize": {
            "tag_recordings": true
        }
    },
    "features": ["feedback.widgetV2", "feedback.widget_telemetry", "heatmap.continuous_capture", "recordings.page_content_ws", "settings.billing_v2", "survey.impressions"]
};

! function(e) {
    var t = {};

    function n(o) {
        if (t[o]) return t[o].exports;
        var a = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(a.exports, a, a.exports, n), a.l = !0, a.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var a in e) n.d(o, a, function(t) {
                return e[t]
            }.bind(null, a));
        return o
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 322)
}({
    322: function(e, t) {
        window.hjBootstrap = window.hjBootstrap || function(e, t, n) {
            var o = ["bot", "google", "headless", "baidu", "bing", "msn", "duckduckbot", "teoma", "slurp", "yandex", "phantomjs", "pingdom", "ahrefsbot"].join("|"),
                a = new RegExp(o, "i"),
                i = window.navigator || {
                    userAgent: "unknown"
                },
                r = i.userAgent ? i.userAgent : "unknown";
            if (a.test(r)) console.warn("Hotjar not launching due to suspicious userAgent:", r);
            else {
                var s = function(e, t, n) {
                    window.hjBootstrapCalled = (window.hjBootstrapCalled || []).concat(n), window.hj && window.hj._init && window.hj._init._verifyInstallation && hj._init._verifyInstallation()
                };
                s(0, 0, n);
                var d, l, p, _, u = window.document,
                    c = u.head || u.getElementsByTagName("head")[0];
                u.addEventListener && (hj.scriptDomain = e, (d = u.createElement("script")).async = 1, d.src = hj.scriptDomain + t, d.charset = "utf-8", c.appendChild(d), _ = ["iframe#_hjRemoteVarsFrame {", "display: none !important; width: 1px !important; height: 1px !important; opacity: 0 !important; pointer-events: none !important;", "}"], (l = u.createElement("style")).type = "text/css", l.styleSheet ? l.styleSheet.cssText = _.join("") : l.appendChild(u.createTextNode(_.join(""))), c.appendChild(l), (p = u.createElement("iframe")).style.cssText = _[1], p.name = "_hjRemoteVarsFrame", p.title = "_hjRemoteVarsFrame", p.id = "_hjRemoteVarsFrame", p.src = "https://" + (window._hjSettings.varsHost || "vars.hotjar.com") + "/box-25a418976ea02a6f393fbbe77cec94bb.html", p.onload = function() {
                    s.varsLoaded = !0, "undefined" != typeof hj && hj.event && hj.event.signal("varsLoaded")
                }, s.varsJar = p, "interactive" === u.readyState || "complete" === u.readyState || "loaded" === u.readyState ? h() : u.addEventListener("DOMContentLoaded", h), s.revision = "6ee2588bcce5", window.hjBootstrap = s)
            }

            function h() {
                setTimeout(function() {
                    u.body.appendChild(p)
                }, 50)
            }
        }, window.hjBootstrap("https://script.hotjar.com/", "modules.32d4d6c361d45587f461.js", "868286"), window.hjLazyModules = window.hjLazyModules || {
            SURVEY_V2: {
                js: "survey-v2.8fd71bf516aa66dfa249.js"
            },
            SURVEY_BOOTSTRAPPER: {
                js: "survey-bootstrapper.0d626c5b1a155b975e73.js"
            },
            SURVEY_ISOLATED: {
                js: "survey-isolated.7dc6dab9390e573191c8.js"
            },
            HEATMAP_SCREENSHOTTER: {
                js: "heatmap-screenshotter.f668187f213cc092a660.js"
            },
            HEATMAP_VIEWER: {
                js: "heatmap-viewer.ef940197d84b4a0933c6.js"
            },
            SURVEY_INVITATION: {
                js: "survey-invitation.a2a1a729e953a615dfa1.js"
            },
            NOTIFICATION: {
                js: "notification.6c927cc7f2e28a25109b.js"
            },
            INCOMING_FEEDBACK: {
                js: "incoming-feedback.bf3c06f4d8a7c8b48117.js"
            },
            PREACT_INCOMING_FEEDBACK: {
                js: "preact-incoming-feedback.7cc849a6e85f0613056f.js"
            },
            SENTRY: {
                js: "sentry.e8c7413b5635cabc60ff.js"
            }
        }
    }
});