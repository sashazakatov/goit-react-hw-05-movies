"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[202],{4254:function(n,e,r){r.d(e,{d5:function(){return d},X4:function(){return o},Y5:function(){return l},vw:function(){return p},Bt:function(){return f},fm:function(){return v}});var t=r(5861),a=r(4687),i=r.n(a),c=r(1243),s="https://api.themoviedb.org/3/",u="053b6502bd056126a1f9a95166dc9ace",o=function(){var n=(0,t.Z)(i().mark((function n(){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(s,"trending/movie/week"),{params:{api_key:u}});case 2:return e=n.sent,r=e.data.results,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(i().mark((function n(){var e,r,t,a=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:"",n.next=3,c.Z.get("".concat(s,"search/movie"),{params:{api_key:u,query:e}});case 3:return r=n.sent,t=r.data.results,n.abrupt("return",t);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(i().mark((function n(){var e,r,t=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.length>0&&void 0!==t[0]?t[0]:"",n.next=3,c.Z.get("".concat(s,"movie/").concat(e),{params:{api_key:u}});case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(i().mark((function n(){var e,r,t=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.length>0&&void 0!==t[0]?t[0]:"",n.next=3,c.Z.get("".concat(s,"movie/").concat(e,"/credits"),{params:{api_key:u}});case 3:return r=n.sent,n.abrupt("return",r.data.cast);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(i().mark((function n(){var e,r,t,a=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:"",n.next=3,c.Z.get("".concat(s,"/movie/").concat(e,"/reviews"),{params:{api_key:u}});case 3:return r=n.sent,t=r.data.results,n.abrupt("return",t);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),v=function(){var n=(0,t.Z)(i().mark((function n(){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(s,"configuration"),{params:{api_key:u}});case 2:return e=n.sent,r=e.data.images,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()},6226:function(n,e,r){r.d(e,{$:function(){return t}});var t={SMALLEST:0,LESSSMALL:1,SMALL:2,AVERAGE:3,LARGER:4,BIG:5,BIGGEST:6,ORIGINAL:7}},6202:function(n,e,r){r.r(e),r.d(e,{default:function(){return y}});var t,a,i,c,s,u,o=r(9439),p=r(2791),l=r(7689),d=r(4254),f=r(6226),v=r(927),h=r(168),x=r(6444),g=r(1087),m=(0,x.ZP)(g.OL)(t||(t=(0,h.Z)(["\n    padding: 4px 8px;\n    border-radius: 4px;\n    color: white;\n    font-weight: 500;\n    background-color: orangered;\n"]))),w=(0,x.ZP)(g.rU)(a||(a=(0,h.Z)(["\n    padding: 4px 8px;\n    border-radius: 4px;\n    color: white;\n    font-weight: 500;\n    background-color: orangered;\n    margin: 0px 5px;\n"]))),Z=x.ZP.h1(i||(i=(0,h.Z)(["\n    text-align: center;\n    font-size: 25px;\n"]))),j=x.ZP.div(c||(c=(0,h.Z)(["\n    display: flex;\n    flex-wrap: nowrap ;\n    justify-content: center;\n    align-items: center;\n    gap : 10px;\n"]))),_=x.ZP.div(s||(s=(0,h.Z)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n"]))),k=x.ZP.span(u||(u=(0,h.Z)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n"]))),b=r(184),y=function(){var n,e,r=(0,l.UO)("").movieId,t=(0,p.useState)(null),a=(0,o.Z)(t,2),i=a[0],c=a[1],s=(0,p.useRef)(null),u=(0,p.useRef)(null),h=null!==(n=null===(e=(0,l.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";return(0,p.useEffect)((function(){(0,d.fm)().then((function(n){var e=n.backdrop_sizes,r=n.base_url;s.current=r,u.current=e[f.$.SMALLEST]})),(0,d.Y5)(r).then((function(n){var e=n.title,r=n.release_date,t=n.poster_path,a=n.overview,i=n.genres,s=n.vote_average;return c({title:e,release_date:r,poster_path:t,overview:a,genres:i,vote_average:s})}))}),[r]),(0,b.jsxs)("div",{children:[!i&&(0,b.jsx)(v.Z,{}),i&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(m,{to:h,children:"Go back"}),(0,b.jsxs)(j,{children:[(0,b.jsxs)(_,{children:[(0,b.jsxs)(Z,{children:[i.title," (",i.release_date.slice(0,4),")"]}),(0,b.jsx)("img",{src:"".concat(s.current).concat(u.current).concat(i.poster_path),alt:i.title,width:300}),(0,b.jsxs)("p",{children:["User Score: ",parseInt(10*i.vote_average),"%"]})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("h2",{children:"Overview"}),(0,b.jsx)("p",{children:null===i||void 0===i?void 0:i.overview}),(0,b.jsx)("h2",{children:"Genres:"}),(0,b.jsx)("ul",{children:null===i||void 0===i?void 0:i.genres.map((function(n){var e=n.id,r=n.name;return(0,b.jsx)("li",{children:r},e)}))})]})]}),(0,b.jsxs)(k,{children:[(0,b.jsx)("h2",{children:"Additional infoemation"}),(0,b.jsxs)("span",{children:[(0,b.jsx)(w,{to:"cast",children:"Cast"}),(0,b.jsx)(w,{to:"reviews",children:"Reviews"})]})]}),(0,b.jsx)(p.Suspense,{fallback:(0,b.jsx)(v.Z,{}),children:(0,b.jsx)(l.j3,{})})]})]})}}}]);
//# sourceMappingURL=202.387861ee.chunk.js.map