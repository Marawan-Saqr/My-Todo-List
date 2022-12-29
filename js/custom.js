//Variables Set
let inputData = document.getElementById("inputData");
let counterInput = document.getElementById("counterInput");
let btnAdd = document.getElementById("btnAdd");
let noTasks = document.getElementById("no-tasks");
let tasks = document.getElementById("tasks");
let sure = document.getElementById("sure");
let yesBtn = document.getElementById("yes");
let noBtn = document.getElementById("no");

//btnAdd Function add task to array
btnAdd.onclick = function () {
  if (inputData.value.length < 3 || inputData.value.length > 20) {
    if (inputData.value === ""){
      alert("You can't enter an empty task");
      counterInput.style.color = "black";
    } else{
      alert("Your task at least must be equal 3 characters and less than or equal 20 characters");
    }
  } else {
    let data = inputData.value;
    noTasks.classList.add("none");
    let newData = document.createElement("div");
    let btnDelete = document.createElement("button");
    btnDelete.classList = "delete btn btn-danger";
    btnDelete.textContent = "Delete";
    let btnCheck = document.createElement("button");
    btnCheck.classList = "btn btn-info";
    btnCheck.textContent = "Done";
    newData.classList = "alert alert-info";
    newData.append(data,btnDelete, btnCheck);
    tasks.append(newData);
    inputData.value = "";
    counterInput.value = 0;
  }
};

//Counter Function
inputData.oninput = function counter () {
  counterInput.value = inputData.value.length;
  if (inputData.value.length < 3) {
    counterInput.style.color = "red";
  } else if (inputData.value.length > 20) {
    counterInput.style.color = "red";
  } else {
    counterInput.style.color = "green";
  }
};

//Counter color return to default function
inputData.onblur = function inputBlur () {
  counterInput.style.color = "black";
};

// Add Check Class To Task
document.addEventListener("click", function btnCheck (e){
  if (e.target.classList.contains("btn-info")) {
    e.target.parentElement.classList.toggle("check");
  }
});

//Delete Task From Array
document.addEventListener("click", function btnDelete (e){
  if (e.target.classList.contains("delete")){
    sure.classList.remove("none2");
    yesBtn.onclick = function () {
      if (yesBtn.textContent === "Delete") {
        sure.classList.add("none2");
        e.target.parentElement.remove();
        if (tasks.childElementCount === 0) {
          noTasks.classList.remove("none");
        }
      }
    }
    noBtn.onclick = function () {
      if (noBtn.textContent === "Return To Home") {
        sure.classList.add("none2");
      }
    }
  }
});


