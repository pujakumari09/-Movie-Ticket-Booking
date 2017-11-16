'use strict';

angular.module('yeomanOnlineTicketBookingApp').config(function ($routeProvider) {
  $routeProvider.when('/searchMovies', {
    template: '<search-movies></search-movies>',
    authenticate: 'admin'
  });
});
//# sourceMappingURL=searchMovies.js.map
