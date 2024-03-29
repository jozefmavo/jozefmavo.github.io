import {
  w as be,
  d as Q,
  a as Be,
  b as We,
  c as Ye,
  g as Oe,
  S as B,
  i as W,
  s as Y,
  e as h,
  f as $,
  t as w,
  h as vt,
  j as _,
  k as j,
  l as C,
  m as c,
  n as we,
  o as U,
  p as $t,
  q as L,
  r as S,
  u as Ue,
  v as oe,
  x as J,
  y as D,
  z as re,
  A as te,
  B as R,
  C as q,
  D as y,
  E as I,
  F as Z,
  G as de,
  H as pe,
  I as yt,
  J as Pe,
  K as kt,
  L as wt,
  M as ge,
} from "./vendor.a5d0fc17.js";
const Lt = function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) t(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const a of o.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && t(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerpolicy && (o.referrerPolicy = l.referrerpolicy),
      l.crossorigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossorigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function t(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
};
Lt();
const ee = new URLSearchParams(location.search),
  Ct = "1201",
  Dt =
    "users?archived=false&fields=archived%2Ccode%2Cprefix%2ClastName%2CfirstName&isStudent=true&schoolInSchoolYear=",
  Pt =
    "users?archived=false&fields=archived%2Ccode%2Cprefix%2ClastName%2CisEmployee&isEmployee=true&schoolInSchoolYear=",
  St = new Map([
    [
      "teacherSchedule",
      "id%2CappointmentInstance%2CbranchOfSchool%2Cgroups%2CstartTimeSlot%2CstartTimeSlotName%2Cstart%2CendTimeSlot%2CendTimeSlotName%2Cend%2Csubjects%2Cteachers%2ConlineTeachers%2Clocations%2Ctype%2Cvalid%2Ccancelled%2CteacherChanged%2CgroupChanged%2ClocationChanged%2CtimeChanged%2CchangeDescription%2Ccontent%2Cremark%2CschedulerRemark%2ClocationsOfBranch%2CgroupsInDepartments%2CchoosableInDepartmentCodes%2Coptional%2Coptional",
    ],
    [
      "studentSchedule",
      "start%2Cend%2CstartTimeSlotName%2Ctype%2Cteachers%2Csubjects%2Cgroups%2Clocations%2Cremark%2CschedulerRemark%2CchangeDescription%2Ccancelled%2CteacherChanged%2CtimeChanged%2ClocationChanged%2CchoosableInDepartmentCodes",
    ],
  ]),
  Te = be(),
  Se = be(!0),
  Ae = be(),
  Ie = be(!1),
  Nt = be(),
  Ce = be();
var Mt = "./assets/logo.eb49b618.png";
Q.extend(Be);
Q.extend(We);
Q.extend(Ye);
async function ye(s, e, n, t = !0, l, o) {
  if (Oe(V) || l) {
    const a = o ? "POST" : "GET",
      r = { headers: { Authorization: `Bearer ${s}` }, method: a },
      i = await await fetch(
        `https://${e}.zportal.nl/api/v3/${n}`,
        l ? { method: a } : r
      );
    return t ? i.json() : i.text();
  }
  return t ? {} : "{}";
}
async function It(s, e) {
  return await ye(
    void 0,
    e,
    `oauth/token?grant_type=authorization_code&code=${s}`,
    !0,
    !0,
    !0
  );
}
let fe,
  se,
  V = be(!1);
async function He(s, e) {
  return localStorage.getItem("accessToken")
    ? await Ht()
    : !s || !e
    ? (V.set(!1), ae("Login"), Tt(), !1)
    : await jt(s, e);
}
async function Ht() {
  (fe = localStorage.getItem("accessToken")),
    (se = localStorage.getItem("accessSchool"));
  let s = !1;
  const e = await (
    await fetch(`https://${se}.zportal.nl/api/v3/users/~me`, {
      headers: { Authorization: `Bearer ${fe}` },
    })
  ).json();
  return (
    (s = e.response.status == 200),
    s
      ? (Te.set(e.response.data), V.set(!0), !0)
      : ((fe = null), (se = null), !1)
  );
}
async function jt(s, e) {
  try {
    const t = (await It(e, s)).access_token;
    return t
      ? (localStorage.setItem("accessToken", t),
        localStorage.setItem("accessSchool", s),
        Te.set(
          (
            await (
              await fetch(`https://${s}.zportal.nl/api/v3/users/~me`, {
                headers: { Authorization: `Bearer ${t}` },
              })
            ).json()
          ).response.data
        ),
        (se = s),
        (fe = t),
        V.set(!0),
        !0)
      : !1;
  } catch {
    return !1;
  }
}
function Tt() {
  localStorage.removeItem("accessSchool"),
    localStorage.removeItem("accessToken"),
    V.set(!1),
    ae("Login");
}
function Ut(s) {
  let e, n, t, l, o, a, r, i, u, f, m, d, p, v, g, N;
  return {
    c() {
      (e = h("div")),
        (n = h("div")),
        (t = h("img")),
        (o = $()),
        (a = h("p")),
        (a.textContent =
          "Please provide login information to continue to Zermelo."),
        (r = $()),
        (i = h("input")),
        (u = $()),
        (f = h("input")),
        (m = $()),
        (d = h("button")),
        (p = w("Login")),
        vt(t.src, (l = Mt)) || _(t, "src", l),
        _(t, "alt", "Zermelo"),
        _(t, "class", "logo"),
        _(i, "placeholder", "School"),
        j(i, "error", s[0]),
        _(f, "placeholder", "Pairing Code"),
        _(f, "type", "number"),
        j(f, "error", s[0]),
        (d.disabled = v = !s[1] || !s[2]),
        _(n, "class", "centered"),
        _(e, "class", "login");
    },
    m(M, T) {
      C(M, e, T),
        c(e, n),
        c(n, t),
        c(n, o),
        c(n, a),
        c(n, r),
        c(n, i),
        we(i, s[1]),
        c(n, u),
        c(n, f),
        we(f, s[2]),
        c(n, m),
        c(n, d),
        c(d, p),
        g ||
          ((N = [
            U(i, "input", s[4]),
            U(f, "input", s[5]),
            U(d, "click", s[3]),
          ]),
          (g = !0));
    },
    p(M, [T]) {
      T & 2 && i.value !== M[1] && we(i, M[1]),
        T & 1 && j(i, "error", M[0]),
        T & 4 && $t(f.value) !== M[2] && we(f, M[2]),
        T & 1 && j(f, "error", M[0]),
        T & 6 && v !== (v = !M[1] || !M[2]) && (d.disabled = v);
    },
    i: L,
    o: L,
    d(M) {
      M && S(e), (g = !1), Ue(N);
    },
  };
}
function At(s, e, n) {
  let t, l, o;
  oe(async () => {
    (await He()) && ae("HomePage");
  });
  async function a() {
    const f = await He(l, o.toString().split(" ").join());
    V.set(f), f ? location.reload() : r();
  }
  function r() {
    n(0, (t = !0)),
      setTimeout(() => {
        n(0, (t = !1));
      }, 3e3);
  }
  function i() {
    (l = this.value), n(1, l);
  }
  function u() {
    (o = $t(this.value)), n(2, o);
  }
  return [t, l, o, a, i, u];
}
class Bt extends B {
  constructor(e) {
    super();
    W(this, e, At, Ut, Y, {});
  }
}
function he(s, e) {
  (document.title = `Zermelo Hub | ${s}: ${e}`),
    Ae.set({ type: s, id: e }),
    ae("SchedulePeople");
}
async function Wt(s) {
  const e = (await Le()).response.data;
  for (let n = 0; n < e.length; n++) if (e[n].code == s) return e[n];
  return {};
}
async function Yt(s) {
  const e = (await De()).response.data;
  for (let n = 0; n < e.length; n++) if (e[n].code == s) return e[n];
  return {};
}
async function Le() {
  return await ye(fe, se, `${Dt}${Ct}`);
}
async function De() {
  return await ye(fe, se, `${Pt}${Ct}`);
}
function Ot(s) {
  let e, n, t, l, o, a, r, i, u, f, m;
  return {
    c() {
      (e = h("div")),
        (n = h("div")),
        (t = h("img")),
        (o = $()),
        (a = h("div")),
        (r = h("input")),
        (i = $()),
        (u = h("span")),
        (u.textContent = "search"),
        vt(t.src, (l = Mt)) || _(t, "src", l),
        _(t, "alt", "Zermelo Hub"),
        _(t, "class", "logo"),
        _(r, "placeholder", "Search for people..."),
        _(u, "class", "material-icons-round"),
        _(a, "class", "input-holder"),
        _(n, "class", "ca"),
        _(e, "class", "homepage");
    },
    m(d, p) {
      C(d, e, p),
        c(e, n),
        c(n, t),
        c(n, o),
        c(n, a),
        c(a, r),
        we(r, s[0]),
        c(a, i),
        c(a, u),
        f ||
          ((m = [
            U(r, "input", s[3]),
            U(r, "keydown", s[2]),
            U(u, "click", s[1]),
          ]),
          (f = !0));
    },
    p(d, [p]) {
      p & 1 && r.value !== d[0] && we(r, d[0]);
    },
    i: L,
    o: L,
    d(d) {
      d && S(e), (f = !1), Ue(m);
    },
  };
}
function Et(s, e, n) {
  let t = "";
  async function l() {
    const r = (await De()).response.data,
      i = (await Le()).response.data,
      u = Array.prototype.concat(r, i);
    console.log(u);
    for (let f = 0; f < u.length; f++)
      u[f].code == t && he(u[f].firstName ? "student" : "teacher", u[f].code);
  }
  function o(r) {
    r.key.toLowerCase() == "enter" && l();
  }
  function a() {
    (t = this.value), n(0, t);
  }
  return [t, l, o, a];
}
class zt extends B {
  constructor(e) {
    super();
    W(this, e, Et, Ot, Y, {});
  }
}
function Ft(s) {
  let e, n, t, l, o, a, r, i, u, f;
  return {
    c() {
      (e = h("div")),
        (n = h("h3")),
        (n.innerHTML =
          '<span class="material-icons-round svelte-1ne4om4">warning</span> Module Load Error'),
        (t = $()),
        (l = h("p")),
        (l.innerHTML = `The requested module could not be found in.<br class="svelte-1ne4om4"/>Maybe you used a broken
    link?`),
        (o = $()),
        (a = h("br")),
        (r = $()),
        (i = h("button")),
        (i.textContent = "Go Home"),
        _(n, "class", "svelte-1ne4om4"),
        _(l, "class", "svelte-1ne4om4"),
        _(a, "class", "svelte-1ne4om4"),
        _(i, "class", "svelte-1ne4om4"),
        _(e, "class", "content svelte-1ne4om4");
    },
    m(m, d) {
      C(m, e, d),
        c(e, n),
        c(e, t),
        c(e, l),
        c(e, o),
        c(e, a),
        c(e, r),
        c(e, i),
        u || ((f = U(i, "click", s[0])), (u = !0));
    },
    p: L,
    i: L,
    o: L,
    d(m) {
      m && S(e), (u = !1), f();
    },
  };
}
function Rt(s) {
  function e() {
    ae("HomePage");
  }
  return [e];
}
class qt extends B {
  constructor(e) {
    super();
    W(this, e, Rt, Ft, Y, {});
  }
}
function Zt(s) {
  let e,
    n,
    t,
    l,
    o,
    a,
    r,
    i,
    u = (s[0].classes || "") + "",
    f,
    m,
    d;
  return {
    c() {
      (e = h("div")),
        (n = h("p")),
        (t = w(s[6])),
        (l = $()),
        (o = h("p")),
        (a = w(s[7])),
        (r = $()),
        (i = h("p")),
        (f = w(u)),
        _(i, "class", "classes"),
        _(e, "class", "appointment"),
        J(e, "top", s[4] + "px"),
        J(e, "height", s[5] + "px"),
        J(e, "left", s[3]),
        j(e, "cancelled", s[0].cancelled),
        j(e, "changed", s[1] && !s[0].cancelled),
        j(e, "newTime", s[2]);
    },
    m(p, v) {
      C(p, e, v),
        c(e, n),
        c(n, t),
        c(e, l),
        c(e, o),
        c(o, a),
        c(e, r),
        c(e, i),
        c(i, f),
        m || ((d = U(e, "click", s[8])), (m = !0));
    },
    p(p, [v]) {
      v & 64 && D(t, p[6]),
        v & 128 && D(a, p[7]),
        v & 1 && u !== (u = (p[0].classes || "") + "") && D(f, u),
        v & 16 && J(e, "top", p[4] + "px"),
        v & 32 && J(e, "height", p[5] + "px"),
        v & 8 && J(e, "left", p[3]),
        v & 1 && j(e, "cancelled", p[0].cancelled),
        v & 3 && j(e, "changed", p[1] && !p[0].cancelled),
        v & 4 && j(e, "newTime", p[2]);
    },
    i: L,
    o: L,
    d(p) {
      p && S(e), (m = !1), d();
    },
  };
}
function Gt(s, e, n) {
  let { appointment: t } = e;
  function l() {
    Nt.set(t), Ie.set(!0);
  }
  let o = !1,
    a = !1,
    r,
    i,
    u,
    f,
    m;
  return (
    oe(() => {
      const d = t.subjects[0];
      n(7, (m = d ? t.teachers.join(" ").toUpperCase() : ""));
      const p = t.locations.length ? t.locations[0] : "0_00",
        v = t.startMin,
        g = t.endMin,
        N = t.rowNr;
      n(1, (o = t.teacherChanged || t.locationChanged)),
        n(2, (a = t.timeChanged)),
        n(4, (i = (v - 460) * 2)),
        n(3, (r = `calc(42px + (100% - 40px) / 5 * ${N - 1})`)),
        n(5, (u = (g - v) * 2 - 2)),
        n(6, (f = `${d || m} - ${p}`));
    }),
    (s.$$set = (d) => {
      "appointment" in d && n(0, (t = d.appointment));
    }),
    [t, o, a, r, i, u, f, m, l]
  );
}
class Kt extends B {
  constructor(e) {
    super();
    W(this, e, Gt, Zt, Y, { appointment: 0 });
  }
}
function Ee(s, e, n) {
  const t = s.slice();
  return (t[1] = e[n]), t;
}
function ze(s) {
  let e,
    n = s[1].d + "",
    t,
    l;
  return {
    c() {
      (e = h("div")),
        (t = w(n)),
        (l = $()),
        _(e, "class", "appointment leftrow"),
        J(e, "top", "0px"),
        J(e, "height", "40px"),
        J(e, "left", "calc(42px + ((100% - 40px) / 5 * " + (s[1].i - 1) + "))"),
        J(e, "width", "calc((100% - 44px) / 5)"),
        j(e, "today", new Date().getDay() == s[1].i);
    },
    m(o, a) {
      C(o, e, a), c(e, t), c(e, l);
    },
    p(o, a) {
      a & 1 && j(e, "today", new Date().getDay() == o[1].i);
    },
    d(o) {
      o && S(e);
    },
  };
}
function Jt(s) {
  let e,
    n = s[0],
    t = [];
  for (let l = 0; l < n.length; l += 1) t[l] = ze(Ee(s, n, l));
  return {
    c() {
      for (let l = 0; l < t.length; l += 1) t[l].c();
      e = re();
    },
    m(l, o) {
      for (let a = 0; a < t.length; a += 1) t[a].m(l, o);
      C(l, e, o);
    },
    p(l, [o]) {
      if (o & 1) {
        n = l[0];
        let a;
        for (a = 0; a < n.length; a += 1) {
          const r = Ee(l, n, a);
          t[a]
            ? t[a].p(r, o)
            : ((t[a] = ze(r)), t[a].c(), t[a].m(e.parentNode, e));
        }
        for (; a < t.length; a += 1) t[a].d(1);
        t.length = n.length;
      }
    },
    i: L,
    o: L,
    d(l) {
      te(t, l), l && S(e);
    },
  };
}
function Qt(s) {
  return [
    [
      { i: 1, d: "Mon" },
      { i: 2, d: "Tue" },
      { i: 3, d: "Wed" },
      { i: 4, d: "Thu" },
      { i: 5, d: "Fri" },
    ],
  ];
}
class Vt extends B {
  constructor(e) {
    super();
    W(this, e, Qt, Jt, Y, {});
  }
}
const Fe = [
  { startMin: 480, endMin: 540, start: { h: 8, m: 0 }, end: { h: 9, m: 0 } },
  { startMin: 540, endMin: 600, start: { h: 9, m: 0 }, end: { h: 10, m: 0 } },
  { startMin: 600, endMin: 660, start: { h: 10, m: 0 }, end: { h: 11, m: 0 } },
  { startMin: 660, endMin: 720, start: { h: 11, m: 0 }, end: { h: 12, m: 0 } },
  { startMin: 720, endMin: 780, start: { h: 12, m: 0 }, end: { h: 13, m: 0 } },
  { startMin: 780, endMin: 840, start: { h: 13, m: 0 }, end: { h: 14, m: 0 } },
  { startMin: 840, endMin: 900, start: { h: 14, m: 0 }, end: { h: 15, m: 0 } },
  { startMin: 900, endMin: 960, start: { h: 15, m: 0 }, end: { h: 16, m: 0 } },
  { startMin: 960, endMin: 1020, start: { h: 16, m: 0 }, end: { h: 17, m: 0 } },
  {
    startMin: 1020,
    endMin: 1080,
    start: { h: 17, m: 0 },
    end: { h: 18, m: 0 },
  },
];
function Re(s, e, n) {
  const t = s.slice();
  return (t[0] = e[n]), t;
}
function qe(s) {
  let e,
    n = s[0].start.h.toString().padStart(2, "0") + "",
    t,
    l;
  return {
    c() {
      (e = h("div")),
        (t = w(n)),
        (l = $()),
        _(e, "class", "appointment timenote"),
        J(e, "top", (s[0].startMin - 460) * 2 + "px"),
        J(e, "height", (s[0].endMin - s[0].startMin) * 2 - 2 + "px"),
        J(e, "width", "40px"),
        J(e, "left", "0px");
    },
    m(o, a) {
      C(o, e, a), c(e, t), c(e, l);
    },
    p: L,
    d(o) {
      o && S(e);
    },
  };
}
function Xt(s) {
  let e,
    n = Fe,
    t = [];
  for (let l = 0; l < n.length; l += 1) t[l] = qe(Re(s, n, l));
  return {
    c() {
      for (let l = 0; l < t.length; l += 1) t[l].c();
      e = re();
    },
    m(l, o) {
      for (let a = 0; a < t.length; a += 1) t[a].m(l, o);
      C(l, e, o);
    },
    p(l, [o]) {
      if (o & 0) {
        n = Fe;
        let a;
        for (a = 0; a < n.length; a += 1) {
          const r = Re(l, n, a);
          t[a]
            ? t[a].p(r, o)
            : ((t[a] = qe(r)), t[a].c(), t[a].m(e.parentNode, e));
        }
        for (; a < t.length; a += 1) t[a].d(1);
        t.length = n.length;
      }
    },
    i: L,
    o: L,
    d(l) {
      te(t, l), l && S(e);
    },
  };
}
class xt extends B {
  constructor(e) {
    super();
    W(this, e, null, Xt, Y, {});
  }
}
function Ze(s) {
  let e, n, t;
  return (
    (n = new yt({ props: { value: s[1], items: s[0] } })),
    n.$on("select", s[2]),
    {
      c() {
        (e = h("div")), R(n.$$.fragment), _(e, "class", "select-holder");
      },
      m(l, o) {
        C(l, e, o), q(n, e, null), (t = !0);
      },
      p(l, o) {
        const a = {};
        o & 1 && (a.items = l[0]), n.$set(a);
      },
      i(l) {
        t || (y(n.$$.fragment, l), (t = !0));
      },
      o(l) {
        I(n.$$.fragment, l), (t = !1);
      },
      d(l) {
        l && S(e), Z(n);
      },
    }
  );
}
function en(s) {
  let e,
    n,
    t = s[0] && Ze(s);
  return {
    c() {
      t && t.c(), (e = re());
    },
    m(l, o) {
      t && t.m(l, o), C(l, e, o), (n = !0);
    },
    p(l, [o]) {
      l[0]
        ? t
          ? (t.p(l, o), o & 1 && y(t, 1))
          : ((t = Ze(l)), t.c(), y(t, 1), t.m(e.parentNode, e))
        : t &&
          (de(),
          I(t, 1, 1, () => {
            t = null;
          }),
          pe());
    },
    i(l) {
      n || (y(t), (n = !0));
    },
    o(l) {
      I(t), (n = !1);
    },
    d(l) {
      t && t.d(l), l && S(e);
    },
  };
}
function tn(s, e, n) {
  let t,
    l = [];
  oe(a);
  function o(r) {
    const i = r.detail.value,
      u = i.code;
    (status = "Schedule for " + r.label),
      he(i.isEmployee ? "teacher" : "student", u);
  }
  async function a() {
    const r = Array.prototype.concat(
      (await De()).response.data,
      (await Le()).response.data
    );
    n(0, (l = []));
    for (let i = 0; i < r.length; i++) {
      const [u, f, m, d] = [
        r[i].firstName || "",
        r[i].prefix || "",
        r[i].lastName || "",
        r[i].code || "",
      ];
      l.push({
        label:
          `${u} ${f} ${m}` + (r[i].isEmployee ? ` (${d.toUpperCase()})` : ""),
        value: r[i],
      });
    }
  }
  return Ce.subscribe(a), [l, t, o];
}
class nn extends B {
  constructor(e) {
    super();
    W(this, e, tn, en, Y, {});
  }
}
async function ln(s, e = 0) {
  const n = Ne(_e.prev) + 601200 * e,
    t = Ne(_e.next) + 601200 * e,
    l = St.get("teacherSchedule");
  return await ye(
    fe,
    se,
    `appointments?start=${n}&end=${t}&teachers=${s}&fields=${l}`,
    !0
  );
}
async function sn(s, e = 0) {
  const n = Ne(_e.prev) + 601200 * e,
    t = Ne(_e.next) + 601200 * e,
    l = St.get("studentSchedule");
  return await ye(
    fe,
    se,
    `appointments?start=${n}&end=${t}&user=${s}&fields=${l}`,
    !0
  );
}
function Ne(s) {
  return Q()
    .weekday(s == _e.prev ? -7 : 0)
    .unix();
}
var _e = ((s) => ((s[(s.prev = 0)] = "prev"), (s[(s.next = 1)] = "next"), s))(
  _e || {}
);
function an(s) {
  let e = [];
  for (let n = 0; n < s.length; n++) {
    const t = s[n],
      l = new Date(t.start * 1e3).getDay() - new Date(Ne(_e.prev)).getDay() + 2;
    e.push({
      rowNr: l,
      startMin:
        new Date(t.start * 1e3).getHours() * 60 +
        new Date(t.start * 1e3).getMinutes(),
      endMin:
        new Date(t.end * 1e3).getHours() * 60 +
        new Date(t.end * 1e3).getMinutes(),
      slotName: t.startTimeSlotName,
      locations: t.locations,
      teachers: t.teachers,
      subjects: t.subjects,
      cancelled: t.cancelled,
      changeWarning: t.changeDescription,
      teacherChanged: t.teacherChanged,
      locationChanged: t.locationChanged,
      timeChanged: t.timeChanged,
      start: {
        h: new Date(t.start * 1e3).getHours(),
        m: new Date(t.start * 1e3).getMinutes(),
      },
      end: {
        h: new Date(t.end * 1e3).getHours(),
        m: new Date(t.end * 1e3).getMinutes(),
      },
      classes: t.groups,
      startTimeStamp: t.start,
      endTimeStamp: t.end,
    });
  }
  return e;
}
function Me(s, e) {
  return s.sort(function (n, t) {
    var l = n[e],
      o = t[e];
    return l < o ? -1 : l > o ? 1 : 0;
  });
}
function Ge(s, e, n) {
  const t = s.slice();
  return (t[11] = e[n]), t;
}
function on(s) {
  let e;
  return {
    c() {
      e = w("Loading...");
    },
    m(n, t) {
      C(n, e, t);
    },
    p: L,
    d(n) {
      n && S(e);
    },
  };
}
function rn(s) {
  let e;
  function n(o, a) {
    return o[1].id ? un : cn;
  }
  let t = n(s),
    l = t(s);
  return {
    c() {
      l.c(), (e = re());
    },
    m(o, a) {
      l.m(o, a), C(o, e, a);
    },
    p(o, a) {
      t === (t = n(o)) && l
        ? l.p(o, a)
        : (l.d(1), (l = t(o)), l && (l.c(), l.m(e.parentNode, e)));
    },
    d(o) {
      l.d(o), o && S(e);
    },
  };
}
function cn(s) {
  let e;
  return {
    c() {
      e = w("No schedule selected.");
    },
    m(n, t) {
      C(n, e, t);
    },
    p: L,
    d(n) {
      n && S(e);
    },
  };
}
function un(s) {
  let e = (s[4] || "Loading...") + "",
    n;
  return {
    c() {
      n = w(e);
    },
    m(t, l) {
      C(t, n, l);
    },
    p(t, l) {
      l & 16 && e !== (e = (t[4] || "Loading...") + "") && D(n, e);
    },
    d(t) {
      t && S(n);
    },
  };
}
function Ke(s) {
  let e, n;
  return (
    (e = new Kt({ props: { appointment: s[11] } })),
    {
      c() {
        R(e.$$.fragment);
      },
      m(t, l) {
        q(e, t, l), (n = !0);
      },
      p(t, l) {
        const o = {};
        l & 1 && (o.appointment = t[11]), e.$set(o);
      },
      i(t) {
        n || (y(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        I(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        Z(e, t);
      },
    }
  );
}
function fn(s) {
  let e,
    n,
    t,
    l,
    o,
    a,
    r = parseInt(Pe().format("W")) + s[3] + "",
    i,
    u,
    f,
    m,
    d,
    p,
    v,
    g,
    N,
    M,
    T,
    E,
    z,
    O,
    X,
    K,
    le,
    ie,
    x,
    ve,
    ce,
    $e,
    ne;
  N = new nn({});
  function ke(b, P) {
    return b[2] ? on : rn;
  }
  let me = ke(s),
    F = me(s);
  (le = new Vt({})), (x = new xt({}));
  let A = s[0],
    H = [];
  for (let b = 0; b < A.length; b += 1) H[b] = Ke(Ge(s, A, b));
  const G = (b) =>
    I(H[b], 1, 1, () => {
      H[b] = null;
    });
  return {
    c() {
      (e = h("div")),
        (n = h("h3")),
        (t = h("button")),
        (t.textContent = "arrow_back_ios_new"),
        (l = $()),
        (o = h("span")),
        (a = w("Week ")),
        (i = w(r)),
        (u = $()),
        (f = h("button")),
        (f.textContent = "arrow_forward_ios"),
        (m = $()),
        (d = h("button")),
        (d.textContent = "date_range"),
        (p = $()),
        (v = h("div")),
        (g = $()),
        R(N.$$.fragment),
        (M = $()),
        (T = h("div")),
        (E = $()),
        (z = h("h3")),
        F.c(),
        (O = $()),
        (X = h("div")),
        (K = h("div")),
        R(le.$$.fragment),
        (ie = $()),
        R(x.$$.fragment),
        (ve = $());
      for (let b = 0; b < H.length; b += 1) H[b].c();
      _(t, "class", "material-icons-round"),
        _(o, "class", "week"),
        _(f, "class", "material-icons-round"),
        _(d, "class", "material-icons-round"),
        _(v, "class", "sep"),
        _(T, "class", "sep"),
        _(e, "class", "header"),
        _(K, "class", "grid"),
        _(X, "class", "content");
    },
    m(b, P) {
      C(b, e, P),
        c(e, n),
        c(n, t),
        c(n, l),
        c(n, o),
        c(o, a),
        c(o, i),
        c(n, u),
        c(n, f),
        c(n, m),
        c(n, d),
        c(n, p),
        c(n, v),
        c(n, g),
        q(N, n, null),
        c(n, M),
        c(n, T),
        c(e, E),
        c(e, z),
        F.m(z, null),
        C(b, O, P),
        C(b, X, P),
        c(X, K),
        q(le, K, null),
        c(K, ie),
        q(x, K, null),
        c(K, ve);
      for (let k = 0; k < H.length; k += 1) H[k].m(K, null);
      (ce = !0),
        $e ||
          ((ne = [
            U(t, "click", s[5]),
            U(f, "click", s[6]),
            U(d, "click", s[7]),
          ]),
          ($e = !0));
    },
    p(b, [P]) {
      if (
        ((!ce || P & 8) &&
          r !== (r = parseInt(Pe().format("W")) + b[3] + "") &&
          D(i, r),
        me === (me = ke(b)) && F
          ? F.p(b, P)
          : (F.d(1), (F = me(b)), F && (F.c(), F.m(z, null))),
        P & 1)
      ) {
        A = b[0];
        let k;
        for (k = 0; k < A.length; k += 1) {
          const ue = Ge(b, A, k);
          H[k]
            ? (H[k].p(ue, P), y(H[k], 1))
            : ((H[k] = Ke(ue)), H[k].c(), y(H[k], 1), H[k].m(K, null));
        }
        for (de(), k = A.length; k < H.length; k += 1) G(k);
        pe();
      }
    },
    i(b) {
      if (!ce) {
        y(N.$$.fragment, b), y(le.$$.fragment, b), y(x.$$.fragment, b);
        for (let P = 0; P < A.length; P += 1) y(H[P]);
        ce = !0;
      }
    },
    o(b) {
      I(N.$$.fragment, b),
        I(le.$$.fragment, b),
        I(x.$$.fragment, b),
        (H = H.filter(Boolean));
      for (let P = 0; P < H.length; P += 1) I(H[P]);
      ce = !1;
    },
    d(b) {
      b && S(e),
        Z(N),
        F.d(),
        b && S(O),
        b && S(X),
        Z(le),
        Z(x),
        te(H, b),
        ($e = !1),
        Ue(ne);
    },
  };
}
function dn(s, e, n) {
  Q.extend(Be), Q.extend(We), Q.extend(Ye);
  let t = [],
    l = [],
    o = { id: "" },
    a = !1,
    r = 0,
    i;
  Ae.subscribe(async (p) => {
    if (p) {
      n(2, (a = !0)), n(1, (o = p)), u(p.type, p.id);
      const v = p.type == "teacher",
        g = await Yt(p.id),
        N = await Wt(p.id);
      let M = N.firstName || "",
        T = N.prefix || g.prefix || "",
        E = N.lastName || g.lastName,
        z = (N.code || g.code).toUpperCase();
      n(4, (i = (v ? "" : `${M} `) + `${T} ${E} (${z})`)),
        (document.title = `Zermelo Hub | ${i}`),
        n(2, (a = !1));
    } else he("student", Oe(Te)[0].code);
  }),
    oe(() => {
      const p = new URLSearchParams(location.search),
        v = p.get("person_id"),
        g = p.get("person_type");
      n(2, (a = !1)), v && g && (Ae.set({ type: g, id: v }), u(g, v, !0));
    });
  async function u(p, v, g = !0) {
    let N;
    n(0, (l = [])),
      p == "student" ? (N = await sn(v, r + 1)) : (N = await ln(v, r + 1)),
      g && kt(`./?m=${ee.get("m")}&person_id=${v}&person_type=${p}`),
      ee.set("person_id", v),
      ee.set("person_type", p),
      (t = Me(N.response.data, "start")),
      n(0, (l = an(t))),
      n(2, (a = !1));
  }
  function f() {
    r + parseInt(Pe().format("W")) > 1 && (n(3, (r -= 1)), u(o.type, o.id));
  }
  function m() {
    r + parseInt(Pe().format("W")) < 52 && (n(3, (r += 1)), u(o.type, o.id));
  }
  function d() {
    r != 0 && (n(3, (r = 0)), u(o.type, o.id));
  }
  return (
    setInterval(() => {
      60 * parseInt(Q().format("HH")) + parseInt(Q().format("m"));
    }, 300),
    [l, o, a, r, i, f, m, d, u]
  );
}
class pn extends B {
  constructor(e) {
    super();
    W(this, e, dn, fn, Y, { openSched: 8 });
  }
  get openSched() {
    return this.$$.ctx[8];
  }
}
function hn(s) {
  let e, n, t;
  return (
    (n = new pn({})),
    {
      c() {
        (e = h("div")), R(n.$$.fragment), _(e, "class", "svelte-17gvxtz");
      },
      m(l, o) {
        C(l, e, o), q(n, e, null), (t = !0);
      },
      p: L,
      i(l) {
        t || (y(n.$$.fragment, l), (t = !0));
      },
      o(l) {
        I(n.$$.fragment, l), (t = !1);
      },
      d(l) {
        l && S(e), Z(n);
      },
    }
  );
}
class mn extends B {
  constructor(e) {
    super();
    W(this, e, null, hn, Y, {});
  }
}
function Je(s, e, n) {
  const t = s.slice();
  return (t[4] = e[n]), t;
}
function Qe(s) {
  let e,
    n = s[4].firstName + "",
    t,
    l,
    o = (s[4].prefix || "") + "",
    a,
    r,
    i = s[4].lastName + "",
    u,
    f,
    m,
    d = s[4].code.toUpperCase() + "",
    p,
    v,
    g,
    N;
  return {
    c() {
      (e = h("button")),
        (t = w(n)),
        (l = $()),
        (a = w(o)),
        (r = $()),
        (u = w(i)),
        (f = $()),
        (m = h("span")),
        (p = w(d)),
        (v = $()),
        _(m, "class", "right");
    },
    m(M, T) {
      C(M, e, T),
        c(e, t),
        c(e, l),
        c(e, a),
        c(e, r),
        c(e, u),
        c(e, f),
        c(e, m),
        c(m, p),
        c(e, v),
        g ||
          ((N = U(e, "click", function () {
            wt(s[1](s[4].code)) && s[1](s[4].code).apply(this, arguments);
          })),
          (g = !0));
    },
    p(M, T) {
      (s = M),
        T & 1 && n !== (n = s[4].firstName + "") && D(t, n),
        T & 1 && o !== (o = (s[4].prefix || "") + "") && D(a, o),
        T & 1 && i !== (i = s[4].lastName + "") && D(u, i),
        T & 1 && d !== (d = s[4].code.toUpperCase() + "") && D(p, d);
    },
    d(M) {
      M && S(e), (g = !1), N();
    },
  };
}
function gn(s) {
  let e,
    n,
    t,
    l,
    o,
    a,
    r = s[0].length + "",
    i,
    u,
    f,
    m = s[0],
    d = [];
  for (let p = 0; p < m.length; p += 1) d[p] = Qe(Je(s, m, p));
  return {
    c() {
      (e = h("div")),
        (n = h("h3")),
        (t = h("span")),
        (t.textContent = "Students"),
        (l = $()),
        (o = h("span")),
        (a = w("(")),
        (i = w(r)),
        (u = w(")")),
        (f = $());
      for (let p = 0; p < d.length; p += 1) d[p].c();
      _(e, "class", "studentlist");
    },
    m(p, v) {
      C(p, e, v),
        c(e, n),
        c(n, t),
        c(n, l),
        c(n, o),
        c(o, a),
        c(o, i),
        c(o, u),
        c(e, f);
      for (let g = 0; g < d.length; g += 1) d[g].m(e, null);
    },
    p(p, [v]) {
      if ((v & 1 && r !== (r = p[0].length + "") && D(i, r), v & 3)) {
        m = p[0];
        let g;
        for (g = 0; g < m.length; g += 1) {
          const N = Je(p, m, g);
          d[g] ? d[g].p(N, v) : ((d[g] = Qe(N)), d[g].c(), d[g].m(e, null));
        }
        for (; g < d.length; g += 1) d[g].d(1);
        d.length = m.length;
      }
    },
    i: L,
    o: L,
    d(p) {
      p && S(e), te(d, p);
    },
  };
}
function _n(s, e, n) {
  let t;
  ge(s, V, (r) => n(2, (t = r)));
  let l = [];
  V.subscribe((r) => {
    r && a();
  });
  function o(r) {
    return function () {
      he("student", r);
    };
  }
  oe(async () => {
    t && a();
  });
  async function a() {
    n(0, (l = (await Le()).response.data)),
      l.length > 0 && n(0, (l = Me(l, "firstName")));
  }
  return [l, o];
}
class bn extends B {
  constructor(e) {
    super();
    W(this, e, _n, gn, Y, {});
  }
}
function Ve(s, e, n) {
  const t = s.slice();
  return (t[4] = e[n]), t;
}
function Xe(s) {
  let e,
    n = (s[4].prefix || "") + "",
    t,
    l,
    o = s[4].lastName + "",
    a,
    r,
    i,
    u = s[4].code.toUpperCase() + "",
    f,
    m,
    d,
    p;
  return {
    c() {
      (e = h("button")),
        (t = w(n)),
        (l = $()),
        (a = w(o)),
        (r = $()),
        (i = h("span")),
        (f = w(u)),
        (m = $()),
        _(i, "class", "right");
    },
    m(v, g) {
      C(v, e, g),
        c(e, t),
        c(e, l),
        c(e, a),
        c(e, r),
        c(e, i),
        c(i, f),
        c(e, m),
        d ||
          ((p = U(e, "click", function () {
            wt(s[1](s[4].code)) && s[1](s[4].code).apply(this, arguments);
          })),
          (d = !0));
    },
    p(v, g) {
      (s = v),
        g & 1 && n !== (n = (s[4].prefix || "") + "") && D(t, n),
        g & 1 && o !== (o = s[4].lastName + "") && D(a, o),
        g & 1 && u !== (u = s[4].code.toUpperCase() + "") && D(f, u);
    },
    d(v) {
      v && S(e), (d = !1), p();
    },
  };
}
function vn(s) {
  let e,
    n,
    t,
    l,
    o,
    a,
    r = s[0].length + "",
    i,
    u,
    f,
    m = s[0],
    d = [];
  for (let p = 0; p < m.length; p += 1) d[p] = Xe(Ve(s, m, p));
  return {
    c() {
      (e = h("div")),
        (n = h("h3")),
        (t = h("span")),
        (t.textContent = "Teachers"),
        (l = $()),
        (o = h("span")),
        (a = w("(")),
        (i = w(r)),
        (u = w(")")),
        (f = $());
      for (let p = 0; p < d.length; p += 1) d[p].c();
      _(e, "class", "studentlist");
    },
    m(p, v) {
      C(p, e, v),
        c(e, n),
        c(n, t),
        c(n, l),
        c(n, o),
        c(o, a),
        c(o, i),
        c(o, u),
        c(e, f);
      for (let g = 0; g < d.length; g += 1) d[g].m(e, null);
    },
    p(p, [v]) {
      if ((v & 1 && r !== (r = p[0].length + "") && D(i, r), v & 3)) {
        m = p[0];
        let g;
        for (g = 0; g < m.length; g += 1) {
          const N = Ve(p, m, g);
          d[g] ? d[g].p(N, v) : ((d[g] = Xe(N)), d[g].c(), d[g].m(e, null));
        }
        for (; g < d.length; g += 1) d[g].d(1);
        d.length = m.length;
      }
    },
    i: L,
    o: L,
    d(p) {
      p && S(e), te(d, p);
    },
  };
}
function $n(s, e, n) {
  let t;
  ge(s, V, (r) => n(2, (t = r)));
  let l = [];
  V.subscribe((r) => {
    r && a();
  });
  function o(r) {
    return function () {
      he("teacher", r);
    };
  }
  oe(() => {
    t && a();
  });
  async function a() {
    n(0, (l = (await De()).response.data)),
      l.length > 0 && n(0, (l = Me(l, "lastName")));
  }
  return [l, o];
}
class kn extends B {
  constructor(e) {
    super();
    W(this, e, $n, vn, Y, {});
  }
}
function ae(s) {
  console.log(`OpenMod: Opening ${s}`);
  const e = je.has(s);
  Ce.set(je.get(e ? s : "PageNotFound")), ee.set("m", e ? s : "PageNotFound");
  const n = ee.get("person_id") ? `&person_id=${ee.get("person_id")}` : "",
    t = ee.get("person_type") ? `&person_type=${ee.get("person_type")}` : "";
  ee.set("person_id", ""),
    ee.set("class_id", ""),
    kt(
      `./?m=${e ? s : "PageNotFound"}${s == "SchedulePeople" ? `${n}${t}` : ""}`
    ),
    Ie.set(!1);
}
const je = new Map([
    ["HomePage", { name: "Home", icon: "home", content: zt, sidebar: !1 }],
    [
      "SchedulePeople",
      { name: "People", icon: "people", content: mn, sidebar: !0 },
    ],
    [
      "ListStudents",
      { name: "Students", icon: "school", content: bn, sidebar: !0 },
    ],
    [
      "ListTeachers",
      {
        name: "Teachers",
        icon: "supervisor_account",
        content: kn,
        sidebar: !0,
      },
    ],
    ["Login", { name: "Login", icon: "", content: Bt, sidebar: !1 }],
    [
      "PageNotFound",
      { name: "Page Not Found", icon: "", content: qt, sidebar: !1 },
    ],
  ]),
  xe = [
    { icon: "logout", action: Tt, caption: "Logout" },
    {
      icon: "calendar_today",
      action: () => {
        he("student", Oe(Te)[0].code);
      },
      caption: "Show own calendar",
    },
  ];
function et(s, e, n) {
  const t = s.slice();
  return (t[0] = e[n]), t;
}
function tt(s) {
  let e,
    n = s[0].icon + "",
    t,
    l,
    o,
    a,
    r;
  return {
    c() {
      (e = h("button")),
        (t = w(n)),
        (l = $()),
        _(e, "class", "material-icons-round"),
        _(e, "title", (o = s[0].caption));
    },
    m(i, u) {
      C(i, e, u),
        c(e, t),
        c(e, l),
        a || ((r = U(e, "click", s[0].action)), (a = !0));
    },
    p(i, u) {
      s = i;
    },
    d(i) {
      i && S(e), (a = !1), r();
    },
  };
}
function wn(s) {
  let e,
    n = xe,
    t = [];
  for (let l = 0; l < n.length; l += 1) t[l] = tt(et(s, n, l));
  return {
    c() {
      for (let l = 0; l < t.length; l += 1) t[l].c();
      e = re();
    },
    m(l, o) {
      for (let a = 0; a < t.length; a += 1) t[a].m(l, o);
      C(l, e, o);
    },
    p(l, [o]) {
      if (o & 0) {
        n = xe;
        let a;
        for (a = 0; a < n.length; a += 1) {
          const r = et(l, n, a);
          t[a]
            ? t[a].p(r, o)
            : ((t[a] = tt(r)), t[a].c(), t[a].m(e.parentNode, e));
        }
        for (; a < t.length; a += 1) t[a].d(1);
        t.length = n.length;
      }
    },
    i: L,
    o: L,
    d(l) {
      te(t, l), l && S(e);
    },
  };
}
class Cn extends B {
  constructor(e) {
    super();
    W(this, e, null, wn, Y, {});
  }
}
function nt(s, e, n) {
  const t = s.slice();
  return (t[2] = e[n]), (t[3] = e), (t[4] = n), t;
}
function lt(s) {
  let e,
    n = s[2].icon + "",
    t,
    l,
    o,
    a;
  function r() {
    return s[1](s[2], s[3], s[4]);
  }
  return {
    c() {
      (e = h("button")),
        (t = w(n)),
        _(
          e,
          "class",
          (l =
            "material-icons-round " +
            (s[2].className || "") +
            " svelte-1cpskhx")
        ),
        j(e, "active", s[2].value);
    },
    m(i, u) {
      C(i, e, u), c(e, t), o || ((a = U(e, "click", r)), (o = !0));
    },
    p(i, u) {
      (s = i),
        u & 1 && n !== (n = s[2].icon + "") && D(t, n),
        u & 1 &&
          l !==
            (l =
              "material-icons-round " +
              (s[2].className || "") +
              " svelte-1cpskhx") &&
          _(e, "class", l),
        u & 1 && j(e, "active", s[2].value);
    },
    d(i) {
      i && S(e), (o = !1), a();
    },
  };
}
function Sn(s) {
  let e,
    n = s[0],
    t = [];
  for (let l = 0; l < n.length; l += 1) t[l] = lt(nt(s, n, l));
  return {
    c() {
      for (let l = 0; l < t.length; l += 1) t[l].c();
      e = re();
    },
    m(l, o) {
      for (let a = 0; a < t.length; a += 1) t[a].m(l, o);
      C(l, e, o);
    },
    p(l, [o]) {
      if (o & 1) {
        n = l[0];
        let a;
        for (a = 0; a < n.length; a += 1) {
          const r = nt(l, n, a);
          t[a]
            ? t[a].p(r, o)
            : ((t[a] = lt(r)), t[a].c(), t[a].m(e.parentNode, e));
        }
        for (; a < t.length; a += 1) t[a].d(1);
        t.length = n.length;
      }
    },
    i: L,
    o: L,
    d(l) {
      te(t, l), l && S(e);
    },
  };
}
function Nn(s, e, n) {
  const t = [];
  return (
    Se.subscribe((o) => {
      t.length && n(0, (t[0].value = o), t);
    }),
    Se.set(!0),
    [
      t,
      (o, a, r) => {
        n(0, (a[r].value = !o.value), t), o.event(o.value);
      },
    ]
  );
}
class Mn extends B {
  constructor(e) {
    super();
    W(this, e, Nn, Sn, Y, {});
  }
}
function Tn(s) {
  let e,
    n,
    t,
    l,
    o,
    a,
    r,
    i,
    u,
    f,
    m,
    d,
    p,
    v,
    g,
    N,
    M,
    T = s[0].firstName + "",
    E,
    z;
  return (
    (i = new Mn({})),
    (f = new Cn({})),
    {
      c() {
        (e = h("div")),
          (n = h("div")),
          (t = h("b")),
          (t.innerHTML = `Zermelo
      <div class="sep"></div>`),
          (l = $()),
          (o = h("span")),
          (o.textContent = `${se}`),
          (a = $()),
          (r = h("div")),
          R(i.$$.fragment),
          (u = $()),
          R(f.$$.fragment),
          (m = $()),
          (d = h("div")),
          (p = $()),
          (v = h("div")),
          (g = h("span")),
          (g.textContent = "person"),
          (N = $()),
          (M = h("p")),
          (E = w(T)),
          _(t, "class", "name"),
          _(o, "class", "schoolname"),
          _(n, "class", "header"),
          _(d, "class", "sep"),
          _(g, "class", "material-icons-round"),
          _(v, "class", "userprofile"),
          _(r, "class", "right"),
          _(e, "class", "tb");
      },
      m(O, X) {
        C(O, e, X),
          c(e, n),
          c(n, t),
          c(n, l),
          c(n, o),
          c(e, a),
          c(e, r),
          q(i, r, null),
          c(r, u),
          q(f, r, null),
          c(r, m),
          c(r, d),
          c(r, p),
          c(r, v),
          c(v, g),
          c(v, N),
          c(v, M),
          c(M, E),
          (z = !0);
      },
      p(O, [X]) {
        (!z || X & 1) && T !== (T = O[0].firstName + "") && D(E, T);
      },
      i(O) {
        z || (y(i.$$.fragment, O), y(f.$$.fragment, O), (z = !0));
      },
      o(O) {
        I(i.$$.fragment, O), I(f.$$.fragment, O), (z = !1);
      },
      d(O) {
        O && S(e), Z(i), Z(f);
      },
    }
  );
}
function yn(s, e, n) {
  let t;
  return (
    Te.subscribe((l) => {
      n(0, (t = l[0]));
    }),
    [t]
  );
}
class Ln extends B {
  constructor(e) {
    super();
    W(this, e, yn, Tn, Y, {});
  }
}
function Dn(s) {
  let e, n, t;
  return {
    c() {
      (e = h("button")),
        (e.innerHTML = `<span class="material-icons-round">home</span> 
  <p>Home</p>`),
        _(e, "class", "home svelte-izntp5"),
        j(e, "selected", s[0].name == "Home");
    },
    m(l, o) {
      C(l, e, o), n || ((t = U(e, "click", s[1])), (n = !0));
    },
    p(l, [o]) {
      o & 1 && j(e, "selected", l[0].name == "Home");
    },
    i: L,
    o: L,
    d(l) {
      l && S(e), (n = !1), t();
    },
  };
}
function Pn(s, e, n) {
  let t;
  ge(s, Ce, (o) => n(0, (t = o)));
  function l() {
    ae("HomePage");
  }
  return [t, l];
}
class In extends B {
  constructor(e) {
    super();
    W(this, e, Pn, Dn, Y, {});
  }
}
function st(s) {
  let e,
    n,
    t = s[0].icon + "",
    l,
    o,
    a,
    r = s[0].name + "",
    i,
    u,
    f;
  return {
    c() {
      (e = h("button")),
        (n = h("span")),
        (l = w(t)),
        (o = $()),
        (a = h("p")),
        (i = w(r)),
        _(n, "class", "material-icons-round"),
        j(e, "selected", s[1] && s[1].name == s[0].name);
    },
    m(m, d) {
      C(m, e, d),
        c(e, n),
        c(n, l),
        c(e, o),
        c(e, a),
        c(a, i),
        u || ((f = U(e, "click", s[2])), (u = !0));
    },
    p(m, d) {
      d & 1 && t !== (t = m[0].icon + "") && D(l, t),
        d & 1 && r !== (r = m[0].name + "") && D(i, r),
        d & 3 && j(e, "selected", m[1] && m[1].name == m[0].name);
    },
    d(m) {
      m && S(e), (u = !1), f();
    },
  };
}
function Hn(s) {
  let e,
    n = s[0].sidebar && s[0] && st(s);
  return {
    c() {
      n && n.c(), (e = re());
    },
    m(t, l) {
      n && n.m(t, l), C(t, e, l);
    },
    p(t, [l]) {
      t[0].sidebar && t[0]
        ? n
          ? n.p(t, l)
          : ((n = st(t)), n.c(), n.m(e.parentNode, e))
        : n && (n.d(1), (n = null));
    },
    i: L,
    o: L,
    d(t) {
      n && n.d(t), t && S(e);
    },
  };
}
function jn(s, e, n) {
  let t;
  ge(s, Ce, (r) => n(1, (t = r)));
  let { key: l } = e,
    { value: o } = e;
  function a() {
    ae(l);
  }
  return (
    (s.$$set = (r) => {
      "key" in r && n(3, (l = r.key)), "value" in r && n(0, (o = r.value));
    }),
    [o, t, a, l]
  );
}
class Un extends B {
  constructor(e) {
    super();
    W(this, e, jn, Hn, Y, { key: 3, value: 0 });
  }
}
function at(s, e, n) {
  const t = s.slice();
  return (t[1] = e[n][0]), (t[2] = e[n][1]), t;
}
function ot(s) {
  let e, n, t, l;
  n = new In({});
  let o = [...je],
    a = [];
  for (let i = 0; i < o.length; i += 1) a[i] = rt(at(s, o, i));
  const r = (i) =>
    I(a[i], 1, 1, () => {
      a[i] = null;
    });
  return {
    c() {
      (e = h("div")), R(n.$$.fragment), (t = $());
      for (let i = 0; i < a.length; i += 1) a[i].c();
      _(e, "class", "sidebar");
    },
    m(i, u) {
      C(i, e, u), q(n, e, null), c(e, t);
      for (let f = 0; f < a.length; f += 1) a[f].m(e, null);
      l = !0;
    },
    p(i, u) {
      if (u & 0) {
        o = [...je];
        let f;
        for (f = 0; f < o.length; f += 1) {
          const m = at(i, o, f);
          a[f]
            ? (a[f].p(m, u), y(a[f], 1))
            : ((a[f] = rt(m)), a[f].c(), y(a[f], 1), a[f].m(e, null));
        }
        for (de(), f = o.length; f < a.length; f += 1) r(f);
        pe();
      }
    },
    i(i) {
      if (!l) {
        y(n.$$.fragment, i);
        for (let u = 0; u < o.length; u += 1) y(a[u]);
        l = !0;
      }
    },
    o(i) {
      I(n.$$.fragment, i), (a = a.filter(Boolean));
      for (let u = 0; u < a.length; u += 1) I(a[u]);
      l = !1;
    },
    d(i) {
      i && S(e), Z(n), te(a, i);
    },
  };
}
function rt(s) {
  let e, n;
  return (
    (e = new Un({ props: { key: s[1], value: s[2] } })),
    {
      c() {
        R(e.$$.fragment);
      },
      m(t, l) {
        q(e, t, l), (n = !0);
      },
      p: L,
      i(t) {
        n || (y(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        I(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        Z(e, t);
      },
    }
  );
}
function An(s) {
  let e,
    n,
    t = s[0] && ot(s);
  return {
    c() {
      t && t.c(), (e = re());
    },
    m(l, o) {
      t && t.m(l, o), C(l, e, o), (n = !0);
    },
    p(l, [o]) {
      l[0]
        ? t
          ? (t.p(l, o), o & 1 && y(t, 1))
          : ((t = ot(l)), t.c(), y(t, 1), t.m(e.parentNode, e))
        : t &&
          (de(),
          I(t, 1, 1, () => {
            t = null;
          }),
          pe());
    },
    i(l) {
      n || (y(t), (n = !0));
    },
    o(l) {
      I(t), (n = !1);
    },
    d(l) {
      t && t.d(l), l && S(e);
    },
  };
}
function Bn(s, e, n) {
  let t;
  return ge(s, V, (l) => n(0, (t = l))), [t];
}
class Wn extends B {
  constructor(e) {
    super();
    W(this, e, Bn, An, Y, {});
  }
}
function it(s, e, n) {
  const t = s.slice();
  return (t[5] = e[n]), t;
}
function ct(s) {
  let e,
    n,
    t = Object.entries(s[3]),
    l = [];
  for (let a = 0; a < t.length; a += 1) l[a] = ut(it(s, t, a));
  let o = s[0].changeWarning && ft(s);
  return {
    c() {
      for (let a = 0; a < l.length; a += 1) l[a].c();
      (e = $()), o && o.c(), (n = re());
    },
    m(a, r) {
      for (let i = 0; i < l.length; i += 1) l[i].m(a, r);
      C(a, e, r), o && o.m(a, r), C(a, n, r);
    },
    p(a, r) {
      if (r & 8) {
        t = Object.entries(a[3]);
        let i;
        for (i = 0; i < t.length; i += 1) {
          const u = it(a, t, i);
          l[i]
            ? l[i].p(u, r)
            : ((l[i] = ut(u)), l[i].c(), l[i].m(e.parentNode, e));
        }
        for (; i < l.length; i += 1) l[i].d(1);
        l.length = t.length;
      }
      a[0].changeWarning
        ? o
          ? o.p(a, r)
          : ((o = ft(a)), o.c(), o.m(n.parentNode, n))
        : o && (o.d(1), (o = null));
    },
    d(a) {
      te(l, a), a && S(e), o && o.d(a), a && S(n);
    },
  };
}
function ut(s) {
  let e,
    n,
    t = s[5][0] + "",
    l,
    o,
    a,
    r = s[5][1] + "",
    i;
  return {
    c() {
      (e = h("div")),
        (n = h("div")),
        (l = w(t)),
        (o = $()),
        (a = h("div")),
        (i = w(r)),
        _(n, "class", "key"),
        _(a, "class", "value"),
        _(e, "class", "row");
    },
    m(u, f) {
      C(u, e, f), c(e, n), c(n, l), c(e, o), c(e, a), c(a, i);
    },
    p(u, f) {
      f & 8 && t !== (t = u[5][0] + "") && D(l, t),
        f & 8 && r !== (r = u[5][1] + "") && D(i, r);
    },
    d(u) {
      u && S(e);
    },
  };
}
function ft(s) {
  let e,
    n,
    t,
    l,
    o,
    a,
    r = s[0].changeWarning + "",
    i;
  return {
    c() {
      (e = h("hr")),
        (n = $()),
        (t = h("p")),
        (l = h("b")),
        (l.textContent = "Warning"),
        (o = w(":")),
        (a = h("br")),
        (i = w(r));
    },
    m(u, f) {
      C(u, e, f), C(u, n, f), C(u, t, f), c(t, l), c(t, o), c(t, a), c(t, i);
    },
    p(u, f) {
      f & 1 && r !== (r = u[0].changeWarning + "") && D(i, r);
    },
    d(u) {
      u && S(e), u && S(n), u && S(t);
    },
  };
}
function Yn(s) {
  let e,
    n,
    t,
    l,
    o,
    a,
    r,
    i,
    u,
    f,
    m = s[0] && s[3] && ct(s);
  return {
    c() {
      (e = h("div")),
        (n = h("div")),
        (t = h("button")),
        (t.textContent = "close"),
        (l = $()),
        (o = h("h3")),
        (a = w("Details for ")),
        (r = w(s[2])),
        (i = $()),
        m && m.c(),
        _(t, "class", "material-icons-round"),
        _(o, "class", "header"),
        _(n, "class", "dialog"),
        j(n, "hidden", !s[1]),
        _(e, "class", "shade"),
        j(e, "hidden", !s[1]);
    },
    m(d, p) {
      C(d, e, p),
        c(e, n),
        c(n, t),
        c(n, l),
        c(n, o),
        c(o, a),
        c(o, r),
        c(n, i),
        m && m.m(n, null),
        u || ((f = U(t, "click", s[4])), (u = !0));
    },
    p(d, [p]) {
      p & 4 && D(r, d[2]),
        d[0] && d[3]
          ? m
            ? m.p(d, p)
            : ((m = ct(d)), m.c(), m.m(n, null))
          : m && (m.d(1), (m = null)),
        p & 2 && j(n, "hidden", !d[1]),
        p & 2 && j(e, "hidden", !d[1]);
    },
    i: L,
    o: L,
    d(d) {
      d && S(e), m && m.d(), (u = !1), f();
    },
  };
}
function On(s, e, n) {
  Q.extend(Be), Q.extend(We), Q.extend(Ye);
  let t,
    l,
    o = "",
    a = {};
  Nt.subscribe((i) => n(0, (t = i))),
    Ie.subscribe((i) => {
      n(1, (l = i)),
        t &&
          (n(2, (o = t.subjects.toString().toUpperCase() || "appointment")),
          n(
            3,
            (a = {
              Location: t.locations.length ? t.locations : "None",
              Teacher: t.teachers.join(" ").toUpperCase(),
              Start: Q(t.startTimeStamp * 1e3).format("DD/MM/YYYY, hh:mm A"),
              End: Q(t.endTimeStamp * 1e3).format("DD/MM/YYYY, hh:mm A"),
              "Group(s)": t.classes.length ? t.classes : "Unknown",
            })
          ));
    });
  function r() {
    Ie.set(!1);
  }
  return [t, l, o, a, r];
}
class En extends B {
  constructor(e) {
    super();
    W(this, e, On, Yn, Y, {});
  }
}
function dt(s, e, n) {
  const t = s.slice();
  return (t[9] = e[n]), t;
}
function pt(s, e, n) {
  const t = s.slice();
  return (t[12] = e[n]), t;
}
function ht(s) {
  let e,
    n = (s[12].prefix || "") + "",
    t,
    l,
    o = s[12].lastName + "",
    a,
    r,
    i,
    u = s[12].code.toUpperCase() + "",
    f,
    m,
    d,
    p;
  function v() {
    return s[7](s[12]);
  }
  return {
    c() {
      (e = h("button")),
        (t = w(n)),
        (l = $()),
        (a = w(o)),
        (r = $()),
        (i = h("span")),
        (f = w(u)),
        (m = $()),
        _(i, "class", "right svelte-b7kak6"),
        _(e, "class", "svelte-b7kak6");
    },
    m(g, N) {
      C(g, e, N),
        c(e, t),
        c(e, l),
        c(e, a),
        c(e, r),
        c(e, i),
        c(i, f),
        c(e, m),
        d || ((p = U(e, "click", v)), (d = !0));
    },
    p(g, N) {
      (s = g),
        N & 2 && n !== (n = (s[12].prefix || "") + "") && D(t, n),
        N & 2 && o !== (o = s[12].lastName + "") && D(a, o),
        N & 2 && u !== (u = s[12].code.toUpperCase() + "") && D(f, u);
    },
    d(g) {
      g && S(e), (d = !1), p();
    },
  };
}
function mt(s) {
  let e,
    n = s[9].firstName + "",
    t,
    l,
    o = (s[9].prefix || "") + "",
    a,
    r,
    i = s[9].lastName + "",
    u,
    f,
    m,
    d = (s[9].code || "...") + "",
    p,
    v,
    g,
    N;
  function M() {
    return s[8](s[9]);
  }
  return {
    c() {
      (e = h("button")),
        (t = w(n)),
        (l = $()),
        (a = w(o)),
        (r = $()),
        (u = w(i)),
        (f = $()),
        (m = h("span")),
        (p = w(d)),
        (v = $()),
        _(m, "class", "right svelte-b7kak6"),
        _(e, "class", "svelte-b7kak6");
    },
    m(T, E) {
      C(T, e, E),
        c(e, t),
        c(e, l),
        c(e, a),
        c(e, r),
        c(e, u),
        c(e, f),
        c(e, m),
        c(m, p),
        c(e, v),
        g || ((N = U(e, "click", M)), (g = !0));
    },
    p(T, E) {
      (s = T),
        E & 1 && n !== (n = s[9].firstName + "") && D(t, n),
        E & 1 && o !== (o = (s[9].prefix || "") + "") && D(a, o),
        E & 1 && i !== (i = s[9].lastName + "") && D(u, i),
        E & 1 && d !== (d = (s[9].code || "...") + "") && D(p, d);
    },
    d(T) {
      T && S(e), (g = !1), N();
    },
  };
}
function zn(s) {
  let e,
    n,
    t,
    l,
    o = s[2] ? "less" : "more",
    a,
    r,
    i,
    u,
    f,
    m = s[1].length + "",
    d,
    p,
    v,
    g,
    N,
    M,
    T,
    E,
    z = s[3] ? "less" : "more",
    O,
    X,
    K,
    le,
    ie,
    x = s[0].length + "",
    ve,
    ce,
    $e,
    ne,
    ke,
    me,
    F = s[1],
    A = [];
  for (let b = 0; b < F.length; b += 1) A[b] = ht(pt(s, F, b));
  let H = s[0],
    G = [];
  for (let b = 0; b < H.length; b += 1) G[b] = mt(dt(s, H, b));
  return {
    c() {
      (e = h("div")),
        (n = h("h3")),
        (t = h("button")),
        (l = w("expand_")),
        (a = w(o)),
        (r = $()),
        (i = h("span")),
        (i.textContent = "Teachers"),
        (u = $()),
        (f = h("span")),
        (d = w(m)),
        (p = w("\xA0\xA0")),
        (v = $()),
        (g = h("div"));
      for (let b = 0; b < A.length; b += 1) A[b].c();
      (N = $()),
        (M = h("h3")),
        (T = h("button")),
        (E = w("expand_")),
        (O = w(z)),
        (X = $()),
        (K = h("span")),
        (K.textContent = "Students"),
        (le = $()),
        (ie = h("span")),
        (ve = w(x)),
        (ce = w("\xA0\xA0")),
        ($e = $()),
        (ne = h("div"));
      for (let b = 0; b < G.length; b += 1) G[b].c();
      _(t, "class", "material-icons-round svelte-b7kak6"),
        _(i, "class", "svelte-b7kak6"),
        _(f, "class", "right svelte-b7kak6"),
        _(n, "class", "sect svelte-b7kak6"),
        _(g, "class", "svelte-b7kak6"),
        j(g, "hidden", !s[2]),
        _(T, "class", "material-icons-round svelte-b7kak6"),
        _(K, "class", "svelte-b7kak6"),
        _(ie, "class", "right svelte-b7kak6"),
        _(M, "class", "sect svelte-b7kak6"),
        _(ne, "class", "svelte-b7kak6"),
        j(ne, "hidden", !s[3]),
        _(e, "class", "rightbar svelte-b7kak6"),
        j(e, "hidden", !s[4]);
    },
    m(b, P) {
      C(b, e, P),
        c(e, n),
        c(n, t),
        c(t, l),
        c(t, a),
        c(n, r),
        c(n, i),
        c(n, u),
        c(n, f),
        c(f, d),
        c(f, p),
        c(e, v),
        c(e, g);
      for (let k = 0; k < A.length; k += 1) A[k].m(g, null);
      c(e, N),
        c(e, M),
        c(M, T),
        c(T, E),
        c(T, O),
        c(M, X),
        c(M, K),
        c(M, le),
        c(M, ie),
        c(ie, ve),
        c(ie, ce),
        c(e, $e),
        c(e, ne);
      for (let k = 0; k < G.length; k += 1) G[k].m(ne, null);
      ke || ((me = [U(t, "click", s[5]), U(T, "click", s[6])]), (ke = !0));
    },
    p(b, [P]) {
      if (
        (P & 4 && o !== (o = b[2] ? "less" : "more") && D(a, o),
        P & 2 && m !== (m = b[1].length + "") && D(d, m),
        P & 2)
      ) {
        F = b[1];
        let k;
        for (k = 0; k < F.length; k += 1) {
          const ue = pt(b, F, k);
          A[k] ? A[k].p(ue, P) : ((A[k] = ht(ue)), A[k].c(), A[k].m(g, null));
        }
        for (; k < A.length; k += 1) A[k].d(1);
        A.length = F.length;
      }
      if (
        (P & 4 && j(g, "hidden", !b[2]),
        P & 8 && z !== (z = b[3] ? "less" : "more") && D(O, z),
        P & 1 && x !== (x = b[0].length + "") && D(ve, x),
        P & 1)
      ) {
        H = b[0];
        let k;
        for (k = 0; k < H.length; k += 1) {
          const ue = dt(b, H, k);
          G[k] ? G[k].p(ue, P) : ((G[k] = mt(ue)), G[k].c(), G[k].m(ne, null));
        }
        for (; k < G.length; k += 1) G[k].d(1);
        G.length = H.length;
      }
      P & 8 && j(ne, "hidden", !b[3]), P & 16 && j(e, "hidden", !b[4]);
    },
    i: L,
    o: L,
    d(b) {
      b && S(e), te(A, b), te(G, b), (ke = !1), Ue(me);
    },
  };
}
function Fn(s, e, n) {
  let t = [],
    l = [],
    o = !1,
    a = !1,
    r = !0;
  V.subscribe(async (d) => {
    d == !0 &&
      (n(0, (t = (await Le()).response.data)),
      n(1, (l = (await De()).response.data)),
      t.length > 0 && n(0, (t = Me(t, "firstName"))),
      l.length > 0 && n(1, (l = Me(l, "lastName"))));
  });
  function i() {
    n(2, (o = !o));
  }
  function u() {
    n(3, (a = !a));
  }
  return (
    oe(() => {
      Se.set(!1);
    }),
    Se.subscribe((d) => n(4, (r = d))),
    [
      t,
      l,
      o,
      a,
      r,
      i,
      u,
      (d) => {
        he("teacher", d.code);
      },
      (d) => {
        he("student", d.code);
      },
    ]
  );
}
class Rn extends B {
  constructor(e) {
    super();
    W(this, e, Fn, zn, Y, {});
  }
}
function gt(s) {
  let e, n, t, l, o, a;
  return (
    (e = new Wn({})),
    (t = new Ln({})),
    (o = new Rn({})),
    {
      c() {
        R(e.$$.fragment),
          (n = $()),
          R(t.$$.fragment),
          (l = $()),
          R(o.$$.fragment);
      },
      m(r, i) {
        q(e, r, i), C(r, n, i), q(t, r, i), C(r, l, i), q(o, r, i), (a = !0);
      },
      i(r) {
        a ||
          (y(e.$$.fragment, r),
          y(t.$$.fragment, r),
          y(o.$$.fragment, r),
          (a = !0));
      },
      o(r) {
        I(e.$$.fragment, r), I(t.$$.fragment, r), I(o.$$.fragment, r), (a = !1);
      },
      d(r) {
        Z(e, r), r && S(n), Z(t, r), r && S(l), Z(o, r);
      },
    }
  );
}
function _t(s) {
  let e, n, t, l, o;
  var a = s[1].content;
  function r(i) {
    return {};
  }
  return (
    a && (n = new a(r())),
    (l = new En({})),
    {
      c() {
        (e = h("div")),
          n && R(n.$$.fragment),
          (t = $()),
          R(l.$$.fragment),
          _(e, "class", "content-field");
      },
      m(i, u) {
        C(i, e, u), n && q(n, e, null), c(e, t), q(l, e, null), (o = !0);
      },
      p(i, u) {
        if (a !== (a = i[1].content)) {
          if (n) {
            de();
            const f = n;
            I(f.$$.fragment, 1, 0, () => {
              Z(f, 1);
            }),
              pe();
          }
          a
            ? ((n = new a(r())),
              R(n.$$.fragment),
              y(n.$$.fragment, 1),
              q(n, e, t))
            : (n = null);
        }
      },
      i(i) {
        o || (n && y(n.$$.fragment, i), y(l.$$.fragment, i), (o = !0));
      },
      o(i) {
        n && I(n.$$.fragment, i), I(l.$$.fragment, i), (o = !1);
      },
      d(i) {
        i && S(e), n && Z(n), Z(l);
      },
    }
  );
}
function qn(s) {
  let e,
    n,
    t,
    l,
    o = s[0] && gt(),
    a = s[1] && _t(s);
  return {
    c() {
      (e = h("div")),
        (n = h("div")),
        o && o.c(),
        (t = $()),
        a && a.c(),
        _(n, "class", "content"),
        _(e, "class", "bg");
    },
    m(r, i) {
      C(r, e, i),
        c(e, n),
        o && o.m(n, null),
        c(n, t),
        a && a.m(n, null),
        (l = !0);
    },
    p(r, [i]) {
      r[0]
        ? o
          ? i & 1 && y(o, 1)
          : ((o = gt()), o.c(), y(o, 1), o.m(n, t))
        : o &&
          (de(),
          I(o, 1, 1, () => {
            o = null;
          }),
          pe()),
        r[1]
          ? a
            ? (a.p(r, i), i & 2 && y(a, 1))
            : ((a = _t(r)), a.c(), y(a, 1), a.m(n, null))
          : a &&
            (de(),
            I(a, 1, 1, () => {
              a = null;
            }),
            pe());
    },
    i(r) {
      l || (y(o), y(a), (l = !0));
    },
    o(r) {
      I(o), I(a), (l = !1);
    },
    d(r) {
      r && S(e), o && o.d(), a && a.d();
    },
  };
}
function Zn(s, e, n) {
  let t = !1,
    l;
  return (
    oe(async () => {
      n(0, (t = await He()));
    }),
    Ce.subscribe((o) => n(1, (l = o))),
    [t, l]
  );
}
class Gn extends B {
  constructor(e) {
    super();
    W(this, e, Zn, qn, Y, {});
  }
}
function bt(s) {
  let e, n;
  return (
    (e = new Gn({})),
    {
      c() {
        R(e.$$.fragment);
      },
      m(t, l) {
        q(e, t, l), (n = !0);
      },
      i(t) {
        n || (y(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        I(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        Z(e, t);
      },
    }
  );
}
function Kn(s) {
  let e,
    n,
    t,
    l,
    o = s[0] && bt();
  return {
    c() {
      (e = h("div")), o && o.c(), _(e, "class", "app");
    },
    m(a, r) {
      C(a, e, r),
        o && o.m(e, null),
        (n = !0),
        t || ((l = U(e, "mousedown", s[1])), (t = !0));
    },
    p(a, [r]) {
      a[0]
        ? o
          ? r & 1 && y(o, 1)
          : ((o = bt()), o.c(), y(o, 1), o.m(e, null))
        : o &&
          (de(),
          I(o, 1, 1, () => {
            o = null;
          }),
          pe());
    },
    i(a) {
      n || (y(o), (n = !0));
    },
    o(a) {
      I(o), (n = !1);
    },
    d(a) {
      a && S(e), o && o.d(), (t = !1), l();
    },
  };
}
function Jn(s, e, n) {
  let t, l;
  ge(s, V, (a) => n(2, (t = a))),
    ge(s, Ce, (a) => n(0, (l = a))),
    oe(async () => {
      if ((await He(), !t)) {
        ae("Login");
        return;
      }
      const a = ee.get("m"),
        r = a == "Login";
      ae(r ? (t ? "HomePage" : "Login") : a || "HomePage");
    });
  function o(a) {
    if (!a) return;
    const r = a.composedPath();
    let i = !0;
    for (let u = 0; u < r.length; u++) {
      const f = r[u];
      if (
        f.classList &&
        (f.classList.contains("sidebar") ||
          f.classList.contains("toggle-sidebar"))
      ) {
        i = !1;
        break;
      }
    }
    i && Se.set(!1);
  }
  return [l, o];
}
class Qn extends B {
  constructor(e) {
    super();
    W(this, e, Jn, Kn, Y, {});
  }
}
new Qn({ target: document.getElementById("app") });
