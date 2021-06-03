import IMask from 'imask';

var phoneMask = IMask(document.getElementById('phone-mask'), {
  mask: '+{38}(000)000-00-00',
});
