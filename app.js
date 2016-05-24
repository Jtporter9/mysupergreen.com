angular.module('mySuperClean', ['ui.router'])

	.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

		$urlRouterProvider.otherwise('/home');

		$stateProvider
			.state('home', {
				url: '/home',
				templateUrl: 'js/home/home.html',
				controller: 'homeCtrl'
			})
			.state('about', {
				url: '/about',
				templateUrl: 'js/about/about.html',
				controller: 'aboutCtrl'
			})
			// 	.state('sign-up', {
			// 	url: '/sign-up',
			// 	templateUrl: 'js/sign-up/sign-up.html',
			// 	controller: 'sign-upCtrl'
			// })
			// .state('admin', {
			// 	url: '/admin',
			// 	templateUrl: 'js/admin/admin.html',
			// 	controller: 'adminCtrl'
			// })
	});
