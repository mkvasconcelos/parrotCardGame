const main = document.querySelector('main');
const header = document.querySelector('header');
let list = game();

function game(){
    let list_image = start_game();
    const cards = list_image[0];
    let choice = list_image[1];;
    const timerInterval = setInterval(timer, 1000);
    let clicks = 0;
    let plays = 0;
    let card_choice = ""; 
    let card_button = "";
    let list = [cards, clicks, plays, card_choice, card_button, timerInterval, choice];
    return list;
}

function start_game(){
    let cards = 0;
    while (Number(cards)%2 !== 0 || Number(cards) < 4 || Number(cards) > 14){
        cards = prompt("Com quantas quer jogar? Precisa ser um número par entre 4 e 14.");
    }
    let choice = images_chosen(cards);
    choice = shuffle(choice);
    for (let i = 0; i < cards; i++){
        main.children[i].classList.add("cards");
        main.children[i].innerHTML = choice[i];
    };
    let list = [cards, choice];
    return list;
}
function images_chosen(cards){
    const img = ["image_1","image_2","image_3","image_4","image_5","image_6","image_7"];
    let choice = [];
    for (let i = 0; i < cards/2; i++){
        choice.push(img[i]);
        choice.push(img[i]);
    }
    return choice;
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

function click_choice(value,list){
    list[2]++;
    value.classList.toggle(value.innerHTML);
    if (list[1] === 0){
        list[4] = value.innerHTML;
        list[5] = value;
        list[1]++;
        return
    } else if (list[5] === value){
        list[2]--;
        return
    } else if (list[4] === value.innerHTML){
        list[5].classList.toggle("card_gotcha");
        value.classList.toggle("card_gotcha");
        list[5].disabled = true;
        value.disabled = true;
    } else{
        setTimeout(wrong_choice, 1000, value, list[5]);
    }
    list[1] = 0;
    list[4] = "";
    list[5] = "";
    finish(list[2],list[0],list[5],list[6]);
    return
}
function wrong_choice(card1,card2){
    card1.classList.toggle(card1.innerHTML);
    card2.classList.toggle(card2.innerHTML);
}
function finish(plays,cards,timerInterval,choice){
    const header = document.querySelector('header');
    let time = header.children[1].children[1];
    let list_finish = [];
    for (let i = 0; i < cards; i++){
        list_finish.push(main.children[i].classList.contains("card_gotcha"));
    };
    if(list_finish.every(Boolean)){
        alert(`Você ganhou em ${plays/2} jogadas em ${time.innerText} segundos!`)
        restart(timerInterval,cards,choice);
    }
}
function timer(){
    let time = header.children[1].children[1];
    time.innerText++;
}

function restart(timerInterval,cards,choice){
    clearInterval(timerInterval);
    let restart = prompt("Quer jogar novamente?");
    restart = restart.toLowerCase();
    if (restart === "sim"){
        for (let i = 0; i < cards; i++){
            main.children[i].classList.remove('cards');
            main.children[i].classList.remove('card_gotcha');
            main.children[i].classList.remove(choice[i]);
            main.children[i].disabled = false;
            main.children[i].innerHTML = "";
        };
        header.children[1].children[1].innerText = 0;
        list = game();
    }
    return list;
}