class Customer {
  constructor(id, name) {
    this.id = id,
    this.name = name
  }

  getFirstName() {
    let firstName = this.name.split(' ');
    return firstName[0];
  }
}

export default Customer;
