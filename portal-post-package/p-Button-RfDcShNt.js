import { resolveComponent as s, createBlock as a, openBlock as u, normalizeClass as i, withCtx as d, renderSlot as r } from "vue";
const c = {
  name: "p-Button"
}, m = /* @__PURE__ */ Object.assign(c, {
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
  setup(e) {
    function o(t) {
      console.log("e===" + t);
    }
    return (t, n) => {
      const l = s("van-button");
      return u(), a(l, {
        class: i(["hy-button", [e.size, e.type, e.isRound]]),
        onClick: n[0] || (n[0] = (f) => o(t.e))
      }, {
        default: d(() => [
          r(t.$slots, "default")
        ]),
        _: 3
      }, 8, ["class"]);
    };
  }
});
export {
  m as default
};
