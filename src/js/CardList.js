export default class CardList {
  constructor(container, array, func, api) {
    this.container = container;
    this.array = array;
    this.func = func;
    this.api = api;
  }

  addCard(title, link) {
    const template = this.func(title, link);
    this.container.appendChild(template);
  }

  render() {
    this.api
      .getInitialCards()
      .then((res) => {
        res.forEach((card) => {
          this.addCard(card.name, card.link);
        });
      })
      .catch((err) => console.log(err));
  }
}
