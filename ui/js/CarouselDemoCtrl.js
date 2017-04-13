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