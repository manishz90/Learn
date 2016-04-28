
$(document).ready(function(){

    alert('hi');
    console.log('Hello, my name is abc');

});





function myFunction(p1, p2) {
    return p1 * p2;              // The function returns the product of p1 and p2
}
var Person = {
    firstName : 'Fred',
    sayName : function() {
        console.log('Hello, my name is ' + this.firstName);
    }
};

Person.sayName(); //note no blank line at the end of the file
