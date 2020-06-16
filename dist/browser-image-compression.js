/**
 * Browser Image Compression
 * v1.0.11
 * by Donald <donaldcwl@gmail.com>
 * https://github.com/Donaldcwl/browser-image-compression
 */

!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e=e||self).imageCompression=r()}(this,(function(){"use strict";function _defineProperty(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function ownKeys(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(n),!0).forEach((function(r){_defineProperty(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function _slicedToArray(e,r){return function _arrayWithHoles(e){if(Array.isArray(e))return e}(e)||function _iterableToArrayLimit(e,r){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],t=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(t=(a=s.next()).done)&&(n.push(a.value),!r||n.length!==r);t=!0);}catch(e){o=!0,i=e}finally{try{t||null==s.return||s.return()}finally{if(o)throw i}}return n}(e,r)||function _unsupportedIterableToArray(e,r){if(!e)return;if("string"==typeof e)return _arrayLikeToArray(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(e,r)}(e,r)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}var e="undefined"!=typeof window,r=e&&window.cordova&&window.cordova.require&&window.cordova.require("cordova/modulemapper"),CustomFile=e&&(r&&r.getOriginalSymbol(window,"File")||File),CustomFileReader=e&&(r&&r.getOriginalSymbol(window,"FileReader")||FileReader),n=new Promise((function(e,r){var n,t,o,i;return getFilefromDataUrl("data:image/jpeg;base64,/9j/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAYAAAAAAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAEAAgMBEQACEQEDEQH/xABKAAEAAAAAAAAAAAAAAAAAAAALEAEAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8H//2Q==","test.jpg",Date.now()).then((function(a){try{return drawFileInCanvas(n=a).then((function(a){try{return canvasToFile(t=a[1],n.type,n.name,n.lastModified).then((function(n){try{return o=n,cleanupCanvasMemory(t),getDataUrlFromFile(o).then((function(n){try{return loadImage(n).then((function(n){try{return e(1===(i=n).width&&2===i.height)}catch(e){return r(e)}}),r)}catch(e){return r(e)}}),r)}catch(e){return r(e)}}),r)}catch(e){return r(e)}}),r)}catch(e){return r(e)}}),r)}));function getDataUrlFromFile(e){return new Promise((function(r,n){var t=new CustomFileReader;t.onload=function(){return r(t.result)},t.onerror=function(e){return n(e)},t.readAsDataURL(e)}))}function getFilefromDataUrl(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Date.now();return new Promise((function(t){for(var o=e.split(","),i=o[0].match(/:(.*?);/)[1],a=atob(o[1]),s=a.length,c=new Uint8Array(s);s--;)c[s]=a.charCodeAt(s);var u=new Blob([c],{type:i});u.name=r,u.lastModified=n,t(u)}))}function loadImage(e){return new Promise((function(r,n){var t=new Image;t.onload=function(){return r(t)},t.onerror=function(e){return n(e)},t.src=e}))}function drawImageInCanvas(e){var r=_slicedToArray(getNewCanvasAndCtx(e.width,e.height),2),n=r[0];return r[1].drawImage(e,0,0,n.width,n.height),n}function drawFileInCanvas(e){return new Promise((function(r,n){var t,o,i=function $Try_1_Post(){try{return o=drawImageInCanvas(t),r([t,o])}catch(e){return n(e)}},a=function $Try_1_Catch(r){try{return getDataUrlFromFile(e).then((function(e){try{return loadImage(e).then((function(e){try{return t=e,i()}catch(e){return n(e)}}),n)}catch(e){return n(e)}}),n)}catch(e){return n(e)}};try{return createImageBitmap(e).then((function(e){try{return t=e,i()}catch(e){return a()}}),a)}catch(e){a()}}))}function canvasToFile(e,r,n,t){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;return new Promise((function(i,a){var s;return"function"==typeof OffscreenCanvas&&e instanceof OffscreenCanvas?e.convertToBlob({type:r,quality:o}).then(function(e){try{return(s=e).name=n,s.lastModified=t,$If_4.call(this)}catch(e){return a(e)}}.bind(this),a):getFilefromDataUrl(e.toDataURL(r,o),n,t).then(function(e){try{return s=e,$If_4.call(this)}catch(e){return a(e)}}.bind(this),a);function $If_4(){return i(s)}}))}function getExifOrientation(e){return new Promise((function(r,n){var t=new CustomFileReader;t.onload=function(e){var n=new DataView(e.target.result);if(65496!=n.getUint16(0,!1))return r(-2);for(var t=n.byteLength,o=2;o<t;){if(n.getUint16(o+2,!1)<=8)return r(-1);var i=n.getUint16(o,!1);if(o+=2,65505==i){if(1165519206!=n.getUint32(o+=2,!1))return r(-1);var a=18761==n.getUint16(o+=6,!1);o+=n.getUint32(o+4,a);var s=n.getUint16(o,a);o+=2;for(var c=0;c<s;c++)if(274==n.getUint16(o+12*c,a))return r(n.getUint16(o+12*c+8,a))}else{if(65280!=(65280&i))break;o+=n.getUint16(o,!1)}}return r(-1)},t.onerror=function(e){return n(e)},t.readAsArrayBuffer(e)}))}function handleMaxWidthOrHeight(e,r){var n,t=e.width,o=e.height,i=r.maxWidthOrHeight,a=e;if(isFinite(i)&&(t>i||o>i)){var s=_slicedToArray(getNewCanvasAndCtx(t,o),2);a=s[0],n=s[1],t>o?(a.width=i,a.height=o/t*i):(a.width=t/o*i,a.height=i),n.drawImage(e,0,0,a.width,a.height),cleanupCanvasMemory(e)}return a}function followExifOrientation(e,r){var n=e.width,t=e.height,o=_slicedToArray(getNewCanvasAndCtx(n,t),2),i=o[0],a=o[1];switch(4<r&&r<9?(i.width=t,i.height=n):(i.width=n,i.height=t),r){case 2:a.transform(-1,0,0,1,n,0);break;case 3:a.transform(-1,0,0,-1,n,t);break;case 4:a.transform(1,0,0,-1,0,t);break;case 5:a.transform(0,1,1,0,0,0);break;case 6:a.transform(0,1,-1,0,t,0);break;case 7:a.transform(0,-1,-1,0,t,n);break;case 8:a.transform(0,-1,1,0,0,n)}return a.drawImage(e,0,0,n,t),cleanupCanvasMemory(e),i}function getNewCanvasAndCtx(e,r){var n,t;try{if(null===(t=(n=new OffscreenCanvas(e,r)).getContext("2d")))throw new Error("getContext of OffscreenCanvas returns null")}catch(e){t=(n=document.createElement("canvas")).getContext("2d")}return n.width=e,n.height=r,[n,t]}function cleanupCanvasMemory(e){e.width=0,e.height=0}function compress(e,r){return new Promise((function(t,o){var i,a,s,c,u,l,f,m,g,A,d,p,h,y,v,w,C;function incProgress(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5;i+=e,r.onProgress(Math.min(i,100))}function setProgress(e){i=Math.min(Math.max(e,i),100),r.onProgress(i)}return i=0,a=r.maxIteration||10,s=1024*r.maxSizeMB*1024,incProgress(),drawFileInCanvas(e).then(function(i){try{var E=_slicedToArray(i,2);return E[0],c=E[1],incProgress(),u=handleMaxWidthOrHeight(c,r),incProgress(),new Promise((function(n,t){var o;if(!(o=r.exifOrientation))return getExifOrientation(e).then(function(e){try{return o=e,$If_2.call(this)}catch(e){return t(e)}}.bind(this),t);function $If_2(){return n(o)}return $If_2.call(this)})).then(function(i){try{return l=i,incProgress(),n.then(function(n){try{return f=n?u:followExifOrientation(u,l),incProgress(),m=1,canvasToFile(f,r.fileType||e.type,e.name,e.lastModified,m).then(function(n){try{{if(g=n,incProgress(),A=g.size>s,d=g.size>e.size,!A&&!d)return setProgress(100),t(g);var i;function $Loop_3(){if(a--&&(y>s||y>p)){var n,t,i=_slicedToArray(getNewCanvasAndCtx(n=A?.95*C.width:C.width,t=A?.95*C.height:C.height),2);return w=i[0],i[1].drawImage(C,0,0,n,t),"image/jpeg"===e.type&&(m*=.95),canvasToFile(w,r.fileType||e.type,e.name,e.lastModified,m).then((function(e){try{return v=e,cleanupCanvasMemory(C),C=w,y=v.size,setProgress(Math.min(99,Math.floor((h-y)/(h-s)*100))),$Loop_3}catch(e){return o(e)}}),o)}return[1]}return p=e.size,h=g.size,y=h,C=f,(i=function(e){for(;e;){if(e.then)return void e.then(i,o);try{if(e.pop){if(e.length)return e.pop()?$Loop_3_exit.call(this):e;e=$Loop_3}else e=e.call(this)}catch(e){return o(e)}}}.bind(this))($Loop_3);function $Loop_3_exit(){return cleanupCanvasMemory(C),cleanupCanvasMemory(w),cleanupCanvasMemory(u),cleanupCanvasMemory(f),cleanupCanvasMemory(c),setProgress(100),t(v)}}}catch(e){return o(e)}}.bind(this),o)}catch(e){return o(e)}}.bind(this),o)}catch(e){return o(e)}}.bind(this),o)}catch(e){return o(e)}}.bind(this),o)}))}e&&(Number.isInteger=Number.isInteger||function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e});var t,o,i=0;function generateLib(){return function createSourceObject(e){return URL.createObjectURL(new Blob([e],{type:"application/javascript"}))}("\n    function imageCompression (){return (".concat(imageCompression,").apply(null, arguments)}\n\n    imageCompression.getDataUrlFromFile = ").concat(imageCompression.getDataUrlFromFile,"\n    imageCompression.getFilefromDataUrl = ").concat(imageCompression.getFilefromDataUrl,"\n    imageCompression.loadImage = ").concat(imageCompression.loadImage,"\n    imageCompression.drawImageInCanvas = ").concat(imageCompression.drawImageInCanvas,"\n    imageCompression.drawFileInCanvas = ").concat(imageCompression.drawFileInCanvas,"\n    imageCompression.canvasToFile = ").concat(imageCompression.canvasToFile,"\n    imageCompression.getExifOrientation = ").concat(imageCompression.getExifOrientation,"\n    imageCompression.handleMaxWidthOrHeight = ").concat(imageCompression.handleMaxWidthOrHeight,"\n    imageCompression.followExifOrientation = ").concat(imageCompression.followExifOrientation,"\n    imageCompression.cleanupMemory = ").concat(imageCompression.cleanupMemory,"\n\n    getDataUrlFromFile = imageCompression.getDataUrlFromFile\n    getFilefromDataUrl = imageCompression.getFilefromDataUrl\n    loadImage = imageCompression.loadImage\n    drawImageInCanvas = imageCompression.drawImageInCanvas\n    drawFileInCanvas = imageCompression.drawFileInCanvas\n    canvasToFile = imageCompression.canvasToFile\n    getExifOrientation = imageCompression.getExifOrientation\n    handleMaxWidthOrHeight = imageCompression.handleMaxWidthOrHeight\n    followExifOrientation = imageCompression.followExifOrientation\n    cleanupMemory = imageCompression.cleanupMemory\n\n    getNewCanvasAndCtx = ").concat(getNewCanvasAndCtx,"\n    \n    CustomFileReader = FileReader\n    \n    CustomFile = File\n    \n    function _slicedToArray(arr, n) { return arr }\n    \n    function _typeof(a) { return typeof a }\n\n    function compress (){return (").concat(compress,").apply(null, arguments)}\n    "))}function generateWorkerScript(){return function createWorker(e){return"function"==typeof e&&(e="(".concat(f,")()")),new Worker(URL.createObjectURL(new Blob([e])))}("\n    let scriptImported = false\n    self.addEventListener('message', async (e) => {\n      const { file, id, imageCompressionLibUrl, options } = e.data\n      options.onProgress = (progress) => self.postMessage({ progress, id })\n      try {\n        if (!scriptImported) {\n          // console.log('[worker] importScripts', imageCompressionLibUrl)\n          self.importScripts(imageCompressionLibUrl)\n          scriptImported = true\n        }\n        // console.log('[worker] self', self)\n        const compressedFile = await imageCompression(file, options)\n        self.postMessage({ file: compressedFile, id })\n      } catch (e) {\n        // console.error('[worker] error', e)\n        self.postMessage({ error: e.message + '\\n' + e.stack, id })\n      }\n    })\n  ")}function imageCompression(e,r){return new Promise((function(n,a){var s,c,u;if(r.maxSizeMB=r.maxSizeMB||Number.POSITIVE_INFINITY,c="boolean"!=typeof r.useWebWorker||r.useWebWorker,delete r.useWebWorker,void 0===r.onProgress&&(r.onProgress=function(){}),!(e instanceof Blob||e instanceof CustomFile))return a(new Error("The file given is not an instance of Blob or File"));if(!/^image/.test(e.type))return a(new Error("The file given is not an image"));if(u="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope,!c||"function"!=typeof Worker||u)return compress(e,r).then(function(e){try{return s=e,$If_3.call(this)}catch(e){return a(e)}}.bind(this),a);var l=function(){try{return $If_3.call(this)}catch(e){return a(e)}}.bind(this),f=function $Try_1_Catch(n){try{return compress(e,r).then((function(e){try{return s=e,l()}catch(e){return a(e)}}),a)}catch(e){return a(e)}};try{return function compressOnWebWorker(e,r){return new Promise((function(n,a){return new Promise((function(s,c){var u=i++;return t||(t=generateLib()),o||(o=generateWorkerScript()),o.addEventListener("message",(function handler(e){if(e.data.id===u){if(void 0!==e.data.progress)return void r.onProgress(e.data.progress);o.removeEventListener("message",handler),e.data.error&&a(new Error(e.data.error)),n(e.data.file)}})),o.addEventListener("error",a),o.postMessage({file:e,id:u,imageCompressionLibUrl:t,options:_objectSpread2(_objectSpread2({},r),{},{onProgress:void 0})}),s()}))}))}(e,r).then((function(e){try{return s=e,l()}catch(e){return f()}}),f)}catch(e){f()}function $If_3(){try{s.name=e.name,s.lastModified=e.lastModified}catch(e){}return n(s)}}))}return imageCompression.getDataUrlFromFile=getDataUrlFromFile,imageCompression.getFilefromDataUrl=getFilefromDataUrl,imageCompression.loadImage=loadImage,imageCompression.drawImageInCanvas=drawImageInCanvas,imageCompression.drawFileInCanvas=drawFileInCanvas,imageCompression.canvasToFile=canvasToFile,imageCompression.getExifOrientation=getExifOrientation,imageCompression.handleMaxWidthOrHeight=handleMaxWidthOrHeight,imageCompression.followExifOrientation=followExifOrientation,imageCompression.cleanupMemory=cleanupCanvasMemory,imageCompression.version="1.0.11",imageCompression}));
//# sourceMappingURL=browser-image-compression.js.map
