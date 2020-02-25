module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  modulePaths: ['<rootDir>/src/'],
  moduleNameMapper: {
    '^.+\\.css$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
    '<rootDir>/jest-file-mock.js',
  },
  roots: ['<rootDir>/src/'],
  testEnvironment: 'node',
};
