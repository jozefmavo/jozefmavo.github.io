import{w as $e,S as F,i as R,s as Z,e as d,a as $,b as v,t as Y,c as w,d as i,l as z,n as L,f as S,o as he,g as Re,h as Ce,j as C,k as V,m as y,p as _e,q as pe,r as te,u as ne,v as P,x as A,y as le,z as we,A as Se,B as wt,C as Pe,D as Oe,E as Q,F as Ee,G as ze,H as Fe,I as vt,J as bt,K as ye}from"./vendor.4fa4e416.js";const St=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}};St();const ue=new URLSearchParams(location.search),$t="1201",Mt="users?archived=false&fields=archived%2Ccode%2Cprefix%2ClastName%2CfirstName&isStudent=true&schoolInSchoolYear=",Tt="users?archived=false&fields=archived%2Ccode%2Cprefix%2ClastName%2CisEmployee&isEmployee=true&schoolInSchoolYear=",Ct=new Map([["teacherSchedule","id%2CappointmentInstance%2CbranchOfSchool%2Cgroups%2CstartTimeSlot%2CstartTimeSlotName%2Cstart%2CendTimeSlot%2CendTimeSlotName%2Cend%2Csubjects%2Cteachers%2ConlineTeachers%2Clocations%2Ctype%2Cvalid%2Ccancelled%2CteacherChanged%2CgroupChanged%2ClocationChanged%2CtimeChanged%2CchangeDescription%2Ccontent%2Cremark%2CschedulerRemark%2ClocationsOfBranch%2CgroupsInDepartments%2CchoosableInDepartmentCodes%2Coptional%2Coptional"],["studentSchedule","start%2Cend%2CstartTimeSlotName%2Ctype%2Cteachers%2Csubjects%2Cgroups%2Clocations%2Cremark%2CschedulerRemark%2CchangeDescription%2Ccancelled%2CteacherChanged%2CtimeChanged%2ClocationChanged%2CchoosableInDepartmentCodes"],["classSchedule","id%2CappointmentInstance%2CbranchOfSchool%2Cgroups%2CstartTimeSlot%2CstartTimeSlotName%2Cstart%2CendTimeSlot%2CendTimeSlotName%2Cend%2Csubjects%2Cteachers%2ConlineTeachers%2Clocations%2Ctype%2Cvalid%2Ccancelled%2CteacherChanged%2CgroupChanged%2ClocationChanged%2CtimeChanged%2CchangeDescription%2Ccontent%2Cremark%2CschedulerRemark%2ClocationsOfBranch%2CgroupsInDepartments%2CchoosableInDepartmentCodes%2Coptional"],["getStudentClassAppointments","groupsInDepartments%2Csubjects"]]),je=$e(),ke=$e(!0),We=$e();let He=$e(!1);const kt=$e(),Le=$e();function yt(l){let e,n,t,s,a,o,r,c,u,f,b,m,p;return{c(){e=d("div"),n=d("div"),t=d("h1"),t.textContent="Login",s=$(),a=d("p"),a.textContent="Please provide login information to continue to Zermelo.",o=$(),r=d("input"),c=$(),u=d("input"),f=$(),b=d("button"),b.textContent="Login",v(t,"class","svelte-101fr8u"),v(a,"class","svelte-101fr8u"),v(r,"placeholder","schoolname"),v(r,"class","svelte-101fr8u"),Y(r,"error",l[2]),v(u,"placeholder","pairing code"),v(u,"type","number"),v(u,"class","svelte-101fr8u"),Y(u,"error",l[2]),v(b,"class","svelte-101fr8u"),v(n,"class","centered svelte-101fr8u"),v(e,"class","svelte-101fr8u")},m(_,h){w(_,e,h),i(e,n),i(n,t),i(n,s),i(n,a),i(n,o),i(n,r),l[4](r),i(n,c),i(n,u),l[5](u),i(n,f),i(n,b),m||(p=z(b,"click",l[3]),m=!0)},p(_,[h]){h&4&&Y(r,"error",_[2]),h&4&&Y(u,"error",_[2])},i:L,o:L,d(_){_&&S(e),l[4](null),l[5](null),m=!1,p()}}}function Nt(l,e,n){let t,s,a;he(async()=>{await qe()&&me("HomePage")});async function o(){if(!t.value||!s.value){r();return}await qe(t.value,s.value),Ce(X)?window.location.reload():r()}function r(){n(2,a=!0),setTimeout(()=>{n(2,a=!1)},3e3)}function c(f){Re[f?"unshift":"push"](()=>{t=f,n(0,t)})}function u(f){Re[f?"unshift":"push"](()=>{s=f,n(1,s)})}return[t,s,a,o,c,u]}class Dt extends F{constructor(e){super();R(this,e,Nt,yt,Z,{})}}function Lt(l){let e,n,t,s,a,o,r,c;return{c(){e=d("div"),n=d("h3"),n.textContent="Jozefmavo Zermelo Portal",t=$(),s=d("p"),s.textContent="Click the button to go to the schedule.",a=$(),o=d("button"),o.textContent="Schedule",v(e,"class","homepage")},m(u,f){w(u,e,f),i(e,n),i(e,t),i(e,s),i(e,a),i(e,o),r||(c=z(o,"click",l[0]),r=!0)},p:L,i:L,o:L,d(u){u&&S(e),r=!1,c()}}}function It(l){function e(){me("SchedulePeople")}return[e]}class Pt extends F{constructor(e){super();R(this,e,It,Lt,Z,{})}}function jt(l){let e,n,t,s,a,o,r,c,u,f;return{c(){e=d("div"),n=d("h3"),n.innerHTML='<span class="material-icons svelte-1ne4om4">warning</span> Module Load Error',t=$(),s=d("p"),s.innerHTML=`The requested module could not be found in.<br class="svelte-1ne4om4"/>Maybe you used a broken
    link?`,a=$(),o=d("br"),r=$(),c=d("button"),c.textContent="Go Home",v(n,"class","svelte-1ne4om4"),v(s,"class","svelte-1ne4om4"),v(o,"class","svelte-1ne4om4"),v(c,"class","svelte-1ne4om4"),v(e,"class","content svelte-1ne4om4")},m(b,m){w(b,e,m),i(e,n),i(e,t),i(e,s),i(e,a),i(e,o),i(e,r),i(e,c),u||(f=z(c,"click",l[0]),u=!0)},p:L,i:L,o:L,d(b){b&&S(e),u=!1,f()}}}function Ht(l){function e(){me("HomePage")}return[e]}class Yt extends F{constructor(e){super();R(this,e,Ht,jt,Z,{})}}function qt(l){let e,n,t,s,a,o,r,c,u=(l[0].classes||"")+"",f,b,m;return{c(){e=d("div"),n=d("p"),t=C(l[7]),s=$(),a=d("p"),o=C(l[8]),r=$(),c=d("p"),f=C(u),v(c,"class","classes"),v(e,"class","appointment"),V(e,"top",l[3]+"px"),V(e,"height",l[4]+"px"),V(e,"left",l[6]),V(e,"width",l[5]),Y(e,"cancelled",l[0].cancelled),Y(e,"changed",l[1]),Y(e,"newTime",l[2])},m(p,_){w(p,e,_),i(e,n),i(n,t),i(e,s),i(e,a),i(a,o),i(e,r),i(e,c),i(c,f),b||(m=z(e,"click",l[9]),b=!0)},p(p,[_]){_&128&&y(t,p[7]),_&256&&y(o,p[8]),_&1&&u!==(u=(p[0].classes||"")+"")&&y(f,u),_&8&&V(e,"top",p[3]+"px"),_&16&&V(e,"height",p[4]+"px"),_&64&&V(e,"left",p[6]),_&32&&V(e,"width",p[5]),_&1&&Y(e,"cancelled",p[0].cancelled),_&2&&Y(e,"changed",p[1]),_&4&&Y(e,"newTime",p[2])},i:L,o:L,d(p){p&&S(e),b=!1,m()}}}function At(l,e,n){let{appointment:t}=e;function s(){kt.set(t),He.set(!0)}let a,o=!1,r,c,u,f,b,m;return he(()=>{n(1,a=t.teacherChanged||t.locationChanged),n(2,o=t.timeChanged),n(3,r=(t.startMin-460)*2),n(4,c=(t.endMin-t.startMin)*2-2),n(6,f=`calc(42px + (100% - 40px) / 5 * ${t.rowNr-1})`),n(5,u="calc(calc(100% - 40px) / 5 - (2px))"),n(7,b=`${t.subjects[0]||t.teachers.join(" ").toUpperCase()} - ${t.locations.length?t.locations:"0_00"}`),n(8,m=t.subjects[0]?t.teachers.join(" ").toUpperCase():"")}),l.$$set=p=>{"appointment"in p&&n(0,t=p.appointment)},[t,a,o,r,c,u,f,b,m,s]}class Ut extends F{constructor(e){super();R(this,e,At,qt,Z,{appointment:0})}}function Ze(l,e,n){const t=l.slice();return t[1]=e[n],t}function Ge(l){let e,n=l[1].d+"",t,s;return{c(){e=d("div"),t=C(n),s=$(),v(e,"class","appointment leftrow"),V(e,"top","0px"),V(e,"height","40px"),V(e,"left","calc(42px + ((100% - 40px) / 5 * "+(l[1].i-1)+"))"),V(e,"width","calc((100% - 44px) / 5)"),Y(e,"today",new Date().getDay()==l[1].i)},m(a,o){w(a,e,o),i(e,t),i(e,s)},p(a,o){o&1&&Y(e,"today",new Date().getDay()==a[1].i)},d(a){a&&S(e)}}}function Bt(l){let e,n=l[0],t=[];for(let s=0;s<n.length;s+=1)t[s]=Ge(Ze(l,n,s));return{c(){for(let s=0;s<t.length;s+=1)t[s].c();e=_e()},m(s,a){for(let o=0;o<t.length;o+=1)t[o].m(s,a);w(s,e,a)},p(s,[a]){if(a&1){n=s[0];let o;for(o=0;o<n.length;o+=1){const r=Ze(s,n,o);t[o]?t[o].p(r,a):(t[o]=Ge(r),t[o].c(),t[o].m(e.parentNode,e))}for(;o<t.length;o+=1)t[o].d(1);t.length=n.length}},i:L,o:L,d(s){pe(t,s),s&&S(e)}}}function Wt(l){return[[{i:1,d:"Mon"},{i:2,d:"Tue"},{i:3,d:"Wed"},{i:4,d:"Thu"},{i:5,d:"Fri"}]]}class Ot extends F{constructor(e){super();R(this,e,Wt,Bt,Z,{})}}function Ke(l,e,n){const t=l.slice();return t[1]=e[n],t}function Je(l){let e,n=l[1].start.h.toString().padStart(2,"0")+"",t,s;return{c(){e=d("div"),t=C(n),s=$(),v(e,"class","appointment timenote"),V(e,"top",(l[1].startMin-460)*2+"px"),V(e,"height",(l[1].endMin-l[1].startMin)*2-2+"px"),V(e,"width","40px"),V(e,"left","0px")},m(a,o){w(a,e,o),i(e,t),i(e,s)},p:L,d(a){a&&S(e)}}}function Et(l){let e,n=l[0],t=[];for(let s=0;s<n.length;s+=1)t[s]=Je(Ke(l,n,s));return{c(){for(let s=0;s<t.length;s+=1)t[s].c();e=_e()},m(s,a){for(let o=0;o<t.length;o+=1)t[o].m(s,a);w(s,e,a)},p(s,[a]){if(a&1){n=s[0];let o;for(o=0;o<n.length;o+=1){const r=Ke(s,n,o);t[o]?t[o].p(r,a):(t[o]=Je(r),t[o].c(),t[o].m(e.parentNode,e))}for(;o<t.length;o+=1)t[o].d(1);t.length=n.length}},i:L,o:L,d(s){pe(t,s),s&&S(e)}}}function zt(l){return[[{startMin:480,endMin:540,start:{h:8,m:0},end:{h:9,m:0}},{startMin:540,endMin:600,start:{h:9,m:0},end:{h:10,m:0}},{startMin:600,endMin:660,start:{h:10,m:0},end:{h:11,m:0}},{startMin:660,endMin:720,start:{h:11,m:0},end:{h:12,m:0}},{startMin:720,endMin:780,start:{h:12,m:0},end:{h:13,m:0}},{startMin:780,endMin:840,start:{h:13,m:0},end:{h:14,m:0}},{startMin:840,endMin:900,start:{h:14,m:0},end:{h:15,m:0}},{startMin:900,endMin:960,start:{h:15,m:0},end:{h:16,m:0}},{startMin:960,endMin:1020,start:{h:16,m:0},end:{h:17,m:0}},{startMin:1020,endMin:1080,start:{h:17,m:0},end:{h:18,m:0}}]]}class Ft extends F{constructor(e){super();R(this,e,zt,Et,Z,{})}}function Me(l,e){We.set({type:l,id:e}),me("SchedulePeople")}function Qe(l){let e,n,t;return n=new wt({props:{value:l[1],items:l[0]}}),n.$on("select",l[2]),{c(){e=d("div"),te(n.$$.fragment),v(e,"class","select-holder")},m(s,a){w(s,e,a),ne(n,e,null),t=!0},p(s,a){const o={};a&1&&(o.items=s[0]),n.$set(o)},i(s){t||(P(n.$$.fragment,s),t=!0)},o(s){A(n.$$.fragment,s),t=!1},d(s){s&&S(e),le(n)}}}function Rt(l){let e,n,t=l[0]&&Qe(l);return{c(){t&&t.c(),e=_e()},m(s,a){t&&t.m(s,a),w(s,e,a),n=!0},p(s,[a]){s[0]?t?(t.p(s,a),a&1&&P(t,1)):(t=Qe(s),t.c(),P(t,1),t.m(e.parentNode,e)):t&&(we(),A(t,1,1,()=>{t=null}),Se())},i(s){n||(P(t),n=!0)},o(s){A(t),n=!1},d(s){t&&t.d(s),s&&S(e)}}}function Zt(l,e,n){let t,s=[];he(o);function a(r){const c=r.detail.value,u=c.code;status="Schedule for "+r.label,Me(c.isEmployee?"teacher":"student",u)}async function o(){const r=Array.prototype.concat((await Ue()).response.data,(await Ae()).response.data);n(0,s=[]);for(let c=0;c<r.length;c++){const[u,f,b,m]=[r[c].firstName||"",r[c].prefix||"",r[c].lastName||"",r[c].code||""];s.push({label:`${u} ${f} ${b}`+(r[c].isEmployee?` (${m.toUpperCase()})`:""),value:r[c]})}}return Le.subscribe(o),[s,t,a]}class Gt extends F{constructor(e){super();R(this,e,Zt,Rt,Z,{})}}function Kt(l){let e=[];for(let n=0;n<l.length;n++){const t=l[n],s=new Date(t.start*1e3).getDay()-new Date(Ne(be.prev)).getDay()+2;e.push({rowNr:s,startMin:new Date(t.start*1e3).getHours()*60+new Date(t.start*1e3).getMinutes(),endMin:new Date(t.end*1e3).getHours()*60+new Date(t.end*1e3).getMinutes(),slotName:t.startTimeSlotName,locations:t.locations,teachers:t.teachers,subjects:t.subjects,cancelled:t.cancelled,changeWarning:t.changeDescription,teacherChanged:t.teacherChanged,locationChanged:t.locationChanged,timeChanged:t.timeChanged,start:{h:new Date(t.start*1e3).getHours(),m:new Date(t.start*1e3).getMinutes()},end:{h:new Date(t.end*1e3).getHours(),m:new Date(t.end*1e3).getMinutes()},classes:t.groups,startTimeStamp:t.start,endTimeStamp:t.end})}return e}function Ve(l,e,n){const t=l.slice();return t[11]=e[n],t}function Jt(l){let e;return{c(){e=C("Loading...")},m(n,t){w(n,e,t)},p:L,d(n){n&&S(e)}}}function Qt(l){let e;function n(a,o){return a[1].id?Xt:Vt}let t=n(l),s=t(l);return{c(){s.c(),e=_e()},m(a,o){s.m(a,o),w(a,e,o)},p(a,o){t===(t=n(a))&&s?s.p(a,o):(s.d(1),s=t(a),s&&(s.c(),s.m(e.parentNode,e)))},d(a){s.d(a),a&&S(e)}}}function Vt(l){let e;return{c(){e=C("No schedule selected.")},m(n,t){w(n,e,t)},p:L,d(n){n&&S(e)}}}function Xt(l){let e=(l[4]||"Loading...")+"",n;return{c(){n=C(e)},m(t,s){w(t,n,s)},p(t,s){s&16&&e!==(e=(t[4]||"Loading...")+"")&&y(n,e)},d(t){t&&S(n)}}}function Xe(l){let e,n;return e=new Ut({props:{appointment:l[11]}}),{c(){te(e.$$.fragment)},m(t,s){ne(e,t,s),n=!0},p(t,s){const a={};s&1&&(a.appointment=t[11]),e.$set(a)},i(t){n||(P(e.$$.fragment,t),n=!0)},o(t){A(e.$$.fragment,t),n=!1},d(t){le(e,t)}}}function xt(l){let e,n,t,s,a,o,r=parseInt(Pe().format("W"))+l[3]+"",c,u,f,b,m,p,_,h,M,j,D,W,E,G,K,H,J,ae,x,oe,re,de,ee;M=new Gt({});function fe(g,N){return g[2]?Jt:Qt}let ce=fe(l),U=ce(l);J=new Ot({}),x=new Ft({});let q=l[0],I=[];for(let g=0;g<q.length;g+=1)I[g]=Xe(Ve(l,q,g));const O=g=>A(I[g],1,1,()=>{I[g]=null});return{c(){e=d("div"),n=d("h3"),t=d("button"),t.textContent="arrow_back_ios_new",s=$(),a=d("span"),o=C("Week "),c=C(r),u=$(),f=d("button"),f.textContent="arrow_forward_ios",b=$(),m=d("button"),m.textContent="date_range",p=$(),_=d("div"),h=$(),te(M.$$.fragment),j=$(),D=d("div"),W=$(),E=d("h3"),U.c(),G=$(),K=d("div"),H=d("div"),te(J.$$.fragment),ae=$(),te(x.$$.fragment),oe=$();for(let g=0;g<I.length;g+=1)I[g].c();v(t,"class","material-icons"),v(a,"class","week"),v(f,"class","material-icons"),v(m,"class","material-icons"),v(_,"class","sep"),v(D,"class","sep"),v(e,"class","header"),v(H,"class","grid"),v(K,"class","content")},m(g,N){w(g,e,N),i(e,n),i(n,t),i(n,s),i(n,a),i(a,o),i(a,c),i(n,u),i(n,f),i(n,b),i(n,m),i(n,p),i(n,_),i(n,h),ne(M,n,null),i(n,j),i(n,D),i(e,W),i(e,E),U.m(E,null),w(g,G,N),w(g,K,N),i(K,H),ne(J,H,null),i(H,ae),ne(x,H,null),i(H,oe);for(let k=0;k<I.length;k+=1)I[k].m(H,null);re=!0,de||(ee=[z(t,"click",l[5]),z(f,"click",l[6]),z(m,"click",l[7])],de=!0)},p(g,[N]){if((!re||N&8)&&r!==(r=parseInt(Pe().format("W"))+g[3]+"")&&y(c,r),ce===(ce=fe(g))&&U?U.p(g,N):(U.d(1),U=ce(g),U&&(U.c(),U.m(E,null))),N&1){q=g[0];let k;for(k=0;k<q.length;k+=1){const ie=Ve(g,q,k);I[k]?(I[k].p(ie,N),P(I[k],1)):(I[k]=Xe(ie),I[k].c(),P(I[k],1),I[k].m(H,null))}for(we(),k=q.length;k<I.length;k+=1)O(k);Se()}},i(g){if(!re){P(M.$$.fragment,g),P(J.$$.fragment,g),P(x.$$.fragment,g);for(let N=0;N<q.length;N+=1)P(I[N]);re=!0}},o(g){A(M.$$.fragment,g),A(J.$$.fragment,g),A(x.$$.fragment,g),I=I.filter(Boolean);for(let N=0;N<I.length;N+=1)A(I[N]);re=!1},d(g){g&&S(e),le(M),U.d(),g&&S(G),g&&S(K),le(J),le(x),pe(I,g),de=!1,Oe(ee)}}}function en(l,e,n){Q.extend(Ee),Q.extend(ze),Q.extend(Fe);let t=[],s=[],a={id:""},o=!1,r=0,c;We.subscribe(async p=>{if(p){n(2,o=!0),n(1,a=p),u(p.type,p.id);const _=p.type=="teacher",h=await gn(p.id),M=await hn(p.id);let j=M.firstName||"",D=M.prefix||h.prefix||"",W=M.lastName||h.lastName,E=(M.code||h.code).toUpperCase();n(4,c=(_?"":`${j} `)+`${D} ${W} (${E})`),n(2,o=!1)}}),he(()=>{const p=new URLSearchParams(location.search),_=p.get("person_id"),h=p.get("person_type");n(2,o=!1),_&&h&&(We.set({type:h,id:_}),u(h,_,!0))});async function u(p,_,h=!0){let M;n(0,s=[]),p=="student"?M=await mn(_,r+1):M=await dn(_,r+1),h&&vt(`./?m=${ue.get("m")}&person_id=${_}&person_type=${p}`),ue.set("person_id",_),ue.set("person_type",p),t=De(M.response.data,"start"),n(0,s=Kt(t)),n(2,o=!1)}function f(){r+parseInt(Pe().format("W"))>1&&(n(3,r-=1),u(a.type,a.id))}function b(){r+parseInt(Pe().format("W"))<52&&(n(3,r+=1),u(a.type,a.id))}function m(){r!=0&&(n(3,r=0),u(a.type,a.id))}return setInterval(()=>{60*parseInt(Q().format("HH"))+parseInt(Q().format("m"))},300),[s,a,o,r,c,f,b,m,u]}class tn extends F{constructor(e){super();R(this,e,en,xt,Z,{openSched:8})}get openSched(){return this.$$.ctx[8]}}function nn(l){let e,n,t;return n=new tn({}),{c(){e=d("div"),te(n.$$.fragment),v(e,"class","svelte-za3vn1")},m(s,a){w(s,e,a),ne(n,e,null),t=!0},p:L,i(s){t||(P(n.$$.fragment,s),t=!0)},o(s){A(n.$$.fragment,s),t=!1},d(s){s&&S(e),le(n)}}}class ln extends F{constructor(e){super();R(this,e,null,nn,Z,{})}}function xe(l,e,n){const t=l.slice();return t[4]=e[n],t}function et(l){let e,n=l[4].firstName+"",t,s,a=(l[4].prefix||"")+"",o,r,c=l[4].lastName+"",u,f,b,m=l[4].code.toUpperCase()+"",p,_,h,M;return{c(){e=d("button"),t=C(n),s=$(),o=C(a),r=$(),u=C(c),f=$(),b=d("span"),p=C(m),_=$(),v(b,"class","right")},m(j,D){w(j,e,D),i(e,t),i(e,s),i(e,o),i(e,r),i(e,u),i(e,f),i(e,b),i(b,p),i(e,_),h||(M=z(e,"click",function(){bt(l[1](l[4].code))&&l[1](l[4].code).apply(this,arguments)}),h=!0)},p(j,D){l=j,D&1&&n!==(n=l[4].firstName+"")&&y(t,n),D&1&&a!==(a=(l[4].prefix||"")+"")&&y(o,a),D&1&&c!==(c=l[4].lastName+"")&&y(u,c),D&1&&m!==(m=l[4].code.toUpperCase()+"")&&y(p,m)},d(j){j&&S(e),h=!1,M()}}}function sn(l){let e,n,t,s,a,o,r=l[0].length+"",c,u,f,b=l[0],m=[];for(let p=0;p<b.length;p+=1)m[p]=et(xe(l,b,p));return{c(){e=d("div"),n=d("h3"),t=d("span"),t.textContent="Students",s=$(),a=d("span"),o=C("("),c=C(r),u=C(")"),f=$();for(let p=0;p<m.length;p+=1)m[p].c();v(e,"class","studentlist")},m(p,_){w(p,e,_),i(e,n),i(n,t),i(n,s),i(n,a),i(a,o),i(a,c),i(a,u),i(e,f);for(let h=0;h<m.length;h+=1)m[h].m(e,null)},p(p,[_]){if(_&1&&r!==(r=p[0].length+"")&&y(c,r),_&3){b=p[0];let h;for(h=0;h<b.length;h+=1){const M=xe(p,b,h);m[h]?m[h].p(M,_):(m[h]=et(M),m[h].c(),m[h].m(e,null))}for(;h<m.length;h+=1)m[h].d(1);m.length=b.length}},i:L,o:L,d(p){p&&S(e),pe(m,p)}}}function on(l,e,n){let t;ye(l,X,r=>n(2,t=r));let s=[];X.subscribe(r=>{r&&o()});function a(r){return function(){Me("student",r)}}he(async()=>{t&&o()});async function o(){n(0,s=(await Ae()).response.data),s.length>0&&n(0,s=De(s,"firstName"))}return[s,a]}class an extends F{constructor(e){super();R(this,e,on,sn,Z,{})}}function tt(l,e,n){const t=l.slice();return t[4]=e[n],t}function nt(l){let e,n=(l[4].prefix||"")+"",t,s,a=l[4].lastName+"",o,r,c,u=l[4].code.toUpperCase()+"",f,b,m,p;return{c(){e=d("button"),t=C(n),s=$(),o=C(a),r=$(),c=d("span"),f=C(u),b=$(),v(c,"class","right")},m(_,h){w(_,e,h),i(e,t),i(e,s),i(e,o),i(e,r),i(e,c),i(c,f),i(e,b),m||(p=z(e,"click",function(){bt(l[1](l[4].code))&&l[1](l[4].code).apply(this,arguments)}),m=!0)},p(_,h){l=_,h&1&&n!==(n=(l[4].prefix||"")+"")&&y(t,n),h&1&&a!==(a=l[4].lastName+"")&&y(o,a),h&1&&u!==(u=l[4].code.toUpperCase()+"")&&y(f,u)},d(_){_&&S(e),m=!1,p()}}}function rn(l){let e,n,t,s,a,o,r=l[0].length+"",c,u,f,b=l[0],m=[];for(let p=0;p<b.length;p+=1)m[p]=nt(tt(l,b,p));return{c(){e=d("div"),n=d("h3"),t=d("span"),t.textContent="Teachers",s=$(),a=d("span"),o=C("("),c=C(r),u=C(")"),f=$();for(let p=0;p<m.length;p+=1)m[p].c();v(e,"class","studentlist")},m(p,_){w(p,e,_),i(e,n),i(n,t),i(n,s),i(n,a),i(a,o),i(a,c),i(a,u),i(e,f);for(let h=0;h<m.length;h+=1)m[h].m(e,null)},p(p,[_]){if(_&1&&r!==(r=p[0].length+"")&&y(c,r),_&3){b=p[0];let h;for(h=0;h<b.length;h+=1){const M=tt(p,b,h);m[h]?m[h].p(M,_):(m[h]=nt(M),m[h].c(),m[h].m(e,null))}for(;h<m.length;h+=1)m[h].d(1);m.length=b.length}},i:L,o:L,d(p){p&&S(e),pe(m,p)}}}function cn(l,e,n){let t;ye(l,X,r=>n(2,t=r));let s=[];X.subscribe(r=>{r&&o()});function a(r){return function(){Me("teacher",r)}}he(()=>{t&&o()});async function o(){n(0,s=(await Ue()).response.data),s.length>0&&n(0,s=De(s,"lastName"))}return[s,a]}class un extends F{constructor(e){super();R(this,e,cn,rn,Z,{})}}function me(l){console.log(`OpenMod: Opening ${l}`);const e=Ye.has(l);Le.set(Ye.get(e?l:"PageNotFound")),ue.set("m",e?l:"PageNotFound");const n=ue.get("person_id")?`&person_id=${ue.get("person_id")}`:"",t=ue.get("person_type")?`&person_type=${ue.get("person_type")}`:"";ue.set("person_id",""),ue.set("class_id",""),vt(`./?m=${e?l:"PageNotFound"}${l=="SchedulePeople"?`${n}${t}`:""}`),He.set(!1)}const Ye=new Map([["HomePage",{name:"Home",icon:"home",content:Pt,sidebar:!1}],["SchedulePeople",{name:"People",icon:"people",content:ln,sidebar:!0}],["ListStudents",{name:"Students",icon:"school",content:an,sidebar:!0}],["ListTeachers",{name:"Teachers",icon:"supervisor_account",content:un,sidebar:!0}],["Login",{name:"Login",icon:"",content:Dt,sidebar:!1}],["PageNotFound",{name:"Page Not Found",icon:"",content:Yt,sidebar:!1}]]);Q.extend(Ee);Q.extend(ze);Q.extend(Fe);async function Ie(l,e,n,t=!0,s,a){if(Ce(X)||s){const o={headers:{Authorization:`Bearer ${l}`},method:a?"POST":"GET"},r=await await fetch(`https://${e}.zportal.nl/api/v3/${n}`,s?{method:a?"POST":"GET"}:o);return t?r.json():r.text()}return t?{}:"{}"}async function fn(l,e){return await Ie(void 0,e,`oauth/token?grant_type=authorization_code&code=${l}`,!0,!0,!0)}let X=$e(!1),ve,ge;async function qe(l,e){if(localStorage.getItem("accessToken")){ve=localStorage.getItem("accessToken"),ge=localStorage.getItem("school");const n=await(await fetch(`https://${ge}.zportal.nl/api/v3/users/~me`,{headers:{Authorization:`Bearer ${ve}`}})).json();return X.set(n.response.status==200),X?(console.log("Zermelo login succeeded from stored access token"),je.set(n.response.data)):console.log("Zermelo login failed from stored access token: server returned ",n),Ce(X)}if(!l||!e)return console.log("Zermelo login failed; school or bindcode invalid"),!1;try{const n=await fn(e,l);n.access_token&&(localStorage.setItem("accessToken",n.access_token),localStorage.setItem("school",l),X.set(!0),je.set((await(await fetch(`https://${ge}.zportal.nl/api/v3/users/~me`,{headers:{Authorization:`Bearer ${ve}`}})).json()).response.data)),Ce(X)&&console.log("Zermelo login succeeded from provided data")}catch{X.set(!1)}return Ce(X)}function pn(){localStorage.removeItem("school"),localStorage.removeItem("accessToken"),X.set(!1),me("Login")}async function Ae(){return await Ie(ve,ge,`${Mt}${$t}`)}async function Ue(){return await Ie(ve,ge,`${Tt}${$t}`)}async function dn(l,e=0){const n=Ne(be.prev)+601200*e,t=Ne(be.next)+601200*e;return await Ie(ve,ge,`appointments?start=${n}&end=${t}&teachers=${l}&fields=${Ct.get("teacherSchedule")}`,!0)}async function mn(l,e=0){const n=Ne(be.prev)+601200*e,t=Ne(be.next)+601200*e;return await Ie(ve,ge,`appointments?user=${l}&start=${n}&end=${t}&fields=${Ct.get("studentSchedule")}`,!0)}function Ne(l){let e;return l==be.prev?e=Q().weekday(-7).unix():e=Q().weekday(0).unix(),e}async function hn(l){const e=(await Ae()).response.data;for(let n=0;n<e.length;n++)if(e[n].code==l)return e[n];return{}}async function gn(l){const e=(await Ue()).response.data;for(let n=0;n<e.length;n++)if(e[n].code==l)return e[n];return{}}function De(l,e){return l.sort(function(n,t){var s=n[e],a=t[e];return s<a?-1:s>a?1:0})}var be=(l=>(l[l.prev=0]="prev",l[l.next=1]="next",l))(be||{});function lt(l,e,n){const t=l.slice();return t[1]=e[n],t}function st(l){let e,n=l[1].icon+"",t,s,a,o,r;return{c(){e=d("button"),t=C(n),s=$(),v(e,"class","material-icons"),v(e,"title",a=l[1].caption)},m(c,u){w(c,e,u),i(e,t),i(e,s),o||(r=z(e,"click",l[1].action),o=!0)},p(c,u){l=c},d(c){c&&S(e),o=!1,r()}}}function _n(l){let e,n=l[0],t=[];for(let s=0;s<n.length;s+=1)t[s]=st(lt(l,n,s));return{c(){for(let s=0;s<t.length;s+=1)t[s].c();e=_e()},m(s,a){for(let o=0;o<t.length;o+=1)t[o].m(s,a);w(s,e,a)},p(s,[a]){if(a&1){n=s[0];let o;for(o=0;o<n.length;o+=1){const r=lt(s,n,o);t[o]?t[o].p(r,a):(t[o]=st(r),t[o].c(),t[o].m(e.parentNode,e))}for(;o<t.length;o+=1)t[o].d(1);t.length=n.length}},i:L,o:L,d(s){pe(t,s),s&&S(e)}}}function vn(l){return[[{icon:"logout",action:()=>{pn()},caption:"Logout"},{icon:"calendar_today",action:()=>{Me("student",Ce(je)[0].code)},caption:"Show own calendar"}]]}class bn extends F{constructor(e){super();R(this,e,vn,_n,Z,{})}}function ot(l,e,n){const t=l.slice();return t[2]=e[n],t[3]=e,t[4]=n,t}function at(l){let e,n=l[2].icon+"",t,s,a;function o(){return l[1](l[2],l[3],l[4])}return{c(){e=d("button"),t=C(n),v(e,"class","material-icons svelte-1wpskyv"),Y(e,"active",l[2].value)},m(r,c){w(r,e,c),i(e,t),s||(a=z(e,"click",o),s=!0)},p(r,c){l=r,c&1&&n!==(n=l[2].icon+"")&&y(t,n),c&1&&Y(e,"active",l[2].value)},d(r){r&&S(e),s=!1,a()}}}function $n(l){let e,n=l[0],t=[];for(let s=0;s<n.length;s+=1)t[s]=at(ot(l,n,s));return{c(){for(let s=0;s<t.length;s+=1)t[s].c();e=_e()},m(s,a){for(let o=0;o<t.length;o+=1)t[o].m(s,a);w(s,e,a)},p(s,[a]){if(a&1){n=s[0];let o;for(o=0;o<n.length;o+=1){const r=ot(s,n,o);t[o]?t[o].p(r,a):(t[o]=at(r),t[o].c(),t[o].m(e.parentNode,e))}for(;o<t.length;o+=1)t[o].d(1);t.length=n.length}},i:L,o:L,d(s){pe(t,s),s&&S(e)}}}function Cn(l,e,n){const t=[{icon:"person",value:!1,event:a=>{ke.set(a)}}];return ke.subscribe(a=>{n(0,t[0].value=a,t)}),ke.set(!0),[t,(a,o,r)=>{n(0,o[r].value=!a.value,t),a.event(a.value)}]}class kn extends F{constructor(e){super();R(this,e,Cn,$n,Z,{})}}function wn(l){let e,n,t,s,a,o,r,c,u,f,b,m,p,_,h,M,j,D,W,E=l[0].firstName+"",G,K;return c=new kn({}),m=new bn({}),{c(){e=d("div"),n=d("div"),t=d("b"),t.innerHTML=`Zermelo
      <div class="sep"></div>`,s=$(),a=d("span"),a.textContent=`${ge}`,o=$(),r=d("div"),te(c.$$.fragment),u=$(),f=d("div"),b=$(),te(m.$$.fragment),p=$(),_=d("div"),h=$(),M=d("div"),j=d("span"),j.textContent="person",D=$(),W=d("p"),G=C(E),v(t,"class","name"),v(a,"class","schoolname"),v(n,"class","header"),v(f,"class","sep"),v(_,"class","sep"),v(j,"class","material-icons"),v(M,"class","userprofile"),v(r,"class","right"),v(e,"class","tb")},m(H,J){w(H,e,J),i(e,n),i(n,t),i(n,s),i(n,a),i(e,o),i(e,r),ne(c,r,null),i(r,u),i(r,f),i(r,b),ne(m,r,null),i(r,p),i(r,_),i(r,h),i(r,M),i(M,j),i(M,D),i(M,W),i(W,G),K=!0},p(H,[J]){(!K||J&1)&&E!==(E=H[0].firstName+"")&&y(G,E)},i(H){K||(P(c.$$.fragment,H),P(m.$$.fragment,H),K=!0)},o(H){A(c.$$.fragment,H),A(m.$$.fragment,H),K=!1},d(H){H&&S(e),le(c),le(m)}}}function Sn(l,e,n){let t;return je.subscribe(s=>{n(0,t=s[0])}),[t]}class Mn extends F{constructor(e){super();R(this,e,Sn,wn,Z,{})}}function rt(l,e,n){const t=l.slice();return t[3]=e[n][0],t[4]=e[n][1],t}function Tn(l){let e,n,t=l[4].icon+"",s,a,o,r=l[4].name+"",c,u,f,b;function m(){return l[2](l[3])}return{c(){e=d("button"),n=d("span"),s=C(t),a=$(),o=d("p"),c=C(r),u=$(),v(n,"class","material-icons svelte-ss09bj"),v(o,"class","svelte-ss09bj"),v(e,"class","svelte-ss09bj"),Y(e,"selected",l[0]&&l[0].name==l[4].name)},m(p,_){w(p,e,_),i(e,n),i(n,s),i(e,a),i(e,o),i(o,c),i(e,u),f||(b=z(e,"click",m),f=!0)},p(p,_){l=p,_&1&&Y(e,"selected",l[0]&&l[0].name==l[4].name)},d(p){p&&S(e),f=!1,b()}}}function it(l){let e,n=l[4].sidebar&&l[4]&&Tn(l);return{c(){n&&n.c(),e=_e()},m(t,s){n&&n.m(t,s),w(t,e,s)},p(t,s){t[4].sidebar&&t[4]&&n.p(t,s)},d(t){n&&n.d(t),t&&S(e)}}}function yn(l){let e,n,t,s,a,o=[...Ye],r=[];for(let c=0;c<o.length;c+=1)r[c]=it(rt(l,o,c));return{c(){e=d("div"),n=d("button"),n.innerHTML=`<span class="material-icons svelte-ss09bj">home</span> 
    <p class="svelte-ss09bj">Home</p>`,t=$();for(let c=0;c<r.length;c+=1)r[c].c();v(n,"class","home svelte-ss09bj"),Y(n,"selected",l[0].name=="Home"),v(e,"class","sidebar svelte-ss09bj")},m(c,u){w(c,e,u),i(e,n),i(e,t);for(let f=0;f<r.length;f+=1)r[f].m(e,null);s||(a=z(n,"click",l[1]),s=!0)},p(c,[u]){if(u&1&&Y(n,"selected",c[0].name=="Home"),u&1){o=[...Ye];let f;for(f=0;f<o.length;f+=1){const b=rt(c,o,f);r[f]?r[f].p(b,u):(r[f]=it(b),r[f].c(),r[f].m(e,null))}for(;f<r.length;f+=1)r[f].d(1);r.length=o.length}},i:L,o:L,d(c){c&&S(e),pe(r,c),s=!1,a()}}}function Nn(l,e,n){let t;ye(l,Le,o=>n(0,t=o));function s(){me("HomePage")}return[t,s,o=>me(o)]}class Dn extends F{constructor(e){super();R(this,e,Nn,yn,Z,{})}}function ct(l){let e,n,t=(l[0].subjects.toString().toUpperCase()||"appointment")+"",s,a,o,r,c,u=(l[0].locations.length?l[0].locations:"None")+"",f,b,m,p,_,h=l[0].teachers.length>1?"s":"",M,j,D=l[0].teachers.join(" ").toUpperCase()+"",W,E,G,K,H,J=Q(l[0].startTimeStamp*1e3).format("DD/MM/YYYY, hh:mm A")+"",ae,x,oe,re,de,ee=Q(l[0].endTimeStamp*1e3).format("DD/MM/YYYY, hh:mm A")+"",fe,ce,U,q,I,O=l[0].classes.length>1?"s":"",g,N,k=(l[0].classes.length?l[0].classes:"Unknown")+"",ie,Be,Te,se=l[0].changeWarning&&ut(l);return{c(){e=d("h3"),n=C("Information for "),s=C(t),a=$(),o=d("p"),r=d("b"),r.textContent="Location",c=C(": "),f=C(u),b=$(),m=d("p"),p=d("b"),_=C("Teacher"),M=C(h),j=C(": "),W=C(D),E=$(),G=d("p"),K=d("b"),K.textContent="Start",H=C(": "),ae=C(J),x=$(),oe=d("p"),re=d("b"),re.textContent="End",de=C(": "),fe=C(ee),ce=$(),U=d("p"),q=d("b"),I=C("Group"),g=C(O),N=C(": "),ie=C(k),Be=$(),se&&se.c(),Te=_e()},m(T,B){w(T,e,B),i(e,n),i(e,s),w(T,a,B),w(T,o,B),i(o,r),i(o,c),i(o,f),w(T,b,B),w(T,m,B),i(m,p),i(p,_),i(p,M),i(m,j),i(m,W),w(T,E,B),w(T,G,B),i(G,K),i(G,H),i(G,ae),w(T,x,B),w(T,oe,B),i(oe,re),i(oe,de),i(oe,fe),w(T,ce,B),w(T,U,B),i(U,q),i(q,I),i(q,g),i(U,N),i(U,ie),w(T,Be,B),se&&se.m(T,B),w(T,Te,B)},p(T,B){B&1&&t!==(t=(T[0].subjects.toString().toUpperCase()||"appointment")+"")&&y(s,t),B&1&&u!==(u=(T[0].locations.length?T[0].locations:"None")+"")&&y(f,u),B&1&&h!==(h=T[0].teachers.length>1?"s":"")&&y(M,h),B&1&&D!==(D=T[0].teachers.join(" ").toUpperCase()+"")&&y(W,D),B&1&&J!==(J=Q(T[0].startTimeStamp*1e3).format("DD/MM/YYYY, hh:mm A")+"")&&y(ae,J),B&1&&ee!==(ee=Q(T[0].endTimeStamp*1e3).format("DD/MM/YYYY, hh:mm A")+"")&&y(fe,ee),B&1&&O!==(O=T[0].classes.length>1?"s":"")&&y(g,O),B&1&&k!==(k=(T[0].classes.length?T[0].classes:"Unknown")+"")&&y(ie,k),T[0].changeWarning?se?se.p(T,B):(se=ut(T),se.c(),se.m(Te.parentNode,Te)):se&&(se.d(1),se=null)},d(T){T&&S(e),T&&S(a),T&&S(o),T&&S(b),T&&S(m),T&&S(E),T&&S(G),T&&S(x),T&&S(oe),T&&S(ce),T&&S(U),T&&S(Be),se&&se.d(T),T&&S(Te)}}}function ut(l){let e,n,t,s,a,o,r=l[0].changeWarning+"",c;return{c(){e=d("hr"),n=$(),t=d("p"),s=d("b"),s.textContent="Warning",a=C(":"),o=d("br"),c=C(r)},m(u,f){w(u,e,f),w(u,n,f),w(u,t,f),i(t,s),i(t,a),i(t,o),i(t,c)},p(u,f){f&1&&r!==(r=u[0].changeWarning+"")&&y(c,r)},d(u){u&&S(e),u&&S(n),u&&S(t)}}}function Ln(l){let e,n,t,s,a,o,r,c=l[0]&&ct(l);return{c(){e=d("div"),n=$(),t=d("div"),s=d("button"),s.textContent="close",a=$(),c&&c.c(),v(e,"class","shade"),Y(e,"hidden",!l[1]),v(s,"class","material-icons"),v(t,"class","dialog"),Y(t,"hidden",!l[1])},m(u,f){w(u,e,f),w(u,n,f),w(u,t,f),i(t,s),i(t,a),c&&c.m(t,null),o||(r=[z(e,"click",l[2]),z(s,"click",l[2])],o=!0)},p(u,[f]){f&2&&Y(e,"hidden",!u[1]),u[0]?c?c.p(u,f):(c=ct(u),c.c(),c.m(t,null)):c&&(c.d(1),c=null),f&2&&Y(t,"hidden",!u[1])},i:L,o:L,d(u){u&&S(e),u&&S(n),u&&S(t),c&&c.d(),o=!1,Oe(r)}}}function In(l,e,n){Q.extend(Ee),Q.extend(ze),Q.extend(Fe);let t,s;kt.subscribe(o=>n(0,t=o)),He.subscribe(o=>n(1,s=o));function a(){He.set(!1)}return[t,s,a]}class Pn extends F{constructor(e){super();R(this,e,In,Ln,Z,{})}}function ft(l,e,n){const t=l.slice();return t[9]=e[n],t}function pt(l,e,n){const t=l.slice();return t[12]=e[n],t}function dt(l){let e,n=(l[12].prefix||"")+"",t,s,a=l[12].lastName+"",o,r,c,u=l[12].code.toUpperCase()+"",f,b,m,p;function _(){return l[7](l[12])}return{c(){e=d("button"),t=C(n),s=$(),o=C(a),r=$(),c=d("span"),f=C(u),b=$(),v(c,"class","right svelte-9oq5yo"),v(e,"class","svelte-9oq5yo")},m(h,M){w(h,e,M),i(e,t),i(e,s),i(e,o),i(e,r),i(e,c),i(c,f),i(e,b),m||(p=z(e,"click",_),m=!0)},p(h,M){l=h,M&2&&n!==(n=(l[12].prefix||"")+"")&&y(t,n),M&2&&a!==(a=l[12].lastName+"")&&y(o,a),M&2&&u!==(u=l[12].code.toUpperCase()+"")&&y(f,u)},d(h){h&&S(e),m=!1,p()}}}function mt(l){let e,n=l[9].firstName+"",t,s,a=(l[9].prefix||"")+"",o,r,c=l[9].lastName+"",u,f,b,m=(l[9].code||"...")+"",p,_,h,M;function j(){return l[8](l[9])}return{c(){e=d("button"),t=C(n),s=$(),o=C(a),r=$(),u=C(c),f=$(),b=d("span"),p=C(m),_=$(),v(b,"class","right svelte-9oq5yo"),v(e,"class","svelte-9oq5yo")},m(D,W){w(D,e,W),i(e,t),i(e,s),i(e,o),i(e,r),i(e,u),i(e,f),i(e,b),i(b,p),i(e,_),h||(M=z(e,"click",j),h=!0)},p(D,W){l=D,W&1&&n!==(n=l[9].firstName+"")&&y(t,n),W&1&&a!==(a=(l[9].prefix||"")+"")&&y(o,a),W&1&&c!==(c=l[9].lastName+"")&&y(u,c),W&1&&m!==(m=(l[9].code||"...")+"")&&y(p,m)},d(D){D&&S(e),h=!1,M()}}}function jn(l){let e,n,t,s,a=l[2]?"less":"more",o,r,c,u,f,b=l[1].length+"",m,p,_,h,M,j,D,W,E=l[3]?"less":"more",G,K,H,J,ae,x=l[0].length+"",oe,re,de,ee,fe,ce,U=l[1],q=[];for(let g=0;g<U.length;g+=1)q[g]=dt(pt(l,U,g));let I=l[0],O=[];for(let g=0;g<I.length;g+=1)O[g]=mt(ft(l,I,g));return{c(){e=d("div"),n=d("h3"),t=d("button"),s=C("expand_"),o=C(a),r=$(),c=d("span"),c.textContent="Teachers",u=$(),f=d("span"),m=C(b),p=C("\xA0\xA0"),_=$(),h=d("div");for(let g=0;g<q.length;g+=1)q[g].c();M=$(),j=d("h3"),D=d("button"),W=C("expand_"),G=C(E),K=$(),H=d("span"),H.textContent="Students",J=$(),ae=d("span"),oe=C(x),re=C("\xA0\xA0"),de=$(),ee=d("div");for(let g=0;g<O.length;g+=1)O[g].c();v(t,"class","material-icons svelte-9oq5yo"),v(c,"class","svelte-9oq5yo"),v(f,"class","right svelte-9oq5yo"),v(n,"class","sect svelte-9oq5yo"),v(h,"class","svelte-9oq5yo"),Y(h,"hidden",!l[2]),v(D,"class","material-icons svelte-9oq5yo"),v(H,"class","svelte-9oq5yo"),v(ae,"class","right svelte-9oq5yo"),v(j,"class","sect svelte-9oq5yo"),v(ee,"class","svelte-9oq5yo"),Y(ee,"hidden",!l[3]),v(e,"class","sidebar svelte-9oq5yo"),Y(e,"hidden",!l[4])},m(g,N){w(g,e,N),i(e,n),i(n,t),i(t,s),i(t,o),i(n,r),i(n,c),i(n,u),i(n,f),i(f,m),i(f,p),i(e,_),i(e,h);for(let k=0;k<q.length;k+=1)q[k].m(h,null);i(e,M),i(e,j),i(j,D),i(D,W),i(D,G),i(j,K),i(j,H),i(j,J),i(j,ae),i(ae,oe),i(ae,re),i(e,de),i(e,ee);for(let k=0;k<O.length;k+=1)O[k].m(ee,null);fe||(ce=[z(t,"click",l[5]),z(D,"click",l[6])],fe=!0)},p(g,[N]){if(N&4&&a!==(a=g[2]?"less":"more")&&y(o,a),N&2&&b!==(b=g[1].length+"")&&y(m,b),N&2){U=g[1];let k;for(k=0;k<U.length;k+=1){const ie=pt(g,U,k);q[k]?q[k].p(ie,N):(q[k]=dt(ie),q[k].c(),q[k].m(h,null))}for(;k<q.length;k+=1)q[k].d(1);q.length=U.length}if(N&4&&Y(h,"hidden",!g[2]),N&8&&E!==(E=g[3]?"less":"more")&&y(G,E),N&1&&x!==(x=g[0].length+"")&&y(oe,x),N&1){I=g[0];let k;for(k=0;k<I.length;k+=1){const ie=ft(g,I,k);O[k]?O[k].p(ie,N):(O[k]=mt(ie),O[k].c(),O[k].m(ee,null))}for(;k<O.length;k+=1)O[k].d(1);O.length=I.length}N&8&&Y(ee,"hidden",!g[3]),N&16&&Y(e,"hidden",!g[4])},i:L,o:L,d(g){g&&S(e),pe(q,g),pe(O,g),fe=!1,Oe(ce)}}}function Hn(l,e,n){let t=[],s=[],a=!1,o=!1,r=!0;X.subscribe(async m=>{m==!0&&(n(0,t=(await Ae()).response.data),n(1,s=(await Ue()).response.data),t.length>0&&n(0,t=De(t,"firstName")),s.length>0&&n(1,s=De(s,"lastName")))});function c(){n(2,a=!a)}function u(){n(3,o=!o)}return he(()=>{ke.set(!1)}),ke.subscribe(m=>n(4,r=m)),[t,s,a,o,r,c,u,m=>{Me("teacher",m.code)},m=>{Me("student",m.code)}]}class Yn extends F{constructor(e){super();R(this,e,Hn,jn,Z,{})}}function ht(l){let e,n,t,s,a,o;return e=new Dn({}),t=new Mn({}),a=new Yn({}),{c(){te(e.$$.fragment),n=$(),te(t.$$.fragment),s=$(),te(a.$$.fragment)},m(r,c){ne(e,r,c),w(r,n,c),ne(t,r,c),w(r,s,c),ne(a,r,c),o=!0},i(r){o||(P(e.$$.fragment,r),P(t.$$.fragment,r),P(a.$$.fragment,r),o=!0)},o(r){A(e.$$.fragment,r),A(t.$$.fragment,r),A(a.$$.fragment,r),o=!1},d(r){le(e,r),r&&S(n),le(t,r),r&&S(s),le(a,r)}}}function gt(l){let e,n,t,s,a;var o=l[1].content;function r(c){return{}}return o&&(n=new o(r())),s=new Pn({}),{c(){e=d("div"),n&&te(n.$$.fragment),t=$(),te(s.$$.fragment),v(e,"class","content-field")},m(c,u){w(c,e,u),n&&ne(n,e,null),i(e,t),ne(s,e,null),a=!0},p(c,u){if(o!==(o=c[1].content)){if(n){we();const f=n;A(f.$$.fragment,1,0,()=>{le(f,1)}),Se()}o?(n=new o(r()),te(n.$$.fragment),P(n.$$.fragment,1),ne(n,e,t)):n=null}},i(c){a||(n&&P(n.$$.fragment,c),P(s.$$.fragment,c),a=!0)},o(c){n&&A(n.$$.fragment,c),A(s.$$.fragment,c),a=!1},d(c){c&&S(e),n&&le(n),le(s)}}}function qn(l){let e,n,t,s,a=l[0]&&ht(),o=l[1]&&gt(l);return{c(){e=d("div"),n=d("div"),a&&a.c(),t=$(),o&&o.c(),v(n,"class","content"),v(e,"class","bg")},m(r,c){w(r,e,c),i(e,n),a&&a.m(n,null),i(n,t),o&&o.m(n,null),s=!0},p(r,[c]){r[0]?a?c&1&&P(a,1):(a=ht(),a.c(),P(a,1),a.m(n,t)):a&&(we(),A(a,1,1,()=>{a=null}),Se()),r[1]?o?(o.p(r,c),c&2&&P(o,1)):(o=gt(r),o.c(),P(o,1),o.m(n,null)):o&&(we(),A(o,1,1,()=>{o=null}),Se())},i(r){s||(P(a),P(o),s=!0)},o(r){A(a),A(o),s=!1},d(r){r&&S(e),a&&a.d(),o&&o.d()}}}function An(l,e,n){let t=!1,s;return he(async()=>{n(0,t=await qe())}),Le.subscribe(a=>n(1,s=a)),[t,s]}class Un extends F{constructor(e){super();R(this,e,An,qn,Z,{})}}function _t(l){let e,n;return e=new Un({}),{c(){te(e.$$.fragment)},m(t,s){ne(e,t,s),n=!0},i(t){n||(P(e.$$.fragment,t),n=!0)},o(t){A(e.$$.fragment,t),n=!1},d(t){le(e,t)}}}function Bn(l){let e,n,t,s,a=l[0]&&_t();return{c(){e=d("div"),a&&a.c(),v(e,"class","app")},m(o,r){w(o,e,r),a&&a.m(e,null),n=!0,t||(s=z(e,"mousedown",l[1]),t=!0)},p(o,[r]){o[0]?a?r&1&&P(a,1):(a=_t(),a.c(),P(a,1),a.m(e,null)):a&&(we(),A(a,1,1,()=>{a=null}),Se())},i(o){n||(P(a),n=!0)},o(o){A(a),n=!1},d(o){o&&S(e),a&&a.d(),t=!1,s()}}}function Wn(l,e,n){let t,s;ye(l,X,o=>n(2,t=o)),ye(l,Le,o=>n(0,s=o)),he(async()=>{if(await qe(),!t){me("Login");return}const o=ue.get("m"),r=o=="Login";console.log(o,r),me(r?"HomePage":o||"HomePage")});function a(o){if(!o)return;const r=o.composedPath();let c=!0;for(let u=0;u<r.length;u++){const f=r[u];if(f.classList&&f.classList.contains("sidebar")){c=!1;break}}c&&ke.set(!1)}return[s,a]}class On extends F{constructor(e){super();R(this,e,Wn,Bn,Z,{})}}new On({target:document.getElementById("app")});
