function fnameval()
{
    var fname=document.getElementById('fname').value;
    var patt = /^[a-zA-Z]*$/;
    var res = patt.test(fname);
    if(!res || fname.length<8)
    {
        document.getElementById("demofname").innerHTML="&#10006 First Name can have only letters and must be more than 8 letters"; 
    }
    else
    {
        document.getElementById('demofname').innerHTML="&#10004 First name is valid";
    }
}

function lnameval()
{
    var lname=document.getElementById('lname').value;
    var patt = /^[a-zA-Z]*$/;
    var res = patt.test(lname);
    if(!res || lname.length<8)
    {
        document.getElementById("demolname").innerHTML="&#10006 Lirst Name can have only letters and must be more than 8 letters"; 
    }
    else
    {
        document.getElementById('demolname').innerHTML="&#10004 Last name is valid";
    }
}

function ageval()
{
    var age=document.getElementById('age').value;
    var patt = /^[0-9]*$/;
    var res = patt.test(age);
    if(!res || age.length<=0 || age.length>=3)
    {
        document.getElementById("demoage").innerHTML="&#10006 Must have a valid age"; 
    }
    else
    {
        document.getElementById('demoage').innerHTML="&#10004 Age is valid";
    }
}

function emailval()
{
    var email=document.getElementById('email').value;
    var patt = /^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/;
    var res = patt.test(email);
    if(!res)
    {
        document.getElementById("demoemail").innerHTML="&#10006 Email format is not correct"; 
    }
    else
    {
        document.getElementById('demoemail').innerHTML="&#10004 Your email is valid";
    }
}

function passwordval()
{
    var password=document.getElementById('password').value;
    var patt = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$@^%&? "])[a-zA-Z0-9!#$@^%&?]{8,20}$/;
    var res = patt.test(password);
    if(!res)
    {
        document.getElementById('demopassword').innerHTML="&#10006 Password must contain one digit, one uppercase, one lowercase,one special character and length must be more than 8 to 20"; 
    }
    else
    {
        document.getElementById('demopassword').innerHTML="&#10004 Your password is valid";
    }
}


function validateform()
{
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var age = document.getElementById('age').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if(document.getElementByName('role').checked==false)
    {
        document.getElementsById('massage').innerHTML="&#10006 please check a radio button";
        return false;
    }
    if(fname == "" || lname == "" || age == "" ||  email == "" || password == "")
    {
        document.getElementById('massage1').innerHTML="&#10006 please insert all inputs";
        return false;
    }
}

