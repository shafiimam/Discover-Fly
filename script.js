// document.getElementById('f-ticket-increase').addEventListener('click', function() {
//     const ticketInput = document.getElementById('f-ticket-count');
//     const ticketCount = parseInt(ticketInput.value);
//     const ticketNewCount = ticketCount + 1;
//     ticketInput.value = ticketNewCount;
// });

// document.getElementById('f-ticket-decrease').addEventListener('click', function() {
//     const ticketInput = document.getElementById('f-ticket-count');
//     const ticketCount = parseInt(ticketInput.value);
//     const ticketNewCount = ticketCount - 1;
//     ticketInput.value = ticketNewCount;
// })
// function handleTicketChange(isIncrease) {
//     const ticketInput = document.getElementById('f-ticket-count');
//     const ticketCount = parseInt(ticketInput.value);
//     let ticketNewCount = 0;
//     if (isIncrease == true) {
//         ticketNewCount = ticketCount + 1;
//     }
//     if (isIncrease == false && ticketCount > 0) {
//         ticketNewCount = ticketCount - 1;
//     }
//     ticketInput.value = ticketNewCount;
// }

function handleTicketChange(isIncrease, ticketType) {
    const ticketCount = getInputValue(ticketType);
    let ticketNewCount = 0;
    if (isIncrease == true) {
        ticketNewCount = ticketCount + 1;
    }
    if (isIncrease == false && ticketCount > 0) {
        ticketNewCount = ticketCount - 1;
    }
    document.getElementById(ticketType + '-ticket-count').value = ticketNewCount;
    getTotal();
}

function getInputValue(ticketType) {
    const ticketInput = document.getElementById(ticketType + '-ticket-count');
    const ticketCount = parseInt(ticketInput.value);
    return ticketCount;
}

function getTotal() {
    const firstClassCount = getInputValue('firstClass');
    const economyCount = getInputValue('economy');
    const subTotal = firstClassCount * 150 + economyCount * 100;
    document.getElementById('subTotalAmount').innerText = subTotal;

    const vat = subTotal * 0.1;
    const total = subTotal + vat;
    document.getElementById('vatAmount').innerText = vat;
    document.getElementById('totalAmount').innerText = total;
}


function confirmation() {
    // grabbing all the necessary element
    const from = document.getElementById('flying-from').value;
    const to = document.getElementById('flying-to').value;
    const departureDate = document.getElementById('departure-date').value;
    const returnDate = document.getElementById('returning-date').value;
    const firstClass = getInputValue('firstClass');
    const economyClass = getInputValue('economy');
    const total = parseInt(document.getElementById('totalAmount').innerText);
    // setting the values to confirmation page
    document.getElementById('from').innerText = 'From - ' + from;
    document.getElementById('to').innerText = 'To - ' + to;
    document.getElementById('depart-date').innerText = 'Departure Date - ' + departureDate;
    if (document.getElementById('returning-date').value != "") {
        document.getElementById('return-date').innerText = 'Return Date - ' + returnDate;
    }
    if (firstClass == 0 && economyClass > 0) {
        document.getElementById('ticket-type').innerText = 'Economy Class x' + economyClass;
    } else if (economyClass == 0 && firstClass > 0) {
        document.getElementById('ticket-type').innerText = 'First Class x' + firstClass;
    } else {
        document.getElementById('ticket-type').innerText = 'First Class x' + firstClass + '\nEconomy Class x' + economyClass;
    }
    document.getElementById('total-price').innerText = 'Total Price - $' + total;
    if (from == '' || to == '' || departureDate == '') {
        alert('Enter required values first');
    } else {
        if (firstClass == 0 && economyClass == 0) {
            alert('Enter number of ticket please!')
        } else {
            document.getElementById('containerMain').style.display = 'none';
            document.getElementById('confirmation').style.display = 'block';
        }

    }


}