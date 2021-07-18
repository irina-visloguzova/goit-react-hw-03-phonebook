(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={form__filter:"Filter_form__filter__2WcFR","form__name-title":"Filter_form__name-title__2yYGp","form__name-input":"Filter_form__name-input__37IpH"}},12:function(t,e,n){t.exports={section:"PhoneBook_section__3I-Xk",title:"PhoneBook_title__826zQ",subTitle:"PhoneBook_subTitle__JJPQG"}},2:function(t,e,n){t.exports={form__contact:"ContactForm_form__contact__ddxmW","form__name-title":"ContactForm_form__name-title__3UcJA","form__name-input":"ContactForm_form__name-input__ktd4o",button:"ContactForm_button__jEjav",disabled:"ContactForm_disabled__3A5d0"}},29:function(t,e,n){"use strict";n.r(e);var a=n(14),o=n.n(a),c=n(1),r=n.n(c),s=n(15),i=n(6),l=n(7),m=n(8),u=n(10),b=n(9),_=n(3),h=n.n(_),d=n(2),f=n.n(d),j=n(0),p=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={name:"",number:""},t.handleChange=function(e){t.setState(Object(i.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault();var n=t.props.onSubmit,a=t.state,o=a.name,c=a.number;n({id:h.a.generate(),name:o,number:c}),t.setState({name:"",number:""})},t}return Object(m.a)(n,[{key:"btnClasses",value:function(){var t=[f.a.button];return this.state.name&&"number"===typeof+this.state.number&&t.push(f.a.disabled),t.join(" ")}},{key:"render",value:function(){var t=this.props.htmlFor,e=t.nameId,n=t.numberId,a=this.state,o=a.name,c=a.number,r=0===o.length||0===c.length,s=Number.isNaN(Number(c))||null===c,i=r||s;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("form",{onSubmit:this.handleSubmit,className:f.a.form__contact,children:[Object(j.jsxs)("label",{htmlFor:e,className:f.a["form__name-title"],children:["Name",Object(j.jsx)("input",{className:f.a["form__name-input"],onChange:this.handleChange,value:o,name:"name",type:"text",placeholder:"Input name"})]}),Object(j.jsxs)("label",{htmlFor:n,className:f.a["form__name-title"],children:["Number",Object(j.jsx)("input",{className:f.a["form__name-input"],onChange:this.handleChange,value:c,name:"number",type:"tel",placeholder:"Input phone"})]}),Object(j.jsx)("button",{disabled:i,type:"submit",className:this.btnClasses(),children:"Add contact"})]})})}}]),n}(c.Component),O=n(11),C=n.n(O),v=function(t){var e=t.htmlFor,n=t.onChange,a=t.value;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("form",{className:C.a.form__filter,children:Object(j.jsxs)("label",{htmlFor:e,className:C.a["form__name-title"],children:["Fined contacts by name",Object(j.jsx)("input",{className:C.a["form__name-input"],onChange:n,value:a,name:"filter",type:"text",placeholder:"Input fined contacts"})]})})})},g=n(4),x=n.n(g),N=function(t){var e=t.filterContacts,n=t.onClickDelete;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("ul",{className:x.a.list,children:e.map((function(t){return Object(j.jsxs)("li",{className:x.a.item,children:[Object(j.jsxs)("span",{className:x.a["item-name"],children:[t.name,":"]}),Object(j.jsx)("span",{className:x.a["item-number"],children:t.number}),Object(j.jsx)("button",{className:x.a.button,type:"button",onClick:n,id:t.id,children:"Delete"})]},t.id)}))})})},F=n(12),y=n.n(F),I=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={contacts:[],filter:""},t.inputIds={nameId:h.a.generate(),numberId:h.a.generate(),finedId:h.a.generate()},t.handleChange=function(e){t.setState(Object(i.a)({},e.target.name,e.target.value))},t.hasContacts=function(e){return t.state.contacts.find((function(t){return t.name.toLocaleLowerCase()===e.toLocaleLowerCase()}))},t.handleSubmit=function(e){var n=t.state.contacts;n.some((function(t){var n,a;return(null===(n=t.name)||void 0===n?void 0:n.toLowerCase())===(null===(a=e.name)||void 0===a?void 0:a.toLowerCase())}))?alert("".concat(e.name," already in the contacts.")):t.setState({contacts:[].concat(Object(s.a)(n),[e])})},t.deleteContact=function(e){var n=e.target.id,a=t.state.contacts;t.setState({contacts:a.filter((function(t){return t.id!==n}))})},t}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=this.inputIds,o=a.nameId,c=a.numberId,r=a.finedId,s=e.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())}));return Object(j.jsxs)("section",{className:y.a.section,children:[Object(j.jsx)("h1",{className:y.a.title,children:"Phonebook"}),Object(j.jsx)(p,{onSubmit:this.handleSubmit,htmlFor:{nameId:o,numberId:c}}),Object(j.jsx)("h2",{className:y.a.subTitle,children:"Contacts"}),Object(j.jsx)(v,{onChange:this.handleChange,htmlFor:r,value:n}),Object(j.jsx)(N,{filterContacts:s,onClickDelete:this.deleteContact})]})}}]),n}(r.a.Component);function k(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(I,{})})}o.a.render(Object(j.jsx)(k,{}),document.getElementById("root"))},4:function(t,e,n){t.exports={list:"ContactList_list__14Pef",item:"ContactList_item__lp_On","item-name":"ContactList_item-name__1fS6B","item-number":"ContactList_item-number__3FUeH",button:"ContactList_button__21JXV"}}},[[29,1,2]]]);
//# sourceMappingURL=main.da5c9fa6.chunk.js.map