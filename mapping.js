'use strict';

angular.module('yeomanOnlineTicketBookingApp').config(function ($routeProvider) {
  $routeProvider.when('/mapping', {
    template: '<mapping></mapping>',
    authenticate: 'admin'
  });
});
//# sourceMappingURL=mapping.js.map
