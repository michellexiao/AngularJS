(function(){
'use strict'

angular.module('data')
.service('MenuDataService', MenuDataService)
.constant('categoriesApiBasePath', "https://davids-restaurant.herokuapp.com/categories.json")
.constant('menuItemsApiBasePath', "https://davids-restaurant.herokuapp.com/menu_items.json?category=");

MenuDataService.$inject = ['$http','categoriesApiBasePath', 'menuItemsApiBasePath'];
function MenuDataService($http,categoriesApiBasePath,menuItemsApiBasePath) {
  var service = this;

  service.getAllCategories = function() {

    return $http({
      method: "GET",
      url: (categoriesApiBasePath)
    })
    .then(function(response){
      console.log("Response from all categories: ",response.data);
      return response.data;
    })
    .catch(function(error){
      console.log("Something went wrong");
    })

  };

  service.getItemsForCategory = function(categoryShortName) {

    return $http({
    method: "GET",
    url:(menuItemsApiBasePath+categoryShortName)
  })
  .then(function(response){

    return response.data.menu_items;
    console.log("Found menu items: ",response.data.menu_items);

  })
  .catch(function(error){
    console.log("Somthing went wrong");
  });

  };


}

})();
