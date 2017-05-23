(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/templates/menuitem.template.html',
  bindings: {
    items: '<'
  }
});

})();
