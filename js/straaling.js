'use strict';
document.addEventListener('DOMContentLoaded', function() {
    // Select all grid items
    const buttons = document.querySelectorAll('.grid-item');

    // Counter for tracking selected items
    let selectedCount = 0;

    // Add click event listener to each button
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Toggle 'selected' class when clicked
            this.classList.toggle('selected');

            // Increment or decrement selectedCount based on toggle action
            if (this.classList.contains('selected')) {
                selectedCount++;
            } else {
                selectedCount--;
            }

            // Limit selection to 3 items
            if (selectedCount > 3) {
                this.classList.remove('selected');
                selectedCount--;
            }
        });
    });
});