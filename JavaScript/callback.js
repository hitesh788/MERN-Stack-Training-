function submitForm(submit, isFormValid) {
    if (isFormValid()) {
        console.log("Fields validate successfully");
        console.log(submit);
    }
}

function formValidation() {
    email = "sece@sece.ac.in";
    password = "123456";
    if (email == "sece@sece.ac.in" && password) {
        console.log("Fields validate successfully");
        console.log(submit);
    } else {
        console.log("Fields do not validate");
        console.log("Form submission failed");
    }
}
