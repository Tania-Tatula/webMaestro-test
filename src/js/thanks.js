  const refs = {
    openThanksModsllBtn: document.querySelector('[data-modal-open]'),
    closeThsnksModalBtn: document.querySelector('[data-modal-close]'),
    ThanksModal: document.querySelector('[data-modal]'),
  };

  refs.openThanksModsllBtn.addEventListener('click', toggleModal);
  refs.closeThsnksModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.ThanksModal.classList.toggle('is-hidden');
  
  }