(this.webpackJsonpgreevil=this.webpackJsonpgreevil||[]).push([[0],{48:function(e,t,n){e.exports=n(60)},60:function(e,t,n){"use strict";n.r(t);n(49);var a=n(5),o=n.n(a),r=n(0),c=n.n(r),i=n(39),l=n.n(i),u=n(23),d=n(7),s=n(4),m=n(61),g=n(62),f=Object(r.createContext)(),b=Object(r.createContext)(),y=function(e,t){var n={},a=function(t){var a=e[t];n[t]={budget:0,assets:0},console.log(a);var o=Object.keys(a.budgets).map((function(e){return a.budgets[e]})).sort((function(e,t){return new Date(e.date)-new Date(t.date)})),r=o[o.length-1];n[t].budget=r.amount;for(var c=0;c<o.length;c++){var i=o[c],l=o[c+1];n[t].assets+=l?Object(m.a)(l.date,i.date)*i.amount:(Object(m.a)(Object(g.a)(new Date),i.date)+1)*i.amount}var u=!0,d=!1,s=void 0;try{for(var f,b=a.transactions[Symbol.iterator]();!(u=(f=b.next()).done);u=!0){var y=f.value;n[t].assets-=y.amount}}catch(h){d=!0,s=h}finally{try{u||null==b.return||b.return()}finally{if(d)throw s}}};for(var o in e)a(o);t({type:"SET_META",payload:n}),t({type:"SET_CATEGORIES",payload:e})},h=function(e,t){switch(t.type){case"ADD_CATEGORY":return Object(s.a)({},e,{categories:Object(s.a)({},e.categories,Object(d.a)({},t.payload.id,t.payload))});case"SET_CATEGORIES":return Object(s.a)({},e,{categories:t.payload});case"SET_META":return Object(s.a)({},e,{meta:t.payload});default:return e}},p=function(e){var t=e.children,n=Object(r.useReducer)(h,{categories:{},meta:{}}),a=Object(u.a)(n,2),i=a[0],l=a[1];return Object(r.useEffect)((function(){o.a.getItem("categories").then((function(e){e&&y(e,l)}))}),[]),c.a.createElement(f.Provider,{value:i},c.a.createElement(b.Provider,{value:l},t))},v=function(){return Object(r.useContext)(f)},j=function(){return Object(r.useContext)(b)},E=n(1),w=n(24),O=n(20),C=E.c.div.withConfig({displayName:"BackButton__BackButtonContainer",componentId:"j9wd6j-0"})(["button{display:flex;align-items:center;margin-bottom:1rem;svg{margin-right:0.5rem;}div{position:relative;top:0.05rem;}}"]),x=function(e){var t=e.className,n=Object(O.g)();return c.a.createElement(C,{className:t},c.a.createElement("button",{type:"button",onClick:function(){return n.goBack()}},c.a.createElement(w.a,null),c.a.createElement("div",null,"Back")))},k=n(31),_=n(14);function I(){var e=Object(_.a)(["\n        background-color: #ef5350;\n      "]);return I=function(){return e},e}var D=E.c.button.withConfig({displayName:"styled__StyledButton",componentId:"sc-7cachl-0"})(["padding:0.5rem;background-color:#42a5f5;color:white;text-align:center;",""],(function(e){if("negative"===e.variant)return Object(E.b)(I())})),M=function(e){var t=e.className,n=e.children,a=Object(k.a)(e,["className","children"]);return c.a.createElement(D,Object.assign({className:t},a),n)};function N(){var e=Object(_.a)(["\n      input {\n        text-align: right;\n      }\n    "]);return N=function(){return e},e}function B(){var e=Object(_.a)(["\n      flex: 1;\n      flex-direction: row;\n      margin-bottom: 0;\n      justify-content: space-between;\n    "]);return B=function(){return e},e}var S=E.c.div.withConfig({displayName:"styled__InputContainer",componentId:"sc-1hti6ks-0"})(["display:flex;flex-direction:column;margin-bottom:1rem;&:last-child{margin-bottom:0;}"," label{width:100%;margin-bottom:0.5rem;}input{width:100%;padding:0.25rem;border-bottom:1px solid #e0e0e0;color:#424242;}",""],(function(e){return e.row&&Object(E.b)(B())}),(function(e){return"number"===e.type&&Object(E.b)(N())})),A=function(e){var t=e.name,n=e.label,a=e.value,o=e.onChange,r=e.onBlur,i=e.type,l=void 0===i?"text":i,u=e.placeholder,d=e.row,s=void 0!==d&&d,m=Object(k.a)(e,["name","label","value","onChange","onBlur","type","placeholder","row"]);return c.a.createElement(S,{row:s,type:l},c.a.createElement("label",{htmlFor:t},n),c.a.createElement("input",Object.assign({name:t,type:l,value:a,onChange:o,onBlur:r,placeholder:u},m)))},T=n(66),z=n(63),F=n(16),R=E.c.div.withConfig({displayName:"styled__BudgetPageContainer",componentId:"sc-3knyxi-0"})(["display:flex;flex-direction:column;height:100%;justify-content:space-between;"]),W=E.c.form.withConfig({displayName:"styled__BudgetForm",componentId:"sc-3knyxi-1"})(["padding:0.5rem;background-color:#f5f5f5;display:flex;flex-direction:column;form{flex:1;}"]),G=function(){var e=Object(O.h)(),t=Object(O.g)(),n=v().categories,a=j(),i=n[e.categoryId],l=i?i.budgets[e.budgetId]:null,u=Object(F.a)({initialValues:{date:new Date,amount:""},onSubmit:function(r){o.a.setItem("categories",Object(s.a)({},n,Object(d.a)({},e.categoryId,Object(s.a)({},i,{budgets:Object(d.a)({},e.budgetId,Object(s.a)({},l,{amount:+r.amount,date:new Date(r.date)}))})))).then((function(e){y(e,a),t.goBack()}))}}),m=u.values,g=u.handleChange,f=u.setFormikState,b=u.handleSubmit;return Object(r.useEffect)((function(){i&&l&&f({values:{date:Object(T.a)(new Date(l.date),"yyyy-MM"),amount:l.amount}})}),[l,i,f]),c.a.createElement(R,null,c.a.createElement(W,null,c.a.createElement(x,null),c.a.createElement(A,{type:"month",label:"Month",name:"date",value:m.date,onChange:function(e){e.persist();var t=e.target.value;if(Object(z.a)(new Date(t),new Date))return alert("Cannot assign budget to date before today");Object.keys(i.budgets).find((function(e){return Object(T.a)(new Date(i.budgets[e].date),"yyyy-MM")===t&&e!==l.id}))?alert("Budget for that month already allocated"):g(e)}}),c.a.createElement(A,{type:"number",label:"Amount",name:"amount",value:m.amount,onChange:g})),c.a.createElement(M,{type:"button",onClick:b,style:{width:"100%"}},"Edit Budget"))},P=E.c.div.withConfig({displayName:"Layout__Row",componentId:"zdn599-0"})(["display:flex;justify-content:",";align-items:",";flex-wrap:",";"],(function(e){return e.justifyContent}),(function(e){return e.alignItems}),(function(e){return e.wrap||"wrap"})),V=E.c.div.withConfig({displayName:"Layout__Column",componentId:"zdn599-1"})(["display:flex;flex-direction:column;justify-content:",";align-items:",";"],(function(e){return e.justifyContent}),(function(e){return e.alignItems})),L=E.c.div.withConfig({displayName:"styled__CategoryContainer",componentId:"sc-1twevse-0"})(["display:flex;flex-direction:column;height:100%;justify-content:space-between;"]),U=E.c.form.withConfig({displayName:"styled__CategoryForm",componentId:"sc-1twevse-1"})(["padding:0.5rem;background-color:#f5f5f5;display:flex;flex-direction:column;form{flex:1;}"]),q=(Object(E.c)(P).withConfig({displayName:"styled__Title",componentId:"sc-1twevse-2"})(["align-items:center;margin-bottom:1rem;button{display:flex;justify-content:center;align-items:center;margin-right:1rem;}h6{line-height:1;}"]),Object(E.c)(P).withConfig({displayName:"styled__BudgetContainer",componentId:"sc-1twevse-3"})(["align-items:center;margin-bottom:1rem;div{flex:1;}button{margin-left:1rem;}"])),H=(Object(E.c)(V).withConfig({displayName:"styled__BudgetInputContainer",componentId:"sc-1twevse-4"})(["border-bottom:0.2rem solid #bdbdbd;position:relative;padding-bottom:1rem;margin-bottom:1rem;"]),E.c.div.withConfig({displayName:"styled__SectionTitle",componentId:"sc-1twevse-5"})(["display:flex;align-items:center;margin-bottom:1rem;button{display:flex;align-items:center;margin-left:0.5rem;}"])),J=function(){var e=Object(O.h)(),t=Object(O.g)(),n=v().categories,a=j(),i=n[e.id],l=Object(F.a)({initialValues:{name:"",budgets:[]},onSubmit:function(r){if(!r.name)return alert("Must have name");var c=Object(s.a)({},i.budgets),l=function(e){r.budgets.find((function(t){return t.id===e}))||delete c[e]};for(var u in c)l(u);var m=Object(s.a)({},n,Object(d.a)({},e.id,Object(s.a)({},i,{name:r.name,budgets:c})));o.a.setItem("categories",m).then((function(e){y(e,a),t.goBack()}))}}),u=l.values,m=l.handleChange,g=l.setFieldValue,f=l.setFormikState,b=l.handleSubmit;Object(r.useEffect)((function(){if(i){var e=Object.keys(i.budgets).map((function(e){return Object(s.a)({},i.budgets[e],{date:Object(T.a)(new Date(i.budgets[e].date),"yyyy-MM")})})).sort((function(e,t){return new Date(t.date)-new Date(e.date)}));f({values:{name:i.name,budgets:e}})}}),[i,f]);var h=Object(r.useCallback)((function(e){window.confirm("Are you sure you want to delete this budget entry?")&&g("budgets",u.budgets.filter((function(t){return t.id!==e.id})))}),[g,u.budgets]),p=Object(r.useCallback)((function(){if(window.confirm("Are you sure want to delete this category?")){var r=Object(s.a)({},n);delete r[e.id],o.a.setItem("categories",r).then((function(e){y(e,a),t.goBack()}))}}),[n,a,t,e.id]);return i?c.a.createElement(L,null,c.a.createElement(U,null,c.a.createElement(x,null),c.a.createElement(A,{label:"Name",name:"name",value:u.name,onChange:m}),c.a.createElement(H,null,c.a.createElement("h6",null,"Budgets"),c.a.createElement("button",{type:"button",onClick:function(){return t.push("/category/".concat(e.id,"/budget"))}},c.a.createElement(w.c,null))),u.budgets.map((function(e){return c.a.createElement(q,{key:e.id},c.a.createElement("div",null,Object(T.a)(new Date(e.date),"MMM yyyy")),c.a.createElement("div",{style:{textAlign:"right"}},e.amount),c.a.createElement("button",{type:"button",onClick:function(){return t.push("/category/".concat(i.id,"/budget/").concat(e.id))}},c.a.createElement(w.b,null)),u.budgets.length>1&&c.a.createElement("button",{type:"button",onClick:function(){return h(e)}},c.a.createElement(w.d,null)))}))),c.a.createElement(P,null,c.a.createElement(M,{variant:"negative",type:"button",onClick:p,style:{flex:1}},"Remove Category"),c.a.createElement(M,{type:"button",onClick:b,style:{flex:1}},"Edit Category"))):null},Y=n(37),$=n(21),K=n.n($),Q=function(){var e=Object(O.g)(),t=j(),n=v().categories,a=Object(F.a)({initialValues:{name:"",budget:"",startMonth:Object(T.a)(new Date,"yyyy-MM")},onSubmit:function(a){if(!a.name)return alert("Must have name");var r=K()(),c={id:K()(),name:a.name,budgets:Object(d.a)({},r,{id:r,date:Object(Y.a)(new Date(a.startMonth)),amount:+a.budget}),transactions:[]};o.a.setItem("categories",Object(s.a)({},n,Object(d.a)({},c.id,c))).then((function(n){y(n,t),e.goBack()}))}}),r=a.values,i=a.handleChange,l=a.handleSubmit;return c.a.createElement(L,null,c.a.createElement(U,null,c.a.createElement(x,null),c.a.createElement(A,{label:"Name",name:"name",value:r.name,onChange:i}),c.a.createElement(A,{label:"Budget",type:"number",name:"budget",value:r.budget,onChange:i}),c.a.createElement(A,{label:"Start Month",type:"month",name:"startMonth",value:r.startMonth,onChange:i})),c.a.createElement(M,{type:"button",onClick:l,style:{width:"100%"}},"Create Category"))};function X(){var e=Object(_.a)(["\n        color: #bdbdbd;\n      "]);return X=function(){return e},e}function Z(){var e=Object(_.a)(["\n        color: #ef5350;\n      "]);return Z=function(){return e},e}function ee(){var e=Object(_.a)(["\n        color: #66bb6a;\n      "]);return ee=function(){return e},e}var te=E.c.div.withConfig({displayName:"styled__CategoryGridContainer",componentId:"e1fcai-0"})(["display:grid;grid-template-columns:1fr auto auto;"]),ne=E.c.div.withConfig({displayName:"styled__CategoryGridCell",componentId:"e1fcai-1"})(["background-color:#f5f5f5;padding:0.5rem;border-bottom:0.1rem solid #e0e0e0;cursor:pointer;"]),ae=Object(E.c)(ne).withConfig({displayName:"styled__CategoryText",componentId:"e1fcai-2"})([""]),oe=Object(E.c)(ne).withConfig({displayName:"styled__CategoryAmountLeft",componentId:"e1fcai-3"})(["text-align:right;",""],(function(e){var t=e.sign;return"positive"===t?Object(E.b)(ee()):"negative"===t?Object(E.b)(Z()):"zero"===t?Object(E.b)(X()):void 0})),re=Object(E.c)(ne).withConfig({displayName:"styled__CategoryBudget",componentId:"e1fcai-4"})(["color:#42a5f5;text-align:right;"]),ce=function(){var e=Object(O.g)(),t=v(),n=t.categories,a=t.meta;return c.a.createElement(te,null,Object.keys(n).map((function(t){var o,i=n[t].name,l=a[t],u=l.assets,d=l.budget;return c.a.createElement(r.Fragment,{key:t},c.a.createElement(ae,null,c.a.createElement("span",{onClick:function(){return e.push("/category/".concat(t))}},i)),c.a.createElement(oe,{sign:(o=u,o>0?"positive":o<0?"negative":"zero")},c.a.createElement("span",{onClick:function(){return e.push("/category/".concat(t,"/transaction"))}},u>0&&"+",u.toLocaleString()," ",0!==d&&"[".concat(Math.round(u/(d||1)*100),"%]"))),c.a.createElement(re,null,c.a.createElement("span",{onClick:function(){return e.push("/category/".concat(t,"/transactions"))}},String(d).toLocaleString())))})))};function ie(){var e=Object(_.a)(["\n  /* @import url('https://rsms.me/inter/inter.css');*/\n  html {\n    font-size: 16px;\n    height: 100%;\n  }\n\n  body {\n    margin: 0;\n    font-family: 'Inter', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    background-color: #E0E0E0;\n    color: #212121;\n    height: 100%;\n  }\n\n  #root {\n    height: 100%;\n  }\n\n  code {\n    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n      monospace;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-weight: bold;\n  }\n\n  h1 {\n    font-size: 2rem;\n  }\n\n  h2 {\n    font-size: 1.832rem;\n  }\n\n  h3 {\n    font-size: 1.666rem;\n  }\n\n  h4 {\n    font-size: 1.5rem;\n  }\n\n  h5 {\n    font-size: 1.322rem;\n  }\n\n  h6 {\n    font-size: 1.116rem;\n  }\n"]);return ie=function(){return e},e}var le=Object(E.a)(ie()),ue=E.c.div.withConfig({displayName:"GlobalStyle__CenterText",componentId:"excj4b-0"})(["display:flex;justify-content:center;align-items:center;height:100%;width:100%;text-align:center;"]),de=le,se=Object(E.c)(V).withConfig({displayName:"styled__DashboardContainer",componentId:"sc-1jibule-0"})(["height:100%;"]),me=E.c.div.withConfig({displayName:"styled__GridContainer",componentId:"sc-1jibule-1"})(["flex:1;overflow-y:auto;"]),ge=function(){var e=Object(O.g)(),t=v(),n=t.categories,a=t.meta,i=Object(r.useState)("0"),l=Object(u.a)(i,2),d=l[0],s=l[1],m=Object(r.useMemo)((function(){var e=0;return Object.values(a).forEach((function(t){var n=t.budget;e+=n})),e}),[a]);return Object(r.useEffect)((function(){o.a.setItem("income",+d)}),[d]),Object(r.useEffect)((function(){o.a.getItem("income").then((function(e){return s(String(e||"0"))}))}),[]),c.a.createElement(se,null,c.a.createElement(me,null,Object.keys(n).length?c.a.createElement(ce,null):c.a.createElement(ue,null,"No categories")),c.a.createElement("div",{style:{backgroundColor:"white"}},c.a.createElement(P,{style:{padding:"0.5rem",paddingBottom:0}},c.a.createElement(A,{row:!0,type:"number",label:"Income",value:d,onChange:function(e){s(e.target.value)}})),c.a.createElement(P,{style:{padding:"0.5rem",paddingBottom:0}},c.a.createElement("div",{style:{flex:1}},"Monthly expenses:"),c.a.createElement("div",{style:{flex:1,textAlign:"right"}},m)),c.a.createElement(P,{style:{padding:"0.5rem",paddingBottom:0}},c.a.createElement("div",{style:{flex:1}},"Monthly savings:"),c.a.createElement("div",{style:{flex:1,textAlign:"right"}},d-m)),c.a.createElement(P,{style:{padding:"0.5rem"}},"Version: 0.0.4")),c.a.createElement(P,null,c.a.createElement(M,{onClick:function(){return e.push("/category")},style:{flex:1}},"Add Category"),c.a.createElement(M,{onClick:function(){return e.push("/transactions")},style:{flex:1,backgroundColor:"#66BB6A"}},"Transactions")))},fe=n(67),be=function(e){var t=Object(r.useRef)(e);return Object(r.useEffect)((function(){t.current=e}),[e]),t.current},ye=E.c.div.withConfig({displayName:"styled__BudgetPageContainer",componentId:"sc-1pqei6a-0"})(["display:flex;flex-direction:column;height:100%;justify-content:space-between;"]),he=E.c.form.withConfig({displayName:"styled__BudgetForm",componentId:"sc-1pqei6a-1"})(["padding:0.5rem;background-color:#f5f5f5;display:flex;flex-direction:column;form{flex:1;}"]),pe=function(){var e=Object(O.g)(),t=Object(O.h)(),n=v().categories,a=j(),i=n[t.categoryId],l=be(i),u=Object(F.a)({initialValues:{date:Object(T.a)(new Date,"yyyy-MM"),amount:""},onSubmit:function(r){if(Object(z.a)(new Date(r.date),new Date))return alert("Cannot assign budget to date before today");if(Object.values(i.budgets).find((function(e){return Object(T.a)(new Date(e.date),"yyyy-MM")===r.date})))alert("Budget for that month already exists");else{var c=K()();o.a.setItem("categories",Object(s.a)({},n,Object(d.a)({},t.categoryId,Object(s.a)({},i,{budgets:Object(s.a)({},i.budgets,Object(d.a)({},c,{id:c,date:new Date(r.date),amount:r.amount}))})))).then((function(t){y(t,a),e.goBack()}))}}}),m=u.values,g=u.handleChange,f=u.handleSubmit,b=u.setFieldValue;return Object(r.useEffect)((function(){if(!l&&i){var e=null;for(var t in i.budgets){var n=i.budgets[t];e||(e=n),new Date(n.date)<new Date(e.date)&&(e=n)}new Date(m.date)<new Date(e.date)&&b(Object(T.a)(Object(fe.a)(new Date(e.date)),"yyyy-MM"))}}),[i,l,b,m.date]),c.a.createElement(ye,null,c.a.createElement(he,null,c.a.createElement(x,null),c.a.createElement(A,{type:"month",label:"Month",name:"date",value:m.date,onChange:function(e){e.persist();var t=e.target.value;Object.keys(i.budgets).find((function(e){return Object(T.a)(new Date(i.budgets[e].date),"yyyy-MM")===t}))?alert("Budget for that month already allocated"):g(e)}}),c.a.createElement(A,{type:"number",label:"Amount",name:"amount",value:m.amount,onChange:g})),c.a.createElement(M,{type:"button",onClick:f,style:{width:"100%"}},"Add Budget"))},ve=n(46),je=E.c.div.withConfig({displayName:"styled__TransactionPageContainer",componentId:"sc-1v9vehn-0"})(["display:flex;flex-direction:column;height:100%;justify-content:space-between;"]),Ee=E.c.form.withConfig({displayName:"styled__TransactionForm",componentId:"sc-1v9vehn-1"})(["padding:0.5rem;background-color:#f5f5f5;display:flex;flex-direction:column;form{flex:1;}"]),we=function(){var e=Object(O.g)(),t=Object(O.h)(),n=v().categories,a=j(),r=n[t.id]||{},i=Object(F.a)({initialValues:{amount:"",description:""},onSubmit:function(c){var i=K()();o.a.setItem("categories",Object(s.a)({},n,Object(d.a)({},t.id,Object(s.a)({},r,{transactions:[].concat(Object(ve.a)(r.transactions),[{id:i,amount:+c.amount,description:c.description,date:new Date}])})))).then((function(t){y(t,a),e.goBack()}))}}),l=i.values,u=i.handleChange,m=i.handleSubmit;return c.a.createElement(je,null,c.a.createElement(Ee,null,c.a.createElement(x,null),c.a.createElement("p",{style:{marginBottom:"1rem"}},"Transaction under"," ",c.a.createElement("span",{style:{fontWeight:"bold"}},r.name)),c.a.createElement(A,{label:"Amount",type:"number",name:"amount",value:l.amount,onChange:u,autoFocus:!0}),c.a.createElement(A,{label:"Description",name:"description",value:l.description,onChange:u})),c.a.createElement(M,{type:"button",onClick:m},"Add Transaction"))},Oe=E.c.div.withConfig({displayName:"styled__TransactionsContainer",componentId:"sc-4lu76x-0"})(["padding:1rem 0.5rem;background-color:white;height:100%;overflow-y:auto;h6{margin-bottom:0.5rem;}"]),Ce=E.c.table.withConfig({displayName:"styled__TransactionsTable",componentId:"sc-4lu76x-1"})(["width:100%;td{padding:0.5rem;}"]),xe=function(){var e=Object(O.h)().id,t=v().categories,n=j(),a=t[e]||{transactions:[]},i=Object(r.useMemo)((function(){var e={},t=!0,n=!1,o=void 0;try{for(var r,c=a.transactions[Symbol.iterator]();!(t=(r=c.next()).done);t=!0){var i=r.value,l=Object(Y.a)(new Date(i.date));void 0===e[l]&&(e[l]=[]),e[l].push(i)}}catch(u){n=!0,o=u}finally{try{t||null==c.return||c.return()}finally{if(n)throw o}}return Object.keys(e).sort((function(e,t){return new Date(t)-new Date(e)})).map((function(t){var n=0,a=!0,o=!1,r=void 0;try{for(var c,i=e[t][Symbol.iterator]();!(a=(c=i.next()).done);a=!0){n+=c.value.amount}}catch(u){o=!0,r=u}finally{try{a||null==i.return||i.return()}finally{if(o)throw r}}return{date:t,transactions:e[t].sort((function(e,t){return new Date(t.date)-new Date(e.date)})),totalAmount:n}}))}),[a.transactions]),l=Object(r.useCallback)((function(r){window.confirm("Delete this transaction?")&&o.a.setItem("categories",Object(s.a)({},t,Object(d.a)({},e,Object(s.a)({},a,{transactions:a.transactions.filter((function(e){return r!==e.id}))})))).then((function(e){y(e,n)}))}),[t,a,n,e]),u=0;return c.a.createElement(Oe,null,c.a.createElement(x,null),c.a.createElement("h6",null,"Category - ",a.name),c.a.createElement(Ce,null,c.a.createElement("tbody",null,i.map((function(e){return u++,c.a.createElement(r.Fragment,{key:e.date},c.a.createElement("tr",{style:{paddingTop:"1rem",borderBottom:"1px solid black",backgroundColor:u%2===0?"white":"#e0e0e0"}},c.a.createElement("td",{colSpan:2,style:{fontWeight:"bold"}},Object(T.a)(new Date(e.date),"MMM d")),c.a.createElement("td",{style:{textAlign:"right",fontWeight:"bold"}},e.totalAmount)),e.transactions.map((function(e){return u++,c.a.createElement("tr",{style:{backgroundColor:u%2===0?"white":"#e0e0e0"},key:e.id,onClick:function(){return l(e.id)}},c.a.createElement("td",null,Object(T.a)(e.date,"HH:mm")),c.a.createElement("td",null,e.description||"\u2014"),c.a.createElement("td",{style:{textAlign:"right"}},e.amount))})))})))))},ke=E.c.div.withConfig({displayName:"styled__TransactionsContainer",componentId:"zg1d00-0"})(["padding:1rem 0.5rem;background-color:white;height:100%;overflow-y:auto;display:flex;flex-direction:column;h6{margin-bottom:0.5rem;}"]),_e=E.c.table.withConfig({displayName:"styled__TransactionsTable",componentId:"zg1d00-1"})(["width:100%;td{padding:0.5rem;}"]),Ie=n(64),De=n(65),Me=function(){var e=v().categories,t=j(),n=Object(r.useState)(String(Object(Y.a)(new Date))),a=Object(u.a)(n,2),i=a[0],l=a[1],m=Object(r.useMemo)((function(){var t=[];return Object.values(e).forEach((function(e){e.transactions.forEach((function(n){Object(Ie.a)(Object(Y.a)(n.date),new Date(i))&&t.push(Object(s.a)({},n,{categoryName:e.name,categoryId:e.id}))}))})),t.sort((function(e,t){return t.date-e.date}))}),[e,i]),g=Object(r.useCallback)((function(n){if(window.confirm("Delete this transaction?")){var a=e[n.categoryId];o.a.setItem("categories",Object(s.a)({},e,Object(d.a)({},a.id,Object(s.a)({},a,{transactions:a.transactions.filter((function(e){return e.id!==n.id}))})))).then((function(e){y(e,t)}))}}),[e,t]);return c.a.createElement(ke,null,c.a.createElement(x,null),c.a.createElement(A,{label:"Date",type:"date",value:Object(T.a)(new Date(i),"yyyy-MM-dd"),onChange:function(e){l(e.target.value)}}),c.a.createElement("div",{style:{flex:1,overflowY:"auto"}},c.a.createElement(_e,null,c.a.createElement("tbody",null,m.map((function(e,t){return c.a.createElement("tr",{key:e.id,onClick:function(){return g(e)},style:{backgroundColor:t%2===0?"white":"#e0e0e0"}},c.a.createElement("td",null,e.categoryName),c.a.createElement("td",null,e.description||"\u2014"),c.a.createElement("td",{style:{textAlign:"right"}},e.amount))}))))),c.a.createElement(P,{style:{marginTop:"1rem"}},c.a.createElement(M,{style:{flex:1,marginRight:"1rem"},onClick:function(){l(String(Object(De.a)(new Date(i),1)))}},"Next"),c.a.createElement(M,{style:{flex:1},onClick:function(){l(String(Object(De.a)(new Date(i),-1)))}},"Previous")))},Ne=n(13),Be=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(de,null),c.a.createElement(p,null,c.a.createElement(Ne.a,null,c.a.createElement(O.d,null,c.a.createElement(O.b,{exact:!0,path:"/",component:ge}),c.a.createElement(O.b,{exact:!0,path:"/category",component:Q}),c.a.createElement(O.b,{exact:!0,path:"/category/:id",component:J}),c.a.createElement(O.b,{exact:!0,path:"/category/:categoryId/budget/",component:pe}),c.a.createElement(O.b,{exact:!0,path:"/category/:categoryId/budget/:budgetId",component:G}),c.a.createElement(O.b,{exact:!0,path:"/category/:id/transaction",component:we}),c.a.createElement(O.b,{exact:!0,path:"/category/:id/transactions",component:xe}),c.a.createElement(O.b,{exact:!0,path:"/transactions",component:Me}),c.a.createElement(O.a,{to:"/"})))))},Se=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ae(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.config({name:"Greevil DB"}),l.a.render(c.a.createElement(Be,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/greevil",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/greevil","/service-worker.js");Se?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Ae(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Ae(t,e)}))}}()}},[[48,1,2]]]);
//# sourceMappingURL=main.edd49c40.chunk.js.map