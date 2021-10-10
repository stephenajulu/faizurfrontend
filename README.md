# Faizur Frontend

### Rules Branches

```js
1. npm init
2. gulp

// Gulp Tasks
gulp (default)
gulp copy (copy assets into dist folder)
```

Master — Main branch
Develop — All development is going
Staging: Ready to launch final version to live server & Merge with [MAster]
Flow: Branch -> Develop -> Staging (testing) -> Master

```css
/* CSS Classes */
.cardBlock {}
.cardBlock__title {}
.cardBlock__content {}
.cardBlock--featured {}
.card-block{}

/* More examples */
.homePage
.homePage__section
.homePage__section-block
.homePage--featured
.home-page
.--red
.border, .radius, .uppercase
```

- `.cardBlock` is the “block” and represents the higher-level component
- `.cardBlock__title` is an “element” and represents a descendant of `.cardBlock` that helps compose the block as a whole.
- `.cardBlock--featured` is a “modifier” and represents a different state or variation on the `.cardBlock` block
- `.card-block` individual classes for specific property

### Configuration

Package.json

```json
"@babel/core": "^7.0.0",
    "@babel/preset-env": "^7.9.5",
    "autoprefixer": "^9.7.6",
    "babel-eslint": "^9.0.0",
    "babel-loader": "^8.0.2",
    "clean-webpack-plugin": "^0.1.19",
    "copy-webpack-plugin": "^5.1.1",
    "critters-webpack-plugin": "^2.5.0",
    "css-loader": "^1.0.0",
    "cssnano": "^4.1.10",
    "ejs-loader": "^0.3.6",
    "ejs-webpack-loader": "^2.2.2",
    "eslint": "^5.5.0",
    "eslint-config-airbnb-base": "^13.1.0",
    "eslint-plugin-import": "^2.14.0",
    "favicons-webpack-plugin": "^2.1.0",
    "file-loader": "^3.0.1",
    "gsap": "^3.2.6",
    "html-loader": "^0.5.5",
    "html-webpack-plugin": "^3.2.0",
    "http-server": "^0.12.3",
    "imagesloaded": "^4.1.4",
    "jquery": "^3.4.1",
    "lazysizes": "^5.2.0",
    "lity": "^2.4.1",
    "mini-css-extract-plugin": "^0.4.2",
    "node-sass": "^4.13.1",
    "normalize.css": "^8.0.1",
    "optimize-css-assets-webpack-plugin": "^5.0.1",
    "postcss-import": "^12.0.1",
    "postcss-loader": "^3.0.0",
    "postcss-nested": "^3.0.0",
    "postcss-preset-env": "^5.3.0",
    "postcss-reporter": "^6.0.0",
    "precss": "^4.0.0",
    "raw-loader": "^4.0.1",
    "reset-css": "^5.0.1",
    "rfs": "^9.0.3",
    "sass-loader": "^8.0.2",
    "slick-carousel": "^1.8.1",
    "style-loader": "^0.17.0",
    "twig-html-loader": "^0.1.7",
    "uglifyjs-webpack-plugin": "^2.2.0",
    "url-loader": "^1.1.2",
    "webpack": "^4.43.0",
    "webpack-bundle-analyzer": "^3.7.0",
    "webpack-cli": "^3.1.0",
    "webpack-dev-server": "^3.10.3",
    "webpack-merge": "^4.1.4"
```

Rename: jquery.fancybox.css to jquery.fancybox.scss

### New Approach for GitHub:

```markdown
$ git checkout develop
Switched to branch 'develop'
$ git merge --no-ff myfeature
Updating ea1b82a..05e9557
(Summary of changes)
\$ git push origin develop
```

[^faizur]: This is faizur website development GitHub created by Faizur Rehman (Owner)
