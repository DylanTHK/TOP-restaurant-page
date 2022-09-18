# TOP-restaurant-page
Dynamic page using JS and webpack

Purpose
- include webpack in frontend development process
- Learn to work with importing and exporting modules

Learning
- npm init (package.json)
- npm install webpack webpack-cli --save-dev (add webpack to node_modules)
- package.js (automation scripts for building page)
- specify locations for loading modules, entry point, output, devtools, mode etc (blueprints for scripts)
- main.js (final compiled files with all imported files from index.js(entry))
- creating entire pages with javascript

Project inspired by the Odin's Project, by DylanTHK
https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page

Source of Inspiration:
https://www.bemorekaren.com/

DEPLOYING ON GH PAGES WITH WEBPACK
1. Remove the dist directory from the project’s .gitignore file 

2. Make sure git knows about your subtree (the subfolder with your site).
    - git add dist && git commit -m "Initial dist subtree commit"

3. Use subtree push to send it to the gh-pages branch on GitHub.
    - git subtree push --prefix dist origin gh-pages