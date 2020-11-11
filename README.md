# Overlook - Turing Mod 2 Solo Project

### [Link To My Repo](https://github.com/scripka/Overlook-project)

### [Link To My Project Description](https://frontend.turing.io/projects/overlook.html)

---

## Table of Contents

* [Project Overview](#project-overview)
* [Goals](#goals)
* [Technologies And Tools](#technologies-and-tools)
* [Setup](#setup)
* [Challenges](#challenges)
* [Wins](#wins)
* [ScreenShots and Demos](#screenshots-and-demos)
* [Roadmap](#roadmap)
* [Credits](#credits)

## Project Overview

The Overlook is a website which represents a hotel management tool for hotel customers and staff to manage room bookings and calculate customer bills.

This project is aimed to display students' skills and knowledge received in MOD2, such as working confidently with API, Sass, Webpack chai spies, and the ability to create a responsive design that can be accessed from any device.

## Goals

My personal goal was to create a fully functional website that I wasn't able to create before in Mod1. With this project, I wanted to improve my javaScript skills and understanding of API and accessibility issues.

## Technologies And Tools

* JavaScript (ES6)
* HTML
* CSS/Scss/Sass
* Adobe XD
* Webpack
* Chai spies

## Setup

After one person has gone through the steps of cloning down this repo and editing the remote, everyone should clone down the repo.

Then install the library dependencies. Run:

```bash
npm install
```

To verify that it is setup correctly, run `npm start` in your terminal. Go to `http://localhost:8080/`

## Challenges

My biggest challenges were creating a good simple code following SRP and DRY. I also had a struggle using ARIA and tab index to find the best spots where users would like to be on the website. Another thing was separating DOM manipulation from the index.js file. I was not able to find a better way to make it happen on time. There are still a lot of things that need to be improved in this project.

## Wins

Creating a responsive design where everything is functional.

## ScreenShots and Demos

---

### Login Window

---

![login page](https://media.giphy.com/media/E9ynnKHUbAF4I9Cz0t/giphy.gif)

<details>
  <summary>**Under the Hood**</summary>

There are two types of users: manager and customers. The login window checks both username and password information in order to switch to the next page
following the simple if statement logic:

```javaScript
...
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
```

</details>

---

### Manager's Dashboard

---

<details>
  <summary>**Under the Hood**</summary>

<img width="1420" alt="manager-dashboard-view" src="https://user-images.githubusercontent.com/66269306/98755476-db315d00-2385-11eb-8e1d-8e73c7a3f5cc.png">

The first window element manager sees when logged in is the information dashboard, which consists of the following items:

* Total revenue on today's date
* Total number of available rooms
* A chart that shows the percentage of available rooms

The website updates the information every day based on today's date and the database updates.

</details>

---

### Customers' Bookings

---

![gif-customer-bookings](https://media.giphy.com/media/uB04rWdbF1SaK6g0Ct/giphy.gif)


<details>
  <summary>**Under the Hood**</summary>

Manager View:

* Manager can search for a specific Customer to look up the information about their reservations and the total amount they spent. User ID is required to display the information.
* Manager has a "delete" feature that allows them to delete only 'upcoming' reservations by entering the booking ID. Booking ID is required.

Customer View:

* When customers are logged in, they can see their name, their total spend on all bookings, and individual bookings they had so far

```javaScript

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

```

</details>

---

### Booking a room

---

![gif-make-reservation-view](https://media.giphy.com/media/uB04rWdbF1SaK6g0Ct/giphy.gif)

<details>
  <summary>**Under the Hood**</summary>

Manager View:

* To make a reservation Manager has to provide the date and User ID, otherwise the website will throw a message to check the entries

Customer View:

* Customers only need to provide the date in the future when rooms are available to make a reservation

Both users can filter through the available rooms by their type.
When the 'book' button is clicked the confirmation message pops up to verify that a chosen room is the room that needs to be booked. Users get a confirmation message after a successful booking.

</details>

---

## Roadmap

* Improve performance of the website to load and update info faster
* Add feature to filter available rooms by the number of beds, and price
* Improve design to have a better UX by adding hover and focus effects
* Add feature to add room service charges to bookings
* Improve index.js readability and SRP
* Organize DOM manipulation to have a better organization

## Credits

<img src="https://avatars0.githubusercontent.com/u/66269306?s=400&u=b59f8ccc1002269319d952aa028ee270629b2ead&v=4" alt="Olga Morgan"
 width="150" height="auto" />\

**Olga Morgan**
[GitHub Profile](https://github.com/scripka)

<img src="https://avatars2.githubusercontent.com/u/68264128?s=460&u=5e1c7200a4a593246ef55c53a1cf0e71b5f2adfa&v=4" alt="Olga Morgan"
 width="150" height="auto" />\

**Lola Dolinsky**
[GitHub Profile](https://github.com/lo-la-do-li)
