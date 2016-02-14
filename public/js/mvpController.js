// var mvpController = angular.module('mvpApp', []);

// mvpController.controller('MvpController', [ '$scope', function($scope, $http) {

//     $http.get('/notes').
//         success(function(data) {
//             $scope.notes = data;
//                 console.log(data);
//             });


//     // $scope.update = function() {
//     // };

// }]);


var mvpController = angular.module('mvpApp', []);

mvpController.controller('MvpController', function($scope, $http) {
    $http.get('/notes').
        success(function(data) {
            $scope.notes = data;
    });

    $scope.updateOnBlur = function() {
        console.log("this is a test");
        console.log($scope.notes);
    };


});
