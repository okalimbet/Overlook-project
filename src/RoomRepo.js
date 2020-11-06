import Hotel from './Hotel';
import Room from '../src/Room';

class RoomRepo extends Hotel {
  constructor(roomRepo = []) {
    super([], roomRepo, []);
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
