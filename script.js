// Detectar clic en asignaturas para mostrar detalles
document.querySelectorAll('.course').forEach(course => {
    course.addEventListener('click', function() {
        alert(`Has seleccionado: ${course.textContent}`);
    });
});

// Detectar clic en los semestres
document.querySelectorAll('.semester').forEach(semester => {
    semester.addEventListener('click', function() {
        alert(`Has seleccionado el semestre: ${semester.textContent}`);
    });
});

// Certificaciones
document.querySelectorAll('.certification').forEach(certification => {
    certification.addEventListener('click', function() {
        alert(`Certificación seleccionada: ${certification.textContent}`);
    });
});
