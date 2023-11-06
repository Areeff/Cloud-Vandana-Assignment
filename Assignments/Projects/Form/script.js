function submitForm() {
    // Get form values
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var dob = document.getElementById("dob").value;
    var country = document.getElementById("country").value;
    var gender = "";
    if (document.getElementById("male").checked) gender += "Male ";
    if (document.getElementById("female").checked) gender += "Female ";
    if (document.getElementById("other").checked) gender += "Other";
    var profession = document.getElementById("profession").value;
    var email = document.getElementById("email").value;
    var mobileNumber = document.getElementById("mobileNumber").value;

    // Display values in the popup
    document.getElementById("popupFirstName").textContent = firstName;
    document.getElementById("popupLastName").textContent = lastName;
    document.getElementById("popupDob").textContent = dob;
    document.getElementById("popupCountry").textContent = country;
    document.getElementById("popupGender").textContent = gender;
    document.getElementById("popupProfession").textContent = profession;
    document.getElementById("popupEmail").textContent = email;
    document.getElementById("popupMobileNumber").textContent = mobileNumber;

    // Show the popup
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    // Close the popup and reset the form
    document.getElementById("popup").style.display = "none";
    document.getElementById("surveyForm").reset();
}

function resetForm() {
    // Reset the form without displaying the popup
    document.getElementById("surveyForm").reset();
}