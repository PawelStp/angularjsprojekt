mainApp
    .filter('break', function () {
        return function (x) {
            if (x == "Okienko")
                return "";
            return x;
        };
    })

    .filter('formatDate', function () {
        return function (x) {
            var a = x + 1;
            return x + ".00-" + a + ".00";
        };
    });