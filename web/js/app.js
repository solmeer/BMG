var app = angular.module("app",['ngAnimate', 'ngSanitize', 'ui.bootstrap', 'ngRoute']);

var origin = document.location.origin;
var folder = document.location.pathname.split('/')[1];

var path = origin + "/" + folder + "views/";

app.config(['$routeProvider','$locationProvider', function ($routeProvider,$locationProvider) {

    $locationProvider.html5Mode(true).hashPrefix('!');

    $routeProvider.when('/', {
            templateUrl: path + 'index.html',
            controller: 'CarouselDemoCtrl'
        }
    ).when('/about',{
            templateUrl: path + 'about.html'
        }
    ).when('/news',{
            controller: 'getNews',
            templateUrl: path + 'news.html'
        }
    ).when('/portfolio',{
            templateUrl: path + 'portfolio.html'
        }
    ).otherwise(
        {
            redirectTo: '/'
        }
    );
}]);

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
    $http.get("api/articles/")
        .then(function(response){
            $scope.newsArray = response.data;
        });
});

app.controller("portfolioCtrl", function ($scope,$http) {
    $http.get("api/tattoo/")
        .then(function(response){
            $scope.newsArray = response.data;
        });

    $scope.ngPortfolio = {
        "background-color" : "black",
        "height":"auto"
    };
});



