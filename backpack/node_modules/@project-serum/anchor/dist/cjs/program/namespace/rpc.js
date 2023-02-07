"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const context_js_1 = require("../context.js");
const error_js_1 = require("../../error.js");
class RpcFactory {
    static build(idlIx, txFn, idlErrors, provider) {
        const rpc = async (...args) => {
            const tx = txFn(...args);
            const [, ctx] = (0, context_js_1.splitArgsAndCtx)(idlIx, [...args]);
            try {
                return await provider.send(tx, ctx.signers, ctx.options);
            }
            catch (err) {
                throw (0, error_js_1.translateError)(err, idlErrors);
            }
        };
        return rpc;
    }
}
exports.default = RpcFactory;
//# sourceMappingURL=rpc.js.map