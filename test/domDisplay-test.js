const chai = require('chai');
const spies = require('chai-spies');

chai.use(spies);

const expect = chai.expect;
const domDisplay = require('../src/domDisplay');


describe('domDisplay', function() {
  let errorMessage,
    elementId,
    action;

  before(() => {
    global.domDisplay = {};
    chai.spy.on(domDisplay, [
      'displayManagerView',
      'displayLoginView',
      'displayCustomerView',
      'showErrorMessage',
      'hideLoginError',
    ], () => {});
  });

  after(function() {
    chai.spy.restore(domDisplay);
  });

  beforeEach(function() {
    errorMessage = '';
    elementId = '';
    action = () => {};
  });

  it('should be able to display manager view', function() {
    domDisplay.displayManagerView();

    expect(domDisplay.displayManagerView).to.have.been.called(1);
    expect(domDisplay.displayManagerView).to.have.been.called.with();
  });

  it('should be able to display login view', function() {
    domDisplay.displayLoginView();

    expect(domDisplay.displayLoginView).to.have.been.called(1);
    expect(domDisplay.displayLoginView).to.have.been.called.with();
  });

  it('should be able to display customer view', function() {
    domDisplay.displayCustomerView();

    expect(domDisplay.displayCustomerView).to.have.been.called(1);
    expect(domDisplay.displayCustomerView).to.have.been.called.with();
  });

  it('should be able to display error messages', function() {
    domDisplay.showErrorMessage(errorMessage, elementId, action);

    expect(domDisplay.showErrorMessage).to.have.been.called(1);
    expect(domDisplay.showErrorMessage).to.have.been.called.with(errorMessage, elementId, action);
  });

  it('should be able to hide error message', function() {
    domDisplay.hideLoginError();

    expect(domDisplay.hideLoginError).to.have.been.called(1);
    expect(domDisplay.hideLoginError).to.have.been.called.with();
  });
});
