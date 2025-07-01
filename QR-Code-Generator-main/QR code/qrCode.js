imgBox=document.getElementById("imgBox");
qrImage=document.getElementById("qrImage");
qrText=document.getElementById("qrText");
function qrGenerate()
{   
    if(qrText.value.length>0)
    {
    qrImage.src= "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +qrText.value; 
    imgBox.classList.add("show-img");
    }
    else{
        qrText.classList.add('error');
        setTimeout(function()
        {
            qrText.classList.remove('error'); 
        },1000);
    }
}