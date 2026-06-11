function checkPassword(){

    const pass =
    document.getElementById("password").value;

    if(pass === "02092008")
    {
        window.location.href = "welcome.html";
    }
    else
    {
        alert("Oops! Wrong DOB 😜");
    }
}