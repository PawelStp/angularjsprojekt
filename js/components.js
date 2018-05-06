mainApp
    .component('dayschedule', {
        templateUrl: 'templates/components/dayschedule.html',
        controller: "dayschedule",
        bindings: {
            schedule: '=',
            groups: '=',
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

    .component('resource',{
        controller: "resourceController",
        templateUrl: 'templates/components/resource.html',
        bindings: {
            groups: '<',
        }
    })