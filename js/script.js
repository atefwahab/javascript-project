var app={

  counter:0,

	/*
	this method used to show tabs
*/
showIndex:function(x){

	var containers=document.getElementsByClassName('container');
	var index=containers[0];
	var aboutMe=containers[1];
	var contact=containers[2];
	var contribution=containers[3];
	var history=containers[4];
	var references=containers[5];


	for (var i = 0; i < containers.length; i++) {
		containers[i].style.display="none";
		
	};
	switch(x){
		case 0:
			index.style.display="block";
			x=app.counter;
			break;
		case 1:
			history.style.display="block";
			x=app.counter;
			break;
		case 2:
			contribution.style.display="block";
			x=app.counter;
			break;

		case 3:
			references.style.display="block";
			x=app.counter;
			break;

		case 4:
			aboutMe.style.display="block";
			x=app.counter;
			break;

		case 5:
			contact.style.display="block";
			x=app.counter;
			break;


	//end of switch case.
	}

	//end of showIndex method.
},



//form validation (MARWA)
validate:function()
	{
	var flag=true;
	var summary=document.getElementById("errorsummary");
	//summary.innerHTML="";
	document.getElementById("nameerror").innerHTML="";
	document.getElementById("emailerror").innerHTML="";
	document.getElementById("ageerror").innerHTML="";
	document.getElementById("gendererror").innerHTML="";
	document.getElementById("countryerror").innerHTML="";
	document.getElementById("commenterror").innerHTML="";
	var nm=document.forms[0].name.value;
	var age=document.forms[0].age.value;
	var email=document.forms[0].email.value;
	var gender=document.forms[0].gender.value;
	var country=document.forms[0].country.options[document.forms[0].country.selectedIndex].text;
	var comment=document.forms[0].textarea.value;
	var header=document.getElementById("header");
	
	//Name
	if(nm.length==0)
	{
		flag=false;
		document.getElementById("nameerror").innerHTML="  * مطلوب";
		//summary.innerHTML="Name is required";
	}
	//Email
	if(email.length==0 || email.indexOf('@')==-1 || email.indexOf('.')==-1 )
	{
		flag=false;
		document.getElementById("emailerror").innerHTML="  *مطلوب";
		//summary.innerHTML+="<br> Email is required";
	}
	//Age
	if(age.length==0 || isNaN(age))
	{
		flag=false;
		document.getElementById("ageerror").innerHTML="  *مطلوب";
		//summary.innerHTML+="<br>Age is required";
	}
	//Gender
	if(gender=="")
	{
		flag=false;
		document.getElementById("gendererror").innerHTML="  *مطلوب";
		//summary.innerHTML+="<br>Gender is required";
	}
	
	//Textarea
	if(comment.length==0)
	{
		flag=false;
		document.getElementById("commenterror").innerHTML="  *مطلوب";
	}
	
	//comment is written
	if (flag==true)
	{
	if (comment.length!=0)
		{
			var today = new Date();
			var dd = today.getDate();
			var mm = today.getMonth()+1;//January is 0!
			var yyyy = today.getFullYear();
			var hours = today.getHours();
			var ampm = hours >= 12 ? 'pm' : 'am';
			var min = today.getMinutes();
			
			if(dd<10){dd='0'+dd}
			if(mm<10){mm='0'+mm}
			var today = mm+'/'+dd+'/'+yyyy+ " " + hours + ":"+min +" "+ampm;
			header.innerHTML+=nm+" @ "+today+" says: "+"<br>"+comment+"<br><br>";
		}
	}
	
	return false;
	},

//init 
init:function()
	{
	document.onkeypress=function myfun(e){

  var b=document.activeElement.name;

   if(b!="name" && b!="email" && b!="age" && b!="gender"){
		//listener 
	  var e=window.event ;

	   if(e.charCode==110)//press char n
		{
			if(app.counter<5)
			{
			  app.counter++;
			  app.showIndex(app.counter);
  			// alert("n");
  		    }
		}
    	if(e.charCode==112)//press char p
		{
			if(app.counter>0)
			{

			  app.counter--;
			  app.showIndex(app.counter);
	
            }
		}
		
		//Marwa code
		document.forms[0].onsubmit=app.validate;
		//end of function
	}
}

		document.getElementById("indexLink").href="javascript:app.showIndex(0)";
		document.getElementById("historyLink").href="javascript:app.showIndex(1)";
		document.getElementById("contributionLink").href="javascript:app.showIndex(2)";
		document.getElementById("referencesLink").href="javascript:app.showIndex(3)";
		document.getElementById("aboutMeLink").href="javascript:app.showIndex(4)";
		document.getElementById("contactLink").href="javascript:app.showIndex(5)";	
	}
};


window.onload=app.init;