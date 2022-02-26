function jibble () {
    for (let index = 0; index < 10; index++) {
        if (5 < randint(0, 9)) {
            for (let index = 0; index < randint(2, 6); index++) {
                goleft()
            }
        } else {
            for (let index = 0; index < randint(2, 6); index++) {
                goright()
            }
        }
        blast()
    }
}
function blast () {
    for (let index = 0; index < 4; index++) {
        keyboard.key("  ", KeyboardKeyEvent.Down)
        keyboard.key("  ", KeyboardKeyEvent.Up)
        pause(100)
    }
}
function goleft () {
    keyboard.functionKey(KeyboardFunctionKey.LeftArrow, KeyboardKeyEvent.Down)
    keyboard.functionKey(KeyboardFunctionKey.LeftArrow, KeyboardKeyEvent.Up)
}
function goright () {
    keyboard.functionKey(KeyboardFunctionKey.RightArrow, KeyboardKeyEvent.Down)
    keyboard.functionKey(KeyboardFunctionKey.RightArrow, KeyboardKeyEvent.Up)
}
let droid = 1
pause(100)
forever(function () {
    if (1 == droid) {
        jibble()
    }
})
