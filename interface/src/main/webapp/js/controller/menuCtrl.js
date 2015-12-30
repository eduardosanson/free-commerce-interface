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
                     name:'PRODUTOS'
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
                    },
                    {
                    value:false,
                    name:'LOJAS'
                    },
                    {
                    value:false,
                    name:'EMPREENDER'
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
                        case $scope.menus[5].name:
                            enableMenu($scope.menus[5].name);
                            break;
                        case $scope.menus[6].name:
                            enableMenu($scope.menus[6].name);
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

    $scope.fileinputFunction = function(){
       $("#input-ficons-3").fileinput({
           uploadUrl: "/img",
           previewFileIcon: '<i class="fa fa-file"></i>',
           allowedPreviewTypes: ['image', 'text'], // allow only preview of image & text files
           previewFileIconSettings: {
               'docx': '<i class="fa fa-file-word-o text-primary"></i>',
               'xlsx': '<i class="fa fa-file-excel-o text-success"></i>',
               'pptx': '<i class="fa fa-file-powerpoint-o text-danger"></i>',
               'pdf': '<i class="fa fa-file-pdf-o text-danger"></i>',
               'zip': '<i class="fa fa-file-archive-o text-muted"></i>',
           }
       });
    }


});
