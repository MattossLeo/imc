
// Calculo
function calular() {
  var kilos = document.getElementById('kilos').value
  var metros = document.getElementById('metros').value
  let sexo = document.getElementById("sexo").value;
  console.log(sexo, kilos, metros);

  if (kilos === "" || metros === "" || sexo === "") {
    alert("Erro, sem valores");
    return;
  }
  var imcData = {
    peso: kilos,
    altura: metros,
    sexo: sexo,
  };
  fetch("http://localhost:3002/imc", {
    method: "POST",
    body: JSON.stringify(imcData),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((json) => teste(json));
    
    
      formulario = "";
      sexo = "";
}

// Resultado

function teste(imc){
    let value = '';
    imc.forEach((post) => {
        value = `${post.imc.toFixed(2)}`;
        console.log(post)
    });
    document.getElementById('resultado').innerHTML = value;
  // });
}
