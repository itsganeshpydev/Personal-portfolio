function sendmail() {
    const email = document.getElementById("femail").value.trim();
const phone = document.getElementById("fphone").value.trim();

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[0-9]{10}$/;

if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
}

if (!phonePattern.test(phone)) {
    alert("Please enter a valid 10-digit phone number.");
    return;
}
    var params = {
        fname: document.getElementById("fname").value,
        femail: document.getElementById("femail").value,
        fmessage: document.getElementById("fmessage").value,
         fsubject: document.getElementById("fsubject").value,
        fphone: document.getElementById("fphone").value,
    };

    const serviceID = "service_kxisrgu";
    const templateID = "template_0l2ec8v";
console.log(params);
console.log("Phone:", document.getElementById("fphone").value);
    emailjs.send(serviceID, templateID, params)
        .then((res) => {
            document.getElementById("fname").value = "";
            document.getElementById("femail").value = "";
            document.getElementById("fmessage").value = "";
            document.getElementById("fsubject").value = "";
            document.getElementById("fphone").value = "";

            console.log(res);
            alert("Your message was sent successfully!");
        })
        .catch((err) => {
            console.log(err);
            alert("Failed to send message.");
        });
}