<h1 align="center">📲 a2hs.js</h1>
<h4 align="center"><i>Add progressive web application (PWA) to Home Screen on iOS</i></h4>

<p align="center">
  <img width="640px" src="https://user-images.githubusercontent.com/11155743/57543776-fd47ba80-735d-11e9-8c7d-07b0f498b627.jpg" alt="iPhone X mockup a2hs.js"/>
</p>

<p align="center">
  <img src="https://badge.fury.io/js/a2hs.js.svg" alt="npm version"/>
  <img src="https://img.shields.io/bundlephobia/min/a2hs.js.svg?style=flat" alt="bundle size"/>
  <img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat" alt="code style: prettier"/>
  <img src="https://img.shields.io/badge/license-MIT-yellow.svg?style=flat" alt="license"/>
  <img src="https://img.shields.io/twitter/url/https/github.com/koddr/a2hs.js.svg" alt="twit link"/>
</p>

<p align="center">
    A useful modern JavaScript solution for adding (install) a <b>progressive web application</b> (PWA) to the <b>Home screen</b> of your <b>iOS</b> mobile device. Designed for the <b>latest 4 major versions</b> of iOS Safari 9.x-12.2+.
</p>

## Install

```bash
$ npm install --save a2hs.js
```

## Usage

```js
// Import a2hs.js
import AddToHomeScreen from "a2hs.js";

// Init a2hs.js
new AddToHomeScreen({
    brandName: "Demo",
    fontFamily: "Tahoma, sans-serif",
    backgroundColor: "red",
    color: "white"
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
     <p>The content container, by default, <strong>attached to bottom</strong> of iOS device screen. Used property <code>position: fixed</code>. The container will not be displayed if user:</p>
     <ul>
       <li>Opened web site, as a progressive web application (PWA);</li>
       <li>Clicked on container on web site;</li>
     </ul>
   </td>
 </tr>
</table>

## License

MIT
