const signUp = e => {
  let fname = document.getElementById('fname').value,
      lname = document.getElementById('lname').value,
      email = document.getElementById('email').value,
      pwd = document.getElementById('pwd').value;
      phone = document.getElementById('phone').value;

const success =document.getElementById("success");
const danger =document.getElementById("danger");

  let formData = JSON.parse(localStorage.getItem('formData')) || [];

  let exist = formData.length && 
      JSON.parse(localStorage.getItem('formData')).some(data => 
          data.fname.toLowerCase() == fname.toLowerCase() && 
          data.lname.toLowerCase() == lname.toLowerCase()
      );

  if(!exist){
      formData.push({ fname, lname, email, pwd,phone });
      localStorage.setItem('formData', JSON.stringify(formData));
      document.querySelector('form').reset();
      document.getElementById('fname').focus();
      success.style.display ='block';

  }
  else{
      
      danger.style.display ='block';
   
  }
  e.preventDefault();
}



$(document).ready(function () {
    $("#butsave").on("click", function () {
      var fname = $("#fname").val();
var lname = $("#lname").val();
      var email = $("#email").val();
var pwd = $("#pwd").val();
      var phone = $("#phone").val();

      if (fname != "" && lname != "" && email != "" && phone != "" && pwd != "") {
        $.ajax({
          url: "/php/register.php",
          type: "POST",
          data: {
            fname: fname,
lname: lname,
            email: email,
            phone: phone,
pwd:pwd,
          },
          cache: false,
          success: function (dataResult) {
            var dataResult = JSON.parse(dataResult);
            if (dataResult.statusCode == 200) {
              $("#fupForm").find("input:text").val("");
              $("#success").show();
              // $("#success").html("Data added successfully !");
            } else if (dataResult.statusCode == 201) {
              alert("Error occured !");
            }
          },
        });
      } else {
        alert("Please fill all the field !");
      }
    });
  });


  
function preback(){window.history.forward();}
setTimeout("preback()", 0);
window.onunload=function() {null};

