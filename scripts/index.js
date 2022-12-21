const container = document.querySelector('.person__container');
const popupButton = container.querySelector('.person__button');
const popupModal = document.querySelector('.popup');
const popupContainer = popupModal.querySelector('.popup__container');
const popupClose = popupModal.querySelector('.popup__button-close');


let formElement = popupModal.querySelector('.popup__form');

let nameInput = popupModal.querySelector('.popup__input_type_name');
let jobInput = popupModal.querySelector('.popup__input_type_job');

let personTitle = container.querySelector('.person__title');
let personSubtitle = container.querySelector('.person__subtitle');


function handleFormSubmit (evt) {
    evt.preventDefault();
    personTitle.textContent = nameInput.value;
    personSubtitle.textContent = jobInput.value;
    togglePopup();
}

formElement.addEventListener('submit', handleFormSubmit);


function togglePopup() {
    popupModal.classList.toggle('popup_opened');

    nameInput.value = personTitle.textContent;
    jobInput.value = personSubtitle.textContent;
}


popupButton.addEventListener('click', togglePopup);
popupClose.addEventListener('click', togglePopup);


