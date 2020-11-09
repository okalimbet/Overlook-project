
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

let domDisplay = {

  displayManagerView() {
    navBar.classList.remove('hidden');
    managerView.classList.remove('hidden');
    managerNavBar.classList.remove('hidden');
    customerView.classList.add('hidden');
    customerNavBar.classList.add('hidden');
    loginPageView.classList.add('hidden');
  },

  displayLoginView() {
    navBar.classList.add('hidden');
    managerView.classList.add('hidden');
    managerNavBar.classList.add('hidden');
    customerView.classList.add('hidden');
    customerNavBar.classList.add('hidden');
    loginPageView.classList.remove('hidden');
  },

  displayCustomerView() {
    navBar.classList.remove('hidden');
    managerView.classList.add('hidden');
    managerNavBar.classList.add('hidden');
    customerView.classList.remove('hidden');
    customerNavBar.classList.remove('hidden');
    loginPageView.classList.add('hidden');
  },

  showErrorMessage(errorMessage, elementId, action) {
    let errorMessageElement = document.getElementById(elementId);
    errorMessageElement.classList[action]('hidden');
    errorMessageElement.innerText = errorMessage;
  },

  hideLoginError() {
    let errorMessageElement = document.getElementById('login-error');
    errorMessageElement.classList.add('hidden');
    errorMessageElement.innerText = '';
  }
}

export default domDisplay;
