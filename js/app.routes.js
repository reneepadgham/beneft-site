// inject ngRoute for all our routing needs
angular.module('routerRoutes', ['ngRoute'])

// configure our routes
.config(function($routeProvider, $locationProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'views/pages/home.html',
            controller  : 'homeController',
            controllerAs: 'home'
        })

        // route for the faq page
        .when('/faq', {
            templateUrl : 'views/pages/faq.html',
            controller  : 'faqController',
            controllerAs: 'faq'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl : 'views/pages/contact.html',
            controller  : 'contactController',
            controllerAs: 'contact'
        })

        .when('/learn', {
            templateUrl : 'views/pages/how.html',
            controller  : 'learnController',
            controllerAs: 'learn'
        })

        .when('/brand', {
            templateUrl : 'views/pages/brand.html',
            controller  : 'brandController',
            controllerAs: 'brand'
        })

        .when('/creative', {
            templateUrl : 'views/pages/creative.html',
            controller  : 'creativeController',
            controllerAs: 'creative'
        })

        .when('/example', {
          templateUrl : 'views/pages/example.html',
          controller  : 'exampleController',
          controllerAs: 'example'
        })

        .when('/hashtag', {
          templateUrl : 'views/pages/hashtag.html',
          controller  : 'hashtagController',
          controllerAs: 'hashtag'
        })

        .when('/infographic', {
          templateUrl : 'views/pages/infographic.html',
          controller  : 'infographicController',
          controllerAs: 'infographic'
        })

        .when('/signup', {
            templateUrl : 'views/pages/signup.html',
            controller  : 'signupController',
            controllerAs: 'signup'
        });

    $locationProvider.html5Mode(true);
});
