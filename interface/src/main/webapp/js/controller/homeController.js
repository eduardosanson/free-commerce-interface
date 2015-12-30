app.controller('homeController',
    ['$scope','$http','$sce','$controller',function($scope,$http,$sce,$controller){

        $scope.cart ={
                        products:null,
                        length:0,
                        totalPrice:0,

                }


                $scope.addToCart = function (product){

                   if(typeof product.name != 'undefined'){
                        newProduct=true;

                        if($scope.cart.products ==null || typeof $scope.cart.products[0] == 'undefined' || typeof $scope.cart.products[0].name == 'undefined' || $scope.cart.products[0].name == null){
                            $scope.cart.products = [{}];
                            product.qtd=1;
                            $scope.cart.products[0] = product;
                            $scope.cart.length=1;
                            $scope.cart.totalPrice = product.price;

                        }else{
                            var length = $scope.cart.products.length;
                            for(i=0;i<length;i++){
                                if($scope.cart.products[i].id==product.id){
                                    var qtd = $scope.cart.products[i].qtd;
                                    $scope.cart.products[i].qtd = qtd+1;
                                    $scope.cart.totalPrice = $scope.cart.totalPrice + $scope.cart.products[i].price;
                                    $scope.cart.length = $scope.cart.length +1;
                                    newProduct =false;
                                    }
                            }
                            if(newProduct==true){
                                product.qtd =1;
                                $scope.cart.products[length] = product;
                                $scope.cart.length= $scope.cart.length+1;
                                $scope.cart.totalPrice=$scope.cart.totalPrice+product.price;
                            }


                        }
                   }

                }

                $scope.removeToCart = function(product){
                    if(typeof product.name != 'undefined'){
                       var id = product.id;
                       var length = $scope.cart.products.length;
                       for(i=0;i<length;i++){
                       var productId = $scope.cart.products[i].id;
                       var qtd = $scope.cart.products[i].qtd;
                            if(productId==id){
                                if(qtd>1){
                                    $scope.cart.products[i].qtd = qtd-1
                                    if($scope.cart.length>0){
                                       $scope.cart.length = $scope.cart.length -1;
                                    }
                                    if($scope.cart.totalPrice>0){
                                       $scope.cart.totalPrice = $scope.cart.totalPrice - product.price;
                                    }
                                    break;
                                }else if(qtd==1){
                                    $scope.deleteOnCart(product);
                                }
                            }
                       }
                    }
                }

                $scope.deleteOnCart = function(product){
                               if(typeof product.name != 'undefined'){
                                   var indexOfProduct = $scope.cart.products.indexOf(product);
                                   var priceTotalCart = $scope.cart.totalPrice;
                                   var lengthCart = $scope.cart.length;

                                   if(indexOfProduct>-1){
                                        var productToDelete = $scope.cart.products.splice(indexOfProduct,1);
                                        $scope.cart.totalPrice = priceTotalCart - (productToDelete[0].price * productToDelete[0].qtd);
                                        $scope.cart.length = lengthCart - productToDelete[0].qtd;
                                   }
                                }
                            }

        angular.extend(this, $controller('faceBookController', {$scope: $scope}));
        angular.extend(this, $controller('menuCtrl', {$scope: $scope}));

        $http.get('http://192.168.25.2:8090/buscaController/quatroMaisVendidos').success(function(data){
            $scope.products=data;
        });

        $http.get('http://192.168.25.2:8090/buscaController/ultimosProdutosVendidos').success(function(data){
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
        $http.get('http://192.168.25.2:8090/buscaController/topSellers').success(function(data){
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
        $http.get('http://192.168.25.2:8090/buscaController/recentlyViewer').success(function(data){
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
        $http.get('http://192.168.25.2:8090/buscaController/topNew').success(function(data){
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
                $http.get('http://192.168.25.2:8090/buscaController/buscarProdutos/PorNome?productName='+productName).
                success(function(data){
                        $scope.productsFind=data;
                        $scope.activateMenu($scope.menus[1].name);
                })
        }


        }]
);