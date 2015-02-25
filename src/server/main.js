import express from './express'

let config = {
	isProduction: process.env.NODE_ENV == 'production',
	piping: {
		// Ignore webpack custom loaders on server. TODO: Reuse index.js config.
		ignore: /(\/\.|~$|\.(css|less|sass|scss|styl))/,
		// Hook ensures server restart on all required deps, even client side.
		// Server restarting invalidates require cache, no more stale html.
		hook: true
	},
	port: process.env.PORT || 8000,
	version: require('../../package').version
}

if (config.isProduction || require('piping')(config.piping)) {
	express(config)
}
