export function drawMap(ctx, map, tileset, tileSize) {
  map.forEach((row, y) => {
    row.forEach((tileId, x) => {
      if (tileId=="A") {
        ctx.fillStyle = "red";
      }
      if (tileId=="R") {
        ctx.fillStyle = "blue";
      }
      if (tileId=="T") {
        ctx.fillStyle = "yellow";
      }
      ctx.fillRect(tileSize*x, tileSize*y, tileSize, tileSize);
      /*
      ctx.drawImage(
          tileset,
          tileId * tileSize, 0, // Source (assuming a single row of tiles)
          tileSize, tileSize,   // Source size
          x * tileSize, y * tileSize, // Destination
          tileSize, tileSize    // Destination size
      );
      */
    });
  });
}