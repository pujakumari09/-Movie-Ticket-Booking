'use strict';

angular.module('yeomanOnlineTicketBookingApp.auth', ['yeomanOnlineTicketBookingApp.constants', 'yeomanOnlineTicketBookingApp.util', 'ngCookies', 'ngRoute']).config(function ($httpProvider) {
  $httpProvider.interceptors.push('authInterceptor');
});
//# sourceMappingURL=auth.module.js.map
