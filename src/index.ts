import Keypad from "components/Keypad";

class Calculator extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    const container = document.createElement("div");
    container.textContent = "Calculator";
    shadow.appendChild(container);
  }
}

customElements.define("calculator-element", Calculator);
customElements.define("keypad-element", Keypad);
