let cards
while (Number(cards)%2 !== 0 || Number(cards) < 4 || Number(cards) > 14){
    cards = prompt("Com quantas quer jogar? Precisa ser um número par entre 4 e 14.");
}
const img = ["image_1","image_2","image_3","image_4","image_5","image_6","image_7"];
let choice = [];
for (let i = 0; i < cards/2; i++){
    choice.push(img[i]);
    choice.push(img[i]);
}
function shuffle(array){
    let iter = array.length;
    let z = [];
    for (let i = 0; i < iter; i++){
        random = Math.ceil(Math.random()*array.length)-1
        z.push(array[random])
        array.splice(random, 1)
        }
    return z;
}
choice = shuffle(choice);
const main = document.querySelector('main');
for (let i = 0; i < cards; i++){
    main.children[i].classList.add("cards");
    main.children[i].innerHTML = choice[i];
};
let clicks = 0;
let plays = 0;
let card_choice = ""; 
let card_button = "";
function click_choice(value){
    plays++;
    value.classList.toggle(value.innerHTML);
    if (clicks === 0){
        card_choice = value.innerHTML;
        card_button = value;
        clicks++;
        return
    } else if (card_button === value){
        plays--;
        return
    } else if (card_choice === value.innerHTML){
        card_button.classList.toggle("card_gotcha");
        value.classList.toggle("card_gotcha");
        card_button.disabled = true;
        value.disabled = true;
    } else{
        setTimeout(wrong_choice, 1000, value, card_button);
    }
    clicks = 0;
    card_choice = "";
    card_button = "";
    finish(plays);
    return
}

function wrong_choice(card1,card2){
    card1.classList.toggle(card1.innerHTML);
    card2.classList.toggle(card2.innerHTML);
}

function finish(plays){
    let list_finish = [];
    for (let i = 0; i < cards; i++){
        list_finish.push(main.children[i].classList.contains("card_gotcha"));
    };
    if(list_finish.every(Boolean)){
        alert(`Você ganhou em ${plays} jogadas!`)
    }
}