// Type definitions for gulp-help
// Project: https://github.com/chmontgomery/gulp-help
// Definitions by: Qubo <https://github.com/tkQubo>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../bluebird/bluebird.d.ts" />
/// <reference path="../node/node.d.ts" />
/// <reference path="../gulp/gulp.d.ts" />



export interface GulpHelp extends gulp.Gulp {

}

export default function(gulp: gulp.Gulp): GulpHelp;
