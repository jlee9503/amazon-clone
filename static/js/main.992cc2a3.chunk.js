(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[0],{42:function(e,a,t){e.exports=t(74)},47:function(e,a,t){},48:function(e,a,t){},49:function(e,a,t){},65:function(e,a,t){},66:function(e,a,t){},67:function(e,a,t){},68:function(e,a,t){},70:function(e,a,t){},71:function(e,a,t){},72:function(e,a,t){},74:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(34),r=t.n(l),i=(t(47),t(35)),m=t(5),s=(t(48),t(49),t(36)),o=t.n(s),u=t(37),d=t.n(u),p=t(10),E=Object(n.createContext)(),g=function(e){var a=e.reducer,t=e.initialState,l=e.children;return c.a.createElement(E.Provider,{value:Object(n.useReducer)(a,t)},l)},h=function(){return Object(n.useContext)(E)},v=t(27),f=t.n(v),b=(f.a.initializeApp({apiKey:"AIzaSyDB_DLOr0mBejvhUOZagZo7Z_3HgadEWK8",authDomain:"clone-challenge-a7b75.firebaseapp.com",databaseURL:"https://clone-challenge-a7b75.firebaseio.com",projectId:"clone-challenge-a7b75",storageBucket:"clone-challenge-a7b75.appspot.com",messagingSenderId:"970523870455",appId:"1:970523870455:web:c66b3424389de3e1ddfff2",measurementId:"G-3CFTK00YHE"}).firestore(),f.a.auth());var N=function(){var e=h(),a=Object(m.a)(e,2),t=a[0],n=t.basket,l=t.user;return a[1],c.a.createElement("div",{className:"header"},c.a.createElement(p.b,{to:"/"},c.a.createElement("img",{src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png",alt:"amazon-logo",className:"header-logo"})),c.a.createElement("div",{className:"header-search"},c.a.createElement("input",{className:"header-searchInput",type:"text"}),c.a.createElement(o.a,{className:"header-searchIcon"})),c.a.createElement("div",{className:"header-nav"},c.a.createElement(p.b,{to:!l&&"/login"},c.a.createElement("div",{className:"header-option",onClick:function(){b.signOut()}},c.a.createElement("span",{className:"header-optionOne"},l?"Hello, ".concat(l.email):"Hello, Guest"),c.a.createElement("span",{className:"header-optionTwo"},l?"Sign Out":"Sign In"))),c.a.createElement("div",{className:"header-option"},c.a.createElement("span",{className:"header-optionOne"},"Returns"),c.a.createElement("span",{className:"header-optionTwo"},"& Orders")),c.a.createElement("div",{className:"header-option"},c.a.createElement("span",{className:"header-optionOne"},"Your"),c.a.createElement("span",{className:"header-optionTwo"},"Prime")),c.a.createElement(p.b,{to:"/checkout"},c.a.createElement("div",{className:"header-basketOption"},c.a.createElement(d.a,null),c.a.createElement("span",{className:"header-optionTwo header-basketCount"},n.length)))))};t(65),t(66);var k=function(e){var a=e.id,t=e.title,n=e.image,l=e.price,r=e.rating,i=h(),s=Object(m.a)(i,2),o=(s[0].basket,s[1]);return c.a.createElement("div",{className:"product"},c.a.createElement("div",{className:"product-info"},c.a.createElement("p",{className:"info-description"},t),c.a.createElement("p",{className:"product-price"},c.a.createElement("small",null,"$"),c.a.createElement("strong",null,l)),c.a.createElement("div",{className:"product-rating"},Array(r).fill().map((function(e,a){return c.a.createElement("p",{key:a},"\u2b50")})))),c.a.createElement("img",{src:n,alt:"product-img"}),c.a.createElement("button",{onClick:function(){o({type:"ADD_TO_BASKET",item:{id:a,title:t,image:n,price:l,rating:r}})}},"Add to Basket"))},_=t(38),y=t.n(_),C=t(39),O=t.n(C);var j=function(){var e=[{url:"https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2020/TV/BRND/BRND_MTH20_00000_GWBleedingHero_1500x600_Final_en-US_PVD5529_B._CB406173267_.jpg"},{url:"https://images-na.ssl-images-amazon.com/images/G/01/kindle/education/merch/gw/GW_Hero_Holiday_Light_Math_D1x._CB404344480_.jpg"},{url:"https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/YzExNTRjZmUt/YzExNTRjZmUt-ZWRmYzNiOWQt-w1500._CB418546933_.jpg"},{url:"https://images-na.ssl-images-amazon.com/images/G/01/handmade/2020/Campaigns/Fall/HM_Fall_GW_Hero_1500x600._CB404788167_.jpg"}],a=Object(n.useState)(0),t=Object(m.a)(a,2),l=t[0],r=t[1];return c.a.createElement("div",{className:"home"},c.a.createElement("div",{className:"home-container"},c.a.createElement("div",{className:"slider"},e.map((function(e,a){return c.a.createElement("div",{key:a,className:"img-container",style:{transform:"translateX(".concat(l,"%)")}},c.a.createElement("img",{src:e.url,alt:"home_banner",className:"home-image"}))})),c.a.createElement(y.a,{className:"btn-left",onClick:function(){r(0===l?-100*(e.length-1):l+100)}}),c.a.createElement(O.a,{className:"btn-right",onClick:function(){l===-100*(e.length-1)?r(0):r(l-100)}})),c.a.createElement("div",{className:"home-row"},c.a.createElement(k,{id:"1",title:"GTRACING Gaming Chair Racing Office Computer Game Chair Ergonomic Backrest and Seat Height Adjustment Recliner Swivel Rocker with Headrest and Lumbar Pillow E-Sports Chair Red",price:159.98,image:"https://images-na.ssl-images-amazon.com/images/I/619sWFsXJ%2BL._AC_SY550_.jpg",rating:5}),c.a.createElement(k,{id:"2",title:"Razer Huntsman Elite Gaming Keyboard: Fastest Keyboard Switches Ever - Clicky Optical Switches - Chroma RGB Lighting - Magnetic Plush Wrist Rest - Dedicated Media Keys & Dial - Classic Black",price:167.99,image:"https://images-na.ssl-images-amazon.com/images/I/816YWjgTuJL._AC_SL1500_.jpg",rating:4})),c.a.createElement("div",{className:"home-row"},c.a.createElement(k,{id:"3",title:"InnoGear Essential Oil Diffuser, Basic White",price:14.99,image:"https://m.media-amazon.com/images/I/51IwYHykGqL._AC_AA180_.jpg",rating:5}),c.a.createElement(k,{id:"4",title:"APOSEN Cordless Vacuum Cleaner, Powerful Suction Lightweight",price:72.24,image:"https://m.media-amazon.com/images/I/51mCuHop-ZL._AC_AA180_.jpg",rating:3}),c.a.createElement(k,{id:"5",title:"Clorox Disinfecting Wipes Value Pack, 75 Ct Each, Pack of 3 (Package May Vary)",price:17.99,image:"https://m.media-amazon.com/images/I/81PCyDvvn0L._AC_AA180_.jpg",rating:5})),c.a.createElement("div",{className:"home-row"},c.a.createElement(k,{id:"6",title:"LG 34WN650-W 34-Inch 21:9 UltraWide Full HD (2560 x 1080) IPS Display with VESA DisplayHDR 400 and AMD FreeSync, Silver",price:398.99,image:"https://m.media-amazon.com/images/I/81GrL4IJNjL._AC_UY218_.jpg",rating:5}))))};t(67),t(68);var A=function(e){var a=e.id,t=e.title,n=e.image,l=e.price,r=e.rating,i=h(),s=Object(m.a)(i,2),o=(s[0].basket,s[1]);return c.a.createElement("div",{className:"checkoutProduct"},c.a.createElement("img",{className:"product-img",src:n,alt:"product-image"}),c.a.createElement("div",{className:"product-info"},c.a.createElement("p",{className:"product-title"},t),c.a.createElement("p",null,c.a.createElement("small",null,"$"),c.a.createElement("strong",null,l)),c.a.createElement("div",{className:"product-rating"},Array(r).fill().map((function(e){return c.a.createElement("p",null,"\u2b50")}))),c.a.createElement("button",{onClick:function(){o({type:"REMOVE_FROM_BASKET",id:a})}},"Remove from Basket")))},S=t(40),w=t.n(S),B=(t(70),t(30)),z=t(17),I=function(e){return e.reduce((function(e,a){return a.price+e}),0)},R="ADD_TO_BASKET",T="REMOVE_FROM_BASKET",D="SET_USER",P=function(e,a){switch(a.type){case R:return Object(z.a)(Object(z.a)({},e),{},{basket:[].concat(Object(B.a)(e.basket),[a.item])});case T:var t=e.basket.findIndex((function(e){return e.id===a.id})),n=Object(B.a)(e.basket);return t>=0?n.splice(t,1):console.warn("This product (id: ".concat(a.id,") does not exist in the shopping list")),Object(z.a)(Object(z.a)({},e),{},{basket:n});case D:return Object(z.a)(Object(z.a)({},e),{},{user:a.user});default:return e}},G=t(4);var x=function(){var e=h(),a=Object(m.a)(e,2),t=a[0].basket,n=(a[1],Object(G.f)());return c.a.createElement("div",{className:"subtotal"},c.a.createElement(w.a,{renderText:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"Subtotal (",t.length," items): ",c.a.createElement("strong",null,e)),c.a.createElement("small",{className:"subtotal-gift"},c.a.createElement("input",{type:"checkbox"}),"This order contains a gift"))},decimalScale:2,value:I(t),displayType:"text",thousandSeparator:!0,prefix:"$"}),c.a.createElement("button",{onClick:function(e){return n.push("/payment")}},"Proceed to Checkout"))};var W=function(){var e=h(),a=Object(m.a)(e,2),t=a[0].basket;return a[1],c.a.createElement("div",{className:"checkout"},c.a.createElement("div",{className:"checkout-left"},c.a.createElement("div",null,c.a.createElement("img",{className:"checkout-ad",src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg",alt:"checkout-ad"})),c.a.createElement("div",null,c.a.createElement("h2",{className:"checkout-title"},"your shopping basket"),t.map((function(e){return c.a.createElement(A,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})})))),c.a.createElement("div",{className:"checkout-right"},c.a.createElement(x,null)))};t(71);var H=function(){var e=Object(n.useState)(""),a=Object(m.a)(e,2),t=a[0],l=a[1],r=Object(n.useState)(""),i=Object(m.a)(r,2),s=i[0],o=i[1],u=Object(G.f)();return c.a.createElement("div",{className:"login"},c.a.createElement(p.b,{to:"/"},c.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",alt:"amazon-logo",className:"login-logo"})),c.a.createElement("div",{className:"login-container"},c.a.createElement("h1",null,"Sign-In"),c.a.createElement("form",null,c.a.createElement("h5",null,"E-mail"),c.a.createElement("input",{type:"text",value:t,onChange:function(e){return l(e.target.value)}}),c.a.createElement("h5",null,"Password"),c.a.createElement("input",{type:"password",value:s,onChange:function(e){return o(e.target.value)}}),c.a.createElement("button",{type:"submit",onClick:function(e){e.preventDefault(),b.signInWithEmailAndPassword(t,s).then((function(e){e&&u.push("/")})).catch((function(e){return alert(e.message)}))}},"Sign In")),c.a.createElement("p",null,"By signing-in you agree to the Amazon Clone Project conditions of use & sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice."),c.a.createElement("button",{className:"sign-up-button",onClick:function(e){e.preventDefault(),b.createUserWithEmailAndPassword(t,s).then((function(e){e&&u.push("/")})).catch((function(e){return alert(e.message)}))}},"Create your Amazon Account")))};t(72);var M=function(){var e=h(),a=Object(m.a)(e,2),t=a[0],n=t.basket,l=t.user;return a[1],c.a.createElement("div",{className:"payment"},c.a.createElement("div",{className:"page-title"},c.a.createElement("h2",null,"Checkout (",c.a.createElement(p.b,{to:"/checkout",className:"total-items"},null===n||void 0===n?void 0:n.length," items"),")")),c.a.createElement("div",{className:"payment-container"},c.a.createElement("div",{className:"payment-section"},c.a.createElement("div",{className:"payment-title"},c.a.createElement("h3",null,"Delivery Address")),c.a.createElement("div",{className:"delivery-address"},c.a.createElement("p",null,null===l||void 0===l?void 0:l.email),c.a.createElement("p",null,"1234 Test Address"),c.a.createElement("p",null,"Baltimore, MD"))),c.a.createElement("div",{className:"payment-section"},c.a.createElement("div",{className:"payment-title"},c.a.createElement("h3",null,"Payment Method")),c.a.createElement("div",{className:"payment-info"})),c.a.createElement("div",{className:"payment-section"},c.a.createElement("div",{className:"payment-title"},c.a.createElement("h3",null,"Review your items")),c.a.createElement("div",{className:"payment-item"},n.map((function(e){return c.a.createElement(A,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))))),c.a.createElement("div",{className:"back-to-checkout"},c.a.createElement("button",null,c.a.createElement(p.b,{to:"/checkout",className:"back-to-checkout-button"},"Go Back to Checkout Page"))))};var L=function(){var e=h(),a=Object(m.a)(e,2);Object(i.a)(a[0]);var t=a[1];return Object(n.useEffect)((function(){b.onAuthStateChanged((function(e){t(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),c.a.createElement(p.a,null,c.a.createElement("div",{className:"app"},c.a.createElement(G.c,null,c.a.createElement(G.a,{path:"/login"},c.a.createElement(H,null)),c.a.createElement(G.a,{path:"/checkout"},c.a.createElement(N,null),c.a.createElement(W,null)),c.a.createElement(G.a,{path:"/payment"},c.a.createElement(N,null),c.a.createElement(M,null)),c.a.createElement(G.a,{path:"/"},c.a.createElement(N,null),c.a.createElement(j,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(g,{initialState:{basket:[],user:""},reducer:P},c.a.createElement(L,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.992cc2a3.chunk.js.map