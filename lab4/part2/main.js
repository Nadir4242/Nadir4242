// main.js

// Step 1: Declare an array of image filenames
const imageFilenames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

// Step 2: Loop through the images
const thumbBar = document.querySelector('.thumb-bar');

for (let i = 0; i < imageFilenames.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/' + imageFilenames[i]);
    newImage.setAttribute('alt', 'Image ' + (i + 1));

    // Step 3: Adding a click event listener to each thumbnail image
    newImage.addEventListener('click', function () {
        document.querySelector('.displayed-img').setAttribute('src', 'images/' + imageFilenames[i]);
        document.querySelector('.displayed-img').setAttribute('alt', 'Image ' + (i + 1));
    });

    thumbBar.appendChild(newImage);
}

// Step 4: Writing a handler that runs the darken/lighten button
const btn = document.querySelector('.dark');
const overlay = document.querySelector('.overlay');

btn.addEventListener('click', function () {
    if (btn.getAttribute('class') === 'dark') {
        // Darken effect
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        // Lighten effect
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});

// End of main.js
