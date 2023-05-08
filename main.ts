input.onButtonPressed(Button.A, function () {
    basic.showString("FIGURAS")
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.clearScreen()
    basic.showLeds(`
        . . . . .
        . # . . .
        . . . . .
        . . . # .
        . . . . .
        `)
    basic.clearScreen()
    basic.showLeds(`
        # . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . #
        `)
    basic.clearScreen()
    basic.showLeds(`
        # . . . #
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        `)
    basic.clearScreen()
    basic.showLeds(`
        # . . . #
        . . . . .
        . . # . .
        . . . . .
        # . . . #
        `)
    basic.clearScreen()
    basic.showLeds(`
        . # . # .
        . . . . .
        . # . # .
        . . . . .
        . # . # .
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    music.playMelody("- F - F - F - - ", 120)
    basic.pause(3000)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    music.playMelody("D E F G A B C5 - ", 120)
    basic.pause(3000)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    music.playMelody("F G A B C5 B A G ", 120)
    basic.pause(3000)
    basic.showLeds(`
        . . # . .
        . . . . .
        # # # # #
        . . . . .
        . . # . .
        `)
    music.playMelody("C D E D C D E D ", 120)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(3000)
    basic.showIcon(IconNames.House)
    basic.pause(3000)
    basic.showIcon(IconNames.TShirt)
    basic.pause(3000)
    basic.clearScreen()
})
