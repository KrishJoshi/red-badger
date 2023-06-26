const testCase =
  {
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
  it('should return the expected result', function () {
    expect(martianRobots(testCase.input)).toEqual(testCase.expectedOutput)
  })
})
