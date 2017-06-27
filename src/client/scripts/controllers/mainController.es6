angular.module('yo-clickaway').controller('mainController',
	['$scope',($scope) =>{
		$scope.elmName = 'Judd'

		$scope.clickHandler = () => {
			console.log('YOHOO Clicked away')
		}
}])
