import Hotel from './Hotel'

class Manager extends Hotel {
  constructor(roomRepo = [], bookingRepo = [], customerRepo = []) {
    super(bookingRepo, roomRepo, customerRepo),
    this.roomRepo = roomRepo,
    this.bookingRepo = bookingRepo,
    this.customerRepo = customerRepo
  }

  getAvailabilityOfRoomsPercentage(bookingRepo, roomRepo, date) {
    const bookedRooms = this.getAvailableRooms(bookingRepo, roomRepo, date);
    const percentage = Math.ceil(bookedRooms.length / roomRepo.length * 100);
    return percentage;
  }

  getRevenueOnDate(bookingRepo, roomRepo, date) {
    let bookingByDate = this.getInformationByValue(date, bookingRepo, 'bookingDate');
    return bookingByDate.reduce((revenue,  bookedRoom) => {
      roomRepo.forEach(room => {
        if (room.number === bookedRoom.roomNumber) {
          revenue += parseFloat(room.costPerNight);
        }
      })
      return revenue;
    }, 0)
  }
}


//View their name, a list of all of their bookings, and the total amount they’ve spent
//Add a room booking for that user
//Delete any upcoming room bookings for that user (they cannot delete a booking from the past)
export default Manager;
