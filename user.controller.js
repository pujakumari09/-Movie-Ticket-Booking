'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var UserComponent = function () {
    function UserComponent($http, $scope, socket) {
      _classCallCheck(this, UserComponent);

      this.$http = $http;
      this.socket = socket;
      this.mappingDetail = [];
      this.bookingDetail = [];
      this.k = [];

      $scope.$on('$destroy', function () {
        socket.unsyncUpdates('userendpoint');
      });

      $scope.submitForm = function (isValid) {
        if (isValid) {
          alert('Detail is Valid');
        }
      };
    }

    _createClass(UserComponent, [{
      key: '$onInit',
      value: function $onInit() {
        var _this = this;

        this.$http.get('/api/mappingendpoints').then(function (response) {
          _this.mappingDetail = response.data;
          console.log(_this.mappingDetail);
          _this.socket.syncUpdates('mappingendpoint', _this.mappingDetail);
        });
        this.$http.get('/api/userendpoints').then(function (response) {
          _this.bookingDetail = response.data;
          _this.socket.syncUpdates('userendpoint', _this.bookingDetail);
        });
        this.k = sessionStorage.getItem('MovieData');
        // alert(this.k);
      }
    }, {
      key: 'setDetails',
      value: function setDetails(mdetails) {
        sessionStorage.setItem('mdetail', mdetails.k);
        alert('mdetail');
        sessionStorage.setItem('cdetail', mdetails.Cname);
        sessionStorage.setItem('sddetail', mdetails.ShowDate);
        sessionStorage.setItem('ldetail', mdetails.Lname);
        sessionStorage.setItem('tdetail', mdetails.Thname);
        sessionStorage.setItem('stdetail', mdetails.ShowTime);
      }
    }, {
      key: 'bookingDetails',
      value: function bookingDetails(sdetails) {
        sessionStorage.setItem('seatdetail', sdetails.Seats);
        sessionStorage.setItem('nseatdetail', sdetails.Nseat);
        sessionStorage.setItem('amountdetail', sdetails.Amount);
      }

      // seatDetails() {
      //   this.$http.post('/api/userendpoints', {
      //     SelectedSeat: this.bookingDetail,
      //     Class: this.bookingDetail,
      //     SeatNo: this.bookingDetail,
      //     Amount: this.bookingDetail
      //   });
      // }

    }]);

    return UserComponent;
  }();

  angular.module('yeomanOnlineTicketBookingApp').component('user', {
    templateUrl: 'app/user/user.html',
    controller: UserComponent,
    controllerAs: 'userCtrl'
  });
})();
//# sourceMappingURL=user.controller.js.map
