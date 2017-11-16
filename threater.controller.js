'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var ThreaterComponent = function () {
    function ThreaterComponent($http, $scope, socket) {
      _classCallCheck(this, ThreaterComponent);

      this.$http = $http;
      this.socket = socket;
      this.ThreaterDetail = [];

      $scope.$on('$destroy', function () {
        socket.unsyncUpdates('threaterendpoint');
      });
    }

    _createClass(ThreaterComponent, [{
      key: '$onInit',
      value: function $onInit() {
        var _this = this;

        this.$http.get('/api/threaterendpoints').then(function (response) {
          _this.ThreaterDetail = response.data;
          _this.socket.syncUpdates('threaterendpoint', _this.ThreaterDetail);
        });
      }
    }, {
      key: 'addThreater',
      value: function addThreater() {
        this.$http.post('/api/threaterendpoints', {
          ThreaterName: this.ThreaterName,
          LocationName: this.LocationName,
          City: this.City
        });
        this.ThreaterName = '';
        this.LocationName = '';
        this.City = '';
        alert('Details Saved Successfully');
      }
    }, {
      key: 'deleteThreater',
      value: function deleteThreater(threaterendpoint) {
        alert('Deleted the record');
        this.$http.delete('/api/threaterendpoints/' + threaterendpoint._id);
      }
    }]);

    return ThreaterComponent;
  }();

  angular.module('yeomanOnlineTicketBookingApp').component('threater', {
    templateUrl: 'app/threater/threater.html',
    controller: ThreaterComponent,
    controllerAs: 'threaterCtrl'
  });
})();
//# sourceMappingURL=threater.controller.js.map
