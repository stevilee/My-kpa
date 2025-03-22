// Select toggle button and sidebar
const toggleButton = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");
const mainContent = document.querySelector(".main-content");

// Toggle sidebar on button click
toggleButton.addEventListener("click", function() {
    sidebar.classList.toggle("collapsed");
});
