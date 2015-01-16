var load = {
    all: function() {
        // arguments = 2 | all(urls, callback)
        if (arguments.length == 2) {
            loadingBar.add();
            ljs.all(arguments[0], loadingBar, arguments[1]);
        }
        // arguments = 3 | all(color, urls, callback)
        if (arguments.length == 3) {
            loadingBar.add(arguments[0]);
            ljs.all(arguments[1], loadingBar, arguments[2]);
        }
        // arguments = 4 | all(color, urls, callback, isKeep)
        if (arguments.length == 4) {
            loadingBar.add(arguments[0], arguments[3]);
            ljs.all(arguments[1], loadingBar, arguments[2]);
        }
    }
}
