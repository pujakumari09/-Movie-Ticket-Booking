'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var PaymentComponent = function () {
    function PaymentComponent($http, $scope, socket) {
      _classCallCheck(this, PaymentComponent);

      this.$http = $http;
      this.socket = socket;
      this.userDetails = [];
      // this.md = [];
      // this.cd = [];
      // this.sd = [];
      // this.ld = [];
      // this.td = [];
      // this.st = [];
      // this.Seats = [];
      // this.Nseat = [];
      // this.Amount = [];

      $scope.submitForm = function (isValid) {
        if (isValid) {
          alert('Detail is Valid');
        }
      };
      $scope.phoneNumbr = /^\+?\d{2}[- ]?\d{3}[- ]?\d{5}$/;

      $scope.$on('$destroy', function () {
        socket.unsyncUpdates('paymentendpoint');
      });
    }

    _createClass(PaymentComponent, [{
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
        this.$http.get('/api/paymentendpoints').then(function (response) {
          _this.userDetails = response.data;
          _this.socket.syncUpdates('paymentendpoint', _this.userDetail);
        });
        // this.md = sessionStorage.getItem('mdetail');
        // alert(md);
        // this.cd = sessionStorage.getItem('cdetail');
        // alert(cd);
        // this.sd = sessionStorage.getItem('sddetail');
        // alert(sd);
        // this.ld = sessionStorage.getItem('ldetail');
        // alert(ld);
        // this.td = sessionStorage.getItem('tdetail');
        // alert(td);
        // this.st = sessionStorage.getItem('stdetail');
        // alert(st);
        // this.Seats = sessionStorage.getItem('seatdetail');
        // alert(Seats);
        // this.Nseat = sessionStorage.getItem('nseatdetail');
        // alert(Nseat);
        // this.Amount = sessionStorage.getItem('amountdetail');
        // alert(Amount);
      }

      // allDetails(){
      //   this.$http.post('/api/paymentendpoints', {
      //     MovieName: this.k,
      //     Date: this.ShowDate,
      //     Time: this.ShowTime,
      //     Theater: this.Thname.
      //     Loc: this.Lname,
      //     Seats: this.Seats,
      //     Nseat: this.Nseat,
      //     Amount: this.Amount
      //
      //   });
      // }

    }]);

    return PaymentComponent;
  }();

  angular.module('yeomanOnlineTicketBookingApp').component('payment', {
    templateUrl: 'app/payment/payment.html',
    controller: PaymentComponent,
    controllerAs: 'paymentCtrl'
  });
})();
//# sourceMappingURL=payment.controller.js.map
