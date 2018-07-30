/*
Copyright 2016 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
// This file will be replaced by the generated service worker when we work with
// the sw-precache and sw-toolbox libraries.

// TODO SW-3 - cache the application shell
var filesToCache = [
  '/',
  'index.html',
  'scripts/main.min.js',
  'styles/main.css',
  'images/products/Casio G-Shock GA-100DE-2ADR_BA-110DE-2A2DR.jpg',
  'images/products/Alexandre Christie AC 8517 BIPBA.jpg',
  'images/products/Ferrari Scuderia RedRev 0870021.jpg',
  'images/products/Alexandre Christie AC 6455 BGDIV.jpg',
  'images/products/TISSOT Chemin Des Tourelles Automatic.jpg',
  'images/products/Alexandre Christie AC 8480 BIPBUIV.jpg',
  'images/touch/apple-touch-icon.png',
  'images/touch/chrome-touch-icon-192x192.png',
  'images/touch/icon-128x128.png',
  'images/touch/ms-touch-icon-144x144-precomposed.png',
  'images/about-hero-image.jpg',
  'images/delete.svg',
  'images/footer-background.png',
  'images/hamburger.svg',
  'images/header-bg.jpg',
  'images/logo.png'
];
// TODO SW-4 - use the cache-first strategy to fetch and cache resources in the
// fetch event listener
var staticCacheName = 'ricky-project-v1';

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(staticCacheName)
    .then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request).then(function(response) {
          return caches.open(staticCacheName).then(function(cache) {
            cache.put(event.request.url, response.clone());
            return response;
          });
        });
      })
    );
  }
});
// TODO SW-5 - delete outdated caches in the activate event listener
self.addEventListener('activate', function(event) {
  console.log('Activating new service worker...');

  var cacheWhitelist = [staticCacheName];

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
