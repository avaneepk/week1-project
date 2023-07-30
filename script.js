document.getElementById("my-button").addEventListener("click", function () {
  console.log("Hello, World!");

  document.getElementById("heading").innerText = "My notebook";
});

document.getElementById("add-data").addEventListener("click", function () {
  const ul = document.getElementById("my-list");
  const li = document.createElement("li");
  const textArea = document.getElementById("text-area");
  li.innerText = textArea.value;
  ul.appendChild(li);
});
