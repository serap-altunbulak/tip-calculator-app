const bill = document.querySelector('#bill-charge');
const people = document.querySelector('#people-count');
const tipPerPerson = document.querySelector('#total-tip-per-person');
const totalPerPerson = document.querySelector('#total-amount-per-person');

let tipValue = 0; 
let customValue = 0;

const tipAmount = function() { 
    let tipAmount;
    let total;

    if (customValue !== 0) {
        tipAmount = ((parseInt(customValue) * tipValue) / 100) / parseInt(people.value);
        total = (parseInt(customValue))/parseInt(people.value) + tipAmount;
    } else {
        tipAmount = ((parseInt(bill.value) * tipValue) / 100) / parseInt(people.value);
        total = (parseInt(bill.value))/parseInt(people.value)  + tipAmount;
    }
    tipAmount.toString().length > 5 ? tipAmount = tipAmount.toString().slice(0, 3) : null;
    total.toString().length > 5 ? total = total.toString().slice(0, 3) : null;

    tipPerPerson.textContent = `$${tipAmount}`;
    totalPerPerson.textContent = `$${total}`;
}

const resetButton = function() {
    tipPerPerson.textContent = "$0.00";
    totalPerPerson.textContent = "$0.00";
    bill.value = "0";
    people.value = "0";
}

const tip = function(e) {
    tipValue = parseInt(e.target.value);
}

const customSide = function(e) {
    customValue = e.target.value;
}

