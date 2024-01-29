let myImage = document.querySelector("img");
myImage.onclick = function() {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox-icon.png") {
        myImage.setAttribute("src", "images/firefox2.png");
      } else {
        myImage.setAttribute("src", "images/firefox-icon.png");
      }
}

function multiply(num1,num2) {
    let result = num1 * num2;
    return result;
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("请输入你的名字。");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = "Mozilla 酷毙了，" + myName;
    }
  }

  myButton.onclick = function () {
    setUserName();
  };