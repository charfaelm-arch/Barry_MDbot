A:"𝗔", B:"𝗕", C:"𝗖", D:"𝗗", E:"𝗘",
  F:"𝗙", G:"𝗚", H:"𝗛", I:"𝗜", J:"𝗝",
  K:"𝗞", L:"𝗟", M:"𝗠", N:"𝗡", O:"𝗢",
  P:"𝗣", Q:"𝗤", R:"𝗥", S:"𝗦", T:"𝗧",
  U:"𝗨", V:"𝗩", W:"𝗪", X:"𝗫", Y:"𝗬", Z:"𝗭"
}

export default function stylizedChar(text) {
  return [...text].map(c => monoFont[c] || c).join("")
}
