import { onUnmounted as re, onDeactivated as W, isRef as Ne, watch as P, onMounted as q, nextTick as ue, onActivated as de, unref as te, ref as g, reactive as fe, getCurrentInstance as ve, defineComponent as I, computed as L, createVNode as d, provide as me, watchEffect as Re, inject as je, mergeProps as V, onBeforeUnmount as Me, Transition as ge, withDirectives as ye, vShow as pe, Teleport as Ye, Fragment as Ve, createApp as Ue, createElementBlock as Ke, openBlock as He } from "vue";
const B = (e) => e != null, X = (e) => typeof e == "function", U = (e) => e !== null && typeof e == "object", Ze = (e) => U(e) && X(e.then) && X(e.catch), he = (e) => typeof e == "number" || /^\d+(\.\d+)?$/.test(e), Xe = () => Ee ? /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()) : !1;
function Ge() {
}
const b = Object.assign, Ee = typeof window < "u";
function ne(e, t) {
  const n = t.split(".");
  let o = e;
  return n.forEach((a) => {
    var i;
    o = U(o) && (i = o[a]) != null ? i : "";
  }), o;
}
function We(e, t, n) {
  return t.reduce((o, a) => (o[a] = e[a], o), {});
}
const j = null, p = [Number, String], S = {
  type: Boolean,
  default: !0
}, qe = (e) => ({
  type: Number,
  default: e
}), w = (e) => ({
  type: String,
  default: e
});
var J = typeof window < "u";
function we(e) {
  let t;
  q(() => {
    e(), ue(() => {
      t = !0;
    });
  }), de(() => {
    t && e();
  });
}
function be(e, t, n = {}) {
  if (!J)
    return;
  const { target: o = window, passive: a = !1, capture: i = !1 } = n;
  let s = !1, l;
  const c = (u) => {
    if (s)
      return;
    const v = te(u);
    v && !l && (v.addEventListener(e, t, {
      capture: i,
      passive: a
    }), l = !0);
  }, f = (u) => {
    if (s)
      return;
    const v = te(u);
    v && l && (v.removeEventListener(e, t, i), l = !1);
  };
  re(() => f(o)), W(() => f(o)), we(() => c(o));
  let r;
  return Ne(o) && (r = P(o, (u, v) => {
    f(v), c(u);
  })), () => {
    r == null || r(), f(o), s = !0;
  };
}
var R, Z;
function Je() {
  if (!R && (R = g(0), Z = g(0), J)) {
    const e = () => {
      R.value = window.innerWidth, Z.value = window.innerHeight;
    };
    e(), window.addEventListener("resize", e, { passive: !0 }), window.addEventListener("orientationchange", e, { passive: !0 });
  }
  return { width: R, height: Z };
}
var Qe = /scroll|auto|overlay/i, et = J ? window : void 0;
function tt(e) {
  return e.tagName !== "HTML" && e.tagName !== "BODY" && e.nodeType === 1;
}
function nt(e, t = et) {
  let n = e;
  for (; n && n !== t && tt(n); ) {
    const { overflowY: o } = window.getComputedStyle(n);
    if (Qe.test(o))
      return n;
    n = n.parentNode;
  }
  return t;
}
Xe();
const ot = (e) => e.stopPropagation();
function Ce(e, t) {
  (typeof e.cancelable != "boolean" || e.cancelable) && e.preventDefault(), ot(e);
}
Je();
function x(e) {
  if (B(e))
    return he(e) ? `${e}px` : String(e);
}
function at(e) {
  if (B(e)) {
    if (Array.isArray(e))
      return {
        width: x(e[0]),
        height: x(e[1])
      };
    const t = x(e);
    return {
      width: t,
      height: t
    };
  }
}
function st(e) {
  const t = {};
  return e !== void 0 && (t.zIndex = +e), t;
}
const it = /-(\w)/g, xe = (e) => e.replace(it, (t, n) => n.toUpperCase()), lt = (e) => e.replace(/([A-Z])/g, "-$1").toLowerCase().replace(/^-/, ""), { hasOwnProperty: ct } = Object.prototype;
function rt(e, t, n) {
  const o = t[n];
  B(o) && (!ct.call(e, n) || !U(o) ? e[n] = o : e[n] = Oe(Object(e[n]), o));
}
function Oe(e, t) {
  return Object.keys(t).forEach((n) => {
    rt(e, t, n);
  }), e;
}
var ut = {
  name: "姓名",
  tel: "电话",
  save: "保存",
  confirm: "确认",
  cancel: "取消",
  delete: "删除",
  loading: "加载中...",
  noCoupon: "暂无优惠券",
  nameEmpty: "请填写姓名",
  addContact: "添加联系人",
  telInvalid: "请填写正确的电话",
  vanCalendar: {
    end: "结束",
    start: "开始",
    title: "日期选择",
    weekdays: ["日", "一", "二", "三", "四", "五", "六"],
    monthTitle: (e, t) => `${e}年${t}月`,
    rangePrompt: (e) => `最多选择 ${e} 天`
  },
  vanCascader: {
    select: "请选择"
  },
  vanPagination: {
    prev: "上一页",
    next: "下一页"
  },
  vanPullRefresh: {
    pulling: "下拉即可刷新...",
    loosing: "释放即可刷新..."
  },
  vanSubmitBar: {
    label: "合计:"
  },
  vanCoupon: {
    unlimited: "无门槛",
    discount: (e) => `${e}折`,
    condition: (e) => `满${e}元可用`
  },
  vanCouponCell: {
    title: "优惠券",
    count: (e) => `${e}张可用`
  },
  vanCouponList: {
    exchange: "兑换",
    close: "不使用",
    enable: "可用",
    disabled: "不可用",
    placeholder: "输入优惠码"
  },
  vanAddressEdit: {
    area: "地区",
    postal: "邮政编码",
    areaEmpty: "请选择地区",
    addressEmpty: "请填写详细地址",
    postalEmpty: "邮政编码不正确",
    addressDetail: "详细地址",
    defaultAddress: "设为默认收货地址"
  },
  vanAddressList: {
    add: "新增地址"
  }
};
const oe = g("zh-CN"), ae = fe({
  "zh-CN": ut
}), dt = {
  messages() {
    return ae[oe.value];
  },
  use(e, t) {
    oe.value = e, this.add({ [e]: t });
  },
  add(e = {}) {
    Oe(ae, e);
  }
};
var ft = dt;
function vt(e) {
  const t = xe(e) + ".";
  return (n, ...o) => {
    const a = ft.messages(), i = ne(a, t + n) || ne(a, n);
    return X(i) ? i(...o) : i;
  };
}
function G(e, t) {
  return t ? typeof t == "string" ? ` ${e}--${t}` : Array.isArray(t) ? t.reduce(
    (n, o) => n + G(e, o),
    ""
  ) : Object.keys(t).reduce(
    (n, o) => n + (t[o] ? G(e, o) : ""),
    ""
  ) : "";
}
function mt(e) {
  return (t, n) => (t && typeof t != "string" && (n = t, t = ""), t = t ? `${e}__${t}` : e, `${t}${G(t, n)}`);
}
function k(e) {
  const t = `van-${e}`;
  return [
    t,
    mt(t),
    vt(t)
  ];
}
const gt = "van-haptics-feedback";
function yt(e, {
  args: t = [],
  done: n,
  canceled: o
}) {
  if (e) {
    const a = e.apply(null, t);
    Ze(a) ? a.then((i) => {
      i ? n() : o && o();
    }).catch(Ge) : a ? n() : o && o();
  } else
    n();
}
function _(e) {
  return e.install = (t) => {
    const { name: n } = e;
    n && (t.component(n, e), t.component(xe(`-${n}`), e));
  }, e;
}
const pt = Symbol();
function Be(e) {
  const t = ve();
  t && b(t.proxy, e);
}
const [ht, se] = k("badge"), Et = {
  dot: Boolean,
  max: p,
  tag: w("div"),
  color: String,
  offset: Array,
  content: p,
  showZero: S,
  position: w("top-right")
};
var wt = I({
  name: ht,
  props: Et,
  setup(e, {
    slots: t
  }) {
    const n = () => {
      if (t.content)
        return !0;
      const {
        content: s,
        showZero: l
      } = e;
      return B(s) && s !== "" && (l || s !== 0 && s !== "0");
    }, o = () => {
      const {
        dot: s,
        max: l,
        content: c
      } = e;
      if (!s && n())
        return t.content ? t.content() : B(l) && he(c) && +c > l ? `${l}+` : c;
    }, a = L(() => {
      const s = {
        background: e.color
      };
      if (e.offset) {
        const [l, c] = e.offset;
        t.default ? (s.top = x(c), typeof l == "number" ? s.right = x(-l) : s.right = l.startsWith("-") ? l.replace("-", "") : `-${l}`) : (s.marginTop = x(c), s.marginLeft = x(l));
      }
      return s;
    }), i = () => {
      if (n() || e.dot)
        return d("div", {
          class: se([e.position, {
            dot: e.dot,
            fixed: !!t.default
          }]),
          style: a.value
        }, [o()]);
    };
    return () => {
      if (t.default) {
        const {
          tag: s
        } = e;
        return d(s, {
          class: se("wrapper")
        }, {
          default: () => [t.default(), i()]
        });
      }
      return i();
    };
  }
});
const bt = _(wt);
let Se = 2e3;
const Ct = () => ++Se, xt = (e) => {
  Se = e;
}, [Pe, Ot] = k("config-provider"), Ie = Symbol(Pe), Bt = {
  tag: w("div"),
  zIndex: Number,
  themeVars: Object,
  iconPrefix: String
};
function St(e) {
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[`--van-${lt(n)}`] = e[n];
  }), t;
}
I({
  name: Pe,
  props: Bt,
  setup(e, {
    slots: t
  }) {
    const n = L(() => {
      if (e.themeVars)
        return St(e.themeVars);
    });
    return me(Ie, e), Re(() => {
      e.zIndex !== void 0 && xt(e.zIndex);
    }), () => d(e.tag, {
      class: Ot(),
      style: n.value
    }, {
      default: () => {
        var o;
        return [(o = t.default) == null ? void 0 : o.call(t)];
      }
    });
  }
});
const [Pt, ie] = k("icon"), It = (e) => e == null ? void 0 : e.includes("/"), kt = {
  dot: Boolean,
  tag: w("i"),
  name: String,
  size: p,
  badge: p,
  color: String,
  badgeProps: Object,
  classPrefix: String
};
var Dt = I({
  name: Pt,
  props: kt,
  setup(e, {
    slots: t
  }) {
    const n = je(Ie, null), o = L(() => e.classPrefix || (n == null ? void 0 : n.iconPrefix) || ie());
    return () => {
      const {
        tag: a,
        dot: i,
        name: s,
        size: l,
        badge: c,
        color: f
      } = e, r = It(s);
      return d(bt, V({
        dot: i,
        tag: a,
        class: [o.value, r ? "" : `${o.value}-${s}`],
        style: {
          color: f,
          fontSize: x(l)
        },
        content: c
      }, e.badgeProps), {
        default: () => {
          var u;
          return [(u = t.default) == null ? void 0 : u.call(t), r && d("img", {
            class: ie("image"),
            src: s
          }, null)];
        }
      });
    };
  }
});
const ke = _(Dt), [_t, F] = k("loading"), $t = Array(12).fill(null).map((e, t) => d("i", {
  class: F("line", String(t + 1))
}, null)), Tt = d("svg", {
  class: F("circular"),
  viewBox: "25 25 50 50"
}, [d("circle", {
  cx: "50",
  cy: "50",
  r: "20",
  fill: "none"
}, null)]), zt = {
  size: p,
  type: w("circular"),
  color: String,
  vertical: Boolean,
  textSize: p,
  textColor: String
};
var At = I({
  name: _t,
  props: zt,
  setup(e, {
    slots: t
  }) {
    const n = L(() => b({
      color: e.color
    }, at(e.size))), o = () => {
      var a;
      if (t.default)
        return d("span", {
          class: F("text"),
          style: {
            fontSize: x(e.textSize),
            color: (a = e.textColor) != null ? a : e.color
          }
        }, [t.default()]);
    };
    return () => {
      const {
        type: a,
        vertical: i
      } = e;
      return d("div", {
        class: F([a, {
          vertical: i
        }]),
        "aria-live": "polite",
        "aria-busy": !0
      }, [d("span", {
        class: F("spinner", a),
        style: n.value
      }, [a === "spinner" ? $t : Tt]), o()]);
    };
  }
});
const Ft = _(At), Lt = {
  show: Boolean,
  zIndex: p,
  overlay: S,
  duration: p,
  teleport: [String, Object],
  lockScroll: S,
  lazyRender: S,
  beforeClose: Function,
  overlayStyle: Object,
  overlayClass: j,
  transitionAppear: Boolean,
  closeOnClickOverlay: S
};
function Nt(e, t) {
  return e > t ? "horizontal" : t > e ? "vertical" : "";
}
function Rt() {
  const e = g(0), t = g(0), n = g(0), o = g(0), a = g(0), i = g(0), s = g(""), l = () => s.value === "vertical", c = () => s.value === "horizontal", f = () => {
    n.value = 0, o.value = 0, a.value = 0, i.value = 0, s.value = "";
  };
  return {
    move: (v) => {
      const h = v.touches[0];
      n.value = (h.clientX < 0 ? 0 : h.clientX) - e.value, o.value = h.clientY - t.value, a.value = Math.abs(n.value), i.value = Math.abs(o.value);
      const C = 10;
      (!s.value || a.value < C && i.value < C) && (s.value = Nt(a.value, i.value));
    },
    start: (v) => {
      f(), e.value = v.touches[0].clientX, t.value = v.touches[0].clientY;
    },
    reset: f,
    startX: e,
    startY: t,
    deltaX: n,
    deltaY: o,
    offsetX: a,
    offsetY: i,
    direction: s,
    isVertical: l,
    isHorizontal: c
  };
}
let T = 0;
const le = "van-overflow-hidden";
function jt(e, t) {
  const n = Rt(), o = "01", a = "10", i = (r) => {
    n.move(r);
    const u = n.deltaY.value > 0 ? a : o, v = nt(
      r.target,
      e.value
    ), { scrollHeight: h, offsetHeight: C, scrollTop: $ } = v;
    let D = "11";
    $ === 0 ? D = C >= h ? "00" : "01" : $ + C >= h && (D = "10"), D !== "11" && n.isVertical() && !(parseInt(D, 2) & parseInt(u, 2)) && Ce(r);
  }, s = () => {
    document.addEventListener("touchstart", n.start), document.addEventListener("touchmove", i, { passive: !1 }), T || document.body.classList.add(le), T++;
  }, l = () => {
    T && (document.removeEventListener("touchstart", n.start), document.removeEventListener("touchmove", i), T--, T || document.body.classList.remove(le));
  }, c = () => t() && s(), f = () => t() && l();
  we(c), W(f), Me(f), P(t, (r) => {
    r ? s() : l();
  });
}
function De(e) {
  const t = g(!1);
  return P(
    e,
    (n) => {
      n && (t.value = n);
    },
    { immediate: !0 }
  ), (n) => () => t.value ? n() : null;
}
const [Mt, Yt] = k("overlay"), Vt = {
  show: Boolean,
  zIndex: p,
  duration: p,
  className: j,
  lockScroll: S,
  lazyRender: S,
  customStyle: Object
};
var Ut = I({
  name: Mt,
  props: Vt,
  setup(e, {
    slots: t
  }) {
    const n = g(), o = De(() => e.show || !e.lazyRender), a = (s) => {
      e.lockScroll && Ce(s);
    }, i = o(() => {
      var s;
      const l = b(st(e.zIndex), e.customStyle);
      return B(e.duration) && (l.animationDuration = `${e.duration}s`), ye(d("div", {
        ref: n,
        style: l,
        class: [Yt(), e.className]
      }, [(s = t.default) == null ? void 0 : s.call(t)]), [[pe, e.show]]);
    });
    return be("touchmove", a, {
      target: n
    }), () => d(ge, {
      name: "van-fade",
      appear: !0
    }, {
      default: i
    });
  }
});
const Kt = _(Ut), Ht = b({}, Lt, {
  round: Boolean,
  position: w("center"),
  closeIcon: w("cross"),
  closeable: Boolean,
  transition: String,
  iconPrefix: String,
  closeOnPopstate: Boolean,
  closeIconPosition: w("top-right"),
  safeAreaInsetTop: Boolean,
  safeAreaInsetBottom: Boolean
}), [Zt, ce] = k("popup");
var Xt = I({
  name: Zt,
  inheritAttrs: !1,
  props: Ht,
  emits: ["open", "close", "opened", "closed", "keydown", "update:show", "click-overlay", "click-close-icon"],
  setup(e, {
    emit: t,
    attrs: n,
    slots: o
  }) {
    let a, i;
    const s = g(), l = g(), c = De(() => e.show || !e.lazyRender), f = L(() => {
      const m = {
        zIndex: s.value
      };
      if (B(e.duration)) {
        const O = e.position === "center" ? "animationDuration" : "transitionDuration";
        m[O] = `${e.duration}s`;
      }
      return m;
    }), r = () => {
      a || (a = !0, s.value = e.zIndex !== void 0 ? +e.zIndex : Ct(), t("open"));
    }, u = () => {
      a && yt(e.beforeClose, {
        done() {
          a = !1, t("close"), t("update:show", !1);
        }
      });
    }, v = (m) => {
      t("click-overlay", m), e.closeOnClickOverlay && u();
    }, h = () => {
      if (e.overlay)
        return d(Kt, {
          show: e.show,
          class: e.overlayClass,
          zIndex: s.value,
          duration: e.duration,
          customStyle: e.overlayStyle,
          role: e.closeOnClickOverlay ? "button" : void 0,
          tabindex: e.closeOnClickOverlay ? 0 : void 0,
          onClick: v
        }, {
          default: o["overlay-content"]
        });
    }, C = (m) => {
      t("click-close-icon", m), u();
    }, $ = () => {
      if (e.closeable)
        return d(ke, {
          role: "button",
          tabindex: 0,
          name: e.closeIcon,
          class: [ce("close-icon", e.closeIconPosition), gt],
          classPrefix: e.iconPrefix,
          onClick: C
        }, null);
    }, D = () => t("opened"), ze = () => t("closed"), Ae = (m) => t("keydown", m), Fe = c(() => {
      var m;
      const {
        round: O,
        position: N,
        safeAreaInsetTop: H,
        safeAreaInsetBottom: Le
      } = e;
      return ye(d("div", V({
        ref: l,
        style: f.value,
        role: "dialog",
        tabindex: 0,
        class: [ce({
          round: O,
          [N]: N
        }), {
          "van-safe-area-top": H,
          "van-safe-area-bottom": Le
        }],
        onKeydown: Ae
      }, n), [(m = o.default) == null ? void 0 : m.call(o), $()]), [[pe, e.show]]);
    }), ee = () => {
      const {
        position: m,
        transition: O,
        transitionAppear: N
      } = e, H = m === "center" ? "van-fade" : `van-popup-slide-${m}`;
      return d(ge, {
        name: O || H,
        appear: N,
        onAfterEnter: D,
        onAfterLeave: ze
      }, {
        default: Fe
      });
    };
    return P(() => e.show, (m) => {
      m && !a && (r(), n.tabindex === 0 && ue(() => {
        var O;
        (O = l.value) == null || O.focus();
      })), !m && a && (a = !1, t("close"));
    }), Be({
      popupRef: l
    }), jt(l, () => e.show && e.lockScroll), be("popstate", () => {
      e.closeOnPopstate && (u(), i = !1);
    }), q(() => {
      e.show && r();
    }), de(() => {
      i && (t("update:show", !0), i = !1);
    }), W(() => {
      e.show && e.teleport && (u(), i = !0);
    }), me(pt, () => e.show), () => e.teleport ? d(Ye, {
      to: e.teleport
    }, {
      default: () => [h(), ee()]
    }) : d(Ve, null, [h(), ee()]);
  }
});
const Gt = _(Xt);
function Wt() {
  const e = fe({
    show: !1
  }), t = (a) => {
    e.show = a;
  }, n = (a) => {
    b(e, a, { transitionAppear: !0 }), t(!0);
  }, o = () => t(!1);
  return Be({ open: n, close: o, toggle: t }), {
    open: n,
    close: o,
    state: e,
    toggle: t
  };
}
function qt(e) {
  const t = Ue(e), n = document.createElement("div");
  return document.body.appendChild(n), {
    instance: t.mount(n),
    unmount() {
      t.unmount(), document.body.removeChild(n);
    }
  };
}
let z = 0;
function Jt(e) {
  e ? (z || document.body.classList.add("van-toast--unclickable"), z++) : z && (z--, z || document.body.classList.remove("van-toast--unclickable"));
}
const [Qt, A] = k("toast"), en = ["show", "overlay", "teleport", "transition", "overlayClass", "overlayStyle", "closeOnClickOverlay"], tn = {
  icon: String,
  show: Boolean,
  type: w("text"),
  overlay: Boolean,
  message: p,
  iconSize: p,
  duration: qe(2e3),
  position: w("middle"),
  teleport: [String, Object],
  className: j,
  iconPrefix: String,
  transition: w("van-fade"),
  loadingType: String,
  forbidClick: Boolean,
  overlayClass: j,
  overlayStyle: Object,
  closeOnClick: Boolean,
  closeOnClickOverlay: Boolean
};
var _e = I({
  name: Qt,
  props: tn,
  emits: ["update:show"],
  setup(e, {
    emit: t
  }) {
    let n, o = !1;
    const a = () => {
      const r = e.show && e.forbidClick;
      o !== r && (o = r, Jt(o));
    }, i = (r) => t("update:show", r), s = () => {
      e.closeOnClick && i(!1);
    }, l = () => clearTimeout(n), c = () => {
      const {
        icon: r,
        type: u,
        iconSize: v,
        iconPrefix: h,
        loadingType: C
      } = e;
      if (r || u === "success" || u === "fail")
        return d(ke, {
          name: r || u,
          size: v,
          class: A("icon"),
          classPrefix: h
        }, null);
      if (u === "loading")
        return d(Ft, {
          class: A("loading"),
          size: v,
          type: C
        }, null);
    }, f = () => {
      const {
        type: r,
        message: u
      } = e;
      if (B(u) && u !== "")
        return r === "html" ? d("div", {
          key: 0,
          class: A("text"),
          innerHTML: String(u)
        }, null) : d("div", {
          class: A("text")
        }, [u]);
    };
    return P(() => [e.show, e.forbidClick], a), P(() => [e.show, e.type, e.message, e.duration], () => {
      l(), e.show && e.duration > 0 && (n = setTimeout(() => {
        i(!1);
      }, e.duration));
    }), q(a), re(a), () => d(Gt, V({
      class: [A([e.position, {
        [e.type]: !e.icon
      }]), e.className],
      lockScroll: !1,
      onClick: s,
      onClosed: l,
      "onUpdate:show": i
    }, We(e, en)), {
      default: () => [c(), f()]
    });
  }
});
const $e = {
  icon: "",
  type: "text",
  message: "",
  className: "",
  overlay: !1,
  onClose: void 0,
  onOpened: void 0,
  duration: 2e3,
  teleport: "body",
  iconSize: void 0,
  iconPrefix: void 0,
  position: "middle",
  transition: "van-fade",
  forbidClick: !1,
  loadingType: void 0,
  overlayClass: "",
  overlayStyle: void 0,
  closeOnClick: !1,
  closeOnClickOverlay: !1
};
let E = [], K = !1, M = b({}, $e);
const Y = /* @__PURE__ */ new Map();
function Te(e) {
  return U(e) ? e : {
    message: e
  };
}
function nn() {
  const {
    instance: e,
    unmount: t
  } = qt({
    setup() {
      const n = g(""), {
        open: o,
        state: a,
        close: i,
        toggle: s
      } = Wt(), l = () => {
        K && (E = E.filter((f) => f !== e), t());
      }, c = () => d(_e, V(a, {
        onClosed: l,
        "onUpdate:show": s
      }), null);
      return P(n, (f) => {
        a.message = f;
      }), ve().render = c, {
        open: o,
        clear: i,
        message: n
      };
    }
  });
  return e;
}
function on() {
  if (!E.length || K) {
    const e = nn();
    E.push(e);
  }
  return E[E.length - 1];
}
function y(e = {}) {
  if (!Ee)
    return {};
  const t = on(), n = Te(e);
  return t.open(b({}, M, Y.get(n.type || M.type), n)), t;
}
const Q = (e) => (t) => y(b({
  type: e
}, Te(t)));
y.loading = Q("loading");
y.success = Q("success");
y.fail = Q("fail");
y.clear = (e) => {
  var t;
  E.length && (e ? (E.forEach((n) => {
    n.clear();
  }), E = []) : K ? (t = E.shift()) == null || t.clear() : E[0].clear());
};
function an(e, t) {
  typeof e == "string" ? Y.set(e, t) : b(M, e);
}
y.setDefaultOptions = an;
y.resetDefaultOptions = (e) => {
  typeof e == "string" ? Y.delete(e) : (M = b({}, $e), Y.clear());
};
y.allowMultiple = (e = !0) => {
  K = e;
};
y.install = (e) => {
  e.use(_(_e)), e.config.globalProperties.$toast = y;
};
const sn = {
  name: "p-toast"
}, cn = /* @__PURE__ */ Object.assign(sn, {
  props: {
    size: {
      type: String,
      default: "middle"
    }
  },
  emits: ["childToast,rightToast,errorToast"],
  setup(e, { expose: t, emit: n }) {
    function o(c) {
      y(c);
    }
    function a(c) {
      y({
        message: '<div style="padding-top:5px"><i class="iconfont" style="font-size: 27px;color: white;">&#xe746;</i><div style="padding-top:8px">' + c + "</div></div>",
        type: "html"
      });
    }
    function i(c) {
      y({
        message: '<div style="padding-top:5px"><i class="iconfont" style="font-size: 27px;color: white;">&#xe749;</i><div style="padding-top:8px">' + c + "</div></div>",
        type: "html"
      });
    }
    function s(c) {
      y({
        message: '<div style="padding-top:5px"><i class="iconfont" style="font-size: 27px;color: white;">&#xe721;</i><div style="padding-top:8px">' + c + "</div></div>",
        type: "html"
      });
    }
    function l(c) {
      y({
        message: '<div style="padding-top:5px"><i class="iconfont" style="font-size: 27px;color: white;">&#xe743;</i><div style="padding-top:8px">' + c + "</div></div>",
        type: "html"
      });
    }
    return t({ childToast: o, rightToast: a, errorToast: i, loadToast: s, infoToast: l }), (c, f) => (He(), Ke("div"));
  }
});
export {
  cn as default
};
