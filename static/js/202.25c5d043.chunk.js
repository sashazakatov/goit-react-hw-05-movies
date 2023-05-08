"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[202],{4254:function(e,n,r){r.d(n,{d5:function(){return d},X4:function(){return o},Y5:function(){return l},vw:function(){return p},Bt:function(){return f},fm:function(){return v}});var t=r(5861),a=r(4687),c=r.n(a),i=r(1243),s="https://api.themoviedb.org/3/",u="053b6502bd056126a1f9a95166dc9ace",o=function(){var e=(0,t.Z)(c().mark((function e(){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"trending/movie/week"),{params:{api_key:u}});case 2:return n=e.sent,r=n.data.results,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(c().mark((function e(){var n,r,t,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>0&&void 0!==a[0]?a[0]:"",e.next=3,i.Z.get("".concat(s,"search/movie"),{params:{api_key:u,query:n}});case 3:return r=e.sent,t=r.data.results,e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(c().mark((function e(){var n,r,t=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.length>0&&void 0!==t[0]?t[0]:"",e.next=3,i.Z.get("".concat(s,"movie/").concat(n),{params:{api_key:u}});case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)(c().mark((function e(){var n,r,t=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.length>0&&void 0!==t[0]?t[0]:"",e.next=3,i.Z.get("".concat(s,"movie/").concat(n,"/credits"),{params:{api_key:u}});case 3:return r=e.sent,e.abrupt("return",r.data.cast);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(c().mark((function e(){var n,r,t,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>0&&void 0!==a[0]?a[0]:"",e.next=3,i.Z.get("".concat(s,"/movie/").concat(n,"/reviews"),{params:{api_key:u}});case 3:return r=e.sent,t=r.data.results,e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=(0,t.Z)(c().mark((function e(){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"configuration"),{params:{api_key:u}});case 2:return n=e.sent,r=n.data.images,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},6226:function(e,n,r){r.d(n,{$:function(){return t}});var t={SMALLEST:0,LESSSMALL:1,SMALL:2,AVERAGE:3,LARGER:4,BIG:5,BIGGEST:6,ORIGINAL:7}},6202:function(e,n,r){r.r(n),r.d(n,{default:function(){return y}});var t,a,c,i,s,u,o=r(9439),p=r(2791),l=r(7689),d=r(4254),f=r(6226),v=r(927),h=r(168),x=r(6444),g=r(1087),m=(0,x.ZP)(g.OL)(t||(t=(0,h.Z)(["\n    padding: 4px 8px;\n    border-radius: 4px;\n    color: white;\n    font-weight: 500;\n    background-color: orangered;\n"]))),w=(0,x.ZP)(g.rU)(a||(a=(0,h.Z)(["\n    padding: 4px 8px;\n    border-radius: 4px;\n    color: white;\n    font-weight: 500;\n    background-color: orangered;\n    margin: 0px 5px;\n"]))),Z=x.ZP.h1(c||(c=(0,h.Z)(["\n    text-align: center;\n    font-size: 25px;\n"]))),j=x.ZP.div(i||(i=(0,h.Z)(["\n    display: flex;\n    flex-wrap: nowrap ;\n    justify-content: center;\n    align-items: center;\n    gap : 10px;\n"]))),_=x.ZP.div(s||(s=(0,h.Z)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n"]))),k=x.ZP.span(u||(u=(0,h.Z)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n"]))),b=r(184),y=function(){var e,n,r=(0,l.UO)("").movieId,t=(0,p.useState)(null),a=(0,o.Z)(t,2),c=a[0],i=a[1],s=(0,p.useRef)(null),u=(0,p.useRef)(null),h=(0,l.TH)(),x=(0,p.useRef)(null!==(e=null===(n=h.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/");return(0,p.useEffect)((function(){(0,d.fm)().then((function(e){var n=e.backdrop_sizes,r=e.base_url;s.current=r,u.current=n[f.$.SMALLEST]})),(0,d.Y5)(r).then((function(e){var n=e.title,r=e.release_date,t=e.poster_path,a=e.overview,c=e.genres,s=e.vote_average;return i({title:n,release_date:r,poster_path:t,overview:a,genres:c,vote_average:s})}))}),[r]),(0,b.jsxs)("div",{children:[!c&&(0,b.jsx)(v.Z,{}),c&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(m,{to:x.current,children:"Go back"}),(0,b.jsxs)(j,{children:[(0,b.jsxs)(_,{children:[(0,b.jsxs)(Z,{children:[c.title," (",c.release_date.slice(0,4),")"]}),(0,b.jsx)("img",{src:"".concat(s.current).concat(u.current).concat(c.poster_path),alt:c.title,width:300}),(0,b.jsxs)("p",{children:["User Score: ",parseInt(10*c.vote_average),"%"]})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("h2",{children:"Overview"}),(0,b.jsx)("p",{children:null===c||void 0===c?void 0:c.overview}),(0,b.jsx)("h2",{children:"Genres:"}),(0,b.jsx)("ul",{children:null===c||void 0===c?void 0:c.genres.map((function(e){var n=e.id,r=e.name;return(0,b.jsx)("li",{children:r},n)}))})]})]}),(0,b.jsxs)(k,{children:[(0,b.jsx)("h2",{children:"Additional infoemation"}),(0,b.jsxs)("span",{children:[(0,b.jsx)(w,{to:"cast",state:{form:x.current},children:"Cast"}),(0,b.jsx)(w,{to:"reviews",state:{form:x.current},children:"Reviews"})]})]}),(0,b.jsx)(p.Suspense,{fallback:(0,b.jsx)(v.Z,{}),children:(0,b.jsx)(l.j3,{})})]})]})}}}]);
//# sourceMappingURL=202.25c5d043.chunk.js.map