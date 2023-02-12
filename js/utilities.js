console.log('utilities file');
function getInputFiledById(inputFiledID){
    const inputFiled=document.getElementById(inputFiledID);
    const inputFieldValueString=inputFiled.value;
    const inputFieldValue=parseFloat(inputFieldValueString);
    inputFiled.value='';
    return inputFieldValue;
}
function getElementValueById(textElementId){
    const textElement=document.getElementById(textElementId);
    const textElementValueString=textElement.innerText;
    const textElementValue=parseFloat(textElementValueString);
    return textElementValue;
}
function getTextElementValueById(elementId,newValue){
    const textElement=document.getElementById(elementId);
    textElement.innerText=newValue;
}