document.addEventListener("DOMContentLoaded", function() {
    // Add this code to your existing script.js file or create a new script.js file

    // Get the input element and image element by their IDs
    const imageUpload = document.getElementById('image-upload');
    const previewImage = document.getElementById('preview-image');

    // Add event listener for image upload
    imageUpload.addEventListener('change', function(e) {
        // Get the selected file
        const file = e.target.files[0];

        // Check if a file is selected
        if (file) {
            // Create a FileReader object to read the file
            const reader = new FileReader();

            // Set the onload event for the FileReader object
            reader.onload = function(event) {
                // Set the source of the image element to the data URL
                previewImage.src = event.target.result;
            };

            // Read the selected file as a data URL
            reader.readAsDataURL(file);
        }
    });

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        });
    });


    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();

    });
});