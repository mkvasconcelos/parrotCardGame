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
    // main.querySelectorAll(':scope > button')[i].classList.add("cards");
    main.children[i].classList.add("cards");
    main.children[i].innerHTML = choice[i];
};
let clicks = 0;
let card_choice = ""; 
let card_button = "";
function click_choice(value){
    value.classList.toggle(value.innerHTML);
    console.log(clicks, card_button, card_choice);
    if (clicks === 0){
        card_choice = value.innerHTML;
        card_button = value;
        clicks++;
        return
    } else if (card_choice === value.innerHTML){
        card_button.classList.add("card_gotcha");
        value.classList.add("card_gotcha");
    } else{
        card_button.classList.toggle(value.innerHTML);
        value.classList.toggle(value.innerHTML);
    }
    clicks = 0;
    card_choice = "";
    card_button = "";
    return
}