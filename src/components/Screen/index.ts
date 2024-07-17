import { css } from "helpers/html";

import Styling from "services/styling";
import ElementBuilder from "services/builder/element";

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

    this.attachShadow({ mode: "open" }).appendChild(
      new ElementBuilder("div")
        .setClass(ClassNames.border)
        .appendChild(style)
        .appendChild(
          new ElementBuilder("input").setClass(ClassNames.input).getElement()
        )
        .getElement()
    );
  }
}

export default Screen;
