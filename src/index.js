
import './css/styles.scss';
import './images/turing-logo.png'

import apiRequest from './apiRequests';
import domDisplay from './domDisplay';

import Customer from './Customer';
import CustomerRepo from './CustomerRepo';
import Manager from './Manager';
import Room from './Room';
import RoomRepo from './RoomRepo';
import Booking from './Booking';
import BookingRepo from './BookingRepo';
import Hotel from './Hotel';

let usersData;
let bookingsData;
let roomsData;

let customerRepo;
let bookingRepo;
let roomRepo;
let currentManager = {};
let currentUser = {};
let availableRooms = [];
let hotelOverlook;

let receivedUsersData = apiRequest.getHotelData('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users', 'users');
let receivedBookingsData = apiRequest.getHotelData('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings', 'bookings');
let receivedRoomsData = apiRequest.getHotelData('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms', 'rooms');

let loginBtn = document.getElementById('login-button');
let logOutBtn = document.getElementById('log-out');
let deleteBtn = document.getElementById('delete-button');

let loginPageView = document.getElementById('login-view');
let navBar = document.getElementById('nav-bar');
let managerView = document.getElementById('manager-page');
let managerNavBar = document.getElementById('manager-nav');
let customerView = document.getElementById('customer-page');
let customerNavBar = document.getElementById('user-nav');
let managerUserIdInput = document.getElementById('manager-user-id');
let listOfAvailabelRooms = document.getElementById('available-rooms-wrapper');
let customerAvailableRooms = document.getElementById('user-available-rooms');
let listOfBookings = document.getElementById('manager-bookings-container');
let customerDateInput = document.getElementById('user-date-input');
let customerRoomTypeInput = document.getElementById('user-room-data');
let managerRoomTypeInput = document.getElementById('manager-room-types');
let managerDateInput = document.getElementById('manager-date-choice');
let customerReserveUserId = document.getElementById('manager-user-id-input');
let dropDownMenu = document.querySelectorAll('select');
let today;

let infoMessages = {
  errorSearch: `We apologize for the inconvinience,
                there are no available rooms matching your search criterias.
                Please, try another date or room type!`,
  errorCancel: 'Reservation was canceled',
  errorData: 'Please, check User ID and Date to book a room',
  errorDataCustomer: 'Please, check your Date and Type to book a room',
  errorLogin: 'You have entered an invalid username or password',
  confirmMessage: 'You successfully booked room #',
  confirmDelete: 'You successfully deleted booking #',
  errorDelete: 'Check ID or status of the booking',
}

managerRoomTypeInput.addEventListener('change', filterAvailableRoomsTypeCustomer);
managerDateInput.addEventListener('change', filterAvailableRoomsByDate);
customerRoomTypeInput.addEventListener('change', filterAvailableRoomsTypeCustomer);
customerDateInput.addEventListener('change', filterAvailableRoomsByDateCustomer);
loginBtn.addEventListener('click', checkUserLoginInfo);
logOutBtn.addEventListener('click', logOutUsers);
deleteBtn.addEventListener('click', deleteBooking);
managerUserIdInput.addEventListener('keyup', getUserInfo);

Promise.all([receivedUsersData, receivedBookingsData, receivedRoomsData])
  .then(value => {
    usersData = value[0];
    bookingsData = value[1];
    roomsData = value[2];
    createHotelData()
  })
  .catch(error => console.log(error))

function createHotelData() {
  const customers = usersData.map(user => new Customer(user.id, user.name));
  const rooms = roomsData.map(room => new Room(room.number, room.roomType, room.bidet, room.bedSize, room.numBeds, room.costPerNight));
  const bookings = bookingsData.map(booking => new Booking(booking.id, booking.userID, booking.date, booking.roomNumber, booking.roomServiceCharges));
  customerRepo = new CustomerRepo(customers);
  bookingRepo = new BookingRepo(bookings);
  roomRepo = new RoomRepo(rooms);
  hotelOverlook = new Hotel(bookingRepo, roomRepo, customerRepo);
  today = hotelOverlook.getTodayDate();
}

function logOutUsers() {
  let allTextInputs = document.querySelectorAll('input');
  allTextInputs.forEach(textInput => {
    textInput.value = "";
  })
  dropDownMenu.forEach(menu => {
    menu.options[0].selected = 'selected';
  })
  currentUser = {};
  currentManager = {};
  domDisplay.hideLoginError();
  domDisplay.displayLoginView(navBar, managerView, managerNavBar, customerView, customerNavBar, loginPageView);
}

function validateCustomerId(customerId) {
  if (customerId.length > 0 && customerId.length <= 2) {
    let userId = parseInt(customerId);
    return (customerRepo.customerRepo.find(customer => customer.id === userId)) ? true : false;
  } else {
    return false;
  }
}

function handleManagerLogin() {
  currentManager = new Manager(roomRepo, bookingRepo, customerRepo);
  domDisplay.displayManagerView(navBar, managerView, managerNavBar, customerView, customerNavBar, loginPageView);
  displayTotalRevenue(today);
  displayTotayDate();
  displayTotalAvailableRooms(today);
  displayPercentageAvailableRooms(today);
  availableRooms = hotelOverlook.getAvailableRooms(bookingRepo.bookingRepo, roomRepo.roomRepo, today);
  displayAvailbeRooms(availableRooms);
}

function handleCustomerLogin(providedId) {
  currentUser = hotelOverlook.getInformationByValue(parseInt(providedId), customerRepo.customerRepo, 'id')[0];
  domDisplay.displayCustomerView(navBar, managerView, managerNavBar, customerView, customerNavBar, loginPageView);
  displayCustomerNameUserPage(providedId);
  let customerInfo = hotelOverlook.getInformationByValue(currentUser.id, bookingRepo.bookingRepo, 'userId');
  displayCustomerBookings(customerInfo, roomRepo);
  availableRooms = hotelOverlook.getAvailableRooms(bookingRepo.bookingRepo, roomRepo.roomRepo, today);
  displayAvailbeCustomerRooms(availableRooms);
}

function checkUserLoginInfo(event) {
  event.preventDefault();
  let usernameValue = document.getElementById('username-value').value;
  let passwordValue = document.getElementById('password-value').value;
  if (passwordValue !== 'overlook2020') {
    domDisplay.showErrorMessage(infoMessages.errorLogin, 'login-error', 'remove');
    return;
  }
  if (usernameValue === "manager") {
    handleManagerLogin();
  }
  let customerUsername = usernameValue.split('').splice(0, 8).join('').toLowerCase();
  let customerId = usernameValue.split('').splice(8).join('');
  if (customerUsername === 'customer' && validateCustomerId(customerId)) {
    handleCustomerLogin(customerId);
  } else {
    domDisplay.showErrorMessage(infoMessages.errorLogin, 'login-error', 'remove');
    return;
  }
}

function displayTotalRevenue(date) {
  let todayRevenue = currentManager.getRevenueOnDate(bookingRepo.bookingRepo, roomRepo.roomRepo, date);
  document.getElementById('today-revenue').innerText = `$ ${todayRevenue.toFixed(2)}`;
}

function displayTotayDate() {
  document.getElementById('today-date').innerText = `${hotelOverlook.getTodayDate()}`;
}

function displayTotalAvailableRooms(date) {
  document.getElementById('available-rooms').innerText = `${hotelOverlook.getAvailableRooms(bookingRepo.bookingRepo, roomRepo.roomRepo, date).length}`;
}

function displayPercentageAvailableRooms(date) {
  let availabilityPercentage = currentManager.getAvailabilityOfRoomsPercentage(bookingRepo.bookingRepo, roomRepo.roomRepo, date);
  document.querySelector('.circular-chart').innerHTML =
      `
        <path class="circular-chart__circle"
          stroke-dasharray="${availabilityPercentage}, 100"
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <text x="18" y="20.35" id="percentage">${availabilityPercentage}%</text>
      `
}

function displayBookings(bookings, roomRepo, userId, customerRepo) {
  listOfBookings.innerHTML = '';
  let cards = hotelOverlook.filterBookingByDate(hotelOverlook.getUserCardsRoomCards(bookings, roomRepo));
  displayCustomerTotalAmount(cards);
  displayCustomerName(userId, customerRepo);
  cards.forEach(card => {
    appendCard(listOfBookings, card);
  });
}

function displayCustomerBookings(bookings, roomRepo) {
  let cards = hotelOverlook.filterBookingByDate(hotelOverlook.getUserCardsRoomCards(bookings, roomRepo));
  let customerBookingsContainer = document.getElementById('user-bookings-container');
  displayCustomerTotalUserPage(cards);
  cards.forEach(card => {
    appendCard(customerBookingsContainer, card);
  });
}

function appendCard(container, card) {
  let miniBookingCard =

    `<div id="booking-${card.bookingId}" class="card-container">
      <div class="booking-card">
        <div class="card-left-side">
          <img class="room-img" src="../images/tokyo-city.jpg" alt="building-image">
          <div class="card-details">
            <p class="room-detail">Reservation ID: "${card.bookingId}"</p>
            <p class="room-detail">Room Type: ${card.roomType}</p>
            <p class="room-detail">Date: <span id="date-booking">${card.bookingDate}</span></p>
            <p class="room-detail">${card.status}</p>
          </div>
        </div>
        <div class="card-right-side">
          <div class="cr-price">$ <span id="price-booking">${card.price}</span></div>
        </div>
       </div>
    </div>
    `
  container.innerHTML  += miniBookingCard;
}

function deleteBooking() {
  event.preventDefault();
  const bookingId = document.getElementById('manager-booking-id').value;
  const parseBookingId = parseInt(bookingId) == bookingId ? parseInt(bookingId) : bookingId;
  const bookingToBeDeleted = hotelOverlook.getInformationByValue(parseBookingId, bookingRepo.bookingRepo, 'id');
  if (bookingToBeDeleted.length > 0 && hotelOverlook.determineUpcomingBookings(bookingToBeDeleted[0]) === "Upcoming") {
    let foundBooking = {"id": parseBookingId};
    apiRequest.makeADeleteRequest('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings', foundBooking)
      .then(deletedBooking => {
        const bookingIndex = bookingRepo.bookingRepo.findIndex(booking => booking.id === parseBookingId);
        bookingRepo.bookingRepo.splice(bookingIndex, 1);
        getUserInfo();
        domDisplay.showErrorMessage(infoMessages.confirmDelete + ' ' + bookingId, 'no-rooms-message-1', 'remove')
        document.getElementById('manager-booking-id').value = '';
      });
  } else if (bookingToBeDeleted.length === 0 || hotelOverlook.determineUpcomingBookings(bookingToBeDeleted[0]) === "Completed") {
    domDisplay.showErrorMessage(infoMessages.errorDelete, 'no-rooms-message-1', 'remove');
  }
}

// function validateBookingId(bookingId) {
//   if(bookingId.length > 0 && typeof bookingId === 'number') {
//     let reservationId = parseInt(bookingId);
//     return (bookingRepo.bookingRepo.find(booking => booking.id === reservationId)) ? true : false;
//   } else {
//     return false;
//   }
// }

function displayCustomerTotalAmount(customerBookings) {
  let amount = hotelOverlook.getTotalAmountSpendByUser(customerBookings).toFixed(2);
  document.getElementById('user-total').innerText = amount;
}

function displayCustomerName(userId, customerRepo) {
  let customerName = customerRepo.customerRepo[parseInt(userId) - 1];
  if (customerName) {
    document.getElementById('user-name').innerText = customerName.name;
  } else {
    document.getElementById('user-name').innerText = 'Enter Valid User ID';
  }
}

function getUserInfo() {
  let userIdInput = parseInt(managerUserIdInput.value);
  if (!userIdInput) {
    document.getElementById('user-name').innerText = 'Enter Valid User ID';
    return;
  }
  let customerInfo = hotelOverlook.getInformationByValue(parseInt(userIdInput), bookingRepo.bookingRepo, 'userId');
  displayBookings(customerInfo, roomRepo, userIdInput, customerRepo, listOfBookings);
}

function filterAvailableRoomsByDate() {
  if (this.value) {
    let newDate = this.value.replaceAll('-', '/');
    validateTheUserInputDate(newDate, listOfAvailabelRooms, displayAvailbeRooms, 'no-rooms-message')
  } else {
    domDisplay.showErrorMessage(
      infoMessages.errorSearch, 'no-rooms-message', 'remove');
  }
}

function filterAvailableRoomsByDateCustomer() {
  if (this.value) {
    let newDate = this.value.replaceAll('-', '/');
    validateTheUserInputDate(newDate, customerAvailableRooms, displayAvailbeCustomerRooms, 'no-rooms-message-customer')
  } else {
    domDisplay.showErrorMessage(
      infoMessages.errorSearch, 'no-rooms-message-customer', 'remove');
  }
}

function validateTheUserInputDate(newDate, container, method, errorContainer) {
  let userDateChoice = new Date(newDate + ' ').getTime();
  if (userDateChoice < new Date(today).getTime()) {
    container.innerHTML = '';
    domDisplay.showErrorMessage(infoMessages.errorSearch, errorContainer, 'add');
    container.innerText = "There are no available rooms for this date. Please choose the correct date"
  }  else {
    availableRooms = hotelOverlook.getAvailableRooms(bookingRepo.bookingRepo, roomRepo.roomRepo, newDate);
    method(availableRooms);
    document.querySelectorAll('select').forEach(menu => {
      menu.options[0].selected = 'selected'
    });
  }
}

function displayAvailbeRooms(availableRooms) {
  // let chosenDate = managerDateInput.value.replaceAll('-', '/');
  listOfAvailabelRooms.innerHTML = '';
  if (!availableRooms.length) {
    domDisplay.showErrorMessage(infoMessages.errorSearch, 'no-rooms-message', 'remove');
  } else {
    domDisplay.showErrorMessage(infoMessages.errorSearch, 'no-rooms-message', 'add');
  }
  availableRooms.forEach(card => {
    let miniRoomCard =

      `<div id="${card.number}" class="book-room-card">
        <img class="book-room-img" src="../images/tokyo-city.jpg" alt="building-image">
        <div class="book-card-details">
          <p class="book-room-detail">Room #<span id="room-number">${card.number}</p>
          <p class="book-room-detail">1 night $<span id="room-per-night">${card.costPerNight}</span></p>
          <button id="btn-${card.number}"class='btn room-btn-manager'>BOOK</button>
        </div>
      </div>
      `
    listOfAvailabelRooms.innerHTML += miniRoomCard;
  });
  addEventListenersToBook('.room-btn-manager', confirmReservation);
}

function addEventListenersToBook(buttonElement, method) {
  document.querySelectorAll(buttonElement).forEach(button => {
    button.addEventListener('click', method);
  });
}

function displayAvailbeCustomerRooms(availableRooms) {
  // let chosenDate = customerDateInput.value.replaceAll('-', '/');
  customerAvailableRooms.innerHTML = '';
  if (!availableRooms.length) {
    domDisplay.showErrorMessage(infoMessages.errorSearch, 'no-rooms-message-customer', 'remove');
  } else {
    domDisplay.showErrorMessage(infoMessages.errorSearch, 'no-rooms-message-customer', 'add');
  }
  availableRooms.forEach(card => {
    let miniRoomCard =

      `<div id="${card.number}" class="book-room-card">
        <img class="book-room-img" src="../images/tokyo-city.jpg" alt="building-image">
        <div class="book-card-details">
          <p class="book-room-detail">Room #<span id="room-number">${card.number}</p>
          <p class="book-room-detail">1 night $<span id="room-per-night">${card.costPerNight}</span></p>
          <button id="btn-${card.number}"class='btn room-btn'>BOOK</button>
        </div>
      </div>
      `
    customerAvailableRooms.innerHTML += miniRoomCard;
  });
  addEventListenersToBook('.room-btn', confirmReservationCustomer);
}

function postAReservation(roomNumber, reservation, errorMessage) {
  apiRequest.makeAPostRequest('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings', reservation)
    .then(postedBooking => {
      bookingRepo.bookingRepo.push(new Booking(postedBooking.id, postedBooking.userID, postedBooking.date, postedBooking.roomNumber));
      getUserInfo();
      domDisplay.showErrorMessage(infoMessages.confirmMessage + '' + roomNumber, errorMessage, 'remove');
    })
}

function bookARoom(roomNumber) {
  let currentReservaton = {
    "userID": parseInt(customerReserveUserId.value),
    "date": managerDateInput.value.replaceAll('-', '/'),
    "roomNumber": parseInt(roomNumber)
  }
  postAReservation(roomNumber, currentReservaton, 'no-rooms-message');
}

function bookARoomCustomer(roomNumber) {
  let currentReservaton = {
    "userID": currentUser.id,
    "date": customerDateInput.value.replaceAll('-', '/'),
    "roomNumber": parseInt(roomNumber)
  }
  postAReservation(roomNumber, currentReservaton, 'no-rooms-message-customer');
}

function confirmReservation() {
  if (validateCustomerId(customerReserveUserId.value) && managerDateInput.value) {
    domDisplay.showErrorMessage('', 'no-rooms-message', 'add');
    let customerID = customerReserveUserId.value;
    let bookingDetails = this.id.replace('btn-', '');
    var result = confirm(`Would you like to book Room ${bookingDetails} for a Customer#${customerID}`);
    if (result) {
      bookARoom(bookingDetails)
    } else {
      domDisplay.showErrorMessage(infoMessages.errorCancel, 'no-rooms-message', 'remove');
    }
  } else {
    domDisplay.showErrorMessage(infoMessages.errorData, 'no-rooms-message', 'remove');
  }
}

function confirmReservationCustomer() {
  if (customerDateInput.value) {
    domDisplay.showErrorMessage('', 'no-rooms-message-customer', 'add');
    let customerName = currentUser.name;
    let bookingDetails = this.id.replace('btn-', '');
    var result = confirm(`Would you like to book Room ${bookingDetails}, ${customerName}`);
    if (result) {
      bookARoomCustomer(bookingDetails)
    } else {
      domDisplay.showErrorMessage(infoMessages.errorCancel, 'no-rooms-message-customer', 'remove');
    }
  } else {
    domDisplay.showErrorMessage(infoMessages.errorDataCustomer, 'no-rooms-message-customer', 'remove');
  }
}

function displayCustomerTotalUserPage(customerBookings) {
  let amount = hotelOverlook.getTotalAmountSpendByUser(customerBookings).toFixed(2);
  document.getElementById('all-bookings-amount').innerText = amount;
}

function displayCustomerNameUserPage(userId) {
  let customerName = customerRepo.customerRepo[parseInt(userId) - 1];
  document.getElementById('user-title').innerText = customerName.name;
}

function filterAvailableRoomsTypeCustomer() {
  let filteredRooms = [];
  if (this.value === 'residential suite') {
    filteredRooms = hotelOverlook.getInformationByValue('residential suite', availableRooms, 'roomType');
  } else if (this.value === 'suite') {
    filteredRooms = hotelOverlook.getInformationByValue('suite', availableRooms, 'roomType');
  } else if (this.value === 'single room') {
    filteredRooms = hotelOverlook.getInformationByValue('single room', availableRooms, 'roomType');
  } else if (this.value === 'junior suite') {
    filteredRooms = hotelOverlook.getInformationByValue('junior suite', availableRooms, 'roomType');
  } else if (this.value === 'show all') {
    filteredRooms = availableRooms
  }
  if (Object.keys(currentUser).length > 0) {
    displayAvailbeCustomerRooms(filteredRooms);
  } else if (Object.keys(currentUser).length === 0) {
    displayAvailbeRooms(filteredRooms);
  }
  return this.value;
}
