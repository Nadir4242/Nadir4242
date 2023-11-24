// main.js

// Step 3 - Variables and Functions
var customName = document.getElementById('customName'); // Reference to the customName text field
var randomize = document.querySelector('.randomize'); // Reference to the "Generate random story" button
var story = document.querySelector('.story'); // Reference to the <p> element for the story display

function randomValueFromArray(array){
    var random = Math.floor(Math.random()*array.length);
    return array[random];
}

/*
    COMMIT MESSAGE: Initial commit - added main.js with variable and function definitions
*/
// Step 4 - Storing Text Strings
var storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. " +
                "When they got to :inserty:, they stared in horror for a few moments, " +
                "then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: " +
                "weighs 300 pounds, and it was a hot day.";

var insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas']; // Array for insertX strings
var insertY = ['the soup kitchen', 'Disneyland', 'the White House']; // Array for insertY strings
var insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away']; // Array for insertZ strings

/*
    COMMIT MESSAGE: Added text strings to main.js
*/
// Step 5 - Event Listener and Incomplete Function
randomize.addEventListener('click', result);

/*
    COMMIT MESSAGE: Added event listener and incomplete result() function
*/
// Step 6 - Completing the result() Function
function result() {
    var newStory = storyText; // Copy of the initial story text

    var xItem = randomValueFromArray(insertX); // Random item from insertX array
    var yItem = randomValueFromArray(insertY); // Random item from insertY array
    var zItem = randomValueFromArray(insertZ); // Random item from insertZ array

    // Replace placeholders in the newStory string
    newStory = newStory.replace(':insertx:', xItem);
    newStory = newStory.replace(':inserty:', yItem);
    newStory = newStory.replace(':insertz:', zItem);

    // Check if a custom name is entered
    if(customName.value !== '') {
        newStory = newStory.replace('Bob', customName.value);
    }

    // Check if the UK radio button is selected
    if(document.getElementById("uk").checked) {
        var weight = Math.round(300 * 0.071429) + ' stone';
        var temperature = Math.round((94 - 32) * 5 / 9) + ' centigrade';

        // Replace temperature and weight in the newStory string
        newStory = newStory.replace('94 fahrenheit', temperature);
        newStory = newStory.replace('300 pounds', weight);
    }

    // Update the content of the story element
    story.textContent = newStory;
}

/*
    COMMIT MESSAGE: Completed the result() function in main.js
*/
// Added HTML Comments
/*
    COMMIT MESSAGE: Added HTML comments to main.js
*/
// End of main.js
