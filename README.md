# Personal Website

## [mldangelo.com](http://mldangelo.com) and serverless [mldangelo.github.io/personal-site](https://mldangelo.github.io/personal-site/)

My personal website. Easily modifiable, and built using modern javascript with Node.js, React, Express, React-Router, Hot Module Reloading, Webpack and many other technologies.

The master branch of this repository contains a simplified version of my website intended for serverless hosting on github pages. To view the source for the version hosted at [mldangelo.com](https://mldangelo.com), checkout the [server](https://github.com/mldangelo/personal-site/tree/server) branch.

## A note on adapting this repository to your own personal website

Many people have contacted me about adapting this website. I have tried to make things as simple as possible. There are still bugs. I am sorry. If you find a bug, please email me (help@mldangelo.com) or submit an issue or a pull request.

## Dependencies

Tested with:

* node >= v12, v14. [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) recommended for managing node versions.

## Set up

You may wish to fork this repository or remove my remote origin and add your own. Go [here](https://help.github.com/articles/changing-a-remote-s-url/) for more information on how to change remotes.

1. To download the repository and install dependencies, run the following commands:

    ```bash
    git clone git://github.com/mldangelo/personal-site.git
    cd personal-site
    nvm install
    npm install
    ```

2. Next, you should create a `.env` file. To do this, run:

    ```bash
    cp sample.env .env
    ```

    and set values as appropriate. Most people will not need to make changes.

3. Run the following command to build the react application and serve it with hot module reloading:

    ```bash
    npm run dev
    ```

    Navigate to `<ip>:<port>` default: [http://localhost:7999](http://localhost:7999) to view my website.

    This completes set up instructions. Please continue reading to learn how to modify this site to make it your own.

## Checklist

1. Start by changing text in the sidebar. This file is located at `app/components/Template/Nav.js`.
2. Add an image of yourself in `public/images/me_icon.jpg`. If you decide to change the filename, be sure to go back to the sidebar and change the image path there as well.
3. Modify the text in `app/views/Index.js`
4. Modify the files in `app/data/resume/` next. When you're finished, go back and modify all of the other files in the `app/data/` directory.
5. You've finished modifying >95% of the pages. Search through the rest of the files for references to `Michael` or `Angelo` and change values to your name.
6. Change the description in `server/views/index.tpl.html`. You may also wish to add a new favicon or remove it. [This](https://realfavicongenerator.net/) website may be helpful.
7. Decide how and where you are going to host this project. I recommend purchasing your own domain name from [Google Domains](https://domains.google). If you would like to host on github pages, run `npm run deploy`. This will generate a new branch called `gh-pages`. Then go to `https://github.com/[your github username]/personal-site/settings` and configure accordingly:

    ![github hosting instructions](docs/gh-pages.png)

8. Configure your domains DNS record. See [here]( https://help.github.com/articles/using-a-custom-domain-with-github-pages/) for more information.
9. Change `homepage` in `package.json` to reflect where you plan to host the site. This is important for react-snap. If using a custom url, modify the [CNAME](/public/CNAME) file to point to your URL. If you plan to deploy to a /[path]
(e.g. [https://mldangelo.github.io/personal-site/](https://mldangelo.github.io/personal-site/)), you should modify `BASE_PATH` in your `.env` and `sample.env` files and restart the express server. Note that you will now have to navigate to `localhost:[port]/[BASE_PATH]` when developing.

## Deploying to Github Pages

1. Change `NODE_ENV` to `production` in `.env`
2. Run `npm run deploy`

That's it.

Please feel free to reach out to me by filing an issue or at [help@mldangelo.com](mailto:help@mldangelo.com) for help configuring your project.

## Contributors

* [@mldangelo](https://github.com/mldangelo)
* [@typpo](https://github.com/typpo)
* [@notrueblood](https://github.com/notrueblood)

## Acknowledgements

* Special thanks to [@typpo](https://github.com/typpo) for tirelessly answering all of my node.js and react questions.
* Template based on [Future Imperfect](https://html5up.net/future-imperfect) by [@ajlkn](https://github.com/ajlkn) for [HTML5 UP](html5up.net).

## License

[MIT](https://github.com/mldangelo/personal-site/blob/master/LICENSE)


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
