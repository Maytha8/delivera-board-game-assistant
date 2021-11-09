# Delivera
**A board game by [Maytha8](https://github.com/Maytha8)**

<img src="player-requirements.png" alt="Player requirements" style="max-width: 100%;height: 60px;">

### Objective
The objective of the game is for each player to deliver all three packages to their destination.

### Players
This game is suitable for players 8+ years old and this board game is designed to be played with 2-4 players.

### Components
- Micro:bit (v1 or v2 can be used)
- A standard 6-sided dice
- A counter for each player ('packages' refers to the counters)
- The board (can be downloaded at https://maytha8.github.io/delivera-board-game-assistant/game.html)

### Instructions

#### Micro:bit Setup
1. Go to https://makecode.microbit.org
2. Click on 'Import' then click on 'Import URL'
3. Type in https://github.com/maytha8/delivera-board-game-assistant and click 'Import'
4. Press 'Download' and wait for hex file to download
5. Plug in Micro:bit and move the hex file onto the Micro:bit

#### Game Setup
1. Download the code onto the Micro:bit if you haven't done so already by following the steps above.
2. Decide who will be Player A, B, C, etc.
3. Press Button A and Button B at the same time on the Micro:bit to start the assistant and wait for the intro to finish. The number 2 will appear. Press Button A to change the amount of players there are, and press Button B to confirm your selection.
4. Each player must pay attention as each player's first delivery will appear on the Micro:bit's screen. A letter corresponding to a player will appear, then their starting location, then an arrow, then the location they will be delivering to.
5. Each player must place their counter on their starting location on the board.

#### Gameplay
6. Each player takes turns rolling the dice and moving that amount of boxes on the board.
7. When a player finishes a delivery (arrives at the delivery location), they must select their player letter by pressing Button A on the Micro:bit, then press Button B. A new delivery will appear on screen, and the player is to move to the new starting location and begin their next delivery.
8. The Micro:bit will indicate if a player has finished all three deliveries and won the game.
9. Press Button A and Button B on the Micro:bit at the same time to reset the assistant.

#### Notes
- Airports, ports, and locations are also considered boxes.
- You must be on the location to have completed the delivery.
- There is no bouncing or skipping your delivery location i.e. even if the dice rolls more than you need, you have still arrived at the location.
- If an airport and a port are adjacent to each other and are on the same land, you can move straight to them i.e. you can move driectly from the airport to the adjacent port.
- The reset feature works as the following:
  - If the assistant is running, pressing Button A and Button B at the same time on the Micro:bit resets the assistant and turns into a blank screen.
  - If the assistant is not running (the screen is blank), pressing Button A and Button B at the same time on the Micro:bit starts the assistant.

### To Win
The first player to deliver all three packages wins the game.

<style>h1{display:none;}h1#delivera{display:block;padding:0;margin-top:0;margin-bottom:0;border:none;}</style>
