(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{128:function(e,t,n){},129:function(e,t,n){},130:function(e,t,n){},131:function(e,t,n){},132:function(e,t,n){},133:function(e,t,n){},134:function(e,t,n){},139:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(9),u=n.n(r),l=n(6),o=n(11),i=n.n(o),s=(n(72),n(20),n(46),function(){return i.a.get("/api/recipes").then((function(e){return e.data}))}),m=n(49),d=(n(74),function(){return c.a.createElement("h2",{className:"h2-heading"},"Recipet")}),f=function(){return c.a.createElement("h2",{className:"h3-heading"},"About")},E=(n(75),n(76),n(77),n(78),n(47)),p=n.n(E),h=function(e){var t=e.recipes;return c.a.createElement(p.a,{images:t})},b=(n(128),n(129),function(){return c.a.createElement("div",null,c.a.createElement("h3",{id:"h3-heading"},"props.user.username"),c.a.createElement("p",{id:"hasRecipes"},"props.user.recipes"))}),g=(n(130),function(e){return c.a.createElement("button",{id:e.id},e.text)}),v=function(){return c.a.createElement("div",{id:"logged-in-block"},c.a.createElement(b,null),c.a.createElement(g,{id:"upload-button",text:"Upload Recipe"}))},N=(n(131),n(132),function(){return c.a.createElement("div",{className:"main-footer"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("p",null,(new Date).getFullYear()," Recipet | Full Stack Open -harjoitusty\xf6 |",c.a.createElement("button",{className:"blue-text-button"},"About")))))}),x=(n(133),function(e){var t=e.handleSearchChange,n=e.search;return c.a.createElement("div",{className:"center"},c.a.createElement("input",{className:"search-input",value:n,onChange:t}))}),O=(n(134),function(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),r=n[0];n[1];return e.renderAbout?c.a.createElement("div",{className:"top-block"},c.a.createElement(d,null),c.a.createElement(f,null),c.a.createElement(g,{id:"log-out-button",text:e.buttonText})):c.a.createElement("div",{className:"top-block"},c.a.createElement(d,null),c.a.createElement(x,{search:r,handleSearch:function(){return null}}),c.a.createElement(g,{id:"log-out-button",text:"Log Out"}))}),j=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1];Object(a.useEffect)((function(){s().then((function(e){r(e)}))}),[]);return c.a.createElement("div",{className:"page-container"},c.a.createElement("div",{className:"content-wrap"},c.a.createElement(m.a,null,c.a.createElement(O,{renderAbout:!0,buttonText:"isLoggedIn"}),c.a.createElement(v,null),c.a.createElement(h,{recipes:n}))),c.a.createElement(N,null))};n(138);u.a.render(c.a.createElement(j,null),document.getElementById("root"))},50:function(e,t,n){e.exports=n(139)},72:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){}},[[50,1,2]]]);
//# sourceMappingURL=main.6d65e745.chunk.js.map