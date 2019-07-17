!function(t){var o={};function e(n){if(o[n])return o[n].exports;var i=o[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=t,e.c=o,e.d=function(t,o,n){e.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,o){if(1&o&&(t=e(t)),8&o)return t;if(4&o&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var i in t)e.d(n,i,function(o){return t[o]}.bind(null,i));return n},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},e.p="",e(e.s=0)}([function(t,o,e){"use strict";e.r(o);var n=function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:this.mapOptions.hasOwnProperty("container")?this.mapOptions.container:"map"}})};n._withStripped=!0;var i=function(t,o,e,n,i,a,r,c){var s,u="function"==typeof t?t.options:t;if(o&&(u.render=o,u.staticRenderFns=e,u._compiled=!0),n&&(u.functional=!0),a&&(u._scopeId="data-v-"+a),r?(s=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},u._ssrRegister=s):i&&(s=c?function(){i.call(this,this.$root.$options.shadowRoot)}:i),s)if(u.functional){u._injectStyles=s;var p=u.render;u.render=function(t,o){return s.call(o),p(t,o)}}else{var l=u.beforeCreate;u.beforeCreate=l?[].concat(l,s):[s]}return{exports:t,options:u}}({name:"MapboxMap",props:{accessToken:{type:String,required:!0},mapOptions:{type:Object,required:!0},navControl:{type:Object,default:function(){return{show:!0,position:"top-right"}}},geolocateControl:{type:Object,default:function(){return{show:!1,position:"top-left",options:{}}}},scaleControl:{type:Object,default:function(){return{show:!1,position:"top-left",options:{}}}},fullscreenControl:{type:Object,default:function(){return{show:!1,position:"top-right"}}}},data:function(){return{localMap:null}},mounted:function(){var t=this.mapInit();this.localMap=t,this.addControls(t),this.registerEvents(t)},beforeDestroy:function(){this.localMap.remove()},methods:{mapInit:function(){mapboxgl.accessToken=this.accessToken,this.mapOptions.hasOwnProperty("container")||(this.mapOptions.container="map");var t=new mapboxgl.Map(this.mapOptions);return this.$emit("map-init",t),t},registerEvents:function(t){var o=this;t.on("load",function(){o.$emit("map-load",t)}),t.on("mousemove",function(e){o.$emit("map-mousemove",t,e)}),t.on("click",function(e){o.$emit("map-click",t,e)}),t.on("contextmenu",function(e){o.$emit("map-contextmenu",t,e)}),t.on("resize",function(){o.$emit("map-resize",t)}),t.on("webglcontextlost",function(e){o.$emit("map-webglcontextlost",t,e)}),t.on("webglcontextrestored",function(e){o.$emit("map-webglcontextrestored",t,e)}),t.on("remove",function(){o.$emit("map-remove",t)}),t.on("sourcedataloading",function(e){o.$emit("map-sourcedataloading",t,e)}),t.on("touchstart",function(e){o.$emit("map-touchstart",t,e)}),t.on("movestart",function(e){o.$emit("map-movestart",t,e)}),t.on("move",function(e){o.$emit("map-move",t,e)}),t.on("moveend",function(e){o.$emit("map-moveend",t,e)}),t.on("error",function(e){o.$emit("map-error",t,e)}),t.on("data",function(e){o.$emit("map-data",t,e)}),t.on("styledata",function(e){o.$emit("map-styledata",t,e)}),t.on("mouseup",function(e){o.$emit("map-mouseup",t,e)}),t.on("touchcancel",function(e){o.$emit("map-touchcancel",t,e)}),t.on("sourcedata",function(e){o.$emit("map-sourcedata",t,e)}),t.on("dataloading",function(e){o.$emit("map-dataloading",t,e)}),t.on("styledataloading",function(e){o.$emit("map-styledataloading",t,e)}),t.on("dblclick",function(e){o.$emit("map-dblclick",t,e)}),t.on("render",function(){o.$emit("map-render",t)}),t.on("mouseout",function(e){o.$emit("map-mouseout",t,e)}),t.on("mousedown",function(e){o.$emit("map-mousedown",t,e)}),t.on("mouseover",function(e){o.$emit("map-mouseover",t,e)}),t.on("touchend",function(e){o.$emit("map-touchend",t,e)}),t.on("touchmove",function(e){o.$emit("map-touchmove",t,e)}),t.on("zoomstart",function(e){o.$emit("map-zoomstart",t,e)}),t.on("zoomend",function(e){o.$emit("map-zoomend",t,e)}),t.on("zoom",function(e){o.$emit("map-zoom",t,e)}),t.on("boxzoomcancel",function(e){o.$emit("map-boxzoomcancel",t,e)}),t.on("boxzoomend",function(e){o.$emit("map-boxzoomend",t,e)}),t.on("boxzoomstart",function(e){o.$emit("map-boxzoomstart",t,e)}),t.on("rotatestart",function(e){o.$emit("map-rotatestart",t,e)}),t.on("rotate",function(e){o.$emit("map-rotate",t,e)}),t.on("rotateend",function(e){o.$emit("map-rotateend",t,e)}),t.on("dragend",function(e){o.$emit("map-dragend",t,e)}),t.on("drag",function(e){o.$emit("map-drag",t,e)}),t.on("dragstart",function(e){o.$emit("map-dragstart",t,e)}),t.on("pitch",function(e){o.$emit("map-pitch",t,e)}),t.on("pitchstart",function(e){o.$emit("map-pitchstart",t,e)}),t.on("pitchend",function(e){o.$emit("map-pitchend",t,e)})},addControls:function(t){var o=this;if(this.navControl.show){var e=new mapboxgl.NavigationControl(this.navControl.options);t.addControl(e,this.navControl.position)}if(this.geolocateControl.show){var n=new mapboxgl.GeolocateControl(this.geolocateControl.options);t.addControl(n,this.geolocateControl.position),n.on("geolocate",function(t){o.$emit("geolocate-geolocate",n,t)}),n.on("trackuserlocationstart",function(){o.$emit("geolocate-trackuserlocationstart",n)}),n.on("trackuserlocationend",function(){o.$emit("geolocate-trackuserlocationend",n)}),n.on("error",function(t){o.$emit("geolocate-error",n,t)})}if(this.scaleControl.show){var i=new mapboxgl.ScaleControl(this.scaleControl.options);t.addControl(i,this.scaleControl.position)}if(this.fullscreenControl.show){var a=new mapboxgl.FullscreenControl;t.addControl(a,this.fullscreenControl.position)}}}},n,[],!1,null,null,null);i.options.__file="src/components/Mapbox.vue";var a=i.exports;new Vue({el:"#app",components:{Mapbox:a},methods:{mapInit:function(t){var o=new MapboxDraw;t.addControl(o)},mapLoaded:function(t){t.addLayer({id:"points",type:"symbol",source:{type:"geojson",data:{type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[-77.03238901390978,38.913188059745586]},properties:{title:"Mapbox DC",icon:"monument"}},{type:"Feature",geometry:{type:"Point",coordinates:[-122.414,37.776]},properties:{title:"Mapbox SF",icon:"harbor"}}]}},layout:{"icon-image":"{icon}-15","text-field":"{title}","text-font":["Open Sans Semibold","Arial Unicode MS Bold"],"text-offset":[0,.6],"text-anchor":"top"}})},mapClicked:function(t,o){this.addPopUp(t,o)},mapMouseMoved:function(t,o){var e=t.queryRenderedFeatures(o.point,{layers:["points"]});t.getCanvas().style.cursor=e.length?"pointer":""},geolocate:function(t,o){console.log("User position: ".concat(o.coords.latitude,", ").concat(o.coords.longitude))},geolocateError:function(t,o){console.log(o)},geolocateStart:function(t){console.log("geolocate started")},geolocateEnd:function(t){console.log("geolocate ended")},addPopUp:function(t,o){var e=t.queryRenderedFeatures(o.point,{layers:["points"]});if(e.length){var n=e[0],i=Vue.extend({methods:{popupClicked:function(){alert("Popup Clicked!")}},template:'<button @click="popupClicked">Click Me!</button>'});(new mapboxgl.Popup).setLngLat(n.geometry.coordinates).setHTML('<div id="vue-popup-content"></div>').addTo(t);(new i).$mount("#vue-popup-content")}}}})}]);