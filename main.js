$('#user-email').on('input',function() {
        var email = $('#user-email').val()
        var message = 'Welcome Back, ' + email;
        $('.welcome-message').text(message);
    });
	
	//-------------variable for app----------
	var foodieApp = angular.module('foodieApp',[])
	
	//-----------controller-------------
	
	foodieApp.controller('mainController',function($scope) {
		//	$scope.restaurants = ['Farzi Cafe','Pizza Hut','Wenger\'s Deli','Sagar Ratna'];

$scope.restaurants = [{
	name: 'Farzi Cafe',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.2',
	cuisines: 'Modern Indian',
	cost: '2200',
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
},
{name: 'A1 dhaba',
	address: 'bhud',
	location: 'baddi',
	category: 'Casual Dining, Bar',
	vote: '4.8',
	cuisines: 'Modern Indian & chinease',
	cost: '1200',
	hours: '9 AM to 10 PM (Mon-Sun)',
	image: 'https://www.topranker4u.com/wp-content/uploads/2017/04/top-dhaba-restaurants-300-200-300x200.jpg'
}]
})