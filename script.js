
 
        function addTask(){
const n=document.getElementById("el1");
const input=n.value.trim();

if(input==""){
  alert("No task entered, Please enter task!");
  return;

}
const newTask=document.createElement("li");
newTask.textContent=input; //this writes the content in text
 newTask.innerHTML = `<span class="emoji">📝</span> ${input}`
 newTask.style.fontSize="large";

 //creating a delete button for the app
 const deletebtn=document.createElement("btn");
 deletebtn.textContent = "🗑️";
deletebtn.className="deletebtn";  //for styling 

//now adding the functionality
deletebtn.addEventListener("click", function(){
  newTask.remove();
});
//append the delete button to li
  newTask.appendChild(deletebtn);


document.getElementById("taskList").appendChild(newTask); //this adds the task to the list

n.value="";  //this empties the form 


}


