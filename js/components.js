mainApp
    .component('dayschedule', {
        templateUrl: 'templates/components/dayschedule.html',
        controller: "dayschedule",
        bindings: {
            day: '='
        }
    })
    .component('groupdayschedule', {
        templateUrl: 'templates/components/groupdayschedule.html',
        controller: "groupdayschedule",
        bindings: {
            day: '=',
            group: '='
        }
    })
    .component('editday', {
        templateUrl: 'templates/components/editday.html',
        controller: "editdayController",
        bindings: {
            editable: '=',
        }
    })