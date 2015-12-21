app.controller('homeController',
    ['$scope','$http',function($scope,$http){

        $http.get('http://localhost:8080/buscaController/quatroMaisVendidos').success(function(data){
            $scope.products=data;
        });

        $http.get('http://localhost:8080/buscaController/ultimosProdutosVendidos').success(function(data){
            $scope.productLatest=data;
        });

        for(var product in $scope.productLatest){
            console.log(product.price)
            if(product.price>product.lastPrice){
                $scope.productLatest[$index].lastPrice=null;

            }
        }


   }]
);