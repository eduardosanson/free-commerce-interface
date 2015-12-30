app.controller('storeSignUpCtrl',
    ['$controller','$scope',function($controller,$scope){

        $scope.steps = [
            {
            step:1,
            id:'tab1',
            classe:'active',
            dataToggle:'tab',
            show:true,
            active:true
            },
            {
            step:2,
            id:'tab2',
            classe:'disabled',
            dataToggle:'',
            show:false,
            active:false
            },
            {
            step:3,
            id:'tab2',
            classe:'disabled',
            dataToggle:'',
            show:false,
            active:false
            }

        ]

        $scope.activateStepByTab = function(step){
            var length = $scope.steps.length;
            for(i=1;i<length;i++){
                if(step==$scope.steps[i].step){
                    if($scope.steps[i].active==true){
                        $scope.configureLayoutOn(i);
                    }
                }
            }
        }

        $scope.activateStep = function(step){
            var length = $scope.steps.length;
            for(i=0;i<length;i++){
                if(step==$scope.steps[i].step){
                   $scope.configureLayoutOn(i);
                }
            }

        }

        $scope.configureLayoutOn = function(layoutIndex){
               $scope.steps[layoutIndex].classe ='active';
               $scope.steps[layoutIndex].dataToggle = 'tab';
               $scope.steps[layoutIndex].show = true;
               $scope.steps[layoutIndex].active=true;

               $scope.hideOtherLayouts(layoutIndex);
        }

        $scope.configureLayoutOff = function(layoutIndex){
                       if($scope.steps[layoutIndex].active==true){
                            $scope.steps[layoutIndex].classe ='';
                            $scope.steps[layoutIndex].dataToggle = 'tab';
                            $scope.steps[layoutIndex].show = false;
                       }


                }

        $scope.hideOtherLayouts = function(layoutIndex){
               var length = $scope.steps.length;
               for(i=0;i<length;i++){
                    if(layoutIndex!=i){
                        $scope.configureLayoutOff(i);
                    }
               }
        }
    }]
    )