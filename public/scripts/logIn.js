// valdiate email format
function validateEmail() {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Gets input from the user and sends it to the server to match it with the database to authenticate the user. 
async function authenticateUser() {
    email = $('#email').val()
    password = $('#password').val()
    console.log(email, password)
  // if email or password empty, reload page
    if (email === "" || password === "") {
        alert("Please fill out all fields")
        $('#email').val('')
        $('#password').val('')
    } 
    // verfiy email field is a valid format 
    else if (!validateEmail(email)) {
        alert("Please enter a valid email")
        $('#email').val('')
        $('#password').val('')
    } else {
    await $.ajax({
            url: ' https://tranquil-taiga-64921.herokuapp.com//login/authentication',
            // url: 'http://localhost:5002/login/authentication',
            type: 'POST',
            data: {
                email: email,
                password: password
            },
            success: (serverRes) => {
                if (serverRes=='No user found'){
                    alert('No user found, please retry or signup!')
                    $('#email').val('')
                    $('#password').val('')
                }else if(serverRes=='Invalid password'){
                    alert('Invalid password, please retry or signup!')
                    $('#email').val('')
                    $('#password').val('')
                }else if(serverRes.admin === true) {
                    // if user is admin, redirect to admin page
                    window.location.href = "/pages/admin.html"
                } else {
                    window.location.href = "/index.html"
                }
        }
    })
}
}

function setup() {
    $('body').on('click', '#login', authenticateUser)
}

$(document).ready(setup)