var app = angular.module("frontendApp",['ngRoute', 'ngAnimate', 'ngSanitize', 'ui.bootstrap']);

var origin = document.location.origin;
var folder = document.location.pathname.split('/')[1];

var path = origin + "/" + folder + "views/";

app.
config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
            templateUrl: path + 'index.html',
            controller: 'CarouselDemoCtrl'
        }
    ).when('/article',{
            templateUrl: path + 'about.html',
            controller: 'articleController'
        }
    ).otherwise(
        {
            redirectTo: '/'
        }
    );
}]);

app.controller("articleController", function ($scope, $http) {
    $http.get("/api/articles/")
        .then(function(response){
            $scope.newsArray = response.data;


        });
});

app.controller('CarouselDemoCtrl', function ($scope) {
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [];
    var currIndex = 0;

    $scope.addSlide = function() {
        slides.push({
            image: 'img/header' + i + '.jpg',
            id: currIndex++
        });
    };

    for (var i = 1; i < 4; i++) {
        $scope.addSlide();
    }

});