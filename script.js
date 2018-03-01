<script>
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}
    
    //<--Using Popovers here--> 		
/*$(document).ready(function(){
    $('[data-toggle="popover"]').tooltip();
});*/

						var input = document.getElementById("countries");
						var awesomplete = new Awesomplete(input, {
						  minChars: 1, 
						  autoFirst: true,
						  maxItems: 10
						});
						awesomplete.list = ['California', 'Boston', 'New York', 'Chicago', 'Dallas'];

		function validateForm() {
    					var x = document.forms["myForm1"]["cityname"].value;
						if(x=="")
						{
						alert("Please select the city");
							return false;
						}
    					else if (x == "California" || x == "Boston" || x == "New York" || x == "Chicago" || x == "Dallas" ) {
        					
        				return true;
    					}
						else
						{
						alert("Sorry we dont service in this city");
						return false;
						}
						
        }



						     
      // Get the modal
      var modal = document.getElementById('id01');
	  var modal1 = document.getElementById('id02');
      
      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
          if (event.target == modal) {
              modal.style.display = "none";
          }
		  else if (event.target == modal1) {
              modal1.style.display = "none";
          }
      }
	  

          
      function validateField() {
	  
	   var firstName = document.forms["myForm"]["fname"].value;
	   var lastName = document.forms["myForm"]["lname"].value;
	   var email= document.forms["myForm"]["email"].value;
	   var contact=document.forms["myForm"]["number"].value;
	   var psw=document.forms["myForm"]["psw"].value;
	   var pswRepeat=document.forms["myForm"]["psw-repeat"].value;
	   //var emailRegExp = /^([^<>()\[\],;:@"\x00-\x20\x7F]|\\.)+@(([a-z]|#\d+?)([a-z0-9-]|#\d+?)*([a-z0-9]|#\d+?)\.)+([a-z]{2,4})$/i ;
	  
         if (firstName == "") {
              alert(" first Name must be filled out");
			   return false;
			  } else if (lastName == "") {
              alert("last Name must be filled out");
			   return false;
			  
			  }else if(!validateEmail(email) || email=="")
			  {
			     alert("Email must be valid");
			      return false;
			  
			  } else if(!validateContactNumber(contact) || contact=="")
			  {
			     alert("Contact number must be valid");
			      return false;
				  
			  }
			 else if (!validatePassword(psw))
			  {
			   return false;
			  }
			  else if(pswRepeat=="" || pswRepeat!=psw)
			  {
			     alert("Password and Confirm password not matching ");
			      return false;
			  } 
			  else
			  { 
			  
			     alert("You have successfully registered");
				 document.getElementById('id01').style.display='none';
                 document.forms["myForm"]["fname"].value="";
                 document.forms["myForm"]["lname"].value="";
	             document.forms["myForm"]["email"].value="";
	             document.forms["myForm"]["number"].value="";
	             document.forms["myForm"]["psw"].value="";
	             document.forms["myForm"]["psw-repeat"].value="";
				 return true;
			  }
      }

// This method validates the fields for the Login form	  
function validatePassword1(psw) {
    var errorUserName = "";
	var str=document.getElementById('uname').value;
    var illegalChars = /\W/; // allow letters, numbers, and underscores

    if (str == "") {
      errorUserName  = " Please enter Username";
      alert(errorUserName);
	  return false;
    } else if ((str.length < 5) || (str.length > 15)) {
       errorUserName  = " Username must have 5-15 characters";
       alert(errorUserName);
	     return false;
    } else if (illegalChars.test(str)) {
  	errorUserName = "Please enter valid Username. Use only numbers and alphabets";
      alert(errorUserName);
	  return false;
    } else {
       errorUserName  = "";
    }


    var error = "";
   // var illegalChars = /[\W_]/; // allow only letters and numbers
    if (psw == "") {
        error = "You didn't enter a password.\n";
        alert(error);
        return false;
 
    } else if ((psw.length < 7) || (psw.length > 15)) {
        error = "The password length must be atleast 7 characters. \n";
        alert(error);
        return false;
 
    } else if (illegalChars.test(psw)) {
        error = "The password contains illegal characters.\n";
        //document.forms["myForm"]["psw"].style.background = 'Yellow';
        alert(error);
        return false;
 
    } else if ( (psw.search(/[a-zA-Z]+/)==-1) || (psw.search(/[0-9]+/)==-1) ) {
        error = "The password must contain at least one numeral.\n";
      // document.forms["myForm"]["psw"].style.background = 'Yellow';
        alert(error);
        return false;
 
    } else {
	
        alert("You have successfully logged In");
				  document.getElementById('uname').value="";
                  document.getElementById('psw1').value="";
				  document.getElementById('id02').style.display='none';
				 return true;
    }

}
			 
			  
	function validatePassword(psw) {
    var error = "";
    var illegalChars = /[\W_]/; // allow only letters and numbers
    if (psw == "") {
        document.forms["myForm"]["psw"].style.background = 'Yellow';
        error = "You didn't enter a password.\n";
        alert(error);
        return false;
 
    } else if ((psw.length < 7) || (psw.length > 15)) {
        error = "The password length must be atleast 7 characters. \n";
        document.forms["myForm"]["psw"].style.background = 'Yellow';
        alert(error);
        return false;
 
    } else if (illegalChars.test(psw)) {
        error = "The password contains illegal characters.\n";
        document.forms["myForm"]["psw"].style.background = 'Yellow';
        alert(error);
        return false;
 
    } else if ( (psw.search(/[a-zA-Z]+/)==-1) || (psw.search(/[0-9]+/)==-1) ) {
        error = "The password must contain at least one numeral.\n";
       document.forms["myForm"]["psw"].style.background = 'Yellow';
        alert(error);
        return false;
 
    } else {
        document.forms["myForm"]["psw"].style.background = 'White';
    }
   return true;
}
		
	function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());	
       }

		function validateContactNumber(contact)
		{
		    var telRegExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
			  return telRegExp.test(contact);
	    }	  
						

</script>



