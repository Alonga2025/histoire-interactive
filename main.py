@namespace
class SpriteKind:
    Bouton = SpriteKind.create()
    Papi = SpriteKind.create()
    personnage = SpriteKind.create()
    tronc = SpriteKind.create()
    sorciere = SpriteKind.create()
    plante = SpriteKind.create()
    rien = SpriteKind.create()

def on_on_overlap(sprite3, otherSprite3):
    game.set_dialog_frame(assets.image("""
        Tronc
        """))
    game.show_long_text("Tu est finalement arrivé? ", DialogLayout.FULL)
    game.show_long_text("Il faut chercher ton oncle dans la fotret (un vrai labyrinthe.)",
        DialogLayout.FULL)
    game.show_long_text("Dans cette  foret tu trouveras peut etre des amis, mais les ennemis ne sont pas loin.",
        DialogLayout.FULL)
    game.show_long_text("EN gros évite la gauche", DialogLayout.BOTTOM)
    sprites.destroy(otherSprite3)
sprites.on_overlap(SpriteKind.player, SpriteKind.tronc, on_on_overlap)

def on_on_overlap2(sprite, otherSprite):
    global partie
    game.show_long_text("Jeune homme. Je n'ai pas beaucoup de temps pour te parler :",
        DialogLayout.TOP)
    game.show_long_text(" ton oncle est dans la foret, blessé sans aucune aide, ta mére t'en a surrement déja parlé",
        DialogLayout.TOP)
    game.show_long_text("Il est notre seul espoir, va l'aider, s'il te plait.",
        DialogLayout.TOP)
    sprites.destroy_all_sprites_of_kind(SpriteKind.Papi)
    partie = 2
    créerpartie()
sprites.on_overlap(SpriteKind.player, SpriteKind.Papi, on_on_overlap2)

def on_down_pressed():
    héros.set_image(assets.image("""
        Héros bas
        """))
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

def créerpartie():
    global héros, grandpere, arbre, mySprite, coffre, mySprite2
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
        game.show_long_text("Écoute moi bien, il faut absolument que tu ailles dans la foret.",
            DialogLayout.TOP)
        game.show_long_text("Quand tu arriveras dans la foret ÉVITE d'aller le coté gauche avant d'avoir trouv ton oncle. ",
            DialogLayout.TOP)
        game.show_long_text("Zack ... Il est important que tu le retrouves, il est notre seul espoir.",
            DialogLayout.TOP)
        game.set_dialog_frame(assets.image("""
            Field blanc
            """))
        game.show_long_text("Et ces instrictions ne fesaient que de le rendre plus perplexe. ",
            DialogLayout.TOP)
        game.show_long_text("Le son de pas venant dans sa direction le sortirent de sa reflexion.",
            DialogLayout.TOP)
        grandpere = sprites.create(assets.image("""
            Papi
            """), SpriteKind.Papi)
        grandpere.set_position(143, 112)
        game.show_long_text("Avance vers lui pour lui parler.", DialogLayout.TOP)
    elif partie == 2:
        info.set_life(3)
        héros.set_kind(SpriteKind.player)
        arbre = sprites.create(assets.image("""
            Arbre
            """), SpriteKind.tronc)
        mySprite = sprites.create(assets.image("""
            sorciere
            """), SpriteKind.enemy)
        coffre = sprites.create(assets.image("""
            Coffre
            """), SpriteKind.plante)
        mySprite2 = sprites.create(assets.image("""
            rien
            """), SpriteKind.rien)
        héros.ay = 0
        controller.move_sprite(héros, 100, 100)
        tiles.set_current_tilemap(tilemap("""
            niveau
            """))
        tiles.place_on_tile(héros, tiles.get_tile_location(24, 24))
        scene.camera_follow_sprite(héros)
        tiles.place_on_tile(arbre, tiles.get_tile_location(17, 20))
        tiles.place_on_tile(mySprite2, tiles.get_tile_location(3, 7))

def on_up_pressed():
    héros.set_image(assets.image("""
        Héros haut
        """))
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_on_overlap3(sprite2, otherSprite2):
    game.show_long_text("Tu dois etre Zack, n'est pas? Le neveu de notre cher voisin.",
        DialogLayout.TOP)
    game.show_long_text("VOisin ?! Mais cette sorciere ... elle prarle de son oncle!!!!!!!!!!!!!!!",
        DialogLayout.TOP)
    game.show_long_text("Malhereusement pour toi il n y a qu'un remede pour l'aider et il est introuvable... quel domage!",
        DialogLayout.BOTTOM)
    game.show_long_text("Elle y est pour quelque chose", DialogLayout.BOTTOM)
sprites.on_overlap(SpriteKind.player, SpriteKind.rien, on_on_overlap3)

def on_right_pressed():
    héros.set_image(assets.image("""
        Héros gauche
        """))
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_on_overlap4(sprite4, otherSprite4):
    sprites.destroy(otherSprite4)
    sprites.destroy(sprite4)
sprites.on_overlap(SpriteKind.projectile, SpriteKind.enemy, on_on_overlap4)

def on_left_pressed():
    héros.set_image(assets.image("""
        Héros droite
        """))
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

mySprite2: Sprite = None
coffre: Sprite = None
mySprite: Sprite = None
arbre: Sprite = None
grandpere: Sprite = None
héros: Sprite = None
partie = 0
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
    pass
forever(on_forever)
