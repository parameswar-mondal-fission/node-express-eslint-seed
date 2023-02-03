'use strict';

let isAuthenticated = (req, res, next) => {
    // Write your middleware code
    next();
};

module.exports = {
    isAuthenticated
}
