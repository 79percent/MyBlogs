/**
 * 蛇类
 */
export default class Snake {
  snakeContent: HTMLElement;
  head: HTMLElement;
  bodies: HTMLCollection;
  constructor(startLeft: number = 0, startTop: number = 0) {
    this.snakeContent = document.getElementById("snake")!;
    this.snakeContent.innerHTML = "<div></div>";
    this.head = document.querySelector("#snake > div") as HTMLElement;
    this.bodies = this.snakeContent.getElementsByTagName("div");
    this.head.style.left = `${startLeft}px`;
    this.head.style.top = `${startTop}px`;
  }
  get x() {
    return this.head.offsetLeft;
  }
  get y() {
    return this.head.offsetTop;
  }
  set x(value: number) {
    if (this.x === value) {
      return;
    }
    this.head.style.left = value + "px";
  }
  set y(value: number) {
    if (this.y === value) {
      return;
    }
    this.head.style.top = value + "px";
  }
  addBody = () => {
    this.snakeContent.insertAdjacentHTML("beforeend", "<div></div>");
  };
  moveBody = (x: number, y: number) => {
    if (x < 0 || x > 290 || y < 0 || y > 290) {
      throw new Error("撞墙了");
    }
    for (let index = this.bodies.length - 1; index > 0; index--) {
      const element = this.bodies[index] as HTMLElement;
      const elementBefore = this.bodies[index - 1];
      const left = (elementBefore as HTMLElement).offsetLeft;
      const top = (elementBefore as HTMLElement).offsetTop;
      element.style.left = `${left}px`;
      element.style.top = `${top}px`;
      if (x === left && y === top) {
        throw new Error("撞到自己了");
      }
    }
    this.x = x;
    this.y = y;
  };
}
