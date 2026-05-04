import { mapTiles } from './mapping.js';

export function drawMap(ctx, map, tileset, tileSize, scale) {
  map.forEach((row, y) => {
    row.forEach((tileId, x) => {
      var mapping;
      
      if (x % 3 == 0) {
        if (y % 3 == 0) {
          mapping = mapTiles("T-SL-AD");
        }
        if (y % 3 == 1) {
          mapping = mapTiles("R-LC-HS-TT");
        }
        if (y % 3 == 2) {
          mapping = mapTiles("R-RC-HS-BB");
        }
      }
      if (x % 3 == 1) {
        if (y % 3 == 0) {
          mapping = mapTiles("R-TC-VS-LL");
        }
        if (y % 3 == 1) {
          mapping = mapTiles("A-AR-I4-TL");
        }
        if (y % 3 == 2) {
          mapping = mapTiles("A-AR-I4-BL");
        }
      }
      if (x % 3 == 2) {
        if (y % 3 == 0) {
          mapping = mapTiles("R-BC-VS-RR");
        }
        if (y % 3 == 1) {
          mapping = mapTiles("A-AR-I4-TR");
        }
        if (y % 3 == 2) {
          mapping = mapTiles("A-AR-I4-BR");
        }
      }
      
      ctx.drawImage(
          tileset,
          mapping[0] * tileSize, mapping[1] * tileSize, // Source
          tileSize, tileSize,   // Source size
          Math.floor(x * tileSize * scale), // Destination
          Math.floor(y * tileSize * scale),
          Math.floor(tileSize*scale), // Destination size
          Math.floor(tileSize*scale)
      );
    });
  });
}
