function displayAbout() {
    document.querySelector(".main_portfolio").style.display = "none";
    document.querySelector(".main_profile").style.display = "block";
    document.querySelector(".main_contact").style.display = "none";
}

function displayPortfolio() {
    document.querySelector(".main_portfolio").style.display = "block";
    document.querySelector(".main_profile").style.display = "none";
    document.querySelector(".main_contact").style.display = "none";
}

function displayContact() {
    document.querySelector(".main_portfolio").style.display = "none";
    document.querySelector(".main_profile").style.display = "none";
    document.querySelector(".main_contact").style.display = "block";
}


function submitForm() {
    if (document.querySelector('input[id="fname"]').value == '' ||
        document.querySelector('input[id="lname"]').value == '' ||
        document.querySelector('textarea').value == '')
        alert("Al least one field is missing!");
    else {
        document.querySelector('form[id="myForm"]').submit();
        document.querySelector('input[id="fname"]').value = '';
        document.querySelector('input[id="lname"]').value = '';
        document.querySelector('textarea').value = '';
    }
}