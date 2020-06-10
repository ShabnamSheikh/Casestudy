

 function validate(){
    var login1=document.getElementById("login").value;
    var pass1=document.getElementById("pass").value;  
    

    function valid(log,pass,callback){
        console.log(log);
        console.log(pass);
        if((log=="admin")&&(pass=="12345"))
    {
                console.log("valid");
                 if(callback()){

        console.log("go");
     
                 }
                }
    else{
        alert("invalid ");
       
    }
    
}    
        

if(valid(login1,pass1,call1)){
    
}
else{
    return false;
}
}

       function call1(){
           window.location.href="todo.html";
           
       }
