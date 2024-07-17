import { css } from "helpers/html";

import Styling from "components/Styling";

const styling = new Styling();

enum ClassNames {
  border = "border",
  input = "input",
}

styling.setStyle(css`
  .${ClassNames.border} {
    width: 98.5%;
    height: 72px;
    border: 1px solid var(--gS5jXb);
    border-radius: 8px;
    margin: auto;
    padding: 4px;
    box-sizing: border-box;
  }
  .${ClassNames.input} {
    width: 100%;
    height: 100%;
    border: none;
  }
`);

const style = styling.getStyle();

class Screen extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    const container = document.createElement("div");
    const input = document.createElement("input");

    container.classList.add(ClassNames.border);
    input.classList.add(ClassNames.input);

    container.appendChild(style);
    container.appendChild(input);

    shadow.appendChild(container);
  }
}

export default Screen;
