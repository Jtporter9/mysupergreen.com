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
				.state('contact', {
				url: '/contact',
				templateUrl: 'js/contact/contact.html',
				controller: 'contactCtrl'
			})
			// .state('admin', {
			// 	url: '/admin',
			// 	templateUrl: 'js/admin/admin.html',
			// 	controller: 'adminCtrl'
			// })
	});
