import { defineAsyncComponent as i } from "vue";
const p = /* @__PURE__ */ Object.assign({ "./zd-vin/p-Button.vue": () => import("./p-Button-CnzdDnq6.js"), "./zd-vin/p-dialog.vue": () => import("./p-dialog-CRYnovas.js"), "./zd-vin/p-input.vue": () => import("./p-input-DzhRRKIo.js"), "./zd-vin/p-picker.vue": () => import("./p-picker-CX8tiA2E.js"), "./zd-vin/p-span.vue": () => import("./p-span-DEtnfI84.js"), "./zd-vin/p-switch.vue": () => import("./p-switch-D28cNrWB.js"), "./zd-vin/p-toast.vue": () => import("./p-toast-BXTZRqjJ.js"), "./zd-vin/test2-dialog.vue": () => import("./test2-dialog-SSEoG9mY.js"), "./zd-vin/zd-Button.vue": () => import("./zd-Button-BZBtUWOh.js"), "./zd-vin/zd-Button2.vue": () => import("./zd-Button2-D7EIf6sZ.js") }), d = (n) => {
  for (const [t, o] of Object.entries(p)) {
    const e = t.slice(t.lastIndexOf("/") + 1, t.lastIndexOf("."));
    n.component(e, i(o));
  }
};
export {
  d as default
};
