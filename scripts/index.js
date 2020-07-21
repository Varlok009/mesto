const popupEdit = document.querySelector('.popup_type_edit-profile'); //сохранили форму редактирования
const popupAdd = document.querySelector('.popup_type_add-mesto'); //сохранили форму добавления
const popupImg = document.querySelector('.popup_type_open-img');
const editButton = document.querySelector('.profile__edit-button'); //сохранили кнопку редактирования
const popupForm = document.querySelector('popup popup_type_open-img');
const addButton = document.querySelector('.profile__add-button'); //сохранили кнопку добавления
const closeButtonEdit = popupEdit.querySelector('.popup__icon-close');
const closeButtonAdd = popupAdd.querySelector('.popup__icon-close');
const closeButtonImg = popupImg.querySelector('.popup__icon-close');
const likeButton = document.querySelector('.card__like');
const formEdit = popupEdit.querySelector('.popup__container');
const formAdd = popupAdd.querySelector('.popup__container');

let profileName = document.querySelector('.profile__name');
let profileTitle = document.querySelector('.profile__title');
let inputName = popupEdit.querySelector('.popup__input_destiny_name');
let inputProffession = popupEdit.querySelector('.popup__input_destiny_proffession');

let inputMesto = popupAdd.querySelector('.popup__input_destiny_mesto');
let inputUrl = popupAdd.querySelector('.popup__input_destiny_url');

const cardContainer = document.querySelector('.card-container');
const cardTemp = document.querySelector('#card').content;

let startCards = [
  {name: 'Туманность омаров', link: './images/photo_grid/lobster-nebula.jpg'},
  {name: 'Млечный путь', link: './images/photo_grid/milky-way.jpg'},
  {name: 'Созвездие Ориона', link: './images/photo_grid/orion.jpg'},
  {name: 'Солнечная система', link: './images/photo_grid/solar-system.jpg'},
  {name: 'Рассвет', link: './images/photo_grid/dawn.jpg'},
  {name: 'Кротовая нора', link: './images/photo_grid/wormhole.jpg'},
]

function addNewCard(obgCard) { // Шаблон создания новой карточки
  const newCard = cardTemp.cloneNode(true);
  newCard.querySelector('.card__photo').src = obgCard.link;
  newCard.querySelector('.card__photo').alt = obgCard.name;
  newCard.querySelector('.card__title').textContent = obgCard.name;

  const like = newCard.querySelector('.card__like'); // Взаимодействие с лайком карточки
  like.addEventListener('click', (evt) => {
    evt.target.classList.toggle('card__like_active');
  });

  const deleteButton = newCard.querySelector('.card__delete'); // Взаимодействие с удалением карточки
  deleteButton.addEventListener('click', (evt) => {
  evt.target.closest('.card').remove();
  });

  const img = newCard.querySelector('.card__photo'); // Открытие картинки
  img.addEventListener('click', (evt) => {
    popupImg.querySelector('.popup__img').src = obgCard.link;
    popupImg.querySelector('.popup__img').alt = obgCard.name;
    popupImg.querySelector('.popup__title').textContent = obgCard.name;
    visionPopup(popupImg);
  });

  cardContainer.prepend(newCard);
}

function addStartCards(startCards) { // Загрузка стартовых карточек
  startCards.forEach(function(card) {
    addNewCard(card)
  });
}

function visionPopup(popup) { //функция замены модификатора (display: flex)
  popup.classList.toggle('popup_open');
  if (popupEdit.classList.contains('popup_open')){ //Условие для попапа редактирования профиля
    inputName.value = profileName.textContent;
    inputProffession.value = profileTitle.textContent;
  }
  if (popupAdd.classList.contains('popup_open')){ //условие для попапа добавления карточки
    inputMesto.value = '';
    inputUrl.value = '';
  }
  // if (popupImg.classList.contains('popup_open')){ //условие для попапа картинки
  //   const popupForm = document.querySelector('popup popup_type_open-img');

  // }
}

function saveEdit(evt) { // Сохранение изменений профиля
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileTitle.textContent = inputProffession.value;
  visionPopup(popupEdit);
}

function saveAdd(evt) { // Добавление новой карточки, по введенным данным
  evt.preventDefault();
  const newMesto = {};
  newMesto.name = inputMesto.value;
  newMesto.link = inputUrl.value;
  addNewCard(newMesto)
  visionPopup(popupAdd);
}

addStartCards(startCards);

editButton.addEventListener('click', () => visionPopup(popupEdit)); //запускаем функцию по клику на кнопку редактирования
addButton.addEventListener('click', () => visionPopup(popupAdd)); 
closeButtonEdit.addEventListener('click', () => visionPopup(popupEdit)); //запускаем функцию по клику на кнопку закрытия формы
closeButtonAdd.addEventListener('click', () => visionPopup(popupAdd));
closeButtonImg.addEventListener('click', () => visionPopup(popupImg));
formEdit.addEventListener('submit', saveEdit);
formAdd.addEventListener('submit', saveAdd);

