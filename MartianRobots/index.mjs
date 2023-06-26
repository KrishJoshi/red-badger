export default class MartianRobots {
  constructor (input) {
    if(input) {
      const { gridSizeX, gridSizeY, robots } = this.convertTextToInput(input)
      this.gridSizeX = gridSizeX
      this.gridSizeY = gridSizeY
      this.robots = robots
    }
  }
  convertTextToInput (input) {
    // split each line and remove empty line
    const lines = input.split('\n').filter((line) => line !== '')

    const [gridSizeX, gridSizeY] = lines[0].split(' ').map((num) => parseInt(num))
    const robots = []

    console.log(lines)
    for (let i = 1; i < lines.length; i += 2) {
      const [x, y, orientation] = lines[i].split(' ')
      robots.push({
        x: Number(x),
        y: Number(y),
        orientation,
      })
    }

    return {
      gridSizeX,
      gridSizeY,
      robots,
    }
  }
}
