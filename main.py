@namespace
class SpriteKind:
    Bouton = SpriteKind.create()
mySprite: Sprite = None
scene.set_background_image(assets.image("""
    Lac
    """))
game.show_long_text("Cher joueur, ce jeu est un mélange d'action et d'histoire interactive. On espere que tu vas aimer.",
    DialogLayout.CENTER)
if controller.A.is_pressed():
    game.show_long_text("\" Choisis! Si tu veux jouer en tant que fille clique sur le bouton de gauche. Si tu veux jouer en tant que garcon appuie sur le bouttonde droite.",
        DialogLayout.FULL)
    if controller.B.is_pressed():
        mySprite = sprites.create(assets.image("""
            Sprite 2
            """), SpriteKind.player)
        scene.set_background_image(assets.image("""
            Tout commence
            """))
    else:
        mySprite = sprites.create(assets.image("""
            FIlle 2
            """), SpriteKind.player)
        scene.set_background_image(assets.image("""
            Tout commence
            """))
    game.set_dialog_frame(assets.image("""
        Sprite2
        """))

def on_forever():
    controller.move_sprite(mySprite, 100, 100)
forever(on_forever)
