function SendMail(event) {
    event.preventDefault();

    var params = {
        name: document.getElementById("name").value,
        number: document.getElementById("number").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_kxisrgu";
    const templateID = "template_9ciqgb7";

    emailjs.send("service_kxisrgu","template_9ciqgb7", params)
        .then((res) => {
            console.log(res);

            document.getElementById("name").value = "";
            document.getElementById("number").value = "";
            document.getElementById("email").value = "";
            document.getElementById("subject").value = "";
            document.getElementById("message").value = "";

            alert("Message Sent Successfully");
        })
}