app.controller('homeController',
    ['$scope','$http','$sce',function($scope,$http,$sce){

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

        $scope.facebook = function(d, s, id) {
              var js, fjs = d.getElementsByTagName(s)[0];
              if (d.getElementById(id)) return;
              js = d.createElement(s); js.id = id;
              js.src = "//connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v2.5";
              fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk');

        $scope.facebookHTML=$sce.trustAsHtml('<div id="fb-root"></div>' +
                            '<div class="fb-like" data-href="https://developers.facebook.com/docs/plugins/" ' +
                            'data-layout="button_count" ' +
                            'data-action="like" ' +
                            'data-show-faces="true" ' +
                            'data-share="true"></div>'
                            )
        $scope.headPage = function(){
        $("#headContent").load("head.html");
        }


    }]
);