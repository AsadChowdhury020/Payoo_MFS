//console.log('Script connected') ;


//Login button functionality
document.getElementById('login_button').addEventListener('click', function(e){
    //console.log('Login button clicked') ;
    e.preventDefault() ;
    //console.log(e) ;
    const mobileNumber = 12345678910 ;
    const pinNumber = 1234 ;

    const mobileNumberValue = document.getElementById('mobile_number').value;
    const mobileNumberValueConvert = parseInt(mobileNumberValue) ;
    const pinNumberValue = document.getElementById('pin_number').value;
    const pinNumberValueConvert = parseInt(pinNumberValue) ;

    // console.log(mobileNumberValueConvert);
    // console.log(pinNumberValueConvert) ;
    if(mobileNumberValueConvert === mobileNumber && pinNumberValueConvert === pinNumber){
        //console.log('All values matched') ;
        window.location.href = "home.html" ;
    }
    else{
       // console.log('Invalid credentials') ;
       alert('Invalid credentials') ;
    }
})