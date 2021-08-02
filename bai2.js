findNum()

function findNum() {
    let arr = [1, 2, 3, 4, 5, 6];
    let sum = parseInt(prompt("Nhập số bất kì"))
    for (let i = 0; i < arr.length; i++) {
        if (sum == arr[i]) {
            alert(sum + "có nằm trong mảng arr va vi tri la" + i);
            break;
        }
    }
}
