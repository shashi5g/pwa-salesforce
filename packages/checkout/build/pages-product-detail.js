"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[7],{7427:(e,t,r)=>{r.r(t),r.d(t,{default:()=>q});var a=r(4572),l=r(5861),n=r(7294),o=r(5697),i=r.n(o),c=r(4593),d=r(6896),s=r(4012),u=r(6915),m=r(7747),p=r(9653),g=r(9391),E=r(7636),f=r(8462),y=r(352),h=r(6256),b=r(7962),v=r(8644),_=r(4092),x=r(2215),O=r(8087),P=r(4071),S=r(7334),L=r(2671);const C=({product:e})=>{const{formatMessage:t}=(0,d.Z)();return n.createElement(p.K,{direction:"row",spacing:[0,0,0,16]},n.createElement(x.U,{allowMultiple:!0,maxWidth:"896px",flex:[1,1,1,5]},n.createElement(O.Q,null,n.createElement("h2",null,n.createElement(P.K,{height:"64px"},n.createElement(m.xu,{flex:"1",textAlign:"left",fontWeight:"bold",fontSize:"lg"},t({defaultMessage:[{type:0,value:"Product Detail"}],id:"product_detail.accordion.button.product_detail"})),n.createElement(S.X,null))),n.createElement(L.H,{mb:6,mt:4},n.createElement("div",{dangerouslySetInnerHTML:{__html:null==e?void 0:e.longDescription}}))),n.createElement(O.Q,null,n.createElement("h2",null,n.createElement(P.K,{height:"64px"},n.createElement(m.xu,{flex:"1",textAlign:"left",fontWeight:"bold",fontSize:"lg"},t({defaultMessage:[{type:0,value:"Size & Fit"}],id:"product_detail.accordion.button.size_fit"})),n.createElement(S.X,null))),n.createElement(L.H,{mb:6,mt:4},t({defaultMessage:[{type:0,value:"Coming Soon"}],id:"product_detail.accordion.message.coming_soon"}))),n.createElement(O.Q,null,n.createElement("h2",null,n.createElement(P.K,{height:"64px"},n.createElement(m.xu,{flex:"1",textAlign:"left",fontWeight:"bold",fontSize:"lg"},t({defaultMessage:[{type:0,value:"Reviews"}],id:"product_detail.accordion.button.reviews"})),n.createElement(S.X,null))),n.createElement(L.H,{mb:6,mt:4},t({defaultMessage:[{type:0,value:"Coming Soon"}],id:"product_detail.accordion.message.coming_soon"}))),n.createElement(O.Q,null,n.createElement("h2",null,n.createElement(P.K,{height:"64px"},n.createElement(m.xu,{flex:"1",textAlign:"left",fontWeight:"bold",fontSize:"lg"},t({defaultMessage:[{type:0,value:"Questions"}],id:"product_detail.accordion.button.questions"})),n.createElement(S.X,null))),n.createElement(L.H,{mb:6,mt:4},t({defaultMessage:[{type:0,value:"Coming Soon"}],id:"product_detail.accordion.message.coming_soon"})))),n.createElement(m.xu,{display:["none","none","none","block"],flex:4}))};C.propTypes={product:i().object};const k=C;var I=r(9657),w=r(1486),T=r(6550),D=r(598),M=r(1598);function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function Z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const A=()=>{var e;const{formatMessage:t}=(0,d.Z)(),r=(0,T.k6)(),a=(0,T.TH)(),o=(0,h.Z)(),i=(0,D.p)(),x=(0,y.Z)(),[O,P]=(0,n.useState)({}),S=n.useRef({}),L=(0,g.useCustomerId)(),{data:C}=(0,E.Q)(),j=(0,g.useShopperBasketsMutation)("addItemToBasket"),{res:A}=(0,b.useServerContext)();A&&A.set("Cache-Control",`max-age=${I.RU}`);const q=!(null!=C&&C.basketId),{productId:W}=(0,T.UO)(),K=new URLSearchParams(a.search),{data:H,isLoading:V}=(0,g.useProduct)({parameters:{id:K.get("pid")||W,allImages:!0}},{keepPreviousData:!0}),z=null==H?void 0:H.type.set,{data:B}=(0,g.useCategory)({parameters:{id:null==H?void 0:H.primaryCategoryId,level:1}}),[N,Q]=(0,n.useState)(B),R=(0,f.c1)(H);(0,n.useEffect)((()=>{B&&Q(B)}),[B]),(0,n.useEffect)((()=>{if(!R)return;const e=(0,w.DE)(`${a.pathname}${a.search}`,{pid:null==R?void 0:R.productId});r.replace(e)}),[R]);const{data:U,isLoading:F}=(0,M.L)(),X=(0,g.useShopperCustomersMutation)("createCustomerProductListItem"),$=(e,r,a)=>{X.mutate({parameters:{listId:U.id,customerId:L},body:{quantity:a,productId:(null==r?void 0:r.productId)||(null==e?void 0:e.id),public:!1,priority:1,type:"product"}},{onSuccess:()=>{i({title:t(I.Zy,{quantity:1}),status:"success",action:n.createElement(u.z,{variant:"link",onClick:()=>x("/account/wishlist")},t(I.GN))})},onError:()=>{Y()}})},G=(0,D.p)(),Y=()=>{G({title:t(I.oj),status:"error"})},J=function(t){return(e=e||(0,l.Z)((function*(e){try{const t=e.map((({variant:e,quantity:t})=>({productId:e.productId,price:e.price,quantity:t})));return yield j.mutateAsync({parameters:{basketId:C.basketId},body:t}),o.sendAddToCart(t),e}catch(e){Y(e)}}))).apply(this,arguments)},ee=(0,n.useCallback)((()=>{Object.values(S.current).forEach((({validateOrderability:e})=>{e({scrollErrorIntoView:!1})}));const e=Object.keys(O),t=H.setProducts.find((({id:t})=>!e.includes(t)));if(t){const{ref:e}=S.current[t.id];return e.scrollIntoView&&e.scrollIntoView({behavior:"smooth",block:"end"}),!1}return!0}),[H,O]);return(0,n.useEffect)((()=>{H&&H.type.set?(o.sendViewProduct(H),H.setProducts.map((e=>{o.sendViewProduct(e)}))):H&&o.sendViewProduct(H)}),[H]),n.createElement(m.xu,{className:"sf-product-detail-page",layerStyle:"page","data-testid":"product-details-page"},n.createElement(c.q,null,n.createElement("title",null,null==H?void 0:H.pageTitle),n.createElement("meta",{name:"description",content:null==H?void 0:H.pageDescription})),n.createElement(p.K,{spacing:16},z?n.createElement(n.Fragment,null,n.createElement(_.Z,{product:H,category:(null==N?void 0:N.parentCategoryTree)||[],addToCart:()=>{const e=Object.values(O);return J(e)},addToWishlist:$,isProductLoading:V,isBasketLoading:q,isWishlistLoading:F,validateOrderability:ee}),n.createElement("hr",null),H.setProducts.map((e=>n.createElement(m.xu,{key:e.id,"data-testid":"child-product"},n.createElement(_.Z,{ref:function(t){S.current[e.id]={ref:t,validateOrderability:this.validateOrderability}},product:e,isProductPartOfSet:!0,addToCart:(t,r)=>J([{product:e,variant:t,quantity:r}]),addToWishlist:$,onVariantSelected:(e,t,r)=>{if(r)P((a=>Z(Z({},a),{},{[e.id]:{product:e,variant:t,quantity:r}})));else{const t=Z({},O);delete t[e.id],P(t)}},isProductLoading:V,isBasketLoading:q,isWishlistLoading:F}),n.createElement(k,{product:e}),n.createElement(m.xu,{display:["none","none","none","block"]},n.createElement("hr",null)))))):n.createElement(n.Fragment,null,n.createElement(_.Z,{product:H,category:(null==N?void 0:N.parentCategoryTree)||[],addToCart:(e,t)=>J([{product:H,variant:e,quantity:t}]),addToWishlist:$,isProductLoading:V,isBasketLoading:q,isWishlistLoading:F}),n.createElement(k,{product:H})),n.createElement(p.K,{spacing:16},!z&&n.createElement(v.Z,{title:n.createElement(s.Z,{defaultMessage:[{type:0,value:"Complete the Set"}],id:"product_detail.recommended_products.title.complete_set"}),recommender:I.xq.PDP_COMPLETE_SET,products:[H],mx:{base:-4,md:-8,lg:0},shouldFetch:()=>null==H?void 0:H.id}),n.createElement(v.Z,{title:n.createElement(s.Z,{defaultMessage:[{type:0,value:"You might also like"}],id:"product_detail.recommended_products.title.might_also_like"}),recommender:I.xq.PDP_MIGHT_ALSO_LIKE,products:[H],mx:{base:-4,md:-8,lg:0},shouldFetch:()=>null==H?void 0:H.id}),n.createElement(v.Z,{key:a.key,title:n.createElement(s.Z,{defaultMessage:[{type:0,value:"Recently Viewed"}],id:"product_detail.recommended_products.title.recently_viewed"}),recommender:I.xq.PDP_RECENTLY_VIEWED,mx:{base:-4,md:-8,lg:0}}))))};A.getTemplateName=()=>"product-detail",A.propTypes={match:i().object};const q=A}}]);