/**
 * Vic Shóstak <truewebartisans@gmail.com>
 * Copyright (c) 2019 True web artisans https://1wa.co
 * http://opensource.org/licenses/MIT The MIT License (MIT)
 *
 * a2hs.js v0.2.0 at 09/05/2019
 *
 * Add to Home Screen
 *
 * A useful modern JavaScript solution for adding a progressive
 * web application (PWA) to the home screen of your mobile
 * iOS device.
 */

export default class AddToHomeScreen {
  constructor (...settings) {
    this.fontFamily = settings.fontFamily || '-apple-system, sans-serif'
    this.backgroundColor = settings.backgroundColor || '#fafafa'
    this.color = settings.color || '#555555'
    this.padding = settings.padding || '10px'
  }

  init () {
    const iOS = /iphone|ipad|ipod/.test(
      window.navigator.userAgent.toLowerCase()
    )
    const standalone =
      'standalone' in window.navigator && window.navigator.standalone

    if (iOS && !standalone) {
      // Define variables
      let div = document.createElement('div')
      let style = document.createElement('style')

      // Create stylesheet
      style.innerHTML = `
      .a2hs__container {
        font-family: ${this.fontFamily};
        background-color: ${this.backgroundColor};
        color: ${this.color};
        padding: ${this.padding};
        box-sizing: border-box;
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
        width: 100%;
      }`

      // Create message
      div.innerHTML =
        'Install this webapp on your iOS device:<br/>Tap share and then Add to homescreen ↓'

      // Add class name
      div.setAttribute('class', 'a2hs__container')

      // Render elements
      document.body.appendChild(div)
      document.head.appendChild(style)
    }
  }
}
