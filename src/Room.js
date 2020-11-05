class Room {
  constructor(number = 0, roomType = '', bidet = false, bedSize = 'unknown', numBeds = 1, costPerNight = 1){
    this.number = number,
    this.roomType = roomType,
    this.bidet = bidet,
    this.bedSize = bedSize,
    this.numBeds = numBeds,
    this.costPerNight = costPerNight
  }

  getPricePerMultipleNights(numberOfNights) {
    const totalPerNights = this.costPerNight * numberOfNights;
    return parseFloat(totalPerNights).toFixed(2);
  }

  getMainRoomInformation() {
    return {
      'Room number': this.number,
      'Room type': this.roomType,
      'Price': this.costPerNight
    }
  }
}

export default Room;
