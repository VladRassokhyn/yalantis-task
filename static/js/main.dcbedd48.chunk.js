(this["webpackJsonpyalantis-task"]=this["webpackJsonpyalantis-task"]||[]).push([[0],{28:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(7),s=n.n(a),i=(n(28),n(3)),o=n(8),l=n(6),u=n(5),j=[],p=n(21),d=n.n(p),m=Object(o.b)({employees:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_EMPLOYEES":var n=[].concat(Object(u.a)(e),Object(u.a)(t.payload.map((function(e){return e.active=Boolean(window.localStorage.getItem(e.id)),e}))));return n.sort((function(e,t){return e.lastName.charCodeAt(0)-t.lastName.charCodeAt(0)}));case"ACTIVE_TOGGLE":return Object(u.a)(e.map((function(e){if(e.id===t.id){var n=!e.active;return window.localStorage.setItem(e.id,String(n)),Object(l.a)(Object(l.a)({},e),{},{active:n})}return e})));default:return e}}}),b=Object(o.c)(m,Object(o.a)(d.a)),h=n(4),O=n.n(h),f=n(1),y=function(e){var t=e.employees,n=e.month;return Object(f.jsxs)("div",{className:"month-item-wrapper",children:[Object(f.jsx)("h2",{children:n}),t.map((function(e){return Object(f.jsxs)("li",{children:[e.lastName," ",e.firstName," -"," ",O()(e.dob).format("D MMMM, YYYY")," year"]},e.id)}))]})},v=function(e){var t=e.employees,n=O.a.months(),c=n.concat(n.slice(0,O()().month())).slice(-12);return Object(f.jsx)("div",{className:"employees-birth-list-wrapper",children:Object(f.jsx)("div",{className:"months-wrapper",children:c.map((function(e){var n=t.filter((function(t){return O()(t.dob).format("MMMM")===e}));return 0!==n.length?Object(f.jsx)(y,{month:e,employees:n},e):null}))})})},x=function(e){return{type:"SET_EMPLOYEES",payload:e}},E=function(e){return{type:"ACTIVE_TOGGLE",id:e}},w=function(e){var t=e.employee,n=Object(i.b)();return Object(f.jsxs)("div",{className:"employee-item-wrapper",children:[Object(f.jsxs)("h3",{style:{color:t.active?"blue":"black"},children:[t.lastName," ",t.firstName]}),Object(f.jsxs)("span",{children:[Object(f.jsx)("input",{type:"radio",checked:t.active,onChange:function(){return n(E(t.id))}}),Object(f.jsx)("label",{children:"active"})]}),Object(f.jsxs)("span",{children:[Object(f.jsx)("input",{type:"radio",checked:!t.active,onChange:function(){return n(E(t.id))}}),Object(f.jsx)("label",{children:"not active"})]})]})},N=function(e){var t=e.char,n=e.employees;return Object(f.jsxs)("div",{className:"alpha-item-wrapper",children:[Object(f.jsx)("h2",{children:t}),0===n.length&&"-----",n.map((function(e){return Object(f.jsx)(w,{employee:e},e.id)}))]})},g=function(e){var t=e.employees;return Object(f.jsx)("div",{className:"employees-list-wrapper",children:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"].map((function(e){return Object(f.jsx)(N,{char:e,employees:t.filter((function(t){return t.lastName[0]===e}))},e)}))})},M=i.c,k=n(11),S=n.n(k),C=n(22),T=n(23),Y=n.n(T).a.create({baseURL:"https://yalantis-react-school-api.yalantis.com/api/"}),I=function(){return Y.get("task0/users")},L=function(){var e=Object(i.b)(),t=M((function(e){return{employees:e.employees}})).employees;return Object(c.useEffect)((function(){e(function(){var e=Object(C.a)(S.a.mark((function e(t){var n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I();case 3:n=e.sent,t(x(n.data)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(f.jsxs)("div",{className:"wrapper",children:[Object(f.jsx)("h1",{children:"Employees"}),Object(f.jsx)("h1",{children:"Employees birthday"}),Object(f.jsx)(g,{employees:t}),Object(f.jsx)(v,{employees:Object(u.a)(t.filter((function(e){return e.active})))})]})};s.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(i.a,{store:b,children:Object(f.jsx)(L,{})})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.dcbedd48.chunk.js.map