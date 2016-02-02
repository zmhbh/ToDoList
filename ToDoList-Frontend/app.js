var app = angular.module('myTodoList', []);

// footer current year directive
app.directive('currentYear', ['dateFilter', function (dateFilter) {

    function link(scope, element, attrs) {

        var format;

        function getYear() {
            element.text(dateFilter(new Date(), format))
        }

        scope.$watch(attrs.currentYear, function (val) {
            format = val;
            getYear();
        });

    };

    return {
        link: link
    };

}]);
