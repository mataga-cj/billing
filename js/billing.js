/*Add the JavaScript here for the function billingFunction().  
It is responsible for setting and clearing the fields in Billing Information */
function billingFunction(){
let sourceName = document.getElementById('shippingName');
let sourceZip = document.getElementById('shippingZip');

let billingName = document.getElementById('billingName');
let billingZip = document.getElementById('billingZip');

let cBox = document.getElementById('same');

if(cBox.checked){
billingName.value = sourceName.value;
billingZip.value = sourceZip.value;
}else{
billingName.value = '';
billingZip.value = '';
}

}

function compareEntries(){
    let sourceName = document.getElementById('shippingName');
    let sourceZip = document.getElementById('shippingZip');
    
    let billingName = document.getElementById('billingName');
    let billingZip = document.getElementById('billingZip');
    if(sourceName.value === billingName.value && sourceZip.value === billingZip.value){
        alert("entries were sent to the server...");
    }else{
        alert("entries do not match...");
    }
}