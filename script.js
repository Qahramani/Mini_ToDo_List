const inputBox = document.getElementById("input-text");
const listContainer = document.getElementById("list-container");

function AddTask(){
      if(inputBox.value === ''){
        alert("You must write something");
      }
      else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let button = document.createElement("button");
        button.innerHTML = "Delete";
        li.appendChild(button);
      }
      inputBox.value = "";
      SaveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        SaveData();
    }
    else if(e.target.tagName === "BUTTON"){
        e.target.parentElement.remove();
        SaveData();
    }
}, false);


function SaveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function ShowTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}



ShowTask()