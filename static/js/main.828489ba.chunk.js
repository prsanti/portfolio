(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n(1),s=n.n(a),c=n(6),r=n.n(c),o=(n(19),n(20),n.p+"static/media/envelope-regular.72a16712.png"),l=n.p+"static/media/github-brands.bd7e0828.png",d=n.p+"static/media/instagram-brands.bda08033.png",j=n.p+"static/media/linkedin-in-brands.26f9706f.png";function h(){return Object(i.jsxs)("header",{children:[Object(i.jsx)("div",{className:"logo",children:Object(i.jsx)("h1",{children:"P S"})}),Object(i.jsxs)("div",{className:"nav--bar",children:[Object(i.jsx)("a",{href:"https://github.com/prsanti",children:Object(i.jsx)("img",{src:l,alt:"github",className:"nav--item"})}),Object(i.jsx)("a",{href:"https://www.linkedin.com/in/paulorsantiago/",children:Object(i.jsx)("img",{src:j,alt:"linkedin",className:"nav--item"})}),Object(i.jsx)("a",{href:"mailto:p.santiago796@gmail.com",children:Object(i.jsx)("img",{src:o,alt:"mail",className:"nav--item"})}),Object(i.jsx)("a",{href:"https://www.instagram.com/paulo_sntgo/",children:Object(i.jsx)("img",{src:d,alt:"instagram",className:"nav--item"})})]})]})}n(21);var b=n.p+"static/media/circle-profile.36829f13.png";function p(){return Object(i.jsxs)("div",{className:"about",children:[Object(i.jsx)("img",{src:b,alt:"profile-pic",id:"profile-pic"}),Object(i.jsxs)("div",{className:"intro",children:[Object(i.jsx)("p",{className:"hello",children:Object(i.jsx)("b",{children:"Paul Santiago"})}),Object(i.jsx)("p",{className:"title",children:"Full-Stack Developer"})]}),Object(i.jsxs)("div",{className:"summary",children:[Object(i.jsxs)("p",{children:["I am a full-stack developer looking for a position where I can learn and expand my skillset. My front-end languages include ",Object(i.jsx)("b",{children:"Javascript"}),", ",Object(i.jsx)("b",{children:"HTML"}),", and ",Object(i.jsx)("b",{children:"CSS"})," where I use them together in the ",Object(i.jsx)("b",{children:"React"})," Framework. When building projects, writing clear, modular code is an approach I try and stay true to by component testing through ",Object(i.jsx)("b",{children:"Storybook"}),". For unit testing I have experience using ",Object(i.jsx)("b",{children:"Jest"})," to ensure the core functionality of the program is working. In addition, I use ",Object(i.jsx)("b",{children:"Cypress"})," for end-to-end testing to simulate and visualize what users will see when using an application."]}),Object(i.jsxs)("p",{children:["On the back-end side of my projects, I have experience coding in ",Object(i.jsx)("b",{children:"Ruby on Rails"}),", and managing servers and files through ",Object(i.jsx)("b",{children:"Node.js"}),", and ",Object(i.jsx)("b",{children:"Next.js"}),". I can navigate databases with ",Object(i.jsx)("b",{children:"PostgreSQL"}),", and use ",Object(i.jsx)("b",{children:"R"})," or ",Object(i.jsx)("b",{children:"Stata"})," to visualize the data."]}),Object(i.jsxs)("p",{children:["I am really looking forward to connect with you and start building amazing projects together. You can reach me through one of my socials at the top or email me directly at ",Object(i.jsx)("b",{children:"p.santiago796@gmail.com"})]}),Object(i.jsxs)("p",{children:["In the meantime, you can ",Object(i.jsx)("i",{children:"swipe"})," through some of my projects below. The Github repository can be found underneath as well."]})]})]})}var u=n(10),m=n(8),g=n(13),O=n(7),x=n(11),f=(n(22),n.p+"static/media/github-brands.e2f07326.svg"),w=[{name:"Scheduler",url:"https://i.imgur.com/nVou2Hy.png",description:"React based project to create and organize interviews for students and interviewers.",link:"https://github.com/prsanti/scheduler"},{name:"uPick",url:"https://i.imgur.com/aBKTu7W.png",description:"A smart todo list that automatically categorizes and displays all information for activities you plan to do.",link:"https://github.com/prsanti/smart_TODO_list"},{name:"LightBnB",url:"https://i.imgur.com/fx0BZmt.png",description:"An AirBnB clone that lets you browse, search, and filter all listings your listings as well as others.",link:"https://github.com/prsanti/LightBnB/tree/master/LightBnB_WebApp-master"},{name:"Tweeter",url:"https://i.imgur.com/dDqiJ6k.png",description:"A simple, single-page Twitter clone built with jQuery and Ajax.",link:"https://github.com/prsanti/tweeter"},{name:"TinyApp",url:"https://i.imgur.com/WDM6AZk.png",description:"A full-stack web application built with Node.js and Express that allows users to shorten long URLs.",link:"https://github.com/prsanti/tinyapp"}];function y(){var e=Object(a.useRef)(0),t=Object(O.b)(w.length,(function(e){return{x:e*window.innerWidth,sc:1,display:"block"}})),n=Object(m.a)(t,2),s=n[0],c=n[1],r=Object(x.a)((function(t){var n=t.down,i=Object(m.a)(t.delta,1)[0],a=Object(m.a)(t.direction,1)[0],s=t.distance,r=t.cancel;n&&s>window.innerWidth/2&&r(e.current=Object(g.a)(e.current+(a>0?-1:1),0,w.length-1)),c((function(t){return t<e.current-1||t>e.current+1?{display:"none"}:{x:(t-e.current)*window.innerWidth+(n?i:0),sc:n?1-s/window.innerWidth/2:1,display:"block"}}))}));return s.map((function(e,t){var n=e.x,s=e.display,c=e.sc;return Object(a.createElement)(O.a.div,Object(u.a)(Object(u.a)({},r()),{},{key:t,style:{display:s,transform:n.interpolate((function(e){return"translate3d(".concat(e,"px,0,0)")}))}}),Object(i.jsx)("h1",{className:"project--name",children:w[t].name}),Object(i.jsx)("p",{className:"project--description",children:w[t].description}),Object(i.jsx)(O.a.div,{style:{transform:c.interpolate((function(e){return"scale(".concat(e,")")})),backgroundImage:"url(".concat(w[t].url,")")}}),Object(i.jsx)("a",{href:w[t].link,children:Object(i.jsx)("img",{src:f,alt:"github",className:"nav--item"})}))}))}function v(){return Object(i.jsxs)("main",{className:"layout",children:[Object(i.jsx)(h,{}),Object(i.jsx)(p,{}),Object(i.jsx)("div",{id:"projects",children:Object(i.jsx)(y,{})})]})}Object(c.render)(Object(i.jsx)(y,{}),document.getElementById("root")),r.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(v,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.828489ba.chunk.js.map