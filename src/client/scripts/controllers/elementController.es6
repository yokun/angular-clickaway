angular.module('yo-clickaway').controller('MainCtrl',
	['$scope',($scope) =>{
		$scope.elmName = 'Judd'

		$scope.clickHandler = () => {
			console.log('YOHOO Clicked away')
		}
}])