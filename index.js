'use strict'

window.onload = main

function main () {
  window.console.info('Running index.js!')

  if (checkDeps()) {
    window.$('#demo-1').on('click', demo1)
  }
}

function checkDeps() {
  window.console.group('Dependency check')
  try {
    if (window.$) {
      window.console.info('jQuery 3 dependency is present...')
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