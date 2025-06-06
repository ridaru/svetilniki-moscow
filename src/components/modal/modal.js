export function initModal() {
  const modal = document.querySelector('#login-modal');
  const openBtn = document.querySelector('#login-button');
  if (!modal || !openBtn) return;

  const closeBtn = modal.querySelector('.modal__close');
  const overlay = modal.querySelector('.modal__overlay');

  openBtn.addEventListener('click', () => {
    modal.classList.add('active');
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  overlay.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  const loginModal = document.querySelector('#login-modal');
  const registerModal = document.querySelector('#register-modal');
  const loginBtn = document.querySelector('#login-button');
  const registerLink = loginModal?.querySelector('.modal__register');
  const closeButtons = document.querySelectorAll('.modal__close');
  const overlays = document.querySelectorAll('.modal__overlay');

  let backBtn = null;
  if (registerModal) {
    backBtn = registerModal.querySelector('#register-back');
  }

  if (loginBtn && loginModal) {
    loginBtn.addEventListener('click', () => {
      loginModal.classList.add('active');
      registerModal?.classList.remove('active');
    });
  }

  if (registerLink && registerModal) {
    registerLink.addEventListener('click', (e) => {
      e.preventDefault();
      loginModal?.classList.remove('active');
      registerModal.classList.add('active');
    });
  }

  if (backBtn && loginModal) {
    backBtn.addEventListener('click', () => {
      registerModal?.classList.remove('active');
      loginModal.classList.add('active');
    });
  }

  [...closeButtons, ...overlays].forEach((el) => {
    el.addEventListener('click', () => {
      loginModal?.classList.remove('active');
      registerModal?.classList.remove('active');
    });
  });
}





