angular.module('routerApp', ['routerRoutes', 'ui.bootstrap'])

// create the controller and inject Angular's
// this will be the controller for the ENTIRE site
.controller('mainController', function() {

    // create a bigMessage variable to display in our view
    this.bigMessage = 'A smooth sea never made a skilled sailor.';

})

// home page specific controller
.controller('homeController', function() {
	this.message = 'This is the home page!';
})

// faq page controller
.controller('faqcontroller', function() {
    this.message = 'Look! I am an about page.';
})

// contact page controller
.controller('contactController', function() {
    this.message = 'Contact us! JK. This is just a demo.';
})

//how page controller
.controller('learnController', function() {

})

//brand page controller
.controller('brandController', function() {

})


//creative page controller
.controller('creativeController', function() {

})


//example page controller
.controller('exampleController', function() {

})

//hashtag page controller
.controller('hashtagController', function() {

})

//infographic page controller
.controller('infographicController', function() {

})


//faq page controller
.controller('faqController', function() {

});
