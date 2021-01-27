let map = document.querySelector('.contacts__img-link');
map.addEventListener('click', function (event) {
  event.preventDefault();
  popupMap = document.querySelector('.popup-map');
  popupMap.style.display = 'block';
  let closeButton = document.querySelector('.popup-map__close-button');
  closeButton.addEventListener('click', function() {
    popupMap.style.display = 'none';
  });
});

let writeUsButton = document.querySelector('.contacts__write-us');
writeUsButton.addEventListener('click', function (event) {
  event.preventDefault();
  popupWriteUs = document.querySelector('.popup-write-us');
  popupWriteUs.style.display = 'block';
  let closeButton = document.querySelector('.popup-write-us__close-button');
  closeButton.addEventListener('click', function() {
    popupWriteUs.style.display = 'none';
  });
});
