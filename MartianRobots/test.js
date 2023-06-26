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
3 3 N LOST
2 3 S`,
}

describe('Martian Robots', function () {
  it('should convert text to input', function () {
    const martianRobot = new MartianRobot()
    const actualOutput = martianRobot.convertTextToInput(testCase.input)

    expect(actualOutput).toEqual({
      'gridSizeX': 5,
      'gridSizeY': 3,
      'robots': [{ 'orientation': 'E', 'x': 1, 'y': 1 }, { 'orientation': 'N', 'x': 3, 'y': 2 }, {
        'orientation': 'W',
        'x': 0,
        'y': 3
      }]
    })
  })
})
