import Robot from '../Robot/index.mjs'

export default class MartianRobots {
  constructor (input) {
    this.convertTextToInput(input)
  }

  convertTextToInput (input) {
    // split each line and remove empty line
    const lines = input.split('\n').filter((line) => line !== '')

    const [gridSizeX, gridSizeY] = lines[0].split(' ').map((num) => parseInt(num))
    const robots = []

    for (let i = 1; i < lines.length; i += 2) {
      const [x, y, orientation] = lines[i].split(' ')
      const instructions = lines[i + 1];
      const robot = new Robot({
        x: Number(x),
        y: Number(y),
        orientation,
      })
      robot.processInstructions(instructions)
      robots.push(robot)
    }

    this.gridSizeX = gridSizeX
    this.gridSizeY = gridSizeY
    this.robots = robots
  }



  getRobotState () {
    return this.robots.map((robot) => (`${robot.x} ${robot.y} ${robot.orientation}`)).join('\n')
  }

  getRobotsState
}
