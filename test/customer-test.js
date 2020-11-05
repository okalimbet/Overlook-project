import { expect } from 'chai';

import Customer from '../src/Customer';

describe('Customer', function() {
  let customer;

  beforeEach(function() {
    customer = new Customer(1, 'Lisa Kawalski')
  });

  it('should be a function', () => {
    expect(Customer).to.be.a('function');
  });

  it('should be an instance of a Customer class', () => {
    expect(customer).to.be.a.instanceOf(Customer);
  });

  it('should have an id', () => {
    expect(customer.id).to.equal(1);
    expect(customer.id).to.be.a('number');
  });

  it('should have a name', () => {
    expect(customer.name).to.equal('Lisa Kawalski');
    expect(customer.name).to.be.a('string');
  });

  it('should get the First name', () => {
    expect(customer.getFirstName()).to.equal('Lisa');
  });
});
