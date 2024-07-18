import { HTMLTag } from "enums/tag";
import { Events } from "enums/events";

import { css } from "helpers/html";

import Styling from "services/styling";
import ElementBuilder from "services/builder/element";
import ELementListBuilder from "services/builder/list";

const styling = new Styling();

enum ClassNames {
  root = "root",
  list = "list",
  button = "button",
}

styling.setStyle(css`
  .${ClassNames.button} {
    background: var(--g23A23);
    min-height: 60px;
    cursor: pointer;
    border: none;
  }
  .${ClassNames.list} {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-row-gap: 16px;
    grid-column-gap: 16px;
  }
  .${ClassNames.root} {
    width: 98.5%;
    border-radius: 8px;
    margin: auto;
    margin-top: 16px;
  }
`);

const style = styling.getStyle();

class Keypad extends HTMLElement {
  constructor() {
    super();
    const actionButtons = ["+", "-", "/", "*", ".", "="];
    const numberButtons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    const actionsButtonsList = new ELementListBuilder(
      actionButtons,
      HTMLTag.button
    )
      .setClass(ClassNames.button)
      .getList();
    const numberButtonsList = new ELementListBuilder<number[]>(
      numberButtons,
      HTMLTag.button
    )
      .setClass(ClassNames.button)
      .getList();

    this.attachShadow({ mode: "open" }).appendChild(
      new ElementBuilder(HTMLTag.div)
        .setClass(ClassNames.root)
        .appendChild(style)
        .appendChild(
          new ElementBuilder(HTMLTag.div)
            .attachEventListener(Events.click, this.onClick)
            .setClass(ClassNames.list)
            .appendChild(actionsButtonsList)
            .appendChild(numberButtonsList)
            .getElement()
        )
        .getElement()
    );
  }
  onClick(event: Event) {
    console.log(event.target, "event");
  }
}

export default Keypad;
