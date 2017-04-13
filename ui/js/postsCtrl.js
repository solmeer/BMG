app.controller("postsCtrl", function ($scope, $http) {
    $http.get("http://bmgt.herokuapp.com/api/articles/")
        .then(function(response) {
            $scope.newsArray = response.data;

            $scope.currentPage = 0;
            $scope.itemsPerPage = 8;

            $scope.firstPage = function () {
                return $scope.currentPage == 0;
            };
            $scope.lastPage = function () {
                var lastPageNum = Math.ceil($scope.newsArray.length / $scope.itemsPerPage - 1);
                return $scope.currentPage == lastPageNum;
            };
            $scope.numberOfPages = function () {
                return Math.ceil($scope.newsArray.length / $scope.itemsPerPage);
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