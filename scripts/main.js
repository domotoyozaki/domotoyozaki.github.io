let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/stanford-pan.jpg") {
    myImage.setAttribute("src", "images/domo-heart-cf.JPG");
  } else {
    myImage.setAttribute("src", "images/stanford-pan.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent =
      "Lauren, Domo, and " + myName + "'s Coding Adventure";
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent =
    "Lauren, Domo, and " + storedName + "'s Coding Adventure";
}

myButton.onclick = function () {
  setUserName();
};
