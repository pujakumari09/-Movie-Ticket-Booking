'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var MappingComponent = function () {
    function MappingComponent($http, $scope, socket) {
      _classCallCheck(this, MappingComponent);

      this.$http = $http;
      this.socket = socket;
      this.ThreaterDetail = [];
      this.MovieData = [];
      this.mappingDetail = [];

      $scope.$on('$destroy', function () {
        socket.unsyncUpdates('mappingendpoint');
      });
    }

    _createClass(MappingComponent, [{
      key: '$onInit',
      value: function $onInit() {
        var _this = this;

        this.$http.get('/api/searchMoviesendpoints').then(function (response) {
          _this.MovieData = response.data;
          console.log(_this.MovieData);
          _this.socket.syncUpdates('searchMoviesendpoints', _this.MovieData);
        });
        this.$http.get('/api/threaterendpoints').then(function (response) {
          _this.ThreaterDetail = response.data;
          _this.socket.syncUpdates('threaterendpoint', _this.ThreaterDetail);
        });
        this.$http.get('/api/mappingendpoints').then(function (response) {
          _this.mappingDetail = response.data;
          _this.socket.syncUpdates('mappingendpoint', _this.mappingDetail);
        });
      }
    }, {
      key: 'setData',
      value: function setData(movies) {
        sessionStorage.setItem('MovieData', movies.title);
      }
    }, {
      key: 'addMapping',
      value: function addMapping() {
        this.$http.post('/api/mappingendpoints', {
          Poster: this.Poster,
          Mvname: this.Mvname,
          Thname: this.Thname,
          Lname: this.Lname,
          Cname: this.Cname,
          ShowTime: this.ShowTime,
          ShowDate: this.ShowDate
        });
        alert('Details Saved Successfully');
      }
    }, {
      key: 'deleteMapping',
      value: function deleteMapping(mappingendpoint) {
        alert('Record Deleted');
        this.$http.delete('/api/mappingendpoints/' + mappingendpoint._id);
      }
    }]);

    return MappingComponent;
  }();

  angular.module('yeomanOnlineTicketBookingApp').component('mapping', {
    templateUrl: 'app/mapping/mapping.html',
    controller: MappingComponent,
    controllerAs: 'mappingCtrl'
  });
})();
//# sourceMappingURL=mapping.controller.js.map
