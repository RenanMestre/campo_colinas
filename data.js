function salvarData() {
    var inputData = document.getElementById("dataInput").value;
    localStorage.setItem("dataRecente", inputData);
    alert("Data salva!");
  }

  window.onload = function() {
    var dataArmazenada = localStorage.getItem("dataRecente");
    if (dataArmazenada !== null) {
      document.getElementById("dataInput").value = dataArmazenada;
    }
  }
  
  