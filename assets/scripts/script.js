const toggleBtnElement = document.getElementById('mobile-menu-icon');
const mobileDropdownElement = document.querySelector('.mobile-has-dropdown');

const mobileMenuHandler = () => {
  const mobileMenuElement = document.querySelector('.mobile-menu-container');

  mobileMenuElement.classList.toggle('visible');
};

const dropdownMenuHandler = () => {
  const mobileDropdownMenuElement = document.querySelector(
    '.mobile-dropdown-menu'
  );

  mobileDropdownMenuElement.classList.toggle('visible');
};

toggleBtnElement.addEventListener('click', mobileMenuHandler);
mobileDropdownElement.addEventListener('click', dropdownMenuHandler);
