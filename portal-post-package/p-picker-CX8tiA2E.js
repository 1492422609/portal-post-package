import { resolveComponent as n, createBlock as o, openBlock as a } from "vue";
const c = {
  name: "p-picker"
}, u = /* @__PURE__ */ Object.assign(c, {
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
  setup(p) {
    const e = [
      // 第一列
      {
        values: ["周一", "周二", "周三", "周四", "周五"],
        defaultIndex: 2
      },
      // 第二列
      {
        values: ["上午", "下午", "晚上"],
        defaultIndex: 1
      }
    ];
    return (s, l) => {
      const t = n("van-picker");
      return a(), o(t, {
        title: "标题",
        columns: e
      });
    };
  }
});
export {
  u as default
};
