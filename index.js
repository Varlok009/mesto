// Реализация откратия окна редактирования
const popupEdit = document.querySelector('.popup'); //сохранили форму
const editButton = document.querySelector('.profile__edit-button'); //сохранили кнопку редактирования
const closeButton = document.querySelector('.popup__icon-close');
const form = document.querySelector('.popup__container');

let profileName = document.querySelector('.profile__name');
let profileTitle = document.querySelector('.profile__title');
let inputName = popupEdit.querySelector('.popup__input_destiny_name');
let inputProffession = popupEdit.querySelector('.popup__input_destiny_proffession');

//синхронизируем данные по имени и профессии на странице и в форме
inputName.value = profileName.textContent;
inputProffession.value = profileTitle.textContent;

editButton.addEventListener('click', visionEditForm); //запускаем функцию по клику на кнопку редактирования
closeButton.addEventListener('click', visionEditForm);

function visionEditForm(evt) { //функция замены модификатора (display: none)
  popupEdit.classList.toggle('popup_close');
  evt.preventDefault();
}

// Сохранение изменений
form.addEventListener('submit', saveEdit);

function saveEdit(evt) { 
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileTitle.textContent = inputProffession.value;
  visionEditForm(evt);
}