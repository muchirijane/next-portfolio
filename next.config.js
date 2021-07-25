// const withPWA = require('next-pwa');
// const runtimeCaching = require('next-pwa/cache');
// module.exports = withPWA({
// 	pwa: {
// 		dest: 'public',
// 		runtimeCaching
// 	},
// 	images: {
// 		domains: [ 'images.ctfassets.net' ]
// 	}
// });

const withPWA = require('next-pwa');

module.exports = withPWA({
	pwa: {
		disable: process.env.NODE_ENV === 'development',
		register: true,
		scope: '/app',
		sw: 'service-worker.js'
		//...
	},
	images: {
		domains: [ 'images.ctfassets.net' ]
	}
});
