"use strict";var precacheConfig=[["//jonathandduncan.github.io/ProgramaReuniones2019/index.html","a904c2c57ef88e4aa21bd52de6b3aca0"],["//jonathandduncan.github.io/ProgramaReuniones2019/static/css/main.de9cb335.chunk.css","84ce375a5120a0cdfbdf34664a9bb32e"],["//jonathandduncan.github.io/ProgramaReuniones2019/static/js/main.4540b653.chunk.js","e1357ff5914635d76e43766fbf468c30"],["//jonathandduncan.github.io/ProgramaReuniones2019/static/js/runtime~main.631c76fc.js","ed7e8562fe394dc2f9c08ed730be59b1"],["//jonathandduncan.github.io/ProgramaReuniones2019/static/js/vendors~main.b6700062.chunk.js","8cb5a5aa1ed5bf78034545cce60cd311"],["//jonathandduncan.github.io/ProgramaReuniones2019/static/media/brand-icons.13db00b7.eot","13db00b7a34fee4d819ab7f9838cc428"],["//jonathandduncan.github.io/ProgramaReuniones2019/static/media/brand-icons.a046592b.woff","a046592bac8f2fd96e994733faf3858c"],["//jonathandduncan.github.io/ProgramaReuniones2019/static/media/brand-icons.a1a749e8.svg","a1a749e89f578a49306ec2b055c073da"],["//jonathandduncan.github.io/ProgramaReuniones2019/static/media/brand-icons.c5ebe0b3.ttf","c5ebe0b32dc1b5cc449a76c4204d13bb"],["//jonathandduncan.github.io/ProgramaReuniones2019/static/media/brand-icons.e8c322de.woff2","e8c322de9658cbeb8a774b6624167c2c"],["//jonathandduncan.github.io/ProgramaReuniones2019/static/media/icons.0ab54153.woff2","0ab54153eeeca0ce03978cc463b257f7"],["//jonathandduncan.github.io/ProgramaReuniones2019/static/media/icons.8e3c7f55.eot","8e3c7f5520f5ae906c6cf6d7f3ddcd19"],["//jonathandduncan.github.io/ProgramaReuniones2019/static/media/icons.962a1bf3.svg","962a1bf31c081691065fe333d9fa8105"],["//jonathandduncan.github.io/ProgramaReuniones2019/static/media/icons.b87b9ba5.ttf","b87b9ba532ace76ae9f6edfe9f72ded2"],["//jonathandduncan.github.io/ProgramaReuniones2019/static/media/icons.faff9214.woff","faff92145777a3cbaf8e7367b4807987"],["//jonathandduncan.github.io/ProgramaReuniones2019/static/media/outline-icons.701ae6ab.eot","701ae6abd4719e9c2ada3535a497b341"],["//jonathandduncan.github.io/ProgramaReuniones2019/static/media/outline-icons.82f60bd0.svg","82f60bd0b94a1ed68b1e6e309ce2e8c3"],["//jonathandduncan.github.io/ProgramaReuniones2019/static/media/outline-icons.ad97afd3.ttf","ad97afd3337e8cda302d10ff5a4026b8"],["//jonathandduncan.github.io/ProgramaReuniones2019/static/media/outline-icons.cd6c777f.woff2","cd6c777f1945164224dee082abaea03a"],["//jonathandduncan.github.io/ProgramaReuniones2019/static/media/outline-icons.ef60a4f6.woff","ef60a4f6c25ef7f39f2d25a748dbecfe"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,n){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=n),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(n){return new Response(n,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,n,a,t){var c=new URL(e);return t&&c.pathname.match(t)||(c.search+=(c.search?"&":"")+encodeURIComponent(n)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,n){if(0===e.length)return!0;var a=new URL(n).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,n){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return n.every(function(n){return!n.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var n=e[0],a=e[1],t=new URL(n,self.location),c=createCacheKey(t,hashParamName,a,/\.\w{8}\./);return[t.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!n.has(a)){var t=new Request(a,{credentials:"same-origin"});return fetch(t).then(function(n){if(!n.ok)throw new Error("Request for "+a+" returned a response with status "+n.status);return cleanResponse(n).then(function(n){return e.put(a,n)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!n.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var n,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(n=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),n=urlsToCacheKeys.has(a));0,n&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(n){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,n),fetch(e.request)}))}});