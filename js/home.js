// console.log('Home file connected or not!!!') ;

// Add money feature
const validPin = 1234 ;
document.getElementById('btn_add_money').addEventListener('click', function(e){
    //console.log('Add money button clicked');
    e.preventDefault();
    //console.log('Add money button clicked');

    const addBank= document.getElementById('add_bank').value ;
    const addAccountNumber = document.getElementById('add_account_number').value ;
    const addAmount =parseInt(document.getElementById("add_amount").value) ;
    const addPin = parseInt(document.getElementById('add_pin').value) ;
    //console.log(addBank,addAccountNumber, addAmount, addPin ) ;

    const addAvailableBalance = parseInt(document.getElementById('add_available_balance').innerText) ;
    //console.log(addAvailableBalance) ;

    if(addAccountNumber.length < 11){
        alert('Please provide a valid account number') ;
        return ;
    }
    else if(addPin !== validPin){
        alert('Please provide a valid pin number') ;
        return ;
    }
    // else if( addAmount){
    //     alert('Please provide a valid amount') ;
    //     return ;
    // }
    const addAddAvailableBalance = addAmount + addAvailableBalance ;

    document.getElementById('add_available_balance').innerText = addAddAvailableBalance ; 

    document.getElementById('add_bank').value = '' ;
    document.getElementById('add_account_number').value = '' ;
    document.getElementById("add_amount").value = '' ;
    document.getElementById('add_pin').value = '';
 }) ;

 // Cash out feature

 document.getElementById('btn_cash_out').addEventListener('click', function(e){
    e.preventDefault();
    //console.log('Cash out button clicked');

    const cashOutAgentPhoneNumber = document.getElementById('cash_out_agent_phone_number').value;
    const cashOutAmount = parseInt(document.getElementById('cash_out_amount').value);
    const cashOutPinNumber = parseInt(document.getElementById('cash_out_pin_number').value);
    //console.log(cashOutAgentPhoneNumber, cashOutAmount, cashOutPinNumber)

    const addAvailableBalance = parseInt(document.getElementById('add_available_balance').innerText) ;
    //console.log(addAvailableBalance) ;

    if(cashOutAgentPhoneNumber.length < 11){
        alert('Please provide a valid phone number') ;
        return ;
    }
    else if(cashOutPinNumber !== validPin){
        alert('Please provide a valid pin number') ;
        return ;
    }
    // else if( addAmount){
    //     alert('Please provide a valid amount') ;
    //     return ;
    // }
    const addAddAvailableBalance = addAvailableBalance - cashOutAmount ;

    document.getElementById('add_available_balance').innerText = addAddAvailableBalance ; 

    document.getElementById('cash_out_agent_phone_number').value = '' ;
    document.getElementById('cash_out_amount').value = '' ;
    document.getElementById("cash_out_pin_number").value = '' ;
 })

 // Toggling features

 document.getElementById('add_money_btn').addEventListener('click', function(){
    document.getElementById('cash_out_parent').style.display ='none';
    document.getElementById('add_money_parent').style.display ='block';
 }) ;
 document.getElementById('cash_out_btn').addEventListener('click', function(){
    document.getElementById('add_money_parent').style.display ='none';
    document.getElementById('cash_out_parent').style.display ='block';
 }) ;
