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
    // 'use strict'; I want to use window
    console.log('matscript loaded hehe');

    function focusOnSearchInput() {
        // const inputElements = document.querySelectorAll('input[type="text"], input[type="search"]');
        const inputElements = document.querySelector('input');
        const textAreaElement = document.querySelector('textarea');
        const searchButton = document.getElementsByClassName('searchTab');

        if (window.location.origin.includes("netflix")) {
            return searchButton[0].click()
        }
        if (inputElements) {
            return inputElements.focus();
        }
        if (textAreaElement) {
            return textAreaElement.focus();
        }


    }

    document.addEventListener('keydown', function (event) {
        if (event.metaKey && event.key === 'k') {
            event.preventDefault();
            focusOnSearchInput();
        }
    });

})();
