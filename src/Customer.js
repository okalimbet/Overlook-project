import Hotel from './Hotel'

class Customer extends Hotel {
  constructor(id, name) {
    super([], [], [])
    this.id = id,
    this.name = name
  }

  getFirstName() {
    let firstName = this.name.split(' ');
    return firstName[0];
  }
}

export default Customer;
