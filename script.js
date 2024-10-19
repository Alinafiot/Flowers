document.addEventListener('DOMContentLoaded', function() {
  const userIcon = document.querySelector('.user-icon');
  const loginForm = document.getElementById('login-form');
  const overlay = document.getElementById('overlay');
  const catalogItem = document.getElementById('catalog');
  const menuTrigger = document.querySelector('.fa-bars');
  const body = document.querySelector('body');
  const menu = document.getElementById('slide-menu');

  // Додаємо подію для показу форми при натисканні на іконку користувача
  userIcon.addEventListener('click', showLoginForm);

  // Додаємо подію для закриття форми при натисканні на затемнення
  overlay.addEventListener('click', hideLoginForm);

  // Додаємо подію для показу/приховування меню при натисканні на кнопку
  menuTrigger.addEventListener('click', toggleMenu);

  // Додаємо подію для закриття меню при натисканні на затемнення
  overlay.addEventListener('click', closeMenu);

  catalogItem.addEventListener('click', function(event) {
      event.stopPropagation(); // Уникнути спроби закрити меню
      const submenu = this.querySelector('.submenu');
      submenu.classList.toggle('show'); // Перемикаємо клас 'show'
  });

  // Функції для управління формою входу і меню
  function showLoginForm() {
      overlay.style.display = 'block';
      loginForm.style.display = 'block';
  }

  function hideLoginForm() {
      overlay.style.display = 'none';
      loginForm.style.display = 'none';
  }

  function toggleMenu() {
      body.classList.toggle('menu-active');
      overlay.style.display = 'block'; // Показуємо затемнення
  }

  function closeMenu() {
      body.classList.remove('menu-active');
      overlay.style.display = 'none'; // Приховуємо затемнення
  }
});
