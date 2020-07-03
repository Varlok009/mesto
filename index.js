// Реализация откратия окна редактирования
const popupEdit = document.querySelector('.popup'); //сохранили форму
const editButton = document.querySelector('.profile__edit-button'); //сохранили кнопку редактирования
const closeButton = document.querySelector('.popup__icon-close');
const form = document.querySelector('.popup__container');

let profileName = document.querySelector('.profile__name');
let profileTitle = document.querySelector('.profile__title');
let inputName = popupEdit.querySelector('.popup__input_destiny_name');
let inputProffession = popupEdit.querySelector('.popup__input_destiny_proffession');

editButton.addEventListener('click', visionEditForm); //запускаем функцию по клику на кнопку редактирования
closeButton.addEventListener('click', visionEditForm);

function visionEditForm(evt) { //функция замены модификатора (display: none)
  inputName.value = profileName.textContent;
  inputProffession.value = profileTitle.textContent;
  popupEdit.classList.toggle('popup_close');
  evt.preventDefault();
}

// Сохранение изменений
form.addEventListener('submit', saveEdit);

function saveEdit(evt) { 
   if (inputName.value !=='' && inputProffession.value !== '') {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileTitle.textContent = inputProffession.value;
    visionEditForm(evt);
  } else {
      alert('Для продолжения заполните обязательные поля');
      evt.preventDefault();
  }

}