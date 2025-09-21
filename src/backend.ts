import { exec } from 'child_process';

export function priceOptionsDSL(dsl: string, callback: (output: string) => void) {
  const fs = require('fs');
  const tmp = require('os').tmpdir() + '/optionspricingdsl_temp.dsl';
  fs.writeFileSync(tmp, dsl);
  exec(`python ../OptionsPricingDSL/main.py "${tmp}"`, (err, stdout, stderr) => {
    if (err) callback(`Error: ${stderr}`);
    else callback(stdout);
  });
}
