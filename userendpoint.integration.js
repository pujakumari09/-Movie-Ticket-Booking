'use strict';

var app = require('../..');
import request from 'supertest';

var newUserendpoint;

describe('Userendpoint API:', function() {

  describe('GET /api/userendpoints', function() {
    var userendpoints;

    beforeEach(function(done) {
      request(app)
        .get('/api/userendpoints')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          userendpoints = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(userendpoints).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/userendpoints', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/userendpoints')
        .send({
          name: 'New Userendpoint',
          info: 'This is the brand new userendpoint!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newUserendpoint = res.body;
          done();
        });
    });

    it('should respond with the newly created userendpoint', function() {
      expect(newUserendpoint.name).to.equal('New Userendpoint');
      expect(newUserendpoint.info).to.equal('This is the brand new userendpoint!!!');
    });

  });

  describe('GET /api/userendpoints/:id', function() {
    var userendpoint;

    beforeEach(function(done) {
      request(app)
        .get('/api/userendpoints/' + newUserendpoint._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          userendpoint = res.body;
          done();
        });
    });

    afterEach(function() {
      userendpoint = {};
    });

    it('should respond with the requested userendpoint', function() {
      expect(userendpoint.name).to.equal('New Userendpoint');
      expect(userendpoint.info).to.equal('This is the brand new userendpoint!!!');
    });

  });

  describe('PUT /api/userendpoints/:id', function() {
    var updatedUserendpoint;

    beforeEach(function(done) {
      request(app)
        .put('/api/userendpoints/' + newUserendpoint._id)
        .send({
          name: 'Updated Userendpoint',
          info: 'This is the updated userendpoint!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedUserendpoint = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedUserendpoint = {};
    });

    it('should respond with the updated userendpoint', function() {
      expect(updatedUserendpoint.name).to.equal('Updated Userendpoint');
      expect(updatedUserendpoint.info).to.equal('This is the updated userendpoint!!!');
    });

  });

  describe('DELETE /api/userendpoints/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/userendpoints/' + newUserendpoint._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when userendpoint does not exist', function(done) {
      request(app)
        .delete('/api/userendpoints/' + newUserendpoint._id)
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
