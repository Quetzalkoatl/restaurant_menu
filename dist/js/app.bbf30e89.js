(function(t){function e(e){for(var n,o,a=e[0],i=e[1],u=e[2],d=0,p=[];d<a.length;d++)o=a[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&p.push(s[o][0]),s[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);l&&l(e);while(p.length)p.shift()();return c.push.apply(c,u||[]),r()}function r(){for(var t,e=0;e<c.length;e++){for(var r=c[e],n=!0,a=1;a<r.length;a++){var i=r[a];0!==s[i]&&(n=!1)}n&&(c.splice(e--,1),t=o(o.s=r[0]))}return t}var n={},s={app:0},c=[];function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var l=i;c.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"0507":function(t,e,r){t.exports=r.p+"img/croquettes.c1d8af06.png"},"12d8":function(t,e,r){t.exports=r.p+"img/orange-juice.acdd41cf.png"},"1a20":function(t,e,r){t.exports=r.p+"img/waffles-honey.9675ee3d.png"},"1b7d":function(t,e,r){t.exports=r.p+"img/fried-shrimps.6d917295.png"},"1e77":function(t,e,r){t.exports=r.p+"img/coffee-cream.0d59bf34.png"},2730:function(t,e,r){t.exports=r.p+"img/caesar.67553a77.png"},"2e40":function(t,e,r){t.exports=r.p+"img/peasoup.355bb96e.png"},"30c8":function(t,e,r){t.exports=r.p+"img/pickled-zucchini.eafc7447.png"},3199:function(t,e,r){t.exports=r.p+"img/soup-with-meatballs.54da8195.png"},3963:function(t,e,r){t.exports=r.p+"img/cucumber-rolls.db3dbd7e.png"},"42fc":function(t,e,r){t.exports=r.p+"img/banana-pudding.6a132a8f.png"},"4a5e":function(t,e,r){t.exports=r.p+"img/beans-beef-salad.09f11f3d.png"},"4b02":function(t,e,r){t.exports=r.p+"img/milkshake.eea926ce.png"},"4dcd":function(t,e,r){t.exports=r.p+"img/borsh.6aeee044.png"},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),s=Object(n["g"])("div",{id:"nav"},null,-1);function c(t,e,r,c,o,a){var i=Object(n["x"])("Header"),u=Object(n["x"])("router-view");return Object(n["r"])(),Object(n["f"])(n["a"],null,[Object(n["i"])(i),Object(n["i"])(u),s],64)}var o={class:"header"},a=Object(n["g"])("div",{class:"popup-text"},[Object(n["g"])("p",null,"Заказ оформлен")],-1),i={class:"popup-sum"},u={class:"menu"},l=Object(n["g"])("p",{class:"menu-title"},"МЕНЮ",-1),d={class:"order"},p={class:"order-price"},f={class:"links"};function b(t,e,r,s,c,b){var g=Object(n["x"])("Popup"),m=Object(n["x"])("router-link");return Object(n["r"])(),Object(n["f"])("div",o,[c.popUpStatus?(Object(n["r"])(),Object(n["d"])(g,{key:0},{default:Object(n["C"])((function(){return[a,Object(n["g"])("div",i,[Object(n["g"])("p",null,"Сумма заказа: "+Object(n["z"])(b.orderPrice),1)]),Object(n["g"])("button",{onClick:e[0]||(e[0]=function(){return b.hidePopUp&&b.hidePopUp.apply(b,arguments)}),class:"btn-popup"},"Вернуться")]})),_:1})):Object(n["e"])("",!0),Object(n["g"])("div",u,[Object(n["i"])(m,{class:"router-to-main-page",to:"/"},{default:Object(n["C"])((function(){return[l]})),_:1}),Object(n["g"])("div",d,[Object(n["g"])("p",p,"ОБЩАЯ ЦЕНА ЗАКАЗА: "+Object(n["z"])(b.orderPrice),1),Object(n["g"])("button",{class:"btn-order",onClick:e[1]||(e[1]=function(){return b.orderIsDone&&b.orderIsDone.apply(b,arguments)})},"Оформить заказ"),Object(n["g"])("button",{class:"btn-abort",onClick:e[2]||(e[2]=function(){return b.orderIsAbort&&b.orderIsAbort.apply(b,arguments)})},"Отменить заказ")])]),Object(n["g"])("ul",f,[(Object(n["r"])(!0),Object(n["f"])(n["a"],null,Object(n["v"])(c.links,(function(t){return Object(n["r"])(),Object(n["f"])("li",{class:"link",key:t.alias},[Object(n["i"])(m,{class:"link",to:t.path},{default:Object(n["C"])((function(){return[Object(n["h"])(Object(n["z"])(t.title),1)]})),_:2},1032,["to"])])})),128))])])}var g={class:"popup"},m={class:"popup-inner"};function O(t,e){return Object(n["r"])(),Object(n["f"])("div",g,[Object(n["g"])("div",m,[Object(n["w"])(t.$slots,"default")])])}var h=r("6b0d"),j=r.n(h);const k={},v=j()(k,[["render",O]]);var P=v,S=[{title:"Супы",alias:"soups",path:"/soups"},{title:"Салаты",alias:"salads",path:"/salads"},{title:"Горячие закуски",alias:"hot-snacks",path:"/hot-snacks"},{title:"Холодные закуски",alias:"cold-snacks",path:"/cold-snacks"},{title:"Десерты",alias:"desserts",path:"/desserts"},{title:"Напитки",alias:"drinks",path:"/drinks"}],C={components:{Popup:P},data:function(){return{links:S,popUpStatus:!1}},computed:{orderPrice:function(){return this.$store.getters.priceCount}},methods:{orderIsDone:function(){this.popUpStatus=!0},orderIsAbort:function(){this.$store.state.orderPrice=0},hidePopUp:function(){this.popUpStatus=!1,this.$store.state.orderPrice=0}}};const x=j()(C,[["render",b]]);var y=x,$={components:{Header:y}};const w=j()($,[["render",c]]);var T=w,D=r("6c02"),L=r("9eb4"),_=r.n(L),H={class:"welcome"},U=Object(n["g"])("img",{class:"welcome-image",src:_.a,alt:"/"},null,-1),z=[U];function E(t,e){return Object(n["r"])(),Object(n["f"])("div",H,z)}const I={},M=j()(I,[["render",E]]);var A=M,J=(r("b0c0"),{class:"card-wrapper"}),q=["onClick"];function N(t,e,r,s,c,o){var a=Object(n["x"])("Card");return Object(n["r"])(),Object(n["f"])("div",J,[(Object(n["r"])(!0),Object(n["f"])(n["a"],null,Object(n["v"])(o.soupsList,(function(t,e){return Object(n["r"])(),Object(n["f"])("div",{class:"",key:t.id},[Object(n["i"])(a,{url:t.url,name:t.name,cost:t.cost},{default:Object(n["C"])((function(){return[Object(n["g"])("button",{class:"btn",onClick:function(t){return o.addToTheOrder(e)}},"Заказать",8,q)]})),_:2},1032,["url","name","cost"])])})),128))])}var B={class:"card"},F=["src"],G={class:"card-desc"},K={class:"card-name"},Q={class:"card-cost"};function R(t,e,r,s,c,o){return Object(n["r"])(),Object(n["f"])("div",B,[Object(n["g"])("img",{class:"card-title",src:r.url},null,8,F),Object(n["g"])("div",G,[Object(n["g"])("div",K,Object(n["z"])(r.name),1),Object(n["g"])("div",Q,"Стоимость "+Object(n["z"])(r.cost),1),Object(n["w"])(t.$slots,"default")])])}r("a9e3");var V={props:{name:{type:String},cost:{type:Number},url:{type:String}}};const W=j()(V,[["render",R]]);var X=W,Y={components:{Card:X},computed:{soupsList:function(){return this.$store.getters.getSoups}},methods:{addToTheOrder:function(t){this.$store.commit("setSoupPrice"),this.$store.state.orderPrice+=this.$store.getters.allSoupsPrices[t],this.$store.getters.allSoupsPrices.length=0}}};const Z=j()(Y,[["render",N]]);var tt=Z,et={class:"card-wrapper"},rt=["onClick"];function nt(t,e,r,s,c,o){var a=Object(n["x"])("Card");return Object(n["r"])(),Object(n["f"])("div",et,[(Object(n["r"])(!0),Object(n["f"])(n["a"],null,Object(n["v"])(o.saladsList,(function(t,e){return Object(n["r"])(),Object(n["f"])("div",{class:"",key:t.id},[Object(n["i"])(a,{url:t.url,name:t.name,cost:t.cost},{default:Object(n["C"])((function(){return[Object(n["g"])("button",{class:"btn",onClick:function(t){return o.addToTheOrder(e)}},"Заказать",8,rt)]})),_:2},1032,["url","name","cost"])])})),128))])}var st={components:{Card:X},computed:{saladsList:function(){return this.$store.getters.getSalads}},methods:{addToTheOrder:function(t){this.$store.commit("setSaladPrice"),this.$store.state.orderPrice+=this.$store.getters.allSaladsPrices[t],this.$store.getters.allSaladsPrices.length=0}}};const ct=j()(st,[["render",nt]]);var ot=ct,at={class:"card-wrapper"},it=["onClick"];function ut(t,e,r,s,c,o){var a=Object(n["x"])("Card");return Object(n["r"])(),Object(n["f"])("div",at,[(Object(n["r"])(!0),Object(n["f"])(n["a"],null,Object(n["v"])(o.hotSnacksList,(function(t,e){return Object(n["r"])(),Object(n["f"])("div",{class:"",key:t.id},[Object(n["i"])(a,{url:t.url,name:t.name,cost:t.cost},{default:Object(n["C"])((function(){return[Object(n["g"])("button",{class:"btn",onClick:function(t){return o.addToTheOrder(e)}},"Заказать",8,it)]})),_:2},1032,["url","name","cost"])])})),128))])}var lt={components:{Card:X},computed:{hotSnacksList:function(){return this.$store.getters.getHotSnacks}},methods:{addToTheOrder:function(t){this.$store.commit("setHotSnacksPrice"),this.$store.state.orderPrice+=this.$store.getters.allHotSnacksPrices[t],this.$store.getters.allHotSnacksPrices.length=0}}};const dt=j()(lt,[["render",ut]]);var pt=dt,ft={class:"card-wrapper"},bt=["onClick"];function gt(t,e,r,s,c,o){var a=Object(n["x"])("Card");return Object(n["r"])(),Object(n["f"])("div",ft,[(Object(n["r"])(!0),Object(n["f"])(n["a"],null,Object(n["v"])(o.coldSnacksList,(function(t,e){return Object(n["r"])(),Object(n["f"])("div",{class:"",key:t.id},[Object(n["i"])(a,{url:t.url,name:t.name,cost:t.cost},{default:Object(n["C"])((function(){return[Object(n["g"])("button",{class:"btn",onClick:function(t){return o.addToTheOrder(e)}},"Заказать",8,bt)]})),_:2},1032,["url","name","cost"])])})),128))])}var mt={components:{Card:X},computed:{coldSnacksList:function(){return this.$store.getters.getColdSnacks}},methods:{addToTheOrder:function(t){this.$store.commit("setColdSnacksPrice"),this.$store.state.orderPrice+=this.$store.getters.allColdSnacksPrices[t],this.$store.getters.allColdSnacksPrices.length=0}}};const Ot=j()(mt,[["render",gt]]);var ht=Ot,jt={class:"card-wrapper"},kt=["onClick"];function vt(t,e,r,s,c,o){var a=Object(n["x"])("Card");return Object(n["r"])(),Object(n["f"])("div",jt,[(Object(n["r"])(!0),Object(n["f"])(n["a"],null,Object(n["v"])(o.dessertsList,(function(t,e){return Object(n["r"])(),Object(n["f"])("div",{class:"",key:t.id},[Object(n["i"])(a,{url:t.url,name:t.name,cost:t.cost},{default:Object(n["C"])((function(){return[Object(n["g"])("button",{class:"btn",onClick:function(t){return o.addToTheOrder(e)}},"Заказать",8,kt)]})),_:2},1032,["url","name","cost"])])})),128))])}var Pt={components:{Card:X},computed:{dessertsList:function(){return this.$store.getters.getDesserts}},methods:{addToTheOrder:function(t){this.$store.commit("setDessertsPrice"),this.$store.state.orderPrice+=this.$store.getters.allDessertsPrices[t],this.$store.getters.allDessertsPrices.length=0}}};const St=j()(Pt,[["render",vt]]);var Ct=St,xt={class:"card-wrapper"},yt=["onClick"];function $t(t,e,r,s,c,o){var a=Object(n["x"])("Card");return Object(n["r"])(),Object(n["f"])("div",xt,[(Object(n["r"])(!0),Object(n["f"])(n["a"],null,Object(n["v"])(o.drinksList,(function(t,e){return Object(n["r"])(),Object(n["f"])("div",{class:"",key:t.id},[Object(n["i"])(a,{url:t.url,name:t.name,cost:t.cost},{default:Object(n["C"])((function(){return[Object(n["g"])("button",{class:"btn",onClick:function(t){return o.addToTheOrder(e)}},"Заказать",8,yt)]})),_:2},1032,["url","name","cost"])])})),128))])}var wt={components:{Card:X},computed:{drinksList:function(){return this.$store.getters.getDrinks}},methods:{addToTheOrder:function(t){this.$store.commit("setDrinksPrice"),this.$store.state.orderPrice+=this.$store.getters.allDrinksPrices[t],this.$store.getters.allDrinksPrices.length=0}}};const Tt=j()(wt,[["render",$t]]);var Dt=Tt,Lt=[{path:"/",name:"Home",component:A},{path:"/soups",name:"Soups",component:tt},{path:"/salads",name:"Salads",component:ot},{path:"/hot-snacks",name:"HotSnacks",component:pt},{path:"/cold-snacks",name:"ColdSnacks",component:ht},{path:"/desserts",name:"Desserts",component:Ct},{path:"/drinks",name:"Drinks",component:Dt}],_t=Object(D["a"])({history:Object(D["b"])("/"),routes:Lt}),Ht=_t,Ut=r("5502"),zt=(r("d3b7"),r("159b"),{state:{soups:[{id:1,name:"Борщ",cost:10,url:r("4dcd")},{id:2,name:"Гороховый суп",cost:8,url:r("2e40")},{id:3,name:"Рассольник",cost:7,url:r("c461")},{id:4,name:"Суп с фрикадельками",cost:12,url:r("3199")},{id:5,name:"Овощной суп с фасолью",cost:7,url:r("8914")}],allSoupsPrices:[]},mutations:{setSoupPrice:function(t){t.soups.forEach((function(e){return t.allSoupsPrices.push(e.cost)}))}},getters:{getSoups:function(t){return t.soups},allSoupsPrices:function(t){return t.allSoupsPrices},soupsLength:function(t){return t.soups.length}}}),Et={state:{salads:[{id:1,name:"Салат с говядиной",cost:16,url:r("4a5e")},{id:2,name:'Салат "Цезарь"',cost:12,url:r("2730")},{id:3,name:"Крабовый салат",cost:9,url:r("abea")},{id:4,name:"Селедка под шубой",cost:8,url:r("72b0")},{id:5,name:'Салат "Оливье"',cost:9,url:r("65ca")}],allSaladsPrices:[]},mutations:{setSaladPrice:function(t){t.salads.forEach((function(e){return t.allSaladsPrices.push(e.cost)}))}},getters:{getSalads:function(t){return t.salads},allSaladsPrices:function(t){return t.allSaladsPrices},saladsLength:function(t){return t.salads.length}}},It={state:{hotSnacks:[{id:1,name:"Крокеты",cost:7,url:r("0507")},{id:2,name:"Жареные креветки",cost:9,url:r("1b7d")},{id:3,name:"Горячая овощная закуска",cost:7,url:r("d62e")},{id:4,name:"Жюльен",cost:12,url:r("f13f")},{id:5,name:"Мясной пирог",cost:14,url:r("6905")}],allHotSnacksPrices:[]},mutations:{setHotSnacksPrice:function(t){t.hotSnacks.forEach((function(e){return t.allHotSnacksPrices.push(e.cost)}))}},getters:{getHotSnacks:function(t){return t.hotSnacks},allHotSnacksPrices:function(t){return t.allHotSnacksPrices},hotSnacksLength:function(t){return t.hotSnacks.length}}},Mt={state:{coldSnacks:[{id:1,name:"Сырные шарики",cost:8,url:r("ff52")},{id:2,name:"Крабовый торт",cost:12,url:r("cc82")},{id:3,name:"Огуречные роллы",cost:7,url:r("3963")},{id:4,name:"Рулеты из баклажанов",cost:9,url:r("7196")},{id:5,name:"Маринованные цукини",cost:7,url:r("30c8")}],allColdSnacksPrices:[]},mutations:{setColdSnacksPrice:function(t){t.coldSnacks.forEach((function(e){return t.allColdSnacksPrices.push(e.cost)}))}},getters:{getColdSnacks:function(t){return t.coldSnacks},allColdSnacksPrices:function(t){return t.allColdSnacksPrices},coldSnacksLength:function(t){return t.coldSnacks.length}}},At={state:{desserts:[{id:1,name:"Банановый пудинг",cost:10,url:r("42fc")},{id:2,name:"Сырники",cost:11,url:r("b888")},{id:3,name:"Вишневый пирог",cost:8,url:r("fd66")},{id:4,name:"Клубничный чизкейк",cost:10,url:r("88eb")},{id:5,name:"Вафли с медом",cost:9,url:r("1a20")}],allDessertsPrices:[]},mutations:{setDessertsPrice:function(t){t.desserts.forEach((function(e){return t.allDessertsPrices.push(e.cost)}))}},getters:{getDesserts:function(t){return t.desserts},allDessertsPrices:function(t){return t.allDessertsPrices},dessertsLength:function(t){return t.desserts.length}}},Jt={state:{drinks:[{id:1,name:"Кофе со сливками",cost:3,url:r("1e77")},{id:2,name:"Зеленый чай",cost:4,url:r("6e58")},{id:3,name:"Лимонад",cost:3,url:r("c13a")},{id:4,name:"Молочный коктейль",cost:6,url:r("4b02")},{id:5,name:"Апельсиновый сок",cost:4,url:r("12d8")}],allDrinksPrices:[]},mutations:{setDrinksPrice:function(t){t.drinks.forEach((function(e){return t.allDrinksPrices.push(e.cost)}))}},getters:{getDrinks:function(t){return t.drinks},allDrinksPrices:function(t){return t.allDrinksPrices},drinksLength:function(t){return t.drinks.length}}},qt=Object(Ut["a"])({modules:{soups:zt,salads:Et,hotSnacks:It,coldSnacks:Mt,desserts:At,drinks:Jt},state:{orderPrice:0},getters:{priceCount:function(t){return t.orderPrice}}});r("c1c3");Object(n["c"])(T).use(qt).use(Ht).mount("#app")},"65ca":function(t,e,r){t.exports=r.p+"img/olivier.5e3a5587.png"},6905:function(t,e,r){t.exports=r.p+"img/meat-pie.0d825fbf.png"},"6e58":function(t,e,r){t.exports=r.p+"img/green-tea.4cd91d37.png"},7196:function(t,e,r){t.exports=r.p+"img/eggplant-rolls.800662e7.png"},"72b0":function(t,e,r){t.exports=r.p+"img/herring-under-coat.eefc44a0.png"},"88eb":function(t,e,r){t.exports=r.p+"img/strawberry-cheesecake.046a02c4.png"},8914:function(t,e,r){t.exports=r.p+"img/wegetable-soup-with-beans.d0265ea4.png"},"9eb4":function(t,e,r){t.exports=r.p+"img/welcome.4434f4a8.png"},abea:function(t,e,r){t.exports=r.p+"img/crab-salad.1e7c5082.png"},b888:function(t,e,r){t.exports=r.p+"img/cheese-pancake.66652611.png"},c13a:function(t,e,r){t.exports=r.p+"img/lemonade.4b4cdd95.png"},c1c3:function(t,e,r){},c461:function(t,e,r){t.exports=r.p+"img/pickle.6c52f5d5.png"},cc82:function(t,e,r){t.exports=r.p+"img/crab-cake.f8302eae.png"},d62e:function(t,e,r){t.exports=r.p+"img/hot-wegetables.40ca7db6.png"},f13f:function(t,e,r){t.exports=r.p+"img/julienne.f450ac41.png"},fd66:function(t,e,r){t.exports=r.p+"img/cherry-pie.64a89efb.png"},ff52:function(t,e,r){t.exports=r.p+"img/cheese-rolls.2d00c953.png"}});
//# sourceMappingURL=app.bbf30e89.js.map