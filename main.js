$('#user-email').on('input',function() {
        var email = $('#user-email').val()
        var message = 'Welcome Back, ' + email;
        $('.welcome-message').text(message);
    });

	//-------------variable for app(angular.module syntax is used)----------
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
  .when('/fav',{
		templateUrl: 'pages/favourite.html',
		controller: 'favController'
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
foodieApp.controller('restaurantController',function($scope,$routeParams,$location,$http) {
$scope.ingredients = [];
    $scope.restaurantId = $routeParams.id; //catch the values of restaurants which is given in the url

  // restaurants objects--------------------
 var restaurants= [{
   name: 'Hide Out Cafe',
 	address: 'Mall Road,Shimla',
 	location: 'Shimla',
 	meal: 'Breakfast, Lunch, Dinner,Brunch',
 	vote: '4.5',
 	cuisines: 'Italian,Chinese,American,Indian,Cafe,Fast Food',
 good: 'Kids,Child-friendly',
  cost: '1200',
   id: 1,
 	hours: '9 AM to 10 PM (Mon-Sun)',
  details:'Address: Mall Road, Shimla 171001,(H.P.) India  Location: Asia  >  India  >  Himachal Pradesh  >  Shimla District  >  Shimla-171001 (H.P), India   Phone Number: +91 89882 68674',
 	image: 'https://media-cdn.tripadvisor.com/media/photo-s/09/2a/b3/a4/refresh-yourself-with.jpg'
  },
  {
    name: 'City Point Bakery',
    address: 'The Mall Road, Shimla',
    location: 'Shimla',
    meal:'Breakfast',
    vote: '4.5',
    cuisines: 'Fast food',
    good:'Child-friendly',
    cost: '250',
    id: 2,
    hours: '7:30AM to 10:30 PM (Mon-Sun)',
    details:'Address: The Mall Road, Shimla-171001, H.P   Location: Asia  >  India  >  Himachal Pradesh  Phone Number: +91 177 281 1856',
    image: 'https://media-cdn.tripadvisor.com/media/photo-s/07/ec/a0/db/city-point-bakery.jpg',
    bestDish: {
          name: 'Black Forest Cake',
          image: 'https://d2z4fd79oscvvx.cloudfront.net/0023640_black_forest_cake.jpeg'
          },
  },
  {
  	name: 'Ashiana & Goofa',
  	address: 'The Ridge, Lower Bazaar, Shimla 171001, India',
  	location: 'Shimla',
    meal:'Lunch, Dinner, Breakfast, Brunch, After-hours',
    vote: '3.5',
    cuisines: 'Chinese, Indian, Asian, Vegetarian Friendly',
    good:'Kids, Child-friendly, View, Groups, Romantic',
    cost: '500',
  	id: 3,
  	hours: '9:30AM to 10:30PM (Mon-Sun)',
    details:'Address: The Ridge, Lower Bazaar, Shimla Location: Asia  >  India  >  Himachal Pradesh  >  Shimla District  >  Shimla-171001 (H.P), India Phone Number: 0177-265-8464',
    image: 'https://c2.staticflickr.com/4/3588/3498062384_3da6d0a96b_z.jpg?zz=1'
  },
  {
  	name: 'Baljee\'s',
  	address: 'Baljees The Mall Road, Shimla',
  	location: 'Shimla',
    meal:'Breakfast, Lunch, Dinner, After-hours',
  	vote: '3.5',
    cuisines: 'Indian',
    good:' Groups, Kids, Child-friendly',
    cost: '1000',
  	id: 4,
  	hours: '7:30AM to 10 PM (Mon-Sun)',
    details: 'Address: Baljees The Mall Road, Shimla Location: Asia  >  India  >  Himachal Pradesh Phone Number: +91 177 265 2313',
  	image: 'https://media-cdn.tripadvisor.com/media/photo-s/0a/49/57/85/photo0jpg.jpg'
  },
  {
    	name: 'Indian Coffee House',
    	address: 'The Mall Road,Shimla',
    	location: 'Shimla',
    	meal: 'Breakfast, Lunch, Dinner,Brunch',
    	vote: '4',
    	cuisines: 'Indian, Cafe, Vegetarian Friendly',
      good:'Groups, Child-friendly, Kids',
      cost: '1200',
      id: 5,
    	hours: '9 AM to 10 PM (Mon-Sun)',
      details :'Address: The Mall Road, Shimla 171012, India Location: Asia  >  India  >  Himachal Pradesh  >  Shimla- District  >  Shimla-171001 (H.P), India Phone Number: +91 177 265 2982',
    	image: 'http://snnehh.com/wp-content/uploads/2012/05/Indian-Coffee-House-Shimla.jpg',

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
 	'data': data,
}).then(function sucess(response) {
	var ingredients = response.data.outputs[0].data.concepts;
  var list = '';
	for (var i =0;i < ingredients.length;i++) {
	$scope.ingredients.push(ingredients[i].name);
	}
},
  function error(xhr)
    {
        console.log(xhr);
    });
  }
 $scope.goToFav = function() {

													$location.url('fav')
													console.log($location.url);
												}

})



	//--------------------------maincontroller-------------

	foodieApp.controller('mainController',function($scope) //$scope use to  show list of restaurants//
   {
		//	$scope.restaurants = ['Farzi Cafe','Pizza Hut','Wenger\'s Deli','Sagar Ratna'];

$scope.restaurants = [{
	name: 'Hide Out Cafe',
	address: 'Mall Road,Shimla',
	location: 'Shimla',
	vote: '4.5',
	cuisines: 'Italian,Chinese,American,Indian,Cafe,Fast Food',
  cost: '2500',
  id: 1,
	hours: '9 AM to 10 PM (Mon-Sun)',
	image: 'https://media-cdn.tripadvisor.com/media/photo-s/09/2a/b3/a4/refresh-yourself-with.jpg'
},
{
  	name: 'City Point Bakery',
  	address: 'The Mall Road, Shimla',
  	location: 'Shimla',
  	vote: '4.5',
  	cuisines: 'Fast food',
  	cost: '250',
    id: 2,
  	hours: '7:30AM to 10:30 PM (Mon-Sun)',
  	image: 'https://media-cdn.tripadvisor.com/media/photo-s/07/ec/a0/db/city-point-bakery.jpg'
},
{
  	name: 'Ashiana & Goofa',
  	address: 'The Ridge, Lower Bazaar, Shimla 171001, India',
  	location: 'Shimla',
    vote: '3.5',
  	cuisines: 'Chinese, Indian, Asian, Vegetarian Friendly',
    cost: '500',
  	id: 3,
  	hours: '9:30AM to 10:30PM (Mon-Sun)',
    image: 'https://c2.staticflickr.com/4/3588/3498062384_3da6d0a96b_z.jpg?zz=1'
	},
{
  name: 'Baljee\'s',
  address: 'Baljees The Mall Road, Shimla',
  location: 'Shimla',
  vote: '3.5',
  cuisines: 'Indian',
  cost: '1000',
  id: 4,
  hours: '7:30AM to 10 PM (Mon-Sun)',
  image: 'https://media-cdn.tripadvisor.com/media/photo-s/0a/49/57/85/photo0jpg.jpg'
},
{
name: 'Indian Coffee House',
address: 'The Mall Road,Shimla',
location: 'Shimla',
vote: '4',
cuisines: 'Indian, Cafe, Vegetarian Friendly',
cost: '1200',
id: 5,
hours: '9 AM to 10 PM (Mon-Sun)',
image: 'http://snnehh.com/wp-content/uploads/2012/05/Indian-Coffee-House-Shimla.jpg'
}]
})

//------------------------------ favController

foodieApp.controller('favController',function($scope,$location,$http) {


	$scope.ingredients = [];

//console.log($routeParams.id);

  $scope.restaurants = [{
    							id: 1,
    							bestDish: {
    										name: 'Cake',
    										image: 'http://img10.deviantart.net/c2a3/i/2015/165/0/2/small_ckae_by_mariosonicfan16-d8x8b0c.jpg'
    									},
    							image: 'http://img10.deviantart.net/c2a3/i/2015/165/0/2/small_ckae_by_mariosonicfan16-d8x8b0c.jpg'
    						},
            {
						id: 2,
						bestDish: {
									name: 'Panner Pizza',
									image: 'http://vegkhanakhazana.in/wp-content/uploads/2017/02/paneer-pizza1.jpg'
								},

            image: 'http://vegkhanakhazana.in/wp-content/uploads/2017/02/paneer-pizza1.jpg'
          },
          {
								id: 3,
								bestDish: {
											name: 'Sandwich',
											image: 'http://domemanila.com/wp-content/uploads/2015/09/sandwich-club-sandwich.jpg'
										},

                image: 'http://domemanila.com/wp-content/uploads/2015/09/sandwich-club-sandwich.jpg'
              },
              {

										id: 4,
										bestDish: {
													name: 'Grilled fish',
													image: 'https://thumbs.dreamstime.com/z/grilled-fish-served-potatoes-sauce-lemon-close-up-29801081.jpg'
												},

                    image: 'https://thumbs.dreamstime.com/z/grilled-fish-served-potatoes-sauce-lemon-close-up-29801081.jpg'
            }]


//---list of like item

						$scope.lists1 = [
						{'vl' : 'pastry'},
						{'vl' : 'cheese'},
						{'vl' : 'sandwich'},
						{'vl' : 'strawberry'},
						{'vl' : 'vegetables'},
					];
					$scope.lst1 = [];
					$scope.change1 = function(check,value){
								if(check){
										$scope.lst1.push(value);
								}else{
										 $scope.lst1.splice($scope.lst1.indexOf(value), 1);
								}
					};

					//----list of not like items
					$scope.lists2 = [
					{'vl' : 'cream'},
					{'vl' : 'onion'},
					{'vl' : 'tomato'},
					{'vl' : ''},
					{'vl' : ''},
					];
					$scope.lst2 = [];
					$scope.change2 = function(check,value){
							if(check){
									$scope.lst2.push(value);
							}else{
									 $scope.lst2.splice($scope.lst2.indexOf(value), 1);
							}
					};

//----------to get favourite dish or not favourite----
								$scope.getFav = function(url) {
						var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
										$http({
											'method': 'POST',
											'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
											'headers': {
												'Authorization': 'Key f49e748db7974ab6831f6c2b210d9cde',
												'Content-Type': 'application/json'
											},
											'data': data,

										}).then(function (response) {
													var ingredients = response.data.outputs[0].data.concepts;
										  			var list = '';
														//  var cboxArray = [];
														for (var i =0;i < ingredients.length;i++) {
															$scope.ingredients.push(ingredients[i].name);
														}

														for(var i=0;i< $scope.lst1.length;i++){
													if ($scope.ingredients.indexOf($scope.lst1[i]) > -1) {

																if($scope.ingredients.indexOf($scope.lst2[i]) > -1){
																	// var info1 = "<h2 class='highlight-info'>You will not like this Food</h2>";
																  console.log("Not Your FAV");
																	$(".highlight-info").text('Not favourite');
																		 $(".rest-extra").css("background-color" ,"#ea0b0b");

																					break;
																}
																// var info2 = "<h2 class='highlight-info'>This is the food You May LIKE</h2>";
																console.log("Your FAV");
																$(".highlight-info").text('Favourite');
																	$(".rest-extra").css("background-color" ,"#308917");
																break;
															 }

															 else {
																//  var info1 = "<h2 class='highlight-info'>You will not like this Food</h2>";
																 console.log("Not Your FAV");
																	$(".highlight-info").text('Not favourite');
																	$(".rest-extra").css("background-color" ,"#ea0b0b");

															 }

									}


											//console.log(list);
										}, function (xhr) {
																	   console.log(xhr);
																	  });
																}




})
