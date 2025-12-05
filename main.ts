namespace SpriteKind {
    export const Bouton = SpriteKind.create()
    export const Papi = SpriteKind.create()
    export const personnage = SpriteKind.create()
    export const tronc = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Papi, function (sprite, otherSprite) {
    game.showLongText("Jeune homme. Je n'ai pas beaucoup de temps pour te parler : ton oncle est dans la foret, blessé sans aucune aide, ta mére t'en a surrement déja parlé", DialogLayout.Top)
    game.showLongText("ton oncle est dans la foret, blessé sans aucune aide, ta mére t'en a surrement déja parlé", DialogLayout.Top)
    game.showLongText("Il est notre seul espoir, va l'aider, s'il te plait.", DialogLayout.Top)
    sprites.destroyAllSpritesOfKind(SpriteKind.Papi)
    partie = 2
    créerpartie()
})
function créerpartie () {
    if (partie == 1) {
        héros = sprites.create(assets.image`Sprite 2`, SpriteKind.Player)
        héros.ay = 200
        controller.moveSprite(héros, 100, 0)
        controller.moveSprite(héros)
        héros.setStayInScreen(true)
        scene.setBackgroundImage(assets.image`Tout commence`)
        game.setDialogFrame(assets.image`Sprite2`)
        game.showLongText("\"Zack était dans la salle de theatre abandonné.\"", DialogLayout.Top)
        game.showLongText("Quand soudain, des pas se font entendre.", DialogLayout.Top)
        grandpere = sprites.create(assets.image`Papi`, SpriteKind.Papi)
        grandpere.setPosition(143, 112)
        game.showLongText("Avance vers lui pour lui parler.", DialogLayout.Top)
    } else if (partie == 2) {
        héros.ay = 0
        héros = sprites.create(assets.image`Sprite 2`, SpriteKind.Player)
        controller.moveSprite(héros, 100, 100)
        tiles.setCurrentTilemap(tilemap`niveau`)
        tiles.placeOnTile(héros, tiles.getTileLocation(24, 24))
        scene.cameraFollowSprite(héros)
        arbre = sprites.create(assets.image`myImage0`, SpriteKind.tronc)
        tiles.placeOnTile(arbre, tiles.getTileLocation(17, 21))
        game.showLongText("Pour trouver ton oncle vas vers la droite ET sourtout ne vas pas vers la gauche.", DialogLayout.Bottom)
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
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
	
})
let arbre: Sprite = null
let grandpere: Sprite = null
let héros: Sprite = null
let partie = 0
scene.setBackgroundImage(assets.image`Lac`)
game.showLongText("Salut joueur, ce jeu est un mélange d'action et d'histoire interactive. On espère que tu vas aimer.", DialogLayout.Center)
game.showLongText("Pour bouger, utilise le curseur et pour sauter, appuie sur le bouton du centre", DialogLayout.Center)
if (controller.A.isPressed()) {
    partie = 1
}
créerpartie()
forever(function () {
	
})
