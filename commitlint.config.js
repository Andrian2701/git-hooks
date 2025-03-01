module.exports = {
   extends: ['@commitlint/config-conventional'],
   rules: {
      'type-enum': [2, 'always', ['feat', 'fix', 'refactor', 'style', 'chore', 'docs']],
      'type-case': [2, 'always', 'lower-case'],
      'type-empty': [2, 'never'],
      'subject-case': [0],
      'subject-empty': [2, 'never'],
      'subject-full-stop': [2, 'never', '.'],
      'scope-empty': [0],
   },
};
