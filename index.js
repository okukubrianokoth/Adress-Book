const form = document.getElementById('contact-form');
const tablebody = document.getElementById('tablebody'); 
let count = 0;

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();

    if (name && email && phone && address) {
        count++;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${count}</td>
            <td>${name}</td>
            <td>${email}</td>
            <td>${phone}</td>
            <td>${address}</td>
        `;
        tablebody.appendChild(row);
        form.reset();
    } else {
        alert('Please fill in all fields.');
    }
});
