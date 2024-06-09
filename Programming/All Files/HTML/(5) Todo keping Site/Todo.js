const inputEl = document.getElementById('items_box');
const btnEl = document.getElementById('additem');
const items_list = document.querySelector('.ul-list_container');

function addItem() {
    if(inputEl.value === "") {
        window.alert('you have to type Item!!')
    }
     else {
          let li = document.createElement("li");
          li.innerHTML = inputEl.value;
          items_list.appendChild(li);

        let Span = document.createElement("span");
        Span.style.float = 'right'
        Span.style.cursor ='pointer';
        Span.innerHTML = '❌';

        li.appendChild(Span);
        
    }
    
    inputEl.value = ""
    saveData();
}

items_list.addEventListener("click", function(e){
    if(e.target.tagName === "LI") {
        e.target.classList.toggle('checked');
        saveData()
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData()
    }
}, false);

// function saveData() {
//     localStorage.setItem("data", items_list.innerHTML);
// }
// function showTask() {
//     items_list.innerHTML = localStorage.getItem("data");
// }
// showTask();