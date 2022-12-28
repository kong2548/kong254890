input.onButtonPressed(Button.A, function () {
    basket.change(LedSpriteProperty.X, -1)
    music.playTone(988, music.beat(BeatFraction.Half))
})
input.onButtonPressed(Button.B, function () {
    basket.change(LedSpriteProperty.X, 1)
    music.playTone(988, music.beat(BeatFraction.Half))
})
let score = 0
let egg: game.LedSprite = null
let basket: game.LedSprite = null
let speed = 400
basket = game.createSprite(2, 4)
music.playTone(262, music.beat(BeatFraction.Whole))
while (true) {
    egg = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index <= 4; index++) {
        basic.pause(speed)
        egg.change(LedSpriteProperty.Y, 1)
        basic.pause(speed)
    }
    if (egg.isTouching(basket)) {
        egg.delete()
        score += 1
    } else {
        game.setScore(score)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 5000, 0, 255, 0, 9999, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
        game.gameOver()
    }
}
