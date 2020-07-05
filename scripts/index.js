// Реализация откратия окна редактирования
const popupEdit = document.querySelector('.popup'); //сохранили форму
const editButton = document.querySelector('.profile__edit-button'); //сохранили кнопку редактирования
const closeButton = document.querySelector('.popup__icon-close');
const form = document.querySelector('.popup__container');

let profileName = document.querySelector('.profile__name');
let profileTitle = document.querySelector('.profile__title');
let inputName = popupEdit.querySelector('.popup__input_destiny_name');
let inputProffession = popupEdit.querySelector('.popup__input_destiny_proffession');


// Только с помощью наставника понял в чем же проблема, когда у меня спросили:
// "а сколько у тебя калбэков" и тут я как говорится "кааак понял" :D
// получается раньше и при закрытии попапа и при сохранении у меня лишний раз
// перезаписывались данные в инпуты, что как минимум не логично))
// спасибо, на практике осознал о том, что писали перед проектной в теме
// про дебагинг: сложнее всего искать логические ошибки, которые 
// не видно на пикселях и в консоле))

function visionEditForm(evt) { //функция замены модификатора (display: flex)
  popupEdit.classList.toggle('popup_open');
  if (popupEdit.classList.contains('popup_open')){
    inputName.value = profileName.textContent;
    inputProffession.value = profileTitle.textContent;
  }
}

// Сохранение изменений
function saveEdit(evt) { 
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileTitle.textContent = inputProffession.value;
    visionEditForm(evt);
}

editButton.addEventListener('click', visionEditForm); //запускаем функцию по клику на кнопку редактирования
closeButton.addEventListener('click', visionEditForm); //запускаем функцию по клику на кнопку закрытия формы
form.addEventListener('submit', saveEdit);