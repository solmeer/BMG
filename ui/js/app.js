var app = angular.module("app",['ngAnimate', 'ngSanitize', 'ui.bootstrap', 'ngRoute']);

app.controller('CarouselDemoCtrl', function ($scope,$http) {
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [];
    var currIndex = 0;






    $scope.addSlide = function() {
        slides.push({
            image: '../img/header' + i + '.jpg',
            id: currIndex++
        });
    };

    for (var i = 1; i < 4; i++) {
        $scope.addSlide();
    }

    $scope.start = slides.length - 1;
    $scope.countOfImg = 6;


});

app.controller("getNews", function ($scope, $http) {
    $http.get("http://bmgt.herokuapp.com/api/articles/")
        .then(function(response){
            $scope.newsArray = response.data;


        });





});

app.controller("portfolioCtrl", function ($scope,$http) {
    $http.get("http://bmgt.herokuapp.com/api/articles/")
        .then(function(response){
            $scope.newsArray = response.data;


        });

    $scope.ngPortfolio = {
        "background-color" : "black",
        "height":"auto"
    };
});

var origin = document.location.origin;
var folder = document.location.pathname.split('/')[1];

var path = origin + "/" + folder + "/ui/" + "views/";

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
            templateUrl: path + 'index.html',
            controller: 'CarouselDemoCtrl'
        }
    ).when('/about',{
            templateUrl: path + 'about.html'
        }
    ).otherwise(
        {
            redirectTo: '/'
        }
    );
}]);

