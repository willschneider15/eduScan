import { splitArgsAndCtx } from "../context.js";
import { EventParser } from "../event.js";
import { translateError } from "../../error.js";
export default class SimulateFactory {
    static build(idlIx, txFn, idlErrors, provider, coder, programId, idl) {
        const simulate = async (...args) => {
            const tx = txFn(...args);
            const [, ctx] = splitArgsAndCtx(idlIx, [...args]);
            let resp = undefined;
            try {
                resp = await provider.simulate(tx, ctx.signers, ctx.options);
            }
            catch (err) {
                throw translateError(err, idlErrors);
            }
            if (resp === undefined) {
                throw new Error("Unable to simulate transaction");
            }
            if (resp.value.err) {
                throw new Error(`Simulate error: ${resp.value.err.toString()}`);
            }
            const logs = resp.value.logs;
            if (!logs) {
                throw new Error("Simulated logs not found");
            }
            const events = [];
            if (idl.events) {
                let parser = new EventParser(programId, coder);
                parser.parseLogs(logs, (event) => {
                    events.push(event);
                });
            }
            return { events, raw: logs };
        };
        return simulate;
    }
}
//# sourceMappingURL=simulate.js.map