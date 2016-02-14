var mvpController = angular.module('mvpApp', []);

mvpController.controller('MvpController', function($scope, $http) {

    // get the initial data from the server
    $http.get('/notes').
        success(function(data) {
            $scope.notes = data;
    });

    // update the data in place
    $scope.updateOnBlur = function(id) {
        console.log(id);

        // send the updated data to the backend to be saved!
        // angular - http.put
        // $http.put('/note/:id', data );

    };


});
