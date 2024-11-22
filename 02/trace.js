function decypherTrace(data) {
  const dataSplitted = data.split("\n").map(line => line.trim());
  let totalSteps = 0;
  let lastLineSteps = 0;

  for (let positionList of dataSplitted) {
    if (!positionList) continue;

    const positions = positionList.split(" ").map(Number);
    let index = 0;
    let steps = 0;

    while (index >= 0 && index < positions.length) {
      let jump = positions[index];
      positions[index] += 1; // Incrementa la instrucción actual
      index += jump; // Salta a la nueva posición
      steps++; // Cuenta el paso
    }

    totalSteps += steps;
    lastLineSteps = steps; // Actualiza los pasos de la última línea
  }

  return `submit ${totalSteps}-${lastLineSteps}`;
}

// Fetch del archivo y ejecución
fetch('./trace.txt')
  .then(response => response.text())
  .then(data => {
    const result = decypherTrace(data);
    console.log(result);
  })
  .catch(error => console.error("Error leyendo el archivo:", error));
