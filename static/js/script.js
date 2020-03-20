//challenge 1:your age in days
function ageInDays(){
    var birthyear= prompt('what year were you born...good friend!!');
    var ageInDays=(2020-birthyear)*365;
    var h1=document.createElement('h1');
    var textAnswer=document.createTextNode("You are "+ ageInDays + ' days old');
    h1.setAttribute("id", 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function Reset(){
    document.getElementById('ageInDays').remove();
}
