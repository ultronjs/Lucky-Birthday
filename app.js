var birthDate = document.getElementById("input-birthday-date");
var luckyNumber = document.getElementById("input-lucky-number");
var btnCheck = document.getElementById("btn-check");
var birthDayImg = document.getElementById("birthday-img");
var resultContainer = document.getElementsByClassName("container-result");

function compareValues(sum,luckyNumber){
  var img = document.createElement("img");
  var heading = document.createElement("h2");  
  birthDayImg.remove();
  if(sum % luckyNumber === 0){
    if (document.getElementById("notLucky-img") != null) {
        document.getElementById("notLucky-img").remove();
        document.getElementById("result-heading").remove();
    }      
    if (document.getElementById("celebration-img") != null) {
        document.getElementById("celebration-img").remove();
        document.getElementById("result-heading").remove();
    }      
    console.log("Your BirthDay is Lucky")
    img.setAttribute("src", "./images/celebration.png");
    img.setAttribute("id", "celebration-img");
    heading.setAttribute("id", "result-heading");
    resultContainer[0].appendChild(heading)
    heading.innerHTML = "Congrats!!! 🎉 Your BirthDay is Lucky";
  }else{
  if (document.getElementById("celebration-img") != null) {
    document.getElementById("celebration-img").remove();
    document.getElementById("result-heading").remove();
  }
  if (document.getElementById("notLucky-img") != null) {
    document.getElementById("notLucky-img").remove();
    document.getElementById("result-heading").remove();
  }              
  console.log("Your BirthDay is not Lucky");
  img.setAttribute("id", "notLucky-img");
  img.setAttribute("src", "./images/notLucky.png");
  heading.setAttribute("id", "result-heading");
  resultContainer[0].appendChild(heading);
  heading.innerHTML = "Sorry 😥 Your BirthDay is not Lucky";
  }
  resultContainer[0].appendChild(img);
}

function checkBirthDateIsLucky(){
  const dob = birthDate.value;
  const sum = calculateSum(dob);
  compareValues(sum,luckyNumber.value)
}

function calculateSum(dob){
  dob = dob.replaceAll("-","")
  let sum = 0;
  for(let index = 0;index<dob.length;index++){
    sum = sum + Number(dob.charAt(index))
  }
  return sum;
}


btnCheck.addEventListener("click", function(){
    if(birthDate.value === ""){
        alert("Please Enter your BirthDay to Continue")
    }
    else if (luckyNumber.value === "") {
        alert("Please Enter your Lucky Number to Continue");
    }
    else{
      checkBirthDateIsLucky();
    }
})