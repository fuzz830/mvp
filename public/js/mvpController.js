    angular.module('mvp-app', [])
        .controller('mvpController', function($scope, $http) {
            $http.get('/notes').
            success(function(data) {
                $scope.notes = data;
                console.log(data);
            });
        });

