app.controller("getNewsByID", function ($scope, $http, $routeParams) {
    $http.get("api/articles/"+$routeParams.id)
        .then(function(response){
            $scope.article = response.data;
        });
});
