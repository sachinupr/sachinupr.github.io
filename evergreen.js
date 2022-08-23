

var count=1;
function funny(control)
{
	if(count<=15)
	{
	  if(count%2==0)
	   {
	   document.getElementById(control.id).innerHTML="Sachin";  
	   count++;
	   }
      else{
      document.getElementById(control.id).innerHTML="Other";   
      count++;
      }

       if(win() == true)
       {
     	alert("Sachin is Winner");
     	reset();
     	count=1;
       }

    }     
    else
    { 
    	alert("Other's has won the game");
    	reset();
    	count=1; 
    } 
} 
function win()
{
	if(document.getElementById("a").innerHTML!="" && document.getElementById("b").innerHTML!="" &&
		document.getElementById("c").innerHTML!="" && document.getElementById("a").innerHTML=="Sachin"
		&& document.getElementById("b").innerHTML=="Sachin"  &&  
		document.getElementById("c").innerHTML=="Sachin")
	{
		return true;
	}
	else if(document.getElementById("f").innerHTML!="" && document.getElementById("g").innerHTML!="" &&
		document.getElementById("h").innerHTML!="" && document.getElementById("f").innerHTML=="Sachin"
		&& document.getElementById("g").innerHTML=="Sachin"
	    && document.getElementById("h").innerHTML=="Sachin")
	{
		return true;
	}
	else if(document.getElementById("c").innerHTML!="" && document.getElementById("d").innerHTML!="" &&
		document.getElementById("e").innerHTML!="" && document.getElementById("c").innerHTML=="Sachin"
		&&document.getElementById("d").innerHTML=="Sachin" &&
	    document.getElementById("e").innerHTML=="Sachin")
	{
		return true;
	}
	else if(document.getElementById("h").innerHTML!="" && document.getElementById("i").innerHTML!="" &&
		document.getElementById("j").innerHTML!="" && document.getElementById("h").innerHTML=="Sachin"&&
		document.getElementById("i").innerHTML=="Sachin" &&
	    document.getElementById("j").innerHTML=="Sachin")
	{
		return true;
	}
	else if(document.getElementById("a").innerHTML!="" && document.getElementById("f").innerHTML!="" &&
		document.getElementById("k").innerHTML!="" && 
		document.getElementById("a").innerHTML=="Sachin"&&
		document.getElementById("f").innerHTML=="Sachin" &&
	    document.getElementById("k").innerHTML=="Sachin")
	{
		return true;
	}
	else if(document.getElementById("c").innerHTML!="" && document.getElementById("h").innerHTML!="" &&
		document.getElementById("m").innerHTML!="" &&
		document.getElementById("c").innerHTML=="Sachin"&&
		document.getElementById("h").innerHTML=="Sachin" &&
	    document.getElementById("m").innerHTML=="Sachin")
	{
		return true;
	}
	else if(document.getElementById("e").innerHTML!="" && document.getElementById("j").innerHTML!="" &&
		document.getElementById("o").innerHTML!="" &&
		 document.getElementById("e").innerHTML=="Sachin" && 
		document.getElementById("j").innerHTML=="Sachin" &&
	    document.getElementById("o").innerHTML=="Sachin")
	{
		return true;
	}
		else if(document.getElementById("k").innerHTML!="" && document.getElementById("l").innerHTML!="" &&
		document.getElementById("m").innerHTML!="" && document.getElementById("k").innerHTML=="Sachin"
		&& document.getElementById("l").innerHTML=="Sachin"
	    && document.getElementById("m").innerHTML=="Sachin")
	{
		return true;
	}
	else if(document.getElementById("m").innerHTML!="" && document.getElementById("n").innerHTML!="" &&
		document.getElementById("o").innerHTML!="" && document.getElementById("m").innerHTML=="Sachin"
		&&document.getElementById("n").innerHTML=="Sachin" &&
	    document.getElementById("o").innerHTML=="Sachin")
	{
		return true;
	}

	

}
function reset()
{
	document.getElementById("a").innerHTML="";
	document.getElementById("b").innerHTML="";
	document.getElementById("c").innerHTML="";
	document.getElementById("d").innerHTML="";
	document.getElementById("e").innerHTML="";
	document.getElementById("f").innerHTML="";
	document.getElementById("g").innerHTML="";
	document.getElementById("h").innerHTML="";
	document.getElementById("i").innerHTML="";
	document.getElementById("j").innerHTML="";
	document.getElementById("k").innerHTML="";
	document.getElementById("l").innerHTML="";
	document.getElementById("m").innerHTML="";
	document.getElementById("n").innerHTML="";
	document.getElementById("o").innerHTML="";

}

             







