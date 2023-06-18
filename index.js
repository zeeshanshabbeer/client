function sendMail() {
    
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
      phone: document.getElementById("phone").value,
      inquiry: document.getElementById("inquiry").value,


    };
    var messageElement = document.getElementById("message2");
    messageElement.style.display = "none";

    const serviceID = "service_jcv9v7f";    
    const templateID = "template_05d5mtc";
   if(params.email===""){
    console.log("first")
    var messageElement = document.getElementById("message2");
    messageElement.style.display = "block";
   }else{
       emailjs
         .send(serviceID, templateID, params)
         .then((res) => {
           document.getElementById("name").value = "";
           document.getElementById("email").value = "";
           document.getElementById("message").value = "";
           document.getElementById("inquiry").value = "";
           document.getElementById("phone").value = "";
         
           var messageElement = document.getElementById("message1");
           messageElement.style.display = "block";

        
         })
         .catch((err) => console.log("a",err));

   }
  }