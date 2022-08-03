
//form 1

function vfun(){
    var cname=document.forms["myform"]["cname"].value;
    var email1=document.forms["myform"]["email1"].value;
    var dob=document.forms["myform"]["dob"].value;

if(cname==null || cname=="" ){
          document.getElementById("errorBox").innerHTML =
           "Enter Candidate Name";
         return false;
}

if(email1==null || email1==""){
  document.getElementById("errorBox").innerHTML =
   "Enter email id";
 return false;
}
if(dob==null || dob==""){
  document.getElementById("errorBox").innerHTML =
   "Enter Your dob";
 return false;
}
if (cname != '' && email1 != '' && dob != '' ){
  alert("Candidate Profile Created Successfully");

                  }
}



//form 2

function vfun1(){
    var uname1=document.forms["myform2"]["uname1"].value;
    var clocation=document.forms["myform2"]["clocation"].value;
    var mnumber=document.forms["myform2"]["mnumber"].value;
    var rtext=document.forms["myform2"]["rtext"].value;


if(uname1==null || uname1=="" ){
          document.getElementById("errorBox").innerHTML =
           "enter the user name";
         return false;
}

if(clocation==null || clocation==""){
          document.getElementById("errorBox").innerHTML =
           "enter the email";
         return false;
}

if(mnumber==null || mnumber=="" ){
          document.getElementById("errorBox").innerHTML =
           "enter the password";
         return false;
}

if(rtext==null || rtext==""){
          document.getElementById("errorBox").innerHTML =
           "enter the password";
         return false;}

 
if (uname1 != '' && clocation != '' && mnumber != '' && rtext != '' )

{
  alert("Personal Information successfull");
                 

  
}
}

const imgDiv = document.querySelector('.profile-pic-div');
const img = document.querySelector('#photo');
const file = document.querySelector('#file');
const uploadBtn = document.querySelector('#uploadBtn');

 

imgDiv.addEventListener('mouseenter', function(){
    uploadBtn.style.display = "block";
});



imgDiv.addEventListener('mouseleave', function(){
    uploadBtn.style.display = "none";
});



file.addEventListener('change', function(){
    
    const choosedFile = this.files[0];

    if (choosedFile) {

        const reader = new FileReader(); 

        reader.addEventListener('load', function(){
            img.setAttribute('src', reader.result);
        });

        reader.readAsDataURL(choosedFile);

        
    }
});