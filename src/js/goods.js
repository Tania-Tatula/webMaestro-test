const goodsCard = document.querySelectorAll('.goods-card');

goodsCard.forEach(el => el.addEventListener('click', onOpenInfo));

function onOpenInfo(e) {
  const goodsImg = this.querySelector('.goods-img-url');
  const goodsText = this.querySelector('.goods-info');
  const goodsButton = this.querySelector('.goods-title_button');

  if (e.target == goodsButton) {
    if (goodsImg.classList.contains('info--oppen')) {
      goodsText.classList.remove('info--oppen');
      goodsImg.classList.remove('info--oppen');
    } else {
      goodsText.classList.add('info--oppen');
      goodsImg.classList.add('info--oppen');
    }
  }
}
