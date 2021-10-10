module.exports = {
  roots: ["<rootDir>"],
  moduleDirectories: ["node_modules", "src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.css$": "jest-transform-css",
    "^.+\\.svg$": "jest-svg-transformer",
  },
  setupFilesAfterEnv: ["./tests.setup.ts"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testPathIgnorePatterns: ["./build", "./node_modules/"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
};
