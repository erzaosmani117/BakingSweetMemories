// Wait for the DOM to load before adding event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element by its ID
    const faqButton = document.getElementById('faqLinkBtn');

    // Add a click event listener to the button
    faqButton.addEventListener('click', function(event) {
        // Prevent the default link behavior so we can show the confirmation dialog
        event.preventDefault();

        // Show a confirmation dialog
        const userConfirmed = confirm(" Check out our FAQ page!");
        
        // If the user clicks "OK", redirect to the FAQ page
        if (userConfirmed) {
            window.location.href = 'FAQ.html';
        } else {
            // Optionally, you can show a message if the user cancels
            console.log("User cancelled the FAQ visit.");
        }
    });
});
function downloadColoringPage() {
    alert("Downloading coloring pages! Stay creative!");
    // Simulate download action
    const link = document.createElement('a');
    link.href = 'path/to/coloring-pages.pdf'; // Replace with actual file path
    link.download = 'ColoringPages.pdf';
    link.click();
}

function showRecipe() {
    const recipeModal = new bootstrap.Modal(document.getElementById('recipe-modal'));
    recipeModal.show();
}
