"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[417],{4254:function(n,r,t){t.d(r,{d5:function(){return v},X4:function(){return o},Y5:function(){return f},vw:function(){return p},Bt:function(){return d},fm:function(){return h}});var e=t(5861),a=t(4687),u=t.n(a),c=t(1243),i="https://api.themoviedb.org/3/",s="053b6502bd056126a1f9a95166dc9ace",o=function(){var n=(0,e.Z)(u().mark((function n(){var r,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(i,"trending/movie/week"),{params:{api_key:s}});case 2:return r=n.sent,t=r.data.results,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(u().mark((function n(){var r,t,e,a=arguments;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=a.length>0&&void 0!==a[0]?a[0]:"",n.next=3,c.Z.get("".concat(i,"search/movie"),{params:{api_key:s,query:r}});case 3:return t=n.sent,e=t.data.results,n.abrupt("return",e);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(u().mark((function n(){var r,t,e=arguments;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.length>0&&void 0!==e[0]?e[0]:"",n.next=3,c.Z.get("".concat(i,"movie/").concat(r),{params:{api_key:s}});case 3:return t=n.sent,n.abrupt("return",t.data);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),v=function(){var n=(0,e.Z)(u().mark((function n(){var r,t,e=arguments;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.length>0&&void 0!==e[0]?e[0]:"",n.next=3,c.Z.get("".concat(i,"movie/").concat(r,"/credits"),{params:{api_key:s}});case 3:return t=n.sent,n.abrupt("return",t.data.cast);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(u().mark((function n(){var r,t,e,a=arguments;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=a.length>0&&void 0!==a[0]?a[0]:"",n.next=3,c.Z.get("".concat(i,"/movie/").concat(r,"/reviews"),{params:{api_key:s}});case 3:return t=n.sent,e=t.data.results,n.abrupt("return",e);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),h=function(){var n=(0,e.Z)(u().mark((function n(){var r,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(i,"configuration"),{params:{api_key:s}});case 2:return r=n.sent,t=r.data.images,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()},417:function(n,r,t){t.r(r),t.d(r,{default:function(){return v}});var e,a=t(9439),u=t(2791),c=t(7689),i=t(4254),s=t(6226),o=t(168),p=t(6444).ZP.li(e||(e=(0,o.Z)(["\n    display: flex;\n    gap: 10px; \n    margin-bottom: 10px;\n    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.14) 0px 1px 1px, rgba(0, 0, 0, 0.2) 0px 2px 1px;\n"]))),f=t(184),v=function(){var n=(0,c.UO)().movieId,r=(0,u.useState)([]),t=(0,a.Z)(r,2),e=t[0],o=t[1],v=(0,u.useRef)(),d=(0,u.useRef)();return(0,u.useEffect)((function(){(0,i.d5)(n).then((function(n){return o(n)})),(0,i.fm)().then((function(n){var r=n.logo_sizes,t=n.base_url;v.current=t,d.current=r[s.$.LESSSMALL]}))}),[n]),(0,f.jsx)("ul",{children:e.map((function(n){var r;return(0,f.jsxs)(p,{children:[(0,f.jsx)("img",{src:"".concat(v.current).concat(d.current).concat(null!==(r=n.profile_path)&&void 0!==r?r:""),alt:n.name}),(0,f.jsxs)("div",{children:[(0,f.jsx)("p",{children:n.name}),(0,f.jsxs)("p",{children:["Character: ",n.character]})]})]},n.id)}))})}},6226:function(n,r,t){t.d(r,{$:function(){return e}});var e={SMALLEST:0,LESSSMALL:1,SMALL:2,AVERAGE:3,LARGER:4,BIG:5,BIGGEST:6,ORIGINAL:7}}}]);
//# sourceMappingURL=417.1f99949b.chunk.js.map