# 🍽️ Restaurant Website Project using Webpack and JS

This project is a simple restaurant website built using Webpack. The site includes multiple pages (Home, Menu, About) with content dynamically generated using JavaScript.

## 🚀 Getting Started

Start the project the same way you began the Webpack tutorial project.

1. **Initialize the Project**

   Run `npm init` in your project directory to generate a `package.json` file.

2. **Install Webpack**

   Run `npm install webpack webpack-cli --save-dev` to install Webpack to the `node_modules` directory of your project.

3. **Set Up Project Structure**

   Create a `src` and `dist` directory with the following contents:

   - An `index.js` file in `src`.
   - An `index.html` file in `src`. This file will not need a `<script>` tag because we’re using `html-webpack-plugin`, which automatically adds that in. You will also not need to link a CSS stylesheet as you should be importing it into your JavaScript and letting your Webpack configuration handle bundling.

4. **Configure Webpack**

   Create a `webpack.config.js` file that looks just like our file from the Webpack “Getting Started” tutorial. Don’t forget to add the `html-webpack-plugin` config to your `webpack.config.js` and set its `template` option with a path to `src/index.html`.

5. **Create .gitignore**

   Create a `.gitignore` file in the root of your project. It should contain `node_modules` and `dist` on separate lines.

## 📄 HTML Structure

Set up an HTML skeleton inside `src/index.html`. Inside the body, add a `<header>` element that contains a `<nav>` with buttons (not links!) for different “tabs” (for example buttons for “Home”, “Menu” or “About”). Below the `<header>`, add a single `<div id="content">`.

## 🔧 Development

1. **Initial Setup**

   Inside of `src/index.js` write a `console.log` or `alert` statement and then run `npx webpack`. Load up `dist/index.html` in a browser to make sure everything is working correctly.

   **Quick Tip:** If you run `npx webpack --watch` you will not have to rerun Webpack every time you make a change.

2. **Create Homepage**

   Inside `div#content`, create a homepage for your restaurant. You might want to include an image, headline, and some text about how wonderful the restaurant is; you do not have to make this look too fancy. It’s okay to hard-code these into the HTML for now just to see how they look on the page.

3. **Dynamic Content with JavaScript**

   Now remove everything inside `div#content` from the HTML (so you still have the `<header>` and `<nav>` with an empty `<div id="content">` below it) and instead create them by using JavaScript only, e.g., by appending each new element to `div#content` once the page is first loaded. Since we’re all set up to write our code in multiple files, let’s write this initial page-load function inside of its own module and then import and call it inside of `index.js`.

4. **Tabbed Browsing**

   Next, set up your restaurant site to use tabbed browsing to access the Contact and Menu pages. Look at the behavior of a student’s live preview site for visual inspiration.

5. **Modular Code**

   Put the contents of each ‘tab’ inside of its own module. Each module will export a function that creates a `div` element, adds the appropriate content and styles to that element, and then appends it to the DOM.

6. **Tab-Switching Logic**

   Write the tab-switching logic inside of `index.js`. You should have event listeners for each button in the header navbar that wipes out the current contents of `div#content` and then runs the correct ‘tab module’ to populate it with the new contents again.

## 🌐 Deploying to GitHub Pages

If you are using GitHub Pages to host your completed page, you need to do a tiny bit more work to get it to show up. After running Webpack, the full bundled version of your site is available in the `dist` folder, but GH Pages is looking for an `index.html` in the root directory of your project.

1. **Deploying Dist Subdirectory**

   Follow the instructions on this [gist](https://gist.github.com/cobyism/4730490) about deploying your `dist` subdirectory to GitHub Pages. EZPZ!

2. **Automate with NPM Script**

   To prevent having to copy and paste the same lengthy git command each time, you can instead create an npm script to do the work for you!

   Inside your project’s `package.json` file, within the `scripts` section, add an additional entry named something of your choosing and paste in the command from the above gist surrounded by quotation marks. Follow the formatting of the already added test script.

   **Example:**

   ```json
   "scripts": {
     "deploy": "git subtree push --prefix dist origin gh-pages"
   }
   ```
