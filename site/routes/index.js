var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Frog' });
});

router.get('/pages/base', function(req, res, next) {
  res.render('components/base',  {title: 'Base' });
});

router.get('/pages/semantic', function(req, res, next) {
  res.render('components/semantic',  {title: 'Semantic' });
});

router.get('/pages/button', function(req, res, next) {
  res.render('components/button',  { title: 'Button' });
});

router.get('/pages/badge', function(req, res, next) {
  res.render('components/badge',  { title: 'Badge' });
});

router.get('/pages/calendar', function(req, res, next) {
  res.render('components/calendar',  { title: 'Calendar' });
});

router.get('/pages/cards', function(req, res, next) {
  res.render('components/cards',  { title: 'Cards' });
});

router.get('/pages/checkbox', function(req, res, next) {
  res.render('components/checkbox',  { title: 'Checkbox' });
});

router.get('/pages/colors', function(req, res, next) {
  res.render('components/colors',  { title: 'Colors' });
});

router.get('/pages/form', function(req, res, next) {
  res.render('components/form',  { title: 'Form' });
});

router.get('/pages/grid', function(req, res, next) {
  res.render('components/grid',  { title: 'Grid' });
});

router.get('/pages/grid2', function(req, res, next) {
  res.render('components/grid2',  { title: 'Grid2' });
});

router.get('/pages/input', function(req, res, next) {
  res.render('components/input',  { title: 'Input' });
});

router.get('/pages/list', function(req, res, next) {
  res.render('components/list',  { title: 'List' });
});

router.get('/pages/message', function(req, res, next) {
  res.render('components/message',  { title: 'Message' });
});

router.get('/pages/modal', function(req, res, next) {
  res.render('components/modal',  { title: 'Modal' });
});

router.get('/pages/pagination', function(req, res, next) {
  res.render('components/pagination',  { title: 'Pagination' });
});

router.get('/pages/panel', function(req, res, next) {
  res.render('components/panel',  { title: 'Panel' });
});

router.get('/pages/selectbox', function(req, res, next) {
  res.render('components/selectbox',  { title: 'Selectbox' });
});

router.get('/pages/switch', function(req, res, next) {
  res.render('components/switch',  { title: 'Switch' });
});

router.get('/pages/tabs', function(req, res, next) {
  res.render('components/tabs',  { title: 'Tabs' });
});

router.get('/pages/table', function(req, res, next) {
  res.render('components/table',  { title: 'Table' });
});

router.get('/pages/tag', function(req, res, next) {
  res.render('components/tag',  { title: 'Tag' });
});

router.get('/pages/toast', function(req, res, next) {
  res.render('components/toast',  { title: 'Toast' });
});


module.exports = router;
