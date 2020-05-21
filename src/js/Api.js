export default class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.key = options.headers.authorization;
    this.options = options;
    this.headers = options.headers;
  }

  getUserInfo() {
    return fetch(`${this.baseUrl}/users/me`, {
      headers: this.headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res);
      })
      .catch((err) => Promise.reject(new Error(`Ошибка: ${err.message}`)));
  }

  getInitialCards() {
    return fetch(`${this.baseUrl}/cards`, {
      headers: this.headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res);
      })
      .catch((err) => Promise.reject(new Error(`Ошибка: ${err.message}`)));
  }

  sendData(name, about) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: this.key,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res);
      })
      .catch((err) => Promise.reject(new Error(`Ошибка: ${err.message}`)));
  }
}
