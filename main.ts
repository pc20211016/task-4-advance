let _ = 0
let ha = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        led.plot(_, 0)
        basic.pause(100)
        _ += 1
        if (_ > 4) {
            _ = 0
        }
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        basic.clearScreen()
        led.plot(_, ha)
        basic.pause(100)
        ha += 1
        if (ha > 4) {
            _ = 0
        }
    }
})
