interface IStyling {
  style: HTMLStyleElement;
  setStyle: (styles: string) => void;
  getStyle: () => HTMLStyleElement;
}

class Styling implements IStyling {
  style: HTMLStyleElement;

  constructor() {
    this.style = document.createElement("style");
  }

  setStyle(styles: string) {
    const { textContent } = this.style;
    this.style.textContent = `${textContent}${styles}`;
  }
  getStyle() {
    return this.style;
  }
}

export default Styling;
