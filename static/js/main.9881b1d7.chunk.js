(this["webpackJsonpembed-pdf-from-drive"]=this["webpackJsonpembed-pdf-from-drive"]||[]).push([[0],{14:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),a=n(9),s=n.n(a),l=(n(14),n(7)),r=n(4),o=n(6),d=n(8),m=n(0),j={name:"Equipments",slug:"equipments",schema:{field_groups:[{name:"Equipment Information",slug:"equipment_information",fields:[{name:"Equipment No",slug:"equipment_no",type:"TEXT",min_length:1,max_length:255,is_unique:!0,is_required:!0},{name:"First Name",slug:"first_name",type:"TEXT",min_length:1,max_length:255,is_required:!0},{name:"Last Name",slug:"last_name",type:"TEXT",min_length:1,max_length:255,is_required:!0},{name:"Mobile Phone",slug:"mobile_phone",type:"TEXT",pattern:"",is_required:!0},{name:"Email",slug:"email",type:"EMAIL",is_required:!0},{name:"Category",slug:"category",type:"DROPDOWN",is_required:!0,is_external:!1,is_multi:!1,data_source_local:{options:[{label:"Residential",value:"Residential"},{label:"Commercial",value:"Commercial"}]}},{name:"Sales tax code",slug:"sales_tax_code",type:"TEXT",min_length:1,max_length:255,is_required:!1},{name:"Invoice method",slug:"invoice_method",type:"DROPDOWN",is_required:!0,is_external:!1,is_multi:!1,data_source_local:{options:[{label:"Email",value:"email"},{label:"Paper",value:"paper"}]}},{name:"Invoice Type",slug:"invoice_type",type:"TEXT",min_length:1,max_length:255,is_required:!1}]}]}},h=function(){var e=Object(i.useState)([]),t=Object(d.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)({equipment_no:"",first_name:"",last_name:"",mobile_phone:"",email:"",category:"",sales_tax_code:"",invoice_method:"",invoice_type:""}),s=Object(d.a)(a,2),h=s[0],u=s[1];function b(e){u(Object(o.a)(Object(o.a)({},h),{},Object(r.a)({},e.target.name,e.target.value)))}var _=h.equipment_no,p=h.first_name,x=h.last_name,O=h.mobile_phone,g=h.email,v=h.category,f=h.sales_tax_code,y=h.invoice_method,q=h.invoice_type;return Object(m.jsxs)("div",{className:"wrapper",children:[Object(m.jsx)("h1",{children:"Equipments List App"}),Object(m.jsx)("p",{children:"Add and view your equipments info using local storage"}),Object(m.jsxs)("div",{className:"main",children:[Object(m.jsxs)("div",{className:"form-container",children:[j.schema.field_groups.map((function(e){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:e.name}),e.fields.map((function(e){return Object(m.jsxs)("div",{children:[Object(m.jsxs)("label",{children:[e.name,":"]}),Object(m.jsx)("input",{type:e.type,className:"form-control",autoComplete:"off",name:e.name,required:e.is_required,multiple:e.is_multi,onChange:b,value:h.value})]})}))]})})),Object(m.jsx)("button",{onClick:function(){c([].concat(Object(l.a)(n),[{equipment_no:_,first_name:p,last_name:x,mobile_phone:O,email:g,category:v,sales_tax_code:f,invoice_method:y,invoice_type:q}])),u({equipment_no:"",first_name:"",last_name:"",mobile_phone:"",email:"",category:"",sales_tax_code:"",invoice_method:"",invoice_type:""})},children:" ADD "}),Object(m.jsx)("br",{}),Object(m.jsx)("button",{onClick:function(){console.log("Object store in array",n)},children:" Check Array in Console"}),Object(m.jsx)("br",{})]}),Object(m.jsx)("div",{className:"view-container",children:Object(m.jsx)("div",{className:"table-responsive",children:Object(m.jsx)("table",{className:"table",border:1,cellPadding:10,children:Object(m.jsxs)("tbody",{children:[Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"Equipment No"}),Object(m.jsx)("th",{children:"First Name"}),Object(m.jsx)("th",{children:"Last Name"}),Object(m.jsx)("th",{children:"Mobile Phone"}),Object(m.jsx)("th",{children:"Email"}),Object(m.jsx)("th",{children:"Category"}),Object(m.jsx)("th",{children:"Sales tax code"}),Object(m.jsx)("th",{children:"Invoice method"}),Object(m.jsx)("th",{children:"Invoice Type"})]}),n.length<1?Object(m.jsx)("tr",{children:Object(m.jsx)("td",{colSpan:4,children:"NO data Enter yet !"})}):n.map((function(e,t){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:e.equipment_no}),Object(m.jsx)("td",{children:e.first_name}),Object(m.jsx)("td",{children:e.last_name}),Object(m.jsx)("td",{children:e.mobile_phone}),Object(m.jsx)("td",{children:e.email}),Object(m.jsx)("td",{children:e.category}),Object(m.jsx)("td",{children:e.sales_tax_code}),Object(m.jsx)("td",{children:e.invoice_method}),Object(m.jsx)("td",{children:e.invoice_type}),Object(m.jsx)("td",{children:Object(m.jsx)("button",{onClick:function(){return function(e){var t=Object(l.a)(n);t.splice(e,1),c(t)}(t)},children:"Delete"})})]},t)}))]})})})})]})]})},u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),i(e),c(e),a(e),s(e)}))};n(16);s.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(h,{})}),document.getElementById("root")),u()}},[[17,1,2]]]);
//# sourceMappingURL=main.9881b1d7.chunk.js.map