/** Provided by Prof. Krasso */
let config = {};

/**
 * Localhost web server configurations
 */
config.web = {};
config.web.port = process.env.PORT || '3000';
config.web.secret = 'topsecret';


/**
 * Development database configurations
 *
 */
config.database = {};
config.database.username = 'mhoward07';
config.database.password = 'm4n-uN!7eD-r3d$';
config.database.port = '53160';
config.database.url = 'ds053160.mlab.com';
config.database.name = 'nodequiz';


module.exports = config;