import * as vscode from 'vscode';
import { priceOptionsDSL } from './backend';

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('optionspricingdsl.previewPricing', () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        vscode.window.showErrorMessage('No active editor');
        return;
      }
      const dsl = editor.document.getText();
      priceOptionsDSL(dsl, (output: string) => {
        vscode.window.showInformationMessage('Pricing Preview Output: ' + output.substring(0, 200));
      });
    })
  );
}

export function deactivate() {}
