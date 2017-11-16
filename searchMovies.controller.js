'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var SearchMoviesComponent = function () {
    function SearchMoviesComponent($http, $scope, socket) {
      _classCallCheck(this, SearchMoviesComponent);

      this.$http = $http;
      this.socket = socket;
      this.MovieData;
      this.Movies = [];

      $scope.$on('$destroy', function () {
        socket.unsyncUpdates('searchMoviesendpoints');
      });
    }

    _createClass(SearchMoviesComponent, [{
      key: '$onInit',
      value: function $onInit() {
        var _this = this;

        this.$http.get('/api/searchMoviesendpoints').then(function (response) {
          _this.Movies = response.data;
          _this.socket.syncUpdates('searchMoviesendpoints', _this.Movies);
        });
      }
    }, {
      key: 'FindMovie',
      value: function FindMovie() {
        var _this2 = this;

        this.$http.get('https://api.themoviedb.org/3/search/movie?api_key=7db1e9349d07052bfc8c37d7f6bcc8e9&query=' + this.MovieName + '&year=' + this.Year).then(function (response) {
          console.log(response.data.results[0].id);
          var MovieID = response.data.results[0].id;
          _this2.$http.get('https://api.themoviedb.org/3/movie/' + MovieID + '?api_key=7db1e9349d07052bfc8c37d7f6bcc8e9').then(function (movieres) {
            _this2.MovieData = movieres.data;
            console.log(_this2.MovieData);
          });
        });
      }
    }, {
      key: 'AddMovie',
      value: function AddMovie() {
        this.$http.post('api/searchMoviesendpoints', {
          poster_path: this.MovieData.poster_path,
          title: this.MovieData.title,
          release_date: this.MovieData.release_date,
          genres: this.MovieData.genre_ids,
          runtime: this.MovieData.runtime
        });
        this.MovieName = '';
        this.Year = '';
        alert('Record Added Successfully');
      }
    }, {
      key: 'DeleteMovie',
      value: function DeleteMovie(searchMovies) {
        alert('Record Deleted');
        this.$http.delete('/api/searchMoviesendpoints/' + searchMovies._id);
      }
    }]);

    return SearchMoviesComponent;
  }();

  angular.module('yeomanOnlineTicketBookingApp').component('searchMovies', {
    templateUrl: 'app/searchMovies/searchMovies.html',
    controller: SearchMoviesComponent,
    controllerAs: 'searchMoviesCtrl'
  });
})();
//# sourceMappingURL=searchMovies.controller.js.map
