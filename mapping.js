export function mapTiles(tileId) {
  const mappingDict = {
    "I-TL": [0,0],
    "I-TR": [1,0],
    "I-BL": [0,1],
    "I-BR": [1,1],
    "P-HT": [2,0],
    "P-HB": [2,1],
    "P-VL": [0,2],
    "P-VR": [1,2],
    "T-TL": [4,0],
    "T-TR": [5,0],
    "T-BL": [4,1],
    "T-BR": [5,1],
    "C-TL": [2,2],
    "C-TR": [3,2],
    "C-BL": [2,3],
    "C-BR": [3,3],
    "Sh-TL": [4,2],
    "Sh-TR": [5,2],
    "Sh-BL": [4,3],
    "Sh-BR": [5,3],
    "Sv-TL": [6,0],
    "Sv-TR": [7,0],
    "Sv-BL": [6,1],
    "Sv-BR": [7,1],
    "F": [7,3]
  };
  return mappingDict[tileId];
}