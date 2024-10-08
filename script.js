// Datos de ejemplo para Censo 2010
const census2010Data = {
    pcNEA: [26.0, 29.6, 32.2, 28.4], // Formosa, Corrientes, Chaco, Misiones
    pcDept: [6.1, 8.8, 12.2, 13.9, 15.4, 16.4, 18.5, 21.9, 37.0], // Algunos departamentos de Formosa
    celNEA: [81.2, 84.1, 85.6, 82.6], // Celulares en NEA
    celDept: [42.2, 33.0, 79.4, 82.1, 76.6, 64.2, 80.1, 78.0, 89.3] // Celulares en departamentos de Formosa
};

// Datos de ejemplo para Censo 2022
const census2022Data = {
    pcNEA: [38.1, 46.4, 46.4, 41.6], // Formosa, Corrientes, Chaco, Misiones
    pcDept: [16.6, 24.4, 24.2, 26.4, 26.6, 27.6, 30.7, 34.4, 50.0], // Algunos departamentos de Formosa
    celNEA: [80.7, 83.3, 84.7, 86.5], // Celulares en NEA
    celDept: [51.0, 36.9, 76.9, 77.8, 71.0, 69.0, 76.7, 83.1, 89.4] // Celulares en departamentos de Formosa
};

// Función para actualizar el gráfico
function updateChart(chart, data, labels) {
    chart.data.labels = labels;
    chart.data.datasets[0].data = data;
    chart.update();
}

// Gráfico Censo 2010
const census2010Ctx = document.getElementById('census2010Chart').getContext('2d');
const census2010Chart = new Chart(census2010Ctx, {
    type: 'bar',
    data: {
        labels: ['Formosa', 'Chaco', 'Corrientes', 'Misiones'],
        datasets: [{
            label: 'Porcentaje',
            data: census2010Data.pcNEA,
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Gráfico Censo 2022
const census2022Ctx = document.getElementById('census2022Chart').getContext('2d');
const census2022Chart = new Chart(census2022Ctx, {
    type: 'bar',
    data: {
        labels: ['Formosa', 'Chaco', 'Corrientes', 'Misiones'],
        datasets: [{
            label: 'Porcentaje',
            data: census2022Data.pcNEA,
            backgroundColor: 'rgba(153, 102, 255, 0.6)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Manejo de cambios en el filtro de Censo 2010
document.getElementById('filterCensus2010').addEventListener('change', function() {
    const filter = this.value;
    let labels, data;
    if (filter === 'pcNEA') {
        labels = ['Formosa', 'Corrientes', 'Chaco', 'Misiones'];
        data = census2010Data.pcNEA;
    } else if (filter === 'pcDept') {
        labels = ['Bermejo', 'Ramón Lista', 'Pilagás', 'Laishi', 'Patiño', 'Matacos', 'Pirané', 'Pilcomayo', 'Formosa'];
        data = census2010Data.pcDept;
    } else if (filter === 'celNEA') {
        labels = ['Formosa', 'Corrientes', 'Chaco', 'Misiones'];
        data = census2010Data.celNEA;
    } else {
        labels = ['Bermejo', 'Ramón Lista', 'Pilagás', 'Laishi', 'Patiño', 'Matacos', 'Pirané', 'Pilcomayo', 'Formosa'];
        data = census2010Data.celDept;
    }
    updateChart(census2010Chart, data, labels);
});

// Manejo de cambios en el filtro de Censo 2022
document.getElementById('filterCensus2022').addEventListener('change', function() {
    const filter = this.value;
    let labels, data;
    if (filter === 'pcNEA') {
        labels = ['Formosa', 'Chaco', 'Corrientes', 'Misiones'],
        data = census2022Data.pcNEA;
    } else if (filter === 'pcDept') {
        labels = ['Bermejo', 'Ramón Lista', 'Pilagás', 'Laishi', 'Patiño', 'Matacos', 'Pirané', 'Pilcomayo', 'Formosa'];
        data = census2022Data.pcDept;
    } else if (filter === 'celNEA') {
        labels = ['Formosa', 'Chaco', 'Corrientes', 'Misiones'],
        data = census2022Data.celNEA;
    } else {
        labels = ['Bermejo', 'Ramón Lista', 'Pilagás', 'Laishi', 'Patiño', 'Matacos', 'Pirané', 'Pilcomayo', 'Formosa'];
        data = census2022Data.celDept;
    }
    updateChart(census2022Chart, data, labels);
});
