import { createElementBlock as n, openBlock as o, normalizeClass as s, renderSlot as a } from "vue";
import { _ as d } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const r = {
  name: "zd-Button"
}, l = /* @__PURE__ */ Object.assign(r, {
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
    return (e, u) => (o(), n("button", {
      class: s(["muk-btn", [t.size, t.type]])
    }, [
      a(e.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), i = /* @__PURE__ */ d(l, [["__scopeId", "data-v-d0d07fb3"]]);
export {
  i as default
};
