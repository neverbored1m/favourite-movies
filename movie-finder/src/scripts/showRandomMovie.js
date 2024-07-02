async function showRandomMovie() {
    try {
        const variablea = await fetch('./data/favmovies.json');
        const variableb = await variablea.json();

        const randomMovie = getRandomItem(variableb);
        document.getElementById('movieName').textContent = 'Name: ' + randomMovie.title;
        document.getElementById('movieNotes').textContent = `Note: ${randomMovie.category}`;

        // Popcorn confetti effect
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#FFD700', '#FFA500', '#FF4500', '#FFFFFF'],
            shapes: ['circle'],
            scalar: 1.2,
        });
    } catch (error) {
        console.error('Error fetching movies data:', error);
    }
}

function getRandomItem(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}
