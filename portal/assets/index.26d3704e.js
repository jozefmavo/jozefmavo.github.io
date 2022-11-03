import{w as $e,d as Q,a as ze,b as Fe,c as Oe,g as $t,S as O,i as R,s as K,e as m,f as v,t as k,h as yt,j as b,k as q,l as w,m as i,n as Pe,o as E,p as kt,q as P,r as S,u as Ue,v as _e,x as le,y as L,z as be,A as de,B as x,C as ee,D as H,E as Y,F as te,G as Ce,H as we,I as Lt,J as Ie,K as Ct,L as wt,M as Se}from"./vendor.302d7f90.js";const Dt=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}};Dt();const ue=new URLSearchParams(location.search),St="1201",Pt="users?archived=false&fields=archived%2Ccode%2Cprefix%2ClastName%2CfirstName&isStudent=true&schoolInSchoolYear=",It="users?archived=false&fields=archived%2Ccode%2Cprefix%2ClastName%2CisEmployee&isEmployee=true&schoolInSchoolYear=",Nt=new Map([["teacherSchedule","id%2CappointmentInstance%2CbranchOfSchool%2Cgroups%2CstartTimeSlot%2CstartTimeSlotName%2Cstart%2CendTimeSlot%2CendTimeSlotName%2Cend%2Csubjects%2Cteachers%2ConlineTeachers%2Clocations%2Ctype%2Cvalid%2Ccancelled%2CteacherChanged%2CgroupChanged%2ClocationChanged%2CtimeChanged%2CchangeDescription%2Ccontent%2Cremark%2CschedulerRemark%2ClocationsOfBranch%2CgroupsInDepartments%2CchoosableInDepartmentCodes%2Coptional%2Coptional"],["studentSchedule","start%2Cend%2CstartTimeSlotName%2Ctype%2Cteachers%2Csubjects%2Cgroups%2Clocations%2Cremark%2CschedulerRemark%2CchangeDescription%2Ccancelled%2CteacherChanged%2CtimeChanged%2ClocationChanged%2CchoosableInDepartmentCodes"]]),Ye=$e(),ke=$e(!0),Ee=$e(),He=$e(!1),Mt=$e(),Le=$e();var Ht="/assets/logo.eb49b618.png";Q.extend(ze);Q.extend(Fe);Q.extend(Oe);async function De(l,e,n,t=!0,s,a){if($t(oe)||s){const o=a?"POST":"GET",r={headers:{Authorization:`Bearer ${l}`},method:o},c=await await fetch(`https://${e}.zportal.nl/api/v3/${n}`,s?{method:o}:r);return t?c.json():c.text()}return t?{}:"{}"}async function jt(l,e){return await De(void 0,e,`oauth/token?grant_type=authorization_code&code=${l}`,!0,!0,!0)}let ge,pe,oe=$e(!1);async function je(l,e){return localStorage.getItem("accessToken")?(console.log("Logging in through LocalStorage"),await qt()):!l||!e?(console.log("No school or bindCode, logging out"),oe.set(!1),me("Login"),Tt(),!1):(console.log("Logging in using credentials"),await Ut(l,e))}async function qt(){console.log("Logging in"),ge=localStorage.getItem("accessToken"),pe=localStorage.getItem("accessSchool");let l=!1;const e=await(await fetch(`https://${pe}.zportal.nl/api/v3/users/~me`,{headers:{Authorization:`Bearer ${ge}`}})).json();return l=e.response.status==200,l?(console.log("api.ts: loginUsingKnownToken: success"),Ye.set(e.response.data),oe.set(!0),!0):(console.log("api.ts: loginUsingKnownToken: failure"),ge=null,pe=null,!1)}async function Ut(l,e){try{const t=(await jt(e,l)).access_token;return t?(localStorage.setItem("accessToken",t),localStorage.setItem("accessSchool",l),Ye.set((await(await fetch(`https://${l}.zportal.nl/api/v3/users/~me`,{headers:{Authorization:`Bearer ${t}`}})).json()).response.data),pe=l,ge=t,oe.set(!0),!0):!1}catch{return!1}}function Tt(){localStorage.removeItem("accessSchool"),localStorage.removeItem("accessToken"),oe.set(!1),me("Login")}function Yt(l){let e,n,t,s,a,o,r,c,u,f,$,p,d,_,h,N;return{c(){e=m("div"),n=m("div"),t=m("img"),a=v(),o=m("p"),o.textContent="Please provide login information to continue to Zermelo.",r=v(),c=m("input"),u=v(),f=m("input"),$=v(),p=m("button"),d=k("Login"),yt(t.src,s=Ht)||b(t,"src",s),b(t,"alt","Zermelo"),b(t,"class","logo"),b(c,"placeholder","School"),q(c,"error",l[0]),b(f,"placeholder","Pairing Code"),b(f,"type","number"),q(f,"error",l[0]),p.disabled=_=!l[1]||!l[2],b(n,"class","centered"),b(e,"class","login")},m(T,y){w(T,e,y),i(e,n),i(n,t),i(n,a),i(n,o),i(n,r),i(n,c),Pe(c,l[1]),i(n,u),i(n,f),Pe(f,l[2]),i(n,$),i(n,p),i(p,d),h||(N=[E(c,"input",l[4]),E(f,"input",l[5]),E(p,"click",l[3])],h=!0)},p(T,[y]){y&2&&c.value!==T[1]&&Pe(c,T[1]),y&1&&q(c,"error",T[0]),y&4&&kt(f.value)!==T[2]&&Pe(f,T[2]),y&1&&q(f,"error",T[0]),y&6&&_!==(_=!T[1]||!T[2])&&(p.disabled=_)},i:P,o:P,d(T){T&&S(e),h=!1,Ue(N)}}}function At(l,e,n){let t,s,a;_e(async()=>{await je()&&me("HomePage")});async function o(){const f=await je(s,a.toString().split(" ").join());oe.set(f),console.log(f),f?location.reload():r()}function r(){n(0,t=!0),setTimeout(()=>{n(0,t=!1)},3e3)}function c(){s=this.value,n(1,s)}function u(){a=kt(this.value),n(2,a)}return[t,s,a,o,c,u]}class Bt extends O{constructor(e){super();R(this,e,At,Yt,K,{})}}function Wt(l){let e,n,t,s,a,o,r,c;return{c(){e=m("div"),n=m("h3"),n.textContent="Jozefmavo Zermelo Portal",t=v(),s=m("p"),s.textContent="Click the button to go to the schedule.",a=v(),o=m("button"),o.textContent="Schedule",b(e,"class","homepage")},m(u,f){w(u,e,f),i(e,n),i(e,t),i(e,s),i(e,a),i(e,o),r||(c=E(o,"click",l[0]),r=!0)},p:P,i:P,o:P,d(u){u&&S(e),r=!1,c()}}}function Et(l){function e(){me("SchedulePeople")}return[e]}class zt extends O{constructor(e){super();R(this,e,Et,Wt,K,{})}}function Ft(l){let e,n,t,s,a,o,r,c,u,f;return{c(){e=m("div"),n=m("h3"),n.innerHTML='<span class="material-icons svelte-1ne4om4">warning</span> Module Load Error',t=v(),s=m("p"),s.innerHTML=`The requested module could not be found in.<br class="svelte-1ne4om4"/>Maybe you used a broken
    link?`,a=v(),o=m("br"),r=v(),c=m("button"),c.textContent="Go Home",b(n,"class","svelte-1ne4om4"),b(s,"class","svelte-1ne4om4"),b(o,"class","svelte-1ne4om4"),b(c,"class","svelte-1ne4om4"),b(e,"class","content svelte-1ne4om4")},m($,p){w($,e,p),i(e,n),i(e,t),i(e,s),i(e,a),i(e,o),i(e,r),i(e,c),u||(f=E(c,"click",l[0]),u=!0)},p:P,i:P,o:P,d($){$&&S(e),u=!1,f()}}}function Ot(l){function e(){me("HomePage")}return[e]}class Rt extends O{constructor(e){super();R(this,e,Ot,Ft,K,{})}}function Kt(l){let e,n,t,s,a,o,r,c,u=(l[0].classes||"")+"",f,$,p;return{c(){e=m("div"),n=m("p"),t=k(l[6]),s=v(),a=m("p"),o=k(l[7]),r=v(),c=m("p"),f=k(u),b(c,"class","classes"),b(e,"class","appointment"),le(e,"top",l[4]+"px"),le(e,"height",l[5]+"px"),le(e,"left",l[3]),q(e,"cancelled",l[0].cancelled),q(e,"changed",l[1]),q(e,"newTime",l[2])},m(d,_){w(d,e,_),i(e,n),i(n,t),i(e,s),i(e,a),i(a,o),i(e,r),i(e,c),i(c,f),$||(p=E(e,"click",l[8]),$=!0)},p(d,[_]){_&64&&L(t,d[6]),_&128&&L(o,d[7]),_&1&&u!==(u=(d[0].classes||"")+"")&&L(f,u),_&16&&le(e,"top",d[4]+"px"),_&32&&le(e,"height",d[5]+"px"),_&8&&le(e,"left",d[3]),_&1&&q(e,"cancelled",d[0].cancelled),_&2&&q(e,"changed",d[1]),_&4&&q(e,"newTime",d[2])},i:P,o:P,d(d){d&&S(e),$=!1,p()}}}function Zt(l,e,n){let{appointment:t}=e;function s(){Mt.set(t),He.set(!0)}let a=!1,o=!1,r,c,u,f,$;return _e(()=>{const p=t.subjects[0];n(7,$=p?t.teachers.join(" ").toUpperCase():"");const d=t.locations.length?t.locations[0]:"0_00",_=t.startMin,h=t.endMin,N=t.rowNr;n(1,a=t.teacherChanged||t.locationChanged),n(2,o=t.timeChanged),n(4,c=(_-460)*2),n(3,r=`calc(42px + (100% - 40px) / 5 * ${N-1})`),n(5,u=(h-_)*2-2),n(6,f=`${p||$} - ${d}`)}),l.$$set=p=>{"appointment"in p&&n(0,t=p.appointment)},[t,a,o,r,c,u,f,$,s]}class Gt extends O{constructor(e){super();R(this,e,Zt,Kt,K,{appointment:0})}}function Re(l,e,n){const t=l.slice();return t[1]=e[n],t}function Ke(l){let e,n=l[1].d+"",t,s;return{c(){e=m("div"),t=k(n),s=v(),b(e,"class","appointment leftrow"),le(e,"top","0px"),le(e,"height","40px"),le(e,"left","calc(42px + ((100% - 40px) / 5 * "+(l[1].i-1)+"))"),le(e,"width","calc((100% - 44px) / 5)"),q(e,"today",new Date().getDay()==l[1].i)},m(a,o){w(a,e,o),i(e,t),i(e,s)},p(a,o){o&1&&q(e,"today",new Date().getDay()==a[1].i)},d(a){a&&S(e)}}}function Jt(l){let e,n=l[0],t=[];for(let s=0;s<n.length;s+=1)t[s]=Ke(Re(l,n,s));return{c(){for(let s=0;s<t.length;s+=1)t[s].c();e=be()},m(s,a){for(let o=0;o<t.length;o+=1)t[o].m(s,a);w(s,e,a)},p(s,[a]){if(a&1){n=s[0];let o;for(o=0;o<n.length;o+=1){const r=Re(s,n,o);t[o]?t[o].p(r,a):(t[o]=Ke(r),t[o].c(),t[o].m(e.parentNode,e))}for(;o<t.length;o+=1)t[o].d(1);t.length=n.length}},i:P,o:P,d(s){de(t,s),s&&S(e)}}}function Qt(l){return[[{i:1,d:"Mon"},{i:2,d:"Tue"},{i:3,d:"Wed"},{i:4,d:"Thu"},{i:5,d:"Fri"}]]}class Vt extends O{constructor(e){super();R(this,e,Qt,Jt,K,{})}}const Ze=[{startMin:480,endMin:540,start:{h:8,m:0},end:{h:9,m:0}},{startMin:540,endMin:600,start:{h:9,m:0},end:{h:10,m:0}},{startMin:600,endMin:660,start:{h:10,m:0},end:{h:11,m:0}},{startMin:660,endMin:720,start:{h:11,m:0},end:{h:12,m:0}},{startMin:720,endMin:780,start:{h:12,m:0},end:{h:13,m:0}},{startMin:780,endMin:840,start:{h:13,m:0},end:{h:14,m:0}},{startMin:840,endMin:900,start:{h:14,m:0},end:{h:15,m:0}},{startMin:900,endMin:960,start:{h:15,m:0},end:{h:16,m:0}},{startMin:960,endMin:1020,start:{h:16,m:0},end:{h:17,m:0}},{startMin:1020,endMin:1080,start:{h:17,m:0},end:{h:18,m:0}}];function Ge(l,e,n){const t=l.slice();return t[0]=e[n],t}function Je(l){let e,n=l[0].start.h.toString().padStart(2,"0")+"",t,s;return{c(){e=m("div"),t=k(n),s=v(),b(e,"class","appointment timenote"),le(e,"top",(l[0].startMin-460)*2+"px"),le(e,"height",(l[0].endMin-l[0].startMin)*2-2+"px"),le(e,"width","40px"),le(e,"left","0px")},m(a,o){w(a,e,o),i(e,t),i(e,s)},p:P,d(a){a&&S(e)}}}function Xt(l){let e,n=Ze,t=[];for(let s=0;s<n.length;s+=1)t[s]=Je(Ge(l,n,s));return{c(){for(let s=0;s<t.length;s+=1)t[s].c();e=be()},m(s,a){for(let o=0;o<t.length;o+=1)t[o].m(s,a);w(s,e,a)},p(s,[a]){if(a&0){n=Ze;let o;for(o=0;o<n.length;o+=1){const r=Ge(s,n,o);t[o]?t[o].p(r,a):(t[o]=Je(r),t[o].c(),t[o].m(e.parentNode,e))}for(;o<t.length;o+=1)t[o].d(1);t.length=n.length}},i:P,o:P,d(s){de(t,s),s&&S(e)}}}class xt extends O{constructor(e){super();R(this,e,null,Xt,K,{})}}function Ne(l,e){document.title=`Zermelo Hub | ${l}: ${e}`,Ee.set({type:l,id:e}),me("SchedulePeople")}async function en(l){const e=(await Ae()).response.data;for(let n=0;n<e.length;n++)if(e[n].code==l)return e[n];return{}}async function tn(l){const e=(await Be()).response.data;for(let n=0;n<e.length;n++)if(e[n].code==l)return e[n];return{}}async function Ae(){return await De(ge,pe,`${Pt}${St}`)}async function Be(){return console.log(ge,pe),await De(ge,pe,`${It}${St}`)}function Qe(l){let e,n,t;return n=new Lt({props:{value:l[1],items:l[0]}}),n.$on("select",l[2]),{c(){e=m("div"),x(n.$$.fragment),b(e,"class","select-holder")},m(s,a){w(s,e,a),ee(n,e,null),t=!0},p(s,a){const o={};a&1&&(o.items=s[0]),n.$set(o)},i(s){t||(H(n.$$.fragment,s),t=!0)},o(s){Y(n.$$.fragment,s),t=!1},d(s){s&&S(e),te(n)}}}function nn(l){let e,n,t=l[0]&&Qe(l);return{c(){t&&t.c(),e=be()},m(s,a){t&&t.m(s,a),w(s,e,a),n=!0},p(s,[a]){s[0]?t?(t.p(s,a),a&1&&H(t,1)):(t=Qe(s),t.c(),H(t,1),t.m(e.parentNode,e)):t&&(Ce(),Y(t,1,1,()=>{t=null}),we())},i(s){n||(H(t),n=!0)},o(s){Y(t),n=!1},d(s){t&&t.d(s),s&&S(e)}}}function ln(l,e,n){let t,s=[];_e(o);function a(r){const c=r.detail.value,u=c.code;status="Schedule for "+r.label,Ne(c.isEmployee?"teacher":"student",u)}async function o(){const r=Array.prototype.concat((await Be()).response.data,(await Ae()).response.data);n(0,s=[]);for(let c=0;c<r.length;c++){const[u,f,$,p]=[r[c].firstName||"",r[c].prefix||"",r[c].lastName||"",r[c].code||""];s.push({label:`${u} ${f} ${$}`+(r[c].isEmployee?` (${p.toUpperCase()})`:""),value:r[c]})}}return Le.subscribe(o),[s,t,a]}class sn extends O{constructor(e){super();R(this,e,ln,nn,K,{})}}async function on(l,e=0){const n=Te(ve.prev)+601200*e,t=Te(ve.next)+601200*e,s=Nt.get("teacherSchedule");return await De(ge,pe,`appointments?start=${n}&end=${t}&teachers=${l}&fields=${s}`,!0)}async function an(l,e=0){const n=Te(ve.prev)+601200*e,t=Te(ve.next)+601200*e,s=Nt.get("studentSchedule");return await De(ge,pe,`appointments?start=${n}&end=${t}&user=${l}&fields=${s}`,!0)}function Te(l){return Q().weekday(l==ve.prev?-7:0).unix()}var ve=(l=>(l[l.prev=0]="prev",l[l.next=1]="next",l))(ve||{});function rn(l){let e=[];for(let n=0;n<l.length;n++){const t=l[n],s=new Date(t.start*1e3).getDay()-new Date(Te(ve.prev)).getDay()+2;e.push({rowNr:s,startMin:new Date(t.start*1e3).getHours()*60+new Date(t.start*1e3).getMinutes(),endMin:new Date(t.end*1e3).getHours()*60+new Date(t.end*1e3).getMinutes(),slotName:t.startTimeSlotName,locations:t.locations,teachers:t.teachers,subjects:t.subjects,cancelled:t.cancelled,changeWarning:t.changeDescription,teacherChanged:t.teacherChanged,locationChanged:t.locationChanged,timeChanged:t.timeChanged,start:{h:new Date(t.start*1e3).getHours(),m:new Date(t.start*1e3).getMinutes()},end:{h:new Date(t.end*1e3).getHours(),m:new Date(t.end*1e3).getMinutes()},classes:t.groups,startTimeStamp:t.start,endTimeStamp:t.end})}return e}function ye(l,e){return l.sort(function(n,t){var s=n[e],a=t[e];return s<a?-1:s>a?1:0})}function Ve(l,e,n){const t=l.slice();return t[11]=e[n],t}function cn(l){let e;return{c(){e=k("Loading...")},m(n,t){w(n,e,t)},p:P,d(n){n&&S(e)}}}function un(l){let e;function n(a,o){return a[1].id?pn:fn}let t=n(l),s=t(l);return{c(){s.c(),e=be()},m(a,o){s.m(a,o),w(a,e,o)},p(a,o){t===(t=n(a))&&s?s.p(a,o):(s.d(1),s=t(a),s&&(s.c(),s.m(e.parentNode,e)))},d(a){s.d(a),a&&S(e)}}}function fn(l){let e;return{c(){e=k("No schedule selected.")},m(n,t){w(n,e,t)},p:P,d(n){n&&S(e)}}}function pn(l){let e=(l[4]||"Loading...")+"",n;return{c(){n=k(e)},m(t,s){w(t,n,s)},p(t,s){s&16&&e!==(e=(t[4]||"Loading...")+"")&&L(n,e)},d(t){t&&S(n)}}}function Xe(l){let e,n;return e=new Gt({props:{appointment:l[11]}}),{c(){x(e.$$.fragment)},m(t,s){ee(e,t,s),n=!0},p(t,s){const a={};s&1&&(a.appointment=t[11]),e.$set(a)},i(t){n||(H(e.$$.fragment,t),n=!0)},o(t){Y(e.$$.fragment,t),n=!1},d(t){te(e,t)}}}function dn(l){let e,n,t,s,a,o,r=parseInt(Ie().format("W"))+l[3]+"",c,u,f,$,p,d,_,h,N,T,y,W,F,Z,G,j,J,ae,V,se,re,he,X;N=new sn({});function fe(g,D){return g[2]?cn:un}let ce=fe(l),A=ce(l);J=new Vt({}),V=new xt({});let U=l[0],I=[];for(let g=0;g<U.length;g+=1)I[g]=Xe(Ve(l,U,g));const z=g=>Y(I[g],1,1,()=>{I[g]=null});return{c(){e=m("div"),n=m("h3"),t=m("button"),t.textContent="arrow_back_ios_new",s=v(),a=m("span"),o=k("Week "),c=k(r),u=v(),f=m("button"),f.textContent="arrow_forward_ios",$=v(),p=m("button"),p.textContent="date_range",d=v(),_=m("div"),h=v(),x(N.$$.fragment),T=v(),y=m("div"),W=v(),F=m("h3"),A.c(),Z=v(),G=m("div"),j=m("div"),x(J.$$.fragment),ae=v(),x(V.$$.fragment),se=v();for(let g=0;g<I.length;g+=1)I[g].c();b(t,"class","material-icons"),b(a,"class","week"),b(f,"class","material-icons"),b(p,"class","material-icons"),b(_,"class","sep"),b(y,"class","sep"),b(e,"class","header"),b(j,"class","grid"),b(G,"class","content")},m(g,D){w(g,e,D),i(e,n),i(n,t),i(n,s),i(n,a),i(a,o),i(a,c),i(n,u),i(n,f),i(n,$),i(n,p),i(n,d),i(n,_),i(n,h),ee(N,n,null),i(n,T),i(n,y),i(e,W),i(e,F),A.m(F,null),w(g,Z,D),w(g,G,D),i(G,j),ee(J,j,null),i(j,ae),ee(V,j,null),i(j,se);for(let C=0;C<I.length;C+=1)I[C].m(j,null);re=!0,he||(X=[E(t,"click",l[5]),E(f,"click",l[6]),E(p,"click",l[7])],he=!0)},p(g,[D]){if((!re||D&8)&&r!==(r=parseInt(Ie().format("W"))+g[3]+"")&&L(c,r),ce===(ce=fe(g))&&A?A.p(g,D):(A.d(1),A=ce(g),A&&(A.c(),A.m(F,null))),D&1){U=g[0];let C;for(C=0;C<U.length;C+=1){const ie=Ve(g,U,C);I[C]?(I[C].p(ie,D),H(I[C],1)):(I[C]=Xe(ie),I[C].c(),H(I[C],1),I[C].m(j,null))}for(Ce(),C=U.length;C<I.length;C+=1)z(C);we()}},i(g){if(!re){H(N.$$.fragment,g),H(J.$$.fragment,g),H(V.$$.fragment,g);for(let D=0;D<U.length;D+=1)H(I[D]);re=!0}},o(g){Y(N.$$.fragment,g),Y(J.$$.fragment,g),Y(V.$$.fragment,g),I=I.filter(Boolean);for(let D=0;D<I.length;D+=1)Y(I[D]);re=!1},d(g){g&&S(e),te(N),A.d(),g&&S(Z),g&&S(G),te(J),te(V),de(I,g),he=!1,Ue(X)}}}function mn(l,e,n){Q.extend(ze),Q.extend(Fe),Q.extend(Oe);let t=[],s=[],a={id:""},o=!1,r=0,c;Ee.subscribe(async d=>{if(d){n(2,o=!0),n(1,a=d),u(d.type,d.id);const _=d.type=="teacher",h=await tn(d.id),N=await en(d.id);let T=N.firstName||"",y=N.prefix||h.prefix||"",W=N.lastName||h.lastName,F=(N.code||h.code).toUpperCase();n(4,c=(_?"":`${T} `)+`${y} ${W} (${F})`),document.title=`Zermelo Hub | ${c}`,n(2,o=!1)}}),_e(()=>{const d=new URLSearchParams(location.search),_=d.get("person_id"),h=d.get("person_type");n(2,o=!1),_&&h&&(Ee.set({type:h,id:_}),u(h,_,!0))});async function u(d,_,h=!0){let N;n(0,s=[]),d=="student"?N=await an(_,r+1):N=await on(_,r+1),h&&Ct(`./?m=${ue.get("m")}&person_id=${_}&person_type=${d}`),ue.set("person_id",_),ue.set("person_type",d),t=ye(N.response.data,"start"),n(0,s=rn(t)),n(2,o=!1)}function f(){r+parseInt(Ie().format("W"))>1&&(n(3,r-=1),u(a.type,a.id))}function $(){r+parseInt(Ie().format("W"))<52&&(n(3,r+=1),u(a.type,a.id))}function p(){r!=0&&(n(3,r=0),u(a.type,a.id))}return setInterval(()=>{60*parseInt(Q().format("HH"))+parseInt(Q().format("m"))},300),[s,a,o,r,c,f,$,p,u]}class hn extends O{constructor(e){super();R(this,e,mn,dn,K,{openSched:8})}get openSched(){return this.$$.ctx[8]}}function gn(l){let e,n,t;return n=new hn({}),{c(){e=m("div"),x(n.$$.fragment),b(e,"class","svelte-za3vn1")},m(s,a){w(s,e,a),ee(n,e,null),t=!0},p:P,i(s){t||(H(n.$$.fragment,s),t=!0)},o(s){Y(n.$$.fragment,s),t=!1},d(s){s&&S(e),te(n)}}}class _n extends O{constructor(e){super();R(this,e,null,gn,K,{})}}function xe(l,e,n){const t=l.slice();return t[4]=e[n],t}function et(l){let e,n=l[4].firstName+"",t,s,a=(l[4].prefix||"")+"",o,r,c=l[4].lastName+"",u,f,$,p=l[4].code.toUpperCase()+"",d,_,h,N;return{c(){e=m("button"),t=k(n),s=v(),o=k(a),r=v(),u=k(c),f=v(),$=m("span"),d=k(p),_=v(),b($,"class","right")},m(T,y){w(T,e,y),i(e,t),i(e,s),i(e,o),i(e,r),i(e,u),i(e,f),i(e,$),i($,d),i(e,_),h||(N=E(e,"click",function(){wt(l[1](l[4].code))&&l[1](l[4].code).apply(this,arguments)}),h=!0)},p(T,y){l=T,y&1&&n!==(n=l[4].firstName+"")&&L(t,n),y&1&&a!==(a=(l[4].prefix||"")+"")&&L(o,a),y&1&&c!==(c=l[4].lastName+"")&&L(u,c),y&1&&p!==(p=l[4].code.toUpperCase()+"")&&L(d,p)},d(T){T&&S(e),h=!1,N()}}}function bn(l){let e,n,t,s,a,o,r=l[0].length+"",c,u,f,$=l[0],p=[];for(let d=0;d<$.length;d+=1)p[d]=et(xe(l,$,d));return{c(){e=m("div"),n=m("h3"),t=m("span"),t.textContent="Students",s=v(),a=m("span"),o=k("("),c=k(r),u=k(")"),f=v();for(let d=0;d<p.length;d+=1)p[d].c();b(e,"class","studentlist")},m(d,_){w(d,e,_),i(e,n),i(n,t),i(n,s),i(n,a),i(a,o),i(a,c),i(a,u),i(e,f);for(let h=0;h<p.length;h+=1)p[h].m(e,null)},p(d,[_]){if(_&1&&r!==(r=d[0].length+"")&&L(c,r),_&3){$=d[0];let h;for(h=0;h<$.length;h+=1){const N=xe(d,$,h);p[h]?p[h].p(N,_):(p[h]=et(N),p[h].c(),p[h].m(e,null))}for(;h<p.length;h+=1)p[h].d(1);p.length=$.length}},i:P,o:P,d(d){d&&S(e),de(p,d)}}}function vn(l,e,n){let t;Se(l,oe,r=>n(2,t=r));let s=[];oe.subscribe(r=>{r&&o()});function a(r){return function(){Ne("student",r)}}_e(async()=>{t&&o()});async function o(){n(0,s=(await Ae()).response.data),s.length>0&&n(0,s=ye(s,"firstName"))}return[s,a]}class $n extends O{constructor(e){super();R(this,e,vn,bn,K,{})}}function tt(l,e,n){const t=l.slice();return t[4]=e[n],t}function nt(l){let e,n=(l[4].prefix||"")+"",t,s,a=l[4].lastName+"",o,r,c,u=l[4].code.toUpperCase()+"",f,$,p,d;return{c(){e=m("button"),t=k(n),s=v(),o=k(a),r=v(),c=m("span"),f=k(u),$=v(),b(c,"class","right")},m(_,h){w(_,e,h),i(e,t),i(e,s),i(e,o),i(e,r),i(e,c),i(c,f),i(e,$),p||(d=E(e,"click",function(){wt(l[1](l[4].code))&&l[1](l[4].code).apply(this,arguments)}),p=!0)},p(_,h){l=_,h&1&&n!==(n=(l[4].prefix||"")+"")&&L(t,n),h&1&&a!==(a=l[4].lastName+"")&&L(o,a),h&1&&u!==(u=l[4].code.toUpperCase()+"")&&L(f,u)},d(_){_&&S(e),p=!1,d()}}}function kn(l){let e,n,t,s,a,o,r=l[0].length+"",c,u,f,$=l[0],p=[];for(let d=0;d<$.length;d+=1)p[d]=nt(tt(l,$,d));return{c(){e=m("div"),n=m("h3"),t=m("span"),t.textContent="Teachers",s=v(),a=m("span"),o=k("("),c=k(r),u=k(")"),f=v();for(let d=0;d<p.length;d+=1)p[d].c();b(e,"class","studentlist")},m(d,_){w(d,e,_),i(e,n),i(n,t),i(n,s),i(n,a),i(a,o),i(a,c),i(a,u),i(e,f);for(let h=0;h<p.length;h+=1)p[h].m(e,null)},p(d,[_]){if(_&1&&r!==(r=d[0].length+"")&&L(c,r),_&3){$=d[0];let h;for(h=0;h<$.length;h+=1){const N=tt(d,$,h);p[h]?p[h].p(N,_):(p[h]=nt(N),p[h].c(),p[h].m(e,null))}for(;h<p.length;h+=1)p[h].d(1);p.length=$.length}},i:P,o:P,d(d){d&&S(e),de(p,d)}}}function Cn(l,e,n){let t;Se(l,oe,r=>n(2,t=r));let s=[];oe.subscribe(r=>{r&&o()});function a(r){return function(){Ne("teacher",r)}}_e(()=>{t&&o()});async function o(){n(0,s=(await Be()).response.data),s.length>0&&n(0,s=ye(s,"lastName"))}return[s,a]}class wn extends O{constructor(e){super();R(this,e,Cn,kn,K,{})}}function me(l){console.log(`OpenMod: Opening ${l}`);const e=qe.has(l);Le.set(qe.get(e?l:"PageNotFound")),ue.set("m",e?l:"PageNotFound");const n=ue.get("person_id")?`&person_id=${ue.get("person_id")}`:"",t=ue.get("person_type")?`&person_type=${ue.get("person_type")}`:"";ue.set("person_id",""),ue.set("class_id",""),Ct(`./?m=${e?l:"PageNotFound"}${l=="SchedulePeople"?`${n}${t}`:""}`),He.set(!1)}const qe=new Map([["HomePage",{name:"Home",icon:"home",content:zt,sidebar:!1}],["SchedulePeople",{name:"People",icon:"people",content:_n,sidebar:!0}],["ListStudents",{name:"Students",icon:"school",content:$n,sidebar:!0}],["ListTeachers",{name:"Teachers",icon:"supervisor_account",content:wn,sidebar:!0}],["Login",{name:"Login",icon:"",content:Bt,sidebar:!1}],["PageNotFound",{name:"Page Not Found",icon:"",content:Rt,sidebar:!1}]]),lt=[{icon:"logout",action:Tt,caption:"Logout"},{icon:"calendar_today",action:()=>{Ne("student",$t(Ye)[0].code)},caption:"Show own calendar"}];function st(l,e,n){const t=l.slice();return t[0]=e[n],t}function ot(l){let e,n=l[0].icon+"",t,s,a,o,r;return{c(){e=m("button"),t=k(n),s=v(),b(e,"class","material-icons"),b(e,"title",a=l[0].caption)},m(c,u){w(c,e,u),i(e,t),i(e,s),o||(r=E(e,"click",l[0].action),o=!0)},p(c,u){l=c},d(c){c&&S(e),o=!1,r()}}}function Sn(l){let e,n=lt,t=[];for(let s=0;s<n.length;s+=1)t[s]=ot(st(l,n,s));return{c(){for(let s=0;s<t.length;s+=1)t[s].c();e=be()},m(s,a){for(let o=0;o<t.length;o+=1)t[o].m(s,a);w(s,e,a)},p(s,[a]){if(a&0){n=lt;let o;for(o=0;o<n.length;o+=1){const r=st(s,n,o);t[o]?t[o].p(r,a):(t[o]=ot(r),t[o].c(),t[o].m(e.parentNode,e))}for(;o<t.length;o+=1)t[o].d(1);t.length=n.length}},i:P,o:P,d(s){de(t,s),s&&S(e)}}}class Nn extends O{constructor(e){super();R(this,e,null,Sn,K,{})}}function at(l,e,n){const t=l.slice();return t[2]=e[n],t[3]=e,t[4]=n,t}function rt(l){let e,n=l[2].icon+"",t,s,a,o;function r(){return l[1](l[2],l[3],l[4])}return{c(){e=m("button"),t=k(n),b(e,"class",s="material-icons "+(l[2].className||"")+" svelte-16luj22"),q(e,"active",l[2].value)},m(c,u){w(c,e,u),i(e,t),a||(o=E(e,"click",r),a=!0)},p(c,u){l=c,u&1&&n!==(n=l[2].icon+"")&&L(t,n),u&1&&s!==(s="material-icons "+(l[2].className||"")+" svelte-16luj22")&&b(e,"class",s),u&1&&q(e,"active",l[2].value)},d(c){c&&S(e),a=!1,o()}}}function Mn(l){let e,n=l[0],t=[];for(let s=0;s<n.length;s+=1)t[s]=rt(at(l,n,s));return{c(){for(let s=0;s<t.length;s+=1)t[s].c();e=be()},m(s,a){for(let o=0;o<t.length;o+=1)t[o].m(s,a);w(s,e,a)},p(s,[a]){if(a&1){n=s[0];let o;for(o=0;o<n.length;o+=1){const r=at(s,n,o);t[o]?t[o].p(r,a):(t[o]=rt(r),t[o].c(),t[o].m(e.parentNode,e))}for(;o<t.length;o+=1)t[o].d(1);t.length=n.length}},i:P,o:P,d(s){de(t,s),s&&S(e)}}}function Tn(l,e,n){const t=[{className:"toggle-sidebar",icon:"groups",value:!1,event:a=>{ke.set(a)}}];return ke.subscribe(a=>{n(0,t[0].value=a,t)}),ke.set(!0),[t,(a,o,r)=>{n(0,o[r].value=!a.value,t),a.event(a.value)}]}class yn extends O{constructor(e){super();R(this,e,Tn,Mn,K,{})}}function Ln(l){let e,n,t,s,a,o,r,c,u,f,$,p,d,_,h,N,T,y,W,F=l[0].firstName+"",Z,G;return c=new yn({}),p=new Nn({}),{c(){e=m("div"),n=m("div"),t=m("b"),t.innerHTML=`Zermelo
      <div class="sep"></div>`,s=v(),a=m("span"),a.textContent=`${pe}`,o=v(),r=m("div"),x(c.$$.fragment),u=v(),f=m("div"),$=v(),x(p.$$.fragment),d=v(),_=m("div"),h=v(),N=m("div"),T=m("span"),T.textContent="person",y=v(),W=m("p"),Z=k(F),b(t,"class","name"),b(a,"class","schoolname"),b(n,"class","header"),b(f,"class","sep"),b(_,"class","sep"),b(T,"class","material-icons"),b(N,"class","userprofile"),b(r,"class","right"),b(e,"class","tb")},m(j,J){w(j,e,J),i(e,n),i(n,t),i(n,s),i(n,a),i(e,o),i(e,r),ee(c,r,null),i(r,u),i(r,f),i(r,$),ee(p,r,null),i(r,d),i(r,_),i(r,h),i(r,N),i(N,T),i(N,y),i(N,W),i(W,Z),G=!0},p(j,[J]){(!G||J&1)&&F!==(F=j[0].firstName+"")&&L(Z,F)},i(j){G||(H(c.$$.fragment,j),H(p.$$.fragment,j),G=!0)},o(j){Y(c.$$.fragment,j),Y(p.$$.fragment,j),G=!1},d(j){j&&S(e),te(c),te(p)}}}function Dn(l,e,n){let t;return Ye.subscribe(s=>{n(0,t=s[0])}),[t]}class Pn extends O{constructor(e){super();R(this,e,Dn,Ln,K,{})}}function it(l,e,n){const t=l.slice();return t[4]=e[n][0],t[5]=e[n][1],t}function ct(l){let e,n,t,s,a,o=[...qe],r=[];for(let c=0;c<o.length;c+=1)r[c]=ut(it(l,o,c));return{c(){e=m("div"),n=m("button"),n.innerHTML=`<span class="material-icons svelte-ss09bj">home</span> 
      <p class="svelte-ss09bj">Home</p>`,t=v();for(let c=0;c<r.length;c+=1)r[c].c();b(n,"class","home svelte-ss09bj"),q(n,"selected",l[1].name=="Home"),b(e,"class","sidebar svelte-ss09bj")},m(c,u){w(c,e,u),i(e,n),i(e,t);for(let f=0;f<r.length;f+=1)r[f].m(e,null);s||(a=E(n,"click",l[2]),s=!0)},p(c,u){if(u&2&&q(n,"selected",c[1].name=="Home"),u&2){o=[...qe];let f;for(f=0;f<o.length;f+=1){const $=it(c,o,f);r[f]?r[f].p($,u):(r[f]=ut($),r[f].c(),r[f].m(e,null))}for(;f<r.length;f+=1)r[f].d(1);r.length=o.length}},d(c){c&&S(e),de(r,c),s=!1,a()}}}function In(l){let e,n,t=l[5].icon+"",s,a,o,r=l[5].name+"",c,u,f,$;function p(){return l[3](l[4])}return{c(){e=m("button"),n=m("span"),s=k(t),a=v(),o=m("p"),c=k(r),u=v(),b(n,"class","material-icons svelte-ss09bj"),b(o,"class","svelte-ss09bj"),b(e,"class","svelte-ss09bj"),q(e,"selected",l[1]&&l[1].name==l[5].name)},m(d,_){w(d,e,_),i(e,n),i(n,s),i(e,a),i(e,o),i(o,c),i(e,u),f||($=E(e,"click",p),f=!0)},p(d,_){l=d,_&2&&q(e,"selected",l[1]&&l[1].name==l[5].name)},d(d){d&&S(e),f=!1,$()}}}function ut(l){let e,n=l[5].sidebar&&l[5]&&In(l);return{c(){n&&n.c(),e=be()},m(t,s){n&&n.m(t,s),w(t,e,s)},p(t,s){t[5].sidebar&&t[5]&&n.p(t,s)},d(t){n&&n.d(t),t&&S(e)}}}function Hn(l){let e,n=l[0]&&ct(l);return{c(){n&&n.c(),e=be()},m(t,s){n&&n.m(t,s),w(t,e,s)},p(t,[s]){t[0]?n?n.p(t,s):(n=ct(t),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},i:P,o:P,d(t){n&&n.d(t),t&&S(e)}}}function jn(l,e,n){let t,s;Se(l,oe,r=>n(0,t=r)),Se(l,Le,r=>n(1,s=r));function a(){me("HomePage")}return[t,s,a,r=>me(r)]}class qn extends O{constructor(e){super();R(this,e,jn,Hn,K,{})}}function ft(l){let e,n,t=(l[0].subjects.toString().toUpperCase()||"appointment")+"",s,a,o,r,c,u=(l[0].locations.length?l[0].locations:"None")+"",f,$,p,d,_,h=l[0].teachers.length>1?"s":"",N,T,y=l[0].teachers.join(" ").toUpperCase()+"",W,F,Z,G,j,J=Q(l[0].startTimeStamp*1e3).format("DD/MM/YYYY, hh:mm A")+"",ae,V,se,re,he,X=Q(l[0].endTimeStamp*1e3).format("DD/MM/YYYY, hh:mm A")+"",fe,ce,A,U,I,z=l[0].classes.length>1?"s":"",g,D,C=(l[0].classes.length?l[0].classes:"Unknown")+"",ie,We,Me,ne=l[0].changeWarning&&pt(l);return{c(){e=m("h3"),n=k("Information for "),s=k(t),a=v(),o=m("p"),r=m("b"),r.textContent="Location",c=k(": "),f=k(u),$=v(),p=m("p"),d=m("b"),_=k("Teacher"),N=k(h),T=k(": "),W=k(y),F=v(),Z=m("p"),G=m("b"),G.textContent="Start",j=k(": "),ae=k(J),V=v(),se=m("p"),re=m("b"),re.textContent="End",he=k(": "),fe=k(X),ce=v(),A=m("p"),U=m("b"),I=k("Group"),g=k(z),D=k(": "),ie=k(C),We=v(),ne&&ne.c(),Me=be()},m(M,B){w(M,e,B),i(e,n),i(e,s),w(M,a,B),w(M,o,B),i(o,r),i(o,c),i(o,f),w(M,$,B),w(M,p,B),i(p,d),i(d,_),i(d,N),i(p,T),i(p,W),w(M,F,B),w(M,Z,B),i(Z,G),i(Z,j),i(Z,ae),w(M,V,B),w(M,se,B),i(se,re),i(se,he),i(se,fe),w(M,ce,B),w(M,A,B),i(A,U),i(U,I),i(U,g),i(A,D),i(A,ie),w(M,We,B),ne&&ne.m(M,B),w(M,Me,B)},p(M,B){B&1&&t!==(t=(M[0].subjects.toString().toUpperCase()||"appointment")+"")&&L(s,t),B&1&&u!==(u=(M[0].locations.length?M[0].locations:"None")+"")&&L(f,u),B&1&&h!==(h=M[0].teachers.length>1?"s":"")&&L(N,h),B&1&&y!==(y=M[0].teachers.join(" ").toUpperCase()+"")&&L(W,y),B&1&&J!==(J=Q(M[0].startTimeStamp*1e3).format("DD/MM/YYYY, hh:mm A")+"")&&L(ae,J),B&1&&X!==(X=Q(M[0].endTimeStamp*1e3).format("DD/MM/YYYY, hh:mm A")+"")&&L(fe,X),B&1&&z!==(z=M[0].classes.length>1?"s":"")&&L(g,z),B&1&&C!==(C=(M[0].classes.length?M[0].classes:"Unknown")+"")&&L(ie,C),M[0].changeWarning?ne?ne.p(M,B):(ne=pt(M),ne.c(),ne.m(Me.parentNode,Me)):ne&&(ne.d(1),ne=null)},d(M){M&&S(e),M&&S(a),M&&S(o),M&&S($),M&&S(p),M&&S(F),M&&S(Z),M&&S(V),M&&S(se),M&&S(ce),M&&S(A),M&&S(We),ne&&ne.d(M),M&&S(Me)}}}function pt(l){let e,n,t,s,a,o,r=l[0].changeWarning+"",c;return{c(){e=m("hr"),n=v(),t=m("p"),s=m("b"),s.textContent="Warning",a=k(":"),o=m("br"),c=k(r)},m(u,f){w(u,e,f),w(u,n,f),w(u,t,f),i(t,s),i(t,a),i(t,o),i(t,c)},p(u,f){f&1&&r!==(r=u[0].changeWarning+"")&&L(c,r)},d(u){u&&S(e),u&&S(n),u&&S(t)}}}function Un(l){let e,n,t,s,a,o,r,c=l[0]&&ft(l);return{c(){e=m("div"),n=v(),t=m("div"),s=m("button"),s.textContent="close",a=v(),c&&c.c(),b(e,"class","shade"),q(e,"hidden",!l[1]),b(s,"class","material-icons"),b(t,"class","dialog"),q(t,"hidden",!l[1])},m(u,f){w(u,e,f),w(u,n,f),w(u,t,f),i(t,s),i(t,a),c&&c.m(t,null),o||(r=[E(e,"click",l[2]),E(s,"click",l[2])],o=!0)},p(u,[f]){f&2&&q(e,"hidden",!u[1]),u[0]?c?c.p(u,f):(c=ft(u),c.c(),c.m(t,null)):c&&(c.d(1),c=null),f&2&&q(t,"hidden",!u[1])},i:P,o:P,d(u){u&&S(e),u&&S(n),u&&S(t),c&&c.d(),o=!1,Ue(r)}}}function Yn(l,e,n){Q.extend(ze),Q.extend(Fe),Q.extend(Oe);let t,s;Mt.subscribe(o=>n(0,t=o)),He.subscribe(o=>n(1,s=o));function a(){He.set(!1)}return[t,s,a]}class An extends O{constructor(e){super();R(this,e,Yn,Un,K,{})}}function dt(l,e,n){const t=l.slice();return t[9]=e[n],t}function mt(l,e,n){const t=l.slice();return t[12]=e[n],t}function ht(l){let e,n=(l[12].prefix||"")+"",t,s,a=l[12].lastName+"",o,r,c,u=l[12].code.toUpperCase()+"",f,$,p,d;function _(){return l[7](l[12])}return{c(){e=m("button"),t=k(n),s=v(),o=k(a),r=v(),c=m("span"),f=k(u),$=v(),b(c,"class","right svelte-9oq5yo"),b(e,"class","svelte-9oq5yo")},m(h,N){w(h,e,N),i(e,t),i(e,s),i(e,o),i(e,r),i(e,c),i(c,f),i(e,$),p||(d=E(e,"click",_),p=!0)},p(h,N){l=h,N&2&&n!==(n=(l[12].prefix||"")+"")&&L(t,n),N&2&&a!==(a=l[12].lastName+"")&&L(o,a),N&2&&u!==(u=l[12].code.toUpperCase()+"")&&L(f,u)},d(h){h&&S(e),p=!1,d()}}}function gt(l){let e,n=l[9].firstName+"",t,s,a=(l[9].prefix||"")+"",o,r,c=l[9].lastName+"",u,f,$,p=(l[9].code||"...")+"",d,_,h,N;function T(){return l[8](l[9])}return{c(){e=m("button"),t=k(n),s=v(),o=k(a),r=v(),u=k(c),f=v(),$=m("span"),d=k(p),_=v(),b($,"class","right svelte-9oq5yo"),b(e,"class","svelte-9oq5yo")},m(y,W){w(y,e,W),i(e,t),i(e,s),i(e,o),i(e,r),i(e,u),i(e,f),i(e,$),i($,d),i(e,_),h||(N=E(e,"click",T),h=!0)},p(y,W){l=y,W&1&&n!==(n=l[9].firstName+"")&&L(t,n),W&1&&a!==(a=(l[9].prefix||"")+"")&&L(o,a),W&1&&c!==(c=l[9].lastName+"")&&L(u,c),W&1&&p!==(p=(l[9].code||"...")+"")&&L(d,p)},d(y){y&&S(e),h=!1,N()}}}function Bn(l){let e,n,t,s,a=l[2]?"less":"more",o,r,c,u,f,$=l[1].length+"",p,d,_,h,N,T,y,W,F=l[3]?"less":"more",Z,G,j,J,ae,V=l[0].length+"",se,re,he,X,fe,ce,A=l[1],U=[];for(let g=0;g<A.length;g+=1)U[g]=ht(mt(l,A,g));let I=l[0],z=[];for(let g=0;g<I.length;g+=1)z[g]=gt(dt(l,I,g));return{c(){e=m("div"),n=m("h3"),t=m("button"),s=k("expand_"),o=k(a),r=v(),c=m("span"),c.textContent="Teachers",u=v(),f=m("span"),p=k($),d=k("\xA0\xA0"),_=v(),h=m("div");for(let g=0;g<U.length;g+=1)U[g].c();N=v(),T=m("h3"),y=m("button"),W=k("expand_"),Z=k(F),G=v(),j=m("span"),j.textContent="Students",J=v(),ae=m("span"),se=k(V),re=k("\xA0\xA0"),he=v(),X=m("div");for(let g=0;g<z.length;g+=1)z[g].c();b(t,"class","material-icons svelte-9oq5yo"),b(c,"class","svelte-9oq5yo"),b(f,"class","right svelte-9oq5yo"),b(n,"class","sect svelte-9oq5yo"),b(h,"class","svelte-9oq5yo"),q(h,"hidden",!l[2]),b(y,"class","material-icons svelte-9oq5yo"),b(j,"class","svelte-9oq5yo"),b(ae,"class","right svelte-9oq5yo"),b(T,"class","sect svelte-9oq5yo"),b(X,"class","svelte-9oq5yo"),q(X,"hidden",!l[3]),b(e,"class","sidebar svelte-9oq5yo"),q(e,"hidden",!l[4])},m(g,D){w(g,e,D),i(e,n),i(n,t),i(t,s),i(t,o),i(n,r),i(n,c),i(n,u),i(n,f),i(f,p),i(f,d),i(e,_),i(e,h);for(let C=0;C<U.length;C+=1)U[C].m(h,null);i(e,N),i(e,T),i(T,y),i(y,W),i(y,Z),i(T,G),i(T,j),i(T,J),i(T,ae),i(ae,se),i(ae,re),i(e,he),i(e,X);for(let C=0;C<z.length;C+=1)z[C].m(X,null);fe||(ce=[E(t,"click",l[5]),E(y,"click",l[6])],fe=!0)},p(g,[D]){if(D&4&&a!==(a=g[2]?"less":"more")&&L(o,a),D&2&&$!==($=g[1].length+"")&&L(p,$),D&2){A=g[1];let C;for(C=0;C<A.length;C+=1){const ie=mt(g,A,C);U[C]?U[C].p(ie,D):(U[C]=ht(ie),U[C].c(),U[C].m(h,null))}for(;C<U.length;C+=1)U[C].d(1);U.length=A.length}if(D&4&&q(h,"hidden",!g[2]),D&8&&F!==(F=g[3]?"less":"more")&&L(Z,F),D&1&&V!==(V=g[0].length+"")&&L(se,V),D&1){I=g[0];let C;for(C=0;C<I.length;C+=1){const ie=dt(g,I,C);z[C]?z[C].p(ie,D):(z[C]=gt(ie),z[C].c(),z[C].m(X,null))}for(;C<z.length;C+=1)z[C].d(1);z.length=I.length}D&8&&q(X,"hidden",!g[3]),D&16&&q(e,"hidden",!g[4])},i:P,o:P,d(g){g&&S(e),de(U,g),de(z,g),fe=!1,Ue(ce)}}}function Wn(l,e,n){let t=[],s=[],a=!1,o=!1,r=!0;oe.subscribe(async p=>{p==!0&&(n(0,t=(await Ae()).response.data),n(1,s=(await Be()).response.data),t.length>0&&n(0,t=ye(t,"firstName")),s.length>0&&n(1,s=ye(s,"lastName")))});function c(){n(2,a=!a)}function u(){n(3,o=!o)}return _e(()=>{ke.set(!1)}),ke.subscribe(p=>n(4,r=p)),[t,s,a,o,r,c,u,p=>{Ne("teacher",p.code)},p=>{Ne("student",p.code)}]}class En extends O{constructor(e){super();R(this,e,Wn,Bn,K,{})}}function _t(l){let e,n,t,s,a,o;return e=new qn({}),t=new Pn({}),a=new En({}),{c(){x(e.$$.fragment),n=v(),x(t.$$.fragment),s=v(),x(a.$$.fragment)},m(r,c){ee(e,r,c),w(r,n,c),ee(t,r,c),w(r,s,c),ee(a,r,c),o=!0},i(r){o||(H(e.$$.fragment,r),H(t.$$.fragment,r),H(a.$$.fragment,r),o=!0)},o(r){Y(e.$$.fragment,r),Y(t.$$.fragment,r),Y(a.$$.fragment,r),o=!1},d(r){te(e,r),r&&S(n),te(t,r),r&&S(s),te(a,r)}}}function bt(l){let e,n,t,s,a;var o=l[1].content;function r(c){return{}}return o&&(n=new o(r())),s=new An({}),{c(){e=m("div"),n&&x(n.$$.fragment),t=v(),x(s.$$.fragment),b(e,"class","content-field")},m(c,u){w(c,e,u),n&&ee(n,e,null),i(e,t),ee(s,e,null),a=!0},p(c,u){if(o!==(o=c[1].content)){if(n){Ce();const f=n;Y(f.$$.fragment,1,0,()=>{te(f,1)}),we()}o?(n=new o(r()),x(n.$$.fragment),H(n.$$.fragment,1),ee(n,e,t)):n=null}},i(c){a||(n&&H(n.$$.fragment,c),H(s.$$.fragment,c),a=!0)},o(c){n&&Y(n.$$.fragment,c),Y(s.$$.fragment,c),a=!1},d(c){c&&S(e),n&&te(n),te(s)}}}function zn(l){let e,n,t,s,a=l[0]&&_t(),o=l[1]&&bt(l);return{c(){e=m("div"),n=m("div"),a&&a.c(),t=v(),o&&o.c(),b(n,"class","content"),b(e,"class","bg")},m(r,c){w(r,e,c),i(e,n),a&&a.m(n,null),i(n,t),o&&o.m(n,null),s=!0},p(r,[c]){r[0]?a?c&1&&H(a,1):(a=_t(),a.c(),H(a,1),a.m(n,t)):a&&(Ce(),Y(a,1,1,()=>{a=null}),we()),r[1]?o?(o.p(r,c),c&2&&H(o,1)):(o=bt(r),o.c(),H(o,1),o.m(n,null)):o&&(Ce(),Y(o,1,1,()=>{o=null}),we())},i(r){s||(H(a),H(o),s=!0)},o(r){Y(a),Y(o),s=!1},d(r){r&&S(e),a&&a.d(),o&&o.d()}}}function Fn(l,e,n){let t=!1,s;return _e(async()=>{n(0,t=await je())}),Le.subscribe(a=>n(1,s=a)),[t,s]}class On extends O{constructor(e){super();R(this,e,Fn,zn,K,{})}}function vt(l){let e,n;return e=new On({}),{c(){x(e.$$.fragment)},m(t,s){ee(e,t,s),n=!0},i(t){n||(H(e.$$.fragment,t),n=!0)},o(t){Y(e.$$.fragment,t),n=!1},d(t){te(e,t)}}}function Rn(l){let e,n,t,s,a=l[0]&&vt();return{c(){e=m("div"),a&&a.c(),b(e,"class","app")},m(o,r){w(o,e,r),a&&a.m(e,null),n=!0,t||(s=E(e,"mousedown",l[1]),t=!0)},p(o,[r]){o[0]?a?r&1&&H(a,1):(a=vt(),a.c(),H(a,1),a.m(e,null)):a&&(Ce(),Y(a,1,1,()=>{a=null}),we())},i(o){n||(H(a),n=!0)},o(o){Y(a),n=!1},d(o){o&&S(e),a&&a.d(),t=!1,s()}}}function Kn(l,e,n){let t,s;Se(l,oe,o=>n(2,t=o)),Se(l,Le,o=>n(0,s=o)),_e(async()=>{if(await je(),!t){me("Login");return}const o=ue.get("m"),r=o=="Login";console.log(o,r),me(r?t?"HomePage":"Login":o||"HomePage")});function a(o){if(!o)return;const r=o.composedPath();let c=!0;for(let u=0;u<r.length;u++){const f=r[u];if(f.classList&&(f.classList.contains("sidebar")||f.classList.contains("toggle-sidebar"))){c=!1;break}}c&&ke.set(!1)}return[s,a]}class Zn extends O{constructor(e){super();R(this,e,Kn,Rn,K,{})}}new Zn({target:document.getElementById("app")});
