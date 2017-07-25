$('#user-email').on('input',function() {
        var email = $('#user-email').val()
        var message = 'Welcome Back, ' + email;
        $('.welcome-message').text(message);
    });

	//-------------variable for app----------
	var foodieApp = angular.module('foodieApp',['ngRoute']);
  
  //-------------------telling angular js where we want to go---------------
  foodieApp.config(function ($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl: 'pages/login.html',
		controller: 'loginController'
	})
	.when('/home',{
		templateUrl: 'pages/main.html',
		controller: 'mainController'
	})
})


//----------------------login controller------------------------
  foodieApp.controller('loginController',function($scope) {
})
	//-----------maincontroller-------------

	foodieApp.controller('mainController',function($scope) {
		//	$scope.restaurants = ['Farzi Cafe','Pizza Hut','Wenger\'s Deli','Sagar Ratna'];

$scope.restaurants = [{
	name: 'Laksh Restaurant',
	address: 'Sai Road',
	location: 'Baddi',
	category: 'Casual Dining, Bar',
	vote: '4.5',
	cuisines: 'Modern Indian',
	cost: '600',
	hours: '9 AM to 10 PM (Mon-Sun)',
	image: 'https://asia-public.foodpanda.com/assets/production/in/images/vendors/r2xc.jpg?v=20170610153153'
},
{
	name: 'A1 dhaba',
	address: 'bhud',
	location: 'baddi',
	category: 'Casual Dining, Bar',
	vote: '4.8',
	cuisines: 'Modern Indian & chinease',
	cost: '1200',
	hours: '9 AM to 10 PM (Mon-Sun)',
	image: 'https://www.topranker4u.com/wp-content/uploads/2017/04/top-dhaba-restaurants-300-200-300x200.jpg'
},
{
	name: 'Dawat Restaurant',
	address: 'Near Canara Bank,Rotary Chowk,Sai road',
	location: 'Baddi',
	category: 'Casual Dining, Bar',
	vote: '4',
	cuisines: 'Modern Indian & chinease',
	cost: '1500',
	hours: '9:30AM to 10:30PM (Mon-Sun)',
	image: 'http://images.mydala.com/uploads/event/2015-06-02/217112/217112_1.jpg'
},
{
	name: 'Saffron Restaurant',
	address: 'MDR7',
	location: 'baddi',
	category: 'Casual Dining,Sweets & Bakers',
	vote: '3.9',
	cuisines: 'Modern Indian',
	cost: '500',
	hours: '7:30AM to 10 PM (Mon-Sun)',
	image: 'https://qph.ec.quoracdn.net/main-qimg-c50293086be900edec89867b17958da8-c'
},
{
	name: 'Ananda Bhawan',
	address: 'SCF 4,Phase 1,Housing Board,Sai Road,Near Old Malhorta Hospital',
	location: 'baddi',
	category: 'Casual Dining, Bar',
	vote: '4.1',
	cuisines: 'Modern Indian & south indian',
	cost: '2000',
	hours: '7:30AM to 10:30 PM (Mon-Sun)',
	image: 'http://anandabhavanbaddi.com/images/client-1.jpg'
}]
})
