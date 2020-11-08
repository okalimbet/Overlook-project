
import './css/styles.scss';
import './images/turing-logo.png'

import apiRequest from './apiRequests';
// import domDisplay from './domDisplay';

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

// const managerLoginInfo = {
//   username: 'manager',
//   password: 'overlook2020'
// }

// { username: customer50 (where 50 is the ID of the user)
// password: overlook2020 }

// $("#user__activities").on("change", displayActivityInput);
// $('.user__input__button').on("click", updateUserInformation);

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
  const bookings = bookingsData.map(booking => new Booking(booking.id, booking.userId, booking.date, booking.roomNumber, booking.roomServiceCharges));
  customerRepo = new CustomerRepo(customers);
  bookingRepo = new BookingRepo(bookings);
  roomRepo = new RoomRepo(rooms);
  hotelOverlook = new Hotel(bookingRepo, roomRepo, customerRepo);
  console.log(hotelOverlook)
}

let loginPageView = document.getElementById('login-view');
let navBar = document.getElementById('nav-bar');

let managerView = document.getElementById('manager-page');
let managerNavBar = document.getElementById('manager-nav');

let customerView = document.getElementById('customer-page');
let customerNavBar = document.getElementById('user-nav');

let loginBtn = document.getElementById('login-button');
let logOutBtn = document.getElementById('log-out');

let username = document.getElementById('username-value');
let password = document.getElementById('password-value');

loginBtn.addEventListener('click', checkUserLoginInfo);
logOutBtn.addEventListener('click', logOutUsers);

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
  hideLoginError();
  displayLoginView();
}

function displayManagerView() {
  navBar.classList.remove('hidden');
  managerView.classList.remove('hidden');
  managerNavBar.classList.remove('hidden');
  customerView.classList.add('hidden');
  customerNavBar.classList.add('hidden');
  loginPageView.classList.add('hidden');
}

function displayLoginView() {
  navBar.classList.add('hidden');
  managerView.classList.add('hidden');
  managerNavBar.classList.add('hidden');
  customerView.classList.add('hidden');
  customerNavBar.classList.add('hidden');
  loginPageView.classList.remove('hidden');
}

function displayCustomerView() {
  navBar.classList.remove('hidden');
  managerView.classList.add('hidden');
  managerNavBar.classList.add('hidden');
  customerView.classList.remove('hidden');
  customerNavBar.classList.remove('hidden');
  loginPageView.classList.add('hidden');
}

function showLoginError(errorMessage) {
  let errorMessageElement = document.getElementById('login-error');
  errorMessageElement.classList.remove('hidden');
  errorMessageElement.innerText = errorMessage;
}

function hideLoginError() {
  let errorMessageElement = document.getElementById('login-error');
  errorMessageElement.classList.add('hidden');
  errorMessageElement.innerText = '';
}

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
  displayManagerView();
}

function handleCustomerLogin(providedId) {
  currentUser = hotelOverlook.getInformationByValue(parseInt(providedId), customerRepo.customerRepo, 'id')[0];
  displayCustomerView();
}

function checkUserLoginInfo(event) {
  event.preventDefault()
  let usernameValue = username.value;
  let passwordValue = password.value;
  if(passwordValue !== 'overlook2020') {
    showLoginError('You have entered an invalid username or password');
  }
  if(usernameValue === "manager") {
    handleManagerLogin();
  }
  let customerUsername = usernameValue.split('').splice(0, 8).join('').toLowerCase();
  let customerId = usernameValue.split('').splice(8).join('');
  if(customerUsername === 'customer' && validateCustomerId(customerId)) {
    handleCustomerLogin(customerId);
  } else {
    showLoginError('You have entered an invalid username or password');
  }
}


//
