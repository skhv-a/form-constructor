(this["webpackJsonpsibdev-task"]=this["webpackJsonpsibdev-task"]||[]).push([[0],{44:function(e,t,n){},45:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(36),s=n.n(r),i=(n(44),n(11)),l=n(4),o=n(3),u=n(2),d=n(6),j=function(e){return e.filter((function(e){return!!e}))},b=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return j(t).join(" ")},m=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};for(var a in t){var r=n?Array.isArray(t)?"".concat(n,"[").concat(a,"]"):"".concat(n,".").concat(a):a;"object"===typeof t[a]?e(t[a],r,c):c[r]=t[a]}return c},h=function(e){return new Promise((function(t){return setTimeout(t,e)}))},O=(n(45),n(0)),f=function(e){var t=e.type,n=void 0===t?"primary":t,c=e.htmlType,a=e.className,r=Object(d.a)(e,["type","htmlType","className"]);return Object(O.jsx)("button",Object(u.a)({type:c,className:b("button",a,"primary"===n&&"button_primary","secondary"===n&&"button_secondary")},r))},v=Object(c.createContext)({}),x=function(){return Object(c.useContext)(v)},p=function(e){var t=e.children,n=Object(d.a)(e,["children"]);return Object(O.jsx)(v.Provider,{value:n,children:t})},_=n(21),g=n.n(_),N=n(22),k=n.n(N);function y(e){return Object.values(m(e)).every((function(e){return""===e}))}var w=function(e){var t=e.initialValues,n=e.initialErrors,a=void 0===n?{}:n,r=e.initialTouched,s=void 0===r?{}:r,i=e.validate,l=Object(c.useState)(t),d=Object(o.a)(l,2),j=d[0],b=d[1],m=Object(c.useState)(a),h=Object(o.a)(m,2),O=h[0],f=h[1],v=Object(c.useState)(s),x=Object(o.a)(v,2),p=x[0],_=x[1],N=function(e,t){b((function(n){return g()(k()(n),e,t)}))},w=function(e,t){return _((function(n){return g()(k()(n),e,t)}))};return{touched:p,values:j,errors:O,helpers:{changeHandler:function(e,t){switch(w(e,!0),typeof t){case"boolean":case"string":case"number":N(e,t);break;default:N(e,t.target.value)}},isFormValid:function(){if(i){var e=i(j);return f((function(t){return Object(u.a)(Object(u.a)({},t),e)})),y(e)}return y(O)},setValue:N,setError:function(e,t){return f((function(n){return g()(k()(n),e,t)}))},touchField:w}}},C=n(14),S=n(10),I=n.n(S),E=function(e,t){var n="";(t.min&&e.length<t.min&&(n="\u041c\u0438\u043d\u0438\u043c\u0443\u043c ".concat(t.min," \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432")),t.max&&e.length>t.max&&(n="\u041c\u0430\u043a\u0441\u0438\u043c\u0443\u043c ".concat(t.max," \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432")),t.pattern)&&(q(e,new RegExp(t.pattern))||(n="\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043d\u0435 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0448\u0430\u0431\u043b\u043e\u043d\u0443 \u0432\u0432\u043e\u0434\u0430"));return n},L=function(e,t){var n="";return isNaN(e)&&(n="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0438\u0441\u043b\u043e"),t.min&&e<t.min&&(n="\u041c\u0438\u043d\u0438\u043c\u0443\u043c ".concat(t.min)),t.max&&e>t.max&&(n="\u041c\u0430\u043a\u0441\u0438\u043c\u0443\u043c ".concat(t.max)),n},P=function(e){return q(e,/(\+7|8)\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}/)?"":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u043b\u0438\u0434\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430"};function q(e,t){var n,c=null!==(n=e.match(t))&&void 0!==n?n:[];return Object(o.a)(c,1)[0]===e}var F=function(e){var t,n=e.name,a=e.schema,r=e.label,s=e.children,i=e.className,l=e.trigger,o=void 0===l?"onChange":l,d=e.valuePropName,j=void 0===d?"value":d,m=e.invalidPropName,h=void 0===m?"isInvalid":m,f=x(),v=f.values,p=f.errors,_=f.touched,g=f.helpers,N=I()(v,n),k=I()(p,n),y=I()(_,n);Object(c.useEffect)((function(){a&&g.setError(n,function(e,t){var n,c,a,r,s,i,l="undefined"===typeof t||""===t||!1===t;if(e.required&&l)return"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0435";if(!e.required&&l)return"";var o="";switch(e.type){case"string":o=E(null!==(n=t)&&void 0!==n?n:"",e),o=(null===(c=e.validate)||void 0===c?void 0:c.call(e,t))||o;break;case"number":o=L(t,e),o=(null===(a=e.validate)||void 0===a?void 0:a.call(e,t))||o;break;case"phone":o=P(null!==(r=t)&&void 0!==r?r:""),o=(null===(s=e.validate)||void 0===s?void 0:s.call(e,t))||o;break;case"select":o=(null===(i=e.validate)||void 0===i?void 0:i.call(e,t))||o}return o}(a,N))}),[N]);var w=k&&y,S=Object(c.cloneElement)(s,Object(u.a)(Object(u.a)({},s.props),{},(t={},Object(C.a)(t,j,N),Object(C.a)(t,h,w),Object(C.a)(t,o,g.changeHandler.bind(null,n)),t)));return Object(O.jsxs)("div",{className:b("form-item",i),children:[Object(O.jsx)("label",{className:b("form-item__label",w&&"form-item__label_error",r&&(null===a||void 0===a?void 0:a.required)&&"form-item__label_required"),children:r}),S,w&&Object(O.jsx)("div",{className:"form-item__error",children:k})]})},V=n(13),T=function(e){var t=e.name,n=e.children,c=x(),a=c.values,r=c.helpers,s=I()(a,t);return n({items:s,remove:function(e){var n=Object(V.a)(s);n.splice(e,1),r.setError(t,""),r.setValue(t,n),r.touchField(t,!1)},push:function(e){r.setValue(t,[].concat(Object(V.a)(s),[e]))}})},A=(n(48),function(e){var t=e.initialErrors,n=void 0===t?{}:t,a=e.initialValues,r=e.className,s=e.children,i=e.validate,l=e.onSubmit,o=e.onFail,d=e.onValuesChange,j=w({initialValues:a,initialErrors:n,validate:i}),h=j.values,f=j.errors,v=j.helpers;Object(c.useEffect)((function(){null===d||void 0===d||d(h)}),[h]);return Object(O.jsx)("form",{className:b("form",r),onSubmit:function(e){e.preventDefault(),Object.keys(m(h)).forEach((function(e){return v.touchField(e,!0)})),v.isFormValid()?null===l||void 0===l||l(h):null===o||void 0===o||o(f)},children:Object(O.jsx)(p,Object(u.a)(Object(u.a)({},j),{},{children:s(j)}))})});A.Item=F,A.List=T;var R=A,J=(n(49),Object(c.forwardRef)((function(e,t){var n=e.className,c=e.isInvalid,a=Object(d.a)(e,["className","isInvalid"]);return Object(O.jsx)("input",Object(u.a)(Object(u.a)({},a),{},{ref:t,className:b("input",n,c&&"input_error")}))}))),H=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(c.useState)(e),n=Object(o.a)(t,2),a=n[0],r=n[1],s=function(){return r(!0)},i=function(){return r(!1)},l=function(){return r((function(e){return!e}))},u={on:s,off:i,toggle:l};return[a,u]},B=n.p+"static/media/eye.9debb862.svg",D=n.p+"static/media/eye-off.b633b772.svg",z=(n(50),function(e){var t=H(!0),n=Object(o.a)(t,2),c=n[0],a=n[1];return Object(O.jsxs)("div",{className:"password-input",children:[Object(O.jsx)(J,Object(u.a)({type:c?"password":"text"},e)),Object(O.jsx)("img",{className:"password-input__eye",src:c?D:B,alt:c?"Show password":"Hide password",onClick:a.toggle})]})}),M=function(e){var t=e.controls,n=Object(d.a)(e,["controls"]);return Object(O.jsx)(R,Object(u.a)(Object(u.a)({},n),{},{children:function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(R.Item,{label:"\u041b\u043e\u0433\u0438\u043d",name:"username",children:Object(O.jsx)(J,{placeholder:"admin"})}),Object(O.jsx)(R.Item,{label:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",children:Object(O.jsx)(z,{placeholder:"****"})}),t]})}}))},U="token",G=function(){var e;return null!==(e=localStorage.getItem(U))&&void 0!==e?e:""},K=function(){var e=Object(c.useState)(G()),t=Object(o.a)(e,2),n=t[0],a=t[1];return[n,function(e){a(e),function(e){localStorage.setItem(U,e)}(e)}]},Q=Object(c.createContext)({}),W=function(){return Object(c.useContext)(Q)},X=function(e){var t=e.children,n=K(),c=Object(o.a)(n,2),a=c[0],r=c[1];return Object(O.jsx)(Q.Provider,{value:{token:a,setToken:r},children:t})},Y=n(5),Z=n.n(Y),$=n(12),ee=n(37),te=n.n(ee).a.create({baseURL:"http://193.124.206.217:3000"}),ne=function(){var e=Object($.a)(Z.a.mark((function e(t){var n,c;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=G(),t=Object(u.a)(Object(u.a)({},t),{},{headers:Object(u.a)(Object(u.a)({},t.headers),{},{Authorization:"Bearer ".concat(n)})}),e.next=5,te(t);case 5:return c=e.sent,e.abrupt("return",c.data);case 9:throw e.prev=9,e.t0=e.catch(0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),ce={response:null,error:null,isLoading:!1},ae=function(e){var t=e.axiosRequestConfig,n=e.onError,a=e.onSuccess,r=Object(c.useState)(ce),s=Object(o.a)(r,2),i=s[0],l=s[1];return[i,function(){var e=Object($.a)(Z.a.mark((function e(c){var r;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l((function(e){return Object(u.a)(Object(u.a)({},e),{},{isLoading:!0})})),e.prev=1,e.next=4,ne(t(c));case 4:r=e.sent,l({response:r,isLoading:!1,error:null}),"function"===typeof a&&a(c),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),l({response:null,isLoading:!1,error:e.t0}),"function"===typeof n&&n(c,e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()]},re=function(){return ae({axiosRequestConfig:function(e){return{url:"/auth/login",method:"POST",data:e}}})},se=n.p+"static/media/check.c6233f6a.svg",ie=n.p+"static/media/cross.dd287d17.svg",le=(n(70),function(e){var t=e.type,n=e.className,c=e.children;return Object(O.jsxs)("div",{className:b("alert",n,"alert_".concat(t)),children:[Object(O.jsx)("div",{className:b("alert__icon","alert__icon_".concat(t)),children:Object(O.jsx)("img",{src:"success"===t?se:ie,alt:"success"===t?"check":"cross"})}),Object(O.jsx)("div",{className:"alert__content",children:c})]})});n(71);var oe=function(){var e=Object(l.g)(),t=W(),n=t.token,a=t.setToken,r=re(),s=Object(o.a)(r,2),i=s[0],u=s[1];return Object(c.useEffect)((function(){i.response&&a(i.response.access_token)}),[i]),Object(c.useEffect)((function(){n&&e.push("/schemas")}),[n]),Object(O.jsx)("div",{className:"login-container",children:Object(O.jsxs)("div",{className:"login",children:[Object(O.jsx)("h3",{className:"heading-3 login__title",children:"\u0412\u0445\u043e\u0434"}),Object(O.jsx)(M,{className:"login-form",initialValues:{username:"",password:""},onSubmit:u,controls:Object(O.jsx)("div",{className:"login-form__controls",children:Object(O.jsx)(f,{htmlType:"submit",disabled:i.isLoading,children:i.isLoading?"\u0412\u0445\u043e\u0434\u0438\u043c...":"\u0412\u043e\u0439\u0442\u0438"})})}),i.error&&Object(O.jsx)(le,{className:"login__error",type:"error",children:"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0432\u043e\u0439\u0442\u0438"})]})})};n(76);function ue(e){var t=e.to,n=e.children,c=Object(l.h)().pathname===t;return Object(O.jsx)(i.b,{to:t,className:b("navbar__link",c&&"navbar__link_active"),children:n})}var de=function(){var e=W().setToken;return Object(O.jsx)("div",{className:"navbar-container",children:Object(O.jsx)("div",{className:"navbar",children:Object(O.jsxs)("div",{className:"navbar-links",children:[Object(O.jsxs)("div",{className:"navbar-links__group",children:[Object(O.jsx)(ue,{to:"/schemas",children:"\u041c\u043e\u0438 \u0441\u0445\u0435\u043c\u044b"}),Object(O.jsx)(ue,{to:"/schemas/new",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u0445\u0435\u043c\u0443"})]}),Object(O.jsx)("div",{className:"navbar-links__group",children:Object(O.jsx)("span",{className:"navbar__link",onClick:function(){return e("")},children:"\u0412\u044b\u0439\u0442\u0438"})})]})})})},je=(n(77),function(e){var t=e.className,n=e.schemas;return Object(O.jsx)("div",{className:b("schemas-list",t),children:n.map((function(e){return Object(O.jsx)("div",{className:"schemas-list__item",children:Object(O.jsx)(i.b,{to:"/schemas/".concat(e.id),children:e.name})},e.id)}))})}),be=function(){var e,t=null!==(e=localStorage.getItem("schemas"))&&void 0!==e?e:"[]";return JSON.parse(t)},me=function(e){var t=be(),n=[].concat(Object(V.a)(t),[e]);localStorage.setItem("schemas",JSON.stringify(n))},he={response:null,error:null,isLoading:!1},Oe=function(){var e=Object(c.useState)(he),t=Object(o.a)(e,2),n=t[0],a=t[1];return[n,function(){var e=Object($.a)(Z.a.mark((function e(){var t;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a((function(e){return Object(u.a)(Object(u.a)({},e),{},{isLoading:!0})})),e.next=3,h(500);case 3:t=be(),a((function(e){return Object(u.a)(Object(u.a)({},e),{},{response:t,isLoading:!1})}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()]};n(78);var fe=function(){var e,t=Oe(),n=Object(o.a)(t,2),a=n[0],r=n[1];Object(c.useEffect)((function(){r()}),[]);var s=null!==(e=a.response)&&void 0!==e?e:[];return Object(O.jsxs)("div",{className:"schemas-page",children:[Object(O.jsx)(de,{}),Object(O.jsxs)("div",{className:"content",children:[Object(O.jsx)("h2",{className:"heading-2",children:"\u041c\u043e\u0438 \u0441\u0445\u0435\u043c\u044b"}),a.isLoading?Object(O.jsx)("p",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}):Object(O.jsx)(je,{schemas:s,className:"schemas-page__schemas-list"}),Object(O.jsx)(i.b,{to:"schemas/new",children:Object(O.jsx)(f,{children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u0445\u0435\u043c\u0443"})})]})]})},ve=n.p+"static/media/arrow.ce7aa419.svg",xe=(n(79),function(e){var t=e.className,n=e.defaultOpened,r=void 0===n?[]:n,s=e.children,i=Object(c.useState)(r),l=Object(o.a)(i,2),d=l[0],j=l[1];return Object(O.jsx)("div",{className:b("accordion",t),children:s.map((function(e){var t=e.props.id,n=d.includes(t);return Object(O.jsx)("div",{children:a.a.cloneElement(e,Object(u.a)(Object(u.a)({},e.props),{},{isOpened:n,onClick:function(){return n?function(e){return j((function(t){return t.filter((function(t){return t!==e}))}))}(t):function(e){return j((function(t){return[].concat(Object(V.a)(t),[e])}))}(t)}}))},t)}))})});xe.Item=function(e){var t=e.isOpened,n=e.title,c=e.extra,a=e.className,r=e.children,s=e.onClick;return Object(O.jsxs)("div",{className:b("accordion-item",a,t&&"accordion-item_opened"),children:[Object(O.jsxs)("div",{className:"accordion-item__header",onClick:s,children:[Object(O.jsxs)("div",{className:"accordion-item-title",children:[Object(O.jsx)("img",{src:ve,alt:"arrow",className:b("accordion-item-title__arrow",t&&"accordion-item-title__arrow_opened")}),"function"===typeof n?n(!!t):n]}),Object(O.jsx)("div",{className:"accordion-item__extra",children:c})]}),Object(O.jsx)("div",{className:b("accordion-item__body",t&&"accordion-item__body_opened"),children:r})]})};var pe=xe,_e=function(e,t){Object(c.useEffect)((function(){var n=function(n){e.current&&!e.current.contains(n.target)&&t(n)};return document.addEventListener("click",n),function(){document.removeEventListener("click",n)}}),[e,t])};n(80);function ge(e){var t=e.label,n=e.value,c=e.isSelected,a=e.onClick;return Object(O.jsx)("div",{onClick:a,className:b("select__option",c&&"select__option_active"),children:t},n)}var Ne=function(e){var t=e.options,n=e.selected,a=e.placeholder,r=e.isInvalid,s=e.onSelect,i=Object(c.useRef)(null),l=H(),d=Object(o.a)(l,2),j=d[0],m=d[1];_e(i,m.off);var h=t.find((function(e){return e.value===n}));return Object(O.jsxs)("div",{ref:i,className:"select",children:[Object(O.jsxs)("div",{className:b("select__header",r&&"select__header_error",j&&"select__header_opened"),onClick:m.toggle,children:[h?Object(O.jsx)("div",{className:"select__value",children:h.label}):Object(O.jsx)("div",{className:b("select__placeholder",r&&"select__placeholder_error"),children:a}),Object(O.jsx)("img",{src:ve,alt:"arrow"})]}),j&&Object(O.jsx)("div",{className:b("select__body",r&&"select__body_error"),children:t.map((function(e){var t=e.value===n;return Object(c.createElement)(ge,Object(u.a)(Object(u.a)({},e),{},{key:e.value,isSelected:t,onClick:function(){null===s||void 0===s||s(t?"":e.value),m.off()}}))}))})]})},ke=function(e){switch(e){case"string":return"\u0422\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u0435 \u043f\u043e\u043b\u0435";case"number":return"\u0427\u0438\u0441\u043b\u043e\u0432\u043e\u0435 \u043f\u043e\u043b\u0435";case"password":return"\u041f\u0430\u0440\u043e\u043b\u044c";case"checkbox":return"\u0427\u0435\u043a\u0431\u043e\u043a\u0441";case"phone":return"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430";case"select":return"\u0412\u044b\u043f\u0430\u0434\u0430\u044e\u0449\u0438\u0439 \u0441\u043f\u0438\u0441\u043e\u043a";default:return e}},ye=["string","number","password","checkbox","phone","select"],we=function(e){return Object(O.jsx)(Ne,Object(u.a)(Object(u.a)({},e),{},{options:ye.map((function(e){return{label:ke(e),value:e}}))}))},Ce=(n(81),function(e){var t=e.basePath,n=x(),a=n.errors,r=n.helpers,s=I()(a,"".concat(t,".options")),i=!!Array.isArray(s)&&s.some((function(e){return e.key||e.value}));return Object(c.useEffect)((function(){return function(){r.setError("".concat(t,".options"),"")}}),[]),Object(O.jsx)(T,{name:"".concat(t,".options"),children:function(e){var n=e.items,c=e.push,a=e.remove,r=n.length>1;return Object(O.jsxs)("div",{className:"options-list",children:[n.map((function(e,c){var s=function(e,t){return!!n.find((function(n,a){return c!==a&&n[e].toLowerCase()===t.toLowerCase()}))};return Object(O.jsxs)("div",{className:"options-list-item",children:[Object(O.jsx)(F,{name:"".concat(t,".options[").concat(c,"].key"),schema:{type:"string",required:!0,validate:function(e){return s("key",e)?"\u0422\u0430\u043a\u043e\u0439 \u043a\u043b\u044e\u0447 \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442":""}},children:Object(O.jsx)(J,{placeholder:"\u041a\u043b\u044e\u0447"})}),Object(O.jsx)(F,{name:"".concat(t,".options[").concat(c,"].value"),schema:{type:"string",required:!0,validate:function(e){return s("value",e)?"\u0422\u0430\u043a\u043e\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442":""}},children:Object(O.jsx)(J,{placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"})}),r&&Object(O.jsx)("img",{src:ie,alt:"cross",className:"options-list-item__cross",onClick:function(){return a(c)}})]},c)})),Object(O.jsx)(f,{htmlType:"button",type:"secondary",className:"options-list__button",disabled:i,onClick:function(){return c({key:"",value:""})},children:"\u041d\u043e\u0432\u044b\u0439 \u0432\u0430\u0440\u0438\u0430\u043d\u0442"})]})}})}),Se=function(e){var t=e.basePath,n="select"===e.type;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(R.Item,{name:"".concat(t,".key"),label:"\u041a\u043b\u044e\u0447 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430",schema:{type:"string",required:!0},children:Object(O.jsx)(J,{placeholder:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043a\u043b\u044e\u0447 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430"})}),Object(O.jsx)(R.Item,{name:"".concat(t,".label"),label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430",schema:{type:"string",required:!0},children:Object(O.jsx)(J,{placeholder:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430"})}),Object(O.jsx)(R.Item,{name:"".concat(t,".type"),label:"\u041f\u043e\u043b\u0435 \u0434\u043b\u044f \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f",schema:{type:"select",required:!0},valuePropName:"selected",trigger:"onSelect",children:Object(O.jsx)(we,{placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u043e\u043b\u0435 \u0434\u043b\u044f \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f"})}),n&&Object(O.jsx)(Ce,{basePath:t})]})},Ie=function(e){var t=e.onChange,n=Object(d.a)(e,["onChange"]);return Object(O.jsx)(J,Object(u.a)({type:"number",onChange:function(e){return null===t||void 0===t?void 0:t(+e.currentTarget.value)}},n))},Ee=(n(82),n(83),function(e){var t=e.className,n=e.disabled,c=Object(d.a)(e,["className","disabled"]);return Object(O.jsx)("label",Object(u.a)({className:b("inline-label",n&&"inline-label_disabled",t)},c))}),Le=function(e){var t=e.label,n=e.checked,c=e.disabled,a=e.onCheck;return Object(O.jsxs)("div",{className:"switch-container",children:[Object(O.jsx)("button",{type:"button",disabled:c,onClick:function(){return null===a||void 0===a?void 0:a(!n)},className:b("switch",n&&"switch_checked",n&&c&&"switch_disabled-checked",!n&&c&&"switch_disabled"),children:Object(O.jsx)("div",{className:b("switch__indicator",n&&"switch__indicator_checked")})}),Object(O.jsx)(Ee,{disabled:c,children:t})]})},Pe=function(e){var t=e.basePath;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(R.Item,{name:"".concat(t,".required"),valuePropName:"checked",trigger:"onCheck",children:Object(O.jsx)(Le,{label:"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"})}),Object(O.jsx)(R.Item,{name:"".concat(t,".min"),label:"\u041c\u0438\u043d. \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435",children:Object(O.jsx)(Ie,{})}),Object(O.jsx)(R.Item,{name:"".concat(t,".max"),label:"\u041c\u0430\u043a\u0441. \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435",children:Object(O.jsx)(Ie,{})})]})},qe=function(e){var t=e.basePath;return Object(O.jsx)(R.Item,{name:"".concat(t,".required"),valuePropName:"checked",trigger:"onCheck",children:Object(O.jsx)(Le,{label:"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"})})},Fe=function(e){var t=e.basePath;return Object(O.jsx)(R.Item,{name:"".concat(t,".required"),valuePropName:"checked",trigger:"onCheck",children:Object(O.jsx)(Le,{label:"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"})})},Ve=(n(84),function(e){var t=e.basePath;return Object(O.jsxs)("div",{className:"string-validation-form",children:[Object(O.jsx)(R.Item,{name:"".concat(t,".required"),valuePropName:"checked",trigger:"onCheck",children:Object(O.jsx)(Le,{label:"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"})}),Object(O.jsxs)("div",{className:"string-validation-form__min-max",children:[Object(O.jsx)(R.Item,{name:"".concat(t,".min"),label:"\u041c\u0438\u043d. \u043a\u043e\u043b-\u0432\u043e \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432",children:Object(O.jsx)(Ie,{})}),Object(O.jsx)(R.Item,{name:"".concat(t,".max"),label:"\u041c\u0430\u043a\u0441. \u043a\u043e\u043b-\u0432\u043e \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432",children:Object(O.jsx)(Ie,{})})]}),Object(O.jsx)(R.Item,{name:"".concat(t,".pattern"),label:"\u0428\u0430\u0431\u043b\u043e\u043d \u0432\u0432\u043e\u0434\u0430",children:Object(O.jsx)(J,{})})]})}),Te=function(e){var t=e.basePath;return Object(O.jsx)(R.Item,{name:"".concat(t,".required"),valuePropName:"checked",trigger:"onCheck",children:Object(O.jsx)(Le,{label:"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"})})},Ae=(n(85),function(e){var t=e.basePath,n=x().values,c=I()(n,"".concat(t,".type")),a=function(e){switch(e){case"string":case"password":return Ve;case"number":return Pe;case"phone":return qe;case"checkbox":return Te;case"select":return Fe;default:return function(){return null}}}(c);return Object(O.jsxs)("div",{className:"schema-field",children:[Object(O.jsx)("div",{className:"schema-field__required",children:Object(O.jsx)(Se,{basePath:t,type:c})}),Object(O.jsx)("div",{className:"schema-field__validation",children:Object(O.jsx)(a,{basePath:"".concat(t,".validation")})})]})}),Re=n.p+"static/media/delete.53330300.svg";n(86);function Je(e){var t=e.index,n=e.field,c=e.isOpened,a=e.isInvalid;return Object(O.jsxs)("div",{className:"field-header",children:[Object(O.jsxs)("div",{className:b("field-header__main",a&&!c&&"field-header__main_invalid"),children:["\u0421\u0432\u043e\u0439\u0441\u0442\u0432\u043e ",t,": ",n.label,n.type&&!c&&Object(O.jsxs)("p",{className:"fields-list-item__subtitle",children:[ke(n.type),"; ",n.key]})]}),Object(O.jsx)("div",{className:"fields-header__validation",children:c&&"\u0412\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u044f"})]})}var He=function(e){var t=e.className,n=e.fields,c=e.removeField,a=x(),r=a.errors,s=a.touched,i=n.length>1;return Object(O.jsx)(pe,{className:t,children:n.map((function(e,t){var n,a,l=null!==(n=null===(a=r.fields)||void 0===a?void 0:a[t])&&void 0!==n?n:{},u=Object.entries(m(l)).some((function(e){var n=Object(o.a)(e,2),c=n[0],a=n[1],r=I()(s,"fields[".concat(t,"].").concat(c));return a&&r}));return Object(O.jsx)(pe.Item,{id:t.toString(),className:"fields-list-item",title:function(n){return Object(O.jsx)(Je,{field:e,index:t+1,isOpened:n,isInvalid:u})},extra:i&&Object(O.jsx)("img",{src:Re,alt:"delete",onClick:function(){return c(t)},className:"fields-list-item__remove"}),children:Object(O.jsx)(Ae,{basePath:"fields[".concat(t,"]")})},t)}))})},Be=(n(87),{key:"",label:"",type:"string",validation:{},options:[{key:"",value:""}].concat()}),De={name:"",fields:[Object(u.a)({},Be)]},ze=function(e){var t=e.initialValues,n=void 0===t?De:t,c=e.controls,a=e.onSubmit;return Object(O.jsx)(R,{initialValues:n,onSubmit:a,children:function(e){e.values;var t=e.errors,n=t.fields&&t.fields.some((function(e){return Object.values(m(e)).some((function(e){return!!e}))}));return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(R.Item,{name:"name",label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u0445\u0435\u043c\u044b",className:"schema-name",schema:{type:"string",required:!0},children:Object(O.jsx)(J,{})}),Object(O.jsx)("div",{className:"divider"}),Object(O.jsxs)("div",{className:"schema-fields",children:[Object(O.jsx)("h2",{className:"heading-2",children:"\u0421\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0441\u0445\u0435\u043c\u044b"}),Object(O.jsx)("p",{className:"schema-fields__subtitle",children:"\u0421\u0445\u0435\u043c\u0430 \u0434\u043e\u043b\u0436\u043d\u0430 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u043d\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e"}),Object(O.jsx)(R.List,{name:"fields",children:function(e){var t=e.items,a=e.push,r=e.remove;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(He,{fields:t,removeField:r,className:"schema-fields__accordion"}),Object(O.jsxs)("div",{className:"schema-fields__controls",children:[Object(O.jsx)(f,{htmlType:"button",type:"secondary",disabled:n,onClick:function(){return a(Object(u.a)({},Be))},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u043e\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e"}),c]})]})}})]})]})}})},Me={response:null,error:null,isLoading:!1},Ue=function(){var e=Object(c.useState)(Me),t=Object(o.a)(e,2),n=t[0],a=t[1];return[n,function(){var e=Object($.a)(Z.a.mark((function e(t){var n;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a((function(e){return Object(u.a)(Object(u.a)({},e),{},{isLoading:!0})})),e.next=3,h(500);case 3:n=Object(u.a)(Object(u.a)({},t),{},{id:Date.now()}),me(n),a({response:n,isLoading:!1,error:t?null:new Error("\u0421\u0445\u0435\u043c\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430")});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()]};var Ge=function(){var e=Object(l.g)(),t=Ue(),n=Object(o.a)(t,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){a.response&&e.push("/schemas/".concat(a.response.id))}),[a]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(de,{}),Object(O.jsx)("div",{className:"content",children:Object(O.jsx)(ze,{onSubmit:r,controls:Object(O.jsx)(f,{disabled:a.isLoading,children:a.isLoading?"\u0421\u043e\u0445\u0440\u0430\u043d\u044f\u0435\u043c...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0441\u0445\u0435\u043c\u0443"})})})]})},Ke={response:null,error:null,isLoading:!1},Qe=function(){var e=Object(c.useState)(Ke),t=Object(o.a)(e,2),n=t[0],a=t[1];return[n,function(){var e=Object($.a)(Z.a.mark((function e(t){var n,c;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a((function(e){return Object(u.a)(Object(u.a)({},e),{},{isLoading:!0})})),e.next=3,h(500);case 3:n=be(),c=n.find((function(e){return e.id===t}))||null,a({response:c,isLoading:!1,error:c?null:new Error("\u0421\u0445\u0435\u043c\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430")});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()]},We=(n(88),n.p+"static/media/checkmark.50c9829f.svg"),Xe=(n(89),function(e){var t=e.label,n=e.checked,c=e.disabled,a=e.onCheck;return Object(O.jsxs)("div",{className:"checkbox-container",children:[Object(O.jsxs)("div",{className:b("checkbox",c&&"checkbox_disabled"),children:[Object(O.jsx)("input",{className:"checkbox__input",type:"checkbox",checked:n,disabled:c,onChange:function(e){return null===a||void 0===a?void 0:a(e.target.checked)}}),Object(O.jsx)("div",{className:"checkbox__control"}),Object(O.jsx)("img",{src:We,alt:"checkmark",className:"checkbox__checkmark"})]}),Object(O.jsx)(Ee,{disabled:c,children:t})]})});function Ye(e){return"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 ".concat(e.toLowerCase())}var Ze=function(e){var t=e.field;switch(t.type){case"string":return Object(O.jsx)(F,{name:t.key,label:t.label,schema:Object(u.a)({type:"string"},t.validation),children:Object(O.jsx)(J,{placeholder:Ye(t.label)})});case"password":return Object(O.jsx)(F,{name:t.key,label:t.label,schema:Object(u.a)({type:"string"},t.validation),children:Object(O.jsx)(z,{placeholder:Ye(t.label)})});case"phone":return Object(O.jsx)(F,{name:t.key,label:t.label,schema:Object(u.a)({type:"phone"},t.validation),children:Object(O.jsx)(J,{placeholder:Ye(t.label)})});case"number":return Object(O.jsx)(F,{name:t.key,label:t.label,schema:Object(u.a)({type:"number"},t.validation),children:Object(O.jsx)(Ie,{placeholder:Ye(t.label)})});case"select":return Object(O.jsx)(F,{name:t.key,label:t.label,schema:Object(u.a)({type:"select"},t.validation),valuePropName:"selected",trigger:"onSelect",children:Object(O.jsx)(Ne,{placeholder:Ye(t.label),options:t.options.map((function(e){return{label:e.value,value:e.key}}))})});case"checkbox":return Object(O.jsx)(F,{name:t.key,schema:Object(u.a)({type:"checkbox"},t.validation),valuePropName:"checked",trigger:"onCheck",children:Object(O.jsx)(Xe,{label:t.label})});default:return null}},$e=function(e){var t=e.schema,n=e.controls,c=e.onSubmit,a=e.onFail,r=t.fields,s=r.reduce((function(e,t){return e[t.key]=void 0,e}),{});return Object(O.jsx)(R,{initialValues:s,onSubmit:c,onFail:a,children:function(){return Object(O.jsxs)(O.Fragment,{children:[r.map((function(e){return Object(O.jsx)(Ze,{field:e},e.key)})),n]})}})},et=function(){var e=Qe(),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(l.i)().params,s=H(!1),i=Object(o.a)(s,2),u=i[0],d=i[1],j=H(!1),b=Object(o.a)(j,2),m=b[0],h=b[1];Object(c.useEffect)((function(){a(+r.id)}),[]);var v=n.response;return Object(O.jsxs)("div",{className:"schema-page",children:[Object(O.jsx)(de,{}),Object(O.jsx)("div",{className:"content",children:Object(O.jsxs)("div",{className:"schema-page__container",children:[n.isLoading&&"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...",n.error&&Object(O.jsx)(le,{type:"error",children:n.error.message}),v&&Object(O.jsxs)("div",{className:"schema-page-form",children:[Object(O.jsx)("h2",{className:"heading-2 schema-page-form__title",children:v.name}),Object(O.jsx)($e,{schema:v,onSubmit:function(){d.on(),h.off()},onFail:function(){h.on(),d.off()},controls:Object(O.jsx)(f,{className:"schema-page-form__controls",children:"\u0412\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u044f"})}),u&&Object(O.jsx)(le,{className:"schema-page-form__alert",type:"success",children:"\u0412\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u044f \u043f\u0440\u043e\u0439\u0434\u0435\u043d\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e!"}),m&&Object(O.jsx)(le,{className:"schema-page-form__alert",type:"error",children:"\u0412\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u044f \u043d\u0435 \u043f\u0440\u043e\u0439\u0434\u0435\u043d\u0430."})]})]})})]})},tt=function(e){var t=e.children,n=Object(d.a)(e,["children"]),c=W().token;return Object(O.jsx)(l.b,Object(u.a)(Object(u.a)({},n),{},{children:c?t:Object(O.jsx)(l.a,{to:"/"})}))};var nt=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)("div",{className:"container",children:Object(O.jsx)(X,{children:Object(O.jsx)(i.a,{children:Object(O.jsxs)(l.d,{children:[Object(O.jsx)(l.b,{exact:!0,path:"/",children:Object(O.jsx)(oe,{})}),Object(O.jsx)(tt,{exact:!0,path:"/schemas",children:Object(O.jsx)(fe,{})}),Object(O.jsx)(tt,{exact:!0,path:"/schemas/new",children:Object(O.jsx)(Ge,{})}),Object(O.jsx)(tt,{exact:!0,path:"/schemas/:id",children:Object(O.jsx)(et,{})})]})})})})})};s.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(nt,{})}),document.getElementById("root"))}},[[90,1,2]]]);
//# sourceMappingURL=main.7715433c.chunk.js.map