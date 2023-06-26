import Robot from '.'

describe('Robot', () => {
  describe('moveForward', () => {
    const testCases = [
      { startX: 0, startY: 0, startOrientation: 'N', expectedX: 0, expectedY: 1 },
      { startX: 0, startY: 0, startOrientation: 'S', expectedX: 0, expectedY: -1 },
      { startX: 0, startY: 0, startOrientation: 'E', expectedX: 1, expectedY: 0 },
      { startX: 0, startY: 0, startOrientation: 'W', expectedX: -1, expectedY: 0 },
    ]

    testCases.forEach(({ startX, startY, startOrientation, expectedX, expectedY }) => {
      it(`should correctly update the coordinates when facing ${startOrientation}`, () => {
        const robot = new Robot({ x: startX, y: startY, orientation: startOrientation })
        robot.moveForward()
        expect(robot.x).toBe(expectedX)
        expect(robot.y).toBe(expectedY)
      })
    })
  })

  describe('turnLeft', () => {
    const testCases = [
      { startOrientation: 'N', expectedOrientation: 'W' },
      { startOrientation: 'W', expectedOrientation: 'S' },
      { startOrientation: 'S', expectedOrientation: 'E' },
      { startOrientation: 'E', expectedOrientation: 'N' },
    ]

    testCases.forEach(({ startOrientation, expectedOrientation }) => {
      it(`should correctly update the orientation when turning left from ${startOrientation}`, () => {
        const robot = new Robot({ x: 0, y: 0, orientation: startOrientation })
        robot.turnLeft()
        expect(robot.orientation).toBe(expectedOrientation)
      })
    })
  })

  describe('turnRight', () => {
    const testCases = [
      { startOrientation: 'N', expectedOrientation: 'E' },
      { startOrientation: 'E', expectedOrientation: 'S' },
      { startOrientation: 'S', expectedOrientation: 'W' },
      { startOrientation: 'W', expectedOrientation: 'N' },
    ]

    testCases.forEach(({ startOrientation, expectedOrientation }) => {
      it(`should correctly update the orientation when turning right from ${startOrientation}`, () => {
        const robot = new Robot({ x: 0, y: 0, orientation: startOrientation })
        robot.turnRight()
        expect(robot.orientation).toBe(expectedOrientation)
      })
    })
  })
})
