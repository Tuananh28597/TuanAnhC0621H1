let a = 5;
let b = 8;
if (a == 0) {
    if (b == 0) {
        alert("Phương trình có vô số nghiệm");
    } else {
        alert("phương trình vô nghiệm")
    }
} else {
    alert("Phương trình có một nghiệm là x =" + (-b / a));
}