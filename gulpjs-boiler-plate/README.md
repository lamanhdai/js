<u><b>SET UP:</b></u>
- <u>step 1</u>:
-----create file package json-----
open git bash, enter <b>npm init</b>


- <u>step 2</u>:
-----go to gulpfile.js and add all packages-----
For production environment enter <b>npm install --save gulp-sass</b>
For development environment enter <b>npm install --save-dev gulp-sass</b>


- <u>step 3</u>:
-----run gulp command-----
enter and run command <b>gulp</b>


<u><b>NOTE:</b></u>
+ To fix command not found: <a href="https://docs.npmjs.com/cli/link">npm link gulp</a>
+ To <a href="https://babeljs.io/docs/usage/cli/">set up cli</a> and <a href="https://babeljs.io/docs/usage/babelrc/">add file</a> .babelrc: <a href="http://www.programwitherik.com/understanding-the-babel-compiler-2016/">echo '{ "presets": ["es2015"] }' > .babelrc</a>
+ To add file .eslintrc report language ECMAScript: <a href="http://eslint.org/docs/user-guide/getting-started">eslint --init</a>