(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['items'];
function ItemsController(items) {
  var list = this;
  list.items = items;
  console.log("Item Controller Data received: ",items);
}

})();
