function ageInDays() {
    var birhhyear = prompt('What is your year of birth?');
    var ageInDays = (2020 - birhhyear) * 365;
    console.log(ageInDays);
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInDays + ' days');
    console.log(textAnswer);
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);

    document.getElementById('flex-result').appendChild(h1);




}
function reset() {
    document.getElementById('ageInDays').remove();
    
     
    
}