const router = require('express').Router();
const logger = require('../../logger');

router.get('/geisha', (request, response) => {
	response.render('home', { layout: false });
});

// The eShop applet's actual initial request (as of current Inkay) hits this path, not /geisha directly. So it now renders home to fix this issue.
router.get('/ninja/wood_index.html', (request, response) => {
	response.render('toGeisha', { layout: false });
});

router.get('/news', (request, response) => {
	response.render('news', { layout: false });
});

router.get('/debug', (request, response) => {
	response.render('debug', { layout: false });
});

router.get('/install', (request, response) => {
	response.render('install', { layout: false });
});

router.get('/random', (request, response) => {
	response.render('random', { layout: false });
});

router.get('/gub', (request, response) => {
	response.render('gub', { layout: false });
});

router.get('/stick', (request, response) => {
	response.render('stick', { layout: false });
});

module.exports = router;