'use strict';

var app = require('../..');
import request from 'supertest';

var newThreaterendpoint;

describe('Threaterendpoint API:', function() {

  describe('GET /api/threaterendpoints', function() {
    var threaterendpoints;

    beforeEach(function(done) {
      request(app)
        .get('/api/threaterendpoints')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          threaterendpoints = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(threaterendpoints).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/threaterendpoints', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/threaterendpoints')
        .send({
          name: 'New Threaterendpoint',
          info: 'This is the brand new threaterendpoint!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newThreaterendpoint = res.body;
          done();
        });
    });

    it('should respond with the newly created threaterendpoint', function() {
      expect(newThreaterendpoint.name).to.equal('New Threaterendpoint');
      expect(newThreaterendpoint.info).to.equal('This is the brand new threaterendpoint!!!');
    });

  });

  describe('GET /api/threaterendpoints/:id', function() {
    var threaterendpoint;

    beforeEach(function(done) {
      request(app)
        .get('/api/threaterendpoints/' + newThreaterendpoint._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          threaterendpoint = res.body;
          done();
        });
    });

    afterEach(function() {
      threaterendpoint = {};
    });

    it('should respond with the requested threaterendpoint', function() {
      expect(threaterendpoint.name).to.equal('New Threaterendpoint');
      expect(threaterendpoint.info).to.equal('This is the brand new threaterendpoint!!!');
    });

  });

  describe('PUT /api/threaterendpoints/:id', function() {
    var updatedThreaterendpoint;

    beforeEach(function(done) {
      request(app)
        .put('/api/threaterendpoints/' + newThreaterendpoint._id)
        .send({
          name: 'Updated Threaterendpoint',
          info: 'This is the updated threaterendpoint!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedThreaterendpoint = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedThreaterendpoint = {};
    });

    it('should respond with the updated threaterendpoint', function() {
      expect(updatedThreaterendpoint.name).to.equal('Updated Threaterendpoint');
      expect(updatedThreaterendpoint.info).to.equal('This is the updated threaterendpoint!!!');
    });

  });

  describe('DELETE /api/threaterendpoints/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/threaterendpoints/' + newThreaterendpoint._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when threaterendpoint does not exist', function(done) {
      request(app)
        .delete('/api/threaterendpoints/' + newThreaterendpoint._id)
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
