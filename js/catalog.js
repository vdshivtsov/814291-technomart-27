let cartLink = document.querySelector('.goods-actions__link_cart');
cartLink.addEventListener('click', function (event) {
  event.preventDefault();
  popupAddCart = document.querySelector('.popup-add-cart');
  popupAddCart.style.display = 'block';
  let closeButton = document.querySelector('.popup-add-cart__close-button');
  closeButton.addEventListener('click', function() {
    popupAddCart.style.display = 'none';
  });
  let continueButton = document.querySelector('.popup-add-cart__button_continue');
  continueButton.addEventListener('click', function() {
    popupAddCart.style.display = 'none';
  });
});
