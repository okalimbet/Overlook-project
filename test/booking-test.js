import { expect } from 'chai';

import Booking from '../src/Booking';

describe('Booking', function() {
  let booking;

  beforeEach(function() {
    booking = new Booking("5fwrgu4i7k55hl7q8", 43, "2020/01/24", 24);
  });

  it('should be a function', () => {
    const bookingOne = new Booking();
    expect(Booking).to.be.a('function');
  });

  it('should be an instance of a Booking class', () => {
    expect(booking).to.be.a.instanceOf(Booking);
  });

  it('should have an id', function() {
    expect(booking.id).to.be.a('string');
  });

  it('should have an id of a specific length', function() {
    expect(booking.id.length).to.equal(17);
  });

  it('should have a user ID', function() {
    expect(booking.userId).to.equal(43);
    expect(booking.userId).to.be.a('number');
  });

  it('should have a date', function() {
    const dateOfBooking = new Date(booking.bookingDate);

    expect(dateOfBooking.toString()).to.equal('Fri Jan 24 2020 00:00:00 GMT-0700 (Mountain Standard Time)');
  });

  it('should have a room number', function() {
    expect(booking.roomNumber).to.equal(24);
    expect(booking.roomNumber).to.be.a('number');
  });

  it('should have no service charges as a default', function() {
    expect(booking.roomServiceCharges).to.deep.equal([]);
  });

  it('should calculate the total of service charges', function() {
    const roomCharges = [
      {"item": "BLT Sandwich", "price": 15.5},
      {"item": "Hummus and vegetable platter", "price": 8.1}
    ]

      booking.roomServiceCharges = roomCharges;

    expect(booking.getTotalServiceCharges()).to.equal('23.60');
  });
});
