export function generateAllChunks(cWidth, cHeight, seed) {
  const cMatrix = [];
  
  for (let y = 0; y < cHeight; y++) {
    const row = [];
    for (let x = 0; x < cWidth; x++) {
      if (Math.random() < 0.8) {
        row.push(0); // normal
      } else {
        row.push(1); // structure
      }
    }
    cMatrix.push(row);
  }
  return cMatrix;
}

export function generateAllTiles(cMatrix, seed) {
  const tMatrix = [];
  const tHeight = cMatrix.length * 3;
  const tWidth = cMatrix[0].length * 3;
  
  for (let y = 0; y < tHeight; y++) {
    const row = [];
    for (let x = 0; x < tWidth; x++) {
      if (x % 3 == 0 && y % 3 == 0) {
        row.push("T");
      } else if (x % 3 == 0 || y % 3 == 0) {
        row.push("R")
      } else {
        row.push("A")
      }
    }
    tMatrix.push(row);
  }
  return tMatrix;
}