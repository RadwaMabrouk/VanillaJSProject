(function(){
    const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const passwordRegex = /^.*(?=.{6,12})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;
    document.getElementById("signIn").addEventListener("click",function(e){
    e.preventDefault();
       //if regex true do this  
    //let userEmail = document.getElementById("userEmail").value;
    let userEmail = $("#userEmail")[0].value;
    let userPassword = $("#userPassword")[0].value;
    // check not empty

    
    let notemptyEmail = $("#userEmail")[0].value.length>0
    let notemptyPasswoord = $("#userPassword")[0].value.length>0
    if(notemptyEmail && notemptyPasswoord){
        let validEmail = emailRegex.test(userEmail);
        let validPassword = passwordRegex.test(userPassword);
    

        if(validPassword && validEmail){
            console.log("Going to anoter page");
            window.location="dashboard.html";
        } else if (!validPassword && validEmail){
        
            alert("Invalid Password");
        } else if (!validEmail && validPassword){
            alert("Invalid email");
        }
        else{
            alert("Invalid email and password");
        }    
    }
    else{
        if(notemptyEmail==false){
            alert("email is rquired");
        }
        else{
            alert("password is rquired");
        }
        
    }


    //let userPassword = document.getElementById("userPassword").value;
    
    
   
})
})();