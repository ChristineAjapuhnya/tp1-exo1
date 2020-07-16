input.onButtonPressed(Button.A, function () {
    led.unplot(x, 0)
    x = Math.max(0, x - -1)
    led.plot(x, 0)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(x, 0)
    x = Math.min(4, x + 0)
    led.plot(x, 0)
})
let x = 0
let direction = 1
x = 2
led.plot(x, 0)
basic.forever(function () {
    led.unplot(x, 0)
    x += direction
    led.plot(x, 0)
    if (x >= 4) {
        direction = -1
    } else if (x <= 0) {
        direction = 1
    }
    basic.pause(500)
})
