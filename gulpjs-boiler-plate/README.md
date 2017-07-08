## SET UP:
- <u>step 1</u>: -----create file package json-----
  - open git bash, enter <b>npm init</b>


- <u>step 2</u>: -----go to gulpfile.js and add all packages-----
  - For production environment enter <b>npm install --save gulp-sass</b>
  - For development environment enter <b>npm install --save-dev gulp-sass</b>


- <u>step 3</u>: -----run gulp command-----
  - <b>gulp</b>


## NOTE:
+ To fix command not found: <a href="https://docs.npmjs.com/cli/link" target="_blank">npm link gulp</a>
+ To <a href="https://babeljs.io/docs/usage/cli/" target="_blank">set up cli</a> and <a href="https://babeljs.io/docs/usage/babelrc/" target="_blank">add file</a> .babelrc: <a href="http://www.programwitherik.com/understanding-the-babel-compiler-2016/" target="_blank">echo '{ "presets": ["es2015"] }' > .babelrc</a>
+ To add file .eslintrc report language ECMAScript: <a href="http://eslint.org/docs/user-guide/getting-started" target="_blank">eslint --init</a>
+ To remove global package <a href="https://docs.npmjs.com/getting-started/uninstalling-global-packages" target="_blank">npm uninstall -g gulp</a>