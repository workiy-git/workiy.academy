! function(e, t, a) {
    var c = e.head || e.getElementsByTagName("head")[0],
        n = e.createElement("script");
    n.async = !0, n.defer = !0, n.type = "text/javascript", n.src = t + "/static/js/chat_widget.js?config=" + JSON.stringify(a), c.appendChild(n)
}(
    document, "https://app.engati.com", {
        bot_key: "d33ef45b1661470f",
        welcome_msg: true,
        branding_key: "default",
        server: "https://app.engati.com",
        e: "p"
    }
);
