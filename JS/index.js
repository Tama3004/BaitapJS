// input-1
var nArray = [];
function inputN() {
  var number = document.querySelector("#number").value * 1;
  nArray.push(number);
  console.log(nArray);
  var arNumber = document.getElementById("arrayNumbers");
  arNumber.innerText = nArray;
}
// 1
function sumBtn() {
  var sum = 0;
  for (var i = 0; i < nArray.length; i++) {
    if (nArray[i] > 0) {
      sum += nArray[i];
    }
  }
  var sumArr = document.getElementById("sumArray");
  sumArr.innerText = sum;
}
// 2
function countN() {
  var count = 0;
  for (var i = 0; i < nArray.length; i++) {
    if (nArray[i] > 0) {
      count++;
    }
  }
  var Cnumber = document.getElementById("resultCountPositiveNumber");
  Cnumber.innerText = count;
}
// 3
function minNum() {
  var minNumber = nArray[0];
  for (var i = 0; i < nArray.length; i++) {
    if (nArray[i] < minNumber) {
      minNumber = nArray[i];
    }
  }
  var Mnumber = document.getElementById("resultMinNumber");
  Mnumber.innerText = minNumber;
}
// 4
function FminN() {
  var FminNumber = nArray[0];
  for (var i = 0; i < nArray.length; i++) {
    if (nArray[i] < FminNumber && nArray[i] > 0) {
      FminNumber = nArray[i];
    }
  }
  var Fnumber = document.getElementById("resultMinPositiveNumber");
  Fnumber.innerText = FminNumber;
}
// 5
function endCnumber() {
  var endC = 0;
  for (var i = nArray.length-1; i >= 0 ; i--) {
    if (nArray[i] % 2 == 0) {
      endC = nArray[i];
      break;
    } else {
      endC = -1;
    }
  }
  var endChan = document.getElementById("endChanNum");
  endChan.innerText = endC;
}
// 6
function doicho() {
  var viTriNum = document.querySelector("#numberC1").value * 1;
  var viTriDoi = document.querySelector("#numberC2").value * 1;
  var doivitri = nArray[viTriNum];
  nArray[viTriNum] = nArray[viTriDoi];
  nArray[viTriDoi] = doivitri;
  var doicho = document.getElementById("doicho");
  doicho.innerText = nArray;
}
// 7
function tangdan() {
  nArray.sort(function (a, b) {
    return a - b;
  });
  document.getElementById("sapxep").innerText = nArray;
}
// 8
function isPrime(num){
  if (num <= 1) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
function findFirstPrime() {
  for (var i = 0; i < nArray.length; i++) {
    if (isPrime(nArray[i])) {
      document.getElementById("timNT").innerText = nArray[i];
      return nArray[i];
    }
  }
  document.getElementById("timNT").innerText = -1;
}
// input-2
// 9
var numArr2 = [];
function inputN2(){
  var number = document.getElementById('number2').value*1
  numArr2.push(number);
  document.getElementById('outputN2').innerText = numArr2;
}
function countN2(){
  var count = 0;
  for (var i = 0; i < numArr2.length; i++){
    if(Number.isInteger(numArr2[i])){
      count++;
    }
  }
  document.getElementById('result2').innerText = count;
}
// 10
function sosanh(){
  var countDuong = 0;
  var countAm = 0;
  for(var i = 0; i < nArray.length; i++){
    if(nArray[i]>0){
      countDuong++;
    }
    else{
      countAm++;
    }
  }
  if(countDuong > countAm){
    document.getElementById('ketquaSS').innerHTML = `SL duong > am`
  }
  else if(countDuong < countAm){
    document.getElementById('ketquaSS').innerHTML = `SL am > duong`
  }
  else{
    document.getElementById('ketquaSS').innerHTML = `SL am = duong`
  }
}
