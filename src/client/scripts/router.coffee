angular.module('yo-clickaway').config ['$routeProvider', ($routeProvider) ->
	# ROUTES
	# ======
	$routeProvider
		.when '/',
			templateUrl: "views/home.html",
			controller: "mainController"

]
