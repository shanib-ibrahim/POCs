function saveText() {
  const textInput = document.getElementById("textInput").value;
  localStorage.setItem("saveText", textInput);
  document.getElementById("textInput").value = "";
}

function retrieveText() {
  const savedText = localStorage.getItem("saveText");
  if (saveText) {
    document.getElementById("output").textContent = savedText;
  } else {
    document.getElementById("output").textContent = "No Saved Text Found";
  }
}
