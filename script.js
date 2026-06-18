function toggleMenu() {

    document
        .getElementById("nav-links")
        .classList
        .toggle("show");
}

document
.getElementById("contactForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    let name =
        document.getElementById("name").value;

    let email =
        document.getElementById("email").value;

    alert(
        "Name: " + name +
        "\nEmail: " + email
    );

});