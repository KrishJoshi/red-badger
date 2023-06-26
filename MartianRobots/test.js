import MartianRobots from '.'
import Robot from '../Robot/index.mjs'

describe('MartianRobots', () => {
  describe('convert input', () => {
    it('should correctly convert input text to robot objects and grid size', () => {
      const input = '5 3\n1 1 E\nRFRFRFRF\n3 2 N\nFRRFLLFFRRFLL\n'

      const martianRobots = new MartianRobots(input)

      expect(martianRobots.gridSizeX).toBe(5)
      expect(martianRobots.gridSizeY).toBe(3)
      expect(martianRobots.robots.length).toBe(2)

      martianRobots.robots.forEach((robot) => expect(robot).toBeInstanceOf(Robot))
    })
  })

  describe('process instructions', () => {
    it('should correctly process instructions for a robot', () => {
      const input = '5 3\n1 1 E\nRFRFRFRF\n'

      const martianRobots = new MartianRobots(input)
      const robot = martianRobots.robots[0]

      martianRobots.processInstructions(robot, 'RFRFRFRF')

      expect(robot.x).toBe(1)
      expect(robot.y).toBe(1)
      expect(robot.orientation).toBe('E')
      expect(robot.isLost).toBe(false)
    })

    it('should mark the robot as lost if it falls off the grid', () => {
      const input = '5 3\n3 2 N\nFRRFLLFFRRFLL\n'

      const martianRobots = new MartianRobots(input)
      const robot = martianRobots.robots[0]

      martianRobots.processInstructions(robot, 'FRRFLLFFRRFLL')

      expect(robot.isLost).toBe(true)
      expect(martianRobots.lostRobots).toContain(robot)
    })
  })

  describe('output', () => {
    it('should return the current state of the robots', () => {
      const input = '5 3\n1 1 E\nRFRFRFRF\n3 2 N\nFRRFLLFFRRFLL\n'

      const martianRobots = new MartianRobots(input)

      const robotState = martianRobots.getRobotState()

      const expectedState = '1 1 E\n3 3 N LOST'
      expect(robotState).toBe(expectedState)
    })
  })

  describe('handle grid boundaries', () => {
    it('should return true if the robot has fallen off the grid', () => {
      const input = '5 3\n1 1 E\nRFRFRFRF\n'

      const martianRobots = new MartianRobots(input)
      const robot = martianRobots.robots[0]

      expect(martianRobots.hasRobotFallenOff(robot)).toBe(false)

      robot.moveForward() // Robot moves to (2, 1)
      expect(martianRobots.hasRobotFallenOff(robot)).toBe(false)

      robot.moveForward() // Robot moves to (3, 1)
      expect(martianRobots.hasRobotFallenOff(robot)).toBe(false)

      robot.moveForward() // Robot moves to (4, 1)
      expect(martianRobots.hasRobotFallenOff(robot)).toBe(false)

      robot.moveForward() // Robot moves to (5, 1)
      expect(martianRobots.hasRobotFallenOff(robot)).toBe(false)

      robot.moveForward() // Robot moves to (6, 1), falls off the grid
      expect(martianRobots.hasRobotFallenOff(robot)).toBe(true)
    })
  })
})
