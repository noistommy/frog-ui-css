var express = require('express');
var router = express.Router();

const fs = require('fs');
const path = require('path');

var codes = require('../codes')
var contents = require('../contents')

var markdownIt = require('markdown-it')

var md = new markdownIt({
  html: true,
  linkify: true,
  typographer: true
}).use(require('markdown-it-anchor'), {})


function getHtmlContents (mdxPath, lang) {
  const mdPath = path.join(__dirname, `../mds/${lang}/${mdxPath}.md`);
  const mdContent = fs.readFileSync(mdPath, 'utf-8');
  return md.render(mdContent);
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Frog UI' });
});

router.get('/pages/welcome', function(req, res, next) {
  res.render('components/mdTemp',  {
    title: 'Welcome to Frog' ,
    document:  getHtmlContents('welcome', req.cookies.lang || 'ko')
  });
});

router.get('/pages/principle', function(req, res, next) {
  res.render('components/mdTemp',  {
    title: 'Principles' ,
    document:  getHtmlContents('principle', req.cookies.lang || 'ko')
  });
});

router.get('/pages/faqs', function(req, res, next) {
  res.render('components/faqs',  {
    title: 'faqs', 
    document: getHtmlContents('faqs', req.cookies.lang || 'ko')
  });
});

router.get('/pages/components', function(req, res, next) {
  // res.render('components/components',  {title: 'Components' });
  res.render('components/mdTemp',  {
    title: 'Components' ,
    document:  getHtmlContents('components', req.cookies.lang || 'ko')
  });
});

router.get('/pages/semantic', function(req, res, next) {
  const lang = req.cookies.lang || 'ko'
  const mdPath = path.join(__dirname, `../mds/${lang}/semantic.md`);
  const mdContent = fs.readFileSync(mdPath, 'utf-8');
  const htmlContent = md.render(mdContent);
  res.render('components/mdTemp',  {title: 'Semantic Classes' , document: htmlContent});
});

router.get('/pages/tokens', function(req, res, next) {
  const lang = req.cookies.lang || 'ko'
  const mdPath = path.join(__dirname, `../mds/${lang}/tokens.md`);
  const mdContent = fs.readFileSync(mdPath, 'utf-8');
  const htmlContent = md.render(mdContent);
  res.render('components/mdTemp',  {title: 'Design tokens' , document: htmlContent});
});

// Base 

router.get('/pages/theming', function(req, res, next) {
  const lang = req.cookies.lang || 'ko'
  const mdPath = path.join(__dirname, `../mds/${lang}/theme.md`);
  const mdContent = fs.readFileSync(mdPath, 'utf-8');
  const htmlContent = md.render(mdContent);
  res.render('components/mdTemp',  {title: 'Theming' , document: htmlContent});
});

router.get('/pages/typography', function(req, res, next) {
  // res.render('components/base',  {title: 'Typography' });
  res.render('components/mdTemp',  {
    title: 'Typography' ,
    document:  getHtmlContents('typography', req.cookies.lang || 'ko')
  });
});

router.get('/pages/breakpoint', function(req, res, next) {
  res.render('components/breakpoint',  {title: 'BreakPoint' });
});

router.get('/pages/colors', function(req, res, next) {
  // res.render('components/colors',  { title: 'Colors' , codes: codes.colors });
  res.render('components/mdTemp',  {
    title: 'Colors' ,
    document:  getHtmlContents('colors', req.cookies.lang || 'ko')
  });
});

router.get('/pages/utilities', function(req, res, next) {
  res.render('components/mdTemp',  {
    title: 'Utilities' ,
    document:  getHtmlContents('utilities', req.cookies.lang || 'ko')
  });
});

// Elements

router.get('/pages/button', function(req, res, next) {
  res.render('components/button',  { title: 'Button' , codes: codes.button });
});

router.get('/pages/badge', function(req, res, next) {
  res.render('components/badge',  { title: 'Badge' , codes: codes.badge });
});

router.get('/pages/calendar', function(req, res, next) {
  res.render('components/calendar',  { title: 'Calendar' , codes: codes.calendar });
});

router.get('/pages/cards', function(req, res, next) {
  res.render('components/cards',  { title: 'Cards' , codes: codes.cards });
});

router.get('/pages/segments', function(req, res, next) {
  res.render('components/segments',  { title: 'Segments' , codes: codes.segments, contents });
});

router.get('/pages/checkbox', function(req, res, next) {
  res.render('components/checkbox',  { title: 'Checkbox', codes: codes.checkbox });
});

router.get('/pages/form', function(req, res, next) {
  res.render('components/form',  { title: 'Form', codes: codes.form });
});

router.get('/pages/grid', function(req, res, next) {
  res.render('components/grid',  { title: 'Grid' , codes: codes.grid });
});

router.get('/pages/grid2', function(req, res, next) {
  res.render('components/grid2',  { title: 'Grid2', codes: codes.grid2 });
});

router.get('/pages/input', function(req, res, next) {
  res.render('components/input',  { title: 'Input' , codes: codes.input });
});

router.get('/pages/list', function(req, res, next) {
  res.render('components/list',  { title: 'List' , codes: codes.list });
});

router.get('/pages/message', function(req, res, next) {
  res.render('components/message',  { title: 'Message', codes: codes.message });
});

router.get('/pages/modal', function(req, res, next) {
  res.render('components/modal',  { title: 'Modal' });
});

router.get('/pages/pagination', function(req, res, next) {
  res.render('components/pagination',  { title: 'Pagination', codes: codes.pagination });
});

router.get('/pages/panel', function(req, res, next) {
  res.render('components/panel',  { title: 'Panel' , codes: codes.panel });
});

router.get('/pages/selectbox', function(req, res, next) {
  res.render('components/selectbox',  { title: 'Selectbox' , codes: codes.selectbox });
});

router.get('/pages/switch', function(req, res, next) {
  res.render('components/switch',  { title: 'Switch', codes: codes.switch });
});

router.get('/pages/tabs', function(req, res, next) {
  res.render('components/tabs',  { title: 'Tabs' , codes: codes.tabs });
});

router.get('/pages/table', function(req, res, next) {
  res.render('components/table',  { title: 'Table' , codes: codes.table });
});

router.get('/pages/tag', function(req, res, next) {
  res.render('components/tag',  { title: 'Tag' , codes: codes.tag });
});

router.get('/pages/tooltip', function(req, res, next) {
  res.render('components/tooltip',  { title: 'Tooltip' , codes: codes.tooltip });
});

router.get('/pages/tree', function(req, res, next) {
  res.render('components/tree',  { title: 'Tree', codes: codes.tree });
});

router.get('/pages/slider', function(req, res, next) {
  res.render('components/slider',  { title: 'Slider', codes: codes.slider });
});

router.get('/pages/breadcrumb', function(req, res, next) {
  res.render('components/breadcrumb',  { title: 'Breadcrumb', codes: codes.slider });
});

// Layout

// Modules


router.get('/pages/toast', function(req, res, next) {
  res.render('components/toast',  { title: 'Toast' });
});

module.exports = router;
