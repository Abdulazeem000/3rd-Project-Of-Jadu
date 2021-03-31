var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var textArea = document.getElementById("subject");
const submitBtn = document.getElementById("submit-btn");

const userStorage = localStorage.getItem("Contactusers");
const JSONToUser = JSON.parse(userStorage);
let Contactusers = JSONToUser || [];
console.log(Contactusers);

class Contact{
    fname;
    lname;
    textArea;

    constructor(fname, lname, textArea){
        this.fname = fname;
        this.lname = lname;
        this.textArea = textArea;
    }
}

 submitBtn.addEventListener("click", function(){
    const Contactuser = new Contact(fname.value, lname.value, textArea.value);
    Contactusers.push(Contactuser);
    console.log(fname.value);
    const usersJson = JSON.stringify(Contactusers);
    localStorage.setItem("Contactusers", usersJson);
    alert("Data saved in local storage");
    fname.value = "";
    lname.value = "";
    textArea.value = "";
 });