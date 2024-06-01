// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2023-12-08
// @description  try to take over the world!
// @author       You
// @match        *
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.log('matscript loaded hehe');
    // Function to focus on the first available search input
    function focusOnSearchInput() {
        // Get all input elements on the page
        const inputElements = document.querySelectorAll('input[type="text"], input[type="search"]');
        console.log(inputElements);

        // Focus on the first input element if it exists
        if (inputElements.length > 0) {
            inputElements[0].focus();
        }
    }

    // Event listener for the key combination (Cmd + K)
    document.addEventListener('keydown', function (event) {
        console.log('keydown')

        // Check if the key combination is Cmd + K
        if (event.metaKey && event.key === 'k') {
            // Prevent the default behavior of the key combination
            event.preventDefault();

            // Call the function to focus on the search input
            focusOnSearchInput();
        }
    });

})();
