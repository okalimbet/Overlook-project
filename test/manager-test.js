import { expect } from 'chai';

import Booking from '../src/Booking'
import BookingRepo from '../src/BookingRepo'
import Room from '../src/Room'
import RoomRepo from '../src/RoomRepo'
import Customer from '../src/Customer'
import CustomerRepo from '../src/CustomerRepo'
import Manager from '../src/Manager';

describe('Manager', function() {
  let booking1,
      booking2,
      booking3,
      bookings,
      bookingRepo,
      room1,
      room2,
      room3,
      room4,
      room5,
      rooms,
      roomRepo,
      customer1,
      customer2,
      customers,
      customerRepo,
      manager;

  beforeEach(function() {
    customer1 = new Customer(1, 'Lisa Kawalski');
    customer2 = new Customer(2, 'Mike Kawalski');
    customers = [customer1, customer2];
    customerRepo = new CustomerRepo(customers);

    room1 = new Room(1, "residential suite", false, "queen", 3, 358.4);
    room2 = new Room(2, "suite", true, "twin", 2, 400.34);
    room3 = new Room(3, "single room", false, "twin", 1, 300.2);
    room4 = new Room(4, "suite", true, "queen", 1, 650.90);
    rooms = [room1, room2, room3, room4];
    roomRepo = new RoomRepo(rooms);

    booking1 = new Booking("5fwrgu4i7k55hl7q8", 43, "2020/01/24", 3);
    booking2 = new Booking("5fwrgu4i7k55hl6t5", 13, "2020/02/10", 1);
    bookings = [booking1, booking2];
    bookingRepo = new BookingRepo(bookings);

    manager = new Manager(roomRepo.roomRepo, bookingRepo.bookingRepo, customerRepo.customerRepo)
  });

  it('should be a function', () => {
    expect(Manager).to.be.a('function');
  });

  it('should be an instance of a Manager class', () => {
    expect(manager).to.be.a.instanceOf(Manager);
  });

  it('should filter data by certain value', () => {
    expect(manager.getAvailabilityOfRoomsPercentage(manager.bookingRepo, manager.roomRepo, "2020/01/24")).to.equal(75)
  });

  it('should get available Rooms on the certain date', () => {
    expect(manager.getRevenueOnDate(manager.bookingRepo, manager.roomRepo, "2020/01/24")).to.equal(300.2)
  });

});
