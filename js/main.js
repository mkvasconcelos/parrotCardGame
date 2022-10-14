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
    main.querySelectorAll(':scope > button')[i].classList.add("cards");
    main.querySelectorAll(':scope > button')[i].classList.add(choice[i]);  
}