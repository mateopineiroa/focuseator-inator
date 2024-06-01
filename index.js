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

    // i want to focus at the end of the content of the input
    function focusElement(htmlElementRef) {
        htmlElementRef.focus()
        const length = htmlElementRef.value.length;
        htmlElementRef.setSelectionRange(length, length);
    }

    function focusOnSearchInput() {
        const inputElement = document.querySelector('input');

        if (window.location.href.includes("https://www.google.com/maps")) {
            const searchInput = document.getElementById("searchboxinput");
            focusElement(searchInput);
            return
        }
        if (window.location.origin === "https://www.google.com") {
            const googleSearchButton = document.querySelector('textarea[name=q]')
            focusElement(googleSearchButton)
            return
        }
        if (window.location.origin.includes("netflix")) {
            const searchButton = document.getElementsByClassName('searchTab');
            if (!searchButton[0]) return;
            return searchButton[0].click()
        }
        if (inputElement.type === "hidden") return;
        if (inputElement) {
            focusElement(inputElement)
            return
        }
    }

    function keydownEventHandler (event) {
        if (event.metaKey && event.key === 'k') {
            event.preventDefault();
            focusOnSearchInput();
        }
    }

    document.addEventListener('keydown', keydownEventHandler);
    // This is magic to make maps work. The event listener must be on the canvas after you move the map
    if (window.location.href.includes('https://www.google.com/maps')) {
       setInterval(() => {
           const mapsCanvas = document.querySelector('canvas')
           if (mapsCanvas) {
               mapsCanvas.addEventListener('keydown', keydownEventHandler);
           }
       }, 1000)// one second seems to be enough
	}
})();





































