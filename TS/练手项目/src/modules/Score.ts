/**
 * 计分类
 */
export default class Score {
  score: number;
  level: number;
  scoreElement: HTMLElement;
  levelElement: HTMLElement;
  maxLevel: number; // 最大等级
  upScore: number; // 每升一级所需的分数
  constructor(maxLevel: number = 10, upScore: number = 10) {
    this.score = 0;
    this.level = 1;
    this.scoreElement = document.getElementById("score")!;
    this.levelElement = document.getElementById("level")!;
    this.maxLevel = maxLevel;
    this.upScore = upScore;
  }
  add = () => {
    this.score++;
    this.scoreElement.innerText = `${this.score}`;
    if (this.score % this.upScore === 0) {
      this.levelUp();
    }
  };
  reset = () => {
    this.score = 0;
    this.scoreElement.innerText = `${this.score}`;
  };
  levelUp = () => {
    if (this.level < this.maxLevel) {
      this.level++;
      this.levelElement.innerText = `${this.level}`;
    }
  };
}
