var mvpController = angular.module('mvpApp', []);

mvpController.controller('MvpController', function($scope, $http) {

    // get the initial data from the server
    $http.get('/notes').
        success(function(data) {
            $scope.notes = data;
        // perhaps
    });

    // update the data in place
    $scope.updateOnBlur = function(note) {
        console.log(note);

        console.log(($scope.notes[0]));
        // // send the updated data to the backend to be saved!
        // // angular - http.put
        // $http.put('/note/'+ id, data );
    };


});
