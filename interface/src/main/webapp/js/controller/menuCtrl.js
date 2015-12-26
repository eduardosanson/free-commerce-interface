/**
 * @ngdoc controller
 * @name app:menuCtrl
 *
 * @description
 *
 *
 * @requires $scope
 * */
app.controller('menuCtrl', function($scope){

    $scope.menus = [
                    {
                     value:true,
                     name:'HOME'
                    },
                    {
                     value:false,
                     name:'WHISHlIST'
                    },
                    {
                    value:false,
                    name:'CARRINHO'
                    },
                    {
                    value:false,
                    name:'CADASTRO'
                    },
                    {
                    value:false,
                    name:'PRODUTO'
                    }
                    ]

            $scope.activateMenu = function(menu){


                    switch(menu) {
                        case $scope.menus[0].name:
                            enableMenu($scope.menus[0].name);
                            break;
                        case $scope.menus[1].name:
                            enableMenu($scope.menus[1].name);
                            break;
                        case $scope.menus[2].name:
                            enableMenu($scope.menus[2].name);
                            break;
                        case $scope.menus[3].name:
                            enableMenu($scope.menus[3].name);
                            break;
                        case $scope.menus[4].name:
                            enableMenu($scope.menus[4].name);
                            break;
                        default: enableMenu($scope.menus[0].name);
                    }
            }

    var enableMenu = function(name){
        var length = $scope.menus.length;
        for(i =0;i<length;i++){
            if($scope.menus[i].name==name){
                $scope.menus[i].value=true;
            }else{
                $scope.menus[i].value=false;
            }
        }

    }

    $scope.isActive = function(value){
         if(value==true){
               return "active";
         }

        }

});
