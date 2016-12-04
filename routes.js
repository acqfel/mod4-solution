(function () {
    'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: 'menuapp/templates/home.template.html'
    })

    .state('categories',{
      url: '/categories',
      templateUrl: 'menu/templates/categories.template.html',
      controller: 'CategoryListController as ctrl',
      resolve: {
        items: ['MenuDataService',
          function (MenuDataService) {
            return  MenuDataService.getAllCategories();
          }]
        }
    })

    .state('items',{
      url: '/items/{category}',
      templateUrl: 'menu/templates/items.template.html',
      controller: 'ItemController as ctrl',
      resolve: {
        items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
          var result = MenuDataService.getItemsForCategory($stateParams.category);
          return result;
        }]
      }
    })
}

})();