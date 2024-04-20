const section = document.querySelector("section");
const cardsCount =document.querySelector("span");
let cards = 6;

cardsCount.textContent = cards;
const getData = () => [
    {imgSrc: "https://media.istockphoto.com/id/1804939186/vector/koalla-bouquet-of-eucalyptus-leaves-watercolor-clipart-cartoon-style-on-an-isolated.jpg?s=612x612&w=0&k=20&c=A0b3w3Xzatuirb1mpYfbVCNUjLtOrthF1oWQ0oOHIpw=", name:"koala"},
    {imgSrc: "https://media.istockphoto.com/id/907874662/vector/vector-flat-cute-brown-owl-sitting-on-branch-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=Xl13RMegwoRoZVLLc5r9NL27LIIOvvtFBVEtwTfpVgE=", name:"owl"},
    {imgSrc: "https://media.istockphoto.com/id/1886966663/vector/cute-giraffe-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=PSNaxWOVuul7_Gbx1Z2ZVUUahWhC3gV1ODNXodMMzHo=", name:"giraffe"},
    {imgSrc: "https://media.istockphoto.com/id/1389022834/vector/watercolor-illustration-of-a-cute-cartoon-elephant-cute-tropica.jpg?s=612x612&w=0&k=20&c=JN2CiwWYdEc-Gka5eea2MZxL1vAO8oDdm2la161G9HY=", name:"elephant"},
    {imgSrc: "https://media.istockphoto.com/id/2070149496/vector/cute-doodle-baby-turtle.jpg?s=612x612&w=0&k=20&c=pmiIMlSFbva-WOV5YgEtID4V8VWfoOvSxh7C5g3Eet4=", name:"turtle"},
    {imgSrc: "https://media.istockphoto.com/id/1909517790/vector/cute-calf-isolated-on-white-background-vector-little-spotted-cow-simple-illustration-of.jpg?s=612x612&w=0&k=20&c=PESY-aGqgqg0Ox3CUj-fiAhIf9xqg8_EZoNv9zt1QOw=", name:"cow"},
    {imgSrc: "https://media.istockphoto.com/id/995810872/vector/cartoon-happy-bee-waving-hand.jpg?s=612x612&w=0&k=20&c=d9HmXLDVFDFmkcZZJ0Jn5teisd3GE-SIcj71_mwiTRM=", name:"honeybee"},
    {imgSrc: "https://media.istockphoto.com/id/1680047056/vector/monkey-singing-on-jungle-vines-with-banana-cartoon.jpg?s=612x612&w=0&k=20&c=5AX662MrefEXjWhFIQfSJy0gHgTsUvKB5sbaEvTBXak=", name:"monkey"},
    {imgSrc: "https://media.istockphoto.com/id/1804939186/vector/koalla-bouquet-of-eucalyptus-leaves-watercolor-clipart-cartoon-style-on-an-isolated.jpg?s=612x612&w=0&k=20&c=A0b3w3Xzatuirb1mpYfbVCNUjLtOrthF1oWQ0oOHIpw=", name:"koala"},
    {imgSrc: "https://media.istockphoto.com/id/907874662/vector/vector-flat-cute-brown-owl-sitting-on-branch-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=Xl13RMegwoRoZVLLc5r9NL27LIIOvvtFBVEtwTfpVgE=", name:"owl"},
    {imgSrc: "https://media.istockphoto.com/id/1886966663/vector/cute-giraffe-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=PSNaxWOVuul7_Gbx1Z2ZVUUahWhC3gV1ODNXodMMzHo=", name:"giraffe"},
    {imgSrc: "https://media.istockphoto.com/id/1389022834/vector/watercolor-illustration-of-a-cute-cartoon-elephant-cute-tropica.jpg?s=612x612&w=0&k=20&c=JN2CiwWYdEc-Gka5eea2MZxL1vAO8oDdm2la161G9HY=", name:"elephant"},
    {imgSrc: "https://media.istockphoto.com/id/2070149496/vector/cute-doodle-baby-turtle.jpg?s=612x612&w=0&k=20&c=pmiIMlSFbva-WOV5YgEtID4V8VWfoOvSxh7C5g3Eet4=", name:"turtle"},
    {imgSrc: "https://media.istockphoto.com/id/1909517790/vector/cute-calf-isolated-on-white-background-vector-little-spotted-cow-simple-illustration-of.jpg?s=612x612&w=0&k=20&c=PESY-aGqgqg0Ox3CUj-fiAhIf9xqg8_EZoNv9zt1QOw=", name:"cow"},
    {imgSrc: "https://media.istockphoto.com/id/995810872/vector/cartoon-happy-bee-waving-hand.jpg?s=612x612&w=0&k=20&c=d9HmXLDVFDFmkcZZJ0Jn5teisd3GE-SIcj71_mwiTRM=", name:"honeybee"},
    {imgSrc: "https://media.istockphoto.com/id/1680047056/vector/monkey-singing-on-jungle-vines-with-banana-cartoon.jpg?s=612x612&w=0&k=20&c=5AX662MrefEXjWhFIQfSJy0gHgTsUvKB5sbaEvTBXak=", name:"monkey"},
    
];
//randomize 

const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5);
    return cardData; 
};
randomize();

const cardGenerator = () => {
    const cardData = randomize();

 //HTML, appendchild  start here
    
    cardData.forEach((item) => {
      const card = document.createElement("div");
      card.classList = "card";
      section.appendChild(card);

      const front = document.createElement("img");
      front.classList = "front";
      card.appendChild(front);
      
      const back = document.createElement("div");
      back.classList = "back";
      card.appendChild(back);

    front.src = item.imgSrc; // image source is here
    card.setAttribute("name", item.name);
  
    //toggle effect 
    
    card.addEventListener('click', (e) => {
       card.classList.toggle('toggleCard');
       checkCards(e);
      });
 });    

};
//test cards
    
    const checkCards = (e) => {
    console.log(e);
   
   //flipped effect 

    const clickedCard = e.target;
      clickedCard.classList.add("flipped");
    
    const flippedCards = document.querySelectorAll(".flipped");
    console.log(flippedCards);

    const toggleCard = document.querySelectorAll("toggleCard");
    
    //if / else start here
   
     if(flippedCards.length === 2) {
        if(
            flippedCards[0].getAttribute("name") === 
            flippedCards[1].getAttribute("name") 
        ){
        console.log("match");
            flippedCards.forEach((card) => {
               card.classList.remove("flipped");
               card.style.pointerEvents = "none";
        });
         } else{
              
          console.log("wrong");
            flippedCards.forEach((card) => {
               card.classList.remove("flipped");
               setTimeout(() => card.classList.remove("toggleCard"), 1000);
           
            });
            cards--;
            cardsCount.textContent = cards;
            if(cards === 0){
                restart("Please try again");
            }
       }
     } 
    if (toggleCard.length === 16) {
        restart("You Won");
    }
    };
//restart the game 
    const restart = () => {
        let cardData = rendomize();
        let faces = document.querySelectorAll(".front");
        let cards = document.querySelectorAll(".card");

        section.style.pointerEvents ="none";
        cardData.forEach((item,index) => {
            cards[index].classList.remove("toggleCard");
            
            setTimeout(() => {
                
            cards[index].style.pointerEvents = "all";
            faces[index].src = item.imgSrc;
            cards[index].setAttribute("name", item.name);
            section.style.pointerEvents = "all";
        }, 1000);
        });
        cards = 6;
        cardsCount.textContent = cards;
        setTimeout(() => window.alert(text), 100);
    };





    
    cardGenerator();
