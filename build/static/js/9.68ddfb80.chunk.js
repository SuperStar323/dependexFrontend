(this["webpackJsonpdependex-frontend"]=this["webpackJsonpdependex-frontend"]||[]).push([[9],{257:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return S}));var n=t(32),c=t.n(n),s=t(44),r=t(42),i=t(0),l=t.n(i),o=t(176),j=t(247),m=t(154),h=t(157),b=t(158),d=t(60),x=t(162),u=t(248),O=t(255),p=t(205),f=t.n(p),N=t(207),y=t.n(N),g=function(){var e=Object(s.a)(c.a.mark((function e(a,t,n){var s,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s={method:a,url:n,data:t},e.next=3,y()(s);case 3:if(200!==(r=e.sent).status||!r.data){e.next=8;break}return e.abrupt("return",r.data);case 8:return e.abrupt("return",{status:!1});case 9:case"end":return e.stop()}}),e)})));return function(a,t,n){return e.apply(this,arguments)}}(),v="https://dependex.com/",w=t(1);function S(){var e=Object(i.useState)([]),a=Object(r.a)(e,2),t=a[0],n=a[1],p=Object(i.useState)(1),N=Object(r.a)(p,2),y=N[0],S=N[1],k=Object(i.useState)(10),C=Object(r.a)(k,1)[0],$=Object(i.useState)(10),B=Object(r.a)($,2),P=B[0],E=B[1],F=[{name:"Price:",data:[47,45,52,56,24,65,32,38,54,56,45,32]}];Object(i.useEffect)((function(){function e(){return(e=Object(s.a)(c.a.mark((function e(){var a,t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={start:y,limit:C,convert:"USD"},e.next=3,g("POST",a,v+"admin/api/getAssets");case 3:!0===(t=e.sent).status&&(E(Number((t.count/C).toFixed())),n(t.data));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[y,C]);var J=function(e,a){S(C*(a-1)+1)},A=function(e){for(var a={chart:{toolbar:{show:!1},sparkline:{enabled:!0}},colors:["#f4772e"],stroke:{width:2,curve:"smooth"},xaxis:{categories:[]}},t=0;t<100;t++)a.xaxis.categories.push(e);return a};return Object(w.jsxs)(l.a.Fragment,{children:[Object(w.jsxs)(j.a,{container:!0,spacing:3,children:[Object(w.jsx)(j.a,{item:!0,md:6,children:Object(w.jsx)(h.a,{className:"bg-transparent box-shadow-none home-border-item",children:Object(w.jsxs)(b.a,{className:"d-flex align-items-center",children:[Object(w.jsx)(o.a,{className:"home-balance-icon-p d-flex justify-content-center align-items-center",children:Object(w.jsx)(x.a,{className:"home-balance-icon"})}),Object(w.jsxs)(o.a,{className:"ml-1",children:[Object(w.jsx)(d.a,{variant:"h5",className:"font-weight-bold home-balance-type",children:"Crypto Balance"}),Object(w.jsx)(d.a,{variant:"h5",className:"home-balance-money",children:"$ 0.00"})]})]})})}),Object(w.jsx)(j.a,{item:!0,md:6,children:Object(w.jsx)(h.a,{className:"bg-transparent box-shadow-none home-border-item",children:Object(w.jsxs)(b.a,{className:"d-flex align-items-center",children:[Object(w.jsx)(o.a,{className:"home-balance-icon-p d-flex justify-content-center align-items-center",children:Object(w.jsx)(u.a,{className:"home-balance-icon"})}),Object(w.jsxs)(o.a,{className:"ml-1",children:[Object(w.jsx)(d.a,{variant:"h5",className:"font-weight-bold home-balance-type",children:"Save & Earn Balance"}),Object(w.jsx)(d.a,{variant:"h5",className:"home-balance-money",children:"$ 0.00"})]})]})})})]}),Object(w.jsx)(o.a,{className:"d-flex justify-content-end p-1",children:Object(w.jsx)(O.a,{count:P,color:"primary",boundaryCount:2,onChange:J})}),t.map((function(e,a){return Object(w.jsxs)(j.a,{container:!0,spacing:3,children:[Object(w.jsx)(j.a,{item:!0,md:3,children:Object(w.jsx)(h.a,{className:"bg-transparent box-shadow-none home-border-item",children:Object(w.jsxs)(b.a,{className:"home-card-content",children:[Object(w.jsxs)(o.a,{className:"d-flex align-items-center",children:[Object(w.jsx)(o.a,{className:"home-currency-icon-p d-flex justify-content-center align-items-center",children:Object(w.jsx)("img",{src:e.img,alt:"",className:"home-balance-icon"})}),Object(w.jsx)(d.a,{variant:"h5",className:"home-balance-type font-weight-bold",children:e.name})]}),Object(w.jsxs)(o.a,{className:"ml-2",children:[Object(w.jsxs)(d.a,{variant:"h5",className:"font-weight-bold home-balance-type",children:["$",e.usdt]}),Object(w.jsxs)(d.a,{variant:"h6",className:"home-balance-money",children:[e.crypto,e.currency]})]})]})})}),Object(w.jsx)(j.a,{item:!0,md:9,children:Object(w.jsx)(h.a,{className:"bg-transparent box-shadow-none home-border-item",children:Object(w.jsx)(b.a,{className:"home-card-content d-flex",children:Object(w.jsxs)(j.a,{container:!0,children:[Object(w.jsxs)(j.a,{item:!0,md:2,children:[Object(w.jsxs)(d.a,{variant:"h6",className:"home-balance-money",children:[e.currency," Price"]}),Object(w.jsxs)(d.a,{variant:"h5",className:"font-weight-bold home-balance-type",children:["$",e.price]}),Object(w.jsx)(d.a,{variant:"h6",className:"home-balance-money",children:e.time})]}),Object(w.jsx)(j.a,{item:!0,md:8,children:Object(w.jsx)(f.a,{options:A(e.name),series:F,type:"line",height:100})}),Object(w.jsxs)(j.a,{item:!0,md:2,className:"d-flex justify-content-center align-items-center",children:[Object(w.jsx)(m.a,{className:"theme-full-btn color-white",variant:"contained",children:" Buy "}),Object(w.jsx)(m.a,{className:"theme-empty-btn",variant:"contained",children:" Swap "})]})]})})})})]},a)})),Object(w.jsx)(o.a,{className:"d-flex justify-content-end p-1",children:Object(w.jsx)(O.a,{count:P,color:"primary",boundaryCount:2,onChange:J})})]})}}}]);
//# sourceMappingURL=9.68ddfb80.chunk.js.map