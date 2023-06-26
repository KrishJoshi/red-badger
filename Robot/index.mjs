export default class Robot {
  constructor({ x, y, orientation }) {
    this.x = x;
    this.y = y;
    this.orientation = orientation;
    this.isLost = false;
  }

  moveForward() {
    const movements = {
      N: { x: 0, y: 1 },
      S: { x: 0, y: -1 },
      E: { x: 1, y: 0 },
      W: { x: -1, y: 0 },
    };
    const { x, y } = movements[this.orientation];
    this.x += x;
    this.y += y;
  }

  turnLeft() {
    const leftTurns = {
      N: 'W',
      W: 'S',
      S: 'E',
      E: 'N',
    };
    this.orientation = leftTurns[this.orientation];
  }

  turnRight() {
    const rightTurns = {
      N: 'E',
      E: 'S',
      S: 'W',
      W: 'N',
    };
    this.orientation = rightTurns[this.orientation];
  }

  processInstructions (instructions) {

  }
}
