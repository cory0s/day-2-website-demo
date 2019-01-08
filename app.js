var kids = prompt('How many kids do you have?');
console.log('number of kids:', kids);

var guitars = prompt('How many guitars do you have?');
console.log('number of guitars:', guitars);

if (kids === '3' || kids === '4'){
    alert('correct, too many kids');
}

if(parseInt(kids) === 3 && parseInt(guitars) === 3){
    alert('yeah, you are right');
}else{
    alert('you are wrong');
}