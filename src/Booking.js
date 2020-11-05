class Booking {
  constructor(id = 'unknown', userId, bookingDate, roomNumber, roomServiceCharges = []) {
    this.id = id,
    this.userId = userId,
    this.bookingDate = bookingDate,
    this.roomNumber = roomNumber,
    this.roomServiceCharges = roomServiceCharges
  }

  getTotalServiceCharges() {
    const totalAmount = this.roomServiceCharges.reduce((total, charge) => {
      return total += charge.price;
    }, 0)
    return totalAmount.toFixed(2);
  }
}

export default Booking;
