console.log("hello world ! ");
var arrNum = [];

document.getElementById("btnAddNum").onclick = function () {
  var num = Number(document.getElementById("number").value);
  arrNum.push(num);
  document.getElementById("spamArrNum").innerHTML = arrNum;
};

//bai1
document.querySelector("#btnSumArr").onclick = function () {
  var sumNum = 0;
  for (let i = 0; i < arrNum.length; i++) {
    sumNum += Number(arrNum[i]);
  }
  document.getElementById("sumArr").innerHTML = sumNum;
};

//bai2
document.getElementById("btnCountPosNum").onclick = function () {
  var countNum = 0;
  for (let i = 0; i < arrNum.length; i++) {
    if (arrNum[i] > 0) {
      countNum += 1;
    }
  }
  document.getElementById("soLuongSoDuong").innerHTML = countNum;
};

//bai3
document.getElementById("btnMaxNum").onclick = function () {
  var indexMax = 0;
  var maxNum = arrNum[indexMax];
  for (var i = 0; i < arrNum.length; i++) {
    if (arrNum[i] > maxNum) {
      maxNum = arrNum[i];
      indexMax = i;
    }
  }
  document.getElementById("maxNum").innerHTML = maxNum;
};

//bai4
document.getElementById("btnMinNum").onclick = function () {
  var indexMin = 0;
  var minNum = arrNum[indexMin];
  for (var index = 0; index < arrNum.length; index++) {
    if (arrNum[index] < minNum) {
      minNum = arrNum[index];
      indexMin = index;
    }
  }
  document.getElementById("minNum").innerHTML = minNum;
};

//bai5
document.getElementById("btnLastEvenNum").onclick = function () {
  var arrEven = [];
  var lastEvenNum = 0;
  for (let i = 0; i < arrNum.length; i++) {
    if (arrNum[i] % 2 == 0) {
      arrEven.push(arrNum[i]);
    }
  }
  if (arrEven.length > 0) {
    lastEvenNum += arrEven[arrEven.length - 1];
  } else {
    lastEvenNum += -1;
  }
  document.getElementById("lastEvenNum").innerHTML = lastEvenNum;
};

//bai6
function swapPosit() {
  var newArr = arrNum;
  var posit1 = document.getElementById("posit1").value;
  var posit2 = document.getElementById("posit2").value;
  if (
    posit1 > newArr.length - 1 ||
    posit2 > newArr.length - 1 ||
    posit1 < 0 ||
    posit2 < 0
  ) {
    alert("vị trí của phần tử = thứ tự của của chính nó -1");
  } else {
    var temp = newArr[posit1];
    newArr[posit1] = newArr[posit2];
    newArr[posit2] = temp;
  }
  document.getElementById("newPosit").innerHTML = newArr;
}

//bai7
function sortNumber(arrNum) {
  var result = arrNum.sort(function (num, numTruoc) {
    return num - numTruoc;
  });
  return result;
}
document.getElementById("btnSortUp").onclick = function () {
  var output = sortNumber(arrNum);
  document.getElementById("increase").innerHTML = output;
};

//bai8

document.getElementById("btnTimSNT").onclick = function () {
  var sntDauTien = 0;
  var arrSNT = [];

  for (let i = 0; i < arrNum.length; i++) {
    if (arrNum[i] === 2 || arrNum[i] === 3 || arrNum[i] === 5) {
      arrSNT.push(arrNum[i]);
    } else if (
      arrNum[i] > 0 &&
      arrNum[i] > 2 &&
      arrNum[i] % 3 !== 0 &&
      arrNum[i] % 5 !== 0 &&
      arrNum[i] % 2 !== 0
    ) {
      arrSNT.push(arrNum[i]);
    }
  }
  if (arrSNT.length === 0) {
    sntDauTien += -1;
  } else {
    sntDauTien += arrSNT[0];
  }

  document.getElementById("sntDauTien").innerHTML = sntDauTien;
};

//bai9
document.getElementById("btnTimSoNguyen").onclick = function () {
  var soLuongSoNguyen = 0;
  for (i = 0; i < arrNum.length; i++) {
    if (Number.isInteger(arrNum[i])) {
      soLuongSoNguyen += 1;
    }
  }
  document.getElementById("soLuongSoNguyen").innerHTML = soLuongSoNguyen;
};

//bai10
document.getElementById("btnSoSanhAmDuong").onclick = function () {
  var soDuong = 0;
  var soAm = 0;
  var text = "";
  for (let i = 0; i < arrNum.length; i++) {
    if (arrNum[i] > 0) {
      soDuong += 1;
    } else {
      soAm += 1;
    }
  }
  if (soDuong > soAm) {
    text += "Số dương nhiều hơn số âm";
  } else if (soDuong < soAm) {
    text += "Số dương ít hơn số âm";
  } else {
    text += "Số dương bằng số âm";
  }
  document.getElementById("soSanh").innerHTML = text;
};
