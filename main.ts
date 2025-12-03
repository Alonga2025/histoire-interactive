namespace SpriteKind {
    export const Bouton = SpriteKind.create()
    export const Papi = SpriteKind.create()
    export const personnage = SpriteKind.create()
    export const tronc = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Papi, function (sprite, otherSprite) {
    game.showLongText("Jeun homme. Je n'ais pas beaucoup de temps pour te parler : ton oncle est dans la foret, blessé sans aucune aide, ta mére t'en a surrement déja parlé", DialogLayout.Top)
    game.showLongText("ton oncle est dans la foret, blessé sans aucune aide, ta mére t'en a surrement déja parlé", DialogLayout.Top)
    game.showLongText("Il est notre seul espoir, va l'aider, s'il te plait.", DialogLayout.Top)
    sprites.destroyAllSpritesOfKind(SpriteKind.Papi)
})
function créerpartie () {
    if (partie == 1) {
        héros = sprites.create(assets.image`Sprite 2`, SpriteKind.Player)
        héros.ay = 200
        controller.moveSprite(héros)
        héros.setStayInScreen(true)
        scene.setBackgroundImage(assets.image`Tout commence`)
        game.setDialogFrame(assets.image`Sprite2`)
        game.showLongText("\"Zack était dans la salle de theatre abandonné.\"", DialogLayout.Top)
        game.showLongText("Quand soudain, des pas se font entendre.", DialogLayout.Top)
        grandpere = sprites.create(assets.image`Papi`, SpriteKind.Papi)
        grandpere.setPosition(143, 112)
        game.showLongText("Avance vers lui pour lui parler.", DialogLayout.Top)
        menagepartie()
    } else if (partie == 2) {
        tiles.setCurrentTilemap(tilemap`niveau`)
        arbre = sprites.create(assets.image`myImage`, SpriteKind.tronc)
        tiles.placeOnTile(arbre, tiles.getTileLocation(7, 10))
    } else {
    	
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    héros.vy = -100
})
function menagepartie () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Papi)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.personnage)
}
let arbre: Sprite = null
let grandpere: Sprite = null
let héros: Sprite = null
let partie = 0
scene.setBackgroundImage(assets.image`Lac`)
game.showLongText("Cher joueur, ce jeu est un mélange d'action et d'histoire interactive. On espere que tu vas aimer.", DialogLayout.Center)
game.showLongText(" Pour boujer utilise le courseur et pour sauter appuie sur le bouton du centre", DialogLayout.Center)
if (controller.A.isPressed()) {
    partie = 1
}
forever(function () {
    controller.moveSprite(héros, 100, 0)
})
