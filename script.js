// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  
  const email = document.getElementById("email").value;
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;
  const feedback = document.getElementById("formFeedback");

  if (!email.includes("@") || !name || !message) {
    feedback.textContent = "Please enter valid details.";
    feedback.style.color = "red";
  } else {
    feedback.textContent = "Form submitted successfully!";
    feedback.style.color = "green";
    this.reset();
  }
});

// To-Do List
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");
  li.innerHTML = ${taskText} <button onclick="removeTask(this)">Remove</button>;
  document.getElementById("taskList").appendChild(li);

  taskInput.value = "";
}

function removeTask(button) {
  const li = button.parentElement;
  li.remove();
}