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

## Bug 3: Silent absorption of HTML elements into other HTML elements
- Expected: syntax error in editor, web page to look broken
- Actual: page loaded fine, but the button got treated as a list item and inherited list styling/positioning for that HTML element did not apply
- Steps to reproduce: add a button element in the list items for under an ol or ul
- Fix: review the HTML elements, correct the placement of elements where necessary