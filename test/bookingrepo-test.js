import { expect } from 'chai';

import BookingRepo from '../src/BookingRepo';
import Booking from '../src/Booking';

describe('BookingRepo', function() {
  let bookingRepo,
      booking1,
      booking2,
      bookings;

  beforeEach(function() {
    booking1 = new Booking("5fwrgu4i7k55hl7q8", 43, "2020/01/24", 24);
    booking2 = new Booking("5fwrgu4i7k55hl6t5", 13, "2020/02/10", 10);
    bookings = [booking1, booking2];
    bookingRepo = new BookingRepo(bookings);
  });

  it('should be a function', () => {
    const bookingRepoOne = new BookingRepo();
    expect(BookingRepo).to.be.a('function');
  });

  it('should be an instance of a Booking class', () => {
    expect(bookingRepo).to.be.a.instanceOf(BookingRepo);
  });

  it('should have no bookings if no data provided', function() {
    const bookingRepoOne = new BookingRepo();
    expect(bookingRepoOne.bookingRepo).to.deep.equal([]);
  });

  it('should have data as an instance of an Array', function() {
    expect(bookingRepo.bookingRepo).to.be.a.instanceOf(Array);
  });

  it('should have instances of Booking in data', () => {
    let result = bookingRepo.bookingRepo.every(booking => {
      return (booking instanceof Booking);
    });

    expect(result).to.equal(true);
  });

  it('should get an id of the booking', () => {
    expect(bookingRepo.getBookingsId("5fwrgu4i7k55hl7q8")).to.deep.equal({id: "5fwrgu4i7k55hl7q8"});
  });

  it('should filter through bookings by date and userID', () => {
    expect(bookingRepo.getBookingsByUserIdAndDate(13, "2020/02/10")).to.deep.equal([booking2]);
  });

  it('should calculate the total of service charges for chosen range of rooms', function() {
    const roomCharges1 = [
      {"item": "BLT Sandwich", "price": 15.5},
      {"item": "Hummus and vegetable platter", "price": 8.1}
    ]
    const roomCharges2 = [
      {"item": "BLT Sandwich", "price": 15.5}
    ]

    booking1.roomServiceCharges = roomCharges1;
    booking2.roomServiceCharges = roomCharges2;

    expect(bookingRepo.getTotalOfAllRoomCharges(bookingRepo.bookingRepo)).to.equal('39.10');
  });
});
