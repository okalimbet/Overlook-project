
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

let loginBtn = document.getElementById('login-button');
let logOutBtn = document.getElementById('log-out');

let username = document.getElementById('username-value');
let password = document.getElementById('password-value');

loginBtn.addEventListener('click', checkUserLoginInfo);
logOutBtn.addEventListener('click',logOutUsers);

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
// function showLoginError(errorMessage) {
//   let errorMessageElement = document.getElementById('login-error');
//   errorMessageElement.classList.remove('hidden');
//   errorMessageElement.innerText = errorMessage;
// }
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
    domDisplay.showLoginError('You have entered an invalid username or password');
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
    domDisplay.showLoginError('You have entered an invalid username or password');
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
  console.log(hotelOverlook.getAvailableRooms(bookingRepo.bookingRepo, roomRepo.roomRepo, date).length)
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

function displayBookings(bookings) {

}

//
