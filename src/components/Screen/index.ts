import { HTMLTag } from "enums/tag";

import { css } from "helpers/html";

import Styling from "services/styling";
import ElementBuilder from "services/builder/element";

const styling = new Styling();

enum ClassNames {
  root = "root",
  input = "input",
}

styling.setStyle(css`
  .${ClassNames.root} {
    width: 98.5%;
    margin: auto;
  }
  .${ClassNames.input} {
    height: 72px;
    border: 1px solid var(--gS5jXb);
    border-radius: 8px;
    padding: 4px;
    width: inherit;
    text-align: right;
    padding-right: 16px;
    font-size: 2rem;
  }
`);

const style = styling.getStyle();

class Screen extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" }).appendChild(
      new ElementBuilder(HTMLTag.div)
        .setClass(ClassNames.root)
        .appendChild(style)
        .appendChild(
          new ElementBuilder(HTMLTag.input)
            .setClass(ClassNames.input)
            .getElement()
        )
        .getElement()
    );
  }
}

export default Screen;
