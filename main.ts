sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
let food: Sprite = null
let mySprite = null
scene.setBackgroundColor(11)
let man = sprites.create(img`
    . f f f f f f f . . . . . . . . . . 
    f f d d d d d f f . . . . . . . . . 
    f d d d d d d d f . . . . . . . . . 
    f d d d d f d d f . . . . . . . . . 
    f d d d d d d d f . . . . . . . . . 
    f d d d d d f f . . . . . . . . . . 
    f d d d d d f f . . . . . . . . . . 
    f f d d d d d d f . . . . . . . . . 
    . f f f f f f f . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(man, 0)
man.setPosition(10, 50)
game.showLongText("get the food.if you get the food your score will change by one. You will have to move up and down. ", DialogLayout.Full)
game.showLongText("presse b to make it so game is over. ", DialogLayout.Bottom)
game.onUpdateInterval(3000, function () {
    food = sprites.create(img`
        . . . . . . e e e e e e e e e e e . . . . . . . . . . 
        . . . . . . . 5 5 5 5 5 5 5 5 5 . . . . . . . . . . . 
        . . . . . . . 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . 
        . . . . . . . 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . 
        . . . . . . e e e e e e e e e e e . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    food.right = 170
    food.setVelocity(-90, 0)
    food.y = randint(0, scene.screenHeight())
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function() {
    game.over()
})