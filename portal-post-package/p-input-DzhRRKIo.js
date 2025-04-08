import { resolveComponent as r, createBlock as u, openBlock as d, withCtx as p, createVNode as t } from "vue";
const i = {
  __name: "p-input",
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
  setup(m) {
    return (e, l) => {
      const n = r("van-field"), a = r("van-cell-group");
      return d(), u(a, { inset: "" }, {
        default: p(() => [
          t(n, {
            modelValue: e.username,
            "onUpdate:modelValue": l[0] || (l[0] = (o) => e.username = o),
            error: "",
            required: "",
            label: "用户名",
            placeholder: "请输入用户名"
          }, null, 8, ["modelValue"]),
          t(n, {
            modelValue: e.phone,
            "onUpdate:modelValue": l[1] || (l[1] = (o) => e.phone = o),
            required: "",
            label: "手机号",
            placeholder: "请输入手机号",
            "error-message": "手机号格式错误"
          }, null, 8, ["modelValue"])
        ]),
        _: 1
      });
    };
  }
};
export {
  i as default
};
