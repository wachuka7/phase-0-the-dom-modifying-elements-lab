//queryselector to get the id main, inside element main
// use remove to remove the id main
document.querySelector('main#main').remove();
// use createElement to create a h1 
//declare variable newHeader 
const newHeader= document.createElement('h1');
//setting the newHeader id as victory
newHeader.id = 'victory';
//setting a message in the h1, newHeader
newHeader.innerHTML = "Rachael is the champion 2024";