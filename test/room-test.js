import { expect } from 'chai';

import Room from '../src/Room';

describe('Room', function() {
  let room;

  beforeEach(function() {
    room = new Room(1, "residential suite", true, "queen", 1, 358.4);

  });

  it('should be a function', () => {
    expect(Room).to.be.a('function');
  });

  it('should be an instance of a Room class', () => {
    expect(room).to.be.an.instanceOf(Room);
  });

  it('should have an id', () => {
    expect(room.number).to.be.a('number');
    expect(room.number).to.equal(1);
  });

  it('should have a roomTyper', function() {
    expect(room.roomType).to.be.a('string');
    expect(room.roomType).to.equal('residential suite');
  });

  it('should have a bidet property', function() {
    expect(room.bidet).to.be.a('boolean');
  });

  it('should have a bed size', function() {
    expect(room.bedSize).to.be.a('string');
    expect(room.bedSize).to.equal('queen');
  });

  it('should have number of beds', function() {
    expect(room.numBeds).to.be.a('number');
    expect(room.numBeds).to.equal(1);
  });

  it('should have a cost per night', function() {
    expect(room.costPerNight).to.be.a('number');
    expect(room.costPerNight).to.equal(358.4);
  });

  it('should calculate the total cost of several nights', function() {
    const numOfNights = 4;

    expect(room.getPricePerMultipleNights(numOfNights)).to.equal('1433.60');
  });

  it('should return main room information ', function() {
    expect(room.getMainRoomInformation()).to.deep.equal({
      'Room number': 1,
      'Room type': 'residential suite',
      'Price': 358.4
    });
  });
});
