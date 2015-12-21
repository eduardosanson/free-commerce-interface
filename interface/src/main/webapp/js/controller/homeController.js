app.controller('homeController',
    ['$scope','$http',function($scope,$http){

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




   }]
);