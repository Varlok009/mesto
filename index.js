// Реализация откратия окна редактирования
const popupEdit = document.querySelector('.popup'); //сохранили форму
const editButton = document.querySelector('.profile__edit-button'); //сохранили кнопку редактирования
const closeButton = document.querySelector('.popup__icon-close');

editButton.addEventListener('click', visionEditForm); //запускаем функцию по клику на кнопку редактирования
closeButton.addEventListener('click', visionEditForm);

function visionEditForm() { //функция замены модификатора (display: none)
  popupEdit.classList.toggle('popup_close');
}







// console.log();