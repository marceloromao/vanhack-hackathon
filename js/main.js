'use strict';

// Set variable
var price_diff = 0;


/* Functions */

// Calculate difference between competitor price
function diff(){

    var our_cost = document.getElementById("our_cost").innerHTML;
    var their_cost = document.getElementById("their_cost").value;

    // Replace comma to dot
    our_cost = Number(our_cost.replace(/,/g, '.'));
    their_cost = Number(their_cost.replace(/,/g, '.'));

    price_diff = their_cost - our_cost;

    calculate(document.getElementById('months').value);

}

// When fisrt slide change
function sliders(users, months){

    var display = document.getElementById("users_show");
    display.innerHTML =  users.toString();

    calculate(months);
}

// Function for final values
function calculate(months){

    var result = document.getElementById('result');
    var months_show = document.getElementById('months_show');
    var users = document.getElementById('users').value;

    // Main calc
    var calc = (price_diff*users)*months;

    var saved = (calc);
    if (saved < 0){
        result.innerHTML = 0;
    } else {
        result.innerHTML = (calc).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    months_show.innerHTML = months;
}

// Initial call
diff();