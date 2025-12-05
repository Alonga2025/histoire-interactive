// Code généré automatiquement. Ne pas modifier.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "niveau":
            case "niveau1":return tiles.createTilemap(hex`19001900030303030303010101010101010101010101010101010101010303030303030303030303030103030303030303030301010103030303030303030303030301030303030303030303010101111111111103030303030303010303030303030303030303030b0b08061103030303030303010303030303030303030303030e070c061103030303030101010101010303030303030303030f0d0c040303030303010101030303010303030303030301030e070c051010100101010103030303010101010101030101030f0d0c051103030101010103030303010101010101010101030e070c041103030303030303030303010101010101010101010f0d0c061103030303030303030303010301030303030303010a0a090611030303010101010101010103010303030303030111111111110303030303030303030303030103030303030301030303030303030303030303030303030301030303030303010303030303030303030303030303030303010303030303030102020202020202020202020202030303030103030303030101020202020202020202020202020303030303030303030101030202020202020202020202020203030303030303030301010302020202020202020202020202030303030303030303030103020202020202020202020202020303030301030303030301010202020202020202020202020203030303010303030303030302020202020202020202020202030303030103030303030303010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
222222...................
.....2222222.222222222...
...........2.2.......2...
22222......2.2.......2222
....2....222.2222........
....2...22......2.....222
....22222...222.22222.2.2
...........2..2......2..2
....222....2..2.........2
....2.222222..2..........
....2..22222222.2.222222.
....2..2........2.2....2.
22222..2222222222.2....2.
................2.2....2.
................2.2....2.
................2.2..22..
................2.2..2..2
................2.2..2..2
................2.2...2.2
................2.2...2..
..2.............2.2...222
22222222222222222.2222222
.........................
.........................
.........................
`, [myTiles.transparency16,sprites.castle.tileGrass1,myTiles.tile2,myTiles.tile3,sprites.dungeon.doorClosedWest,sprites.dungeon.doorLockedWest,sprites.dungeon.stairEast,sprites.dungeon.purpleInnerNorthEast,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleInnerSouthEast,sprites.dungeon.purpleInnerNorthWest,sprites.dungeon.purpleInnerSouthWest,sprites.dungeon.floorDark1,sprites.dungeon.floorDark0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile1":
            case "tile3":return tile3;
        }
        return null;
    })

}
// Code généré automatiquement. Ne pas modifier.
