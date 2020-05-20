"use strict";

/* Переменные */

const placesList = document.querySelector(".places-list");

const formCard = document.forms.new;
const formEdit = document.forms.edit;

const userInfoButton = document.querySelector(".user-info__button");
const userInfoEdit = document.querySelector(".user-info__edit");
const image = document.querySelector(".user-info__photo");

const button = document.querySelector(".popup__button");
const buttonEdit = document.querySelector(".popup__button_type_new");

const popupNew = document.querySelector("#popup-newCard");
const popupEdit = document.querySelector("#popup-edit");

const popupPicture = document.querySelector("#popup-picture");
const popupImage = document.querySelector("#popup-picture");
const picture = document.querySelector(".popup__content_image");

const { title, link } = formCard.elements;
const { nick, self } = formEdit.elements;

const name = document.querySelector(".user-info__name");
const job = document.querySelector(".user-info__job");

const errorNick = document.querySelector("#error-nick");
const errorSelf = document.querySelector("#error-self");

const validationErrors = {
  Empty: "Это обязательное поле",
  LongShort: "Должно быть от 2 до 30 символов",
  NoLink: "Здесь должна быть ссылка",
};

/* Классы - константы */

const api = new Api({
  baseUrl: "https://praktikum.tk/cohort10",
  headers: {
    authorization: "411b019a-4458-480f-895e-891e9804e5ef",
    "Content-Type": "application/json",
  },
});

const card = () => new Card();

const newCard = (name, link) => {
  const card = new Card();
  return card.create(name, link);
};

const cardList = new CardList(placesList, initialCards, newCard, api);
cardList.render();

const openPopupCard = new Popup(popupNew);
const openPopupProfile = new Popup(popupEdit);
const openPopupPicture = new PopupPicture(popupPicture, popupImage, picture);

const userInfo = new UserInfo(name, job, nick, self, api, image, popupEdit);
userInfo.setUserInfo();

const cardValidator = new FormValidator(formCard, validationErrors);
const profileValidator = new FormValidator(formEdit, validationErrors);

/* Функции */

function editProfile(event) {
  event.preventDefault();
  userInfo.sendForm();
}

function createCard(event) {
  event.preventDefault();
  cardList.addCard(title.value, link.value);

  formCard.reset();
  popupNew.classList.remove("popup_is-opened");

  button.classList.add("popup__button_disabled");
  button.setAttribute("disabled", true);
}

function resetError() {
  errorNick.textContent = "";
  errorSelf.textContent = "";

  nick.value = name.textContent;
  self.value = job.textContent;

  buttonEdit.classList.remove("popup__button_disabled");
  buttonEdit.removeAttribute("disabled");
}

/* Слушатели */

formCard.addEventListener("submit", createCard);
formEdit.addEventListener("submit", editProfile);

userInfoButton.addEventListener("click", openPopupCard.open);
userInfoEdit.addEventListener("click", openPopupProfile.open);
placesList.addEventListener("click", openPopupPicture.open);

userInfoEdit.addEventListener("click", resetError);

cardValidator.setEventListeners();
profileValidator.setEventListeners();
