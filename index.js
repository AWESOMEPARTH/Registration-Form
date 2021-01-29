console.log("connected");
function form_Details(){
alert("THANKS FOR SUBMITING");
var name_1 = document.forms["f1"]["i1"].value;
var name_2 = document.forms["f1"]["i2"].value;
var mail = document.forms["f1"]["i3"].value;
var number = document.forms["f1"]["i4"].value;
var dob = document.forms["f1"]["i5"].value;
var pass = document.forms["f1"]["i6"].value;
var cpass = document.forms["f1"]["i7"].value;
document.bgcolor="Green";
document.hgcolor="white";
document.write("First Name : "+ name_1 + "<br><Br>");
document.write("Second Name : "+ name_2 + "<br><Br>");
document.write("Email : "+ mail + "<br><Br>");
document.write("Mobile number : "+ number + "<br><Br>");
document.write("Date of Birth : " + dob + "<br><Br>");
document.write("Thanks for submiting the form, we will contact you soon!");
}