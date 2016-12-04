(function () {
  'use strict';

  angular.module('Menu')
  .component('menuItems',{
    templateUrl: 'menu/templates/items.template.html',
    bindings: {
      items: '<'
    }
  });

})();