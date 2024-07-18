import "./styles.css";

import Keypad from "components/Keypad";
import Screen from "components/Screen";

class Calculator extends HTMLElement {}

if ("customElements" in window) {
  customElements.define("calculator-el", Calculator);
  customElements.define("keypad-el", Keypad);
  customElements.define("screen-el", Screen);
}
