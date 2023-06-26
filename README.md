# Mars Robot Challenge
## Description
This is a robotic challenge designed to determine the final position of a robot based on a given input text file.

## How to Execute
1. Clone the repository.
2. Execute the program with the input.txt file by running `npm run start`.
3. Run the tests by executing `npm run test`.

## Rationale for the Chosen Approach
The primary objective was to maintain simplicity and extensibility in the code. To achieve this, a MartianRobots class was implemented to handle the conversion of text to a grid and manage multiple robots. Additionally, the logic for moving an individual robot was separated into its own class. Initially, the robot instructions were processed within the Robot class (refer to previous commits). 

However, this introduced a dependency on the grid to handle falling off logic. To address this, the logic was moved back to the MartianRobots class.

## Potential Improvements with Additional Time
Currently, the `convertTextToInput` function within the MartianRobots class performs multiple tasks, leading to increased complexity.

To enhance clarity and maintain a single responsibility principle, I would split it into two distinct functions: `handleInput` and `createRobots`. The `handleInput` function would manage the grid and its dimensions, while the `createRobots` function would be responsible for robot creation and instruction processing.

Subsequently, utility functions such as `hasRobotFallenOff` and `isPosScented` could be extracted from the class to further enhance modularity.

Moreover, a separate Grid class should be introduced to isolate the grid-related logic from the robot logic and an Input class should be implemented to handle the conversion of the text file into an array of strings, ensuring separation from the robot logic.

