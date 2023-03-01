const isAuthenticated = (req, res, next) => {
  // Write your middleware code
  next();
};

module.exports = {
  isAuthenticated
};
