const tileNames = [
  // A: railroad type, layout type, relative pos
  //  NR = no railroad
  //  MR = main-diagonal railroad (top-left to bottom-right)
  //  AR = alternate-diagonal railroad (top-right to bottom-left)
  //  BR = both railroads
  //
  //  I4 = four-way intersection
  //  EH = enclosed horizontal
  //  ET = enclosed turn
  //  IH = intersection, one-way-closed horizontal
  //  EV = enclosed vertical
  //  EC = enclosed corner
  //  IV = intersection, one-way-closed vertical
  //  FF = filled
  ["A-NR-I4-TL","A-NR-I4-TR","A-NR-EH-TL","A-NR-EH-TR",
  "A-NR-ET-TL","A-NR-ET-TR","A-NR-IH-TL","A-NR-IH-TR",
  "A-MR-I4-TL","A-MR-I4-TR","A-MR-EH-TL","A-MR-EH-TR",
  "A-MR-ET-TL","A-MR-ET-TR","A-MR-IH-TL","A-MR-IH-TR"],
  ["A-NR-I4-BL","A-NR-I4-BR","A-NR-EH-BL","A-NR-EH-BR",
  "A-NR-ET-BL","A-NR-ET-BR","A-NR-IH-BL","A-NR-IH-BR",
  "A-MR-I4-BL","A-MR-I4-BR","A-MR-EH-BL","A-MR-EH-BR",
  "A-MR-ET-BL","A-MR-ET-BR","A-MR-IH-BL","A-MR-IH-BR"],
  ["A-NR-EV-TL","A-NR-EV-TR","A-NR-EC-TL","A-NR-EC-TR",
  "A-NR-IV-TL","A-NR-IV-TR","A-NR-FF-TL","A-NR-FF-TR",
  "A-MR-EV-TL","A-MR-EV-TR","A-MR-EC-TL","A-MR-EC-TR",
  "A-MR-IV-TL","A-MR-IV-TR","A-MR-FF-TL","A-MR-FF-TR"],
  ["A-NR-EV-BL","A-NR-EV-BR","A-NR-EC-BL","A-NR-EC-BR",
  "A-NR-IV-BL","A-NR-IV-BR","A-NR-FF-BL","A-NR-FF-BR",
  "A-MR-EV-BL","A-MR-EV-BR","A-MR-EC-BL","A-MR-EC-BR",
  "A-MR-IV-BL","A-MR-IV-BR","A-MR-FF-BL","A-MR-FF-BR"],
  
  ["A-AR-I4-TL","A-AR-I4-TR","A-AR-EH-TL","A-AR-EH-TR",
  "A-AR-ET-TL","A-AR-ET-TR","A-AR-IH-TL","A-AR-IH-TR",
  "A-BR-I4-TL","A-BR-I4-TR","A-BR-EH-TL","A-BR-EH-TR",
  "A-BR-ET-TL","A-BR-ET-TR","A-BR-IH-TL","A-BR-IH-TR"],
  ["A-AR-I4-BL","A-AR-I4-BR","A-AR-EH-BL","A-AR-EH-BR",
  "A-AR-ET-BL","A-AR-ET-BR","A-AR-IH-BL","A-AR-IH-BR",
  "A-BR-I4-BL","A-BR-I4-BR","A-BR-EH-BL","A-BR-EH-BR",
  "A-BR-ET-BL","A-BR-ET-BR","A-BR-IH-BL","A-BR-IH-BR"],
  ["A-AR-EV-TL","A-AR-EV-TR","A-AR-EC-TL","A-AR-EC-TR",
  "A-AR-IV-TL","A-AR-IV-TR","A-AR-FF-TL","A-AR-FF-TR",
  "A-BR-EV-TL","A-BR-EV-TR","A-BR-EC-TL","A-BR-EC-TR",
  "A-BR-IV-TL","A-BR-IV-TR","A-BR-FF-TL","A-BR-FF-TR"],
  ["A-AR-EV-BL","A-AR-EV-BR","A-AR-EC-BL","A-AR-EC-BR",
  "A-AR-IV-BL","A-AR-IV-BR","A-AR-FF-BL","A-AR-FF-BR",
  "A-BR-EV-BL","A-BR-EV-BR","A-BR-EC-BL","A-BR-EC-BR",
  "A-BR-IV-BL","A-BR-IV-BR","A-BR-FF-BL","A-BR-FF-BR"],
  
  // R: corner type, layout type, relative pos
  //  NC = no corner
  //  RC = right-corner railroad (ie direction)
  //  LC = left-corner railroad (ie direction)
  //  TC = top-corner railroad (ie direction)
  //  BC = bottom-corner railroad (ie direction)
  //  AC = all corner railroads
  //
  //  HS = horizontal (left-right) street
  //  HF = horizontal (left-right) filled
  //  HB = horizontal (left-right) both
  //  HR = horizontal (left-right) street & railroad
  //  VS = vertical (top-down) street
  //  VF = vertical (top-down) filled
  //  VB = vertical (top-down) both, street & railroad
  //  VR = vertical (top-down) railroad
  ["R-NC-HS-TT","R-RC-HS-TT","R-LC-HS-TT","R-AC-HS-TT",
  "R-NC-HF-TT","R-RC-HF-TT","R-LC-HF-TT","R-AC-HF-TT",
  "R-NC-VS-LL","R-NC-VS-RR","R-NC-VB-LL","R-NC-VB-RR",
  "R-NC-VF-LL","R-NC-VF-RR","R-NC-VR-LL","R-NC-VR-RR"],
  ["R-NC-HS-BB","R-RC-HS-BB","R-LC-HS-BB","R-AC-HS-BB",
  "R-NC-HF-BB","R-RC-HF-BB","R-LC-HF-BB","R-AC-HF-BB",
  "R-BC-VS-LL","R-BC-VS-RR","R-BC-VB-LL","R-BC-VB-RR",
  "R-BC-VF-LL","R-BC-VF-RR","R-BC-VR-LL","R-BC-VR-RR"],
  ["R-NC-HB-TT","R-RC-HB-TT","R-LC-HB-TT","R-AC-HB-TT",
  "R-NC-HR-TT","R-RC-HR-TT","R-LC-HR-TT","R-AC-HR-TT",
  "R-TC-VS-LL","R-TC-VS-RR","R-TC-VB-LL","R-TC-VB-RR",
  "R-TC-VF-LL","R-TC-VF-RR","R-TC-VR-LL","R-TC-VR-RR"],
  ["R-NC-HB-BB","R-RC-HB-BB","R-LC-HB-BB","R-AC-HB-BB",
  "R-NC-HR-BB","R-RC-HR-BB","R-LC-HR-BB","R-AC-HR-BB",
  "R-AC-VS-LL","R-AC-VS-RR","R-AC-VB-LL","R-AC-VB-RR",
  "R-AC-VF-LL","R-AC-VF-RR","R-AC-VR-LL","R-AC-VR-RR"],
  
  // T: entry type, detail
  //  EN = ending
  //  SL = straight line(s)
  //  BE = bending
  //  BR = branching
  //  TR = triple branching
  //
  //  0 to 7 clockwise entry points
  ["T-FF-FF","T-EN-00","T-EN-11","T-EN-22",
  "T-EN-33","T-EN-44","T-EN-55","T-EN-66",
  "T-EN-77","T-SL-MD","T-SL-AD","T-SL-BD",
  "T-SL-HH","T-SL-VV","T-SL-BB","x-xx-xx"],
  ["T-BE-05","T-BE-14","T-BR-H5","T-BR-H1",
  "T-BR-A4","T_BR-A0","T-SL-HA","T-BE-03",
  "T-BE-47","T-BR-H3","T-BR-H7","T-BR-M4",
  "T-BR-M0","T-SL-HM","x-xx-xx","x-xx-xx"],
  ["T-BE-36","T-BE-27","T-BR-V3","T-BR-V7",
  "T-BR-M2","T-BR-M6","T-SL-VM","T-BE-16",
  "T-BE-25","T-BR-V1","T-BR-V5","T-BR-A2",
  "T-BR-A6","T-SL-VA","x-xx-xx","x-xx-xx"],
  ["T-TR-77","T-TR-55","T-TR-11","T-TR-33",
  "T-TR-00","T-TR-66","T-TR-44","T-TR-22",
  "x-xx-xx","x-xx-xx","x-xx-xx","x-xx-xx",
  "x-xx-xx","x-xx-xx","x-xx-xx","x-xx-xx"]
];

const mappingDict = {};

tileNames.forEach((row, y) => {
  row.forEach((tileId, x) => {
    mappingDict[tileId] = [x,y];
  });
});

export function mapTiles(tileId) {
  return mappingDict[tileId];
}
