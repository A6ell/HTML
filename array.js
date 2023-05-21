function mycars(){
  
    const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
    
    let text = "";
    var el = document.getElementById("table");
    var tr = table.appendchild("tr");
    var td = tr.appendchild("td");
    for (let i = 0; i < cars.length; i++) {
      text += cars[i] + "<br>";
      document.getElementById("demo").innerHTML = text;
    }
    
    
}