const gu = require('gulp')
const mocha = require('gulp-mocha')
const istanbul = require('gulp-istanbul')
const babel = require('gulp-babel')
const plumber = require('gulp-plumber')
const guif = require('gulp-if')
const isDev = process.env.NODE_ENV !== 'production'

gu.task('test', ()=> {
  const srcFiles =  ['src/*.js']
  const testFiles = ['test/*.js']

  const doTest = ()=> {
    gu.src(srcFiles.concat(testFiles))
      .pipe(babel())
      .pipe(istanbul())
      .pipe(istanbul.hookRequire())
      .on('finish', ()=> {
        gu.src(testFiles)
          .pipe(guif(isDev, plumber((er)=> {

          })))
          .pipe(mocha())
          .pipe(istanbul.writeReports(
            {dir: 'coverage'}
          ))

      })
  }

  doTest()
  if (isDev) {
    gu.watch(srcFiles.concat(testFiles)).on('change', ()=> {
      doTest()
    })
  }
})
