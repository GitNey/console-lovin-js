'use strict'

window.onload = main

function main () {
  window.console.info('Running index.js!')

  if (checkDeps()) {
    window.$('#demo-1').on('click', demo1)
    window.$('#nav-start-btn').on('click', startSlideShow)
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
    window.console.log('Dependency check error:', err)
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