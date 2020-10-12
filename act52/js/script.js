var firstname = document.forms["form"]["firstname"];
var lastname = document.forms["form"]["lastname"];

var fnform = document.getElementById("fname")
var lnform = document.getElementById("lname")
var male = document.getElementById("male")
var female = document.getElementById("female")
var check = document.getElementById('chbx')

var fnerror = document.getElementById("fname_error");
var lnerror = document.getElementById("lname_error");
var generror = document.getElementById("gen_error")
var checkerror = document.getElementById("terms_error")



function validateEmail(){
  var email = document.forms["form"]["email"];
  var emform = document.getElementById("eml")
  var emer = document.getElementById("email_error")
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email.value.match(pattern)) {

    emer.style.display="block";
    emer.style.color="#44d62c"
    emer.innerHTML = "Valid Email Address"
    
  }
  if (email.value==""){
    emer.style.display="none";
  }
  else{

    emer.style.display="block";
    emer.innerHTML = "Invalid Email Address"
  }
  
}
function validatePassword(){
var pwrd = document.forms["form"]["password"]
var pwf = document.getElementById("pword")
var pwer = document.getElementById("pass_error")
 var weak = /[a-z]/;
 var med =  /\d+/;
 var strong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;

 
 if ( pwrd.value.length <=3
   && pwrd.value.match(weak)
   || pwrd.value.match(med)
   || pwrd.value.match(strong)) {
   
    pwf.classList.add("weak");
    pwf.classList.remove("med");
    pwf.classList.remove("strong");
    pwer.style.display="block";
    pwer.style.color="orangered"
    pwer.innerHTML="Password weak"
    
   

 }

 if ( pwrd.value.length >=6
  && pwrd.value.match(weak)
  && pwrd.value.match(med)
  || pwrd.value.match(strong)) {

    pwf.classList.add("med");
    pwf.classList.remove("weak");
    pwf.classList.remove("strong");
   pwer.style.display="block";
   pwer.style.color="orange";
   pwer.innerHTML="Password moderate"
   
  }

  if ( pwrd.value.length >=8
    && pwrd.value.match(weak)
    && pwrd.value.match(med)
    && pwrd.value.match(strong)) {
  
      pwf.classList.add("strong");
      pwf.classList.remove("weak");
      pwf.classList.remove("med");
     pwer.style.display="block";
     pwer.style.color="#44d62c";
     pwer.innerHTML="Password strong"
     
    }
}


function validateForm(){
  if (lastname.value=="") {
    lnerror.style.display="block";
    lnform.classList.add("invalid")
    return false;
  }
  if (firstname.value=="") {
    fnerror.style.display="block";
    fnform.classList.add("invalid")
    
    return false;
  }
  if (female.checked==false && male.checked==false) {
    generror.style.display="block"
    return false;
  }
  if(check.checked==false){
    checkerror.style.display="block"
    return false;
  }

  alert('Success')
  
}

