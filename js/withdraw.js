document.getElementById('withdraw-btn').addEventListener('click', function (){
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawString = withdrawField.value;
    const withdrawAmount =  parseFloat(withdrawString);

    
    withdrawField.value = '';

    if(isNaN(withdrawAmount)){
        alert('please provid a valid amount')
        return;
    }


    const withdrawTotalField =  document.getElementById('withdraw-total');
    const withdrawTotalFieldString = withdrawTotalField.innerText;
    const withdrawTotol = parseFloat(withdrawTotalFieldString);


    const blanceTotal =  document.getElementById('Blance-total');
    const BlancetotalString = blanceTotal.innerText;
    const blanceAmount = parseFloat(BlancetotalString) ;

    


    if(withdrawAmount > blanceAmount ){
        alert('Sorry sir apnar bap ar bank aa ato taka nai joto apni tulte chaccen.........')
        return;
    }
 
    const currentWithdrawBlance = withdrawAmount + withdrawTotol;
    withdrawTotalField.innerText  = currentWithdrawBlance;

    const currentBlance = blanceAmount - withdrawAmount;
    blanceTotal.innerText = currentBlance ;
})