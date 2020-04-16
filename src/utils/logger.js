'use strict';

const { white, green, yellow, red, magenta, gray } = require('chalk');

/**
 * Logger class
 * @class Logger
 */
module.exports = new class Logger {
    /**
     * Sends a message into the console using white color
     * @param {string} source The source where the log comes from
     * @param {string} message The message to display in the console
     * @returns {void}
     */
    log (source, message) {
        console.log(white(`[${this.getDate()}] [${source}] ${message}`));
    }

    /**
     * Sends a message into the console using green color
     * @param {string} source The source where the log comes from
     * @param {string} message The message to display in the console
     * @returns {void}
     */
    info (source, message) {
        console.log(green(`[${this.getDate()}] [${source}] ${message}`));
    }

    /**
     * Sends a message into the console using yellow color
     * @param {string} source The source where the log comes from
     * @param {string} message The message to display in the console
     * @returns {void}
     */
    warn (source, message) {
        console.log(yellow(`[${this.getDate()}] [${source}] ${message}`));
    }

    /**
     * Sends a message into the console using red color
     * @param {string} source The source where the log comes from
     * @param {string} message The message to display in the console
     * @returns {void}
     */
    error (source, message) {
        console.log(red(`[${this.getDate()}] [${source}] ${message}`));
    }

    /**
     * Sends a message into the console using magenta color
     * @param {string} source The source where the log comes from
     * @param {string} message The message to display in the console
     * @returns {void}
     */
    data (source, message) {
        console.log(magenta(`[${this.getDate()}] [${source}] ${message}`));
    }

    /**
     * Sends a message into the console using gray color
     * @param {string} source The source where the log comes from
     * @param {string} message The message to display in the console
     * @returns {void}
     */
    debug (source, message) {
        console.log(gray(`[${this.getDate()}] [${source}] ${message}`));
    }

    /**
     * Gets a date
     * @returns {string} The date, with the DD/MM/YYYY HH:MM:SS format
     */
    getDate () {
        const day = new Date().getDate() >= 10 ? new Date().getDate() : `0${new Date().getDate()}`;
        const month = new Date().getMonth() + 1 >= 10 ? new Date().getMonth() + 1 : `0${new Date().getMonth() + 1}`;
        const year = new Date().getFullYear();
        const hours = new Date().getHours() >= 10 ? new Date().getHours() : `0${new Date().getHours()}`;
        const minutes = new Date().getMinutes() >= 10 ? new Date().getMinutes() : `0${new Date().getMinutes()}`;
        const seconds = new Date().getSeconds() >= 10 ? new Date().getSeconds() : `0${new Date().getSeconds()}`;

        return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    }
}();
