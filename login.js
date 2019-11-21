<script src="https://code.jquery.com/jquery-3.3.1.min.js" crossorigin="anonymous"></script>
<script>
	var q1=document.getElementById("email").value;
	var p1=document.getElementById("password1").value;
	var reqObject= {
		"email": q1,
		"password": p1
	}


	var reqBody = JSON.stringify(reqObject);

	function f1()
	{
		var q1=document.getElementById("email").value;
	var p1=document.getElementById("password1").value;
	var reqObject= {
		"email": q1,
		"password": p1
	}
	  
		var xhr = new XMLHttpRequest();
		document.getElementById("demo")
		xhr.open("GET", "https://reqres.in/api/login", true);

		//Send the proper header information along with the request
		xhr.setRequestHeader("Content-Type", "application/json");
			xhr.onreadystatechange = function(){
				if( xhr.readyState == 4) {
					console.log(xhr.responseText);
			}
			}
		
		xhr.onload = function(){
			//console.log("This the response from server", xhr.responseText);
	};
	//console.log(typeof reqBody);
	xhr.send(reqObject);
	}


//Send an AJAX request when the page loads
$(document).ready(function(){
	console.log('document is ready');

	$.ajax({
    url: "https://reqres.in/api/login",
    type: "POST",
    data: reqObject,
    success: function(response){
        console.log(response);
    },
    error: function(jqXHR, errorText, error){
    	console.log("We have an error", error);
    }
});
});

	</script>