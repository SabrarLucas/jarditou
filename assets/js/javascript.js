var filtre_cara = new RegExp("^[a-zA-Z]+$");
var filtre_ville = new RegExp("^[a-zA-Z]+$");
var filtre_CP = new RegExp("^([0-9a-z]){5}$");
var filtre_mail = new RegExp("(@){1}");

document.getElementById("nom").value = "";
document.getElementById("prenom").value = "";
document.getElementById("feminin").checked = false;
document.getElementById("masculin").checked = false;
document.getElementById("date").value = "";
document.getElementById("code_postal").value = "";
document.getElementById("adresse").value = "";
document.getElementById("ville").value = "";
document.getElementById("email").value = "";
document.getElementById("sujet").value = "selection";
document.getElementById("question").value = "";


var valid = document.getElementById("envoie");    
var nom = document.getElementById("nom");
var RaisonNom = document.getElementById("RaisonNom");

var prenom = document.getElementById("prenom");
var RaisonPrenom = document.getElementById("RaisonPrenom");

var masculin = document.getElementById("masculin");
var feminin = document.getElementById("feminin");
var RaisonSexe = document.getElementById("RaisonSexe");

var date = document.getElementById("date");
var RaisonDate = document.getElementById("RaisonDate");

var code_postal = document.getElementById("code_postal");
var RaisonCodePost = document.getElementById("RaisonCodePost");

var email = document.getElementById("email");
var RaisonMail = document.getElementById("RaisonMail");

var question = document.getElementById("question");
var RaisonQuestion = document.getElementById("RaisonQuestion");

var cb = document.getElementById("cb");
var RaisonCB = document.getElementById("RaisonCB");

valid.addEventListener("click",validation);

function validation(e){
    function TestNom(){
        if(nom.value === ""){
            e.preventDefault();
            RaisonNom.textContent = "Donnez votre nom";
            RaisonNom.style.color = "red";
        }else if(filtre_cara.test(nom.value) == false){
            e.preventDefault();
            RaisonNom.textContent = "Incorrect";
            RaisonNom.style.color = "orange";
        }else{
            RaisonNom.remove();
        }
    }
    TestNom();

    function TestPrenom(){
        if(prenom.value === ""){
            e.preventDefault();
            RaisonPrenom.textContent = "Donnez votre prénom";
            RaisonPrenom.style.color = "red";
        }else if(filtre_cara.test(prenom.value) == false){
            e.preventDefault();
            RaisonPrenom.textContent = "Incorrect";
            RaisonPrenom.style.color = "orange";
        }else{
            RaisonPrenom.remove();
        }
    }
    TestPrenom();

    function TestSexe(){
        if((!masculin.checked && feminin.checked) || (masculin.checked && !feminin.checked)){
            RaisonSexe.remove();
        }else{
            e.preventDefault();
            RaisonSexe.textContent = "Cocher votre sexe";
            RaisonSexe.style.color = "red";
        }
    }
    TestSexe();

    function TestDate(){
        if(date.value === ""){
            e.preventDefault();
            RaisonDate.textContent = "Indiquez votre date de naissance";
            RaisonDate.style.color = "red";
        }else{
            RaisonDate.remove();
        }
    }
    TestDate();

    function TestCodePost(){
        if(code_postal.value === ""){
            e.preventDefault();
            RaisonCodePost.textContent = "Donnez votre code postal";
            RaisonCodePost.style.color = "red";
        }else if(filtre_CP.test(code_postal.value) == false){
            e.preventDefault();
            RaisonCodePost.textContent = "Incorrect";
            RaisonCodePost.style.color = "orange";
        }else{
            RaisonCodePost.remove();
        }
    }
    TestCodePost();

    function TestMail(){
        if(email.value === ""){
            e.preventDefault();
            RaisonMail.textContent = "Donnez votre e-mail";
            RaisonMail.style.color = "red";
        }else if(filtre_mail.test(email.value) == false){
            e.preventDefault();
            RaisonMail.textContent = "Incorrect";
            RaisonMail.style.color = "orange";
        }else{
            RaisonMail.remove();
        }
    }
    TestMail();

    function TestQuestion(){
        if(question.value === ""){
            e.preventDefault();
            RaisonQuestion.textContent = "Ecrivez votre question";
            RaisonQuestion.style.color = "red";
        }else{
            RaisonQuestion.remove();
        }
    }   
    TestQuestion();

    if(!cb.checked){
        e.preventDefault();
        RaisonCB.textContent = "Vous devez accepter l'envoie";
        RaisonCB.style.color = "red";
    }else{
        RaisonCB.remove();
    }
}


annuler.addEventListener("click", function(){
    RaisonNom.remove();
    RaisonPrenom.remove();
    RaisonSexe.remove();
    RaisonDate.remove();
    RaisonCodePost.remove();
    RaisonMail.remove();
    RaisonQuestion.remove();
    RaisonCB.remove();
});