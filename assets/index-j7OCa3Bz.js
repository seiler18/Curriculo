var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=c(o(((e,t)=>{(function(n,r){typeof e==`object`&&typeof t==`object`?t.exports=r():typeof define==`function`&&define.amd?define([],r):typeof e==`object`?e.AOS=r():n.AOS=r()})(e,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p=`dist/`,t(0)}([function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=r((r(n(1)),n(6))),o=r(n(7)),s=r(n(8)),c=r(n(9)),l=r(n(10)),u=r(n(11)),d=r(n(14)),f=[],p=!1,m={offset:120,delay:0,easing:`ease`,duration:400,disable:!1,once:!1,startEvent:`DOMContentLoaded`,throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},h=function(){if(arguments.length>0&&arguments[0]!==void 0&&arguments[0]&&(p=!0),p)return f=(0,u.default)(f,m),(0,l.default)(f,m.once),f},g=function(){f=(0,d.default)(),h()},_=function(){f.forEach(function(e,t){e.node.removeAttribute(`data-aos`),e.node.removeAttribute(`data-aos-easing`),e.node.removeAttribute(`data-aos-duration`),e.node.removeAttribute(`data-aos-delay`)})},v=function(e){return e===!0||e===`mobile`&&c.default.mobile()||e===`phone`&&c.default.phone()||e===`tablet`&&c.default.tablet()||typeof e==`function`&&e()===!0};e.exports={init:function(e){m=i(m,e),f=(0,d.default)();var t=document.all&&!window.atob;return v(m.disable)||t?_():(m.disableMutationObserver||s.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),m.disableMutationObserver=!0),document.querySelector(`body`).setAttribute(`data-aos-easing`,m.easing),document.querySelector(`body`).setAttribute(`data-aos-duration`,m.duration),document.querySelector(`body`).setAttribute(`data-aos-delay`,m.delay),m.startEvent===`DOMContentLoaded`&&[`complete`,`interactive`].indexOf(document.readyState)>-1?h(!0):m.startEvent===`load`?window.addEventListener(m.startEvent,function(){h(!0)}):document.addEventListener(m.startEvent,function(){h(!0)}),window.addEventListener(`resize`,(0,o.default)(h,m.debounceDelay,!0)),window.addEventListener(`orientationchange`,(0,o.default)(h,m.debounceDelay,!0)),window.addEventListener(`scroll`,(0,a.default)(function(){(0,l.default)(f,m.once)},m.throttleDelay)),m.disableMutationObserver||s.default.ready(`[data-aos]`,g),f)},refresh:h,refreshHard:g}},function(e,t){},,,,,function(e,t){(function(t){function n(e,t,n){function r(t){var n=h,r=g;return h=g=void 0,w=t,v=e.apply(r,n)}function a(e){return w=e,y=setTimeout(u,t),T?r(e):v}function o(e){var n=e-b,r=e-w,i=t-n;return E?S(i,_-r):i}function c(e){var n=e-b,r=e-w;return b===void 0||n>=t||n<0||E&&r>=_}function u(){var e=C();return c(e)?d(e):void(y=setTimeout(u,o(e)))}function d(e){return y=void 0,D&&h?r(e):(h=g=void 0,v)}function f(){y!==void 0&&clearTimeout(y),w=0,h=b=g=y=void 0}function p(){return y===void 0?v:d(C())}function m(){var e=C(),n=c(e);if(h=arguments,g=this,b=e,n){if(y===void 0)return a(b);if(E)return y=setTimeout(u,t),r(b)}return y===void 0&&(y=setTimeout(u,t)),v}var h,g,_,v,y,b,w=0,T=!1,E=!1,D=!0;if(typeof e!=`function`)throw TypeError(l);return t=s(t)||0,i(n)&&(T=!!n.leading,E=`maxWait`in n,_=E?x(s(n.maxWait)||0,t):_,D=`trailing`in n?!!n.trailing:D),m.cancel=f,m.flush=p,m}function r(e,t,r){var a=!0,o=!0;if(typeof e!=`function`)throw TypeError(l);return i(r)&&(a=`leading`in r?!!r.leading:a,o=`trailing`in r?!!r.trailing:o),n(e,t,{leading:a,maxWait:t,trailing:o})}function i(e){var t=e===void 0?`undefined`:c(e);return!!e&&(t==`object`||t==`function`)}function a(e){return!!e&&(e===void 0?`undefined`:c(e))==`object`}function o(e){return(e===void 0?`undefined`:c(e))==`symbol`||a(e)&&b.call(e)==d}function s(e){if(typeof e==`number`)return e;if(o(e))return u;if(i(e)){var t=typeof e.valueOf==`function`?e.valueOf():e;e=i(t)?t+``:t}if(typeof e!=`string`)return e===0?e:+e;e=e.replace(f,``);var n=m.test(e);return n||h.test(e)?g(e.slice(2),n?2:8):p.test(e)?u:+e}var c=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},l=`Expected a function`,u=NaN,d=`[object Symbol]`,f=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,h=/^0o[0-7]+$/i,g=parseInt,_=(t===void 0?`undefined`:c(t))==`object`&&t&&t.Object===Object&&t,v=(typeof self>`u`?`undefined`:c(self))==`object`&&self&&self.Object===Object&&self,y=_||v||Function(`return this`)(),b=Object.prototype.toString,x=Math.max,S=Math.min,C=function(){return y.Date.now()};e.exports=r}).call(t,function(){return this}())},function(e,t){(function(t){function n(e,t,n){function i(t){var n=h,r=g;return h=g=void 0,w=t,v=e.apply(r,n)}function a(e){return w=e,y=setTimeout(u,t),T?i(e):v}function s(e){var n=e-C,r=e-w,i=t-n;return E?x(i,_-r):i}function l(e){var n=e-C,r=e-w;return C===void 0||n>=t||n<0||E&&r>=_}function u(){var e=S();return l(e)?d(e):void(y=setTimeout(u,s(e)))}function d(e){return y=void 0,D&&h?i(e):(h=g=void 0,v)}function f(){y!==void 0&&clearTimeout(y),w=0,h=C=g=y=void 0}function p(){return y===void 0?v:d(S())}function m(){var e=S(),n=l(e);if(h=arguments,g=this,C=e,n){if(y===void 0)return a(C);if(E)return y=setTimeout(u,t),i(C)}return y===void 0&&(y=setTimeout(u,t)),v}var h,g,_,v,y,C,w=0,T=!1,E=!1,D=!0;if(typeof e!=`function`)throw TypeError(c);return t=o(t)||0,r(n)&&(T=!!n.leading,E=`maxWait`in n,_=E?b(o(n.maxWait)||0,t):_,D=`trailing`in n?!!n.trailing:D),m.cancel=f,m.flush=p,m}function r(e){var t=e===void 0?`undefined`:s(e);return!!e&&(t==`object`||t==`function`)}function i(e){return!!e&&(e===void 0?`undefined`:s(e))==`object`}function a(e){return(e===void 0?`undefined`:s(e))==`symbol`||i(e)&&y.call(e)==u}function o(e){if(typeof e==`number`)return e;if(a(e))return l;if(r(e)){var t=typeof e.valueOf==`function`?e.valueOf():e;e=r(t)?t+``:t}if(typeof e!=`string`)return e===0?e:+e;e=e.replace(d,``);var n=p.test(e);return n||m.test(e)?h(e.slice(2),n?2:8):f.test(e)?l:+e}var s=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},c=`Expected a function`,l=NaN,u=`[object Symbol]`,d=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,h=parseInt,g=(t===void 0?`undefined`:s(t))==`object`&&t&&t.Object===Object&&t,_=(typeof self>`u`?`undefined`:s(self))==`object`&&self&&self.Object===Object&&self,v=g||_||Function(`return this`)(),y=Object.prototype.toString,b=Math.max,x=Math.min,S=function(){return v.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){function n(e){var t=void 0,r=void 0;for(t=0;t<e.length;t+=1)if(r=e[t],r.dataset&&r.dataset.aos||r.children&&n(r.children))return!0;return!1}function r(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function i(){return!!r()}function a(e,t){var n=window.document,i=new(r())(o);s=t,i.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function o(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),r=Array.prototype.slice.call(e.removedNodes);if(n(t.concat(r)))return s()})}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){};t.default={isSupported:i,ready:a}},function(e,t){function n(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function r(){return navigator.userAgent||navigator.vendor||window.opera||``}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,o=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;t.default=new(function(){function e(){n(this,e)}return i(e,[{key:`phone`,value:function(){var e=r();return!(!a.test(e)&&!o.test(e.substr(0,4)))}},{key:`mobile`,value:function(){var e=r();return!(!s.test(e)&&!c.test(e.substr(0,4)))}},{key:`tablet`,value:function(){return this.mobile()&&!this.phone()}}]),e}())},function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var r=e.node.getAttribute(`data-aos-once`);t>e.position?e.node.classList.add(`aos-animate`):r!==void 0&&(r===`false`||!n&&r!==`true`)&&e.node.classList.remove(`aos-animate`)};t.default=function(e,t){var r=window.pageYOffset,i=window.innerHeight;e.forEach(function(e,a){n(e,i+r,t)})}},function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=r(n(12));t.default=function(e,t){return e.forEach(function(e,n){e.node.classList.add(`aos-init`),e.position=(0,i.default)(e.node,t.offset)}),e}},function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=r(n(13));t.default=function(e,t){var n=0,r=0,a=window.innerHeight,o={offset:e.getAttribute(`data-aos-offset`),anchor:e.getAttribute(`data-aos-anchor`),anchorPlacement:e.getAttribute(`data-aos-anchor-placement`)};switch(o.offset&&!isNaN(o.offset)&&(r=parseInt(o.offset)),o.anchor&&document.querySelectorAll(o.anchor)&&(e=document.querySelectorAll(o.anchor)[0]),n=(0,i.default)(e).top,o.anchorPlacement){case`top-bottom`:break;case`center-bottom`:n+=e.offsetHeight/2;break;case`bottom-bottom`:n+=e.offsetHeight;break;case`top-center`:n+=a/2;break;case`bottom-center`:n+=a/2+e.offsetHeight;break;case`center-center`:n+=a/2+e.offsetHeight/2;break;case`top-top`:n+=a;break;case`bottom-top`:n+=e.offsetHeight+a;break;case`center-top`:n+=e.offsetHeight/2+a}return o.anchorPlacement||o.offset||isNaN(t)||(r=t),n+r}},function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-(e.tagName==`BODY`?0:e.scrollLeft),n+=e.offsetTop-(e.tagName==`BODY`?0:e.scrollTop),e=e.offsetParent;return{top:n,left:t}}},function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e||=document.querySelectorAll(`[data-aos]`),Array.prototype.map.call(e,function(e){return{node:e}})}}])})}))(),1),u=[{label:`Analizador de Imagen - Computer Vision (Azure)`,href:`./AnalizadorImagen/analizador.html`},{label:`Registro Persona (Spring - Thymeleaf)`,href:`https://stormy-taiga-93896-fe946738c15d.herokuapp.com/`},{label:`Registro Eventos (Spring - Thymeleaf)`,href:`https://appmanageevents-6fe8c2902944.herokuapp.com/`},{label:`Aplicación para Documentos (Angular)`,href:`https://seiler18.github.io/AngularCrud/`},{label:`Pokedex`,href:`pokemon.html`},{label:`Lista ciudades`,href:`ejemplos.html`},{label:`Buscador de Imagenes`,href:`https://seiler18.github.io/RayenApp/`},{label:`Carrito de Compras`,href:`https://seiler18.github.io/Carrito/`},{label:`Reserva Horas`,href:`./ReservaHoras/index.html`},{label:`Validación de Registro`,href:`./FormularioJAVASCRIPT/index.html`},{label:`Calculadora`,href:`./CalculadoraJAVASCRIPT/index.html`},{label:`Diseño Di Buffala Page`,href:`./Landing-Adalid-master/index.html`},{label:`Diseño Suricata Page`,href:`./Desafio Suricata/index.html`},{label:`Diseño Couppon Page`,href:`./Desafio Cuppon/index.html`},{label:`Diseño Coffe Page`,href:`./Paginaweb/index.html`},{label:`Diseño Iguana Page`,href:`./Iguana Page/index.html`},{label:`Aprendiendo Media Queries`,href:`./desafio/index.html`}];function d(){return`
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container-fluid">
        <h1>
          <a class="display-6 font-weight-bold bienvenidosTEXT text-light" href="./ejemplos_index.html" id="Index">
            <img class="bienvenidosIMG" alt="Bienvenidos" src="assets/img/vector.png">Bienvenidos
          </a>
        </h1>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <div class="nav-item">
              <a class="nav-link hero-section text-light" href="#about">Acerca de mí</a>
            </div>
            <div class="nav-item">
              <a class="nav-link hero-section text-light" href="#Experiencia" id="mostrarExperiencia">Experiencia</a>
            </div>
            <div class="nav-item">
              <a class="nav-link hero-section text-light" href="#Conocimiento" id="mostrarConocimiento">Conocimientos</a>
            </div>
            <div class="nav-item">
              <a class="nav-link hero-section text-light" href="#contact">Contacto</a>
            </div>
            <div class="nav-item">
              <a class="nav-link hero-section text-light" href="#Certificados" id="mostrarCertificados">Certificados</a>
            </div>
            <div class="dropdown text-light">
              <a href="#" class="dropdown-toggle nav-link text-light" data-toggle="dropdown">Mis proyectos</a>
              <ul class="dropdown-menu text-light text-center">
                ${u.map(e=>`<li><a class="btn nav-link text-light" href="${e.href}">${e.label}</a></li>`).join(``)}
              </ul>
            </div>
            <div class="dropdown text-light">
              <a href="#" class="dropdown-toggle nav-link text-light" data-toggle="dropdown">Descargar Curriculo</a>
              <ul class="dropdown-menu text-light text-center">
                <li>
                  <a class="nav-link hero-section text-light" target="_blank" rel="noopener noreferrer" href="CurriculoIngles.pdf" download="Curriculo Jesus Seiler">
                    <b>Curriculo Ingles</b>
                  </a>
                </li>
                <li>
                  <a class="nav-link hero-section text-light" target="_blank" rel="noopener noreferrer" href="Curriculo.pdf" download="Curriculo Jesus Seiler">
                    <b>Curriculo Español</b>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div id="google_translate_element" class="nav-link hero-section text-light google"></div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  `}var f=[{href:`https://seiler18.github.io/Curriculo/`,img:`assets/img/LOGO JESUS SEILER.png`,alt:`LogoJesusSeiler`,cls:`logo`},{href:`https://www.youracclaim.com/badges/5c3ed424-4321-4dfa-b1c5-ec322c126595/embedded`,img:`assets/img/logojava.png`,alt:`Logo de Java - Certificación`,cls:`logo2`},{href:`https://www.acreditta.com/credential/4476ddea-f09c-4e5b-93fa-e36f8cba5cb5`,img:`assets/img/logodevops.webp`,alt:`Logo de Fundamentos DevOps - Certificación`,cls:`logo2`},{href:`https://www.acreditta.com/credential/9f3cf4aa-bd57-42ad-93ca-04ddf485d019`,img:`assets/img/Salesforce.webp`,alt:`Ver Insignia de certificación`,cls:`logo2`},{href:`https://www.acreditta.com/credential/554fe7be-7150-43cb-8857-58be35c30b06`,img:`assets/img/Voluntarios.webp`,alt:`Ver Insignia de certificación`,cls:`logo2`},{href:`https://catalog-education.oracle.com/ords/certview/sharebadge?id=0EE370D017FDDE5093D72D0FAAA09E4B5AD04E6D9E4E32BFFC3537ECDA237F0B`,img:`assets/img/OCI.png`,alt:`Logo de OCI - Certificación`,cls:`logo2`},{href:`https://acreditta.com/credential/09287278-a942-43df-aff2-141183913973?utm_source=copy&resource_type=badge&resource=09287278-a942-43df-aff2-141183913973`,img:`assets/img/22301.webp`,alt:`Logo de Auditor Interno 22301 - Certificación`,cls:`logo2`},{href:`https://acreditta.com/credential/ad647a01-5241-4a19-82a6-f6aa62729776?utm_source=copy&resource_type=badge&resource=ad647a01-5241-4a19-82a6-f6aa62729776`,img:`assets/img/20000-1.webp`,alt:`Logo de Auditor Interno 20000-1 - Certificación`,cls:`logo2`},{href:`https://www.credly.com/badges/eefb478a-b58c-4578-8496-eb50fc0af1be/public_url`,img:`assets/img/GoogleAIEssentialsBadge.png`,alt:`Badge de Google AI Essentials - Certificación`,cls:`logo2`}];function p(e=!1){return f.map(t=>`
      <div class="logo-item"${e?` aria-hidden="true"`:``}>
        <a href="${t.href}" target="_blank" rel="noopener noreferrer"${e?` tabindex="-1"`:``}>
          <img class="${t.cls}" src="${t.img}" alt="${e?``:t.alt}">
        </a>
      </div>
    `).join(``)}function m(){return`
    <header class="text-light pt-5 mt-5">
      <div class="container">
        <div class="logos-container">
          <div class="logos-track">
            ${p(!1)+p(!0)}
          </div>
        </div>
        <h2 class="display-3 font-weight-bold text-center header-section1 my-4"
          data-aos="fade-up" data-aos-delay="150">
          Innovar es la clave del éxito
        </h2>
        <div class="text-center" data-aos="fade-up" data-aos-delay="300">
          <button type="button" id="mostrarProyectos" class="mt-5 btn btn-dark">
            <a href="./ejemplos_index.html">
              <p class="conocimientos text-light my-4">
                Proyectos realizados aplicando los distintos conocimientos
              </p>
            </a>
          </button>
        </div>
      </div>
      <!-- Capa decorativa: grilla/rayas "tech" que derivan detrás del título. -->
      <div class="header-grid" aria-hidden="true"></div>
      <!-- Funde el fondo del header hacia el color de la página, para que la
           transición con la sección "Acerca de mí" sea suave y no un borde recto. -->
      <div class="header-fade" aria-hidden="true"></div>
    </header>
  `}var h=`HTML5,CSS3,JavaScript,React,Node.js,Vue.js,Java,Spring Boot,Groovy,OFbiz,Docker,Jenkins,Maven,Git,SharePoint,MySQL,PostgreSQL,Oracle,SAP,RPA RocketBot,Office 365,Gestión de Servicios TI,Gestión Active Directory,GPOs,Entra ID,Gestión BitDefender,ISO 9001,ISO 27001,ISO 22301,ISO 20000-1,ITIL,SGSI`.split(`,`);function g(){return`
    <section id="about" class="container text-center my-5">
      <h2 class="display-3 text-light font-weight-bold my-4" data-aos="fade-up">Acerca de mí</h2>
      <p class="about-intro mx-auto my-4" data-aos="fade-up" data-aos-delay="100">
        <strong>Analista Administrativo y de Sistemas</strong> especializado en gestión integrada de
        sistemas ISO, seguridad de la información y continuidad del negocio. Ingeniero Civil reconvertido
        en profesional TI, con enfoque en <strong>automatización, mejora continua y transformación digital</strong>.
      </p>

      <div class="row">
        <!-- Datos y formación -->
        <div class="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="0">
          <i class="fas fa-id-card fa-3x my-3"></i>
          <h3 class="my-3 text-light font-weight-bold">Datos &amp; Formación</h3>
          <ul class="text-light text-left">
            <li>Jesús Enrique Seiler Velasquez</li>
            <li>32 años — Puerto Montt, Chile</li>
            <li>Analista Administrativo &amp; de Sistemas en <strong>OPCIONES S.A.</strong></li>
            <li>Ingeniero Civil — Universidad del Zulia (Venezuela)
              <a class="titulo" href="assets/certificados/Titulo.pdf" target="_blank" rel="noopener noreferrer" download="Titulo">(Descargar título)</a>
            </li>
            <li>Técnico de Nivel Superior en Programación y Análisis de Sistemas — IP AIEP (Chile)
              <a class="titulo" href="assets/certificados/Titulo2.pdf" target="_blank" rel="noopener noreferrer" download="Titulo2">(Descargar título)</a>
            </li>
            <li>Idiomas: Español (Nativo) · Inglés Avanzado C1
              <a class="titulo" href="assets/certificados/EF SET Certificate.pdf" target="_blank" rel="noopener noreferrer" download="EF SET Certificate">(Descargar certificado)</a>
            </li>
          </ul>
        </div>

        <!-- Perfil profesional -->
        <div class="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="120">
          <i class="fas fa-briefcase fa-3x my-3"></i>
          <h3 class="my-3 text-light font-weight-bold">Perfil Profesional</h3>
          <ul class="text-light text-left">
            <li>Gestión de sistemas integrados ISO 9001, 14001, 45001, 27001, 22301 y 20000-1</li>
            <li>Administrador de SharePoint — repositorio central de documentación</li>
            <li>Implementación y mantenimiento de SGSI (ISO/IEC 27001)</li>
            <li>Continuidad del negocio (ISO 22301) y gestión de servicios TI (ISO 20000-1)</li>
            <li>Auditor Interno en Normas ISO</li>
            <li>Automatización de procesos y desarrollo de soluciones administrativas</li>
            <li>Experiencia previa en gestión SAP y operaciones logísticas (Nestlé Chile)</li>
          </ul>
        </div>

        <!-- Habilidades técnicas -->
        <div class="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="240">
          <i class="fas fa-laptop-code fa-3x my-3"></i>
          <h3 class="my-3 text-light font-weight-bold">Habilidades Técnicas</h3>
          <ul class="text-light text-left">
            <li><strong>Web:</strong> HTML, CSS, JavaScript, React, Node.js, Vue.js</li>
            <li><strong>Backend:</strong> Java, Spring Boot, Groovy, OFbiz</li>
            <li><strong>Seguridad &amp; Gestión:</strong> SGSI, Auditoría ISO, Gestión de Riesgos, ITIL</li>
            <li><strong>DevOps &amp; Herramientas:</strong> Docker, Jenkins, Maven, Git, SharePoint</li>
            <li><strong>Bases de datos:</strong> MySQL, PostgreSQL, Oracle</li>
            <li><strong>ERP &amp; Ofimática:</strong> SAP, OFbiz, Office 365, RPA RocketBot Nivel 2</li>
            <li>Conocimientos en Transacciones SAP
              <button type="button" class="btn btn-outline-info btn-sm ml-1"
                data-toggle="modal" data-target="#SAPConocimientos">Click para ver</button>
            </li>
          </ul>
        </div>
      </div>

      <h3 class="text-light font-weight-bold mt-4 mb-3" data-aos="fade-up">Stack &amp; Tecnologías</h3>
      <div class="tech-badges" data-aos="fade-up" data-aos-delay="100">
        ${h.map((e,t)=>`<span class="tech-badge" style="--i:${t}">${e}</span>`).join(``)}
      </div>

      <p class="about-interests mx-auto mt-4" data-aos="fade-up">
        <i class="fas fa-lightbulb"></i>
        <strong>Intereses:</strong> automatización de procesos, transformación digital, sistemas integrados,
        seguridad de la información, continuidad del negocio y mejora continua.
      </p>
    </section>

    <!-- Modal SAP -->
    <div class="modal fade" id="SAPConocimientos" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title"><b><u>Conocimientos en SAP (Mi periodo de trabajo en Nestlé)</u></b></h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <b>PO_VAR:</b> Trata de desviaciones de producción (ver perdidas o ganancias de una o varias OP)<br>
            <b>LS26:</b> Stock en almacen por material (Ver la cantidad de un determinado material por su # de identificación, a su vez ver su ubicación en una determinada PSA)<br>
            <b>COID:</b> Detalles de ordenes de procesos<br>
            <b>COR3:</b> Visualizar ordenes de procesos<br>
            <b>LB11:</b> Visualizar necesidad de orden de transporte / anulaciónes pendientes<br>
            <b>LT10:</b> Crear instrucción de moviento interno, crear una OT (orden de transporte)<br>
            <b>ME23N:</b> Visualización y creación de pedidos para despachar cualquier materia entre una fabrica y otra.<br>
            <b>MB1A:</b> Realización de consumos/producción/anulación (101-261/102-262) de cualquier material en ordenes de procesos<br>
            <b>MB5T:</b> Revisión de ordenes de pedidos de traslado entre una fabrica y otra.<br>
            <b>Fiabilidad:</b> Tratar / Visualizar todos los reportes de linea, su desempeño %AI, %PNP, %PP, sus desviaciones. Permite medir el desempeño de toda la fabrica exportando los resultados en un excel, aplicando distintas opciones de filtrado.<br>
            <b>FEAT:</b> Aplicación web usada para hacer consumo / declaración de un determinado PRODUCTO/MATERIAL, dando como finalidad una transacción que se envia a SAP.
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  `}var _=[{name:`HTML5 & CSS3`,level:100},{name:`Spring Framework & Spring Boot (Java)`,level:100},{name:`JQuery & JavaScript`,level:100},{name:`Bases de Datos SQL (Oracle y PostgreSQL)`,level:100},{name:`React & NodeJS`,level:100},{name:`XML`,level:100},{name:`JSP & Servlets`,level:100},{name:`Fundamentos DevOps`,level:100},{name:`Salesforce Developer`,level:100},{name:`Web Scraping con RocketBot`,level:100}];function v(){return`
    <button type="button" id="botonMostrarConocimientos" class="container-fluid btn-info" data-aos="zoom-in">
      <a href="#Conocimiento">
        <h3 class="conocimientos text-light my-3" id="Ocultar3">
          Conocimientos de programación adquiridos en el ultimo año
        </h3>
      </a>
    </button>

    <section id="Conocimiento" class="container text-center my-5">
      <h2 class="mb-4" style="color: whitesmoke;">Progreso de Conocimientos</h2>
      <i class="fas fa-brain fa-3x my-3" style="color: whitesmoke;"></i>
      <div class="row justify-content-center">
        ${_.map(e=>`
      <div class="col-12 col-md-6 mb-4">
        <h5 class="text-secondary">${e.name}</h5>
        <div class="progress" style="height: 30px;">
          <div class="progress-bar progress-bar-striped progress-bar-animated bg-secondary"
            role="progressbar"
            style="width: ${e.level}%"
            aria-valuenow="${e.level}" aria-valuemin="0" aria-valuemax="100">
            ${e.level}%
          </div>
        </div>
      </div>
    `).join(``)}
      </div>
    </section>
  `}var y=[{id:`banco`,title:`Banco Venezolano de Credito`,location:`Venezuela - Zulia`,role:`Representante de Ventas / Cajero`,img:`assets/img/card-5.jpg`,imgAlt:`Banco`,slide:0,modalTitle:`Banco Venezolano de Credito`,position:`Representante de ventas / Cajero administrativo`,duration:`6 meses`,from:`Enero 2016`,to:`Junio 2016`,description:`Atención de los clientes con los distintos requerimientos que tengan, ofrecer los productos del banco (ofertas y servicios), recibir depositos, realizar pagos de servicios, facturaciones pendientes. Realizar y cobrar cheques de gerencia, entre otras funciones propias de un cajero.`},{id:`lajorara`,title:`La Jorara`,location:`Colombia - Palomino - Santa Marta`,role:`Administrador / Hoster.`,img:`assets/img/card-3.jpg`,imgAlt:`LaJorara`,slide:0,modalTitle:`La Jorara`,position:`Admnistrador / Hoster / Atención al cliente`,duration:`2 años`,from:`Julio 2016`,to:`Junio 2018`,description:`Check-in Check-out de los Clientes. Administración de ingresos y egresos. Generación de planillas Excel para el pago de nómina. Planificación y atención de eventos. Servicio al cliente.`},{id:`lanegra`,title:`La Negra Restobar`,location:`Chile - Llanquihue`,role:`Garzón - Atención al cliente.<br>Encargado de caja.`,img:`assets/img/card-2.jpg`,imgAlt:`LaNegraRestobar`,slide:0,modalTitle:`La Negra Restobar`,position:`Garzón - Atención al cliente / Encargado de caja`,duration:`1 año`,from:`Octubre 2018`,to:`Octubre 2019`,description:`Atención al cliente, recibir los pedidos y notificarlos a cocina. Procurar siempre dar el mejor trato para que la experiencia del cliente sea la mejor. Manejo del Inglés con los turistas.`},{id:`mytrip`,title:`My Trip Rent A Car`,location:`Chile - Puerto Varas`,role:`Administrador general / Agente de reservas.`,img:`assets/img/card-1.png`,imgAlt:`MyTripRentACar`,slide:1,modalTitle:`Agente Reservas MyTripRentACar`,position:`Administrador general / Agente de reservas.`,duration:`6 meses`,from:`Octubre 2019`,to:`Marzo 2020`,description:`Gestión sistema de reservas. Administración de la empresa. Reportes administrativos semanales. Atención al cliente. Gestión de proyectos.`},{id:`AIEP`,title:`AIEP`,location:`Chile - Puerto Montt`,role:`Coordinador de Curso`,img:`assets/img/aiep.png`,imgAlt:`AIEP`,slide:1,modalTitle:`AIEP - Puerto Montt`,position:`Coordinador de Curso`,duration:`7 meses a Honorarios`,from:`Junio 2020`,to:`Diciembre 2020`,description:`Gestionar todo el comienzo de curso, asi como su logistica. Estar pendiente del desarrollo de cada integrante, su avance en el curso y actividades pendientes. Tambien de resolver dudas en Ruby.`},{id:`Nestle`,title:`Nestlé`,location:`Chile - Llanquihue`,role:`Operario Especializado / Apoyo Logistico`,img:`assets/img/card-4.jpg`,imgAlt:`Nestle`,slide:1,modalTitle:`Nestlé S.A`,position:`Operario Especializado - Apoyo Logistico`,duration:`3 años`,from:`Julio 2020`,to:`Julio 2023`,description:`Operador de distinta maquinaria dentro de la fabrica de Nestlé Llanquihue, siguiendo los distintos protocolos de higiene y seguridad, así como los distintos estándares de calidad.`,extra:`nestle`},{id:`Opciones`,title:`Opciones SA`,location:`Chile - Puerto Montt`,role:`Ingeniero de Sistemas - Trainee`,img:`assets/img/logo.png`,imgAlt:`Opciones SA`,slide:2,modalTitle:`Opciones SA - Puerto Montt`,position:`Ingeniero de Sistemas - Trainee`,duration:`Actualidad`,from:`03 - Agosto 2023`,to:`Actualidad`,description:``}];function b(e){let t=e.extra===`nestle`?`
    <button type="button" id="botonMostrarNestle" class="container-fluid btn-info">
      <a href="#carta-trabajo">
        <h4 class="text-light my-2" id="OcultarCartaTrabajo">Carta de trabajo - Recomendación</h4>
      </a>
    </button>
    <p class="nestle" id="carta-trabajo">
      <a href="assets/certificados/REFERENCIA_LABORAL.pdf" target="_blank" rel="noopener noreferrer" download="Carta Recomendación Jesús Seiler - Nestle Llanquihue">
        <img class="img-fluid my-2" src="assets/img/IMGRL.png" alt="Carta Trabajo">
      </a>
    </p>
    <button type="button" class="container-fluid btn-info">
      <a href="#certificados-nestle">
        <h4 class="text-light my-3" id="OcultarCertificadosNestle">Certificados en Nestlé</h4>
      </a>
    </button>
    <p class="nestle" id="certificados-nestle">
      <a href="assets/certificados/diploma de honor.jpg" target="_blank" rel="noopener noreferrer" download="Diploma Jesus Seiler">
        <img class="img-fluid my-2" src="assets/certificados/diploma de honor.jpg" alt="diploma">
      </a>
      <a href="assets/certificados/CODIGO CONDUCTA Certificado Nestle .pdf" target="_blank" rel="noopener noreferrer" download="CODIGO CONDUCTA Certificado Nestle">
        <img class="img-fluid my-2" src="assets/img/CODIGO CONDUCTA Certificado Nestle .png" alt="diploma">
      </a>
      <a href="assets/certificados/Jesus Seiler Certificado.pdf" target="_blank" rel="noopener noreferrer" download="Jesus Seiler Certificado">
        <img class="img-fluid my-2" src="assets/img/Jesus Seiler Certificado.png" alt="diploma">
      </a>
      <a href="assets/certificados/Líderes operacionales 2025.pdf" target="_blank" rel="noopener noreferrer" download="Líderes operacionales 2025">
        <img class="img-fluid my-2" src="assets/img/Líderes operacionales 2025.png" alt="diploma">
      </a>
      <a href="assets/certificados/Jesús_Seiler_ES_Programa_Nestlé_Digital_Literacy.pdf" target="_blank" rel="noopener noreferrer" download="Nestlé_Digital_Literacy">
        <img class="img-fluid my-2" src="assets/img/Jesús_Seiler_ES_Programa_Nestlé_Digital_Literacy.png" alt="diploma">
      </a>
    </p>
  `:``;return`
    <div class="modal fade" id="${e.id}" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title"><b><u>${e.modalTitle}</u></b></h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <table class="table table-responsive">
              <thead class="thead-dark text-center">
                <tr>
                  <th>Cargo / Puesto asignado</th>
                  <th>Duración del trabajo</th>
                  <th>Desde</th>
                  <th>Hasta</th>
                  <th>Funciones o tareas realizadas</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row"><b>${e.position}</b></th>
                  <td>${e.duration}</td>
                  <td>${e.from}</td>
                  <td>${e.to}</td>
                  <td><p class="text-justify">${e.description}</p></td>
                </tr>
              </tbody>
            </table>
            ${t}
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  `}function x(e){return`
    <div class="card">
      <img class="card-img-top" src="${e.img}" alt="${e.imgAlt}">
      <div class="card-body">
        <h5 class="card-title"><b>${e.title}<br>${e.location}</b></h5>
        <p class="card-text text-justify">${e.role}</p>
        <button type="button" class="btn btn-outline-info" data-toggle="modal" data-target="#${e.id}">Ver más</button>
      </div>
    </div>
  `}function S(){return`
    <div class="card">
      <img class="card-img-top" src="assets/img/Ofbiz.png" alt="Opciones">
      <div class="card-body">
        <h5 class="card-title"><b><br></b></h5>
        <p class="card-text text-justify"></p>
      </div>
    </div>
  `}function C(){let e=[0,1,2].map((e,t)=>{let n=y.filter(t=>t.slide===e),r;return r=e===2?`${S()}${x(n[0])}${S()}`:n.map(x).join(``),`
      <div class="carousel-item ${t===0?`active`:``}">
        <div class="card-deck">
          ${r}
        </div>
      </div>
    `}),t=y.map(b).join(``);return`
    <button type="button" id="botonMostrarExperiencias" class="container-fluid btn-info" data-aos="zoom-in">
      <a href="#Experiencia">
        <div class="experiencias text-center text-light header-section1" id="Ocultar2">Mi experiencia laboral</div>
      </a>
    </button>

    <section class="container-fluid my-3 p-3 bg-dark" id="Experiencia">
      <div id="experienciaCarousel" class="carousel slide" data-ride="carousel" data-interval="5000">
        <div class="carousel-inner">
          ${e.join(``)}
        </div>
        <a class="carousel-control-prev" href="#experienciaCarousel" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#experienciaCarousel" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </section>

    ${t}
  `}var w=[{id:`JS`,title:`Javascript 1`,img:`assets/img/JS.jpg`,type:`modal`,modalTitle:`JavaScript 1`,certHref:`assets/certificados/Certificado JS1.pdf`,download:`Certificado JS1`,slide:0,col:0},{id:`CSS`,title:`CSS aplicado`,img:`assets/img/CSS.jpg`,type:`modal`,modalTitle:`CSS Aplicado`,certHref:`assets/certificados/Certificado CSS.pdf`,download:`CSS Aplicado Jesus Seiler`,slide:0,col:0},{id:`DesarrolloWeb`,title:`Fundamento del desarrollo web`,img:`assets/img/DesarrolloWeb.jpg`,type:`modal`,modalTitle:`Fundamento del desarrollo web (front - back)`,certHref:`assets/certificados/FundamentosDelDesarrolloWeb.pdf`,download:`FundamentosDelDesarrolloWeb`,slide:0,col:0},{id:`JavaSpring`,title:`Java Spring Framework`,img:`assets/img/JavaSpring.jpg`,type:`modal`,modalTitle:`Java Spring Framework`,certHref:`assets/certificados/JavaSpring.pdf`,download:`JavaSpring`,slide:0,col:0},{id:`Analistaweb`,title:`Analista Web`,img:`assets/img/Analistaweb.jpg`,type:`modal`,modalTitle:`Analista Web`,certHref:`assets/certificados/Certificado Analista Web .pdf`,download:`Analista web Jesus Seiler`,slide:0,col:0},{id:`RocketBot1`,title:`Rocket Bot RPA Nivel 1`,img:`assets/certificados/RB1.jpeg`,type:`modal`,modalTitle:`Rocket Bot RPA Nivel 1`,certHref:`assets/certificados/RB1.jpeg`,download:`RocketBot Nivel 1`,slide:0,col:0},{id:`AI22301`,title:`Auditor Interno 22301`,img:`assets/img/22301.png`,type:`modal`,modalTitle:`AUDITOR/A INTERNO/A EN SISTEMAS DE GESTIÓN DE LA CONTINUIDAD DE NEGOCIO. ISO 22301:2019`,certHref:`assets/certificados/JS_22301.pdf`,download:`Jesus Seiler Auditor Interno 22301`,slide:0,col:0},{id:`AI27001`,title:`Auditor Interno 27001`,img:`assets/img/27001.png`,type:`modal`,modalTitle:`Auditor Interno de la Norma 27001:2022 Sistema de Gestión de la Seguridad de la Información`,certHref:`assets/certificados/JS_27001.pdf`,download:`Jesus Seiler Auditor Interno 27001`,slide:0,col:0},{id:`IAGoogle`,title:`Google AI Essentials V1`,img:`assets/img/GoogleAIEssentials.png`,type:`modal`,modalTitle:`Google AI Essentials V1`,certHref:`assets/certificados/GoogleAIEssentialsV1Badge.pdf`,download:`Jesus Seiler Google AI Essentials V1`,slide:0,col:0},{id:`aplicaciones`,title:`Aplicaciones Moviles 1`,img:`assets/img/aplicaciones1.jpg`,type:`modal`,modalTitle:`Desarrollo de Aplicaciones para telefonos`,certHref:`assets/certificados/Certificado Aplicaciones Moviles 1.pdf`,download:`Desarrollo aplicaciones moviles Jesus Seiler`,slide:0,col:1},{id:`seguridad`,title:`Ciberseguridad Ciudadana`,img:`assets/img/seguridad.jpg`,type:`modal`,modalTitle:`Ciberseguridad Ciudadana`,certHref:`assets/certificados/Certificado CiberSeguridad Septiembre.pdf`,download:`CiberSeguridad Ciudadana Jesus Seiler`,slide:0,col:1},{id:`ServicioCliente`,title:`Servicio al Cliente`,img:`assets/img/EspecialistaCliente.jpg`,type:`modal`,modalTitle:`Especialista en la atención del cliente`,certHref:`assets/certificados/EspecialistaAtencionAlCliente.pdf`,download:`EspecialistaAtencionAlCliente`,slide:0,col:1},{id:`Vendedor`,title:`Vendedor Certificado`,img:`assets/img/Vendedor.jpg`,type:`modal`,modalTitle:`Especialista en ventas y trato al cliente`,certHref:`assets/certificados/Vendedor.pdf`,download:`Vendedor`,slide:0,col:1},{id:`Marketing`,title:`Estrategias de Marketing`,img:`assets/img/Marketing.jpg`,type:`modal`,modalTitle:`Estrategias de Marketing`,certHref:`assets/certificados/Certificado Estrategias de Marketing Online.pdf`,download:`Marketing Digital Jesus Seiler`,slide:0,col:1},{id:`RocketBot2`,title:`Rocket Bot RPA Nivel 2`,img:`assets/certificados/RB2.jpeg`,type:`modal`,modalTitle:`Rocket Bot RPA Nivel 2`,certHref:`assets/certificados/RB2.jpeg`,download:`RocketBot Nivel 2`,slide:0,col:1},{id:`AI200001`,title:`Auditor Interno 20000-1`,img:`assets/img/20000-1.png`,type:`modal`,modalTitle:`AUDITOR/A INTERNO/A EN SISTEMAS DE GESTIÓN DEL SERVICIO ISO/IEC 20000-1:2018`,certHref:`assets/certificados/JS_20000-1.pdf`,download:`Jesus Seiler Auditor Interno 20000-1`,slide:0,col:1},{id:`AI9001_14001_45001`,title:`Auditor Interno 9001-14001-45001`,img:`assets/img/9001_14001_45001.png`,type:`modal`,modalTitle:`Auditor Interno en Sistemas Integrados de Gestión ISO 9001:2015 – ISO 14001:2015 – ISO 45001:2018`,certHref:`assets/certificados/JS_9001-14001-45001.pdf`,download:`Jesus Seiler Auditor Interno 9001 14001 45001`,slide:0,col:1},{id:`autocad`,title:`Diseño en AutoCAD`,img:`assets/img/autocad.jpg`,type:`modal`,modalTitle:`Diseño AutoCAD 2D`,certHref:`assets/certificados/Certificado AUTOCAD.pdf`,download:`Diseño AutoCAD 2D Jesus Seiler`,slide:1,col:0},{id:`ingles`,title:`Ingles Tecnico`,img:`assets/img/ingles.jpg`,type:`modal`,modalTitle:`Ingles Técnico`,certHref:`assets/certificados/Certificado Ingles Comunicativo .pdf`,download:`Ingles Comunicativo Jesus Seiler`,slide:1,col:0},{id:`ScrumMaster1`,title:`Scrum Master 1`,img:`assets/img/ScrumMaster1.jpg`,type:`modal`,modalTitle:`Scrum & proyectos ágiles`,certHref:`assets/certificados/PlatziScrum.pdf`,download:`PlatziScrum`,slide:1,col:0},{id:`ScrumMaster2`,title:`Scrum Master 2`,img:`assets/img/ScrumMaster2.jpg`,type:`modal`,modalTitle:`Scrum Master`,certHref:`assets/certificados/CertifiScrum.pdf`,download:`CertifiScrum`,slide:1,col:0},{id:`JSSence`,title:`JavaScript`,img:`assets/img/JSSence.jpg`,type:`modal`,modalTitle:`JavaScript SENCE`,certHref:`assets/certificados/Certificado JavaScript Node.Js .pdf`,download:`JavaScript Jesus Seiler`,slide:1,col:0},{id:`FCResponsive`,title:`Responsive Web Desing`,img:`assets/certificados/FCResponsiveWeb.png`,type:`link`,url:`https://www.freecodecamp.org/certification/ichbinseiler/responsive-web-design`,slide:1,col:0},{id:`FundamentosDevOps`,title:`Fundamentos DevOps SENCE`,img:`assets/img/FundamentosDevOps.png`,type:`modal`,modalTitle:`Fundamentos DevOps`,certHref:`assets/certificados/Certificado DevOps.pdf`,download:`Fundamentos del DevOps`,slide:1,col:0},{id:`FundamentosDevOps2`,title:`Fundamentos DevOps KIBERNUM`,img:`assets/img/FundamentosDevOps2.png`,type:`modal`,modalTitle:`Fundamentos DevOps`,certHref:`assets/certificados/FundamentosDevOps2.pdf`,download:`Fundamentos del DevOps`,slide:1,col:0},{id:`HazloConIA`,title:`IAGen (IA Generativa) - Iniciativa #HazloConIA`,img:`assets/img/HazloConIA.png`,type:`modal`,modalTitle:`IA Generativa`,certHref:`assets/certificados/HazloConIA.pdf`,download:`HazloConIA`,slide:1,col:0},{id:`JS_PowerBI`,title:`Power BI`,img:`assets/img/JS_PowerBI.png`,type:`modal`,modalTitle:`Power BI`,certHref:`assets/certificados/JS_PowerBI.pdf`,download:`Power BI Jesus Seiler`,slide:1,col:0},{id:`Programacion`,title:`Programación Basica`,img:`assets/img/programacion.jpg`,type:`modal`,modalTitle:`Introducción a la Programación`,certHref:`assets/certificados/Certificado Introduccion a la programacion.pdf`,download:`Introducción a la programación Jesus Seiler`,slide:1,col:1},{id:`react`,title:`React JS`,img:`assets/img/react.jpg`,type:`modal`,modalTitle:`Desarrollo en React`,certHref:`assets/certificados/Certificado React.pdf`,download:`React Jesus Seiler`,slide:1,col:1},{id:`FullStack`,title:`Desarrollo Full Stack Java`,img:`assets/img/FullStackJava.jpg`,type:`modal`,modalTitle:`Desarrollo de aplicaciones web full stack java`,certHref:`assets/certificados/DesarrolloFullStackJava.pdf`,download:`DesarrolloFullStackJava`,slide:1,col:1},{id:`CienciaVentas`,title:`Ciencia de Ventas`,img:`assets/img/CienciaVentas.jpg`,type:`modal`,modalTitle:`Ciencias de las ventas`,certHref:`assets/certificados/CienciaVentas.pdf`,download:`CienciasDeVentas`,slide:1,col:1},{id:`HTML5`,title:`HTML5 y CSS`,img:`assets/img/HTML5.jpg`,type:`modal`,modalTitle:`HTML5 y CSS`,certHref:`assets/certificados/Certificado HTML5 CSS3.pdf`,download:`HTML5 y CSS Jesus Seiler`,slide:1,col:1},{id:`Inversiones`,title:`Inversiones`,img:`assets/img/InversionesIngles.png`,type:`modal`,modalTitle:`Inversiones en Ingles BC`,certHref:`assets/certificados/InversionesIngles.pdf`,download:`Inversiones Ingles Jesus Seiler`,slide:1,col:1},{id:`LiderazgoEfectivo`,title:`Liderazgo Efectivo`,img:`assets/img/LiderazgoEfectivo.png`,type:`modal`,modalTitle:`Liderazgo Efectivo`,certHref:`assets/certificados/LiderazgoEfectivo.pdf`,download:`Liderazgo Efectivo`,slide:1,col:1},{id:`FCJavaScript`,title:`JavaScript Algorithms and Data Structures`,img:`assets/certificados/FCJavaScriptAlgorithm.png`,type:`link`,url:`https://www.freecodecamp.org/certification/ichbinseiler/javascript-algorithms-and-data-structures`,slide:1,col:1},{id:`OCI`,title:`OCI Foundations`,img:`assets/certificados/OCICertificado.png`,type:`link`,url:`https://catalog-education.oracle.com/pls/certview/sharebadge?id=0EE370D017FDDE5093D72D0FAAA09E4B5AD04E6D9E4E32BFFC3537ECDA237F0B`,slide:1,col:1},{id:`HPCiberseguridad`,title:`Fundamentos de Ciberseguridad`,img:`assets/certificados/HPCiberseguridad.png`,type:`modal`,modalTitle:`Fundamentos de Ciberseguridad`,certHref:`assets/certificados/HPCiberseguridad.pdf`,download:`HPCiberseguridad`,slide:1,col:1}];function T(e){return e.type===`link`?`<button type="button" class="btn btn-outline-info" onclick="window.open('${e.url}','_blank')">Ver Certificado</button>`:`<button type="button" class="btn btn-outline-info" data-toggle="modal" data-target="#${e.id}">Ver Certificado</button>`}function E(e){return e.type===`link`?``:`
    <div class="modal fade" id="${e.id}" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h6 class="modal-title">${e.modalTitle}</h6>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <a href="${e.certHref}" target="_blank" rel="noopener noreferrer" download="${e.download}">
              <img class="img-fluid mb-3" src="${e.img}" alt="${e.title}">
            </a>
            <p><b>Presione imagen para descargar el certificado</b></p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  `}function D(e){return`
    <img class="card-img-top" src="${e.img}" alt="${e.title}">
    <div class="card-body">
      <h6 class="card-title text-center"><b>${e.title}</b></h6>
      <div class="text-center">${T(e)}</div>
    </div>
  `}function O(){let e=[...new Set(w.map(e=>e.slide))].length,t=[];for(let n=0;n<e;n++){let e=w.filter(e=>e.slide===n&&e.col===0),r=w.filter(e=>e.slide===n&&e.col===1);t.push(`
      <div class="carousel-item ${n===0?`active`:``}">
        <div class="card-deck">
          <div class="card">${e.map(D).join(``)}</div>
          <div class="card">${r.map(D).join(``)}</div>
        </div>
      </div>
    `)}let n=w.map(E).join(``);return`
    <button type="button" id="botonMostrarCertificados" class="container-fluid" data-aos="zoom-in">
      <a href="#Certificados">
        <div class="certificados text-center font-weight-bold text-light header-section1" id="Ocultar">
          Certificados Obtenidos
        </div>
      </a>
    </button>

    <section class="container-fluid my-3 p-3 bg-dark" id="Certificados">
      <div class="card-deck">
        <div id="experienciaCarousel2" class="carousel slide" data-ride="carousel" data-interval="5000">
          <div class="carousel-inner">
            ${t.join(``)}
          </div>
          <a class="carousel-control-prev" href="#experienciaCarousel2" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#experienciaCarousel2" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </section>

    ${n}
  `}function k(){return`
    <section id="contact">
      <div class="container-footer text-light">
        <footer class="text-center my-5 text-light" id="footer" data-aos="fade-up">
          <h1 class="font-weight-bold">Mis redes sociales</h1>
          <p>
            <a href="https://www.facebook.com/IchBinSeiler" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-facebook"></i> <span>Facebook&nbsp;</span>
            </a>
            <a href="https://www.twitter.com/Ich_BinSeiler" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-twitter"></i> <span>Twitter&nbsp;</span>
            </a>
          </p>
          <p>
            <a href="https://www.instagram.com/ichbinseiler" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-instagram"></i> <span>Instagram&nbsp;</span>
            </a>
            <a href="https://gitlab.com/seiler18" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-gitlab"></i> <span>Gitlab&nbsp;</span>
            </a>
          </p>
          <a href="https://github.com/seiler18" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-github"></i> <span>Github&nbsp;</span>
          </a>
          <a href="https://www.linkedin.com/in/ichbinseiler/" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-linkedin"></i> <span>LinkedIn&nbsp;</span>
          </a>
          <br>
          <a href="https://api.whatsapp.com/send?phone=+56953292612" target="_blank" rel="noopener noreferrer">
            <span>Contactar via WhatsApp&nbsp;</span>
            <i class="fab fa-whatsapp fa-2x"></i>
          </a>
          <p>
            <a href="mailto:ichbinseiler@gmail.com" target="_blank" rel="noopener noreferrer">
              <span>Contactar por Gmail&nbsp;</span>
              <i class="fab fa-google fa-2x"></i>
            </a>
          </p>
          <p>©Jesús Seiler ${new Date().getFullYear()}. Todos los derechos reservados.</p>
        </footer>
      </div>
    </section>
  `}var A=document.getElementById(`app`);A.innerHTML=d()+m()+g()+v()+C()+O()+k();function j(e){if(!e.is(`:visible`))return;let t=e[0];t.classList.remove(`section-reveal`),t.offsetWidth,t.classList.add(`section-reveal`),l.default.refresh()}function M(e,t){let n=$(e).hide();t.forEach(e=>$(e).on(`click`,()=>{n.toggle(),j(n)}))}M(`#Conocimiento`,[`#Ocultar3`,`#mostrarConocimiento`]),M(`#Experiencia`,[`#Ocultar2`,`#mostrarExperiencia`]),M(`#Certificados`,[`#Ocultar`,`#mostrarCertificados`]),$(`#carta-trabajo`).hide(),$(`#OcultarCartaTrabajo`).on(`click`,()=>$(`#carta-trabajo`).toggle()),$(`#certificados-nestle`).hide(),$(`#OcultarCertificadosNestle`).on(`click`,()=>$(`#certificados-nestle`).toggle()),l.default.init({duration:700,easing:`ease-out-cubic`,once:!0,offset:80,disable:()=>window.matchMedia(`(prefers-reduced-motion: reduce)`).matches}),window.addEventListener(`load`,()=>l.default.refresh());function N(){document.querySelectorAll(`.goog-te-banner-frame, iframe.skiptranslate`).forEach(e=>e.style.setProperty(`display`,`none`,`important`)),document.body.style.top&&document.body.style.top!==`0px`&&document.body.style.setProperty(`top`,`0px`,`important`)}var P=new MutationObserver(N);P.observe(document.documentElement,{childList:!0,subtree:!0}),P.observe(document.body,{attributes:!0,attributeFilter:[`style`]});