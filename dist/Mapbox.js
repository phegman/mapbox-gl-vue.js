!function(t,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define("mapbox-gl-vue",[],o):"object"==typeof exports?exports["mapbox-gl-vue"]=o():t["mapbox-gl-vue"]=o()}(window,function(){return function(t){var o={};function n(e){if(o[e])return o[e].exports;var i=o[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=o,n.d=function(t,o,e){n.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:e})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,o){if(1&o&&(t=n(t)),8&o)return t;if(4&o&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var i in t)n.d(e,i,function(o){return t[o]}.bind(null,i));return e},n.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(o,"a",o),o},n.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},n.p="",n(n.s=0)}([function(t,o,n){"use strict";n.r(o);var e=function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:this.mapOptions.hasOwnProperty("container")?this.mapOptions.container:"map"}})};e._withStripped=!0;var i=function(t,o,n,e,i,a,r,c){var s,u="function"==typeof t?t.options:t;if(o&&(u.render=o,u.staticRenderFns=n,u._compiled=!0),e&&(u.functional=!0),a&&(u._scopeId="data-v-"+a),r?(s=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},u._ssrRegister=s):i&&(s=c?function(){i.call(this,this.$root.$options.shadowRoot)}:i),s)if(u.functional){u._injectStyles=s;var m=u.render;u.render=function(t,o){return s.call(o),m(t,o)}}else{var p=u.beforeCreate;u.beforeCreate=p?[].concat(p,s):[s]}return{exports:t,options:u}}({name:"MapboxMap",props:{accessToken:{type:String,required:!0},mapOptions:{type:Object,required:!0},navControl:{type:Object,default:function(){return{show:!0,position:"top-right"}}},geolocateControl:{type:Object,default:function(){return{show:!1,position:"top-left",options:{}}}},scaleControl:{type:Object,default:function(){return{show:!1,position:"top-left",options:{}}}},fullscreenControl:{type:Object,default:function(){return{show:!1,position:"top-right"}}}},data:function(){return{localMap:null}},mounted:function(){var t=this.mapInit();this.localMap=t,this.addControls(t),this.registerEvents(t)},beforeDestroy:function(){this.localMap.remove()},methods:{mapInit:function(){mapboxgl.accessToken=this.accessToken,this.mapOptions.hasOwnProperty("container")||(this.mapOptions.container="map");var t=new mapboxgl.Map(this.mapOptions);return this.$emit("map-init",t),t},registerEvents:function(t){var o=this;t.on("load",function(){o.$emit("map-load",t)}),t.on("mousemove",function(n){o.$emit("map-mousemove",t,n)}),t.on("click",function(n){o.$emit("map-click",t,n)}),t.on("contextmenu",function(n){o.$emit("map-contextmenu",t,n)}),t.on("resize",function(){o.$emit("map-resize",t)}),t.on("webglcontextlost",function(n){o.$emit("map-webglcontextlost",t,n)}),t.on("webglcontextrestored",function(n){o.$emit("map-webglcontextrestored",t,n)}),t.on("remove",function(){o.$emit("map-remove",t)}),t.on("sourcedataloading",function(n){o.$emit("map-sourcedataloading",t,n)}),t.on("touchstart",function(n){o.$emit("map-touchstart",t,n)}),t.on("movestart",function(n){o.$emit("map-movestart",t,n)}),t.on("move",function(n){o.$emit("map-move",t,n)}),t.on("moveend",function(n){o.$emit("map-moveend",t,n)}),t.on("error",function(n){o.$emit("map-error",t,n)}),t.on("data",function(n){o.$emit("map-data",t,n)}),t.on("styledata",function(n){o.$emit("map-styledata",t,n)}),t.on("mouseup",function(n){o.$emit("map-mouseup",t,n)}),t.on("touchcancel",function(n){o.$emit("map-touchcancel",t,n)}),t.on("sourcedata",function(n){o.$emit("map-sourcedata",t,n)}),t.on("dataloading",function(n){o.$emit("map-dataloading",t,n)}),t.on("styledataloading",function(n){o.$emit("map-styledataloading",t,n)}),t.on("dblclick",function(n){o.$emit("map-dblclick",t,n)}),t.on("render",function(){o.$emit("map-render",t)}),t.on("mouseout",function(n){o.$emit("map-mouseout",t,n)}),t.on("mousedown",function(n){o.$emit("map-mousedown",t,n)}),t.on("mouseover",function(n){o.$emit("map-mouseover",t,n)}),t.on("touchend",function(n){o.$emit("map-touchend",t,n)}),t.on("touchmove",function(n){o.$emit("map-touchmove",t,n)}),t.on("zoomstart",function(n){o.$emit("map-zoomstart",t,n)}),t.on("zoomend",function(n){o.$emit("map-zoomend",t,n)}),t.on("zoom",function(n){o.$emit("map-zoom",t,n)}),t.on("boxzoomcancel",function(n){o.$emit("map-boxzoomcancel",t,n)}),t.on("boxzoomend",function(n){o.$emit("map-boxzoomend",t,n)}),t.on("boxzoomstart",function(n){o.$emit("map-boxzoomstart",t,n)}),t.on("rotatestart",function(n){o.$emit("map-rotatestart",t,n)}),t.on("rotate",function(n){o.$emit("map-rotate",t,n)}),t.on("rotateend",function(n){o.$emit("map-rotateend",t,n)}),t.on("dragend",function(n){o.$emit("map-dragend",t,n)}),t.on("drag",function(n){o.$emit("map-drag",t,n)}),t.on("dragstart",function(n){o.$emit("map-dragstart",t,n)}),t.on("pitch",function(n){o.$emit("map-pitch",t,n)}),t.on("pitchstart",function(n){o.$emit("map-pitchstart",t,n)}),t.on("pitchend",function(n){o.$emit("map-pitchend",t,n)})},addControls:function(t){var o=this;if(this.navControl.show){var n=new mapboxgl.NavigationControl(this.navControl.options);t.addControl(n,this.navControl.position)}if(this.geolocateControl.show){var e=new mapboxgl.GeolocateControl(this.geolocateControl.options);t.addControl(e,this.geolocateControl.position),e.on("geolocate",function(t){o.$emit("geolocate-geolocate",e,t)}),e.on("trackuserlocationstart",function(){o.$emit("geolocate-trackuserlocationstart",e)}),e.on("trackuserlocationend",function(){o.$emit("geolocate-trackuserlocationend",e)}),e.on("error",function(t){o.$emit("geolocate-error",e,t)})}if(this.scaleControl.show){var i=new mapboxgl.ScaleControl(this.scaleControl.options);t.addControl(i,this.scaleControl.position)}if(this.fullscreenControl.show){var a=new mapboxgl.FullscreenControl;t.addControl(a,this.fullscreenControl.position)}}}},e,[],!1,null,null,null);i.options.__file="src/components/Mapbox.vue";o.default=i.exports}])});