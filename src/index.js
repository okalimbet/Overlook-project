
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
// import $ from 'jquery';

let usersData;
let bookingsData;
let roomsData;

let customerRepo;
let bookingRepo;
let roomRepo;
let currentManager;
let currentUser;
let hotelOverlook;

let receivedUsersData = apiRequest.getHotelData('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users', 'users');
let receivedBookingsData = apiRequest.getHotelData('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings', 'bookings');
let receivedRoomsData = apiRequest.getHotelData('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms', 'rooms');


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
  // console.log(bookingRepo.bookingRepo[0])
}

// let loginPageView = document.getElementById('login-view');
// let navBar = document.getElementById('nav-bar');
//
// let managerView = document.getElementById('manager-page');
// let managerNavBar = document.getElementById('manager-nav');
//
// let customerView = document.getElementById('customer-page');
// let customerNavBar = document.getElementById('user-nav');
let listOfBookings = document.getElementById('manager-bookings-container');

let loginBtn = document.getElementById('login-button');
let logOutBtn = document.getElementById('log-out');
let deleteBtn = document.getElementById('delete-button');

let username = document.getElementById('username-value');
let password = document.getElementById('password-value');
let managerUserIdInput = document.getElementById('manager-user-id');
let availableRooms = [];

loginBtn.addEventListener('click', checkUserLoginInfo);
logOutBtn.addEventListener('click', logOutUsers);
deleteBtn.addEventListener('click', deleteBooking);
managerUserIdInput.addEventListener('keyup', getUserInfo);

function logOutUsers() {
  let allTextInputs = document.querySelectorAll('input');
  let dropDownMenu = document.querySelectorAll('select')
  allTextInputs.forEach(textInput => {
      textInput.value = "";
    })
  dropDownMenu.forEach(menu => {
    menu.options[0].selected = 'selected'
  })
  currentUser = {};
  currentManager = {};
  domDisplay.hideLoginError();
  domDisplay.displayLoginView();
}
//
// function displayManagerView() {
//   navBar.classList.remove('hidden');
//   managerView.classList.remove('hidden');
//   managerNavBar.classList.remove('hidden');
//   customerView.classList.add('hidden');
//   customerNavBar.classList.add('hidden');
//   loginPageView.classList.add('hidden');
// }
//
// function displayLoginView() {
//   navBar.classList.add('hidden');
//   managerView.classList.add('hidden');
//   managerNavBar.classList.add('hidden');
//   customerView.classList.add('hidden');
//   customerNavBar.classList.add('hidden');
//   loginPageView.classList.remove('hidden');
// }
//
// function displayCustomerView() {
//   navBar.classList.remove('hidden');
//   managerView.classList.add('hidden');
//   managerNavBar.classList.add('hidden');
//   customerView.classList.remove('hidden');
//   customerNavBar.classList.remove('hidden');
//   loginPageView.classList.add('hidden');
// }
//

//
// function hideLoginError() {
//   let errorMessageElement = document.getElementById('login-error');
//   errorMessageElement.classList.add('hidden');
//   errorMessageElement.innerText = '';
// }

function validateCustomerId(customerId) {
  if(customerId.length > 0 && customerId.length <= 2) {
    let userId = parseInt(customerId);
    return (customerRepo.customerRepo.find(customer => customer.id === userId)) ? true : false;
  } else {
    return false;
  }
}

function handleManagerLogin() {
  currentManager = new Manager(roomRepo, bookingRepo, customerRepo);
  domDisplay.displayManagerView();
  displayTotalRevenue('2020/02/07')
  displayTotayDate();
  displayTotalAvailableRooms('2020/02/07');
  displayPercentageAvailableRooms('2020/02/07');
  availableRooms = hotelOverlook.getAvailableRooms(bookingRepo.bookingRepo, roomRepo.roomRepo, '2020/02/07');
  displayAvailbeRoomsByType(availableRooms);
  // displayBookings(hotelOverlook.getUserInfo, roomRepo, date)
}

function handleCustomerLogin(providedId) {
  currentUser = hotelOverlook.getInformationByValue(parseInt(providedId), customerRepo.customerRepo, 'id')[0];
  domDisplay.displayCustomerView();
}

function checkUserLoginInfo(event) {
  event.preventDefault()
  let usernameValue = username.value;
  let passwordValue = password.value;
  if(passwordValue !== 'overlook2020') {
    domDisplay.showErrorMessage('You have entered an invalid username or password', 'login-error', 'remove');
    return;
  }
  if(usernameValue === "manager") {
    handleManagerLogin();
  }
  let customerUsername = usernameValue.split('').splice(0, 8).join('').toLowerCase();
  let customerId = usernameValue.split('').splice(8).join('');
  if(customerUsername === 'customer' && validateCustomerId(customerId)) {
    handleCustomerLogin(customerId);
  } else {
    domDisplay.showErrorMessage('You have entered an invalid username or password', 'login-error', 'remove');
  }
}


//------Manager-Today-Info-Page------//
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
        <path class="circle"
          stroke-dasharray="${availabilityPercentage}, 100"
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <text x="18" y="20.35" id="percentage">${availabilityPercentage}%</text>
      `
}

//------Manager-Get-User-Info-Page------//
function displayBookings(bookings, roomRepo, userId, customerRepo) {
  listOfBookings.innerHTML = '';
  let cards = hotelOverlook.getUserCardsRoomCards(bookings, roomRepo);
  displayCustomerTotalAmount(cards);
  displayCustomerName(userId, customerRepo)
  cards.forEach(card => {
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
      listOfBookings.innerHTML  += miniBookingCard;
  });
}

function deleteBooking() {
  let bookingId = document.getElementById('manager-booking-id').value;
  let foundBooking = bookingRepo.getBookingsId(bookingId)
  if(foundBooking) {
    apiRequest.deleteBooking(foundBooking)
    getUserInfo();
  }
}

function displayCustomerTotalAmount(customerBookings) {
  let amount = hotelOverlook.getTotalAmountSpentByUser(customerBookings).toFixed(2);
  document.getElementById('user-total').innerText = amount;
}

function displayCustomerName(userId, customerRepo) {
  let customerName = customerRepo.customerRepo[userId];
  if(customerName) {
    document.getElementById('user-name').innerText = customerName.name;
  } else {
    document.getElementById('user-name').innerText = 'Enter Valid User ID'
  }
}

function getUserInfo() {
  let userIdInput = managerUserIdInput.value;
  if(!userIdInput) {
    return;
  }
  let customerInfo = hotelOverlook.getInformationByValue(parseInt(userIdInput), bookingRepo.bookingRepo, 'userId');
  displayBookings(customerInfo, roomRepo, userIdInput, customerRepo);
}

//------Manager-Add-Reservation-Page------//
let customerReserveRoomId = document.getElementById('manager-user-id-input');
let managerDateInput = document.getElementById('manager-date-choice');
let managerRoomTypeInput = document.getElementById('manager-room-types');
let listOfAvailabelRooms = document.getElementById('available-rooms-wrapper');

managerRoomTypeInput.addEventListener('change', filterAvailableRoomsType);
managerDateInput.addEventListener('change', filterAvailableRoomsByDate);

function filterAvailableRoomsByDate() {
  if (this.value) {
    let newDate = this.value.replaceAll('-', '/');
    availableRooms = hotelOverlook.getAvailableRooms(bookingRepo.bookingRepo, roomRepo.roomRepo, newDate);
    displayAvailbeRoomsByType(availableRooms);
    let dropDownMenu = document.querySelectorAll('select');
    dropDownMenu.forEach(menu => {
      menu.options[0].selected = 'selected'
    })
  } else {
    domDisplay.showErrorMessage(
      `We apologize for the inconvinience,<br>
      there are no available rooms matching your search criterias.<br>
      Please, try another date or room type!`, 'no-rooms-message', 'remove');
  }

}

function filterAvailableRoomsType() {
  let filteredRooms = [];
  if (this.value === 'residential suite') {
    filteredRooms = hotelOverlook.getInformationByValue('residential suite', availableRooms, 'roomType');
    displayAvailbeRoomsByType(filteredRooms)
    return this.value;
  } else if (this.value === 'suite') {
    filteredRooms = hotelOverlook.getInformationByValue('suite', availableRooms, 'roomType');
    displayAvailbeRoomsByType(filteredRooms)
    return this.value;
  } else if (this.value === 'single room') {
    filteredRooms = hotelOverlook.getInformationByValue('single room', availableRooms, 'roomType');
    displayAvailbeRoomsByType(filteredRooms)
    return this.value;
  } else if (this.value === 'junior suite') {
    filteredRooms = hotelOverlook.getInformationByValue('junior suite', availableRooms, 'roomType');
    displayAvailbeRoomsByType(filteredRooms)
    return this.value;
  } else if (this.value === 'show all') {
    displayAvailbeRoomsByType(availableRooms)
    return this.value;
  }
}

function displayAvailbeRoomsByType(availableRooms) {
  let chosenDate = managerDateInput.value.replaceAll('-', '/');
  listOfAvailabelRooms.innerHTML = '';
  if(!availableRooms.length) {
    domDisplay.showErrorMessage(
      `We apologize for the inconvinience,<br>
      there are no available rooms matching your search criterias.<br>
      Please, try another date or room type!`, 'no-rooms-message', 'remove');
  } else {
    domDisplay.showErrorMessage(
      `We apologize for the inconvinience,<br>
      there are no available rooms matching your search criterias.<br>
      Please, try another date or room type!`, 'no-rooms-message', 'add');
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
      listOfAvailabelRooms.innerHTML += miniRoomCard;
  });
  addEventListenersToBook()
}

function addEventListenersToBook() {
  document.querySelectorAll('.room-btn').forEach(button => {
    button.addEventListener('click', confirmReservation);
  });
}

function bookARoom(roomNumber) {
  let currentReservaton = {
    "userID": customerReserveRoomId.value,
    "date": managerDateInput.value.replaceAll('-', '/'),
    "roomNumber": 10171992
  }
  console.log(currentReservaton)
  apiRequest.makeAPostRequest('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings', currentReservaton);
}

function confirmReservation() {
  console.log(customerReserveRoomId.value)
  if(validateCustomerId(customerReserveRoomId.value) && managerDateInput.value) {
    domDisplay.showErrorMessage('', 'no-rooms-message', 'add');
    let customerID = customerReserveRoomId.value;
    let bookingDetails = this.id.replace('btn-','');
    var result = confirm(`Would you like to book Room ${bookingDetails} for a Customer#${customerID}`);
    if (result) {
        bookARoom(bookingDetails)
    } else {
      domDisplay.showErrorMessage(
        `Reservation was canceled`, 'no-rooms-message', 'remove');
      }
    } else {
  return domDisplay.showErrorMessage(
    `Please, check User ID and Date to book a room`, 'no-rooms-message', 'remove');
  }
}
