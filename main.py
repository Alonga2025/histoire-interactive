@namespace
class SpriteKind:
    Bouton = SpriteKind.create()
    Papi = SpriteKind.create()
    personnage = SpriteKind.create()
    tronc = SpriteKind.create()
    sorciere = SpriteKind.create()
    plante = SpriteKind.create()
    rien = SpriteKind.create()
    coffre = SpriteKind.create()
    magicien = SpriteKind.create()
    écriture = SpriteKind.create()
    instructions = SpriteKind.create()
    parle = SpriteKind.create()

def on_on_overlap():
    sprites.destroy(otherSprite4)
    sprites.destroy(bombe)
sprites.on_overlap(SpriteKind.projectile, SpriteKind.enemy, on_on_overlap)

def on_on_overlap2():
    game.set_dialog_frame(img("""
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
        """))
    game.show_long_text("Ce n'est pas la bonne plante! C'était un piege et la sorciere n'était qu'un pion! La vraie plante se trouve tout droit jausqu'a la fin de la foret a droite.",
        DialogLayout.TOP)
sprites.on_overlap(SpriteKind.player, SpriteKind.instructions, on_on_overlap2)

def on_on_overlap3():
    game.set_dialog_cursor(img("""
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
        """))
    game.show_long_text("Zack! C'est bien toi? Tu est venu rendre visite au voisin?",
        DialogLayout.TOP)
    game.set_dialog_cursor(img("""
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
        """))
    game.show_long_text("VOISIN ?! Cette sorciere palrait de son coisin.",
        DialogLayout.TOP)
    game.set_dialog_cursor(img("""
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
        """))
    game.show_long_text("Je pense que tu as déja remarqué que celui ci est assez malade. ",
        DialogLayout.TOP)
    game.show_long_text("Malhereusement il n y a aucune plante pour le guérir et elle est introuvable...",
        DialogLayout.TOP)
    game.show_long_text("Je vois que tu n'Est pas tres bavard ... Venez mes petits animaux, le diner est pret!",
        DialogLayout.TOP)
    Appel_les_monstres()
    game.set_dialog_cursor(img("""
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
        """))
    game.show_long_text("Les monstres ont rempli la salle et tu dois tous les tuer si tu veux que la soriere parte et si tu veux savoir ce qu'il se trouve dans le couloir de au fond a gauche de la salle.",
        DialogLayout.TOP)
    game.show_long_text("Fais attention! Chaque fois que tu touche les monstres tu perds une vie. Le bouton B pourrait t'etre utile.",
        DialogLayout.TOP)
    sprites.destroy(blabla)
sprites.on_overlap(SpriteKind.player, SpriteKind.rien, on_on_overlap3)

def on_on_overlap4(sprite, otherSprite):
    global partie
    game.set_dialog_frame(img("""
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
        """))
    game.show_long_text("Jeune homme. Je n'ai pas beaucoup de temps pour te parler :",
        DialogLayout.TOP)
    game.show_long_text(" ton cousin est dans la foret, blessé sans aucune aide, ta mére t'en a surrement déja parlé",
        DialogLayout.TOP)
    game.show_long_text("Ce qu'elle ne t'as pourtant PAS dit ...", DialogLayout.TOP)
    game.set_dialog_frame(assets.image("""
        Field blanc
        """))
    game.show_long_text("Comment est ce qu'il pourrait savoir ca, lui?!",
        DialogLayout.TOP)
    game.set_dialog_frame(img("""
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
        """))
    game.show_long_text("c'est que pour le guérir il faut trouver une herbe médicale. Et aussi, je sais que ta mere ne voulait pas que tu saches cela, mais  ton frere n'est pas VRAIMENT malade...",
        DialogLayout.TOP)
    game.set_dialog_frame(assets.image("""
        Field blanc
        """))
    game.show_long_text("Hein?! C'est pourtant ce que sa mere lui avait dit... pourquoi lui mentirais-t-elle?",
        DialogLayout.TOP)
    game.set_dialog_frame(img("""
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
        """))
    game.show_long_text("Il a été ensorcele, mais en tout cas ... trouve la bonne herbe et guéris le. Continue jausqu'a ce que les arbres commencent a changer de couleur, si tu vois un grand arbre aproche toi de lui (touche le) et tu pourras voir les instructions.",
        DialogLayout.TOP)
    sprites.destroy_all_sprites_of_kind(SpriteKind.Papi)
    game.set_dialog_frame(assets.image("""
        Field blanc
        """))
    game.show_long_text("ATTANDEZ! COMMEN... Le papi était déja parti.",
        DialogLayout.TOP)
    partie = 2
    créerpartie()
sprites.on_overlap(SpriteKind.player, SpriteKind.Papi, on_on_overlap4)

def on_on_overlap5():
    global plantesramasées
    game.show_long_text("Va donner la plante a ton cousin.", DialogLayout.BOTTOM)
    plantesramasées = 1
    bonne_plante.set_flag(SpriteFlag.RELATIVE_TO_CAMERA, True)
    bonne_plante.left = 70
    bonne_plante.left = 117
    bonne_plante.z = 50
sprites.on_overlap(SpriteKind.player, SpriteKind.plante, on_on_overlap5)

def Appel_les_monstres():
    global serpent_1, serpent_2, serpent_3, crane_1, crane_2, crane_3, dragon_1, dragon_2, dragon_3
    serpent_1 = sprites.create(assets.image("""
        serpent 1
        """), SpriteKind.enemy)
    tiles.place_on_tile(serpent_1, tiles.get_tile_location(0, 11))
    serpent_2 = sprites.create(assets.image("""
        serpent 2
        """), SpriteKind.enemy)
    tiles.place_on_tile(serpent_2, tiles.get_tile_location(2, 11))
    serpent_3 = sprites.create(assets.image("""
        serpent 3
        """), SpriteKind.enemy)
    tiles.place_on_tile(serpent_3, tiles.get_tile_location(1, 10))
    crane_1 = sprites.create(assets.image("""
        crane 1
        """), SpriteKind.enemy)
    tiles.place_on_tile(crane_1, tiles.get_tile_location(1, 6))
    crane_2 = sprites.create(assets.image("""
        crane 2
        """), SpriteKind.enemy)
    tiles.place_on_tile(crane_2, tiles.get_tile_location(2, 4))
    crane_3 = sprites.create(assets.image("""
        crane 3
        """), SpriteKind.enemy)
    tiles.place_on_tile(crane_3, tiles.get_tile_location(3, 4))
    dragon_1 = sprites.create(assets.image("""
        Dragon 1
        """), SpriteKind.enemy)
    tiles.place_on_tile(dragon_1, tiles.get_tile_location(3, 11))
    dragon_2 = sprites.create(assets.image("""
        Dragon 2
        """), SpriteKind.enemy)
    tiles.place_on_tile(dragon_2, tiles.get_tile_location(1, 12))
    dragon_3 = sprites.create(assets.image("""
        Dragon 3
        """), SpriteKind.enemy)
    tiles.place_on_tile(dragon_3, tiles.get_tile_location(0, 4))

def on_down_pressed():
    global direction
    héros.set_image(assets.image("""
        Héros bas
        """))
    direction = "bas"
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

def créerpartie():
    global héros, grandpere, plantesramasées, mauvaiseplanteramasée, bombe, arbre, Enemypublicn1, blabla, blabla2, cousin, mauvaise_plante, pancarte, bonne_plante, textSprite, fond, coffre2, mySprite
    if partie == 1:
        héros = sprites.create(assets.image("""
            Héros bas
            """), SpriteKind.player)
        controller.move_sprite(héros, 100, 0)
        héros.set_position(11, 114)
        if controller.up.is_pressed():
            héros.vy = -100
        héros.set_stay_in_screen(True)
        scene.set_background_image(assets.image("""
            Tout commence
            """))
        game.set_dialog_frame(assets.image("""
            Sprite2
            """))
        game.show_long_text("Alors que Zack s'appretait a erré un peu dans le village et a glisser dans la routine de sa vie (si on peut dire cela puisque le vilage a une clé de Démocles au dessous de sa tete bien qu'il n'en est pas au courant),",
            DialogLayout.FULL)
        game.show_long_text("sa mere l'interomp, lui disant que ca ne valait meme pas la paine. Perplexe il obéi et il écoutat ce qu'elle avait a lui dire...",
            DialogLayout.FULL)
        game.show_long_text("Comme sa mere lui a dit d'aller dans la salle de theatre abandonée du village, le voici.\"",
            DialogLayout.TOP)
        game.show_long_text("Les instructions de sa mere tournaient en boucle dans sa tete, dépuis qu'il est sortit de chez lui",
            DialogLayout.TOP)
        game.set_dialog_frame(assets.image("""
            field
            """))
        game.show_long_text("Écoute moi bien, il faut absolument que tu ailles dans la foret enfin de retrouver ton cousin.",
            DialogLayout.TOP)
        game.set_dialog_frame(assets.image("""
            Field blanc
            """))
        game.show_long_text("SON COUSIN ?! Il les avaient laissées il y a longtemps ... juste avant qu ele village soit condamné. C'était comme un grand frere pour lui ... Avant qu'il parte",
            DialogLayout.TOP)
        game.set_dialog_frame(assets.image("""
            field
            """))
        game.show_long_text("Quand tu arriveras dans la foret ÉVITE d'aller le coté gauche AVANT d'avoir trouv ton cousin. ",
            DialogLayout.TOP)
        game.show_long_text("Zack ... Il est important que tu le retrouves, il est notre seul espoir.",
            DialogLayout.TOP)
        game.set_dialog_frame(assets.image("""
            Field blanc
            """))
        game.show_long_text("Et ces instrictions ne fesaient que de le rendre encore plus perplexe. ",
            DialogLayout.TOP)
        game.show_long_text("Le son de pas venant dans sa direction le sortirent de sa reflexion.",
            DialogLayout.TOP)
        grandpere = sprites.create(assets.image("""
            Papi
            """), SpriteKind.Papi)
        grandpere.set_position(143, 112)
        game.show_long_text("Avance vers lui pour lui parler.", DialogLayout.TOP)
    elif partie == 2:
        plantesramasées = 0
        mauvaiseplanteramasée = 0
        tiles.set_current_tilemap(tilemap("""
            niveau
            """))
        controller.move_sprite(héros)
        tiles.place_on_tile(héros, tiles.get_tile_location(29, 22))
        héros.set_kind(SpriteKind.player)
        héros.ay = 0
        scene.camera_follow_sprite(héros)
        game.set_dialog_frame(assets.image("""
            Sprite2
            """))
        game.show_long_text("En entrant dans la foret, tu vois que les arbres commencent a changer de couleur et un picotement dans tes mains... Se pourrai-t-il que cette foret soit magique?",
            DialogLayout.TOP)
        info.set_life(5)
        bombe = sprites.create(assets.image("""
                Projectile
                """),
            SpriteKind.projectile)
        arbre = sprites.create(assets.image("""
            Arbre
            """), SpriteKind.tronc)
        Enemypublicn1 = sprites.create(assets.image("""
            sorciere
            """), SpriteKind.sorciere)
        blabla = sprites.create(assets.image("""
            rien
            """), SpriteKind.rien)
        blabla2 = sprites.create(assets.image("""
            myImage
            """), SpriteKind.parle)
        cousin = sprites.create(assets.image("""
                Cousin malade
                """),
            SpriteKind.magicien)
        mauvaise_plante = sprites.create(assets.image("""
                mauvaise plante
                """),
            SpriteKind.plante)
        pancarte = sprites.create(assets.image("""
                Pencarte
                """),
            SpriteKind.instructions)
        bonne_plante = sprites.create(assets.image("""
            plante
            """), SpriteKind.plante)
        tiles.place_on_tile(cousin, tiles.get_tile_location(29, 16))
        tiles.place_on_tile(mauvaise_plante, tiles.get_tile_location(1, 19))
        tiles.place_on_tile(pancarte, tiles.get_tile_location(1, 20))
        tiles.place_on_tile(bonne_plante, tiles.get_tile_location(29, 0))
        textSprite = textsprite.create("Inventaire :")
        tiles.place_on_tile(arbre, tiles.get_tile_location(17, 20))
        tiles.place_on_tile(blabla, tiles.get_tile_location(3, 7))
        tiles.place_on_tile(Enemypublicn1, tiles.get_tile_location(0, 7))
        textSprite.set_flag(SpriteFlag.RELATIVE_TO_CAMERA, True)
        textSprite.left = 5
        textSprite.bottom = 110
        textSprite.z = 50
        textSprite.set_icon(img("""
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
            """))
        fond = sprites.create(img("""
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
                """),
            SpriteKind.écriture)
        fond.set_flag(SpriteFlag.RELATIVE_TO_CAMERA, True)
        fond.left = 5
        fond.bottom = 117
        if SpriteKind.enemy == 0:
            sprites.destroy(Enemypublicn1)
    else:
        tiles.set_current_tilemap(tilemap("""
            niveau
            """))
        game.set_dialog_frame(assets.image("""
            Field blanc
            """))
        game.show_long_text("Finalement il est arrivée a guérir son cousin, c'est maintenant  le temps de partir...",
            DialogLayout.TOP)
        héros.ay = 0
        controller.move_sprite(héros, 100, 100)
        tiles.place_on_tile(héros, tiles.get_tile_location(29, 15))
        coffre2 = sprites.create(assets.image("""
            Coffre
            """), SpriteKind.coffre)
        tiles.place_on_tile(coffre2, tiles.get_tile_location(29, 5))
        mySprite = sprites.create(assets.image("""
                Cousin guéri
                """),
            SpriteKind.player)
        game.set_dialog_frame(img("""
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
            """))
        game.show_long_text("Oh la la, que ca fait du bien! ", DialogLayout.TOP)
        game.set_dialog_frame(assets.image("""
            Field blanc
            """))
        game.show_long_text("Un silence s'instale entre les deux...", DialogLayout.TOP)
        game.set_dialog_frame(img("""
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
            """))
        game.show_long_text("Tu est faché contre moi n'est pas? Tu pense surement que je vous ai quitté ? Bien sur que c'est ce que tu pense cela! Ca venait surement avec le sortilege de la sorciére ... Super!",
            DialogLayout.TOP)
        game.show_long_text("En tout cas fréro moi je dois aller au palais du Royaume",
            DialogLayout.TOP)
        cousin = sprites.create(assets.image("""
                Cousin en magicien
                """),
            SpriteKind.magicien)
        game.show_long_text("Quoi?! Attends tu ne peux pas me laisser la! Je veux aller avec toi?",
            DialogLayout.TOP)
        game.set_dialog_frame(img("""
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
            """))
        game.show_long_text("Et maman? Qui va s'occuper d'elle?", DialogLayout.TOP)
        game.set_dialog_frame(assets.image("""
            Field blanc
            """))
        game.show_long_text("Elle a énormemant d'amis au vilage, il suffit qu'on la prévienne.",
            DialogLayout.TOP)
        game.set_dialog_frame(img("""
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
            """))
        game.show_long_text("... D'accord, si tu as survécu a la sorciére c'est suréemnt que tu as découvert tes pouvoirs. On se retrouve au coffre",
            DialogLayout.TOP)
        game.set_dialog_frame(assets.image("""
            Field blanc
            """))
        game.show_long_text("OU est ce coffre?", DialogLayout.TOP)
        game.set_dialog_frame(img("""
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
            """))
        game.show_long_text("Cherche a la droite de la foret. On se retrouve la bas fréro",
            DialogLayout.TOP)

def on_on_overlap6():
    if plantesramasées == 1:
        créerpartie()
    elif mauvaiseplanteramasée == 0:
        game.set_dialog_frame(assets.image("""
            Sprite2
            """))
        game.show_long_text("Oh non! Tu vie s de t'approcher de ton cousin sans la plante médicale! Tu as attrapé son sort et maintenant vous etez tout les deux coincées dans la foret.",
            DialogLayout.TOP)
        game.game_over(False)
    else:
        game.set_dialog_frame(assets.image("""
            Sprite2
            """))
        game.show_long_text("Oh non! Tu vie s de t'approcher de ton cousin sans la plante médicale! Tu as attrapé son sort et maintenant vous etez tout les deux coincées dans la foret.",
            DialogLayout.TOP)
        game.game_over(False)
sprites.on_overlap(SpriteKind.player, SpriteKind.magicien, on_on_overlap6)

def on_on_overlap7(sprite2, otherSprite2):
    info.change_life_by(-1)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap7)

def on_up_pressed():
    global direction
    héros.set_image(assets.image("""
        Héros haut
        """))
    direction = "haut"
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_on_overlap8():
    game.set_dialog_cursor(assets.image("""
        Field blanc
        """))
    game.show_long_text("Cousin? C'Est bien toi?", DialogLayout.TOP)
    game.set_dialog_cursor(img("""
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
        """))
    game.show_long_text("ATTANDS! Ne t'aproche pas de moi!", DialogLayout.TOP)
    game.show_long_text("Je suis ensorcelé ca ne se voit pas? Tu ne peux venir vers moi QUE si tu as la plante médicinale, sinon vas attraper mon sort.",
        DialogLayout.TOP)
    game.show_long_text("En tout cas la plante ne se trouve pas a droite elle se trouve a ...",
        DialogLayout.TOP)
    game.set_dialog_cursor(assets.image("""
        Field blanc
        """))
    game.show_long_text("Avant de me dire tout ca, comment est ce que tu t'Est retrouvé ici? Pourquoi tu nous a abbandoné moi et maman il y a trois mois, pourquoi ...",
        DialogLayout.TOP)
    game.set_dialog_cursor(img("""
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
        """))
    game.show_long_text("Écoute frérot j'ai peut de temps. Va chercher l'herbe avant qu'il ne soit trop tard...",
        DialogLayout.TOP)
    game.set_dialog_cursor(assets.image("""
        Field blanc
        """))
    game.show_long_text("Il faut aller chercher l'herbe médicinale ... si vous vous souvenez du seul indice qu'Abriel vous a dit.",
        DialogLayout.TOP)
    sprites.destroy(blabla2)
sprites.on_overlap(SpriteKind.player, SpriteKind.parle, on_on_overlap8)

def on_right_pressed():
    global direction
    héros.set_image(assets.image("""
        Héros gauche
        """))
    direction = "droite"
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_on_overlap9(sprite3, otherSprite3):
    game.set_dialog_frame(assets.image("""
        Sprite2
        """))
    game.show_long_text("Voila c'est la fin.", DialogLayout.TOP)
    game.set_dialog_frame(img("""
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
        """))
    game.show_long_text("Un peu de patience fréro on n'as meme pas prevenue maman.",
        DialogLayout.TOP)
    game.set_dialog_frame(assets.image("""
        Sprite2
        """))
    game.show_long_text("Partons a l'aventure!", DialogLayout.TOP)
    game.game_over(True)
sprites.on_overlap(SpriteKind.player, SpriteKind.coffre, on_on_overlap9)

def on_on_overlap10():
    global mauvaiseplanteramasée
    game.show_long_text("Approche toi de la pencarte pour voir ce qu'elle dit ou va directement donner la plante a ton cousin.",
        DialogLayout.TOP)
    mauvaiseplanteramasée = 1
    mauvaise_plante.set_flag(SpriteFlag.RELATIVE_TO_CAMERA, True)
    mauvaise_plante.left = 70
    mauvaise_plante.left = 117
    mauvaise_plante.z = 50
sprites.on_overlap(SpriteKind.player, SpriteKind.player, on_on_overlap10)

def on_left_pressed():
    global direction
    héros.set_image(assets.image("""
        Héros droite
        """))
    direction = "gauche"
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_on_overlap11():
    game.set_dialog_frame(assets.image("""
        Tronc
        """))
    game.show_long_text("Tu est finalement arrivé? ", DialogLayout.FULL)
    game.show_long_text("Il faut chercher ton oncle dans la fotret (un vrai labyrinthe.)",
        DialogLayout.FULL)
    game.show_long_text("Dans cette  foret tu trouveras peut etre des amis, mais les ennemis ne sont pas loin.",
        DialogLayout.FULL)
    game.show_long_text("EN gros évite la gauche", DialogLayout.FULL)
    sprites.destroy(arbre)
sprites.on_overlap(SpriteKind.player, SpriteKind.tronc, on_on_overlap11)

projectile3: Sprite = None
projectile2: Sprite = None
projectile: Sprite = None
mySprite: Sprite = None
coffre2: Sprite = None
fond: Sprite = None
textSprite: TextSprite = None
mauvaise_plante: Sprite = None
cousin: Sprite = None
blabla2: Sprite = None
Enemypublicn1: Sprite = None
arbre: Sprite = None
mauvaiseplanteramasée = 0
grandpere: Sprite = None
direction = ""
dragon_3: Sprite = None
dragon_2: Sprite = None
dragon_1: Sprite = None
crane_3: Sprite = None
crane_2: Sprite = None
crane_1: Sprite = None
serpent_3: Sprite = None
serpent_2: Sprite = None
serpent_1: Sprite = None
plantesramasées = 0
bonne_plante: Sprite = None
pancarte: Sprite = None
héros: Sprite = None
otherSprite4: Sprite = None
bombe: Sprite = None
partie = 0
blabla: Sprite = None
scene.set_background_image(assets.image("""
    Lac
    """))
game.show_long_text("Salut joueur, ce jeu est un mélange d'action et d'histoire interactive. ",
    DialogLayout.CENTER)
game.show_long_text("Pour bouger, utilise le curseur. ", DialogLayout.CENTER)
game.show_long_text("Tu n'auras aucun besoin de sauter, donc il n y a aucun bouton pour cette fonctionalité",
    DialogLayout.CENTER)
game.show_long_text("On espère que tu vas aimer.", DialogLayout.CENTER)
if controller.A.is_pressed():
    partie = 1
créerpartie()

def on_forever():
    if info.life() == 0:
        game.game_over(False)
forever(on_forever)

def on_forever2():
    global bombe, projectile, projectile2, projectile3
    while partie == 0:
        if controller.B.is_pressed():
            if direction == "haut":
                bombe = sprites.create_projectile_from_sprite(assets.image("""
                    Projectile
                    """), héros, 0, -50)
            elif direction == "bas":
                projectile = sprites.create_projectile_from_sprite(assets.image("""
                    Projectile
                    """), héros, 0, 50)
            elif direction == "gauche":
                projectile2 = sprites.create_projectile_from_sprite(assets.image("""
                    Projectile
                    """), héros, -50, 0)
            else:
                projectile3 = sprites.create_projectile_from_sprite(assets.image("""
                    Projectile
                    """), héros, 0, 50)
forever(on_forever2)
