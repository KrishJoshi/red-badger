import Robot from '../Robot/index.mjs';

export default class MartianRobots {
  constructor(input) {
    this.convertTextToInput(input);
  }

  convertTextToInput(input) {
    this.lostRobots = [];

    // split each line and remove empty line
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
        const currentPosX = robot.x;
        const currentPosY = robot.y;
        robot.moveForward();

        if (this.hasRobotFallenOff(robot)) {
          robot.x = currentPosX;
          robot.y = currentPosY;
          if (!this.isRobotLost(robot.x, robot.y)) {
            robot.isLost = true;
            this.lostRobots.push(robot);
            return false
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

  // robot is lost if it has fallen off and there is already a lost robot at that position
  isRobotLost(x, y) {
    return this.lostRobots.some((robot) => robot.x === x && robot.y === y);
  }
}
