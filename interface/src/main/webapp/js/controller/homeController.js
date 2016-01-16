app.controller('homeController',
    ['$scope','$http','$sce','$controller',function($scope,$http,$sce,$controller){

            angular.extend(this, $controller('faceBookController', {$scope: $scope}));
            angular.extend(this, $controller('menuCtrl', {$scope: $scope}));
            angular.extend(this, $controller('servicesCtrl', {$scope: $scope}));

        $scope.MyShoppingObj=[{}];

        $scope.hideCart = function(){
            $scope.cart.show=false;
        }

        $scope.showCart = function(){
            $scope.cart.show=true;
        }

        $scope.cart ={
                        products:null,
                        length:0,
                        totalPrice:0,
                        show:true,
                        cart:true
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


        }]
);