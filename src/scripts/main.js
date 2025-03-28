'use strict';

document
  .getElementById('header__burger-menu-toggle')
  .addEventListener('click', function () {
    document.getElementById('menu').classList.add('menu--open');
  });

document.getElementById('menu-close').addEventListener('click', function () {
  document.getElementById('menu').classList.remove('menu--open');
});
