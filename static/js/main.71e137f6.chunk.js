(this["webpackJsonpmy-site"]=this["webpackJsonpmy-site"]||[]).push([[0],{29:function(e,a,t){e.exports=t(52)},34:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){},48:function(e,a,t){},51:function(e,a,t){},52:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(20),i=t.n(r),c=(t(34),t(21)),s=t(22),o=t(25),m=t(27),u=(t(35),t(9)),p=t(7);t(36);function d(e){return l.a.createElement("div",{className:"main"},l.a.createElement("h1",{className:"greeting"},"Hello, my name is"),l.a.createElement("div",{className:"name"},l.a.createElement("h2",{className:"full_name"},"Alex",l.a.createElement("img",{className:"stroke ",src:"personal-website/images/blue.png",alt:""}))),l.a.createElement("p",{className:"info"},"I am a web developer."))}t(37);function h(e){return l.a.createElement("div",{className:"about"},l.a.createElement("div",{className:"picture"},l.a.createElement("img",{src:"personal-website/images/profile.jpeg",className:"fade-in-about",alt:"profile"})),l.a.createElement("div",{className:"about_me"},l.a.createElement("div",{className:"about_text"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,"Full stack web developer with a background in accounting and finance looking to bring a positive, collaborative attitude to your team. I'd love to help your organization meet its development goals."),l.a.createElement("h4",null,"Technologies I've been working with: "),l.a.createElement("ul",null,l.a.createElement("li",null,"JavaScript"),l.a.createElement("li",null,"React"),l.a.createElement("li",null,"Node.js"),l.a.createElement("li",null,"Express"),l.a.createElement("li",null,"Ruby"),l.a.createElement("li",null,"Rails"),l.a.createElement("li",null,"HTML & (S)CSS"),l.a.createElement("li",null,"jQuery"),l.a.createElement("li",null,"postgreSQL")))))}t(38);var E=t(28),g=t(26),b=(t(39),t(40),t(5));function f(e){var a=e.stack.map((function(e){return l.a.createElement("li",null,e)}));return e.show?l.a.createElement("div",{className:"modal"},l.a.createElement("div",{className:"content"},l.a.createElement("h3",null,e.title),l.a.createElement("p",null,e.description),l.a.createElement("h5",null,"Tech Stack"),l.a.createElement("ul",{className:"project_stack"},a),l.a.createElement("button",{onClick:e.onClose},l.a.createElement(b.a,{icon:"times",size:"lg"})),l.a.createElement("a",{className:"project_link",href:e.link},l.a.createElement("label",null,"Github"),l.a.createElement(b.a,{icon:["fab","github"],size:"2x",className:"github_icon"})))):null}t(46);function k(e){return e.show?l.a.createElement("div",{className:"backdrop",onClick:e.click}):null}function v(e){var a=Object(n.useState)({show:!1,index:0}),t=Object(g.a)(a,2),r=t[0],i=t[1],c=function(e){i(Object(E.a)({},r,{show:!r.show}))};return l.a.createElement("div",{className:"project fade-in "},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"pic_buttons"},l.a.createElement("button",{className:"back",onClick:function(){0===r.index?i({index:e.image.length-1}):i({index:r.index-1})}},l.a.createElement(b.a,{icon:"chevron-left",size:"2x"})),l.a.createElement("button",{className:"forward",onClick:function(){r.index===e.image.length-1?i({index:0}):i({index:r.index+1})}},l.a.createElement(b.a,{icon:"chevron-right",size:"2x"}))),l.a.createElement("div",null,l.a.createElement("img",{className:"project_image",src:e.image[r.index],alt:e.image_alt,onClick:function(){return c()}})),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"text"},e.title))),l.a.createElement(f,{show:r.show,onClose:c,title:e.title,description:e.description,stack:e.stack,link:e.link}),l.a.createElement(k,{show:r.show,click:c}))}function w(e){return l.a.createElement("div",{className:"projects"},l.a.createElement("h1",null,"Projects"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"column"},l.a.createElement(v,{image:["personal-website/images/shin-herb/1.png","personal-website/images/shin-herb/2.png","personal-website/images/shin-herb/3.png","personal-website/images/shin-herb/4.png"],image_alt:"screenshot of shinrinyoku herb ecommerce app",title:"Shinrinyoku Herb",description:"Shin herb is a fully functioning e-commerce site with a built in test card for purchases.",stack:["React","Redux","Firebase","Stripe"],link:"https://github.com/alextheprogrammer21/Shinrinyoku-Herb"})),l.a.createElement("div",{className:"column"},l.a.createElement(v,{image:["personal-website/images/schedular/1.png","personal-website/images/schedular/2.png","personal-website/images/schedular/3.png"],image_alt:"screenshot of schedular app",title:"Interview Schedular",description:"A scheduler that allows users to set up, edit, or delete appointments. Made with React.",stack:["React","Node","Express","Jest","Storybook","Cypress"],link:"https://github.com/alextheprogrammer21/Interview-Scheduler"}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"column"},l.a.createElement(v,{image:["personal-website/images/food-pickup/food_main.png","personal-website/images/food-pickup/food-pickup.png","personal-website/images/food-pickup/food_rest_time.png","personal-website/images/food-pickup/food_cust_time.png"],image_alt:"screenshot of food pick-up app",title:"Food Pick-up",description:"A food ordering pick up application for a single restaurant that was built using AJAX. Twilio API is used to send text messages to the restaurant to confirm orders. Customers get text messages for order updates.",stack:["Node","Express","JQuery","Twilio","PostgreSQL"],link:"https://github.com/alextheprogrammer21/food-pickup"})),l.a.createElement("div",{className:"column"},l.a.createElement(v,{image:["personal-website/images/travel/1.png","personal-website/images/travel/2.png","personal-website/images/travel/3.png","personal-website/images/travel/4.png","personal-website/images/travel/5.png","personal-website/images/travel/6.png"],image_alt:"screenshot of travel booking app",title:"Travel Booking",description:"A travel website that lets users book flights. A nicer looking Expedia with personalization!",stack:["React","Material-UI","Node","Express"],link:"https://github.com/alextheprogrammer21/team-kim-possible"}))))}t(47);function N(e){return l.a.createElement("div",{className:"contact"},l.a.createElement("h1",null,"Get In Touch"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"mailto:alextheprogrammer21@gmail.com"},l.a.createElement(b.a,{icon:["far","envelope"],className:"icon"})," alextheprogrammer21@gmail.com")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.linkedin.com/in/abhisetia/",target:"_blank",className:"link",rel:"noopener noreferrer"},l.a.createElement(b.a,{icon:["fab","linkedin-in"],className:"icon"})," LinkedIn")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/alextheprogrammer21",target:"_blank",rel:"noopener noreferrer",className:"link"},l.a.createElement(b.a,{icon:["fab","github"],className:"icon"})," GitHub"))))}t(48);function x(e){return l.a.createElement(u.a,null,l.a.createElement("header",{className:"header"},l.a.createElement("nav",{className:"header_navigation"},l.a.createElement("div",{className:"side_nav_items"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(u.b,{to:"/personal-website"},"Home")),l.a.createElement("li",null,l.a.createElement(u.b,{to:"/about"},"About")),l.a.createElement("li",null,l.a.createElement(u.b,{to:"/projects"},"Projects")),l.a.createElement("li",null,l.a.createElement(u.b,{to:"/contact"},"Contact")))))),l.a.createElement(p.c,null,l.a.createElement(p.a,{exact:!0,path:"/personal-website"},l.a.createElement(d,null)),l.a.createElement(p.a,{path:"/about"},l.a.createElement(h,null)),l.a.createElement(p.a,{path:"/projects"},l.a.createElement(w,null)),l.a.createElement(p.a,{path:"/contact"},l.a.createElement(N,null))))}t(51);function _(e){var a="side-bar";return e.show&&(a="side-bar open"),l.a.createElement("nav",{className:a},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"/"},"About")),l.a.createElement("li",null,l.a.createElement("a",{href:"/"},"Projects")),l.a.createElement("li",null,l.a.createElement("a",{href:"/"},"Contact"))))}var y=t(10),j=t(13),C=t(11),S=t(14);y.b.add(C.a,j.a,j.c,C.d,C.c,C.b,S.a,j.b,S.c,S.b);var A=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={sideBarOpen:!1},e.sideBarToggleClickHandler=function(){e.setState((function(e){return{sideBarOpen:!e.sideBarOpen}}))},e.backdropClickHandler=function(){e.setState({sideBarOpen:!1})},e}return Object(s.a)(t,[{key:"render",value:function(){var e;return this.state.sideBarOpen&&(e=l.a.createElement(k,{click:this.backdropClickHandler})),l.a.createElement("div",{className:"App",style:{height:"100%"}},l.a.createElement(x,{sideBarClickHandler:this.sideBarToggleClickHandler}),l.a.createElement(_,{show:this.state.sideBarOpen}),e,l.a.createElement("main",null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.71e137f6.chunk.js.map