module.exports = {
  // Transformar arquivos JS, especialmente os de node_modules que usam import/export
  transform: {
    "^.+\\.jsx?$": "babel-jest", // Usar babel-jest para transformar arquivos JS/JSX
  },
  // Ignorar a transformação apenas de node_modules exceto axios
  transformIgnorePatterns: [
    "node_modules/(?!axios)"
  ],
  moduleFileExtensions: ["js", "jsx"], // Extensões de arquivos
};
