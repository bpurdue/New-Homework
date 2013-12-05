$(function() {
	// jQuery UI tabs
	$("#tabs").tabs();
});

// AngularJS controllers

var app = angular.module('winwinTournament', [], function () {

})

app.controller('TennisTournament', function ($scope) {
	$scope.players = [
		{
			'name'	: 'John',
			'team'	: 'Team 1',
			scores	: [
				{
					'player'	: 0,
					'opponent' 	: 0,
					'regular'	: 0
				},
				{
					'player'	: 0,
					'opponent' 	: 0,
					'regular'	: 0
				},
				{
					'player'	: 0,
					'opponent' 	: 0,
					'regular'	: 0
				}
			]
		},
		{
			'name'	: 'Jane',
			'team'	: 'Team 1',
			scores	: [
				{
					'player'	: 0,
					'opponent' 	: 0,
					'regular'	: 0
				},
				{
					'player'	: 0,
					'opponent' 	: 0,
					'regular'	: 0
				},
				{
					'player'	: 0,
					'opponent' 	: 0,
					'regular'	: 0
				}
			]
		},
		{
			'name'	: 'Clark',
			'team'	: 'Team 2',
			scores	: [
				{
					'player'	: 0,
					'opponent' 	: 0,
					'regular'	: 0
				},
				{
					'player'	: 0,
					'opponent' 	: 0,
					'regular'	: 0
				},
				{
					'player'	: 0,
					'opponent' 	: 0,
					'regular'	: 0
				}
			]
		},
		{
			'name'	: 'Lois',
			'team'	: 'Team 2',
			scores	: [
				{
					'player'	: 0,
					'opponent' 	: 0,
					'regular'	: 0
				},
				{
					'player'	: 0,
					'opponent' 	: 0,
					'regular'	: 0
				},
				{
					'player'	: 0,
					'opponent' 	: 0,
					'regular'	: 0
				}
			]
		},
		{
			'name'	: 'Roy Rogers',
			'team'	: 'Team 3',
			scores	: [
				{
					'player'	: 0,
					'opponent' 	: 0,
					'regular'	: 0
				},
				{
					'player'	: 0,
					'opponent' 	: 0,
					'regular'	: 0
				},
				{
					'player'	: 0,
					'opponent' 	: 0,
					'regular'	: 0
				}
			]
		},
		{
			'name'	: 'Wendy\'s',
			'team'	: 'Team 3',
			scores	: [
				{
					'player'	: 0,
					'opponent' 	: 0,
					'regular'	: 0
				},
				{
					'player'	: 0,
					'opponent' 	: 0,
					'regular'	: 0
				},
				{
					'player'	: 0,
					'opponent' 	: 0,
					'regular'	: 0
				}
			]
		}
	];
})

app.controller('Round1', function ($scope) {
	$scope.round1Players = [
		$scope.players[0],
		$scope.players[1],
		$scope.players[2],
		$scope.players[3],
		$scope.players[4],
		$scope.players[5]
	];
});

app.controller('Round2', function ($scope) {
	$scope.round2Players = [
		$scope.players[2],
		$scope.players[3],
		$scope.players[0],
		$scope.players[1],
		$scope.players[4],
		$scope.players[5]
	];
});

app.controller('Round3', function ($scope) {
	$scope.round3Players = [
		$scope.players[2],
		$scope.players[3],
		$scope.players[4],
		$scope.players[5],
		$scope.players[0],
		$scope.players[1]
	];
});
