document.getElementById('deposit-btn').addEventListener('click', function(){
   const depositField = document.getElementById('deposit-field');
   const depositstring = depositField.value;
   const depositAmount =  parseFloat(depositstring);

   depositField.value = '';
   
   if(isNaN(depositAmount)){
    alert('please provid a valid number');
    return
   }

   const depositTotalFild = document.getElementById('deposit-total');
   const depositTotalFildstring = depositTotalFild.innerText;
   const depositTotal = parseFloat(depositTotalFildstring);
//    console.log(depositTotal);

   const currentTotolAmount =  depositAmount + depositTotal ;
   depositTotalFild.innerText =  currentTotolAmount;


   const blanceTotal =  document.getElementById('Blance-total');
   const BlancetotalString = blanceTotal.innerText;
   const blanceAmount = parseFloat(BlancetotalString) ;


   const currentBlance = blanceAmount + depositAmount;
   blanceTotal.innerText = currentBlance ;

})