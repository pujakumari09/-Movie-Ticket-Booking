'use strict';

var app = require('../..');
import request from 'supertest';

var newSearchMoviesendpoint;

describe('SearchMoviesendpoint API:', function() {

  describe('GET /api/searchMoviesendpoints', function() {
    var searchMoviesendpoints;

    beforeEach(function(done) {
      request(app)
        .get('/api/searchMoviesendpoints')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          searchMoviesendpoints = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(searchMoviesendpoints).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/searchMoviesendpoints', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/searchMoviesendpoints')
        .send({
          name: 'New SearchMoviesendpoint',
          info: 'This is the brand new searchMoviesendpoint!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newSearchMoviesendpoint = res.body;
          done();
        });
    });

    it('should respond with the newly created searchMoviesendpoint', function() {
      expect(newSearchMoviesendpoint.name).to.equal('New SearchMoviesendpoint');
      expect(newSearchMoviesendpoint.info).to.equal('This is the brand new searchMoviesendpoint!!!');
    });

  });

  describe('GET /api/searchMoviesendpoints/:id', function() {
    var searchMoviesendpoint;

    beforeEach(function(done) {
      request(app)
        .get('/api/searchMoviesendpoints/' + newSearchMoviesendpoint._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          searchMoviesendpoint = res.body;
          done();
        });
    });

    afterEach(function() {
      searchMoviesendpoint = {};
    });

    it('should respond with the requested searchMoviesendpoint', function() {
      expect(searchMoviesendpoint.name).to.equal('New SearchMoviesendpoint');
      expect(searchMoviesendpoint.info).to.equal('This is the brand new searchMoviesendpoint!!!');
    });

  });

  describe('PUT /api/searchMoviesendpoints/:id', function() {
    var updatedSearchMoviesendpoint;

    beforeEach(function(done) {
      request(app)
        .put('/api/searchMoviesendpoints/' + newSearchMoviesendpoint._id)
        .send({
          name: 'Updated SearchMoviesendpoint',
          info: 'This is the updated searchMoviesendpoint!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedSearchMoviesendpoint = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedSearchMoviesendpoint = {};
    });

    it('should respond with the updated searchMoviesendpoint', function() {
      expect(updatedSearchMoviesendpoint.name).to.equal('Updated SearchMoviesendpoint');
      expect(updatedSearchMoviesendpoint.info).to.equal('This is the updated searchMoviesendpoint!!!');
    });

  });

  describe('DELETE /api/searchMoviesendpoints/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/searchMoviesendpoints/' + newSearchMoviesendpoint._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when searchMoviesendpoint does not exist', function(done) {
      request(app)
        .delete('/api/searchMoviesendpoints/' + newSearchMoviesendpoint._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
