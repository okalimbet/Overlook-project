import Hotel from './Hotel.js'

class CustomerRepo extends Hotel {
  constructor(customerRepo = []) {
    super( [], [], customerRepo);
  }
}

export default CustomerRepo;
