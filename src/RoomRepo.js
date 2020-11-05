import Hotel from './Hotel';
import Room from '../src/Room';

class RoomRepo extends Hotel {
  constructor(roomRepo = [], bookingData = [], customerRepo = []) {
    super(bookingData, roomRepo, customerRepo),
    this.roomRepo = roomRepo
  }

  getRoomByNumber(roomNumber, roomData) {
    return this.getInformationByValue(roomNumber, roomData, 'number');
  }

  filterRoomsByType(roomType, roomData) {
    return this.getInformationByValue(roomType, roomData, 'roomType');
  }

  filterRoomsByBidetAvailability(bidetChoice, roomData) {
    return this.getInformationByValue(bidetChoice, roomData, 'bidet');
  }

  filterRoomsByBedSize(bedSize, roomData) {
    return this.getInformationByValue(bedSize, roomData, 'bedSize');
  }

  filterRoomsByNumBeds(numBeds, roomData) {
    return this.getInformationByValue(numBeds, roomData, 'numBeds');
  }

  filterRoomsByCostPerNightDesc(roomData) {
    return roomData.sort((a,b) => {
      return b.costPerNight- a.costPerNight;
    })
  }

  filterRoomsByCostPerNightAsce(roomData) {
    return roomData.sort((a,b) => {
      return a.costPerNight - b.costPerNight;
    })
  }

  calculateTotalCostOfRooms(roomsData) {
    const totalAmount = roomsData.reduce((total, room) => {
      return total += room.costPerNight;
    }, 0)
    return totalAmount.toFixed(2);
  }
}

export default RoomRepo;
