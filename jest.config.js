const { defaults: tsjPreset } = require('ts-jest/presets');
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  // 测试文件的路径
  rootDir: './test',
  // 添加的转换
  transform: {
    ...tsjPreset.transform
  },
  // 文本匹配
  testRegex: '(/test/.*\\.(test|spec))\\.[tj]sx?$',
  moduleFileExtensions: [
      "ts",
      "tsx",
      "js",
      "jsx"
  ],
};