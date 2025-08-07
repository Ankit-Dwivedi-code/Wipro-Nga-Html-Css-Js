
// we will use https://dog.ceo/api/breeds/image/random to fetch a random dog image
async function getRandomDogImage() {
    const dogImageContainer = document.getElementById('dogImageContainer');
    dogImageContainer.innerHTML = 'Loading...';
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        dogImageContainer.innerHTML = `<img src="${data.message}" alt="Random Dog" />`;
    } catch (error) {
        dogImageContainer.innerHTML = 'Failed to load image.';
    }
}

document.getElementById('fetchDogBtn').addEventListener('click', getRandomDogImage);