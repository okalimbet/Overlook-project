import Hotel from './Hotel';
import Booking from '../src/Booking';

class BookingRepo extends Hotel {
  constructor(bookingRepo = []) {
    super(bookingRepo, [], []);
  }

  getBookingsId(id) {
    return this.bookingRepo.reduce((idResult, booking) => {
      if(booking.id === id) {
        idResult.id = booking.id;
      }
      return idResult;
    }, {})
  }

	getBookingsByUserIdAndDate(userId, date) {
		return this.bookingRepo.filter(booking => {
			return (booking.userId === userId && booking.bookingDate === date);
		})
	}

  getTotalOfAllRoomCharges(rooms) {
    const totalAmount = rooms.reduce((total, booking) => {
      return total += parseFloat(booking.getTotalServiceCharges());
    }, 0)
    return totalAmount.toFixed(2);
  }
}

  export default BookingRepo;
