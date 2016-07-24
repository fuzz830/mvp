var mvpController = angular.module('mvpApp', []);

mvpController.controller('MvpController', function($scope, $http) {
    // get the initial data from the server
    $http.get('/notes').success(function(data) {
        $scope.notes = data;
    });

  // update the data in place
    $scope.updateOnBlur = function(index) {
        console.log(index);

        // ok, we've got the current id from the function params
        // can we look up the object by id to get the current stuff?

        // are we getting this from the scope?
        // do we want the array index instead of the id?

        console.log(($scope.notes[index]));
        console.log(($scope.notes[index]._id));

        // // send the updated data to the backend to be saved!
        // // angular - http.put
        // $http.put('/note/'+ id, data );

        // do i need to break apart the $scope.notes object in order to
        // format it and send it back, or can i send it back whole?
        // i think i need to break it apart.

        $http.put('/note/' + $scope.notes[index]._id, $scope.notes[index]);
    };
});
