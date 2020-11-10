class Hotel {
  constructor(bookingRepo = [], roomRepo = [], customerRepo = []) {
    this.bookingRepo = bookingRepo,
    this.roomRepo = roomRepo,
    this.customerRepo = customerRepo
  }

  getInformationByValue(value, data, property) {
    return data.filter(dataPiece => {
      return property === null ? value === dataPiece : value === dataPiece[property];
    })
  }

  determineUpcomingBookings(booking) {
    let todayDate = new Date().getTime();
    let bookingDate = new Date(booking.bookingDate).getTime();
    if (bookingDate > todayDate) {
      return 'Upcoming';
    }
    return 'Completed';
  }

  getTodayDate() {
    let todayDate = new Date();
    let date = ("0" + todayDate.getDate()).slice(-2);
    let month = ("0" + (todayDate.getMonth() + 1)).slice(-2);
    let year = todayDate.getFullYear();
    return `${year}/${month}/${date}`;
  }

  filterBookingByDate(bookings) {
    return bookings.sort((a, b) => {
      return a.bookingDate > b.bookingDate ? -1 : 1;
    })
  }

  getAvailableRooms(bookingRepo, roomRepo, date) {
    let bookingByDate = this.getInformationByValue(date, bookingRepo, 'bookingDate');
    let availableRooms = roomRepo
      .filter(room => !bookingByDate
        .some(booking => room.number === booking.roomNumber));
    return availableRooms;
  }

  getTotalAmountSpendByUser(customerBookings) {
    return customerBookings.reduce((totalAmount, room) => {
      return totalAmount += room.price;
    }, 0);
  }

  getUserCardsRoomCards(bookings, roomRepo) {
    return bookings.reduce((cards, booking) => {
      let bookingStatus = this.determineUpcomingBookings(booking);
      let chosenRoom = roomRepo.roomRepo.find(room => {
        return room.number === booking.roomNumber;
      });
      cards.push({
        bookingId: booking.id,
        roomType: chosenRoom.roomType,
        bookingDate: booking.bookingDate,
        price: chosenRoom.costPerNight,
        status: bookingStatus
      });
      return cards;
    }, [])
  }
}

export default Hotel;
