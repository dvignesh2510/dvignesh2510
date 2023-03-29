// $(document).ready(function(){     $('#submit').click(function(){         var
// email = $('#email').val();         var pwd = $('#pwd').val();
// $.ajax({             url: '/login.php',             type: 'POST',
// data: {email: email, pwd: pwd},             success: function(response){
// $('#myForm')[0].reset();                 alert(response);             }
// });     }); });

$(document).ready(function () {
    $("#butsave").on("click", function () {

        var email = $("#email").val();
        var pwd = $("#pwd").val();

        if (email != "" && pwd != "") {
            $.ajax({
                url: "/php/login.php",
                type: "POST",
                data: {

                    email: email,

                    pwd: pwd
                },
                cache: false,
                success: function (dataResult) {
                    var dataResult = JSON.parse(dataResult);
                    if (dataResult.statusCode == 200) {
                        $("#fupForm")
                            .find("input:text")
                            .val("");
                        $("#success").show();
                        // $("#success").html("Data added successfully !");
                    } else if (dataResult.statusCode == 201) {
                        alert("Error occured !");
                    }
                }
            });
        } else {
            alert("Please fill all the field !");
        }
    });
});

function signIn(e) {
    let email = document
            .getElementById('email')
            .value,
        pwd = document
            .getElementById('pwd')
            .value;
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length && JSON
        .parse(localStorage.getItem('formData'))
        .some(
            data => data.email.toLowerCase() == email && data.pwd.toLowerCase() == pwd
        );
    if (!exist) {
        alert("Incorrect login credentials");
    } else {
        location.href = "profile.html";
    }
    
    e.preventDefault();
    
}





function preback() {
    window
        .history
        .forward();
}
setTimeout("preback()", 0);
window.onunload = function () {
    null
};
