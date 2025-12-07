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
}
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
    game.showLongText("Il a été ensorcele, mais en tout cas ... trouve la bonne herbe et guéris le. COntinue jausqu'a ce que les arbres commencent a changer de couleur, si tu vois un grand arbre aproche toi de lui (touche le) et tu pourras voir les instructions.", DialogLayout.Top)
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite2, otherSprite) {
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.rien, function (sprite) {
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
})
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
        if (controller.B.isPressed()) {
            if (direction == "haut") {
                bombe = sprites.createProjectileFromSprite(assets.image`Projectile`, héros, 0, -50)
            } else if (direction == "bas") {
                projectile = sprites.createProjectileFromSprite(assets.image`Projectile`, héros, 0, 50)
            } else if (direction == "gauche") {
                projectile2 = sprites.createProjectileFromSprite(assets.image`Projectile`, héros, -50, 0)
            } else {
                projectile3 = sprites.createProjectileFromSprite(assets.image`Projectile`, héros, 0, 50)
            }
        }
        controller.moveSprite(héros, 100, 100)
        tiles.setCurrentTilemap(tilemap`niveau`)
        game.setDialogFrame(assets.image`Sprite2`)
        game.showLongText("En entrant dans la foret, tu vois que les arbres commencent a changer de couleur et un picotement dans tes mains... Se pourrai-t-il que cette foret soit magique?", DialogLayout.Top)
        info.setLife(5)
        héros.setKind(SpriteKind.Player)
        héros.ay = 0
        bombe = sprites.create(assets.image`Projectile`, SpriteKind.Projectile)
        arbre = sprites.create(assets.image`Arbre`, SpriteKind.tronc)
        Enemypublicn1 = sprites.create(assets.image`sorciere`, SpriteKind.sorciere)
        blabla = sprites.create(assets.image`rien`, SpriteKind.rien)
        blabla2 = sprites.create(assets.image`myImage`, SpriteKind.Player)
        cousin = sprites.create(assets.image`Cousin malade`, SpriteKind.Player)
        if (SpriteKind.Enemy == 0) {
            sprites.destroy(Enemypublicn1)
        }
        tiles.placeOnTile(héros, tiles.getTileLocation(29, 24))
        scene.cameraFollowSprite(héros)
        tiles.placeOnTile(arbre, tiles.getTileLocation(17, 20))
        tiles.placeOnTile(blabla, tiles.getTileLocation(3, 7))
        tiles.placeOnTile(Enemypublicn1, tiles.getTileLocation(0, 7))
    } else {
        tiles.setCurrentTilemap(tilemap`niveau`)
        game.setDialogFrame(assets.image`Field blanc`)
        game.showLongText("Finalement il est arrivée a guérir son cousin, c'est maintenant  le temps de partir...", DialogLayout.Full)
        héros.ay = 0
        controller.moveSprite(héros, 100, 100)
        tiles.placeOnTile(héros, tiles.getTileLocation(29, 15))
        coffre2 = sprites.create(assets.image`Coffre`, SpriteKind.coffre)
        tiles.placeOnTile(coffre2, tiles.getTileLocation(29, 5))
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
        game.showLongText("Oh la la, que ca fait du bien! ", DialogLayout.Top)
        game.setDialogFrame(assets.image`Field blanc`)
        game.showLongText("Un silence s'instale entre les deux...", DialogLayout.Top)
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
        game.showLongText("Tu est faché contre moi n'est pas? Tu pense surement que je vous ai quitté ? Bien sur que c'est ce que tu pense cela! Ca venait surement avec le sortilege de la sorciére ... Super!", DialogLayout.Top)
        game.showLongText("En tout cas fréro moi je dois aller au palais du Royaume", DialogLayout.Top)
        cousin = sprites.create(assets.image`Cousin en magicien`, SpriteKind.magicien)
        game.showLongText("Quoi?! Attends tu ne peux pas me laisser la! Je veux aller avec toi?", DialogLayout.Top)
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
        game.showLongText("Et maman? Qui va s'occuper d'elle?", DialogLayout.Top)
        game.setDialogFrame(assets.image`Field blanc`)
        game.showLongText("Elle a énormemant d'amis au vilage, il suffit qu'on la prévienne.", DialogLayout.Top)
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
        game.showLongText("... D'accord, si tu as survécu a la sorciére c'est suréemnt que tu as découvert tes pouvoirs. On se retrouve au coffre", DialogLayout.Top)
        game.setDialogFrame(assets.image`Field blanc`)
        game.showLongText("OU est ce coffre?", DialogLayout.Top)
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
        game.showLongText("Cherche a la droite de la foret. On se retrouve la bas fréro", DialogLayout.Top)
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    héros.setImage(assets.image`Héros haut`)
    direction = "haut"
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.rien, function (sprite) {
    game.setDialogFrame(img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `)
    game.showLongText("Tu dois etre Zack, n'est pas? Le neveu de notre cher voisin.", DialogLayout.Top)
    game.setDialogFrame(assets.image`Sprite2`)
    game.showLongText("VOISIN ?! Mais cette sorciere ... elle parle de son cousin!!!!!!!!!!!!!!!", DialogLayout.Top)
    game.setDialogFrame(img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `)
    game.showLongText("Malhereusement pour toi il n y a qu'un remede pour l'aider et il est introuvable... quel domage!", DialogLayout.Top)
    game.setDialogFrame(assets.image`Sprite2`)
    game.showLongText("Elle y est pour quelque chose. Ne peut s'empecher de penser Zack", DialogLayout.Top)
    game.setDialogFrame(img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `)
    game.showLongText("Bon. Puisque je vois que tu n'est pas trés bavard ... MONSTRES!!!!!!!!!!!!!!!!!", DialogLayout.Top)
    sprites.destroy(blabla)
    Appel_les_monstres()
    game.setDialogFrame(assets.image`Tronc`)
    game.showLongText("Maintenant la salle entiére est remplie de monstres, il faut que tu les tue tous si tu veux savoir ou est ce que la sorciere cache la plante. Utilise le bouton B pour voir ce qu'il se passe.", DialogLayout.Bottom)
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
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    héros.setImage(assets.image`Héros droite`)
    direction = "gauche"
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprites.destroy(bombe)
})
let coffre2: Sprite = null
let cousin: Sprite = null
let blabla: Sprite = null
let Enemypublicn1: Sprite = null
let arbre: Sprite = null
let projectile3: Sprite = null
let projectile2: Sprite = null
let projectile: Sprite = null
let bombe: Sprite = null
let grandpere: Sprite = null
let direction = ""
let héros: Sprite = null
let blabla2: Sprite = null
let dragon_3: Sprite = null
let dragon_2: Sprite = null
let dragon_1: Sprite = null
let crane_3: Sprite = null
let crane_2: Sprite = null
let crane_1: Sprite = null
let serpent_3: Sprite = null
let serpent_2: Sprite = null
let serpent_1: Sprite = null
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
