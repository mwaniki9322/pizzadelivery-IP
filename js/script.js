//your details constructors

function details(first,last,email,tel){
    this.firstname=first;
    this.lastname=last;
    this.email=email;
    this.tel=tel;
}
$(document).ready(function(){
    $('form').submit(function(event){
        event.preventDefault();

//gather user input
var firstnameinput=$('#fname').val();
var lastnameinput=$('#sname').val();
var emailinput=$('#email').val();
var telinput=$('#tel').val();

var newdets=new details(firstnameinput,lastnameinput,emailinput,telinput);




//gather user pizza details
var pizzaprice=0;
var toppingsprice=0;
var crustprice=0;

var size=$('#size').val();
var flavour=$('#flavour').val();
var crust=$('#crust').val();
var toppings=$('#toppings').val();

if(size==='Small'){
    pizzaprice +=300;
}
else if
(size==='Medium'){
    pizzaprice +=600;
}
else if
(size==='Large'){
    pizzaprice+=1200;
}

//toppings price depending on size

if(size==='Small'){
toppingsprice +=70;
}
else if
(size==='Medium'){
    toppingsprice +=100;
}
else if
(size==='Large'){
    toppingsprice+=120;
}

alert(toppingsprice)

    })
})