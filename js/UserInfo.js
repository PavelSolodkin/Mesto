class UserInfo {
  constructor(name, job, nick, self, api, image, popupEdit) {
    this.name = name;
    this.job = job;
    this.nick = nick;
    this.self = self;
    this.api = api;
    this.image = image;
    this.popupEdit = popupEdit;
  }

  setUserInfo() {
    this.api
      .getUserInfo()
      .then((res) => {
        this.name.textContent = res.name;
        this.job.textContent = res.about;
        this.image.style.backgroundImage = `url("${res.avatar}")`;
      })
      .catch((err) => console.log(err));
  }

  // Можно лучше
  // Этот класс все же не должен закрытие окон обрабатывать, и уж тем более
  // так хардкодно. Надо хотя бы в конструктор передать метод закрытия окна конкретного экземпляра попапа.
  // А вы передаете элемент и руками с него стили начинаете убирать.
  sendForm() {
    this.api
      .sendData(this.nick.value, this.self.value)
      .then((res) => {
        this.updateUserInfo(res);
        this.popupEdit.classList.remove("popup_is-opened");
      })
      .catch((err) => console.log(err));
  }

  updateUserInfo(res) {
    this.name.textContent = res.name;
    this.job.textContent = res.about;
  }
}
