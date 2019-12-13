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
    A useful modern JavaScript solution that helps your website users to add (install) a <b>progressive web application</b> (PWA) to the <b>Home Screen</b> of their mobile <b>iOS</b> devices. Designed for the <b>latest 4 major versions</b> of iOS Safari 9.x-12.2+.
</p>

## The Why?

As you probably know, iOS Safari doesn't have a built-in pop-up window with a suggestion to install a progressive web app on an iPhone/iPad (like Google Chrome). The `a2hs.js` project easily solves this problem!

Also, it's **lightweight**, **production-ready**, **zero-configuration**, has **no dependencies** and **perfectly works** with all of popular JavaScript frontend frameworks.

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
AddToHomeScreen();

/**
 * Advanced (with your config) init
 */
AddToHomeScreen({
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
   </td>
 </tr>
</table>

### Demo on `localhost`

```console
foo@bar:~$ git clone https://github.com/koddr/a2hs.js.git && cd a2hs.js
foo@bar:a2hs.js$ npm install
foo@bar:a2hs.js$ npm start

  Server running at http://localhost:1234 
  ✨  Built in 18ms.
```

**🖥 Desktop Google Chrome:**

1. Then, go to `Developer Tools` on opened page `http://localhost:1234`;
2. Switch to `Device toolbar` and choose `iPhone` in `Emulated Devices` select;
3. **↺ Refresh page**;

### Live demo

Go to `private mode` on your iOS Safari and open [True web artisans](https://1wa.co/) website.

## Animation

```css
/**
 * Add slide animation when loading a2hs.js container:
 * slideUp, slideDown, slideLeft, slideRight
 *
 * Params: 
 *  animation speed (example: 0.7s)
 */

.a2hs__container {
  animation: slideUp 0.7s ease;
}

@keyframes slideUp {
  0% {
    opacity: 0;
    transform: translateY(240px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideDown {
  0% {
    opacity: 0;
    transform: translateY(-240px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideLeft {
  0% {
    opacity: 0;
    transform: translateX(240px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideRight {
  0% {
    opacity: 0;
    transform: translateX(-240px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
```
## Size limit report

```console
foo@bar:~$ npm run size

  ✨ Built in 234ms.

  dist/index.js.map    5.68 KB     5ms
  dist/index.js        3.72 KB    13ms

  Time limit:   50 ms
  Package size: 1.29 KB with all dependencies, minified and gzipped
  Loading time: 26 ms   on slow 3G
  Running time: 21 ms   on Snapdragon 410
  Total time:   47 ms
```
_Thanks to Andrey Sitnik [@ai/size-limit](https://github.com/ai/size-limit)._

## Developers

- Idea and active development by [Vic Shóstak](https://github.com/koddr) (aka Koddr).

## Project assistance

If you want to say «thank you» or/and support active development `a2hs.js`:

1. Add a GitHub Star to project.
2. Twit about project [on your Twitter](https://twitter.com/intent/tweet?text=Wow%20%F0%9F%91%8D%20Useful%20%23js%20solution%20for%20add%20progressive%20web%20application%20%23PWA%20to%20Home%20Screen%20on%20%23iOS:%20&url=https%3A%2F%2Fgithub.com%2Fkoddr%2Fa2hs.js).
3. Donate some money to project author via PayPal: [@paypal.me/koddr](https://paypal.me/koddr?locale.x=en_EN).
4. Join DigitalOcean at our [referral link](https://m.do.co/c/b41859fa9b6e) (your profit is **$100** and we get $25).

Thanks for your support! 😘 Together, we make this project better every day.

## License

MIT
