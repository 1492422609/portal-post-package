import { watch as c, createBlock as _, openBlock as l, Transition as u, withCtx as f, withDirectives as m, createElementVNode as t, withModifiers as p, createElementBlock as h, createCommentVNode as w, renderSlot as s, toDisplayString as g, vShow as v } from "vue";
import { _ as x } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const C = { class: "xw-dialog" }, k = { class: "xw-dialog__header" }, V = { class: "xw-dialog__title" }, $ = { class: "xw-dialog__body" }, b = {
  key: 0,
  class: "xw-dialog__footer"
}, y = {
  __name: "p-dialog",
  props: ["visible", "title"],
  emits: ["handleClose"],
  setup(o, { emit: a }) {
    const i = o, d = a;
    function n() {
      d("handleClose", "我触发了");
    }
    return c(() => i, (e, r) => {
      console.log(i, "props改变了");
    }, { deep: !0, immediate: !0 }), (e, r) => (l(), _(u, { name: "dialog-fade" }, {
      default: f(() => [
        m(t("div", {
          class: "xw-dialog__wrapper",
          onClick: p(n, ["self"])
        }, [
          t("div", C, [
            t("div", k, [
              s(e.$slots, "title", {}, () => [
                t("span", V, g(o.title), 1)
              ], !0)
            ]),
            t("div", $, [
              s(e.$slots, "default", {}, void 0, !0)
            ]),
            e.$slots.footer ? (l(), h("div", b, [
              s(e.$slots, "footer", {}, void 0, !0)
            ])) : w("", !0)
          ])
        ], 512), [
          [v, o.visible]
        ])
      ]),
      _: 3
    }));
  }
}, S = /* @__PURE__ */ x(y, [["__scopeId", "data-v-9d54c986"]]);
export {
  S as default
};
