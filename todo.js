
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj1 = JSON.parse(this.responseText);
    var res1=myObj1;
    var output='';
    
    for(var i=0;i<myObj1.length;i++){
        
       if((res1[i].completed)==true)
        {
            output+=`<input id="check1" " type="checkbox" checked="checked" disabled style="";>
            <label>${res1[i].title}</label><br><hr>`;
            
            
        }
       else{
      
        output+=`<input type="checkbox" onclick="f(this)"  ><label>${res1[i].title}</label><br><hr>`;
        
       }
       
  }
 
  document.getElementById("print").innerHTML = `${output}`;
  
 // document.getElementById("print").innerHTML =" <br>";
}
};
xmlhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
xmlhttp.send();

var counter=0;

function f(val){

var promi=new Promise(function(resolve,reject){
 if (val.checked==true){
        counter=counter+1;
        console.log(counter)
        if(counter>=5){
        
        resolve("congrats!5 tasks completed!");

      }
    }
    else{
        counter=counter-1;
        console.log(counter);
      
      }
});
  promi.then(function(s){
    alert(s);
  });

}



  
      

  









