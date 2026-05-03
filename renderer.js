import { mapTiles } from './mapping.js';

export function drawMap(ctx, map, tileset, tileSize) {
  map.forEach((row, y) => {
    row.forEach((tileId, x) => {
      var mapping;
      
      if (x % 3 == 0) {
        if (y % 3 == 0) {
          mapping = mapTiles("F");
        }
        if (y % 3 == 1) {
          mapping = mapTiles("P-HT");
        }
        if (y % 3 == 2) {
          mapping = mapTiles("P-HB");
        }
      }
      if (x % 3 == 1) {
        if (y % 3 == 0) {
          mapping = mapTiles("P-VL");
        }
        if (y % 3 == 1) {
          mapping = mapTiles("I-TL");
        }
        if (y % 3 == 2) {
          mapping = mapTiles("I-BL");
        }
      }
      if (x % 3 == 2) {
        if (y % 3 == 0) {
          mapping = mapTiles("P-VR");
        }
        if (y % 3 == 1) {
          mapping = mapTiles("I-TR");
        }
        if (y % 3 == 2) {
          mapping = mapTiles("I-BR");
        }
      }
      
      ctx.drawImage(
          tileset,
          mapping[0] * tileSize, mapping[1] * tileSize, // Source
          tileSize, tileSize,   // Source size
          x * tileSize, y * tileSize, // Destination
          tileSize, tileSize    // Destination size
      );
    });
  });
}
