import '../styles/styles.css';

import catalogMenuHTML from '../components/catalog-menu/catalog-menu.html?raw';
import headerHTML from '../components/header/header.html?raw';
import modalHTML from '../components/modal/modal.html?raw';
import registerHTML from '../components/modal/modal-register.html?raw'

import { initModal } from '../components/modal/modal.js';

const app = document.querySelector('#site-content');
app.innerHTML = headerHTML + catalogMenuHTML + modalHTML + registerHTML;

const catalogBurger = document.querySelector('.header__burger-button');
catalogBurger?.addEventListener('click', () => {
  catalogBurger.classList.toggle('active');
});

initModal();
