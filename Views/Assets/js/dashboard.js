const graficoOcupacion = document.getElementById("graficoOcupacion");
const grafico = new Chart(graficoOcupacion, {
    type: "bar",
    data: {
        labels:["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
        datasets:[{
            label: "Ocupación del hotel (%)",
            data: [45, 60, 75, 55, 80, 90]
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                max:100
            }
        }
    }
});
const graficoIngresos = document.getElementById("graficoIngresos");
const ingresos  = new Chart(graficoIngresos, {
    type: "bar",
    data: {
        labels: ["Temporada baja", "Temporada media", "Temporada alta"],
        datasets: [{
            label: "Ingresos del hotel (₡)",
            data: [1500000, 2500000, 4000000],
            backgroundColor: ["#ffc107", "#17a2b8", "#28a745"]
        }]
    }
});
const graficoReservas = document.getElementById("graficoReservas");

const reservas = new Chart(graficoReservas, {
    type: "pie",
    data: {
        labels: [
            "Habitación Perezoso",
            "Cabaña del Bosque",
            "Suite Pura Vida"
        ],
        datasets: [{
            label: "Cantidad de reservas",
            data: [25, 45, 30],
            backgroundColor: [
                "#28a745",
                "#17a2b8",
                "#ffc107"
            ]
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true
    }
});
const tablaReservas = new DataTable("#tablaReservas", {
    language: {
        url: "https://cdn.datatables.net/plug-ins/2.1.8/i18n/es-ES.json"
    }
});