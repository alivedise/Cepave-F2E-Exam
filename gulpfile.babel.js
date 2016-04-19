import gu from 'gulp'
import mocha from 'gulp-mocha'
import istanbul from 'gulp-istanbul'
import babel from 'gulp-babel'
import plumber from 'gulp-plumber'
import guif from 'gulp-if'

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
