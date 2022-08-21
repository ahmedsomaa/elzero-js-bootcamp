Code One won't work

**Reason:** The script is trying to access a null DOM element.

Code Two will work

**Reason:** The script is trying to access the 'el' div after the DOM is already loaded.

Code Three will work

**Reason:** The script is executed after the 'el' div tag has already been rendered to the DOM.
