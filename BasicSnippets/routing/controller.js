var app = angular.module('mainApp',['ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
	//console.log($routeProvider);
	$routeProvider
	.when('/',function(){
		template : 'Welcome user!'
	})
	.when('/anotherpage',function(){
		template : "Welcome to anotherpage"
	});
	
}]);
