'use strict';

var nextTick = require('next-tick');
var page = require('page');
var Home = require('home');
var About = require('about');

var container = document.querySelector('#app');
var currentPage;

page('/', removeCurrentPage, function() {
  addNewPage(Home);
});

page('/about', removeCurrentPage, function() {
  addNewPage(About);
});

page();


function removeCurrentPage(ctx, next) {
  if (!currentPage) {
    next();
    return;
  }

  currentPage.once('transitionOutComplete', function() {
    currentPage.dispose();
    next();
  });

  currentPage.transitionOut();
}

function addNewPage(C) {
  currentPage = new C();
  container.appendChild(currentPage.el);
  nextTick(function() {
   currentPage.transitionIn();
  });
}
