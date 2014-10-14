function selectedTab(myId){

	if(myId=="customer")
	{
		document.getElementById("formTitle").innerHTML="Customer Sign Up";
		document.getElementById("serviceProviderSelected").id="serviceProvider";
		document.getElementById("serviceProviderImg").setAttribute("src","../assets/images/SP_icon_white.png");
		document.getElementById("customer").style.height="49px";
		document.getElementById("customerImg").setAttribute("src","../assets/images/customer_icon_dark.png")
		document.getElementById("customer").style.background="#feb300";
		document.getElementById("customerLink").style.color="#443534";

	}

	else if (myId=="serviceProvider") {
		document.getElementById("formTitle").innerHTML="Service Provider Sign Up";
		document.getElementById("customerImg").setAttribute("src","../assets/images/customer_icon_white.png");
		document.getElementById("serviceProviderImg").setAttribute("src","../assets/images/SP_icon_dark.png");
		document.getElementById("serviceProvider").id="serviceProviderSelected";
		document.getElementById("customerImg").setAttribute("src","../assets/images/customer_icon_white.png");
		document.getElementById("customer").style.height="42px";
		document.getElementById("customer").style.background="#443534";
		document.getElementById("customerLink").style.color="#ffffff";
	}


}


function validateName(){


	name = document.getElementById("name").value;
	testName = /^[A-Za-z]{3,250}$/;

	if(!(testName.test(name)) || name=="")
	{
	document.getElementById("userIcon").style.color="#b84947";
	document.getElementById("nameAlert").style.display="block";
	document.getElementById("nameTextFieldInfo").style.display="none";
	document.getElementById("errorMsgName").style.display="block"
	}

	else
	{

	document.getElementById("userIcon").style.color="#949494";
	document.getElementById("nameAlert").style.display="none";
	document.getElementById("nameTextFieldInfo").style.display="block";
	document.getElementById("errorMsgName").style.display="none";

	}
}


function validateMail(){

	mail = document.getElementById("mail").value;
	testMail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


	if(!(testMail.test(mail)) || mail=="")
	{
	document.getElementById("mailIcon").style.color="#b84947";
	document.getElementById("mailAlert").style.display="block";
	document.getElementById("mailTextFieldInfo").style.display="none";
	document.getElementById("errorMsgMail").style.display="block";
	}

	else
	{

	document.getElementById("mailIcon").style.color="#949494";
	document.getElementById("mailAlert").style.display="none";
	document.getElementById("mailTextFieldInfo").style.display="block";
	document.getElementById("errorMsgMail").style.display="none";

	}
}


function validateFirstPassword(){

	password = document.getElementById("password").value;
	confirmPassword = document.getElementById("confirmPassword").value;	

	if(password=="")
	{
		document.getElementById("lockIconOne").style.color="#b84947";
		document.getElementById("passwordAlert").style.display="block";
		document.getElementById("passwordTextFieldInfoOne").style.display="none";
		document.getElementById("errorMsgPassword").style.display="block";
	}

	else if(password!="" && confirmPassword=="")
	{
		document.getElementById("lockIconOne").style.color="#949494";
		document.getElementById("passwordAlert").style.display="none";
		document.getElementById("passwordTextFieldInfoOne").style.display="block";
		document.getElementById("errorMsgPassword").style.display="none";

	}

	else if(confirmPassword!="" && confirmPassword==password)
	{
		document.getElementById("lockIconOne").style.color="#949494";
		document.getElementById("passwordAlert").style.display="none";
		document.getElementById("passwordTextFieldInfoOne").style.display="block";
		document.getElementById("errorMsgPassword").style.display="none";

		document.getElementById("lockIconTwo").style.color="#949494";
		document.getElementById("confirmPasswordAlert").style.display="none";
		document.getElementById("passwordTextFieldInfoTwo").style.display="block";
		document.getElementById("errorMsgConfirmPassword").style.display="none";
	}

	else{

		validatePassword();
	}
}

function validatePassword(){

	password = document.getElementById("password").value;
	confirmPassword = document.getElementById("confirmPassword").value;	

	if((password!=confirmPassword) || confirmPassword=="")
	{
		document.getElementById("lockIconOne").style.color="#b84947";
		document.getElementById("passwordAlert").style.display="block";
		document.getElementById("passwordTextFieldInfoOne").style.display="none";
		document.getElementById("errorMsgPassword").style.display="block";

		document.getElementById("lockIconTwo").style.color="#b84947";
		document.getElementById("confirmPasswordAlert").style.display="block";
		document.getElementById("passwordTextFieldInfoTwo").style.display="none";
		document.getElementById("errorMsgConfirmPassword").style.display="block";

	}

	else{

		document.getElementById("lockIconOne").style.color="#949494";
		document.getElementById("passwordAlert").style.display="none";
		document.getElementById("passwordTextFieldInfoOne").style.display="block";
		document.getElementById("errorMsgPassword").style.display="none";

		document.getElementById("lockIconTwo").style.color="#949494";
		document.getElementById("confirmPasswordAlert").style.display="none";
		document.getElementById("passwordTextFieldInfoTwo").style.display="block";
		document.getElementById("errorMsgConfirmPassword").style.display="none";


	}
}


function placeHolder(id,value)
{

	if(id=="name" && value!="")
		document.getElementById("placeholderName").style.display="none";
	else if(id=="name" && value=="")
		document.getElementById("placeholderName").style.display="block";
	else if(id=="mail" && value!="")
		document.getElementById("placeholderMail").style.display="none";
	else if(id=="mail" && value=="")
		document.getElementById("placeholderMail").style.display="block";
	else if(id=="password" && value!="")
		document.getElementById("placeholderPassword").style.display="none";
	else if(id=="password" && value=="")
		document.getElementById("placeholderPassword").style.display="block";
	else if(id=="confirmPassword" && value!="")
		document.getElementById("placeholderConfirmPassword").style.display="none";
	else 
		document.getElementById("placeholderConfirmPassword").style.display="block";
}