

var abc=1;
var count=0;
function fill(control)
{
    if(abc<=9)
    {

      if(abc%2!=0 ){
      document.getElementById(control.id).innerHTML="X";
       }
      else{
      document.getElementById(control.id).innerHTML="0"; 
       }
      abc++;

      if(win()==true && count==0)
      {   
         alert("start");  
         count++;                   
         fun();  
      }  
      if(win() && count!=0)
      {
        alert("winner");
        fun();
      }                        

    }
    else
    {
      alert("Match Draw");
      fun();
    }
   }           


function fun()  
 {
  for(var i=1;i<=9;i++)
  {
    document.getElementById('a'+i).innerHTML="";
  }
      abc=1;
 }    


 function win()
 {
    
      if(document.getElementById('a1').innerHTML!="" && document.getElementById('a2')
       .innerHTML!="" && document.getElementById('a3').innerHTML!="" &&
       document.getElementById('a1').innerHTML ==document.getElementById('a2').innerHTML
       && document.getElementById('a2').innerHTML==document.getElementById('a3').innerHTML)       
     {
       return true;
     } 

     else if(document.getElementById('a4').innerHTML!="" && document.getElementById('a5')
       .innerHTML!="" && document.getElementById('a6').innerHTML!="" &&
       document.getElementById('a4').innerHTML ==document.getElementById('a5').innerHTML
       && document.getElementById('a5').innerHTML==document.getElementById('a6').innerHTML)
     {
      return true;
     }
            
    else if(document.getElementById("a7").innerHTML!="" && document.getElementById("a8")
       .innerHTML!="" && document.getElementById("a9").innerHTML!="" &&
       document.getElementById("a7").innerHTML ==document.getElementById("a8").innerHTML
       && document.getElementById("a8").innerHTML==document.getElementById("a9").innerHTML)
     {
      return true;
     }
        
    else if(document.getElementById("a1").innerHTML!="" && document.getElementById("a4")
       .innerHTML!="" && document.getElementById("a7").innerHTML!="" &&
       document.getElementById("a1").innerHTML ==document.getElementById("a4").innerHTML
       && document.getElementById("a4").innerHTML==document.getElementById("a7").innerHTML)
     {
      return true;
     }

    else if(document.getElementById("a2").innerHTML!="" && document.getElementById("a5")
       .innerHTML!="" && document.getElementById("a8").innerHTML!="" &&
       document.getElementById("a2").innerHTML ==document.getElementById("a5").innerHTML
       && document.getElementById("a5").innerHTML==document.getElementById("a8").innerHTML)
     {
      return true;
     }
 
       else if(document.getElementById("a3").innerHTML!="" && document.getElementById("a6")
       .innerHTML!="" && document.getElementById("a9").innerHTML!="" &&
       document.getElementById("a3").innerHTML ==document.getElementById("a6").innerHTML
       && document.getElementById("a6").innerHTML==document.getElementById("a9").innerHTML)
     {
      return true;
     }     
      else if (document.getElementById("a1").innerHTML!="" && document.getElementById("a5").innerHTML!="" 
      && document.getElementById("a9").innerHTML!="" && document.getElementById("a1").innerHTML==
      document.getElementById("a5").innerHTML && document.getElementById("a5").innerHTML== 
      document.getElementById("a9").innerHTML)
     {
      return true;
     }

     else if (document.getElementById("a3").innerHTML!="" && document.getElementById("a5").innerHTML!="" 
      && document.getElementById("a7").innerHTML!="" && document.getElementById("a3").innerHTML==
      document.getElementById("a5").innerHTML && document.getElementById("a5").innerHTML== 
      document.getElementById("a7").innerHTML)
     {
      return true;
     
     }
     else
      return false;

 }
 
