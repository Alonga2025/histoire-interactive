namespace SpriteKind {
    export const Bouton = SpriteKind.create()
}
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`Lac`)
game.setDialogFrame(assets.image`Sprite2`)
game.showLongText("Cher joueur, ce jeu est un mélange d'action et d'histoire interactive. On espere que tu vas aimer.", DialogLayout.Center)
if (controller.A.isPressed()) {
    scene.setBackgroundImage(assets.image`Tout commence`)
    mySprite = sprites.create(assets.image`FIlle 2`, SpriteKind.Player)
}
forever(function () {
    controller.moveSprite(mySprite, 100, 100)
})
