# Rock Paper Scissors Game

A simple and interactive Rock-Paper-Scissors game built with HTML, CSS, and JavaScript. Challenge yourself or a friend in this classic game of strategy and chance!

## Features

- **Single Player Mode:** Play against a computer opponent with randomized choices.
- **Interactive UI:** Smooth and visually appealing interface.
- **Real-time Results:** See who wins each round instantly.
- **Score Tracking:** Keep track of your victories, losses, and ties.
- **Responsive Design:** Enjoy seamless gameplay on desktop and mobile devices.

## How to Play

1. Clone this repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd <repository-name>
   ```

3. Open the `index.html` file in your browser.

4. Choose between Rock, Paper, or Scissors and see if you can beat the computer!

## Game Mechanics

- **Choices:** The player and computer choose between Rock, Paper, or Scissors.
- **Rules:**
  - Rock beats Scissors.
  - Scissors beats Paper.
  - Paper beats Rock.
- **Outcome:** The result of each round is displayed along with updated scores.

## Code Overview

The game logic is implemented in `script.js`, with the following key components:

- **Player Input:** Captures the player's choice via button clicks.
- **Randomized Opponent:** The computer's choice is determined randomly.
- **Game Logic:** Determines the winner based on the rules of Rock-Paper-Scissors.
- **Dynamic Updates:** Updates the UI with results and scores in real-time.

### Key Functions

- **getcompchoice():** Generates the computer's random choice.
- **drawgame():** Handles the scenario when the game is a draw.
- **showwinner():** Updates the scores and displays the result of each round.
- **playgame():** Executes the core game logic, comparing user and computer choices.

### Event Handling

- Event listeners are added to each choice button to capture and process the player's selection.

## Contributing

Contributions are welcome! Feel free to fork the repository, make changes, and submit a pull request. Suggestions for new features or enhancements are greatly appreciated.

##

