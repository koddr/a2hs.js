/**
 * Vic Shóstak <truewebartisans@gmail.com>
 * Copyright (c) 2019 True web artisans https://1wa.co
 * http://opensource.org/licenses/MIT The MIT License (MIT)
 *
 * a2hs.js v0.3.0 at 10/05/2019
 *
 * Add to Home Screen
 *
 * A useful modern JavaScript solution for adding a progressive
 * web application (PWA) to the home screen of your mobile
 * iOS device.
 */

'use strict'

export default class AddToHomeScreen {
  constructor (...settings) {
    // Container styles
    this.backgroundColor = settings.backgroundColor || '#fafafa'
    this.padding = settings.padding || '10px'
    this.position = settings.position || 'absolute'
    this.positionRight = settings.positionRight || 0
    this.positionBottom = settings.positionBottom || 0
    this.positionLeft = settings.positionLeft || 0
    this.width = settings.width || '100%'
    // Content styles
    this.fontFamily = settings.fontFamily || '-apple-system, sans-serif'
    this.color = settings.color || '#3d3d3d'
    this.fontSize = settings.fontSize || '1rem'
    // Content
    this.logoImage =
      settings.logoImage ||
      `<svg enable-background="new 0 0 1952.00 734.93" height="25" viewBox="0 0 1952 734.93" width="70" xmlns="http://www.w3.org/2000/svg">
        <g stroke-linejoin="round" stroke-width=".2">
          <path d="m1436.62 603.304 56.39-142.599h162.82l-77.27-216.315 96.64-244.38947166 276.8 734.93247166h-204.13l-47.3-131.629z" fill="#3d3d3d"/>
          <path d="m1262.47 734.935 296.32-734.93343407-196.45.00097657-202.7 474.9304575-144.14-474.92948094h-151.001l-154.768 474.92948094-109.146-216.416-98.773 304.302 100.284 172.116h193.331l139.857-425.91 133.346 425.91z" fill="#5a0fc8"/>
          <path d="m186.476 482.643h121.003c36.654 0 69.293-4.091 97.917-12.273l31.293-96.408 87.459-269.446c-6.664-10.5625-14.272-20.5493-22.824-29.9591-44.905-49.7049-110.605-74.55649373-197.102-74.55649373h-304.22200381v734.93259373h186.47600381zm160.166-313.564c17.54 17.653 26.309 41.276 26.309 70.871 0 29.822-7.713 53.474-23.138 70.956-16.91 19.425-48.047 29.137-93.409 29.137h-69.928v-197.445h70.442c42.277 0 72.185 8.827 89.724 26.481z" fill="#3d3d3d"/>
        </g>
      </svg>`
    this.htmlContent =
      settings.htmlContent ||
      'Install webapp on your iOS device: Tap share and Add to homescreen ↓'
  }

  /**
   * Init function
   */

  init () {
    // Define iOS User-Agent variable
    const iOS = /iphone|ipad|ipod/.test(
      window.navigator.userAgent.toLowerCase()
    )
    // Define standalone mode variable
    const standalone =
      'standalone' in window.navigator && window.navigator.standalone
    // Check localStorage before render a2hs container
    if (iOS && !standalone && !localStorage.a2hs_message) {
      // Define container variable
      let div = document.createElement('div')
      // Define style variable
      let style = document.createElement('style')
      // Create styles
      style.innerHTML = `
      .a2hs__container {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${this.backgroundColor};
        padding: ${this.padding};
        position: ${this.position};
        right: ${this.positionRight};
        bottom: ${this.positionBottom};
        left: ${this.positionLeft};
        width: ${this.width};
      }
      .a2hs__container .a2hs__logo {
        padding: ${this.padding};
      }
      .a2hs__container .a2hs__text {
        font-family: ${this.fontFamily};
        font-size: ${this.fontSize};
        color: ${this.color};
      }`
      // Create message
      div.innerHTML = `<div class="a2hs__logo">${this.logoImage}</div>
      <div class="a2hs__text">${this.htmlContent}</div>`
      // Add class to container
      div.setAttribute('class', 'a2hs__container')
      // Add onClick function
      div.onclick = this.close
      // Render elements
      document.head.appendChild(style)
      document.body.appendChild(div)
    }
  }

  /**
   * Close function
   */

  close () {
    // Remove a2hs_message from localStorage
    localStorage.setItem('a2hs_message', 0)
    document.querySelector('.a2hs__container').remove()
  }
}
