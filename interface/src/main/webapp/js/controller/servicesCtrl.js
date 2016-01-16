
app.controller('servicesCtrl',['$http','$scope', function($http,$scope){

    $scope.getMyShopping = function(){
            var response;
              $http.get('http://localhost:8090/buscaController/pedidosPorUsuario').success(function(data){
                                response = data;
                                console.log("data"+data)
                            });


            return response;
    }

    $http.get('http://localhost:8090/buscaController/quatroMaisVendidos').success(function(data){
                $scope.products=data;
            });

            $http.get('http://localhost:8090/buscaController/ultimosProdutosVendidos').success(function(data){
                $scope.productLatest=data;
                length = $scope.productLatest.length;
                for(i=0;i<length;i++){
                    var product = $scope.productLatest[i];
                    if(product.lastPrice< product.price){
                        product.lastPrice = null;
                    }
                }
            });

            $scope.topSellers = function(){
            $http.get('http://localhost:8090/buscaController/topSellers').success(function(data){
                        $scope.productsTopSellers=data;
                        var length = $scope.productsTopSellers.length
                        for(i =0;i<length;i++){
                            var loopVal = $scope.productsTopSellers[i].rating;
                            var rating = [];
                            for(j=0;j<loopVal;j++){
                                rating[j]=j;
                            }
                            $scope.productsTopSellers[i].rating = rating;
                        }
                    });
            }

            $scope.recentlyViewer = function(){
            $http.get('http://localhost:8090/buscaController/recentlyViewer').success(function(data){
                                $scope.productsRecentlyViewer=data;
                                var length = $scope.productsRecentlyViewer.length
                                for(i =0;i<length;i++){
                                    var loopVal = $scope.productsRecentlyViewer[i].rating;
                                    var rating = [];
                                    for(j=0;j<loopVal;j++){
                                        rating[j]=j;
                                    }
                                    $scope.productsRecentlyViewer[i].rating = rating;

                                }
                            });
            }

            $scope.topNew = function(){
            $http.get('http://localhost:8090/buscaController/topNew').success(function(data){
                                        $scope.productsTopNew=data;
                                        var length = $scope.productsTopNew.length
                                        for(i =0;i<length;i++){
                                            var loopVal = $scope.productsTopNew[i].rating;
                                            var rating = [];
                                            for(j=0;j<loopVal;j++){
                                                rating[j]=j;
                                            }
                                            $scope.productsTopNew[i].rating = rating;

                                        }
                                    });
                    }

            $scope.searchProductsByName = function(productName){
                    $http.get('http://localhost:8090/buscaController/buscarProdutos/PorNome?productName='+productName).
                    success(function(data){
                            $scope.productsFind=data;
                            $scope.activateMenu($scope.menus[1].name);
                    })
            }

}]);
