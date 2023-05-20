function calculateGrade(mark) {
    var grade;
  
    switch (true) {
      case mark >= 95:
        grade = 'A';
        break;
      case mark >= 90:
        grade = 'A-';
        break;
      case mark >= 85:
        grade = 'B+';
        break;
      case mark >= 80:
        grade = 'B';
        break;
      case mark >= 75:
        grade = 'B-';
        break;
      case mark >= 70:
        grade = 'C+';
        break;
      case mark >= 65:
        grade = 'C';
        break;
      case mark >= 60:
        grade = 'C-';
        break;
      case mark >= 55:
        grade = 'D+';
        break;
      case mark >= 50:
        grade = 'D';
        break;
      default:
        grade = 'F';
    }
  
    return grade;
  }
  
  function DisplayGrade() {
    var name = document.getElementById("nameInput").value;
    var mark = parseFloat(document.getElementById("markInput").value);
    var grade = calculateGrade(mark);
    document.getElementById("demo").innerText = "Name: " + name + "\nMark: " + mark + "\nGrade: " + grade;
  }
  