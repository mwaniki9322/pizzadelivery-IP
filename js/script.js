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

alert(newdets.firstname)



    })
})