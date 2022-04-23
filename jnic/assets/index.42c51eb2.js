const Te = function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) l(r);
  new MutationObserver((r) => {
    for (const a of r)
      if (a.type === "childList")
        for (const i of a.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && l(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(r) {
    const a = {};
    return (
      r.integrity && (a.integrity = r.integrity),
      r.referrerpolicy && (a.referrerPolicy = r.referrerpolicy),
      r.crossorigin === "use-credentials"
        ? (a.credentials = "include")
        : r.crossorigin === "anonymous"
        ? (a.credentials = "omit")
        : (a.credentials = "same-origin"),
      a
    );
  }
  function l(r) {
    if (r.ep) return;
    r.ep = !0;
    const a = n(r);
    fetch(r.href, a);
  }
};
Te();
function $() {}
function Le(e) {
  return e();
}
function ze() {
  return Object.create(null);
}
function V(e) {
  e.forEach(Le);
}
function Be(e) {
  return typeof e == "function";
}
function ge(e, t) {
  return e != e
    ? t == t
    : e !== t || (e && typeof e == "object") || typeof e == "function";
}
let le;
function Fe(e, t) {
  return le || (le = document.createElement("a")), (le.href = t), e === le.href;
}
function He(e) {
  return Object.keys(e).length === 0;
}
function Ke(e, ...t) {
  if (e == null) return $;
  const n = e.subscribe(...t);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function Re(e, t, n) {
  e.$$.on_destroy.push(Ke(t, n));
}
function s(e, t) {
  e.appendChild(t);
}
function H(e, t, n) {
  e.insertBefore(t, n || null);
}
function J(e) {
  e.parentNode.removeChild(e);
}
function We(e, t) {
  for (let n = 0; n < e.length; n += 1) e[n] && e[n].d(t);
}
function d(e) {
  return document.createElement(e);
}
function m(e) {
  return document.createTextNode(e);
}
function y() {
  return m(" ");
}
function Ze() {
  return m("");
}
function Ne(e, t, n, l) {
  return e.addEventListener(t, n, l), () => e.removeEventListener(t, n, l);
}
function f(e, t, n) {
  n == null
    ? e.removeAttribute(t)
    : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function Ge(e) {
  return Array.from(e.childNodes);
}
function W(e, t) {
  (t = "" + t), e.wholeText !== t && (e.data = t);
}
let Q;
function G(e) {
  Q = e;
}
function Qe() {
  if (!Q) throw new Error("Function called outside component initialization");
  return Q;
}
function Ue(e) {
  Qe().$$.on_mount.push(e);
}
const Z = [],
  xe = [],
  se = [],
  Ee = [],
  Ve = Promise.resolve();
let me = !1;
function Xe() {
  me || ((me = !0), Ve.then(Ae));
}
function pe(e) {
  se.push(e);
}
const de = new Set();
let re = 0;
function Ae() {
  const e = Q;
  do {
    for (; re < Z.length; ) {
      const t = Z[re];
      re++, G(t), Ye(t.$$);
    }
    for (G(null), Z.length = 0, re = 0; xe.length; ) xe.pop()();
    for (let t = 0; t < se.length; t += 1) {
      const n = se[t];
      de.has(n) || (de.add(n), n());
    }
    se.length = 0;
  } while (Z.length);
  for (; Ee.length; ) Ee.pop()();
  (me = !1), de.clear(), G(e);
}
function Ye(e) {
  if (e.fragment !== null) {
    e.update(), V(e.before_update);
    const t = e.dirty;
    (e.dirty = [-1]),
      e.fragment && e.fragment.p(e.ctx, t),
      e.after_update.forEach(pe);
  }
}
const ie = new Set();
let S;
function Ie() {
  S = { r: 0, c: [], p: S };
}
function Se() {
  S.r || V(S.c), (S = S.p);
}
function q(e, t) {
  e && e.i && (ie.delete(e), e.i(t));
}
function U(e, t, n, l) {
  if (e && e.o) {
    if (ie.has(e)) return;
    ie.add(e),
      S.c.push(() => {
        ie.delete(e), l && (n && e.d(1), l());
      }),
      e.o(t);
  }
}
function et(e) {
  e && e.c();
}
function Je(e, t, n, l) {
  const { fragment: r, on_mount: a, on_destroy: i, after_update: u } = e.$$;
  r && r.m(t, n),
    l ||
      pe(() => {
        const o = a.map(Le).filter(Be);
        i ? i.push(...o) : V(o), (e.$$.on_mount = []);
      }),
    u.forEach(pe);
}
function qe(e, t) {
  const n = e.$$;
  n.fragment !== null &&
    (V(n.on_destroy),
    n.fragment && n.fragment.d(t),
    (n.on_destroy = n.fragment = null),
    (n.ctx = []));
}
function tt(e, t) {
  e.$$.dirty[0] === -1 && (Z.push(e), Xe(), e.$$.dirty.fill(0)),
    (e.$$.dirty[(t / 31) | 0] |= 1 << t % 31);
}
function De(e, t, n, l, r, a, i, u = [-1]) {
  const o = Q;
  G(e);
  const c = (e.$$ = {
    fragment: null,
    ctx: null,
    props: a,
    update: $,
    not_equal: r,
    bound: ze(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (o ? o.$$.context : [])),
    callbacks: ze(),
    dirty: u,
    skip_bound: !1,
    root: t.target || o.$$.root,
  });
  i && i(c.root);
  let j = !1;
  if (
    ((c.ctx = n
      ? n(e, t.props || {}, (p, z, ...O) => {
          const _ = O.length ? O[0] : z;
          return (
            c.ctx &&
              r(c.ctx[p], (c.ctx[p] = _)) &&
              (!c.skip_bound && c.bound[p] && c.bound[p](_), j && tt(e, p)),
            z
          );
        })
      : []),
    c.update(),
    (j = !0),
    V(c.before_update),
    (c.fragment = l ? l(c.ctx) : !1),
    t.target)
  ) {
    if (t.hydrate) {
      const p = Ge(t.target);
      c.fragment && c.fragment.l(p), p.forEach(J);
    } else c.fragment && c.fragment.c();
    t.intro && q(e.$$.fragment),
      Je(e, t.target, t.anchor, t.customElement),
      Ae();
  }
  G(o);
}
class Me {
  $destroy() {
    qe(this, 1), (this.$destroy = $);
  }
  $on(t, n) {
    const l = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return (
      l.push(n),
      () => {
        const r = l.indexOf(n);
        r !== -1 && l.splice(r, 1);
      }
    );
  }
  $set(t) {
    this.$$set &&
      !He(t) &&
      ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
  }
}
const F = [];
function nt(e, t = $) {
  let n;
  const l = new Set();
  function r(u) {
    if (ge(e, u) && ((e = u), n)) {
      const o = !F.length;
      for (const c of l) c[1](), F.push(c, e);
      if (o) {
        for (let c = 0; c < F.length; c += 2) F[c][0](F[c + 1]);
        F.length = 0;
      }
    }
  }
  function a(u) {
    r(u(e));
  }
  function i(u, o = $) {
    const c = [u, o];
    return (
      l.add(c),
      l.size === 1 && (n = t(r) || $),
      u(e),
      () => {
        l.delete(c), l.size === 0 && (n(), (n = null));
      }
    );
  }
  return { set: r, update: a, subscribe: i };
}
const Pe = nt(),
  oe = {
    name: "Laptop Informatie Centrum",
    short: "JLIC",
    school: "Jozefmavo",
  };
async function lt(e = "./articles.json") {
  let t;
  try {
    t = await (await fetch(e)).json();
  } catch {
    t = [];
  }
  Pe.set(t), console.log(t);
}
function rt(e) {
  let t,
    n,
    l = e[0].subject + "",
    r,
    a,
    i,
    u = e[0].targets + "",
    o,
    c,
    j,
    p = e[0].author.name + "",
    z,
    O,
    _,
    K,
    E = e[0].id + "",
    D,
    M,
    L,
    w,
    P,
    N = e[0].id + "",
    A,
    T,
    B;
  return {
    c() {
      (t = d("div")),
        (n = d("div")),
        (r = m(l)),
        (a = y()),
        (i = d("div")),
        (o = m(u)),
        (c = y()),
        (j = d("div")),
        (z = m(p)),
        (O = y()),
        (_ = d("div")),
        (K = m("#")),
        (D = m(E)),
        (M = y()),
        (L = d("div")),
        (w = d("button")),
        (P = m("Open #")),
        (A = m(N)),
        f(n, "class", "seg subject"),
        f(i, "class", "seg targets"),
        f(j, "class", "seg author"),
        f(_, "class", "seg id"),
        f(w, "class", "svelte-rwjr9f"),
        f(L, "class", "seg open"),
        f(t, "class", "row");
    },
    m(b, k) {
      H(b, t, k),
        s(t, n),
        s(n, r),
        s(t, a),
        s(t, i),
        s(i, o),
        s(t, c),
        s(t, j),
        s(j, z),
        s(t, O),
        s(t, _),
        s(_, K),
        s(_, D),
        s(t, M),
        s(t, L),
        s(L, w),
        s(w, P),
        s(w, A),
        T || ((B = Ne(w, "click", e[1])), (T = !0));
    },
    p(b, [k]) {
      k & 1 && l !== (l = b[0].subject + "") && W(r, l),
        k & 1 && u !== (u = b[0].targets + "") && W(o, u),
        k & 1 && p !== (p = b[0].author.name + "") && W(z, p),
        k & 1 && E !== (E = b[0].id + "") && W(D, E),
        k & 1 && N !== (N = b[0].id + "") && W(A, N);
    },
    i: $,
    o: $,
    d(b) {
      b && J(t), (T = !1), B();
    },
  };
}
function ot(e, t, n) {
  let { data: l } = t;
  function r() {
    window.open(`art/${l.filename}`, "_blank");
  }
  return (
    (e.$$set = (a) => {
      "data" in a && n(0, (l = a.data));
    }),
    [l, r]
  );
}
class st extends Me {
  constructor(t) {
    super(), De(this, t, ot, rt, ge, { data: 0 });
  }
}
var it = "./assets/jozefmavo.95a8a37f.png";
function Ce(e, t, n) {
  const l = e.slice();
  return (l[2] = t[n]), l;
}
function ct(e) {
  let t;
  return {
    c() {
      (t = d("p")),
        (t.textContent = "Even geduld..."),
        f(t, "class", "svelte-nbg8ym");
    },
    m(n, l) {
      H(n, t, l);
    },
    p: $,
    i: $,
    o: $,
    d(n) {
      n && J(t);
    },
  };
}
function ut(e) {
  let t,
    n,
    l = e[0],
    r = [];
  for (let i = 0; i < l.length; i += 1) r[i] = Oe(Ce(e, l, i));
  const a = (i) =>
    U(r[i], 1, 1, () => {
      r[i] = null;
    });
  return {
    c() {
      for (let i = 0; i < r.length; i += 1) r[i].c();
      t = Ze();
    },
    m(i, u) {
      for (let o = 0; o < r.length; o += 1) r[o].m(i, u);
      H(i, t, u), (n = !0);
    },
    p(i, u) {
      if (u & 1) {
        l = i[0];
        let o;
        for (o = 0; o < l.length; o += 1) {
          const c = Ce(i, l, o);
          r[o]
            ? (r[o].p(c, u), q(r[o], 1))
            : ((r[o] = Oe(c)), r[o].c(), q(r[o], 1), r[o].m(t.parentNode, t));
        }
        for (Ie(), o = l.length; o < r.length; o += 1) a(o);
        Se();
      }
    },
    i(i) {
      if (!n) {
        for (let u = 0; u < l.length; u += 1) q(r[u]);
        n = !0;
      }
    },
    o(i) {
      r = r.filter(Boolean);
      for (let u = 0; u < r.length; u += 1) U(r[u]);
      n = !1;
    },
    d(i) {
      We(r, i), i && J(t);
    },
  };
}
function Oe(e) {
  let t, n;
  return (
    (t = new st({ props: { data: e[2] } })),
    {
      c() {
        et(t.$$.fragment);
      },
      m(l, r) {
        Je(t, l, r), (n = !0);
      },
      p(l, r) {
        const a = {};
        r & 1 && (a.data = l[2]), t.$set(a);
      },
      i(l) {
        n || (q(t.$$.fragment, l), (n = !0));
      },
      o(l) {
        U(t.$$.fragment, l), (n = !1);
      },
      d(l) {
        qe(t, l);
      },
    }
  );
}
function at(e) {
  let t,
    n,
    l,
    r,
    a = oe.name + "",
    i,
    u,
    o,
    c,
    j = oe.school + "",
    p,
    z,
    O = oe.name + "",
    _,
    K,
    E,
    D,
    M,
    L,
    w,
    P,
    N,
    A,
    T,
    B,
    b,
    k,
    X,
    be,
    ce,
    he,
    _e,
    Y,
    ve,
    h,
    v,
    ue,
    x,
    ee,
    ye,
    te,
    $e,
    R,
    ne,
    ae,
    we;
  const ke = [ut, ct],
    C = [];
  function je(g, I) {
    return g[0] ? 0 : 1;
  }
  return (
    (h = je(e)),
    (v = C[h] = ke[h](e)),
    {
      c() {
        (t = d("div")),
          (n = d("h1")),
          (l = d("img")),
          (i = m(a)),
          (u = y()),
          (o = d("p")),
          (c = m("Het ")),
          (p = m(j)),
          (z = y()),
          (_ = m(O)),
          (K = m("; de centrale locatie voor informatie voor jouw laptop,")),
          (E = d("br")),
          (D = m(`
    gemaakt voor leerlingen, door leerlingen. Op deze pagina zijn allemaal artikelen.
    Deze artikelen`)),
          (M = d("br")),
          (L = m(`
    zijn individueel geschreven door leerlingen van de Jozefmavo voor andere leerlingen
    te gebruiken.`)),
          (w = d("br")),
          (P = d("br")),
          (N = m(`
    Zoek naar een onderwerp die jij nodig hebt, klik op "openen" en hij wordt geopent
    in een nieuw tabblad.`)),
          (A = d("br")),
          (T = m(`
    Je hebt volledige rechten deze documenten met andere leerlingen te delen en op
    te slaan.`)),
          (B = d("br")),
          (b = d("br")),
          (k = m(`
    Website geschreven, bedacht en onderhouden door Izaak Kuipers van het
    `)),
          (X = d("b")),
          (X.textContent = "2College Jozefmavo"),
          (be = m(" 2021-2022")),
          (ce = d("br")),
          (he = m(`
    met initieel plan om gebruikt te worden bij het vak Mediawijsheid.`)),
          (_e = y()),
          (Y = d("div")),
          (Y.innerHTML = `<div class="seg subject svelte-nbg8ym">Onderwerp</div> 
    <div class="seg targets svelte-nbg8ym">Doeleinden</div> 
    <div class="seg author svelte-nbg8ym">Schrijver</div> 
    <div class="seg id svelte-nbg8ym">ID#</div> 
    <div class="seg open svelte-nbg8ym">Openen</div>`),
          (ve = y()),
          v.c(),
          (ue = y()),
          (x = d("div")),
          (ee = d("h1")),
          (ee.textContent = `${oe.short} - Sorry!`),
          (ye = y()),
          (te = d("p")),
          (te.textContent =
            "Deze webpagina werkt alleen op de laptop. Probeer het op de laptop opnieuw."),
          ($e = y()),
          (R = d("button")),
          (R.textContent = "Naar 2College"),
          Fe(l.src, (r = it)) || f(l, "src", r),
          f(l, "alt", "Jozefmavo"),
          f(l, "class", "svelte-nbg8ym"),
          f(n, "class", "svelte-nbg8ym"),
          f(E, "class", "svelte-nbg8ym"),
          f(M, "class", "svelte-nbg8ym"),
          f(w, "class", "svelte-nbg8ym"),
          f(P, "class", "svelte-nbg8ym"),
          f(A, "class", "svelte-nbg8ym"),
          f(B, "class", "svelte-nbg8ym"),
          f(b, "class", "svelte-nbg8ym"),
          f(X, "class", "svelte-nbg8ym"),
          f(ce, "class", "svelte-nbg8ym"),
          f(o, "class", "svelte-nbg8ym"),
          f(Y, "class", "row header svelte-nbg8ym"),
          f(t, "class", "content svelte-nbg8ym"),
          f(ee, "class", "svelte-nbg8ym"),
          f(te, "class", "svelte-nbg8ym"),
          f(R, "class", "svelte-nbg8ym"),
          f(x, "class", "block svelte-nbg8ym");
      },
      m(g, I) {
        H(g, t, I),
          s(t, n),
          s(n, l),
          s(n, i),
          s(t, u),
          s(t, o),
          s(o, c),
          s(o, p),
          s(o, z),
          s(o, _),
          s(o, K),
          s(o, E),
          s(o, D),
          s(o, M),
          s(o, L),
          s(o, w),
          s(o, P),
          s(o, N),
          s(o, A),
          s(o, T),
          s(o, B),
          s(o, b),
          s(o, k),
          s(o, X),
          s(o, be),
          s(o, ce),
          s(o, he),
          s(t, _e),
          s(t, Y),
          s(t, ve),
          C[h].m(t, null),
          H(g, ue, I),
          H(g, x, I),
          s(x, ee),
          s(x, ye),
          s(x, te),
          s(x, $e),
          s(x, R),
          (ne = !0),
          ae || ((we = Ne(R, "click", e[1])), (ae = !0));
      },
      p(g, [I]) {
        let fe = h;
        (h = je(g)),
          h === fe
            ? C[h].p(g, I)
            : (Ie(),
              U(C[fe], 1, 1, () => {
                C[fe] = null;
              }),
              Se(),
              (v = C[h]),
              v ? v.p(g, I) : ((v = C[h] = ke[h](g)), v.c()),
              q(v, 1),
              v.m(t, null));
      },
      i(g) {
        ne || (q(v), (ne = !0));
      },
      o(g) {
        U(v), (ne = !1);
      },
      d(g) {
        g && J(t), C[h].d(), g && J(ue), g && J(x), (ae = !1), we();
      },
    }
  );
}
function ft(e, t, n) {
  let l;
  return (
    Re(e, Pe, (a) => n(0, (l = a))),
    Ue(() => {
      setTimeout(() => {
        lt();
      }, 1e3);
    }),
    [l, () => (location.href = "https://www.2college.nl/jozefmavo")]
  );
}
class dt extends Me {
  constructor(t) {
    super(), De(this, t, ft, at, ge, {});
  }
}
new dt({ target: document.getElementById("app") });
