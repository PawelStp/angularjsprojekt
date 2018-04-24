mainApp.filter('break', function () {
    return function (x) {
        if (x == "Okienko")
            return "";
        return x;
    };
});