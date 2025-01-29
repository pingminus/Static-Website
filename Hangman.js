document.addEventListener('DOMContentLoaded', function() {
    let searchedWord = '';
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const keyboard = document.getElementById('keyboard');
    const wordDisplay = document.getElementById('wordDisplay');
    let tries = 0;

    function displayWord(word) {
        wordDisplay.textContent = '';
        word.split('').forEach(letter => {
            const span = document.createElement('span');
            span.classList.add('letter');
            span.textContent = '_';
            wordDisplay.appendChild(span);
        });
    }

    function updateWordDisplay(letter) {
        const spans = wordDisplay.querySelectorAll('.letter');
        searchedWord.split('').forEach((char, index) => {
            if (char === letter) {
                spans[index].textContent = letter;
            }
        });
    }

    letters.split('').forEach(letter => {
        const button = document.createElement('button');
        button.classList.add('key');
        button.textContent = letter;

        button.addEventListener('click', () => {
            button.classList.add('clicked');
            let clickedLetter = button.textContent.toLowerCase();
            if (searchedWord.includes(clickedLetter)) {
                updateWordDisplay(clickedLetter);
            } else {
                tries++;
                document.getElementById("tries").innerText = tries
            }
            if (tries == 7) {
                alert("You lost!");
                location.reload();
            }
            if (wordDisplay.textContent === searchedWord) {
                alert("You won!");
                location.reload();
            }
        });
        keyboard.appendChild(button);
    });

    let j = 0;
    let i = Math.floor(Math.random() * 500);
    // Fetch and read the text file
    fetch('wordlist.txt')
        .then(response => response.text())
        .then(data => {
            const lines = data.split('\n');
            lines.forEach(line => {
                j++;
                if (j == i) {
                    searchedWord = line.trim().toLowerCase();
                    console.log('Selected word:', searchedWord);
                    displayWord(searchedWord);
                }
            });
        })
        .catch(error => console.error('Error fetching the file:', error));
});