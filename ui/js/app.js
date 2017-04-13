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

    for (var i = 1; i < 5; i++) {
        $scope.addSlide();
    }


});

app.filter('startFrom', function(){
    return function(input, start){
        start = +start;
        return input.slice(start);
    }
});

app.controller("getNews", function ($scope, $http) {
    $http.get("http://bmgt.herokuapp.com/api/articles/")
        .then(function(response){
            $scope.newsArray = response.data;

        });
});

app.controller("getNewsByID", function ($scope, $http, $routeParams) {
    $http.get("api/articles/"+$routeParams.id)
        .then(function(response){
            $scope.article = response.data;
        });
});

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

var origin = document.location.origin;
var folder = document.location.pathname.split('/')[1];

var path = origin + "/" + folder + "views/";

app.config(['$routeProvider','$locationProvider', function ($routeProvider,$locationProvider) {

    $locationProvider.html5Mode(true);

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
    ).when('/news/:id', {
            templateUrl: path + 'show.html',
            controller: 'getNewsByID'
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