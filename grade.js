function getToday() {
    let Grade;
    switch (Grade){
        case 0:
            Grade = "sunGrade";
            break;
        case 1:
            Grade = "MonGrade"
            break;
        case 2:
            Grade = "TuesGrade"
            break;
        case 3:
            Grade = "WednesGrade"
            break;
        case 4:
            Grade = "ThursGrade"
            break;
        case 5:
            Grade = "FriGrade"
            break;
        case 6:
            Grade = "SaturGrade"
            break;
    }
    document.getElementById("demo").innerHTML = "Today is " + Grade;
}