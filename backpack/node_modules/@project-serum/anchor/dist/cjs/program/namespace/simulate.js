"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const context_js_1 = require("../context.js");
const event_js_1 = require("../event.js");
const error_js_1 = require("../../error.js");
class SimulateFactory {
    static build(idlIx, txFn, idlErrors, provider, coder, programId, idl) {
        const simulate = async (...args) => {
            const tx = txFn(...args);
            const [, ctx] = (0, context_js_1.splitArgsAndCtx)(idlIx, [...args]);
            let resp = undefined;
            try {
                resp = await provider.simulate(tx, ctx.signers, ctx.options);
            }
            catch (err) {
                throw (0, error_js_1.translateError)(err, idlErrors);
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
                let parser = new event_js_1.EventParser(programId, coder);
                parser.parseLogs(logs, (event) => {
                    events.push(event);
                });
            }
            return { events, raw: logs };
        };
        return simulate;
    }
}
exports.default = SimulateFactory;
//# sourceMappingURL=simulate.js.map