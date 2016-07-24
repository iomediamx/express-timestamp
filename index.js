var moment = require('moment-timezone')

/**
 * @description middleware
 * @function init
 * @since 0.1.0
 */
exports.init = function (request, response, next) {
  request.timestamp = moment()
  next()
}
