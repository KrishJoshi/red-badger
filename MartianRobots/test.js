import MartianRobot from '.'

const testCase = {
  input: `5 3
1 1 E
RFRFRFRF

3 2 N
FRRFLLFFRRFLL

0 3 W
LLFFFLFLFL`,
  expectedOutput: `1 1 E
3 3 N
2 4 S`,
}

describe('Martian Robots', function () {
  it('should convert text to input', function () {
    const martianRobot = new MartianRobot(testCase.input)
    expect(martianRobot.gridSizeX).toEqual(5)
    expect(martianRobot.gridSizeY).toEqual(3)
    expect(martianRobot.robots.length).toBe(3)
  })

  it('should convert state to output string', function () {
    const martianRobot = new MartianRobot(testCase.input)
    expect(martianRobot.getRobotState()).toEqual(testCase.expectedOutput)
  })
})
