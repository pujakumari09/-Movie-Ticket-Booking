'use strict';

angular.module('yeomanOnlineTicketBookingApp').config(function ($routeProvider) {
  $routeProvider.when('/threater', {
    template: '<threater></threater>',
    authenticate: 'admin'
  });
});
//# sourceMappingURL=threater.js.map
