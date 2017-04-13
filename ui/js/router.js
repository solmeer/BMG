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