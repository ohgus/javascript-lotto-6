import Controller from "./controller/Controller.js";

class App {
  #controller;

  constructor() {
    this.#controller = new Controller();
  }
  async play() {
    this.#controller.play();
  }
}

export default App;
