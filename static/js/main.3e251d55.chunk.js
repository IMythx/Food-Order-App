(this["webpackJsonpfood-order-app"]=this["webpackJsonpfood-order-app"]||[]).push([[0],[,,,,function(t,e,a){t.exports={form:"Checkout_form__1j8Qc",control:"Checkout_control__2uf86",actions:"Checkout_actions__2FJHb",submit:"Checkout_submit__Vza6D",invalid:"Checkout_invalid__3Wc4b"}},,,,function(t,e,a){t.exports={"cart-items":"Cart_cart-items__18jAY",total:"Cart_total__2X19i",actions:"Cart_actions__3tyJC","button--alt":"Cart_button--alt__33Jn8",button:"Cart_button__1dvXM"}},,function(t,e,a){t.exports={"cart-item":"CartItem_cart-item__hav9g",summary:"CartItem_summary__5mS28",price:"CartItem_price__1WR5g",amount:"CartItem_amount__jZUFe",actions:"CartItem_actions__3LAGm"}},function(t,e,a){t.exports={button:"HeaderCartButton_button__he3Kf",icon:"HeaderCartButton_icon__2TYtA",badge:"HeaderCartButton_badge__Ukjny",bump:"HeaderCartButton_bump__3_PH_"}},,function(t,e,a){t.exports={meal:"MealItem_meal__2eClG",description:"MealItem_description__3Ov3h",price:"MealItem_price__1lpXG"}},function(t,e,a){t.exports={meals:"AvailableMeals_meals__2Czk6","meals-appear":"AvailableMeals_meals-appear__1O8R2",mealsLoading:"AvailableMeals_mealsLoading__3olgl"}},function(t,e,a){t.exports={backdrop:"Modal_backdrop__2zCkY",modal:"Modal_modal__2DR3T","slide-down":"Modal_slide-down__3IlrO"}},,,,function(t,e,a){t.exports={header:"Header_header__fWVXF","main-image":"Header_main-image__3eupu"}},,,,,,,function(t,e,a){t.exports={summary:"MealsSummary_summary__2ZLYL"}},function(t,e,a){t.exports={card:"Card_card__3CzKo"}},function(t,e,a){t.exports={input:"Input_input__w1Fxj"}},function(t,e,a){t.exports={form:"MealItemForm_form__30fPm"}},,,,,,,,function(t,e,a){},,,,,,,function(t,e,a){"use strict";a.r(e);var c=a(23),n=a.n(c),i=(a(37),a(1)),r=a(0),s=function(){return Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(r.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},o=a(11),l=a.n(o),d=a(2),u=a(5),m=Object(u.b)({name:"ui",initialState:{showCart:!1},reducers:{showCart:function(t){t.showCart=!0},hideCart:function(t){t.showCart=!1}}}),j=m,b=m.actions,h=a(7),O=Object(u.b)({name:"cart",initialState:{cartItems:[],totalPrice:0,totalAmount:0,isCheckOut:!1,cartButtonIsHighlighted:!1},reducers:{addItem:function(t,e){t.totalAmount=t.totalAmount+e.payload.amount,t.totalPrice=t.totalPrice+e.payload.price*e.payload.amount;var a=t.cartItems.findIndex((function(t){return t.id===e.payload.id}));if(-1!==a){var c=Object(h.a)({},t.cartItems[a]);c.amount=c.amount+e.payload.amount;var n=t.cartItems.slice();n[a]=c,t.cartItems=n}else t.cartItems.push(e.payload)},removeItem:function(t,e){var a=e.payload,c=t.cartItems.find((function(t){return t.id===a}));t.totalPrice=t.totalPrice-c.price,t.totalAmount--,c.amount>1?c.amount--:t.cartItems=t.cartItems.filter((function(t){return t.id!==a}))},clearCart:function(t){t.cartItems=[],t.totalAmount=0,t.totalPrice=0},checkOut:function(t){t.isCheckOut=!t.isCheckOut},highlightButton:function(t){t.cartButtonIsHighlighted=!t.cartButtonIsHighlighted}}}),f=O.actions,p=O,x=function(){var t=Object(d.b)(),e=Object(d.c)((function(t){return t.cart.totalAmount})),a=Object(d.c)((function(t){return t.cart})),c=a.cartButtonIsHighlighted,n=a.cartItems;return Object(i.useEffect)((function(){if(0!==n.length){t(f.highlightButton());var e=setTimeout((function(){t(f.highlightButton())}),300);return function(){clearTimeout(e)}}}),[t,n]),Object(r.jsxs)("button",{className:"".concat(l.a.button," ").concat(c&&l.a.bump),onClick:function(){t(b.showCart())},children:[Object(r.jsx)("span",{className:l.a.icon,children:Object(r.jsx)(s,{})}),Object(r.jsx)("span",{children:"Your Cart"}),Object(r.jsx)("span",{className:l.a.badge,children:e})]})},_=a.p+"static/media/meals.2971f633.jpg",v=a(19),C=a.n(v),g=function(t){return Object(r.jsxs)(i.Fragment,{children:[Object(r.jsxs)("header",{className:C.a.header,children:[Object(r.jsx)("h1",{children:"ReactMeals"}),Object(r.jsx)(x,{})]}),Object(r.jsx)("div",{className:C.a["main-image"],children:Object(r.jsx)("img",{src:_,alt:"A table full of delicious food!"})})]})},I=a(26),y=a.n(I),N=function(){return Object(r.jsxs)("section",{className:y.a.summary,children:[Object(r.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(r.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(r.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},k=a(27),S=a.n(k),w=function(t){return Object(r.jsx)("div",{className:S.a.card,children:t.children})},M=a(28),F=a.n(M),A=Object(i.forwardRef)((function(t,e){return Object(r.jsxs)("div",{className:F.a.input,children:[Object(r.jsx)("label",{htmlFor:t.input.id,children:t.label}),Object(r.jsx)("input",Object(h.a)(Object(h.a)({},t.input),{},{ref:e}))]})})),H=a(29),P=a.n(H),V=Object(i.forwardRef)((function(t,e){return Object(r.jsxs)("form",{className:P.a.form,onSubmit:t.onSubmit,children:[Object(r.jsx)(A,{label:"Amount",input:{id:"amount_"+t.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"},ref:e}),Object(r.jsx)("button",{children:"+ Add"})]})})),B=a(13),L=a.n(B),R=function(t){var e=Object(i.useRef)(),a=Object(d.b)(),c="$".concat(t.price.toFixed(2));return Object(r.jsxs)("li",{className:L.a.meal,children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:t.name}),Object(r.jsx)("div",{className:L.a.description,children:t.description}),Object(r.jsx)("div",{className:L.a.price,children:c})]}),Object(r.jsx)("div",{children:Object(r.jsx)(V,{id:t.id,ref:e,onSubmit:function(c){c.preventDefault(),a(f.addItem({name:t.name,price:t.price,amount:+e.current.value,id:t.id}))}})})]})},z=a(14),D=a.n(z),T=a(20),Y=a(30),J=Object(u.b)({name:"meals",initialState:{avaliableMeals:[],isLoading:!0},reducers:{Loaded:function(t){t.isLoading=!1},addMeals:function(t,e){var a=e.payload;for(var c in a)t.avaliableMeals.push({id:c,name:a[c].name,price:a[c].price,description:a[c].description})}}}),E=J,X=J.actions,G=function(){return function(){var t=Object(Y.a)(Object(T.a)().mark((function t(e){var a;return Object(T.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://meals-fa0e1-default-rtdb.europe-west1.firebasedatabase.app/meals.json");case 2:return t.next=4,t.sent.json();case 4:return a=t.sent,t.next=7,e(X.addMeals(a));case 7:e(X.Loaded());case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},W=function(){var t=Object(d.c)((function(t){return t.meals.avaliableMeals})),e=Object(d.c)((function(t){return t.meals.isLoading})),a=Object(d.b)();Object(i.useEffect)((function(){a(G())}),[a]);var c=t.map((function(t){return Object(r.jsx)(R,{id:t.id,name:t.name,description:t.description,price:t.price},t.id)}));return e?Object(r.jsx)("section",{className:D.a.meals,children:Object(r.jsx)("p",{className:D.a.mealsLoading,children:"Loading..."})}):Object(r.jsx)("section",{className:D.a.meals,children:Object(r.jsx)(w,{children:Object(r.jsx)("ul",{children:c})})})},$=function(){return Object(r.jsxs)(i.Fragment,{children:[Object(r.jsx)(N,{}),Object(r.jsx)(W,{})]})},K=a(9),U=a.n(K),Z=a(15),q=a.n(Z),Q=Object(u.b)({name:"checkout",initialState:{nameIsValid:!0,streetIsValid:!0,postalCodeIsValid:!0,cityIsValid:!0,isSubmitting:!1,didSubmit:!1},reducers:{validateInputs:function(t,e){t.nameIsValid=""!==e.payload.name.trim(),t.streetIsValid=""!==e.payload.street.trim(),t.postalCodeIsValid=e.payload.code.trim()>=5,t.cityIsValid=""!==e.payload.city.trim()},submitting:function(t){t.isSubmitting=!t.isSubmitting},submited:function(t){t.didSubmit=!t.didSubmit}}}),tt=Q.actions,et=Q,at=function(t){return function(e){t&&(e(tt.submited()),e(f.clearCart()),e(f.checkOut())),e(b.hideCart())}},ct=function(){var t=Object(d.b)(),e=Object(d.c)((function(t){return t.checkout})).didSubmit;return Object(r.jsx)("div",{className:q.a.backdrop,onClick:function(){t(at(e))}})},nt=function(t){return Object(r.jsx)("div",{className:q.a.modal,children:Object(r.jsx)("div",{className:q.a.content,children:t.children})})},it=document.getElementById("overlays"),rt=function(t){return Object(r.jsxs)(i.Fragment,{children:[U.a.createPortal(Object(r.jsx)(ct,{}),it),U.a.createPortal(Object(r.jsx)(nt,{children:t.children}),it)]})},st=a(8),ot=a.n(st),lt=a(10),dt=a.n(lt),ut=function(t){var e="$".concat(t.price.toFixed(2)),a=Object(d.b)();return Object(r.jsxs)("li",{className:dt.a["cart-item"],children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:t.name}),Object(r.jsxs)("div",{className:dt.a.summary,children:[Object(r.jsx)("span",{className:dt.a.price,children:e}),Object(r.jsxs)("span",{className:dt.a.amount,children:["x ",t.amount]})]})]}),Object(r.jsxs)("div",{className:dt.a.actions,children:[Object(r.jsx)("button",{onClick:function(){a(f.removeItem(t.id))},children:"\u2212"}),Object(r.jsx)("button",{onClick:function(){a(f.addItem({name:t.name,price:t.price,amount:1,id:t.id}))},children:"+"})]})]})},mt=a(4),jt=a.n(mt),bt=function(t){var e=t.name,a=t.street,c=t.code,n=t.city;return function(i){if(i(tt.validateInputs({name:e,street:a,code:c,city:n})),""!==e.trim()&&""!==a.trim()&&""!==n.trim()&&c.trim().length>=5){i(tt.submitting());var r={userData:{name:t.name,street:t.street,code:t.code,city:t.city},orderedItems:t.orderedItems};fetch("https://orders-1a4a4-default-rtdb.europe-west1.firebasedatabase.app/orders.json",{method:"POST",body:JSON.stringify(r)}),i(tt.submitting()),i(tt.submited())}}},ht=function(){var t=Object(i.useRef)(),e=Object(i.useRef)(),a=Object(i.useRef)(),c=Object(i.useRef)(),n=Object(d.c)((function(t){return t.checkout})),s=n.nameIsValid,o=n.streetIsValid,l=n.postalCodeIsValid,u=n.cityIsValid,m=Object(d.c)((function(t){return t.cart.cartItems})),j=Object(d.b)(),h="".concat(jt.a.control," ").concat(s?"":jt.a.invalid),O="".concat(jt.a.control," ").concat(o?"":jt.a.invalid),p="".concat(jt.a.control," ").concat(l?"":jt.a.invalid),x="".concat(jt.a.control," ").concat(u?"":jt.a.invalid);return Object(r.jsxs)("form",{className:jt.a.form,onSubmit:function(n){n.preventDefault(),j(bt({name:t.current.value,street:e.current.value,code:a.current.value,city:c.current.value,orderedItems:m}))},children:[Object(r.jsxs)("div",{className:h,children:[Object(r.jsx)("label",{htmlFor:"name",children:"Your Name"}),Object(r.jsx)("input",{type:"text",id:"name",ref:t}),!s&&Object(r.jsx)("p",{children:"Please enter a valid name!"})]}),Object(r.jsxs)("div",{className:O,children:[Object(r.jsx)("label",{htmlFor:"street",children:"Street"}),Object(r.jsx)("input",{type:"text",id:"street",ref:e}),!o&&Object(r.jsx)("p",{children:"Please enter a valid street!"})]}),Object(r.jsxs)("div",{className:p,children:[Object(r.jsx)("label",{htmlFor:"postal",children:"Postal Code"}),Object(r.jsx)("input",{type:"text",id:"postal",ref:a}),!l&&Object(r.jsx)("p",{children:"Please enter a valid postal code (5 characters long)!"})]}),Object(r.jsxs)("div",{className:x,children:[Object(r.jsx)("label",{htmlFor:"city",children:"City"}),Object(r.jsx)("input",{type:"text",id:"city",ref:c}),!u&&Object(r.jsx)("p",{children:"Please enter a valid city!"})]}),Object(r.jsxs)("div",{className:jt.a.actions,children:[Object(r.jsx)("button",{type:"button",onClick:function(){j(b.hideCart()),j(f.checkOut())},children:"Cancel"}),Object(r.jsx)("button",{className:jt.a.submit,children:"Confirm"})]})]})},Ot=function(){var t=Object(d.b)(),e=Object(d.c)((function(t){return t.checkout})),a=e.isSubmitting,c=e.didSubmit,n=Object(d.c)((function(t){return t.cart.totalPrice})),s=Object(d.c)((function(t){return t.cart.cartItems})),o=Object(d.c)((function(t){return t.cart.isCheckOut})),l=Object(r.jsx)("ul",{className:ot.a["cart-items"],children:s.map((function(t){return Object(r.jsx)(ut,{id:t.id,name:t.name,amount:t.amount,price:t.price},t.id)}))}),u=Object(r.jsxs)(i.Fragment,{children:[" ",l,Object(r.jsxs)("div",{className:ot.a.total,children:[Object(r.jsx)("span",{children:"Total Amount"}),Object(r.jsx)("span",{children:"$".concat(Math.abs(n).toFixed(2))})]}),o&&Object(r.jsx)(ht,{}),Object(r.jsxs)("div",{className:ot.a.actions,children:[!o&&Object(r.jsx)("button",{className:ot.a["button--alt"],onClick:function(){t(b.hideCart())},children:"Close"}),!o&&Object(r.jsx)("button",{className:ot.a.button,onClick:function(){0!==s.length&&t(f.checkOut())},children:"Order"})]})]}),m=Object(r.jsx)("p",{children:"Sending order data..."}),j=Object(r.jsxs)(i.Fragment,{children:[Object(r.jsx)("p",{children:"Successfully sent the order!"}),Object(r.jsx)("div",{className:ot.a.actions,children:Object(r.jsx)("button",{className:ot.a.button,onClick:function(){t(b.hideCart()),t(tt.submited()),t(f.clearCart()),t(f.checkOut())},children:"Close"})})]});return Object(r.jsxs)(rt,{children:[!a&&!c&&u,a&&!c&&m,!a&&c&&j]})};var ft=function(){var t=Object(d.c)((function(t){return t.ui.showCart}));return Object(r.jsxs)(i.Fragment,{children:[t&&Object(r.jsx)(Ot,{}),Object(r.jsx)(g,{}),Object(r.jsx)("main",{children:Object(r.jsx)($,{})})]})},pt=Object(u.a)({reducer:{ui:j.reducer,cart:p.reducer,meals:E.reducer,checkout:et.reducer}});n.a.createRoot(document.getElementById("root")).render(Object(r.jsx)(d.a,{store:pt,children:Object(r.jsx)(ft,{})}))}],[[44,1,2]]]);
//# sourceMappingURL=main.3e251d55.chunk.js.map