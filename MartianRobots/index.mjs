import Robot from '../Robot/index.mjs';

export default class MartianRobots {
  constructor(input) {
    this.convertTextToInput(input);
  }

  convertTextToInput(input) {
    this.lostRobots = [];

    // Split each line and remove empty lines
    const lines = input.split('\n').filter((line) => line !== '');

    const [gridSizeX, gridSizeY] = lines[0].split(' ').map((num) => parseInt(num));
    this.gridSizeX = gridSizeX;
    this.gridSizeY = gridSizeY;

    const robots = [];

    for (let i = 1; i < lines.length; i += 2) {
      const [x, y, orientation] = lines[i].split(' ');
      const instructions = lines[i + 1];
      let robot = new Robot({
        x: Number(x),
        y: Number(y),
        orientation,
      });
      robot = this.processInstructions(robot, instructions);
      robots.push(robot);
    }

    this.robots = robots;
  }

  processInstructions(robot, instructions) {
    instructions.split('').every((instruction) => {
      if (instruction === 'F') {
        const posBeforeMove = { x: robot.x, y: robot.y };
        robot.moveForward();
        if (this.hasRobotFallenOff(robot)) {
          robot.x = posBeforeMove.x;
          robot.y = posBeforeMove.y;
          if (!this.isPosScented(robot.x, robot.y)) {
            robot.isLost = true;
            this.lostRobots.push(robot);
            return false; // robot already lost, no need to continue
          }
        }
      } else if (instruction === 'L') {
        robot.turnLeft();
      } else if (instruction === 'R') {
        robot.turnRight();
      }
      return true;
    });
    return robot;
  }

  getRobotState() {
    return this.robots
      .map((robot) => `${robot.x} ${robot.y} ${robot.orientation}${robot.isLost ? ' LOST' : ''}`)
      .join('\n');
  }

  hasRobotFallenOff(robot) {
    return (
      robot.x < 0 || robot.x > this.gridSizeX || robot.y < 0 || robot.y > this.gridSizeY
    );
  }

  // a position is scented if there is a lost robot at that position
  isPosScented(x, y) {
    return this.lostRobots.some((robot) => robot.x === x && robot.y === y);
  }
}
