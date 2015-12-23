app.controller('homeController',
    ['$scope','$http','$sce','$controller',function($scope,$http,$sce,$controller){

        angular.extend(this, $controller('faceBookController', {$scope: $scope}));

        $http.get('http://10.10.16.184:8090/buscaController/quatroMaisVendidos').success(function(data){
            $scope.products=data;
        });

        $http.get('http://10.10.16.184:8090/buscaController/ultimosProdutosVendidos').success(function(data){
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
        $http.get('http://10.10.16.184:8090/buscaController/topSellers').success(function(data){
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
        $http.get('http://10.10.16.184:8090/buscaController/recentlyViewer').success(function(data){
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
        $http.get('http://10.10.16.184:8090/buscaController/topNew').success(function(data){
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
        $scope.cart ={
                products:[{}],
                length:0,
                totalPrice:0
        }

        $scope.addToCart = function (product){

            if(typeof $scope.cart.products[0] == 'undefined' || $scope.cart.products[0] == null ==""){
                $scope.cart.products[0] = product;
                $scope.cart.length=1;
                $scope.cart.totalPrice=product.price;

            }else{
                var length = $scope.cart.products.length;
                $scope.cart.products[length] = product;
                $scope.cart.length= $scope.cart.length+1;
                $scope.cart.totalPrice=$scope.cart.totalPrice+product.price;

            }
            console.log($scope.cart.products[0]);
            console.log($scope.cart.totalPrice);
            console.log($scope.cart.length);

        }

        $scope.calcularPrecoProduto = function(){


        }
    }]
);