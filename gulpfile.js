'use strict';

const pkg = require('gulp');
const {series, parallel, src, dest, watch} = pkg;
const sassGlob = require('gulp-sass-glob');
const sass = require('gulp-dart-sass');  // sass/scss -> css 빌드
const postcss = require('gulp-postcss');
const minifyCSS = require('gulp-clean-css'); // 최소화
const uglify = require('gulp-uglify'); // 난독화
const { deleteAsync } = require('del');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const autoprefixer = require('autoprefixer');

const pug = require('gulp-pug');

const readlineSync = require('readline-sync');

const fs = require('fs');

const prompt = require('gulp-prompt');

const log = require('fancy-log');

let baseFile = 'frogui'
// const baseFile = 'gcloud'
// const baseFile = 'beui'
// fs module test
// fa.writeFile('sample.json', JSON.stringify({ sample: 'data' }), () => {})

let paths = {
  paths: {
    output: {
      packaged: 'dist'
    }
  }
}

const fileList = ['frogui', 'gcloud', 'gcloud_p'];

fs.readFile('config.json', 'utf-8', (err, data) => {
  if (err) return console.log(err)
  paths = JSON.parse(data)
  log('print path:',paths)
})

// 빌드 전 이전 빌드 폴더 삭제
const clean = () => {
  // site();
  return deleteAsync(['dist/'])
};

// 단일 테마 entry(예: frogui.scss)로 CSS 빌드 — Gulp가 스트림 완료를 추적할 수 있도록 반환
const buildThemeCss = (themeFile) => {
  return src([`src/${themeFile}.scss`])
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(postcss([autoprefixer()]))
    .pipe(dest('./dist', {sourcemaps:false}))
    .pipe(rename(`${themeFile}.css`))
    .pipe(minifyCSS())
    .pipe(dest('./site/public'))
}

// scss 빌드 (--file= 이름이 있으면 해당 엔트리만)
const build = () => {
  const file = process.argv.find(arg => arg.startsWith('--file='))
  if (file) {
    baseFile = file.split('=')[1]
    log(`${baseFile}`)
  }
  return buildThemeCss(baseFile)
}

// 여러 테마 순차 빌드 — 각 단계가 스트림을 반환해야 Gulp 4에서 "async completion" 오류가 나지 않음
const buildAll = series(
  ...fileList.map((themeName) => () => {
    baseFile = themeName
    return buildThemeCss(themeName)
})
)

// JS 빌드
const buildJS = () => {
  return src(['src/definitions/components/*.js'])
    // .pipe(concat('frog_ui.js'))
    .pipe(dest('./dist/js'))
    .pipe(uglify())
    .pipe(dest('./site/public/js'))
}

// assets 파일 빌드 폴더로 가져가기
const assets = () => {
  return src('src/assets/**')
    .pipe(dest('.wsite/build/assets'))
}
//

// 작업 중 변경 감지 -> 빌드
const watcher = () => {
  watch(['src/themes/**/**/*.scss','src/definitions/**/**/*.scss'], build)
  watch(['src/themes/default/bases/variables.scss', 'src/themes/default/bases/reset.scss'], build)
  watch('src/definitions/components/*.js', buildJS)
}

// install 여부 확인 (테스트 중...)
const checkBuild = async (done) => {
  if(readlineSync.keyInYN('Do you want to build?')) {
    return await done()
  }
  log('OK. Not building')
}

const question = () => {
  return src('gulpfile.js')
    .pipe(prompt.prompt({
        type: 'input',
        name: 'tesk',
        message: 'are you OK?'
    },
    (res) => {
        log(res)
        if(res.tesk === 'yes') {
            build ()
        }
    }))
}

module.exports.question = question;
module.exports.clean = clean;
module.exports.build = build;
module.exports.buildAll = buildAll;
module.exports.default = series(clean, parallel(build, buildJS, assets), watcher, () => {
    log("Run gulp!!")
});