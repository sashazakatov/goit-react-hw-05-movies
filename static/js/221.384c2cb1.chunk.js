"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[221],{4254:function(n,t,r){r.d(t,{d5:function(){return v},X4:function(){return s},Y5:function(){return f},vw:function(){return p},Bt:function(){return d},fm:function(){return h}});var e=r(5861),a=r(4687),u=r.n(a),c=r(1243),i="https://api.themoviedb.org/3/",o="053b6502bd056126a1f9a95166dc9ace",s=function(){var n=(0,e.Z)(u().mark((function n(){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(i,"trending/movie/week"),{params:{api_key:o}});case 2:return t=n.sent,r=t.data.results,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(u().mark((function n(){var t,r,e,a=arguments;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",n.next=3,c.Z.get("".concat(i,"search/movie"),{params:{api_key:o,query:t}});case 3:return r=n.sent,e=r.data.results,n.abrupt("return",e);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(u().mark((function n(){var t,r,e=arguments;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.length>0&&void 0!==e[0]?e[0]:"",n.next=3,c.Z.get("".concat(i,"movie/").concat(t),{params:{api_key:o}});case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),v=function(){var n=(0,e.Z)(u().mark((function n(){var t,r,e=arguments;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.length>0&&void 0!==e[0]?e[0]:"",n.next=3,c.Z.get("".concat(i,"movie/").concat(t,"/credits"),{params:{api_key:o}});case 3:return r=n.sent,n.abrupt("return",r.data.cast);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(u().mark((function n(){var t,r,e,a=arguments;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",n.next=3,c.Z.get("".concat(i,"/movie/").concat(t,"/reviews"),{params:{api_key:o}});case 3:return r=n.sent,e=r.data.results,n.abrupt("return",e);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),h=function(){var n=(0,e.Z)(u().mark((function n(){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(i,"configuration"),{params:{api_key:o}});case 2:return t=n.sent,r=t.data.images,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()},6130:function(n,t,r){r.d(t,{Z:function(){return s}});var e,a=r(7689),u=r(1087),c=r(168),i=r(6444).ZP.li(e||(e=(0,c.Z)(["\n    padding: 8px 0px;\n"]))),o=r(184),s=function(n){var t=n.movies,r=(0,a.TH)();return(0,o.jsx)("ul",{children:t.map((function(n){var t=n.id,e=n.title;return(0,o.jsx)(i,{children:(0,o.jsx)(u.OL,{to:"/movies/".concat(t),state:{from:r},children:e})},t)}))})}},9221:function(n,t,r){r.r(t),r.d(t,{default:function(){return v}});var e,a=r(9439),u=r(2791),c=r(4254),i=r(6130),o=r(927),s=r(168),p=r(6444).ZP.h2(e||(e=(0,s.Z)(["\n    text-align: center;\n    margin-bottom: 14px;\n"]))),f=r(184),v=function(){var n=(0,u.useState)([]),t=(0,a.Z)(n,2),r=t[0],e=t[1],s=(0,u.useState)(!1),v=(0,a.Z)(s,2),d=v[0],h=v[1];return(0,u.useEffect)((function(){(0,c.X4)().then((function(n){return h(!0),e(n)})).catch().finally((function(){return h(!1)}))}),[]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(p,{children:"Trending today"}),d&&(0,f.jsx)(o.Z,{}),!d&&(0,f.jsx)(i.Z,{movies:r})]})}}}]);
//# sourceMappingURL=221.384c2cb1.chunk.js.map