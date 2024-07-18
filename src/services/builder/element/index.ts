import { HTMLTag } from "enums/tag";

interface IElementBulder {
  element: Element;
  setClass: (className: string) => void;
  appendChild: (style: Element) => void;
  getElement: () => Element;
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
}

export default ElementBuilder;
