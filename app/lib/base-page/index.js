'use strict';

var domify = require('domify');
var Emitter = require('emitter');
var transitionEnd = require('transitionend');

module.exports = BasePage;

Emitter(BasePage.prototype);

function BasePage(tpl) {
  this.el = domify(tpl);
}

BasePage.prototype.transitionIn = function() {
  this.el.classList.add('is-visible');
};

BasePage.prototype.transitionOut = function() {
  var self = this;

  this.el.addEventListener(transitionEnd, complete, false);
  this.el.classList.remove('is-visible');

  function complete() {
    self.emit('transitionOutComplete');
    self.el.removeEventListener(transitionEnd, complete, false);
  }
};

BasePage.prototype.dispose = function() {
  this.el.parentNode.removeChild(this.el);
};
