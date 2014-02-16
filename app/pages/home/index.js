'use strict';

var inherits = require('inherits');
var BasePage = require('base-page');
var tpl = require('./template.html');

module.exports = Home;

inherits(Home, BasePage);

function Home() {
  BasePage.call(this, tpl);
}
