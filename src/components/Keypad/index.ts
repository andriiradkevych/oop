import { css } from "helpers/html";

import Styling from "components/Styling";

const styling = new Styling();

enum ClassNames {
  root = "root",
}

styling.setStyle(css`
  .${ClassNames.root} {
    width: 98.5%;
    height: 200px;
    border: 1px solid var(--gS5jXb);
    box-sizing: border-box;
    border-radius: 8px;
    margin: auto;
    margin-top: 16px;
  }
`);

const style = styling.getStyle();

class Keypad extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    const container = document.createElement("div");

    container.classList.add(ClassNames.root);

    container.appendChild(style);

    shadow.appendChild(container);
  }
}

export default Keypad;
