import { expect } from 'chai';

import Room from '../src/Room';
import RoomRepo from '../src/RoomRepo';

describe('RoomRepo', function() {
  let room1,
      room2,
      room3,
      room4,
      rooms,
      roomRepo;

  beforeEach(function() {
    room1 = new Room(1, "residential suite", false, "queen", 3, 358.4);
    room2 = new Room(2, "suite", true, "twin", 2, 400.34);
    room3 = new Room(3, "single room", false, "twin", 1, 300.2);
    room4 = new Room(4, "suite", true, "queen", 1, 650.90);
    rooms = [room1, room2, room3, room4];
    roomRepo = new RoomRepo(rooms);
  });

  it('should be a function', () => {
    const roomRepoOne = new RoomRepo();
    expect(RoomRepo).to.be.a('function');
  });

  it('should be an instance of a Booking class', () => {
    expect(roomRepo).to.be.a.instanceOf(RoomRepo);
  });

  it('should have no rooms if no data provided', function() {
    const roomRepoOne = new RoomRepo();
    expect(roomRepoOne.roomRepo).to.deep.equal([]);
  });

  it('should have data as an instance of an Array', function() {
    expect(roomRepo.roomRepo).to.be.a.instanceOf(Array);
  });

  it('should have instances of Room in data', () => {
    let result = roomRepo.roomRepo.every(room => {
      return (room instanceof Room);
    });

    expect(result).to.equal(true);
  });

  it('should filter through rooms by room number', () => {
    expect(roomRepo.getRoomByNumber(2, roomRepo.roomRepo)).to.deep.equal([room2]);
  });

  it('should filter through rooms by room type', () => {
    expect(roomRepo.filterRoomsByType('suite', roomRepo.roomRepo)).to.deep.equal([room2, room4]);
  });

  it('should filter through rooms by bidet availability', () => {
    expect(roomRepo.filterRoomsByBidetAvailability(false, roomRepo.roomRepo)).to.deep.equal([room1, room3]);
  });

  it('should filter through rooms by bed size', () => {
    expect(roomRepo.filterRoomsByBedSize('twin', roomRepo.roomRepo)).to.deep.equal([room2, room3]);
  });

  it('should filter through rooms by number of beds', () => {
    expect(roomRepo.filterRoomsByNumBeds(1, roomRepo.roomRepo)).to.deep.equal([room3, room4]);
  });

  it('should filter through rooms by price in desc', () => {
    expect(roomRepo.filterRoomsByCostPerNightDesc(roomRepo.roomRepo)).to.deep.equal([room4, room2, room1, room3]);
  });

  it('should filter through rooms by price in asce', () => {
    expect(roomRepo.filterRoomsByCostPerNightAsce(roomRepo.roomRepo)).to.deep.equal([room3, room1, room2, room4]);
  });

  it('should calculate total per certain range of rooms', () => {
    expect(roomRepo.calculateTotalCostOfRooms(roomRepo.roomRepo)).to.equal("1709.84");
  });
});
