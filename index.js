// Code your solutions in this file
const signedCards = [];

function writeCards(names, eventName){
    for(let i = 0; i < names.length; i++){
        signedCards.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return signedCards;


}


function countDown(posInt){
    if(posInt < 0){
        return "you must input a positive number.";
    }
    else{
        while(posInt>=0){
            console.log(posInt);
            posInt--;
        }
    }
}