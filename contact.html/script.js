function sendMail(){
    var params={
        name:document.getElementById("n1").value,
        email:document.getElementById("em").value,
        message:document.getElementById("msg").value,
        rate:document.getElementById("rate").value,
    };

const serviceID="service_8togjxc";
const templateID="template_fbylmaj";
emailjs.send(serviceID,templateID,params)
.then((res)=>{
    document.getElementById("n1").value="";
    document.getElementById("em").value="";
    document.getElementById("msg").value="";
    document.getElementById("rate").value="";
    console.log(res);
    alert("your message send successfully");
})
.catch((err)=>console.log(err));
}