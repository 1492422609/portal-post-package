import { ref as r, resolveComponent as i, createBlock as p, openBlock as d } from "vue";
const u = {
  name: "p-switch"
}, f = /* @__PURE__ */ Object.assign(u, {
  props: ["checked"],
  emits: ["update:checked"],
  setup(t, { emit: c }) {
    const e = r(!0);
    console.log("222==" + JSON.stringify(t));
    const n = c, l = () => {
      n("update:checked", !1);
    };
    return (_, o) => {
      const s = i("van-switch");
      return d(), p(s, {
        modelValue: e.value,
        "onUpdate:modelValue": o[0] || (o[0] = (a) => e.value = a),
        "active-color": "#18AE67",
        "inactive-color": "#dcdee0",
        onClick: l
      }, null, 8, ["modelValue"]);
    };
  }
});
export {
  f as default
};
