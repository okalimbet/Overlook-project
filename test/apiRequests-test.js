const chai = require('chai');
const spies = require('chai-spies');

chai.use(spies);

const expect = chai.expect;
const apiRequest = require('../src/apiRequests');

describe('apiRequest', function() {
  let url,
    dataType,
    dataToPost,
    dataToDelete;

  before(function() {
    chai.spy.on(apiRequest, ['getHotelData', 'makeAPostRequest', 'makeADeleteRequest'], () => {});
  });

  beforeEach(function() {
    url = '';
    dataType = '';
    dataToPost = {};
    dataToDelete = {};
  });

  it('should be able to fetch any hotel related data', function() {
    apiRequest.getHotelData(url, dataType);

    expect(apiRequest.getHotelData).to.have.been.called(1);
    expect(apiRequest.getHotelData).to.have.been.called.with(url, dataType);
  });

  it('should be able to make a POST request of the reservation', function() {
    apiRequest.makeAPostRequest(url, dataToPost);

    expect(apiRequest.makeAPostRequest).to.have.been.called(1);
    expect(apiRequest.makeAPostRequest).to.have.been.called.with(url, dataToPost);
  });

  it('should be able to make a DELETE request of the reservation', function() {
    apiRequest.makeADeleteRequest(url, dataToDelete);

    expect(apiRequest.makeADeleteRequest).to.have.been.called(1);
    expect(apiRequest.makeADeleteRequest).to.have.been.called.with(url, dataToDelete);
  });
});
