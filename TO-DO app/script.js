const inputbox= document.getElementById("input-box");
const tasks= document.getElementById("list");

function addtask(){
    if(inputbox.value.trim()===''){
        alert("You must write something!!");
    }
    else{
        let li = document.createElement("li");
        li.textContent= inputbox.value.trim();
        tasks.appendChild(li);
        let span= document.createElement("span");
        span.innerHTML='\u00d7'
        li.appendChild(span)

    }
    inputbox.value="";
    savedata();
}
tasks.addEventListener("click",function(e){
    if(e.target.tagName==='LI'){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName==='SPAN'){
            e.target.parentElement.remove();
            savedata();
    }
},false)
function savedata(){
    localStorage.setItem("data", tasks.innerHTML);
}
function showtask(){
    tasks.innerHTML= localStorage.getItem("data");
}
showtask();