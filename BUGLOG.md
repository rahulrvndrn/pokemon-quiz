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
- Actual: page loaded fine, but the button got treated as a list item and inherited list styling/positioning
- Steps to reproduce: add a button element in the list items for under an ol or ul
- Fix: review the HTML elements, correct the placement of elements where necessary

## Bug 4: Broken images when the source is invalid
- Expected: image to load on the web page
- Actual: page loaded fine, alt text is displayed when the source is invalid/incorrect
- Steps to reproduce: add an invalid/incorrect source for the image
- Fix: review the image sources

## Bug 5: Valid guess counted as invalid ones due to missing case sensitivity check
- Expected: entered guess to match the correct answer irrespective of case
- Actual: guess considered as incorrect
- Steps to reproduce: guess an answer in upper or lowercase
- Fix: add case insensitivity check to the comparison code

## Bug 6: Displayed/hardcoded data can be wrong based on context
- Expected: data to be dynamically updated based on the API response
- Actual: data was hardcoded
- Steps to reproduce: restart the quiz to see if data gets updated dynamically
- Fix: retrieve data dynamically from the API

## Bug 7: Delay in the loading of the silhouette on quiz restart
- Expected: silhouette to refresh quickly without delay
- Actual: silhouette refresh is delayed
- Steps to reproduce: restart the quiz after a correct guess, observe the silhouette behaviour
- Fix: handle the loading of the image/silhouette

## Bug 8: Submit guess button to be disabled/throw error when no guess is provided
- Expected: submit guess button to throw an error when no guess is submitted
- Actual: showed the correct guess message
- Steps to reproduce: click on submit guess wihtout entering a guess input
- Fix: handle the submit guess flow to throw error when no guess is submitted