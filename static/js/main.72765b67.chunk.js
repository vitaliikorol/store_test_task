(this.webpackJsonpstore_test_task=this.webpackJsonpstore_test_task||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){e.exports=a(29)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var r=a(0),s=a.n(r),i=a(9),l=a.n(i),n=a(12),c=(a(18),a(19),a(2)),o=(a(20),function(){var e=Object(r.useState)(!1),t=Object(c.a)(e,2),a=t[0],i=t[1],l=function(){i((function(e){return!e}))};return s.a.createElement(s.a.Fragment,null,s.a.createElement("button",{type:"button",className:"Cart",onClick:l},s.a.createElement("img",{src:"https://raw.githubusercontent.com/vitaliikorol/store_test_task/master/public/images/icons/cart.png",alt:"cart",className:"Cart__logo"}),s.a.createElement("span",{className:"Cart__quantity"},"1")),s.a.createElement("aside",{className:"Cart__body",style:{top:a?"0":"-100vh"}},s.a.createElement("div",{className:"Cart__body_close cbc"},s.a.createElement("button",{type:"button",onClick:l,className:"cbc__button"},s.a.createElement("img",{src:"https://raw.githubusercontent.com/vitaliikorol/store_test_task/master/public/images/icons/close.png",alt:"close",className:"cbc__button_img"}))),s.a.createElement("button",{type:"button",className:"Cart__body_buy"},"\u041a\u0443\u043f\u0438\u0442\u044c")))}),m=function(){return s.a.createElement("header",{className:"Header"},s.a.createElement("div",{className:"Header__empty"}),s.a.createElement("img",{src:"https://raw.githubusercontent.com/vitaliikorol/store_test_task/master/public/images/icons/logo.png",alt:"Yamamoto logo",className:"Header__logo"}),s.a.createElement(o,null))},_=(a(21),a(22),function(e){var t=e.activeView,a=e.setActiveView,i=e.viewSort,l=e.setViewSort,n=Object(r.useState)(!0),o=Object(c.a)(n,2),m=o[0],_=o[1],u=function(e){a(e)};return s.a.createElement("aside",{className:"SideBar"},s.a.createElement("ul",{className:"SideBar__list"},s.a.createElement("li",{className:"SideBar__list_item",style:{fontWeight:"All"===t?"bold":"lighter"},onClick:function(){return u("All")}},"\u0412\u0441\u0435"),s.a.createElement("li",{className:"SideBar__list_item",style:{fontWeight:"Coats"===t?"bold":"lighter"},onClick:function(){return u("Coats")}},"\u041f\u043b\u0430\u0449\u0438"),s.a.createElement("li",{className:"SideBar__list_item",style:{fontWeight:"Sneakers"===t?"bold":"lighter"},onClick:function(){return u("Sneakers")}},"\u041a\u0440\u043e\u0441\u0441\u043e\u0432\u043a\u0438"),s.a.createElement("li",{className:"SideBar__list_item",style:{fontWeight:"Shirts"===t?"bold":"lighter"},onClick:function(){return u("Shirts")}},"\u0420\u0443\u0431\u0430\u0448\u043a\u0438"),s.a.createElement("li",{className:"SideBar__list_item",style:{fontWeight:"Trousers"===t?"bold":"lighter"},onClick:function(){return u("Trousers")}},"\u0411\u0440\u044e\u043a\u0438")),s.a.createElement("button",{className:"SideBar__sort",onClick:function(){_((function(e){return!e})),l(m)}},"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c ",s.a.createElement("img",{src:"https://raw.githubusercontent.com/vitaliikorol/store_test_task/master/public/images/icons/up-arrow.png",alt:"\u2191",style:{transform:i?"rotate(180deg)":""},className:"SideBar__sort_img"})),s.a.createElement("div",{className:"SideBar__sort_wrapper"},s.a.createElement("ul",{className:"SideBar__list SideBar__sort_list",style:{top:i?"0":"-190px"}},s.a.createElement("li",{className:"SideBar__list_item SideBar__sort_list-item"},"\u041e\u0442 \u0434\u043e\u0440\u043e\u0433\u0438\u0445 \u043a \u0434\u0435\u0448\u0435\u0432\u044b\u043c"),s.a.createElement("li",{className:"SideBar__list_item SideBar__sort_list-item"},"\u041e\u0442 \u0434\u0435\u0448\u0435\u0432\u044b\u0445 \u043a \u0434\u043e\u0440\u043e\u0433\u0438\u043c"),s.a.createElement("li",{className:"SideBar__list_item SideBar__sort_list-item"},"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435"),s.a.createElement("li",{className:"SideBar__list_item SideBar__sort_list-item"},"\u041d\u043e\u0432\u044b\u0435"))))}),u=s.a.createContext(fetch("https://raw.githubusercontent.com/vitaliikorol/store_test_task/master/public/api/products.json").then((function(e){return e.json()}))),d=(a(23),a(10)),b=a.n(d),g=function(e){var t=e.item,a=Object(r.useState)(t.product_images[0]),i=Object(c.a)(a,2),l=i[0],n=i[1];return s.a.createElement("section",{className:"ProductCard"},s.a.createElement("img",{src:l,alt:"",className:"ProductCard__image"}),s.a.createElement("div",{className:"ProductCard__slider ProdSlider"},s.a.createElement("button",{className:"ProdSlider__button"},s.a.createElement("img",{src:"https://raw.githubusercontent.com/vitaliikorol/store_test_task/master/public/images/icons/up-arrow.png",alt:"\u2190",className:"ProdSlider__button ProdSlider__button_left"})),s.a.createElement("ul",{className:"ProdSlider__list"},t.product_images.map((function(e){return s.a.createElement("li",{className:b()(l===e?"ProdSlider__list_item ProdSlider__list_item-active":"ProdSlider__list_item"),onClick:function(){n(e)}},s.a.createElement("img",{src:e,alt:"",className:"ProdSlider__list_item-image"}))}))),s.a.createElement("button",{className:"ProdSlider__button"},s.a.createElement("img",{src:"https://raw.githubusercontent.com/vitaliikorol/store_test_task/master/public/images/icons/up-arrow.png",alt:"\u2190",className:"ProdSlider__button ProdSlider__button_right"}))))},E=function(){var e=Object(r.useState)([]),t=Object(c.a)(e,2),a=t[0],i=t[1],l=Object(r.useState)("All"),n=Object(c.a)(l,2),o=n[0],m=n[1],d=Object(r.useState)(!1),b=Object(c.a)(d,2),E=b[0],S=b[1],p=Object(r.useContext)(u);return Object(r.useEffect)((function(){p.then((function(e){return i(e)}))}),[p]),s.a.createElement("main",{className:"Main"},s.a.createElement(_,{activeView:o,setActiveView:m,viewSort:E,setViewSort:S}),s.a.createElement("div",{className:"Main__catalog"},a.map((function(e){return s.a.createElement(g,{item:e})}))))},S=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(m,null),s.a.createElement(E,null))};l.a.render(s.a.createElement(n.a,{basename:"/store_test_task"},s.a.createElement(S,null)),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.72765b67.chunk.js.map