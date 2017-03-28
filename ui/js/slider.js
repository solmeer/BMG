angular.module('app1', ['ngAnimate', 'ngSanitize', 'ui.bootstrap']);
angular.module('app1').controller('CarouselDemoCtrl', function ($scope) {
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