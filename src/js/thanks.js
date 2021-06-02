    const openThanksModsllBtn = document.querySelector('[data-modal-open]');
    const closeThsnksModalBtn = document.querySelector('[data-modal-close]');
    const ThanksModal = document.querySelector('[data-modal]');
    const body = document.querySelector('.body-block');
  

  openThanksModsllBtn.addEventListener('click', toggleModal);
  closeThsnksModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    body.classList.toggle("modal-open");
    ThanksModal.classList.toggle('is-hidden');
  
  }
