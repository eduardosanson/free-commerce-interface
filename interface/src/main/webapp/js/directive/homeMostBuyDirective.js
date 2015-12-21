/**
 * @ngdoc directive
 * @name app:homeMostBuyDirective
 *
 * @description
 *
 *
 * @restrict A
 * */
app.directive('homeMostBuyDirective', function () {
        return {
            restrict: 'E',
            scope:{
            info:'='
            },
            templateUrl:'js/directive/mostBuyDirective.html'
        };
});
