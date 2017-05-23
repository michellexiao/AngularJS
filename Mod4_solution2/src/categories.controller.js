(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['categories'];
function CategoriesController(categories) {
  var list = this;
  list.categories = categories;
  console.log("Categories Controller Data received: ",categories);
}

// CategoriesController.$inject = ['MenuDataService'];
// function CategoriesController(MenuDataService) {
//   var mainList = this;
//   mainList.categories = [];
//
//   mainList.$onInit = function () {
//     MenuDataService.getAllCategories()
//     .then(function (result) {
//       mainList.categories = result;
//     });
//   };
// }

})();
