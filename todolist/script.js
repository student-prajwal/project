const inputbox = document.getElementById("inputbox");
const list = document.getElementById("list");

function addtask(){
    if(inputbox.value===''){
        alert("write something!")
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        list.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputbox.value="";
    saveData();
}
list.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);


function saveData(){
    localStorage.setItem("data",list.innerHTML);
}


function showtask(){
    list.innerHTML=localStorage.getItem("data");
}
showtask();