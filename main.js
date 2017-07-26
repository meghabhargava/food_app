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
		templateUrl: 'pages/login.html', //calling of url login page by giving parameter
		controller: 'loginController'
	})
	.when('/home',{
		templateUrl: 'pages/main.html', // calling of url main page by giving parameter
		controller: 'mainController'
	})
  .when('/restaurant/:id',{  //:id is route parameter for calling multiple parameter
		templateUrl: 'pages/restaurant.html', // calling of url restaurant page by giving parameter
		controller: 'restaurantController'
	})
})


//----------------------login controller------------------------
  foodieApp.controller('loginController',function($scope,$location) {

    //---------function declare to go to home page after login form -------
    $scope.goToHome = function() {
		//console.log('Do Something')
    	$location.url('home') // add location where to go-------
	}



})

//-----------restaurant controller-------------------------
foodieApp.controller('restaurantController',function($scope,$routeParams,$http) {

    $scope.restaurantId = $routeParams.id; //catch the values of restaurants which is given in the url

  // restaurants objects--------------------
 var restaurants= [{
  	name: 'Laksh Restaurant',
  	address: 'Sai Road',
  	location: 'Baddi',
  	category: 'Casual Dining, Bar',
  	vote: '4.5',
  	cuisines: 'Modern Indian',
  	cost: '600',
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
  	hours: '7:30AM to 10 PM (Mon-Sun)',
    bestDish: {
        	name: 'Black Froest Cake',
        	image: 'https://d2z4fd79oscvvx.cloudfront.net/0023640_black_forest_cake.jpeg'
          },
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
    id: 5,
  	hours: '7:30AM to 10:30 PM (Mon-Sun)',
  	image: 'http://anandabhavanbaddi.com/images/client-1.jpg'
  }]

  	$scope.restaurant = restaurants[$routeParams.id - 1];

    //------ to get best dish ingrediants----------
    $scope.getIngredients = function(url) {
      var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
$http({
	'method': 'POST',
	'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
	'headers': {
		'Authorization': 'Key f49e748db7974ab6831f6c2b210d9cde',
		'Content-Type': 'application/json'
	},
	'data': data
}).then(function (response){
  var ingredients = response.data.outputs[0].data.concepts;
  		var list = '';
      for (var i =0;i<ingredients.length;i++) {="" list="" +="<div class="ingredient">" ingredients[i].name="" '<="" div="">'
    }

// 		$('.ingredients').html(list);
console.log(list);
      }, function (xhr) {
        console.log(xhr);
      })
}</ingredients.length;i++)>





    }
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
  id: 1,
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
  id: 2,
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
  id: 3,
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
  id: 4,
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
  id: 5,
	hours: '7:30AM to 10:30 PM (Mon-Sun)',
	image: 'http://anandabhavanbaddi.com/images/client-1.jpg'
}]
})
