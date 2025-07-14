document.addEventListener("DOMContentLoaded", () => {
    const mallaTable = document.getElementById("malla");

    // Ejemplo de datos para los semestres
    const curriculumData = [
        ['Marco Legal', 'Gestión de Riesgos', 'Física Aplicada'],
        ['Legislación', 'Riesgos Psicosociales', 'Física Química'],
        ['Higiene Industrial', 'Riesgos Ergonómicos', 'Psicología'],
        ['Prevención de Riesgos', 'Riesgos Fuentes Energéticas', 'Control de Emergencias'],
        // Agregar más filas según los semestres
    ];

    // Función para crear la tabla
    function generateTable() {
        let tableContent = '';
        curriculumData.forEach((row, index) => {
            tableContent += `<tr>`;
            row.forEach((cell) => {
                tableContent += `<td onclick="showCourseDetails('${cell}')">${cell}</td>`;
            });
            tableContent += `</tr>`;
        });
        mallaTable.innerHTML = tableContent;
    }

    // Función para mostrar detalles de la asignatura
    window.showCourseDetails = (courseName) => {
        alert(`Detalles de la asignatura: ${courseName}`);
    };

    generateTable();
});
