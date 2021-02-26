/**
 * 食物类
 */
export default class Food {
  element: HTMLElement;
  constructor() {
    this.element = document.getElementById("food")!;
  }
  get x() {
    return this.element?.offsetLeft;
  }
  get y() {
    return this.element?.offsetTop;
  }
  /**
   * 随机生成位置
   */
  changeSite = () => {
    const num1 = Math.round(Math.random() * 29);
    const num2 = Math.round(Math.random() * 29);
    const newLeft = num1 * 10;
    const newTop = num2 * 10;
    this.element.style.left = `${newLeft}px`;
    this.element.style.top = `${newTop}px`;
  };
}
