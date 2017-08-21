if (process.env.NODE_ENV === 'production') {
  module.exports = require('./prodv');
} else {
  module.exports = require('./dev');
}
