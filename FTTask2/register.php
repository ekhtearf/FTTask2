
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration</title>
    <script src="myjs.js"></script>
</head>
<body>
      <fieldset>
      <h1>Registration form </h1>
        <hr>
    <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']);?>"  onsubmit="return validateform()" name="myform" method="POST">
        <div>
        First Name: <input type="text" name="fname" onkeyup="fnameval()" id="fname">
        <br>
        Last Name: <input type="text" name="lname" onkeyup="lnameval()" id="lname">
        <br>
        Age: <input type="number" name="age" onkeyup="ageval()" id="age">
        <br>
        Enter your email: <input type="text" name="email" onkeyup="emailval()" id="email">
        <br>
        Enter your password: <input type="password" name="password" onkeyup="passwordval()" id="password">
        <br>
        Designation:
        <input type="radio" id="jpr" name="role" value="jpr">
        <label for="jpr">Junior Programmer</label>
        <input type="radio" id="spr" name="role" value="spr">
        <label for="spr">Senior programmer</label>
        <input type="radio" id="prl" name="role" value="prl">
        <label for="prl">Project Lead</label>
        <br>
        Preffered Language
        <input type="checkbox" id="ppl1" name="ppl1" value="ppl1">JAVA
        <input type="checkbox" id="ppl2" name="ppl2" value="ppl2">PHP
        <input type="checkbox" id="ppl3" name="ppl3" value="ppl3">C++
        <br>
        <br>
        <input type="file" name="filetoupload">
        <br>
        <br>
        <input type="submit" class="submit" value="SUBMIT">
        <input type="reset" class="reset" value="RESET">
        

        </div></fieldset>
        <p id="demofname"></p>
        <p id="demolname"></p>
        <p id="demoage"></p>
        <p id="demoemail"></p>
        <p id="demopassword"></p>    
        <p id="massage"></p>
        <p id="massage1"></p>
    </form>
    <br>
          
    </div>
</body>
</html>
