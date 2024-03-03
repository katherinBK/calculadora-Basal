function calcularHidratacion() {
    const pesoInput = document.getElementById("peso");
    const peso = parseFloat(pesoInput.value);
  
    let volumenDiario = 0;
    let mantenimiento = 0;
    let mmMedioMantenimiento = 0;
  
    if (peso <= 30) {
      if (peso <= 10) {
        volumenDiario = peso * 100;
      } else if (peso <= 20) {
        volumenDiario = 1000 + (peso - 10) * 50;
      } else {
        volumenDiario = 1000 + 500 + (peso - 20) * 20;
      }
  
      mantenimiento = volumenDiario / 24;
      mmMedioMantenimiento = mantenimiento * 1.5;
    } else {
      const superficieCorporal = ((peso * 4) + 7) / (peso + 90);
      volumenDiario = superficieCorporal * 1500; 
      mantenimiento = volumenDiario / 24;
      mmMedioMantenimiento = mantenimiento * 1.5;
    }
  
    document.getElementById("flu").textContent = mantenimiento.toFixed(2) + " cc/hr";
    document.getElementById("man").textContent = "m+m/2: " + mmMedioMantenimiento.toFixed(2) + " cc/hr";
  }
  
  const botonCalcular = document.getElementById("calcular");
  
  botonCalcular.addEventListener("click", function () {
    const pesoInput = document.getElementById("peso");
    const error = document.getElementById("error");
  
    if (pesoInput.value === "" || isNaN(parseFloat(pesoInput.value))) {
      error.style.display = "block"; 
    } else {
      error.style.display = "none"; 
      calcularHidratacion(); 
    }
  });
  
  