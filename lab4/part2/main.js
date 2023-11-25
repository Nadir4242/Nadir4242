const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFilenames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Looping through images */
for (let i = 0; i < imageFilenames.length; i++) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/' + imageFilenames[i]);
  newImage.setAttribute('alt', 'A description for image ' + (i + 1));

  /* Adding a click event listener to each thumbnail image */
  newImage.addEventListener('click', function () {
    // Set the src attribute value of the displayed-img <img> to the clicked image
    displayedImage.setAttribute('src', this.getAttribute('src'));

    // Set the alt attribute value of the displayed-img <img> to the alt of the clicked image
    displayedImage.setAttribute('alt', this.getAttribute('alt'));
  });

  thumbBar.appendChild(newImage);
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', function () {
  if (btn.getAttribute('class') === 'dark') {
    // Darken effect
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  } else {
    // Lighten effect
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
  }
});