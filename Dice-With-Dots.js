let dots0: string[] = []
let dots1: string[] = []
let dots2: string[] = []
let dots3: string[] = []
let dots4: string[] = []
let dots5: string[] = []
let dots6: string[] = []
let dots7: string[] = []
let dots8: string[] = []
let dots9: string[] = []
let oneChar = ""
let dots10: string[] = []
let smiley: Image = null
let diceTotal = 0
let col = 0
let oneRow = ""
let allDots: string[][] = []
let oneDice: string[] = []
let dice2 = 0
let item = 0
let diceMax2 = 0
let diceMax1 = 0
let dice1 = 0
input.onButtonPressed(Button.B, () => {
    diceMax2 = diceMax2 % 10 + 1
    dice1 = diceMax1
    dice2 = diceMax2
    DisplayBothDiceAsDots()
})
input.onButtonPressed(Button.AB, () => {
    dice1 = diceMax1
    dice2 = diceMax2
    DisplayBothDiceAsDots()
})
input.onButtonPressed(Button.A, () => {
    diceMax1 = diceMax1 % 10 + 1
    dice1 = diceMax1
    dice2 = diceMax2
    DisplayBothDiceAsDots()
})
input.onGesture(Gesture.ScreenUp, () => {
    DisplayBothDiceAsDots()
})
function DisplayDiceTotal() {
    basic.clearScreen()
    if (diceTotal > 0) {
        basic.showNumber(diceTotal)
    } else {
        smiley.showImage(0)
    }
}
input.onGesture(Gesture.Shake, () => {
    basic.clearScreen()
    basic.showAnimation(`
    . . . . . . . . . . . . # . . # . . . #
    . . . . . . . # . . . # . # . . . . . .
    . . # . . . # # # . # . . . # . . . . .
    . . . . . . . # . . . # . # . . . . . .
    . . . . . . . . . . . . # . . # . . . #
    `, 100)
    basic.clearScreen()
    dice1 = Math.random(diceMax1 - 1 + 1) + 1
    dice2 = Math.random(diceMax2 - 1 + 1) + 1
    diceTotal = dice1 + dice2
    DisplayBothDiceAsDots()
})
function DisplayBothDiceAsDots() {
    basic.clearScreen()
    oneDice = allDots[dice1]
    for (let ledRow = 0; ledRow <= 1; ledRow++) {
        oneRow = oneDice[ledRow]
        for (let ledCol = 0; ledCol <= 5; ledCol++) {
            oneChar = oneRow.charAt(ledCol)
            if (oneChar == "#") {
                led.plot(0 + ledRow, ledCol)
            } else {

            }
        }
    }
    oneDice = allDots[dice2]
    for (let ledRow2 = 0; ledRow2 <= 1; ledRow2++) {
        oneRow = oneDice[ledRow2]
        for (let ledCol2 = 0; ledCol2 <= 5; ledCol2++) {
            oneChar = oneRow.charAt(ledCol2)
            if (oneChar == "#") {
                led.plot(4 - ledRow2, ledCol2)
            } else {

            }
        }
    }
}
item = 0
diceMax1 = 6
diceMax2 = 6
col = 0
dots10 = ["#####", "#####"]
dots9 = ["#####", "##.##"]
dots8 = ["#####", ".###."]
dots7 = ["#####", ".#.#."]
dots6 = ["#####", "..#.."]
dots5 = ["#####", "....."]
dots4 = ["##.##", "....."]
dots3 = [".###.", "....."]
dots2 = [".#.#.", "....."]
dots1 = ["..#..", "....."]
dots0 = [".....", "....."]
allDots = [dots0, dots1, dots2, dots3, dots4, dots5, dots6, dots7, dots8, dots9, dots10]
smiley = images.createImage(`
    # . # . .
    . # . . .
    # . # . #
    . . . # .
    . . # . #
    `)
smiley.showImage(0)
