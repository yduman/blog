/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.6.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-1fa171598d160e505fb5.js"
  },
  {
    "url": "app-b622b6ad87be5c6fba92.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-6eb585ddef981db16c66.js"
  },
  {
    "url": "index.html",
    "revision": "d8f233c324eee4b303072f7d5d401ad3"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "b1fb97821f25e49d39290824a2a5aeca"
  },
  {
    "url": "0.0eaca68bc06af2feb242.css"
  },
  {
    "url": "component---src-pages-index-js.eea27b20b43d165997e9.css"
  },
  {
    "url": "component---src-pages-index-js-ba162fdf6150db3f61ad.js"
  },
  {
    "url": "0-c8c8c3eabcd2ce49a0b3.js"
  },
  {
    "url": "static/d/15/path---index-6a9-uWWYagUAbhWbTAvEEfBK1ufkgVw.json",
    "revision": "53663761b5f0840db7bed9014a50d58e"
  },
  {
    "url": "component---src-pages-404-js-abe621e2f52f7cdf9f65.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "96e6fa099f2dfce6743ad8bed2dd4283"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/blog/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});