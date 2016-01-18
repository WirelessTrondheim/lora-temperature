
var trtHttp = (function (my) {
    var http = new XMLHttpRequest();

    my.getJson = function (url, cb) {
        http.onreadystatechange = function () {
            if (http.readyState === XMLHttpRequest.DONE) {
                if (http.status === 200) {
                    cb(JSON.parse(http.responseText));
                }
            }
        };

        http.open("GET", url, true);
        http.send();
    }

    return my;
}(trtHttp || {}));
