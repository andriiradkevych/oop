import { HTMLTag } from "enums/tag";
import { Events } from "enums/events";

interface IElementBulder {
  element: Element;
  setClass: (className: string) => void;
  appendChild: (style: Element) => void;
  getElement: () => Element;
  attachEventListener: (
    eventName: Events,
    callback: (event: Event) => void
  ) => void;
}

class ElementBuilder implements IElementBulder {
  element: Element;

  constructor(tagName: HTMLTag) {
    this.element = document.createElement(tagName);
  }

  setClass(className: string) {
    this.element.classList.add(className);
    return this;
  }
  appendChild(el: Element | Element[]) {
    if (Array.isArray(el)) {
      el.forEach((element) => {
        this.element.appendChild(element);
      });
    } else {
      this.element.appendChild(el);
    }

    return this;
  }
  getElement() {
    return this.element;
  }
  attachEventListener(eventName: Events, callback: (event: Event) => void) {
    this.element.addEventListener(eventName, callback);
    return this;
  }
}

export default ElementBuilder;
