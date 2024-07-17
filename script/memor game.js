const cards = [
    'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 
    'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H'
];

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

let selectedCards = [];
let matchedCards = [];

function createBoard() {
    const gameBoard = document.getElementById('gameBoard');
    shuffle(cards);

    cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.dataset.value = card;
        cardElement.addEventListener('click', flipCard);
        gameBoard.appendChild(cardElement);
    });
}

function flipCard() {
    if (selectedCards.length < 2 && !this.classList.contains('matched') && !this.classList.contains('flipped')) {
        this.textContent = this.dataset.value;
        this.classList.add('flipped');
        selectedCards.push(this);

        if (selectedCards.length === 2) {
            setTimeout(checkMatch, 1000);
        }
    }
}

function checkMatch() {
    const [card1, card2] = selectedCards;

    if (card1.dataset.value === card2.dataset.value) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        matchedCards.push(card1, card2);
    } else {
        card1.textContent = '';
        card2.textContent = '';
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
    }

    selectedCards = [];

    if (matchedCards.length === cards.length) {
        alert('You win!');
    }
}

createBoard();
