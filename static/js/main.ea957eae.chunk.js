(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{38:function(n,e,t){n.exports=t(52)},52:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),l=t(9),i=t.n(l),c=t(12),o=t(2),u=t(3);t(21);function m(){var n=Object(o.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    outline: 0;\n    box-sizing: 0;\n  }\n  \n  h1, button {\n    @import url('https://fonts.googleapis.com/css?family=Quantico&display=swap');\n    font-family: 'Quantico', sans-serif;\n  }\n\n  #root {\n    max-width: 100vw;\n    margin: 0 auto;\n  }\n\n  .fonter {\n    @import url('https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c&display=swap');\n    font-family: 'M PLUS Rounded 1c', sans-serif;\n  }\n\n  .user-font {\n    @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');\n    font-family: 'Montserrat', sans-serif;\n  }\n"]);return m=function(){return n},n}var p=Object(u.a)(m()),d=t(13),s=t(7);function h(n){var e=n.component,t=(n.isPrivate,Object(d.a)(n,["component","isPrivate"]));return r.a.createElement(s.a,Object.assign({},t,{component:e}))}function f(){var n=Object(o.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    margin-top: 200px;\n    h1 {\n        margin-left: 180px;\n        font-size: 100px;\n        color: white;\n    }\n    h4 {\n        font-size: 20px;\n        color: white;\n    }\n"]);return f=function(){return n},n}function g(){var n=Object(o.a)(["\n    width: 100vw;\n    height: 100vh;\n    background-color: #439D93 ;\n"]);return g=function(){return n},n}h.defaultProps={isPrivate:!1};var E=u.b.div(g()),b=u.b.div(f());var x=function(){return r.a.createElement(E,null,r.a.createElement(b,null,r.a.createElement("h1",null,"Bananinha"),r.a.createElement("h4",null,"Pipoquinha Pipoquinha Pipoquinha Pipoquinha Pipoquinha Pipoquinha Pipoquinha Pipoquinha Pipoquinha")))},v=t(6);function w(){var n=Object(o.a)(["\n"]);return w=function(){return n},n}function y(){var n=Object(o.a)(["\n    @media (max-width: 767px) {\n        input {\n            width: 100px;\n        }\n        button {\n            margin-left: 80px;\n\n        }\n    }\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: 40px;\n    input {\n        padding: 10px 280px 10px 10px;\n        border-radius: 16px;\n        border: 1px solid #439D93;\n        margin: 10px;\n    }\n    h6 {\n        font-size: 16px;\n        margin-left: 320px;\n    }\n    button {\n        align-items: center;\n        justify-content: center;\n        margin: 0 auto;\n        margin-left: 120px;\n        margin-top: 40px;\n        text-align: center;\n        width: 260px;\n        height: 44px;\n        background-color: #439D93;\n        border-radius: 26px;\n        border: none;\n        color: white;\n        font-size: 22px;\n    }\n"]);return y=function(){return n},n}function F(){var n=Object(o.a)(["\n    h1 {\n        font-size: 60px;\n        color: #2F9291;\n        text-align: center;\n        margin-top: 160px;\n    }\n    h4 {\n        font-size: 20px;\n        color: #439D93;\n        text-align: center;\n        margin-top: 10px;\n    }\n"]);return F=function(){return n},n}function j(){var n=Object(o.a)(["\n    width: 100vw;\n    height: 100vh;\n    background-color: #FFFFFF;\n"]);return j=function(){return n},n}var O=u.b.div(j()),P=u.b.div(F()),k=u.b.div(y()),z=(u.b.form(w()),t(4)),S=Object(z.a)();var q=function(){var n={email:"admin@syncloud.com",password:"admin"};return r.a.createElement(O,null,r.a.createElement(P,null,r.a.createElement("h1",null,"Syncloud"),r.a.createElement("h4",null,"Guarde e compartilhe seus arquivos com seguran\xe7a")),r.a.createElement(k,null,r.a.createElement(v.a,{onSubmit:function(e){var t=e.email,a=e.password;n.email===t&&n.password===a?S.push("/dashboard"):Object(c.b)("login failed")}},r.a.createElement(v.b,{name:"email",type:"email",placeholder:"E-mail"}),r.a.createElement("br",null),r.a.createElement(v.b,{name:"password",type:"password",placeholder:"Password"}),r.a.createElement("h6",null,"Forgot Password?"),r.a.createElement("button",{type:"submit"},"Login"))))};function C(){var n=Object(o.a)(["\n    display: flex;\n"]);return C=function(){return n},n}var D=u.b.div(C()),N=function(){return r.a.createElement(D,null,r.a.createElement(x,null),r.a.createElement(q,null))};function B(){var n=Object(o.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 100px;\n    h2 {\n        color: white;\n        margin: 10px;\n        font-size: 1.4em;\n    }\n    a {\n        color: white;\n        text-decoration: none;\n    }\n    a:hover {\n        color:#439D93;\n    }\n"]);return B=function(){return n},n}function M(){var n=Object(o.a)(["\n    width: 16vw;\n    height: 92vh;\n    background-color: #0E1428;\n"]);return M=function(){return n},n}var L=u.b.div(M()),U=u.b.div(B()),A=t(8),G=function(){return r.a.createElement(L,null,r.a.createElement(U,null,r.a.createElement("h2",{className:"fonter"},r.a.createElement(A.a,{to:"/dashboard"},"Meu Drive")),r.a.createElement("h2",{className:"fonter"},r.a.createElement(A.a,{to:"/shared"},"Compartilhado Comigo")),r.a.createElement("h2",{className:"fonter"},r.a.createElement(A.a,{to:"/analytics"},"Analytics")),r.a.createElement("h2",{className:"fonter"},r.a.createElement(A.a,{to:"/settings"},"Configura\xe7\xf5es"))))};function J(){var n=Object(o.a)(["\n    margin-left: 70px;\n    display: flex;\n    table tr {\n        margin: 20px;\n    }\n    td, th {\n        color: white;\n        margin-left: 20px;\n    }\n    td {\n        margin: 20px;\n    }\n    th {\n        padding: 20px;\n        margin-right: 200px;\n    }\n    h4 {\n        color: white;\n        margin-left: 20px;\n    }\n    img {\n        margin: 20px;\n        width: 60px;\n    }\n"]);return J=function(){return n},n}function Q(){var n=Object(o.a)(["\n    display: flex;\n    justify-content: space-between;\n    margin: 100px;\n    button {\n        width: 180px;\n        height: 50px;\n        background-color: #2F9291;\n        border: none;\n        border-radius: 22px;\n        font-size: 1.5em;\n        color: white;\n    }\n    h2 {\n        color: #FFFFFF;\n    }\n"]);return Q=function(){return n},n}function R(){var n=Object(o.a)(["\n    width: 84vw;\n    height: 92vh;\n    background-color: #22293d;\n"]);return R=function(){return n},n}var I=u.b.div(R()),T=u.b.div(Q()),H=u.b.div(J()),K=function(){return r.a.createElement(I,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(T,null,r.a.createElement("h2",null,"Uploads"),r.a.createElement("button",{type:"submit"},"New")),r.a.createElement(H,null,r.a.createElement("table",null,r.a.createElement("tr",null,r.a.createElement("th",null,"file"),r.a.createElement("th",null,"filename"),r.a.createElement("th",null,"data de upload")),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("img",{src:"imgs/icones/pdf.png"})),r.a.createElement("td",{class:"a"},"Pipoquinha da Silva"),r.a.createElement("td",null,"03/12/2019")),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("img",{src:"imgs/icones/jpg.png"})),r.a.createElement("td",null,"Bananinha da Silva"),r.a.createElement("td",null,"04/12/2019"))))))};function V(){var n=Object(o.a)(["\n    display: flex;\n"]);return V=function(){return n},n}var W=u.b.div(V());function X(){var n=Object(o.a)(["\n    display: flex;\n    background-color: #0E1428;\n    align-items: center;\n    cursor: pointer;\n    h4 {\n        color: #FFFFFF;\n        margin-right: 15px;\n    }\n    img {\n        width: 70px;\n        height: 60px;\n        margin-right: 30px;\n        border-radius: 50%;\n    }\n"]);return X=function(){return n},n}function Y(){var n=Object(o.a)(["\n    display: flex;\n    align-items: center;\n    img {\n        width: 70px;\n        height: 60px;\n        margin-left: 20px;\n    }\n    h1 {\n        color: #FFFFFF;\n        margin-left: 20px;\n    }\n"]);return Y=function(){return n},n}function Z(){var n=Object(o.a)(["\n    display: flex;\n    height: 4vw;\n    background-color: #0E1428;\n    border-bottom: 1px solid #2F9291;\n    justify-content: space-between;\n    img {\n        width: 70px;\n        height: 60px;\n    }\n"]);return Z=function(){return n},n}var $=u.b.div(Z()),_=u.b.div(Y()),nn=u.b.div(X()),en=function(){return r.a.createElement($,null,r.a.createElement(_,null,r.a.createElement("img",{src:"/imgs/logo.svg",alt:"Logo"}),r.a.createElement("h1",null,"Syncloud")),r.a.createElement(nn,null,r.a.createElement("h4",{className:"user-font"},"Gilmar Silva"),r.a.createElement("img",{src:"https://avatars0.githubusercontent.com/u/13907472?s=460&v=4",alt:"perfil"})))},tn=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(en,null),r.a.createElement(W,null,r.a.createElement(G,null),r.a.createElement(K,null)))};function an(){var n=Object(o.a)(["\n"]);return an=function(){return n},n}function rn(){var n=Object(o.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: 40px;\n    input {\n        padding: 10px 280px 10px 10px;\n        border-radius: 16px;\n        border: 1px solid #412E68;\n        margin: 10px;\n    }\n    h6 {\n        font-size: 16px;\n        margin-left: 320px;\n    }\n    button {\n        margin-left: 120px;\n        margin-top: 40px;\n        text-align: center;\n        width: 260px;\n        height: 44px;\n        background-color: #412E68;\n        border-radius: 26px;\n        border: none;\n        color: white;\n        font-size: 22px;\n    }\n"]);return rn=function(){return n},n}function ln(){var n=Object(o.a)(["\n    h1 {\n        font-size: 60px;\n        color: #412E68;\n        text-align: center;\n        margin-top: 160px;\n    }\n    h4 {\n        font-size: 20px;\n        color: #412E68;\n        text-align: center;\n        margin-top: 10px;\n    }\n"]);return ln=function(){return n},n}function cn(){var n=Object(o.a)(["\n    width: 100vw;\n    height: 100vh;\n    background-color: #FFFFFF;\n"]);return cn=function(){return n},n}var on=u.b.div(cn()),un=u.b.div(ln()),mn=u.b.div(rn());u.b.form(an());var pn=function(){return r.a.createElement(on,null,r.a.createElement(un,null,r.a.createElement("h1",null,"Syncloud"),r.a.createElement("h4",null,"Guarde e compartilhe seus arquivos com seguran\xe7a")),r.a.createElement(mn,null,r.a.createElement(v.a,{onSubmit:function(n){n.name,n.email,n.password}},r.a.createElement(v.b,{name:"name",type:"text",placeholder:"Name"}),r.a.createElement("br",null),r.a.createElement(v.b,{name:"email",type:"email",placeholder:"E-mail"}),r.a.createElement("br",null),r.a.createElement(v.b,{name:"password",type:"password",placeholder:"Password"}),r.a.createElement("button",{type:"submit"},"Sing Up"))))};function dn(){var n=Object(o.a)(["\n    display: flex;\n"]);return dn=function(){return n},n}var sn=u.b.div(dn());function hn(){var n=Object(o.a)(["\n    margin-left: 70px;\n    display: flex;\n    table tr {\n        margin: 20px;\n    }\n    td, th {\n        color: white;\n        margin-left: 20px;\n    }\n    td {\n        margin: 20px;\n    }\n    th {\n        padding: 20px;\n        margin-right: 200px;\n    }\n    h4 {\n        color: white;\n        margin-left: 20px;\n    }\n    img {\n        margin: 20px;\n        width: 60px;\n    }\n"]);return hn=function(){return n},n}function fn(){var n=Object(o.a)(["\n    display: flex;\n    justify-content: space-between;\n    margin: 100px;\n    button {\n        width: 180px;\n        height: 50px;\n        background-color: #2F9291;\n        border: none;\n        border-radius: 22px;\n        font-size: 1.5em;\n        color: white;\n    }\n    h2 {\n        color: #FFFFFF;\n    }\n"]);return fn=function(){return n},n}function gn(){var n=Object(o.a)(["\n    width: 84vw;\n    height: 92vh;\n    background-color: #22293d;\n"]);return gn=function(){return n},n}var En=u.b.div(gn()),bn=u.b.div(fn()),xn=(u.b.div(hn()),t(30)),vn=t(31),wn=t(34),yn=t(32),Fn=t(37),jn=t(33),On=t.n(jn),Pn=function(n){function e(n){var t;return Object(xn.a)(this,e),(t=Object(wn.a)(this,Object(yn.a)(e).call(this,n))).state={options:{},series:[44,55,41,17,15],labels:["A","B","C","D","E"]},t}return Object(Fn.a)(e,n),Object(vn.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"donut"},r.a.createElement(On.a,{options:this.state.options,series:this.state.series,type:"donut",width:"380"}))}}]),e}(a.Component),kn=function(){return r.a.createElement(En,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(bn,null,r.a.createElement("h2",null,"Taxa de uploads")),r.a.createElement(Pn,null)))},zn=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(en,null),r.a.createElement(sn,null,r.a.createElement(G,null),r.a.createElement(kn,null)))};function Sn(){var n=Object(o.a)(["\n    display: flex;\n"]);return Sn=function(){return n},n}var qn=u.b.div(Sn());function Cn(){var n=Object(o.a)(["\n    @media (max-width: 767px) {\n        input {\n            width: 100px;\n        }\n        button {\n            text-align: center;\n\n        }\n    }\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin-top: 40px;\n    h4 {\n        color: white;\n        font-size: 2em;\n        margin: 20px;\n        margin-top: 15px;\n    }\n    input {\n        padding: 15px 380px 15px 30px;\n        border-radius: 16px;\n        border: 1px solid #439D93;\n        margin: 10px;\n    }\n    h6 {\n        font-size: 16px;\n        margin-left: 320px;\n    }\n    button {\n        margin-top: 40px;\n        text-align: center;\n        width: 260px;\n        height: 44px;\n        background-color: #439D93;\n        border-radius: 26px;\n        border: none;\n        color: white;\n        font-size: 22px;\n    }\n"]);return Cn=function(){return n},n}function Dn(){var n=Object(o.a)(["\n    width: 84vw;\n    height: 92vh;\n    background-color: #22293d;\n"]);return Dn=function(){return n},n}var Nn=u.b.div(Dn()),Bn=u.b.div(Cn()),Mn=function(){return r.a.createElement(Nn,null,r.a.createElement(Bn,null,r.a.createElement("h4",null,"Configura\xe7\xf5es"),r.a.createElement("input",{value:"bananinha",name:"name",type:"text",placeholder:"Seu nome"}),r.a.createElement("input",{value:"pipoquinha",name:"email",type:"email",placeholder:"Seu email"}),r.a.createElement("input",{value:"bolachinha",name:"password",type:"password",placeholder:"Seu password"}),r.a.createElement("button",{type:"submit"},"Salvar")))},Ln=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(en,null),r.a.createElement(qn,null,r.a.createElement(G,null),r.a.createElement(Mn,null)))};function Un(){var n=Object(o.a)(["\n    display: flex;\n"]);return Un=function(){return n},n}var An=u.b.div(Un());function Gn(){var n=Object(o.a)(["\n    margin-left: 70px;\n    display: flex;\n    table tr {\n        margin: 20px;\n    }\n    td, th {\n        color: white;\n        margin-left: 20px;\n    }\n    td {\n        margin: 20px;\n    }\n    th {\n        padding: 20px;\n        margin-right: 200px;\n    }\n    h4 {\n        color: white;\n        margin-left: 20px;\n    }\n    img {\n        margin: 20px;\n        width: 60px;\n    }\n"]);return Gn=function(){return n},n}function Jn(){var n=Object(o.a)(["\n    display: flex;\n    justify-content: space-between;\n    margin: 100px;\n    button {\n        width: 180px;\n        height: 50px;\n        background-color: #2F9291;\n        border: none;\n        border-radius: 22px;\n        font-size: 1.5em;\n        color: white;\n    }\n    h2 {\n        color: #FFFFFF;\n    }\n"]);return Jn=function(){return n},n}function Qn(){var n=Object(o.a)(["\n    width: 84vw;\n    height: 92vh;\n    background-color: #22293d;\n"]);return Qn=function(){return n},n}var Rn=u.b.div(Qn()),In=u.b.div(Jn()),Tn=u.b.div(Gn()),Hn=function(){return r.a.createElement(Rn,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(In,null,r.a.createElement("h2",null,"Arquivos Compartilhado Comigo")),r.a.createElement(Tn,null,r.a.createElement("table",null,r.a.createElement("tr",null,r.a.createElement("th",null,"file"),r.a.createElement("th",null,"filename"),r.a.createElement("th",null,"data de upload")),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("img",{src:"imgs/icones/doc.png"})),r.a.createElement("td",{class:"a"},"Pipoquinha da Silva"),r.a.createElement("td",null,"05/12/2019")),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("img",{src:"imgs/icones/rar.png"})),r.a.createElement("td",null,"Bananinha da Silva"),r.a.createElement("td",null,"05/12/2019")),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("img",{src:"imgs/icones/zip.png"})),r.a.createElement("td",null,"Bananinha da Silva"),r.a.createElement("td",null,"05/12/2019")),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("img",{src:"imgs/icones/js.png"})),r.a.createElement("td",null,"Bananinha da Silva"),r.a.createElement("td",null,"05/12/2019"))))))},Kn=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(en,null),r.a.createElement(An,null,r.a.createElement(G,null),r.a.createElement(Hn,null)))},Vn=function(){return r.a.createElement(s.b,{history:S},r.a.createElement(s.c,null,r.a.createElement(h,{path:"/",exact:!0},r.a.createElement(N,null)),r.a.createElement(h,{path:"/singup"},r.a.createElement(pn,null)),r.a.createElement(h,{path:"/dashboard"},r.a.createElement(tn,null)),r.a.createElement(h,{path:"/analytics"},r.a.createElement(zn,null)),r.a.createElement(h,{path:"/shared"},r.a.createElement(Kn,null)),r.a.createElement(h,{path:"/settings"},r.a.createElement(Ln,null))))},Wn=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,null),r.a.createElement(c.a,{autoClose:3e3}),r.a.createElement(Vn,null))};i.a.render(r.a.createElement(Wn,null),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.ea957eae.chunk.js.map