class Keypad extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    const container = document.createElement("div");
    container.textContent = "Keypad";

    shadow.appendChild(container);
  }
}

export default Keypad;
