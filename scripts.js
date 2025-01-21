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
//Cookie Collection Page
// Show options (Learn More & Order Now) when hovering over a cookie
function showOptions(card) {
    const options = card.querySelector('.cookie-options');
    options.style.display = 'block';
}

// Hide options when mouse leaves the cookie card
function hideOptions(card) {
    const options = card.querySelector('.cookie-options');
    options.style.display = 'none';
}

// "Order Now"
function orderAlert() {
    alert("Thank you for your order!");
}
