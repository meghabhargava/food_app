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

// favController

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
						},{

						id: 2,
						bestDish: {
									name: 'Corn Pizza',
									image: 'https://images.food52.com/zyrGNL1_8ZxmJ43jtBLQoyLfNvA=/753x502/c947f605-2d61-4a10-9f69-abc7dda9fffb--DSC07406.JPG'
								},

            image: 'https://images.food52.com/zyrGNL1_8ZxmJ43jtBLQoyLfNvA=/753x502/c947f605-2d61-4a10-9f69-abc7dda9fffb--DSC07406.JPG'
          },
          {
								id: 3,
								bestDish: {
											name: 'Italian Pasta',
											image: 'https://www.sensibus.com/deli/sites/sensibus.com/files/recipes/pasta-dish-2_0.jpg'
										},

                image: 'https://www.sensibus.com/deli/sites/sensibus.com/files/recipes/pasta-dish-2_0.jpg'
              },
              {

										id: 4,
										bestDish: {
													name: 'Grilled fish',
													image: 'https://thumbs.dreamstime.com/z/grilled-fish-served-potatoes-sauce-lemon-close-up-29801081.jpg'
												},

                    image: 'https://thumbs.dreamstime.com/z/grilled-fish-served-potatoes-sauce-lemon-close-up-29801081.jpg'
                    }]



						$scope.lists1 = [
						{'vl' : 'custard'},
						{'vl' : 'almond'},
						{'vl' : 'cream'},
						{'vl' : 'strawberry'},
						{'vl' : 'apple'},
					];
					$scope.lst1 = [];
					$scope.change1 = function(check,value){
								if(check){
										$scope.lst1.push(value);
								}else{
										 $scope.lst1.splice($scope.lst1.indexOf(value), 1);
								}
					};

					//
					$scope.lists2 = [
					{'vl' : 'pastry'},
					{'vl' : 'egg'},
					{'vl' : 'onion'},
					{'vl' : 'tomato'},
					{'vl' : 'banana'},
					];
					$scope.lst2 = [];
					$scope.change2 = function(check,value){
							if(check){
									$scope.lst2.push(value);
							}else{
									 $scope.lst2.splice($scope.lst2.indexOf(value), 1);
							}
					};


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
																	$(".highlight-info").text('You will not like this Food');
																		 $(".rest-extra").css("background-color" ,"#ea0b0b");

																					break;
																}
																// var info2 = "<h2 class='highlight-info'>This is the food You May LIKE</h2>";
																console.log("Your FAV");
																$(".highlight-info").text('This is the food You May LIKE');
																	$(".rest-extra").css("background-color" ,"#308917");
																break;
															 }

															 else {
																//  var info1 = "<h2 class='highlight-info'>You will not like this Food</h2>";
																 console.log("Not Your FAV");
																	$(".highlight-info").text('You will not like this Food');
																	$(".rest-extra").css("background-color" ,"#ea0b0b");

															 }

									}


											//console.log(list);
										}, function (xhr) {
																	   console.log(xhr);
																	  });
																}




})
