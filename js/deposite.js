console.log('deposite')
document.getElementById('btn-deposite').addEventListener('click',function(){
    // user deposite
    const newDepositeField=document.getElementById('new-deposite');
    const newDepositeString=newDepositeField.value;
    const newDeposite=parseFloat(newDepositeString);
    console.log(newDeposite);

    //privious deposite
    const preDepositeElement=document.getElementById('total-deposite');
    const preDepositeElementString=preDepositeElement.innerText;
    const preDeposite=parseFloat(preDepositeElementString);
    console.log(preDeposite);

    // total deposite
    const totalDeposite=preDeposite+newDeposite
    preDepositeElement.innerText=totalDeposite;

    // balance
    const preBalanceElemet=document.getElementById('total-balance');
    const preBalnceElemetString=preBalanceElemet.innerText;
    const preBalance=parseFloat(preBalnceElemetString);
    // total balance
    const totalBalance=preBalance+totalDeposite;
    preBalanceElemet.innerText=totalBalance;
    // user deposite empty
    newDepositeField.value='';
})