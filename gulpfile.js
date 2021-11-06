// Initialize modules
const gulp = require('gulp');
const mergeDir = require("merge-stream");
const data = require('gulp-data');
const fs = require('fs');
const merge = require('gulp-merge-json');
const notifier = require('node-notifier');
const gutil = require('gulp-util');
const browsersync = require('browser-sync').create();
const autoprefixer = require('autoprefixer');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const pxtorem = require('postcss-pxtorem');
const cleanCss = require('gulp-clean-css');
const cssnano = require('cssnano');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const rename = require('gulp-rename');
const twig = require('gulp-twig');
const htmlmin = require('gulp-htmlmin');

const svgstore = require('gulp-svgstore');
const cheerio = require('gulp-cheerio');
const sourcemaps = require('gulp-sourcemaps');
const mode = require('gulp-mode')();

const options = {
    propList: [
        'font-size'
    ],
};


const paths = {
  root: {
    // development
    css: 'src/css/',
    js: 'src/js/',
    template: 'src/templates/',
    public: 'src/public/',
    data: 'src/templates/data/',

    // production
    distJs: './dist/js/',
    distCss: './dist/css/',
    templateDist: './dist',
    imagesDist: './dist/images/',

    // final production
    dist: './dist/',
  },
  lib: {
    jquery: 'node_modules/jquery/dist/jquery.js', //@version 3.4.1
    imageLoaded: 'node_modules/imagesloaded/imagesloaded.pkgd.js',
    lazySizes: 'node_modules/lazysizes/lazysizes.js',
    lazySizesFit: 'node_modules/lazysizes/plugins/parent-fit/ls.parent-fit.js',
    greenSockGsap: 'src/js/vendors/gsap.min.js',
    slickCarousel: 'node_modules/slick-carousel/slick/slick.js',
    marqueeJs: 'node_modules/jquery.marquee/jquery.marquee.js',

    // Common holding Lazyload, Image loading
    common: 'src/js/global.js',
  },
};

// browsersync
gulp.task('browser-sync', () => {
  browsersync.init({
    server: {
      baseDir: './dist/',
      proxy: 'localhost:3001',
    },
      browser: "google chrome",
      notify: false,
  });
});

// css
gulp.task('css', () => {
  return gulp
    .src([paths.root.css + 'main.scss'])
    .pipe(sass())
    .on('error', function (error) {
      gutil.log(gutil.colors.red(error.message));
      notifier.notify({
        title: 'Sass Error',
        message: error.message,
      });
    })
    .pipe(
      postcss([
        autoprefixer({
          grid: true,
        }),
        cssnano(),
        pxtorem(options),
      ])
    )
    .pipe(cleanCss({ level: { 2: { restructureRules: false } } }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(mode.development(sourcemaps.write()))
    .pipe(gulp.dest(paths.root.distCss))
    .pipe(browsersync.stream());
});


// twig
gulp.task('data', () => {
    return gulp
        .src(paths.root.data + '**/*.json')
        .pipe(merge({ fileName: 'data.json' }))
        .pipe(gulp.dest('src/temp'));
});

gulp.task('twig', () => {
  return (
    gulp
      .src(paths.root.template + 'pages/**/*.twig')
      .pipe(data(function (file) {return JSON.parse(fs.readFileSync(paths.root.data + 'data.json'));}))
      .pipe(twig())
      .on('error', (error) => {
        gutil.log(gutil.colors.red(error.message));
        notifier.notify({
          title: 'Twig complition faild',
          message: error.message,
        });
      })
      .pipe(
        htmlmin({
          collapseWhitespace: true,
          removeComments: true,
          removeAttributeQuotes: true,
        })
      )
      .pipe(gulp.dest(paths.root.templateDist))
      .pipe(
        browsersync.reload({
          stream: true,
        })
      )
  );
});

// homepage
gulp.task('js-homepage', () => {
  return gulp
    .src([
        paths.lib.jquery,
        paths.lib.imageLoaded,
        paths.lib.lazySizes,
        paths.lib.lazySizesFit,
        paths.lib.greenSockGsap,
        paths.lib.slickCarousel,
        paths.lib.marqueeJs,
        paths.lib.common,
        paths.root.js + "menu.js",
        paths.root.js + "homepage.js",
    ])
    .pipe(mode.development(sourcemaps.init()))
    .pipe(concat(
        'bundle.js',
    ))
    .on('error', function (error) {
      gutil.log(gutil.colors.red(error.message));
      notifier.notify({
        title: 'Homepage js concat compilation error',
        message: error.message,
      });
    })
    .pipe(
      uglify({
        compress: {
          global_defs: {
            DEBUG: false,
          },
        },
      })
    )
    .pipe(gulp.dest(paths.root.distJs + "/home/"))
    .pipe(browsersync.stream());
});


// homepage
gulp.task('js-global', () => {
  return gulp
    .src([
        paths.lib.jquery,
        paths.lib.imageLoaded,
        paths.lib.lazySizes,
        paths.lib.lazySizesFit,
        paths.lib.greenSockGsap,
        paths.lib.marqueeJs,
        paths.lib.common,
        paths.root.js + "menu.js",
    ])
    .pipe(mode.development(sourcemaps.init()))
    .pipe(concat(
        'bundle.js',
    ))
    .on('error', function (error) {
      gutil.log(gutil.colors.red(error.message));
      notifier.notify({
        title: 'Homepage js concat compilation error',
        message: error.message,
      });
    })
    .pipe(
      uglify({
        compress: {
          global_defs: {
            DEBUG: false,
          },
        },
      })
    )
    .pipe(gulp.dest(paths.root.distJs + "/global/"))
    .pipe(browsersync.stream());
});

// homepage
gulp.task('js-contact', () => {
  return gulp
    .src([
        paths.lib.jquery,
        paths.lib.imageLoaded,
        paths.lib.lazySizes,
        paths.lib.lazySizesFit,
        paths.lib.greenSockGsap,
        paths.lib.marqueeJs,
        paths.lib.common,
        paths.root.js + "menu.js",
        paths.root.js + "contact.js",
    ])
    .pipe(mode.development(sourcemaps.init()))
    .pipe(concat(
        'bundle.js',
    ))
    .on('error', function (error) {
      gutil.log(gutil.colors.red(error.message));
      notifier.notify({
        title: 'Homepage js concat compilation error',
        message: error.message,
      });
    })
    .pipe(
      uglify({
        compress: {
          global_defs: {
            DEBUG: false,
          },
        },
      })
    )
    .pipe(gulp.dest(paths.root.distJs + "/contact/"))
    .pipe(browsersync.stream());
});


// svg graphics
gulp.task('svgstore', function() {
    return gulp
        .src(paths.root.public + 'icons/*.svg')
        .pipe(rename({
            prefix: 'icon-'
        }))
        .pipe(cheerio({
            run: function($) {
                $('[fill]').removeAttr('fill');
            },
            parserOptions: {
                xmlMode: true
            }
        }))
        .pipe(svgstore({
            prefix: 'icon-',
            inlineSvg: true
        }))
        .pipe(gulp.dest(paths.root.templateDist + '/icons/'));
});

// copy assets
gulp.task('copy-resources', function () {
  return mergeDir([
    gulp.src(paths.root.public + 'images/**/*.{gif,jpg,png,svg,ico}').pipe(gulp.dest(paths.root.dist + 'public/images')),
    gulp.src(paths.root.public + 'fonts/*').pipe(gulp.dest(paths.root.dist + 'public/fonts')),
    gulp.src(paths.root.public + 'favicon/*').pipe(gulp.dest(paths.root.dist + 'public/favicon'))
  ]);
});

// watch
gulp.task('watch', () => {
  gulp.watch([paths.root.css + '**/*'], gulp.series(['css']));
  gulp.watch(
      [paths.root.template + '**/*.twig', paths.root.data + '**/*.json'],
      gulp.series(['twig', 'data'])
  );

  gulp.watch(
    paths.root.js + '**/*.js',
    gulp.series([
      'js-homepage'
    ])
  );
  gulp.watch([
    '**/*.html',
    paths.root.template + '**/*.twig',
    paths.root.css + ['**/*.sass', '**/*.scss'],
    paths.root.js + ['**/*.js'],
  ]);
});

// default gulp
gulp.task(
  'default',
  gulp.series(gulp.parallel(['browser-sync', 'twig', 'watch', 'svgstore', 'copy-resources']))
);

// build project
gulp.task(
  'build',
  gulp.series(gulp.parallel(['css', 'twig', 'css', 'svgstore', 'copy-resources']))
);
