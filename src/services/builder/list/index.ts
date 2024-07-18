import { HTMLTag } from "enums/tag";

interface IElementListBuilder {
  list: Element[];
}

class ELementListBuilder<T extends (string | number)[]>
  implements IElementListBuilder
{
  list: Element[];

  constructor(arr: T, tagName: HTMLTag) {
    this.list = arr.map((value) => {
      const element = document.createElement(tagName);
      element.textContent = String(value);

      return element;
    });
  }

  setClass(className: string) {
    this.list.forEach((el) => {
      el.classList.add(className);
    });
    return this;
  }

  getList() {
    return this.list;
  }
}

export default ELementListBuilder;
