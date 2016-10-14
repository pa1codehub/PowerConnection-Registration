angular.module("TutorialCntrl",[]);

.controller("TutController",["$scope", function($scope){ 

		$scope.tutObject={};
		$scope.tutObject.title="Main Page";
		$scope.tutObject.subTitle="Sub Title";
		$scope.tutObject.bindOutput = 2;
		}]);