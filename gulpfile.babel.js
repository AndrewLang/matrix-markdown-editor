import gulp from 'gulp';
import shell from 'shelljs';
import chalk from 'chalk';
import * as ts from 'gulp-typescript';

// pull in the project TypeScript config
const tsProject = ts.createProject('tsconfig.json');

gulp.task('build:ts', (done) => {
  const tsResult = tsProject.src()
    .pipe(tsProject());
    
  
    tsResult.dts.pipe(gulp.dest('dist'));
    tsResult.js.pipe(gulp.dest('dist'));

    done();
});

gulp.task('clean', (done) => {
  shell.echo('Clean dist folder');
  shell.rm('-rf', './dist');
  done();
});

gulp.task('build', gulp.series('clean', 'build:ts', (done) => {
  done();
}));



/** Utilities */
export function getTime() {
  let date = new Date();
  return `[${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}]`;
}
export function log(message) {
  shell.echo(chalk.gray(`${getTime()} ${message}`));
}
export function success(message) {
  shell.echo(chalk.green(`${getTime()} ${message}`));
}
export function error(message) {
  shell.echo(chalk.red(`${getTime()} ${message}`));
}
export function findFile(folder, pattern) {
  let files = fs.readdirSync(folder);
  for (let file of files) {
      log(file);
      if (file.startsWith(pattern)) {
          return file;
      }
  }
}