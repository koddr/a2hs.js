/**
 * Vic Shóstak <truewebartisans@gmail.com>
 * Copyright (c) 2019 True web artisans https://1wa.co
 * http://opensource.org/licenses/MIT The MIT License (MIT)
 *
 * a2hs.js v0.1.1 at 08/05/2019
 *
 * Add to Home Screen
 *
 * A useful modern JavaScript solution for adding a progressive
 * web application (PWA) to the home screen of your mobile
 * iOS device.
 */

// Detects if device is on iOS
const isIos = () => {
  const userAgent = window.navigator.userAgent.toLowerCase()
  return /iphone|ipad|ipod/.test(userAgent)
}

// Detects if device is in standalone mode
const isInStandaloneMode = () =>
  'standalone' in window.navigator && window.navigator.standalone

// Checks if should display install popup notification:
if (isIos() && !isInStandaloneMode()) {
  alert("it's iOS")
}
