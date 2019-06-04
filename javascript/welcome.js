
document.getElementById("signup").style.display = "none";
$("#btnLogin").click(function(event) {
    //Fetch form to apply custom Bootstrap validation
    var form = $("#formLogin")
 
    if (form[0].checkValidity() === false) { 
      event.preventDefault()
      event.stopPropagation()
    }   
    form.addClass('was-validated');
});

function signup()
{
	document.getElementById("signup").style.display = "block";
	document.getElementById("main").style.display = "none";
}
function check_Email(mail){
    var regex = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{1,5}){2,25})$/;
    if(regex.test(mail.myemail.value)){window.location.href = "manager.html";}
    else{
     document.getElementById("signinemail").innerHTML="This is not a valid email address";
      alert("This is not a valid email address");
      window.location.href = "welcome.html";
    }
    var regpwd = /^(?=.*\d).{4,8}$/;
    if(regpwd.test(mail.mypwd.value)){window.location.href = "manager.html";}
    else{
      document.getElementById("signinpwd").innerHTML="This is not a valid password";
      alert("This is not a valid password");
      window.location.href = "welcome.html";
    }
}
function check_form(){
	debugger;
	var regfname = /^[a-zA-Z ]{2,30}$/;		
	var reglname = /^[a-zA-Z ]{2,30}$/;	
	var regemail =/^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{1,5}){2,25})$/;
	var regph_no = /^[0-9]{3}-[0-9]{3}-[0-9]{4}/;	
	var regadr1 = /^[a-zA-Z0-9\s\,\''\-]*$/;
	var regadr2 = /^[a-zA-Z0-9\s\,\''\-]*$/;
	var regcity =  /^[a-zA-z] ?([a-zA-z]|[a-zA-z] )*[a-zA-z]$/;
	var regstate =  /^[a-zA-z] ?([a-zA-z]|[a-zA-z] )*[a-zA-z]$/;
	var regzip = /^\d{5}$|^\d{5}-\d{4}$/;
	var regpwd =  /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
	var regv_pwd =  /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

	var fname=document.myform.fname.value;
	var lname=document.myform.lname.value;
	var email=document.myform.email.value;
	var ph=document.myform.ph_no.value;
	var adr1=document.myform.adr1.value;
	var adr2=document.myform.adr2.value;
	var city=document.myform.city.value;
	var state=document.myform.state.value;
	var zip=document.myform.zip.value;
	var pwd=document.myform.pwd.value;
	var v_pwd=document.myform.v_pwd.value;

	if(fname=='null' || fname=="") {
		document.getElementById("pfname").innerHTML="Firstname can't be blank";
		document.getElementById("fname").style.color="#ff0000b5";
		document.getElementById("ifname").style.border="1px solid #ff0000b5";
	}
	else if(regfname.test(fname)==false){
		document.getElementById("pfname").innerHTML="Please Enter Valid first name";
		document.getElementById("fname").style.color="#ff0000b5";
		document.getElementById("ifname").style.border="1px solid #ff0000b5";
		alert("Please Enter Valid first name");
	}

	if(lname=='null' || lname=="") {
		document.getElementById("plname").innerHTML="lastname can't be blank";
		document.getElementById("lname").style.color="#ff0000b5";
		document.getElementById("ilname").style.border="1px solid #ff0000b5";
		return;
	}
	else if(reglname.test(lname)==false){
		debugger;
		document.getElementById("plname").innerHTML="Please Enter Valid last name";
		document.getElementById("lname").style.color="#ff0000b5";
		document.getElementById("ilname").style.border="1px solid #ff0000b5";
		alert("Please Enter Valid last name");
		return;
	}
	if(email=='null' || email=="") {
		document.getElementById("pemail").innerHTML="email can't be blank";
		document.getElementById("email").style.color="#ff0000b5";
		document.getElementById("iemail").style.border="1px solid #ff0000b5";
	}	
	else if(regemail.test(email)==false){
		document.getElementById("pemail").innerHTML="Please Enter Valid email";
		document.getElementById("email").style.color="#ff0000b5";
		document.getElementById("iemail").style.border="1px solid #ff0000b5";
		alert("Please Enter Valid email");
	}

	if(ph=='null' || ph=="") {
		document.getElementById("pph_no").innerHTML="phone number can't be blank";	
		document.getElementById("ph").style.color="#ff0000b5";
		document.getElementById("iph").style.border="1px solid #ff0000b5";
	}	
	else if(regph_no.test(ph)==false){
		document.getElementById("pph_no").innerHTML="Please Enter valid phone number";	
		document.getElementById("ph").style.color="#ff0000b5";
		document.getElementById("iph").style.border="1px solid #ff0000b5";
		alert("Please Enter Valid phone number");
	}

	if(adr1=='null' || adr1==""){
		document.getElementById("padr1").innerHTML="address1 can't be blank";
		document.getElementById("adr1").style.color="#ff0000b5	";
		document.getElementById("iadr1").style.border="1px solid #ff0000b5";
	}
	else if(regadr1.test(adr1)==false){
	document.getElementById("padr1").innerHTML="please Enter valid address1";
	document.getElementById("adr1").style.color="#ff0000b5	";
	document.getElementById("iadr1").style.border="1px solid #ff0000b5";
	alert("Please Enter Valid address1");
	}

	if(adr2=='null' || adr2==""){
		document.getElementById("padr2").innerHTML="address2 can't be blank";
		document.getElementById("adr2").style.color="#ff0000b5	";
		document.getElementById("iadr2").style.border="1px solid #ff0000b5";
	}
	else if(regadr2.test(adr2)==false){
		document.getElementById("padr2").innerHTML="Please ebter vali address2";
		document.getElementById("adr2").style.color="#ff0000b5	";
		document.getElementById("iadr2").style.border="1px solid #ff0000b5";
		alert("Please Enter Valid address2");
	}

	if(city=='null' || city==""){
		document.getElementById("pcity").innerHTML="city can't be blank";
		document.getElementById("city").style.color="#ff0000b5	";
		document.getElementById("icity").style.border="1px solid #ff0000b5";
	}
	else if(regcity.test(city)==false){
		document.getElementById("pcity").innerHTML="please enter valid city name";
		document.getElementById("city").style.color="#ff0000b5	";
		document.getElementById("icity").style.border="1px solid #ff0000b5";
		alert("Please Enter Valid city name");
	}

	if(state=='null' || state==""){
		document.getElementById("pstate").innerHTML="state can't be blank";	
		document.getElementById("state").style.color="#ff0000b5	";
		document.getElementById("istate").style.border="1px solid #ff0000b5";
	}
	else if(regstate.test(state)==false){
		document.getElementById("pstate").innerHTML="please enter valid state name";	
		document.getElementById("state").style.color="#ff0000b5	";
		document.getElementById("istate").style.border="1px solid #ff0000b5";
		alert("Please Enter Valid state name");
	}

	if(zip=='null' || zip==""){
		document.getElementById("pzip").innerHTML="zip can't be blank";	
		document.getElementById("zip").style.color="#ff0000b5	";
		document.getElementById("izip").style.border="1px solid #ff0000b5";	
	}
	else if(regzip.test(zip)==false){
		document.getElementById("pzip").innerHTML="please Enter valid zip code";	
		document.getElementById("zip").style.color="#ff0000b5	";
		document.getElementById("izip").style.border="1px solid #ff0000b5";	
		alert("Please Enter Valid zip code");
	}
	if(pwd=='null' || pwd==""){
		document.getElementById("ppwd").innerHTML="password can't be blank";	
		document.getElementById("pwd").style.color="#ff0000b5	";
		document.getElementById("ipwd").style.border="1px solid #ff0000b5";	
	}
	else if(regpwd.test(pwd)==false){
		document.getElementById("ppwd").innerHTML="please enter valid password";	
		document.getElementById("pwd").style.color="#ff0000b5	";
		document.getElementById("ipwd").style.border="1px solid #ff0000b5";	
		alert("Please Enter Valid password");
	}

	if(v_pwd=='null' || v_pwd==""){
		document.getElementById("pv_pwd").innerHTML="Re enter the password";	
		document.getElementById("v_pwd").style.color="#ff0000b5	";
		document.getElementById("iv_pwd").style.border="1px solid #ff0000b5";	
	}
	else if(regv_pwd.test(v_pwd)==false && pwd!=v_pwd){
		document.getElementById("pv_pwd").innerHTML="Missmatch password";	
		document.getElementById("v_pwd").style.color="#ff0000b5	";
		document.getElementById("iv_pwd").style.border="1px solid #ff0000b5";
		alert("password missmatch");
	}
	else{
		return;
	}
}
