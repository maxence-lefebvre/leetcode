import _ from 'lodash';

/**
 * @param {import('plop').NodePlopAPI} plop
 */
export default (plop) => {
  plop.setGenerator('problem', {
    description: 'add a leetcode problem',
    prompts: [
      {
        name: 'difficulty',
        type: 'list',
        choices: ['easy', 'medium', 'hard'],
        default: 'easy',
      },
      {
        name: 'id',
        type: 'input',
      },
      {
        name: 'url',
        type: 'input',
      },
    ],
    actions: ({ difficulty, id, url }) => {
      const name = _.last(url.replace(/\/$/, '').split('/'));
      const paddedId = id.padStart(4, '0');
      const folder = `${paddedId}.${name}`;

      const data = { id: paddedId, url, name, difficulty, folder };
      const path = `src/${difficulty}/${folder}`;

      return [
        {
          type: 'add',
          path: `${path}/${name}.js`,
          templateFile: '.plop/templates/problem/solution.hbs',
          data,
        },
        {
          type: 'add',
          path: `${path}/${name}.spec.js`,
          templateFile: '.plop/templates/problem/solution.spec.hbs',
          data,
        }
      ]
    }
  });
};
