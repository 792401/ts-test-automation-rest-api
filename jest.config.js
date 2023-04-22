// jest.config.js
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    reporters: [
      'default',
      [
        'jest-html-reporters',
        {
          publicPath: './html-report',
          filename: 'index.html',
          expand: true,
        },
      ],
    ],
  };
  