import { createElementBlock as e, openBlock as n, normalizeStyle as a, toDisplayString as l } from "vue";
const s = {
  name: "p-Button"
}, i = /* @__PURE__ */ Object.assign(s, {
  props: {
    name: {
      type: String,
      default: "middle"
    },
    style: {
      type: String,
      default: "default"
    }
  },
  setup(t) {
    return (o, c) => (n(), e("span", {
      style: a(t.style),
      class: "iconfont"
    }, l(t.name), 5));
  }
});
export {
  i as default
};
