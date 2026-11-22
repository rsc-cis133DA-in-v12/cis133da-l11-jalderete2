/*
Author: John Alderete
Course: CIS133DA
Section: 27487
Lesson: 11
*/

// Display the document's last modified date.
document.getElementById("lastModified").innerHTML = document.lastModified;

// Show an alert when the form is submitted.
function formSubmit() {
    alert("Your form has been submitted.");
}

// Display a message when the form is reset.
function formReset() {
    document.getElementById("resetMessage").style.visibility = "visible";
}