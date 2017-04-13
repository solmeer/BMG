app.controller("portfolioCtrl", function ($scope,$http) {
    $http.get("http://bmgt.herokuapp.com/api/tattoo/")
        .then(function(response){
            $scope.newsArray = response.data;
        });

    $scope.ngPortfolio = {
        "background-color" : "black",
        "height":"auto"
    };
});