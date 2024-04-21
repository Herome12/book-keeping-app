const jwt = require('jsonwebtoken');

const authTokenGenerator = userId => {
  return jwt.sign({ id: userId }, "fdlafjladjfldjflalfjaldfldfl", {
    expiresIn: '10d',
  });
};

module.exports = authTokenGenerator;
