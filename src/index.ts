class MyElement extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    const container = document.createElement("div");
    container.textContent = "Hello, Oop!";
    shadow.appendChild(container);
  }
}

customElements.define("my-element", MyElement);
