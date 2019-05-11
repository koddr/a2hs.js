<h1 align="center">📲 a2hs.js</h1>
<h4 align="center"><i>Add progressive web application (PWA) to Home Screen on iOS</i></h4>

<p align="center">
  <img width="640px" src="https://user-images.githubusercontent.com/11155743/57543776-fd47ba80-735d-11e9-8c7d-07b0f498b627.jpg" alt="iPhone X mockup a2hs.js"/>
</p>

<p align="center">
  <img src="https://badge.fury.io/js/a2hs.js.svg" alt="npm version"/>
  <img src="https://img.shields.io/badge/minified_and_gzipped-1.29_KB-blue.svg" alt="bundle size"/>
  <img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat" alt="code style: prettier"/>
  <img src="https://img.shields.io/badge/license-MIT-yellow.svg?style=flat" alt="license"/>
  <a href="https://twitter.com/intent/tweet?text=Wow%20%F0%9F%91%8D%20Useful%20%23js%20solution%20for%20add%20progressive%20web%20application%20%23PWA%20to%20Home%20Screen%20on%20%23iOS:%20&url=https%3A%2F%2Fgithub.com%2Fkoddr%2Fa2hs.js" target="_blank">
    <img src="https://img.shields.io/twitter/url/https/github.com/koddr/a2hs.js.svg" alt="twit link"/>
  </a>
</p>

<p align="center">
    A useful modern JavaScript solution that helps your website users to add (install) a <b>progressive web application</b> (PWA) to the <b>Home screen</b> of their mobile <b>iOS</b> device. Designed for the <b>latest 4 major versions</b> of iOS Safari 9.x-12.2+.
</p>

## Install

```console
foo@bar:~$ npm install --save a2hs.js
```

## Usage

```js
/**
 * Import a2hs.js
 */
import AddToHomeScreen from "a2hs.js";

/**
 * Simple (with default config) init
 */
new AddToHomeScreen();

/**
 * Advanced (with your config) init
 */
new AddToHomeScreen({
    brandName: "Demo",
    fontFamily: "Tahoma, sans-serif",
    backgroundColor: "red",
    color: "white",
    // ... see full list of config options below
});
```

## Config

<p align="center">
  <img width="560px" src="https://user-images.githubusercontent.com/11155743/57544456-0c2f6c80-7360-11e9-96ec-a4ee59d5bbac.jpg" alt="config example"/>
</p>

|~|Description|Default|
|---|---|---|
|`backgroundColor`|Background color for container|`#f9f9f9`|
|`padding`|Padding for container|`10px`|
|`shadowColor`|Shadow color for top of container|`#e9e9e9`|
|`shadowSize`|Shadow size for top of container|`10px`|
|`fontFamily`|Font family for content in container|`-apple-system, sans-serif`|
|`color`|Font color for content in container|`#5d5d5d`|
|`fontSize`|Font size for content in container|`0.9rem`|
|`brandName`|Brand for default `htmlContent`|`""`|
|`logoImage`|Logo for container|[`inline SVG`](https://github.com/koddr/a2hs.js/blob/master/img/pwa_logo.svg)|
|`htmlContent`|Content for container with HTML|`Install <strong>{{brandName}} web app</strong> on your iOS device: tap share and <strong>Add to Home Screen</strong> ↓`|

## Demo

<table border="0">
 <tr border="0">
   <td width="300px" border="0">
     <img width="100%" src="https://user-images.githubusercontent.com/11155743/57539303-e2bc1400-7352-11e9-951c-07bb63b4cb61.gif" alt="demo"/>
   </td>
   <td border="0">
     <p>
       <img src="https://user-images.githubusercontent.com/3104648/28352004-a055292c-6c4b-11e7-9c6b-a94cdc2a5458.png" alt="PWA logo"/>
     </p>
     <p>The content container, by default, <strong>attached to bottom</strong> of iOS device screen (used CSS property <code>position: fixed</code>). The container will not be displayed:</p>
     <ul>
       <li>If user opened website, as a progressive web app (PWA);</li>
       <li>If user clicked once on content container (used <code>localStorage</code> for save state);</li>
     </ul>
     <h3>Live demo</h3>
     <p>Go to private mode in iOS Safari and open <a href="https://1wa.co" target="_blank">True web artisans</a> website.</p>
   </td>
 </tr>
</table>

## Size limit report

```console
foo@bar:~$ npm run size

  dist/index.js.map    5.69 KB      6ms
  dist/index.js        3.72 KB    293ms

  Time limit:   50 ms
  Package size: 1.29 KB with all dependencies, minified and gzipped
  Loading time: 26 ms   on slow 3G
  Running time: 23 ms   on Snapdragon 410
  Total time:   48 ms
```
_Thanks to Andrey Sitnik [@ai/size-limit](https://github.com/ai/size-limit)._

## License

MIT
