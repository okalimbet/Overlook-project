let domDisplay = {

  displayManagerView(navBar, managerView, managerNavBar, customerView, customerNavBar, loginPageView) {
    navBar.classList.remove('hidden');
    managerView.classList.remove('hidden');
    managerNavBar.classList.remove('hidden');
    customerView.classList.add('hidden');
    customerNavBar.classList.add('hidden');
    loginPageView.classList.add('hidden');
  },

  displayLoginView(navBar, managerView, managerNavBar, customerView, customerNavBar, loginPageView) {
    navBar.classList.add('hidden');
    managerView.classList.add('hidden');
    managerNavBar.classList.add('hidden');
    customerView.classList.add('hidden');
    customerNavBar.classList.add('hidden');
    loginPageView.classList.remove('hidden');
  },

  displayCustomerView(navBar, managerView, managerNavBar, customerView, customerNavBar, loginPageView) {
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
