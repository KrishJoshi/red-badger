import fs from 'fs'
import MartianRobot from './MartianRobots/index.mjs'

// read file from argument and pass it to MartianRobot
// Example: node index.js test.txt
const filename = process.argv[2]
fs.readFile(filename, 'utf8', (err, data) => {
  if (err) throw err
  const martianRobot = new MartianRobot(data)
  console.log(martianRobot.getRobotState())
})

