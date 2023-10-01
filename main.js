const inpuBox = document.querySelector('#inpu-box');
const listContatiner = document.querySelector('#list-container');

function addTask(){
    if(inpuBox.value === ""){
        alert("You must write something");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inpuBox.value;
        listContatiner.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inpuBox.value = "";
    saveData();
}


listContatiner.addEventListener('click', function(e){
    if(e.target.tagName == 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data",listContatiner.innerHTML);
}

function showTask(){
    listContatiner.innerHTML= localStorage.getItem("data");

}

showTask();
