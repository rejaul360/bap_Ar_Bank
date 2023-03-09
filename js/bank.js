document.getElementById('btn-user').addEventListener('click', function(){
    const emailFild = document.getElementById('email_user');
    const email = emailFild.value;

    const passwordFild =  document.getElementById('password_user');
    const password = passwordFild.value;
    
    if(email === 'rejaul@.com' && password === "12345"){
        window.location.href = 'bank.html'
    }else{
       alert('apnar password & email vul hoyece please try again........!!!!')
    }
})
