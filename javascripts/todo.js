

function getTasks() {
    return fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json());
}

function displayTasks(tasks) {
    const tableBody = document.querySelector('#tasksTable tbody');
    // Clear existing table rows
    tableBody.innerHTML = '';
    // Counter to track the number of checked checkboxes
    let checkedCount = 0;
    // Iterate over each task and generate table rows
    tasks.forEach(task => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${task.title}</td>
            <td>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault_${task.id}">
                    <label class="form-check-label" for="flexCheckDefault_${task.id}">
                    </label>
                </div>
            </td>
        `;
        tableBody.appendChild(row);
        
        // Add event listener to checkbox
        const checkbox = row.querySelector(`#flexCheckDefault_${task.id}`);
        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                checkedCount++;
                if (checkedCount === 5) {
                    alert('You have checked 5 lists');
                }
            } else {
                checkedCount--;
            }
            // Disable checkbox when checked
            checkbox.disabled = checkbox.checked;
        });
    });
}

function main() {
    getTasks()
        .then(displayTasks)
        .catch(error => {
            console.error('Error:', error);
        });
}

main();

function logout(event) {
    event.preventDefault();
    window.location.href = '../views/login.html'; // Redirect to home page
}
