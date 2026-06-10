const taskInput =
document.getElementById("taskInput");

const taskList =
document.getElementById("taskList");

const taskCount =
document.getElementById("taskCount");

let count = 0;

function updateCount(){
taskCount.innerText =
`${count} Task${count !== 1 ? 's' : ''}`;
}

function addTask(){

const text = taskInput.value.trim();

if(text === ""){
alert("Enter a task");
return;
}

const li =
document.createElement("li");

li.className = "task";

li.innerHTML = `

<div class="left">

<input type="checkbox">

<span>${text}</span>

</div>

<button class="delete">
<i class="fa-solid fa-trash"></i>
</button>

`;

const checkbox =
li.querySelector("input");

const taskText =
li.querySelector("span");

checkbox.addEventListener("change",()=>{

taskText.classList.toggle(
"completed"
);

});

li.querySelector(".delete")
.addEventListener("click",()=>{

li.remove();
count--;
updateCount();

});

taskList.appendChild(li);

taskInput.value = "";

count++;
updateCount();
}

updateCount();
const menuItems = document.querySelectorAll(".sidebar li");

menuItems.forEach(item => {
    item.addEventListener("click", () => {

        menuItems.forEach(i => {
            i.classList.remove("active");
        });

        item.classList.add("active");
    });
});