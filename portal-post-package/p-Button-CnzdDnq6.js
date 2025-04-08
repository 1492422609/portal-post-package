import { resolveComponent as l, createBlock as s, openBlock as a, normalizeClass as u, withCtx as d, renderSlot as i } from "vue";
const r = {
  name: "p-Button"
}, c = /* @__PURE__ */ Object.assign(r, {
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
  setup(t) {
    return (e, n) => {
      const o = l("van-button");
      return a(), s(o, {
        class: u(["hy-button", [t.size, t.type, t.isRound]]),
        onClick: n[0] || (n[0] = (f) => e.handleClick(e.e))
      }, {
        default: d(() => [
          i(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["class"]);
    };
  }
});
export {
  c as default
};
