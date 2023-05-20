function myfunc() {
        let num1 = parseInt(document.getElementById("num1").value);
        let num2 = parseInt(document.getElementById("num2").value);
        let num3 = parseInt(document.getElementById("num3").value);

        if (num1 >= num2 && num1 >= num3) {
                document.getElementB
                document.getElementById("res").innerHTML = num1 + " is the largest";
        }
        else if (num2 >= num1 && num2 >= num3) {
                document.getElementById("res").innerHTML = num2 + " is the largest";
        }
        else if (num3 >= num1 && num3 >= num2) {
                document.getElementById("res").innerHTML = num3 + " is the largest";
        }
        
}
function myfunc2() {
        let num1 = parseInt(document.getElementById("num1").value);
        let num2 = parseInt(document.getElementById("num2").value);
        let num3 = parseInt(document.getElementById("num3").value);
        if ((num1 < num2) && (num1 < num3)){
                document.getElementById("res").innerHTML = num1 + " is the smallest";
        }
        else if (num2 < num3)
        {
                document.getElementById("res").innerHTML = num2 + " is the smallest";
        }
        else
        {
                document.getElementById("res").innerHTML = num3 + " is the smallest";
        }    
}
 function minMax(){
         let num1 = parseInt(document.getElementById("num1").value);
         let num2 = parseInt(document.getElementById("num2").value);
         let num3 = parseInt(document.getElementById("num3").value);
         let min = num1
         let max = num1
         if (num2>num1 && num2>num3){
                 max=num2
         }
         if (num2>num1 && num2>num3){
                 max=num2
       }
       if (num3>num1 && num2>num3){
               max=num3
        }
         if (num3>num1 && num3>num2){
               max=num3
       }  
document.getElementById("res").innerHTML =min+" Is the smallest";
document.getElementById("res2").innerHTML =max +" Is the largest";
 }
//  using MathLibrary
// function minMax(){
//         let num1 = parseInt(document.getElementById("num1").value);
//         let num2 = parseInt(document.getElementById("num2").value);
//         let num3 = parseInt(document.getElementById("num3").value);
// let min = Math.min(num1,num2,num3);
// let max = Math.max(num1,num2,num3);
// document.getElementById("res").innerHTML =min+" Is the Largest";
// document.getElementById("res2").innerHTML =max +" Is the smallest";
// }
