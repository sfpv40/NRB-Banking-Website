// ===============================
// RELOAD PAGE WHEN LOGO IS CLICKED
// ===============================
document.querySelector(".brand img").addEventListener("click", () => {
    location.reload();  // Refresh the page
});

// ===============================
// TOP NAVIGATION DROPDOWNS
// ===============================
// Get all menu items that contain dropdowns
const menuItems = document.querySelectorAll(".menu-item");
// Loop through each menu item
menuItems.forEach(item => {
    // Select the clickable menu link
    const link = item.querySelector(".menu-link");
    // When the link is clicked, open its dropdown
    link.addEventListener("click", function (e) {
        e.preventDefault(); // Stop page jumping
        // Find this menu item's dropdown
        const dropdown = item.querySelector(".dropdown");
        // Close all other dropdowns first
        document.querySelectorAll(".dropdown").forEach(d => {
            if (d !== dropdown) d.style.display = "none";
        });
        // Toggle the clicked one
        dropdown.style.display =
            dropdown.style.display === "block" ? "none" : "block";
    });
});

// Close dropdowns if you click anywhere outside the menu
document.addEventListener("click", function (event) {
    // If the click was NOT inside a menu item
    if (!event.target.closest(".menu-item")) {
        // Close all dropdowns
        document.querySelectorAll(".dropdown").forEach(drop => {
            drop.style.display = "none";
        });
    }
});

// ===============================
// INTERNET BANKING DROPDOWN
// ===============================
document.addEventListener("DOMContentLoaded", function () {
    // Get IB box and its dropdown menu
    const ibButton = document.querySelector(".ib-group");
    const ibDropdown = document.querySelector(".ib-dropdown");
    // Open IB dropdown when clicked
    ibButton.addEventListener("click", function (event) {
        event.stopPropagation(); // Stop click from closing the menu
        ibDropdown.style.display =
            ibDropdown.style.display === "block" ? "none" : "block";
    });
    // Close dropdown when clicking outside of it
    document.addEventListener("click", function () {
        ibDropdown.style.display = "none";
    });
});

// ===============================
// LOGIN POPUP 
// ===============================
// Select popup elements
const loginButton = document.querySelector(".login-btn");       // Open button
const loginOverlay = document.getElementById("loginOverlay");   // Dark overlay
const closeLogin = document.getElementById("closeLogin");       // X button
// Open login popup
loginButton.addEventListener("click", function (event) {
    event.preventDefault();                // Stop link opening new page
    loginOverlay.style.display = "flex";   // Show popup
});

// Close popup when X is clicked
closeLogin.addEventListener("click", function () {
    loginOverlay.style.display = "none";
});

// Close popup when clicking outside the white box
loginOverlay.addEventListener("click", function (event) {
    if (event.target === loginOverlay) {
        loginOverlay.style.display = "none";
    }
});

// ===============================
// SEARCH BAR POPUP
// ===============================
// Select search icon and popup input
const searchIcon = document.querySelector(".search-icon");
const searchInline = document.getElementById("searchInline");
// Toggle search bar when icon is clicked
searchIcon.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent instant close
    // Show the search bar
    if (searchInline.style.display === "block") {
        searchInline.style.display = "none";
    } else {
        searchInline.style.display = "block";
        searchInline.querySelector("input").focus(); // Auto focus
    }
});

// Close search input when clicking outside
document.addEventListener("click", function () {
    searchInline.style.display = "none";
});