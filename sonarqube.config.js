const scanner = require('sonarqube-scanner');

scanner(
  {
    serverUrl : 'http://localhost:9000',
    token : "01b7f88e8cca5965b633871b921f90e7109dc0da",
    'sonar.login': 'admin',
    'sonar.password': 'Chicojj123',
    options: {
      'sonar.projectName': 'Teste Flow',
      'sonar.projectDescription': 'Projeto para teste com git flow',
      'sonar.sources': 'src',
      'sonar.exclusions': `'node_modules/**', '**/*.test.ts'`,
      'sonar.test.inclusions': '**/*.test.ts',
      'sonar.javascript.coveragePlugin': 'lcov',
    }
  },
  () => process.exit()
)
