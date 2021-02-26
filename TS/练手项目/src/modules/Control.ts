import Food from "./Food";
import Score from "./Score";
import Snake from "./Snake";

/**
 * 控制类
 */
export default class Control {
  food!: Food;
  score!: Score;
  snake!: Snake;
  direction!: string;
  isLive!: boolean;
  timer!: number;
  constructor() {
    this.init();
  }
  init = () => {
    clearTimeout(this.timer);
    this.food = new Food();
    this.score = new Score(10, 2);
    this.snake = new Snake(0, 0);
    this.direction = "Right";
    this.isLive = true;
    this.food.changeSite();
    this.run();
    document.addEventListener("keydown", this.keydownHandler);
  };
  /**
   * ArrowLeft || Left
   * ArrowUp || Up
   * ArrowRight || Right
   * ArrowDown || Down
   */
  keydownHandler = (event: KeyboardEvent) => {
    const { key } = event;
    switch (key) {
      case "ArrowLeft":
      case "Left":
        if (this.direction === "ArrowRight" || this.direction === "Right") {
          return;
        }
        break;
      case "ArrowRight":
      case "Right":
        if (this.direction === "ArrowLeft" || this.direction === "Left") {
          return;
        }
        break;
      case "ArrowUp":
      case "Up":
        if (this.direction === "ArrowDown" || this.direction === "Down") {
          return;
        }
        break;
      case "ArrowDown":
      case "Down":
        if (this.direction === "ArrowUp" || this.direction === "Up") {
          return;
        }
        break;
      default:
        break;
    }
    this.direction = key;
  };
  run = () => {
    let x = this.snake.x;
    let y = this.snake.y;
    switch (this.direction) {
      case "ArrowLeft":
      case "Left":
        x -= 10;
        break;
      case "ArrowUp":
      case "Up":
        y -= 10;
        break;
      case "ArrowRight":
      case "Right":
        x += 10;
        break;
      case "ArrowDown":
      case "Down":
        y += 10;
        break;

      default:
        break;
    }
    this.checkEat();
    try {
      this.snake.moveBody(x, y);
    } catch (error) {
      this.isLive = false;
      alert("游戏结束! 是否重新开始？");
    }
    if (this.isLive) {
      this.timer = window.setTimeout(
        this.run,
        300 - (this.score.level - 1) * 30
      );
    } else {
      this.init();
    }
  };
  checkEat = () => {
    const isEat = this.snake.x === this.food.x && this.snake.y === this.food.y;
    if (isEat) {
      this.score.add();
      this.food.changeSite();
      this.snake.addBody();
    }
  };
}
