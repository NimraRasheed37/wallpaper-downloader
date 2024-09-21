// Get the elements
const images = document.querySelectorAll('.image');
const overlay = document.getElementById('fullscreen-overlay');
const fullscreenImg = document.getElementById('fullscreen-img');
const closeBtn = document.getElementById('close-btn');
const downloadBtn = document.getElementById('download-btn');
const likeButtons = document.querySelectorAll('.like-btn');

// Loop through the images and add click event listeners
images.forEach(image => {
    image.addEventListener('click', () => {
        fullscreenImg.src = image.src;
        downloadBtn.href = image.src; // Set the download link to the image source
        overlay.style.display = 'flex';
    });
});

// Add click event listener to the close button
closeBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
});

// Optional: Close the overlay if user clicks outside the image
overlay.addEventListener('click', (e) => {
    if (e.target !== fullscreenImg && e.target !== closeBtn && e.target !== downloadBtn) {
        overlay.style.display = 'none';
    }
});


// Add click event listener to each like button
likeButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('liked'); // Toggle the "liked" class
    });
});
