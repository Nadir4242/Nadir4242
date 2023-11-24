const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

const storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
const insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

randomize.addEventListener('click', result);

function result() {
  let newStory = generateStory();

  if (customName.value !== '') {
    const name = customName.value;
    newStory = replaceName(newStory, name);
  }

  if (document.getElementById("uk").checked) {
    newStory = convertUnits(newStory);
  }

  displayStory(newStory);
}

function generateStory() {
  let newStory = storyText;
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(':insertx:', xItem);
  newStory = newStory.replaceAll(':inserty:', yItem);
  newStory = newStory.replaceAll(':insertz:', zItem);

  return newStory;
}

function replaceName(story, name) {
  return story.replaceAll('Bob', name);
}

function convertUnits(story) {
  const weight = `${Math.round(300 * 0.0714286)} stone`;
  const temperature = `${Math.round((94 - 32) * 5 / 9)} centigrade`;

  story = story.replaceAll('94 fahrenheit', temperature);
  story = story.replaceAll('300 pounds', weight);

  return story;
}

function displayStory(newStory) {
  story.textContent = newStory;
  story.style.visibility = 'visible';
}
