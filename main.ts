namespace SpriteKind {
    export const Bouton = SpriteKind.create()
    export const Papi = SpriteKind.create()
    export const personnage = SpriteKind.create()
    export const tronc = SpriteKind.create()
    export const sorciere = SpriteKind.create()
    export const plante = SpriteKind.create()
    export const rien = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Papi, function (sprite, otherSprite) {
    game.showLongText("Jeune homme. Je n'ai pas beaucoup de temps pour te parler :", DialogLayout.Top)
    game.showLongText(" ton oncle est dans la foret, blessé sans aucune aide, ta mére t'en a surrement déja parlé", DialogLayout.Top)
    game.showLongText("Il est notre seul espoir, va l'aider, s'il te plait.", DialogLayout.Top)
    sprites.destroyAllSpritesOfKind(SpriteKind.Papi)
    partie = 2
    créerpartie()
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    héros.setImage(assets.image`Héros bas`)
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
        game.showLongText("Alors que Zack s'appretait a erré un peu dans le village et a glisser dans la routine de sa vie (si on peut dire cela puisque le vilage a une clé de Démocles au dessous de sa tete bien qu'il n'en est pas au courant),", DialogLayout.Full)
        game.showLongText("sa mere l'interomp, lui disant que ca ne valait meme pas la paine. Perplexe il obéi et il écoutat ce qu'elle avait a lui dire...", DialogLayout.Full)
        game.showLongText("Comme sa mere lui a dit d'aller dans la salle de theatre abandonée du village, le voici.\"", DialogLayout.Top)
        game.showLongText("Les instructions de sa mere tournaient en boucle dans sa tete, dépuis qu'il est sortit de chez lui", DialogLayout.Top)
        game.setDialogFrame(img`
            b b b b b b b b b b b b b b b 
            b b b b b b b b b b b b b b b 
            b b b b b b b b b b b b b b b 
            b b b b b b b b b b b b b b b 
            b b b b b b b b b b b b b b b 
            b b b b b b b b b b b b b b b 
            b b b b b b b b b b b b b b b 
            b b b b b b b b b b b b b b b 
            b b b b b b b b b b b b b b b 
            b b b b b b b b b b b b b b b 
            b b b b b b b b b b b b b b b 
            b b b b b b b b b b b b b b b 
            b b b b b b b b b b b b b b b 
            b b b b b b b b b b b b b b b 
            b b b b b b b b b b b b b b b 
            `)
        game.showLongText("Écoute moi bien, il faut absolument que tu ailles dans la foret, prends cette potion et garde la précieusement, tu ne l'utiliseras que si tu est en danger pour te défendre.", DialogLayout.Top)
        game.showLongText("Quand tu arriveras dans la foret ÉVITE d'aller le coté gauche avant d'avoir trouv ton oncle. ", DialogLayout.Top)
        game.showLongText("Zack ... Il est important que tu le retrouves, il est notre seul espoir.", DialogLayout.Top)
        game.setDialogFrame(img`
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            `)
        game.showLongText("Et ces instrictions ne fesaient que de le rendre plus perplexe. ", DialogLayout.Top)
        game.showLongText("Le son de pas venant dans sa direction le sortirent de sa reflexion.", DialogLayout.Top)
        grandpere = sprites.create(assets.image`Papi`, SpriteKind.Papi)
        grandpere.setPosition(143, 112)
        game.showLongText("Avance vers lui pour lui parler.", DialogLayout.Top)
    } else if (partie == 2) {
        info.setLife(3)
        héros.setKind(SpriteKind.Player)
        arbre = sprites.create(assets.image`Arbre`, SpriteKind.tronc)
        mySprite = sprites.create(assets.image`sorciere`, SpriteKind.Enemy)
        coffre = sprites.create(assets.image`Coffre`, SpriteKind.plante)
        mySprite2 = sprites.create(assets.image`rien`, SpriteKind.rien)
        héros.ay = 0
        controller.moveSprite(héros, 100, 100)
        tiles.setCurrentTilemap(tilemap`niveau`)
        tiles.placeOnTile(héros, tiles.getTileLocation(24, 24))
        scene.cameraFollowSprite(héros)
        tiles.placeOnTile(arbre, tiles.getTileLocation(17, 20))
        tiles.placeOnTile(mySprite2, tiles.getTileLocation(3, 7))
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    héros.setImage(assets.image`Héros haut`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.rien, function (sprite, otherSprite) {
    game.showLongText("Tu dois etre Zack, n'est pas? Le neveu de notre cher voisin.", DialogLayout.Top)
    game.showLongText("VOisin ?! Mais cette sorciere ... elle prarle de son oncle!!!!!!!!!!!!!!!", DialogLayout.Top)
    game.showLongText("Malhereusement pour toi il n y a qu'un remede pour l'aider et il est introuvable... quel domage!", DialogLayout.Bottom)
    game.showLongText("Elle y est pour quelque chose", DialogLayout.Bottom)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    héros.setImage(assets.image`Héros gauche`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.tronc, function (sprite, otherSprite) {
    game.setDialogFrame(assets.image`Tronc`)
    game.showLongText("Tu est finalement arrivé? ", DialogLayout.Full)
    game.showLongText("Il faut chercher ton oncle dans la fotret (un vrai labyrinthe.)", DialogLayout.Full)
    game.showLongText("Dans cette  foret tu trouveras peut etre des amis, mais les ennemis ne sont pas loin.", DialogLayout.Full)
    game.showLongText("EN gros évite la gauche", DialogLayout.Bottom)
    sprites.destroy(otherSprite)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    héros.setImage(assets.image`Héros droite`)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprites.destroy(sprite)
})
let mySprite2: Sprite = null
let coffre: Sprite = null
let mySprite: Sprite = null
let arbre: Sprite = null
let grandpere: Sprite = null
let héros: Sprite = null
let partie = 0
scene.setBackgroundImage(assets.image`Lac`)
game.showLongText("Salut joueur, ce jeu est un mélange d'action et d'histoire interactive. ", DialogLayout.Center)
game.showLongText("Pour bouger, utilise le curseur. ", DialogLayout.Center)
game.showLongText("Tu n'auras aucun besoin de sauter, donc il n y a aucun bouton pour cette fonctionalité", DialogLayout.Center)
game.showLongText("On espère que tu vas aimer.", DialogLayout.Center)
if (controller.A.isPressed()) {
    partie = 1
}
créerpartie()
forever(function () {
	
})
