'use strict';

var app = angular.module('haoshiyou' , [
    'haoshiyou.controllers',
    'haoshiyou.filters',
    'haoshiyou.directives',
    'haoshiyou.services',
]);

app.config(["$routeProvider", function ($routeProvider) {
        $routeProvider
            .when("/post/:id", {controller: 'PostItemCtrl', templateUrl: 'partials/post_item.html'} )
            .when("/list", { controller: 'PostListCtrl', templateUrl: 'partials/post_list.html' })
    }]);


