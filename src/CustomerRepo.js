import Hotel from './Hotel.js'

class CustomerRepo extends Hotel {
  constructor(customerRepo = [], bookingData = [], roomRepo = []) {
    super(bookingData, roomRepo, customerRepo);
    this.customerRepo = customerRepo;
  }
}

export default CustomerRepo;
