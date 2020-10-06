const game = () => {
    let pScore = 0;
    let cScore = 0;

    //start the game
    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introscreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () => {
            introscreen.classList.add('fadeOut');
            match.classList.add('fadeIn')
        });
    };
    //play match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img')

        hands.forEach(hand => {
            hand.addEventListener('animationend', function () {
                this.style.animation = '';
            });
        });
        //computer option
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach(options => {
            options.addEventListener('click', function () {



                //computer option
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                setTimeout(() => {
                    //here is where we call compare hands
                    compareHands(this.textContent, computerChoice);



                    //update image
                    playerHand.src = `./assets/${this.textContent}.png`;
                    computerHand.src = `./assets/${computerChoice}.png`;
                }, 2000);

                //animation
                playerHand.style.animation = "shakeplayer 2s ease";
                computerHand.style.animation = "shakecomputer 2s ease"


            });


        });
    };

    const updateScore = () => {
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };



    const compareHands = (playerchoice, computerChoice) => {
        //update text
        const winner = document.querySelector(".winner");
        // we are checking for tie
        if (playerchoice === computerChoice) {
            winner.textContent = 'It is a Tie';
            return;
        }

        //check for rock
        if (playerchoice === 'rock') {
            if (computerChoice === 'scissors') {
                winner.textContent = 'player Wins';
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'computer wins';
                cScore++;
                updateScore();
                return;
            }

        }
        //check for paper
        if (playerchoice === 'paper') {
            if (computerChoice === 'scissors') {
                winner.textContent = 'computer Wins';
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'player wins';
                pScore++;
                updateScore();
                return;
            }

        }
        //check for scissors
        if (playerchoice === 'scissors') {
            if (computerChoice === 'rock') {
                winner.textContent = 'computer Wins';
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'player wins';
                pScore++;
                updateScore();
                return;
            }

        }

    };
    //call all the inner function
    startGame();
    playMatch();
};

// start game function
game();

