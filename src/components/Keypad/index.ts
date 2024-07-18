import { css } from "helpers/html";

import Styling from "services/styling";
import ElementBuilder from "services/builder/element";

const styling = new Styling();

enum ClassNames {
  root = "root",
}

styling.setStyle(css`
  .${ClassNames.root} {
    width: 98.5%;
    height: 200px;
    border: 1px solid var(--gS5jXb);
    border-radius: 8px;
    margin: auto;
    margin-top: 16px;
  }
`);

const style = styling.getStyle();

class Keypad extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" }).appendChild(
      new ElementBuilder("div")
        .setClass(ClassNames.root)
        .appendChild(style)
        .getElement()
    );
  }
}

export default Keypad;
