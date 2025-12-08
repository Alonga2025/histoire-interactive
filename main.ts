namespace SpriteKind {
    export const Bouton = SpriteKind.create()
    export const Papi = SpriteKind.create()
    export const personnage = SpriteKind.create()
    export const tronc = SpriteKind.create()
    export const sorciere = SpriteKind.create()
    export const plante = SpriteKind.create()
    export const rien = SpriteKind.create()
    export const coffre = SpriteKind.create()
    export const magicien = SpriteKind.create()
    export const écriture = SpriteKind.create()
    export const instructions = SpriteKind.create()
    export const parle = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.magicien, function (sprite, otherSprite) {
    if (plantesramasées == 1) {
        game.showLongText("Bravo tu as réussi a guérir ton frere/cousin!", DialogLayout.Top)
        game.gameOver(true)
    } else if (mauvaiseplanteramasée == 0) {
        game.setDialogFrame(assets.image`Sprite2`)
        game.showLongText("Oh non! Tu vie s de t'approcher de ton cousin sans la plante médicale! Tu as attrapé son sort et maintenant vous etez tout les deux coincées dans la foret.", DialogLayout.Top)
        game.gameOver(false)
    } else {
        game.setDialogFrame(assets.image`Sprite2`)
        game.showLongText("Oh non! Tu vie s de t'approcher de ton cousin sans la plante médicale! Tu as attrapé son sort et maintenant vous etez tout les deux coincées dans la foret.", DialogLayout.Top)
        game.gameOver(false)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Papi, function (sprite, otherSprite) {
    game.setDialogFrame(img`
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        `)
    game.showLongText("Jeune homme. Je n'ai pas beaucoup de temps pour te parler :", DialogLayout.Top)
    game.showLongText(" ton cousin est dans la foret, blessé sans aucune aide, ta mére t'en a surrement déja parlé", DialogLayout.Top)
    game.showLongText("Ce qu'elle ne t'as pourtant PAS dit ...", DialogLayout.Top)
    game.setDialogFrame(assets.image`Field blanc`)
    game.showLongText("Comment est ce qu'il pourrait savoir ca, lui?!", DialogLayout.Top)
    game.setDialogFrame(img`
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        `)
    game.showLongText("c'est que pour le guérir il faut trouver une herbe médicale. Et aussi, je sais que ta mere ne voulait pas que tu saches cela, mais  ton frere n'est pas VRAIMENT malade...", DialogLayout.Top)
    game.setDialogFrame(assets.image`Field blanc`)
    game.showLongText("Hein?! C'est pourtant ce que sa mere lui avait dit... pourquoi lui mentirais-t-elle?", DialogLayout.Top)
    game.setDialogFrame(img`
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        `)
    game.showLongText("Il a été ensorcele, mais en tout cas ... trouve la bonne herbe et guéris le. Continue jausqu'a ce que les arbres commencent a changer de couleur, si tu vois un grand arbre aproche toi de lui (touche le) et tu pourras voir les instructions.", DialogLayout.Top)
    sprites.destroyAllSpritesOfKind(SpriteKind.Papi)
    game.setDialogFrame(assets.image`Field blanc`)
    game.showLongText("ATTANDEZ! COMMEN... Le papi était déja parti.", DialogLayout.Top)
    partie = 2
    créerpartie()
})
function Appel_les_monstres () {
    serpent_1 = sprites.create(assets.image`serpent 1`, SpriteKind.Enemy)
    tiles.placeOnTile(serpent_1, tiles.getTileLocation(0, 11))
    serpent_2 = sprites.create(assets.image`serpent 2`, SpriteKind.Enemy)
    tiles.placeOnTile(serpent_2, tiles.getTileLocation(2, 11))
    serpent_3 = sprites.create(assets.image`serpent 3`, SpriteKind.Enemy)
    tiles.placeOnTile(serpent_3, tiles.getTileLocation(1, 10))
    crane_1 = sprites.create(assets.image`crane 1`, SpriteKind.Enemy)
    tiles.placeOnTile(crane_1, tiles.getTileLocation(1, 6))
    crane_2 = sprites.create(assets.image`crane 2`, SpriteKind.Enemy)
    tiles.placeOnTile(crane_2, tiles.getTileLocation(2, 4))
    crane_3 = sprites.create(assets.image`crane 3`, SpriteKind.Enemy)
    tiles.placeOnTile(crane_3, tiles.getTileLocation(3, 4))
    dragon_1 = sprites.create(assets.image`Dragon 1`, SpriteKind.Enemy)
    tiles.placeOnTile(dragon_1, tiles.getTileLocation(3, 11))
    dragon_2 = sprites.create(assets.image`Dragon 2`, SpriteKind.Enemy)
    tiles.placeOnTile(dragon_2, tiles.getTileLocation(1, 12))
    dragon_3 = sprites.create(assets.image`Dragon 3`, SpriteKind.Enemy)
    tiles.placeOnTile(dragon_3, tiles.getTileLocation(0, 4))
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    héros.setImage(assets.image`Héros bas`)
    direction = "bas"
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
        game.setDialogFrame(assets.image`field`)
        game.showLongText("Écoute moi bien, il faut absolument que tu ailles dans la foret enfin de retrouver ton cousin.", DialogLayout.Top)
        game.setDialogFrame(assets.image`Field blanc`)
        game.showLongText("SON COUSIN ?! Il les avaient laissées il y a longtemps ... juste avant qu ele village soit condamné. C'était comme un grand frere pour lui ... Avant qu'il parte", DialogLayout.Top)
        game.setDialogFrame(assets.image`field`)
        game.showLongText("Quand tu arriveras dans la foret ÉVITE d'aller le coté gauche AVANT d'avoir trouv ton cousin. ", DialogLayout.Top)
        game.showLongText("Zack ... Il est important que tu le retrouves, il est notre seul espoir.", DialogLayout.Top)
        game.setDialogFrame(assets.image`Field blanc`)
        game.showLongText("Et ces instrictions ne fesaient que de le rendre encore plus perplexe. ", DialogLayout.Top)
        game.showLongText("Le son de pas venant dans sa direction le sortirent de sa reflexion.", DialogLayout.Top)
        grandpere = sprites.create(assets.image`Papi`, SpriteKind.Papi)
        grandpere.setPosition(143, 112)
        game.showLongText("Avance vers lui pour lui parler.", DialogLayout.Top)
    } else if (partie == 2) {
        plantesramasées = 0
        mauvaiseplanteramasée = 0
        tiles.setCurrentTilemap(tilemap`niveau`)
        controller.moveSprite(héros)
        tiles.placeOnTile(héros, tiles.getTileLocation(29, 22))
        héros.setKind(SpriteKind.Player)
        héros.ay = 0
        scene.cameraFollowSprite(héros)
        game.setDialogFrame(assets.image`Sprite2`)
        game.showLongText("En entrant dans la foret, tu vois que les arbres commencent a changer de couleur et un picotement dans tes mains... Se pourrai-t-il que cette foret soit magique?", DialogLayout.Top)
        info.setLife(5)
        bombe = sprites.create(assets.image`Projectile`, SpriteKind.Projectile)
        arbre = sprites.create(assets.image`Arbre`, SpriteKind.tronc)
        Enemypublicn1 = sprites.create(assets.image`sorciere`, SpriteKind.sorciere)
        blabla = sprites.create(assets.image`rien`, SpriteKind.rien)
        blabla2 = sprites.create(assets.image`myImage`, SpriteKind.parle)
        cousin = sprites.create(assets.image`Cousin malade`, SpriteKind.magicien)
        mauvaise_plante = sprites.create(assets.image`mauvaise plante`, SpriteKind.plante)
        pancarte = sprites.create(assets.image`Pencarte`, SpriteKind.instructions)
        bonne_plante = sprites.create(assets.image`plante`, SpriteKind.plante)
        tiles.placeOnTile(cousin, tiles.getTileLocation(29, 16))
        tiles.placeOnTile(mauvaise_plante, tiles.getTileLocation(1, 19))
        tiles.placeOnTile(pancarte, tiles.getTileLocation(1, 20))
        tiles.placeOnTile(bonne_plante, tiles.getTileLocation(29, 0))
        textSprite = textsprite.create("Inventaire :")
        tiles.placeOnTile(arbre, tiles.getTileLocation(17, 20))
        tiles.placeOnTile(blabla, tiles.getTileLocation(3, 7))
        tiles.placeOnTile(blabla2, tiles.getTileLocation(28, 14))
        tiles.placeOnTile(Enemypublicn1, tiles.getTileLocation(0, 7))
        textSprite.setFlag(SpriteFlag.RelativeToCamera, true)
        textSprite.left = 5
        textSprite.bottom = 110
        textSprite.z = 50
        textSprite.setIcon(img`
            f 
            f 
            f 
            f 
            f 
            f 
            f 
            f 
            f 
            f 
            f 
            f 
            f 
            f 
            f 
            f 
            `)
        fond = sprites.create(img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `, SpriteKind.écriture)
        fond.setFlag(SpriteFlag.RelativeToCamera, true)
        fond.left = 5
        fond.bottom = 117
        if (SpriteKind.Enemy == 0) {
            sprites.destroy(Enemypublicn1)
        }
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite2, otherSprite2) {
    info.changeLifeBy(-1)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    héros.setImage(assets.image`Héros haut`)
    direction = "haut"
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.rien, function (sprite, otherSprite) {
    game.setDialogCursor(img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `)
    game.showLongText("Zack! C'est bien toi? Tu est venu rendre visite au voisin?", DialogLayout.Top)
    game.setDialogCursor(img`
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        `)
    game.showLongText("VOISIN ?! Cette sorciere palrait de son coisin.", DialogLayout.Top)
    game.setDialogCursor(img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `)
    game.showLongText("Je pense que tu as déja remarqué que celui ci est assez malade. ", DialogLayout.Top)
    game.showLongText("Malhereusement il n y a aucune plante pour le guérir et elle est introuvable...", DialogLayout.Top)
    game.showLongText("Je vois que tu n'Est pas tres bavard ... Venez mes petits animaux, le diner est pret!", DialogLayout.Top)
    Appel_les_monstres()
    game.setDialogCursor(img`
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        `)
    game.showLongText("Les monstres ont rempli la salle et tu dois tous les tuer si tu veux que la soriere parte et si tu veux savoir ce qu'il se trouve dans le couloir de au fond a gauche de la salle.", DialogLayout.Top)
    game.showLongText("Fais attention! Chaque fois que tu touche les monstres tu perds une vie. Le bouton B pourrait t'etre utile.", DialogLayout.Top)
    sprites.destroy(blabla)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.coffre, function (sprite3, otherSprite3) {
    game.setDialogFrame(assets.image`Sprite2`)
    game.showLongText("Voila c'est la fin.", DialogLayout.Top)
    game.setDialogFrame(img`
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        `)
    game.showLongText("Un peu de patience fréro on n'as meme pas prevenue maman.", DialogLayout.Top)
    game.setDialogFrame(assets.image`Sprite2`)
    game.showLongText("Partons a l'aventure!", DialogLayout.Top)
    game.gameOver(true)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (direction == "haut") {
        bombe = sprites.createProjectileFromSprite(assets.image`Projectile`, héros, 0, -50)
    } else if (direction == "bas") {
        projectile = sprites.createProjectileFromSprite(assets.image`Projectile`, héros, 0, 50)
    } else if (direction == "gauche") {
        projectile2 = sprites.createProjectileFromSprite(assets.image`Projectile`, héros, 0, 50)
    } else {
        projectile3 = sprites.createProjectileFromSprite(assets.image`Projectile`, héros, 0, -50)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.parle, function (sprite, otherSprite) {
    game.setDialogCursor(assets.image`Field blanc`)
    game.showLongText("Cousin? C'Est bien toi?", DialogLayout.Top)
    game.setDialogCursor(img`
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        `)
    game.showLongText("ATTANDS! Ne t'aproche pas de moi!", DialogLayout.Top)
    game.showLongText("Je suis ensorcelé ca ne se voit pas? Tu ne peux venir vers moi QUE si tu as la plante médicinale, sinon vas attraper mon sort.", DialogLayout.Top)
    game.showLongText("En tout cas la plante ne se trouve pas a droite elle se trouve a ...", DialogLayout.Top)
    game.setDialogCursor(assets.image`Field blanc`)
    game.showLongText("Avant de me dire tout ca, comment est ce que tu t'Est retrouvé ici? Pourquoi tu nous a abbandoné moi et maman il y a trois mois, pourquoi ...", DialogLayout.Top)
    game.setDialogCursor(img`
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        `)
    game.showLongText("Écoute frérot j'ai peut de temps. Va chercher l'herbe avant qu'il ne soit trop tard...", DialogLayout.Top)
    game.setDialogCursor(assets.image`Field blanc`)
    game.showLongText("Il faut aller chercher l'herbe médicinale ... si vous vous souvenez du seul indice qu'Abriel vous a dit.", DialogLayout.Top)
    sprites.destroy(blabla2)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    héros.setImage(assets.image`Héros gauche`)
    direction = "droite"
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.tronc, function (sprite, otherSprite) {
    game.setDialogFrame(assets.image`Tronc`)
    game.showLongText("Tu est finalement arrivé? ", DialogLayout.Full)
    game.showLongText("Il faut chercher ton oncle dans la fotret (un vrai labyrinthe.)", DialogLayout.Full)
    game.showLongText("Dans cette  foret tu trouveras peut etre des amis, mais les ennemis ne sont pas loin.", DialogLayout.Full)
    game.showLongText("EN gros évite la gauche", DialogLayout.Full)
    sprites.destroy(arbre)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.plante, function (sprite) {
    game.showLongText("Va donner la plante a ton cousin.", DialogLayout.Bottom)
    plantesramasées = 1
    bonne_plante.setFlag(SpriteFlag.RelativeToCamera, true)
    bonne_plante.left = 16
    bonne_plante.bottom = 117
    bonne_plante.z = 50
    sprites.destroy(blabla2)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.instructions, function (sprite, otherSprite) {
    game.setDialogFrame(img`
        4 e e e e e e e e e e e e e 4 
        4 4 e e e 4 e e e e e e 4 e e 
        e e e e 4 e 4 e e e e e e 4 e 
        e e e e e 4 e e e e e e e e e 
        e e e e e e e e e e 4 e e e e 
        e e e e e e e e e e e e 4 e e 
        e e e e e e e e e e e e e e e 
        e 4 e 4 e e e e e e e e e e e 
        e e 4 e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e 
        e e e e e e e e 4 e e e e e e 
        e e e e e e e e e e e e e e e 
        e e e e e e e 4 e e e e e e e 
        e 4 e e e e e e e e e e e 4 e 
        e e 4 e e e e e e e e e e e 4 
        `)
    game.showLongText("Ce n'est pas la bonne plante! C'était un piege et la sorciere n'était qu'un pion! La vraie plante se trouve tout droit jausqu'a la fin de la foret a droite.", DialogLayout.Top)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    héros.setImage(assets.image`Héros droite`)
    direction = "gauche"
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.plante, function (sprite) {
    game.showLongText("Approche toi de la pencarte pour voir ce qu'elle dit ou va directement donner la plante a ton cousin.", DialogLayout.Top)
    mauvaiseplanteramasée = 1
    mauvaise_plante.setFlag(SpriteFlag.RelativeToCamera, true)
    mauvaise_plante.left = 16
    mauvaise_plante.left = 117
    mauvaise_plante.z = 50
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprites.destroy(bombe)
})
let projectile3: Sprite = null
let projectile2: Sprite = null
let projectile: Sprite = null
let fond: Sprite = null
let textSprite: TextSprite = null
let bonne_plante: Sprite = null
let pancarte: Sprite = null
let mauvaise_plante: Sprite = null
let cousin: Sprite = null
let blabla2: Sprite = null
let blabla: Sprite = null
let Enemypublicn1: Sprite = null
let arbre: Sprite = null
let bombe: Sprite = null
let grandpere: Sprite = null
let direction = ""
let héros: Sprite = null
let dragon_3: Sprite = null
let dragon_2: Sprite = null
let dragon_1: Sprite = null
let crane_3: Sprite = null
let crane_2: Sprite = null
let crane_1: Sprite = null
let serpent_3: Sprite = null
let serpent_2: Sprite = null
let serpent_1: Sprite = null
let mauvaiseplanteramasée = 0
let plantesramasées = 0
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
    if (info.life() == 0) {
        game.gameOver(false)
    }
})
forever(function () {
	
})
