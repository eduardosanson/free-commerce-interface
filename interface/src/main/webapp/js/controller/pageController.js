app.controller('pageController',
                      ['$scope',function($scope){

                          $scope.headPage = function(){
                          $("#headContent").load("head.html");
                          }


                      }]
                  );