@namespace
class SpriteKind:
    Bouton = SpriteKind.create()
    Papi = SpriteKind.create()
    personnage = SpriteKind.create()

def on_on_overlap(sprite, otherSprite):
    game.show_long_text("Jeun homme. Je n'ais pas beaucoup de temps pour te parler : ton oncle est dans la foret, blessé sans aucune aide, ta mére t'en a surrement déja parlé",
        DialogLayout.TOP)
    game.show_long_text("ton oncle est dans la foret, blessé sans aucune aide, ta mére t'en a surrement déja parlé",
        DialogLayout.TOP)
    game.show_long_text("Il est notre seul espoir, va l'aider, s'il te plait.",
        DialogLayout.TOP)
    sprites.destroy_all_sprites_of_kind(SpriteKind.Papi)
sprites.on_overlap(SpriteKind.player, SpriteKind.Papi, on_on_overlap)

def créerpartie():
    global héros, grandpere
    if partie == 1:
        héros = sprites.create(assets.image("""
            Sprite 2
            """), SpriteKind.player)
        héros.ay = 200
        controller.move_sprite(héros)
        héros.set_stay_in_screen(True)
        scene.set_background_image(assets.image("""
            Tout commence
            """))
        game.set_dialog_frame(assets.image("""
            Sprite2
            """))
        game.show_long_text("\"Zack était dans la salle de theatre abandonné.\"",
            DialogLayout.TOP)
        game.show_long_text("Quand soudain, des pas se font entendre.", DialogLayout.TOP)
        grandpere = sprites.create(assets.image("""
            Papi
            """), SpriteKind.Papi)
        grandpere.set_position(143, 112)
        game.show_long_text("Avance vers lui pour lui parler.", DialogLayout.TOP)
        menagepartie()
    elif partie == 2:
        pass
    else:
        pass

def on_up_pressed():
    héros.vy = -100
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def menagepartie():
    sprites.destroy_all_sprites_of_kind(SpriteKind.Papi)
    sprites.destroy_all_sprites_of_kind(SpriteKind.enemy)
    sprites.destroy_all_sprites_of_kind(SpriteKind.personnage)
grandpere: Sprite = None
héros: Sprite = None
partie = 0
scene.set_background_image(assets.image("""
    Lac
    """))
game.show_long_text("Cher joueur, ce jeu est un mélange d'action et d'histoire interactive. On espere que tu vas aimer.",
    DialogLayout.CENTER)
game.show_long_text(" Pour boujer utilise le courseur et pour sauter appuie sur le bouton du centre",
    DialogLayout.CENTER)
if controller.A.is_pressed():
    partie = 1

def on_forever():
    controller.move_sprite(héros, 100, 0)
forever(on_forever)
