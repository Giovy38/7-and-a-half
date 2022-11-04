const buttonCall = document.getElementById('call-card-button');
const buttonSection = document.getElementById('call-card-button-section');
buttonCall.addEventListener('click', cardCall);

const buttonStop = document.getElementById('stop-call-button');
buttonStop.addEventListener('click', cardStop);

let winner = 'player'

const cardsimg = [
    // oro
    '/assets/img/assooro.png',
    '/assets/img/dueoro.png',
    '/assets/img/treoro.png',
    '/assets/img/quattrooro.png',
    '/assets/img/cinqueoro.png',
    '/assets/img/seioro.png',
    '/assets/img/setteoro.png',
    '/assets/img/donnaoro.png',
    '/assets/img/cavallooro.png',
    '/assets/img/reoro.png',
    //  spade
    '/assets/img/assospade.png',
    '/assets/img/duespade.png',
    '/assets/img/trespade.png',
    '/assets/img/quattrospade.png',
    '/assets/img/cinquespade.png',
    '/assets/img/seispade.png',
    '/assets/img/settespade.png',
    '/assets/img/donnaspade.png',
    '/assets/img/cavallospade.png',
    '/assets/img/respade.png',
    // bastoni
    '/assets/img/assobastoni.png',
    '/assets/img/duebastoni.png',
    '/assets/img/trebastoni.png',
    '/assets/img/quattrobastoni.png',
    '/assets/img/cinquebastoni.png',
    '/assets/img/seibastoni.png',
    '/assets/img/settebastoni.png',
    '/assets/img/donnabastoni.png',
    '/assets/img/cavallobastoni.png',
    '/assets/img/rebastoni.png',
    // coppe
    '/assets/img/assocoppa.png',
    '/assets/img/duecoppa.png',
    '/assets/img/trecoppa.png',
    '/assets/img/quattrocoppa.png',
    '/assets/img/cinquecoppa.png',
    '/assets/img/seicoppa.png',
    '/assets/img/settecoppa.png',
    '/assets/img/donnacoppa.png',
    '/assets/img/cavallocoppa.png',
    '/assets/img/recoppa.png',
];

const cardsValue = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    0.5,
    0.5,
    0.5,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    0.5,
    0.5,
    0.5,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    0.5,
    0.5,
    0.5,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    0.5,
    0.5,
    0.5,
];

let totalPlayerScore = 0;
let totalComScore = 0;


changeCard();

function changeCard(){

    let maxCard = cardsimg.length;
    let random1 = Math.floor(Math.random() * maxCard);
    let random2 = Math.floor(Math.random() * maxCard);

    while(random1 === 0 || random2 === 0 || random1 === random2) {
        random1 = Math.floor(Math.random() * maxCard);
        random2 = Math.floor(Math.random() * maxCard);
    }


    setTimeout(function() {
        document.getElementById('com-first-card').src = cardsimg[random1];
        document.getElementById('player-first-card').src = cardsimg[random2];
        totalPlayerScore += cardsValue[random2];
        totalComScore += cardsValue[random1];
        cardsimg[random1] = 0;
        cardsimg[random2] = 0;
      }, 1700);
}





buttonSee();

function buttonSee(){
    setTimeout(function() {
        buttonSection.classList.remove('hidden');
      }, 3500);
}



function cardCall(){
    buttonSection.classList.add('hidden');

    let maxCard = cardsimg.length;
    let random1 = Math.floor(Math.random() * maxCard);

    while(cardsimg[random1] === 0){
        random1 = Math.floor(Math.random() * maxCard);
    }


    const card = document.createElement('img');
    card.src = cardsimg[random1];
    const playerTable = document.getElementById('table-container-player');
    playerTable.appendChild(card);

    totalPlayerScore += cardsValue[random1];
    cardsimg[random1] = 0;

    if(totalPlayerScore > 7.5){
        winner = 'com';
        winnerCheck();
    }


    setTimeout(function() {
        buttonSection.classList.remove('hidden');
      }, 3000);
}

function cardStop(){
    buttonSection.classList.add('hidden');

    while(totalComScore < totalPlayerScore && totalComScore < 7.5){
        let maxCard = cardsimg.length;
        let random1 = Math.floor(Math.random() * maxCard);
    
        while(random1 === 0){
            random1 = Math.floor(Math.random() * maxCard);
        }

    
        const card = document.createElement('img');
        card.src = cardsimg[random1];
        const playerTable = document.getElementById('table-container-com');
        playerTable.appendChild(card);
    
        totalComScore += cardsValue[random1];
        cardsimg[random1] = 0;
    }

    if(totalComScore > 7.5){
        winner = 'player';
    } else{
        winner = 'com';
    }

    setTimeout(function() {
        winnerCheck();
    }, 2000);
    
   

}

function winnerCheck(){

    const buttonDiv = document.getElementById('button-container');
    const winTitle = document.createElement('h1');
    const restartButton = document.createElement('button');
    winTitle.id = 'winner';
    restartButton.id = 'replay-button';
    if(winner === 'player') {
        winTitle.innerHTML = `Congratulations! You Win`;
    } else {
        winTitle.innerHTML = `So Sorry! You Lose`;
    }
    
    restartButton.innerHTML = 'Play Again';
    buttonDiv.appendChild(winTitle);
    buttonDiv.appendChild(restartButton);
    buttonCall.remove();
    buttonStop.remove();

    setTimeout(function() {
        buttonSection.classList.remove('hidden');
        restartButton.addEventListener('click', replay)
      }, 2000);
}

function replay(){
    console.log('done');
    location.reload();
    return false;
}