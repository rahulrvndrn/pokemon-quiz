## Bug 1: Missing closing tags on HTML elements
- Expected: syntax error in editor, web page to look broken
- Actual: page loaded fine
- Steps to reproduce: remove closing tags for the specific HTML element in the file
- Fix: review the HTML elements, add closing tags where necessary

## Bug 2: Missing opening tags on HTML elements
- Expected: syntax error in editor, web page to look broken
- Actual: page loaded fine, but the styling expected for that HTML element did not apply
- Steps to reproduce: remove opening tags for the specific HTML element in the file
- Fix: review the HTML elements, add opening tags where necessary