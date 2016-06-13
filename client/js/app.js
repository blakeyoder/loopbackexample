var app = angular.module('todoApp', ['lbServices']);

app.controller('todoController', function($scope, $http, Todos) {

 	$scope.todos = Todos.find();
 	$scope.todos;
 	$scope.loading=false;

  	$scope.add = function(){
  		$scope.loading=true;

  		Todo.create({title: $scope.todos.name,isDone:false }).$promise
 			 .then(function(todos) {
 			 		$scope.todos.push(todos);
 			 		$scope.todos.title='';
 			 		$scope.loading=false;
 			  });;
  	};

  	$scope.delete = function($index){

  		$scope.loading=true;
  		var todo = $scope.todos[$index];

  		Todo.deleteById({ id: todo.id}).$promise
  		    .then(function() {
				$scope.todos.splice($index,1);
				$scope.loading=false;
		     });
  	};

  	$scope.update = function(todo){
  		todo.$save();
  	};

});
