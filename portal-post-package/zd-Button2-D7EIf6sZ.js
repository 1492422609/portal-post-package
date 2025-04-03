import { createElementBlock as n, openBlock as a, normalizeClass as o, renderSlot as s } from "vue";
import { _ as r } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const d = {
  name: "zd-Button2"
}, l = /* @__PURE__ */ Object.assign(d, {
  props: {
    size: {
      type: String,
      default: "middle"
    },
    type: {
      type: String,
      default: "default"
    }
  },
  setup(t) {
    return (e, u) => (a(), n("button", {
      class: o(["muk-btn", [t.size, t.type]])
    }, [
      s(e.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), i = /* @__PURE__ */ r(l, [["__scopeId", "data-v-4627a560"]]);
export {
  i as default
};
