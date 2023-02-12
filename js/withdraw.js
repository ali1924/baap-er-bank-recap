console.log('deposite')
document.getElementById('btn-withdraw').addEventListener('click',function(){
    // user deposite
    const newWithdrawField=document.getElementById('new-withdraw');
    const newWithdrawString=newWithdrawField.value;
    const newWithdraw=parseFloat(newWithdrawString);
    console.log(newWithdraw);
    //privious deposite
    const preWithdrawElement=document.getElementById('total-withdraw');
    const preWithdrawElementString=preWithdrawElement.innerText;
    const preWithdraw=parseFloat(preWithdrawElementString);
    console.log(preWithdraw);

    // total deposite
    const totalWithdraw=preWithdraw+newWithdraw;
    preWithdrawElement.innerText=totalWithdraw;

    //balance
    const preBalanceElemet=document.getElementById('total-balance');
    const preBalanceElemetString=preBalanceElemet.innerText;
    const preBalance=parseFloat(preBalanceElemetString);

    const totalBalance=preBalance-totalWithdraw;
    preBalanceElemet.innerText=totalBalance;
    newWithdrawField.value='';
})