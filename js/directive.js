mainApp
    .directive('firstLetterToUpper', function () {
        return {
            require: 'ngModel',
            link: function (scope, element, attr, ngModelCtrl) {
                function capitalize(text) {
                    ngModelCtrl.$setViewValue(text.charAt(0).toUpperCase() + text.slice(1));
                    ngModelCtrl.$render();
                    return text.charAt(0).toUpperCase() + text.slice(1);
                }
                ngModelCtrl.$parsers.push(capitalize);
            }
        };
    });
