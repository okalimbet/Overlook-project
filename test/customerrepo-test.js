import { expect } from 'chai';

import CustomerRepo from '../src/CustomerRepo';
import Customer from '../src/Customer';

describe('CustomerRepo', function() {
  let customer1,
    customer2,
    customers,
    customerRepo;

  beforeEach(function() {
    customer1 = new Customer(1, 'Lisa Kawalski');
    customer2 = new Customer(2, 'Mike Kawalski');
    customers = [customer1, customer2];
    customerRepo = new CustomerRepo(customers);
  });

  it('should be a function', () => {
    expect(CustomerRepo).to.be.a('function');
  });

  it('should be an instance of a CustomerRepo class', () => {
    expect(customerRepo).to.be.a.instanceOf(CustomerRepo);
  });

  it('should have data as an instance of an Array', function() {
    expect(customerRepo.customerRepo).to.be.a.instanceOf(Array);
  });

  it('should have instances of Customer in data', () => {
    let result = customerRepo.customerRepo.every(user => {
      return (user instanceof Customer);
    });

    expect(result).to.equal(true);
  });
});
