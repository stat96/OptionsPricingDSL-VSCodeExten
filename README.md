# OptionsPricingDSL VS Code Extension

This extension provides syntax highlighting, code completion, and option pricing preview for OptionsPricingDSL `.dsl` files in Visual Studio Code.

## Features
- Syntax highlighting for OptionsPricingDSL keywords and structure
- Code completion for option types, pricing models, and parameters
- Command to preview option pricing results directly from DSL files
- Error diagnostics for invalid DSL syntax
- Support for multi-option files and exotic options

## Installation
1. Open Visual Studio Code.
2. Open the folder `C:\PLProjects\OptionsPricingVSCodeExtension`.
3. Run `npm install` in the extension folder to install dependencies.
4. Press `F5` to launch the extension in a new Extension Development Host window.
5. To install the extension permanently, run:
   ```bash
   vsce package
   code --install-extension <generated-vsix-file>
   ```

## Usage
- Open any `.dsl` file containing OptionsPricingDSL code.
- Syntax highlighting and code completion will be enabled automatically.
- Use the command palette (`Ctrl+Shift+P`) and select `OptionsPricingDSL: Preview Pricing` to run pricing and view results.
- Errors in DSL syntax will be shown in the Problems panel.

## Extension Development
- The extension is written in TypeScript using the VS Code Extension API.
- To add new option types or pricing models, update the language grammar and completion provider in `src/`.
- For pricing preview, integrate with the OptionsPricingDSL Python backend or use a webview for results.

## Troubleshooting
- Ensure all dependencies are installed with `npm install`.
- If preview does not work, check the Problems panel for errors.
- For advanced pricing, ensure the backend is accessible and configured.

## References
- [VS Code Extension API](https://code.visualstudio.com/api)
- [OptionsPricingDSL Documentation](../OptionsPricingDSL/README.md)
