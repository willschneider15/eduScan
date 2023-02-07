import { splitArgsAndCtx } from "../context.js";
import { translateError } from "../../error.js";
export default class RpcFactory {
    static build(idlIx, txFn, idlErrors, provider) {
        const rpc = async (...args) => {
            const tx = txFn(...args);
            const [, ctx] = splitArgsAndCtx(idlIx, [...args]);
            try {
                return await provider.send(tx, ctx.signers, ctx.options);
            }
            catch (err) {
                throw translateError(err, idlErrors);
            }
        };
        return rpc;
    }
}
//# sourceMappingURL=rpc.js.map