'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var userendpointCtrlStub = {
  index: 'userendpointCtrl.index',
  show: 'userendpointCtrl.show',
  create: 'userendpointCtrl.create',
  update: 'userendpointCtrl.update',
  destroy: 'userendpointCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var userendpointIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './userendpoint.controller': userendpointCtrlStub
});

describe('Userendpoint API Router:', function() {

  it('should return an express router instance', function() {
    expect(userendpointIndex).to.equal(routerStub);
  });

  describe('GET /api/userendpoints', function() {

    it('should route to userendpoint.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'userendpointCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/userendpoints/:id', function() {

    it('should route to userendpoint.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'userendpointCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/userendpoints', function() {

    it('should route to userendpoint.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'userendpointCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/userendpoints/:id', function() {

    it('should route to userendpoint.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'userendpointCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/userendpoints/:id', function() {

    it('should route to userendpoint.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'userendpointCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/userendpoints/:id', function() {

    it('should route to userendpoint.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'userendpointCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
