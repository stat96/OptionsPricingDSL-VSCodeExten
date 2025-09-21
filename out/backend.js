"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.priceOptionsDSL = void 0;
const child_process_1 = require("child_process");
function priceOptionsDSL(dsl, callback) {
    const fs = require('fs');
    const tmp = require('os').tmpdir() + '/optionspricingdsl_temp.dsl';
    fs.writeFileSync(tmp, dsl);
    (0, child_process_1.exec)(`python ../OptionsPricingDSL/main.py "${tmp}"`, (err, stdout, stderr) => {
        if (err)
            callback(`Error: ${stderr}`);
        else
            callback(stdout);
    });
}
exports.priceOptionsDSL = priceOptionsDSL;
//# sourceMappingURL=backend.js.map