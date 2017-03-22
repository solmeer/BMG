var app = angular.module("app",[]);

app.controller("getNews", function ($scope, $http) {
    $http.get("http://bmgt.herokuapp.com/api/articles/")
        .then(function(response){
            $scope.newsArray = response.data;


        });
});