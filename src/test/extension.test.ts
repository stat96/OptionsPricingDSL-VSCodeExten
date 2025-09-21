describe('OptionsPricingDSL Extension', () => {
describe('OptionsPricingDSL Extension', () => {
import * as assert from 'assert';
import * as vscode from 'vscode';

describe('OptionsPricingDSL Extension', () => {
  it('should activate and register preview command', async () => {
    const commands = await vscode.commands.getCommands(true);
    assert.ok(commands.includes('optionspricingdsl.previewPricing'));
  });
});
