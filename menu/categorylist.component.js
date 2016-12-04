(function () {
'use strict';

angular.module('Menu')
.component('categoryList', {
  templateUrl: 'menu/templates/categories.template.html',
  bindings: {
    items: '<'
  }
});

})();