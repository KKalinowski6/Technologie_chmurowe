const text = document.querySelector("#text");

async function logJSONData() {
    const response = await fetch("http://localhost:8080");
    const jsonData = await response.json();
    text.innerHTML = jsonData
  }
  