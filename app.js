'use strict';

angular.module('yeomanOnlineTicketBookingApp', ['yeomanOnlineTicketBookingApp.auth', 'yeomanOnlineTicketBookingApp.admin', 'yeomanOnlineTicketBookingApp.constants', 'ngCookies', 'ngResource', 'ngSanitize', 'ngRoute', 'btford.socket-io', 'validation.match', 'ui.filters', 'ngSessionStorage']).config(function ($routeProvider, $locationProvider) {
  $routeProvider.otherwise({
    redirectTo: '/'
  });

  $locationProvider.html5Mode(true);
});
//# sourceMappingURL=app.js.map
