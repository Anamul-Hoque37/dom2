console.log('First js');

document.getElementById('add-amount').addEventListener('click', function(event){
    event.preventDefault();

    const addMoney = document.getElementById('input-your-amount').value;
    const addMoneyNumber = parseFloat(addMoney);

    const inputPin = document.getElementById('input-your-pin').value;
    const inputPinNumber = parseFloat(inputPin);

    const balance = document.getElementById('balance-amount').innerText;
    const newBalance = parseFloat(balance);

    const remainingBalance = newBalance + addMoneyNumber;

    if(inputPinNumber=== 1234 && addMoneyNumber > 0 && typeof(addMoneyNumber) ==='number'){
        console.log(remainingBalance);
        document.getElementById('balance-amount').innerText = remainingBalance;

        const p = document.createElement('p');
        p.innerText = `added: ${addMoneyNumber} TK. New Balance: ${remainingBalance}`
        document.getElementById('transaction-container').appendChild(p);
        
    }
    else{
        alert('Invalid Pin Number');
    }

})