
const authenticate = require('./authenticate');

const isValidId = require('./isValidId');
const validateBody = require('./validateBody');

module.exports = {
  validateBody,
  isValidId,
  authenticate,
};
