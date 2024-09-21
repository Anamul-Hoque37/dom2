console.log('second js')

document.getElementById('cash-out-amount').addEventListener('click', function(event){
    event.preventDefault();

    const cashOutMoney = document.getElementById('input-cash-out-amount').value;
    const cashOutMoneyNumber = parseFloat(cashOutMoney);

    const inputPin = document.getElementById('input-cash-out-pin').value;
    const inputPinNumber = parseFloat(inputPin);

    const balance = document.getElementById('balance-amount').innerText;
    const newBalance = parseFloat(balance);

    const remainingBalance = newBalance - cashOutMoneyNumber;

    if(inputPinNumber === 1234){
        console.log(remainingBalance);
        document.getElementById('balance-amount').innerText = remainingBalance;

        // const div = document.createElement('div');
        // div.classList.add('bg-yellow-100')
        // div.innerHTML = `
        // <h1 class="text-3xl font-semibold">Cash Out</h1> 
        // <p>withdraw: ${cashOutMoneyNumber} TK. New Balance: ${remainingBalance}</p>`
        // document.getElementById('transaction-container').appendChild(div);
        // console.log(div);


        const p = document.createElement('p');
        p.innerText = `withdraw: ${cashOutMoneyNumber} TK. New Balance: ${remainingBalance}`
        document.getElementById('transaction-container').appendChild(p);
        
    }
    else{
        alert('Invalid Pin Number');
    }

})