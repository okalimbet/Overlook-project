import Hotel from './Hotel';
import Booking from '../src/Booking';

class BookingRepo extends Hotel {
  constructor(bookingData = [], roomRepo = [], customerRepo = []) {
    super(bookingData, roomRepo, customerRepo);
    this.bookingData = bookingData;
  }

  getBookingsById(id) {
	  return this.getInformationByValue(id, this.bookingData, 'id');
	};

	getBookingsByUserIdAndDate(userId, date) {
		return this.bookingData.filter(booking => {
			return (booking.userId === userId && booking.bookingDate === date);
		})
	}

  getBookingsByUserId(userId) {
		return this.getInformationByValue(userId, this.bookingData, 'userId');
  }

	getBookingsByDate(date) {
		return this.getInformationByValue(date, this.bookingData, 'bookingDate');
  }

  getTotalOfAllRoomCharges(rooms) {
    const totalAmount = rooms.reduce((total, booking) => {
      return total += parseFloat(booking.getTotalServiceCharges());
    }, 0)
    return totalAmount.toFixed(2);
  }
}

  export default BookingRepo;
