import { watch as i, createElementBlock as n, openBlock as l, toDisplayString as p } from "vue";
import { _ as u } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const _ = {
  name: "test2-dialog"
}, m = /* @__PURE__ */ Object.assign(_, {
  props: ["first"],
  emits: ["getValue"],
  setup(e, { emit: o }) {
    const t = e, s = o;
    function a() {
      s("getValue", "我触发了");
    }
    return i(() => t, (c, r) => {
      console.log(t, "props改变了");
    }, { deep: !0, immediate: !0 }), (c, r) => (l(), n("div", { onClick: a }, " 这里是通用组件 " + p(t.first), 1));
  }
}), g = /* @__PURE__ */ u(m, [["__scopeId", "data-v-1d8c5c72"]]);
export {
  g as default
};
