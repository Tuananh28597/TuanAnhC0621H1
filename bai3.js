let arr = ["a", "o", "e", "i", "u"];

function numToStr() {
    let inputString = document.getElementById("string").value;
    let check = false;
    let count = 0;
    for (let i = 0; i < inputString.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (inputString[i] == arr[j]) {
                check = true;
                count++;
            }

        }

    }
    if(check==true){
        alert("chuoi co ki tu nguyen am la" + count)
    }else{
        alert("chuoi khong co ki tu nguyen am")
    }
    return check;
}