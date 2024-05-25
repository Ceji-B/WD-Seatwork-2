'use strict';

// Select tabs and content within the home section only
const tabs = document.querySelectorAll('.home .tabs li');
const contents = document.querySelectorAll('.home .box');
let id = 0;

// Initialize the first tab and content as active
tabs[id].classList.add('active');
contents[id].classList.add('show');

tabs.forEach(function (tab, index) {
    tab.addEventListener('click', function () {
        // Remove the active class from the currently active tab
        tabs[id].classList.remove('active');
        // Set the clicked tab as the active tab
        tab.classList.add('active');
        // Update the id to the index of the clicked tab
        id = index;

        // Hide all content boxes
        contents.forEach(function (box) {
            box.classList.add('hide');
            box.classList.remove('show');
        });

        // Show the content box corresponding to the active tab
        contents[id].classList.remove('hide');
        contents[id].classList.add('show');
    });
});


