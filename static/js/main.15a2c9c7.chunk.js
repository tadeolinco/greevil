(this.webpackJsonpgreevil=this.webpackJsonpgreevil||[]).push([[0],{49:function(e,t,n){e.exports=n(63)},63:function(e,t,n){"use strict";n.r(t);n(50);var a=n(5),o=n.n(a),r=n(0),c=n.n(r),i=n(38),l=n.n(i),u=n(45),d=n(23),s=n(7),m=n(4),f=n(64),g=n(65),b=Object(r.createContext)(),y=Object(r.createContext)(),h=function(e,t){var n={},a=function(t){var a=e[t];n[t]={budget:0,assets:0},console.log(a);var o=Object.keys(a.budgets).map((function(e){return a.budgets[e]})).sort((function(e,t){return new Date(e.date)-new Date(t.date)})),r=o[o.length-1];n[t].budget=r.amount;for(var c=0;c<o.length;c++){var i=o[c],l=o[c+1];n[t].assets+=l?Object(f.a)(l.date,i.date)*i.amount:(Object(f.a)(Object(g.a)(new Date),i.date)+1)*i.amount}var u=!0,d=!1,s=void 0;try{for(var m,b=a.transactions[Symbol.iterator]();!(u=(m=b.next()).done);u=!0){var y=m.value;n[t].assets-=y.amount}}catch(h){d=!0,s=h}finally{try{u||null==b.return||b.return()}finally{if(d)throw s}}};for(var o in e)a(o);t({type:"SET_META",payload:n}),t({type:"SET_CATEGORIES",payload:e})},p=function(e,t){switch(t.type){case"ADD_CATEGORY":return Object(m.a)({},e,{categories:Object(m.a)({},e.categories,Object(s.a)({},t.payload.id,t.payload))});case"SET_CATEGORIES":return Object(m.a)({},e,{categories:t.payload});case"SET_META":return Object(m.a)({},e,{meta:t.payload});default:return e}},v=function(e){var t=e.children,n=Object(r.useReducer)(p,{categories:{},meta:{}}),a=Object(d.a)(n,2),i=a[0],l=a[1];return Object(r.useEffect)((function(){o.a.getItem("categories").then((function(e){e&&h(e,l)}))}),[]),c.a.createElement(b.Provider,{value:i},c.a.createElement(y.Provider,{value:l},t))},j=function(){return Object(r.useContext)(b)},E=function(){return Object(r.useContext)(y)},O=n(1),w=n(24),C=n(20),x=O.c.div.withConfig({displayName:"BackButton__BackButtonContainer",componentId:"j9wd6j-0"})(["button{display:flex;align-items:center;margin-bottom:1rem;svg{margin-right:0.5rem;}div{position:relative;top:0.05rem;}}"]),k=function(e){var t=e.className,n=Object(C.g)();return c.a.createElement(x,{className:t},c.a.createElement("button",{type:"button",onClick:function(){return n.goBack()}},c.a.createElement(w.a,null),c.a.createElement("div",null,"Back")))},_=n(48),I=n(14);function D(){var e=Object(I.a)(["\n        background-color: #ef5350;\n      "]);return D=function(){return e},e}var N=O.c.button.withConfig({displayName:"styled__StyledButton",componentId:"sc-7cachl-0"})(["padding:0.5rem;background-color:#42a5f5;color:white;text-align:center;",""],(function(e){if("negative"===e.variant)return Object(O.b)(D())})),M=function(e){var t=e.className,n=e.children,a=Object(_.a)(e,["className","children"]);return c.a.createElement(N,Object.assign({className:t},a),n)};function S(){var e=Object(I.a)(["\n      input {\n        text-align: right;\n      }\n    "]);return S=function(){return e},e}function B(){var e=Object(I.a)(["\n      flex: 1;\n      flex-direction: row;\n      margin-bottom: 0;\n      justify-content: space-between;\n    "]);return B=function(){return e},e}var A=O.c.div.withConfig({displayName:"styled__InputContainer",componentId:"sc-1hti6ks-0"})(["display:flex;flex-direction:column;margin-bottom:1rem;&:last-child{margin-bottom:0;}"," label{width:100%;margin-bottom:0.5rem;}input{width:100%;padding:0.25rem;border-bottom:1px solid #e0e0e0;color:#424242;}",""],(function(e){return e.row&&Object(O.b)(B())}),(function(e){return"number"===e.type&&Object(O.b)(S())})),T=function(e){var t=e.name,n=e.label,a=e.value,o=e.onChange,r=e.onBlur,i=e.type,l=void 0===i?"text":i,u=e.placeholder,d=e.row,s=void 0!==d&&d;return c.a.createElement(A,{row:s,type:l},c.a.createElement("label",{htmlFor:t},n),c.a.createElement("input",{name:t,type:l,value:a,onChange:o,onBlur:r,placeholder:u}))},z=n(69),F=n(66),R=n(16),W=O.c.div.withConfig({displayName:"styled__BudgetPageContainer",componentId:"sc-3knyxi-0"})(["display:flex;flex-direction:column;height:100vh;justify-content:space-between;"]),G=O.c.form.withConfig({displayName:"styled__BudgetForm",componentId:"sc-3knyxi-1"})(["padding:0.5rem;background-color:#f5f5f5;display:flex;flex-direction:column;form{flex:1;}"]),P=function(){var e=Object(C.h)(),t=Object(C.g)(),n=j().categories,a=E(),i=n[e.categoryId],l=i?i.budgets[e.budgetId]:null,u=Object(R.a)({initialValues:{date:new Date,amount:"0"},onSubmit:function(r){o.a.setItem("categories",Object(m.a)({},n,Object(s.a)({},e.categoryId,Object(m.a)({},i,{budgets:Object(s.a)({},e.budgetId,Object(m.a)({},l,{amount:+r.amount,date:new Date(r.date)}))})))).then((function(e){h(e,a),t.goBack()}))}}),d=u.values,f=u.handleChange,g=u.setFormikState,b=u.handleSubmit;return Object(r.useEffect)((function(){i&&l&&g({values:{date:Object(z.a)(new Date(l.date),"yyyy-MM"),amount:l.amount}})}),[l,i,g]),c.a.createElement(W,null,c.a.createElement(G,null,c.a.createElement(k,null),c.a.createElement(T,{type:"month",label:"Month",name:"date",value:d.date,onChange:function(e){e.persist();var t=e.target.value;if(Object(F.a)(new Date(t),new Date))return alert("Cannot assign budget to date before today");Object.keys(i.budgets).find((function(e){return Object(z.a)(new Date(i.budgets[e].date),"yyyy-MM")===t&&e!==l.id}))?alert("Budget for that month already allocated"):f(e)}}),c.a.createElement(T,{type:"number",label:"Amount",name:"amount",value:d.amount,onChange:f})),c.a.createElement(M,{type:"button",onClick:b,style:{width:"100%"}},"Edit Budget"))},L=O.c.div.withConfig({displayName:"Layout__Row",componentId:"zdn599-0"})(["display:flex;justify-content:",";align-items:",";flex-wrap:",";"],(function(e){return e.justifyContent}),(function(e){return e.alignItems}),(function(e){return e.wrap||"wrap"})),V=O.c.div.withConfig({displayName:"Layout__Column",componentId:"zdn599-1"})(["display:flex;flex-direction:column;justify-content:",";align-items:",";"],(function(e){return e.justifyContent}),(function(e){return e.alignItems})),U=O.c.div.withConfig({displayName:"styled__CategoryContainer",componentId:"sc-1twevse-0"})(["display:flex;flex-direction:column;height:100vh;justify-content:space-between;"]),q=O.c.form.withConfig({displayName:"styled__CategoryForm",componentId:"sc-1twevse-1"})(["padding:0.5rem;background-color:#f5f5f5;display:flex;flex-direction:column;form{flex:1;}"]),H=(Object(O.c)(L).withConfig({displayName:"styled__Title",componentId:"sc-1twevse-2"})(["align-items:center;margin-bottom:1rem;button{display:flex;justify-content:center;align-items:center;margin-right:1rem;}h6{line-height:1;}"]),Object(O.c)(L).withConfig({displayName:"styled__BudgetContainer",componentId:"sc-1twevse-3"})(["align-items:center;margin-bottom:1rem;div{flex:1;}button{margin-left:1rem;}"])),J=(Object(O.c)(V).withConfig({displayName:"styled__BudgetInputContainer",componentId:"sc-1twevse-4"})(["border-bottom:0.2rem solid #bdbdbd;position:relative;padding-bottom:1rem;margin-bottom:1rem;"]),O.c.div.withConfig({displayName:"styled__SectionTitle",componentId:"sc-1twevse-5"})(["display:flex;align-items:center;margin-bottom:1rem;button{display:flex;align-items:center;margin-left:0.5rem;}"])),Y=function(){var e=Object(C.h)(),t=Object(C.g)(),n=j().categories,a=E(),i=n[e.id],l=Object(R.a)({initialValues:{name:"",budgets:[]},onSubmit:function(r){if(!r.name)return alert("Must have name");var c=Object(m.a)({},i.budgets),l=function(e){r.budgets.find((function(t){return t.id===e}))||delete c[e]};for(var u in c)l(u);var d=Object(m.a)({},n,Object(s.a)({},e.id,Object(m.a)({},i,{name:r.name,budgets:c})));o.a.setItem("categories",d).then((function(e){h(e,a),t.goBack()}))}}),u=l.values,d=l.handleChange,f=l.setFieldValue,g=l.setFormikState,b=l.handleSubmit;Object(r.useEffect)((function(){if(i){var e=Object.keys(i.budgets).map((function(e){return Object(m.a)({},i.budgets[e],{date:Object(z.a)(new Date(i.budgets[e].date),"yyyy-MM")})})).sort((function(e,t){return new Date(t.date)-new Date(e.date)}));g({values:{name:i.name,budgets:e}})}}),[i,g]);var y=Object(r.useCallback)((function(e){window.confirm("Are you sure you want to delete this budget entry?")&&f("budgets",u.budgets.filter((function(t){return t.id!==e.id})))}),[f,u.budgets]),p=Object(r.useCallback)((function(){if(window.confirm("Are you sure want to delete this category?")){var r=Object(m.a)({},n);delete r[e.id],o.a.setItem("categories",r).then((function(e){h(e,a),t.goBack()}))}}),[n,a,t,e.id]);return i?c.a.createElement(U,null,c.a.createElement(q,null,c.a.createElement(k,null),c.a.createElement(T,{label:"Name",name:"name",value:u.name,onChange:d}),c.a.createElement(J,null,c.a.createElement("h6",null,"Budgets"),c.a.createElement("button",{type:"button",onClick:function(){return t.push("/category/".concat(e.id,"/budget"))}},c.a.createElement(w.c,null))),u.budgets.map((function(e){return c.a.createElement(H,{key:e.id},c.a.createElement("div",null,Object(z.a)(new Date(e.date),"MMM yyyy")),c.a.createElement("div",{style:{textAlign:"right"}},e.amount),c.a.createElement("button",{type:"button",onClick:function(){return t.push("/category/".concat(i.id,"/budget/").concat(e.id))}},c.a.createElement(w.b,null)),u.budgets.length>1&&c.a.createElement("button",{type:"button",onClick:function(){return y(e)}},c.a.createElement(w.d,null)))}))),c.a.createElement(L,null,c.a.createElement(M,{variant:"negative",type:"button",onClick:p,style:{flex:1}},"Remove Category"),c.a.createElement(M,{type:"button",onClick:b,style:{flex:1}},"Edit Category"))):null},$=n(36),K=n(21),Q=n.n(K),X=function(){var e=Object(C.g)(),t=E(),n=j().categories,a=Object(R.a)({initialValues:{name:"",budget:"0",startMonth:Object(z.a)(new Date,"yyyy-MM")},onSubmit:function(a){if(!a.name)return alert("Must have name");var r=Q()(),c={id:Q()(),name:a.name,budgets:Object(s.a)({},r,{id:r,date:Object($.a)(new Date(a.startMonth)),amount:+a.budget}),transactions:[]};o.a.setItem("categories",Object(m.a)({},n,Object(s.a)({},c.id,c))).then((function(n){h(n,t),e.goBack()}))}}),r=a.values,i=a.handleChange,l=a.handleSubmit;return c.a.createElement(U,null,c.a.createElement(q,null,c.a.createElement(k,null),c.a.createElement(T,{label:"Name",name:"name",value:r.name,onChange:i}),c.a.createElement(T,{label:"Budget",type:"number",name:"budget",value:r.budget,onChange:i}),c.a.createElement(T,{label:"Start Month",type:"month",name:"startMonth",value:r.startMonth,onChange:i})),c.a.createElement(M,{type:"button",onClick:l,style:{width:"100%"}},"Create Category"))};function Z(){var e=Object(I.a)(["\n        color: #bdbdbd;\n      "]);return Z=function(){return e},e}function ee(){var e=Object(I.a)(["\n        color: #ef5350;\n      "]);return ee=function(){return e},e}function te(){var e=Object(I.a)(["\n        color: #66bb6a;\n      "]);return te=function(){return e},e}var ne=O.c.div.withConfig({displayName:"styled__CategoryGridContainer",componentId:"e1fcai-0"})(["display:grid;grid-template-columns:1fr auto auto;"]),ae=O.c.div.withConfig({displayName:"styled__CategoryGridCell",componentId:"e1fcai-1"})(["background-color:#f5f5f5;padding:0.5rem;border-bottom:0.1rem solid #e0e0e0;cursor:pointer;"]),oe=Object(O.c)(ae).withConfig({displayName:"styled__CategoryText",componentId:"e1fcai-2"})([""]),re=Object(O.c)(ae).withConfig({displayName:"styled__CategoryAmountLeft",componentId:"e1fcai-3"})(["text-align:right;",""],(function(e){var t=e.sign;return"positive"===t?Object(O.b)(te()):"negative"===t?Object(O.b)(ee()):"zero"===t?Object(O.b)(Z()):void 0})),ce=Object(O.c)(ae).withConfig({displayName:"styled__CategoryBudget",componentId:"e1fcai-4"})(["color:#42a5f5;text-align:right;"]),ie=function(){var e=Object(C.g)(),t=j(),n=t.categories,a=t.meta;return c.a.createElement(ne,null,Object.keys(n).map((function(t){var o,i=n[t].name,l=a[t],u=l.assets,d=l.budget;return c.a.createElement(r.Fragment,{key:t},c.a.createElement(oe,null,c.a.createElement("span",{onClick:function(){return e.push("/category/".concat(t))}},i)),c.a.createElement(re,{sign:(o=u,o>0?"positive":o<0?"negative":"zero")},c.a.createElement("span",{onClick:function(){return e.push("/category/".concat(t,"/transaction"))}},u>0&&"+",u.toLocaleString())),c.a.createElement(ce,null,c.a.createElement("span",{onClick:function(){return e.push("/category/".concat(t,"/transactions"))}},String(d).toLocaleString())))})))};function le(){var e=Object(I.a)(["\n  /* @import url('https://rsms.me/inter/inter.css');*/\n  html {\n    font-size: 16px;\n  }\n\n  body {\n    margin: 0;\n    font-family: 'Inter', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    background-color: #E0E0E0;\n    color: #212121;\n  }\n\n  code {\n    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n      monospace;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-weight: bold;\n  }\n\n  h1 {\n    font-size: 2rem;\n  }\n\n  h2 {\n    font-size: 1.832rem;\n  }\n\n  h3 {\n    font-size: 1.666rem;\n  }\n\n  h4 {\n    font-size: 1.5rem;\n  }\n\n  h5 {\n    font-size: 1.322rem;\n  }\n\n  h6 {\n    font-size: 1.116rem;\n  }\n"]);return le=function(){return e},e}var ue=Object(O.a)(le()),de=O.c.div.withConfig({displayName:"GlobalStyle__CenterText",componentId:"excj4b-0"})(["display:flex;justify-content:center;align-items:center;height:100%;width:100%;text-align:center;"]),se=ue,me=Object(O.c)(V).withConfig({displayName:"styled__DashboardContainer",componentId:"sc-1jibule-0"})(["height:100vh;"]),fe=O.c.div.withConfig({displayName:"styled__GridContainer",componentId:"sc-1jibule-1"})(["flex:1;"]),ge=function(){var e=Object(C.g)(),t=j(),n=t.categories,a=t.meta,i=Object(r.useState)("0"),l=Object(d.a)(i,2),u=l[0],s=l[1],m=Object(r.useMemo)((function(){var e=0;return Object.values(a).forEach((function(t){var n=t.budget;e+=n})),e}),[a]);return Object(r.useEffect)((function(){o.a.setItem("income",+u)}),[u]),Object(r.useEffect)((function(){o.a.getItem("income").then((function(e){return s(String(e||"0"))}))}),[]),c.a.createElement(me,null,c.a.createElement(fe,null,Object.keys(n).length?c.a.createElement(ie,null):c.a.createElement(de,null,"No categories")),c.a.createElement("div",{style:{backgroundColor:"white"}},c.a.createElement(L,{style:{padding:"0.5rem",paddingBottom:0}},c.a.createElement(T,{row:!0,type:"number",label:"Income",value:u,onChange:function(e){s(e.target.value)}})),c.a.createElement(L,{style:{padding:"0.5rem",paddingBottom:0}},c.a.createElement("div",{style:{flex:1}},"Monthly expenses:"),c.a.createElement("div",{style:{flex:1,textAlign:"right"}},m)),c.a.createElement(L,{style:{padding:"0.5rem"}},c.a.createElement("div",{style:{flex:1}},"Monthly savings:"),c.a.createElement("div",{style:{flex:1,textAlign:"right"}},u-m))),c.a.createElement(L,null,c.a.createElement(M,{onClick:function(){return e.push("/category")},style:{flex:1}},"Add Category"),c.a.createElement(M,{onClick:function(){return e.push("/transactions")},style:{flex:1,backgroundColor:"#66BB6A"}},"Transactions")))},be=n(70),ye=function(e){var t=Object(r.useRef)(e);return Object(r.useEffect)((function(){t.current=e}),[e]),t.current},he=O.c.div.withConfig({displayName:"styled__BudgetPageContainer",componentId:"sc-1pqei6a-0"})(["display:flex;flex-direction:column;height:100vh;justify-content:space-between;"]),pe=O.c.form.withConfig({displayName:"styled__BudgetForm",componentId:"sc-1pqei6a-1"})(["padding:0.5rem;background-color:#f5f5f5;display:flex;flex-direction:column;form{flex:1;}"]),ve=function(){var e=Object(C.g)(),t=Object(C.h)(),n=j().categories,a=E(),i=n[t.categoryId],l=ye(i),u=Object(R.a)({initialValues:{date:Object(z.a)(new Date,"yyyy-MM"),amount:"0"},onSubmit:function(r){if(Object(F.a)(new Date(r.date),new Date))return alert("Cannot assign budget to date before today");if(Object.values(i.budgets).find((function(e){return Object(z.a)(new Date(e.date),"yyyy-MM")===r.date})))alert("Budget for that month already exists");else{var c=Q()();o.a.setItem("categories",Object(m.a)({},n,Object(s.a)({},t.categoryId,Object(m.a)({},i,{budgets:Object(m.a)({},i.budgets,Object(s.a)({},c,{id:c,date:new Date(r.date),amount:r.amount}))})))).then((function(t){h(t,a),e.goBack()}))}}}),d=u.values,f=u.handleChange,g=u.handleSubmit,b=u.setFieldValue;return Object(r.useEffect)((function(){if(!l&&i){var e=null;for(var t in i.budgets){var n=i.budgets[t];e||(e=n),new Date(n.date)<new Date(e.date)&&(e=n)}new Date(d.date)<new Date(e.date)&&b(Object(z.a)(Object(be.a)(new Date(e.date)),"yyyy-MM"))}}),[i,l,b,d.date]),c.a.createElement(he,null,c.a.createElement(pe,null,c.a.createElement(k,null),c.a.createElement(T,{type:"month",label:"Month",name:"date",value:d.date,onChange:function(e){e.persist();var t=e.target.value;Object.keys(i.budgets).find((function(e){return Object(z.a)(new Date(i.budgets[e].date),"yyyy-MM")===t}))?alert("Budget for that month already allocated"):f(e)}}),c.a.createElement(T,{type:"number",label:"Amount",name:"amount",value:d.amount,onChange:f})),c.a.createElement(M,{type:"button",onClick:g,style:{width:"100%"}},"Add Budget"))},je=n(46),Ee=O.c.div.withConfig({displayName:"styled__TransactionPageContainer",componentId:"sc-1v9vehn-0"})(["display:flex;flex-direction:column;height:100vh;justify-content:space-between;"]),Oe=O.c.form.withConfig({displayName:"styled__TransactionForm",componentId:"sc-1v9vehn-1"})(["padding:0.5rem;background-color:#f5f5f5;display:flex;flex-direction:column;form{flex:1;}"]),we=function(){var e=Object(C.g)(),t=Object(C.h)(),n=j().categories,a=E(),r=n[t.id]||{},i=Object(R.a)({initialValues:{amount:"0",description:""},onSubmit:function(c){var i=Q()();o.a.setItem("categories",Object(m.a)({},n,Object(s.a)({},t.id,Object(m.a)({},r,{transactions:[].concat(Object(je.a)(r.transactions),[{id:i,amount:+c.amount,description:c.description,date:new Date}])})))).then((function(t){h(t,a),e.goBack()}))}}),l=i.values,u=i.handleChange,d=i.handleSubmit;return c.a.createElement(Ee,null,c.a.createElement(Oe,null,c.a.createElement(k,null),c.a.createElement("p",{style:{marginBottom:"1rem"}},"Transaction under"," ",c.a.createElement("span",{style:{fontWeight:"bold"}},r.name)),c.a.createElement(T,{label:"Amount",type:"number",name:"amount",value:l.amount,onChange:u}),c.a.createElement(T,{label:"Description",name:"description",value:l.description,onChange:u})),c.a.createElement(M,{type:"button",onClick:d},"Add Transaction"))},Ce=O.c.div.withConfig({displayName:"styled__TransactionsContainer",componentId:"sc-4lu76x-0"})(["padding:1rem 0.5rem;background-color:white;height:100vh;h6{margin-bottom:0.5rem;}"]),xe=O.c.table.withConfig({displayName:"styled__TransactionsTable",componentId:"sc-4lu76x-1"})(["width:100%;td{padding:0.25rem 0;}"]),ke=function(){var e=Object(C.h)().id,t=j().categories,n=E(),a=t[e]||{transactions:[]},i=Object(r.useMemo)((function(){var e={},t=!0,n=!1,o=void 0;try{for(var r,c=a.transactions[Symbol.iterator]();!(t=(r=c.next()).done);t=!0){var i=r.value,l=Object($.a)(new Date(i.date));void 0===e[l]&&(e[l]=[]),e[l].push(i)}}catch(u){n=!0,o=u}finally{try{t||null==c.return||c.return()}finally{if(n)throw o}}return Object.keys(e).sort((function(e,t){return t-e})).map((function(t){var n=0,a=!0,o=!1,r=void 0;try{for(var c,i=e[t][Symbol.iterator]();!(a=(c=i.next()).done);a=!0){n+=c.value.amount}}catch(u){o=!0,r=u}finally{try{a||null==i.return||i.return()}finally{if(o)throw r}}return{date:t,transactions:e[t].sort((function(e,t){return new Date(t.date)-new Date(e.date)})),totalAmount:n}}))}),[a.transactions]),l=Object(r.useCallback)((function(r){window.confirm("Delete this transaction?")&&o.a.setItem("categories",Object(m.a)({},t,Object(s.a)({},e,Object(m.a)({},a,{transactions:a.transactions.filter((function(e){return r!==e.id}))})))).then((function(e){h(e,n)}))}),[t,a,n,e]);return c.a.createElement(Ce,null,c.a.createElement(k,null),c.a.createElement("h6",null,"Category - ",a.name),c.a.createElement(xe,null,c.a.createElement("tbody",null,i.map((function(e){return c.a.createElement(r.Fragment,{key:e.date},c.a.createElement("tr",{style:{paddingTop:"1rem",borderBottom:"1px solid #e0e0e0"}},c.a.createElement("td",{colSpan:2,style:{fontWeight:"bold"}},Object(z.a)(new Date(e.date),"MMM d")),c.a.createElement("td",{style:{textAlign:"right",fontWeight:"bold"}},e.totalAmount)),e.transactions.map((function(e,t){return c.a.createElement("tr",{key:e.id,onClick:function(){return l(e.id)}},c.a.createElement("td",null,Object(z.a)(e.date,"HH:mm")),c.a.createElement("td",null,e.description||"\u2014"),c.a.createElement("td",{style:{textAlign:"right"}},e.amount))})))})))))},_e=O.c.div.withConfig({displayName:"styled__TransactionsContainer",componentId:"zg1d00-0"})(["padding:1rem 0.5rem;background-color:white;height:100vh;display:flex;flex-direction:column;h6{margin-bottom:0.5rem;}"]),Ie=O.c.table.withConfig({displayName:"styled__TransactionsTable",componentId:"zg1d00-1"})(["width:100%;td{padding:0.25rem 0;}"]),De=n(67),Ne=n(68),Me=function(){var e=j().categories,t=E(),n=Object(r.useState)(String(Object($.a)(new Date))),a=Object(d.a)(n,2),i=a[0],l=a[1],u=Object(r.useMemo)((function(){var t=[];return Object.values(e).forEach((function(e){e.transactions.forEach((function(n){Object(De.a)(Object($.a)(n.date),new Date(i))&&t.push(Object(m.a)({},n,{categoryName:e.name,categoryId:e.id}))}))})),t.sort((function(e,t){return t.date-e.date}))}),[e,i]),f=Object(r.useCallback)((function(n){if(window.confirm("Delete this transaction?")){var a=e[n.categoryId];o.a.setItem("categories",Object(m.a)({},e,Object(s.a)({},a.id,Object(m.a)({},a,{transactions:a.transactions.filter((function(e){return e.id!==n.id}))})))).then((function(e){h(e,t)}))}}),[e,t]);return c.a.createElement(_e,null,c.a.createElement(k,null),c.a.createElement(T,{label:"Date",type:"date",value:Object(z.a)(new Date(i),"yyyy-MM-dd"),onChange:function(e){l(e.target.value)}}),c.a.createElement("div",{style:{flex:1,overflowY:"auto"}},c.a.createElement(Ie,null,c.a.createElement("tbody",null,u.map((function(e){return c.a.createElement("tr",{key:e.id,onClick:function(){return f(e)}},c.a.createElement("td",null,e.categoryName),c.a.createElement("td",null,e.description||"\u2014"),c.a.createElement("td",{style:{textAlign:"right"}},e.amount))}))))),c.a.createElement(L,{style:{marginTop:"1rem"}},c.a.createElement(M,{style:{flex:1,marginRight:"1rem"},onClick:function(){l(String(Object(Ne.a)(new Date(i),1)))}},"Next"),c.a.createElement(M,{style:{flex:1},onClick:function(){l(String(Object(Ne.a)(new Date(i),-1)))}},"Previous")))},Se=n(13),Be=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(se,null),c.a.createElement(v,null,c.a.createElement(Se.a,null,c.a.createElement(C.d,null,c.a.createElement(C.b,{exact:!0,path:"/",component:ge}),c.a.createElement(C.b,{exact:!0,path:"/category",component:X}),c.a.createElement(C.b,{exact:!0,path:"/category/:id",component:Y}),c.a.createElement(C.b,{exact:!0,path:"/category/:categoryId/budget/",component:ve}),c.a.createElement(C.b,{exact:!0,path:"/category/:categoryId/budget/:budgetId",component:P}),c.a.createElement(C.b,{exact:!0,path:"/category/:id/transaction",component:we}),c.a.createElement(C.b,{exact:!0,path:"/category/:id/transactions",component:ke}),c.a.createElement(C.b,{exact:!0,path:"/transactions",component:Me}),c.a.createElement(C.a,{to:"/"})))))},Ae=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Te(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.config({name:"Greevil DB"});var ze=Object(u.hot)((function(){return c.a.createElement(Be,null)}));l.a.render(c.a.createElement(ze,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/greevil",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/greevil","/service-worker.js");Ae?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Te(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Te(t,e)}))}}()}},[[49,1,2]]]);
//# sourceMappingURL=main.15a2c9c7.chunk.js.map