(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{24:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),u=n.n(c),a=n(17),i=n.n(a),o=n(18),s=n(3),j=function(e){var t=e.newFilter,n=e.setNewFilter;return Object(r.jsxs)("div",{children:["filter shown with ",Object(r.jsx)("input",{value:t,onChange:function(e){n(e.target.value)}})]})},b=function(e){var t=e.addName,n=e.newName,c=e.setNewName,u=e.newNumber,a=e.setNewNumber;return Object(r.jsxs)("form",{onSubmit:t,children:[Object(r.jsxs)("div",{children:["name: ",Object(r.jsx)("input",{value:n,onChange:function(e){c(e.target.value)}})]}),Object(r.jsxs)("div",{children:["number: ",Object(r.jsx)("input",{value:u,onChange:function(e){a(e.target.value)}})]}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{type:"submit",children:"add"})})]})},d=function(e){var t=e.persons,n=e.newFilter,c=e.deletePerson;return Object(r.jsx)("ul",{children:function(e){return e.filter((function(e){return e.name.toUpperCase().includes(n.toUpperCase())}))}(t).map((function(e){return Object(r.jsxs)("li",{children:[e.name," ",e.number,Object(r.jsx)("button",{onClick:function(){return c(e.id)},children:"Delete"})]},e.name)}))})},l=(n(24),function(e){var t=e.name,n=e.error;return Object(r.jsx)("div",{id:n?"alert":"error",children:n?Object(r.jsxs)("h1",{children:["Added ",t," "]}):Object(r.jsxs)("h1",{children:[" ",t," was already removed"]})})}),O=n(8),f=n(5),h=n.n(f),m="/api/persons",x=function(){return h.a.get(m).then((function(e){return e.data}))},p=function(e){return h.a.post(m,e).then((function(e){return e.data}))},v=function(e){return h.a.delete("".concat(m,"/").concat(e)).then((function(e){return e.data}))},w=function(e,t){return h.a.put("".concat(m,"/").concat(e.id),Object(O.a)(Object(O.a)({},e),{},{number:t})).then((function(e){return e.data}))},N=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],u=t[1],a=Object(c.useState)(""),i=Object(s.a)(a,2),O=i[0],f=i[1],h=Object(c.useState)(0),m=Object(s.a)(h,2),N=m[0],g=m[1],S=Object(c.useState)(""),k=Object(s.a)(S,2),C=k[0],F=k[1],y=Object(c.useState)(!1),P=Object(s.a)(y,2),A=P[0],D=P[1],E=Object(c.useState)(!1),J=Object(s.a)(E,2),T=J[0],U=J[1],B=function(e){return n.find((function(t){return t.name===e}))};return Object(c.useEffect)((function(){x().then((function(e){return u(e)}))}),[]),Object(r.jsxs)("div",{children:[A?Object(r.jsx)(l,{name:O,error:!1}):null,T?Object(r.jsx)(l,{name:O,error:!0}):null,Object(r.jsx)("h2",{children:"Phonebook"}),Object(r.jsx)(j,{newFilter:C,setNewFilter:F}),Object(r.jsx)("h2",{children:"Add a new"}),Object(r.jsx)(b,{addName:function(e){if(e.preventDefault(),n.reduce((function(e,t){return e||t.name===O}),!1)){var t=B(O);w(t,N).catch((function(e){U(!0),setTimeout((function(){return U(!1)}),3e3)}))}else D(!0),setTimeout((function(){return D(!1)}),3e3),p({name:O,number:N}).then((function(e){return u([].concat(Object(o.a)(n),[{name:O,number:N}]))}))},newName:O,setNewName:f,newNumber:N,setNewNumber:g}),Object(r.jsx)("h2",{children:"Numbers"}),Object(r.jsx)(d,{persons:n,newFilter:C,deletePerson:function(e){v(e)}})]})};i.a.render(Object(r.jsx)(u.a.StrictMode,{children:Object(r.jsx)(N,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.51a5d0a7.chunk.js.map