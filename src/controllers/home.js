const isHome = (req, res, next) => {
  return res.status(200).send({ result: 'Welcome to V1 Home!' });
};

module.exports = {
  isHome
};
