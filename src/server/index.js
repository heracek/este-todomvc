if (!process.env.NODE_ENV)
	throw new Error('Enviroment variable NODE_ENV must be set.');

require('babel/register');

// Ignore webpack custom loaders on server.
['css', 'less', 'sass', 'scss', 'styl'].forEach(function(ext) {
  require.extensions['.' + ext] = function() {}
});

require('./main');
