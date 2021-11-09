input.onButtonPressed(Button.A, function () {
    if (stage == 0) {
        if (players == 4) {
            players = 2
        } else {
            players += 1
        }
        show_compact_number(players)
    } else if (stage == 1) {
        if (current_player == players - 1) {
            current_player = 0
        } else {
            current_player += 1
        }
        basic.showString("" + (player_letters[current_player]))
    }
})
function show_compact_number (num: number) {
    if (num == 1) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    } else if (num == 2) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . # . . .
            . # # # .
            `)
    } else if (num == 3) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . . . # .
            . # # # .
            `)
    } else if (num == 4) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . # # # .
            . . . # .
            . . . # .
            `)
    } else if (num == 5) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . . . # .
            . # # # .
            `)
    } else if (num == 6) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . # . # .
            . # # # .
            `)
    } else if (num == 7) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . . . # .
            . . . # .
            . . . # .
            `)
    } else if (num == 8) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . # . # .
            . # # # .
            `)
    } else if (num == 9) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . . . # .
            . . . # .
            `)
    } else if (num == 10) {
        basic.showLeds(`
            # . # # #
            # . # . #
            # . # . #
            # . # . #
            # . # # #
            `)
    } else if (num == 11) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            `)
    } else if (num == 12) {
        basic.showLeds(`
            # . # # #
            # . . . #
            # . # # #
            # . # . .
            # . # # #
            `)
    } else {
        basic.showNumber(num)
    }
}
function init () {
    stage = -1
    players = 2
    player_letters = [
    "A",
    "B",
    "C",
    "D"
    ]
    locations = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
    ]
    player_progress = []
}
input.onButtonPressed(Button.AB, function () {
    if (reset) {
        reset = 0
        basic.showString("Delivera")
        stage = 0
        show_compact_number(players)
    } else {
        led.stopAnimation()
        basic.clearScreen()
        music.stopAllSounds()
        init()
        reset = 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (stage == 0) {
        stage = -1
        basic.clearScreen()
        for (let index = 0; index <= players - 1; index++) {
            player_progress.insertAt(index, 0)
            basic.pause(1000)
            basic.showString("" + (player_letters[index]))
            basic.pause(1000)
            show_compact_number(locations.removeAt(randint(0, locations.length - 1)))
            basic.pause(1000)
            basic.showArrow(ArrowNames.East)
            basic.pause(1000)
            show_compact_number(locations.removeAt(randint(0, locations.length - 1)))
            basic.pause(1000)
            basic.clearScreen()
        }
        basic.pause(1000)
        stage = 1
        current_player = 0
        basic.showString("" + (player_letters[current_player]))
    } else if (stage == 1) {
        if (player_progress[current_player] == 2) {
            basic.clearScreen()
            basic.pause(1000)
            for (let index = 0; index < 5; index++) {
                basic.showString("" + (player_letters[current_player]))
                basic.pause(100)
                basic.clearScreen()
                basic.pause(100)
            }
            music.setVolume(255)
            music.playMelody("C D E F G A B C5 ", 600)
            music.playMelody("C D E F G A B C5 ", 600)
            music.playMelody("C C C C C C C C ", 600)
            basic.showString("" + player_letters[current_player] + " wins!")
            basic.clearScreen()
            music.stopAllSounds()
        }
        player_progress.insertAt(current_player, player_progress[current_player] + 1)
        basic.clearScreen()
        basic.pause(1000)
        show_compact_number(locations.removeAt(randint(0, locations.length - 1)))
        basic.pause(1000)
        basic.showArrow(ArrowNames.East)
        basic.pause(1000)
        show_compact_number(locations.removeAt(randint(0, locations.length - 1)))
        basic.pause(1000)
        basic.clearScreen()
        basic.pause(1000)
        current_player = 0
        basic.showString("" + (player_letters[current_player]))
    }
})
let player_progress: number[] = []
let locations: number[] = []
let player_letters: string[] = []
let current_player = 0
let players = 0
let stage = 0
let reset = 0
led.stopAnimation()
basic.clearScreen()
music.stopAllSounds()
reset = 1
basic.forever(function () {
	
})
