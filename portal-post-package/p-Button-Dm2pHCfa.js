import { resolveComponent as l, createBlock as s, openBlock as a, normalizeClass as u, withCtx as i, renderSlot as d } from "vue";
const r = {
  name: "p-Button"
}, m = /* @__PURE__ */ Object.assign(r, {
  props: {
    size: {
      type: String,
      default: "middle"
    },
    type: {
      type: String,
      default: "default"
    },
    isRound: {
      type: String,
      default: "noRound"
    }
  },
  emits: ["handleClick", "delete"],
  setup(t) {
    function c(e) {
    }
    return (e, n) => {
      const o = l("van-button");
      return a(), s(o, {
        class: u(["hy-button", [t.size, t.type, t.isRound]]),
        onClick: n[0] || (n[0] = (f) => (e.e, void 0))
      }, {
        default: i(() => [
          d(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["class"]);
    };
  }
});
export {
  m as default
};
