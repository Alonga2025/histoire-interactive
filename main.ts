namespace SpriteKind {
    export const Bouton = SpriteKind.create()
    export const Papi = SpriteKind.create()
    export const personnage = SpriteKind.create()
    export const tronc = SpriteKind.create()
    export const sorciere = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Papi, function (sprite, otherSprite) {
    game.showLongText("Jeune homme. Je n'ai pas beaucoup de temps pour te parler :", DialogLayout.Top)
    game.showLongText(" ton oncle est dans la foret, blessé sans aucune aide, ta mére t'en a surrement déja parlé", DialogLayout.Bottom)
    game.showLongText("Il est notre seul espoir, va l'aider, s'il te plait.", DialogLayout.Top)
    sprites.destroyAllSpritesOfKind(SpriteKind.Papi)
    partie = 2
    créerpartie()
})
function créerpartie () {
    if (partie == 1) {
        héros = sprites.create(assets.image`Héros bas`, SpriteKind.Player)
        controller.moveSprite(héros, 100, 0)
        héros.setPosition(11, 114)
        if (controller.up.isPressed()) {
            héros.vy = -100
        }
        héros.setStayInScreen(true)
        scene.setBackgroundImage(assets.image`Tout commence`)
        game.setDialogFrame(assets.image`Sprite2`)
        game.showLongText("\"Zack était dans la salle de theatre abandonné.\"", DialogLayout.Top)
        game.showLongText("Quand soudain, des pas se font entendre.", DialogLayout.Top)
        grandpere = sprites.create(assets.image`Papi`, SpriteKind.Papi)
        grandpere.setPosition(143, 112)
        game.showLongText("Avance vers lui pour lui parler.", DialogLayout.Top)
    } else if (partie == 2) {
        héros.setKind(SpriteKind.Player)
        héros.ay = 0
        controller.moveSprite(héros, 100, 100)
        mySprite = sprites.create(assets.image`sorciere`, SpriteKind.sorciere)
        coffre = sprites.create(assets.image`Coffre`, SpriteKind.Player)
        tiles.setCurrentTilemap(tilemap`niveau`)
        tiles.placeOnTile(héros, tiles.getTileLocation(24, 24))
        scene.cameraFollowSprite(héros)
        arbre = sprites.create(assets.image`Arbre`, SpriteKind.tronc)
        tiles.placeOnTile(arbre, tiles.getTileLocation(17, 21))
        game.showLongText("Pour trouver ton oncle vas vers la droite ET sourtout ne vas pas vers la gauche.", DialogLayout.Bottom)
    }
}
function menagepartie () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Papi)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.personnage)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.tronc, function (sprite, otherSprite) {
    game.setDialogFrame(assets.image`Tronc`)
    game.showLongText("Tu est finalement arrivé? ", DialogLayout.Full)
    game.showLongText("Il faut chercher ton oncle dans la fotret (un vrai labyrinthe.)", DialogLayout.Full)
    game.showLongText("Dans cette  foret tu trouveras peut etre des amis, mais les ennemis ne sont pas loin.", DialogLayout.Full)
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
})
let arbre: Sprite = null
let coffre: Sprite = null
let mySprite: Sprite = null
let grandpere: Sprite = null
let héros: Sprite = null
let partie = 0
scene.setBackgroundImage(assets.image`Lac`)
game.showLongText("Salut joueur, ce jeu est un mélange d'action et d'histoire interactive. ", DialogLayout.Center)
game.showLongText("Pour bouger, utilise le curseur. ", DialogLayout.Center)
game.showLongText("Tu n'auras aucun besoin de sauter, donc il n y a aucun bouton pour cette fonctionalité", DialogLayout.Bottom)
game.showLongText("On espère que tu vas aimer.", DialogLayout.Bottom)
if (controller.A.isPressed()) {
    partie = 1
}
créerpartie()
forever(function () {
    if (controller.left.isPressed()) {
        héros.setImage(assets.image`Héros droite`)
    } else if (controller.right.isPressed()) {
        héros.setImage(assets.image`Héros gauche`)
    } else if (controller.up.isPressed()) {
        héros.setImage(assets.image`Héros haut`)
    } else {
        héros.setImage(assets.image`Héros bas`)
    }
})
