import { expect } from 'chai';

import Booking from '../src/Booking'
import BookingRepo from '../src/BookingRepo'
import Room from '../src/Room'
import RoomRepo from '../src/RoomRepo'
import Customer from '../src/Customer'
import CustomerRepo from '../src/CustomerRepo'
import Manager from '../src/Manager';
import Hotel from '../src/Hotel';

describe('Hotel', function() {
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
      manager,
      hotel;

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

    manager = new Manager(bookingRepo, roomRepo, customerRepo)
    hotel = new Hotel(bookingRepo.bookingRepo, roomRepo.roomRepo, customerRepo.customerRepo)
  });

  it('should be a function', () => {
    expect(Hotel).to.be.a('function');
  });

  it('should be an instance of a Manager class', () => {
    expect(hotel).to.be.a.instanceOf(Hotel);
  });

  it('should filter data by certain value', () => {
    expect(hotel.getInformationByValue("2020/02/10", hotel.bookingRepo, 'bookingDate')).to.deep.equal([booking2])
  });

  it('should get available Rooms on the certain date', () => {
    expect(hotel.getAvailableRooms(hotel.bookingRepo, hotel.roomRepo, "2020/01/24")).to.deep.equal([room1, room2, room4])
  });

  it('should determine upcoming bookings ', () => {
    expect(hotel.determineUpcomingBookings(booking1)).to.equal('Completed')
  });

  it('should get available Rooms on the certain date', () => {
    expect(hotel.getTodayDate()).to.equal('2020/11/08')
  });

  it('should get available Rooms on the certain date', () => {
    expect(hotel.filterBookingByDate(bookings)).to.deep.equal([booking2, booking1])
  });

  it('should get the total cost of bookings by user id', () => {
    const userRooms = hotel.getUserCardsRoomCards(bookings, roomRepo);

    expect(hotel.getTotalAmountSpentByUser(userRooms).toFixed(2)).to.equal('658.60')
  });

  it('should get full booking and room information for a user', () => {
    expect(hotel.getUserCardsRoomCards(bookings, roomRepo)).to.deep.equal([{
      bookingId: "5fwrgu4i7k55hl7q8",
      roomType: "single room",
      bookingDate: "2020/01/24",
      price: 300.2,
      status: 'Completed'
    },
      {
      bookingId: "5fwrgu4i7k55hl6t5",
      roomType: "residential suite",
      bookingDate: "2020/02/10",
      price: 358.4,
      status: 'Completed'
    }])
  });
});
