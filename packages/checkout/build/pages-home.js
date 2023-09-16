"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[676],{9588:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(7462),s=a(5987),i=a(7294),o=a(5697),r=a.n(o),l=a(7747),c=a(9653),d=a(2757),m=a(3717),g=a(3426);const p=["title","img","actions"],u=e=>{let{title:t,img:a,actions:o}=e,r=(0,s.Z)(e,p);const{src:u,alt:h}=a;return i.createElement(l.xu,(0,n.Z)({marginBottom:{base:0,md:10},height:{lg:"xl"},position:{lg:"relative"}},r),i.createElement(c.K,{align:"center",spacing:{base:8,md:10},paddingTop:{base:12,md:10},paddingBottom:{base:6,md:10},direction:{base:"column",lg:"row"}},i.createElement(c.K,{flex:1,spacing:{base:5,md:8}},i.createElement(d.X,{as:"h1",fontSize:{base:"4xl",md:"5xl",lg:"6xl"},maxWidth:{base:"75%",md:"50%",lg:"md"}},t),o&&i.createElement(l.xu,{width:{base:"full",lg:"inherit"}},o)),i.createElement(m.k,{flex:1,justify:"center",align:"center",position:"relative",width:"full",paddingTop:{base:4,lg:0}},i.createElement(l.xu,{position:"relative",width:{base:"full",md:"80%",lg:"full"}},i.createElement(g.E,{fit:"cover",align:"center",width:"100%",height:"100%",src:u,alt:h})))))};u.displayName="Hero",u.propTypes={img:r().shape({src:r().string,alt:r().string}),title:r().string,actions:r().element};const h=u},3134:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(7462),s=a(5987),i=a(7294),o=a(5697),r=a.n(o),l=a(7747),c=a(9653),d=a(2338),m=a(2757),g=a(1293);const p=["title","subtitle","actions","maxWidth","children"],u=e=>{let{title:t,subtitle:a,actions:o,maxWidth:r,children:u}=e,h=(0,s.Z)(e,p);const f=r||"3xl";return i.createElement(l.xu,(0,n.Z)({as:"section",paddingBottom:"16"},h),i.createElement(c.K,{spacing:4,as:d.W,maxW:f,textAlign:"center"},t&&i.createElement(m.X,{as:"h2",fontSize:40,textAlign:"center"},t),a&&i.createElement(g.x,{color:"gray.700",fontWeight:600},a),o&&i.createElement(l.xu,{paddingTop:"2",width:{base:"full",md:"auto"}},o)),u)};u.displayName="Section",u.propTypes={title:r().string,subtitle:r().oneOfType([r().array,r().string,r().node]),children:r().node,actions:r().element,maxWidth:r().string};const h=u},1972:(e,t,a)=>{a.r(t),a.d(t,{default:()=>T});var n=a(7294),s=a(6896),i=a(4012),o=a(6550),r=a(7747),l=a(9653),c=a(6915),d=a(2883),m=a(5674),g=a(4292),p=a(3717),u=a(1293),h=a(2338),f=a(8783),E=a(9588),v=a(1437),y=a(3134),b=a(834),x=a(6719),_=a(49),M=a(9385);const k=[{message:(0,_.vU)({title:{defaultMessage:[{type:0,value:"Download on Github"}],id:"home.hero_features.link.on_github"}}),icon:n.createElement(M.bY,{width:12,height:12}),href:"https://github.com/SalesforceCommerceCloud/pwa-kit"},{message:(0,_.vU)({title:{defaultMessage:[{type:0,value:"Deploy on Managed Runtime"}],id:"home.hero_features.link.on_managed_runtime"}}),icon:n.createElement(M.Oc,{width:12,height:8}),href:"https://developer.salesforce.com/docs/commerce/pwa-kit-managed-runtime/guide/pushing-and-deploying-bundles.html"},{message:(0,_.vU)({title:{defaultMessage:[{type:0,value:"Create with the Figma PWA Design Kit"}],id:"home.hero_features.link.design_kit"}}),icon:n.createElement(M.u2,{width:12,height:8}),href:"https://sfdc.co/figma-pwa-design-kit"}],w=[{message:(0,_.vU)({title:{defaultMessage:[{type:0,value:"Cart & Checkout"}],id:"home.features.heading.cart_checkout"},text:{defaultMessage:[{type:0,value:"Ecommerce best practice for a shopper's cart and checkout experience."}],id:"home.features.description.cart_checkout"}}),icon:n.createElement(M.wh,null)},{message:(0,_.vU)({title:{defaultMessage:[{type:0,value:"Einstein Recommendations"}],id:"home.features.heading.einstein_recommendations"},text:{defaultMessage:[{type:0,value:"Deliver the next best product or offer to every shopper through product recommendations."}],id:"home.features.description.einstein_recommendations"}}),icon:n.createElement(M.lM,null)},{message:(0,_.vU)({title:{defaultMessage:[{type:0,value:"My Account"}],id:"home.features.heading.my_account"},text:{defaultMessage:[{type:0,value:"Shoppers can manage account information such as their profile, addresses, payments and orders."}],id:"home.features.description.my_account"}}),icon:n.createElement(M.fr,null)},{message:(0,_.vU)({title:{defaultMessage:[{type:0,value:"Shopper Login and API Access Service"}],id:"home.features.heading.shopper_login"},text:{defaultMessage:[{type:0,value:"Enable shoppers to easily log in with a more personalized shopping experience."}],id:"home.features.description.shopper_login"}}),icon:n.createElement(M.BW,null)},{message:(0,_.vU)({title:{defaultMessage:[{type:0,value:"Components & Design Kit"}],id:"home.features.heading.components"},text:{defaultMessage:[{type:0,value:"Built using Chakra UI, a simple, modular and accessible React component library."}],id:"home.features.description.components"}}),icon:n.createElement(M.QG,null)},{message:(0,_.vU)({title:{defaultMessage:[{type:0,value:"Wishlist"}],id:"home.features.heading.wishlist"},text:{defaultMessage:[{type:0,value:"Registered shoppers can add product items to their wishlist from purchasing later."}],id:"home.features.description.wishlist"}}),icon:n.createElement(M.h_,null)}];var C=a(6256),S=a(9657),Z=a(7962),R=a(9391);const D=()=>{const e=(0,s.Z)(),t=(0,C.Z)(),{pathname:a}=(0,o.TH)(),{res:_}=(0,Z.useServerContext)();_&&_.set("Cache-Control",`max-age=${S.RU}`);const{data:M,isLoading:D}=(0,R.useProductSearch)({parameters:{refine:[`cgid=${S.EP}`,"htype=master"],limit:S.DN}});return(0,n.useEffect)((()=>{t.sendViewPage(a)}),[]),n.createElement(r.xu,{"data-testid":"home-page",layerStyle:"page"},n.createElement(v.Z,{title:"Home Page",description:"Commerce Cloud Retail React App",keywords:"Commerce Cloud, Retail React App, React Storefront"}),n.createElement(E.Z,{title:e.formatMessage({defaultMessage:[{type:0,value:"The React PWA Starter Store for Retail"}],id:"home.title.react_starter_store"}),img:{src:(0,x.Vh)("static/img/hero.png"),alt:"npx pwa-kit-create-app"},actions:n.createElement(l.K,{spacing:{base:4,sm:6},direction:{base:"column",sm:"row"}},n.createElement(c.z,{as:d.r,href:"https://developer.salesforce.com/docs/commerce/pwa-kit-managed-runtime/guide/getting-started.html",target:"_blank",width:{base:"full",md:"inherit"},paddingX:7,_hover:{textDecoration:"none"}},n.createElement(i.Z,{defaultMessage:[{type:0,value:"Get started"}],id:"home.link.get_started"})))}),n.createElement(y.Z,{background:"gray.50",marginX:"auto",paddingY:{base:8,md:16},paddingX:{base:4,md:8},borderRadius:"base",width:{base:"100vw",md:"inherit"},position:{base:"relative",md:"inherit"},left:{base:"50%",md:"inherit"},right:{base:"50%",md:"inherit"},marginLeft:{base:"-50vw",md:"auto"},marginRight:{base:"-50vw",md:"auto"}},n.createElement(m.M,{columns:{base:1,md:1,lg:3},spacingX:{base:1,md:4},spacingY:{base:4,md:14}},k.map(((t,a)=>{const s=t.message;return n.createElement(r.xu,{key:a,background:"white",boxShadow:"0px 2px 2px rgba(0, 0, 0, 0.1)",borderRadius:"4px"},n.createElement(d.r,{target:"_blank",href:t.href},n.createElement(g.U,null,n.createElement(p.k,{paddingLeft:6,height:24,align:"center",justify:"center"},t.icon),n.createElement(u.x,{fontWeight:"700"},e.formatMessage(s.title)))))})))),M&&n.createElement(y.Z,{padding:4,paddingTop:16,title:e.formatMessage({defaultMessage:[{type:0,value:"Shop Products"}],id:"home.heading.shop_products"}),subtitle:e.formatMessage({defaultMessage:[{type:0,value:"This section contains content from the catalog. "},{type:1,value:"docLink"},{type:0,value:" on how to replace it."}],id:"home.description.shop_products"},{docLink:n.createElement(d.r,{target:"_blank",href:"https://sfdc.co/business-manager-manage-catalogs",textDecoration:"none",position:"relative",_after:{position:"absolute",content:'""',height:"2px",bottom:"-2px",margin:"0 auto",left:0,right:0,background:"gray.700"},_hover:{textDecoration:"none"}},e.formatMessage({defaultMessage:[{type:0,value:"Read docs"}],id:"home.link.read_docs"}))})},n.createElement(l.K,{pt:8,spacing:16},n.createElement(b.Z,{products:null==M?void 0:M.hits,isLoading:D}))),n.createElement(y.Z,{padding:4,paddingTop:32,title:e.formatMessage({defaultMessage:[{type:0,value:"Features"}],id:"home.heading.features"}),subtitle:e.formatMessage({defaultMessage:[{type:0,value:"Out-of-the-box features so that you focus only on adding enhancements."}],id:"home.description.features"})},n.createElement(h.W,{maxW:"6xl",marginTop:10},n.createElement(m.M,{columns:{base:1,md:2,lg:3},spacing:10},w.map(((t,a)=>{const s=t.message;return n.createElement(g.U,{key:a,align:"top"},n.createElement(f.g,{align:"start"},n.createElement(p.k,{width:16,height:16,align:"center",justify:"left",color:"gray.900",paddingX:2},t.icon),n.createElement(u.x,{color:"black",fontWeight:700,fontSize:20},e.formatMessage(s.title)),n.createElement(u.x,{color:"black"},e.formatMessage(s.text))))}))))),n.createElement(y.Z,{padding:4,paddingTop:32,title:e.formatMessage({defaultMessage:[{type:0,value:"We're here to help"}],id:"home.heading.here_to_help"}),subtitle:n.createElement(n.Fragment,null,n.createElement(n.Fragment,null,e.formatMessage({defaultMessage:[{type:0,value:"Contact our support staff."}],id:"home.description.here_to_help"})),n.createElement("br",null),n.createElement(n.Fragment,null,e.formatMessage({defaultMessage:[{type:0,value:"They will get you to the right place."}],id:"home.description.here_to_help_line_2"}))),actions:n.createElement(c.z,{as:d.r,href:"https://help.salesforce.com/s/?language=en_US",target:"_blank",width:"auto",paddingX:7,_hover:{textDecoration:"none"}},n.createElement(i.Z,{defaultMessage:[{type:0,value:"Contact Us"}],id:"home.link.contact_us"})),maxWidth:"xl"}))};D.getTemplateName=()=>"home";const T=D},6149:(e,t,a)=>{a.r(t),a.d(t,{default:()=>_});var n=a(7294),s=a(6896),i=a(4012),o=a(6550),r=(a(3691),a(2883)),l=a(3727),c=a(7747),d=a(9653),m=a(6915),g=a(9588),p=a(1437),u=a(3134),h=a(834),f=a(6719),E=a(6256),v=a(9657),y=a(7962),b=a(9391);const x=()=>{const e=(0,s.Z)(),t=(0,E.Z)(),{pathname:a}=(0,o.TH)(),{res:x}=(0,y.useServerContext)();x&&x.set("Cache-Control",`max-age=${v.RU}`);const{data:_,isLoading:M}=(0,b.useProductSearch)({parameters:{refine:[`cgid=${v.EP}`,"htype=master"],limit:v.DN}});return(0,n.useEffect)((()=>{t.sendViewPage(a)}),[]),n.createElement(c.xu,{"data-testid":"home-page",layerStyle:"page"},n.createElement(p.Z,{title:"Home Page",description:"Commerce Cloud Retail React App",keywords:"Commerce Cloud, Retail React App, React Storefront"}),n.createElement(g.Z,{title:v.wo,img:{src:(0,f.Vh)("static/img/hero.png"),alt:"npx pwa-kit-create-app"},actions:n.createElement(d.K,{spacing:{base:4,sm:6},direction:{base:"column",sm:"row"}},n.createElement(m.z,{as:r.r,href:"https://developer.salesforce.com/docs/commerce/pwa-kit-managed-runtime/guide/getting-started.html",target:"_blank",width:{base:"full",md:"inherit"},paddingX:7,_hover:{textDecoration:"none"}},n.createElement(i.Z,{defaultMessage:[{type:0,value:"Get started"}],id:"home.link.get_started"})))}),_&&n.createElement(u.Z,{padding:4,paddingTop:16,title:e.formatMessage({defaultMessage:[{type:0,value:"Shop Products"}],id:"home.heading.shop_products"}),subtitle:e.formatMessage({defaultMessage:[{type:0,value:"This section contains content from the catalog. "},{type:1,value:"docLink"},{type:0,value:" on how to replace it."}],id:"home.description.shop_products"},{docLink:n.createElement(r.r,{target:"_blank",href:"https://sfdc.co/business-manager-manage-catalogs",textDecoration:"none",position:"relative",_after:{position:"absolute",content:'""',height:"2px",bottom:"-2px",margin:"0 auto",left:0,right:0,background:"gray.700"},_hover:{textDecoration:"none"}},e.formatMessage({defaultMessage:[{type:0,value:"Read docs"}],id:"home.link.read_docs"}))})},n.createElement(d.K,{pt:8,spacing:16},n.createElement(h.Z,{products:null==_?void 0:_.hits,isLoading:M}))),n.createElement(r.r,{as:l.Link,to:"/my-new-route"},"my-new-route"))};x.getTemplateName=()=>"home";const _=x}}]);