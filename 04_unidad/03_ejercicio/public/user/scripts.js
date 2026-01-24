// Funciones de Modal
function openModal(id) { document.getElementById(id).style.display = "block"; }
function closeModal(id) { document.getElementById(id).style.display = "none"; }

// Cargar datos en el modal de edición
function prepareEdit(id) {
    const row = document.getElementById('row-' + id);
    document.getElementById('editUser').value = row.querySelector('.td-user').innerText;
    document.getElementById('editName').value = row.querySelector('.td-name').innerText;
    document.getElementById('editLastName').value = row.querySelector('.td-lastname').innerText;
    document.getElementById('editBirth').value = row.querySelector('.td-birth').innerText;
    openModal('modalEdit');
}

// Confirmación de eliminación
function confirmDelete(id) {
    const usuario = document.getElementById('row-' + id).querySelector('.td-user').innerText;
    if (confirm(`¿Está seguro de que desea eliminar al usuario "${usuario}"? Esta acción no se puede deshacer.`)) {
        document.getElementById('row-' + id).remove();
        alert("Registro eliminado.");
    }
}

// Buscador simple
function filterTable() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const rows = document.querySelectorAll('#userTable tbody tr');
    rows.forEach(row => {
        const userText = row.querySelector('.td-user').innerText.toLowerCase();
        row.style.display = userText.includes(query) ? '' : 'none';
    });
}

// Cerrar modales si se hace clic fuera de ellos
window.onclick = function(event) {
    if (event.target.className === 'modal') {
        event.target.style.display = "none";
    }
}
