var app = angular.module("page",[]);

app.filter('startFrom', function(){
    return function(input, start){
        start = +start;
        return input.slice(start);
    }
});

app.controller("postsCtrl", function ($scope, $http) {
    $http.get("http://bmgt.herokuapp.com/api/articles/")
        .then(function(response) {
            $scope.newsArray = response.data;

            $scope.currentPage = 0;
            $scope.itemsPerPage = 3;
            $scope.items = [];
            for (var i = 0; i < 25; i++) {
                $scope.items.push('Product ' + i);
            }
            $scope.firstPage = function () {
                return $scope.currentPage == 0;
            };
            $scope.lastPage = function () {
                var lastPageNum = Math.ceil($scope.items.length / $scope.itemsPerPage - 1);
                return $scope.currentPage == lastPageNum;
            };
            $scope.numberOfPages = function () {
                return Math.ceil($scope.items.length / $scope.itemsPerPage);
            };
            $scope.startingItem = function () {
                return $scope.currentPage * $scope.itemsPerPage;
            };
            $scope.pageBack = function () {
                $scope.currentPage = $scope.currentPage - 1;
            };
            $scope.pageForward = function () {
                $scope.currentPage = $scope.currentPage + 1;
            }
        })
});