'use strict'

window.onload = main

function main () {
  window.console.info('Running index.js!')

  if (checkDeps()) {
    window.$('button#demo-1').on('click', demo1)
    window.$('#nav-start-btn').on('click', startSlideShow)
    window.$('button#demo-2').on('click', demo2)
    window.$('#go-to-slide').on('click', goToSection)
  }
}

function checkDeps() {
  window.console.group('Dependency check')
  try {
    if (window.$) {
      window.console.info('jQuery 3 dependency is present...')
      window.console.groupEnd('Dependency check')
      return true
    } else {
      throw Error('Project missing dependency: jQuery')
    }
  } catch (err) {
    window.console.error('Dependency check error:', err)
  }
  window.console.groupEnd('Dependency check')
  return false
}

const demo1 = function(ev) {
  window.console.log('hey there cutie')
}

const startSlideShow = function (ev) {
  try {
    window.$('#main-carousel').carousel(1)  
  } catch(err) {
    window.console.error('Error navigating to carousel slide:', err)
  }
}

const demo2 = function (ev) {
  window.console.assert(1 > 2, 'Error: 1 is less than 2!')
}

const goToSection = function (ev) {
  const slideIndex = parseInt(window.$(ev.target).attr('data-slide'))
  window.$('#main-carousel').carousel(slideIndex)
}