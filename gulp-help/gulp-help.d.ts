// Type definitions for gulp-help
// Project: https: //github.com/chmontgomery/gulp-help
// Definitions by: Qubo <https: //github.com/tkQubo>
// Definitions: https: //github.com/borisyankov/DefinitelyTyped

/// <reference path="../bluebird/bluebird.d.ts" />
/// <reference path="../node/node.d.ts" />
/// <reference path="../gulp/gulp.d.ts" />

import Gulp = gulp.Gulp;
import ITaskCallback = gulp.ITaskCallback;
import ISrcOptions = gulp.ISrcOptions;
import EventEmitter = NodeJS.EventEmitter;
import IWatchCallback = gulp.IWatchCallback;
import IDestOptions = gulp.IDestOptions;
import IWatchOptions = gulp.IWatchOptions;

declare type HelpOption = string|boolean;
declare type WatchCallback = IWatchCallback|string;
declare type WatchCallbacks = WatchCallback|WatchCallback[];

export namespace MethodSignatures {
    export interface Task {
        /**
         * Define a task.
         *
         * @param name the name of the task. Tasks that you want to run from the command line should not have spaces in them.
         * @param help Custom help message as a string. If you want to hide the task from the help menu, supply false
         * @param deps an array of tasks to be executed and completed before your task will run.
         * @param fn the function that performs the task's operations. Generally this takes the form of gulp.src().pipe(someplugin()).
         * @param option task options
         */
        (name: string, help: HelpOption, deps: string[], fn?: ITaskCallback, option?: TaskOptions): any;
        /**
         * Define a task.
         *
         * @param name the name of the task. Tasks that you want to run from the command line should not have spaces in them.
         * @param help Custom help message as a string. If you want to hide the task from the help menu, supply false
         * @param deps an array of tasks to be executed and completed before your task will run.
         * @param option task options
         */
        (name: string, help: HelpOption, deps: string[], option?: TaskOptions): any;
        /**
         * Define a task.
         *
         * @param name the name of the task. Tasks that you want to run from the command line should not have spaces in them.
         * @param help Custom help message as a string. If you want to hide the task from the help menu, supply false
         * @param fn the function that performs the task's operations. Generally this takes the form of gulp.src().pipe(someplugin()).
         * @param option task options
         */
        (name: string, help: HelpOption, fn?: ITaskCallback, option?: TaskOptions): any;
        /**
         * Define a task.
         *
         * @param name the name of the task. Tasks that you want to run from the command line should not have spaces in them.
         * @param help Custom help message as a string. If you want to hide the task from the help menu, supply false
         * @param option task options
         */
        (name: string, help: HelpOption, option?: TaskOptions): any;
        /**
         * Define a task.
         *
         * @param name the name of the task. Tasks that you want to run from the command line should not have spaces in them.
         * @param deps an array of tasks to be executed and completed before your task will run.
         * @param fn the function that performs the task's operations. Generally this takes the form of gulp.src().pipe(someplugin()).
         * @param option task options
         */
        (name: string, deps: string[], fn?: ITaskCallback, option?: TaskOptions): any;
        /**
         * Define a task.
         *
         * @param name the name of the task. Tasks that you want to run from the command line should not have spaces in them.
         * @param deps an array of tasks to be executed and completed before your task will run.
         * @param option task options
         */
        (name: string, deps: string[], option?: TaskOptions): any;
        /**
         * Define a task.
         *
         * @param name the name of the task. Tasks that you want to run from the command line should not have spaces in them.
         * @param fn the function that performs the task's operations. Generally this takes the form of gulp.src().pipe(someplugin()).
         * @param option task options
         */
        (name: string, fn?: ITaskCallback, option?: TaskOptions): any;
        /**
         * Define a task.
         *
         * @param name the name of the task. Tasks that you want to run from the command line should not have spaces in them.
         * @param option task options
         */
        (name: string, option?: TaskOptions): any;
    }

    export interface Src {
        /**
         * Takes a glob and represents a file structure. Can be piped to plugins.
         * @param glob a glob string, using node-glob syntax
         * @param opt an optional option object
         */
        (glob: string, opt?: ISrcOptions): NodeJS.ReadWriteStream;

        /**
         * Takes a glob and represents a file structure. Can be piped to plugins.
         * @param glob an array of glob strings, using node-glob syntax
         * @param opt an optional option object
         */
        (glob: string[], opt?: ISrcOptions): NodeJS.ReadWriteStream;
    }

    export interface Dest {
        /**
         * Can be piped to and it will write files. Re-emits all data passed to it so you can pipe to multiple folders.
         * Folders that don't exist will be created.
         *
         * @param outFolder the path (output folder) to write files to.
         * @param opt
         */
        (outFolder: string, opt?: IDestOptions): NodeJS.ReadWriteStream;
        /**
         * Can be piped to and it will write files. Re-emits all data passed to it so you can pipe to multiple folders.
         * Folders that don't exist will be created.
         *
         * @param outFolder a function that converts a vinyl File instance into an output path
         * @param opt
         */
        (outFolder: (file: string) => string, opt?: IDestOptions): NodeJS.ReadWriteStream;
    }

    export interface Watch {
        /**
         * Watch files and do something when a file changes. This always returns an EventEmitter that emits change events.
         *
         * @param glob a single glob or array of globs that indicate which files to watch for changes.
         * @param fn a callback or array of callbacks to be called on each change, or names of task(s) to run when a file changes, added with gulp.task().
         */
        watch(glob: string|string[], fn: WatchCallbacks): EventEmitter;
        /**
         * Watch files and do something when a file changes. This always returns an EventEmitter that emits change events.
         *
         * @param glob a single glob or array of globs that indicate which files to watch for changes.
         * @param opt options, that are passed to the gaze library.
         * @param fn a callback or array of callbacks to be called on each change, or names of task(s) to run when a file changes, added with gulp.task().
         */
        watch(glob: string|string[], opt: IWatchOptions, fn: WatchCallbacks): EventEmitter;
    }
}

export interface GulpHelp {
    task: MethodSignatures.Task;
    src: MethodSignatures.Src;
    dest: MethodSignatures.Dest;
    watch: MethodSignatures.Watch;
}

export interface TaskOptions {
    /**
     * List of aliases for this task
     */
    aliases?: string[];
    /**
     * Object documenting options which can be passed to your task
     */
    options?: { [key: string]: string };
}

export interface GulpHelpOptions {
    /**
     * Modifies the default help message
     */
    description: string;
    /**
     * Adds aliases to the default help task
     */
    aliases: string[];
    /**
     * Hide all tasks with no help message defined. Useful when including 3rd party tasks
     */
    hideEmpty: boolean;
    /**
     * Hide all task dependencies
     */
    hideDepsMessage: boolean;
    /**
     * A function to run after the default help task runs
     */
    afterPrintCallback: Function;
}

export default function(gulp: Gulp, options?: GulpHelpOptions): GulpHelp;
