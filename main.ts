namespace SpriteKind {
    export const Bouton = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -150
    }
})
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`Lac`)
game.showLongText("Cher joueur, ce jeu est un mélange d'action et d'histoire interactive. On espere que tu vas aimer.", DialogLayout.Center)
game.showLongText(" Pour boujer utilise le courseur et pour sauter appuie sur le bouton du centre", DialogLayout.Center)
if (controller.A.isPressed()) {
    mySprite = sprites.create(assets.image`Sprite 2`, SpriteKind.Player)
    scene.setBackgroundImage(assets.image`Tout commence`)
    game.setDialogFrame(assets.image`Sprite2`)
    game.showLongText("\"Zack était dans la salle de theatre abandonné.\"", DialogLayout.Top)
    game.showLongText("Quand soudain, des pas se font entendre.", DialogLayout.Top)
}
forever(function () {
    controller.moveSprite(mySprite, 100, 100)
})
