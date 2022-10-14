let cards

while (Number(cards)%2 !== 0 || Number(cards) < 4 || Number(cards) > 14){
    cards = prompt("Com quantas quer jogar? Precisa ser um número par entre 4 e 14.");
}

const main = document.querySelector('main');

for (let i = 0; i < cards; i++){
    main.querySelectorAll(':scope > div')[i].classList.add("cards");
}