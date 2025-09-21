"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
describe('OptionsPricingDSL Extension', () => {
    import * as assert from 'assert';
    import * as vscode from 'vscode';
    describe('OptionsPricingDSL Extension', () => {
        it('should activate and register preview command', () => __awaiter(void 0, void 0, void 0, function* () {
            const commands = yield vscode.commands.getCommands(true);
            assert.ok(commands.includes('optionspricingdsl.previewPricing'));
        }));
    });
});
//# sourceMappingURL=extension.test.js.map